"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[664],{3954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(5893),r=n(1151);const i={id:"pf-intro",title:"Prompt Flow On AzureML",sidebar_position:1,slug:"/prompt-flow-overview"},s=void 0,a={id:"azure-prompt-flow/pf-intro",title:"Prompt Flow On AzureML",description:"Prompt engineering is a tedious process that involves a lot tasks and components.  Developments have next determine what the input or prompts are going to be and what the actions we want in return.  In order to achieve, there are a lot of parts.  For instance, the prompts are responses need to be tokenize.  Next, depending on that the action that will be the output, we need to identify where that information is coming from.  Is the information coming from an API, or an LLM model?  When data is returned, does it need preprocessing?  How is the best response identify?",source:"@site/docs/azure-prompt-flow/intro.md",sourceDirName:"azure-prompt-flow",slug:"/prompt-flow-overview",permalink:"/responsible-ai-hub/docs/prompt-flow-overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"pf-intro",title:"Prompt Flow On AzureML",sidebar_position:1,slug:"/prompt-flow-overview"},sidebar:"promptFlowSidebar",next:{title:"Video Walkthrough",permalink:"/responsible-ai-hub/docs/rai-promptflow-walkthru"}},l={},c=[{value:"\ud83c\udfaf | Objectives:",id:"--objectives",level:2},{value:"\u2705 |Prerequisites:",id:"-prerequisites",level:2}];function d(e){const t={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Prompt engineering is a tedious process that involves a lot tasks and components.  Developments have next determine what the input or prompts are going to be and what the actions we want in return.  In order to achieve, there are a lot of parts.  For instance, the prompts are responses need to be tokenize.  Next, depending on that the action that will be the output, we need to identify where that information is coming from.  Is the information coming from an API, or an LLM model?  When data is returned, does it need preprocessing?  How is the best response identify?"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Prompt Flow Vector Token Embed",src:n(2096).Z+"",width:"2077",height:"502"})}),"\n",(0,o.jsx)(t.p,{children:"That\u2019s where Azure Prompt Flow, is valuable if providing a user-friendly logical flow to structure the different tasks involves and their dependencies.  To understand how to utilize Prompt Flow to expedite process of using an LLM that takes input and generates.  We are going to use a dental clinic\u2019s virtual chat agent takes input from users and provides an answer.  Since using OpenAI or any other LLM model is not going to know specific information about our Contoso dental client, we are going to use data for our clinic."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"RAG Pattern",src:n(9885).Z+"",width:"806",height:"102"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Custom Data"}),":"]}),"\n",(0,o.jsx)(t.h2,{id:"--objectives",children:"\ud83c\udfaf | Objectives:"}),"\n",(0,o.jsx)(t.p,{children:"After the workshop, you will learn how to:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Create a chatbot that uses an LLM model to generate responses"}),"\n",(0,o.jsx)(t.li,{children:"Convert your own data to a vector index"}),"\n",(0,o.jsx)(t.li,{children:"Use the LLM tool to create prompts and the response"}),"\n",(0,o.jsx)(t.li,{children:"Embed user input to search a vector index"}),"\n",(0,o.jsx)(t.li,{children:"Use Prompt tool to construct rules how your LLM should response."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"-prerequisites",children:"\u2705 |Prerequisites:"}),"\n",(0,o.jsx)(t.p,{children:"To complete this workshop, you need the following:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Login or Signup for a ",(0,o.jsx)(t.a,{href:"https://azure.microsoft.com/free/",children:"Free Azure account"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Basic understanding of Generative AI concepts"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["If you're new to generative AI, we recommend you take the ",(0,o.jsx)(t.a,{href:"https://github.com/microsoft/generative-ai-for-beginners?WT.mc_id=academic-105485-koreyst",children:"Generative AI for Beginners"})," before you start this workshop."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"GitHub account with access to GitHub Codespaces."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Install Python 3.8 or higher."}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},9885:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/rag-pattern-1b2e83defdb1354c2068eb4f0a516f56.png"},2096:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vector-token-embed-0756002b21b7c6e86c0758d40a6ff5aa.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(7294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);