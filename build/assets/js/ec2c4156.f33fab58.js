(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[8312],{3933:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(7294),r={button:"button_2UxY"},o=function(e){var t=e.children;return n.createElement("div",{className:r.root},t)}},5164:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(3552),r=a(8227),o=a(7294),i=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={userName:"",sucess:void 0},a}(0,n.Z)(t,e);var a=t.prototype;return a.handleSubmit=function(e){var t=this;e.preventDefault();var a=0,n=0;if(this.props.children.forEach((function(e){"ExamCheckbox"===e.props.mdxType&&(a+=1,"true"===e.props.isCorrect!=!!t.state[e.props.name]&&(n+=1))})),parseInt(n/a*100)<=10){var o=new r.jsPDF({orientation:"landscape",unit:"px",format:[1100,800]});o.addImage("/certif/certificate.jpg","JPEG",0,0,1100,800),o.setFontSize(50),o.text(this.state.userName||"",550,440,{align:"center"}),o.text(this.props.moduleName||"",550,600,{align:"center"}),o.save("Certificate"+this.props.moduleName+".pdf"),this.setState({success:!0})}else this.setState({success:!1})},a.handleChange=function(e){var t;e.preventDefault();var a=e.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;this.setState(((t={})[r]=n,t))},a.handleNameChange=function(e){e.preventDefault(),this.setState({userName:e.target.value})},a.render=function(){var e=this;return o.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},this.props.children.map((function(t){return t.props&&"ExamCheckbox"===t.props.mdxType?o.createElement("div",{key:t.props.name},o.createElement("label",null,o.createElement("input",{className:"exam-checkbox",name:t.props.name,type:"checkbox",checked:!!e.state[t.props.name],onChange:function(t){return e.handleChange(t)}}),t.props.children),o.createElement("br",null)):t.props&&"h3"===t.props.mdxType?o.createElement("div",{key:t.props.children},o.createElement("br",null),o.createElement("br",null),t):t})),o.createElement("br",null),o.createElement("br",null),this.state.success?o.createElement("div",{className:"green"},"Congrats, your pdf certificate has been sent!"):o.createElement("div",null,!1===this.state.success&&o.createElement("div",{className:"red"},"Sorry, you made too many mistakes, please try again."),o.createElement("label",null,"Your name:",o.createElement("input",{type:"text",value:this.state.name,onChange:function(t){return e.handleNameChange(t)},className:"exam-name"})),o.createElement("input",{type:"submit",value:"Submit",className:"exam-submit"})))},t}(o.Component)},6492:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return m},toc:function(){return l},default:function(){return h}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=a(5164),s=a(3933),c={id:"exam",title:"Exam",authors:"Frank Hillard"},m={unversionedId:"formal-verification/exam",id:"formal-verification/exam",isDocsHomePage:!1,title:"Exam",description:"Question 1",source:"@site/docs/formal-verification/exam.md",sourceDirName:"formal-verification",slug:"/formal-verification/exam",permalink:"/formal-verification/exam",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/formal-verification/exam.md",version:"current",lastUpdatedBy:"AymericBethencourt",lastUpdatedAt:1623685436,formattedLastUpdatedAt:"6/14/2021",frontMatter:{id:"exam",title:"Exam",authors:"Frank Hillard"},sidebar:"docs",previous:{title:"Formal verification on smart contracts",permalink:"/formal-verification/modeling-theorem"},next:{title:"Introduction",permalink:"/private"}},l=[{value:"Question 1",id:"question-1",children:[]},{value:"Question 2",id:"question-2",children:[]},{value:"Question 3",id:"question-3",children:[]},{value:"Question 4",id:"question-4",children:[]},{value:"Question 5",id:"question-5",children:[]},{value:"Question 6",id:"question-6",children:[]},{value:"Question 7",id:"question-7",children:[]}],u={toc:l};function h(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{moduleName:"DeFi",mdxType:"ExamForm"},(0,o.kt)("h3",{id:"question-1"},"Question 1"),(0,o.kt)("p",null,"What is returned by the execution of a smart contract ?"),(0,o.kt)(s.Z,{name:"00",isCorrect:"false",mdxType:"ExamCheckbox"},"The current storage state when invoking the smart contract"),(0,o.kt)(s.Z,{name:"01",isCorrect:"true",mdxType:"ExamCheckbox"},"The modified storage state after invoking the smart contract"),(0,o.kt)(s.Z,{name:"02",isCorrect:"false",mdxType:"ExamCheckbox"},"The entrypoint that has been called (and its related parameters)"),(0,o.kt)(s.Z,{name:"03",isCorrect:"true",mdxType:"ExamCheckbox"},"The list of emitted operations produced by the execution of the smart contract"),(0,o.kt)(s.Z,{name:"04",isCorrect:"false",mdxType:"ExamCheckbox"},"The balance of the contract"),(0,o.kt)(s.Z,{name:"05",isCorrect:"false",mdxType:"ExamCheckbox"},"The size of the storage"),(0,o.kt)(s.Z,{name:"06",isCorrect:"false",mdxType:"ExamCheckbox"},"The code of the smart contract"),(0,o.kt)(s.Z,{name:"07",isCorrect:"false",mdxType:"ExamCheckbox"},"The list of users allowed to call the smart contract"),(0,o.kt)("h3",{id:"question-2"},"Question 2"),(0,o.kt)("p",null,"What makes the bridge between the Tezos world and the formal world of Coq ?"),(0,o.kt)(s.Z,{name:"10",isCorrect:"false",mdxType:"ExamCheckbox"},"The Michelson language"),(0,o.kt)(s.Z,{name:"11",isCorrect:"false",mdxType:"ExamCheckbox"},"The Coq universe (predefined Coq types)"),(0,o.kt)(s.Z,{name:"12",isCorrect:"true",mdxType:"ExamCheckbox"},"The Mi-cho-coq library"),(0,o.kt)(s.Z,{name:"13",isCorrect:"false",mdxType:"ExamCheckbox"},"The Tezos protocol"),(0,o.kt)("h3",{id:"question-3"},"Question 3"),(0,o.kt)("p",null,"Who is Thierry Coquand ?"),(0,o.kt)(s.Z,{name:"20",isCorrect:"false",mdxType:"ExamCheckbox"},"The founder of the type theory called \u03bb-calculus"),(0,o.kt)(s.Z,{name:"21",isCorrect:"true",mdxType:"ExamCheckbox"},"The founder of the type theory called the calculus of constructions (CoC)."),(0,o.kt)(s.Z,{name:"22",isCorrect:"true",mdxType:"ExamCheckbox"},"The principal developer of the _Coq_ proof assistant."),(0,o.kt)(s.Z,{name:"23",isCorrect:"false",mdxType:"ExamCheckbox"},"The founder of the intuitionistic type theory."),(0,o.kt)("h3",{id:"question-4"},"Question 4"),(0,o.kt)("p",null,"GADT stands for ?"),(0,o.kt)(s.Z,{name:"30",isCorrect:"true",mdxType:"ExamCheckbox"},"Generalized algebraic data type"),(0,o.kt)(s.Z,{name:"31",isCorrect:"false",mdxType:"ExamCheckbox"},"Generic abstract data type"),(0,o.kt)(s.Z,{name:"32",isCorrect:"false",mdxType:"ExamCheckbox"},"Generalized abstract data type"),(0,o.kt)(s.Z,{name:"33",isCorrect:"false",mdxType:"ExamCheckbox"},"Generic algebraic data type"),(0,o.kt)("h3",{id:"question-5"},"Question 5"),(0,o.kt)("p",null,"What kind of algebra is used to define the Michelson language ?"),(0,o.kt)(s.Z,{name:"40",isCorrect:"false",mdxType:"ExamCheckbox"},"a non-commutative monoid (which only provides associativity of _pairs_, because _pairs_ are not distributive over variants)"),(0,o.kt)(s.Z,{name:"41",isCorrect:"true",mdxType:"ExamCheckbox"},'a semi-ring (the rule `a + inv(a) ~ Void` is not verified (where "inv(a)" represents the inverse of `a`); because `inv(a)` does not exist)'),(0,o.kt)(s.Z,{name:"42",isCorrect:"false",mdxType:"ExamCheckbox"},'a ring (the rule `a + inv(a) ~ Void` is verified (where "inv(a)" represents the inverse of `a`))'),(0,o.kt)(s.Z,{name:"43",isCorrect:"false",mdxType:"ExamCheckbox"},"a group (fully symetric)"),(0,o.kt)("h3",{id:"question-6"},"Question 6"),(0,o.kt)("p",null,'We have seen that a Michelson script must be translated into an annotated script (i.e. a formal definition) (because Mi-Cho-Coq provides an equivalent for each Michelson instruction). In the theorem we want to prove, we specify that "the execution of the annotated script is equivalent to post-conditions". Who is responsible for the execution of this annotated script ?'),(0,o.kt)(s.Z,{name:"50",isCorrect:"false",mdxType:"ExamCheckbox"},"The Michelson interpreter"),(0,o.kt)(s.Z,{name:"51",isCorrect:"true",mdxType:"ExamCheckbox"},"The Mi-Cho-Coq evaluator"),(0,o.kt)(s.Z,{name:"52",isCorrect:"false",mdxType:"ExamCheckbox"},"The Coq inference engine"),(0,o.kt)("h3",{id:"question-7"},"Question 7"),(0,o.kt)("p",null,"What post-conditions depends on (What post-conditions are built upon) ?"),(0,o.kt)(s.Z,{name:"60",isCorrect:"true",mdxType:"ExamCheckbox"},"The storage modification produced by the execution of the smart contract"),(0,o.kt)(s.Z,{name:"61",isCorrect:"true",mdxType:"ExamCheckbox"},"The entrypoint parameter which is invoked"),(0,o.kt)(s.Z,{name:"62",isCorrect:"false",mdxType:"ExamCheckbox"},"The sequence of Michelson instructions (smart contract code)"),(0,o.kt)(s.Z,{name:"63",isCorrect:"true",mdxType:"ExamCheckbox"},"Operations produced by the execution of the smart contract"),(0,o.kt)(s.Z,{name:"64",isCorrect:"true",mdxType:"ExamCheckbox"},"Environment variables (transaction properties such as sender, amount)"),(0,o.kt)(s.Z,{name:"65",isCorrect:"false",mdxType:"ExamCheckbox"},"Predefined Coq types and inductive types (Coq libraries)"),(0,o.kt)(s.Z,{name:"66",isCorrect:"false",mdxType:"ExamCheckbox"},"Mi-Cho-Coq library")))}h.isMDXComponent=!0},1695:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1695,e.exports=t}}]);