---
id: tutorial
title: Tutorial
---

A Tezos smart contract defines storage, entry points, and the code. The code of a smart contract is a sequence of Michelson instructions.

The main instructions are described in the following sections.

This section begins with an introduction of some critical instructions and stack manipulation before deep diving into more complex data structure of the Michelson language.

### Stack programming

#### Basics

Michelson is stack-based language which means that all data (variables of the program) will be stacked on a single pile. Therefore Michelson language provides stack operators for reorganizing elements of the stack and other kind of operators which consumes top elements of the stack. In this section basic stack manipulation operators will be introduced and illustrated with simple examples. In a second time, the focus will be put on arithmetic operators and conditional branching.

##### Basic stack operators (PUSH DROP SWAP)

The code of a smart contract is defined as a **sequence** of Michelson instructions. The **sequence** structure is defined by `{` and `}` and contains instructions separated by `;` (semi-colon). When executing a sequence the interpreter executes each instruction sequentially, one after the other, in the specified order.

```js
{ instruction1 ; instruction2 ; ... ; instruction n}
```

Let's describe the most basics instructions (PUSH, DROP, SWAP) manipulating the elements of the stack.

The `PUSH` instruction adds an element at the top of the stack. The value and the type of element pushed must be specified.

For example the instruction `PUSH nat 1` add an element `1` as natural integer on top of the stack. The instruction `PUSH string "Hello"` adds an element "Hello" as a string on top of the stack.

The `DROP` instruction removes the top element of the stack.

The following diagram executes the sequence `{ PUSH nat 1; DROP }` which illustrates the `PUSH` and `DROP` usage.

![](../../static/img/michelson/michelson_tutorial_push_drop.svg)
<small className="figure">FIGURE 1: Execution of `PUSH` and `DROP`</small>

The `SWAP` instruction inverts the position of the top two elements of the stack.

![](../../static/img/michelson/michelson_instruction_swap_example.svg)
<small className="figure">FIGURE 2: Illustration of the `SWAP` instruction</small>

The `DUP` instruction duplicates the top element of the stack. Prevent loss of varaiables since most instructions consume elements of the stack. Later examples will illustrate this.

![](../../static/img/michelson/michelson_instruction_dup_example.svg)
<small className="figure">FIGURE 3: Illustration of the `DUP` instruction</small>



##### Stack manipulation using arithmetic operators

Once elements are added in the stack, they can be combined using arithmetic operators such as addition (`ADD`) and multiplication  (`MUL`).  Other arithmetic operators are described in the "Operations on numbers" section.

The `ADD` instruction sums the top two element of the stack. and the `MUL` multiply them. The result is pushed on top of the stack.

![](../../static/img/michelson/michelson_instruction_add_example.svg)
<small className="figure">FIGURE 3: Illustration of the `ADD` instruction</small>

More complex computation can be done. For example, the mathematical expression `((2 + 3) * 6) + 7` can be written with the following sequence of instructions:

```js
PUSH int 2;
PUSH int 3;
ADD;
PUSH int 6;
MUL;
PUSH int 7;
ADD
```

The following schema illustrates the execution of this sequence of instructions.

![](../../static/img/michelson/michelson_tutorial_arithmetic.svg)
<small className="figure">FIGURE 4: Illustration of the arithmetic operators</small>

##### Other basic stack operators (DIG DUG)

Other instructions allows to change the position of elements in the stack such as `DIG` and `DUG`. Other stack operators are described in the "Stack operations" section.

The `DIG n` instruction moves the n-th element of the stack to the top of the stack.

![](../../static/img/michelson/michelson_instruction_dig_example.svg)
<small className="figure">FIGURE 5: Illustration of the `DIG` instruction</small>

The `DUG n` instruction moves the top element of the stack to the n-th element of the stack.

![](../../static/img/michelson/michelson_instruction_dug_example.svg)
<small className="figure">FIGURE 6: Illustration of the `DUG` instruction</small>

For example, the mathematical expression `((2 + 3) * 6) + 7` can be written also with the following sequence of instructions:

```js
PUSH int 2;
PUSH int 6;
PUSH int 3;
PUSH int 7;
DUG 3;
DIG 2;
ADD;
MUL;
ADD
```

