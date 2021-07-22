---
id: smart-contracts
title: Smart contracts
authors: Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez
---
In this chapter, you will learn the basics of Tezos smart contracts. Their components and the workflow to deploy and use them on the Tezos *blockchain*.

## General definition of a Tezos smart contract
A smart contract is a piece of code stored on the *blockchain*. It countains a **set of instructions** and **rules** to trigger them (see the [promises](/blockchain-basics/smart-contracts#definition-of-a-smart-contract) from the "*Blockchain Basics*" module).

Once deployed (stored), it becomes **immutable**. A Tezos smart contract is deployed using an **operation** (note here the Tezos' vocabulary, we don't talk about a "transaction" for a deployment like before). This operation still requires payment of fees.

So, because we embed the instructions and the rules inside the smart contract, they are **immutable** too. Though for smart contracts, the key difference with a transfer of coins is a user *can trigger the execution of the code without modifying it. Therefore, without moving it to another operation or block like coins*. It stays where it was stored **forever**.

Tezos doesn't use an [UTXO model](https://en.wikipedia.org/wiki/Unspent_transaction_output) (no "*vaults*", see *Blockchain Basics*) but a **stateful accounts** one [[1]](/tezos-basics/smart-contracts#references).

Like in Ethereum, Tezos uses 2 types of accounts:
1. Classic accounts with a primary address, to store tez (ꜩ)
2. Smart contract accounts with an address, storing code and tez (ꜩ)

In Tezos vocabulary, "*contracts*" refers to both types in general. Actually each *contract* has a "**_manager_**". Precisely, a classic account has an "**_owner_**". If a contract has the "*spendable*" property, the manager is the entity allowed to spend funds from it.

Smart contracts can achieve different kinds of operations with coins and *other smart contracts*. They're comparable to *automatic* **sealed** food and drink dispensers from the same company:  
- Each machine has a contract saying "*Give me cryptocurrency, then I give you food or drink*" (promises)
- Each machine can have a different smart contract for various foods or drinks (see that as asset types)
- There could be another smart contract gathering the cryptocurrency total for the company (from previous smart contracts)

Each machine doesn't operate until enough currency is delivered (*Gas*). Note that the **quantities** of foods or drinks changes while their **types** can't (ever).

Of course, smart contracts like the Tezos ones go beyond this metaphor. Thanks to *transparency* and *immutability*, they allow an **agreement** to be secured between two or more parties. In this context, the concept of "[Code is Law](https://en.wikipedia.org/wiki/Lawrence_Lessig#%22Code_is_law%22)" from [_Lawrence Lessig_](https://en.wikipedia.org/wiki/Lawrence_Lessig) is very appropriate.

For example, it is common to create financial instruments like various *tokens* (usually worth a fraction of the blockchain's *coin*) with different usability and characteristics inside a multiple smart contracts system. Other more or less complex projects can propose *lending*, *stablecoins*, or *crowdfundings*.

In most cases, smart contracts remove *intermediates* and drastically reduce costs compared to classic paper contracts and their validations.

Notice that like any other, a Tezos smart contract can only run and interact with the blockchain it's stored on (Bitcoin's smart contracts are exceptions here). It can't interact with the outside world. That's where *decentralized applications* or "_Dapps_" come in because they provide interfaces for the outside world.

To build your own Dapp, please refer to the [*Build a Dapp*](/dapp) module.

## Lifecycle of a Tezos smart contract
As we saw, a smart contract can only be deployed once but can be called many times. The Tezos smart contract lifecycle steps are two:

1. Deployment
2. Interactions through calls

### Deployment of a Tezos smart contract
The deployment of a Tezos smart contract is named "**origination**".

When a smart contract is deployed, an **address** and a corresponding *persistent space* called "**storage**" are allocated to this smart contract. The smart contract address is like its *identity* and *where* it lives on the ledger. Its storage is its *usable space*.

Once deployed, anyone or *anything* can call the smart contract (e.g. other contracts) with an *operation* (in Tezos vocabulary, *transactions* are a sub-type of *operations*; see more about them in the [*Operations*](/tezos-basics/operations) chapter) sent to its address with arguments. This call triggers the execution of the set of pre-defined instructions (promises).

The origination of a Tezos smart contract must define:
* A complex **Parameter Type** in the low-level *Michelson* language  
  List or tuple of each parameter type (see more below with high-level languages)
* **Storage Type**
* **Set of instructions** in the low-level *Michelson* language

![](../../static/img/tezos-basics/tezos_smart_contract_content.svg)
<small className="figure">FIGURE 1: Content of a Tezos smart contract</small>

The CLI command "`tezos-client originate`" can be used to deploy a Tezos smart contract. Arguments are the following:
- Name of the smart contract
- Michelson script containing: 
    - Parameter Type
    - Storage Type
    - Set of instructions
- Initial storage value
- Amount of tez sent to the smart contract
- An optional address of a delegate

The command returns the newly deployed contract's address (more detail in the ["*CLI and RPC*"](/tezos-basics/cli-and-rpc) chapter).

### Code of a Tezos smart contract
The code of a smart contract is composed of Michelson instructions. Calls to the smart contract execute these instructions.

The execution of instructions results in a new storage "**state**". The instructions define how to produce this new state. The instructions may also lead to other operations, including originations of other smart contracts, and of course, transactions.

You can find the full description of the Michelson language in the [Michelson module](/michelson).

### Storage of a Tezos smart contract
During the origination, the process must specify the storage **initial state** (and type).

For more details, check out the ["*Fees and Rewards*"](/tezos-basics/economics-and-rewards) chapter.

### Call of a Tezos smart contract
A smart contract can be called by a classic account whose address starts with "**tz**" (more details in the "[*Operations*](/tezos-basics/operations)" chapter) or by a smart contract's account whose address begins with "**KT1**". The operation or transaction specifies *arguments*, that are ordered types. In the below example, we increase or decrease a value in the storage:

![](../../static/img/tezos-basics/invoke_smart_contract_wo_entrypoint.svg)
<small className="figure">FIGURE 2: Call of a smart contract triggering its code and modifying its storage's state</small>

One can use the Command Line Interface (CLI) provided by Tezos to interact with a node and make calls. The "`tezos-client`" application allows anyone to deploy and call Tezos smart contracts.

It is also possible to send requests to a node through RPC (Remote Procedure Call) via HTTP (more details in ["*CLI and RPC*"](/tezos-basics/cli-and-rpc) chapter).

## High-level languages for Tezos smart contracts implementations
Michelson is a low-level stack-based language. Therefore its adoption is quite limited because most developers won't take time to learn it. Several Michelson *compilers* have been developed to avoid this friction and led to several high-level languages closer to developers habits. For example: [*SmartPy*](/smartpy) (inspired by *Python*); [*LIGO*](/ligo) (inspired by *Camel* with a *Pascal*-like syntax); or [*Morley*](https://serokell.io/project-morley) (framework).

Depending on the high-level language used, a smart contract deployment also defines its *entrypoints* using the complex **Parameter Type**. These are special functions used to dispatch invocations of the smart contract. Each entrypoint is in charge of triggering an instruction. Below is the same example as before, abstracting the complex Parameter Type:

![](../../static/img/tezos-basics/invoke_smart_contract.svg)
<small className="figure">FIGURE 3: Call of a smart contract triggering its entrypoints, code, and modifying its storage's state</small>

Each type and position of a parameter in the list (or tupple) allows you to define an entrypoint (a function). For instance, in our example, there are two parameters, hence two types. Both types are integers (to increase or decrease a value). Because the type is the same, its position (left, right, or index number) determines which entrypoint is correct.  
It could be:
- Left type: "Increment" entrypoint
- Right type: "Decrement" entrypoint

Below is another illustration of this process:

![](../../static/img/tezos-basics/tezos_smart_contract_deploy_invoke.svg)
<small className="figure">FIGURE 4: Deployment and call of a Tezos smart contract with high-level languages.</small>

## Smart contracts versioning
You need to remember the code of a smart contract is **immutable**. Only the storage state changes. Hence, to handle smart contracts [versioning](https://en.wikipedia.org/wiki/Software_versioning) (handle new developments and versions of the smart contracts), you should think about **implementations structures** to allow transfer of information **from old contracts to new contracts**. If you don't, you risk increasing errors and costs during the transfer.

Hopefully, the above high-level languages make this kind of complex implementation easier. We will present to you two patterns to build **evolutive** smart contracts or *Dapps*.

### Lambda pattern
The Lambda pattern is based on *lambda functions*. These anonymous functions only have a mandatory *type* (function!); non-mandatory *parameters*; and non-mandatory *return values*. The idea is to exchange the **body** of a classic function with a **lambda function**. While the classic function is immutable, the lambda function is stored in the storage, therefore mutable.

Instead of simply sealing the classic function's body as an immutable structure, you make it a mutable *data* of the storage.  
In an **imaginary** high-level language syntax:

- *An entrypoint*

```d
Entrypoint_for_doSomething(p1, ... , pP) {
    doSomething(p1, ... , pP);
}
```
- *The corresponding immutable function*

```d
function doSomething(p1, ... , pP) return (v1, ... , vR) {
    storage.lambdaFunction();
}
```
- *The lambda function in the storage as a variable*

```d
lambdaFunction = function (p1, ... , pP) return (v1, ... , vR) {
    actual_instructions;
};
```

**Warnings**:  
>In this algorithmic example, almost all types are implicit, which limits the number of words. Furthermore, the syntax isn't as functional as in languages used for Tezos smart contracts (e.g. *LIGO*).

![](../../static/img/tezos-basics/lambda-pattern.svg)  
<small className="figure">FIGURE 5: <i>Lambda pattern</i> illustration.</small>

### Data-Proxy pattern

The idea of the "*Data-Proxy*" pattern is pretty simple: separate the logic from the data into different smart contracts. Instead of duplicating and transferring the data into a new smart contract, we only update the logic smart contract.

The first smart contract is the Data smart contract. It stores important data, including the address and entrypoints of the Logic smart contract. It also plays a proxy role as any request always goes through it first. It usually doesn't have a lot of functions. The mandatory functions set and retrieve its storage data (including new addresses for the new logic smart contracts).

When you need to update the logic (e.g. new features; corrections...) you only deploy a new logic smart contract and update the Data smart contract storage with the new address. See below fig. 6 for an update of the Logic smart contract from version 1.0 to 2.1.:

![](../../static/img/tezos-basics/data-proxy.svg)  
<small className="figure">FIGURE 6: <i>Data-Proxy</i> pattern illustration.</small>

Once the Data-Proxy architecture is in place, we can make the Data smart contract more dynamic with a Map structure and the Logic smart contract upgradable with a Lambda pattern.

#### Map structure
The idea is to make the Data smart contract storage more dynamic. We organize data with a "data mapping". This mapping or "map" makes a classic "Key / Value" association between two data types. What's interesting here is that it's evolutive, even in the storage. Of course, the data types are fixed, but it is possible to add or remove pairs or change a *value* associated with the same *key*.

For example, in our Data smart contract, we can define a Map with versions' numbers as keys and logic smart contracts addresses as values:

![](../../static/img/tezos-basics/map-structure-example.svg)  
<small className="figure">FIGURE 4: Map structure example.</small>

Note that even if a value or pair is deleted from a map, the blockchain ledger keeps the complete history of its state.  
In the versions' example, you can still see all versions' history (and addresses) using a block explorer.

The idea we described in this Data-Proxy pattern is actually a basic form of [modular programming](https://en.wikipedia.org/wiki/Modular_programming).

This pattern isn't limited to 2 smart contracts only. You can imagine various architectures combining various patterns. For instance, you can imagine a central Data smart contract and multiple upgradable other smart contracts revolving around it. This example implies a single point of failure in the Data smart contract, but there are other questions you should keep in mind, like access rights (to get and set data, to upgrade logic, etc.).

These patterns aren't magical and just allow more flexibility. You still need to think about the best architecture for your *dapp*. Patterns can still notably increase the deployment and *gaz* using fees.

## What have we learned so far?
In this chapter, we described the Tezos smart contract's main components and properties. We also described its lifecycle. We explained how to construct Tezos smart contracts using different patterns to make evolving *dapps* and handle efficient *versioning*.

In the next chapter, we will detail the Tezos consensus mechanism "*Liquid Proof-of-Stake*".

## References
[1] https://medium.com/nervosnetwork/my-comparison-between-the-utxo-and-account-model-821eb46691b2
