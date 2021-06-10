---
id: cli-baker
title: CLI to become a baker
authors: Maxime Sallerin
---

In this chapter we will see the CLI command lines for registering as a delegate and then we will see how to exercise your rights as a baker, endorser and accuser.

To learn more about how baking works take a look at the [Baking](/baking) module.

This module requires the deployment of its own Tezos node explained in the module [Deploy a node](/deploy-a-node).

## Running a Delegate

A delegate is responsible for baking blocks, endorsing blocks and accusing other delegates in case they try to double bake or double endorse.

### What you need

- Reliable internet connection
- At least 8,000 XTZ (1 roll) in your wallet
- A tezos node configured and running (if not go [here](/deploy-a-node))


### Register as a delagate

To run a delegate, you first need to register as one using your implicit account:

```shell
tezos-client register key bob as delegate
```

Once registered, you need to wait 7 cycles (~ 20 days) for your rights to be considered.

### Baker

The baker is a daemon that, once connected to an account, computes the baking rights for that account, collects transactions from the mempool and bakes a block. Note that the baker is the only program that needs direct access to the node data directory for performance reasons.

Let’s launch the daemon pointing to the standard node directory and baking for user _bob_

```shell
tezos-baker-alpha run with local node ~/.tezos-node bob
```