The following schema illustrates the execution of this sequence of instructions.

![](../../static/img/michelson/michelson_tutorial_dug_dig.svg)
<small className="figure">FIGURE 7: Illustration of the `DUG` and `DIG` instructions</small>

Now that we have seen basic stack operators we are able to reorganize elements of the stack as pleased. These stack operators will be useful to prepare the stack of more complex operators that requires precise elements in a specific order on the top of the stack.


##### Conditional branching

The Michelson language provides the possibility to execute a part of the code depending on some criteria. This is called conditional branching and some instructions are provided for this intent.

For example, the `IF` instruction allows branches of execution to be created.

The `IF {} {}` instruction takes two sequences as arguments. It expects a boolean at the top element of the stack. It consumes the top element and executes the first given sequence if this boolean-top element is *True*. Otherwise it executes the second sequence.

In order to illustrate the conditional branching, let's explain the following sequence of instruction.

```js
IF 
{ PUSH int 1 }
{ PUSH int 2 }
```

This snippet of code is equivalent to the expression `if True then 1 else 2`. It checks the top element of the stack and ensures it is a boolean and consumes it. If the value of this top element is _True_ then the value 1 is pushed onto the stack otherwise value 2 is pushed. 

This other example removes one of the top elements of the stack. If the top element is a boolean _True_ then the next element is ermoved otherwise removes the one after.

```js
IF 
{ DROP }
{ SWAP; DROP }
```

The following diagrams illustrates the modification of the stack while executing the `IF { DROP }` instruction part.


![](../../static/img/michelson/michelson_tutorial_if_true.svg)
<small className="figure">FIGURE 8: Illustration of the `IF` instruction (true case)</small>

The following diagrams illustrates the modification of the stack while executing the `IF { SWAP; DROP }` instruction part.

![](../../static/img/michelson/michelson_tutorial_if_false.svg)
<small className="figure">FIGURE 9: Illustration of the `IF` instruction (false case)</small>

Obviously the conditional branching is very useful and can be combined with other instructions that set up this condition such as comparison operators. 

##### Comparison

Elements of the stack can be compared if they belongs to comparable type. For example two integer can be compared but an integer and a string cannot.

The `COMPARE` instruction compares the top two elements of the stack. It consumes the two top elements and returns an integer at the top of the stack. The returned value is -1 if the first element is smaller than the second one; 0 if the two first elements are equal; 1 otherwise.

![](../../static/img/michelson/michelson_instruction_compare_example.svg)
<small className="figure">FIGURE 9: Illustration of the `COMPARE` instruction</small>

The `EQ` instruction consumes the top element and returns ont top of the stack a boolean. It return _True_ if this value is zero, _False_ otherwise. 

The combination of the `COMPARE` and `EQ` instructions allows to create boolean conditions based on number comparison.
The following sequence verify if two numbers are equal and returns a boolean answer on top of the stack.

```js
COMPARE;
EQ
```

![](../../static/img/michelson/michelson_tutorial_compare_example.svg)
<small className="figure">FIGURE 10: Illustration of number comparison</small>

Other comparison instructions are available to check if a number is lower or equal to zero (`LE` instruction) or greater than zero (`GT` instruction). The list of comparison operators is described in the "Generic comparison" section.

##### Conditional branching based on number comparison

The combination of the `COMPARE` and `LE` and `IF` instructions allows to apply conditional branching by comparing two numbers.

The following sequence of instruction expects two integers on top of the stack and removes the smaller one.

```
DUP;
DUG 2;
SWAP;
DUP;
DUG 2;
DUG 3;
COMPARE;
LE;
IF { DROP } { SWAP; DROP }
```

Notice that the `DUP; DUG 2; SWAP; DUP; DUG 2; DUG 3` sequence duplicates the top two elements of the stack. The `COMPARE; LE` sequence determines which is the biggest number and the `IF { DROP } { SWAP; DROP }` sequence removes the smallest number.

![](../../static/img/michelson/michelson_tutorial_compare_numbers.svg)
<small className="figure">FIGURE 11: Illustration of conditional branching based on number comparison</small>

##### DIP CMPLE

This principle of duplicating the top two elements of the stack and comparing them to choose one of them is a common pattern. Some syntactic sugar (macros) has been introduced in the Michelson language so as to ease on those common patterns. 

