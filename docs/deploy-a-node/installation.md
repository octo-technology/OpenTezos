---
id: installation
title: Installation
authors: Maxime Sallerin
---

### How to install

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