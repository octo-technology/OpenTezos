---
id: other-consensuses
disable_pagination: true
title: Introduction to other consensuses
slug: /blockchain-basics
---

import NotificationBar from '../../src/components/docs/NotificationBar';

<h1 className="p">Under construction.</h1>

<NotificationBar>
  <p>
    Lorem ipsum
  </p>
</NotificationBar>

# Introduction to other consensuses
In this chapter, we'll introduce 10 of the existing *public* consensus mechanisms.

## Proof-of-Burn (PoB)
Instead of buying a lot of powerful nodes like in PoW, **validators** "*burn*" their coins. "Burning" coins means sending them to a locking address where they are irretrievable. They are destroyed, or "burnt".

The more miners burn coins, the more they are likely to validate a block and win rewards.

This mimics the mining process, where miners have to upgrade their nodes: As their reserves of coins decrease, they need to burn more to have more chances to win.

Example: *Slimcoin*

## Proof-of-Capacity (PoC)
The system first generates large data sets called "*Plots*". The more plots a *miner* records, the more lottery's tickets he owns. Hence, the more hard drive space (*capacity*) he can obtain, the more chances he's to win the rewards.

Variants: *Proof-of-Storage, Proof-of-Space*

Examples: *Burstcoin, Storj, Filecoin, BitcoinHD...*

## Leader-Based Consensus (LBC)
Nodes elect a temporary leader node. This leader is then responsible for validating transactions, and order them. There are not necessarily blocks (i.e. more than one transaction).

Examples: *BigChainDB*

## Practical Byzantine Fault Tolerance (PBFT)
Each node of the network awaits messages. Each node receiving a message runs a program on this message using its own data. According to its data and the message received, each node produces a result and broadcasts it to the other nodes.

The total of results determines the consensus.

Examples: *Evernym, Chain...*

## Federated​ ​Byzantine​ ​Agreement​ ​(FBA)
*Sets of enough nodes* to validate data are established. A single *set* is called a "*quorum*".

With FBA, a *subset* of a quorum is able to aggregate another node, which then approves data *to form a complete quorum*. This *subset* is called a "*quorum slice*".

Each node chooses its own multiple quorum slices to trust.

The aim is avoiding **separated divergent quorums**, and assuring **all quorums convergence**.  
Quorum slices must be large enough to have **intersections** (shared nodes).

Examples: *Stellar, Ripple*.

## Avalanche
Each **validator** randomly selects N nodes among all other validators. The more a validator has coins, the more chances it's to be selected (*see also PoS below*).

Each queried validator responds with its decision.

If the majority of responses differs from the asking node's decision, then it will change its own answer to others.

Example: *Avalanche*

## Proof-of-Stake (PoS)
Blocks are *validated* by **validators** that invested in coins of the system. It means they *normally do not create coins*, so their rewards should *only be provided by transactions fees*. It also means all the coins are created at the launch of the system.

The more a validator has coins in an escrow, the more he is likely to validate a block and earn rewards.

Valid blocks pushed from validators are always verified afterwards by the network. If a validator tries to cheat, he looses all his funds in his collateral.

Examples: *Ethereum 2.0, Peercoin, Blackcoin, NXT...*

## Proof-of-Activity (PoA)
Proof-of-Activity is split into 2 ordered phases:
1. PoW phase

    Miners race to find enough zeros in the result of the hash function. But this time, the block they validate is _usually_ empty of transactions. Only where they can receive a reward and their result are present.

2. PoS phase

    Then, a random group of validators is chosen to sign the new block. The more coins a validator owns, the more likely he is to be chosen. When all the validators signed, the block is filled with transactions.

    If there are not enough validators for a valid block signing, another valid block and another group of validators are chosen.

Fees rewards are split between miners and validators.

Example: *Decred*.

## Delegated Proof-of-Stake (DPoS)
DPoS is PoS with an added *delegation* phase. During this phase, decentralized *votes* are realised by *witnesses*, choosing validators. Parameters like fees, rewards, or witnesses number are decided by a *commitee* group. This commitee *do not receive any reward*. The parameters can only be changed during a *maintenance phase by vote*.

Examples: *Steem, Graphene, BitShares...*

## Liquid Proof-of-Stake (LPoS)
Tezos has developed LPoS, an evolution of the DPoS.

In LPoS, a validator is called a **baker**. Any user owning anough coins can become a baker. In case a user would like to be a baker but doesn't own enough coins, he can _delegate_ coins.

The probability to win a bake is proportional to the amount invested. The baking time is organized in cycles and coins are locked during this time.

## What have we learned so far?
In this chapter, we briefly described 10 consensuses that can be used for public blockchains. There are many other consensus algorithms.

In the next chapter "_Smart Contracts_", we'll define what they are, what are some of the Bitcoin's limitations in that matter, and how Ethereum first proposed to lift those limitations.

## References
[1] https://