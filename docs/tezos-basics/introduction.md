---
id: introduction
title: Introduction
slug: /tezos-basics
authors: Thomas Zoughebi, Aymeric Bethencourt and Maxime Fernandez
---
**Tezos** is a *public, open-source blockchain protocol* relying on a **low power consumption and energy-efficient consensus**.  
The protocol also incorporates a **self-amending governance system**, which allows *continuous improvements* while preserving the integrity of this consensus. **This eliminates *hard forks* troubles**.  
Tezos is also **fundamentally designed** to provide **code's safety through Formal Verification**.

In this module, you will learn the Tezos basics needed to understand not only the Tezos philosophy and structure, but also later on to contribute to the network being able to create your own applications.

In this chapter, you will learn the Tezos creation's context and how it was fundraised to properly benefit from the network effect of an all new and innovative blockchain.

## Tezos Creation
_Arthur Breitman_ had seen the main weaknesses of early blockchains like Bitcoin and Ethereum:
* their "*hard forks*", highly complex and risky processes to update blockchains by splitting them in two
* the heavy uses of _Proof-of-Work_ consensus, highly energy consuming and reserved to mining pools
* the lack of verifiability in main smart contracts low-level languages, reducing trust in reliable code

His goal was to keep the best bits from these early blockchains and overcome their existing defects.

In August and September, 2014, *Arthur Breitman* and *Kathleen Breitman* respectively released the Tezos' [*Position Paper*](https://tezos.com/static/position_paper-841a0a56b573afb28da16f6650152fb4.pdf) and [*White Paper*](https://tezos.com/static/white_paper-2dc8c02267a8fb86bd67a108199441bf.pdf), using the "*L.M Goodman*" pseudonym.

From March, 2014, to July, 2017, the company *OCamlPro* [[1]](https://opentezos.com/tezos-basics/introduction#references) took on the project developing a Tezos prototype. The platform was thus developed in their preferred language *OCaml*, mainly used in research.

### The Tezos fundraiser
On July 1st, 2017, Tezos launched its fundraiser as a crowdsale. A crowdsale is similar to a crowdfunding process except the buyer invests in *future* coins. When the blockchain is launched and its coins are created, the buyer receives his coins according to the amount invested. This process allows for the dispatch of the future coins between as many users as possible, and involves them in the launch of the blockchain.

This is especially important in the case of blockchains using _Proof-of-Stake_: the more users own coins, the more **secure** the network. The crowdsale thus allows the network to be operational and robust much earlier. The money collected from the sale is also used to update the blockchain and, specially for Tezos, finance an entire ecosystem.

The coins allocated to the fundraiser's contributors were (and still are) only activated if they provided full KYC information. Mid-November 2020, around 94% of all funds were identified. In a few cases, the full requested information was not delivered, and thus the respective coins weren't activated. On the contrary, contributors who delivered all the required information have not been refused activations.

The Tezos fundraiser was a complete success: it stayed live for only 13 days and gathered 66,000 bitcoins and 361,000 ethers. At the time, this valued 232 million dollars ($230,000,000). Currently, with cryptocurrencies success, this value is much higher.

Initially aimed at 10,000,000,000 (10 billion) coins, the total supply was actually the number of coins issued during the crowdsale. Unlike for example Bitcoin, the total supply of Tezos coins isn't capped. The Tezos coins are called "**tez**" and their symbol "**ꜩ**" (\ua729, "Latin small letter tz"). The symbol "**XTZ**" is also used, specially on markets.

To promote Tezos, the founders created the **_Tezos Foundation_**. Based in Switzerland, its role is to help the network expand. It has no control over the blockchain and doesn't manage the Tezos network. Since the fundraiser, it gradually traded its bitcoins and ethers for Swiss francs granting Tezos community's beneficial projects[[2]](https://opentezos.com/tezos-basics/introduction#references).
The Tezos Foundation supports the community and deploys resources to support the Tezos long-term development.

The Tezos project has also an established history of upholding and cooperating with educational and research institutions, developers, and activists, who support it all over the world.

## Tezos key points
Compared to previous blockchains generation (mainly *Bitcoin* and *Ethereum*), Tezos stands out by 3 main characteristics:

* Self-amending governance: avoiding *hard forks* (e.g. *Ethereum / Ethereum Classic*)
* LPoS consensus mechanism: consumes far less energy
* Smart contracts codes can be written with "*Michelson*" language: allows [Formal Verification](https://en.wikipedia.org/wiki/Formal_verification)

## What have we learned so far?
In this first chapter, we learned the Tezos creation's context and its aim to enhance blockchains. We also learned how it was funded, and how the community uses it to promote the network.

In next chapters, we will guide you through the basics of Tezos, from its consensus algorithm to your first interactions with it.

## References

[1] https://www.ocamlpro.com

[2] https://tezos.foundation/grants/