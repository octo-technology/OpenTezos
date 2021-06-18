---
id: introduction
title: Introduction
slug: /tezos-basics
authors: Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez
---
**Tezos** is a *public, open-source blockchain protocol* relying on a **low power consumption and energy-efficient consensus**.  
The protocol also incorporates a **self-amending governance system**, which allows *continuous improvements* while preserving the integrity of this consensus. **This is a rare feature that eliminates *hard forks* troubles**.  
Tezos is also **fundamentally designed** to provide **code safety through Formal Verification**.

In this module, you will learn the basics of Tezos needed to understand the Tezos philosophy and structure. Later on, you'll be able to create your applications to contribute to the network.

In this chapter, you will learn the context of Tezos's creation and how it was fundraised to properly benefit from the network effect of an all-new and innovative blockchain.

## Tezos Creation
_Arthur Breitman_ had seen the main weaknesses of early blockchains like Bitcoin and Ethereum:
* their "*hard forks*" were highly complex and risky processes to update blockchains by splitting them into two
* the heavy uses of _Proof-of-Work_ consensus is highly energy consuming and reserved for mining pools
* the lack of verifiability of the main smart contract's low-level languages, reducing trust in reliability of code

His goal was to keep the best bits from these early blockchains and overcome their existing defects.

In August and September, 2014, *Arthur Breitman* and *Kathleen Breitman* respectively released the Tezos' [*Position Paper*](https://tezos.com/position-paper.pdf) and [*White Paper*](https://tezos.com/whitepaper.pdf), using the "*L.M Goodman*" pseudonym.

From March 2014 to July 2017, the company *OCamlPro* [[1]](/tezos-basics/#references) took on the project of developing a Tezos prototype. The platform was thus written in their preferred language *OCaml*, a language mainly used in research.

### The Tezos fundraiser
On July 1st, 2017, Tezos launched its fundraiser as a crowdsale. A crowdsale is similar to a crowdfunding process, except the buyer invests in *future* coins. When the blockchain coins are created, the buyer receives his coins according to the amount invested. This process allows for the dispatching of coins between as many users as possible. It also involves them in the launch of the blockchain.

This is especially important in the case of blockchains using _Proof-of-Stake_: the more users own coins, the more **secure** the network is. The crowdsale thus allows the network to be operational and robust much earlier. The money collected from the sale is also used to update the blockchain and, especially for Tezos, finance an entire ecosystem.

The coins allocated to the fundraiser's contributors were (and still are) only activated if they provided full KYC information. In mid-November 2020, Tezos identified around 94% of all funds. In a few cases, the full requested information delivery didn't happen, and thus neither did the respective coins activation. On the contrary, contributors who delivered all the required information received activation.

The Tezos fundraiser was a complete success: it stayed live for only 13 days and gathered 66,000 bitcoins and 361,000 ethers. At the time, this was valued at 232 million dollars ($230,000,000). Currently, with cryptocurrencies' success, this value is much higher.

Initially aimed at 10,000,000,000 (10 billion) coins, the total supply was actually the number of coins issued during the crowdsale. Unlike, for example, Bitcoin, the total supply of Tezos coins has no limit. The Tezos coins are called "**tez**" and their symbol "**ꜩ**" (\ua729, "Latin small letter tz"). With the symbol "**XTZ**" is also used, especially on markets.

To promote Tezos, the founders created the **_Tezos Foundation_**. Based in Switzerland, its role is to help the network expand. It has no control over the blockchain and doesn't manage the Tezos network. Since the fundraiser, it gradually traded its bitcoins and ethers for Swiss francs to support beneficial projects for the Tezos community's [[2]](/tezos-basics/#references).
The Tezos Foundation supports the community and deploys resources to support the Tezos's long-term development.

The Tezos project has an established history of upholding and cooperating with educational and research institutions, developers and activists, who support it from all over the world.

## Tezos key points
Compared to previous blockchains generation (mainly *Bitcoin* and *Ethereum*), Tezos stands out through 3 main characteristics:

* Self-amending governance: avoiding *hard forks* (e.g. *Ethereum / Ethereum Classic*)
* LPoS consensus mechanism: that consumes far less energy
* Smart contracts codes can be written with "*Michelson*" language: to allows for [Formal Verification](https://en.wikipedia.org/wiki/Formal_verification)

## What have we learned so far?
In this first chapter, we learned the context of Tezos's creation and about its aim to enhance the capabilities of blockchains. We also learned how the fundraiser took place and how the community uses it to promote the network.

In the next chapters, we will guide you through the basics of Tezos, from its consensus algorithm to your first interactions with it.

## References

[1] https://www.ocamlpro.com

[2] https://tezos.foundation/grants/
