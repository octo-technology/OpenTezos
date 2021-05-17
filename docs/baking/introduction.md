---
id: introduction
title: Introduction
authors: Maxime Sallerin
---

// TODO preséntation du module

## Tezos is a proof-of-stake blockchain

To achieve its consensus, Tezos implements the [Liquid Proof of Stake (LPoS)](tezos-basics/liquid-proof-of-stake). That is to say that the members of the network will lock a part of their tokens, which they will not be able to use anymore, to obtain the right to create a block. The **creator** of the next block, called the **baker**, will be chosen randomly among all the candidates according to the number of tokens owned. In exchange for his work the baker receives a **reward** in XTZ.

### What is baking?

**Baking** is the act of signing and publishing blocks to the Tezos blockchain. Bakers are a crucial component of the Proof-of-Stake consensus mechanism by ensuring that all transactions in a block are correct, that the order of transactions is agreed upon, and that no double-spending has occurred.
To bake blocks, a baker needs to participate in Proof-of-Stake, which requires a minimum of 8,000ꜩ (1 roll). The more rolls of tez that a baker owns, the higher your chances are at baking blocks and earning baking rewards.

### What is delegating?

If someone does not have 8,000 XTZ or does not want to set up computing infrastructure to bake blocks, they may delegate their coins to a baker. Delegating lets coin holders (i.e. **delegators**) "lend" their coins to a baker (i.e. a **delegate**), giving the baker a higher probability of being selected to bake and endorse blocks. In exchange, bakers share the additional revenue generated from the delegated tokens with the delegators, in proportion to their participation. Importantly, this process does not actually transfer ownership of coins and hence the baker cannot spend or control the XTZ delegated to it, ensuring that bakers cannot appropriate the delegators funds.

With LPoS the number of bakers is unlimited (everyone can participate) and delegation is optional.

## References

[1] https://wiki.tezosagora.org/learn/baking
