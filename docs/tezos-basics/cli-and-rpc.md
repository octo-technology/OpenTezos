---
id: cli-and-rpc
title: CLI and RPC
authors: Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez
---

In this chapter, the reader will learn how to install the official "tezos-client" and "tezos-admin-client" applications and run them with the Command Line Interface. These commands call remote procedures of a Tezos node (local or remote). There are many commands, but we'll see some examples.

## Connecting to the network
The _tezos-client_ and _Tezos RPC_ need a connection to a Tezos node. You can connect to your own [tezos node](/deploy-a-node/introduction), or you can use a *community node*. In both cases, you can set it for the *mainnet* or the *testnet*.

You can find a list of *community nodes* [here](https://tezostaquito.io/docs/rpc_nodes/).

If you use a testnet, you can download a *faucet file* with free **test**'s XTZ [here](https://faucet.tzalpha.net). Below is an example of such a JSON file:
```json
{
  "mnemonic": [
    "sunset",
    "used",
    "fruit",
    "resemble",
    "nest",
    "shell",
    "upgrade",
    "cinnamon",
    "shell",
    "hockey",
    "stuff",
    "denial",
    "pupil",
    "ladder",
    "over"
  ],
  "secret": "974580058df32cb586424ba29758f42227fac953",
  "amount": "62593128795",
  "pkh": "tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc",
  "password": "a0EADP8w8n",
  "email": "wbjcyjdm.vvsvchum@tezos.example.org"
}
```

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

To test this call, simply click the address above (or copy-paste it) to open it in your web browser. You'll discover a pretty long JSON object. Depending on the used browser, the visualization may be better (e.g. Firefox will format the appearance to make it easier to read).

#### GET 'contract storage'
This call accesses the storage of a contract.

```bash
GET NodeUrl/chains/[chain_id]/blocks/[blocks_id]/context/contracts/[contract_id]/storage
```

Example to get the storage of contract **KT1Hkg5qeNhfwpKW4fXvq7HGZB9z2EnmCCA9** from block **1400114** on the mainnet using *giganode.io*:

```bash
GET https://mainnet-tezos.giganode.io/chains/main/blocks/1400114/context/contracts/KT1Hkg5qeNhfwpKW4fXvq7HGZB9z2EnmCCA9/storage
```

You can test this call exactly the same way as with the "GET block" call.

## Tezos-client (CLI)
_Tezos-client_ is the official client to interact with a Tezos node via RPC. Let's take a look at the installation and some examples.

### How to install
#### On Mac OS with [Homebrew](https://brew.sh/)
```bash
$ brew install tezos-client
```

#### On Ubuntu with binaries
```bash
$ sudo add-apt-repository ppa:serokell/tezos && sudo apt-get update
$ sudo apt-get install -y tezos-client
```

#### On Fedora with binaries
```bash
$ dnf copr enable -y @Serokell/Tezos && dnf update -y
$ dnf install -y tezos-client
```

#### From [sources with OPAM](https://tezos.gitlab.io/introduction/howtoget.html#building-from-sources-via-opam)

### Connection to a node
Below we'll connect to a community node (https://edonet-tezos.giganode.io/) on the Edo **testnet**. We'll use the "`--endpoint`" parameter to update the configuration of the Tezos Client on a Ubuntu system:
```bash
tezos-client --endpoint https://edonet-tezos.giganode.io/ config update
```

The result should look like below:
```bash
Warning:
  
                 This is NOT the Tezos Mainnet.
  
           Do NOT use your fundraiser keys on this network.
```

On Ubuntu, the config file should be written in "/.tezos-client/config" under your "home" folder. For example after the last command, the all new "config" file look like this (with Nano):
```bash
{ "base_dir": "/home/userName/.tezos-client",
  "endpoint": "https://edonet-tezos.giganode.io/", "web_port": 8080,
  "confirmations": 0 }
```

### Account activation
Activate your account by replacing "accountName" and "faucet" below with an account name and the path to your downloaded faucet file (which can be different from "~/Downloads/"):

```bash
$ tezos-client activate account accountName with ~/Downloads/faucet.json
```

Example on Ubuntu with a downloaded JSON faucet file:
```bash
$ tezos-client activate account testnetEdo-User_1 with ./tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc.json
```

The resulting return:
```bash
Warning:
  
                 This is NOT the Tezos Mainnet.
  
           Do NOT use your fundraiser keys on this network.

Node is bootstrapped.
Operation successfully injected in the node.
Operation hash is 'opAqABPnAHz5u6oHh8qAVhNKs38oytcMUGgT2yFZogtSeXRPYqa'
Waiting for the operation to be included...
Operation found in block: BLv6HBRJEzekfkvobjWztRHqfNVncGDSySwC3jjsYtRJKhc4T6r (pass: 2, offset: 0)
This sequence of operations was run:
  Genesis account activation:
    Account: tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc
    Balance updates:
      tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc ... +ꜩ62593.128795

The operation has only been included 0 blocks ago.
We recommend to wait more.
Use command
  tezos-client wait for opAqABPnAHz5u6oHh8qAVhNKs38oytcMUGgT2yFZogtSeXRPYqa to be included --confirmations 30 --branch BLusSi35mANMCFezjxaGT8ycnW4JztW7ZhnNogWuwepRo1bQRM4
and/or an external block explorer.
Account testnetEdo-User_1 (tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc) activated with ꜩ62593.128795.
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

On Ubuntu, the result would look like the following:
```bash
31e6641d (2021-04-30 16:58:29 +0200) (9.1)
```

The full commands' list on _Tezos client_ is available [here](https://tezos.gitlab.io/shell/cli-commands.html).

### Tezos Client examples
#### Get balance
To get the balance of the account "accountName":
```bash
$ tezos-client get balance for accountName
```

Example with our previously registered user "testnetEdo-User_1":
```bash
$ tezos-client get balance for testnetEdo-User_1
```

The response:
```bash
Warning:
  
                 This is NOT the Tezos Mainnet.
  
           Do NOT use your fundraiser keys on this network.

62593.128795 ꜩ
```

The previous response is also a way to check if the account is activated on the testnet (first transfer).

#### Get timestamp
Call to return the UTC of the latest downloaded block. Timezones may differ from your local time:

```bash
$ tezos-client get timestamp
```

Result example:
```bash
Warning:
  
                 This is NOT the Tezos Mainnet.
  
           Do NOT use your fundraiser keys on this network.

2021-05-21T16:01:45Z
```

#### List known addresses
This call only lists registered **implicit accounts** in your Tezos client.

```bash
$ tezos-client list known addresses
```

Example response:
```bash
Warning:
  
                 This is NOT the Tezos Mainnet.
  
           Do NOT use your fundraiser keys on this network.

testnetEdo-User_1: tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc (unencrypted sk known)
```

#### List known contracts
This call lists **all registered accounts**, *implicit* **and** *originated* in your Tezos client.

```bash
$ tezos-client list known contracts
```

Our example:
```bash
Warning:
  
                 This is NOT the Tezos Mainnet.
  
           Do NOT use your fundraiser keys on this network.

testnetEdo-User_1: tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc
```

Everything is correct: We don't any *originated* account and only one *implicit* account!

#### Transfers and receipts
The command below transfers 42 ꜩ from the account _user1_ to _user2_ (you can use Tezos addresses directly):

```bash
$ tezos-client transfer 42 from user1 to user2
```

Notice that you can specify the maximum fee for this operation appending "`--fee-cap`" (defaults to 1.0). The network would determine the actual fee lesser than this cap:

```bash
$ tezos-client transfer 42 from user1 to user2 --fee-cap 0.9
```

You can also add "`--dry-run`" or "`-D`" if you want to test and display the transaction without finalizing it.

For our example, let's first activate another account with another faucet file:
```bash
$ tezos-client activate account testnetEdo-User_2 with ./tz1X3oQvEieBBL3Zgg8LJVnUXD45phTZsBeh.json
```

Let's verify its balance (and activation):
```bash
$ tezos-client get balance for testnetEdo-User_2
```

Response (without the warning message):
```bash
16146.743708 ꜩ
```

Let's finally try a transfer of 10,000 ꜩ from testnetEdo-User_1 to testnetEdo-User_2 with a 2.5 ꜩ fee cap:
```bash
$ tezos-client transfer 10000 from testnetEdo-User_1 to testnetEdo-User_2 --fee-cap 2.5
```

Response (without the warning message):
```bash
Node is bootstrapped.
Estimated storage: no bytes added
Estimated gas: 1427 units (will add 100 for safety)
Estimated storage: no bytes added
Operation successfully injected in the node.
Operation hash is 'oo4bni9cvma8v7C2hJMBwc2KTz356zrmqiN3j78gbBQTcU5i1xZ'
Waiting for the operation to be included...
Operation found in block: BKon5Zj6aQMd6Q2T9jWVFsY3QCWpys4BYbXa2ticxFvDaKc8GRm (pass: 3, offset: 0)
This sequence of operations was run:
  Manager signed operations:
    From: tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc
    Fee to the baker: ꜩ0.000359
    Expected counter: 306156
    Gas limit: 1000
    Storage limit: 0 bytes
    Balance updates:
      tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc ............ -ꜩ0.000359
      fees(tz1aWXP237BLwNHJcCD4b3DutCevhqq2T1Z9,97) ... +ꜩ0.000359
    Revelation of manager public key:
      Contract: tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc
      Key: edpkuBvrEUG2pS3FCpxnr8bPu8tDG3Hv6y9LbFgNQBKAF5hzz37gsw
      This revelation was successfully applied
      Consumed gas: 1000
  Manager signed operations:
    From: tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc
    Fee to the baker: ꜩ0.000311
    Expected counter: 306157
    Gas limit: 1527
    Storage limit: 0 bytes
    Balance updates:
      tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc ............ -ꜩ0.000311
      fees(tz1aWXP237BLwNHJcCD4b3DutCevhqq2T1Z9,97) ... +ꜩ0.000311
    Transaction:
      Amount: ꜩ10000
      From: tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc
      To: tz1X3oQvEieBBL3Zgg8LJVnUXD45phTZsBeh
      This transaction was successfully applied
      Consumed gas: 1427
      Balance updates:
        tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc ... -ꜩ10000
        tz1X3oQvEieBBL3Zgg8LJVnUXD45phTZsBeh ... +ꜩ10000

The operation has only been included 0 blocks ago.
We recommend to wait more.
Use command
  tezos-client wait for oo4bni9cvma8v7C2hJMBwc2KTz356zrmqiN3j78gbBQTcU5i1xZ to be included --confirmations 30 --branch BMbERSrVPTF2GT1DVSy6x6yiHPvcz12AT7FSkUWD3yeT9NyzB4n
and/or an external block explorer.
```

Let's check both balances (testnet warning messages removed):
```bash
$ tezos-client get balance for testnetEdo-User_1
52593.128125 ꜩ

$ tezos-client get balance for testnetEdo-User_2
26146.743708 ꜩ
```

Everything is fine.

You can observe your actions on explorers like *tzstats*:
* Mainnet: https://tzstats.com
* Edonet: https://edo.tzstats.com
  
OpenTezos has a dedicated module on [how to use an explorer](/explorer/introduction).

## Tezos Admin client
The admin client allows you to interact with the peer-to-peer layer:

- to check the status of the connections
- to force connections to known peers
- to ban/un-ban peers

### How to install
#### On Mac OS with [Homebrew](https://brew.sh/)
```bash
$ brew install tezos-admin-client
```

#### On Ubuntu with binaries
```bash
$ sudo add-apt-repository ppa:serokell/tezos && sudo apt-get update
$ sudo apt-get install -y tezos-admin-client
```

#### On Fedora with binaries
```bash
$ dnf copr enable -y @Serokell/Tezos && dnf update -y
$ dnf install -y tezos-admin-client
```

#### From [sources with OPAM](https://tezos.gitlab.io/introduction/howtoget.html#building-from-sources-via-opam)

### Admin-client user manual and version
#### Global options
```bash
$ tezos-admin-client --help
```

#### Command options
```bash
$ tezos-admin-client [global options] command --help
```

#### Version information
```bash
$ tezos-admin-client --version
```

The complete listing of commands on Tezos admin-client is available [here](https://tezos.gitlab.io/shell/cli-commands.html).

### Admin-client commands examples
#### Lists remote procedure calls under a given URL prefix
```bash
$ tezos-admin-client rpc list [URL]
```

#### Get the input and the output JSON schemas of an RPC
```bash
$ tezos-admin-client rpc schema [HTTP method] [url]
```

#### RPC with the GET method
```bash
$ tezos-admin-client rpc get [url]
```

#### RPC with the POST method and JSON input data
```bash
$ tezos-admin-client rpc post [url] with [input]
```

Use "file:path" to read from a file:
```bash
$ tezos-admin-client rpc post localhost:4040 with file:/home/methods/params.json
```

#### Listing protocols known by the node
```bash
$ tezos-admin-client list protocols
```

#### Inject a new protocol into the node
"given_dir" is the directory containing the sources of the new protocol.

```bash
$ tezos-admin-client inject protocol [given_dir]
```

#### The last considered heads by the node
```bash
$ tezos-admin-client list heads [-o --output [path]]
```

#### Current config file content
```bash
$ tezos-admin-client config show
```

#### Update the config based on the current CLI values
```bash
$ tezos-admin-client config update
```

#### Usefull command to debug a node that is not syncing
```bash
$ tezos-admin-client tezos-admin-client p2p stat
```

## What have we learned so far?
In this chapter, we saw how to install the CLI. We also introduced you to simple remote procedure calls to a Tezos node.

In the next chapter, we will learn in detail how Tezos allows on-chain decentralized governance without hard forks' troubles.

## References
[1] https://en.wikipedia.org/wiki/Remote_procedure_call

https://tezos.gitlab.io/alpha/cli-commands.html