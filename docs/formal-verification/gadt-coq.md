---
id: gadt
title: GADT and Coq
slug: /formal-verification
---


//TODO
Deduction naturelle => logique de premier ordre, logique de second ordre
Rappel sur la logique [10].

## Type theory

In mathematics, logic, and computer science, a type system is a formal system in which every term has a "type" which defines its meaning and the operations that may be performed on it. **Type theory** is the academic study of type systems.

Some type theories serve as alternatives to set theory as a foundation of mathematics. Two well-known such theories are _Alonzo Church's typed λ-calculus_ and _Per Martin-Löf's intuitionistic type theory_. 

Type theory is closely linked to many fields of active research. Most particular, the Curry–Howard correspondence provides a deep isomorphism between intuitionistic logic, typed lambda calculus and cartesian closed categories. 



### Category theory

Category theory formalizes mathematical structure and its concepts in terms of a labeled directed graph called a category, whose nodes are called objects, and whose labelled directed edges are called _arrows_ (or morphisms). A category has two basic properties: the ability to compose the arrows associatively, and the existence of an identity arrow for each object. The language of category theory has been used to formalize concepts of other high-level abstractions such as _sets_, _rings_, and _groups_. Informally, category theory is a general theory of functions. 

The common usage of "type theory" is when those types are used with a term rewrite system. The most famous early example is Alonzo Church's simply typed lambda calculus. Church's theory of types helped the formal system avoid the Kleene–Rosser paradox that afflicted the original untyped lambda calculus. Church demonstrated that it could serve as a foundation of mathematics and it was referred to as a **higher-order logic**.

In **category theory**, a category is **Cartesian closed** if, roughly speaking, any morphism defined on a product of two objects can be naturally identified with a morphism defined on one of the factors. These categories are particularly important in mathematical logic and the theory of programming, in that their internal language is the **simply typed lambda calculus**. They are generalized by closed monoidal categories, whose internal language, linear type systems, are suitable for both quantum and classical computation.

 Here is an embedding of the **simply typed lambda calculus** with an arbitrary collection of base types, tuples and a fixed point combinator: 

```js
data Lam :: * -> * where
  Lift :: a                     -> Lam a        // lifted value
  Pair :: Lam a -> Lam b        -> Lam (a, b)   // product
  Lam  :: (Lam a -> Lam b)      -> Lam (a -> b) // lambda abstraction
  App  :: Lam (a -> b) -> Lam a -> Lam b        // function application
  Fix  :: Lam (a -> a)          -> Lam a        // fixed point
```


### Monad

