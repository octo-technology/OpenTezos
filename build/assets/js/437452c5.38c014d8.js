(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[2851],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},583:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={id:"introduction",disable_pagination:!0,title:"Introduction",slug:"/defi",author:"Aymeric Bethencourt"},s={unversionedId:"defi/introduction",id:"defi/introduction",isDocsHomePage:!1,title:"Introduction",description:"What is DeFi?",source:"@site/docs/defi/introdution.md",sourceDirName:"defi",slug:"/defi",permalink:"/defi",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/defi/introdution.md",version:"current",lastUpdatedBy:"Theotime-Akeare",lastUpdatedAt:1623075125,formattedLastUpdatedAt:"6/7/2021",frontMatter:{id:"introduction",disable_pagination:!0,title:"Introduction",slug:"/defi",author:"Aymeric Bethencourt"},sidebar:"docs",previous:{title:"Exam",permalink:"/baker/exam"},next:{title:"Token Standards",permalink:"/defi/token-standards"}},c=[{value:"What is <em>DeFi</em>?",id:"what-is-defi",children:[]},{value:"DeFi on Tezos",id:"defi-on-tezos",children:[]},{value:"References",id:"references",children:[]}],l={toc:c};function p(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-defi"},"What is ",(0,o.kt)("em",{parentName:"h2"},"DeFi"),"?"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"DeFi")," is an acronym of ",(0,o.kt)("strong",{parentName:"p"},"De"),"centralized and ",(0,o.kt)("strong",{parentName:"p"},"Fi"),"nance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The word ",(0,o.kt)("em",{parentName:"p"},"Finance")," refers to all the traditional financial tools and services that have existed since antiquity, such as buying or selling currencies, transferring, borrowing, lending money, trading, betting, insuring, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The word ",(0,o.kt)("em",{parentName:"p"},"Decentralized")," refers to the structure of blockchain and how each protocol runs on a multitude of servers (or nodes) worldwide, guaranteeing peer-to-peer, quick, synchronized, uncensorable, immutable, and non-retractable transactions. Moreover, these transactions are visible, transparent, and auditable by anyone. "))),(0,o.kt)("p",null,"Mixing these two allows the re-creation of financial services previously only available through centralised financial entities such as banks, exchanges, insurance companies, etc.\nAlthough the DeFi movement started by reproducing the existing centralized financial models in a decentralized manner (i.e., smart contracts copied and reproduced the order book model), it soon shifted to the creation of altogether new opportunities that were available thanks to the decentralized nature of the blockchain (i.e., smart contracts creating ",(0,o.kt)("a",{parentName:"p",href:"/defi/dexs"},(0,o.kt)("em",{parentName:"a"},"automated market markers")),") and thus things previously impossible in traditional finance."),(0,o.kt)("p",null,"The objective of DeFi is to create added financial value, that is accessible to everyone, decentralized, instantaneous, transparent, and to cut out the middlemen to execute transactions, create and manage savings, trade, and obtain returns on financial assets without the need for a central authority."),(0,o.kt)("p",null,"DeFi tools and services are often compared to ",(0,o.kt)("inlineCode",{parentName:"p"},"Money Bricks")," ",(0,o.kt)("a",{parentName:"p",href:"/defi/introduction#references"},"[1]"),". Instead of creating an isolated software from the ground up (as banks do), DeFi tools and services usually take advantage of the whole ecosystem in place and integrate themselves within them just like bricks would with each-other. For instance, decentralized exchanges (",(0,o.kt)("em",{parentName:"p"},"DEXs")," for short) rely on tokens, stable coins, and oracles, which themselves rely on token standards, smart contracts, and the blockchain consensus. Additionally, we find that DeFi apps built on top of other DeFi apps, e.g., swapping apps, yield farming, lending, insurances, etc., built on top of DEXs.\nLike bricks, DeFi applications can layer on top of each other and build the foundation needed to create completely decentralized financial ecosystems \u2014 cutting out the middle man (banks, insurance companies, etc.) to reduce the costs and making services more inclusive."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(404).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 1: Illustration of DeFi as ",(0,o.kt)("i",null,"Money Bricks")," (in no particular order)."),(0,o.kt)("h2",{id:"defi-on-tezos"},"DeFi on Tezos"),(0,o.kt)("p",null,"In this module, we are going to learn more about the main areas where DeFi has been revolutionizing finance ",(0,o.kt)("a",{parentName:"p",href:"/defi/introduction#references"},"[2]")," and what solutions have been or are currently being developed on Tezos. Mainly:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/defi/token-standards"},"Token Standards"),": Tokens represent a way of exchanging value, e.g., money, collectables, tokenized assets. A token standard ensures that all the smart contracts implementing it are compatible with the ecosystem (e.g., a wallet compatible with a token standard can work with all the token implementing this standard).",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"p"},"On Tezos"),": The latest token standard is ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-12/tzip-12.md"},"FA2")," (standing for ",(0,o.kt)("em",{parentName:"p"},"Financial Application 2"),"), and it supports a wide range of token types: fungible, non-fungible, non-transferable, as well as multi-asset contracts. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/defi/dexs"},"Decentralized Exchanges"),": This exchange refers to ones that enable the trading of various digital assets in a peer-to-peer form. This form bypasses the need for an intermediary or a centralized, single party.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"p"},"On Tezos"),": You can trade ",(0,o.kt)("em",{parentName:"p"},"tez")," and related ",(0,o.kt)("em",{parentName:"p"},"FA2")," supported assets on ",(0,o.kt)("a",{parentName:"p",href:"https://dexter.exchange/"},"Dexter")," and ",(0,o.kt)("a",{parentName:"p",href:"https://quipuswap.com/"},"Quipuswap"),". "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/defi/wrapped-assets"},"Wrapped Assets"),": A wrapped asset allows the trading and exchange of an asset between different blockchain network. For instance, you cannot trade native BTC on Tezos. However, it is possible to wrap BTC into an ",(0,o.kt)("em",{parentName:"p"},"FA2")," token (such as ",(0,o.kt)("a",{parentName:"p",href:"https://tzbtc.io/"},"tzBTC"),") that is stable in price with to BTC, and always exchangeable back to a BTC, and fully compatible with all the tools and smart contracts using ",(0,o.kt)("em",{parentName:"p"},"FA2")," on the Tezos network.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"p"},"On Tezos"),": We've seen the addition of ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/stakerdao/the-wrapped-tezos-wxtz-beta-guide-6917fa70116e"},"Wrapped XTZ (wXTZ)"),", ",(0,o.kt)("a",{parentName:"p",href:"https://tzbtc.io/"},"Wrapped Bitcoin (tzBTC)"),", ",(0,o.kt)("a",{parentName:"p",href:"https://decrypt.co/51860/wrapped-eth-comes-to-tezos-as-it-takes-on-ethereum-defi-market"},"Wrapped ETH (ETHtz)")," and the addition of over 20 ERC-20 assets from ",(0,o.kt)("a",{parentName:"p",href:"http://www.benderlabs.io/"},"Bender Labs")," coming in the ",(0,o.kt)("a",{parentName:"p",href:"https://cryptoslate.com/20-ethereum-erc-20-tokens-will-be-coming-to-tezos-xtz-defi-in-q1-2021/"},"near future"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/defi/cross-chain-swaps"},"Cross-Chain Swaps"),": A ",(0,o.kt)("em",{parentName:"p"},"cross-chain swap")," (also referred to as an ",(0,o.kt)("em",{parentName:"p"},"Atomic Swap"),") refers to the action of exchanging tokens from two different blockchains in a peer-to-peer fashion without using a third party. This is possible thanks to the ability of code locking mechanisms known as ",(0,o.kt)("strong",{parentName:"p"},"Hash Time Locked Contracts (HTLCs)")," into blockchain transactions.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"p"},"On Tezos"),": ",(0,o.kt)("a",{parentName:"p",href:"https://tezex.io/"},"TEZEX")," is currently in development and will enable cross-chain swaps."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/defi/oracles"},"On-Chain Oracles"),": By default, a Tezos smart contract cannot receive any data from outside the blockchain. ",(0,o.kt)("strong",{parentName:"p"},"Oracles"),", therefore, offers to receive data from off-chain sources and make it available on-chain. Information such as token price and much more can be obtained. Trust can be guaranteed through the amalgamation of multiple sources.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"p"},"On Tezos"),": ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@Blockscale/introducing-harbinger-a-self-sustaining-price-oracle-for-tezos-7cab5c9971d"},"Harbinger oracles")," provide this service as well as Kaiko. A ",(0,o.kt)("a",{parentName:"p",href:"https://www.coindesk.com/tezos-blockchain-chainlink-oracle-services"},"Chainlink integration")," is expected in the near future by the SmartPy team. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/defi/stablecoins"},"Stablecoins"),": A ",(0,o.kt)("strong",{parentName:"p"},"stablecoin")," is a cryptocurrency whose price is fixed to another asset. Most stablecoins are pegged (fixed) to fiat currencies (currencies issued by a central bank) like the US Dollar.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"p"},"On Tezosoffers to fetch data "),": The ",(0,o.kt)("a",{parentName:"p",href:"https://kolibri.finance/"},"Kolibri (kUSD)")," stablecoin is currently available on the testnet and the ",(0,o.kt)("a",{parentName:"p",href:"https://www.stably.io/"},"Stably (USDS)"),", is available on the mainnet and fully backed by fiat reserves and regulated by ",(0,o.kt)("em",{parentName:"p"},"Prime Trust"),". "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/defi/synthetics"},"Synthetics"),": Synthetics are contracts between two parties that both bet on an opposite outcome for the value of an asset and make profits or losses on the outcome. The actual asset is not purchased in this contract. The is interesting for assets that have very low liquidity, are hard to transact, or are not available to trade.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"p"},"On Tezos"),": ",(0,o.kt)("a",{parentName:"p",href:"https://www.publish0x.com/publish0x-posts/sexp-a-tezos-based-synthetic-exchange-xmkjjzq"},(0,o.kt)("em",{parentName:"a"},"SEXP"))," is a synthetics exchange on Tezos currently in development."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/defi/lending"},"Lending and flash loans"),": Loans allow you to borrow or lend tokens to someone in exchange for interests.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"p"},"On Tezos"),": Projects for lending are currently in development, including ",(0,o.kt)("a",{parentName:"p",href:"https://tezos.finance/"},'Tezos Finance (aka "Tezfin")')),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"[1]"," ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/coinmonks/the-building-blocks-of-decentralized-exchanges-on-defi-explained-5cd6756bd3e9"},"https://medium.com/coinmonks/the-building-blocks-of-decentralized-exchanges-on-defi-explained-5cd6756bd3e9")),(0,o.kt)("p",null,"[2]"," ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.tezosagora.org/learn/uses-of-tezos/defi"},"https://wiki.tezosagora.org/learn/uses-of-tezos/defi")),(0,o.kt)("p",null,"[3]"," ",(0,o.kt)("a",{parentName:"p",href:"https://www.latribune.fr/opinions/tribunes/qu-est-ce-que-la-defi-cette-finance-decentralisee-prete-a-changer-les-regles-du-jeu-858938.html"},"https://www.latribune.fr/opinions/tribunes/qu-est-ce-que-la-defi-cette-finance-decentralisee-prete-a-changer-les-regles-du-jeu-858938.html")))}p.isMDXComponent=!0},404:function(e,t,n){"use strict";t.Z=n.p+"assets/images/money-bricks-96718b9d75e196fea0ab4cb98a7f93d2.svg"}}]);