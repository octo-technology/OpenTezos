---
id: cross-chain-swaps
title: Cross-chain Swaps
author: Aymeric Bethencourt
---

DEXs as seen previously are limited to exchanges of tokens within the same blockchain. DEXs on Tezos only work with FA1.2 or FA2 tokens. So what if we want to exchange some XTZ against some ETH? One solution is to use wrapped assets as seen in the previous chapter and actually exchange wrapped XTZ (wXTZ) against Wrapped ETH (ETHtz) on a DEX. Another solution is to do a cross-chain swap.

A _cross-chain swap_ (also referred as _Atomic Swap_) refers to the action of exchanging two different cryptocurrencies through a peer-to-peer form. This process enable two parties to exchange between each other trustless and without third-party moderation. 

This kind of peer-to-peer exchanges rely on smart contracts on both blockchains to lock and release tokens after verifying the transactions from both parties.



## Cross-chain swaps on Tezos
Today, [TEZEX](https://tezex.io/) is currently in development and will enable cross-chain swaps. At first, TEZEX Bridge will enable swaps to/from the Ethereum blockchain (ERC-20 tokens), to the Tezos blockchain (FA-1.2, FA-2.0).

## References

[1] https://medium.com/tezosexchange/the-changemakers-of-tezex-bridge-fd73bb1d8da2

[2] https://liquality.io/blog/atomic-swaps-explained/