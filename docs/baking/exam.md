---
id: exam
title: Exam
authors: Maxime Sallerin
---

import ExamForm from '../../src/components/docs/ExamForm';
import ExamCheckbox from '../../src/components/docs/ExamCheckbox';

<ExamForm moduleName="Baking">

### Question 1

What is the consensus protocol of the Tezos Blockchain?

<ExamCheckbox name="00" isCorrect="false">Proof-of-Work (PoW)</ExamCheckbox>
<ExamCheckbox name="01" isCorrect="false">Proof-of-Stake (PoS)</ExamCheckbox>
<ExamCheckbox name="02" isCorrect="false">Delegated Proof-of-Stake (DPoS)</ExamCheckbox>
<ExamCheckbox name="03" isCorrect="true">Liquid Proof-of-Stake (LPoS)</ExamCheckbox>
<ExamCheckbox name="04" isCorrect="false">Secure Proof-of-Stake (SPoS)</ExamCheckbox>
<ExamCheckbox name="05" isCorrect="false">Proof-of-History (PoH)</ExamCheckbox>
<ExamCheckbox name="06" isCorrect="false">Zero-Knowledge-Proof (ZKP)</ExamCheckbox>

### Question 2

What is baking?

<ExamCheckbox name="10" isCorrect="false">It is the act of delegating Tez to earn passive interest.</ExamCheckbox>
<ExamCheckbox name="11" isCorrect="true">It is the act of creating, signing and publishing blocks to the Tezos blockchain.</ExamCheckbox>
<ExamCheckbox name="12" isCorrect="false">It is the act of monitoring transaction of the Tezos blockchain.</ExamCheckbox>

### Question 3

How many tezos must be delegated to a private key to represent a roll?

<ExamCheckbox name="20" isCorrect="false">4,000ꜩ</ExamCheckbox>
<ExamCheckbox name="21" isCorrect="true">8,000ꜩ</ExamCheckbox>
<ExamCheckbox name="22" isCorrect="false">16,000ꜩ</ExamCheckbox>
<ExamCheckbox name="23" isCorrect="false">32,000ꜩ</ExamCheckbox>
<ExamCheckbox name="24" isCorrect="false">64,000ꜩ</ExamCheckbox>

### Question 4

How many blocks are in a cycle?

<ExamCheckbox name="30" isCorrect="false">256 blocks</ExamCheckbox>
<ExamCheckbox name="31" isCorrect="false">512 blocks</ExamCheckbox>
<ExamCheckbox name="32" isCorrect="false">1024 blocks</ExamCheckbox>
<ExamCheckbox name="33" isCorrect="false">2048 blocks</ExamCheckbox>
<ExamCheckbox name="34" isCorrect="true">4096 blocks</ExamCheckbox>

### Question 5

Once selected, how long will a baker have to freeze part of his tokens to bake a block?

<ExamCheckbox name="40" isCorrect="false">1 cycle</ExamCheckbox>
<ExamCheckbox name="41" isCorrect="false">2 cycles</ExamCheckbox>
<ExamCheckbox name="42" isCorrect="true">5 cycles</ExamCheckbox>
<ExamCheckbox name="43" isCorrect="false">10 cycles</ExamCheckbox>

### Question 6

What is true about baker and endorser selection?

<ExamCheckbox name="50" isCorrect="true">Rolls snapshots are done every 256 blocks and define who can bake.</ExamCheckbox>
<ExamCheckbox name="51" isCorrect="false">Rolls snapshots are done every 5 cycles and define who can bake.</ExamCheckbox>
<ExamCheckbox name="52" isCorrect="true">The order of baking is done using a pseudo-random number generator based on a seed.</ExamCheckbox>
<ExamCheckbox name="53" isCorrect="true">The selected rolls determine the baking and endorsing rights for the next 5 cycles.</ExamCheckbox>
<ExamCheckbox name="54" isCorrect="false">The selected rolls determine the baking and endorsing rights for the next cycle.</ExamCheckbox>
<ExamCheckbox name="55" isCorrect="true">It is a round-robin process that cycles on the list of priorities until the end of the cycle.</ExamCheckbox>

### Question 7

What does an accuseer monitor?
<ExamCheckbox name="60" isCorrect="true">He monitors that a baker does not create two competing blocks at the same level.</ExamCheckbox>
<ExamCheckbox name="61" isCorrect="false">He monitors that a baker does not steal his delegators' rewards.</ExamCheckbox>
<ExamCheckbox name="62" isCorrect="true">He monitors that an endorser does not endorse a block twice or more at the same baking slot.</ExamCheckbox>
<ExamCheckbox name="63" isCorrect="false">He monitors that baker and endorser selection is fair. </ExamCheckbox>

