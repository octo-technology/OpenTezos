---
id: operations
title: Operations
authors: Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez
---

This chapter introduces the notion of _Operations_ on Tezos. These are more commonly known as _Transactions_ on other blockchains and in Tezos are a **subset** of operations. On Tezos, *transactions* are transfers of tokens and smart contracts calls. A few examples of operations that are **not** transactions on Tezos: *Originations; endorsements; proposals; ballots...*

## Implicit accounts and originated accounts
Let's start by talking about the two types of addresses in Tezos [[1]](/tezos-basics/operations#references):

* An **implicit account** is linked to a **manager** (see [*General definition of a tezos smart contract*](/tezos-basics/smart-contracts#general-definition-of-a-tezos-smart-contract)), which owns the *public key*. The hash of the *public key* outputs an **address**. Depending on the chosen **D**igital **S**ignature **A**lgorithm's **e**lliptic **c**urve (see [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)), the latter starts with "**_tz1_**" (Ed25519 curve), "**_tz2_**" ([Secp256k1](https://en.bitcoin.it/wiki/Secp256k1) curve), or "**_tz3_**" (P256 curve) [[2]](/tezos-basics/operations#references).  
A *transfer* operation to the account's address creates the account itself.  
Only *implicit* accounts can be registered as *delegates* and participate in the *baking process*.

* **Smart contracts** are also called "**originated accounts**" and are created with an **origination** operation (see the [*Smart Contracts*](/tezos-basics/smart-contracts#deployment-of-a-tezos-smart-contract) chapter). They don't have a private key and public key pair. Originated accounts' addresses start with **_KT1_**.  
They run their Michelson code each time they receive a transaction.

## Tezos operations
An operation is usually a *message* sent from one address to another.

Message representation:
```js
type operation = {
  amount: amount; // amount being sent
  parameters: data list; // parameters passed to the script
  counter: int; // invoice id to avoid replay attacks
  destination: contract hash;
}
```

Example of an entrypoint call:
```json
{
	"branch": "BMXRpSqjJ9HnEeaSXj3YzM9jqB4kqDZemtJBGGqn5Sa9MepV1k7",
	"contents": [
		{
			"kind": "transaction",
			"source": "tz1YWK1gDPQx9N1Jh4JnmVre7xN6xhGGM4uC",
			"fee": "6678",
			"counter": "942780",
			"gas_limit": "63669",
			"storage_limit": "75",
			"amount": "0",
			"destination": "KT1S5hgipNSTFehZo7v81gq6fcLChbRwptqy",
			"parameters": {
				"entrypoint": "sellLand",
				"value": {
					"prim": "Pair",
					"args": [
						{"int": "100000000"},
						{"int": "11"}
					]
				}
			}
		}
	]
}
```

Example of a transaction between two **implicit** accounts:

```json
{
	"branch": "BKkwBsr6hfvj2MfaEydByALrASfCPzFBFSCs3iY7XaBLKRtwWj7",
	"contents": [
		{
			"kind": "transaction",
			"source": "tz1VAugX5LBcF4Anq1gEFr12LmsjqsCgsnPs",
			"fee": "444",
			"counter": "855452",
			"gas_limit": "1527",
			"storage_limit": "0",
			"amount": "100000000",
			"destination": "tz1YWK1gDPQx9N1Jh4JnmVre7xN6xhGGM4uC"
		}
	]
}
```

Such an operation can be sent from an implicit account (if signed using the manager's private key) or programmatically by contract code execution. When the operation is received, and if the destination's contract code execution is valid, the amount is added to the destination's contract balance. This code can make use of the arguments passed on to it. It can read and write the contract's storage or post operations to other contracts.

As the example shows, there is also a _counter_ field, whose purpose is to prevent [replay attacks](https://en.wikipedia.org/wiki/Replay_attack). An operation is only valid if the contract's _counter_ is equal to the operation's _counter_. Once an operation is applied, the _counter_ increases by one, preventing the operation from being reused.

The operation also includes the block hash ("*branch*" field) of a recent block that the client considers valid. If an attacker ever succeeds in forcing a long reorganization with a fork, he will be unable to include this operation, thereby making the attack detectable.

This last line of defence is named "*TAPOS*": a statistical detection of a *Long Range Attack* (see [*Liquid Proof of Stake*](/tezos-basics/liquid-proof-of-stake#long-range-attack) chapter) based on the fraction of moving coins. This kind of system prevents long reorganizations but is inefficient with short-term double-spending.

Currently the Tezos network on Florence can process around 100 TPS (transactions per second) or 121 TPS for Tez transfers and has an operation confirmation time of 30 minutes. This speed may vary with future protocols. Operation confirmation time is the time it takes for an operation to be considered secure. As a comparison, _Bitcoin_ can process 7 TPS and has a confirmation time of 60 minutes (6 valid blocks).

## Operation Flow

The diagram below represents the life cycle of an operation:

![](../../static/img/tezos-basics/operation_flow.svg)
<small className="figure">FIGURE 1: Life cycle of an operation</small>

Nodes receive operations from clients via RPC or from a peer in the network. Note that this is how a typical Tezos node works on protocol "*Alpha*".

### Pre-validator
The *Pre-validator*[[4]](/tezos-basics/operations#references) is an operation's validation subsystem. It decides which operation to add to the *mempool* (memory pool).

The pre-validation consists in 3 steps:

1. The **Pre_filter** step  
   Checks that there is enough provided *gas* (and if the sender's account has enough funds to pay)

2. The **Apply** step  
   Checks whether the operation is in adequacy with the current state of the Tezos chain

3. The **Post_filter** step  
   Decides whether to add the operation to the *mempool*. If yes, it broadcasts the result

If *any* of these steps triggers an error, the pre-validator doesn't add the operation to the mempool.

### Mempool
The node maintains a memory pool to keep track of "*`not-invalid-for-sure`*" operations.

There are two different kinds:

* `Known_valid`: A list of valid operations ready to go in a block

* `Pending`: A bounded set of operations eligible to broadcast. This set contains two sub-kinds of operations:

    * `branch_refused`: an operation that could be valid in a different branch.

    * `branch_delayed`: an operation that has come too soon (i.e. there's a gap in the account's counter)

Operations in the mempool are broadcasted to peers whenever the mempool is updated. A node fetches an operation from another remote peer's advertisement using the operation's hash.

A valid operation lives in the mempool until its addition to a valid block on a chain the node considers canonical (correct chain for the common history). If an operation isn't added to a block during its "*`time-to-live`*" duration, it is removed from the mempool. As long as a transaction is in the mempool, the sender's address cannot normally issue another. However, it is possible to send multiple transactions at the same time in a batch.

### Baking and endorsement 
The selected baker is free to select operations from the mempool, but he usually uses a minimum fee filter. After a block creation, endorsers check its validity. At the end of the allotted time, the selected baker collects the endorsers' results and adds them to the block.

### Validator
The selected baker then shares the created block with the network. Once received, each node starts the block validation by calling the *Apply_block* function. This function validates the block header by using the protocol parameters and verifies all the operations.

The block validation checks for errors such as too many operations, oversized operations, incorrect protocol versions, unauthorized validation passes, invalid fitness, unavailable protocols, errors while applying a transaction, and more [[5]](/tezos-basics/operations#references).

Once a block is validated and is a candidate for the new head of the chain, it arrives to the "*chain validator*" which checks if the fitness score[[6]](/tezos-basics/operations#references) of the new head is higher than the fitness score of the current one. If it is not, the block is ignored. If it is, then this block replaces the current head of the chain. The *chain validator* then calls the *pre-validator* to flush the *mempool*. Finally, the new head is advertised to the peers using the *distributed_db's Advertise module*[[7]](/tezos-basics/operations#references). Of course, this block only becomes part of the canonical chain if future bakers decide to bake on top of it.

## What have we learned so far?
In this chapter, we discovered the Tezos operations and how they are validated.

In the next "*CLI and RPC*" chapter, we will learn how to issue them with a node.

## References
[1] https://tezos.gitlab.io/introduction/howtouse.html#implicit-accounts-and-smart-contracts

[2] https://www.ocamlpro.com/2018/11/21/an-introduction-to-tezos-rpcs-signing-operations/

[4] https://medium.com/tqtezos/lifecycle-of-an-operation-in-tezos-248c51038ec2

[5] https://gitlab.com/tezos/tezos/blob/mainnet/src/lib_shell_services/block_validator_errors.ml

[6] https://tezos.gitlab.io/alpha/glossary.html?highlight=fitness#tezos

[7] https://tezos.gitlab.io/shell/validation.html#distributed-db
