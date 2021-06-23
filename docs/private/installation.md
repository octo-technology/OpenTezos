---
id: installation
title: Installation
authors: Maxime Sallerin
---

## Cloning the repository

This module will use the scripts available on the [Github Serokell](https://github.com/serokell/private-tezos-blockchain).

We will open a terminal and clone the git repository on our machine.

### Https

```shell
git clone https://github.com/serokell/private-tezos-blockchain.git
```

### Ssh

```shell
git clone git@github.com:serokell/private-tezos-blockchain.git
```

## Docker

Docker containers will do most of the work for setting up the environment needed for a healthy Tezos deployment.

### Docker installation

Docker takes away repetitive, mundane configuration tasks and it is used throughout the development lifecycle for fast, easy and portable application development.

If you don't already have docker installed on your machine, you can download [Docker Desktop](https://www.docker.com/products/docker-desktop).

Otherwise, go to the next step.

### Docker Build

The Dockerfile will be used to build a docker image with all the required Tezos dependencies. Run the following command:

```shell
cd private-tezos-blockchain
docker build -t ubuntu-tezos .
```

The steps in this tutorial will require two docker volumes. Run the following commands:

```shell
docker volume create ubuntu-tezos-volume
docker volume create ubuntu-tezos-volume-1
```

These docker images have `./scripts/docker.sh` as their entrypoint. This script wraps the `fetch-binaries.sh` and `start-baker.sh` scripts, providing the required paths to the tezos-binaries stored inside the docker volumes.


