---
id: introduction
title: Introduction
---

This module focuses on **blockchain explorers** and **blockchain indexers** for Tezos, how they work and how to use them.

## What is a blockchain explorer?
A _blockchain explorer_, also known as a _block explorer_, is an app or website tracking activity on the blockchain. All transactions ever performed on a network can be viewed using such tool.

**Blockchain explorers are like search engines for blockchains.**

Cryptocurrency users and developers use such tool to view the status of past or present transactions. 

Some of the most basic information available on blockchain explorers includes (but is not limited to):

- **Block feeds**: This allows you to view all the latest mined and pending blocks on the blockchain.
  
- **Transaction feeds**: The transaction feed displays all of the most recent and upcoming transactions.

- **Sending and receiving addresses**: Each transaction can be viewed individually to reveal the public addresses of the sending and receiving parties.
  
- **Wallet history**: All past and present transactions of an individual wallet address.

### Blockchain explorer use cases
Block explorers are not only made for casual users to check if their coins are still safe or for delegators to verify that their baker is on cheating with their earnings.

Block explorers are also used by:
- blockchain engineers who develop and debug new features in sandboxes (e.g. new blockchain consensus). 
- DApp developers who need debugging tools and more visibility into the current and 
past state of their contracts running on internal testnets and on the mainnet.
- bakers and staking services who need reliable data about delegation and 
earnings history in order to calculate correct payouts, plan their bond pools and execute operations.
- less technical user groups like auditors and regulators with strict requirements on the data quality. They also need to access a trusted copy of the full on-chain history 
in a format that's easy to digest for their spreadsheets and compliance tools.

![](../../static/img/explorer/use_cases.svg)
<small className="figure">FIGURE 1: Typical use cases of a block explorer</small>

## What is an indexer ?
A block explorers is typically made of:
- an indexer that extracts the on-chain data and stores it into a database
- an API that queries the database
- a frontend that displays the data

The indexer is the part of the explorer that fetches the raw data from the Tezos node, then processes it and stores it in the database in an efficient way to provide quick access to the blockchain data. 

Some requests would be quite difficult to run without an indexer and using only the Tezos node RPC, typically fetching an operation from an hash, getting all operations of a particular account, or getting detailed baking rewards.
// TODO : I changed this sentence to make more sense but it that correct? Is it really more difficult to use the Node RPC rather than indexer for such operation?

### When to use the node RPC and when to use an indexer ?
Use the node RPC to access transactions and context data when:
  - you need **trusted** data and **signatures**. // TODO: Does that mean that data from an indexer is not trusted?
  - your risk profile requires a lower number of moving parts and less potential sources of errors (i.e. a node may be audited, an indexer may not).
  - trust outweighs performance
// TODO: What about difficultly of use? Cf first TODO above.

Use an indexer when you need:
  - **bulk access** to current and historic state (large tables, time-series)
  - accounts, transactions, block lists with **filter capabilities** (e.g. all transactions in the past days with volume > _n_ tez, or all accounts with balance > _n_ tez).
  - aggregate data and **statistics** (e.g. baker income, rights utilization) // TODO: what is rights utilization?
  - **data relations** (transactions by account, contract storage updates referencing a specific account)
  - **data export** capabilities (CSV export)
// TODO: So all these are not possible from the node RPC?

// TODO: Conclusion + what we will see in the rest of this module/next chapters?
    
