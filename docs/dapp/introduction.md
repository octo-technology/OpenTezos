---
id: introduction
disable_pagination: true
title: Introduction
slug: /dapp
authors: Benjamin Pilia
---

One of the main features of blockchains is the _decentralization_: each transaction sent is verified by multiple nodes and its validation process does not rely on a single trusted third party.

In the beginning, the idea of decentralization by using Blockchains only applied to currency transfers. Over time, the scope of decentralization extended further than just the currency transfers, through innovation in _smart contracts_: applications could run directly on blockchains, opening the way for more use-cases: making the decentralization of applications a reality.

Such applications are called _Dapps_: **D**ecentralized **app**lications.

They solve the same issues for applications that blockchains solved about banks:
1. **decentralization**: the Dapp logic run on a distributed computing system (thanks to smart contracts), as opposed to the overwhelming majority of applications that run on centralized private servers (backend).
2. **transparency**: Dapps should be open source: that means everyone can read and check the source code of the app. Every action performed by them can be checked by any node. Thus, the users can more easily trust those applications. In _Tezos_ case, everyone can read the Michelson code deployed onto the network
3. **history**: everyone can read the history of all the transactions

> Note that Dapps do not only refer to web application interacting with smart contracts but encompass a bigger range of applications. 
> Blockchains themselves are Dapps, IPFS is also a Dapp...

In our case, Dapps are composed of two components:
1. smart contracts deployed onto a _Tezos_ network, containing the Dapp logic (acting as backend). They are the _decentralized_ part of the application.
2. an off-chain part: most of the time, it is an UI interacting with the deployed smart contracts. This UI can be a web application, a desktop application, a mobile application, a CLI... The UI can be served on a private server, and the source code can be private. It can also contain some business logic.

Dapps are first and foremost applications, and should to this end be designed with great care regarding the user experience, performance and scalability. These are the cornerstones necessary for the massive adoption of Dapps.

In other chapters, the interactions with deployed smart contracts have been performed with CLIs (Tezos client for instance) or libraries (Pytezos).
However, these tools are meant for developers and not for the users, who need more user-friendly interfaces.
Thus, for each smart contract, a frontend and possibily a backend (containing parts of the business logic) has to be developed to display information from the contract, make contract calls and to interact with off-chain services.


In the [Ligo](/ligo/contracts-ligo) and [Smartpy](/docs/smartpy/write-contract-smartpy.md) modules, we have developped a Raffle smart contract. In this module, we will use the Ligo version of this smart contract to create a dapp. To do so, we will:
1. learn how to make compilations and deployments easier during the dapp development with a tool called _Truffle_. 
2. interact with a _Tezos_ network with a Javascript library: _Taquito_. This library interacts with a node, can fetch all kind of information about the network, can make transactions and contract calls.
3. discover a _Tezos_ wallet (the _Temple Wallet_ in our case), a browser-embedded wallet that allows users to safely manage Tezos addresses and interact with the Tezos blockchain.
4. build the UI of the dapp with _React_, a Javascript/Typescript web development framework
