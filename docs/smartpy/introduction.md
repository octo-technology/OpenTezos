---
id: introduction
title: Introduction
slug: /smartpy
authors: Maxime Sallerin
---

The goal of this module is to allow a developer to write smart contracts with SmartPy.
In the form of a pedagogical course illustrated with an example of a smart contract,
the developer will have acquired the essentials to write, test, and analyze his smart contract.

Tezos smart contracts are written in [Michelson](https://opentezos.com/michelson), which is a stack-based language.
It is the lowest level of a Tezos smart contract: The Michelson code is what will be deployed on a Tezos network.
However, if reading or writing Michelson code is still easy for small smart contracts,
it can become very tedious for more complex smart contracts:

- there are no variables nor functions
- no syntactic sugar
- the Michelson code cannot be broken down into several files
- stack-based languages are not commonly used when it comes to web development.

SmartPy solves these issues.
It is a high-level smart contracts library
and comes with related tools in the form of [SmartPy.io](https://smartpy.io/) to greatly ease
the accessibility, understandability, and provability of smart contracts on Tezos.

- Use a popular programming language Python
- A set of high-level primitives, SmartML, written in OCaml for a new smart contracts virtual machine
  that can be compiled into Michelson.
- A compiler to translate SmartML contracts to Michelson.
- Analytics are elements of the user interface that provide some automatic procedures in SmartPy.io
  to analyze and prove properties of smart contracts

![](../../static/img/smartpy/smartpy_intro.svg)
<small className="figure">FIGURE 1: From SmartPy to Michelson, Tests, and Analytics </small>

Once built, SmartPy contracts become SmartML contracts and are handled in an OCaml library called SmartEngine it can then be compiled into a single Michelson code file.
This Michelson file is the smart contract that will be deployed on a Tezos network.

## References

[1] https://tzstats.com/blog/next-gen-blockchain-indexing-for-tezos/https://smartpy.io/

[2] https://smartpy-io.medium.com/introducing-smartpy-and-smartpy-io-d4013bee7d4e
