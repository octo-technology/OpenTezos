---
id: indexer-explained
title: How Indexers Work?
authors: Maxime Sallerin
---

This chapter aims to describe the functioning of a traditional indexer and its components. 
It will highlight the problems that most indexers can encounter 
and will describe the innovative solution proposed 
by the **BlockWatch Indexer** used for the **TzStats explorer**.

## Traditional Blockchain Explorer Backends
Indexers are node operators. 
The **ETL** extract, transform and load data 
into the **SQL database** by mapping the data into a pre-defined schema of tables with referential integrity 
in order to provide indexing and query processing services via the **API**.

- A **Tezos Node** is the heart of the blockchain, it manages the protocol.
- **ETL** stands for *extract, transform, and load* 
  The process of ETL plays a key role in data integration strategies. 
  ETL allow businesses to gather data from multiple sources and consolidate it into a single, centralized location.
- **API** is the acronym for *Application Programming Interface*,
  which is a software intermediary that allows two applications to talk to each other.

<br/>
<p align="center">

![](../../static/img/explorer/traditional_indexer.svg)
<small align="center" className="figure">FIGURE 1: Traditional Blockchain Explorer Backends</small>
</p>
<br/>

It turns out that this one-way data-extraction model has a couple of problems:
- **Expensive States Queries**: extracting complex state from a blockchain's node is expensive.
- **One-way-data flow**: SQL stores are optimized for transactional workloads like finding individual rows, 
  but are bad for analytical workloads that aggregate across columns (because full rows are loaded from the disk).
- **Slow Queries**: some queries are so expensive,
  they have to run offline (i.e. once a night or once a cycle)
  and their results have to be stored in extra tables.
- **Inefficient Storage Layout and Limited Throughput**: 
  most online queries to join across tables, are limited by available main memory 
  and I/O bandwidth and the only way to speed them up is by replicating the database or using larger instances.


## Focus on BlockWatch Indexer (TzIndex)
The Blockwatch Indexer [TzIndex](https://github.com/blockwatch-cc/tzindex) is used for the [TzStats explorer](https://tzstats.com/).

The **Blockwatch indexer** replaces the slow and expensive SQL datastore with a high-performance columnar database that allows for extremely fast analytical queries.
> **Columnar database** is a column-oriented storage for database.
> It is optimized for fast retrieval of data columns, 
> for example for analytical applications.
> It significantly reduces the overall disk I/O requirements 
> and limits the amount of data you need to load from the disk.

It's a custom-made database for blockchain analytics. Avoiding the storage bottleneck allows for more complex data processing.
> **Storage bottleneck** is a situation where the flow of data gets impaired 
> or stopped completely due to bad performance or lack of resources.

State updates happen at each block, which means all the balance updates are always verified,
and the indexer will follow chain reorganizations in real-time.

![](../../static/img/explorer/blockwatch_indexer.svg)
<small className="figure">FIGURE 2: Blockwatch Indexer</small>

## To go further
To learn more on the subject, please refer to the official [TzStats blog post](https://tzstats.com/blog/next-gen-blockchain-indexing-for-tezos/) and this [video](https://www.youtube.com/watch?v=2I9mmA0GzMk) that illustrates the inner workings of an indexer.

## References

[1] https://tzstats.com/blog/next-gen-blockchain-indexing-for-tezos/

[2] https://www.youtube.com/watch?v=2I9mmA0GzMk

