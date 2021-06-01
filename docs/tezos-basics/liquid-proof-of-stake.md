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

## Proof-of-Stake (PoS) [[1]](/tezos-basics/liquid-proof-of-stake#references)[[2]](/tezos-basics/liquid-proof-of-stake#references)
While PoW assures that each network participant has performed a certain amount of work to receive rewards, PoS requires participants to prove that they are willing to guarantee the integrity of the blockchain by sequestering a certain amount of coins.

In _Proof-of-Stake_, validators replace miners. A validator gathers transactions and creates blocks. Several methods exist to select a validator, which we will review in the following paragraphs. In this consensus, they must invest their funds to have a chance to be a validator, which makes it "Sybil resilient". This mechanism represents a low energy cost alternative to _PoW_. Moreover, a 51% attack would not be profitable as a hacker bets his own money and risks losing it if detected [[3]](/tezos-basics/liquid-proof-of-stake#references). Therefore validators would not benefit from a decision against the general opinion of the network. In addition, holding 51% of the token would demand enormous amounts of liquidity, making this scenario very unlikely.

Removing PoW isn't without consequences. With the Nakamoto consensus, PoW allows chain selection, maintains regular blocks' issuance, regulates coins' creation, and selects the miner receiving rewards. PoW probably consumes too much energy. However, this energy connects to the physical world and supports the MAD property in return (miners' investments into machines and electricity). Hence, replacing PoW leads to previous fundamental questions about building a consensus to compensate the losses.

### BFT in DLT
In the "Blockchain Basics" module, we talked about the *Byzantine Fault Tolerance* and how Bitcoin roughly supports 50% faulty nodes. Three fundamental elements of research let us lay the foundations for a new consensus.

#### CAP Theorem [[4]](/tezos-basics/liquid-proof-of-stake#references)
- **C**onsistency:  
  Every read receives the most recent write or an error
- **A**vailability:  
  Every request receives a (non-error) response without the guarantee that it contains the most recent write
- **P**artition tolerance:  
  The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes

In cases of forks (partitions), you must **exclusively** choose between consistency **or** availability.

#### FLP Impossibility [[5]](/tezos-basics/liquid-proof-of-stake#references)
The **F**isher, **L**ynch, and **P**atterson's Impossibility shows that, with no guaranteed bounds on network latency, it is impossible to reach consensus **even with a single faulty node**. This absence of limits for latency is characteristic of an **asynchronous setting**.

#### FT's Bounds from DLS paper [[6]](/tezos-basics/liquid-proof-of-stake#references)
The **D**work, **L**ynch, and **S**tockmeyer paper gives us three significant bounds on Fault Tolerance:
- Consensuses running on a **partially synchronous** network can tolerate up to one third ($\frac{1}{3}$) faulty nodes
- **Deterministic** consensuses running on an **asynchronous** network **cannot tolerate** faulty nodes (this becomes $\frac{1}{3}$ with randomized algorithms)
- Consensuses running on a **synchronous** network can tolerate **up to 100%** faulty nodes (with some restrictions exceeding 50%)

PoW consensus is more reliant on a **synchronous model**, while PoS is more reliant on a **BFT model**. In PoW **synchronous models**, FT decreases with latency (around $\frac{1}{3}$ at block time latency). PoS consensuses keep track of validators and validators' set size, thus making them **partially synchronous**.

Keeping in mind validators' selection and rewards' distributions, we can distinguish two main categories for a PoS consensus:

| Chain-based PoS (Synchronous; Availability)                                                                                                                                  | BFT PoS (Partially synchronous; Consistency)                                                                                                                                                                                |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pseudo-randomly** select a validator from a set **during a time slot**. The validator creates the next valid block. Example: Casper (with as much consistency as possible) | **Randomly** select validators who *propose* blocks. Then *voting* rounds elect the next block. There is a *chain* but blocks are *partially independent*. Validators have to be **honest and online**. Example: Tendermint |

