---
id: set-up-a-node
title: Set-up a node
authors: Maxime Sallerin
---

In this chapter, we will see how to create and deploy your own node.

### PATH Setup

Note that at the opening of each new terminal, you should set up the PATH. Otherwise, just add `./` at the beginning of each `tezos-` command in this chapter.

```shell
export PATH=~/tezos:$PATH
```

### Node initial configuration (optional)

It is possible to define the directory where the data will be stored with `--data-dir` (by default, in .tezos-node)

By default, the network is Mainnet but, you can specify the network with the `--network` option.

For example, the following command configurse the node for the Florencenet Network and stores data in a specified directory:

```shell
tezos-node config init --data-dir ~/tezos-florencenet --network florencenet`.
```

More about Networks in the [Networks chapter](/deploy-a-node/networks).

If you want to know more about possible alternative node configurations, check out [Node Configuration](https://tezos.gitlab.io/user/node-configuration.html)

### Node identity

First, you must generate a new identity in order to connect to the Tezos network.

```shell
cd tezos
tezos-node identity generate
```

The identity comprises a pair of cryptographic keys that nodes use to encrypt messages sent to each other. 

> Note that this is merely a network identity. It is not related in any way to a Tezos address on the blockchain.

It will take some time to generate the keys. An `identity.json` file will then be generated in the `~/.tezos-node` (by default) directory. It will contain our public and private keys. Keep it safe and secure!

### Node synchronisation

Whenever a node starts, it tries to retrieve the most current head of the chain from its peers. This can be a long process if there are many blocks to retrieve.

So, rather than taking days to download the Tezos blockchain from the P2P network, a node can be quickly synchronized in a few minutes from **snapshot**.

> The term snapshot is a bit of an unfortunate term as it already has another meaning in Tezos, which is the schedule for baking rights. To be clear, the snapshot we are talking about is completely different from the baking rights snapshot. This snapshot is a compressed copy of the chain at a certain block.
> To learn more about snapshots, [here](https://blog.nomadic-labs.com/introducing-snapshots-and-history-modes-for-the-tezos-node.html) is an article from Nomadics Labs.

#### Downloading snapshot

Download the correct snapshot depending on whether you want to configure your node on the [Mainnet](/deploy-a-node/networks#Mainnet) or on a [Testnet](/deploy-a-node/networks#est-networks).

1. Download the last **rolling** snapshot on this site [snapshots-tezos.giganode.io](https://snapshots-tezos.giganode.io/) (use the 'WEB' link)
   > The file is about 1.3 GB and should take a few minutes to download.
2. Copy the file into the `/tezos` folder.

- **rolling mode** are the most lightweight snapshots. Keeps a minimal rolling fragment of the chain and deleting everything before this fragment. Safe for baking, endorsing, and validating new blocks.
- **full mode** store all chain data since the beginning of the chain, but drop the archived contexts below the current checkpoint. Safe for baking, endorsing, and validating new blocks.

#### Importing a snapshot

The mechanism of Snapshots can help in reducing the synchronization time.

The following command bootstrap an empty Tezos node from the `<snapshot.rolling>` file to a rolling Tezos node.

```shell
tezos-node snapshot import <snapshot.rolling>
```

> This command should take a few minutes.

### Starting the node

With the following command, the node will now catch up syncing with the live network.

```shell
tezos-node run --rpc-addr 127.0.0.1:8732 --log-output tezos.log &
```

The parameter `--rpc-addr url:port` activates the RPC interface that will allow communication with the node. By default, it runs on port `8732`, so it is not mandatory to specify it.

Watch the progress by viewing tezos.log
```shell
tail -f tezos.log
```
To stop viewing the log, press CTRL+C (Ubuntu and Mac OS).

The Tezos client can be used to interact with the node. It can query its status or ask the node to perform some actions. For example, after starting your node, you can check if it has finished synchronizing with the following command (you can use another terminal window if you still watch the log) :

```shell
tezos-client bootstrapped
```

When you see the message `Node is Bootstrapped`, your Tezos node is synced with the blockchain, and you may now perform operations on the latter.

Congratulations on setting up a node!

> Be careful closing terminal windows because **this stops the node**.

## Conclusion

In this module, we have seen how to install Tezos from sources, create our own node, synchronize it with the blockchain and finally launch it.

This module is a prerequisite to becoming a baker, and the [Deploy Bakers](/baker) module explains how to become a baker and start earning XTZ rewards.

## References

[1] https://tezos.gitlab.io/introduction/howtouse.html#node-identity

[2] https://www.coincashew.com/coins/overview-xtz/guide-how-to-setup-a-baker/install-a-tezos-node

[3] https://quantifyfitness.com/how-to-solo-bake-tezos-step-by-step-guide/

[4] https://blog.nomadic-labs.com/introducing-snapshots-and-history-modes-for-the-tezos-node.html

[5] https://tezos.gitlab.io/user/node-configuration.html