For example the macro `CMPLE` stands for `COMPARE; LE`. A more exhaustive list is available in the "macros" section.

Notice that the duplication of the top two elements of the stack is not an optimal sequence. It is intended to be like this in order to illustrate the `DUG` instruction but some better implementation can be done with the `DIP` instruction.

The `DIP` instruction runs a provided sequence of instructions while protecting the _n_ top elements of the stack.

The `DIP` instruction takes two arguments:
- _n_: a number of elements to protect (by default 1)
- _code_: a sequence of instructions to execute

This instruction can be very useful. For example let's re-write the duplication of the top two elements of the stack with the `DIP` instruction.

The following sequence of instruction expects two integers on top of the stack and removes the smaller one.

```
DIP { DUP };
DUP;
DIP { SWAP };
CMPLE;
IF { DROP } { SWAP; DROP }
```

![](../../static/img/michelson/michelson_tutorial_compare_numbers_dip.svg)
<small className="figure">FIGURE 11: Illustration of conditional branching based on number comparison</small>

### Working with complex data structures

Since the beginning we ony used primitive types such as _int_, _nat_ and _string_. The storage of the smart contract usually stores more than just one number. Now let's take a look into composite data structures.

A composite structure integrate many fields and can organize them in many ways. 

There are 5 kind of composite data structures: 
- **binary tree** implemented with nested _PAIR_ structure
- **ordered list** of elements with type _list_
- **set** of unique elements with type _set_
- an **associative array** (a collection of key-value pairs) implemented with the type _map_
- a **union** (i.e. an exclusive composite type) implemented with nested _or_ structure.
- a **optional** implements a type holding a value which handle an unitialized state if a value hasn't been assigned. 


#### PAIR

The Michelson language introduces the _pair_ type which defines a data structure containing multiple fields. 

A _pair_ type is a tuple of 2 elements. It is possible to create nested _pair_ in order to create tuple of more than 2 elements. For example, the following nested _pair_ `PAIR (PAIR nat 5, string "Hello") int 37` contains a natural integer 5, a string "Hello" and an integer 37.

![](../../static/img/michelson/michelson_tutorial_pair.svg)
<small className="figure">FIGURE 35: Illustration of the C[AD]+R macro</small>

The _pair_ type can embbed primitive types (nat, string, int) but also other composite types such as list, map, set, lambda function or union.

##### creating and destructuring pairs

The `PAIR` instruction takes the top two elements of the stack and pushes back on top of the stack a pair containing these two elements.

The `UNPAIR` instruction takes the top element of the stack and ensures it is a _pair_ type. It pushes back on top of the stack the two elements of the _pair_.

![](../../static/img/michelson/michelson_tutorial_pair_unpair.svg)
<small className="figure">FIGURE 35: Illustration of the _PAIR_ and _UNPAIR_ instructions</small>

##### Accessing to elements of a _PAIR_

The `CAR` instruction consumes the top element of the stack (which must be a `PAIR`) and pushes back on top of the stack the left part of the pair.

![](../../static/img/michelson/michelson_instruction_car_example.svg)
<small className="figure">FIGURE 22: Illustration of the `CAR` instruction</small>

The `CDR` instruction consumes the top element of the stack (which must be a `PAIR`) and pushes back on top of the stack the right part of the pair.

![](../../static/img/michelson/michelson_instruction_cdr_example.svg)
<small className="figure">FIGURE 23: Illustration of the `CDR` instruction</small>

These `CDR` and `CAR` instructions are useful to retrieve a part of a _PAIR_. As seen in the "Smart contract" section, when invoking a smart contract, the initial stack is defined by a _PAIR_ containing the parameter of the invoked entrypoint and the current storage value.

Now that we introduced basic instructions (like `CDR` and `PAIR`) we can explain the empty contracvt seen in the "Smart contract" section.

```js
parameter unit;
storage unit;
code { CDR ;
       NIL operation ;
       PAIR };
```

![](../../static/img/michelson/michelson_smartcontract_basics.svg)
<small className="figure">FIGURE 3: Execution of `CDR ; NIL operation ; PAIR`</small>

