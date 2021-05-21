---
id: reward
title: Rewards
authors: Maxime Sallerin
---

To maintain the network, Tezos needs bakers and endorsers. They stake their token and use their computing power to create blocks, manage transactions, vote and secure the network. In exchange for the completion of these tasks, bakers are rewarded with tokens from the transaction fees or tokens created by the network. Since the [Carthage update](https://blog.nomadic-labs.com/a-new-reward-formula-for-carthage.html), the reward system has been updated to make the network more robust against non-cooperative baking strategies.

## Delegating reward

When staking, you can earn a passive income by participating in the Tezos network via delegation. The current annual yield on Tezos is around `6%`, minus a validator’s fees.

There are no direct risks of delegating XTZ. The only risk you take is not earning the potential rewards. Carefully choose your baker to ensure quality of service and rewards.

Every time a baker receives rewards, those rewards are frozen for the next `5 cycles (~14 days)`, so the baker can’t spend it. Only after ~14 days rewards are unfrozen and the baker can transfer it to someone else. Most bakers wait until rewards are unfrozen and only then pay it out to delegators, but some don't.

- if your baker pays after rewards are unfrozen you will reveive your first reward after `20 days (confirmation) + 3 days (cycle ends) + 14 days (frozen) = ~37 days`.
- if your baker pays in advance, you will reveive your first reward after `20 days (confirmation) + 3 days (cycle ends) = ~23 days`.

Rewards for cycle `n` comes in the cycle `n + 1` (after ~3 days) so you will then receive your delegating reward every 3 days.

When delegating, your XTZ are completely liquid. You are free to move your tokens anytime as there are no freezing periods when delegating to a baker.

## Baking reward

When a baker bakes a block, he receives a reward composed of all the [transaction fees](/tezos-basics/economics-and-rewards#transaction-cost) contained in the block in addition to a network reward computed by this formula:

```
e * BAKING_REWARD_PER_ENDORSEMENT
```

`BAKING_REWARD_PER_ENDORSEMENT` = 1.250ꜩ if the baking priority is high or `BAKING_REWARD_PER_ENDORSEMENT` = 0.1875ꜩ if the baking priority is low. This Carthage update allows to focus the baker's efforts on the priority blocks.

`e` is the number of endorsements the block contains. 32 endorsements are required to validate a block.
Finally, with this formula, the network reward for a baked block is generally 32 X 1.25 = 40 ꜩ/block in addition to the transaction fee contained in the block.

## Endorser reward

Endorsers are also rewarded, when they are also randomly selected. One block needs 32 endorsers slots. But one endorser can have more than one slot.

```
e * ENDORSEMENT REWARD
```

Where `ENDORSEMENT_REWARD` = 1.250ꜩ if the block priority is high and `ENDORSEMENT_REWARD` = 0.833333 ꜩ if the block priority is low.

`e` Is the number of endorser slots attributed.

## Accuser reward

## Inflation

Each new block generates 80 new XTZ as a reward. A new block is created each minute witch generates 42 Million of XTZ per year (80ꜩ x 60 mins x 24 hours x 365 days). At the Tezos launch, the network was composed of 763 Millions XTZ.
Therefore the inflation rate of the XTZ token is 5.51% : 42 000 000 / 763 000 000 = 5.51%.

## References

[1] https://tezos.gitlab.io/alpha/proof_of_stake.html#rewards

[2] https://baking-bad.org/docs/tezos-staking-for-beginners/
