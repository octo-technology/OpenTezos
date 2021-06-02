---
id: installation
title: Installation
authors: Maxime Sallerin
---

### How to install

This about how to get up-to-date binaries to run Tezos on any network.
Tezos consists of several binaries (i.e., executable files), including: a client, a node, a baker, and an endorser... etc.

#### On Ubuntu with binaries
```bash
sudo add-apt-repository ppa:serokell/tezos && sudo apt-get update
sudo apt-get install -y tezos-client
sudo apt-get install -y tezos-node
sudo apt-get install -y tezos-baker-009-psfloren
sudo apt-get install -y tezos-endorser-009-psfloren
sudo apt-get install -y tezos-accuser-009-psfloren
```

#### On Fedora with binaries
```bash
dnf copr enable -y @Serokell/Tezos && dnf update -y
dnf install -y tezos-client
dnf install -y tezos-node
dnf install -y tezos-baker-009-PsFLoren
dnf install -y tezos-endorser-009-PsFLoren
dnf install -y tezos-accuser-009-PsFLoren
```

#### From [sources with OPAM](https://tezos.gitlab.io/introduction/howtoget.html#building-from-sources-via-opam)

## The Binaries
After a successful compilation, you should have the following binaries:

- __tezos-node__: the tezos daemon itself (see Node);
- __tezos-client__: a command-line client and basic wallet (see Client);
- __tezos-admin-client__: administration tool for the node;
- __tezos-{baker,endorser,accuser}-*__: daemons to bake, endorse and accuse on the Tezos network (see How to run Tezos);
- __tezos-validator__: a daemon for validating and applying operations in blocks (see Validator)
- __tezos-signer__: a client to remotely sign operations or blocks (see Signer);
- __tezos-codec__: a utility for documenting the data encodings and for performing data encoding/decoding (see Codec)
- __ezos-protocol-compiler__: a domain-specific compiler for Tezos protocols (see Protocol compiler)
- __tezos-snoop__: a tool for modeling the performance of any piece of OCaml code, based on benchmarking (see Benchmarking with Snoop)

## References

[1] https://tezos.gitlab.io/introduction/howtoget.html