Notice that the `CDR` instruction retrieves the right part of the initial _PAIR_. The `NIL operation` pushed an empty list of operations on top of the stack. The _PAIR_ instructions forms a _pair_ type with the empty list of operations and the initial storage.

The next section will explain the list operators (`NIL operation`).

#### LIST

The `list` type represents an ordered collection of elements of the same type. A _list_ can contain multiple occurences of the same value. For example, here is a list of integers `{ 2; 4; 5; 3; 5 }`.

##### Building a list

The `NIL 'a` instruction pushes an empty list on top of the stack. When creating a _list_ the type of list elements must be specified. For example, `NIL operation` pushes an empty list of operations on top of the stack. Similarly `NIL int` pushes an empty list of integers on top of the stack.

![](../../static/img/michelson/michelson_instruction_nillist_example.svg)
<small className="figure">FIGURE 33: Illustration of the `NIL` instruction</small>

##### Adding an element in the list

The `CONS` instruction allows to add an element at the beginning of a list. It expects an element and a list on top of the stack, consumes them and pushes back the updated _list_ on top of the stack.

![](../../static/img/michelson/michelson_instruction_cons_example.svg)
<small className="figure">FIGURE 32: Illustration of the `CONS` instruction</small>

So as to illustrate the _list_ type usage take a look at the following smart contract.

```
parameter int ;
storage (list int);
code { UNPAIR ;
       CONS;
       NIL operation ;
       PAIR }
```

The unique entrypoint of smart contract expects an integer as input (`parameter int`).
Notice that the storage of this smart contract is a list of integer declared with `(list int)`.
This smart contract concatenates the given integer at the beginning of the integer list and returns the updated list aas the new state of the storage.

This smart contract can be simulated by running the following CLI command:
```
tezos-client run script max_list.tz on storage '{1;2;5;3}' and input '12'
```

Notice that in the CLI command the integer list is specified by `{1;2;5;3}`. 

##### Removing the top element of the list

The `IF_CONS bt bf` instruction inspects a list. It requires two sequences of instructions (bt anf bf), as with the `IF` instruction.

This instruction removes the first element of the list, pushes it on top of the stack and executes the first sequence of instructions (`bt`). If the list is empty, then the second list of instructions is executed (`bf`).

This `IF_CONS` instruction allows to remove the first element of the list. The following smart contract illustrates this usage.

```
parameter unit;
storage (list int);
code { CDR ;
       IF_CONS { DROP } { FAIL };
       NIL operation ;
       PAIR }
```

Notice that the entrypoint expects a value of type `unit` (i.e. no value expected).

The smart contract can be simulated with the following CLI command:
```
tezos-client run script instruction_ifcons2.tz on storage '{1;2;5;3}' and input 'Unit'
```

Notice that the given parameter value is `Unit` of type `unit`.

##### Using list (MAP, ITER, SIZE)

Other list operators are available to apply a process on a list.

The `SIZE` instruction computes the number of elements in the list.
It consumes a list on top of the stack and pushes the number of elements of the list back on top of the stack.


The `MAP {}` instruction applies a sequence of instructions to each element of a list. The `MAP` instruction requires a sequence of instructions (i.e. called "body") which has access to the stack. 

The following smart contract illustrates the `MAP` usage. This smart contract holds a list of integer in his storage and when invoked it increments each integer of the list by 1.

```
parameter unit ;
storage (list int);
code { CDR ;
       MAP { PUSH int 1; ADD };
       NIL operation ;
       PAIR }
```

This smart contract can be simulated with the following CLI command:
```
tezos-client run script instruction_list_map.tz on storage '{1;2;5;3}' and input 'Unit'
```

The `ITER {}` instruction applies a sequence of instructions to each element of a list. The `ITER` instruction requires a sequence of instructions (called "body") which has access to the stack.

An example is described in the _Examples_ section (Example 2).


#### SET

The `set` type represents an unordered collection of elements. It preserves the uniqueness of elements inside the collection. For example, here is a set of integers `{ 2; 4; 5 }`.

##### Creation and uniqueness checking

The `EMPTY_SET 'elt` instruction builds a new empty set for elements of a given type 'elt. The 'elt type must be a comparable type (i.e. the COMPARE primitive must be defined over it).


The `MEM` instruction checks for the existence of an element in a set. It consumes an element and a set and pushes back a boolean on top of the stack.

