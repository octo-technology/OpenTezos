---
id: exam
title: Exam
authors: Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez
---

import {ExamForm, ExamCheckbox} from '../../src/components/docs/ExamForm';

<ExamForm moduleName="DeFi">

### Question 1

What are the particularities of Tezos compared to historical blockchains like Bitcoin and Ethereum

<ExamCheckbox name="00" isCorrect="false">XTZ is a stable coin</ExamCheckbox>
<ExamCheckbox name="01" isCorrect="true">The protocol has self-amendment</ExamCheckbox>
<ExamCheckbox name="02" isCorrect="false">It is a fork from another blockchain project</ExamCheckbox>
<ExamCheckbox name="03" isCorrect="true">The Liquid Proof-of-Stake consensus</ExamCheckbox>
<ExamCheckbox name="04" isCorrect="false">High energy consumption</ExamCheckbox>

### Question 2

What are the advantages of the Liquid Proof-of-Stake consensus 

<ExamCheckbox name="10" isCorrect="true">Low transaction fees</ExamCheckbox>
<ExamCheckbox name="11" isCorrect="false">No more delegating</ExamCheckbox>
<ExamCheckbox name="12" isCorrect="true">Low energy consumption</ExamCheckbox>
<ExamCheckbox name="13" isCorrect="true">Highly decentralized</ExamCheckbox>

### Question 3

What is a roll?

<ExamCheckbox name="20" isCorrect="false">A transaction cycle for approving or refusing an amendment period</ExamCheckbox>
<ExamCheckbox name="21" isCorrect="true">8000 staked XTZ, which give the right to vote on amendments and to participate in the baking process</ExamCheckbox>
<ExamCheckbox name="22" isCorrect="false">A security mechanism to prevent double-spending</ExamCheckbox>
<ExamCheckbox name="23" isCorrect="false">The process of bakers' selection</ExamCheckbox>

### Question 4

On which elements are transaction fees calculated?

<ExamCheckbox name="30" isCorrect="true">With the gas consumption</ExamCheckbox>
<ExamCheckbox name="31" isCorrect="true">With the required storage to realize the operation</ExamCheckbox>
<ExamCheckbox name="32" isCorrect="false">According to the congestion of the network</ExamCheckbox>
<ExamCheckbox name="33" isCorrect="false">It is free if you are a baker</ExamCheckbox>

### Question 5

What kind of operations is responsible for XTZ creation?

<ExamCheckbox name="40" isCorrect="false">Run a node</ExamCheckbox>
<ExamCheckbox name="41" isCorrect="true">Baking</ExamCheckbox>
<ExamCheckbox name="42" isCorrect="true">Endorsing</ExamCheckbox>
<ExamCheckbox name="43" isCorrect="true">Amendment Proposal</ExamCheckbox>

### Question 6

How many periods are required in the self-amending process?

<ExamCheckbox name="50" isCorrect="false">2</ExamCheckbox>
<ExamCheckbox name="51" isCorrect="true">4</ExamCheckbox>
<ExamCheckbox name="52" isCorrect="false">6</ExamCheckbox>
<ExamCheckbox name="53" isCorrect="false">8</ExamCheckbox>

### Question 7

What are the two metrics required to validate the _Exploration Period_ and the _Promotion Period_?

<ExamCheckbox name="60" isCorrect="true">Super-majority</ExamCheckbox>
<ExamCheckbox name="61" isCorrect="false">Participation rate</ExamCheckbox>
<ExamCheckbox name="62" isCorrect="true">Quorum </ExamCheckbox>
<ExamCheckbox name="63" isCorrect="false">The alternative vote</ExamCheckbox>
<ExamCheckbox name="64" isCorrect="false">Semi-proportional system</ExamCheckbox>

### Question 8

An implicit account is:

<ExamCheckbox name="70" isCorrect="false">An account linked to a smart contract with Michelson instructions</ExamCheckbox>
<ExamCheckbox name="71" isCorrect="true">An account that can be registered as a delegate and participate in the baking process</ExamCheckbox>
<ExamCheckbox name="72" isCorrect="false">An unused account</ExamCheckbox>

### Question 9

Implicit account addresses can start with:

