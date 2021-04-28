---
id: smart-contracts
disable_pagination: true
title: Smart Contracts
authors: Thomas Zoughebi
---

import NotificationBar from '../../src/components/docs/NotificationBar';

In this chapter, we're going to explain how and why Bitcoin's programming features are limited. We'll define what are _Smart Contracts_ and how they are already present on Bitcoin. And finally, what is _Gas_ and why it was introduced on Ethereum.

## Limitations of Bitcoin
The primary use-case of Bitcoin is being a *distributed digital currency*. It's also an *augmented* currency in that way that it is a *programmable* currency. Basically, what is programmable are **spending conditions**.

The metaphor of **vaults** containing bitcoins is very useful: bitcoins are **always locked inside _vaults_**.

Programable conditions for Bitcoin describe **how** vaults can be opened and *bitcoins moved to other vaults*.

The low-level language used to describe these spending conditions is called *Script*. By extension, we call it *Bitcoin Script* [[1]](/blockchain-basics/smart-contracts#references). It is inspired by *Forth* [[2]](/blockchain-basics/smart-contracts#references) from Charles H. Moore. Both *Forth* and *Bitcoin Script* are *stack-based* languages [[3]](/blockchain-basics/smart-contracts#references).

Below is the *legacy* code [[4]](/blockchain-basics/smart-contracts#references) that allows the simplest transaction from one vault to another:
//TODO: Why the word legacy? What does it mean here?

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

So, the solution has to be provided here before the problem. //TODO: what??

The fact that *Bitcoin Script* is a low-level and stack-based language does not actually limit coding possibilities. It is only hard to optimise (scripts size and fees to pay). For instance, at the same low-level, *Ethereum* also uses [OP_codes](https://www.ethervm.io/) and a stack [[5]](/blockchain-basics/smart-contracts#references). EVM code is the _Bitcoin Script_ of _Ethereum_.

The first limitation is simply the number and types of usable *OP_codes*. For security purposes, various *OP_codes* are either totally absent, or have been disabled [[1]](/blockchain-basics/smart-contracts#references) following the discovery of vulnerabilities.

Certain absences of *OP_codes* are voluntary. They could lead to errors and out of control operations. This actually means *Bitcoin Script* is **willingly non-turing complete**. For instance, it is impossible to create a **loop** with *Bitcoin Script*.

The transactions structure is also limiting possibilities. Two very important points should be understood while programming with Bitcoin Script:
- a Bitcoin script is unable to know and handle the **transaction amount** inside which it is
- a Bitcoin script is **unaware of anything happening outside the stack**. It **can't access the blockchain data**.

Finally, because of the "*vaults*" system, knowing the balance of someone means checking all the vaults [[6]](/blockchain-basics/smart-contracts#references). 
//TODO: You can't se the public address of the vault?
This is a major difference with system like Ethereum, which have an *account* point of view.

## Definition of a "smart" contract
The very first definition of "*Smart Contracts*" is originally from Nick Szabo [[7]](/blockchain-basics/smart-contracts#references) in 1996 [[8]](/blockchain-basics/smart-contracts#references):

<NotificationBar>
  <p>A smart contract is a set of promises, specified in digital form, including protocols within which the parties perform on these promises.
  //TODO: hum what?
  </p>
</NotificationBar>

Strictly speaking, a Bitcoin transaction is a smart contract. The promise to open the *vault* from one party is fulfilled, given that the other party has the right solution. //TODO: What solution?

## Halting problem of Turing-complete machines and Gas
To be able to increase the possibilities of smart contracts, more *OP_codes* had to be incorporated inside blockchain systems. With Ethereum, adding these *OP_codes* made the low-level language _Turing-complete_. This meant that from this moment on, one could program any kind of operation, including *jumps* and *loops*.

A loop is a problem for a Turing-complete machine, especially one which uses a currency to function: an halting problem. If we can't control the halt of the machine in an endless loop, we can't control the endless spending of the currency either.

So the idea of Ethereum was to introduce another variable to stop the machine: **_Gas_**. A machine running on gas can't move endlessly without enough gas. That's exactly what's happening with Ethereum smart contracts. Gas, which is a sub-unit of the *Ether* currency, is consumed with each operation.

Gas consumption isn't the same for all operations, because certain operations are more complex than others.

//TODO: Gas is also to pay miners for using their computational power to execute code.

## What have we learned so far?
In this chapter, we learned what are *Smart Contracts*, what are the limiting factors of Bitcoin's smart contracts, and how *Gas* was introduced to lift them.

This chapter concludes the "*Blockchain Basics*" module. The next module will focus of the basics of Tezos.

## References
[1] https://en.bitcoin.it/wiki/Script

[2] https://en.wikipedia.org/wiki/Forth_(programming_language)

[3] https://en.wikipedia.org/wiki/Stack-oriented_programming

[4] https://en.bitcoin.it/wiki/Transaction#Pay-to-PubkeyHash

[5] https://ethereum.org/en/developers/docs/evm/

[6] https://en.bitcoin.it/wiki/UTXO

[7] https://en.wikipedia.org/wiki/Nick_Szabo

[8] [Nick Szabo: *Smart Contracts: Building Blocks for Digital Markets*](https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart_contracts_2.html)