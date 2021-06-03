(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[2409],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},209:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),s={id:"smart-contracts",title:"Smart contracts",authors:"Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez"},i={unversionedId:"tezos-basics/smart-contracts",id:"tezos-basics/smart-contracts",isDocsHomePage:!1,title:"Smart contracts",description:"In this chapter, you will learn the Tezos smart contracts basics. Their components and the workflow to record and use them on the Tezos blockchain.",source:"@site/docs/tezos-basics/smart-contracts.md",sourceDirName:"tezos-basics",slug:"/tezos-basics/smart-contracts",permalink:"/tezos-basics/smart-contracts",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/tezos-basics/smart-contracts.md",version:"current",lastUpdatedBy:"ThomasZoughebi",lastUpdatedAt:1620414626,formattedLastUpdatedAt:"5/7/2021",frontMatter:{id:"smart-contracts",title:"Smart contracts",authors:"Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez"},sidebar:"docs",previous:{title:"Introduction",permalink:"/tezos-basics"},next:{title:"Liquid Proof-of-Stake",permalink:"/tezos-basics/liquid-proof-of-stake"}},c=[{value:"General definition of a Tezos smart contract",id:"general-definition-of-a-tezos-smart-contract",children:[]},{value:"Lifecycle of a Tezos smart contract",id:"lifecycle-of-a-tezos-smart-contract",children:[{value:"Deployment of a Tezos smart contract",id:"deployment-of-a-tezos-smart-contract",children:[]},{value:"Code of a Tezos smart contract",id:"code-of-a-tezos-smart-contract",children:[]},{value:"Storage of a Tezos smart contract",id:"storage-of-a-tezos-smart-contract",children:[]},{value:"Call of a Tezos smart contract",id:"call-of-a-tezos-smart-contract",children:[]}]},{value:"High-level languages for Tezos smart contracts implementations",id:"high-level-languages-for-tezos-smart-contracts-implementations",children:[]},{value:"Smart contracts versioning",id:"smart-contracts-versioning",children:[{value:"Map pattern",id:"map-pattern",children:[]},{value:"Lambda pattern",id:"lambda-pattern",children:[]},{value:"Data-Proxy pattern",id:"data-proxy-pattern",children:[]}]},{value:"What have we learned so far?",id:"what-have-we-learned-so-far",children:[]}],l={toc:c};function p(e){var t=e.components,s=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this chapter, you will learn the Tezos smart contracts basics. Their components and the workflow to record and use them on the Tezos ",(0,o.kt)("em",{parentName:"p"},"blockchain"),"."),(0,o.kt)("h2",{id:"general-definition-of-a-tezos-smart-contract"},"General definition of a Tezos smart contract"),(0,o.kt)("p",null,"A smart contract is a code stored inside the ",(0,o.kt)("em",{parentName:"p"},"blockchain"),". It executes a set of pre-defined instructions (promises). Once deployed (stored), it becomes ",(0,o.kt)("strong",{parentName:"p"},"immutable"),". A smart contract is deployed using a ",(0,o.kt)("strong",{parentName:"p"},"transaction"),", so we embed spending conditions inside it, which are ",(0,o.kt)("strong",{parentName:"p"},"immutable"),". Though for smart contracts, the key difference is a user ",(0,o.kt)("em",{parentName:"p"},"can trigger the execution of the code without modifying it. Therefore without moving it to another transaction or block"),". It stays where it has been stored ",(0,o.kt)("strong",{parentName:"p"},"forever"),". Tezos doesn't use an ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unspent_transaction_output"},"UTXO model"),' (no "',(0,o.kt)("em",{parentName:"p"},"vaults"),'", see ',(0,o.kt)("em",{parentName:"p"},"Blockchain Basics"),") but a ",(0,o.kt)("strong",{parentName:"p"},"stateful accounts")," one."),(0,o.kt)("p",null,"Like in Ethereum, Tezos uses 2 types of accounts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Classic accounts with a primary address, simply storing tez (\ua729) coins"),(0,o.kt)("li",{parentName:"ol"},"Smart contract accounts with an address, storing code and tez (\ua729) coins")),(0,o.kt)("p",null,'Though in Tezos vocabulary though, "',(0,o.kt)("em",{parentName:"p"},"contracts"),'" refers to both types in general. Actually each ',(0,o.kt)("em",{parentName:"p"},"contract"),' has a "',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"manager")),'". Precisely, a classic account has an "',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"owner")),'". If a contract has the "',(0,o.kt)("em",{parentName:"p"},"spendable"),'" property, the manager is the entity allowed to spend funds from it.'),(0,o.kt)("p",null,"Smart contracts can achieve different kinds of operations with coins and ",(0,o.kt)("em",{parentName:"p"},"other smart contracts"),". They're comparable to ",(0,o.kt)("em",{parentName:"p"},"automatic")," ",(0,o.kt)("strong",{parentName:"p"},"sealed")," food and drink dispensers from the same company:",(0,o.kt)("br",{parentName:"p"}),"\n",'Each machine has a contract saying "',(0,o.kt)("em",{parentName:"p"},"Give me cryptocurrency, then I give you food or drink"),"\". Each machine can have a different smart contract for various foods or drinks, and there could be another smart contract gathering the cryptocurrency total for the company. Each machine doesn't operate until enough currency is delivered (",(0,o.kt)("em",{parentName:"p"},"Gas"),"). Note that the ",(0,o.kt)("strong",{parentName:"p"},"quantities")," of foods or drinks change while their ",(0,o.kt)("strong",{parentName:"p"},"types")," can't (ever)."),(0,o.kt)("p",null,"Of course, smart contracts like the Tezos ones go beyond this metaphor. Thanks to ",(0,o.kt)("em",{parentName:"p"},"transparency")," and ",(0,o.kt)("em",{parentName:"p"},"immutability"),", they allow an ",(0,o.kt)("strong",{parentName:"p"},"agreement"),' to be secured between two or more parties. In this context, the concept of "',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lawrence_Lessig#%22Code_is_law%22"},"Code is Law"),'" from ',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lawrence_Lessig"},(0,o.kt)("em",{parentName:"a"},"Lawrence Lessig"))," is very appropriate."),(0,o.kt)("p",null,"For example, it is common to create financial instruments like various ",(0,o.kt)("em",{parentName:"p"},"tokens")," (usually worth a fraction of the blockchain's ",(0,o.kt)("em",{parentName:"p"},"coin"),") with different usability and characteristics inside a multiple smart contracts system. Other more or less complex projects can propose ",(0,o.kt)("em",{parentName:"p"},"lending"),", ",(0,o.kt)("em",{parentName:"p"},"stablecoins"),", or ",(0,o.kt)("em",{parentName:"p"},"crowdfundings"),"."),(0,o.kt)("p",null,"In most cases, smart contracts remove ",(0,o.kt)("em",{parentName:"p"},"intermediate")," and drastically reduce costs compared to classic paper contracts and their validations."),(0,o.kt)("p",null,"Notice that like any other, a Tezos smart contract can only run on and interact with the blockchain it's stored in (Bitcoin's smart contracts are exceptions here). It can't interact with the outside world. That's where ",(0,o.kt)("em",{parentName:"p"},"decentralized applications"),' or "',(0,o.kt)("em",{parentName:"p"},"Dapps"),'" come in because they provide interfaces for the outside world.'),(0,o.kt)("p",null,"To build your own Dapp, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/dapp"},(0,o.kt)("em",{parentName:"a"},"Build a Dapp"))," module."),(0,o.kt)("h2",{id:"lifecycle-of-a-tezos-smart-contract"},"Lifecycle of a Tezos smart contract"),(0,o.kt)("p",null,"As we saw, a smart contract can only be deployed once but can be called many times. The Tezos smart contract lifecycle steps are two:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deployment"),(0,o.kt)("li",{parentName:"ol"},"Interactions through calls")),(0,o.kt)("h3",{id:"deployment-of-a-tezos-smart-contract"},"Deployment of a Tezos smart contract"),(0,o.kt)("p",null,'The deployment of a Tezos smart contract is named "',(0,o.kt)("strong",{parentName:"p"},"origination"),'".'),(0,o.kt)("p",null,"When a smart contract is deployed, an ",(0,o.kt)("strong",{parentName:"p"},"address")," and a corresponding ",(0,o.kt)("em",{parentName:"p"},"persistent space"),' called "',(0,o.kt)("strong",{parentName:"p"},"storage"),'" are allocated to this smart contract. The smart contract address is like its ',(0,o.kt)("em",{parentName:"p"},"identity")," and ",(0,o.kt)("em",{parentName:"p"},"where")," it lives on the ledger. Its storage is its ",(0,o.kt)("em",{parentName:"p"},"usable space")," inside itself. The smart contract is inside the blockchain. The storage is inside the smart contract."),(0,o.kt)("p",null,"A smart contract deployment also defines its ",(0,o.kt)("em",{parentName:"p"},"entrypoints"),'. These are special functions used to dispatch invocations of the smart contract. Each entrypoint is in charge of triggering an instruction (see below "',(0,o.kt)("em",{parentName:"p"},"Call of a Tezos smart contract"),'").'),(0,o.kt)("p",null,"Once deployed, anyone or ",(0,o.kt)("em",{parentName:"p"},"anything")," can call the smart contract (e.g. other contracts) with a transaction sent to its address and entrypoints. This call triggers the execution of the set of pre-defined instructions (promises)."),(0,o.kt)("p",null,"The origination of a Tezos smart contract must define its:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Entrypoints")," (functions where it receives calls)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Set of instructions")," in the low-level ",(0,o.kt)("em",{parentName:"li"},"Michelson")," language")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4010).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 1: Content of a Tezos smart contract"),(0,o.kt)("h3",{id:"code-of-a-tezos-smart-contract"},"Code of a Tezos smart contract"),(0,o.kt)("p",null,"The code of a smart contract is a sequence of Michelson instructions. Calls to the smart contract execute these instructions."),(0,o.kt)("p",null,"The execution of this sequence of instructions results in a modification of the ",(0,o.kt)("em",{parentName:"p"},"storage"),' content, or storage "',(0,o.kt)("strong",{parentName:"p"},"state"),'". The sequence defines how to modify this state.'),(0,o.kt)("p",null,"You can find the full description of the Michelson language in the ",(0,o.kt)("a",{parentName:"p",href:"/michelson"},"Michelson module"),"."),(0,o.kt)("h3",{id:"storage-of-a-tezos-smart-contract"},"Storage of a Tezos smart contract"),(0,o.kt)("p",null,"During the origination, the process must specify the storage ",(0,o.kt)("strong",{parentName:"p"},"initial state"),".\nIf needed for operations, calling transactions' fees pay for the allocation of extra storage space."),(0,o.kt)("p",null,"For more details, check out the ",(0,o.kt)("a",{parentName:"p",href:"/tezos-basics/economics_and_reward"},'"',(0,o.kt)("em",{parentName:"a"},"Fees and Rewards"),'"')," chapter."),(0,o.kt)("h3",{id:"call-of-a-tezos-smart-contract"},"Call of a Tezos smart contract"),(0,o.kt)("p",null,'A smart contract can be called by a classic account whose address starts with "',(0,o.kt)("strong",{parentName:"p"},"tz1"),'" or by a smart contract\'s account whose address begins with "',(0,o.kt)("strong",{parentName:"p"},"KT1"),'". The transaction specifies ',(0,o.kt)("em",{parentName:"p"},"arguments")," and to which ",(0,o.kt)("em",{parentName:"p"},"entrypoint")," they are sent."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5347).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 2: Call of a smart contract triggering its code and modifying its storage's state"),(0,o.kt)("p",null,'One can use the Command Line Interface (CLI) provided by Tezos to interact with a node and make calls. The "',(0,o.kt)("inlineCode",{parentName:"p"},"tezos-client"),'" application allows anyone to deploy and call Tezos smart contracts.'),(0,o.kt)("p",null,"The Remote Procedure Call (RPC) also provides ways to send requests to a Tezos node via HTTP (more details in ",(0,o.kt)("a",{parentName:"p",href:"/tezos-basics/introduction_to_cli_and_rpc"},'"',(0,o.kt)("em",{parentName:"a"},"RPC and CLI"),'"')," chapter)."),(0,o.kt)("p",null,'The CLI command "',(0,o.kt)("inlineCode",{parentName:"p"},"tezos-client originate"),'" is used to deploy a Tezos smart contract. Arguments are the following:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name of the smart contract"),(0,o.kt)("li",{parentName:"ul"},"Michelson script containing: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Entrypoints"),(0,o.kt)("li",{parentName:"ul"},"Storage type"),(0,o.kt)("li",{parentName:"ul"},"Set of instructions"))),(0,o.kt)("li",{parentName:"ul"},"Initial storage value"),(0,o.kt)("li",{parentName:"ul"},"Amount of tez sent to the smart contract"),(0,o.kt)("li",{parentName:"ul"},"(optional) Address of a delegate")),(0,o.kt)("p",null,"The command returns the newly deployed contract's address (more detail in the ",(0,o.kt)("a",{parentName:"p",href:"/tezos-basics/introduction_to_cli_and_rpc"},'"',(0,o.kt)("em",{parentName:"a"},"RPC and CLI"),'"')," chapter)."),(0,o.kt)("h2",{id:"high-level-languages-for-tezos-smart-contracts-implementations"},"High-level languages for Tezos smart contracts implementations"),(0,o.kt)("p",null,"Michelson is a low-level stack-based language. Therefore its adoption is quite limited because most developers won't take time to learn it. Many Michelson ",(0,o.kt)("em",{parentName:"p"},"compilers")," have been developed to avoid this friction and led to many high-level languages closer to developers habits: ",(0,o.kt)("a",{parentName:"p",href:"/smartpy"},(0,o.kt)("em",{parentName:"a"},"SmartPy"))," (inspired by ",(0,o.kt)("em",{parentName:"p"},"Python"),"); ",(0,o.kt)("a",{parentName:"p",href:"/ligo"},(0,o.kt)("em",{parentName:"a"},"LIGO"))," (inspired by ",(0,o.kt)("em",{parentName:"p"},"Camel")," and ",(0,o.kt)("em",{parentName:"p"},"Pascal"),"); or ",(0,o.kt)("a",{parentName:"p",href:"https://serokell.io/project-morley"},(0,o.kt)("em",{parentName:"a"},"Morley"))," (framework)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8090).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 3: Deployment and call of a Tezos smart contract with high-level languages."),(0,o.kt)("h2",{id:"smart-contracts-versioning"},"Smart contracts versioning"),(0,o.kt)("p",null,"You need to remember the code of a smart contract is ",(0,o.kt)("strong",{parentName:"p"},"immutable"),". Only evolve the storage size and state. Hence, to handle smart contracts versioning, you should keep in mind ",(0,o.kt)("strong",{parentName:"p"},"implementations structures")," allowing transfer of information ",(0,o.kt)("strong",{parentName:"p"},"from old contracts to new contracts"),"."),(0,o.kt)("p",null,"Hopefully, the above high-level languages make this kind of complex implementation easier. We will present to you three patterns to build evolutive smart contracts or ",(0,o.kt)("em",{parentName:"p"},"Dapps"),"."),(0,o.kt)("h3",{id:"map-pattern"},"Map pattern"),(0,o.kt)("p",null,'The idea of this pattern is to make a smart contract storage more dynamic. We put key data inside a table or "data mapping". This mapping or "map" makes a classic "Key / Value" association between two data types. What\'s interesting here, like in an ',(0,o.kt)("em",{parentName:"p"},"array"),", is that it's evolutive, even in the storage. Of course, the data types are fixed, but it is possible to add or remove pairs or change a ",(0,o.kt)("em",{parentName:"p"},"value")," associated with the same ",(0,o.kt)("em",{parentName:"p"},"key"),"."),(0,o.kt)("p",null,"For example, it is common to define a ",(0,o.kt)("em",{parentName:"p"},"map")," of users in a DAO, so the users' list can change following various organization's rules. The same users aren't carved in stone forever."),(0,o.kt)("p",null,"Note that even if a value or pair is deleted from a map, the blockchain ledger keeps the complete history of its state.",(0,o.kt)("br",{parentName:"p"}),"\n","In the DAO example, a user would be able to quit but you'd still find his trace exploring the past blocks."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6754).Z}),"  "),(0,o.kt)("small",{className:"figure"},"FIGURE 4: ",(0,o.kt)("i",null,"Map pattern")," illustration."),(0,o.kt)("h3",{id:"lambda-pattern"},"Lambda pattern"),(0,o.kt)("p",null,"The Lambda pattern is based on ",(0,o.kt)("em",{parentName:"p"},"lambda functions"),". These anonymous functions only have a mandatory ",(0,o.kt)("em",{parentName:"p"},"type")," (function!); non-mandatory ",(0,o.kt)("em",{parentName:"p"},"parameters"),"; and non-mandatory ",(0,o.kt)("em",{parentName:"p"},"return values"),". The idea is to exchange the ",(0,o.kt)("strong",{parentName:"p"},"body")," of a classic function with a ",(0,o.kt)("strong",{parentName:"p"},"lambda function"),". While the classic function is immutable, the lambda function is stored in the storage, therefore mutable."),(0,o.kt)("p",null,"Instead of simply sealing the classic function's body as an immutable structure, you make it a mutable ",(0,o.kt)("em",{parentName:"p"},"variable")," of the storage.",(0,o.kt)("br",{parentName:"p"}),"\n","In an ",(0,o.kt)("strong",{parentName:"p"},"imaginary")," high-level language syntax:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"An entrypoint"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-d"},"Entrypoint_for_doSomething(p1, ... , pP) {\n    doSomething(p1, ... , pP);\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"The corresponding immutable function"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-d"},"function doSomething(p1, ... , pP) return (v1, ... , vR) {\n    storage.lambdaFunction();\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"The lambda function in the storage as a variable"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-d"},"lambdaFunction = function (p1, ... , pP) return (v1, ... , vR) {\n    actual_instructions;\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warnings"),":",(0,o.kt)("br",{parentName:"p"}),"\n","In this algorithmic example, almost all types are implicit, which limits syntax length. Furthermore, the syntax isn't as functional as in languages used for Tezos smart contracts (e.g. ",(0,o.kt)("em",{parentName:"p"},"LIGO"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5678).Z}),"  "),(0,o.kt)("small",{className:"figure"},"FIGURE 5: ",(0,o.kt)("i",null,"Lambda pattern")," illustration."),(0,o.kt)("p",null,"You could use a ",(0,o.kt)("em",{parentName:"p"},"map pattern")," aswell. Inside the map, you can store each lambda function as a ",(0,o.kt)("em",{parentName:"p"},"value"),". To be executed, the code would find the correct lambda function at the corresponding ",(0,o.kt)("em",{parentName:"p"},"key"),"."),(0,o.kt)("p",null,"Later, in an upgrading process, it would be possible to ",(0,o.kt)("strong",{parentName:"p"},"modify the lambda function")," in ",(0,o.kt)("strong",{parentName:"p"},"just changing")," the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"value"))," in the ",(0,o.kt)("em",{parentName:"p"},"map")," for the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"same key")),". It would also be possible to ",(0,o.kt)("strong",{parentName:"p"},"batch changes on the whole ",(0,o.kt)("em",{parentName:"strong"},"map")),"."),(0,o.kt)("h3",{id:"data-proxy-pattern"},"Data-Proxy pattern"),(0,o.kt)("p",null,'The idea of the "',(0,o.kt)("em",{parentName:"p"},"Data-Proxy"),'" pattern is pretty simple: separate the logic from the data into different smart contracts. Instead of duplicating and transfering the data into a new smart contract, we only update the logic smart contract.'),(0,o.kt)("p",null,"The first smart contract is the Data smart contract. It stores important data, including the address and entrypoints of the Logic smart contract. It also plays a proxy role as any request always goes through it first. It usually doesn't have a lot of functions. The mandatory functions set and retrieve its storage data (including new addresses for the new logic smart contracts)."),(0,o.kt)("p",null,"When you need to update the logic (e.g. new features; corrections...) you only deploy a new logic smart contract and update the Data smart contract storage with the new address. See below fig. 6 for an update of the Logic smart contract from version 1.0 to 2.1.:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4553).Z}),"  "),(0,o.kt)("small",{className:"figure"},"FIGURE 6: ",(0,o.kt)("i",null,"Data-Proxy")," pattern illustration."),(0,o.kt)("p",null,"Once the Data-Proxy architecture is in place, we can make the Data smart contract more dynamic with a Map pattern and the Logic smart contract upgradable with a Lambda pattern."),(0,o.kt)("p",null,"The idea we discribed is actually a basic form of ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Modular_programming"},"modular programming"),"."),(0,o.kt)("p",null,"This pattern isn't limited to 2 smart contracts only. You can imagine various architectures combining various patterns. For instance, you can imagine a central Data smart contract and multiple upgradable other smart contracts revolving around it. This example implies a single point of failure in the Data smart contract, but there are other questions you should keep in mind, like access rights (to get and set data, to upgrade logic, etc.)."),(0,o.kt)("p",null,"These patterns aren't magical and just allow more flexibility. You still need to think about the best architecture for your ",(0,o.kt)("em",{parentName:"p"},"dapp"),". Patterns can notably increase the deployment and ",(0,o.kt)("em",{parentName:"p"},"gaz")," using fees."),(0,o.kt)("h2",{id:"what-have-we-learned-so-far"},"What have we learned so far?"),(0,o.kt)("p",null,"In this chapter, we described the Tezos smart contract's main components and properties. We also described its lifecycle. We explained how to construct Tezos smart contracts using different patterns to make evolving ",(0,o.kt)("em",{parentName:"p"},"dapps")," and handle efficient ",(0,o.kt)("em",{parentName:"p"},"versioning"),"."),(0,o.kt)("p",null,'In the next chapter, we will detail the Tezos consensus "',(0,o.kt)("em",{parentName:"p"},"Liquid Proof-of-Stake"),'".'))}p.isMDXComponent=!0},4553:function(e,t,a){"use strict";t.Z=a.p+"assets/images/data-proxy-f9f78c05148a91de1c7e1b8320e7dc25.svg"},5347:function(e,t,a){"use strict";t.Z=a.p+"assets/images/invoke_smart_contract-f461140ff3d61551f78612d61103154a.svg"},5678:function(e,t,a){"use strict";t.Z=a.p+"assets/images/lambda-pattern-3ccf88aee6cf480fd8fce045a0c3162e.svg"},6754:function(e,t,a){"use strict";t.Z=a.p+"assets/images/map-pattern-ac203fb6e0d74fea90c3e7e1af34e5e0.svg"},4010:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tezos_smart_contract_content-388d361b32664a5a39d8839a1de659f9.svg"},8090:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tezos_smart_contract_deploy_invoke-151757f8a061aadda93b98a10d3006ae.svg"}}]);