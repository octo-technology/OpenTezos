---
id: intro_to_operation
title: Intro to operation
---

## Implicit accounts and smart contracts
Tezos has two types of addresses [1](https://opentezos.com/tezos-basics/intro_to_operation#reference): 
* The implicit account is an account that is linked to a public key. Their addresses  start with tz1, tz2, and tz3 (depending on the signature scheme) and finally the hash of the public key. They are created by a transfer operation to the account public key hash. Only implicit accounts can be registered as delegates and participate in the baking.
* The smart contract is also called ‘Originated account’ and they are created with an origination operation. Their addresses start with KT1. They don’t have a corresponding secret key. They run the Michelson code each time they receive an operation.

## Tezos operation (transaction)
An operation is a message sent from one address to another address, this message is represented as:
```
type operation = {
  amount: amount; (* amount being sent *)
  parameters: data list; (* parameters passed to the script *)
  (* counter (invoice id) to avoid repeat attacks *)
  counter: int;
  destination: contract hash;
}
```
Such an operation can be sent from a contract if signed using the manager's key or it can be sent programmatically by code executing in the contract. When the operation is received, the amount is added to the destination contract's balance and the destination contract's code is executed. This code can make use of the parameters passed to it, it can read and write the contract's storage, change the signature key and post operations to other contracts.

The role of the counter is to prevent replay attacks. An operation is only valid if the contract's counter is equal to the operation's counter. Once a operation is applied, the counter increases by one, preventing the operation from being reused.

The operation also includes the block hash of a recent block that the client considers valid. If an attacker ever succeeds in forcing a long reorganization with a fork, he will be unable to include such operations, making the fork obviously fake. This last line of defense is named TAPOS, it is a great system to prevent long reorganizations but not a very good system to prevent short term double spending.

Currently the network tezos has a speed of 40 tps (operation per second) and n operation time of 30 minutes [2](https://opentezos.com/tezos-basics/intro_to_operation#reference). The operation time is the time it takes for an operation to be considered secure. For example, bitcoin can proces 7tps and an operation time of 60 minutes. 

Actually Tezos operations are limited by a total maximum size of 512kB.

## Operation Flow 

The diagram below represents the life cycle of a operation.
![](../../static/img/tezos-basics/operation_flow.svg)
<small className="figure">FIGURE 1: Operation flow</small>

Operations are received by nodes from a client via RPC or from a network peer.

### Pre-validator
The pre-validator [3]((https://opentezos.com/tezos-basics/intro_to_operation#reference)) step that runs in the validation subsystem is responsible for deciding which operations will be added to the mempool. 

The Pre_filter function checks that enough gas required for the execution has passed and that the sender address has enough funds to pay it.

The apply function checks if the operation is in adequacy with the current step of the tezos chain.

At the post_filter fonction, a decision to add an operation to the mempool based on the result is made and propagated via advertising. The advertise function advertises by using the distributed_db’s current_head function in the advertise module.

If one error is triggered in one of these functions the operation is not added to the mempool and also not broadcasted.

### Mempool
The node maintains a memory pool (“mempool”) to keep track of not-invalid-for-sure operations. The mempool keeps track of two different kinds of operation:

* Known_valid: list of valid operations ready to be pulled in a block if requested by a baker.

* Pending: A bounded set of operations which are known to not be invalid for sure and are eligible to be broadcasted to peers. This set contains two kinds of operations:

    * branch_refused: an operation which could be valid in a different branch

    * branch_delayed: an operation which has come too soon (i.e. there’s a gap in the account counter)

Operations in the mempool are broadcasted to peers whenever the mempool is updated. The Peer Node fetches the operation from the remote peer, using the operation hash in the advertisement, this is another way for a new operation to enter in a node. All operations pass through the validation subsystem. When an operation is received by a peer, the peer node is notified of the validation result.

A valid operation lives in the mempool until it is added to a valid block of the chain which the node considers to be canonical. If the operation is not added for its time-to-live duration, the operation is removed from the mempool.

### Baking and endorsement 
The baker is free to select operations from the mempool, but they usually use a minimum fee filter. After the composition of this block, endorsers make a review to check its validity. At the end of the allotted time, the baker collects the endorsers' opinions and adds them to the block and he forges it.

### Validator
The baker sends the forged block on a node. the node processes the block validator. The apply_block function is called, the block header validation is done by using protocol parameters, and verifies all the operations.

The Block validation includes checks for errors such as too many operations, oversized operation, incorrect protocol version, unallowed validation pass, invalid fitness, unavailable protocol, and errors while applying the operation.

Details about errors encountered during the block validation can be found [here](https://gitlab.com/tezos/tezos/blob/mainnet/src/lib_shell_services/block_validator_errors.ml).

Once a block is validated and it is a candidate for the new head of the chain, it is passed to the chain validator, which checks if the fitness score of the new head is higher than the fitness score of the current head. If it is not, the block is ignored. If it is and this block replaces the current head, the chain validator then calls the prevalidator in order to flush the mempool. Finally, the new block head is advertised to the peer using the distributed_db’s Advertise module. This block becomes part of the canonical chain only if future bakers bake on top of it.

## Reference
[1] https://tezos.gitlab.io/introduction/howtouse.html#implicit-accounts-and-smart-contracts

[2] https://alephzero.org/blog/what-is-the-fastest-blockchain-and-why-analysis-of-43-blockchains/

[3] https://medium.com/tqtezos/lifecycle-of-an-operation-in-tezos-248c51038ec2

