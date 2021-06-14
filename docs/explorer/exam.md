---
id: exam
title: Exam
authors: Maxime Sallerin
---

import ExamForm from '../../src/components/docs/ExamForm';
import ExamCheckbox from '../../src/components/docs/ExamCheckbox';

<ExamForm moduleName="DeFi">

### Question 1

What is true about a block indexer?

<ExamCheckbox name="01" isCorrect="true">Indexers fetches the raw data from the node, then processes it and stores it in a database in an optimized way.</ExamCheckbox>
<ExamCheckbox name="02" isCorrect="false">It enables cryptocurrency transaction.</ExamCheckbox>
<ExamCheckbox name="03" isCorrect="true">It provides fast access to the blockchain data.</ExamCheckbox>
<ExamCheckbox name="04" isCorrect="false">It allows the writing and deployment of smart contracts.</ExamCheckbox>
<ExamCheckbox name="05" isCorrect="false">Indexers exist only for the Tezos blockchain.</ExamCheckbox>

### Question 2

What is a block indexer made of?

<ExamCheckbox name="10" isCorrect="true">An API Layer</ExamCheckbox>
<ExamCheckbox name="11" isCorrect="false">A Block Node</ExamCheckbox>
<ExamCheckbox name="12" isCorrect="true">A Database</ExamCheckbox>
<ExamCheckbox name="13" isCorrect="true">An ETL</ExamCheckbox>

### Question 3

Which of the following block explorers is designed for the Tezos Blockchain?

<ExamCheckbox name="20" isCorrect="false">Etherscan</ExamCheckbox>
<ExamCheckbox name="21" isCorrect="true">TzKT</ExamCheckbox>
<ExamCheckbox name="22" isCorrect="true">TzStats</ExamCheckbox>
<ExamCheckbox name="23" isCorrect="false">BlockChair</ExamCheckbox>
<ExamCheckbox name="24" isCorrect="true">Arronax</ExamCheckbox>
<ExamCheckbox name="25" isCorrect="false">Ethplorer</ExamCheckbox>
<ExamCheckbox name="26" isCorrect="true">TzKT</ExamCheckbox>

### Question 4

What does a block explorer such as _TzStats_ allow you to do?

<ExamCheckbox name="30" isCorrect="true">Get an overview of the main activity on the Tezos network, e.g. staking activity, gas price, XTZ offer, transaction volume, etc.</ExamCheckbox>
<ExamCheckbox name="31" isCorrect="true">Get general information about a specific block number.</ExamCheckbox>
<ExamCheckbox name="32" isCorrect="false">Delete a block.</ExamCheckbox>
<ExamCheckbox name="33" isCorrect="true">Get an overview of the Tezos baker landscape.</ExamCheckbox>
<ExamCheckbox name="34" isCorrect="true">Make API calls from a DApp to get storage data, e.g. the values in a _big map_.</ExamCheckbox>
<ExamCheckbox name="35" isCorrect="false">Modify a transaction in which you were mistaken.</ExamCheckbox>
<ExamCheckbox name="36" isCorrect="true">Find a smart contract by its address and view its calls, entrypoints, storage etc</ExamCheckbox>
<ExamCheckbox name="37" isCorrect="false">Deploy your smart contract.</ExamCheckbox>
<ExamCheckbox name="38" isCorrect="true">Get an overview of the current market activity, e.g. list of exchanges, 1 day's volume, overall market capitalization, etc.</ExamCheckbox>

### Question 5

What is true about private indexers?

<ExamCheckbox name="40" isCorrect="false">They can only be run on private networks.</ExamCheckbox>
<ExamCheckbox name="41" isCorrect="false">They need a private explorer to access the data.</ExamCheckbox>
<ExamCheckbox name="42" isCorrect="false">They cannot be customized.</ExamCheckbox>
<ExamCheckbox name="43" isCorrect="true">They can be run on public networks and provide an API access to its data.</ExamCheckbox>

</ExamForm>