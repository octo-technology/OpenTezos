---
id: cli-and-rpc
title: CLI and RPC
authors: Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez
---

## Connecting to the network
The _tezos-client_ and _Tezos RPC_ need a connection to a Tezos node. You can connect to your own [tezos node](/deploy-a-node/introduction), or you can use a *community node*. In both cases, you can set it for the *mainnet* or the *testnet*.

You can find a list of *community nodes* [here](https://tezostaquito.io/docs/rpc_nodes/).

If you use a testnet, you can download a faucet file with free **test**'s XTZ [here](https://faucet.tzalpha.net).

## Tezos RPC (Remote Procedure Call)
RPC[[1]](/tezos-basics/cli-and-rpc#references) is a client-server protocol where the requesting program is the client and the program providing the service is the server.

Tezos nodes provide a JSON/RPC interface to interact with the Tezos network. Although it uses RPC and is JSON-based, it does **not** follow the *JSON-RPC* protocol.

A complete list of calls is available [here](http://tezos.gitlab.io/shell/rpc.html#rpc-index-shell). Make sure to check the protocol version before using these calls. The available calls in the *Edo* protocol (see "[*History of Amendments*](/tezos-basics/history-of-amendments#edo-ptedotezd)" chapter) are [here](http://tezos.gitlab.io/008/rpc.html#id1).

### RPC call examples
#### GET 'block'
This call returns all the information about a block. The associated metadata may not be present depending on the history mode and block's distance from the head.

```bash
GET NodeUrl/chains/[chain_id]/blocks/[blocks_id]
```

Example to get the block number **1400114** from the mainnet using *giganode.io*:

```bash
GET https://mainnet-tezos.giganode.io/chains/main/blocks/1400114
```

#### GET 'contract storage'
This call accesses the storage of a contract.

```bash
GET NodeUrl/chains/[chain_id]/blocks/[blocks_id]/context/contracts/[contract_id]/storage
```

Example to get the storage of contract **KT1Hkg5qeNhfwpKW4fXvq7HGZB9z2EnmCCA9** from block **1400114** on the mainnet using *giganode.io*:

```bash
GET https://mainnet-tezos.giganode.io/chains/main/blocks/1400114/context/contracts/KT1Hkg5qeNhfwpKW4fXvq7HGZB9z2EnmCCA9/storage
```

## Tezos-client (CLI)
_Tezos-client_ is the official client to interact with a Tezos node via RPC. Let's take a look at the installation and some examples.

### How to install
#### On Mac OS with [Homebrew](https://brew.sh/):
```bash
$ brew install tezos-client
```

#### On Ubuntu with binaries:
```bash
$ sudo add-apt-repository ppa:serokell/tezos && sudo apt-get update
$ sudo apt-get install -y tezos-client
```

#### On Fedora with binaries:
```bash
$ dnf copr enable -y @Serokell/Tezos && dnf update -y
$ dnf install -y tezos-client
```

#### From [sources with OPAM](https://tezos.gitlab.io/introduction/howtoget.html#building-from-sources-via-opam)

### Account activation
Activate your account by replacing "accountName" and "faucet" below with an account name and the path to your downloaded faucet file: 

```bash
$ tezos-client activate account accountName with ~/Downloads/faucet.json
```

Example :
```bash
$ tezos-client activate account user1 with ~/Downloads/tz1VH3sHQ5SNby95S9EtPQBqZrhgv2DqjPvy.json
```

### Tezos Client user manual and version
#### For global options
```bash
$ tezos-client --help
```

#### For command options
```bash
$ tezos-client [global options] command --help
```

#### For version information
```bash
$ tezos-client --version
```

The full commands' list on _Tezos client_ is available [here](https://tezos.gitlab.io/shell/cli-commands.html).

### Tezos Client examples
#### Get balance
To get the balance of the account "accountName":

```bash
$ tezos-client get balance for accountName
```

#### Get timestamp
Call to return the UTC of the latest downloaded block. Timezones may differ from your local time:

```bash
$ tezos-client get timestamp
```

#### List known addresses
This call only lists registered **implicit accounts** in your Tezos client.

```bash
$ tezos-client list known addresses
```

#### List known contracts
This call lists **all registered accounts**, *implicit* **and** *originated* in your Tezos client.

```bash
$ tezos-client list known contracts
```

#### Transfers and receipts
The command below transfers 42ꜩ from the account _user1_ to _user2_ (you can use Tezos addresses directly):

```bash
$ tezos-client transfer 42 from user1 to user2
```

Notice that you can specify the maximum fee for this operation appending "`--fee-cap`" (defaults to 1.0). The network would determine the actual fee lesser than this cap:

```bash
$ tezos-client transfer 42 from user1 to user2 --fee-cap 0.9
```

You can also add "`--dry-run`" or "`-D`" if you want to test and display the transaction without finalizing it.

The recipe of this command is as follows:
```
Current head: BM3smBpBVtHD (timestamp: 2021-03-12T09:42:28.000-00:00, validation: 2021-03-12T09:42:38.372-00:00)
Node is bootstrapped.
Estimated gas: 1000 units (will add 100 for safety)
Operation successfully injected in the node.
Operation hash is 'oo4745Q5mq8snHYAxUYWedBCVb7yQJ7jvFhKECPN9xqgwE4Ni8A'
Waiting for the operation to be included...
Operation found in block: BKnKoaYqCz3dTWr66x4X1mvXC95kuozRkdd23LDuM5ZA1ayF5mi (pass: 3, offset: 0)
This sequence of operations was run:
  Manager signed operations:
    From: tz1gWQz5iTP6UDkWjm1jnKsCq1HHG4hgEmJn
    Fee to the baker: ꜩ0.000369
    Expected counter: 1412932
    Gas limit: 1100
    Storage limit: 0 bytes
    Balance updates:
      tz1gWQz5iTP6UDkWjm1jnKsCq1HHG4hgEmJn ............. -ꜩ0.000369
      fees(tz1aWXP237BLwNHJcCD4b3DutCevhqq2T1Z9,248) ... +ꜩ0.000369
    Revelation of manager public key:
      Contract: tz1gWQz5iTP6UDkWjm1jnKsCq1HHG4hgEmJn
      Key: edpktpMjpmsK6fLKGrXzhp67tRdu2m5HyzGrp1tuS8ZJBc7dGqBeAq
      This revelation was successfully applied
      Consumed gas: 1000
```

You can observe your actions on the block explorers :
* Mainnet: https://tzstats.com
* Edonet: https://edo.tzstats.com
* DelphiNet: https://delphi.tzstats.com
  
There is a dedicated module on [How to use an explorer](/explorer) if you want to learn more.

## Tezos-admin-client
The admin client allows you to interact with the peer-to-peer layer in order to:

- check the status of the connections
- force connections to known peers
- ban/un-ban peers

### How to install
* On Mac OS with [Homebrew](https://brew.sh/):

```bash
$ brew install tezos-admin-client
```

* On Ubuntu with binaries:

```bash
$ sudo add-apt-repository ppa:serokell/tezos && sudo apt-get update
$ sudo apt-get install -y tezos-admin-client
```

* On Fedora with binaries:

```bash
$ dnf copr enable -y @Serokell/Tezos && dnf update -y
$ dnf install -y tezos-admin-client
```

* [From sources with OPAM](https://tezos.gitlab.io/introduction/howtoget.html#building-from-sources-via-opam).


### Admin-client manual
* Global options:
  
```bash
$ tezos-admin-client --help
```

* Command options:

```bash
$ tezos-admin-client [global options] command --help
```

* Version information:

```bash
$ tezos-admin-client --version
```

The full documentation on Tezos-admin-client can be found [here](https://tezos.gitlab.io/shell/cli-commands.html).


### Admin-client examples
This is a non-exhaustive list of possible commands with tezos-admin-client. To discover more commands please refer to the [CLI manual](https://tezos.gitlab.io/shell/cli-commands.html).

#### Commands for the low level RPC layer
* List RPCs under a given URL prefix:
  
```bash
$ tezos-admin-client rpc list [URL]
```

* Get the input and the output JSON schemas of an RPC:

```bash
$ tezos-admin-client rpc schema [HTTP method] [url]
```

* Get the readable input and output formats of an RPC:

```bash
$ tezos-admin-client rpc get [url]
```

* Call an RPC with the POST method and input params:

```bash
$ tezos-admin-client list protocols
```

#### Commands for managing protocols
* List protocols known by the node:

```bash
$ tezos-admin-client rpc post [url] with [input]
```

* Inject a new protocol into the node:
(*given_dir* is the directory containing the sources of a protocol)

```bash
$ tezos-admin-client inject protocol [given_dir]
```

#### Commands to report the node's status:
* The last heads that have been considered by the node:

```bash
$ tezos-admin-client list heads [-o --output [path]]
```

#### Commands for editing and viewing the client's config file:
* Show the current config file content and command line arguments:

```bash
$ tezos-admin-client config show
```

* Update the config based on the current CLI values:
  
```bash
$ tezos-admin-client config update
```

* A useful command to debug a node that is not syncing:

```bash
$ tezos-admin-client tezos-admin-client p2p stat
```

## References

[1] https://en.wikipedia.org/wiki/Remote_procedure_call
