---
id: cli-baker
title: CLI to become a baker
authors: Maxime Sallerin
---

In this chapter, we will see the CLI command lines for registering as a delegate and, then we will see how to exercise your rights as a baker, endorser and, accuser.

To learn more about how baking works, take a look at the [Baking](/baking) module.

This module requires the deployment of its own Tezos node explained in the module [Deploy a node](/deploy-a-node).

## Running a Delegate

A delegate is responsible for baking blocks, endorsing blocks and, accusing other delegates in case they try to double bake or double endorse.

### What you need

- Reliable internet connection
- At least 8,000 XTZ (1 roll) in your wallet
- A tezos node configured and running (if not go [here](/deploy-a-node))

### Registration

#### Create an implicit account

//TODO

#### Supply the implicit account

//TODO

#### Register as a delagate

To run a delegate, you first need to register as one using your implicit account:

```shell
tezos-client register key bob as delegate
```

Once registered, you need to wait 7 cycles (~ 20 days) for your rights to be considered.

### Baker

The baker is a daemon that, once connected to an account, computes the baking rights for that account, collects transactions from the mempool and, bakes a block. Note that the baker is the only program that needs direct access to the node data directory for performance reasons.

Let’s launch the daemon pointing to the standard node directory and baking for user *bob*

There are different command lines depending on the network on which your node is configured

- Florencenet: `tezos-baker-009-PsFLoren`
- Granadanet: `tezos-baker-010-PtGRANAD`
- Mainnet: `tezos-baker-alpha`

```shell
tezos-baker-alpha run with local node ~/.tezos-node bob
```

> Warning ! Remember that having two bakers or endorsers running connected to the same account could lead to double baking/endorsing and the loss of all your bonds. If you are worried about the availability of your node when it is its turn to bake/endorse, there are other ways than duplicating your credentials (see the discussion in section [Inactive delegates](https://tezos.gitlab.io/introduction/howtorun.html#inactive-delegates)). Never use the same account on two daemons.

### Endorser

The endorser is a daemon that, once connected to an account, computes the endorsing rights for that account and, upon reception of a new block, verifies the validity of the block and emits an endorsement operation. It can endorse for a specific account or if omitted it endorses for all accounts.

There are different command lines depending on the network on which your node is configured

- Florencenet: `tezos-endorser-009-PsFLoren`
- Granadanet: `tezos-endorser-010-PtGRANAD`
- Mainnet: `tezos-endorser-alpha`

```shell
tezos-endorser-alpha run
```

### Accuser

The accuser is a daemon that monitors all blocks received on all chains and looks for:
- bakers who signed two blocks at the same level
- endorsers who injected more than one endorsement operation for the same baking slot

Upon finding such irregularity, it will emit respectively a double-baking or double-endorsing denunciation operation, which will cause the offender to lose its security deposit.

There are different command lines depending on the network on which your node is configured

- Florencenet: `tezos-accuser-009-PsFLoren`
- Granadanet: `tezos-accuser-010-PtGRANAD`
- Mainnet: `tezos-accuser-alpha`

```shell
tezos-accuser-alpha run
```


## References

[1] https://tezos.gitlab.io/introduction/howtorun.html#delegateregistration