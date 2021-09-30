---
id: reward
title: Rewards
authors: Maxime Sallerin
---

To maintain the network, Tezos needs bakers and endorsers. They stake their tokens and use their CPU, memory space and internet connection to create blocks, manage transactions, vote, and secure the network. In exchange for the completion of these tasks, bakers are rewarded with tokens from the transaction fees or tokens created by the network. Since the [Carthage update](https://blog.nomadic-labs.com/a-new-reward-formula-for-carthage.html), the reward system has been updated to make the network more robust against non-cooperative baking strategies.

## Inflation

Each new block generates 80 new Tez as a reward. 40 Tez for the bakers and 40 Tez for the endorsers.
A new block is created each minute, which generates 42 Million of Tez per year ($\approx$ 80ꜩ $\times$ 60 mins $\times$ 24 hours $\times$ 365 days). At the launch ofTezos, the network was composed of 763 Millions Tez.

Therefore the inflation rate of the Tez token for the first year was **5.5%**:
$$
\frac{42,000,000}{763,000,000}=\frac{42}{763}\approx5.5\%
$$

For the second year it was **5.2%**:
$$
\frac{42}{763 + 42}=\frac{42}{805}\approx5.2\%
$$

For the third year it was **5.0%**:
$$
\frac{42}{805 + 42 }=\frac{42}{847}\approx5.0\%
$$

and so on ... 

Therefore the inflation rate decreases a bit each year.

> Note that this calculation of the inflation rate is based only on the generation of new Tez. The burned Tez are ignored in the formula. It is, therefore, an approximation, and in reality, the inflation rate is a bit lower.

## Baking reward

When a baker bakes a block, he receives a reward composed of all the [transaction fees](/tezos-basics/economics-and-rewards#transaction-cost) contained in the block in addition to a network reward computed by this formula:

$$
\bm{Br_b=n_e\times Br_e}
$$

Where:
- $n_e$: the number of endorsements the block receives. As 32 endorsements are needed to validate a block, $n_e=32$ in this case.
- $Br_e$: the baking reward per endorsement.
- $Br_b$: the network baking reward per block.
- $p$: the priority level.

> **Deflationary baking** corresponds to actively refusing to include endorsements of other bakers in one’s blocks in an attempt to maximize one's reward.

To make deflationary baking irrational, for all profitability criteria, the reward for including an endorsement is set to the same amount as the reward for having one endorsement included. In other words, the function makes a non-cooperative baker lose as much reward per censored endorsement as the endorser who loses the endorsement. This property holds only for high priority.

If $p=0$ (high priority baking), we have:

$$
\bm{Br_e}=\frac{40}{32}=\text{1.2500 ꜩ}  
$$

If $p>0$ (low priority baking), we have:

$$
\bm{Br_e}=\frac{40}{32}\times0.15=\frac{6}{32}=\text{0.1875 ꜩ}
$$

To make block stealing less profitable, and since the previous point needs to equalize the rewards for the baker and the endorsers of a block, the reward for baking at low priority is set to much less than the reward for baking at high priority. The decreasing factor is **0.15**.

> **Block stealing** is a non-cooperative baking strategy, in which a baker of priority p>0 will withhold his endorsements in order to slow down the blocks of priority 0,..,p−1 enough for his block to be the fastest one.

This Carthage update allows focusing the baker's efforts on the priority blocks.

The final formulas for [Emmy+C](https://blog.nomadic-labs.com/analysis-of-emmy.html) are as follows. For a block baked at priority $p$ and containing $n_e$ endorsements, the reward is computed as:

```js
baking_reward (p, ne) =
  if p = 0 then
     (ne / 32) * 40
  else
     (ne / 32) * 6
```

Finally, with this formula, the network reward for a baked block is generally 32 $\times$ 1.250 = **40** ꜩ/block in addition to the transaction fees contained in the block.

## Endorsing reward

Selected endorsers are also rewarded. One block needs 32 endorsers slots, while one endorser can have more than one. The total reward for an endorser "$Er$" is then easy to calculate.

For:
- $Er$: the endorser's total reward
- $n_s$: the endorser's number of slots
- $Er_b$: the endorsement reward per block

We have:

$$
\bm{Er=n_s\times Er_b}
$$

For a **high priority** block:

$$
\bm{Er_b}=\text{1.2500 ꜩ}
$$

For a **low priority** block:

The endorsement rewards for endorsements included in low priority blocks are decreased by a factor of $\bm{\frac{2}{3}}$. This does decrease slightly resistance to block stealing because the baker that steals a block gets a higher reward for his own endorsements, but has the advantage of punishing the endorsers less for having their endorsements not included by absent low priority bakers.

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

The total available reward for endorsing a high-priority block is fixed to the same amount as baking that block: **40ꜩ**.
That value is distributed among all the endorsers proportionally to their slots.

## Delegating reward

When delegating, you can earn a passive income by participating in the Tezos network via delegation. The current annual yield on Tezos is around **6%** minus validators’ fee.

Every time a baker receives some rewards, those rewards are frozen for the next 5 cycles ($\approx$ 14 days), so the baker cannot spend them. Only after rewards are unfrozen, that the baker can transfer them to someone else. Most bakers wait until rewards are unfrozen to pay it out to delegators, but some do not in order to be more attractive to delegators.

For:
- $Confirmation_{time} \approx \text{20 days}$, delegators have to wait around 20 days after delegating before start staking.
- $Frozen_{time} \approx \text{14 days}$, bakers' rewards are frozen for 5 cycles.
- $Cycle_{time} \approx \text{3 days}$, this is the approximate time between two successive cycles.
- $FirstPayout_{time}$: The necessary time to wait before the first payout.

If your baker pays after rewards are unfrozen, you will receive your first reward after:
$$
\bm{FirstPayout_{time}}= Confirmation_{time} + Frozen_{time} + Cycle_{time} \approx \text{37 days}
$$

If your baker pays in advance, you will receive your first reward after:
$$
\bm{FirstPayout_{time}}= Confirmation_{time} + Cycle_{time} \approx \text{23 days}
$$

Rewards for cycle `n` come in the cycle `n + 1` (after $\approx$ 3 days) so, you will then receive your delegating reward every **3 days**.

There are no direct risks of delegating Tez. The only risk you take is not earning the potential rewards. Carefully choose your baker to ensure the quality of service and reward.

When delegating, your Tez are completely liquid. You are free to move your tokens anytime as there are no freezing periods when delegating to a baker.

## Accusation reward

The accuser monitors the network, detects double-baking or double-endorsing and accuses if necessary.

If two endorsements are made for the same slot or two blocks baked at the same height, the evidence can be collected by an accuser and included in a block for a period of 5 cycles, including the current cycle.

This accusation forfeits the entirety safety deposit and future rewards up to that point in the cycle. Half is burned, half goes to the accuser in the form of a block reward.

## References

[1] https://tezos.gitlab.io/alpha/proof_of_stake.html#rewards

[2] https://baking-bad.org/docs/tezos-staking-for-beginners/

[3] https://blog.nomadic-labs.com/a-new-reward-formula-for-carthage.html

[4] https://blog.nomadic-labs.com/analysis-of-emmy.html
