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

A complete list of calls is available [here](http://tezos.gitlab.io/shell/rpc.html#rpc-index-shell). Make sure to check the protocol version before using these calls. The available calls in the *Edo* protocol (see "[*History of Amendments*](/tezos-basics/history-of-amendments#edo-ptedotezd)" chapter) are [here](https://tezos.gitlab.io/protocols/008_edo.html?highlight=edo#rpcs).

### RPC examples
#### GET 'block'
This call returns all the information about a block. The associated metadata may not be present depending on the history mode and block's distance from the head.

```bash
GET NodeUrl/chains/[chain_id]/blocks/[blocks_id]
```

Example to get the block number **1400114** from the mainnet using *giganode.io*:

```bash
GET https://mainnet-tezos.giganode.io/chains/main/blocks/1400114
```
[https://mainnet-tezos.giganode.io/chains/main/blocks/1400114](https://mainnet-tezos.giganode.io/chains/main/blocks/1400114)

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
[https://mainnet-tezos.giganode.io/chains/main/blocks/1400114/context/contracts/KT1Hkg5qeNhfwpKW4fXvq7HGZB9z2EnmCCA9/storage](https://mainnet-tezos.giganode.io/chains/main/blocks/1400114/context/contracts/KT1Hkg5qeNhfwpKW4fXvq7HGZB9z2EnmCCA9/storage)

You can test this call exactly the same way as with the "GET block" call.

## Tezos-client (CLI)
_Tezos-client_ is the official client to interact with a Tezos node via RPC. Let's take a look at the installation and some examples.

### How to install
#### On Mac OS with [Homebrew](https://brew.sh/)
```bash
brew install tezos-client
```

#### On Ubuntu with binaries
```bash
sudo add-apt-repository ppa:serokell/tezos && sudo apt-get update
sudo apt install tezos-client -y
```

#### On Fedora with binaries
```bash
dnf copr enable -y @Serokell/Tezos && dnf update -y
dnf install -y tezos-client
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
tezos-client activate account accountName with ~/Downloads/faucet.json
```

Example on Ubuntu with a downloaded JSON faucet file:
```bash
tezos-client activate account testnetEdo-User_1 with ./tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc.json
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
tezos-client --help
```

#### For command options
```bash
tezos-client [global options] command --help
```

#### For version information
```bash
tezos-client --version
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
tezos-client get balance for accountName
```

Example with our previously registered user "testnetEdo-User_1":
```bash
tezos-client get balance for testnetEdo-User_1
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
tezos-client get timestamp
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
tezos-client list known addresses
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
tezos-client list known contracts
```

Our example:
```bash
Warning:
  
                 This is NOT the Tezos Mainnet.
  
           Do NOT use your fundraiser keys on this network.

testnetEdo-User_1: tz1f5bQSLzsFAB9vpTWFqNSH1KTkew4kVFUc
```

Everything is correct: We don't have any *originated* account and only one *implicit* account!

#### Transfers and receipts
The command below transfers 42 ꜩ from the account _user1_ to _user2_ (you can use Tezos addresses directly):

```bash
tezos-client transfer 42 from user1 to user2
```

Notice that you can specify the maximum fee for this operation appending "`--fee-cap`" (defaults to 1.0). The network would determine the actual fee lesser than this cap:

```bash
tezos-client transfer 42 from user1 to user2 --fee-cap 0.9
```

You can also add "`--dry-run`" or "`-D`" if you want to test and display the transaction without finalizing it.

For our example, let's first activate another account with another faucet file:
```bash
tezos-client activate account testnetEdo-User_2 with ./tz1X3oQvEieBBL3Zgg8LJVnUXD45phTZsBeh.json
```

Let's verify its balance (and activation):
```bash
tezos-client get balance for testnetEdo-User_2
```

Response (without the warning message):
```bash
16146.743708 ꜩ
```

Let's finally try a transfer of 10,000 ꜩ from testnetEdo-User_1 to testnetEdo-User_2 with a 2.5 ꜩ fee cap:
```bash
tezos-client transfer 10000 from testnetEdo-User_1 to testnetEdo-User_2 --fee-cap 2.5
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
tezos-client get balance for testnetEdo-User_1
52593.128125 ꜩ

tezos-client get balance for testnetEdo-User_2
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

To use the Tezos Admin Client commands, we need a node we can administrate. In the above examples, we learned how to use remote community nodes. Let's now install a local node we can pretend to be an administrator. This section will also be useful to follow along the "[*Deploy a Node*](/docs/deploy-a-node/introduction)" module.

We'll need several prerequisites. Main ones are [Docker](https://www.docker.com/) and [Flextesa](https://gitlab.com/tezos/flextesa).

For the demonstration, the installations will take place on a **fresh** Ubuntu 20.04 (x86_64/amd64 system minimal installation).

### Basic programs
To avoid any shortage, install `curl` and `build-essential`:
```bash
sudo apt update && sudo apt install curl build-essential -y
```

### Docker
Ubuntu's official guide [here](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository). For other systems please refer to the guides [here](https://docs.docker.com/get-docker/).

#### Use the commands to allow APT to use repository over HTTPS:
```bash
sudo apt update && sudo apt install apt-transport-https ca-certificates gnupg lsb-release -y
```

#### Add the Docker's official GPG key:
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```
#### Set the **stable** repository:
```bash
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

#### Install Docker Engine:
```bash
sudo apt update && sudo apt install docker-ce docker-ce-cli containerd.io -y
```

#### Verify Docker installation:
The following command test your installation:
```bash
sudo docker run hello-world
```

#### Modify the system "docker" group:
```bash
sudo usermod -a -G docker $USER
```

At this point, please **save your work and reboot the system**.

### Flextesa Tezos Sandbox
Thanks to Docker, the following command integrates Flextesa and start the Tezos sandbox in the background:
```bash
docker run --rm --name my-sandbox --detach -p 20000:20000 tqtezos/flextesa:20210514 flobox start
```

Notice the port number set on 20000. After downloading images, the node should start in the background.

Let's bootstrap our new node and change our connection for it:
```bash
tezos-client --endpoint http://localhost:20000 bootstrapped
tezos-client --endpoint http://localhost:20000 config update
```

The sandbox also set two accounts. You can access their information with the following command:
```bash
docker run --rm tqtezos/flextesa:20210514 flobox info
```

You should get something like the following result:
```bash
Usable accounts:

- alice
  * edpkvGfYw3LyB1UcCahKQk4rF2tvbMUk8GFiTuMjL75uGXrpvKXhjn
  * tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb
  * unencrypted:edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq
- bob
  * edpkurPsQ8eUApnLUJ9ZPDvu98E8VNj4KtJa1aZr16Cr5ow5VHKnz4
  * tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6
  * unencrypted:edsk3RFfvaFaxbHx8BMtEW1rKQcPtDML3LXjNqMNLCzC3wLC1bWbAt

Root path (logs, chain data, etc.): /tmp/mini-box (inside container).
```

To use them, we need to import them:
```bash
tezos-client import secret key alice unencrypted:edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq --force
tezos-client import secret key bob unencrypted:edsk3RFfvaFaxbHx8BMtEW1rKQcPtDML3LXjNqMNLCzC3wLC1bWbAt --force
```

To check the accounts' activation, let's check their balances:
```bash
tezos-client get balance for alice
tezos-client get balance for bob
```

They should both have 2,000,000 ꜩ.

Let's now install the `tezos-admin-client` application.

### How to install
#### On Mac OS with [Homebrew](https://brew.sh/)
```bash
brew install tezos-admin-client
```

#### On Ubuntu with binaries
```bash
sudo add-apt-repository ppa:serokell/tezos && sudo apt update && apt install tezos-admin-client -y
```

#### On Fedora with binaries
```bash
dnf copr enable -y @Serokell/Tezos && dnf update -y
dnf install -y tezos-admin-client
```

#### From [sources with OPAM](https://tezos.gitlab.io/introduction/howtoget.html#building-from-sources-via-opam)

### Admin-client user manual and version
#### Global options
```bash
tezos-admin-client --help
```

#### Command options
```bash
tezos-admin-client [global options] command --help
```

#### Version information
```bash
tezos-admin-client --version
```

The complete listing of commands on Tezos admin-client is available [here](https://tezos.gitlab.io/shell/cli-commands.html).

We can finally try a few commands on our node.

### Admin-client commands examples
#### Lists remote procedure calls under a given URL prefix
```bash
tezos-admin-client rpc list [URL]
```

In our example:
```bash
tezos-admin-client rpc list /chains/main/blocks
```

Would produce:
```bash
Available services:
  
  - GET /chains/main/blocks
      Lists block hashes from '<chain>', up to the last checkpoint, sorted
      with decreasing fitness. Without arguments it returns the head of the
      chain. Optional arguments allow to return the list of predecessors of a
      given block or of a set of blocks. 
  - /chains/main/blocks/<block_id> <dynamic>


Dynamic parameter description:
  
  <block_id>
      A block identifier. This is either a block hash in Base58Check
      notation, one the predefined aliases: 'genesis', 'head' or a block
      level (index in the chain). One might also use 'head~N' or '<hash>~N'
      where N is an integer to denote the Nth predecessor of the designated
      block.Also, '<hash>+N' denotes the Nth successor of a block.
```

#### RPC with the GET method
```bash
tezos-admin-client rpc get [url]
```

In our example, if we want the blocks:
```bash
tezos-admin-client rpc get /chains/main/blocks
```

We get something like:
```bash
[ [ "BLXn8BL5mEUj4BMgh6DdSRShdmnVtz1pSVrtgkJ7WAKcXHpLj9H" ] ]
```

Now, if we'd like to have more details on this particular block:
```bash
tezos-admin-client rpc get /chains/main/blocks/BLXn8BL5mEUj4BMgh6DdSRShdmnVtz1pSVrtgkJ7WAKcXHpLj9H
```

As a result, we obtain a long JSON descriptive object:
```bash
{ "protocol": "PsFLorenaUUuikDWvMDr6fGBRG8kt3e3D3fHoXK1j1BFRxeSH4i",
  "chain_id": "NetXfpUfwJdBox9",
  "hash": "BLXn8BL5mEUj4BMgh6DdSRShdmnVtz1pSVrtgkJ7WAKcXHpLj9H",
  "header":
    { "level": 393, "proto": 1,
      "predecessor": "BKu6mYuq2XHEM6RWGUZezodwMe32FLPECB6jF9xBQgHwedwXZkV",
      "timestamp": "2021-05-25T15:28:42Z", "validation_pass": 4,
      "operations_hash":
        "LLoZjCet4uU586xmdQyAdXJFSs8NjgwxSsbNo9hVYHfVyQm2iXrSL",
      "fitness": [ "01", "0000000000000188" ],
      "context": "CoUtK2oqBmhT4iR4ahpDyK1ZQetnUrqKCGSeKMD13hpwaP63oYxT",
      "priority": 0, "proof_of_work_nonce": "756e6b6e00000000",
      "signature":
        "sigg9EpfsEkHCQuHMvc9Bx5DbF3w9msCXkY4C5P4DE54coPZQrA53ACY62Mzq7V5hM1nRgGVdxXhhPNTcsy4Qwe61fiLDPYr" },
  "metadata":
    { "protocol": "PsFLorenaUUuikDWvMDr6fGBRG8kt3e3D3fHoXK1j1BFRxeSH4i",
      "next_protocol": "PsFLorenaUUuikDWvMDr6fGBRG8kt3e3D3fHoXK1j1BFRxeSH4i",
      "test_chain_status": { "status": "not_running" },
      "max_operations_ttl": 60, "max_operation_data_length": 32768,
      "max_block_header_length": 238,
      "max_operation_list_length":
        [ { "max_size": 4194304, "max_op": 2048 }, { "max_size": 32768 },
          { "max_size": 135168, "max_op": 132 }, { "max_size": 524288 } ],
      "baker": "tz1YPSCGWXwBdTncK2aCctSZAXWvGsGwVJqU",
      "level":
        { "level": 393, "level_position": 392, "cycle": 49,
          "cycle_position": 0, "voting_period": 24,
          "voting_period_position": 8, "expected_commitment": false },
      "level_info":
        { "level": 393, "level_position": 392, "cycle": 49,
          "cycle_position": 0, "expected_commitment": false },
      "voting_period_kind": "proposal",
      "voting_period_info":
        { "voting_period":
            { "index": 24, "kind": "proposal", "start_position": 384 },
          "position": 8, "remaining": 7 }, "nonce_hash": null,
      "consumed_gas": "0", "deactivated": [],
      "balance_updates":
        [ { "kind": "contract",
            "contract": "tz1YPSCGWXwBdTncK2aCctSZAXWvGsGwVJqU",
            "change": "-512000000", "origin": "block" },
          { "kind": "freezer", "category": "deposits",
            "delegate": "tz1YPSCGWXwBdTncK2aCctSZAXWvGsGwVJqU", "cycle": 49,
            "change": "512000000", "origin": "block" },
          { "kind": "freezer", "category": "rewards",
            "delegate": "tz1YPSCGWXwBdTncK2aCctSZAXWvGsGwVJqU", "cycle": 49,
            "change": "40000000", "origin": "block" } ] },
  "operations":
    [ [ { "protocol": "PsFLorenaUUuikDWvMDr6fGBRG8kt3e3D3fHoXK1j1BFRxeSH4i",
          "chain_id": "NetXfpUfwJdBox9",
          "hash": "oo2TDxCHBoYXVkzaxJZPXuAA9o27QzA8RRdw6YYuaUv1hxeurjU",
          "branch": "BKu6mYuq2XHEM6RWGUZezodwMe32FLPECB6jF9xBQgHwedwXZkV",
          "contents":
            [ { "kind": "endorsement_with_slot",
                "endorsement":
                  { "branch":
                      "BKu6mYuq2XHEM6RWGUZezodwMe32FLPECB6jF9xBQgHwedwXZkV",
                    "operations": { "kind": "endorsement", "level": 392 },
                    "signature":
                      "sigVdHfmCxmj9z7WxvwPEiA9mnGZk5k2RNfyaj6z7nBoX7UusUMCtyZDC4bCbKGg557BCr2T41cB4SCpytQyJqxKAukgV6NL" },
                "slot": 0,
                "metadata":
                  { "balance_updates":
                      [ { "kind": "contract",
                          "contract": "tz1YPSCGWXwBdTncK2aCctSZAXWvGsGwVJqU",
                          "change": "-2048000000", "origin": "block" },
                        { "kind": "freezer", "category": "deposits",
                          "delegate": "tz1YPSCGWXwBdTncK2aCctSZAXWvGsGwVJqU",
                          "cycle": 48, "change": "2048000000",
                          "origin": "block" },
                        { "kind": "freezer", "category": "rewards",
                          "delegate": "tz1YPSCGWXwBdTncK2aCctSZAXWvGsGwVJqU",
                          "cycle": 48, "change": "40000000",
                          "origin": "block" } ],
                    "delegate": "tz1YPSCGWXwBdTncK2aCctSZAXWvGsGwVJqU",
                    "slots":
                      [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
                        29, 30, 31 ] } } ] } ], [], [], [] ] }
```

#### Listing protocols known by the node
```bash
tezos-admin-client list protocols
```

Example result:
```bash
ProtoALphaALphaALphaALphaALphaALphaALphaALphaDdp3zK
ProtoDemoCounterDemoCounterDemoCounterDemoCou4LSpdT
ProtoDemoNoopsDemoNoopsDemoNoopsDemoNoopsDemo6XBoYp
ProtoGenesisGenesisGenesisGenesisGenesisGenesk612im
Ps9mPmXaRzmzk35gbAYNCAw6UXdE2qoABTHbN2oEEc1qM7CwT9P
PsBABY5HQTSkA4297zNHfsZNKtxULfL18y95qb3m53QJiXGmrbU
PsBabyM1eUXZseaJdmXFApDSBqj8YBfwELoxZHHW77EMcAbbwAS
PsCARTHAGazKbHtnKfLzQg3kms52kSRpgnDY982a9oYsSXRLQEb
PsDELPH1Kxsxt8f9eWbxQeRxkjfbxoqM52jvs5Y5fBxWWh4ifpo
PsFLorenaUUuikDWvMDr6fGBRG8kt3e3D3fHoXK1j1BFRxeSH4i
PsYLVpVvgbLhAhoqAkMFUo6gudkJ9weNXhUYCiLDzcUpFpkk8Wt
PsddFKi32cMJ2qPjf43Qv5GDWLDPZb3T3bF6fLKiF5HtvHNU7aP
Pt24m4xiPbLDhVgVfABUjirbmda3yohdN82Sp9FeuAXJ4eV9otd
PtCJ7pwoxe8JasnHY8YonnLYjcVHmhiARPJvqcC6VfHT5s8k8sY
PtEdo2ZkT9oKpimTah6x2embF25oss54njMuPzkJTEi5RqfdZFA
PtEdoTezd3RHSC31mpxxo1npxFjoWWcFgQtxapi51Z8TLu6v6Uq
PtYuensgYBb3G3x1hLLbCmcav8ue8Kyd2khADcL5LsT5R1hcXex
```

#### Usefull command to debug a node that is not syncing
```bash
tezos-admin-client p2p stat
```

Though, in our case with a single local node, the result is not interesting:
```bash
GLOBAL STATS
  ↗ 0 B (0 B/s) ↘ 0 B (0 B/s)
CONNECTIONS
KNOWN PEERS
KNOWN POINTS
```

## What have we learned so far?
In this chapter, we saw how to install the CLI. We also introduced you to simple remote procedure calls to a Tezos node. Along the way, we understood how to connect to a remote community node or a local node using a sandbox.

In the next chapter, we will learn in detail how Tezos allows on-chain decentralized governance without hard forks' troubles.

## References
[1] https://en.wikipedia.org/wiki/Remote_procedure_call

https://tezos.gitlab.io/alpha/cli-commands.html