##### Modify elements of the set

The `UPDATE` instruction inserts or removes an element in a set, replacing a previous value.

It takes the top two elements of the stack:
- an element whose type corresponds to the _set_ type
- a boolean representing the existence of this element in the _set_

If the boolean argument is _False_ then the element will be removed.

![](../../static/img/michelson/michelson_instruction_updatesetremove_example.svg)
<small className="figure">FIGURE 24: Illustration of the `UPDATE` instruction</small>

If the boolean argument is _True_ then the element will be inserted.

![](../../static/img/michelson/michelson_instruction_updatesetinsert_example.svg)
<small className="figure">FIGURE 25: Illustration of the `UPDATE` instruction</small>

The following smart contract illustrates the `UPDATE` instruction usage. This smart contract stores a set of integers and can be invoked by specifying an integer that will be inserted in the set.

```js
parameter int ;
storage (set int) ;
code { DUP ; CAR ; DIP { CDR } ;
       PUSH bool True ;
       SWAP ;
       UPDATE ;
       NIL operation ;
       PAIR }
```

You can test the smart contract with the following command:

```js
tezos-client run script set_example.tz on storage '{1; 2; 3; 9}' and input '7'
```

##### Apply process on a set

The `ITER` instruction takes a sequence of instructions (called "body") as argument. It applies a given sequence of instructions to each element of a set. The "body" sequence has access to the stack.


The `SIZE` instruction consumes a set from the top of the stack and pushes to the top the number of elements contained in the set.



#### Optional

An optional value is a data structure that can hold a value (of a given type). The optional value has two states: it is defined as `NONE` if no value is assigned and can be defined as `SOME` if a value has been assigned.

When defining an optional value, the type of value must be specified.

The `SOME` instruction packs a value as an optional value.

The `NONE` instruction specifies the absence of value. It requires that the type of value that can be held be specified.



##### Using optional

The `IF_NONE bt bf` instruction inspects an optional value.
It requires two sequences of instructions, as with an `IF` instruction.
It executes the first sequence if the optional value has no value assigned, otherwise it executes the second sequence of instructions (where a value has been assigned with a `SOME` instruction).

If the `IF_NONE` instruction encounters a NONE value it consumes it and then start executing the first sequence.  
If the `IF_NONE` instruction encounters a SOME value it does not consumes it and then start executing the second sequence.

![](../../static/img/michelson/michelson_instruction_ifnone_none_example.svg)
<small className="figure">FIGURE 25: Illustration of the `IF_NONE` instruction</small>

![](../../static/img/michelson/michelson_instruction_ifnone_some_example.svg)
<small className="figure">FIGURE 26: Illustration of the `IF_NONE` instruction</small>



#### MAP

A `map` is an associative array. It stores many pairs of key-value elements, i.e. it binds a key and a value. Type definitions of key and value must be defined when instantiating a new `map`.

The `map` data structure can only contain a limited amount of data. When using big and complex types as values, it is recommended to use the `big_map` data structure.

##### Building a map

The `EMPTY_MAP 'key 'val` instruction builds a new empty map. It requires the type definition of the key (_'key_) and type definition of the value (_'val_).

The _'key_ type must be comparable (the COMPARE primitive must be defined over it).

The `EMPTY_BIG_MAP` instruction builds a new empty `big_map` data structure.

##### Checking existence of a binding for key

The `MEM` instruction checks for the existence of a binding for a key in a map.

It expects a key and a map on top of the stack and and puhshes back a boolean on top of the stack.


##### Modifying a map

The `UPDATE` instruction adds or removes an element in a map.

The `UPDATE` instruction expects a key, an optional value and a map on top of the stack. It consumes the key and the optional value and modifies the map accordingly.

If the optional value is defined as `None`, then the element is removed from the map. The following smart contract (map_remove_example.tz) illustrates the `UPDATE` usage while removing an element from the map.

```js
parameter string ;
storage (map string int) ;
code { DUP ; CAR ; DIP { CDR } ;
       NONE int ;
       SWAP ;
       UPDATE ;
       NIL operation ;
       PAIR }
```

This smart contract can be tested with the following command:

```js
tezos-client run script map_remove_example.tz on storage '{ Elt "toto" 1 }' and input '"toto"'
```

