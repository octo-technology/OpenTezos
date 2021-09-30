---
id: introduction
disable_pagination: true
title: Introduction
slug: /dapp
authors: Benjamin Pilia
---

One of the main features of blockchains is the _decentralization_: each transaction sent is verified by multiple nodes and its validation process does not rely on a single trusted third party.

In the beginning, the idea of decentralization by using Blockchains only applied to currency transfers. Over time, the scope of decentralization extended beyond just the currency transfers, through innovation in _smart contracts_: applications could run directly on blockchains, opening the way for more use-cases: making the decentralization of applications a reality.

Such applications are called _Dapps_ for **D**ecentralized **app**lications.

They solve the same issues for applications that blockchains solved about banks:
1. **decentralization**: the Dapp logic runs on a distributed computing system (using smart contracts), as opposed to the overwhelming majority of applications that run on centralized private servers (or _backend_).
2. **transparency**: Dapps are usually open source, meaning that everyone can read and check the source code of the app. Every action performed by its admins can be checked by anyone. Thus, users can more easily trust those applications. In the case of _Tezos_, everyone can read the Michelson code deployed onto the network.
3. **history**: everyone can read the history of all the transactions.

Dapps are usually composed of two parts:
1. Smart contracts deployed onto the _Tezos_ network, containing the Dapp logic (acting as backend). They are the _decentralized_ part of the application.
2. An off-chain part: most of the time, it is a UI interacting with the deployed smart contracts. This UI can be a web application, a desktop application, a mobile application, a CLI, etc. The UI can be served from a private server or from a decentralized hosting service like IPFS.

Dapps are first and foremost applications, and should to this end be designed with great care regarding the user experience, performance and scalability. These are the cornerstones necessary for the massive adoption of Dapps.

In other modules, the interactions with deployed smart contracts have been performed with CLIs (Tezos client for instance) or libraries (Pytezos). However, these tools are meant for developers and not for the users, who need more user-friendly interfaces. Thus, for each smart contract, a frontend and possibily a backend (containing parts of the business logic) has to be developed to display information from the contract, make contract calls and to interact with off-chain services.

In the [Ligo](/ligo/contracts-ligo) and [Smartpy](/docs/smartpy/write-contract-smartpy.md) modules, we have developed a _Raffle_ smart contract. In this module, we will use the LIGO version of this smart contract to create a Dapp. To do so, we will:
1. Learn how to make compilations and deployments easier during the Dapp development phase using a tool called _Truffle_.
2. Interact with a _Tezos_ network using a Javascript library called _Taquito_. This library interacts with a node, and thus can fetch all kind of information about the network, can make transactions and call smart contracts.
3. Discover an in-browser _Tezos_ wallet; _Temple_; that allows users to manage Tezos addresses and interact with the Tezos blockchain safely.
4. Build the UI of the Dapp with _React_, a _Javascript_ frontend development framework.
