---
id: liquid-proof-of-stake
title: Liquid Proof-of-Stake
---

## Introduction
A blockchain network is composed of millions of users. To maintain network availability and prevent _Sybil attacks_ [[1]](/tezos-basics/liquid-proof-of-stake#references) (attacks made by creating multiple fake accounts in a network), a blockchain needs a consensus mechanism. A consensus mechanism allows the network to agree on the validity of transactions, the creation of a new block, a protocol update, etc. The main objective of a consensus mechanism is to maintain a common history of the chain throughout the whole network.

Since the creation of Bitcoin, many kinds of consensus have appeared. To understand the Tezos consensus, this chapter will focus first on the classical _Proof-of-work_ (e.g. Bitcoin, Ethereum 1.0), then on the _delegated-proof-of-stake_ (e.g EOS, Lisk, Tron, Bitshare) and finally on the _liquid Proof-of-stake_ from Tezos [[2]](/tezos-basics/liquid-proof-of-stake#references).

In a word, Proof-of-work is based on computation power and Proof-of-stake is based on tokwdwden staking.

All these consensuses have the same goal: selecting a user who will be responsible for the creation of a new block, by selecting, verifying, and inserting transactions into a potential new block. This user will then receive a reward if his block is validated. This reward is usually a fixed amount of coins created by the blockchain protocol or collected from the transactions-cost.

## Proof-of-Work (PoW)
The _Proof-of-work_ was the first blockchain consensus ever created [[3]](/tezos-basics/liquid-proof-of-stake#references). It relies solely on its users, or miners. A miner uses his computation power to solve an arbitrary mathematical problem. The difficulty of this mathematical problem is adapted according to the resolution time of the previous blocks. The difficulty then increases if the resolution time decreases. The first miner to solve this mathematical problem earns the right to write a transaction into a new block. If several branches are available, he must choose the right one otherwise he will lose his reward. This model of building blockchains ensures their security.
For more information about _PoW_, please refer to the [consensus chapter](/blockchain-basics/consensus). 

This consensus has two major flaws. The first is its energy consumption; due to the power required to solve the mathematical problems, multiplied by the competition between miners (all miners compete for the next block). Consequently, this makes transaction costs very high as the network needs to reward the miner for their job (and electricity bill).

The second flaw is the lack of security in small networks. In a blockchain such as Bitcoin or Ethereum that has a lot of miners, the problem is less important because the strength of _PoW_ is based on the number of miners. However, in small networks, the number of miners might not be large enough to prevent a _51% attack_ [[4]](/tezos-basics/liquid-proof-of-stake#references) (when a user can get more than half of the total mining power on a blockchain ). With the current simplicity of buying short-term computation power [[5]](/tezos-basics/liquid-proof-of-stake#references), it is really easy to achieve this kind of attack on a small network.

![](../../static/img/tezos-basics/PoW.svg)
<small className="figure">FIGURE 1: PoW</small>

## Proof-of-Stake (PoS)
In _Proof-of-Stake_, the miner is replaced by a validator. A validator gathers transactions and creates blocks. Several methods exist to select a validator, which will be reviewed in the next chapter (i.e. Delegated-proof-of-stake, Liquid-proof-of-stake). In this consensus, they must invest their own funds to have a chance to be selected as a validator, which makes it Sybil resilient. This mechanism represents a low energy cost alternative to _PoW_. Moreover, a 51% attack would not be profitable for a hacker, as validators bet their own money [[6]](/tezos-basics/liquid-proof-of-stake#references) and risk losing it if detected. Validators would therefore not benefit from making a decision against the general opinion of the network. In addition, holding 51% of the token would demand enormous amounts of liquidity, making this scenario very unlikely.

## Delegated Proof-of-Stake (DPoS)
In a Delegated-proof-of-stake model, the users of this consensus, called delegates, delegate their votes to a validator. The number of eligible validators is fixed, usually between 20 and 100. If a validator is selected to forge a block, they receive a reward which is then shared with all of their delegates [[7]](/tezos-basics/liquid-proof-of-stake#references).

To be selected, validators must be elected by the network. They are chosen according to their long-term reputation and efficiency. A new user is therefore unlikely to become a validator and cannot participate in the life of the network. Consequently, validators often stay the same creating an entry barrier for the new users taking part in the consensus mechanism.

![](../../static/img/tezos-basics/DPoS.svg)
<small className="figure">FIGURE 2: DPoS</small>

## Liquid Proof-of-Stake (LPoS)
### An evolution from _DPoS_
Tezos has developed _Liquid Proof-of-Stake_ which is an evolution of the _Delegated Proof-of-Stake_. The current version used by Tezos is called Emmy+ [[8]](/tezos-basics/liquid-proof-of-stake#references).

In _Liquid Proof-of-Stake_, a miner or validator is called a _baker_. As opposed to _DPoS_, any user can become a baker in _Liquid Proof-of-Stake_ if they have enough tokens. If they do not have enough tokens to be a baker themself, they will delegate their token.

A baker only needs to have 8,000ꜩ (Tezos tokens) to take part in the consensus (soon to be lowered to 2,000ꜩ [[9]](/tezos-basics/liquid-proof-of-stake#references)). As in _Delegated Proof-of-Stake_, the probability to win the bake is proportional to the amount invested, but any user owning 8,000ꜩ has the opportunity to bake alone. The baking time is organized in cycles and the tokens are frozen during this process.

### Consensus mechanism
#### Roll
A roll represents 8,000ꜩ delegated to a given key. The more rolls someone has, the higher the chance of being given the rights to bake the next block. If 10 rolls are active at one point in time, and a baker owns 2/10 of these rolls, the baker has a 20% chance of being selected to create the next block. This means that whether the baker has 8,000 ꜩ or 15,999 ꜩ, he has the same chances.

Baking rights are called priorities and are given in turns. For example, if there are 10 rolls activated, the protocol could randomly select a priority list as follows:

```
 Priority1 = Roll 6
 Priority2 = Roll 9
 Priority3 = Roll 4
 Priority4 = Roll 3
 .
 .
 .
 Priority10 = Roll 7
```

Consequently, the person who owns roll 6 will have priority to propose the new block. If he does not create and broadcast a block within a certain period, the baker who owns the roll number 9 may take over. Note that a baker may have several rolls selected and therefore receive several priorities.

A new priority list is established for each block.

#### Cycle
The Tezos consensus is organized in cycles. One cycle corresponds to 4096 blocks (≈ 2.8 days). 

##### Reward and Fee
It takes 7 cycles to accumulate rewards. It then takes another 5 cycles before the delegation service receives them and can transfer those rewards. Finally, the tokens are frozen during several weeks.

More details in [chapter Rewards and Fees]

#### Roll selection
At each cycle, a random seed is created. This seed is used to produce baking rights (i.e. a list of priorities as mentioned above) based on a snapshot of existing rolls 2 cycles ago.
 
More details in [chapter Baking].

##### The Roll snapshot
Snapshots of owned rolls are done regularly (Every 256 blocks). These snapshots of rolls define who can bake. The order of baking is then defined by assigning priorities to each roll. The ordering is done using a pseudo-random number generator based on a seed.

##### The Seed
The seed is created by requesting a secret number from all roll owners. All secret numbers are gathered and used to create a hash that will be used as the _random seed_. Since the last owner to reveal its secret number already knows the other's secret numbers, a 2-phase process called "Commit & Reveal" has been put in place. More details about the selection of the baker are available in the [Baking module]

##### Baker and endorser selection
The generated list of priorities identifies which roll has the responsibility to forge a block (baking) and which rolls have to endorse this new block. It is a round-robin process that cycles on the list of priorities until the end of the cycle (4096 blocks).

### Security
The forgery of a block (e.g. transaction fraud) is avoided by preventing a baker from proceeding to the next cycle while his roll is being verified.

The security of Tezos is also insured by endorsers: they control the baker's transaction during the baking process. If endorsers find a security breach, they will cancel the baking and the baker will lose his tokens. Endorsers are, in turn, rewarded for each verification with some ꜩ (more details in the [Economics and rewards chapter](/tezos-basics/economics-and-reward)).

This "liquid" implementation allows a greater decentralization and the process to be more censorship-resistant than _DPoS_. As such, contrarily to the DPoS, all the stakeholders can participate actively in the making of the block without depending on a small group of selected validators.

![](../../static/img/tezos-basics/LPoS.svg)
<small className="figure">FIGURE 3: LPoS</small>

This table highlights the differences between liquid-proof-of-stake and delegated-proof-of-stake [[7]](/tezos-basics/liquid-proof-of-stake#references)):

|                          | Liquid-proof-of-stake                                                | Delegated-proof-of-stake                                                                                 |
| ------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Delegation (Purpose)** | Optional (minimizes dilution of small token holders).                | Required to elect block producers (enables greater scalability.                                          |
| **Barrier to Entry**     | 8000ꜩ, modest computing power and reliable internet connection.      | Professionalized operations with significant computing infrastructure. Competition from other delegates. |
| **Validator Set**        | Dynamic (size not fixed). Up to 80,000 bakers (limited by roll size) | Fixed size. Between 21 (EOS) and 101 (Lisk).                                                             |
| **Design Priorities**    | Decentralization, accountable governance, and security               | Scalability and usable consumer applications                                                             |

To conclude, the Liquid Proof-of-stake consensus is inspired by _PoW_ and _DPoS_ resulting in a fully decentralized consensus, with low entry-barrier but without the high costs and high energy requirements.

## References

[1] https://en.wikipedia.org/wiki/Sybil_attack

[2] https://wiki.tezosagora.org/learn/proofofstake

[3] https://opentezos.com/blockchain-basics/consensus 

[4] https://www.crypto51.app

[5] https://en.bitcoinwiki.org/wiki/51%25_attack

[6] https://medium.com/@V.academy/can-pos-prevent-51-attack-2449d45039d2

[7] https://medium.com/tezos/liquid-proof-of-stake-aec2f7ef1da7

[8] https://blog.nomadic-labs.com/analysis-of-emmy.html

[9] https://tezos.gitlab.io/007/proof_of_stake.html
