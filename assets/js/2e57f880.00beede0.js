"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{8612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var s=n(5893),o=n(1151);const i={id:"pf-chatbot-with-your-data-lab5'",title:"Lab# 5: Chatbot with your data",sidebar_position:5,slug:"/chatbot-with-your-data"},r=void 0,l={id:"azure-prompt-flow/portal/lab5-chatbot-with-your-data/pf-chatbot-with-your-data-lab5'",title:"Lab# 5: Chatbot with your data",description:"In the precise exercise you create a vector index and train to search for your vector embeddings.  In this exercise, you\u2019ll be expanding the Chat pipeline logic to take the user question and convert to numeric embeddings.  Then we\u2019ll use the numeric embedding to search the numeric vector.  Next, we\u2019ll use the prompt to set rules with restrictions and how to display the data to the user.",source:"@site/docs/azure-prompt-flow/portal/lab5-chatbot-with-your-data/lab5-chatbot-with-your-data.md",sourceDirName:"azure-prompt-flow/portal/lab5-chatbot-with-your-data",slug:"/chatbot-with-your-data",permalink:"/responsible-ai-hub/docs/chatbot-with-your-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"pf-chatbot-with-your-data-lab5'",title:"Lab# 5: Chatbot with your data",sidebar_position:5,slug:"/chatbot-with-your-data"},sidebar:"promptFlowSidebar",previous:{title:"Lab# 4: Create chatbot template",permalink:"/responsible-ai-hub/docs/create-chatbot-template"},next:{title:"Lab# 6: Evaluate chatbot",permalink:"/responsible-ai-hub/docs/evaluate-chatbot"}},a={},h=[{value:"Test Chat with your own data",id:"test-chat-with-your-own-data",level:2},{value:"Handle Groundedness &amp; Hallucinations",id:"handle-groundedness--hallucinations",level:2}];function c(e){const t={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In the precise exercise you create a vector index and train to search for your vector embeddings.  In this exercise, you\u2019ll be expanding the Chat pipeline logic to take the user question and convert to numeric embeddings.  Then we\u2019ll use the numeric embedding to search the numeric vector.  Next, we\u2019ll use the prompt to set rules with restrictions and how to display the data to the user."}),"\n",(0,s.jsx)(t.p,{children:"We'll be using the following tools:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Embedding"}),": converts text to number tokens.  Store to token in vector arrays based on then relation to each other."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Vector index lookup"}),": Takes user input question and queries the vector index with the closest answers to the question."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Prompt"}),": enters user to add rules on the response show be sent to user"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"LLM"}),": provides the LLM prompt or LLM model response to user"]}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Open the Flow page, by clicking ",(0,s.jsx)(t.strong,{children:"Prompt Flow"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Close the ",(0,s.jsx)(t.strong,{children:"Chat"})," dialog pane."]}),"\n",(0,s.jsxs)(t.li,{children:["On the Flow toolbar, click on ",(0,s.jsx)(t.strong,{children:"More tools"}),".  Then select the ",(0,s.jsx)(t.strong,{children:"Embedding tool"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(6398).Z+"",width:"358",height:"427"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.strong,{children:"Name"})," for the node (e.g. embed_question)."]}),"\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Add"})," button."]}),"\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.strong,{children:"AzureOpenAIconnection"})," name you created earlier."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Text-embedding-ada-002"})," deployment name you created earlier"]}),"\n",(0,s.jsxs)(t.li,{children:["For ",(0,s.jsx)(t.strong,{children:"Input"}),", select ",(0,s.jsx)(t.code,{children:"${inputs.question}"}),".  This should create a node under the input node."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(474).Z+"",width:"1280",height:"327"})}),"\n",(0,s.jsxs)(t.ol,{start:"9",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Save"})," button"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["On the Flow toolbar, click on ",(0,s.jsx)(t.strong,{children:"More tools"}),".  Then select the Vector Index Lookup tool.  This will generate a new ",(0,s.jsx)(t.strong,{children:"Vector Index Lookup"})," section at the bottom of the flow."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Enter ",(0,s.jsx)(t.strong,{children:"Name"})," for the node (e.g. search_vector_index)."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Add"})," button"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["For ",(0,s.jsx)(t.strong,{children:"Path"}),", copy and paste the Datastore URI you retrieve earlier for the vector index."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select the embedding output as the ",(0,s.jsx)(t.strong,{children:"query"})," field (e.g. ",(0,s.jsx)(t.code,{children:"${embed_question.output}"})," )."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Leave default value for ",(0,s.jsx)(t.strong,{children:"top_k"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(474).Z+"",width:"1280",height:"327"})}),"\n",(0,s.jsxs)(t.ol,{start:"16",children:["\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Save"})," button"]}),"\n",(0,s.jsxs)(t.li,{children:["On the Flow toolbar, click on ",(0,s.jsx)(t.strong,{children:"Prompt"})," tool. This will generate a new Prompt section at the bottom of the flow."]}),"\n",(0,s.jsxs)(t.li,{children:["Enter a ",(0,s.jsx)(t.strong,{children:"Name"})," for the node (e.g. generate_prompt).  Then click the ",(0,s.jsx)(t.strong,{children:"Add"})," button."]}),"\n",(0,s.jsx)(t.li,{children:"Copy the following text in the Prompt textbox:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"system:\nYou are an AI system designed to answer questions. When presented with a scenario, you must reply with accuracy to inquirers' inquiries.  If there is ever a situation where you are unsure of the potential answers, simply respond with \"I don't know.  \n\ncontext: {{contexts}}\n\n{% for item in chat_history %}\nuser:\n{{item.inputs.question}}\nassistant:\n{{item.outputs.answer}}\n{% endfor %}\n\nuser:\n{{question}}\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"20",children:["\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Validate and parse input"})," button to generate the input field for the prompt."]}),"\n",(0,s.jsxs)(t.li,{children:["Select the ",(0,s.jsx)(t.code,{children:"${inputs.chat_history}"})," for ",(0,s.jsx)(t.strong,{children:"chat_history"})]}),"\n",(0,s.jsxs)(t.li,{children:["For ",(0,s.jsx)(t.strong,{children:"contexts"}),", select ",(0,s.jsx)(t.code,{children:"${Search_Vector_Index.output}"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.code,{children:"${inputs.question}"})," for the ",(0,s.jsx)(t.strong,{children:"question"})," field."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(8984).Z+"",width:"975",height:"549"})}),"\n",(0,s.jsxs)(t.ol,{start:"24",children:["\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Save"})," button"]}),"\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"chat"})," node and drag it below the ",(0,s.jsx)(t.strong,{children:"generate_prompt"})," node"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(242).Z+"",width:"350",height:"424"})}),"\n",(0,s.jsxs)(t.ol,{start:"26",children:["\n",(0,s.jsxs)(t.li,{children:["Under the ",(0,s.jsx)(t.strong,{children:"Flow"})," pane, scroll up to the ",(0,s.jsx)(t.strong,{children:"chat"})," section"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(3836).Z+"",width:"975",height:"363"})}),"\n",(0,s.jsxs)(t.ol,{start:"27",children:["\n",(0,s.jsx)(t.li,{children:"Copy and paste the following text in the Prompt textbox.  This specifies the output to display to the user:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"{{prompt_response}}\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"28",children:["\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Validate and parse input"})," button to regenerate a new input field. Prompt Flow will generate the text metadata you specified in the Prompt textbox."]}),"\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.strong,{children:"Prompt_response"})," value, select ",(0,s.jsx)(t.code,{children:"${generate_prompt.output}"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Save"})," button"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"test-chat-with-your-own-data",children:"Test Chat with your own data"}),"\n",(0,s.jsx)(t.p,{children:"Now that you have updated the prompt flow logic to you use your own data and process the output, let\u2019s see if the Chat will generate more relevant information pertaining to our Contoso dental data.  First let clear the chat history, so the question is not base not the prior responses from our OpenAI model."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"To clear the prior chat history, click on the dialog icon next to the input textbox."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(9822).Z+"",width:"706",height:"182"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Click on the Chat button to test the new flow"}),"\n",(0,s.jsx)(t.li,{children:"Enter the following question:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"what is the dental hospital address?\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:"You should get the following response:"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(9428).Z+"",width:"620",height:"347"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsx)(t.li,{children:"Next, enter the following question:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"What is the clinic's phone number?\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsx)(t.li,{children:"You should get the following response:"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(4322).Z+"",width:"949",height:"314"})}),"\n",(0,s.jsxs)(t.ol,{start:"8",children:["\n",(0,s.jsx)(t.li,{children:"Finally, enter the following what questions:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"My tooth is aching really bad.  What could be the cause?\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"9",children:["\n",(0,s.jsx)(t.li,{children:"You should get the following response:"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(444).Z+"",width:"907",height:"422"})}),"\n",(0,s.jsx)(t.h2,{id:"handle-groundedness--hallucinations",children:"Handle Groundedness & Hallucinations"}),"\n",(0,s.jsx)(t.p,{children:"Always an LLM model may be eager to provide the user with a response.  It\u2019s important to make sure that the model is not providing response to questions that are out of scope with subject domain of your data.  Another issue is the response may provide information that is not factual and, in some cases, even provide reference to the answer that appears legitimate.  This is a risk, because the information provided to the user can have negative or harmful consequences."}),"\n",(0,s.jsx)(t.p,{children:"Grounding test"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["On ",(0,s.jsx)(t.strong,{children:"generate_prompt"})," section of the Flow pane, click on **Generate variants^^ button."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.strong,{children:"Connection"})," for your Azure OpenAI"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Next, select the ",(0,s.jsx)(t.strong,{children:"Deployment"})," name."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"Submit"})," button.  These will generate a ",(0,s.jsx)(t.strong,{children:"Variant_1"})," prompt section."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"In the prompt textbox, copy and paste the following text:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"System: \nAs an AI Assistant Prompt Engineer, I need you to generate a response to the user's question.  Please cite your sources.\n\ncontext: {{contexts}}\n\n{% for item in chat_history %}\nuser:\n{{item.inputs.question}}\nassistant:\n{{item.outputs.answer}}\n{% endfor %}\n\nuser:\n{{question}}\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Save"})," button"]}),"\n",(0,s.jsx)(t.li,{children:"Now, enter the following question:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"Which supplements are good for teeth?\n"})}),"\n",(0,s.jsx)(t.p,{children:"As you can see, our chat produces a response that is factual but not in our Contoso dental data. This is an example of a groundedness issue. This is a safety risk, because if the recommendation provided makes a user sick or have a bad reaction. It can have negative consequences for Contoso dental clinic."})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},9822:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/00-clear-chat-history-08c204582c774fc704cdcaa9b6f4c4ad.png"},3836:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/chat-node-input-c3a7a45f477e3c2827043d487d1c8376.png"},242:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/chat-node-a559006b1f5cfc83dbb2123788e5a588.png"},9428:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/dental-clinic-address-3d0d1fb633b14cfb7e7cc5f28664cafa.png"},4322:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/dental-clinic-phone-fef1f5954a93fda0318f3322a430fa26.png"},6398:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/flow-tools-480fe56a56c497cfde43713c215a0380.png"},8984:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/output_prompt-dc4d757017594755a8a91c48523b4613.png"},474:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/search-vector-88b150e9f60372e4d3085f7752d00b11.png"},444:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/toothache-ebac0648e6e3b80f596721f875f30a7f.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var s=n(7294);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);