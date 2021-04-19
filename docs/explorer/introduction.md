---
id: introduction
title: Introduction
---

This module will explain the notion of blockchain **explorer** and **indexer**, 
then see how it works and finally how to use it.

## What is a blockchain explorer ?

A blockchain explorer, also known as a block explorer, is a website for tracking activity on the blockchain. 
All transactions ever performed on a network can be viewed using this tool.

Blockchain explorers are like blockchain search engines. 
Cryptocurrency users and developer depend on this tool to view the status of past and present transactions. 
Some of the most basic information available on blockchain explorers include, but are not limited to:

- **Block feeds**: This allows you to view all the latest mined and pending blocks on the blockchain.
- **Transaction feeds**: The transaction feed displays all of the most recent and upcoming transactions.
- **Sending and receiving** addresses: Each transaction can be viewed individually to reveal the public addresses of the sending and receiving parties.
- **Transaction history**: All past and present transactions of an individual wallet address can also be viewed on the explorer.

### Blockchain explorer use cases

![](../../static/img/explorer/use_cases.svg)
<small className="figure">FIGURE 1: Use Cases</small>

Block explorers are not only made for casual users 
to check if their coins are still safe or for delegators who are afraid their bakers cheat on them.

First, there are blockchain engineers who develop and debug new features in sandboxes every day. 
Also DApp developers need debugging tools and 
visibility into the current and 
past state of their contracts who run on internal testnets and on mainnet.

Then there's bakers and staking services who need reliable data about delegation and 
earnings history for calculating correct payouts and 
also reliably planning their bond pools and operations.

Then there's less technical user groups like auditors and 
regulators with strict requirements on data quality and 
the need to access a trusted copy of the full on-chain history 
in a format that's easy to digest for their spreadsheets and compliance tools.


## What is an indexer ?

Typical block explorers consist of an indexer that extracts on-chain data and stores it into a database, 
an API that queries the database, and a frontend that displays the data. 

The indexer fetches raw data from the Tezos node, 
then processes it and stores it in the database in such a way as to provide effective access to the blockchain data. 
For example, getting operations by hash, or getting all operations of a particular account, or getting detailed baking rewards, etc.

### When to use an indexer ?

- Use the node RPC to access transactions and context data when:
    - you need **trusted** data and **signatures**.
    - you'r risk profile requires a lower number of moving parts and 
      less potential sources of errors (node may be audited, indexer may be not).
    - trust outweighs performance.

- Use an indexer when you need:
    - **bulk access** to current and historic state (large tables, time-series).
    - account, transaction, block lists with **filter capabilities** 
      (eg. all transactions in the past day with volume > N tez, all accounts with balance > N tez).
    - aggregate data and **statistics** (eg. baker income, rights utilization).
    - **data relations** (transactions by account, contract storage updates referencing a specific account).
    - **data export** capabilities (CSV export).
    
