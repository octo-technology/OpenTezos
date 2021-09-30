---
id: introduction
title: Introduction
slug: /michelson
authors: Frank Hillard
---

To write smart contracts for Tezos, one can either choose the official low-level language called **Michelson**, or a high-level language, such as [LIGO](/ligo/introduction) or [SmartPy](/smartpy/introduction), which compiles into Michelson.

This module focuses on the **Michelson** language.

At the end of this module, you will be able to:
- manipulate a stack-based language,
- write basic smart contracts in Michelson, 
- understand the constitutive parts of a smart contract (entrypoints, storage, code),
- test a smart contract.

This module is inspired from the official Michelson documentation available [here](https://tezos.gitlab.io/007/michelson.html) and [here](https://tezos.gitlab.io/michelson-reference/).

## Environment
Before you proceed, we recommend to set up a development environment on your computer to test your Michelson scripts. Install an IDE such as [Visual Studio Code](https://code.visualstudio.com/) with the Michelson extensions `vscode-michelson`.

You can launch a sandbox node following the [Deploy a node module](/deploy-node) or the official documentation [here](https://tezos.gitlab.io/user/sandbox.html).

Once _tezos-client_ is installed and configured, you can run your smart contract with the following command:

```
tezos-client run script example.tz on storage '0' and input '5'
```

It is also possible to verify whether the smart contract is well-formatted and respects the language's grammar using the following command:

```
tezos-client typecheck script example.tz -v
```
