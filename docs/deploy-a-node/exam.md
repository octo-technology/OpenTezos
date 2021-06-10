---
id: exam
title: Exam
authors: Maxime Sallerin
---

### Question 1
What are the two main functions of a Tezos node?

- [ ] Creating and endorsing new blocks.
- [x] Running the gossip network and updating the context.

### Question 2
What is true about a node identity?

- [ ] It is a *tz1* address.
- [x] It comprises a pair of cryptographic keys that nodes use to encrypt messages sent to each other.
- [x] It is like a network identity.
- [ ] It is a *KT1* address.

### Question 3
What's true about *snapshot* for node configuration?

- [x] Snapshot is a compressed copy of the chain at a certain block.
- [ ] It allows the node to synchronize to the Tezos blockchain from the P2P network.
- [x] The mechanism of Snapshots can help in reducing the synchronization time.
- [ ] Snapshots of owned rolls are done every 256 blocks and define who can bake.
- [x] `tezos-node snapshot import <snapshot>` is a correct command for importing a snapshot.

### Question 4
What is the default network?

- [ ] Florencenet
- [x] Mainnet
- [ ] Sandbox
- [ ] Granadanet

### Question 5
What is the right command to launch your tezos node?

- [ ] `tezos-node start`
- [ ] `tezos-client run`
- [x] `tezos-node run`
- [ ] `tezos-node bootstrapped`
- [ ] `tezos-client bootstrapped`
- [ ] `tezos-client start`