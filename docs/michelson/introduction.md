---
id: introduction
title: Introduction
---

To write smart contracts for Tezos, you can either choose a high-level language such as [LIGO](/404.html) or [SmartPy](/404.html), or the official low-level language called Michelson.

At the end of this module one will be able 
- to manipulate stack-based language
- to write basic smart contracts in Michelson, 
- to understand the constitutive part of a smart contract (entrypoint, storage, code)
- to test a smart contract

## Reference

This module is inspired from the official Michelson documentation available [here](https://tezos.gitlab.io/007/michelson.html) and [here](https://tezos.gitlab.io/michelson-reference/).

## Environment

Before your proceed, it is recommended to setup a dev environment for testing your Michelson scripts.

A sandbox node can be launched by following the [Deploy a node module](/404.html) or the official documentation at [https://tezos.gitlab.io/user/sandbox.html](https://tezos.gitlab.io/user/sandbox.html).

Once your _tezos-client_ is installed and configured, you can test your smart contract with the following command:

```
tezos-client run script example.tz on storage '0' and input '5'
```

It is also possible to verify if the smart contract is well-formatted and respects the language grammar with the following command:

```
tezos-client typecheck script example.tz -v
```