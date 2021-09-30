---
id: voting
title: Voting
authors: Maxime Sallerin
---

In this chapter, we will have a brief overview of the voting process. We will also see different commands that allow a delegate to make a proposal and vote.

## Voting process

Tezos is a self-amending blockchain network that can improve itself over time. It uses a formalized process to upgrade its protocol without _hard forks_. In practice, it is similar to the structure of a corporation, where shareholders get to vote on the future direction.

[Five periods](https://tezos.gitlab.io/active/voting.html#periods) split the self-amendment process:

1. **Proposal Period**: Delegates can submit protocol amendment proposals using the "proposal" operation.
2. **Exploration Vote Period**: Delegates can cast one vote to pursue the voting process or not with the winning proposal using the "ballot" operation.
3. **Cooldown Period**: Elapsed time before the promotion period.
4. **Promotion Vote Period**: Delegates can cast one vote to promote or not the proposal using the "ballot" operation.
5. **Adoption Period**: At the end of this period, the proposal is activated as the new protocol and the system goes back to the first period.

Each of these five periods lasts five baking cycles (i.e. 20,480 blocks or roughly 14 days), taking almost two months from the first period to activation.

To learn more about the voting process, take a look at the [Governance on-chain](/tezos-basics/governance-on-chain) chapter of the [Tezos Basics](/tezos-basics) module.

## CLI Commands

There are two operations used by the delegates: **proposal** and **ballot**. 

- **A proposal operation** can only be submitted during a **proposal period**.
- **A ballot operation** can only be submitted during one of the *voting* periods (**Exploration Vote Period** or **Promotion Vote Period**), and only once per period.

### Checking the Status of a Voting Period

Tezos’ client provides a command to show the status of a voting period. It displays different information for different kind of periods:

```shell
tezos-client show voting period
```

### Submit proposals

**Proposal** is a request for addition, adjustment, or removal of a protocol feature.

During a **proposal period**, the list of proposals can be submitted with:

```shell
tezos-client submit proposals for <delegate> <proposal1> <proposal2> ...
```

### Submit ballots

Bakers get to vote either "Yay", "Nay", or "Pass" on a specific proposal. "Pass" means to abstain from voting for or against a proposal but still allowing a delegate to reach the [Quorum](/tezos-basics/governance-on-chain#quorum-q).

During a voting period (being an **Exploration** or a **Promotion** _vote period_**), ballots can be submitted once with:

```shell
tezos-client submit ballot for <delegate> <proposal> <yay|nay|pass>
```

## References

- [1] https://tezos.gitlab.io/active/voting.html