### Question 8

What is true about the Tez inflation?

<ExamCheckbox name="70" isCorrect="true">Each new block generates 80 new Tez as a reward.</ExamCheckbox>
<ExamCheckbox name="71" isCorrect="false">The inflation rate for the first year was about 2.0%.</ExamCheckbox>
<ExamCheckbox name="72" isCorrect="false">Each new block generates 40 new Tez as a reward.</ExamCheckbox>
<ExamCheckbox name="73" isCorrect="true">The action of burning Tez decreases the inflation rate.</ExamCheckbox>
<ExamCheckbox name="74" isCorrect="true">The inflation rate for the first year was about 5.5%.</ExamCheckbox>
<ExamCheckbox name="75" isCorrect="true">The inflation rate decreases each year.</ExamCheckbox>

### Question 9

For a high priority baking, how much is the baking reward per endorsement?

<ExamCheckbox name="80" isCorrect="true">0.1875 ꜩ</ExamCheckbox>
<ExamCheckbox name="81" isCorrect="false">0.8333 ꜩ</ExamCheckbox>
<ExamCheckbox name="82" isCorrect="false">1.2500 ꜩ</ExamCheckbox>
<ExamCheckbox name="83" isCorrect="false">5.5000 ꜩ</ExamCheckbox>

### Question 10

If an endorser has been attributed 3 slots for a low priority block, how much will his reward be?

<ExamCheckbox name="90" isCorrect="false">0.8333 ꜩ</ExamCheckbox>
<ExamCheckbox name="91" isCorrect="false">1.2500 ꜩ</ExamCheckbox>
<ExamCheckbox name="92" isCorrect="true">2.5000 ꜩ</ExamCheckbox>
<ExamCheckbox name="93" isCorrect="false">3.7500 ꜩ</ExamCheckbox>

### Question 11

Which of the following Tezos blockchain actors is considered a delegate?

<ExamCheckbox name="100" isCorrect="false">A delegator.</ExamCheckbox>
<ExamCheckbox name="101" isCorrect="true">A baker.</ExamCheckbox>
<ExamCheckbox name="102" isCorrect="true">An endorser.</ExamCheckbox>
<ExamCheckbox name="103" isCorrect="true">An accuser.</ExamCheckbox>
<ExamCheckbox name="104" isCorrect="false">A voter.</ExamCheckbox>

### Question 12

What is the minimum amount required to become a baker?

<ExamCheckbox name="110" isCorrect="false">None</ExamCheckbox>
<ExamCheckbox name="111" isCorrect="false">1 ꜩ</ExamCheckbox>
<ExamCheckbox name="112" isCorrect="false">32 ꜩ</ExamCheckbox>
<ExamCheckbox name="113" isCorrect="false">512 ꜩ</ExamCheckbox>
<ExamCheckbox name="114" isCorrect="true">8000 ꜩ</ExamCheckbox>
<ExamCheckbox name="115" isCorrect="false">16 000 ꜩ</ExamCheckbox>

### Question 13

During the Baking process, what fraudulent motive results in the loss of its frozen Tez? 

<ExamCheckbox name="120" isCorrect="true">Double baking.</ExamCheckbox>
<ExamCheckbox name="121" isCorrect="false">Inactivity during baking process.</ExamCheckbox>
<ExamCheckbox name="122" isCorrect="true">Double endorsement.</ExamCheckbox>
<ExamCheckbox name="123" isCorrect="false">Baker that's not paying his delegators.</ExamCheckbox>

### Question 14

What is the correct command line to run a baker on the Mainnet, supposing the account alias is "bob"?

<ExamCheckbox name="130" isCorrect="false">`tezos-baker-009-PsFLoren run with local node ~/.tezos-node bob`</ExamCheckbox>
<ExamCheckbox name="131" isCorrect="false">`tezos-baker-010-PtGRANAD run with local node ~/.tezos-node bob`</ExamCheckbox>
<ExamCheckbox name="132" isCorrect="true">`tezos-baker-alpha run with local node ~/.tezos-node bob`</ExamCheckbox>

### Question 15

What are the two periods in which you can realize a "*ballot*" operation?

<ExamCheckbox name="140" isCorrect="false">Proposal period</ExamCheckbox>
<ExamCheckbox name="141" isCorrect="true">Exploration period</ExamCheckbox>
<ExamCheckbox name="142" isCorrect="false">Cooldown period</ExamCheckbox>
<ExamCheckbox name="143" isCorrect="true">Promotion period</ExamCheckbox>
<ExamCheckbox name="144" isCorrect="false">Adoption period</ExamCheckbox>

</ExamForm>