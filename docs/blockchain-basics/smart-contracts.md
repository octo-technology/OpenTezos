---
id: smart-contracts
disable_pagination: true
title: Smart Contracts
slug: /blockchain-basics
---

import NotificationBar from '../../src/components/docs/NotificationBar';

<h1 className="p">Under construction.</h1>

<NotificationBar>
  <p>
    Lorem ipsum
  </p>
</NotificationBar>

# Smart Contracts
In this chapter, we'll explain how and why Bitcoin's programming features are limited. We'll define what are "Smart Contracts" and how they are already present on Bitcoin. And finally, why the concept of "Gas" was introduced on Ethereum and what it means.

## Limitations of Bitcoin
Bitcoin's first use-case is *distributed digital currency*. It's also an *augmented* currency in that way it's a *programmable* currency. Basically, what is programmable are **spending conditions**.

The metaphor of **vaults** containing bitcoins is very useful: bitcoins are **always locked inside _vaults_**.

The codes written always describe **how** vaults could be opened and *bitcoins moved to other vaults*.

The low-level language used to describe these spending conditions is called "*Script*". By extension, we call it "*Bitcoin Script*"[[1]](/blockchain-basics/smart-contracts#references). It is inspired by "*Forth*"[[2]](/blockchain-basics/smart-contracts#references) (Charles H. Moore). Both *Forth* and *Bitcoin Script* are *stack-based* languages[[3]](/blockchain-basics/smart-contracts#references).

Below is the *legacy* code[[4]](/blockchain-basics/smart-contracts#references) awaiting to be solved to allow the simplest transaction from one vault to another:

```xml
OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG
```
Operands are in between "**<**" and "**>**", while operators are in capitals and begin with "**OP_**".

If **the awaited _public key_** and a **valid corresponding _signature_** are provided, the vault is opened:

```xml
<sig> <pubKey> 
```

Because *Bitcoin Script* is stack-based, the complete code that would be executed is:

```xml
<sig> <pubKey> OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG
```
So, the solution has to be provided here before the problem.

The fact that *Bitcoin Script* is a low-level and stack-based language is already a kind of limitation: it is pretty hard to code. It is also hard to optimise (scripts size and fees to pay).

## Definition of a "smart" contract


## Halting problem of Turing-complete machines and Gas


## What have we learned so far?
In this chapter, we briefly described 10 consensuses that can be used for public blockchains. There are many other consensus algorithms.

In the next chapter "_Smart Contracts_", we'll define what they are, what are some of the Bitcoin's limitations in that matter, and how Ethereum first proposed to lift those limitations.

## References
[1] https://en.bitcoin.it/wiki/Script

[2] https://en.wikipedia.org/wiki/Forth_(programming_language)

[3] https://en.wikipedia.org/wiki/Stack-oriented_programming

[4] https://en.bitcoin.it/wiki/Transaction#Pay-to-PubkeyHash

[] https://en.wikipedia.org/wiki/Nick_Szabo

[] [Nick Szabo: *Smart Contracts: Building Blocks for Digital Markets*](https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart_contracts_2.html)

[] [Nick Szabo: *The Idea of Smart Contracts*](https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart_contracts_idea.html)