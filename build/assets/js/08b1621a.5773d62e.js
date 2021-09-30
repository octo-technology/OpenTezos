(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[219],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2019:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={id:"language-basics",title:"Language Basics",authors:"Frank Hillard"},s={unversionedId:"michelson/language-basics",id:"michelson/language-basics",isDocsHomePage:!1,title:"Language Basics",description:"OLD page - not to be displayed (this section has been merged in smart contract page)",source:"@site/docs/michelson/language-basics.md",sourceDirName:"michelson",slug:"/michelson/language-basics",permalink:"/michelson/language-basics",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/michelson/language-basics.md",version:"current",lastUpdatedBy:"Frank Hillard",lastUpdatedAt:1621502753,formattedLastUpdatedAt:"5/20/2021",frontMatter:{id:"language-basics",title:"Language Basics",authors:"Frank Hillard"}},l=[{value:"Smart contract",id:"smart-contract",children:[]},{value:"Gas model",id:"gas-model",children:[]},{value:"Static typing",id:"static-typing",children:[]},{value:"Atomic computation",id:"atomic-computation",children:[]},{value:"Explicit failure",id:"explicit-failure",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OLD page - not to be displayed (this section has been merged in smart contract page)"),(0,r.kt)("p",null,"The Michelson language is the reference language for Tezos smart contracts. It is a low-level ",(0,r.kt)("strong",{parentName:"p"},"stack-based")," language and is also a ",(0,r.kt)("strong",{parentName:"p"},"Turing-complete")," language. This means it has basic operations allowing to read/write/compare values in-memory, has infinite memory, and allows conditional operators (e.g. ",(0,r.kt)("em",{parentName:"p"},"if"),", ",(0,r.kt)("em",{parentName:"p"},"switch")," instructions)"),(0,r.kt)("h2",{id:"smart-contract"},"Smart contract"),(0,r.kt)("p",null,"The main goal of the Michelson language is to model smart contracts, i.e. to model complex data structures and to design complex processes on these data. Once a smart contract is deployed on the Tezos network, it can be invoked and trigger modifications of the data of the smart contract. "),(0,r.kt)("p",null,"A persistent memory space (called ",(0,r.kt)("strong",{parentName:"p"},"storage"),") is associated with a Tezos smart contract and holds the data of the smart contract. This storage is stored on the blockchain."),(0,r.kt)("p",null,"A smart contract must provide a list of invocable functions in the smart contract (called ",(0,r.kt)("strong",{parentName:"p"},"entrypoints"),") and instructions (that modifies the storage) for each entrypoint."),(0,r.kt)("p",null,"These concepts of ",(0,r.kt)("em",{parentName:"p"},"storage")," and ",(0,r.kt)("em",{parentName:"p"},"entrypoint"),' are described in the "Smart contract" section.'),(0,r.kt)("h2",{id:"gas-model"},"Gas model"),(0,r.kt)("p",null,'A cost in "gas" (i.e. the money that must be paid in order to execute the instructions) is associated with the execution of a Michelson instruction. This "gas" modelling prevents the execution from creating an infinite loop. '),(0,r.kt)("p",null,"It also represents and rewards the work that bakers have to endure to validate a transaction."),(0,r.kt)("p",null,"Adding more memory space to the storage of a smart contract also has a cost (for each allocated byte)."),(0,r.kt)("h2",{id:"static-typing"},"Static typing"),(0,r.kt)("p",null,"The Michelson language is a strongly typed language. It means that all data inserted into the stack must be typed and operators manipulating these data must respect the typing rules."),(0,r.kt)("p",null,"The Michelson language introduces primitive types for modelling data and composite types allowing for complex data structure definitions. It also introduces very specific types for smart contract modelling."),(0,r.kt)("p",null,"The Michelson language provides basic type support on numbers, sequence of characters, logical expressions, and timestamps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nat")," represents a natural integer (e.g. 0, 3, 15)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int")," represents a integer (e.g. -10, 2, 3)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string"),' represents a sequence of characters (e.g. "Hello")'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool")," represents a boolean value (e.g. True, False)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bytes")," represents a sequence of bytes (octet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unit")," represents a non-specified type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp"),' represents a duration (e.g. NOW, 1571659294, "2019-09-26T10:59:51Z"; i.e. a string following the RFC3339 standard)')),(0,r.kt)("p",null,"Michelson also provides composite types for grouping properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set")," represents an unordered collection of elements. It preserves the uniqueness of elements inside the collection (e.g. { 2; 4; 5; 7})"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list")," represents an ordered collection of elements of the same type (e.g. { 2; 4; 5; 3; 5 })"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"map"),' represents an associative array formed of key-value elements (e.g. { Elt "Hello" 1 }) '),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"big_map")," is another representation of an associative array but can handle larger amounts of data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pair"),' represents a tuple of two elements (e.g. Pair "World" 1).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"option")," is a predefined variant type that is used to express whether there is a value of some type or ",(0,r.kt)("em",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"or")," is a variant type that can handle elements of different types.")),(0,r.kt)("p",null,"Michelson also provides specific types for smart contract modelling:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address"),' represents an identifier for a user account or a deployed smart contract (e.g. "tz1faswCTDciRzE4oJ9jn2Vm2dvjeyA9fUzU")'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mutez")," represents the smallest quantity of the Tezos crypto-currency (1 tez = 1,000,000 mutez)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),' is a byte sequence representing a public key (e.g. "edpkuBknW28nW72KG6RoH..." )'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key_hash"),' represents a hashed key using a standard hashing function such as SHA512 (e.g. "tz1KqTpEZ7Yob7QbPE4Hy..."; i.e. a string in base58 encoded form)'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signature"),' is a byte sequence representing a message signed by a public key (e.g. "spsig1PPUFZucuAQybs5w...)'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chain_id"),' represents the network identifer (e.g. 0x7a06a770, "NetXynUjJNZm7wi")'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"operation")," represents a transaction"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contract")," represents a contract interface used for contract interaction")),(0,r.kt)("p",null,'The usage of these types is illustrated in the "Tutorial" and "Instructions" sections.'),(0,r.kt)("h2",{id:"atomic-computation"},"Atomic computation"),(0,r.kt)("p",null,"The Michelson language provides basic operations on these types:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"numbers: addition, subtraction, multiplication, euclidean division, comparison"),(0,r.kt)("li",{parentName:"ul"},"string: split, concatenation, comparison"),(0,r.kt)("li",{parentName:"ul"},"crypto: standard hash function"),(0,r.kt)("li",{parentName:"ul"},"collection: standard collection manipulation (create, insert, remove, access, modification) "),(0,r.kt)("li",{parentName:"ul"},"currency: standard operations on XTZ crypto-currency"),(0,r.kt)("li",{parentName:"ul"},"smart contract: contract interactions, transfer, invocation of smart contracts, delegation")),(0,r.kt)("p",null,'A description of some of these operators is provided in the "Tutorial" section.'),(0,r.kt)("p",null,'An exhaustive list of instructions for each type is described in the "Instructions" section.'),(0,r.kt)("p",null,"These instructions introduce basic programming concepts such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"conditional branching: The",(0,r.kt)("inlineCode",{parentName:"li"},"IF")," instruction family."),(0,r.kt)("li",{parentName:"ul"},"repetitive processing: ",(0,r.kt)("inlineCode",{parentName:"li"},"LOOP"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ITER"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MAP")," instructions."),(0,r.kt)("li",{parentName:"ul"},'"Lambda" functions: ',(0,r.kt)("inlineCode",{parentName:"li"},"LAMBDA")," instruction."),(0,r.kt)("li",{parentName:"ul"},"structuring data: ",(0,r.kt)("inlineCode",{parentName:"li"},"PAIR"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"UNPAIR"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CAR"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CDR"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"LEFT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"RIGHT")," instructions, and ",(0,r.kt)("inlineCode",{parentName:"li"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"set")," composite types."),(0,r.kt)("li",{parentName:"ul"},"contract communication: ",(0,r.kt)("inlineCode",{parentName:"li"},"CONTRACT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"TRANSFER_TOKENS")," instructions. ")),(0,r.kt)("h2",{id:"explicit-failure"},"Explicit failure"),(0,r.kt)("p",null,"When invoking a smart contract, the execution of the sequence of instructions may finish. In this case, the transaction is considered finalized. If the execution of the sequence of instructions stops before the end, the transaction is considered to be rejected. The following sections will introduce the Michelson instruction",(0,r.kt)("inlineCode",{parentName:"p"},"FAIL")," which is responsible for throwing an error (for stopping the execution)."))}p.isMDXComponent=!0}}]);