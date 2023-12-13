"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[545],{6737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=t(5893),s=t(1151);const a={id:"cs-setup-azure-conn-lab3'",title:"Lab# 3: Setup Azure connections",sidebar_position:3,slug:"/setup-azure-connections"},i=void 0,c={id:"azure-content-safety/lab3-setting-azure-connections/cs-setup-azure-conn-lab3'",title:"Lab# 3: Setup Azure connections",description:"You run this lab you will need to authenticate to Azure and set your Azure subscription.  You will also need to set the Azure Content Safety endpoint and key as environment variables in the notebook.  The following steps will walk you through the process.",source:"@site/docs/azure-content-safety/lab3-setting-azure-connections/lab3-setup-azure-connection.md",sourceDirName:"azure-content-safety/lab3-setting-azure-connections",slug:"/setup-azure-connections",permalink:"/docs/setup-azure-connections",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"cs-setup-azure-conn-lab3'",title:"Lab# 3: Setup Azure connections",sidebar_position:3,slug:"/setup-azure-connections"},sidebar:"contentSafetySidebar",previous:{title:"Lab# 2: Launch GitHub codespaces project",permalink:"/docs/content-safety-codespaces"},next:{title:"Lab# 4: Analyze Text",permalink:"/docs/content-safety-analyze-text"}},r={},u=[];function l(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"You run this lab you will need to authenticate to Azure and set your Azure subscription.  You will also need to set the Azure Content Safety endpoint and key as environment variables in the notebook.  The following steps will walk you through the process."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Set your conda environment to Python 3.8"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"conda activate py38_env\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"At the commmand prompt, authenticate to Azure by running the following command:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"az login --use-device-code\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Enter the code provided in the browser to authenticate to Azure.  Once authenticated, you need to set your Azure subscription."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"az account set --subscription <your-subscription-id>\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(7294);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);