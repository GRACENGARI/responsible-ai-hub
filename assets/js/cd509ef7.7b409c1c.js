"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[175],{5890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(5893),s=n(1151);const r={id:"pf-evaluate-chatbot-lab6'",title:"Lab# 6: Evaluate chatbot",sidebar_position:6,slug:"/evaluate-chatbot"},i=void 0,l={id:"azure-prompt-flow/lab6-evaluate chatbot/pf-evaluate-chatbot-lab6'",title:"Lab# 6: Evaluate chatbot",description:"You can unit test your Flow.  However, Prompt flow provides a gallery of sample evaluation flows your can use to test you Flow in bulk. For example, classification accuracy, QnA Groundedness, QnA Relevant, QnA Similarity, QnA F1 Score etc.  This enables you to test how well your LLM is performing.  In addition, you have the ability to examine which of your variant prompts are performing better.  In this example, we\u2019ll use the QnA RAG Evaluation template to test our flow.",source:"@site/docs/azure-prompt-flow/lab6-evaluate chatbot/lab6-evaluate-chatbot.md",sourceDirName:"azure-prompt-flow/lab6-evaluate chatbot",slug:"/evaluate-chatbot",permalink:"/responsible-ai-hub/docs/evaluate-chatbot",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"pf-evaluate-chatbot-lab6'",title:"Lab# 6: Evaluate chatbot",sidebar_position:6,slug:"/evaluate-chatbot"},sidebar:"promptFlowSidebar",previous:{title:"Lab# 5: Run custom chatbot",permalink:"/responsible-ai-hub/docs/run-custom-chatbot"},next:{title:"Lab# 7: Portal chatbot",permalink:"/responsible-ai-hub/docs/evaluate-chatbot"}},a={},c=[{value:"import chatbot flow from local to cloud",id:"import-chatbot-flow-from-local-to-cloud",level:2},{value:"Create connection to AzureOpenAI",id:"create-connection-to-azureopenai",level:2},{value:"Add AzureOpenAI connection to chatbot flow",id:"add-azureopenai-connection-to-chatbot-flow",level:2},{value:"Evaluate chatbot flow",id:"evaluate-chatbot-flow",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["You can unit test your Flow.  However, Prompt flow provides a gallery of sample evaluation flows your can use to test you Flow in bulk. For example, classification accuracy, QnA Groundedness, QnA Relevant, QnA Similarity, QnA F1 Score etc.  This enables you to test how well your LLM is performing.  In addition, you have the ability to examine which of your variant prompts are performing better.  In this example, we\u2019ll use the ",(0,o.jsx)(t.strong,{children:"QnA RAG Evaluation"})," template to test our flow."]}),"\n",(0,o.jsx)(t.h2,{id:"import-chatbot-flow-from-local-to-cloud",children:"import chatbot flow from local to cloud"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Open Azure Machine Learning Studio (",(0,o.jsx)(t.a,{href:"https://ml.azure.com/",children:"https://ml.azure.com/"}),"). The click on the ",(0,o.jsx)(t.strong,{children:"Prompt flow"})," navigation option on the left-hand side of the screen."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(5844).Z+"",width:"1531",height:"499"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"+ Create"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:["Scroll down the pane and to the ",(0,o.jsx)(t.strong,{children:"Import"})," section.  Then click on the ",(0,o.jsx)(t.strong,{children:"Upload"})," button the ",(0,o.jsx)(t.strong,{children:"Upload from local"})," ."]}),"\n",(0,o.jsxs)(t.li,{children:["On the ",(0,o.jsx)(t.strong,{children:"Upload from local"})," pane, click on the ",(0,o.jsx)(t.strong,{children:"Browse"})," button and select the ",(0,o.jsx)(t.strong,{children:"master"})," folder from the workshop repo directory."]}),"\n",(0,o.jsxs)(t.li,{children:["Enter ",(0,o.jsx)(t.strong,{children:"Folder Name"}),"  pane (e.g. dental_chatbot)."]}),"\n",(0,o.jsxs)(t.li,{children:["Select ",(0,o.jsx)(t.strong,{children:"Chat"})," from the ",(0,o.jsx)(t.strong,{children:"Select flow type"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Click on the ",(0,o.jsx)(t.strong,{children:"upload"})," button. The flow will be open in your Azure Machine Learning studio."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"create-connection-to-azureopenai",children:"Create connection to AzureOpenAI"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Click on the ",(0,o.jsx)(t.strong,{children:"Prompt flow"})," navigation option"]}),"\n",(0,o.jsxs)(t.li,{children:["Click on the ",(0,o.jsx)(t.strong,{children:"Connections"})," tab on the Prompt Flow page"]}),"\n",(0,o.jsxs)(t.li,{children:["Click on the ",(0,o.jsx)(t.strong,{children:"Create"})," button, then select ",(0,o.jsx)(t.strong,{children:"Azure OpenAI"})," option in the drop-down menu"]}),"\n",(0,o.jsxs)(t.li,{children:["Enter a ",(0,o.jsx)(t.strong,{children:"Name"})]}),"\n",(0,o.jsxs)(t.li,{children:["The Azure OpenAI option should be selected for ",(0,o.jsx)(t.strong,{children:"Provider"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Select your subscription under ",(0,o.jsx)(t.strong,{children:"Subscription id"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Select your OpenAI instance name under ",(0,o.jsx)(t.strong,{children:"Azure OpenAI Account Names"})," drop-down menu."]}),"\n",(0,o.jsxs)(t.li,{children:["Paste the Key 1 value for Azure OpenAI you copied earlier in the ",(0,o.jsx)(t.strong,{children:"API key"})," textbox."]}),"\n",(0,o.jsxs)(t.li,{children:["Paste the Language API URL you copied earlier in the ",(0,o.jsx)(t.strong,{children:"API base"})," textbox."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"API type"})," should be set to the default value (e.g. azure)"]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"API version"})," should be set to the default value (e.g. 2023-07-01-preview)"]}),"\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.strong,{children:"Save"})]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"add-azureopenai-connection-to-chatbot-flow",children:"Add AzureOpenAI connection to chatbot flow"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Click on the ",(0,o.jsx)(t.strong,{children:"Flows"})," tab on the Prompt Flow page."]}),"\n",(0,o.jsxs)(t.li,{children:["Select the ",(0,o.jsx)(t.strong,{children:"Flow name"})," you created earlier (e.g. dental_chatbot)."]}),"\n",(0,o.jsxs)(t.li,{children:["On the ",(0,o.jsx)(t.strong,{children:"embed_question"})," node, click on the ",(0,o.jsx)(t.strong,{children:"connection"})," textbox and select your AzureOpenAI connection name."]}),"\n",(0,o.jsxs)(t.li,{children:["On the ",(0,o.jsx)(t.strong,{children:"prompt_answer"})," node, click on the ",(0,o.jsx)(t.strong,{children:"connection"})," drop-down menu and select your AzureOpenAI connection name.  Then select yoar AzureOpenAI ",(0,o.jsx)(t.strong,{children:"deployment_name"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["In the ",(0,o.jsx)(t.strong,{children:"Output"})," section, click on the ",(0,o.jsx)(t.strong,{children:"Add output"}),". Then enter ",(0,o.jsx)(t.strong,{children:"context"})," for the ",(0,o.jsx)(t.strong,{children:"Name"})," and ",(0,o.jsx)(t.code,{children:"*${search_vector_index.output}*"})," for the ",(0,o.jsx)(t.strong,{children:"value"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Click on ",(0,o.jsx)(t.strong,{children:"Save"})," button on the top right-hand side of the screen."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"evaluate-chatbot-flow",children:"Evaluate chatbot flow"}),"\n",(0,o.jsxs)(t.p,{children:["1..Click on the ",(0,o.jsx)(t.strong,{children:"Evaluate"})," button on the top right-side of the screen."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(4157).Z+"",width:"975",height:"101"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:["On the ",(0,o.jsx)(t.strong,{children:"Batch run & Evaluate"})," page, select the ",(0,o.jsx)(t.strong,{children:"Next"})," button"]}),"\n",(0,o.jsxs)(t.li,{children:["On the Batch run settings page, click on ",(0,o.jsx)(t.strong,{children:"Add new data"})," link for the ",(0,o.jsx)(t.strong,{children:"Data"})," field."]}),"\n",(0,o.jsxs)(t.li,{children:["Enter ",(0,o.jsx)(t.strong,{children:"Name"})," on the Add new data pane (e.g. Contoso-Dental). Then ",(0,o.jsx)(t.strong,{children:"Browse"})," to the workshop repo directory and select the ",(0,o.jsx)(t.strong,{children:"contoso-dental.csv"})," file from the ",(0,o.jsx)(t.em,{children:"/data"})," folder."]}),"\n",(0,o.jsxs)(t.li,{children:["Click on the ",(0,o.jsx)(t.strong,{children:"Add"})," button.   A preview of the top 5 rows of the data should be displayed at the bottom of the page."]}),"\n",(0,o.jsxs)(t.li,{children:["Under Input mapping, enter the open and close brackets ",(0,o.jsx)(t.strong,{children:"[]"})," for the value of ",(0,o.jsx)(t.strong,{children:"chat_history"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Click in the Value textbox for the ",(0,o.jsx)(t.strong,{children:"question"})," field and enter ",(0,o.jsx)(t.code,{children:"*${data.question}*"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(1607).Z+"",width:"975",height:"523"})}),"\n",(0,o.jsxs)(t.ol,{start:"10",children:["\n",(0,o.jsxs)(t.li,{children:["Click the ",(0,o.jsx)(t.strong,{children:"Next"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:["On the ",(0,o.jsx)(t.strong,{children:"Select evaluation"})," page, select the checkbox for the ",(0,o.jsx)(t.strong,{children:"QnA RAG Evaluation"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(7450).Z+"",width:"1475",height:"807"})}),"\n",(0,o.jsxs)(t.ol,{start:"12",children:["\n",(0,o.jsxs)(t.li,{children:["Click the ",(0,o.jsx)(t.strong,{children:"Next"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:["Click on the right arrow ",(0,o.jsx)(t.strong,{children:"\u201c>\u201d"})," to expand the ",(0,o.jsx)(t.strong,{children:"QnA RAG Evaluation"})," settings."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(5554).Z+"",width:"975",height:"456"})}),"\n",(0,o.jsxs)(t.ol,{start:"14",children:["\n",(0,o.jsxs)(t.li,{children:["Select the dataset your uploaded earlier for the ",(0,o.jsx)(t.strong,{children:"Choose data asset for evaluation"})," field."]}),"\n",(0,o.jsxs)(t.li,{children:["For the ",(0,o.jsx)(t.strong,{children:"metric"})," field, cope and paste the following text:"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"gpt_groundedness,gpt_retrieval_score,gpt_relevance  \n"})}),"\n",(0,o.jsxs)(t.ol,{start:"16",children:["\n",(0,o.jsxs)(t.li,{children:["Enter ",(0,o.jsx)(t.code,{children:"*${run.outputs.answer}*"})," for the ",(0,o.jsx)(t.strong,{children:"answer"})," field."]}),"\n",(0,o.jsxs)(t.li,{children:["Click on the Data Source textbox and enter ",(0,o.jsx)(t.code,{children:"*${data.question}*"})," for the ",(0,o.jsx)(t.strong,{children:"question"})," field."]}),"\n",(0,o.jsxs)(t.li,{children:["Enter ",(0,o.jsx)(t.code,{children:"*${run.outputs.context}*"})," for the ",(0,o.jsx)(t.strong,{children:"documents"}),"field."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(4910).Z+"",width:"1383",height:"440"})}),"\n",(0,o.jsxs)(t.ol,{start:"19",children:["\n",(0,o.jsx)(t.li,{children:"On the right-hand side of the page, scroll down to the bottom of the page."}),"\n",(0,o.jsxs)(t.li,{children:["Select your AzureOpenAI connection name for the ",(0,o.jsx)(t.strong,{children:"Connection"})," fields."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"Deployment name / Model"})," should automatically population the your AzureOpenAI deployment name."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(2658).Z+"",width:"973",height:"441"})}),"\n",(0,o.jsxs)(t.ol,{start:"20",children:["\n",(0,o.jsxs)(t.li,{children:["Click the ",(0,o.jsx)(t.strong,{children:"Next"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:["Finally, click on the ",(0,o.jsx)(t.strong,{children:"Submit"})," button."]}),"\n",(0,o.jsxs)(t.li,{children:["To monitor the run progress, click on the ",(0,o.jsx)(t.strong,{children:"Prompt flow"})," navigation option.  Then click on the ",(0,o.jsx)(t.strong,{children:"Runs"})," tab"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(8539).Z+"",width:"1242",height:"440"})}),"\n",(0,o.jsxs)(t.ol,{start:"23",children:["\n",(0,o.jsx)(t.li,{children:"Click the Refresh button to update the run status. The run should take ~15 minutes."}),"\n",(0,o.jsxs)(t.li,{children:["Click on the radio button for the QnA RAG Evaluation, the press the ",(0,o.jsx)(t.strong,{children:"Visualize outputs"})," to view the results."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(7673).Z+"",width:"1242",height:"423"})}),"\n",(0,o.jsxs)(t.ol,{start:"25",children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"Runs & metrics"})," section shows a summary score for gpt_groundedness, gpt_retrieval_score, and gpt_relevance.  The ",(0,o.jsx)(t.strong,{children:"Outputs"})," section shows the detailed results for each of the 3 metrics."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(7812).Z+"",width:"1815",height:"842"})}),"\n",(0,o.jsxs)(t.ol,{start:"27",children:["\n",(0,o.jsx)(t.li,{children:"The score will range from 1 to 5, where 1 is the worst and 5 is the best performance."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(t.p,{children:"In this lab, we learned that while building generate AI solution, it is important to apply responsible AI principles. We learn that even when an AI app provides the correct answer, it is important to validate that the answer is grounded to the context it's data source.  Even when the answer is grounded, it is important to validate that the answer is relevant to the question.  Finally, it is important to validate that the answer is similar to the answer provided by the data source.  In the content of Contoso dental clinc, we learn the important of the chatbox giving out information that pertain to their specific clinic."}),"\n",(0,o.jsx)(t.p,{children:"Next, we learn how vector index are useful in storing and retrieving custom data, instead of using a pre-trained LLM where the data may be out of date or not relevance to your unique use case."}),"\n",(0,o.jsx)(t.p,{children:"Finally, we learn how vector embedding is useful in converting text to numeric representation. This makes if useful in storing data base on thier relationship distance and similarity.  Search is quicker and more accurate when using vector embedding."})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},2658:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/evaluate-connection-9b5fae9aa674bd383e1a47a47613052a.png"},1607:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/evaluate-input-flow-1308009d35933c4050b93212a44d7446.png"},5554:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/evaluate-qna-fields-cb1170858c26305ea944cc434a6f9625.png"},7812:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/evaluate-results-9ea135abf486f1a6ce3ea3eba2301302.png"},4157:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/evaluate-aede03a9caf52891e4663a930f336b76.png"},7450:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/evaluation-gallery-0f7ded3f4413d56306bd078147000e21.png"},5844:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pf-prompt-flow-menu-ec2010170d2dcb37ea6031580d63c8f1.png"},4910:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pf-rag-eval-input-efd911a0d3c894ebb742938f31d0e43b.png"},7673:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pf-visualize-output-717ae69e97e745bca3761eaa741b51b7.png"},8539:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/start-evaluate-61f66a3b2560fe8d78e923720a0dd77b.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var o=n(7294);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);