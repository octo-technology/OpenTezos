---
id: reward
title: Reward and fees
authors: Maxime Sallerin
---

To maintain the network, Tezos needs bakers and endorsers. They stake their token and use their computing power to create blocks, manage transactions, vote and secure the network. In exchange for the completion of these tasks, bakers are rewarded with tokens from the transaction fees or tokens created by the network. Since the [Carthage update](https://blog.nomadic-labs.com/a-new-reward-formula-for-carthage.html), the reward system has been updated to make the network more robust against non-cooperative baking strategies.

## Delegating reward

## Baking reward

When a baker bakes a block, he receives a reward composed of all the [transaction fees](/tezos-basics/economics-and-rewards#transaction-cost) contained in the block in addition to a network reward computed by this formula:

```
e * BAKING_REWARD_PER_ENDORSEMENT
```

`BAKING_REWARD_PER_ENDORSEMENT` = 1.250ꜩ if the baking priority is high or `BAKING_REWARD_PER_ENDORSEMENT` = 0.1875ꜩ if the baking priority is low. This Carthage update allows to focus the baker's efforts on the priority blocks.

`e` is the number of endorsements the block contains. 32 endorsements are required to validate a block.
Finally, with this formula, the network reward for a baked block is generally 32 X 1.25 = 40 ꜩ/block in addition to the transaction fee contain in the block.

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
