"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[233],{1861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(5893),o=t(1151);const r={id:"content-safety-lab2'",title:"2\ufe0f\u20e3 | Create Azure Content Safety",sidebar_position:2,slug:"/content-safety/resource"},i=void 0,a={id:"azure-content-safety/lab-exercises/content-safety-lab2'",title:"2\ufe0f\u20e3 | Create Azure Content Safety",description:"To complete this lesson, you would need a Azure OpenAI and Azure Content Safety. If you don't have OpenAI in your subscription, you'll only be creating an Azure Content Safety resource.",source:"@site/docs/azure-content-safety/lab-exercises/2-create-content-safety.md",sourceDirName:"azure-content-safety/lab-exercises",slug:"/content-safety/resource",permalink:"/responsible-ai-hub/docs/content-safety/resource",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"content-safety-lab2'",title:"2\ufe0f\u20e3 | Create Azure Content Safety",sidebar_position:2,slug:"/content-safety/resource"},sidebar:"contentSafetySidebar",previous:{title:"1\ufe0f\u20e3 | Launch GitHub Codespaces",permalink:"/responsible-ai-hub/docs/content-safety/codespaces"},next:{title:"3\ufe0f\u20e3 | Analyze Text",permalink:"/responsible-ai-hub/docs/content-safety-analyze-text"}},c={},l=[];function u(e){const n={admonition:"admonition",code:"code",em:"em",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"To complete this lesson, you would need a Azure OpenAI and Azure Content Safety. If you don't have OpenAI in your subscription, you'll only be creating an Azure Content Safety resource."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"At the commmand prompt, set the python environment to Python 3.8"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"conda activate py38_env\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Authenticate to Azure by running the following command:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"az login --use-device-code\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enter the code provided in the browser to authenticate to Azure."}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Once authenticated, you need to set your Azure subscription."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"az account set --subscription <your-subscription-id>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Create a resource group in the region closest to you."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"az group create --name <resource-group-name> --location <region-name>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To find an Azure region that is closest to you. Pick a location name close to you to use for this workshop (e.g. ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"westus"})}),",  ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"eastus"})})," ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"westeurope"})}),", ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"southafricanorth"})}),",... etc)."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'az account list-locations --query "[*].name" --out tsv | sort\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Set the resource group as the default resource group for the Azure CLI."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"az configure --defaults group=<resource-group-name>\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"If you DO NOT Azure OpenAI available in your subscription, run the following command. Otherwise, use the command in the next step.",type:"warning"}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["Use if you ",(0,s.jsx)(n.strong,{children:"DO NOT HAVE Azure OpenAI"})," available in your subscription, run:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"az deployment group create --name rai-workshop --template-file no-openai/main.bicep \n"})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsxs)(n.li,{children:["Use if you ",(0,s.jsx)(n.strong,{children:"HAVE Azure OpenAI"})," available in your subscription, run:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"az deployment group create --name rai-workshop --template-file use-openai/main.bicep \n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE"}),":  You will receive an OpenAI error if you do not have OpenAI in your subscription."]}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:"See the environment variables for your resources."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"bash setenv.sh\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(7294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);