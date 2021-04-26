---
id: smart-contracts
title: Smart contracts
---
In this chapter, 

## General definition of a Tezos smart contract
A smart contract is a code stored in the *blockchain* which executes a set of pre-defined instructions (promises). Once deployed (stored), it becomes **immutable**. A smart contract is deployed using a **transaction**, so we embed spending conditions inside it, which are **immutable**. Though, for smart contracts, the key difference is a user *can trigger the execution of the code without modifying it, and without moving it to another transaction or block*. It stays where it has been stored **forever**.

Smart contracts can achieve different kinds of operations with coins and *other smart contracts*. They're comparable to *automatic* **sealed** food and drink dispensers from the same company: Each machine has a contract saying "*Give me cryptocurrency and I give you food or drink*". Each machine can have a different smart contract for different foods or drinks, and there could be another smart contract gathering the cryptocurrency total for the company. Each machine doesn't operate until enough currency is delivered (*Gas*). Note that the **quantities** of foods or drinks change while their **types** can't (ever).

Of course, smart contracts like the Tezos ones go beyond this metaphor. Thanks to *transparency* and , they allow an **agreement** to be secured between two or more parties. In this context, the concept of "[Code is Law](https://en.wikipedia.org/wiki/Lawrence_Lessig#%22Code_is_law%22)" from [_Lawrence Lessig_](https://en.wikipedia.org/wiki/Lawrence_Lessig) is very appropriate.

For example, it is common to create financial instruments like various *tokens* (usually worth a fraction of the blockchain's *coin*) with different usability and characteristics inside a multiple smart contracts system. Other more or less complex projects can propose *lending*, *stablecoins*, or *crowdfundings*.

In most cases, smart contracts remove *intermediate* and drastically reduce costs compared to classic paper contracts and their validations.

Notice that like any other, a Tezos smart contract can only run on and interact with the blockchain it's stored. It can't interact with the outside world. That's where *decentralized applications* or "_Dapps_" come in.

To build your own Dapp, please refer to the [Build a Dapp Module](/dapp).

## Lifecycle of a Tezos smart contract
As we saw, a smart contract can only be deployed once but can be called many times.

### Deployment of a Tezos smart contract
The deployment of a Tezos smart contract is named **origination**.

When a smart contract is deployed, an **address** and a corresponding *persistent space* called **storage** are allocated to this smart contract. The smart contract's address is like its *identity* and *where* it lives on the ledger, while its storage is its *usable space* inside the ledger.

Once deployed, the smart contract can be called by anyone or *anything* with a transaction sent to its address. This triggers the execution of the set of pre-defined instructions (promises).

The origination of a Tezos smart contract must define its:
* Entrypoints, which are *endpoints* to call it
* Storage
* Sequence of instructions in the low-level *Michelson* language

![](../../static/img/tezos-basics/tezos_smart_contract_content.svg)
<small className="figure">FIGURE 2: Content of a Tezos smart contract</small>

### Code of a Tezos smart contract
The code of a smart contract is a sequence of Michelson instructions that are executed when the smart contract is called.

The execution of this sequence of instructions results in a modification of the *storage* content, or storage "**state**". The sequence defines how this state can be modified.

The full description of the Michelson language can be found in the [Michelson module](/michelson).

![](../../static/img/tezos-basics/invoke_smart_contract.svg)
<small className="figure">FIGURE 3: Call of a smart contract triggering the smart contract's code and modifying the storage's state</small>

### Storage of a Tezos smart contract
During the origination, the **initial state** of the storage must be specified.
If needed for operations, the allocation of extra storage space is paid with calling transactions fees.

For more details, check out the ["*Fees and Rewards*" chapter](/tezos-basics/economics_and_reward).

### Call of a Tezos smart contract

A smart contract can be invoked by a person (implicit account) whose address starts with _tz1_ or by a smart contract which address starts with a _KT1_.

The invocation of a smart contract is a transaction sent to the address of a smart contract. This transaction specifies which entrypoint is called and what are its related arguments. 

The invocation of an entrypoint triggers the execution of the sequence of Michelson instructions, which results in the modification of the storage and potentially generates other transactions.

One can use the CLI provided by Tezos to interact with a node. The client application `tezos-client` allows anyone to deploy and invoke smart contracts.

The Remote Procedure Call (RPC) also provides a way to send a request via HTTP to a Tezos node. 

More details in the [RPC and CLI chapter](/tezos-basics/introduction_to_cli_and_rpc).

---

---

The CLI command `tezos-client originate` is required to deploy a contract. It expects as arguments
- the name of the contract
- the Michelson script defines: 
    - the type definition of the storage, 
    - entrypoints of the smart contract
    - the sequence of Michelson instructions
- the amount of XTZ transferred to the contract
- the initial storage value
- optionally the address of a delegate
 and returns the address associated with the newly deployed contract. More detail in the [CLI chapter](/tezos-basics/introduction_to_cli_and_rpc).

These pre-defined instructions are written in Michelson, which is according to the protocol of the Tezos blockchain. More details in the [Michelson module](/michelson).

![](../../static/img/tezos-basics/tezos_smart_contract_deploy_invoke.svg)
<small className="figure">FIGURE 1: Deployment and invocation of smart contracts in Tezos.</small>

---

### Evolution of a deployed smart contract

Once deployed, the code of a smart contract is not meant to be modified; only the storage of a smart contract is modifiable. 

However, we can forecast some possible evolutions of a smart contract. By doing this, we can implement it in such a way as to be able to upgrade certain features.

* For data model extension, the `map` data structures can be used.

* To change the business logic of a smart contract, the "lambda" pattern can be used (i.e. the business logic of the smart contract can be coded in a 'lambda' function inside the storage). This way the business logic can be upgraded with a regular invocation of the smart contract to modify the 'lambda' function in storage (this invocation must specify the new business logic).

---



## High-level languages for Tezos smart contract implementation

Michelson is a low-level stack-based language. Therefore its adoption is quite limited as most developers will not take the time to learn it. To counter this difficulty, many Michelson transpilers have been developed. These high-level languages are closer to the languages developers are more used to working with: [SmartPy](/smartpy) close to Python, [LIGO](/ligo) close to Camel and Pascal, and, finally, Morley.

---

## What have we learned so far?
In this chapter,

In next chapter, 