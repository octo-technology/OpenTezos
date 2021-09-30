(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[7313],{3933:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(7294),r={button:"button_2UxY"},o=function(e){var t=e.children;return n.createElement("div",{className:r.root},t)}},5164:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(3552),r=a(8227),o=a(7294),i=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={userName:"",sucess:void 0},a}(0,n.Z)(t,e);var a=t.prototype;return a.handleSubmit=function(e){var t=this;e.preventDefault();var a=0,n=0;if(this.props.children.forEach((function(e){"ExamCheckbox"===e.props.mdxType&&(a+=1,"true"===e.props.isCorrect!=!!t.state[e.props.name]&&(n+=1))})),parseInt(n/a*100)<=10){var o=new r.jsPDF({orientation:"landscape",unit:"px",format:[1100,800]});o.addImage("/certif/certificate.jpg","JPEG",0,0,1100,800),o.setFontSize(50),o.text(this.state.userName||"",550,440,{align:"center"}),o.text(this.props.moduleName||"",550,600,{align:"center"}),o.save("Certificate"+this.props.moduleName+".pdf"),this.setState({success:!0})}else this.setState({success:!1})},a.handleChange=function(e){var t;e.preventDefault();var a=e.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;this.setState(((t={})[r]=n,t))},a.handleNameChange=function(e){e.preventDefault(),this.setState({userName:e.target.value})},a.render=function(){var e=this;return o.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},this.props.children.map((function(t){return t.props&&"ExamCheckbox"===t.props.mdxType?o.createElement("div",{key:t.props.name},o.createElement("label",null,o.createElement("input",{className:"exam-checkbox",name:t.props.name,type:"checkbox",checked:!!e.state[t.props.name],onChange:function(t){return e.handleChange(t)}}),t.props.children),o.createElement("br",null)):t.props&&"h3"===t.props.mdxType?o.createElement("div",{key:t.props.children},o.createElement("br",null),o.createElement("br",null),t):t})),o.createElement("br",null),o.createElement("br",null),this.state.success?o.createElement("div",{className:"green"},"Congrats, your pdf certificate has been sent!"):o.createElement("div",null,!1===this.state.success&&o.createElement("div",{className:"red"},"Sorry, you made too many mistakes, please try again."),o.createElement("label",null,"Your name:",o.createElement("input",{type:"text",value:this.state.name,onChange:function(t){return e.handleNameChange(t)},className:"exam-name"})),o.createElement("input",{type:"submit",value:"Submit",className:"exam-submit"})))},t}(o.Component)},4708:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=a(5164),s=a(3933),c={id:"exam",title:"Exam",author:"Aymeric Bethencourt"},m={unversionedId:"defi/exam",id:"defi/exam",isDocsHomePage:!1,title:"Exam",description:"Question 1",source:"@site/docs/defi/exam.md",sourceDirName:"defi",slug:"/defi/exam",permalink:"/defi/exam",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/defi/exam.md",version:"current",lastUpdatedBy:"AymericBethencourt",lastUpdatedAt:1623685436,formattedLastUpdatedAt:"6/14/2021",frontMatter:{id:"exam",title:"Exam",author:"Aymeric Bethencourt"},sidebar:"docs",previous:{title:"Lending and Flash Loans",permalink:"/defi/lending"},next:{title:"Introduction",permalink:"/formal-verification"}},u=[{value:"Question 1",id:"question-1",children:[]},{value:"Question 2",id:"question-2",children:[]},{value:"Question 3",id:"question-3",children:[]},{value:"Question 4",id:"question-4",children:[]},{value:"Question 5",id:"question-5",children:[]},{value:"Question 6",id:"question-6",children:[]},{value:"Question 7",id:"question-7",children:[]},{value:"Question 8",id:"question-8",children:[]},{value:"Question 9",id:"question-9",children:[]},{value:"Question 10",id:"question-10",children:[]},{value:"Question 11",id:"question-11",children:[]}],l={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{moduleName:"DeFi",mdxType:"ExamForm"},(0,o.kt)("h3",{id:"question-1"},"Question 1"),(0,o.kt)("p",null,"Why is DeFi often compared to ",(0,o.kt)("em",{parentName:"p"},"Money Bricks")," ?"),(0,o.kt)(s.Z,{name:"00",isCorrect:"true",mdxType:"ExamCheckbox"},"DeFi apps form layers that rely on other DeFi apps just like bricks with each other."),(0,o.kt)(s.Z,{name:"01",isCorrect:"true",mdxType:"ExamCheckbox"},"DeFi apps respect common standards that allow them to interact with each other."),(0,o.kt)(s.Z,{name:"02",isCorrect:"false",mdxType:"ExamCheckbox"},"DeFi apps rely on banks to perform KYCs."),(0,o.kt)(s.Z,{name:"03",isCorrect:"true",mdxType:"ExamCheckbox"},"DeFi apps are often open-source, allowing developers to fork them and modify them to create their apps."),(0,o.kt)("h3",{id:"question-2"},"Question 2"),(0,o.kt)("p",null,"Consider a liquidity pool with 120,000 wXTZ and 4 BTCtz. I want to exchange 1 BTCtz. What is the marginal price for 1 BTCtz?"),(0,o.kt)(s.Z,{name:"10",isCorrect:"false",mdxType:"ExamCheckbox"},"20,000 wXTZ"),(0,o.kt)(s.Z,{name:"11",isCorrect:"false",mdxType:"ExamCheckbox"},"24,000 wXTZ"),(0,o.kt)(s.Z,{name:"12",isCorrect:"true",mdxType:"ExamCheckbox"},"30,000 wXTZ"),(0,o.kt)(s.Z,{name:"13",isCorrect:"false",mdxType:"ExamCheckbox"},"36,000 wXTZ"),(0,o.kt)("h3",{id:"question-3"},"Question 3"),(0,o.kt)("p",null,"Consider a liquidity pool with 120,000 wXTZ and 4 BTCtz. I want to exchange 1 BTCtz. What is the effective swap price of my 1 BTCtz?"),(0,o.kt)(s.Z,{name:"20",isCorrect:"false",mdxType:"ExamCheckbox"},"20,000 wXTZ"),(0,o.kt)(s.Z,{name:"21",isCorrect:"true",mdxType:"ExamCheckbox"},"24,000 wXTZ"),(0,o.kt)(s.Z,{name:"22",isCorrect:"false",mdxType:"ExamCheckbox"},"30,000 wXTZ"),(0,o.kt)(s.Z,{name:"23",isCorrect:"false",mdxType:"ExamCheckbox"},"36,000 wXTZ"),(0,o.kt)("h3",{id:"question-4"},"Question 4"),(0,o.kt)("p",null,"The FA2 token standards allow Tezos developers to:"),(0,o.kt)(s.Z,{name:"30",isCorrect:"true",mdxType:"ExamCheckbox"},"Create fungible tokens (equivalent to ERC-20 on Ethereum)"),(0,o.kt)(s.Z,{name:"31",isCorrect:"true",mdxType:"ExamCheckbox"},"Create non-fungible tokens (equivalent to ERC-721 on Ethereum)"),(0,o.kt)(s.Z,{name:"32",isCorrect:"true",mdxType:"ExamCheckbox"},"Create non-transferable tokens (equivalent to ERC-1238 on Ethereum)"),(0,o.kt)(s.Z,{name:"33",isCorrect:"true",mdxType:"ExamCheckbox"},"Create multi-asset contracts (equivalent to ERC-1151 on Ethereum)"),(0,o.kt)("h3",{id:"question-5"},"Question 5"),(0,o.kt)("p",null,"A wrapped asset can be pegged to:"),(0,o.kt)(s.Z,{name:"40",isCorrect:"true",mdxType:"ExamCheckbox"},"a fiat currency"),(0,o.kt)(s.Z,{name:"41",isCorrect:"true",mdxType:"ExamCheckbox"},"a commodity"),(0,o.kt)(s.Z,{name:"42",isCorrect:"true",mdxType:"ExamCheckbox"},"a security"),(0,o.kt)(s.Z,{name:"43",isCorrect:"true",mdxType:"ExamCheckbox"},"a stock"),(0,o.kt)("h3",{id:"question-6"},"Question 6"),(0,o.kt)("p",null,"All stablecoins are collateralized by a reserve:"),(0,o.kt)(s.Z,{name:"50",isCorrect:"false",mdxType:"ExamCheckbox"},"true"),(0,o.kt)(s.Z,{name:"51",isCorrect:"true",mdxType:"ExamCheckbox"},"false"),(0,o.kt)("h3",{id:"question-7"},"Question 7"),(0,o.kt)("p",null,"Using an exchange is required to make an Atomic Swap:"),(0,o.kt)(s.Z,{name:"60",isCorrect:"false",mdxType:"ExamCheckbox"},"true"),(0,o.kt)(s.Z,{name:"61",isCorrect:"true",mdxType:"ExamCheckbox"},"false"),(0,o.kt)("h3",{id:"question-8"},"Question 8"),(0,o.kt)("p",null,"Synthetics are wrapped tokens pegged to their original asset:"),(0,o.kt)(s.Z,{name:"70",isCorrect:"false",mdxType:"ExamCheckbox"},"true"),(0,o.kt)(s.Z,{name:"71",isCorrect:"true",mdxType:"ExamCheckbox"},"false"),(0,o.kt)("h3",{id:"question-9"},"Question 9"),(0,o.kt)("p",null,"An oracle can:"),(0,o.kt)(s.Z,{name:"80",isCorrect:"true",mdxType:"ExamCheckbox"},"fetch price data"),(0,o.kt)(s.Z,{name:"81",isCorrect:"true",mdxType:"ExamCheckbox"},"fetch weather data"),(0,o.kt)(s.Z,{name:"82",isCorrect:"true",mdxType:"ExamCheckbox"},"process the data"),(0,o.kt)(s.Z,{name:"83",isCorrect:"false",mdxType:"ExamCheckbox"},"guarantee the fetched data is valid"),(0,o.kt)("h3",{id:"question-10"},"Question 10"),(0,o.kt)("p",null,"If I do not repay a flash loan in the same block:"),(0,o.kt)(s.Z,{name:"90",isCorrect:"false",mdxType:"ExamCheckbox"},"the loan is postponed to the next block"),(0,o.kt)(s.Z,{name:"91",isCorrect:"false",mdxType:"ExamCheckbox"},"the loan is cancelled but all my other operation involving the borrowed money are still executed"),(0,o.kt)(s.Z,{name:"92",isCorrect:"false",mdxType:"ExamCheckbox"},"all my operations involving the borrowed money are cancelled and my gas fee is refunded"),(0,o.kt)(s.Z,{name:"93",isCorrect:"true",mdxType:"ExamCheckbox"},"all my operations involving the borrowed money are cancelled but my gas fee is not refunded"),(0,o.kt)("h3",{id:"question-11"},"Question 11"),(0,o.kt)("p",null,"I can exchange an FA1.2 token against an FA2 token on DEXs:"),(0,o.kt)(s.Z,{name:"100",isCorrect:"true",mdxType:"ExamCheckbox"},"true"),(0,o.kt)(s.Z,{name:"101",isCorrect:"false",mdxType:"ExamCheckbox"},"false")))}d.isMDXComponent=!0},1695:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1695,e.exports=t}}]);