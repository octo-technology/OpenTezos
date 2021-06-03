(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[7131],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7160:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a,o=n(2122),r=n(9756),i=(n(7294),n(3905)),l={id:"deploy-a-contract",title:"Deploy a contract",authors:"Maxime Sallerin and Benjamin Pilia"},s={unversionedId:"ligo/deploy-a-contract",id:"ligo/deploy-a-contract",isDocsHomePage:!1,title:"Smart Contract",description:"A Tezos smart contract is a piece of code written in the Michelson language (a low-level stack-based Turing-complete language).",source:"@site/docs/ligo/deploy-a-contract.md",sourceDirName:"ligo",slug:"/ligo/deploy-a-contract",permalink:"/ligo/deploy-a-contract",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/ligo/deploy-a-contract.md",version:"current",lastUpdatedBy:"Theotime-Akeare",lastUpdatedAt:1621961668,formattedLastUpdatedAt:"5/25/2021",frontMatter:{id:"deploy-a-contract",title:"Deploy a contract",authors:"Maxime Sallerin and Benjamin Pilia"},sidebar:"docs",previous:{title:"Language basics",permalink:"/ligo/language-basics"},next:{title:"Unit Testing with PyTezos",permalink:"/ligo/unit-testing"}},p=[{value:"Storage",id:"storage",children:[]},{value:"Entrypoints",id:"entrypoints",children:[]},{value:"Compiling a contract",id:"compiling-a-contract",children:[]},{value:"Defining the initial storage",id:"defining-the-initial-storage",children:[]},{value:"Invoking the contract with a parameter",id:"invoking-the-contract-with-a-parameter",children:[]},{value:"Simulating (Dry-running) a contract",id:"simulating-dry-running-a-contract",children:[]},{value:"Some specificities for Maps, Tuples and Records",id:"some-specificities-for-maps-tuples-and-records",children:[{value:"Maps",id:"maps",children:[]},{value:"Tuples",id:"tuples",children:[]},{value:"Records",id:"records",children:[]}]},{value:"Deploy",id:"deploy",children:[]},{value:"Invoke",id:"invoke",children:[]},{value:"Example",id:"example",children:[{value:"Compile",id:"compile",children:[]},{value:"Initial storage",id:"initial-storage",children:[]},{value:"Invocation parameter",id:"invocation-parameter",children:[]},{value:"Simulating",id:"simulating",children:[]},{value:"Deploy",id:"deploy-1",children:[]},{value:"Invoke",id:"invoke-1",children:[]},{value:"Accessing storage",id:"accessing-storage",children:[]}]}],c=(a="NotificationBar",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Tezos smart contract is a piece of ",(0,i.kt)("strong",{parentName:"p"},"code")," written in the Michelson language (a low-level stack-based Turing-complete language)."),(0,i.kt)("p",null,"##TODO is a phrase missing here?"),(0,i.kt)("p",null,"It also defines all ",(0,i.kt)("strong",{parentName:"p"},"entrypoints")," (invocable functions) of the smart contract. In other words, it defines the prototype of each entrypoint (e.g. specifies the types of parameters for the entrypoint).  "),(0,i.kt)("p",null,"It also defines the ",(0,i.kt)("strong",{parentName:"p"},"storage")," of the smart contract (i.e. the data structure of the persistent memory associated with the smart contract).  "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9511).Z})),(0,i.kt)("small",{className:"figure"},"FIGURE 1: Smart contract"),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("p",null,"The storage is an allocated memory space associated with a smart contract.\nThe storage is the permanent data store for the smart contract.\nThe description of the storage is done through strongly-typing the data structure."),(0,i.kt)("h2",{id:"entrypoints"},"Entrypoints"),(0,i.kt)("p",null,"The entrypoints are the invocable functions of a smart contract. Executing an entrypoint takes some parameters and the current state of the storage, and returns a new and modified storage and some operations."),(0,i.kt)(c,{mdxType:"NotificationBar"},(0,i.kt)("p",null,(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Operations")," are an ordered list of transactions. An operation can trigger a tez transfer or the entry point of another targeted contract. If the execution of an entry point produces operations then they are sent and executed following the order in the list of operations."))),(0,i.kt)("h1",{id:"ligo-compiler"},"LIGO Compiler"),(0,i.kt)("h2",{id:"compiling-a-contract"},"Compiling a contract"),(0,i.kt)("p",null,"In order to deploy a contract in a Tezos network,\nwe need to compile it first,\nthis can be done using a tool called a compiler (aka LIGO compiler) used to transform\nLIGO code into a Michelson code."),(0,i.kt)("p",null,"Michelson smart contracts are stored in a file with the .tz extension."),(0,i.kt)("p",null,"Here is how to transform a LIGO code into a Michelson code using the LIGO compiler in the command line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ligo compile-contract SOURCE_LIGO_FILE MAIN_FUNCTION\n")),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SOURCE_LIGO_FILE")," is the path to your LIGO file containing the main function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MAIN_FUNCTION")," is the name of your main function.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ligo compile-contract examples/counter.ligo main \n")),(0,i.kt)("p",null,"The examples are detailed later in the chapter, ",(0,i.kt)("a",{parentName:"p",href:"#example"},"here"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can store the michelson output of the command above in .tz file\nin order to use it later when deploying the contract:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre"},"ligo compile-contract SOURCE_LIGO_FILE ENTRY_POINT > MICHELSON_FILE\n"))),(0,i.kt)("h2",{id:"defining-the-initial-storage"},"Defining the initial storage"),(0,i.kt)("p",null,"The michelson output of the following command can be used to init the storage\nwhen deploying the contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ligo compile-storage SOURCE_LIGO_FILE MAIN_FUNCTION 'STORAGE_STATE'\n")),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"STORAGE_STATE")," is a LIGO expression that defines the initial state of the storage.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ligo compile-storage src/counter.ligo main 5\n// Outputs: 5\n")),(0,i.kt)("h2",{id:"invoking-the-contract-with-a-parameter"},"Invoking the contract with a parameter"),(0,i.kt)("p",null,"The michelson output of the following command can be used as the entrypoint name\nwhen invoking an entrypoint of the smart contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ligo compile-parameter SOURCE_LIGO_FILE MAIN_FUNCTION 'ACTION(P)'\n")),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ACTION(P)")," is a LIGO expression used to specify the action that triggers the associated entrypoint with the corresponding parameter p.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ligo compile-parameter src/counter.ligo main 'Increment(5)'\n// Outputs: (Right 5)\n")),(0,i.kt)("h2",{id:"simulating-dry-running-a-contract"},"Simulating (Dry-running) a contract"),(0,i.kt)("p",null,"Testing a contract can be quite easy if we utilize LIGO's built-in dry-run feature.\nDry-running is a simulated execution of the smart contract as if it was deployed on a real chain.\nIt works by simulating the main execution-function, based on a mock storage value and a parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ligo dry-run [options] SOURCE_LIGO_FILE MAIN_FUNCTION 'ACTION(P)' 'STORAGE_STATE'\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"STORAGE_STATE")," is the state of the storage when simulating the execution of the entrypoint.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'ligo dry-run src/counter.ligo main "Increment(5)" 3\n// tuple[   list[]\n//          8\n// ]\n')),(0,i.kt)("h2",{id:"some-specificities-for-maps-tuples-and-records"},"Some specificities for Maps, Tuples and Records"),(0,i.kt)("p",null,"Consider the following LIGO code snippet for the storage definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"//starmap.ligo\ntype coordinates is ( int * int * int)\ntype storage is map (string, coordinates)\n\n[...]\n")),(0,i.kt)("h3",{id:"maps"},"Maps"),(0,i.kt)("p",null,"The initialization of the elements of a map is specified between ",(0,i.kt)("inlineCode",{parentName:"p"},"map [")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"]"),"\nand elements are separated by a semi-colon ",(0,i.kt)("inlineCode",{parentName:"p"},";"),". Each element is a key/value pair separated by ",(0,i.kt)("inlineCode",{parentName:"p"},"->"),"."),(0,i.kt)("p",null,"Initialization of the elements of a map follows the syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"map[ KEY1 -> VALUE1; KEY2 -> VALUE2 ]\n")),(0,i.kt)("p",null,"Here is an example of a command-line ",(0,i.kt)("inlineCode",{parentName:"p"},"ligo compile-storage")," for transpiling a map."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'ligo compile-storage starmap.ligo main \'map [ "earth" -> (2,7,1); "sun" -> (0,0,0) ]\'\n')),(0,i.kt)("p",null,"This command returns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'{ Elt "earth" (Pair (Pair 2 7) 1) ; Elt "sun" (Pair (Pair 0 0) 0) }\n')),(0,i.kt)("h3",{id:"tuples"},"Tuples"),(0,i.kt)("p",null,"Initialization of the elements of a tuple is specified between ",(0,i.kt)("inlineCode",{parentName:"p"},"(")," and ",(0,i.kt)("inlineCode",{parentName:"p"},")"),", and separated by comma ",(0,i.kt)("inlineCode",{parentName:"p"},","),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(VALUE1, VALUE2, VALUE3)\n")),(0,i.kt)("p",null,"Here is an example of a command-line ",(0,i.kt)("inlineCode",{parentName:"p"},"ligo compile-storage")," for compiling a map containing a tuple."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ligo compile-storage starmap.ligo main 'map [ \"earth\" -> (2,7,1) ]'\n")),(0,i.kt)("p",null,"This command returns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'{ Elt "earth" (Pair (Pair 2 7) 1) }\n')),(0,i.kt)("p",null,"When specifying an empty map, one must set the map [] into the expected type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ligo compile-storage starmap.ligo main '(map []: map(string,coordinates))'\n")),(0,i.kt)("h3",{id:"records"},"Records"),(0,i.kt)("p",null,"Initialization of elements in a record is specified between map ",(0,i.kt)("inlineCode",{parentName:"p"},"[")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"]"),"\nand elements separated by a semi-colon ",(0,i.kt)("inlineCode",{parentName:"p"},";"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Each element is a key/value pair separated by ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," and follows the syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"record[ KEY1 = VALUE1; KEY2 = VALUE2 ]\n")),(0,i.kt)("p",null,"If we should now have a record instead of a tuple for ",(0,i.kt)("inlineCode",{parentName:"p"},"coordinates"),","),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"//starmap2.ligo\ntype coordinates = record [\n  x = int;\n  y = int;\n  z = int\n]\ntype storage is map (string, coordinates)\n\n[...]\n")),(0,i.kt)("p",null,"we will compile the storage as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ligo compile-storage code.ligo main 'map [ \"earth\" -> record [x=2;y=7;z=1] ]'\n")),(0,i.kt)("p",null,"This command returns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'{ Elt "earth" (Pair (Pair 2 7) 1) }\n')),(0,i.kt)("h1",{id:"deploy-and-invoke"},"Deploy and Invoke"),(0,i.kt)("h2",{id:"deploy"},"Deploy"),(0,i.kt)("p",null,"A smart contract must be deployed on the blockchain in order to be invoked.\nWhen deploying a smart contract on the blockchain, one must specify the initial state of the storage."),(0,i.kt)("p",null,'The deployment of a smart contract in Tezos is called "',(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"origination")),'".'),(0,i.kt)("p",null,"Here is the syntax for the tezos command line to deploy a smart contract:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tezos-client originate contract CONTRACT_NAME for USER transferring AMOUNT_TEZ from FROM_USER \\\n             running MICHELSON_FILE \\\n             --init 'INITIAL_STORAGE' --burn-cap GAZ_FEE\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CONTRACT_NAME")," is the name given to the contract"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MICHELSON_FILE")," is the path for the Michelson smart contract code (.tz file)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AMOUNT_TEZ")," is the quantity of tez being transferred to the newly deployed contract.\nIf a contract balance reaches 0 then it is deactivated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FROM_USER")," account from which the tez are taken (and transferred to the new contract)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"INITIAL_STORAGE")," is a Michelson expression. The --init parameter is used to specify the initial state of the storage."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GAZ_FEE")," is a specified maximal fee the user is willing to pay for this operation (using the --burn-cap parameter).")),(0,i.kt)("h2",{id:"invoke"},"Invoke"),(0,i.kt)("p",null,"Once the smart contract has been deployed on the blockchain (contract-origination operation baked into a block),\nit is possible to invoke an entrypoint from the smart contract using the command line."),(0,i.kt)("p",null,"Here is the syntax of the tezos command line to invoke a smart contract:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tezos-client transfer AMOUNT_TEZ from USER to CONTRACT_NAME --arg 'ENTRYPOINT_INVOCATION' --dry-run\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AMOUNT_TEZ")," is the quantity of tez being transferred to the contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CONTRACT_NAME")," name given to the contract"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ENTRYPOINT_INVOCATION")," is a Michelson expression of the entrypoint and the corresponding parameter.\nThe --arg parameter specifies an entrypoint call.")),(0,i.kt)("p",null,"\u26a0\ufe0f Notice that the --dry-run parameter simulate the invocation of the entrypoint."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Let's consider the counter contract for our example."),(0,i.kt)("p",null,"Our counter contract will store a single ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," as its storage,\nand will accept an ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," variant in order to re-route\nour single ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function to two entrypoints for ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," (addition) and ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," (subtraction)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"type parameter is\n  Increment of int\n| Decrement of int\n\ntype storage is int\n\ntype return is list (operation) * storage\n\nfunction add (const n : int; const store : storage) : storage is store + n\nfunction sub (const n : int; const store : storage) : storage is store - n\n\nfunction main (const action : parameter; const store : storage) : return is\n  ((nil : list(operation)),\n   case action of\n     Increment (n) -> add (n, store)\n   | Decrement (n) -> sub (n, store)\n   end)\n")),(0,i.kt)("h3",{id:"compile"},"Compile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ligo compile-contract examples/counter.ligo main > code.tz\n")),(0,i.kt)("p",null,"The command above will output the following Michelson code:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that the output has been saved in the Michelson file ",(0,i.kt)("inlineCode",{parentName:"p"},"code.tz"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{ parameter (or (int %decrement) (int %increment)) ;\n  storage int ;\n  code { DUP ;\n         CDR ;\n         DIP { DUP } ;\n         SWAP ;\n         CAR ;\n         IF_LEFT\n           { DUP ;\n             DIP { DIP { DUP } ; SWAP } ;\n             PAIR ;\n             DUP ;\n             CDR ;\n             DIP { DUP ; CAR } ;\n             SUB ;\n             DIP { DROP 2 } }\n           { DUP ;\n             DIP { DIP { DUP } ; SWAP } ;\n             PAIR ;\n             DUP ;\n             CDR ;\n             DIP { DUP ; CAR } ;\n             ADD ;\n             DIP { DROP 2 } } ;\n         NIL operation ;\n         PAIR ;\n         DIP { DROP 2 } } }\n\n")),(0,i.kt)("h3",{id:"initial-storage"},"Initial storage"),(0,i.kt)("p",null,"However, in order to ",(0,i.kt)("strong",{parentName:"p"},"originate")," a Michelson contract on Tezos,\nwe also need to provide its initial storage value, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"compile-storage"),"\nto compile the LIGO representation of the storage to Michelson."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ligo compile-storage src/counter.ligo main 5\n// Outputs: 5\n")),(0,i.kt)("h3",{id:"invocation-parameter"},"Invocation parameter"),(0,i.kt)("p",null,"//TODO\nThe same rules apply for the parameters, as apply for the translating of LIGO storage values to Michelson.\nWe will need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"compile-parameter")," to compile our action variant into Michelson, here's how:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ligo compile-parameter src/counter.ligo main 'Increment(5)'\n// Outputs: (Right 5)\n")),(0,i.kt)("p",null,"Now we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"(Right 5)")," which is a Michelson value, to invoke our contract via ",(0,i.kt)("inlineCode",{parentName:"p"},"tezos-client")),(0,i.kt)("h3",{id:"simulating"},"Simulating"),(0,i.kt)("p",null,"To dry-run the counter-contract,\nwe provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function with a variant parameter of value ",(0,i.kt)("inlineCode",{parentName:"p"},"Increment (5)"),"\nand, an initial storage value of ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'ligo dry-run src/counter.ligo main "Increment(5)" 3\n// tuple[   list[]\n//          8\n// ]\n')),(0,i.kt)("p",null,"The simulation shows that our storage would have been incremented to 8."),(0,i.kt)("h3",{id:"deploy-1"},"Deploy"),(0,i.kt)("p",null,"Now that we have verified that our code compiles well\nand that it was functional, we can deploy our contract on the blockchain."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tezos-client originate contract counterContract for boostrap1 transferring 1 from boostrap2 \\\n             running code.tz \\\n             --init '0' --burn-cap 0.12525\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that you can simulate the deployment by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"--dry-run")," parameter to the above command.",(0,i.kt)("br",{parentName:"p"}),"\n","Note that boostrap1 and boostrap2 are users from the tezos sandbox.",(0,i.kt)("br",{parentName:"p"}),"\n","Sandboxed mode is a way to run a 'localhost-only' instance of a Tezos network.",(0,i.kt)("br",{parentName:"p"}),"\n","Find out more about the sandboxed mode ",(0,i.kt)("a",{parentName:"p",href:"examples#sandboxed-mode"},"here"),".")),(0,i.kt)("h3",{id:"invoke-1"},"Invoke"),(0,i.kt)("p",null,"Let's invoke the entrypoint ",(0,i.kt)("inlineCode",{parentName:"p"},"Increment(5)")," of the smart contract.\nRemember that the output of the ",(0,i.kt)("inlineCode",{parentName:"p"},"compile-parameter")," of this entrypoint was ",(0,i.kt)("inlineCode",{parentName:"p"},"(Right 5)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tezos-client transfer 5 from boostrap1 to counterContract --arg '(Right 5)'\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"note that you can simulate the invocation by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"--dry-run")," parameter to the above command.")),(0,i.kt)("h3",{id:"accessing-storage"},"Accessing storage"),(0,i.kt)("p",null,"You can access the stored value with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tezos-client get contract storage for counterContract\n")),(0,i.kt)("p",null,"##TODO//a concluding line"))}u.isMDXComponent=!0},9511:function(e,t,n){"use strict";t.Z=n.p+"assets/images/smart_contract-60cf30eef28cd3097505d46992b28ced.svg"}}]);