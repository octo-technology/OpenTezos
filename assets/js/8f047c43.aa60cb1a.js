(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[1341],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=n,k=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6864:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i={id:"baker",title:"Become a baker or a delegator",authors:"Aymeric Bethencourt"},s={unversionedId:"contribute/baker",id:"contribute/baker",isDocsHomePage:!1,title:"Become a baker or a delegator",description:"Becoming a baker or a delegate on Tezos is a great way to contribute to the ecosystem while earning some profits. Baking (also called staking) is the process of forming new blocks on Tezos. This process is part of the Proof-of-Stake consensus (more on that in the Tezos basics module). The more bakers, the more decentralized and statistically safe this process is.",source:"@site/docs/contribute/baker.md",sourceDirName:"contribute",slug:"/contribute/baker",permalink:"/contribute/baker",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/contribute/baker.md",version:"current",lastUpdatedBy:"AymericBethencourt",lastUpdatedAt:1620316866,formattedLastUpdatedAt:"5/6/2021",frontMatter:{id:"baker",title:"Become a baker or a delegator",authors:"Aymeric Bethencourt"},sidebar:"docs",previous:{title:"Receive a grant",permalink:"/contribute/grant"},next:{title:"Exam",permalink:"/contribute/exam"}},l=[{value:"How to bake?",id:"how-to-bake",children:[]},{value:"Delegation",id:"delegation",children:[]},{value:"How to delegate?",id:"how-to-delegate",children:[]},{value:"How much can I earn by baking or delegating?",id:"how-much-can-i-earn-by-baking-or-delegating",children:[]},{value:"References",id:"references",children:[]}],c={toc:l};function p(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Becoming a baker or a delegate on Tezos is a great way to contribute to the ecosystem while earning some profits. ",(0,o.kt)("em",{parentName:"p"},"Baking")," (also called ",(0,o.kt)("em",{parentName:"p"},"staking"),") is the process of forming new blocks on Tezos. This process is part of the Proof-of-Stake consensus (more on that in the ",(0,o.kt)("a",{parentName:"p",href:"/tezos-basics"},"Tezos basics module"),"). The more bakers, the more decentralized and statistically safe this process is. "),(0,o.kt)("h2",{id:"how-to-bake"},"How to bake?"),(0,o.kt)("p",null,"Everyone with at least 8,000 XTZ can produce, sign and validate blocks and get rewards in proportion to their stake. The only thing you need to exercise your baking rights is to run a node with baking software and keep it online and up to date."),(0,o.kt)("p",null,"OpenTezos has dedicated modules on ",(0,o.kt)("a",{parentName:"p",href:"/baking"},"How baking works")," and ",(0,o.kt)("a",{parentName:"p",href:"/baker"},"How to set up your baker"),". However, this might be pretty complicated for inexperienced users \u2014 a more accessible alternative is to delegate instead of baking."),(0,o.kt)("h2",{id:"delegation"},"Delegation"),(0,o.kt)("p",null,"Self-baking lets a baker earn a higher yield but requires technical expertise and time to set up a baker node and run the baking software reliably with as little downtime as possible. By delegating Tezos tokens, a token holder avoids this process altogether but usually earns a lower yield. In the current protocol, token holders with less than 8,000 XTZ can only bake by delegating to another baker."),(0,o.kt)("p",null,"Delegation is when you delegate your staking/baking rights to another person (the baker) rather than setting your Tezos node. It's a pretty helpful feature as it allows you to participate in staking and receive Tezos staking rewards without the necessity of maintaining a node."),(0,o.kt)("p",null,"In that case, all staking rewards are credited to the baker. The baker manually (or using automated tools) pays delegators (people who delegated to him) their share of staking rewards after charging some service fee."),(0,o.kt)("p",null,"Delegation in Tezos is safe! Your funds are not locked or frozen and do not move anywhere. You can spend them at any time and without any delay. Just keep in mind, you only delegate your rights; that's it."),(0,o.kt)("p",null,"In short, delegation is much better for an average user. Yes, Tezos bakers get slightly more staking rewards. Still, they pay for hosting; they spend time maintaining a node, and they have a risk of losing money on double baking (e.g., if the node was misconfigured). Thus, delegation is the most preferred and safe way for an average user to participate in Tezos staking."),(0,o.kt)("h2",{id:"how-to-delegate"},"How to delegate?"),(0,o.kt)("p",null,"Most wallet (e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://atomex.me/"},"Atomex"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.exodus.com/"},"Exodus"),", etc.) offer built-in delegation, making the whole process very simple. Just open the wallet, select your XTZ balance, click delegate and choose a baker from the list. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(229).Z})),(0,o.kt)("small",{className:"figure"},"FIGURE 1: Delegating your XTZ on _Atomex_."),(0,o.kt)("p",null,"That's it. The only thing you should worry about is choosing an excellent and reliable Tezos baker or delegation service. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://baking-bad.org/docs/where-to-stake-tezos"},"Baking Bad")," or ",(0,o.kt)("a",{parentName:"p",href:"https://tezos-nodes.com/"},"Tezos Nodes")," allow you to browse through bakers. There are a few factors to consider when choosing a baker to delegate with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Fees"),": How much of the rewards is the baker keeping? ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Capacity"),': Each baker has a capacity of how many coins it can accept, which is based on how many coins it currently holds itself. A baker is "over-delegated" when it has exceeded the amount of delegation it can take considering the coins they currently hold.    ')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Reliability + Responsiveness"),": Does this baker pay on time? Does this baker pay correctly? Will this baker respond to my questions about their services? Many bakers operate forums and chat rooms in which they engage with delegators.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Security"),": Is this baker's staking setup secure? Does this baker have a track record? Has this baker double-baked in the past and lost coins?"))),(0,o.kt)("h2",{id:"how-much-can-i-earn-by-baking-or-delegating"},"How much can I earn by baking or delegating?"),(0,o.kt)("p",null,"The current Tezos protocol increases the token supply by approximately 5.51% in the first year (based on constant block rewards of 16 XTZ/block and 2 XTZ/endorsement)."),(0,o.kt)("p",null,"This inflation means that if ",(0,o.kt)("em",{parentName:"p"},"all")," Tezos token holders bake with all of their tokens (i.e., the entire Tezos supply), baking rewards would be near ~5.51% per year. However, given the variance in time preferences, knowledge, and capabilities, it is unlikely that all token holders will bake, and the expected return on baking is in practice greater than 5.51% a year. By illustration, if 50% of the Tezos token supply is being staked, the baking reward will be closer to 11% (double the inflation rate)."),(0,o.kt)("p",null,'In practice, the rewards for delegators are less for self-bakers because they share only part of their baking rewards with delegators. The portion they keep is often called a "fee" and ranges between 5% and 20%, varying by the baker.'),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"[1]"," ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.tezosagora.org/learn/baking/bakeordelegate"},"https://wiki.tezosagora.org/learn/baking/bakeordelegate")),(0,o.kt)("p",null,"[2]"," ",(0,o.kt)("a",{parentName:"p",href:"https://baking-bad.org/docs/tezos-staking-for-beginners"},"https://baking-bad.org/docs/tezos-staking-for-beginners")),(0,o.kt)("p",null,"[3]"," ",(0,o.kt)("a",{parentName:"p",href:"https://baking-bad.org/docs/where-to-stake-tezos/"},"https://baking-bad.org/docs/where-to-stake-tezos/")))}p.isMDXComponent=!0},229:function(e,t,a){"use strict";t.Z=a.p+"assets/images/delegate-0cb5c6a6d75934cefc8c50f6afc033de.gif"}}]);