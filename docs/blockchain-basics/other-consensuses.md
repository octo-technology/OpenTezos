---
id: other-consensuses
disable_pagination: true
title: Introduction to other consensuses
authors: Thomas Zoughebi and Aymeric Bethencourt

---

In this chapter, we will briefly introduce a few other *public* consensuses.

## Proof-of-Stake (PoS)
_PoS_ requires a system where _validators_  *do not create coins*, so that their rewards should *only be provided by transactions fees*. It also means that all the coins are created at the launch of the system.

The first set of this consensus is for blocks to be  *validated* by **validators** that invested coins in the system. The more a validator has coins in an escrow, the more he is likely to validate a block and earn rewards.

Valid blocks pushed from validators are always verified afterwards by the network. If a validator has tried to cheat, he loses all his funds in his collateral.

An example of this would be: *Ethereum 2.0, Peercoin, Blackcoin, NXT...*

## Delegated Proof-of-Stake (DPoS)
DPoS is PoS system with an added *delegation* phase. During this phase, decentralized *votes* are made by *witnesses*, choosing validators. Parameters like fees, rewards, or witnesses number are decided by a *committee* group. This committee *do not receive any reward*. The parameters can only be changed during a *maintenance phase by vote*.

An example of this would be: *Steem, Graphene, BitShares...*

## Liquid Proof-of-Stake (LPoS)
Tezos has developed LPoS, an evolution of the DPoS.

In LPoS, a validator is called a **baker**. Any user owning enough coins can become a baker. If a user would like to become a baker but doesn't own enough coins, he can _delegate_ his coins. Thereby benefiting from a portion of the fee share.

The probability to win a bake is proportional to the amount invested. The baking time is organized in cycles and coins are locked during this time.


## Proof-of-Burn (PoB)
Instead of buying a lot of powerful nodes like in PoW, **validators** "*burn*" their coins. "Burning" coins means sending them to a locking address where they are irretrievable. Thereby destroying or "burning" them.

The more miners burn coins, the more they are likely to validate a block and win rewards.

This mimics the process of mining, where miners have to invest energy and mining power to solve a mathematical inequality.

An example of this would be: *Slimcoin*

## Proof-of-Capacity (PoC)
The system first generates large data sets called "*Plots*". The more plots a *miner* records, the more lottery's tickets he owns. Hence, the more hard-drive space (*capacity*) he can obtain, the more chances he has to win the rewards.

Variants would be: *Proof-of-Storage, Proof-of-Space*

An example of this would be: *Burstcoin, Storj, Filecoin, BitcoinHD...*

## Leader-Based Consensus (LBC)
Nodes elect a temporary leader node. This leader is then responsible for validating transactions, and for ordering them. There are not necessarily made in blocks (i.e. is more than one transaction).

An example of this would be: *BigChainDB*

## Practical Byzantine Fault Tolerance (PBFT)
In this structure of consensus, each node of the network awaits messages. Each node receiving a message runs a program on this message using its own data. According to its data and the message received, each node produces a result and broadcasts it to the other nodes.

The sum total of these broadcast-results determines the consensus.

An example of this would be: *Evernym, Chain...*

## Federated​ ​Byzantine​ ​Agreement​ ​(FBA)
There *sets of enough nodes* to validate data are established. A single *set* is called a "*quorum*".

With FBA, a *subset* of a quorum is able to aggregate another node, which in turn approves data *to form a complete quorum*. This *subset* is called a "*quorum slice*".

Each node chooses its own multiple quorum slices to trust.

The aim of this is to avoid **separated divergent quorums**, and to ensure that **all quorums converge**.  
Quorum slices must be large enough to have **intersections** (shared nodes).

An example of this would be: *Stellar, Ripple*.

## Avalanche
Each **validator** randomly selects N nodes among all the other validators. The more a validator has coins, the more chances it has to be selected (*see also PoS below*).

Each queried validator responds with its decision.

If the majority of responses differs from the asking node's decision, then it will change its own answer to that of the others.

An example of this would be: *Avalanche*

## Proof-of-Activity (PoA)
Proof-of-Activity is split into 2 ordered phases:
1. PoW phase

    Miners race to find enough zeros in the result of the hash function. But this time, the block they validate is _usually_ empty of transactions. Only where they can receive a reward and their results are present.

2. PoS phase

    Then, a random group of validators is chosen to sign the new block. The more coins a validator owns, the more likely he has to be chosen. When all the validators signed, the block is filled with transactions.

    If there are not enough validators for a valid block signing, another valid block and another group of validators are chosen.

Fees-rewards are then split between miners and validators.

An example of this would be: *Decred*.

## Pros & Cons

| #    | Consensus | Advantages                                | Disadvantages                                                                                               |
| :--- | :-------- | :---------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| *0*  | *PoW*     | *Extreme robustness (MAD + SHA256 + CBC)* | *Energy consumption*                                                                                        |
| ◼    | ◼         | ◼                                         | ◼                                                                                                           |
| 1    | PoB       | Robustness similar to PoW                 | Energy consumption; Mining power to money burners                                                           |
| 2    | PoC       | Less energy consumption; mimic mining     | Nothing at Stake (no MAD)                                                                                   |
| 3    | LBC       | Less energy consumption                   | Leader centralized; Sybil Attack[[1]](/blockchain-basics/other-consensuses#references) weakness             |
| 4    | PBFT      | Very easy to implement                    | Absence of privacy; less robust                                                                             |
| 5    | FBA       | Modest computing & financial requirements | Quorum slices centralization; Sybil Attack[[1]](/blockchain-basics/other-consensuses#references) weakness   |
| 6    | Avalanche | Fast; highly distributed (lots of nodes)  | Groups of nodes centralization; Sybil Attack[[1]](/blockchain-basics/other-consensuses#references) weakness |
| 7    | PoS       | Less energy consumption                   | Coins owners centralization                                                                                 |
| 8    | PoA       | Combines PoW & PoS                        | Combines PoW & PoS                                                                                          |
| 9    | DPoS      | Mitigating PoS centralization             | Coins owners & witnesses centralization                                                                     |
| 10   | LPoS      | Mitigating even more PoS centraliszation  | Coins owners centralization                                                                                 |

## What have we learned so far?
In this chapter, we briefly described 10 consensuses that can be used for public blockchains. There are many other consensus algorithms.

In the next chapter "_Smart Contracts_", we'll define what they are, what are some of the Bitcoin's limitations in that matter, and how Ethereum first proposed to lift those limitations.

## References
[1] https://en.wikipedia.org/wiki/Sybil_attack