In category theory, a monad (also triple, triad, standard construction and fundamental construction)[ is an endofunctor (a functor mapping a category to itself), together with two natural transformations required to fulfill certain coherence conditions. Monads are used in the theory of pairs of adjoint functors, and they generalize closure operators on partially ordered sets to arbitrary categories. 

In functional programming, a **monad** is an abstraction that allows structuring programs generically. Supporting languages may use monads to abstract away boilerplate code needed by the program logic. Monads achieve this by providing their own data type (a particular type for each type of monad), which represents a specific form of computation, along with two procedures:

- One to wrap values of any basic type within the monad (yielding a **monadic value**);
- Another to compose functions that output monadic values (called **monadic functions**)

This allows monads to simplify a wide range of problems, like handling potential undefined values (with the Maybe monad), or keeping values within a flexible, well-formed list (using the List monad). With a monad, a programmer can turn a complicated sequence of functions into a succinct pipeline that abstracts away auxiliary data management, control flow, or side-effects.

Both the concept of a monad and the term originally come from **category theory**, where a monad is defined as a functor with additional structure. Category theory also provides a few formal requirements, known as the monad laws, which should be satisfied by any monad and can be used to verify monadic code.



### GADT

Generalized algebraic data type (GADT) is a generalization of parametric algebraic data types.
An important application of GADTs is to embed **higher-order abstract syntax** in a type safe fashion.

In computer science, **higher-order abstract syntax** (abbreviated HOAS) is a technique for the representation of abstract syntax trees for languages with variable binders. 

This article [8] describes how to define a **higher-order abstract syntax** in Coq (i.e. defining axioms, and inductive types). 

#### ADT

In computer programming, especially functional programming and type theory, an **algebraic data type** is a kind of composite type, i.e., a type formed by combining other types.

Two common classes of algebraic types are product types (i.e., tuples and records) and sum types (i.e., tagged or disjoint unions, coproduct types or variant types).

The values of a product type typically contain several values, called fields. All values of that type have the same combination of field types. The set of all possible values of a product type is the set-theoretic product, i.e., the Cartesian product, of the sets of all possible values of its field types.

The values of a sum type are typically grouped into several classes, called variants. A value of a variant type is usually created with a quasi-functional entity called a constructor. Each variant has its own constructor, which takes a specified number of arguments with specified types. The set of all possible values of a sum type is the set-theoretic sum, i.e., the disjoint union, of the sets of all possible values of its variants. Enumerated types are a special case of sum types in which the constructors take no arguments, as exactly one value is defined for each constructor. 


The ADT defines two monoids (PRODUCT and SUM) describing possible operations on Data type. It defines the algebra on data types. A monoid requires to define reflexivity, associativity and neutral element. Obviously ADT defines monoid an not RING because there is no inverse of Integers ! The ADT is also classified as a semi RING.

PRODUCT monoid = 
- reflexive (not really but up to an isomorphism) = swap
- associativity (assoc) => multiplication of data types is associative
- element neutre (unit) => (a,())   

SUM monoid = 
- reflexive = Either a b ~ Either b a 
- unit = Either a Void ~ a (there is no element in the set Void)
- (a, Void) ~ Void ===> equivalent to (a * 0 = 0)
- associative = (a,Either(b,c)) ~ Either (a,b) (a,c)  ===> equivalent to (a * (b + c) = a*b + a*c)

for example we can create the Maybe monad.

```
MAYBE a = Nothing | Just a
        = Either () a
```


We can define a List 
```
data List a = Nil | Cons a (List a)
```

We can consider the L function as:
```
L(a) = 1 + a * L(a)
```

or
```
L(a) = 1 / (1 - a)
```

Using "developpement limité" we can write:
```
L(a) = 1 + a + a*a + a*a*a + ..... 
L(a) = sum [n=0 to k] a^n
```
this value can be defined by a Fixpoint.

A fixed point of a function is a value that is mapped to itself by the function. In combinatory logic for computer science, a fixed-point combinator (or fixpoint combinator) is a higher-order function _fix_ that returns some fixed point of its argument function, if one exists.


#### Coq

Some other type theories include Per Martin-Löf's intuitionistic type theory, which has been the foundation used in some areas of constructive mathematics. Thierry Coquand's calculus of constructions and its derivatives are the foundation used by **Coq**.

GADT is similar to inductive families of data types (or inductive datatypes) found in Coq's Calculus of Inductive Constructions.



//TODO
Coq
Développé par l’INRIA, Coq [2] est un moteur de preuve formelle; c’est-à-dire un logiciel permettant l'écriture et la vérification de preuves mathématiques, soit sur des théorèmes au sens usuel des mathématiques, soit sur des assertions relatives à l'exécution de programmes informatiques.
Initialement développé par Thierry Coquand, le calcul des constructions [13] (CoC de l'anglais Calculus Of Constructions) est un lambda-calcul (un système formel) typé d'ordre supérieur. Le CoC est utilisé comme langage typé de programmation. Plusieurs variantes de CoC ont été créées pour pouvoir gérer les type de données inductives, co-inductives et prédicats.
Le calcul des constructions inductives (CiC de l’anglais Calculus of Inductive Constructions) est une extension du CoC qui intègre des types de données inductives. 
L’assistant de preuve Coq est construit à partir de CiC. 
Les objets logiques (théorème, axiome) sont écrits en langage Gallina (Term) qui suit les principes du Cic. Les scripts de preuve sont écrits en langage Gallina (Vernaculaire) qui fournit les tactics. Ces script de preuve sont exécutés par le moteur d’inférence (Coq).   
Pour plus d’information sur Coc ou Cic, il est conseillé de consulter les références [13][16]. Il est nécessaire de connaître le lambda-calcul [17] pour comprendre les notations mathématiques utilisées dans CoC ou Cic.




