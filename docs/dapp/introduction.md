---
id: introduction
disable_pagination: true
title: Introduction
slug: /dapp
authors: Benjamin Pilia
---

One of the main features of blockchains is the _decentralization_: 
each transaction sent is verified by multiple nodes and its validation process does not rely on a single trusted third party.

In the beginning, the idea of decentralization by using Blockchains only applied to currency transfers. 
Over time, the scope of decentralization extended further than just the currency transfers, through innovation in _smart contracts_:
applications could run directly on blockchains, opening the way for more use-cases: making the decentralization of applications a reality.

Such applications are called _Dapps_: **D**ecentralized **app**lications.

They solve the same issues for applications that blockchains solved about banks:
1. **decentralization**: Dapps run on a distributed computing system, as opposed to the overwhelming majority of applications that run on centralized private servers.
2. **transparency**: Dapps are open source: that means everyone can read and check the source code of the app. Every action performed by them can be checked by any node. Thus, the users can more easily trust those applications.
3. **history**: everyone can read the history of all the transactions

> Note that Dapps do not only refer to deploying smart contracts but encompass a bigger range of applications. 
> Blockchains themselves are Dapps, IPFS is also a Dapp...

Dapps are first and foremost applications, and should to this end be designed with great care regarding the user experience, performance and scalability. These are the cornerstones necessary for the massive adoption of Dapps.

So far, the interactions with deployed smart contracts have been performed with CLI (Tezos client for instance) or libraries (Pytezos).
However, these tools are meant for developers and not for the users, who need more user-friendly interfaces.
Thus, for each smart contract, a frontend has to be developed to display information from the contract and make contract calls.


In this module, we will create a Dapp for our Raffle smart contract, developed in the [Ligo module](/ligo/contracts-ligo).
First, we will deploy it on a testnet, to interact with it using a typescript library: _Taquito_. 
Then, we will discover the Temple Wallet, a browser-embedded wallet that allows users to manage Tezos addresses and interact with the Tezos blockchain.
Finally, we will develop a basic React frontend for the Raffle Smart contract, that is interfaced with The Temple Wallet.
