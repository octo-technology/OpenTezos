---
id: introduction
title: Introduction
authors: Maxime Sallerin
---

// TODO preséntation du module

## Tezos is a proof-of-stake blockchain

To achieve its consensus, Tezos implements the [Liquid Proof of Stake (LPoS)](tezos-basics/liquid-proof-of-stake). That is to say that the members of the network will lock a part of their tokens, which they will not be able to use anymore, to obtain the right to create a block. The **creator** of the next block, called the **baker**, will be chosen randomly among all the candidates according to the number of tokens owned. In exchange for his work the baker receives a **reward** in XTZ.

The amount of XTZ required to become a baker is 8000 XTZ for a roll. It is possible for smaller holders to **delegate** their XTZ to a baker, i.e. to make their XTZ available to a baker. In exchange, the baker will redistribute to his delegators a part of his earnings from baking, in proportion to their participation.

With LPoS the number of bakers is unlimited (everyone can participate) and delegation is optional.
