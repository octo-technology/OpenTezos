---
id: introduction
title: Introduction
---

This module focuses on **blockchain explorers** and **blockchain indexers** for Tezos, 
how they work and how to use them. 
More precisely it will be explained how to observe the different information
(storage, entrypoint, bigmap etc.) of a **smart contract** deployed on the Tezos blockchain.

Blockchain is meant to be transparent, meaning that everyone has access to the information, 
however, the accessibility and readability of its information is not always easy and intuitive. 
The block explorer was designed to remedy this problem.

## What is a blockchain explorer?

A _blockchain explorer_, also known as a _block explorer_, is an app tracking activity on the blockchain. 
All transactions ever performed on a network can be viewed using such a tool.

**Blockchain explorers are like search engines for blockchains.**  
You can think of it as a window into the blockchain world,
giving you the opportunity to observe what’s happening in it.

Cryptocurrency users and developers use such a tool to view the status of past or present transactions. 

Some of the most basic information available on blockchain explorers includes (but are not limited to):

- **Block feeds**: This allows you to view all the latest mined and pending blocks on the blockchain.
  
- **Transaction feeds**: The transaction feed displays all the most recent and upcoming transactions.

- **Sending and receiving addresses**: Each transaction can be viewed individually to reveal the public addresses of the sending and receiving parties.
  
- **Wallet history**: All past and present transactions of an individual wallet address.

### Blockchain explorer use cases
Block explorers are not only made for casual users to check if their coins are still safe or for delegators to verify that their baker is not cheating with their earnings.

Block explorers are also used by:
- blockchain engineers who develop and debug new features in sandboxes (e.g. new blockchain consensus). 
- DApp developers who need debugging tools and more visibility into the current and past state of their contracts running on internal testnets and on the mainnet.
- bakers and staking services who need reliable data about delegation and 
earnings history in order to calculate correct payouts, plan their bond pools and execute operations.
- less technical user groups like auditors and regulators with strict requirements for the data quality, as they need to access a trusted copy of the full on-chain history 
in a format that's easy to digest for their spreadsheets and compliance tools.

![](../../static/img/explorer/use_cases.svg)
<small className="figure">FIGURE 1: Typical use cases of a block explorer</small>

## What is an indexer ?
A block explorer is typically made of:
- an indexer that extracts the on-chain data and stores it into a database
- an API that queries the database
- a frontend that displays the data

So, the indexer is the part of the explorer that fetches the raw data from the node, then processes it and stores it in the database in an efficient way to provide quick access to the blockchain data.  
The next chapter will describe how an indexer works, and a special focus will be made on one of the explorers for the Tezos blockchain, [TzStats.com](https://tzstats.com/).
