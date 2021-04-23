---
id: introduction
disable_pagination: true
title: Introduction
slug: /dapp
authors: Benjamin Pilia
---

One of the main features of blockchains is _decentralisation_: 
each transaction sent is verified by multiple nodes, and its validation does not rely on a single a trusted third-party.

At the beginning, the idea of decentralisation with Blockchains only applied to currency transfers. 
Over time, the scope of decentralisation extended further than just currency transfers, with the innovation of _smart contracts_:
applications could also be decentralized by running directly on blockchains, opening the way for many more use-cases.

Such applications are called _Dapps_: **D**ecentralized **app**lications.

They solve the same issues about applications that blockchains solve for banks:
1. decentralisation: Dapps run a distributed computing system, as opposed to the overwhelming majority of applications are running on centralized private servers.
2. transparency: Dapps are open source and every action performed by them can be checked by any node. These applications can actually prove that you can trust them
3. history: the history of all transactions can be fetched by everyone.

> Note that Dapps do not only refer to deployed smart contracts, but encompass a bigger range of applications. 
> Blockchains themselves are Dapps, IPFS is a Dapp.

Dapps are first and foremost applications, and should to this end be designed with much care regarding user experience, performance and scalability.
They are the corner stones for a massive adoption of Dapps.

So far, the interactions with deployed smart contracts have been performed with CLI (Tezos client for instance) or libraries (Pytezos).
However, these tools are meant for developers and not users, who need user-friendly interfaces.
Thus, for each smart contract, a frontend has to be developed, and the interactions with the smart contract have to be


In this module, we will create a Dapp for the Raffle smart contract, developed in the [Ligo module](/ligo/contracts-ligo).
First, we will deploy it on a testnet, to interact with it with a typescript library. 
Then, we will discover the Temple Wallet, a browser-embedded wallet that allow users to manage Tezos addresses and interact with the Tezos blockchain.
Finally, we will develop a basic frontend for the Raffle Smart contract, interfaced with The Temple Wallet.