---
id: reward
title: Rewards
authors: Maxime Sallerin
---

To maintain the network, Tezos needs bakers and endorsers. They stake their token and use their computing power to create blocks, manage transactions, vote and secure the network. In exchange for the completion of these tasks, bakers are rewarded with tokens from the transaction fees or tokens created by the network. Since the [Carthage update](https://blog.nomadic-labs.com/a-new-reward-formula-for-carthage.html), the reward system has been updated to make the network more robust against non-cooperative baking strategies.

## Inflation

Each new block generates 80 new XTZ as a reward. 40 XTZ for the bakers and 40 XTZ for the endorsers.
A new block is created each minute witch generates 42 Million of XTZ per year (80ꜩ x 60 mins x 24 hours x 365 days). At the Tezos launch, the network was composed of 763 Millions XTZ.
Therefore the inflation rate of the XTZ token is `5.51%` : 42 000 000 / 763 000 000 = 5.51%.

## Baking reward

When a baker bakes a block, he receives a reward composed of all the [transaction fees](/tezos-basics/economics-and-rewards#transaction-cost) contained in the block in addition to a network reward computed by this formula:

```
e * BAKING_REWARD_PER_ENDORSEMENT
```

- `e` = 32 is the number of endorsements the block contains.
- `BAKING_REWARD_PER_ENDORSEMENT` = 1.250ꜩ if the baking priority is high (`p` = 0)
- `BAKING_REWARD_PER_ENDORSEMENT` = 0.1875ꜩ if the baking priority is low (`p`= 1).

To make deflationary baking irrational, for all profitability criteria, the reward for including an endorsement is set to the same amount as the reward to have one endorsement included. In other words, the function makes a non-cooperative baker lose as many rewards per censored endorsement as the endorser who loses the endorsement. This property holds only for high priority. The value is `40/32 = 1.250`.

To make block stealing less profitable, and since the previous point needs to equalize the rewards for the baker and the endorsers of a block, the reward for baking at low priority is set to much less than the reward for baking at high priority. The decreasing factor is **0.15**. The value is `40/32 * 0.15 = 6/32 = 0.1875` per included endorsement.

This Carthage update allows to focus the baker's efforts on the priority blocks.

The final formulas for [Emmy+C](https://blog.nomadic-labs.com/analysis-of-emmy.html) are as follows. For a block baked at priority `p` and containing `e` endorsements, the reward is computed as:

```js
baking_reward (p, e) =
  if p = 0 then
     (e / 32) * 40 // e * 1.250
  else
     (e / 32) * 6 // e * 0.1875
```

Finally, with this formula, the network reward for a baked block is generally 32 X 1.250 = **40** ꜩ/block in addition to the transaction fee contained in the block.

## Endorsing reward

Endorsers are also rewarded, when they are also randomly selected. One block needs 32 endorsers slots. But one endorser can have more than one slot.

```
e * ENDORSEMENT_REWARD
```

`e` Is the number of endorser slots attributed.
`ENDORSEMENT_REWARD` = 1.250ꜩ if the baking priority is high (`p` = 0)
`ENDORSEMENT_REWARD` = 0.833333ꜩ if the baking priority is low (`p`= 1).

The endorsement rewards for endorsements included in low priority blocks are decreased by a factor of **2/3**. This does decrease slightly resistance to block stealing because the baker that steals a block gets a higher reward for his own endorsements, but has the advantage of punishing the endorsers less for having their endorsements not included by absent low priority bakers. The value is `40/32 * 2/3 = 0.833333`.

The reward reveive for `e` slot endorsed at priority `p` is computed as:

```js
endorsing_reward (p) =
  if p = 0 then
     (e / 32) * 40
  else
     (e / 32) * 40 * (2/3)
```

## Delegating reward

When delegating, you can earn a passive income by participating in the Tezos network via delegation. The current annual yield on Tezos is around `6%`, minus a validator’s fees.

Every time a baker receives rewards, those rewards are frozen for the next `5 cycles (~14 days)`, so the baker can’t spend it. Only after ~14 days rewards are unfrozen and the baker can transfer it to someone else. Most bakers wait until rewards are unfrozen and only then pay it out to delegators, but some don't.

- if your baker pays after rewards are unfrozen you will reveive your first reward after `20 days (confirmation) + 3 days (cycle ends) + 14 days (frozen) = ~37 days`.
- if your baker pays in advance, you will reveive your first reward after `20 days (confirmation) + 3 days (cycle ends) = ~23 days`.

Rewards for cycle `n` comes in the cycle `n + 1` (after ~3 days) so you will then receive your delegating reward every 3 days.

There are no direct risks of delegating XTZ. The only risk you take is not earning the potential rewards. Carefully choose your baker to ensure quality of service and rewards.

When delegating, your XTZ are completely liquid. You are free to move your tokens anytime as there are no freezing periods when delegating to a baker.

## Accusation reward

The Accuser monitors the network, detects double-baking or double-endorsing.

If two endorsements are made for the same slot or two blocks baked at the same height, the evidence can be collected by an accuser and included in a block for a period of 5 cycles including the current cycle.

This accusation forfeits the entirety of the safety deposit and future reward up to that point in the cycle. Half is burned, half goes to the accuser in the form of a block reward.

## References

[1] https://tezos.gitlab.io/alpha/proof_of_stake.html#rewards

[2] https://baking-bad.org/docs/tezos-staking-for-beginners/

[3] https://blog.nomadic-labs.com/a-new-reward-formula-for-carthage.html

[4] https://blog.nomadic-labs.com/analysis-of-emmy.html
