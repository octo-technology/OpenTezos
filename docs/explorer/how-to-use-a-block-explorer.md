---
id: how-to-use-a-block-explorer
title: How to use the tzStats blockchain explorer?
---

In the previous chapter, we saw that there is different block indexers for different uses in block explorers for the Tezos Blockchain. In this chapter we will focus on [TzStats](https://tzstats.com/) which is the most popular and complete Tezos explorer.

![](../../static/img/explorer/tzStats_first_page.png)
<small className="figure">FIGURE 1: TzStats Main Dashboard</small>

[TzStats](https://tzstats.com/) is developed by _Blockwatch Data Inc._ It is a block explorer for public and private Tezos networks and is based on the [TzIndex indexer](https://github.com/blockwatch-cc/tzindex). 

Each Tezos network has its own _TzStats_ version:
- **Mainnet** : [tzstats.com](https://tzstats.com)
- **Mainnet Staging**: [staging.tzstats.com](https://staging.tzstats.com)
- **Delphinet** : [delphi.tzstats.com](https://delphi.tzstats.com)
- **Edonet** : [edo.tzstats.com](https://edo.tzstats.com)

// TODO: What is mainnet staging used for?

## TzStats' main features
TzStats is a very intuitive platform but has a complete guide available [here](https://tzstats.com/docs/guide).

Here are _TzStats_' main features:

- [Main Dashboard](https://tzstats.com/): This page provides a quick view of all the main activity on the Tezos network, e.g. staking activity, gas price, XTZ supply, transaction volume, etc.

- [Network Activity](https://tzstats.com/activity): This page provides a world map with the location where new blocks are being baked. There is also the list of _whales_ (i.e list of high-value transfers >= $100,000).

- [Bakers](https://tzstats.com/bakers): This page provides the total amount of Tezos bakers. Several lists are also available to gain an overview of the Tezos baker landscape. You can choose between the tabs Public, Top 20, Gainers, Losers, Newcomers etc.
  
- [Block](https://tzstats.com/1435766): This page provides general information about a specific block number along with technical details such as gas used, block health, etc.
  // TODO: What is block health?

- [Cycle](https://tzstats.com/cycle/350): This page provides general information about a specific cycle number.
// TODO: What is a cycle?

- [Markets](https://tzstats.com/markets): This page provides an overview of the current market activity, e.g. list of exchanges, 1 day volume, overall market capitalization, etc.

- [Protocols](https://tzstats.com/protocols): This page shows the past and current protocol used by Tezos and the overall age of the Tezos blockchain. Refer to chapter on the [history of amendements](/tezos-basics/history-of-amendements) to understand each protocol.

- [Voting](https://tzstats.com/election/head): This page shows the past and current elections and indicates when it ends. Refer to chapter on the [governance on chain](/tezos-basics/governance-on-chain) to understand voting.

// TODO: Some screenshots of each page would be nice, maybe with added caption of each area. 

// TODO: I would separate TzStats' main features and Checkout your smart contract on TzStats in two different chapters.

## Checkout your smart contract on TzStats
As a developer, you will often want to check the state of your deployed smart contracts. Using a blockchain explorer is a fast and easy way to do so. In this section, we'll deploy a smart contract and check it out on _TzStats_.

### Step 1: Deploy your smart contract deployment
We are going to re-use the [raffle smart contract from the LIGO module](/ligo/contracts-ligo) and deploy it on a testnet.

The complete source code of the raffle contract can be found [here](https://github.com/bepi-octo/raffle-smart-contract.git).

// TODO: Move code to OpenTezos repo. I suggest creating a new folder in root called 'examples' then 'raffle-smart-contract' and put everything there.

It contains two smart contracts and their associated migrations:
1. a raffle smart contract, using a _big map_
2. a raffle smart contract, using a _map_

The current testnet at the time of writing is _Edonet_. The account used for deployment is defined in the _truffle_ config (refer to the [How to build a Dapp module](/dapp) for more info).

To setup the project, run the following commands:

```shell
$ git clone https://github.com/bepi-octo/raffle-smart-contract.git
$ cd
$ npm install -g truffle@tezos
$ npm install 
```

To deploy/migrate the smart contracts, run the following command:

```shell
$ truffle migrate --network edonet
```

The contracts are now deployed.

Note that the migration files also include calling a few entrypoints after deployment in order to automatically open a raffle and buy a ticket.

The contract addresses can be found in the command logs, or in `build/contracts/bigRaffle.json}` (respectively _littleRaffle.json_) in the `address` field under `network`.

// TODO: Add screenshot of command log showing the contract address.

### Step 2: Find your smart contract on _TzStats_
Once you have the address of your smart contract, go to the _TzStats_ website associated with the network you deployed your contract on. In our case it is the [Edo TzStats](https://edo.tzstats.com).

Copy/paste your address in the search bar:

![](../../static/img/explorer/tzStats_search_bar.png)

TzStats then shows a page with information related to your smart contract, e.g. the balance of the contract, the amounts sent and received, the creator address, etc.

![](../../static/img/explorer/tzStats_smart_contract_general_information.png)

Below the general information, you have a list of tabs allowing you to see: 
- the calls 
- the entry points
- the contract code
- the storage
- the different _big maps_ of your smart contract (if there are any)

#### Calls
// TODO: Explain the calls tab

#### Entrypoints
Here you have a list of all your entrypoints and their parameters. Furthermore you can see how many calls each entrypoint has received.

![](../../static/img/explorer/tzStats_smart_contract_entrypoints.png)

#### Calls
// TODO: Explain the contract code tab

#### Storage
Here you have access to the content of your storage with the type of each variables and their current value. Notice that the content excludes big maps as they have specific tabs for them.

![](../../static/img/explorer/tzStats_smart_contract_storage.png)

#### Big map
// TODO: Explain the Big map tab with an example

### API Calls

The same pieces of information can be retrieved by API calls, without using the frontend.
A full documentation is available [here](https://tzstats.com/docs/api#tezos-api).

First, let's get the contract information.
The "explorer" endpoints will be used (full reference [here](https://tzstats.com/docs/api#explorer-endpoints))

In this example, one of the contracts has been migrated on edonet to KT1Vcj7ij2fP28MGuCstVGdGRTVafSTECyMV.

Let's retrieve the contract details:
```shell
$ GET https://api.edo.tzstats.com/explorer/contract/KT1Vcj7ij2fP28MGuCstVGdGRTVafSTECyMV
{
  "address": "KT1Vcj7ij2fP28MGuCstVGdGRTVafSTECyMV",
  "creator": "tz1cGftgD3FuBmBhcwY24RaMm5D2UXLr5LHW",
  "delegate": "",
  "storage_size": 2817,
  "storage_paid": 2817,
  "first_seen": 186527,
  "last_seen": 186528,
  "first_seen_time": "2021-04-19T13:42:35Z",
  "last_seen_time": "2021-04-19T13:43:17Z",
  "n_ops": 1,
  "n_ops_failed": 0,
  "bigmaps": {
    "sold_tickets": 67645
  },
  "iface_hash": "d30a2146",
  "code_hash": "783617a0",
  "call_stats": {
    "buyTicket": 1,
    "closeRaffle": 0,
    "openRaffle": 0
  },
  "features": [
    "transfer_tokens"
  ],
  "interfaces": []
}

```
The pieces of information do match those from the web interface: address, creator, first_seen_time, last_seen_time...

The call to the entrypoint "buyTicket" can be seen in the `call_stats` field: one call has indeed been made to this entrypoint.

More details can be fetched about those calls:
```shell
$ GET https://api.edo.tzstats.com/explorer/contract/KT1Vcj7ij2fP28MGuCstVGdGRTVafSTECyMV/calls
[
  {
    "row_id": 2631678,
    "hash": "oobsftb8GALb7DhZwirQTxQQWL1V1qzgHHjc4rjrzAy2f8yE1Qp",
    "type": "origination",
    "block": "BLAVCZHSZqnpk2ixJN2jzFkMCVe91CVruSVcBxvxyut59gDAYv3",
    "time": "2021-04-19T13:42:35Z",
    "height": 186527,
    "cycle": 91,
    "counter": 620082,
    "op_l": 3,
    "op_p": 7,
    "op_c": 0,
    "op_i": 0,
    "status": "applied",
    "is_success": true,
    "is_contract": true,
    "gas_limit": 13878,
    "gas_used": 13778,
    "gas_price": 0.31543,
    "storage_limit": 2955,
    "storage_size": 2698,
    "storage_paid": 2698,
    "volume": 0,
    "fee": 0.004346,
    "burned": 0.73875,
    "has_data": true,
    "days_destroyed": 0,
    "big_map_diff": [
      {
        "action": "alloc",
        "key_encoding": "int",
        "key_type": "nat",
        "value_type": "address"
      }
    ],
    "sender": "tz1cGftgD3FuBmBhcwY24RaMm5D2UXLr5LHW",
    "receiver": "KT1Vcj7ij2fP28MGuCstVGdGRTVafSTECyMV"
  },
  {
    "row_id": 2631692,
    "hash": "oogemcdA84ukD1BhJ4evi8fQWTo4boBeaVZ8B534HSa7JVnvUPb",
    "type": "transaction",
    "block": "BMB96mJZnLrGVVMkNJWUa7kpLVaeGMJ6JzNwDT1xaYzdT8wh4Gr",
    "time": "2021-04-19T13:43:17Z",
    "height": 186528,
    "cycle": 91,
    "counter": 620083,
    "op_l": 3,
    "op_p": 3,
    "op_c": 0,
    "op_i": 0,
    "status": "applied",
    "is_success": true,
    "is_contract": true,
    "gas_limit": 14911,
    "gas_used": 14811,
    "gas_price": 0.12146,
    "storage_limit": 119,
    "storage_size": 2817,
    "storage_paid": 119,
    "volume": 1,
    "fee": 0.001799,
    "burned": 0.02975,
    "has_data": true,
    "days_destroyed": 0.032986,
    "parameters": {
      "entrypoint": "buyTicket",
      "call": "buyTicket",
      "branch": "LL",
      "id": 0,
      "value": {
        "buyTicket": "Unit"
      }
    },
    "storage": {
      "value": {
        "admin": "tz1cGftgD3FuBmBhcwY24RaMm5D2UXLr5LHW",
        "close_date": "1618839716722",
        "contract_name": "Raffle smart contract with big map",
        "description": "",
        "jackpot": "100",
        "players": [
          "tz1cGftgD3FuBmBhcwY24RaMm5D2UXLr5LHW"
        ],
        "raffle_is_open": "true",
        "sold_tickets": "67645",
        "winning_ticket_number_hash": "00"
      }
    },
    "big_map_diff": [
      {
        "key": "0",
        "key_hash": "exprtZBwZUeYYYfUs9B9Rg2ywHezVHnCCnmF9WsDQVrs582dSK63dC",
        "key_binary": "0",
        "value": "tz1cGftgD3FuBmBhcwY24RaMm5D2UXLr5LHW",
        "action": "update"
      }
    ],
    "sender": "tz1cGftgD3FuBmBhcwY24RaMm5D2UXLr5LHW",
    "receiver": "KT1Vcj7ij2fP28MGuCstVGdGRTVafSTECyMV",
    "entrypoint_id": 0
  }
]
```

The response holds the details about two calls:
1. the contract origination
2. the call to buy a ticket

It details the inputs used for this entrypoint, the storage after the call, the differences in the big map that changed after the call...

The current storage can be fetched, with this endpoint:
```shell
$ GET https://api.edo.tzstats.com/explorer/contract/KT1Vcj7ij2fP28MGuCstVGdGRTVafSTECyMV/storage
{
  "value": {
    "admin": "tz1cGftgD3FuBmBhcwY24RaMm5D2UXLr5LHW",
    "close_date": "1618839716722",
    "contract_name": "Raffle smart contract with big map",
    "description": "",
    "jackpot": "100",
    "players": [
      "tz1cGftgD3FuBmBhcwY24RaMm5D2UXLr5LHW"
    ],
    "raffle_is_open": "true",
    "sold_tickets": "67645",
    "winning_ticket_number_hash": "00"
  }
}

```
The storage returns by the API does match the one displayed in the web interface.
The `sold_tickets` big map holds a big map id, instead of the values.  
Indeed, a big map is meant to hold unbounded data size: thus, fetching the storage could become quickly expensive, if the big maps hold a lot of values.


The values of a big map have to be retrieved from a separate endpoint, thanks to its id (`67645` in this case):
```shell
$ GET https://api.edo.tzstats.com/explorer/bigmap/67645/values
[
  {
    "key": "0",
    "key_hash": "exprtZBwZUeYYYfUs9B9Rg2ywHezVHnCCnmF9WsDQVrs582dSK63dC",
    "key_binary": "0",
    "value": "tz1cGftgD3FuBmBhcwY24RaMm5D2UXLr5LHW"
  }
]

```


All the pieces of information displayed in the web interface can be retrieved from the API.
All these API calls can of course be made by any librairies, and thus can be automated in any program.


# Conclusion

tzstats.com is extremely useful to monitor what is going on the mainnet and public testnets.
All the pieces of information regarding the cycles, the blocks, the transactions, the smarts contracts... can be quickly found,
thanks to a user-friendly interface.

In addition, tzstats provides a complete and free REST API, that can be called without restriction.
Those calls can be performed by any library: the pieces of information retrieved about a public Tezos network can be used in another monitoring tool, or even in Dapps.

Indeed, the handling of big maps can be troublesome with some libraries.
For instance, _taquito_ (a typescript library to interact with a tezos node) is not able to retrieved all the values (and even the keys) of a big map with a simple call.
A call to the tzstats API solves this issue.

Those tools are also available for private networks.
That is what will be detailed in the next chapter, where a private tzstats is set up to monitor a private network.

## References
// TODO: references?










