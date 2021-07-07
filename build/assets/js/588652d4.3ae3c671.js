(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[4705],{3933:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var i=a(7294),n={button:"button_2UxY"},s=function(e){var t=e.children;return i.createElement("div",{className:n.root},t)}},5164:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var i=a(3552),n=a(8227),s=a(7294),l=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={userName:"",sucess:void 0},a}(0,i.Z)(t,e);var a=t.prototype;return a.handleSubmit=function(e){var t=this;e.preventDefault();var a=0,i=0;if(this.props.children.forEach((function(e){"ExamCheckbox"===e.props.mdxType&&(a+=1,"true"===e.props.isCorrect!=!!t.state[e.props.name]&&(i+=1))})),parseInt(i/a*100)<=10){var s=new n.jsPDF({orientation:"landscape",unit:"px",format:[1100,800]});s.addImage("/certif/certificate.jpg","JPEG",0,0,1100,800),s.setFontSize(50),s.text(this.state.userName||"",550,440,{align:"center"}),s.text(this.props.moduleName||"",550,600,{align:"center"}),s.save("Certificate"+this.props.moduleName+".pdf"),this.setState({success:!0})}else this.setState({success:!1})},a.handleChange=function(e){var t;e.preventDefault();var a=e.target,i="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(((t={})[n]=i,t))},a.handleNameChange=function(e){e.preventDefault(),this.setState({userName:e.target.value})},a.render=function(){var e=this;return s.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},this.props.children.map((function(t){return t.props&&"ExamCheckbox"===t.props.mdxType?s.createElement("div",{key:t.props.name},s.createElement("label",null,s.createElement("input",{className:"exam-checkbox",name:t.props.name,type:"checkbox",checked:!!e.state[t.props.name],onChange:function(t){return e.handleChange(t)}}),t.props.children),s.createElement("br",null)):t.props&&"h3"===t.props.mdxType?s.createElement("div",{key:t.props.children},s.createElement("br",null),s.createElement("br",null),t):t})),s.createElement("br",null),s.createElement("br",null),this.state.success?s.createElement("div",{className:"green"},"Congrats, your pdf certificate has been sent!"):s.createElement("div",null,!1===this.state.success&&s.createElement("div",{className:"red"},"Sorry, you made too many mistakes, please try again."),s.createElement("label",null,"Your name:",s.createElement("input",{type:"text",value:this.state.name,onChange:function(t){return e.handleNameChange(t)},className:"exam-name"})),s.createElement("input",{type:"submit",value:"Submit",className:"exam-submit"})))},t}(s.Component)},6963:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return r},toc:function(){return c},default:function(){return m}});var i=a(2122),n=a(9756),s=(a(7294),a(3905)),l=(a(5164),a(3933),{id:"exam",title:"Exam",authors:"--"}),r={unversionedId:"baker/exam",id:"baker/exam",isDocsHomePage:!1,title:"Exam",description:"Question 1",source:"@site/docs/baker/exam.md",sourceDirName:"baker",slug:"/baker/exam",permalink:"/baker/exam",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/baker/exam.md",version:"current",lastUpdatedBy:"Aymeric BETHENCOURT",lastUpdatedAt:1623935115,formattedLastUpdatedAt:"6/17/2021",frontMatter:{id:"exam",title:"Exam",authors:"--"},sidebar:"docs",previous:{title:"Voting",permalink:"/baker/voting"},next:{title:"Introduction",permalink:"/defi"}},c=[{value:"Question 1",id:"question-1",children:[]},{value:"Question 2",id:"question-2",children:[]},{value:"Question 3",id:"question-3",children:[]},{value:"Question 4",id:"question-4",children:[]},{value:"Question 5",id:"question-5",children:[]}],o={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,i.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"question-1"},"Question 1"),(0,s.kt)("p",null,"Which of the following Tezos blockchain actors is considered a delegate?"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","A delegator."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","A baker."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","An endorser."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","An accuser."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","A voter.")),(0,s.kt)("h3",{id:"question-2"},"Question 2"),(0,s.kt)("p",null,"What is the minimum amount required to become a baker?"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","None"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","1 \ua729"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","32 \ua729"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","512 \ua729"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","8000 \ua729"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","16 000 \ua729")),(0,s.kt)("h3",{id:"question-3"},"Question 3"),(0,s.kt)("p",null,"During the Baking process, what fraudulent motive results in the loss of its frozen XTZ? "),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Double baking."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Inactivity during baking process."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Double endorsement."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Baker that's not paying his delegators.")),(0,s.kt)("h3",{id:"question-4"},"Question 4"),(0,s.kt)("p",null,'What is the correct command line to run a baker on the Mainnet, supposing the account alias is "bob"?'),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("inlineCode",{parentName:"li"},"tezos-baker-009-PsFLoren run with local node ~/.tezos-node bob")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("inlineCode",{parentName:"li"},"tezos-baker-010-PtGRANAD run with local node ~/.tezos-node bob")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,s.kt)("inlineCode",{parentName:"li"},"tezos-baker-alpha run with local node ~/.tezos-node bob"))),(0,s.kt)("h3",{id:"question-5"},"Question 5"),(0,s.kt)("p",null,'What are the two periods in which you can realize a "',(0,s.kt)("em",{parentName:"p"},"ballot"),'" operation?'),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Proposal period"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Exploration period"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Cooldown period"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Promotion period"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Adoption period")))}m.isMDXComponent=!0},1695:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1695,e.exports=t}}]);