"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[294],{5202:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=s(5893),o=s(1151);const r={id:"prompt-flow-lab1",title:"Exercise# 1: Build Workshop Environment",sidebar_position:1,slug:"/build-workshop-enviroment"},i=void 0,l={id:"azure-prompt-flow/lab1-build-workshop-env/prompt-flow-lab1",title:"Exercise# 1: Build Workshop Environment",description:"To get started, you can use a pre-built development environment. Click the button below to open the repo in GitHub Codespaces, and then continue the readme!",source:"@site/docs/azure-prompt-flow/lab1-build-workshop-env/lab1-build-workshop-env.md",sourceDirName:"azure-prompt-flow/lab1-build-workshop-env",slug:"/build-workshop-enviroment",permalink:"/responsible-ai-hub/docs/build-workshop-enviroment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"prompt-flow-lab1",title:"Exercise# 1: Build Workshop Environment",sidebar_position:1,slug:"/build-workshop-enviroment"},sidebar:"promptFlowSidebar",previous:{title:"Prompt Flow Overview",permalink:"/responsible-ai-hub/docs/prompt-flow-overview"},next:{title:"Lab# 2: Access Connection Keys",permalink:"/responsible-ai-hub/docs/access-connection-keys"}},c={},a=[];function d(e){const n={a:"a",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["To get started, you can use a pre-built development environment. ",(0,t.jsx)(n.strong,{children:"Click the button below"})," to open the repo in GitHub Codespaces, and then continue the readme!"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://codespaces.new/Azure-Samples/rai-prompt-flow-workshop?quickstart=1",children:(0,t.jsx)(n.img,{src:"https://github.com/codespaces/badge.svg",alt:"Open in GitHub Codespaces"})})}),"\n",(0,t.jsx)(n.p,{children:"This will launch a Codespaces environment with all the dependencies installed.  Once the environment is ready, you can run the following commands to create the Azure resources and run the sample code."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": You can also access the codespaces by clicking on the green ",(0,t.jsx)(n.strong,{children:"Code"}),' button in the top right of the repo.  Then selecting the "Codespaces" tab and clicking on the ',(0,t.jsx)(n.strong,{children:"Create codespace on main"})," button to launch the Codespaces environement."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(6657).Z+"",width:"907",height:"403"})}),"\n",(0,t.jsx)(n.p,{children:"This will launch a Codespaces environment with all the dependencies installed.  Once the environment is ready. This will take ~ 10 minutes."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(5302).Z+"",width:"918",height:"643"})}),"\n",(0,t.jsx)(n.p,{children:"When the environment is ready, a Visual Studio Code editor will open."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(1323).Z+"",width:"1893",height:"612"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"At the commmand prompt, set the python environment to Python 3.8"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"conda activate py38_env\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Authenticate to Azure by running the following command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"az login --use-device-code\n"})}),"\n",(0,t.jsx)(n.p,{children:"Enter the code provided in the browser to authenticate to Azure."}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Once authenticated, you need to set your Azure subscription."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"az account set --subscription <your-subscription-id>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Create a resource group in the region closest to you."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"az group create --name <resource-group-name> --location <region-name>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Set the resource group as the default resource group for the Azure CLI."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"az configure --defaults group=<resource-group-name>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"If you **do not ** have an Azure OpenAI available in your subscription, complete the step."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Otherwise, run the following command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"az deployment group create --name rai-workshop --template-file main.bicep \n"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"See the environment variables for your resources."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"bash setenv.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"The setup creates the following Azure resources:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create Azure OpenAI"}),"\n",(0,t.jsx)(n.li,{children:"Add deployment OpenAI models"}),"\n",(0,t.jsx)(n.li,{children:"Create Azure ML workspace"}),"\n",(0,t.jsx)(n.li,{children:"Create Azure ML compute"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6657:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gh-codespaces-4cf3c241fd8a0d3297ae2a833a561a11.png"},5302:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/github-load-codespaces-ee0e86a8dbe4170ff0160033a567b5b8.png"},1323:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/vsc-prompt-54cf0f9afa71af81af279a2fc9d77e98.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var t=s(7294);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);