---
id: bakers_list
title: List of bakers
authors: Maxime Sallerin
---

In this section, we will present how to find lists of bakers. Then as a delegator, we will see how to choose a baker.

## List of baker

Tezos blockchain explorers mostly contain a list of bakers classified according to different criteria. This allows delegators to choose their baker in the most comfortable way. Check out [here](/explorer/available-tezos-indexers) a list of block explorers.

For example, [Baking Bad](https://tzkt.io/bakers/), [TzStats](https://tzstats.com/bakers) or [Tezos Nodes](https://tezos-nodes.com/) allow you to browse through bakers.

![](../../static/img/baking/baking_bad_bakers.png)
<small className="figure">FIGURE 1: Baking Bad Bakers</small>

![](../../static/img/baking/tzstats_bakers.png)
<small className="figure">FIGURE 2: TzStats Bakers</small>

![](../../static/img/baking/tezos_node_bakers.png)
<small className="figure">FIGURE 3: Tezos Nodes Bakers</small>

### What kind of baker?

You have probably come across terms like **public baker**, **private baker** or **corporate baker**. How are they different? In terms of protocol, i.e. participation in block validation, there is no difference. The difference lies somewhere else.

#### Public bakers

A public baker is different from a private one by functioning as a public staking service promising to share its profits with anyone who had delegated them their stakes.

#### Private bakers

A private baker doesn’t offer everyone to delegate their stakes. Technically speaking, they can’t forbid you to delegate your XTZ to them, but they are under no obligation to share their baking profits with you.

These days, it is the centralized exchanges like Coinbase, Binance or Kraken, that hold the biggest stakes. They offer their users an opportunity to stake XTZ from their exchange accounts and get profit.

![](../../static/img/baking/tzstats_bakers_top20.png)

#### Corporate bakers

A corporate baker only means that someone wants to emphasize that it is a corporation that bakes Tezos. Such a baker can be private or public.

## How to choose a baker?

### Criteria

There are a few factors to consider when choosing a baker to delegate to:

#### Staking

This is the Tezos baker’s staking balance, which includes his own XTZ funds (bonds) and all the delegated funds. In the short term, the greater the stake, the less the baker’s profit fluctuates from cycle to cycle. This happens due to the randomness in the distribution of baking rights in Tezos, which means the more rolls, the less variance, and the less rolls, the more variance.

#### ROI (Return On Investment)

This is how much Tezos staking rewards you would earn per year if you delegate to a particular baker, assuming he pays all the rewards accurately, doesn’t miss payouts and, doesn’t change the fee and other terms.

#### Fee

This is how much the Tezos baker charges from the staking rewards he distributes between his delegators. On average, the profitability is the same across all bakers, yet their customers have varying profits as different bakers have different fees. If the fee is too high or too low, it’s a good reason to start thinking why.

#### Free space

This is how much XTZ you can delegate to the baker. A negative value indicates that the baker is likely _overdelegated_, which is very unwanted as he will miss blocks and endorsements.

> Each time a baker/endorser creates/confirms a block, they have to lock a certain amount for 5 cycles as a security deposit. _Overdelegation_ is when the available XTZ balance is not enough (because the entire balance has already been locked) so, they skip block/endorsement.

#### Minimum delegated amount.

Bakers can set up a minimum amount they expect to get from a delegator. Some accept stakes starting from 1 XTZ while others from 1000 XTZ.

#### Payouts accuracy

This value indicates how accurate the baker’s payouts are.

#### Payouts periodicity

This value indicates whether the baker pays according to his payment schedule or not.

## Conclusion

Those were the things you should heed when choosing a baker. It is up to everyone to decide which of those criteria is more important than the others. But no matter what, your choice of a baker should be conscious and well-reasoned.

## References

[1] https://tzkt.io/bakers

[2] https://tzstats.com/bakers

[3] https://tezos-nodes.com/

[4] https://baking-bad.org/docs/tezos-baker-metrics/

[5] https://tezos.org.ua/en/blog/how-to-choose-a-baker/
