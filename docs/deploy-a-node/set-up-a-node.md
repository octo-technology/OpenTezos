---
id: set-up-a-node
title: Set-up a node
authors: Maxime Sallerin
---

### PATH Setup

Note that at the opening of each new terminal you should set up the PATH. Otherwise, just add `./` at the beginning of each command in this chapter.

```shell
export PATH=~/tezos:$PATH
```

### Node identity

First, you must generate a new identity in order to connect to the Tezos network.

```shell
cd tezos
tezos-node identity generate 26
```

The identity comprises a pair of cryptographic keys that nodes use to encrypt messages sent to each other.

> Note that this is merely a network identity. It is not related in any way to a Tezos address on the blockchain.

### Node synchronisation

Whenever a node starts, it tries to retrieve the most current head of the chain from its peers. This can be a long process if there are many blocks to retrieve.

So, rather than taking days to download the Tezos blockchain from the p2p network, a node can be quickly synchronized in a few minutes from **snapshot**.

> The term snapshot is a bit of an unfortunate term as it already has another meaning in Tezos, which is the schedule for baking rights. To be clear the snapshot we are talking about is completely different from the baking rights snapshot. This snapshot is a compressed copy of the chain at a certain block.
> To learn more about snapshots, [here](https://blog.nomadic-labs.com/introducing-snapshots-and-history-modes-for-the-tezos-node.html) is an article from Nomadics Labs.

#### Downloading snapshot

1. Download the last rolling snapshot on this site [snapshots-tezos.giganode.io](https://snapshots-tezos.giganode.io/)
   > The file is about 1.3 GB and should take a few minutes to download.
2. Copy the file into the `/tezos` folder.

- **rolling mode** are the most lightweight snapshots. Keeps a minimal rolling fragment of the chain and deleting everything before this fragment. Safe for baking, endorsing, and validating new blocks.
- **full mode** store all chain data since the beginning of the chain, but drop the archived contexts below the current checkpoint. Safe for baking, endorsing, and validating new blocks.

#### Importing a snapshot

The mechanism of Snapshots can help in reducing the synchronization time.

The following command bootstrap a Tezos node from the `<snapshot.rolling>` file to an empty Tezos node directory.

```shell
tezos-node snapshot import <snapshot.rolling>
```

> This command should take a few minutes.

### Starting the node

With the following command, the node will now catch up syncing with the live network.

```shell
tezos-node run --rpc-addr 127.0.0.1:8732 --log-output tezos.log &
```

Watch the progress by viewing tezos.log
```shell
tail -f tezos.log
```

Tezos client can be used to interact with the node, it can query its status or ask the node to perform some actions. For example, after starting your node you can check if it has finished synchronizing using in an other terminal.

```shell
tezos-client bootstrapped
```

When you see the message `Node is Bootstrapped`, your tezos node is synced with the blockchain and you may now perform operations on the blockchain.

Congratulations on setting up a node !

## Conclusion

In this module we have seen how to install Tezos from sources, create its own node, synchronize it with the blockchain and finally launch it.

This module is a prerequisite to become a baker and the [Deploy Bakers](/baker) module explains how to become a baker to start earning XTZ rewards.

## References

[1] https://tezos.gitlab.io/introduction/howtouse.html#node-identity

[2] https://www.coincashew.com/coins/overview-xtz/guide-how-to-setup-a-baker/install-a-tezos-node

[3] https://quantifyfitness.com/how-to-solo-bake-tezos-step-by-step-guide/

[4] https://blog.nomadic-labs.com/introducing-snapshots-and-history-modes-for-the-tezos-node.html



