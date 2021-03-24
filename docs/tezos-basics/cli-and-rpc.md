---
id: cli-and-rpc
title: CLI and RPC
---

## Tezos RPC (Remote Procedure Call)
RPC [[1]](/tezos-basics/introduction_to_cli_and_rpc#referencess) is a client-server protocol where the requesting program is the client and the program providing the service is the server. 

Tezos nodes provide a JSON/RPC interface to interact with the Tezos network. Note that although it is using RPC and it is JSON based, it does not follow the `JSON-RPC` protocol.

### RPC URLs
//TODO examples of URL (same as CLI)

## tezos-client-admin
The admin client enables you to interact with the peer-to-peer layer in order to:

- check the status of the connections
- force connections to known peers
- ban/unban peers

//TODO: detail one or 2 examples
//TODO : commands admin à beautifuller (et supprimer celles pas necessaires)
### Commands for the low level RPC layer:
```
rpc list <some_url>
```
List RPCs under a given URL prefix.
"<some_url>": the URL prefix
  
```
rpc list
```
  Alias to `rpc list /`.

```
rpc schema <HTTP method> <url>
```
  Get the input and output JSON schemas of an RPC.
  <HTTP method>: 
  <url>: the RPC url

```
rpc format <HTTP method> <url> [-b --binary]
```
  Get the humanoid readable input and output formats of an RPC.
  <HTTP method>: 
  <url>: the RPC URL
  -b --binary: Binary format

```
rpc get <url>
```
  Call an RPC with the GET method.
  <url>: the RPC URL

```
rpc post <url>
```
  Call an RPC with the POST method.
  <url>: the RPC URL

```
rpc post <url> with <input>
```
  Call an RPC with the POST method, providing input data via the command line.
  <url>: the RPC URL
  <input>: the raw JSON input to the RPC

```
rpc patch <url>
```
  Call an RPC with the PATCH method.
  <url>: the RPC URL

```
rpc patch <url> with <input>
```
  Call an RPC with the PATCH method, providing input data via the command line.
  <url>: the RPC URL
  <input>: the raw JSON input to the RPC

```
rpc put <url>
```
  Call an RPC with the PUT method.
  <url>: the RPC URL

```
rpc put <url> with <input>
```
  Call an RPC with the PUT method, providing input data via the command line.
  <url>: the RPC URL
  <input>: the raw JSON input to the RPC

```
rpc delete <url>
```
  Call an RPC with the DELETE method.
  <url>: the RPC URL

### Commands for managing protocols:
```
list protocols
```
  List protocols known by the node.

```
inject protocol <given_dir>
```
  Inject a new protocol into the node.
  <given_dir>: directory containing the sources of a protocol

```
dump protocol <protocol hash>
```
  Dump a protocol from the node's record of protocol.
  <protocol hash>: 

```
protocol environment <protocol hash>
```
  Show the environment version used by a protocol.
  <protocol hash>: 

```
fetch protocol <protocol hash>
```
  Fetch a protocol from the network.
  <protocol hash>: 

### Commands for monitoring and controlling p2p-layer state:

```
p2p stat
```
  show global network status

```
connect address <address>
```
  Connect to a new point.
  <address>: <IPv4>:PORT or <IPV6>:PORT address (PORT defaults to 9732).

```
kick peer <peer>
```
  Kick a peer.
  <peer>: peer network identity

```
ban address <address>
```
  Add an IP address and all its ports to the blacklist and kicks it. Remove the address from the whitelist if it was previously in it.
  <address>: <IPv4>:PORT or <IPV6>:PORT address (PORT defaults to 9732).

```
unban address <address>
```
  Remove an IP address and all its ports from the blacklist.
  <address>: <IPv4>:PORT or <IPV6>:PORT address (PORT defaults to 9732).

```
trust address <address>
```
  Add an IP address to the whitelist. Remove the address from the blacklist if it was previously in it.
  <address>: <IPv4>:PORT or <IPV6>:PORT address (PORT defaults to 9732).

```
untrust address <address>
```
  Removes an IP address from the whitelist.
  <address>: <IPv4>:PORT or <IPV6>:PORT address (PORT defaults to 9732).

```
is address banned <address>
```
  Check if an IP address is banned.
  <address>: <IPv4>:PORT or <IPV6>:PORT address (PORT defaults to 9732).

```
is peer banned <peer>
```
  Check if a peer ID is banned.
  <peer>: peer network identity

```
ban peer <peer>
```
  Add a peer ID to the blacklist and kicks it. Remove the peer ID from the blacklist if was previously in it.
  <peer>: peer network identity

```
unban peer <peer>
```
  Removes a peer ID from the blacklist.
  <peer>: peer network identity

```
trust peer <peer>
```
  Add a peer ID to the whitelist. Remove the peer ID from the blacklist if it was previously in it.
  <peer>: peer network identity

```
untrust peer <peer>
```
  Remove a peer ID from the whitelist.
  <peer>: peer network identity

```
clear acls
```
  Clear all access control rules.

### Commands to perform privileged operations on the node:
```
unmark invalid [<block>...]
```
  Make the node forget its decision of rejecting blocks.
  <block>: blocks to remove from invalid list

```
unmark all invalid blocks
```
  Make the node forget every decision of rejecting blocks.

```
show current checkpoint
```
  Retrieve the current checkpoint and display it in a format compatible with node argument `--checkpoint`.

### Commands to report the node's status:
```
list heads [-o --output <path>]
```
  The last heads that have been considered by the node.
  -o --output <path>: write to a file

```
list rejected blocks [-o --output <path>]
```
  The blocks that have been marked invalid by the node.
  -o --output <path>: write to a file

### Commands for editing and viewing the client's config file:
```
config show
```
  Show the current config (config file content + command line arguments) or the mockup config files if `--mode mockup` is specified.

```
config reset
```
  Reset the config file to the factory defaults.

```
config update
```
  Update the config based on the current cli values.

```
config init [-o --output <path>] [--bootstrap-accounts <path>]
    [--protocol-constants <path>]
```
  Create config file(s) based on the current CLI values.
  -o --output <path>: path at which to create the file
  --bootstrap-accounts <path>: path at which to create the file
  --protocol-constants <path>: path at which to create the file


A useful command to debug a node that is not syncing is:

```
tezos-admin-client p2p stat
```


## Tezos-client

Tezos-client is the client for interacting with a Tezos node via RPC. Let's take a look at some examples and how to use it.

## How to install

* On Mac OS with [Homebrew](https://brew.sh/) :
```bash
$ brew install tezos-client
```

* On Ubuntu with binaries :
```bash
$ sudo add-apt-repository ppa:serokell/tezos && sudo apt-get update
$ sudo apt-get install -y tezos-client
```

* On Fedora with binaries :
```bash
$ dnf copr enable -y @Serokell/Tezos && dnf update -y
$ dnf install -y tezos-client
```

* From sources with OPAM :
    follow this [link](https://tezos.gitlab.io/introduction/howtoget.html#building-from-sources-via-opam).

### Connect to the network
The tezos-client needs to be connected to a Tezos node. You can connect to your own tezos node [[2]](/tezos-basics/introduction_to_cli_and_rpc#references) or you can use a community node on the Tezos mainnet or on a Tezos testnet.
[Here](https://tezostaquito.io/docs/rpc_nodes/) you can find a list of community nodes on the mainnet or testnet.

If you use a testnet you can download a free faucet file with test XTZ on it[here](https://faucet.tzalpha.net).

### Account activation
Activate your account by replacing `#accountName` and `#faucet` below with an account name and the path to your downloaded faucet file. 

//TODO: le bash change la coloration du reste de la ligne 

```bash
$ tezos-client activate account #accountName with ~/Downloads/#faucet.json
```

Example :
```bash
$ tezos-client activate account user1 with ~/Downloads/tz1VH3sHQ5SNby95S9EtPQBqZrhgv2DqjPvy.json
```

### Node synchronization
//TODO CLI command de synchro
tezos-node bootstrap 

### Get balance
To get the balance of your account you can execute the following command:
```
$ tezos-client get balance for #accountName
```

### Get timestamp
This call is useful to check if the node is synchronized. It returns the UTC time of the latest downloaded block so it may differ from your local time.
```
$ tezos-client get timestamp
```

### List known addresses

This call lists implicit accounts registered in your tezos-client.
```
$ tezos-client list known addresses
```

### List known contracts

This call lists all accounts (implicit and smart contract) registered in your tezos-client.
```
$ tezos-client list known contracts
```

### Transfers and receipts
The command line below makes a transaction of 42ꜩ from the account _user1_ to _user2_ (You can also just use the tezos addresses directly).

```
$ tezos-client transfer 30 from user1 to user2 --burn-cap 0.5
```

Notice that `--burn-cap` specifies the maximum fee the user is willing to pay for this operation. The actual fee is determined by the system.

You can also add `--dry-run` if you want to just practice and run a transaction simulation.

The recipe of this command line is created :
```bash
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
  
More info about that in the [How to use an explorer](/explorer) module.

Finally, you can find the full documentation on Tezos-client [here](https://tezos.gitlab.io/shell/cli-commands.html).

## References

[1] https://en.wikipedia.org/wiki/Remote_procedure_call

