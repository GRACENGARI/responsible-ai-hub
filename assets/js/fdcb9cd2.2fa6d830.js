"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[137],{387:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var t=o(5893),s=o(1151);const c={id:"pf-access-conn-keys-lab2'",title:"Lab# 2: Access Connection Keys",sidebar_position:2,slug:"/access-connection-keys"},i=void 0,r={id:"azure-prompt-flow/lab2-access-connection-data/pf-access-conn-keys-lab2'",title:"Lab# 2: Access Connection Keys",description:"Before we can run promptflow, we\u2019ll need to retrieve details on the Azure OpenAI API instance provisioned in your Azure account.",source:"@site/docs/azure-prompt-flow/lab2-access-connection-data/lab2-launch-github-codespace.md",sourceDirName:"azure-prompt-flow/lab2-access-connection-data",slug:"/access-connection-keys",permalink:"/docs/access-connection-keys",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"pf-access-conn-keys-lab2'",title:"Lab# 2: Access Connection Keys",sidebar_position:2,slug:"/access-connection-keys"},sidebar:"promptFlowSidebar",previous:{title:"Exercise# 1: Build Workshop Environment",permalink:"/docs/build-workshop-enviroment"},next:{title:"Lab# 3: Run chatbot template",permalink:"/docs/run-chatbot-template"}},a={},l=[{value:"Add Flow connections",id:"add-flow-connections",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Before we can run promptflow, we\u2019ll need to retrieve details on the Azure OpenAI API instance provisioned in your Azure account."}),"\n",(0,t.jsx)(n.p,{children:"Azure OpenAI"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open the ",(0,t.jsx)(n.a,{href:"http://portal.azure.com/",children:"Azure portal"}),", in the search box type ",(0,t.jsx)(n.strong,{children:"Azure OpenAI"}),", then press enter to search your resource."]}),"\n",(0,t.jsx)(n.li,{children:"Click on Azure OpenAI from the list of services.  You should see your OpenAI name list on the Azure AI Services page for Azure OpenAI"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(3356).Z+"",width:"1038",height:"273"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Click on your OpenAI instance."}),"\n",(0,t.jsx)(n.li,{children:"Under Resource Management, select the Keys and Endpoint on the left-hand side of the navigation bar"}),"\n",(0,t.jsxs)(n.li,{children:["Copy ",(0,t.jsx)(n.strong,{children:"Key 1"})," and the ",(0,t.jsx)(n.strong,{children:"Language APIs URL"}),".  Store both values in a clipboard for later use"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(3356).Z+"",width:"1038",height:"273"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Click on Overview on the left-hand side of the navigation bar."}),"\n",(0,t.jsx)(n.li,{children:"On the Overview page, click on the Explore button"}),"\n",(0,t.jsx)(n.li,{children:"Click on Deployments on the left side of the navigation"}),"\n",(0,t.jsx)(n.li,{children:"Copy both the deployment name for the gpt-35-turbo model and text-embedding-ada-002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(7388).Z+"",width:"1066",height:"395"})}),"\n",(0,t.jsxs)(n.ol,{start:"11",children:["\n",(0,t.jsx)(n.li,{children:"Close the browse tab for the Azure OpenAI Studio"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"add-flow-connections",children:"Add Flow connections"}),"\n",(0,t.jsx)(n.p,{children:"As you work on creating Flows, it may have dependencies, services or external resources that you would need to connect to; such as OpenAI, Content Safety AI or your custom LLM models.  It enables users to add and manage connection to these resources as well as a their connection secrets (e.g. name, api key, api_endpoint, or type)."}),"\n",(0,t.jsx)(n.p,{children:"We\u2019ll add the connection for Azure OpenAI API."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open the browser the tab for the GitHub Codespaces for Visual Studio Code."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command to create a connect to Azure OpenAI:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pf connection create --file connection/openai.yml --set api_key=your_api_key --name open_ai_conn\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3356:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/azure-open-ai-e77e3b7fbc572558922e48ec4ec150a3.png"},7388:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/openai-deployment-52aaefcacc9aa044c3ab2a680dcf7c82.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>i});var t=o(7294);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);