---
id: exam
title: Exam
authors: Frank Hillard
---

import ExamForm from '../../src/components/docs/ExamForm';
import ExamCheckbox from '../../src/components/docs/ExamCheckbox';

<ExamForm moduleName="Formal Verificaion">

### Question 1

What is returned by the execution of a smart contract ?

<ExamCheckbox name="00" isCorrect="false">The current storage state when invoking the smart contract</ExamCheckbox>
<ExamCheckbox name="01" isCorrect="true">The modified storage state after invoking the smart contract</ExamCheckbox>
<ExamCheckbox name="02" isCorrect="false">The entrypoint that has been called (and its related parameters)</ExamCheckbox>
<ExamCheckbox name="03" isCorrect="true">The list of emitted operations produced by the execution of the smart contract</ExamCheckbox>
<ExamCheckbox name="04" isCorrect="false">The balance of the contract</ExamCheckbox>
<ExamCheckbox name="05" isCorrect="false">The size of the storage</ExamCheckbox>
<ExamCheckbox name="06" isCorrect="false">The code of the smart contract</ExamCheckbox>
<ExamCheckbox name="07" isCorrect="false">The list of users allowed to call the smart contract</ExamCheckbox>

### Question 2

What makes the bridge between the Tezos world and the formal world of Coq ?

<ExamCheckbox name="10" isCorrect="false">The Michelson language</ExamCheckbox>
<ExamCheckbox name="11" isCorrect="false">The Coq universe (predefined Coq types)</ExamCheckbox>
<ExamCheckbox name="12" isCorrect="true">The Mi-cho-coq library</ExamCheckbox>
<ExamCheckbox name="13" isCorrect="false">The Tezos protocol</ExamCheckbox>

### Question 3

Who is Thierry Coquand ?

<ExamCheckbox name="20" isCorrect="false">The founder of the type theory called λ-calculus</ExamCheckbox>
<ExamCheckbox name="21" isCorrect="true">The founder of the type theory called the calculus of constructions (CoC).</ExamCheckbox>
<ExamCheckbox name="22" isCorrect="true">The principal developer of the _Coq_ proof assistant.</ExamCheckbox>
<ExamCheckbox name="23" isCorrect="false">The founder of the intuitionistic type theory.</ExamCheckbox>

### Question 4

We have seen that a Michelson script must be translated into an annotated script (i.e. a formal definition) (because Mi-Cho-Coq provides an equivalent for each Michelson instruction). In the theorem we want to prove, we specify that "the execution of the annotated script is equivalent to post-conditions". Who is responsible for the execution of this annotated script ?

<ExamCheckbox name="50" isCorrect="false">The Michelson interpreter</ExamCheckbox>
<ExamCheckbox name="51" isCorrect="true">The Mi-Cho-Coq evaluator</ExamCheckbox>
<ExamCheckbox name="52" isCorrect="false">The Coq inference engine</ExamCheckbox>

### Question 5

What post-conditions depends on (What post-conditions are built upon) ?

<ExamCheckbox name="60" isCorrect="true">The storage modification produced by the execution of the smart contract</ExamCheckbox>
<ExamCheckbox name="61" isCorrect="true">The entrypoint parameter which is invoked</ExamCheckbox>
<ExamCheckbox name="62" isCorrect="false">The sequence of Michelson instructions (smart contract code)</ExamCheckbox>
<ExamCheckbox name="63" isCorrect="true">Operations produced by the execution of the smart contract</ExamCheckbox>
<ExamCheckbox name="64" isCorrect="true">Environment variables (transaction properties such as sender, amount)</ExamCheckbox>
<ExamCheckbox name="65" isCorrect="false">Predefined Coq types and inductive types (Coq libraries)</ExamCheckbox>
<ExamCheckbox name="66" isCorrect="false">Mi-Cho-Coq library</ExamCheckbox>

</ExamForm>