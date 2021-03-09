---
id: liquid-proof-of-stake
title: Consensus mechanism, Liquid-proof-of-stake
---



## Intro
A blockchain network is composed of millions of users. In order to maintain network availability and prevent Sybil-attacks [1](https://opentezos.com/tezos-basics/liquid-proof-of-stake#reference) (attacks with the creation of multiple fake accounts in a network), a blockchain integrates a consensus mechanism. A consensus mechanism allows the network to agree on the validity of a transaction, the creation of a new block, a protocol update, etc. The main objective of a consensus mechanism is to maintain the same version of the history of the chain throughout the whole network.

Since the creation of Bitcoin, many kinds of consensus have appeared. To understand the Tezos consensus, this chapter will first focus on the classical Proof-of-work (e.g. Bitcoin, Ethereum 1.0), then the delegated-proof-of-stake (e.g EOS, Lisk, Tron, Bitshare) and finally the liquid Proof-of-stake [2](https://opentezos.com/tezos-basics/liquid-proof-of-stake#reference) (Tezos).

The Proof-of-work is based on computation power and the Proof-of-stake is based on token capitalisation.

All these consensus have the same goal: select a user who will be responsible for creating a new block, by selecting, verifying and inserting transactions into a potential new block. This user will then receive a reward if his block is validated. Generally this reward is a fixed amount of coins created by the blockchain protocol or collected from transactions’ cost.

## Proof-of-work (PoW)
The Proof-of-work is the first blockchain consensus ever created [3](https://opentezos.com/tezos-basics/liquid-proof-of-stake#reference). It relies solely on its users, or miners. A miner uses his computation power to solve an arbitrary mathematical problem. The difficulty of this mathematical problem is adapted according to the resolution time of the previous blocks. The difficulty increases if the resolution time decreases. The first miner who solves this problem earns the right to write a transaction into a new block. If several branches are available, he must choose the right one, otherwise he will lose his reward. This way of building the blockchain ensures the network security.
For more information about PoW, please refer to the [consensus chapter](https://opentezos.com/blockchain-basics/consensus). 

This consensus has two major defaults. The first is its energy consumption due to the computation power required to solve the mathematical problem and the competition between miners (all miners compete for the next block). Consequently, the transaction costs are very high because the network needs to reward the miner for his job (and electricity bill).

The second default is the lack of security in small networks. In a blockchain as Bitcoin or Ethereum that has a lot of miners, the problem is less important because the strength of PoW is based on the number of miners. However, in small networks the security is ensured by the global computation power and the number of miners. If the number of miners is not high enough or if they get disinterested by this blockchain, they can expose the network to a 51%attack [4](https://opentezos.com/tezos-basics/liquid-proof-of-stake#reference). With the current simplicity of buying computation power[5](https://opentezos.com/tezos-basics/liquid-proof-of-stake#reference), it is really easy to achieve this kind of attack on a small network.

![](../../static/img/tezos-basics/PoW.svg)
<small className="figure">FIGURE 1: PoW</small>

## Proof-of-stake, (PoS)
In the proof-of-stake the miner is replaced by a validator. As a miner, a validator gathers transactions and creates blocks. Several methods exist to select a validator, which will be reviewed in the next chapter(e.g. Delegated-proof-of-stake, Liquid-proof-of-stake). However, in this consensus, they must invest their funds to have a chance to be selected as a validator, which makes it sybil resilient. This mechanism represents a very low energy cost compared to the PoW. Moreover, a 51% attack would not be profitable for a hacker, as validators bet their own money [6](https://opentezos.com/tezos-basics/liquid-proof-of-stake#reference) and risk losing it. Validators will not find any benefit in taking a decision against the general opinion of the network as they would risk to lose some users and could devalue the  market cap. In theory, holding 51% of the token would demand enormous amounts of liquidities which are already shared between stakeholders. Thus, this scenario is unlikely.

## Delegated-proof-of-stake, (DPoS)
In the Delegated-proof-of-stake, the user of this consensus delegates his votes to a validator. The number of eligible validators is fixed generally between 20 and 100. If a validator is selected to forge a block, he receives a reward which is then shared with all his delegates [7](https://opentezos.com/tezos-basics/liquid-proof-of-stake#reference).

To be selected, validators must be elected by the network. They are chosen according to their reputation and their computing power. A small user will therefore never be allowed to become a validator and cannot participate in the life of the network. Consequently, these validators are often the same and also creates a barrier to entry in consensus participation.

![](../../static/img/tezos-basics/DPoS.svg)
<small className="figure">FIGURE 1: DPoS</small>

## Liquid-proof-of-stake, (LPoS)
Tezos is a new generation blockchain and is constantly evolving. The current version name of the used consensus is Emmy+ [8](https://opentezos.com/tezos-basics/liquid-proof-of-stake#reference). The Liquid-proof-of-stake is an evolution of the Delegated-proof-of-stake.

In Liquid-proof-of-stake, a miner or validator is named baker. As opposed to DPoS, any user can become a baker if he has enough tokens or delegate his token if he doesn't have enough.

A baker only needs to have 8,000ꜩ (Tezos token) to take part in the consensus (soon to be lowered to 2,000ꜩ [9](https://opentezos.com/tezos-basics/liquid-proof-of-stake#reference)). As in Delegated-proof-of-stake, the probability to win the bake is proportional to the invested amount. As opposed to the DPoS, any user owning 8,000ꜩ has the opportunity to bake alone. The baking time is organized in cycles and the tokens are frozen during this process.

### Consensus mechanism
#### Roll
A roll represents a set of this 8,000ꜩ delegated to a given key. The more rolls someone has, the higher their chance of being given the rights to bake the next block. If there are 10 rolls activated at some point in time, and a baker owns 2/10 of those rolls, The baker has a 20% chance of being given the rights to create the next block. This means that if a baker has 8,000 ꜩ or 15,999 ꜩ, they have the same baking rights in the system.

Baking rights are set in terms of priorities. For example, if there are 10 rolls, the protocol could randomly select a priority list as follows:

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

This means that the person who owns the roll number 6  will have first priority in proposing the block. If he does not create and broadcast a block within a certain period, the baker who owns the roll number 9 may take over. The more rolls one owns, the greater one's chances of being given high priority. Furthermore, a baker may receive several priorities.

#### Cycle
Tezos consensus is organised in cycles. One cycle corresponds to 4096 blocks (2.8 days). It takes 7 cycles to accumulate rewards. It then takes another 5 cycles before the delegation service receives them and can transfer those rewards. Finally the tokens freeze during several weeks.

#### Rolls selection
Each cycle n is associated with a random seed. This seed is used to randomly select a roll snapshot from cycle n-2 and to randomly select rolls in the selected snapshot. The selected rolls determine the baking and endorsing rights in the next cycles.

### Security
The forgery of a block (e.g. transaction fraud) is thus avoided because a baker cannot proceed to the next cycle while his roll has not been released and verified.

The security of Tezos is also insured by endorsers : they control the baker's transaction during the baking process. If endorsers find a security breach, they will cancel the baking and the baker will lose his tokens. Endorsers are rewarded for each verification with some ꜩ (more detail in [Economics and reward chapter](https://opentezos.com/tezos-basics/economics-and-reward)).

The liquid implementation allows greater decentralization and this process is more censorship resistant than DPoS. In fact, contrary to the DPoS, all the stakeholders can participate actively in the making of the block without depending on a small group of selected validators. Please refer to the Delegated-proof-of-stake.

![](../../static/img/tezos-basics/LPoS.svg)
<small className="figure">FIGURE 1: LPoS</small>

This table highlights the differences between the liquid-proof-of-stake and the delegated-proof-of-stake:

|         | Liquid-proof-of-stake | Delegated-proof-of-stake |
| ------ | --------------------------- | --------------------------------- |
| **Delegation (Purpose)** | Optional (minimize dilution of small token holders) | require to elect block producer (eneable greater scalability |
| **Barrier to Entry** | 8000Tz, modest computing power and reliable internet connexion | Professionalized operations with significant computing infrastructure and competition from other delegates |
| **Validator Set** | Dynamic (size not fixed) and up to 80,000 bakers (limited by roll* size) | Fixed size(between 21 And 100) |
**Design Priorities** | Decentralization, accountable governance, and security | Scalability and usable consumer applications |

To conclude, the Liquid-proof-of-stake takes up the concept of decentralisation of the PoW  without the high costs and the high energy consumption, but with a more secure network.

## Reference

[1]https://en.wikipedia.org/wiki/Sybil_attack

[2]https://wiki.tezosagora.org/learn/proofofstake

[3]https://opentezos.com/blockchain-basics/consensus 

[4]https://www.crypto51.app

[5]https://en.bitcoinwiki.org/wiki/51%25_attack

[6]https://medium.com/@V.academy/can-pos-prevent-51-attack-2449d45039d2

[7]https://medium.com/tezos/liquid-proof-of-stake-aec2f7ef1da7

[8]https://blog.nomadic-labs.com/analysis-of-emmy.html

[9]https://tezos.gitlab.io/007/proof_of_stake.html



External sources:

[] https://developers.tezos.com
