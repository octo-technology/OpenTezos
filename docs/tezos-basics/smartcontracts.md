---
id: introduction_to_smart_contracts
title: Introduction to Smart contracts
---

## General

Tezos is a blockchain (i.e. a decentralized transactional system (UTXO)). 
Transactions are broadcasted over the Tezos network and validated by bakers. Once validated transactions are executed and side-effects are applied to the blockchain.
- A transaction can transfer a certain amount of XTZ to an address (account).
- A transaction can contain some code (called *smart contract*) that will be stored in the blockchain. Once this transaction is executed, the smart contract is considered as deployed; an address and a persistent memory space (called *storage*) are associated to this smart contract.
- A transaction can invoke some existing smart contract. Once deployed the smart contract can be invoked by anyone via a transaction to the contract address.

Tezos smart contract are implemented in Michelson language.

Michelson transpilers have been developed for several languages:
- Python : SmartPy
- Camel : Ligo
- Pascal : Ligo
- Morley : Morley


Notice that a smart contract communicates only within the Tezos network and thus can send transactions to other accounts or smart contracts but cannot send on Internet; that's where decentralized applications come into play.

See more detail in [Dapp module]

## Deployment of the smart contract

A smart contract is implemented following the Michelson format and defines:
- possibles invocations (called *entrypoints*)
- the storage data structure definition 
- a sequence of Michelson instructions

See more detail in [Michelson module]

These information are specified during the deployment phase (called *origination*). The CLI command `tezos-client originate` is provided for deploying a contract. It expects the 3 mentioned information as argument and returns the address associated with the newly deployed contract. 

See more detail in [CLI module]

## The storage of the smart contract

The storage is a persistent data structure. It represents all side-effects of all transactions sent to this contract (i.e. the resulting view of data after applying all transactions sent to this contract). 

The initial state of the storage is specified at origination.

Afterwards only an invocation of the smart contract can modify its storage.

One can use the CLI provided by tezos to inspect the storage state of a smart contract. The only required parameter is the address of the smart contract.

The growth of the storage (i.e; memory allocation of extra space) is paid as fees when the smart contract is invoked.

For more details in [Fees and Reward section]

## Invocation of the smart contract

A deployed contract can be invoked by a person (implicit account) whose address starts with "tz1 .." or by a smart contract (account) whose address starts with a "KT1....".

Invocation of a smart contract is a transaction sent to the address of a smart contract. This transaction specifies which entrypoint is called and its related parameters.

For more detail about creating transactions, check [Michelson module], [Ligo module].

One can use the CLI provided by tezos to interact with a node. The client application `tezos-client` allows anyone to deploy and invoke smart contracts. The list of CLI commands is available at the Tezos Gitlab official website.

The Tezos RPC layer also provides a way to send a transaction to a Tezos node. The list of all URIs are available at the Tezos Gitlab official website.


## Evolution of a smart contract

Once deployed the code of smart contract is not meant to be modified, only the storage of the smart contract will be.

But we can forecast some possible evolutions of a smart contracts and thus implement in a way (patterns) that some features can be upgraded.

- For data model extension one can use `map` data structures

- For changing business logic of a smart contract one can implement a "lambda" pattern (i.e. implement the business logic of your smart contract in a lambda func inside the storage). So the business logic can be upgraded with a regular invocation of the smart contract (this invocation must specify the new business logic).