<ExamCheckbox name="80" isCorrect="false">XTZ</ExamCheckbox>
<ExamCheckbox name="81" isCorrect="false">KT1</ExamCheckbox>
<ExamCheckbox name="82" isCorrect="false">KT2</ExamCheckbox>
<ExamCheckbox name="83" isCorrect="true">TZ1</ExamCheckbox>
<ExamCheckbox name="84" isCorrect="true">TZ2</ExamCheckbox>
<ExamCheckbox name="85" isCorrect="true">TZ3</ExamCheckbox>

### Question 10

If we want to update the Tezos protocol, we need to:

<ExamCheckbox name="90" isCorrect="false">Realize a hard fork and hope that the network will follow us</ExamCheckbox>
<ExamCheckbox name="91" isCorrect="false">Create a new blockchain</ExamCheckbox>
<ExamCheckbox name="92" isCorrect="true">Make a proposal using the self-amending mechanism</ExamCheckbox>
<ExamCheckbox name="93" isCorrect="false">Submit a change request to the Tezos developers' community</ExamCheckbox>
<ExamCheckbox name="94" isCorrect="false">Only Tezos developers can modify the Tezos protocol</ExamCheckbox>

### Question 11

What is defined inside a smart contract?

<ExamCheckbox name="100" isCorrect="true">The type of the storage variables</ExamCheckbox>
<ExamCheckbox name="101" isCorrect="false">The balance of the contract</ExamCheckbox>
<ExamCheckbox name="102" isCorrect="false">The value of the entrypoints</ExamCheckbox>
<ExamCheckbox name="103" isCorrect="true">The type of the entrypoints</ExamCheckbox>
<ExamCheckbox name="104" isCorrect="false">The fixed size of the storage</ExamCheckbox>
<ExamCheckbox name="105" isCorrect="true">The code of the smart contract</ExamCheckbox>
<ExamCheckbox name="106" isCorrect="false">The list of users allowed to call the smart contract</ExamCheckbox>

### Question 12

What is returned by the execution of a smart contract?

<ExamCheckbox name="110" isCorrect="true">The modified state of the storage after the invocation of the smart contract</ExamCheckbox>
<ExamCheckbox name="111" isCorrect="false">The related parameters of the called entrypoint</ExamCheckbox>
<ExamCheckbox name="112" isCorrect="true">The sequence of ran operations</ExamCheckbox>
<ExamCheckbox name="113" isCorrect="false">The balance of the contract</ExamCheckbox>
<ExamCheckbox name="114" isCorrect="false">The size of the storage</ExamCheckbox>
<ExamCheckbox name="115" isCorrect="false">The code of the smart contract</ExamCheckbox>
<ExamCheckbox name="116" isCorrect="false">The list of users allowed to call the smart contract</ExamCheckbox>

### Question 13

Which CLI command is responsible for a smart contract deployment?

<ExamCheckbox name="120" isCorrect="false">tezos-client activate</ExamCheckbox>
<ExamCheckbox name="121" isCorrect="false">tezos-client register</ExamCheckbox>
<ExamCheckbox name="122" isCorrect="true">tezos-client originate</ExamCheckbox>
<ExamCheckbox name="123" isCorrect="false">tezos-client activate</ExamCheckbox>

### Question 14

How many XTZ are created with the validation of a high-priority block from *Delphi* amendment?

<ExamCheckbox name="130" isCorrect="false">250 µꜩ</ExamCheckbox>
<ExamCheckbox name="131" isCorrect="false">1.25000 ꜩ</ExamCheckbox>
<ExamCheckbox name="132" isCorrect="false">1,040,000 µꜩ</ExamCheckbox>
<ExamCheckbox name="133" isCorrect="false">40 ꜩ</ExamCheckbox>
<ExamCheckbox name="134" isCorrect="true">80 ꜩ</ExamCheckbox>

### Question 15

How high is the inflation rate from the *Delphi* amendment?

<ExamCheckbox name="140" isCorrect="false">1.25%</ExamCheckbox>
<ExamCheckbox name="141" isCorrect="false">2.50%</ExamCheckbox>
<ExamCheckbox name="142" isCorrect="false">5.00%</ExamCheckbox>5.50%

</ExamForm>