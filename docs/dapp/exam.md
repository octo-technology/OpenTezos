---
id: exam
title: Exam
authors: Benjamin Pilia
---

import {ExamForm, ExamCheckbox} from '../../src/components/docs/ExamForm';

<ExamForm moduleName="How to build a Dapp">

### Question 1

What is _Truffle_ used for?

<ExamCheckbox name="01" isCorrect="false">Setting up a private Tezos network.</ExamCheckbox>
<ExamCheckbox name="02" isCorrect="true">Smart contracts compilation and deployment.</ExamCheckbox>
<ExamCheckbox name="03" isCorrect="false">Writing smart contracts.</ExamCheckbox>
<ExamCheckbox name="04" isCorrect="true">Testing smart contracts.</ExamCheckbox>
<ExamCheckbox name="05" isCorrect="false">Tezos network monitoring.</ExamCheckbox>

### Question 2

When retrieving a contract storage, _Taquito_ stores every type except:

<ExamCheckbox name="10" isCorrect="false">Lists</ExamCheckbox>
<ExamCheckbox name="11" isCorrect="false">Bytes</ExamCheckbox>
<ExamCheckbox name="12" isCorrect="true">Big maps</ExamCheckbox>
<ExamCheckbox name="13" isCorrect="false">Mutez and tez</ExamCheckbox>
<ExamCheckbox name="14" isCorrect="false">Records</ExamCheckbox>

### Question 3

How can the user experience be improved?

<ExamCheckbox name="20" isCorrect="false">By restricting the whole application to authenticated users</ExamCheckbox>
<ExamCheckbox name="21" isCorrect="true">By using a Wallet.</ExamCheckbox>
<ExamCheckbox name="22" isCorrect="true">By displaying basic information from the storage without restrictions</ExamCheckbox>
<ExamCheckbox name="23" isCorrect="true">By preventing the users from sending transactions that will fail</ExamCheckbox>
<ExamCheckbox name="24" isCorrect="false">By updating the storage information as soon as it changes</ExamCheckbox>

### Question 4

When writing a migration, some javascript types are directly able to be used in an initial storage, others are not. What are the types not directly usable in _Truffle_?

<ExamCheckbox name="30" isCorrect="true">Bytes</ExamCheckbox>
<ExamCheckbox name="31" isCorrect="false">List</ExamCheckbox>
<ExamCheckbox name="32" isCorrect="true">Big maps</ExamCheckbox>
<ExamCheckbox name="33" isCorrect="false">Tez and mutez</ExamCheckbox>
<ExamCheckbox name="34" isCorrect="true">Maps</ExamCheckbox>
<ExamCheckbox name="35" isCorrect="false">Timestamp</ExamCheckbox>

### Question 5

What is one problem solved by an API call?

<ExamCheckbox name="40" isCorrect="false">A more efficient storage fetching</ExamCheckbox>
<ExamCheckbox name="41" isCorrect="true">Retrieving keys of a big map</ExamCheckbox>
<ExamCheckbox name="42" isCorrect="false">Better support for protocol improvements</ExamCheckbox>
<ExamCheckbox name="43" isCorrect="false">Sending transactions in batch</ExamCheckbox>

### Question 6

Why is a Wallet required for Dapps?

<ExamCheckbox name="50" isCorrect="true">For ease and safety as the users can use their own address</ExamCheckbox>
<ExamCheckbox name="51" isCorrect="false">For network inspection</ExamCheckbox>
<ExamCheckbox name="52" isCorrect="true">For sending transactions</ExamCheckbox>
<ExamCheckbox name="53" isCorrect="false">For contract inspection.</ExamCheckbox>
<ExamCheckbox name="54" isCorrect="false">For retrieving the storage information</ExamCheckbox>

### Question 7

Why should the user be prevented from sending transactions in a row?

<ExamCheckbox name="60" isCorrect="true">Because there can still be transactions in the mempool</ExamCheckbox>
<ExamCheckbox name="61" isCorrect="false">The more transactions you send the higher the transaction fees will be </ExamCheckbox>
<ExamCheckbox name="62" isCorrect="false">Sending too many transactions might slow the dapp down</ExamCheckbox>
<ExamCheckbox name="63" isCorrect="false">To prevent users from spending too many tz in the app</ExamCheckbox>

### Question 8

When should _loadBalance_ and _loadStorage_ be called?

<ExamCheckbox name="70" isCorrect="true">When a new block is baked</ExamCheckbox>
<ExamCheckbox name="71" isCorrect="false">On a regular basis (every minute for instance)</ExamCheckbox>
<ExamCheckbox name="72" isCorrect="true">When a transaction sent by the user is confirmed</ExamCheckbox>
<ExamCheckbox name="73" isCorrect="false">When the connected account changes</ExamCheckbox>

</ExamForm>