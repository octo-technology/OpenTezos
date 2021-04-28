---
id: other-consensuses
disable_pagination: true
title: Introduction to other consensuses
authors: Thomas Zoughebi and Aymeric Bethencourt

---

In this chapter, we will briefly introduce a few other *public* consensuses.

## Proof-of-Stake (PoS)
_PoS_ requires a system where _validators_ do not create coins, so that their rewards should only be provided by transactions fees. It also means that all the coins are either created at the launch of the blockchain or created another way.

The first rule of this consensus is for blocks to be *validated* by **validators** that invested coins in the system. The more a validator has coins in an escrow, the more he is likely to validate a block and earn rewards.

Valid blocks pushed from validators are always verified afterwards by the network. If a validator has tried to cheat, he loses all his funds in his collateral.

Examples: *Ethereum 2.0, Peercoin, Blackcoin, NXT...*

We'll go into more details about PoS in the [Tezos Basics Module](/tezos-basics) as Tezos uses a variation of PoS called Liquid Proof-of-Stake.

## Delegated Proof-of-Stake (DPoS)
DPoS is the PoS consensus but with an added *delegation* phase. During this phase, decentralized *votes* are made by *witnesses* to elect validators. Parameters like fees, rewards, or witnesses number are decided by a *committee* group. This committee *does not receive any reward*. The parameters can only be changed during a *maintenance phase by vote*.

Examples: *Steem, Graphene, BitShares...*

## Liquid Proof-of-Stake (LPoS)
Tezos has developed LPoS, an evolution of DPoS.

In LPoS, a validator is called a **baker**. Any user owning enough coins can become a baker. If a user want to become a baker but doesn't own enough coins or technical knowledge, he can _delegate_ his coins to _bakers_, thereby benefiting from a portion of the transaction fees.

The probability to win a bake is proportional to the amount invested. The baking time is organized in cycles and coins are locked during this time.

We'll go into more details about LPoS in the [Tezos Basics Module](/tezos-basics).

## Proof-of-Burn (PoB)
Instead of having to invest computational power and electricity like in PoW, users in PoB must _burn_ some coins to gain a chance at becoming the next validator. _Burning_ coins means sending them to a locking address where they are irretrievable, thereby destroying them.

The more a miner burns coins, the more likely he is to validate a block and win rewards.

This mimics the process of mining where miners have to invest some value, except that instead of electricity, it is coins themselves.

Examples: *Slimcoin*

## Proof-of-Capacity (PoC)
This consensus first generates large data sets called "*Plots*". The more plots a *miner* records, the more lottery tickets he owns. Hence, the more hard-drive space (*capacity*) he has, the more chances he has to win the rewards.

Variants: *Proof-of-Storage, Proof-of-Space*

Examples: *Burstcoin, Storj, Filecoin, BitcoinHD...*

## Leader-Based Consensus (LBC)
Nodes elect a temporary leader node. This leader is then responsible for validating transactions, and for ordering them. They are not necessarily made into blocks (i.e. having more than one transaction).

Examples: *BigChainDB*

## Practical Byzantine Fault Tolerance (PBFT)
In this consensus, each node of the network awaits messages fro other nodes. Each node receiving a message runs a program on this message using its own data. According to its data and the message received, each node produces a result and broadcasts it to the other nodes.
//TODO: Weird explanation. I understand it because I know it but a newbie would be completely lost by this explanation.

The total sum of these broadcast-results determines the consensus.

Examples: *Evernym, Chain...*

## Federated​ ​Byzantine​ ​Agreement​ ​(FBA)
There *sets of enough nodes* to validate data are established. //TODO: What? Can't understand a thing in that phrase.

A single *set* is called a "*quorum*". //TODO: What is a set?

With _FBA_, a *subset* of a quorum is able to aggregate another node, which in turn approves data *to form a complete quorum*. This *subset* is called a "*quorum slice*".

Each node chooses its own multiple quorum slices to trust.

The aim of this is to avoid **separated divergent quorums**, and to ensure that **all quorums converge**.  
Quorum slices must be large enough to have **intersections** (shared nodes).

//TODO: I understood nothing about how FBA actually works ^^

Examples: *Stellar, Ripple*.

## Avalanche
Each **validator** randomly selects $N$ nodes among all the other validators. The more a validator has coins, the more chances it has to be selected (*see also PoS below*).

Each queried validator responds with its decision.

If the majority of responses differs from the asking node's decision, then it will change its own answer to that of the others. In case of disagreement between nodes, more nodes are brought into the decision, and more and more  until convergence (thus the name avalanche as it resembles the process of the consensus).

Examples: *Avalanche*

## Proof-of-Activity (PoA)
Proof-of-Activity is split into 2 ordered phases:

1. PoW phase

    Miners race to find enough zeros in the result of the hash function. But this time, the block they validate is _usually_ empty of transactions. Only where they can receive a reward and their results are present. //TODO: "Only where they can receive" hum what? English much? ^^

2. PoS phase

    A random group of validators is chosen to sign the new block. The more coins a validator owns, the more likely he has to be chosen. When all the validators signed, the block is filled with transactions.

    If there are not enough validators for a valid block signing, another valid block and another group of validators are chosen.

Fees-rewards are then split between miners and validators.

//TODO: What is the point? Seems like it combines the worst of both world, why mine with POW and not just do POS?

Examples: *Decred*.

## Pros & Cons

| #    | Consensus | Advantages                                                                                | Disadvantages                                                                                                |
| :--- | :-------- | :---------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| 0    | PoW       | Extreme robustness (MAD + SHA256 + CBC)                                                   | High Energy consumption                                                                                      |
| 1    | PoB       | Robustness similar to PoW                                                                 | Energy consumption; Mining power to money burners  //TODO: Why PoB use a lot of energy, there is no mining?? |
| 2    | PoC       | Less energy consumption; mimic mining //TODO: Above you said POB mimic mining and not POC | Nothing at Stake (no MAD)                                                                                    |
| 3    | LBC       | Less energy consumption                                                                   | Leader centralized; Sybil Attack[[1]](/blockchain-basics/other-consensuses#references) weakness              |
| 4    | PBFT      | Very easy to implement                                                                    | Absence of privacy; less robust //TODO : why less robust?                                                    |
| 5    | FBA       | Modest computing & financial requirements                                                 | Quorum slices centralization; Sybil Attack[[1]](/blockchain-basics/other-consensuses#references) weakness    |
| 6    | Avalanche | Fast; highly distributed (lots of nodes)                                                  | Groups of nodes centralization; Sybil Attack[[1]](/blockchain-basics/other-consensuses#references) weakness  |
| 7    | PoS       | Less energy consumption                                                                   | Coins owners centralization                                                                                  |
| 8    | PoA       | Combines PoW & PoS                                                                        | Combines PoW & PoS                                                                                           |
| 9    | DPoS      | Mitigating PoS centralization                                                             | Coins owners & witnesses centralization                                                                      |
| 10   | LPoS      | Mitigating even more PoS centralization                                                   | Coins owners centralization  //TODO: So still the same issue as POS and DPOS ?                               |

## What have we learned so far?
In this chapter, we briefly described 10 consensuses that can be used for public blockchains. There are many other consensus algorithms.

In the next chapter "_Smart Contracts_", we'll define what they are, what are some of the Bitcoin's limitations in that matter, and how Ethereum first proposed to lift those limitations.

## References
[1] https://en.wikipedia.org/wiki/Sybil_attack