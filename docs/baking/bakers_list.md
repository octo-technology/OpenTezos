---
id: bakers_list
title: List of bakers
authors: Maxime Sallerin
---

In this section we will present the lists of bakers. Then as a delegator we will see how to choose a baker.

## List of baker

Tezos blockchain explorers mostly contain a list of bakers classified according to different criteria. This allows delegators to choose their baker in the most comfortable way. Check out [here](/explorer/available-tezos-indexers) a list of bloc explorers.

For example, [Baking Bad](https://tzkt.io/bakers/), [TzStats](https://tzstats.com/bakers) or [Tezos Nodes](https://tezos-nodes.com/) allow you to browse through bakers.

![](../../static/img/baking/tzstats_bakers)
<small className="figure">FIGURE 2: TzStats Bakers</small>

![](../../static/img/baking/tezos_nodes_bakers)
<small className="figure">FIGURE 3: Tezos Nodes Bakers</small>

### What kind of baker ?

You have probably come across terms like **public baker**, **private baker** or **corporate baker**. How are they different? In terms of protocol, i.e. participation in block validation, there is no difference. But there is one somewhere else.

#### Public bakers

A public baker is different from a private one by functioning as a public staking service promising to share its profits with anyone who had delegated them their stakes.

#### Private bakers

A private baker doesn’t offer everyone to delegate their stakes, and though, technically speaking, they can’t forbid you to delegate your tez to them, they are under no obligation to share their baking profits with you.

These days, it is the centralised exchanges like Coinbase, Binance or Kraken that hold the biggest stakes. They offer their users an opportunity to stake tez from their exchange accounts and get profit.

![](../../static/img/baking/tzstats_bakers)
<small className="figure">FIGURE 5: TzStats Bakers Top20</small>

#### Corporate bakers

A corporate baker only means that someone wants to emphasise that it is a corporation that bakes Tezos. Such a baker can be private or public.

## How to choose a baker ?

### Criterias

There are a few factors to consider when choosing a baker to delegate with.

#### Staking

This is the Tezos baker’s staking balance, which includes his own XTZ funds (bonds) and all the delegated funds. In short term, the bigger the stake, the less the baker’s profit fluctuates from cycle to cycle. This happens due to the randomness in the distribution of baking rights in Tezos, which means the more rolls, the less variance, and the less rolls, the more variance.

#### Free space

This is how much XTZ you can delegate to the baker. A negative value indicates that the baker is likely overdelegated, which is very unwanted as he will miss blocks and endorsements.

> Each time a baker/endorser creates/confirms a a block, they have to lock a certain amount for 5 cycles as a security deposit.

What is “overdelegation” and why does a baker have limited staking capacity?

Each time a baker produces a new block or confirms an existing block, a certain amount of his own bonds are blocked for 5 cycles as a security deposit. If the available XTZ balance is not enough (because the entire balance has already been blocked), the baker skips block/endorsement. That’s not good.

That’s why Tezos bakers should control their staking balance because if it is too large, they receive too many baking rights which cannot be covered by their bond. As a result, they miss blocks.

#### Criteria 3

## Conclusion

Those were the things you should heed when choosing a baker. It is up to everyone to decide which of those criteria is more important than the others. But no matter what, your choice of a baker should be conscious and well-reasoned.

## References

[1] https://tzkt.io/bakers

[2] https://tzstats.com/bakers

[3] https://tezos-nodes.com/

[4] https://baking-bad.org/docs/tezos-baker-metrics/

[5] https://tezos.org.ua/en/blog/how-to-choose-a-baker/
