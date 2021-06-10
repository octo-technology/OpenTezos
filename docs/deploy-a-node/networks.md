---
id: networks
title: What about networks?
authors: Maxime Sallerin and Thomas Zoughebi
---

In this chapter, we will see how Tezos is multi-networks. We will learn what the "*main network*" and the "*test networks*" are. Finally, we will discover how to configure our node on a chosen network.

## Multinetwork Node

Tezos is run on several networks, such as the **Mainnet** (the *main* network) and various **testnets** (test networks). Some users may also want to run their own networks for various reasons. Networks differ in multiple ways:

- they start **from their own genesis block**
- they have **different names** so that nodes know not to talk to other networks
- they may run (or have run) **different protocols**
- protocols may run with **different constants** (for instance, test networks move faster)
- they have **different bootstrap peers** (nodes that new nodes connect to initially)
- they may have had user-activated upgrades or user-activated protocol **overrides** to change the protocol *without going through the voting process*.

By default, the multinetwork node connects to **Mainnet**. To connect to other networks, you can either use one of the **Built-In Networks** or configure the node to connect to [Custom Networks](https://tezos.gitlab.io/user/multinetwork.html#custom-networks).

## Built-In Networks

### Test Networks

Mainnet is the main Tezos network but *is not appropriate for testing*. Other networks are available to this end. Test networks usually run with different constants *to speed up the chain*.

Test networks have a list of built-in accounts with some funds. You can obtain the keys to these accounts from a faucet to claim the funds. All networks share the same faucet: [faucet.tzalpha.net](https://faucet.tzalpha.net/). The obtained keys from this faucet work **on all test networks**.

The last two built-in networks to be used as a test network are:

- [Granadanet](https://tezos.gitlab.io/introduction/test_networks.html#granadanet)
- [Florencenet](https://tezos.gitlab.io/introduction/test_networks.html#florencenet)

### Network configuration

The simplest way to select the network to connect to is to use the `--network` option when you initialize your node configuration. For instance, to run on Florencenet:

```shell
tezos-node config init --data-dir /tezos-florencenet --network florencenet
tezos-node identity generate --data-dir /tezos-florencenet
tezos-node run --data-dir /tezos-florencenet
```

> Once initialized, the node remembers its network settings on subsequent runs and reconnects to the same network every time you run it. If you specify a different network when running the node again, it will refuse to start. In order to switch to a different network you need to either reinitialize it with a different data directory using the --data-dir option or remove everything from the existing data directory, which defaults to ~/.tezos-node (and also initialize again).

The `--network option` is **not** case-sensitive and can be used with the following built-in networks:

- mainnet (this is the default)
- sandbox
- florencenet (available from version 9.0)
- granadanet (available from version 9.2)

If you did not initialize your node configuration, or if your configuration file doesn't contain a "network" field, the node assumes you want to run **Mainnet**. You can use the `--network` option with `tezos-node run` to make sure your node runs on the expected network. For instance, to make sure that it runs on **Florencenet**:

```shell
tezos-node run --data-dir ~/tezos-florencenet --network florencenet
```

This command will fail with an error if the configured network is **not** *Florencenet*. The node also displays the chain name (such as `TEZOS_MAINNET`) when it starts. Also mind opening the RPC interface as appropriate.

## References

- [1] https://tezos.gitlab.io/user/multinetwork.html#multinetwork
- [2] https://tezos.gitlab.io/introduction/test_networks.html