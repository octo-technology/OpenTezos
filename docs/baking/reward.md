---
id: reward
title: Rewards
authors: Maxime Sallerin
---

To maintain the network, Tezos needs bakers and endorsers. They stake their token and use their computing power to create blocks, manage transactions, vote and secure the network. In exchange for the completion of these tasks, bakers are rewarded with tokens from the transaction fees or tokens created by the network. Since the [Carthage update](https://blog.nomadic-labs.com/a-new-reward-formula-for-carthage.html), the reward system has been updated to make the network more robust against non-cooperative baking strategies.

## Inflation

Each new block generates 80 new XTZ as a reward. 40 XTZ for the bakers and 40 XTZ for the endorsers.
A new block is created each minute witch generates 42 Million of XTZ per year (80ꜩ x 60 mins x 24 hours x 365 days). At the Tezos launch, the network was composed of 763 Millions XTZ.
Therefore the inflation rate of the XTZ token is **5.5%** :
$$
\frac{42,000,000}{763,000,000}=\frac{42}{763}\approx5.5\%
$$

## Baking reward

When a baker bakes a block, he receives a reward composed of all the [transaction fees](/tezos-basics/economics-and-rewards#transaction-cost) contained in the block in addition to a network reward computed by this formula:

With:
- $n_e$: the number of endorsements the block receives  
  **32** endorsements are required to validate a block.

- $Br_e$: the baking reward per endorsement
- $Br_b$: the network baking reward per block
- $p$: the priority level

Then:

$$
\bm{Br_b=n_e\times Br_e}
$$

For $p=0$, a **high priority** baking:

To make deflationary baking irrational, for all profitability criteria, the reward for including an endorsement is set to the same amount as the reward to have one endorsement included. In other words, the function makes a non-cooperative baker lose as many rewards per censored endorsement as the endorser who loses the endorsement. This property holds only for high priority.

$$
\bm{Br_e}=\frac{40}{32}=\text{1.2500 ꜩ}  
$$

For $p=1$, a **low priority** baking:

To make block stealing less profitable, and since the previous point needs to equalize the rewards for the baker and the endorsers of a block, the reward for baking at low priority is set to much less than the reward for baking at high priority. The decreasing factor is **0.15**.

$$
\bm{Br_e}=\frac{40}{32}\times0.15=\frac{6}{32}=\text{0.1875 ꜩ}
$$

This Carthage update allows to focus the baker's efforts on the priority blocks.

The final formulas for [Emmy+C](https://blog.nomadic-labs.com/analysis-of-emmy.html) are as follows. For a block baked at priority $p$ and containing $n_e$ endorsements, the reward is computed as:

```js
baking_reward (p, ne) =
  if p = 0 then
     (ne / 32) * 40
  else
     (ne / 32) * 6
```

Finally, with this formula, the network reward for a baked block is generally 32 X 1.250 = **40** ꜩ/block in addition to the transaction fee contained in the block.

## Endorsing reward

Selected endorsers are also rewarded. One block needs 32 endorsers slots, while one endorser can have more than one. The total reward for an endorser "$Er$" is then easy to calculate.

For:
- "$Er$": the endorser's total reward
- "$n_s$": the endorser's number of slots
- "$Er_b$": the endorsement reward per block

We have:

$$
\bm{Er=n_s\times Er_b}
$$

For a **high priority** block:

$$
\bm{Er_b}=\text{1.2500 ꜩ}
$$

For a **low priority** block:

The endorsement rewards for endorsements included in low priority blocks are decreased by a factor of **2/3**. This does decrease slightly resistance to block stealing because the baker that steals a block gets a higher reward for his own endorsements, but has the advantage of punishing the endorsers less for having their endorsements not included by absent low priority bakers.

$$
\bm{Er_b}=\frac{40}{32}\times\frac{2}{3}=\text{0.8333 ꜩ}
$$

The reward reveive for $n_s$ slot endorsed at priority $p$ is computed as:

```js
endorsing_reward (p, ns) =
  if p = 0 then
     (ns / 32) * 40
  else
     (ns / 32) * 40 * (2/3)
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
