---
id: set-up-a-node
title: Set-up a node
authors: Maxime Sallerin
---

### Node identity

First, you must generate a new identity in order to connect to the Tezos network.

```shell
tezos-node identity generate 26
```

The identity comprises a pair of cryptographic keys that nodes use to encrypt messages sent to each other, and an antispam-PoW stamp proving that enough computing power has been dedicated to creating this identity. Note that this is merely a network identity and it is not related in any way to a Tezos address on the blockchain.

### Node synchronisation

Whenever a node starts, it tries to retrieve the most current head of the chain from its peers. This can be a long process if there are many blocks to retrieve.

So, rather than taking days to download the Tezos blockchain from the p2p network, a node can be quickly synchronized in a few minutes from **snapshot**.

#### Snapshots

The mechanism of Snapshots can help in reducing the synchronization time.


## References

[1] https://tezos.gitlab.io/introduction/howtouse.html#node-identity

[2] https://www.coincashew.com/coins/overview-xtz/guide-how-to-setup-a-baker/install-a-tezos-node

[3] https://tezbaker-io.medium.com/tezos-mainnet-setting-up-home-baking-on-a-mac-c7730a68c41d
