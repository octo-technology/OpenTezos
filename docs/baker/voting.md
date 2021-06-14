---
id: voting
title: Voting
authors: Maxime Sallerin
---

In this chapter we will have a brief overview of the voting process and the different commands that allow a delegate to make a proposal and vote.

## Voting process

Tezos is a self-amending blockchain network that can improve itself over time by using a formalized process to upgrade its protocol without _hard forks_. In practice, it is similar to the structure of a corporation, where shareholders get to vote on the future direction.

[Five periods](https://tezos.gitlab.io/active/voting.html#periods) split the self-amendment process:

1. **Proposal Period**: Delegates can submit protocol amendment proposals using the proposals operation.
2. **Exploration Vote Period**: Delegates can cast one vote to pursue the voting process or not with the winning proposal using the ballot operation.
3. **Cooldown Period**: Time elapse before the promotion period.
4. **Promotion Vote Period**: Delegates can cast one vote to promote or not the proposal using the ballot operation.
5. **Adoption Period**: At the end of the period the proposal is activated as the new protocol and we go back to a proposal period.

Each of these five periods lasts five baking cycles (i.e. 20,480 blocks or roughly 14 days), taking almost two months from the proposal to activation.

To learn more about the voting process, take a look at the [Governance on-chain](/tezos-basics/governance-on-chain) chapter of the [Tezos Basics](/tezos-basics) module.

## CLI Commands

There are two operations used by the delegates: **proposals** and **ballot**. 

- **A proposal operation** can only be submitted during a **proposal period**.
- **A ballot operation** can only be submitted during one of the voting periods (**Exploration Vote Period** or **Promotion Vote Period**), and only once per period.

### Checking the Status of a Voting Period

Tezos’ client provides a command to show the status of a voting period. It displays different informations for different kind of periods, as in the following samples:

```shell
tezos-client show voting period
```

### Submit proposal

**Proposals** are a request for addition, adjustment, or removal of a protocol's feature.

During a **proposal period**, the list of proposals can be submitted with:

```shell
tezos-client submit proposals for <delegate> <proposal1> <proposal2> ...
```

### Submit ballots

Bakers get to vote either "Yay", "Nay", or "Pass" on a specific proposal. "Pass" just means to abstain from voting for or against a proposal but still allowing a delegate to reach [quorum](/tezos-basics/governance-on-chain#quorum-q).

During a voting period, being it an **exploration or a promotion vote period**, ballots can be submitted once with:

```shell
tezos-client submit ballot for <delegate> <proposal> <yay|nay|pass>
```

## References

- [1] https://tezos.gitlab.io/active/voting.html