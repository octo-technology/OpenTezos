---
id: exam
title: Exam
authors: Maxime Sallerin and Benjamin Pilia
---

import {ExamForm, ExamCheckbox} from '../../src/components/docs/ExamForm';

<ExamForm moduleName="DeFi">

### Question 1

What is correct about LIGO?

<ExamCheckbox name="00" isCorrect="true">LIGO is a programming language for writing Tezos smart contracts.</ExamCheckbox>
<ExamCheckbox name="01" isCorrect="false">Smart contracts are, by default, written in the LIGO language.</ExamCheckbox>
<ExamCheckbox name="02" isCorrect="true">LIGO compiles scripts written in a high-level language into Michelson script.</ExamCheckbox>
<ExamCheckbox name="03" isCorrect="false">The LIGO syntax is PascaLigo.</ExamCheckbox>

### Question 2

What notions are defined inside the smart contract?

<ExamCheckbox name="10" isCorrect="true">The type-definition of the storage.</ExamCheckbox>
<ExamCheckbox name="11" isCorrect="false">The balance on the contract.</ExamCheckbox>
<ExamCheckbox name="12" isCorrect="false">The initial value of the storage.</ExamCheckbox>
<ExamCheckbox name="13" isCorrect="false">The value of the entry point and its related parameters.</ExamCheckbox>
<ExamCheckbox name="14" isCorrect="true">The type definition of the entry point.</ExamCheckbox>
<ExamCheckbox name="15" isCorrect="false">The size of the storage.</ExamCheckbox>
<ExamCheckbox name="16" isCorrect="true">The code of the smart contract.</ExamCheckbox>
<ExamCheckbox name="17" isCorrect="false">The list of users allowed to call the smart contract.</ExamCheckbox>

### Question 3

What is returned by the execution of a smart contract?

<ExamCheckbox name="20" isCorrect="true">The modified storage state after invoking the smart contract.</ExamCheckbox>
<ExamCheckbox name="21" isCorrect="false">The entry point that has been called (and its related parameters).</ExamCheckbox>
<ExamCheckbox name="22" isCorrect="true">The list of emitted operations produced by the execution of the smart contract.</ExamCheckbox>
<ExamCheckbox name="23" isCorrect="false">The balance of the contract.</ExamCheckbox>
<ExamCheckbox name="24" isCorrect="false">The size of the storage.</ExamCheckbox>
<ExamCheckbox name="25" isCorrect="false">The code of the smart contract.</ExamCheckbox>
<ExamCheckbox name="26" isCorrect="false">The list of users allowed to call the smart contract.</ExamCheckbox>

### Question 4

What is the right way to define a variable?

<ExamCheckbox name="30" isCorrect="false">`var int : my_age = 25`</ExamCheckbox>
<ExamCheckbox name="31" isCorrect="false">`int my_age = 25`</ExamCheckbox>
<ExamCheckbox name="32" isCorrect="false">`var int = my_age : 25`</ExamCheckbox>
<ExamCheckbox name="33" isCorrect="false">`var my_age : int = 25`</ExamCheckbox>
<ExamCheckbox name="34" isCorrect="true">`var my_age : int := 25`</ExamCheckbox>
<ExamCheckbox name="35" isCorrect="false">`var my_age = 25 : int`</ExamCheckbox>

### Question 5

What is the right way to define a constant?

<ExamCheckbox name="40" isCorrect="false">`const string : my_name = "Roger"`</ExamCheckbox>
<ExamCheckbox name="41" isCorrect="false">`string my_age = "Roger"`</ExamCheckbox>
<ExamCheckbox name="42" isCorrect="false">`const string = my_name : "Roger"`</ExamCheckbox>
<ExamCheckbox name="43" isCorrect="true">`const my_name : string = "Roger"`</ExamCheckbox>
<ExamCheckbox name="44" isCorrect="false">`const my_name : string := "Roger"`</ExamCheckbox>
<ExamCheckbox name="45" isCorrect="false">`const my_name = "Roger" : string`</ExamCheckbox>

### Question 6

Which of the following operations are correct?

<ExamCheckbox name="50" isCorrect="true">`const a : int = 5 + 10`</ExamCheckbox>
<ExamCheckbox name="51" isCorrect="true">`const c : tez = 5mutez + 0.000_010tez`</ExamCheckbox>
<ExamCheckbox name="52" isCorrect="false">`const c : nat = 5n - 2n`</ExamCheckbox>
<ExamCheckbox name="53" isCorrect="true">`const b : int = 5n + 10`</ExamCheckbox>
<ExamCheckbox name="54" isCorrect="false">`const d : tez = 5mutez + 10n`</ExamCheckbox>
<ExamCheckbox name="55" isCorrect="true">`const b : int = 5n - 2n`</ExamCheckbox>
<ExamCheckbox name="56" isCorrect="true">`const d : tez = 5mutez - 1mutez`</ExamCheckbox>

### Question 7

What is correct about type aliasing?

<ExamCheckbox name="60" isCorrect="true">Type aliasing consists of naming a given type when the context calls for a more precise name.</ExamCheckbox>
<ExamCheckbox name="61" isCorrect="true">Type aliasing increases the readability and maintainability of your smart contracts.</ExamCheckbox>
<ExamCheckbox name="62" isCorrect="false">`type name = string` is the correct way to define a type.</ExamCheckbox>
<ExamCheckbox name="63" isCorrect="true">`type name is string` is the correct way to define a type.</ExamCheckbox>

