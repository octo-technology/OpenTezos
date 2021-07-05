---
id: introduction
title: Introduction
slug: /baking
authors: Maxime Sallerin
---

In this module, we will see how baking works for the Tezos blockhain. More precisely, we will see who are the different actors involved from the creation to the validation of a new block. Then we will see the associated reward system. And finally, we will present the list of existing bakers and the criteria to evaluate them.

## Tezos is a proof-of-stake blockchain

To achieve its consensus, Tezos implements the [Liquid Proof of Stake (LPoS)](/tezos-basics/liquid-proof-of-stake). That is to say that the validators/bakers of the network will lock a part of their tokens, which they will not be able to use anymore, to obtain the right to create a block. The **creator** of the next block, called the **baker**, will be chosen randomly among all the candidates, based on the number of tokens owned. In exchange for his work, the baker receives a **reward** in Tez.

### What is baking?

**Baking** is the act of creating, signing and publishing blocks to the Tezos blockchain. Bakers are a crucial component of the Tezos Liquid Proof-of-Stake consensus algorithm by ensuring that all transactions in a block are correct and that the order of transactions is agreed upon.
Note that a baker also has to accept to play the role of endorser, which means taking part in the validation of blocks created by bakers.

To bake blocks, a baker needs to participate in the network, which requires:
- a minimum of 8,000ꜩ (1 roll)
- a dedicated infrastructure (eg: a server or a raspberry pi) with enough memory space
- An optimal internet connexion

The more rolls of Tez a baker owns, the higher are his chances to bake blocks and earn baking rewards.

### What is delegating?

If a Tez holder does not have 8,000 XTZ or does not want to set up a computing infrastructure to bake blocks, they may delegate their coins to a baker. Delegating lets coin holders (i.e. **delegators**) "lend" their coins to a baker (i.e. a **delegate**), giving the baker a higher probability of being selected to bake and endorse blocks. In exchange, bakers share the additional revenue generated from the delegated tokens with the delegators, in proportion to their participation. Importantly, this process does not actually transfer ownership of coins. Hence bakers cannot spend or control the Tez delegated to them, ensuring that bakers cannot appropriate the delegators funds.

With LPoS the number of bakers is unlimited (everyone can participate), and delegation is optional.

## References

[1] https://wiki.tezosagora.org/learn/baking
