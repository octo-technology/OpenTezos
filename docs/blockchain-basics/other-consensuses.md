---
id: other-consensuses
disable_pagination: true
title: Introduction to other consensus algorithms
authors: Thomas Zoughebi and Aymeric Bethencourt

---

In this chapter, we will briefly introduce some other *public* consensus algorithms.  
Remember we defined what's a consensus, in IT, in the *Main properties of the first "blockchain"* chapter [here](blockchain-basics/main-properties#what-is-a-consensus):
<NotificationBar>
    <p>
        <blockquote>
            "In IT, a consensus algorithm is a computer program allowing users to <b>reach common agreements on the states of data</b> in a distributed network."
        </blockquote>
    </p>
</NotificationBar>

## Proof-of-Stake (PoS)
_PoS_ requires a system where _validators_ are not the creators of coins, so that transaction fees provide their only rewards (no coinbase).

The first rule of this mechanism is for blocks to be *validated* by **validators** that **have invested coins** in the system. The more a validator has coins in an escrow, the more he has chances to validate a block and earn rewards. This requires that coins are made early enough so blocks can be validated from the launch.

Blocks deemed valid and pushed by validators are always verified afterward by the network. If a validator has tried to cheat, he loses all of his funds held in collateral.

Examples: *Ethereum 2.0, Peercoin, Blackcoin, NXT...*

We'll go into more details about PoS in the [Tezos Basics Module](/tezos-basics) as Tezos uses a variation of PoS called Liquid Proof-of-Stake.

## Delegated Proof-of-Stake (DPoS)
DPoS has an added *Delegation* phase. During this phase, decentralized *votes* are made by the *witnesses* to elect validators. The witness group has the same function as the parliament in a parliamentary democracy.  
Another special *committee* group decides parameters like fees, rewards, or how many witnesses in the witness group. This committee *does not receive any reward* and these parameters can only change by vote during another *maintenance phase*.  
We'll go back to DPoS in the ["*Delegated Proof-of-Stake (DPoS)* section"](/tezos-basics/liquid-proof-of-stake#delegated-proof-of-stake-dpos) of the ["*Liquid Proof-of-Stake*" chapter](/tezos-basics/liquid-proof-of-stake) in the ["*Tezos Basics*" module](/tezos-basics/).

Examples: *Steem, Graphene, BitShares...*

## Liquid Proof-of-Stake (LPoS)
Tezos has developed LPoS, an evolution of DPoS. Though delegation is optional. As opposed to DPoS, any user can become a validator if he has enough coins. If he doesn't, then he has the choice to delegate. The idea is to dilute even more the mining activity and to increase inclusion.

In LPoS, a validator is called a **baker**. Any user owning enough coins can become a baker. Suppose a user wants to benefit from baking but doesn't own enough coins or have enough technical knowledge. In that case, he can _delegate_ his coins to _bakers_, thereby benefiting from a portion of the transaction fees.

The probability of winning a bake is proportional to the amount invested. The baking time is organized in cycles, and coins are locked during this time.

We'll go into more details about LPoS in the [Tezos Basics Module](/tezos-basics).

## Proof-of-Burn (PoB)
Instead of investing computational power and electricity like in PoW, users in PoB must _burn_ some coins to gain a chance of becoming the next validator. _Burning_ coins means sending them to a locking address where they are irretrievable, thereby destroying them.

The more a miner burns coins, the more likely he is to validate a block and win rewards.

This mimics the process of mining where miners have to invest some value, except, instead of electricity, they use the coins themselves.

Examples: *Slimcoin*

## Proof-of-Capacity (PoC)
This consensus first generates large data sets called "*Plots*". The more plots a *miner* records, the more lottery tickets he owns. Hence, the more hard-drive space (*capacity*) he has, the more chances of winning the rewards. This also mimics PoW mining: instead of accumulating hash power, you accumulate hard-drive capacity.

Variants: *Proof-of-Storage, Proof-of-Space*

Examples: *Burstcoin, Storj, Filecoin, BitcoinHD...*

## Leader-Based Consensus (LBC)
Nodes elect a temporary leader node. This leader is then responsible for validating transactions and for ordering them. They are not necessarily made into blocks (i.e., having more than one transaction).

Examples: *BigChainDB*

