---
id: smart-contracts
disable_pagination: true
title: Smart Contracts
authors: Thomas Zoughebi
---

import NotificationBar from '../../src/components/docs/NotificationBar';

In this chapter, we're going to explain how and why Bitcoin's programming features are limited. We'll define what _Smart Contracts_ are and how they are already present on Bitcoin. And finally, we'll define what _Gas_ is and why it was introduced on Ethereum.

## Limitations of Bitcoin
The primary use case of Bitcoin is to be a *distributed digital currency*. It's also an *augmented* currency that is a *programmable* currency, with such things as programmable **spending conditions**.

The metaphor of **vaults** is meaningful and often used, as bitcoins are **always locked inside _transactions_**.

Programable conditions for Bitcoin describe **how** vaults can be opened and *bitcoins moved to other vaults*.

The low-level language used to describe these spending conditions is called *Script*. By extension, we call it *Bitcoin Script* [[1]](/blockchain-basics/smart-contracts#references). It is inspired by *Forth* [[2]](/blockchain-basics/smart-contracts#references) by Charles H. Moore. Both *Forth* and *Bitcoin Script* are *stack-based* languages [[3]](/blockchain-basics/smart-contracts#references).

Below is the *legacy* code (before [*Segregated Witness*](https://en.bitcoin.it/wiki/Segregated_Witness) activation) that allows the simplest transaction from one vault to another [[4]](/blockchain-basics/smart-contracts#references):

```xml
OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG
```

Operands are in-between "**<**" and "**>**", while operators are in capitals and begin with "**OP_**".

If **the awaited _public key_** and a **valid corresponding _signature_** are provided, the vault is opened:

```xml
<sig> <pubKey> 
```

Because *Bitcoin Script* is stack-based, the complete code executed is:

```xml
<sig> <pubKey> OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG
```

So, in the stack, the solution "`<sig> <pubKey>`" (key to open the vault) has to be provided here first, before the problem "`OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG`" (lock of the vault).

The fact that *Bitcoin Script* is a low-level and stack-based language does not actually limit coding possibilities. For instance, at the same low-level, *Ethereum* also uses [OP_codes](https://www.ethervm.io/) and a stack [[5]](/blockchain-basics/smart-contracts#references). EVM code is the _Bitcoin Script_ of _Ethereum_.

The first limitation is the number and types of usable *OP_codes*. For security purposes, various *OP_codes* are either absent, or have been disabled [[1]](/blockchain-basics/smart-contracts#references) following the discovery of vulnerabilities.

Certain absences of *OP_codes* are also voluntary. They could lead to errors and out-of-control operations. This means *Bitcoin Script* is **willingly non-turing complete**. For instance, it is impossible to create a **loop** with *Bitcoin Script*.

The transaction's structure also limits possibilities. Two critical points should be understood while programming with Bitcoin Script:
- a Bitcoin script is unable to know and handle the **transaction amount** inside
- a Bitcoin script is **unaware of anything happening outside the stack**. It **can't access the blockchain data**.

Finally, because of the "*vaults*" system, knowing the balance of someone means checking all his/her vaults [[6]](/blockchain-basics/smart-contracts#references). 
This means you need to sum up the amounts of all the transactions sent to the same address in the ledger. This impacts the coding logic of Bitcoin's spending conditions, again because you can't use the balance of a private key inside the code.
This is a significant difference with systems like Ethereum, which have an *account* point of view: you can directly use the amounts and balances inside your codes.

## Definition of a "smart" contract
The very first definition of "*Smart Contracts*" is originally from Nick Szabo [[7]](/blockchain-basics/smart-contracts#references) in 1996 [[8]](/blockchain-basics/smart-contracts#references):

<NotificationBar>
  <p>
  <blockquote>"A smart contract is a set of promises, specified in digital form, including protocols within which the parties perform on these promises." &#8212; Nick Szabo</blockquote>
  </p>
</NotificationBar>

This definition is pretty hard to understand because it is very generic.

A smart contract is a **piece of code** stored inside the *blockchain*. It executes a set of pre-defined instructions (promises). Once deployed (stored), it becomes **immutable**. A smart contract is deployed using a **transaction**, so we embed spending conditions inside it, which are then **immutable**. We will go into more detail about this immutability in the [Tezos Basics module](/tezos-basics/introduction).

Strictly speaking, a Bitcoin transaction is a smart contract. The **promise** to open the *vault* from one party is fulfilled, given that the other party has the right *key* to open it. Note that *the way* this key is provided is also meaningful here. It must follow **protocols**.

## Halting problem of Turing-complete machines and Gas
To increase the possibilities for smart contracts, more *OP_codes* had to be incorporated inside blockchain systems. With Ethereum, adding these *OP_codes* made its low-level language _Turing-complete_. This meant that from this moment on, one could program any operation, including *jumps* and *loops*.

A loop is a problem for Turing-complete machines, especially the ones that use a currency to function. If we can't control the halt of the machine, it can start an endless loop.

So the idea in Ethereum was to introduce another variable to stop the machine: **_Gas_**. A machine running on gas can't move endlessly without enough gas. That's exactly what's happening with Ethereum smart contracts. Gas is the fuel of the Ethereum system and a sub-unit of the *Ether* currency. It is consumed with each operation.

Gas consumption isn't the same for all operations because certain operations are more complex than others. The miners who also execute these operations receive the Gas as fees for using their computational power.

## What have we learned so far?
In this chapter, we learned what *Smart Contracts* are, the limiting factors of Bitcoin's smart contracts, and why *Gas* was introduced.

This chapter concludes the "*Blockchain Basics*" module. The next module will focus on the basics of Tezos.

## References
[1] https://en.bitcoin.it/wiki/Script

[2] https://en.wikipedia.org/wiki/Forth_(programming_language)

[3] https://en.wikipedia.org/wiki/Stack-oriented_programming

[4] https://en.bitcoin.it/wiki/Transaction#Pay-to-PubkeyHash

[5] https://ethereum.org/en/developers/docs/evm/

[6] https://en.bitcoin.it/wiki/UTXO

[7] https://en.wikipedia.org/wiki/Nick_Szabo

[8] https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart_contracts_2.html