![](../../static/img/michelson/michelson_instruction_mapremove_example.svg)
<small className="figure">FIGURE 27: Illustration of the `UPDATE` instruction</small>

If the optional value is defined as `Some` then the element is insert into the map. The following smart contract (map_insert_example.tz) illustrates the `UPDATE` usage while inserting an element into the map.

```js
parameter string ;
storage (map string int) ;
code { DUP ; CAR ; DIP { CDR } ;
       PUSH int 2;
       SOME ;
       SWAP ;
       UPDATE ;
       NIL operation ;
       PAIR }
```

This smart contract can be tested with the following command.

```js
tezos-client run script map_insert_example.tz on storage '{ Elt "toto" 1 }' and input '"tutu"'
```

![](../../static/img/michelson/michelson_instruction_mapinsert_example.svg)
<small className="figure">FIGURE 28: Illustration of the `UPDATE` instruction</small>

#### Accessing element of a map

The `GET` instruction allows to access to an element inside a map. It returns an optional value to be checked with an `IF_SOME` instruction.

The following smart contract illustrates the usage of `GET`. The storage of this contract defines a map. This smart contract takes a key as the parameter and inserts a new element in the map if the key does not exist. In this case it assigns value 0 to the given key. Otherwise if the map possesses an element for the given key then it increments its associated value.

```js
parameter string ;
storage (map string int) ;
code { DUP ;
       CAR ;
       DIP { CDR } ;
       DIP { DUP } ;
       DUP ;
       DIP { SWAP } ;
       GET ;
       IF_NONE { PUSH int 0 ; SOME } { PUSH int 1 ; ADD ; SOME } ;
       SWAP ;
       UPDATE ;
       NIL operation ;
       PAIR }
```

This smart contract can be simulated with the following commands:

```js
tezos-client run script map_example.tz on storage '{}' and input '"toto"'
```

```js
tezos-client run script map_example.tz on storage '{ Elt "toto" 5 }' and input '"toto"'
```

Notice that `{}` represents an empty map and `{ Elt "toto" 5 }` a map containing one element where "toto" is the key and its associated value is 5.

##### Applying some process on a map

The `SIZE` instruction computes the number of elements inside a map. It consumes a map on top of the stack and places the number of elements on top of the stack.

The `SIZE` instruction cannot be applied to `big_map` type. 


The `MAP` instruction applies a sequence of instructions to each element of a map. It takes a sequence of instructions as argument (called "body"). This "body" sequence has access to the stack.

```js
MAP body / {} : S  =>  {} : S
MAP body / { Elt k v ; <tl> } : S  =>  { Elt k v' ; <tl'> } : S''
    where body / Pair k v : S  =>  v' : S'
    and MAP body / { <tl> } : S'  =>  { <tl'> } : S''
```

The following smart contract (map_map_example.tz) illustrates the `MAP` usage. This smart contract stores a `map string nat` and when invoked it goes through all key-value elements of the map and multiplies by 2 the `nat` value.

```js
parameter unit ;
storage (map string nat) ;
code {
       CDR ;
       MAP { CDR ; PUSH nat 2 ; MUL }  ;
       NIL operation ;
       PAIR }
```

The smart contract can be simulated with the following command.

```js
tezos-client run script map_map_example.tz on storage '{ Elt "toto" 1 ; Elt "tutu" 4 }' and input Unit
```

##### Iterating on a map

The `ITER body` instruction applies a sequence of instructions (called "body") to each element of a map. The "body" sequence has access to the stack.

```js
ITER body / {} : S  =>  S
ITER body / { Elt k v ; <tl> } : S  =>  ITER body / { <tl> } : S'
   iff body / (Pair k v) : S  =>  S'
```

An example ("Max list") illustrating `ITER` instruction usage is described in the _Examples_ section. Despite being applied to a list of integers, the `ITER` instruction works in the same way with a map (except at each iteration a _pair_ key-value is pushed on the stack instead of an integer, as in the example "Max list").

#### Union

The `union` data structure specifies two possible type definitions with logical _or_. It can be used to create a new type which can handle two different types exclusively.

For example, the following Michelson expression defines the type "int_or_nat" as:

```js
or int nat
```

