---
id: indexer-explained
title: How Indexers Work?
---

// TODO: intro. quick recap about what is an indexer. What are we going to talk about in this chapter?

## Traditional Blockchain Explorer Backends
Indexers are node operators. They extract, transform and load data (**ETL job**) into the **SQL database** in order to provide indexing and query processing services via the **API**.
// TODO: What is a node operator? What is an ETL job?
// TODO: How do they extract the data? Are they going through each block one by one? Big for-loop?

- **Tezos Node** is the heart of the blockchain, it manages the protocol.
- **ETL** stands for *extract, transform, and load* 
  The process of ETL plays a key role in data integration strategies. 
  ETL allows businesses to gather data from multiple sources and consolidate it into a single, centralized location.
- **API** is the acronym for *Application Programming Interface*,
  which is a software intermediary that allows two applications to talk to each other.

<br/>
<p align="center">

![](../../static/img/explorer/traditional_indexer.svg)
<small align="center" className="figure">FIGURE 1: Traditional Blockchain Explorer Backends</small>
</p>
<br/>

It turns out that this one-way data extraction model has a couple of problems:
- Expensive States Queries // TODO: Why?
- One-way-data flow // TODO: Why is this an issue?
- Slow Queries // TODO: Why?
- Inefficient Storage Layout // TODO: Why?
- Limited Throughput // TODO: Why?


## Focus on BlockWatch Indexer (TzIndex)
The Blockwatch Indexer [TzIndex](https://github.com/blockwatch-cc/tzindex) is used for the [TzStats explorer](https://tzstats.com/).

The **Blockwatch indexer** replaces the slow and expensive SQL datastore with a high-performance columnar data store that allows for extremely fast analytical queries.
// TODO: What is a columnar data store? Why is this faster that SQL?
It's a custom-made database for blockchain analytics. Avoiding the storage bottleneck allows for more complex data processing.
// TODO: What storage bottleneck ?
State updates happen at each block, which means all balance updates are always verified,
and the indexer will follow chain reorganizations in real-time.
// TODO: Isn't that true for all indexers?

![](../../static/img/explorer/blockwatch_indexer.svg)
<small className="figure">FIGURE 2: Blockwatch Indexer</small>
// TODO: Can you explain this schema a little more ? What no include the bottlenecks on the schema like on https://youtu.be/2I9mmA0GzMk?t=246 ?

## To go further
To learn more on the subject, please refer to the official [TzStats blog post](https://tzstats.com/blog/next-gen-blockchain-indexing-for-tezos/) and this [video](https://www.youtube.com/watch?v=2I9mmA0GzMk) that illustrates the inner workings of an indexer.

## References

[1] https://tzstats.com/blog/next-gen-blockchain-indexing-for-tezos/

[2] https://www.youtube.com/watch?v=2I9mmA0GzMk

