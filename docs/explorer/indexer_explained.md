---
id: indexer_explained
title: How Indexers Work?
---

## Traditional Blockchain Explorer Backends

An indexer extracts,
transforms and loads on-chain data into the SQL database by mapping the data
into a pre-defined schema of tables with referential integrity.
Indexers are optimized for simplicity and fast implementation time.
The hope is that anything interesting can later be extracted using complex SQL queries.

![](../../static/img/explorer/traditional_indexer.svg)
<small className="figure">FIGURE 1: Traditional Blockchain Explorer Backends</small>

It turns out that this one-way data extraction model has a couple of problems:
- extracting complex state from a blockchain-node is expensive (especially things like listing balances across all accounts)
- SQL stores optimize for transactional workloads like finding individal rows, but are bad for analytical workloads that aggregate across columns (because full rows are loaded from disk)
- raw data storage requirements and I/O loads are extremely high since SQL data is stored row-wise
- some queries are even so expensive, they have to run offline (i.e. once a night or once a cycle) and their results have to be stored in extra tables
- most online queries to lists or joins across tables are limited by available main memory and I/O bandwidth and the only way to speed them up is replicating the database or using larger instances.

## Focus on BlockWatch Indexer (TzIndex)

The Blockwatch indexer [Tzindex](https://github.com/blockwatch-cc/tzindex) is used for the [TzStats explorer](https://tzstats.com/).

The **Blockwatch indexer** replaces the slow
and expensive SQL datastore with a high-performance columnar data store
that allows for extremely fast analytical queries.
It's a custom-made database for blockchain analytics.
Avoiding the storage bottleneck allows for more complex data processing.
State updates happen at each block,
which means all balance updates are always verified,
and the indexer will follow chain reorganizations in real-time.

![](../../static/img/explorer/blockwatch_indexer.svg)
<small className="figure">FIGURE 2: Blockwatch Indexer</small>

