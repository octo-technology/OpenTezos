---
id: cli-and-rpc
title: CLI and RPC
---

## Tezos RPC (Remote Procedure Call)
RPC [[1]](/tezos-basics/introduction_to_cli_and_rpc#referencess) is a client-server protocol where the requesting program is the client and the program providing the service is the server. 

Tezos nodes provide a JSON/RPC interface to interact with the Tezos network. Note that although it uses RPC and is JSON based, it does not follow the `JSON-RPC` protocol.

## Tezos-client

Tezos-client is the client when interacting with a Tezos node via RPC. Let's take a look at some examples and how to use it.

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

### Connecting to the network
The tezos-client needs to be connected to a Tezos node. You can connect to your own tezos node [[2]](/tezos-basics/introduction_to_cli_and_rpc#references) or you can use a community node on the Tezos mainnet or on a Tezos testnet.
[Here](https://tezostaquito.io/docs/rpc_nodes/) you can find a list of community nodes on the mainnet and testnet.

If you use a testnet you can download a free faucet file with test XTZ on it[here](https://faucet.tzalpha.net).

### Account activation
Activate your account by replacing `#accountName` and `#faucet` below with an account name and the path to your downloaded faucet file. 

```bash
$ tezos-client activate account #accountName with ~/Downloads/#faucet.json
```

Example :
```bash
$ tezos-client activate account user1 with ~/Downloads/tz1VH3sHQ5SNby95S9EtPQBqZrhgv2DqjPvy.json
```

### Get balance
To get the balance of your account you can execute the following command:
```
$ tezos-client get balance for #accountName
```

### Get timestamp
This call is useful to check if the node is synchronized. It returns the UTC time of the latest downloaded block, timezones may differ from your local time.
```
$ tezos-client get timestamp
```

### List known addresses
This call lists the addresses registered in your tezos-client.
```
$ tezos-client list known addresses
```

### Transfers and receipts
The command line below makes/shows a transaction of 42ꜩ from the account _user1_ to _user2_ (You can also just use the tezos addresses directly).

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

