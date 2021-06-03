---
id: installation
title: Installation
authors: Maxime Sallerin
---

## Build from source (Ubuntu)

```shell
$ sudo apt install -y rsync git m4 build-essential patch unzip bubblewrap wget pkg-config libgmp-dev libev-dev libhidapi-dev
```

Type your password when prompted.
`[sudo] password for username:`

### Install Rust

Compiling Tezos requires the Rust compiler, version 1.44.0, and the Cargo package manager to be installed.

```shell
$ cd $HOME
$ wget https://sh.rustup.rs/rustup-init.sh
$ chmod +x rustup-init.sh
$ ./rustup-init.sh --profile minimal --default-toolchain 1.44.0 -y
$ source $HOME/.cargo/env
```

### Install Zcash Parameters

Tezos binaries require the Zcash parameter files to run.

```shell
$ wget https://raw.githubusercontent.com/zcash/zcash/master/zcutil/fetch-params.sh
$ chmod +x fetch-params.sh
$ ./fetch-params.sh
```

Answers the prompts with 'N' then 'y'.

### Install OPAM

```shell
$ wget https://github.com/ocaml/opam/releases/download/2.0.3/opam-2.0.3-x86_64-linux
$ sudo cp opam-2.0.3-x86_64-linux /usr/local/bin/opam
$ sudo chmod a+x /usr/local/bin/opam
```

### Get sources

```shell
$ git clone https://gitlab.com/tezos/tezos.git
$ cd tezos
$ git checkout latest-release
```

### Install Tezos dependencies

```shell
$ opam init --bare
$ make build-deps
```

### Compile sources

```shell
$ eval $(opam env)
$ make
```

### Optional setup

```shell
export PATH=~/tezos:$PATH
source ./src/bin_client/bash-completion.sh
export TEZOS_CLIENT_UNSAFE_DISABLE_DISCLAIMER=Y
```

## Build from source (MacOs)

### Install Homebrew

```shell
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install the libraries that Tezos is dependent on

```shell
$ brew install hidapi libev
```

On Catalina you may see the following error if you have xcode installed:
`“xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun"`

If this is the case then run the following command to update your xcode install and restart the terminal.

```shell
$ xcode-select --install
```

### Get sources

```shell
$ git clone https://gitlab.com/tezos/tezos.git
$ cd tezos
$ git checkout latest-release
```

### Install the OPAM

```shell
$ brew install gpatch
$ brew install opam
$ opam init
$ opam update
$ eval $(opam env)
```

### Install Tezos dependencies

```shell
$ cd tezos
$ make build-deps 
```

### Compile sources

```shell
$ eval $(opam env)
$ make
```

## References

[1] https://tezos.gitlab.io/introduction/howtoget.html#setting-up-the-development-environment-from-scratch

[2] https://www.coincashew.com/coins/overview-xtz/guide-how-to-setup-a-baker/install-a-tezos-node

[3] https://tezbaker-io.medium.com/tezos-mainnet-setting-up-home-baking-on-a-mac-c7730a68c41d
