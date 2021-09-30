---
id: introduction
disable_pagination: true
title: Introduction
slug: /blockchain-basics
authors: Aymeric Bethencourt and Thomas Zoughebi
---

Before we start digging into Tezos itself, let's review the basics of blockchain and cryptocurrencies. This module will present a brief history of the blockchain, its main components, consensus' mechanisms and introduce the notion of _smart contract_ (smart contracts will be more detailed in [the dedicated chapter of the "*Tezos Basics*" module](/tezos-basics/smart-contracts)). All these notions will later be helpful in the following modules to understand how Tezos works and how it goes beyond Bitcoin and Ethereum to become part of a new generation of blockchains.

## A brief history of blockchain
### The tipping points
In 2005, Greece imposed restrictions on the amount people could withdraw from their bank account in an attempt to prevent banks from failing, as talks between the government and bailout creditors appeared to be on the verge of collapse.

In 2008, the [subprime mortgage crisis](https://en.wikipedia.org/wiki/Subprime_mortgage_crisis) triggered a *global* financial crisis. _Lehman Brothers_ went bankrupt and many more banks and financial institutions across the world required to be bailed out by governments. 

These events and many others of the same kind exposed the fragility of the modern financial system and the fact that banks and other financial institutions could present a risk for people's savings and money.

[Fractional reserve banking](https://en.wikipedia.org/wiki/Fractional-reserve_banking), the most common form of banking practised by commercial banks worldwide, is the embodiment of such issue. When you give a bank $1,000, the bank does not keep that amount in reserve for you. It legally only needs to keep $100 in reserves (generally around 10%) and spend $900 of your money in various investments. At this point, not only are you not able to withdraw your $1,000 if the bank doesn't have enough reserves from other depositors, but they risk losing your money altogether if its investments fail or the bank goes bankrupt. If a bank has a net deposit of a billion dollars, it only needs to keep around 100 million on hand at any given time. This usually works fine when bank customers don't withdraw all their money, altogether at once. However, the moment customers start to question the bank's financial stability and decide to withdraw their money, the bank can rapidly lose its reserve, and things can go sour very quickly.

On another note, one of the solutions to a crisis often used by governments is to create more of their national [fiat currency](https://en.wikipedia.org/wiki/Fiat_money) (e.g., US Dollar, Euro, etc.) to pay for recovery plans. This leads to inflation or [hyperinflation](https://en.wikipedia.org/wiki/Hyperinflation) of the fiat currency and the devaluation of people's holdings. Fiat currencies are entirely controlled in their supply and creation by the national government and are backed by nothing but faith in the government. Many countries such as Venezuela have experienced hyperinflation to the point that their fiat currency is now only worth a small fraction of its past value.

All these factors, the lack of faith in governments to protect their fiat currencies, the lack of trust in banks to protect people's holdings, and so on, led to a  question about the modern financial system: *Is there a better alternative?*

### And then came Bitcoin
On **October 31st, 2008**, under the _pseudonym_ of "Satoshi Nakamoto", the [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf) was discreetly released. From its very title and abstract, one could understand that the aim of _his_ invention was to create an "electronic cash system", an alternative to fiat currency, able to function free of control or manipulation from a centralized entity.

On **January 3rd, 2009**, this "blockchain" went live, and the first _block_ was created, called the "Genesis Block" (you will learn about what a _block_ is, in the next chapter). The Genesis block contained the first few exchanges of this newly created electronic currency called Bitcoin and some data. It is indeed possible to store some raw data inside a block, and Satoshi Nakamoto included in the first block a message saying: "_Chancellor on the brink of second bailout for banks_", the title of _The Times_ newspaper of the day describing the second bank bailout following the subprime crisis.

This message clearly showed the intention of Satoshi Nakamoto and his Bitcoin to trigger the so-called **de-centralization of money**.

![](../../static/img/blockchain-basics/the-times.png)
<small className="figure">FIGURE 1: <em>The Times</em> newspaper from January 3rd, 2009</small>

### What is Bitcoin?
Bitcoin is a [decentralized network protocol](https://en.wikipedia.org/wiki/Decentralized_network_protocol) made of various cryptographic components (e.g., asymmetric cryptography, hash functions, proof-of-work, etc.), ensuring its functionality and security. This is why the Bitcoin currency and other digital coins are referred to as **crypto-currencies**.

Contrary to popular belief, Bitcoin wasn't the first attempt at creating a crypto-currency. _Digicash_ (1989), _CyberCash_ (1994), _E-gold_ (1996), _HashCash_ (from Adam Back in 1997), _Bit Gold_ (1998) and _B-money_ (from Wei Dai in 1998) were all very close to such a goal, but all failed because of technical or security issues. _Bit Gold_ and _B-money_ even used a decentralized database for transactions and an older version of Bitcoin's _Proof-of-Work_ (consensus mechanism which will be detailed in the ["*Proof-of-Work*"](/blockchain-basics/proof-of-work) chapter). But Bitcoin was the first to have components assembled in such a way that made it viable.

The key concepts underlying Bitcoin were not new either and were based on technologies used for years before that. Bitcoin relies on a lot of "old" Information Technologies (IT). Some from as far back as 1973 and up until the Genesis Block in 2009.

Bitcoin's system was actually born from 36 years of research, trials, experiments, and failures. It wouldn't be useful to know the precise history but to understand that Bitcoin didn't come from thin air here are some key elements:

First of all, Bitcoin relies on the Internet, which itself has been relying on _TCP/IP_ since 1974.

Bitcoin also relies heavily on _Modern Cryptography_, e.g., the Diffie-Hellman protocol (1976, in collaboration with Ralph Merkle), the Merkle Tree (1979), and the RSA (Rivest–Shamir–Adleman) public-key cryptosystem (1977).

The blocks of data are cryptographically chained with [Cipher Block Chaining (CBC)](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_block_chaining_(CBC)) a principle, from 1976. The aim and the creation of this chain of blocks will be explained in the following chapters (["*Main Properties of the First Blockchain*"](/blockchain-basics/main-properties) and ["*Proof-of-Work*"](/blockchain-basics/proof-of-work)).

From there, countless reflections and research on ethics in technologies, and of course cryptography have taken place: Email traceability and privacy in 1981, Elliptic Curve Cryptography in 1985 (used for _Public Key Cryptography_ in most blockchains), PGP in 1991 (developed for privacy providing authentication and encryption), etc. Even "smart contracts" were pre-existing, having been first conceptualized by Nick Szabo in 1997.

In 2001, the _Bittorent_ client provided more support to the peer-to-peer networks experimental research: An essential opening towards enabling further decentralization.

Finally, before the bankruptcy of Lehman Brothers and the global financial crisis in 2008, Hal Finney (1956-2014), a developer at PGP, released his "Reusable Proof-of-Work" in 2004. Later on, he became one of the first people to exchange Bitcoins with Satoshi Nakamoto.

### The 2nd generation of blockchains
Following the success of Bitcoin, many forked its code and started creating new blockchains with differentiating features or capabilities.

Note here that Bitcoin's transactions are, to a certain degree programmable. One can program how funds are spent using scripts. However, only a small set of basic uses is possible in practice as Bitcoin's underlying scripting language is very limited.

In 2011, Vitalik Buterin discovered Bitcoin, and two years later (October 2013) began work on a proposal for an extention of [_Mastercoin_] (https://web.archive.org/web/20150627031414/http://vbuterin.com/ultimatescripting.html), a protocol with more programmable capabilities than Bitcoin.

However, the team at _Mastercoin_ didn't want to go in this direction, and Vitalik Buterin began to re-work his proposal into another project named _Ethereum_ (December 2013). The interest into [_**D**ecentralized **A**utonomous **O**rganizations_](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization) (or DAO) drove the need for even more complex scripts. A "DAO" is a form of investor-directed venture capital fund that no blockchain could so far implement. It was also in December 2013 that Gavin Wood (protocol-side) and Jeffrey Wilcke (client-side) joined forces with Vitalik Buterin to work on Ethereum, and a [white paper was first published in January 2014](https://ethereum.org/en/whitepaper/).

In April 2014, Gavin Wood published a [Yellow paper](https://ethereum.github.io/yellowpaper/paper.pdf). A yellow paper is a document containing research that has not yet been formally accepted or published in an academic journal. It usually contains unannotated statements with sufficient details to implement an idea. A white paper is an authoritative report or guide that informs readers concisely about a complex issue and presents the issuing body's philosophy on the matter.

Crowdfunding in bitcoins during the same summer took place, and Ethereum was launched on July 30th, 2015, with its own cryptocurrency called "_Ether_".

Ethereum was a revolution, a new generation of blockchain, thanks to its **EVM** ([Ethereum Virtual Machine](https://ethereum.org/en/developers/docs/evm/)), a [Turing Complete](https://en.wikipedia.org/wiki/Turing_completeness) system able to solve any computation problem using its new low-level scripting language called "[_EVM Code_](https://ethereum.org/en/whitepaper/#code-execution)". Ethreum also provided a high-level language called "[_Solidity_](https://soliditylang.org/)".

The first DAO on Ethereum, simply called "[_The DAO_](https://en.wikipedia.org/wiki/The_DAO_(organization))" was created, and more than 150 million US Dollars in Ethers were raised in June 2016. However, an error in a *smart contract* (a program that was written in the Solidity language) [permitted a hacker to steal 50 million](https://www.nytimes.com/2016/06/18/business/dealbook/hacker-may-have-removed-more-than-50-million-from-experimental-cybercurrency-project.html). To recover the stolen funds, it was decided to modify the history of transactions. This decision was not approved by the entire community and it created a split of the history (this is called a "*hard fork*", we will explain this concept later on) into two different blockchains: _Ethereum_ and _Ethereum Classic_. The various technologies protect the history of a blockchain. It should be immutable (find more about this in the next chapter [here](/blockchain-basics/main-properties#chained-data-structure)). Hence, the disapproval of a part of the community. *Ethereum Classic* users chose to respect this immutability and so **kept the theft** in their blockchain history.

Today, Bitcoin and Ethereum remain the two main protocols with the most adoption, but many exciting alternatives have been created, notably Tezos in 2018.

![A non-hexaustive timeline](../../static/img/blockchain-basics/timeline.svg "A non-hexaustive timeline")
<small className="figure">FIGURE 2: A non-hexaustive timeline</small>

## Terminology
A *blockchain* is a particular type of [_**D**istributed **L**edger **T**echnology_](https://en.wikipedia.org/wiki/Distributed_ledger) (DLT), a consensus on replicated, shared, and synchronized digital information, geographically spread across multiple sites.

Not all blockchains are cryptocurrencies. For instance, [Corda](https://www.corda.net/) and [Fabric](https://www.hyperledger.org/use/fabric) are blockchains often used for immutable and cryptographically verified storage of data in various domains: Secure sharing of medical data, music royalties tracking, personal identity security, supply chain, logistics monitoring or voting mechanism, etc.

It is important not to confuse a cryptocurrency (first made to exchange value) with its supporting component: a *blockchain*. Note that **originally**, the word "*blockchain*" did **not** designate a technology, but the name of the **data-structure** used to store the data (find more about this in the next chapter [here](/blockchain-basics/main-properties#chained-data-structure)).

The exact word "blockchain" doesn't even appear in the Bitcoin whitepaper but it **now reflects the technology** used to arrange and chain data to ensure _immutability_ and _cryptographic verifiability_.

Crypto-currencies have many essential characteristics of a currency:
- They are scarce
- They can be accepted as units of account
- They can be accepted as stores of value
- They can be accepted as mediums of exchange

However, exchanges of the units of account are directly programmable by a user.

To really create a distributed currency without a central authority, Satoshi Nakamoto had to solve the problem of double-spending **in a large distributed environment** which was no easy task, as we will see in the following chapters.

## References

[1] https://medium.com/@noogin/the-financial-crisis-and-history-of-bitcoin-27ebdb932b99

[2] https://en.wikipedia.org/wiki/Subprime_mortgage_crisis

[3] https://en.wikipedia.org/wiki/Fractional-reserve_banking

[4] https://bitcoin.org/bitcoin.pdf

[5] https://ethereum.org/en/whitepaper/
