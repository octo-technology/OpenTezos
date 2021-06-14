---
id: exam
title: Exam
authors: Maxime Sallerin
---

import ExamForm from '../../src/components/docs/ExamForm';
import ExamCheckbox from '../../src/components/docs/ExamCheckbox';

<ExamForm moduleName="How to deploy a node">

### Question 1

What are the two main functions of a Tezos node?

<ExamCheckbox name="00" isCorrect="false">Creating and endorsing new blocks.</ExamCheckbox>
<ExamCheckbox name="01" isCorrect="true">Running the gossip network and updating the context.</ExamCheckbox>

### Question 2

What is true about a node identity?

<ExamCheckbox name="10" isCorrect="false">It is a *tz1* address.</ExamCheckbox>
<ExamCheckbox name="11" isCorrect="true">It comprises a pair of cryptographic keys that nodes use to encrypt messages sent to each other.</ExamCheckbox>
<ExamCheckbox name="12" isCorrect="true">It is like a network identity.</ExamCheckbox>
<ExamCheckbox name="13" isCorrect="false">It is a *KT1* address.</ExamCheckbox>

### Question 3

What's true about *snapshot* for node configuration?

<ExamCheckbox name="20" isCorrect="true">Snapshot is a compressed copy of the chain at a certain block.</ExamCheckbox>
<ExamCheckbox name="21" isCorrect="false">It allows the node to synchronize to the Tezos blockchain from the P2P network.</ExamCheckbox>
<ExamCheckbox name="22" isCorrect="true">The mechanism of Snapshots can help in reducing the synchronization time.</ExamCheckbox>
<ExamCheckbox name="23" isCorrect="false">Snapshots of owned rolls are done every 256 blocks and define who can bake.</ExamCheckbox>
<ExamCheckbox name="24" isCorrect="true">`tezos-node snapshot import &gt;snapshot&lt;` is a correct command for importing a snapshot.</ExamCheckbox>

### Question 4

What is the default network?

<ExamCheckbox name="30" isCorrect="false">Florencenet</ExamCheckbox>
<ExamCheckbox name="31" isCorrect="true">Mainnet</ExamCheckbox>
<ExamCheckbox name="32" isCorrect="false">Sandbox</ExamCheckbox>
<ExamCheckbox name="33" isCorrect="false">Granadanet</ExamCheckbox>

### Question 5

What is the right command to launch your tezos node?

<ExamCheckbox name="40" isCorrect="false">`tezos-node start`</ExamCheckbox>
<ExamCheckbox name="41" isCorrect="false">`tezos-client run`</ExamCheckbox>
<ExamCheckbox name="42" isCorrect="true">`tezos-node run`</ExamCheckbox>
<ExamCheckbox name="43" isCorrect="false">`tezos-node bootstrapped`</ExamCheckbox>
<ExamCheckbox name="44" isCorrect="false">`tezos-client bootstrapped` `tezos-client start`</ExamCheckbox>

</ExamForm>