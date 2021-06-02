---
id: introduction
title: Introduction
slug: /deploy-a-node
authors: Maxime Sallerin
---

//TODO Présentation module --> Create your own tezos node ...

// TODO 
What is a node?
What does it mean to build a node?
What does it mean to set up a node?
What is the point of building a node?

## What is a node?

The node is the main actor of the Tezos blockchain and it has two main functions: running the gossip network and updating the context. The gossip network is where all Tezos nodes exchange blocks and operations with each other (see Admin Client to monitor p2p connections). Using this peer-to-peer network, an operation originated by a user can hop several times through other nodes until it finds its way in a block baked by a baker. Using the blocks it receives on the gossip network the shell also keeps up to date the current context, that is the full state of the blockchain shared by all peers. Approximately every minute a new block is created and, when the shell receives it, it applies each operation in the block to its current context and computes a new context. The last block received on a chain is also called the head of that chain. Each new head is then advertised by the node to its peers, disseminating this information to build a consensus across the network.

Other than passively observing the network, your node can also inject its own new operations when instructed by the tezos-client and even send new blocks when guided by the tezos-baker-*. The node has also a view of the multiple chains that may exist concurrently and selects the best one based on its fitness (see Proof-of-stake in Tezos).