At this point, we already need to prevent *cartels* forming. For comparison with PoW, it is like to impede attacks like "*Selfish Mining*"[[7]](/tezos-basics/liquid-proof-of-stake#references). There are other problems and various solutions.

### Main weaknesses of PoS
#### "Rich get richer"
If rewards chances are proportional to previous holdings, wealth naturally concentrates on the biggest ones. In turn, these holdings grow even bigger with time. A capped supply is an important point here. If it isn't, then creating new tokens allows only to keep almost the same share percentage. It is problematic in two ways: The concentration of power (always the identical validators) and the decreasing incentive. However, all users wouldn't be staking validators and would make payments.

#### Nothing at Stake
**In chain-based PoS**, there weren't penalties and only rewards for producing blocks. Hence, there was no incentive to choose the correct chain. In PoW, the chain with the most accumulated work naturally attracts miners. They invest their electricity and power in the most probable part of the network where the next block should appear. Not doing so would lead to implicit penalties. On the contrary, in PoS, a validator can split his stake on every chain. He has nothing to lose. There will never be consensus in this case. This also makes the "*P+$\epsilon$ attack*"[[8]](/tezos-basics/liquid-proof-of-stake#references) possible.

It seems apparent that introducing penalties would instantly solve this problem. The implementations of these penalties aren't that easy.  
The first strategy is to punish validators who **simultaneously** create a block on different chains. To detect this behavior, we need to include a *proof of misbehavior*. Creating this proof requires correctly identify validators and control the timing of blocks' issuance and penalties. Nodes have to be frequently online.  
The second strategy is to punish validators who create a block on the *wrong* chain as if we were in a PoW system. This strategy requires less timing control but puts validators more at risk.

**In BFT PoS**, we define four criteria with two sets of rules and two properties:
- Rules
  - Finality conditions: rules that determine when a given block is finalized.
  - Slashing conditions: rules that determine when a given validator can be deemed to have misbehaved.

- Properties
  - Accountable safety: if conflicting valid blocks are finalized, then at least $\frac{1}{3}$ of all validators must have violated some slashing condition.
  - Plausible progression: there exists a set of messages that $\frac{2}{3}$ of validators can produce and finalize some value.

Even if we can produce a *proof of misbehavior* and punish a validator, there is a major problem in the *misbehavior* qualification. Indeed, in the conflicting chains scenario, there can be **false positives**. Switching from a chain to another is a medium to establish consensus. Punishing this behavior is counter-productive. There can be no equilibrium between punishments and rewards, so no convergence.

An idea would then be to introduce harder and harder punishments as time goes by. Validators could change their mind while multiple rounds of staking take place. Though, the more they wait, the severer the sanctions.

#### Stake grinding
PoS **randomly** selects the blocks' validators from a pool (with stake-proportional probability). The source of randomness must be inside the consensus system. The difficulty is finding the component on which relies the randomness generator. If the blocks are used to generate the entropy, then stakers could try to manipulate the content to attribute themselves some future blocks. Blocks content manipulations would require computing power and electricity, which is just a PoW system.

Finding an efficient source of pseudo-randomness and implementing it is a complex matter.

#### Hot wallet attack
To stake, validators need to be online and sign with a private key. This process exposes validators' private keys online for long periods as if they were using "hot wallets". Hence more opportunities for hackers. An idea to mitigate the risks is having a dedicated private key for this purpose and a short period. However, in the case of slashing rules, hackers could trigger punishment anyway and destroy funds. Thus, dedicated hardware for staking would be a better idea (cold wallet).

#### Long range attack
Attackers can try to manipulate the history of events going far back in time. At that point, they can buy an old private key that had an ample amount of coins. Then, they build a new history of staking validations and rewards from this key. Since they have a lot of coins from the start, they end up with a chain immensely probable to be selected. As a result, a multi-year reorganization takes place.  
The system can use checkpoints to prevent the attack. A stake threshold could trigger a checkpoint. The issue is that it requires nodes to be constantly online. Going offline would then requires trusted nodes which to ask the past going back online. We can discuss Satoshi Nakamoto's philosophy and wonder if each individual should verify everything from the start. We could make a concession.

As you can see, switching from PoW to PoS in the new generation of blockchains is not an easy task. More tweaked PoS consensuses are necessary to ensure incentives, economic principles, and security.

## Delegated Proof-of-Stake (DPoS)
The Delegated Proof-of-Stake (DPoS) consensus was developed by Daniel Larimer in 2014. Because of the "Rich get richer" problem, pure PoS fails in diluting mining activity's centralization. The idea of DPoS is to add a new option to make PoS more inclusive. In DPoS, users act as if they were in a parliamentary democracy. Users **delegate** or "*vote*" for validators also called "*witnesses*" among a set. There is a fixed number of eligible witnesses, usually between 20 and 100. One "*votes*" by attributing owned coins to a validator, thus gifting him more chances to validate a block and receive rewards. *DPoS splits block production rights evenly within the set of active block producers*[[9]](/tezos-basics/liquid-proof-of-stake#references). A winning validator receives rewards and shares them with his electorate. **Long-term reputation and efficiency** motivate choices in elections.

The idea to decentralize blocks' validation activity with a more democratic approach paradoxically strengthens an oligarchy at the network level. Even worse, DPoS reinforces the scalability, which leads to the professionalization of the activity. Witnesses will organize in validating farms instead of mining farms. Finally, electricity consumption will rise excessively again.

DPoS is then not enough. PoS needs to evolve more. That is why Tezos' community launched the "*Liquid Proof-of-Stake*" (LPoS) consensus.

## Liquid Proof-of-Stake (LPoS)
### An evolution from _DPoS_
Tezos has developed LPoS, an evolution of DPoS idea. The current version is "*Emmy+*" [[10]](/tezos-basics/liquid-proof-of-stake#references).

In LPoS, a validator is called a "**baker**" or an "**endorser**". As opposed to DPoS, **any user can become a validator if he has enough coins**. If he doesn't, then he has **the choice** to *delegate*. The idea is to dilute even more the activity and to increase inclusion. The focus is more on governance *liquidity* rather than the network's *scalability*. The two roles of delegates are simple:
- Bakers: create blocks
- Endorsers: agree on blocks

The needed quantity of tezs to bake or endorse is a useful parameter. Increase it to discourage Sybil attack or 51% attack, decrease it to coordinate cartels or coalitions dissolutions:

A validator needs 8,000ꜩ (one "*roll*") to take part in the consensus (soon to be lowered to 2,000ꜩ [[11]](/tezos-basics/liquid-proof-of-stake#references)). Though, as in DPoS, the reward probability is still proportional to the invested amount. The baking time has cycles, and the tokens are still frozen as bonds during this process.

### Consensus mechanism
#### Roll
A roll represents 8,000ꜩ delegated to a given private key. So, the more rolls someone has, the higher the chance to bake the next block. If 10 rolls are active, and a baker owns $\frac{2}{10}$ of these rolls, he has a 20% chance of being selected. Note that 8,000ꜩ or 15,999ꜩ stakeholders have the same probability of baking.

Baking rights are called priorities and given in turns. For example, if 10 rolls were active, the protocol could randomly select a priority list as follows:

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

Consequently, the person who owns roll #6 would have priority to propose the new block. If he does not create and broadcast it within a certain period, the next baker who owns roll #9 may take over. Note that a baker may have several rolls selected and therefore receive several priorities.

Each validation establishes a new priority list.

#### Cycle
One cycle corresponds to 4096 blocks (≈ 2.8 days).

##### Cycles, rewards and fees
It takes 7 cycles to accumulate rewards. It then takes another 5 cycles before the delegation service receives them and can transfer those rewards. Finally, the tokens are frozen for several weeks. More details in chapter "[*Economics and Rewards*](/tezos-basics/economics-and-rewards)"

#### Roll selection
At each cycle, a random seed is created. A pseudo-random number generator uses the seed to generate the priority list based on a snapshot of existing rolls 2 cycles ago.
 
##### The rolls snapshots
Every 256 blocks, the system creates snapshots of **owned** rolls.

##### The Seed
A secret number from all rolls' owners is requested. All secret numbers are gathered and hashed to produce the seed. Since the last owner to reveal his secret already knows the other numbers, a 2-phase process called "Commit & Reveal" is in place. More details about the selection of the baker are available in the ["*How Baking Works*"](/baking/baking_explained#random-seed) chapter.

##### Bakers and endorsers selection
The generated list of priorities identifies who forges a block (bakes) and who endorses it. It is a round-robin process[[12]](/tezos-basics/liquid-proof-of-stake#references) that cycles on the list of priorities until the end of the cycle (4096 blocks).

### Security
A baker can't proceed to the next cycle before the complete verification of his roll. Endorsers also control the bakers' transactions. If endorsers find a security breach, they can cancel the baking. In that case, the bakers would lose their coins. Endorsers are, in turn, rewarded for each verification with tezs (more details in the [*Economics and rewards*](/tezos-basics/economics-and-reward) chapter).

## LPoS and DPoS comparison

The following table[[9]](/tezos-basics/liquid-proof-of-stake#references) highlights the differences between LPoS and DPoS:

|                          | Liquid-proof-of-stake                                                | Delegated-proof-of-stake                                                                                 |
| ------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Delegation (Purpose)** | Optional (minimizes dilution of small token holders).                | Required to elect block producers (enables greater scalability.                                          |
| **Barrier to Entry**     | 8000ꜩ, modest computing power and reliable internet connection.      | Professionalized operations with significant computing infrastructure. Competition from other delegates. |
| **Validator Set**        | Dynamic (size not fixed). Up to 80,000 bakers (limited by roll size) | Fixed size. Between 21 (EOS) and 101 (Lisk).                                                             |
| **Design Priorities**    | Decentralization, accountable governance, and security               | Scalability and usable consumer applications                                                             |

## What have learned so far?
In this chapter, we detailed the PoS consensus. You are now able to understand its fundamentals. You realize that the benefits of PoS also bring hard-to-solve difficulties. The PoS derivatives propose variations in the consensus to resolve the troubles. While PoS highly reduces the external bound with energy, reliable randomness and decentralization are hardly manageable. DPoS tries to adopt a kind of democratic stance but paradoxically scales back to energy consumption. Finally, LPoS seems to be the best alternative to date, relying more on users' trust, diluting and liquifying the decision-making power. The randomness generation still needs to be observed, and only time will tell if current parameters will keep enough decentralization and security. That's for another chapter where you'll discover the Tezos "[*Governance on Chain*](/tezos-basics/governance-on-chain)".

In the next chapter, you'll first uncover Tezos "*operations*" or in blockchain vocabulary: "transactions". Operations are particular messages sent from one address to another.

## References

[1] https://eth.wiki/en/concepts/proof-of-stake-faqs

[2] https://blog.bitmex.com/wp-content/uploads/2018/04/2018.04.11-Complete-guide-to-Proof-of-Stake.pdf

[3] https://medium.com/@V.academy/can-pos-prevent-51-attack-2449d45039d2; https://www.crypto51.app

[4] https://en.wikipedia.org/wiki/CAP_theorem

[5] https://www.the-paper-trail.org/post/2008-08-13-a-brief-tour-of-flp-impossibility/

[6] https://groups.csail.mit.edu/tds/papers/Lynch/jacm88.pdf

[7] https://bitcoinmagazine.com/technical/selfish-mining-a-25-attack-against-the-bitcoin-network-1383578440

[8] https://blog.ethereum.org/2015/01/28/p-epsilon-attack/

[9] https://medium.com/tezos/liquid-proof-of-stake-aec2f7ef1da7

[10] https://blog.nomadic-labs.com/analysis-of-emmy.html

[11] https://tezos.gitlab.io/007/proof_of_stake.html

[12] https://en.wikipedia.org/wiki/Round-robin_scheduling