## Practical Byzantine Fault Tolerance (PBFT)
In this consensus, each node of the network awaits messages from the others. They are continuously broadcasting messages. Each node receiving a message runs a program on it using its data. Each node's result is then transformed into a new broadcasted message to all other nodes. With time, according to program rules, enough nodes will transmit the same result in the messages. The total sum of these broadcast results determines the consensus.

Examples: *Evernym, Chain...*

## Federated​ ​Byzantine​ ​Agreement​ ​(FBA)
In this distributed network *sets of enough nodes* to validate data are established. It means the sufficient number of nodes in a group is determined to best reach an agreement **for that group**.

A single *set* of nodes is called a "*quorum*".

With _FBA_, a *subset* of a quorum can aggregate another node, which in turn approves data *to form a complete quorum*. This *subset* is called a "*quorum slice*".

Each node chooses its multiple quorum slices to trust.

The aim of this is to avoid **separated divergent quorums**, and to ensure that **all quorums converge**.  
Quorum slices must be large enough to have **intersections** (shared nodes).

To summarise, validator groups with sufficient base size can aggregate single nodes from other groups. In the end, agreed quorums would cover the majority of the network, reaching a consensus.

Examples: *Stellar, Ripple*.

## Avalanche
Each **validator** randomly selects $N$ nodes among all the other validators. The more a validator has coins, the more chances it has to be selected (see also PoS above).

Each queried validator responds with its decision.

If most responses differ from the asking node's decision, it will change its answer to that of the others. In case of disagreement between nodes, more nodes are brought into the decision, and more, and more until convergence (thus the name avalanche as it resembles this forme of consensus).

Examples: *Avalanche*

## Proof-of-Activity (PoA)
Proof-of-Activity is split into two ordered phases:

1. PoW phase

    Miners race to find enough zeros in the result of the hash function. But this time, the block they validate is _usually_ empty of transactions. Only the address to receive a reward and the hash and nonce is present.

2. PoS phase

    A random group of validators is chosen to sign the new block. The more coins a validator owns, the more likely he has to be selected. When all the validators signed, the block is filled with transactions.

    If there are not enough validators for a valid block signing, another valid block and another group of validators are chosen.

Fees-rewards are then split between miners and validators.

Examples: *Decred*.

## Pros & Cons

| #    | Consensus | Advantages                                                       | Disadvantages                                                                                                                                         |
| :--- | :-------- | :--------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0    | PoW       | Extreme robustness (MAD + SHA256 + CBC)                          | High Energy consumption                                                                                                                               |
| 1    | PoB       | Robustness similar to PoW                                        | Still wastes ressources needlessly; Mining power to money burners                                                                                     |
| 2    | PoC       | Less energy consumption; mimic mining                            | Nothing at Stake (no MAD); tends to detroy hard-drives                                                                                                |
| 3    | LBC       | Less energy consumption                                          | Leader centralized; Sybil Attack[[1]](/blockchain-basics/other-consensuses#references) weakness                                                       |
| 4    | PBFT      | Very easy to implement                                           | Absence of privacy; Sybil Attack[[1]](/blockchain-basics/other-consensuses#references) weakness                                                       |
| 5    | FBA       | Modest computing & financial requirements                        | Quorum slices centralization; Sybil Attack[[1]](/blockchain-basics/other-consensuses#references) weakness                                             |
| 6    | Avalanche | Fast; highly distributed (lots of nodes)                         | Groups of nodes centralization; Sybil Attack[[1]](/blockchain-basics/other-consensuses#references) weakness                                           |
| 7    | PoS       | Less energy consumption                                          | Coins owners centralization; other problems (see ["*Liquid Proof-of-Stake*"](/tezos-basics/liquid-proof-of-stake) chapter in "*Tezos Basics*" module) |
| 8    | PoA       | More distribution on transaction's selection and fees rewards    | Combines PoW & PoS disadvantages                                                                                                                      |
| 9    | DPoS      | Less energy consumption; Mitigating PoS centralization           | Coins owners & witnesses centralization                                                                                                               |
| 10   | LPoS      | Less energy consumption; Mitigating even more PoS centralization | Still some coins owners centralization                                                                                                                |

## What have we learned so far?
In this chapter, we briefly described ten consensus algorithms that can be used for public blockchains. There are many others.

In the next chapter, "_Smart Contracts_", we'll define what they are, what are some of Bitcoin's limitations in that matter, and how Ethereum first proposed to lift those limitations.

## References
[1] https://en.wikipedia.org/wiki/Sybil_attack
