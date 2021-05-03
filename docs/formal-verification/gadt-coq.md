---
id: gadt
title: GADT and Coq
slug: /formal-verification
---


L'analyse formelle -> domaine specifique des mathématiques

Deduction naturelle => logique de premier ordre, logique de second ordre
Rappel sur la logique [10].

### ADT (Algebra of datatype) ... monad, monoid

PRODUCT monoid = 
- reflexive (not really but up to an isomorphism) = swap
- associativity (assoc) => multiplication of data types is associative
- element neutre (unit) => (a,())   

SUM monoid = 
reflexive = Either a b ~ Either b a 
unit = Either a Void ~ a (there is no element in the set Void)
(a, Void) ~ Void ===> equivalent to (a * 0 = 0)
associative = (a,Either(b,c)) ~ Either (a,b) (a,c)  ===> equivalent to (a * (b + c) = a*b + a*c)

WARNING they are not inversible ... there is no inverse of Integers

MAYBE a = Nothing | Just a
        = Either () a


L(a) = 1 + a * L(a)
L(a) = 1 / (1 - a)
L(a) = 1 + a + a*a + a*a*a + ..... 
     = sum [n=0 to k] a^n
data List a = Nil | Cons a (List a)

can define as a Fixpoint





In computer programming, especially functional programming and type theory, an algebraic data type is a kind of composite type, i.e., a type formed by combining other types.

Two common classes of algebraic types are product types (i.e., tuples and records) and sum types (i.e., tagged or disjoint unions, coproduct types or variant types).[1]

The values of a product type typically contain several values, called fields. All values of that type have the same combination of field types. The set of all possible values of a product type is the set-theoretic product, i.e., the Cartesian product, of the sets of all possible values of its field types.

The values of a sum type are typically grouped into several classes, called variants. A value of a variant type is usually created with a quasi-functional entity called a constructor. Each variant has its own constructor, which takes a specified number of arguments with specified types. The set of all possible values of a sum type is the set-theoretic sum, i.e., the disjoint union, of the sets of all possible values of its variants. Enumerated types are a special case of sum types in which the constructors take no arguments, as exactly one value is defined for each constructor. 



GADT - > Inductive type of Coq


Coq univers

