---
id: introduction
disable_pagination: true
title: Introduction
slug: /blockchain-basics
---

import NotificationBar from '../../src/components/docs/NotificationBar';

<h1 className="p">Under construction.</h1>

<NotificationBar>
  <p>
    Lorem ipsum
  </p>
</NotificationBar>

# Main components of the first "blockchain"

In this chapter, we will go a little bit deeper into details of the main components of the Bitcoin protocol. The developers, who are the builders part of the community; The network with the distributed ledger and the miners who validate it; A few Economy basics on which Bitcoin was created; And finnaly the consensus and the Proof-of-Work.

## Open-Source developers
An important part of the community is made from all the developers who write the code of the protocol. Everyone can verify the code, correct it, and make proposals.

The code written defines the validation rules of all the transactions and their scripts.

This code is also used to create the software that runs a node of the network, and how data are recorded, or explored.

There are different implementations, on different operating systems and devices. The code can be written in almost any programming language (e.g. _C++, Python, Java, Go, Scala_...).

The original implementation from Satoshi Nakamoto in C++ is [_Bitcoin Core_](https://bitcoincore.org/). Most of the nodes of the network use this software today.

## Peer-to-Peer network and shared ledger
One could think that all the power and influence is in the hand of the developers, but the rules they code still have to be accepted and used.

The P2P network of Bitcoin has a mesh design spread over the planet (or space[[1]](/blockchain-basics/main-components#references)). The more nodes enforce the rules, the more the protocol is distributed and secured.

There are different types of nodes, but for the sake of simplicity, let's only recall two categories for now: Full nodes and Lightweight nodes.

Full nodes enforce the rules no matter what happens and validate transactions. They _usually_[[2]](/blockchain-basics/main-components#references) also record all transactions in a distributed ledger. This ledger is shared by all the full nodes of the network.

Lightweight nodes are used for devices with limited space capacity, limited calculating speed, or limited connectivity. They usually refer to little devices like smartphones.

### Chained Data-structure
The ledger's structure must be very special because of the following constraints:
- The ledger is distributed across Earth, and everyone should be able to agree on its state at the same time
- Transactions are grouped inside packages named "**blocks**". Most of the time, blocks shouldn't be too little (e.g. zero or one transaction only), or too big
- The history cannot be modified (immutability) so the difficulty to attack the network and ledger must increase over time
- Verifying the history, or picking a specific information inside the ledger has to be fast (e.g. check a balance)
- The part of the community securing the blocks must be rewarded; enough and not too much

The data-structure which permits all of the above is a chain of blocks aka "blockchain".

Valid transactions are grouped and enclosed inside a block. Every 10 minutes in Bitcoin, each block can be verified by the maximum of available nodes across Earth.

The number of transactions inside a block is only limited by its space available (in bytes). Same time, the more transactions in a block, the more rewarding it is for the blocks validators (see below "_Introduction to Mining_").

Each new block is linked to the previous one: they are chained. The more blocks there are, the more difficult it is to modify anything in the ledger. They are cryptographically chained. That means, that if you want to cheat (basically lying about the bitcoins you have), you would need to modify everything until the Genesis Block.

### Introduction to Mining


## Account unit and Economy basics


## Consensus: Nakamoto and the Proof-of-Work’s account units issuance


## What have we learned so far?
In this chapter, we described the pillars of the Bitcoin protocol, which are now the ones for the new systems.

In the next chapter _title_, we'll

## References
[1] https://blockstream.com/satellite/

[2] https://bitcoin.org/en/release/v0.12.0#wallet-pruning