### Question 8

What is a set?

<ExamCheckbox name="70" isCorrect="false">A linear collection of elements of the same type.</ExamCheckbox>
<ExamCheckbox name="71" isCorrect="false">A data structure that associates values of the same type to values of the same type.</ExamCheckbox>
<ExamCheckbox name="72" isCorrect="true">An unordered collection of values of the same type.</ExamCheckbox>
<ExamCheckbox name="73" isCorrect="false">One way that data of different types can be packed into a single type, which is made of a field name and a field type.</ExamCheckbox>

### Question 9

What is a record?

<ExamCheckbox name="80" isCorrect="false">A linear collection of elements of the same type.</ExamCheckbox>
<ExamCheckbox name="81" isCorrect="false">A data structure that associates values of the same type to values of the same type.</ExamCheckbox>
<ExamCheckbox name="82" isCorrect="false">An unordered collection of values of the same type.</ExamCheckbox>
<ExamCheckbox name="83" isCorrect="true">One-way that data of different types can be packed into a single type, which is made of a field name and a field type.</ExamCheckbox>

### Question 10

Consider the following smart contract.

```js
type counterStorage is int

type counterEntrypoints is Increment of int | Decrement of int

type counterReturn is ########

function increment(const param : int; const s : counterStorage) : counterReturn is 
block { skip } with ((nil: list(operation)), s + param)

function decrement(const param : int; const s : counterStorage) : counterReturn is 
block { skip } with ((nil: list(operation)), s - param)

function main(const ep : counterEntrypoints; const store : counterStorage) : counterReturn is
block { 
    const ret : counterReturn = case ep of 
    | Increment(p) -> increment(p, store)
    | Decrement(p) -> decrement(p, store)
    end;
    
 } with ret
```

Complete the ######## part in the code to give the return type of the main function a correct definition.
(More than one answers can be considered valid)

<ExamCheckbox name="90" isCorrect="false">`type counterReturn is list(operation) * counterEntrypoints`</ExamCheckbox>
<ExamCheckbox name="91" isCorrect="false">`type counterReturn is counterEntrypoints * counterStorage`</ExamCheckbox>
<ExamCheckbox name="92" isCorrect="true">`type counterReturn is list(operation) * counterStorage`</ExamCheckbox>
<ExamCheckbox name="93" isCorrect="false">`type counterReturn is counterStorage`</ExamCheckbox>
<ExamCheckbox name="94" isCorrect="false">`type counterReturn is counterEntrypoints`</ExamCheckbox>
<ExamCheckbox name="95" isCorrect="true">`type counterReturn is list(operation) * int`</ExamCheckbox>

Which of the following proposals is called an entrypoint for this smart contract?

<ExamCheckbox name="100" isCorrect="false">`Increment(p)`</ExamCheckbox>
<ExamCheckbox name="101" isCorrect="false">`Increment(p) -> increment(p, store)`</ExamCheckbox>
<ExamCheckbox name="102" isCorrect="false">`indiceEntrypoints`</ExamCheckbox>
<ExamCheckbox name="103" isCorrect="false">`Decrement(p)`</ExamCheckbox>
<ExamCheckbox name="104" isCorrect="false">`Decrement(p) -> decrement(p, store)`</ExamCheckbox>
<ExamCheckbox name="105" isCorrect="true">`increment`</ExamCheckbox>
<ExamCheckbox name="106" isCorrect="false">`ret`</ExamCheckbox>
<ExamCheckbox name="107" isCorrect="true">`decrement`</ExamCheckbox>

What command lines are correct for this smart contract?
(Assume that the smart contract is stored in a file **counter.ligo**)

<ExamCheckbox name="110" isCorrect="true">ligo compile-contract counter.ligo main</ExamCheckbox>
<ExamCheckbox name="111" isCorrect="false">ligo compile-contract main counter.ligo</ExamCheckbox>
<ExamCheckbox name="112" isCorrect="true">ligo dry-run counter.ligo main 'Increment(5)' '4'</ExamCheckbox>
<ExamCheckbox name="113" isCorrect="false">ligo dry-run counter.ligo increment 'Increment(5)' '4'</ExamCheckbox>
<ExamCheckbox name="114" isCorrect="true">ligo compile-parameter counter.ligo main 'Decrement(5)'</ExamCheckbox>
<ExamCheckbox name="115" isCorrect="false">ligo compile-parameter counter.ligo decrement 'Decrement(5)'</ExamCheckbox>
<ExamCheckbox name="116" isCorrect="false">ligo compile-parameter counter.ligo main 'decrement' '5'</ExamCheckbox>
<ExamCheckbox name="117" isCorrect="false">ligo compile-parameter counter.ligo main '0'</ExamCheckbox>
<ExamCheckbox name="118" isCorrect="true">ligo compile-storage counter.ligo main '0'</ExamCheckbox>
<ExamCheckbox name="119" isCorrect="false">ligo compile-storage counter.ligo main 'counterStorage(0)'</ExamCheckbox>

</ExamForm>