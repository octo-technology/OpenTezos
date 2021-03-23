---
id: introduction
title: Introduction
slug: /michelson
---

To write smart contracts for Tezos, you can either choose a high-level language such as [LIGO](/404.html) or [SmartPy](/404.html), or the official low-level language called Michelson.

At the end of this module, you will be able to:
- manipulate a stack-based language,
- write basic smart contracts in Michelson, 
- understand the constitutive part of a smart contract (entrypoint, storage, code),
- test a smart contract.

This module is inspired from the official Michelson documentation available [here](https://tezos.gitlab.io/007/michelson.html) and [here](https://tezos.gitlab.io/michelson-reference/).

## Environment

Before you proceed, it is recommended to set up a dev environment to test your Michelson scripts.

A sandbox node can be launched by following the [Deploy a node module](/404.html) or the official documentation at [https://tezos.gitlab.io/user/sandbox.html](https://tezos.gitlab.io/user/sandbox.html).

Once your _tezos-client_ is installed and configured, you can test your smart contract with the following command:

```
tezos-client run script example.tz on storage '0' and input '5'
```

It is also possible to verify whether the smart contract is well-formatted and respects the language's grammar with the following command:

```
tezos-client typecheck script example.tz -v
```
