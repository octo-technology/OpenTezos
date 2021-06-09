---
id: introduction
title: Introduction
slug: /deploy-a-node
authors: Maxime Sallerin and Thomas Zoughebi
---

This module will guide you into the complete installation and setup of your own Tezos node on Ubuntu and Mac OS.

In this chapter, the reader will grasp what a node is.

## What is a node?
The node is the main actor of the Tezos blockchain and has two main functions: running the *gossip network* and updating the *context*.  
The *gossip network* is where all Tezos nodes exchange blocks and operations (see the *Admin Client* to monitor P2P connections). On this peer-to-peer network, an operation can hop several times from a node to another until it finds its way into a baked block.  
The shell receives blocks from the gossip network and uses them to keep up-to-date the current *context*: *The full state of the blockchain* shared by all peers. Approximately every minute, a new block is created. When the shell receives it, it applies each operation to its *current context* and computes a *new context*.

The *last block* received on a chain is also called the "*head*" of that chain. Each new head is then advertised by the node to its peers, disseminating this information to build a *consensus* across the network.

Other than passively observing the network, your node can inject its own new operations when instructed by the "`tezos-client`" application and even send new blocks when guided by the "`tezos-baker-`" prefix. The node has also a view of the multiple chains that may exist concurrently and selects the best one based on its fitness (see [*Liquid Proof-of-Stake*](/tezos-basics/liquid-proof-of-stake) chapter in [*Tezos Basics*](/tezos-basics/introduction) module).


## References

[1] https://tezos.gitlab.io/introduction/howtouse.html#node