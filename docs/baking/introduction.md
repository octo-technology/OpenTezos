---
id: introduction
title: Introduction
slug: /baking
authors: Maxime Sallerin
---

In this module, we will see how baking works for the Tezos blockchain. More precisely, we will see the different actors involved, from creating new blocks to their validation. We will then see the associated reward system, and how to deploy your own baker. Finally, we will present a list of existing bakers and the criteria to evaluate them.

## Tezos is a proof-of-stake blockchain

To achieve its consensus, Tezos uses [Liquid Proof of Stake (LPoS)](/tezos-basics/liquid-proof-of-stake). That is to say that the validators/bakers of the network temporarily lock a part of their tokens (which they cannot use anymore) to obtain the right to create a block. The **creator** of the next block is called the **baker** and is chosen randomly among all the candidates, based on the number of tokens locked. In exchange for his work, the baker receives a **reward** in Tez.

### What is baking?

**Baking** is the act of creating, signing and, publishing new blocks to the Tezos blockchain. Bakers are a crucial component of the Tezos _Liquid Proof-of-Stake_ consensus as they ensure that all transactions in a block are correct and that the order of transactions is agreed upon.
Note that a baker also has to accept to play the role of _Endorser_, which means taking part in the validation of blocks created by other bakers.

To bake blocks, a baker needs to participate in the network, which requires:
- a minimum of 8,000ꜩ (i.e., one roll)
- a dedicated infrastructure (e.g., a server or a raspberry pi) with enough CPU power and memory space
- An internet connexion

The more rolls of Tez a baker owns, the higher his chances to bake blocks and earn baking rewards.

### What is delegating?

If a Tez holder does not have 8,000ꜩ or does not want to set up a computing infrastructure to bake blocks, they may delegate their coins to a baker. Delegating lets coin holders (i.e., **delegators**) "lend" their coins to a baker (i.e., a **delegate**), giving the baker a higher probability of being selected to bake and endorse blocks. In turn, bakers share the additional revenue generated from the delegated tokens with the delegators, in proportion to their participation. Note that this process does not transfer ownership of coins. Hence bakers cannot spend or control the Tez delegated to them, ensuring that bakers cannot appropriate the delegators funds.

With _LPoS_ the number of bakers is unlimited (everyone can participate), and delegation is optional.

## References

[1] https://wiki.tezosagora.org/learn/baking
