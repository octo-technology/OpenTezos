---
id: introduction_to_cli_and_rpc
title: Introduction to cli and rpc
---

## Tezos RPC (Remote procedure call)
RPC [1] is a client-server protocol where the requesting program is the client and the program providing the service is the server. 

The Tezos node provides a JSON/RPC interface to interact with the Tezos Chain. Note that it is an RPC, and it is JSON based, but it does not follow the “JSON-RPC” protocol.

## Tezos-client

Tezos-client is the client for interacting with a tezos node via RPC. Let's take a look at some examples of how to use it? 

The full documentation is [here](https://tezos.gitlab.io/shell/cli-commands.html).

## How to install

* On Mac OS With [Homebrew](https://brew.sh/):
```
$ brew install tezos-client
```

* On Ubuntu with binary:
```
$ sudo add-apt-repository ppa:serokell/tezos && sudo apt-get update
$ sudo apt-get install -y tezos-client
```
* on Fedora with binary:
```
$ dnf copr enable -y @Serokell/Tezos && dnf update -y
$ dnf install -y tezos-client
```
* From source with with OPAM:
    Follow this [link](https://tezos.gitlab.io/introduction/howtoget.html#building-from-sources-via-opam)

### Conexion to a network
The tezos-client needs to be connected to a Tezos node. You can connect to your own tezos node [2] or you can use a community node on the Tezos mainnet or on a Tezos testnet.
[Here](https://tezostaquito.io/docs/rpc_nodes/) you can find a list of community nodes on the mainnet or testnet.

If you use a testnet you need to obtain a faucet to interact with it.
You can create a faucet on testnet [here](https://faucet.tzalpha.net), and download it.

### Account activation
Activate your account by replacing #accountName and #faucet with an account name and your downloaded faucet path 
```
$ tezos-client activate account #accountName with ~/Downloads/#faucet.json
```

Example: 
```
$ tezos-client activate account user1 with ~/Downloads/tz1VH3sHQ5SNby95S9EtPQBqZrhgv2DqjPvy.json
```
### Get Balance
To search the balance of your account you can execute the following command:
```
$ tezos-client get balance for #accountName
```

### get timestamp
This call is useful to check if the node is synchronized. It returns the actual time is in UTC so it may differ from your local time
```
$ tezos-client get timestamp
```

### List Known adresses
This call list the address register in your tezos-client
```
$ tezos-client list known addresses
```

### Transfers and Receipts
The command line below allows to make a transaction of 42ꜩ from the account user1 to user2 (You can also use the tezos address) 

`--burn-cap`: specifies the maximal fee the user is willing to pay for this operation, the actual fee being determined by the system.

```
$ tezos-client transfer 30 from user1 to user2 --burn-cap 0.5
```
You can also add its options: 
`--dry-run`: if you want just practice a transaction simulation

The recipe of this command line is created:
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

You can observe your actions on the different blocks explorer:
* Mainnet: https://tzstats.com
* Edonet: https://edo.tzstats.com
* DelphiNet: https://delphi.tzstats.com

You can find the full documentation of the Tezos-client [here](https://tezos.gitlab.io/shell/cli-commands.html).

## Reference
[1] https://en.wikipedia.org/wiki/Remote_procedure_call
transfert d’un xtz
[2] How to deploy a tezos node chapter

