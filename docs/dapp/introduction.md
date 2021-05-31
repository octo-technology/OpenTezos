---
id: introduction
disable_pagination: true
title: Introduction
slug: /dapp
authors: Benjamin Pilia
---

One of the main features of blockchains is _decentralization_: 
each transaction sent is verified by multiple nodes, and its validation does not rely on a single trusted third-party.

At the beginning, the idea of decentralization with Blockchains only applied to currency transfers. 
Over time, the scope of decentralization extended further than just currency transfers, with the innovation of _smart contracts_:
applications could run directly on blockchains, opening the way for more use-cases: decentralization of applications became a reality.

Such applications are called _Dapps_: **D**ecentralized **app**lications.

They solve the same issues about applications that blockchains solve for banks:
1. **decentralization**: Dapps run on a distributed computing system, as opposed to the overwhelming majority of applications that are running on centralized private servers.
2. **transparency**: Dapps are open source: everyone can read and check the source code of the app. Every action performed by them can be checked by any node. Thus, the users can trust those applications more easily.
3. **history**: everyone can read the history of all transactions

> Note that Dapps do not only refer to deployed smart contracts, but encompass a bigger range of applications. 
> Blockchains themselves are Dapps, IPFS is a Dapp...

Dapps are first and foremost applications, and should to this end be designed with much care regarding user experience, performance and scalability. They are the cornerstones for the massive adoption of Dapps.

So far, the interactions with deployed smart contracts have been performed with CLI (Tezos client for instance) or libraries (Pytezos).
However, these tools are meant for developers and not users, who need user-friendly interfaces.
Thus, for each smart contract, a frontend has to be developed, that will display information from the contract and make contract calls.


In this module, we will create a Dapp for the Raffle smart contract, developed in the [Ligo module](/ligo/contracts-ligo).
First, we will deploy it on a testnet, to interact with it with a typescript library: _Taquito_. 
Then, we will discover the Temple Wallet, a browser-embedded wallet that allows users to manage Tezos addresses and interact with the Tezos blockchain.
Finally, we will develop a basic React frontend for the Raffle Smart contract, interfaced with The Temple Wallet.