---
id: exam
title: Exam
authors: --
---

import ExamForm from '../../src/components/docs/ExamForm';
import ExamCheckbox from '../../src/components/docs/ExamCheckbox';

<ExamForm moduleName="Deploy Bakers">

### Question 1

Which of the following Tezos blockchain actors is considered a delegate?

<ExamCheckbox name="00" isCorrect="false">A delegator.</ExamCheckbox>
<ExamCheckbox name="01" isCorrect="true">A baker.</ExamCheckbox>
<ExamCheckbox name="02" isCorrect="true">An endorser.</ExamCheckbox>
<ExamCheckbox name="03" isCorrect="true">An accuser.</ExamCheckbox>
<ExamCheckbox name="04" isCorrect="false">A voter.</ExamCheckbox>

### Question 2

What is the minimum amount required to become a baker?

<ExamCheckbox name="10" isCorrect="false">None</ExamCheckbox>
<ExamCheckbox name="11" isCorrect="false">1 ꜩ</ExamCheckbox>
<ExamCheckbox name="12" isCorrect="false">32 ꜩ</ExamCheckbox>
<ExamCheckbox name="13" isCorrect="false">512 ꜩ</ExamCheckbox>
<ExamCheckbox name="14" isCorrect="true">8000 ꜩ</ExamCheckbox>
<ExamCheckbox name="15" isCorrect="false">16 000 ꜩ</ExamCheckbox>

### Question 3

During the Baking process, what fraudulent motive results in the loss of its frozen XTZ? 

<ExamCheckbox name="20" isCorrect="true">Double baking.</ExamCheckbox>
<ExamCheckbox name="21" isCorrect="false">Inactivity during baking process.</ExamCheckbox>
<ExamCheckbox name="22" isCorrect="true">Double endorsement.</ExamCheckbox>
<ExamCheckbox name="23" isCorrect="false">Baker that's not paying his delegators.</ExamCheckbox>

### Question 4

What is the correct command line to run a baker on the Mainnet, supposing the account alias is "bob"?

<ExamCheckbox name="30" isCorrect="false">`tezos-baker-009-PsFLoren run with local node ~/.tezos-node bob`</ExamCheckbox>
<ExamCheckbox name="31" isCorrect="false">`tezos-baker-010-PtGRANAD run with local node ~/.tezos-node bob`</ExamCheckbox>
<ExamCheckbox name="32" isCorrect="true">`tezos-baker-alpha run with local node ~/.tezos-node bob`</ExamCheckbox>

### Question 5

What are the two periods in which you can realize a "*ballot*" operation?

<ExamCheckbox name="40" isCorrect="false">Proposal period</ExamCheckbox>
<ExamCheckbox name="41" isCorrect="true">Exploration period</ExamCheckbox>
<ExamCheckbox name="42" isCorrect="false">Cooldown period</ExamCheckbox>
<ExamCheckbox name="43" isCorrect="true">Promotion period</ExamCheckbox>
<ExamCheckbox name="44" isCorrect="false">Adoption period</ExamCheckbox>

</ExamForm>