"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13],{5267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=n(5893),o=n(1151);const a={id:"pf-evaluate-chatbot-lab6'",title:"Lab# 6: Evaluate chatbot",sidebar_position:6,slug:"/evaluate-chatbot"},r=void 0,i={id:"azure-prompt-flow/portal/lab6-evaluate chatbot/pf-evaluate-chatbot-lab6'",title:"Lab# 6: Evaluate chatbot",description:"You can unit test your Flow.  However, Prompt flow provides a gallery of sample evaluation flows your can use to test you Flow in bulk.  For example, classification accuracy, QnA Groundedness, QnA Relevant, QnA Similarity, QnA F1 Score etc.  This enables you to test how well your LLM is performing.  In addition, you have the ability to examine which of your variant prompts are performing better.   In this example, we\u2019ll use the QnA RAG Evaluation template to test our flow.",source:"@site/docs/azure-prompt-flow/portal/lab6-evaluate chatbot/lab6-evaluate-chatbot.md",sourceDirName:"azure-prompt-flow/portal/lab6-evaluate chatbot",slug:"/evaluate-chatbot",permalink:"/responsible-ai-hub/docs/evaluate-chatbot",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"pf-evaluate-chatbot-lab6'",title:"Lab# 6: Evaluate chatbot",sidebar_position:6,slug:"/evaluate-chatbot"},sidebar:"promptFlowSidebar",previous:{title:"Lab# 5: Chatbot with your data",permalink:"/responsible-ai-hub/docs/chatbot-with-your-data"}},l={},c=[{value:"Evaluate chatbot flow",id:"evaluate-chatbot-flow",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["You can unit test your Flow.  However, Prompt flow provides a gallery of sample evaluation flows your can use to test you Flow in bulk.  For example, classification accuracy, QnA Groundedness, QnA Relevant, QnA Similarity, QnA F1 Score etc.  This enables you to test how well your LLM is performing.  In addition, you have the ability to examine which of your variant prompts are performing better.   In this example, we\u2019ll use the ",(0,s.jsx)(t.strong,{children:"QnA RAG Evaluation"})," template to test our flow."]}),"\n",(0,s.jsx)(t.h2,{id:"evaluate-chatbot-flow",children:"Evaluate chatbot flow"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["On the ",(0,s.jsx)(t.strong,{children:"Outputs"})," section, click on the ",(0,s.jsx)(t.strong,{children:"+ Add output"})," button.  Then enter ",(0,s.jsx)(t.strong,{children:"context"})," for the ",(0,s.jsx)(t.strong,{children:"Name"})," field and ",(0,s.jsx)(t.code,{children:"${response.output}"})," for the value."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(2555).Z+"",width:"1206",height:"203"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"Save"})," button"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Evaluate"})," button on the top right-side of the screen."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(4157).Z+"",width:"803",height:"52"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["On the ",(0,s.jsx)(t.strong,{children:"Batch run & Evaluate"})," page, select the ",(0,s.jsx)(t.strong,{children:"Next"})," button"]}),"\n",(0,s.jsxs)(t.li,{children:["Under ",(0,s.jsx)(t.strong,{children:"Data"}),", select the ",(0,s.jsx)(t.strong,{children:"test-contoso-dental-data"})," dataset you created earlier.  A preview of the top 5 rows of the data should be displayed at the bottom of the page."]}),"\n",(0,s.jsxs)(t.li,{children:["Under Input mapping, enter the open and close brackets ",(0,s.jsx)(t.strong,{children:"[]"})," for the value of ",(0,s.jsx)(t.strong,{children:"chat_history"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Click in the Value textbox for the ",(0,s.jsx)(t.strong,{children:"question"})," field and enter ",(0,s.jsx)(t.code,{children:"${data.question}"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(1607).Z+"",width:"975",height:"523"})}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Next"})," button."]}),"\n",(0,s.jsxs)(t.li,{children:["On the ",(0,s.jsx)(t.strong,{children:"Select evaluation"})," page, select the checkbox for the ",(0,s.jsx)(t.strong,{children:"QnA RAG Evaluation"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(7450).Z+"",width:"1475",height:"807"})}),"\n",(0,s.jsxs)(t.ol,{start:"10",children:["\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Next"})," button."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on the right arrow ",(0,s.jsx)(t.strong,{children:"\u201c>\u201d"})," to expand the ",(0,s.jsx)(t.strong,{children:"QnA RAG Evaluation"})," settings."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(5554).Z+"",width:"975",height:"456"})}),"\n",(0,s.jsxs)(t.ol,{start:"12",children:["\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.em,{children:"test-contoso-dental-dataset"})," dataset your uploaded earlier for the ",(0,s.jsx)(t.strong,{children:"Choose data asset for evaluation"})," field."]}),"\n",(0,s.jsxs)(t.li,{children:["For the ",(0,s.jsx)(t.strong,{children:"metric"})," field, cope and paste the following text:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"gpt_groundedness,gpt_retrieval_score,gpt_relevance  \n"})}),"\n",(0,s.jsxs)(t.ol,{start:"14",children:["\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.code,{children:"${run.outputs.answer}"})," for the ",(0,s.jsx)(t.strong,{children:"answer"})," field."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on the Data Source textbox and enter ",(0,s.jsx)(t.code,{children:"${data.question}"})," for the ",(0,s.jsx)(t.strong,{children:"question"})," field."]}),"\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.code,{children:"${run.outputs.context}"})," for the ",(0,s.jsx)(t.strong,{children:"documents"}),"field."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(4910).Z+"",width:"1383",height:"440"})}),"\n",(0,s.jsxs)(t.ol,{start:"17",children:["\n",(0,s.jsx)(t.li,{children:"On the right-hand side of the page, scroll down to the bottom of the page."}),"\n",(0,s.jsxs)(t.li,{children:["Select your AzureOpenAI connection name (e.g. azure-openai-conn) for the ",(0,s.jsx)(t.strong,{children:"Connection"})," fields."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Deployment name / Model"})," should automatically population the your AzureOpenAI deployment name."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(2658).Z+"",width:"973",height:"441"})}),"\n",(0,s.jsxs)(t.ol,{start:"20",children:["\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Next"})," button."]}),"\n",(0,s.jsxs)(t.li,{children:["Finally, click on the ",(0,s.jsx)(t.strong,{children:"Submit"})," button."]}),"\n",(0,s.jsxs)(t.li,{children:["To monitor the run progress, click on the ",(0,s.jsx)(t.strong,{children:"Prompt flow"})," navigation option.  Then click on the ",(0,s.jsx)(t.strong,{children:"Runs"})," tab"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(8539).Z+"",width:"1242",height:"440"})}),"\n",(0,s.jsxs)(t.ol,{start:"23",children:["\n",(0,s.jsx)(t.li,{children:"Click the Refresh button to update the run status. The run should take ~15 minutes."}),"\n",(0,s.jsxs)(t.li,{children:["Click on the radio button for the QnA RAG Evaluation, the press the ",(0,s.jsx)(t.strong,{children:"Visualize outputs"})," to view the results."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(7673).Z+"",width:"1242",height:"423"})}),"\n",(0,s.jsxs)(t.ol,{start:"25",children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Runs & metrics"})," section shows a summary score for gpt_groundedness, gpt_retrieval_score, and gpt_relevance.  The ",(0,s.jsx)(t.strong,{children:"Outputs"})," section shows the detailed results for each of the 3 metrics."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(7812).Z+"",width:"1815",height:"842"})}),"\n",(0,s.jsxs)(t.ol,{start:"26",children:["\n",(0,s.jsx)(t.li,{children:"The score will range from 1 to 5, where 1 is the worst and 5 is the best performance."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"In this lab, we learned that while building generate AI solution, it is important to apply responsible AI principles. We learn that even when an AI app provides the correct answer, it is important to validate that the answer is grounded to the context it's data source.  Even when the answer is grounded, it is important to validate that the answer is relevant to the question.  Finally, it is important to validate that the answer is similar to the answer provided by the data source.  In the content of Contoso dental clinc, we learn the important of the chatbox giving out information that pertain to their specific clinic."}),"\n",(0,s.jsx)(t.p,{children:"Next, we learn how vector index are useful in storing and retrieving custom data, instead of using a pre-trained LLM where the data may be out of date or not relevance to your unique use case."}),"\n",(0,s.jsx)(t.p,{children:"Finally, we learn how vector embedding is useful in converting text to numeric representation. This makes if useful in storing data base on thier relationship distance and similarity.  Search is quicker and more accurate when using vector embedding."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2555:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/00-output-eval-content-b4b29d614754e4f89509d77a4331e079.png"},2658:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/evaluate-connection-9b5fae9aa674bd383e1a47a47613052a.png"},1607:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/evaluate-input-flow-1308009d35933c4050b93212a44d7446.png"},5554:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/evaluate-qna-fields-cb1170858c26305ea944cc434a6f9625.png"},7812:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/evaluate-results-9ea135abf486f1a6ce3ea3eba2301302.png"},4157:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,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"},7450:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/evaluation-gallery-0f7ded3f4413d56306bd078147000e21.png"},4910:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/pf-rag-eval-input-efd911a0d3c894ebb742938f31d0e43b.png"},7673:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/pf-visualize-output-717ae69e97e745bca3761eaa741b51b7.png"},8539:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/start-evaluate-61f66a3b2560fe8d78e923720a0dd77b.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var s=n(7294);const o={},a=s.createContext(o);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);