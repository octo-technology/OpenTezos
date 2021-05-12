---
id: liquid-proof-of-stake
title: Liquid Proof-of-Stake
authors: Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez
---

In ["*Blockchain Basics*"](/blockchain-basics/) module, you understood the main objective of a consensus mechanism is maintaining a common history throughout the whole peer-to-peer network. There are countless consensus algorithms, and they all have pros and cons. Notably, Bitcoin's *Proof-of-Work* has two flaws:
- Energy consumption
- Common users excluded from mining activity

In this chapter, we will go into more details about the Tezos' "**_Liquid Proof-of-Stake_**", created to lift those flaws and the ones from its predecessors "**_Proof-of-Stake_**" and "**_Delegated Proof-of-Stake_**".

Let's first review these latter.

## Proof-of-Stake (PoS)
While PoW assures that each network participant has performed a certain amount of work to receive rewards, PoS requires participants to prove that they are willing to guarantee the integrity of the blockchain by sequestering a certain amount of coins as proof of their good intentions.

In _Proof-of-Stake_, validators replace miners. A validator gathers transactions and creates blocks. Several methods exist to select a validator, which we will review in the next paragraphs (i.e. Delegated-proof-of-stake, Liquid-proof-of-stake). In this consensus, they must invest their funds to have a chance to be selected as a validator, which makes it "Sybil resilient". This mechanism represents a low energy cost alternative to _PoW_. Moreover, a 51% attack would not be profitable for a hacker, as validators bet their own money [[6]](/tezos-basics/liquid-proof-of-stake#references) and risk losing it if detected. Therefore validators would not benefit from a decision against the general opinion of the network. In addition, holding 51% of the token would demand enormous amounts of liquidity, making this scenario very unlikely.

Removing PoW isn't without consequences. With the Nakamoto consensus, PoW allows chain selection, maintains regular blocks' issuance, regulates coins' creation, and selects the miner receiving rewards. PoW probably consumes too much energy. However, this energy connects to the physical world and supports the MAD property in return (miners' investments into machines and electricity). Hence, replacing PoW leads to previous fundamental questions about building a consensus to compensate the losses.

### BFT in DLT
In the "Blockchain Basics" module, we talked about the *Byzantine Fault Tolerance* and how Bitcoin roughly supports 50% faulty nodes. Three fundamental elements of research let us lay the foundations for a new consensus.

#### CAP Theorem [[999]](https://opentezos.com/tezos-basics/liquid-proof-of-stake#references)
- **C**onsistency:  
  Every read receives the most recent write or an error
- **A**vailability:  
  Every request receives a (non-error) response without the guarantee that it contains the most recent write
- **P**artition tolerance:  
  The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes

In cases of forks (partitions), you must **exclusively** choose between consistency **or** availability.

#### FLP Impossibility [[999]](https://opentezos.com/tezos-basics/liquid-proof-of-stake#references)
The **F**isher, **L**ynch, and **P**atterson's Impossibility shows that, with no guaranteed bounds on network latency, it is impossible to reach consensus **even with a single faulty node**. This absence of limits for latency is characteristic of an **asynchronous setting**.

#### FT's Bounds from DLS paper [[999]](https://opentezos.com/tezos-basics/liquid-proof-of-stake#references)
The **D**work, **L**ynch, and **S**tockmeyer paper gives us three significant bounds on Fault Tolerance:
- Consensuses running on a **partially synchronous** network can tolerate up to one third (1/3) faulty nodes
- **Deterministic** consensuses running on an **asynchronous** network **cannot tolerate** faulty nodes (this becomes 1/3 with randomized algorithms)
- Consensuses running on a **synchronous** network can tolerate **up to 100%** faulty nodes (with some restrictions exceeded 50%)

PoW consensus is more reliant on a **synchronous model**, while PoS is more reliant on a **BFT model**. In PoW **synchronous models**, FT decreases with latency (around 1/3 at block time latency). PoS consensuses keep track of validators and validators' set size, thus making them **partially synchronous**.

Keeping in mind validators' selection and rewards' distributions, we can distinguish two main categories for a PoS consensus:

| Chain-based PoS (Synchronous; Availability)                                                                                                                                  | BFT PoS (Partially synchronous; Consistency)                                                                                                                                                                                |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pseudo-randomly** select a validator from a set **during a time slot**. The validator creates the next valid block. Example: Casper (with as much consistency as possible) | **Randomly** select validators who *propose* blocks. Then *voting* rounds elect the next block. There is a *chain* but blocks are *partially independent*. Validators have to be **honest and online**. Example: Tendermint |

At this point, we already need to prevent *cartels* forming. For comparison with PoW, it is like to impede attacks like "*Selfish Mining*"[[999]](https://opentezos.com/tezos-basics/liquid-proof-of-stake#references). There are other problems and various solutions.

### Main weaknesses of PoS
#### "Rich get richer"
If rewards chances are proportional to previous holdings, wealth naturally concentrates on the biggest ones. In turn, these holdings grow even bigger with time. A capped supply is an important point here. If it isn't, then creating new tokens allows only to keep almost the same share percentage. It is problematic in two ways: The concentration of power (always the same validators) and the decreasing incentive.

#### Stake grinding
PoS **randomly** selects the blocks' validators from a pool (with stake-proportional probability). 

#### Nothing at Stake
**In chain-based PoS**, there weren't penalties and only rewards for producing blocks. Hence, there was no incentive to choose the correct chain. In PoW, the chain with the most accumulated work naturally attracts miners. They invest their electricity and power in the most probable part of the network where the next block should appear. Not doing so would lead to implicit penalties. On the contrary, in PoS, a validator can split his stake on every chain. He has nothing to lose. There will never be consensus in this case. This also makes the "*P+$\epsilon$ attack*"[[999]](https://opentezos.com/tezos-basics/liquid-proof-of-stake#references) possible.

It seems apparent that introducing penalties would instantly solve this problem. The implementations of these penalties aren't that easy.

#### Hot wallet attack


#### Long range attack



<!-- ![](../../static/img/tezos-basics/PoS.svg)
<small className="figure">FIGURE 1: PoS</small> -->

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

https://en.wikipedia.org/wiki/CAP_theorem

https://www.the-paper-trail.org/post/2008-08-13-a-brief-tour-of-flp-impossibility/

https://groups.csail.mit.edu/tds/papers/Lynch/jacm88.pdf

https://eth.wiki/en/concepts/proof-of-stake-faqs

https://blog.bitmex.com/wp-content/uploads/2018/04/2018.04.11-Complete-guide-to-Proof-of-Stake.pdf

https://bitcoinmagazine.com/technical/selfish-mining-a-25-attack-against-the-bitcoin-network-1383578440

https://blog.ethereum.org/2015/01/28/p-epsilon-attack/

[1] https://en.wikipedia.org/wiki/Sybil_attack

[2] https://wiki.tezosagora.org/learn/proofofstake

[3] https://opentezos.com/blockchain-basics/consensus 

[4] https://www.crypto51.app

[5] https://en.bitcoinwiki.org/wiki/51%25_attack

[6] https://medium.com/@V.academy/can-pos-prevent-51-attack-2449d45039d2

[7] https://medium.com/tezos/liquid-proof-of-stake-aec2f7ef1da7

[8] https://blog.nomadic-labs.com/analysis-of-emmy.html

[9] https://tezos.gitlab.io/007/proof_of_stake.html
