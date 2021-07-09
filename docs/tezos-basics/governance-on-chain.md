---
id: governance-on-chain
title: Governance on-chain
authors: Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez
---

Tezos is a self-amending blockchain network that incorporates an on-chain mechanism for proposing, selecting, testing, and activating protocol upgrades *without needing to use hard forks* [[1]](/tezos-basics/governance-on-chain#references).

## What is self-amendment?
Tezos is a blockchain that can improve itself over time by using a formalized process of upgrade to its protocol. In practice, this similar to the structure of a corporation, where shareholders get to vote on a future direction for the corporation.

Many other blockchains do not have any form of formal governance structure. Consequently, new projects are often decided by a small group and imposed on the whole ecosystem. This process can results in _hard forks_, when participants don't agree with the decisions. This can split the chain into two or more chains that can co-exist and split the community. Self-amendment aims to avoid this scenario, by allowing token holders to vote on the future development of the blockchain.

## Definitions of the main concepts 

* **Baking**: The creation of new blocks on the Tezos blockchain by its validator nodes (aka _bakers_), who receive compensation for each new block produced.

* **Endorsement**: Each baked block is validated by other bakers who have not baked the block. These are known as endorsers of the block and they receive compensation for this.

* **Delegation**: All holders of the XTZ crypto-currency can delegate their baking and voting rights to a baker called a _delegate_, while still maintaining control of their funds.

* **Roll**: An amount of XTZ which is used as the unit of measure for baking and voting rights. Weight in the baking and voting process is indexed to an integral number of rolls. At present, one roll is equal to 8,000 XTZ.

* **Cycle**: The time equal to the creation of 4,096 blocks' on Tezos (around 2 days, 20 hours, and 16 minutes (1 minute per block, if all bakers cooperate effectively)).

* **Proposal**: A request for addition, adjustment, or removal of a protocol's feature.

## How does it work?
The self-amendment process is composed of five periods:

1. _Proposal Period_
2. _Exploration Vote Period_
3. _Testing Period_
4. _Promotion Vote Period_
5. _Adoption Period_

Each of these five periods lasts five baking cycles (i.e. 20,480 blocks or roughly 14 days), taking almost two months from the proposal to activation. The latest and current self-amendments are available at [tezosagora.org](https://www.tezosagora.org).

Should there be any failure in a given period, the whole process will revert to the _Proposal Period_ (1.), effectively aborting and restarting the process.

## Positive Voter Turnout & Super-majority; Voter Turnout & Quorum
The _Exploration Vote Period_ (2.) and _Promotion Vote Period_ (4.) work the same way. During a *vote*, each delegate has to use a single ballot: `Yea` (For), `Nay` (Against), or `Pass` (Neutral). A vote is successful if there is a _Super-majority_ and if the participation has reaches the current quorum [[2]](/tezos-basics/governance-on-chain#references).

### Positive Voter Turnout (PVT)
The _Positive Voter Turnout_ represents the percentage of bakers that have voted "Yay" compared to the total number of "Yays" and "Nays" votes.

Example with 90 votes: 75 _Yeas_; 10 _Nays_; and 5 _Pass_.

The _Positive Voter Turnout_ is roughly 88%: $\frac{75}{85}\approx$ 88%.

### Super-majority (80%)
In Tezos, having the _Super-majority_ means that "_Yea_" votes represent more than 80% of the total of "_Yeas_" and "_Nays_" votes (*Yeas* $\geq$ 80% $\times$ (*Yeas* + *Nays*)). In other words: $\text{PVT}\geq80\%$

Example with 90 votes: **75** _Yeas_; 10 _Nays_; and 5 _Pass_. The total of _Yeas_ and _Nays_ is **85**.

The number of _Yeas_ required for the validation is greater than **68**: 85 $\times$ 80% $=$ 68.

The number of _Yeas_ is then high enough to validate the vote: **75** $\geq$ **68**.

### Voter Turnout (VT)
The _Voter Turnout_ represents the percentage of bakers that have voted compared to the total number of bakers with active rolls.

Example with 90 votes out of 100 active rolls: 75 _Yeas_; 10 _Nays_; and 5 _Pass_.

The _Voter Turnout_ is 90%: $\frac{90}{100}=$ 90%.

### Quorum (Q)
The _Quorum_ is the minimum number of voters required to deliberate. At Tezos mainnet launch, the required Quorum was 80%. At the end of each successfully approved vote, the protocol performed a Quorum update. This update is based on the Voter Turnout.

The _Carthage_ amendment introduced two major changes to the calculation of the Quorum:

* The calculation now takes into account the **E**xponential **M**oving **A**verage (EMA)[[3]](/tezos-basics/governance-on-chain#references) of the _Voter Turnout_. With "$t$" a period, EMA is a function of "$t$".
  
* The Quorum is now bounded between 30% and 70%. To calculate the Quorum we use the following formula:

$$
  \text{Q} = (70\%-30\%)\times\text{EMA}(t)+30\%
$$

$$
  \iff
$$

$$
  \text{Q}=0.4\times\text{EMA}(t)+0.3
$$

With the **V**oter **T**urnout denoted "VT", the following formula is then used to update the EMA for the next vote [[3]](/tezos-basics/governance-on-chain#references):

$$
  \text{EMA}(t+1)=0.8\times\text{EMA}(t)+0.2\times\text{VT}
$$

Note that delegates' votes are weighted proportionally to the number of rolls in their staking balance.

**To summarize, a proposal submission proceeds to a next phase on two conditions:**
- $\text{PVT}\geq80\%$
- $\text{VT}\geq\text{Q}$

## Phase 1: Proposal Period
The Tezos amendment process begins with the _Proposal Period_, during which delegates can submit proposals on-chain. The delegates submit a proposal by submitting the hash of the source code.

In each _Proposal Period_, delegates can submit up to 20 proposals. **A proposal submission also counts as a weighted vote** (proportionally to the number of rolls in their staking balance at this moment). Other delegates can then vote on the submission up to 20 times.

A submission must receive **a minimum of 5% of approval** to access the next stage (2. _Exploration Vote Period_).

At the end of the _Proposal Period_, the network counts proposal votes, and the most-upvoted submission proceeds to the _Exploration Vote Period_ (2.). If there are no proposal, a tie, or less than 5% votes, then a new _Proposal Period_ (1.) begins.

## Phase 2: Exploration Vote Period

In the _Exploration Vote Period_, delegates may vote for the top-ranked proposal from the previous _Proposal Period_. Delegates get to vote either _Yea_, _Nay_ or _Pass_ on a specific submission (voting rules are explained in the previous "_Super-majority_" and "_Quorum_" sections). If the voting participation fails to achieve the _Quorum_ or the 80% _Super-Majority_, the amendment process restarts from the beginning of the _Proposal Period_ (1.).

## Phase 3: Testing Period
If a proposal is approved in the _Exploration Vote Period_ (2.), the _Testing Period_ begins with a **testnet** fork that runs in parallel to the mainnet for 48 hours. These forks have access rights to the standard library but in a [*sandbox*](https://en.wikipedia.org/wiki/Sandbox_(software_development)) (at node level).

The purpose is to verify that the migration from the old protocol to the new one works correctly. This 48-hour duration has been conservatively set to reduce the risk of the network perceiving the testnet fork as the main chain. However, 48 hours of testing is too short to determine whether a proposal is worthwhile and a safe amendment or not. A testnet matching the amendment proposal is likely to run off-chain during the remaining ~7.3 cycles of the _Testing Period_ to find security vulnerabilities. These extra cycles allow stakeholders to evaluate and discuss the amendment and gain better knowledge of its properties.

## Phase 4: Promotion Vote Period
At the end of the _Testing Period_ (3.), the _Promotion Vote Period_ (4.) begins. The network decides whether to adopt the amendment based on previous off-chain discussions and its behaviour (in 3.). The voting rules are identical to the _Exploration Voting Period_ (2.) (settlement in the "_Super-Majority_" and "_Quorum_" sections).

At the end of the _Promotion Vote Period_, the network counts the number of votes. If the participation rate reaches the minimum quorum and an 80% _Super-Majority_ of non-passing delegates vote in _Yea_, then the amendment proceeds to the _Adoption period_ (5.). If not, then the process reverts to the _Proposal Period_ (1.). The minimum vote participation rate is based on past ones.

In exchange for their work on the proposal, some delegates can put a symbolic self-reward into the new protocol. If the new protocol is accepted, they will receive the reward.

## Phase 5: Adoption period
_Adoption period_ provides enough time to enable the ecosystem and update the dev tooling.

After this phase, the mainnet activation is complete.

At the time of writing this (March 2021), 43 periods had passed. There were 8 submitted proposals of which 6 validations.

## Amendment Process Diagram
The diagram below sums up the self-amendment process:

![](../../static/img/tezos-basics/Governance_mechanism_uml.svg)
<small className="figure">FIGURE 1: Self-amendment process</small>

## Voting examples
Let's illustrate this process:

### Example 1
Let us assume a total of 100 active rolls managed by bakers and a _Voter Turnout_ (VT)'s EMA at 75%. Let's consider 90 votes (Yay, Nay, and Pass) during the _Exploration Period_ (2.):

- Yays: 75
- Nays: 10
- Pass: 5
- EMA($t$) = 75% = 0.75

In this case, we have:

$$
  \text{VT}=\frac{(75+10+5)}{100}=90\%
$$

and the Quorum "$\text{Q}$":

$$
  \text{Q}=0.4\times0.75+0.3=0.6=60\%
$$

Therefore:

$$
  \text{VT}\geq\text{Q}
$$

Let's then calculate the *Positive Voter Turnout* (PVT):

$$
  \text{PVT}=\frac{75}{75+10}=\frac{75}{85}\approx88\%\text{ }(\geq80\%)
$$

So the PVT is greater than the *Super Majority*.

Let's not forget to update the EMA:

$$
  \text{EMA}(t+1)= 0.8\times75\%+0.2\times90\%=78\%
$$

### Example 2
Let us assume a total of 100 active rolls managed by bakers and a VT's EMA at 75%. Let's consider 55 votes (Yay, Nay, and Pass) during the _Exploration Period_ (2.):
- Yays: 45
- Nays: 10
- Pass: 0
- EMA($t$) = 75% = 0.75

In this case, we have:
$$
  \text{VT}=\frac{45+10+0}{100}=55\%
$$

and:

$$
  \text{Q}=0.4\times0.75\%+0.3=0.6=60\%
$$

Therefore:
$$
  \text{VT}\lt\text{Q}
$$

**The proposal is rejected**.

Regardless, let's calculate the **PVT** to illustrate a subtlety:

$$
  \text{PVT}=\frac{45}{45+10}=\frac{45}{55}\approx81\%
$$

Although the PVT is greater than the _Super-majority_ (80%), the amendment proposal is rejected (the Quorum wasn't reached).

We must therefore go back to the initial proposals stage without forgetting to update the EMA for the next submission:

$$
  \text{EMA}(t+1)=0.8\times\text{EMA}(t)+0.2\times\text{VT}
$$

So, in our example, the next EMA would be:

$$
  \text{EMA}(t+1)=0.8\times75\%+0.2\times55\%=71\%
$$

## Operations
Delegates can send two operations: "*Proposals*" and "*Ballot*".

### The "*Proposals*" operation
It is only possible to submit a proposal operation during the _Proposal Period_ (1.).

Description:

```
Proposals : {
  source: Signature.Public_key_hash.t ;
  period: Voting_period_repr.t ;
  proposals: Protocol_hash.t list ; 
}
```
`source` is the delegate's public key hash

`period` is the unique identifier of each voting period

`proposals` is a non-empty list of maximum 20 protocol hashes.

This operation [[4]](/tezos-basics/governance-on-chain#references) can be submitted more than once but only if the cumulative number of active proposals is less than 20. Each time a delegate duplicates a proposal, a vote is counted with the 20 vote maximum applying.

### The "*Ballot*" operation
It is only possible to submit a ballot operation during the _Exploration Vote Period_ (2.) or the _Promotion Vote Period_ (4.), and only once per period.

Description:

```
Ballot : {
  source: Signature.Public_key_hash.t ;
  period: Voting_period_repr.t ;
  proposal: Protocol_hash.t ;
  ballot: Vote_repr.ballot ; 
}
```
`source` is the delegate's public key hash

`period` is the unique identifier of each voting period

`proposal` is the selected protocol hash.

`ballot` is one of the possible ballot response: `Yea`, `Nay`, or `Pass`


## Sending a proposal operation
To send a "proposal" or a "ballot" operation, please refer to the [CLI and RPC](/tezos-basics/cli-and-rpc) chapter.

## What have we learned so far?
In this chapter, we learned how Tezos allows on-chain decentralized governance without hard forks' troubles. To do this, Tezos splits amendments into five different periods that we defined and detailed.

In the next "*History of Amendments*" chapter, we will go over a short history of past proposals, both approved and refused, and look at why.

## References
[1] https://medium.com/tezos/amending-tezos-b77949d97e1e

[2] https://tezos.gitlab.io/007/voting.html#super-majority-and-quorum

[3] https://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average

[4] https://tezos.gitlab.io/007/voting.html#operations

[5] https://www.tezosagora.org

[6] https://www.tezosagora.org/learn

[7] https://blog.octo.com/tezos-une-blockchain-auto-evolutive-partie-1-3/

[8] https://gitlab.com/tezos-paris-hub/tezos-on-chain-governance/-/blob/master/Documentations/Amendements_Tezos_en.pdf