The logical _or_ operator has 2 branhces a left part and a right part. It is possible to form nested _or_ structure in order to combine more than 2 types. For example, the type `string_or_int_or_nat` would be defined by 
```
or (or (int) (nat)) (string)
```

The **parameter** of the smart contract is a _union_ of all possible entrypoints of the smart contract. For example, `parameter (or (or (nat %add) (nat %sub)) (unit %default))` defines the parameter of a smart contract as a union of three entrypoints (add, sub, default). Each entrypoint specifies the expected argument type (e.g. "add" entrypoint expects an integer).

Notice that when using a nested _or_ structure for the parameter of the smart contract, each entrypoint requires an annotation ("%add", "%sub") which is not the case for regular _union_ such as `string_or_int_or_nat`.


##### LEFT & RIGHT

When using _union_ type it is necessary to respect the strict typing of the Michelson language.
For example, let's consider the type _int_or_nat_ defined as `or int nat`. A single integer value cannot be held in a _int_or_nat_ type. It has to be "cast" in a logical _or_ structure. The `LEFT` and `RIGHT` operators are provided by the Michelson language to form logical _or_ structures based on a single value. Obviously the type of the given value can be deduced but the other possible type of the _or_ must be specified. 


The `LEFT p` instruction takes the top-element of the stack and produces a *union*. 
The top-element is placed in the right branch of the `or` structure and the left branch is typed with the given `p` argument.

It consumes a type definition on top of the stack and pushes a union where the left part is defined as the consumed type definition.

![](../../static/img/michelson/michelson_instruction_left.svg)
<small className="figure">FIGURE 28: Illustration of the `LEFT` instruction</small>

Illustration of `LEFT` usage can be seen in the examples section.


The `RIGHT p` instruction takes the top-element of the stack and produces a *union*. 
The top-element is placed in the left branch of the `or` structure and the right branch is typed with the given `p` argument.

It consumes a type definition on top of the stack and pushes a union where the right part is defined as the consumed type definition.

![](../../static/img/michelson/michelson_instruction_right.svg)
<small className="figure">FIGURE 28: Illustration of the `RIGHT` instruction</small>

Illustration of `RIGHT` usage can be seen in the examples section.

#### IF_LEFT

The `IF_LEFT` instruction inspects a value of *union*. It requires two sequences of instructions (bt bf), like with an `IF` instruction. 

The `IF_LEFT bt bf` executes the "bt" sequence if the left part of a *union* has been given, otherwise it will execute the "bf" sequence.

The instruction consumes a Michelson expression on top of the stack which specifies which part of the *union* has been defined.

```js
IF_LEFT bt bf / (Left a) : S  =>  bt / a : S
IF_LEFT bt bf / (Right b) : S  =>  bf / b : S
```

The following smart contract (union_example.tz) illustrates the `IF_LEFT` usage. Notice that the parameter is a *union* `(or string int)` and the storage is an integer. This smart contract increments the storage if an integer is passed as parameter (i.e. if the smart contract is invoked with an integer) and does nothing if a string is given.

```js
parameter (or string int) ;
storage int ;
code { DUP ; CAR ; DIP { CDR } ;
       IF_LEFT { DROP } { ADD } ;
       NIL operation ;
       PAIR }
```

To illustrate the invocation of the smart contract, we will break down its execution.

The following command simulates the execution of the smart contract when called with an integer.

```js
tezos-client run script union_example.tz on storage '5' and input 'Right 1'
```

![](../../static/img/michelson/michelson_instruction_ifleft_right_example.svg)
<small className="figure">FIGURE 30: Illustration of the `IF_LEFT` instruction</small>

The following command simulates the execution of the smart contract when called with a string.

```js
tezos-client run script union_example.tz on storage '5' and input 'Left "Hello"'
```

![](../../static/img/michelson/michelson_instruction_ifleft_left_example.svg)
<small className="figure">FIGURE 31: Illustration of the `IF_LEFT` instruction</small>





### Contract specific
#### timestamp
#### mutez
#### bytes

### Contract communication
#### TRANSFER_TOKENS
#### contract interface (invocation)
#### contract creation

### Lambda
#### Lambda definition
#### Lambda execution

### Iterative processing
#### ITER on LIST SET MAP
#### LOOP
#### LOOP_LEFT

