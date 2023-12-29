"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[999],{7307:(e,A,n)=>{n.r(A),n.d(A,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=n(5893),o=n(1151);const r={id:"pf-add-flow-connection-lab3'",title:"Lab# 3: Add flow connections",sidebar_position:3,slug:"/add-flow-connections"},s=void 0,c={id:"azure-prompt-flow/portal/lab3-add-flow-connections/pf-add-flow-connection-lab3'",title:"Lab# 3: Add flow connections",description:"To use Prompt Flow, you need to enable the feature in Azure ML studio.  To enable the feature, complete the following steps:",source:"@site/docs/azure-prompt-flow/portal/lab3-add-flow-connections/lab3-add-flow-connection.md",sourceDirName:"azure-prompt-flow/portal/lab3-add-flow-connections",slug:"/add-flow-connections",permalink:"/responsible-ai-hub/docs/add-flow-connections",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"pf-add-flow-connection-lab3'",title:"Lab# 3: Add flow connections",sidebar_position:3,slug:"/add-flow-connections"},sidebar:"promptFlowSidebar",previous:{title:"Lab# 2: Bring your own data",permalink:"/responsible-ai-hub/docs/bring-your-data"},next:{title:"Lab# 4: Create chatbot template",permalink:"/responsible-ai-hub/docs/create-chatbot-template"}},i={},l=[{value:"Flow connections",id:"flow-connections",level:2},{value:"Create a Runtime",id:"create-a-runtime",level:2}];function a(e){const A={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A.p,{children:"To use Prompt Flow, you need to enable the feature in Azure ML studio.  To enable the feature, complete the following steps:"}),"\n",(0,t.jsxs)(A.ol,{children:["\n",(0,t.jsxs)(A.li,{children:["Open ",(0,t.jsx)(A.a,{href:"https://ml.azure.com/",children:"Azure ML studio"}),", verify that you have the ",(0,t.jsx)(A.strong,{children:"Prompt Flow"})," tab on the left-hand side of the navigation bar."]}),"\n"]}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{src:n(262).Z+"",width:"1864",height:"386"})}),"\n",(0,t.jsxs)(A.ol,{start:"2",children:["\n",(0,t.jsxs)(A.li,{children:["If you don\u2019t see the ",(0,t.jsx)(A.strong,{children:"Prompt Flow"})," tab, click on the bullhorn icon on the upper right corner of the page.\tLocate ",(0,t.jsx)(A.strong,{children:"Easily run prompt flow without worrying about compute and runtime life cycle"}),", switch it to ",(0,t.jsx)(A.strong,{children:"Enabled"})," the feature."]}),"\n",(0,t.jsx)(A.li,{children:"Close the features blade."}),"\n"]}),"\n",(0,t.jsx)(A.h2,{id:"flow-connections",children:"Flow connections"}),"\n",(0,t.jsx)(A.p,{children:"As you work on creating Flows, it may have dependencies, services or external resources that you would need to connect to; such as OpenAI, Content Safety AI or your custom LLM models.  It enables users to add and manage connection to these resources as well as a their connection secrets.  Once a resource is connected, your Flow nodes have access to the resources metadata (e.g. name, api key, api_endpoint, or type).  In this workshop, we\u2019ll be using the Azure OpenAI API and Azure Content Safety."}),"\n",(0,t.jsx)(A.p,{children:"First, we\u2019ll add the connection for Azure OpenAI API."}),"\n",(0,t.jsxs)(A.ol,{children:["\n",(0,t.jsxs)(A.li,{children:["Select the ",(0,t.jsx)(A.strong,{children:"Prompt Flow"})," tab, on the left-hand side of the navigation bar."]}),"\n",(0,t.jsxs)(A.li,{children:["Click on the ",(0,t.jsx)(A.strong,{children:"Connections"})," tab on the Prompt Flow page"]}),"\n",(0,t.jsxs)(A.li,{children:["Click on the ",(0,t.jsx)(A.strong,{children:"Create"})," button, then select ",(0,t.jsx)(A.strong,{children:"Azure OpenAI"})," option in the drop-down menu"]}),"\n",(0,t.jsxs)(A.li,{children:["Enter a ",(0,t.jsx)(A.strong,{children:"Name"})," (e.g. azure-openai-connection)"]}),"\n",(0,t.jsxs)(A.li,{children:["The ",(0,t.jsx)(A.strong,{children:"Azure OpenAI"})," option should be selected for ",(0,t.jsx)(A.strong,{children:"Provider"}),"."]}),"\n",(0,t.jsxs)(A.li,{children:["Select your subscription under ",(0,t.jsx)(A.strong,{children:"Subscription id"}),"."]}),"\n",(0,t.jsxs)(A.li,{children:["Select your OpenAI instance name, you created in the previous lab, under ",(0,t.jsx)(A.strong,{children:"Azure OpenAI Account Names"})," drop-down menu."]}),"\n",(0,t.jsxs)(A.li,{children:["Paste the Key 1 value for Azure OpenAI you copied earlier in the ",(0,t.jsx)(A.strong,{children:"API key"})," textbox."]}),"\n",(0,t.jsxs)(A.li,{children:["Paste the Language API URL you copied earlier in the ",(0,t.jsx)(A.strong,{children:"API base"})," textbox."]}),"\n",(0,t.jsxs)(A.li,{children:["The ",(0,t.jsx)(A.strong,{children:"API type"})," should be set to the default value (e.g. azure)"]}),"\n",(0,t.jsxs)(A.li,{children:["The ",(0,t.jsx)(A.strong,{children:"API version"})," should be set to the default value (e.g. 2023-10-01-preview)"]}),"\n",(0,t.jsxs)(A.li,{children:["Click ",(0,t.jsx)(A.strong,{children:"Save"})]}),"\n"]}),"\n",(0,t.jsx)(A.h2,{id:"create-a-runtime",children:"Create a Runtime"}),"\n",(0,t.jsx)(A.p,{children:"To run the Prompt Flow nodes, you need to create a Runtime.  Runtime serve as the compute with a docker environment for executing the flows.  The Compute instance are the VMs and the environment are create from a docker image that contains the Python packages and dependencies need to run the Flow.  When creating a runtime, you have the option of choosing a default curated environment; or you can create your own custom environment."}),"\n",(0,t.jsx)(A.p,{children:"To create runtime environment, complete the following steps:"}),"\n",(0,t.jsxs)(A.ol,{children:["\n",(0,t.jsxs)(A.li,{children:["Click on the ",(0,t.jsx)(A.strong,{children:"Runtime"})," tab; than click ",(0,t.jsx)(A.strong,{children:"Create"})," button"]}),"\n",(0,t.jsxs)(A.li,{children:["Enter a ",(0,t.jsx)(A.strong,{children:"Runtime name"})]}),"\n",(0,t.jsxs)(A.li,{children:["Select on existing compute under the ",(0,t.jsx)(A.strong,{children:"Select Azure ML compute instance"})," drop-down menu.  If there\u2019s no existing compute instance, click on ",(0,t.jsx)(A.strong,{children:"Create Azure ML compute instance"})]}),"\n"]}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsxs)(A.li,{children:["Enter a ",(0,t.jsx)(A.strong,{children:"Compute name"})]}),"\n",(0,t.jsxs)(A.li,{children:["Select ",(0,t.jsx)(A.strong,{children:"CPU"})," for the ",(0,t.jsx)(A.strong,{children:"Virtual machine type"})]}),"\n",(0,t.jsxs)(A.li,{children:["Select ",(0,t.jsx)(A.strong,{children:"Standard_D12_v2"})," for the ",(0,t.jsx)(A.strong,{children:"Virtual machine size"})]}),"\n",(0,t.jsxs)(A.li,{children:["Click ",(0,t.jsx)(A.strong,{children:"Review + create"})," button.  Then click ",(0,t.jsx)(A.strong,{children:"Create"})," button."]}),"\n"]}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{src:n(3132).Z+"",width:"909",height:"137"})}),"\n",(0,t.jsxs)(A.p,{children:["Wait for the compute instance to be created.  When the compute status is ",(0,t.jsx)(A.strong,{children:"Running"}),", you can proceed to the next step."]}),"\n",(0,t.jsxs)(A.ol,{start:"4",children:["\n",(0,t.jsxs)(A.li,{children:["\n",(0,t.jsxs)(A.p,{children:["For ",(0,t.jsx)(A.strong,{children:"Custom Application"}),", select the ",(0,t.jsx)(A.strong,{children:"New"})," option"]}),"\n"]}),"\n",(0,t.jsxs)(A.li,{children:["\n",(0,t.jsxs)(A.p,{children:["Under ",(0,t.jsx)(A.strong,{children:"Environment"}),", select ",(0,t.jsx)(A.strong,{children:"Use default environment"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(A.li,{children:["\n",(0,t.jsxs)(A.p,{children:["Click on ",(0,t.jsx)(A.strong,{children:"Create"}),".  Then click ",(0,t.jsx)(A.strong,{children:"Confirm"}),", for auto compute restart."]}),"\n"]}),"\n",(0,t.jsxs)(A.li,{children:["\n",(0,t.jsxs)(A.p,{children:["Wait for the runtime status to be ",(0,t.jsx)(A.strong,{children:"Running"}),".  You can keep refreshing the page to check the status."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:A}={...(0,o.a)(),...e.components};return A?(0,t.jsx)(A,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},262:(e,A,n)=>{n.d(A,{Z:()=>t});const t=n.p+"assets/images/00-enable-promptflow-3533be6ae5ebb9365f691d41d3d749e8.png"},3132:(e,A,n)=>{n.d(A,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA40AAACJCAYAAACILd2yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYcAAB2HAY/l8WUAAB73SURBVHhe7d3PayTpfcdx/Qm+6T+YuQTmYGwddTEI4hjZXi9zswI5iBxC45MGksMGDFqIs1pws7o4KIcNYmFNmzCxQHtQ1nvojX1QQGaFjZmeWXtX4/HYmnG8ox3/2CfP96nnqXp+1Y/Wj+5Wz/sFD1Z1VT2/qgzPZ6u6Z0EBAAAAAFCD0AgAAAAAqEVoBAAAAADUIjQCAAAAAGoRGgEAAAAAtQiNAAAAAIBahEYAAAAAQC1CIwAAAACgFqERAAAAAFCL0AgAAAAAqEVoBAAAAADUIjQCAAAAAGoRGgEAAAAAtQiNAAAAAIBa44XG02M12Litlm8uqIUFXW4uq82DU7uzyVBtyfFbQ7s9GaPdVdPPxQm32+xEDdbs/K3vqdzsDbcWi/1rA320sOeU26jouemtqPXdkd2eU49+qN7+q++pY7sJAAAATMoYofFYbS/r4HLzttreG6rhcKgOBptqc69LjLm80Dja66nby9u6xjYjtbOyoNbX19XC4oYantmPp84LjQtrahBP39lQbSza/S9IaOx+TTPODtWWvi+Xtw7VRS/xhfpxZY7V/sv/oPa+/z01ePk19d///o/qrW+/p57ZvQAAAMBV6x4aTwZqTQeZjYPzLM0vLzQOtyRQbbUv7A+31dJCT+2dHKiNc/f7KtgAeHtNrelwuBo9ITvd0yF3qad6QUic79DY+ZpesVnpR+hT9eTRPfWTf/lb9eaNl9R/3T1WHz79VD23ewEAAICr1j00nu6png5fi2u7qu5FwNPhtlpfvmmekt1cXlc7hy6oZULj6VBtry+rm/L5zWW1vhM+KTrx6lq4uap2j/0ndLY0hNDD7SW10JPXP0/VXk8fa/4unAzWwnpMKZ76pcEh6rsNz2s7e2rntvTPHtsynooLgLtqT/q4tO29cljsW90dRiFxzNBoXiNeVbfME8tFdWvjwI79TB3vbXrzqvu5PaxekXVj0+3v6fNlLIsrGzp46117G2pVXktevKXH7sZWzc3I3+/V2Tyf9de0/l6KhdenuLZravfwQG2tyvl6/Gs7qjr9VB3urJevWN9c3lQHp3X9OFXDnZ5avWVfF9b34Yb3ZN2N7eB4V/XMMTfV6sZecI3S+9juOPOukZ6z+LzAp/+r9lb+Rv3nxrp68+9/qD6yHwMAAACTMNZ3GiU4rJhF7ooORcNgkXs23FLLeoG+tnOsTk5H6mBjWR/XU3smPUTB60xvL0sA3VHHJ6dqdLBhzu0VB5uF/6LeXt3aU8ejE71/Ww0O9Wmnp+pgUxbqstDXcbAuR9hXPNdtfad7PX3Ouu2LdqbPlfOlHO6oVd23td1iNF1D48KiDiYuPbeMJ+QFwNGubntJbeuxGWZb+hmHxDFCo31dc2G5p3aHI93GodrdOTDnFfO6rHo6FI5ORupwt6f76b3aace2eHNd92mkRofb5mnowvKyuq1DzWh0rHZ7Ougu6PBjxm7nZknXqYPiaDRSw21pQ8+nfe+2bT5z17T5XoqF9RWhcVHdvK3blHtH37MyxqXtIq0V98KSDn8jff11f7c2zX8syN9bh2pnY1cdjvT2ybHaWZNgWL1SXIxtUa1sDPR11/Npx952HxfXU9e1vKEOdN0nxztmnpdtH2NP3n/NvJL6f/Kq6t/9s/rJI7sDAAAAmICxQqNxokOIfQolwaR48GJDjf/DLvbJZBEecgt7L8Tps8zTQBOKjtX2kv67d5B9UpeGkNTZcEMv1r3vC+q+rJd98Z2oXd3vRS+MdQ2NLoSI5vHE/ACoj1vX7W8MzVjN01Ezh+cPjUUoWlE6b0V0mNTBxLXlmDYXdHiRD8uxuRR7pgObbtftF4dbJhgV02HnJvhBn+K7pK6vrfOphce03Uux3L3lBXFd3+5tvd/2xw+N8f3Vem/pMCtPDF3Xi+P96z5Um2VfGu5jM4d+H/XRch0Wt/RVAgAAAGbL+KHROdlTG2ZRLIt7u3DPlFxoLBbbmSILe/eKZDYguHObQqMNbHHdUlb9V2vPdF3yBMsLRFpafxRyMv1rHI89phIGQPMdRvNDPbqdxUW1YX6x5/yh8dD88mpmfmrmtQhZNmDXjs2rzx5TTEc0N0bY19b51MJj7P5Myd8TYX3BeIx47vTdur1WvhYqr9q6zJf29VQd7+2ojfUVtbJyy4Rl6YfreuPYGu7joo9FXWHx6wIAAABmw/lDozaU1/nM0xG7MNcB8kRe7fOLCWS5hb08pYyONQfnn4g56UI9Yp8qyiuB8guvruxtyT+/saJ2bGo8G26qpYVlHQDCVorQ5QdJ/+mRlgkDzeOJRSHGvkq7tramFvVc2hmKgk68Xa/oi3t91NfwpNG1e97QuOE/TTu0T9iKJ4Wt86mFbbTdS7FxQ6OjA+FO8fpoEdTTsRb/ZMuaeVVX2pfXZiXcua43hsam+9g8aVzW9Ubjyw8QAAAAmKruoVG+37axq/ZsCDuIvg8ni/Xi+3KHaiQL4NGhGmzu6qWzCBf2JnjoBfVyz35f7HSkDgebSp9qHG8v68X4TXV7O/4umAshxUJ+OEy/A2ae3OVCkw075rVS2/4t+fERb9Eu4yheX5TvoRXf+9uT79PFfdfbwROklvGE0hBTvCLqvxZaExpXNsv5N+W4eim0JK9ySlhZ2Ui+01jMa/WdxuNB8X2/8rt0mbF1Co2LK2pjcKxOdJ0HOpz7Qax1PrX4mjbfS7HxQuPJ3rbasSFQvu+45PU17ofb3jk+MX3YNt9p7BoaG+5j+73TxdUtdaA/Pz2VfTtq66CadwAAAGBWdA+NIx1Gbq/YX+TUC95bq6q34/3ypo5cEkKqX5pcVuubRViJF9Pi7HigNlbdK3831fL6pqrWzKfmR1pcXfLrmQMXAuW12BX5fFHd8r8UZozU7qquL3gN1bHhYelfVT/7+qoLGiflL4fKr11uHQxanzSK5vH40tCo04UOL37QrQmNpm6vePMZGB2oTfdLrvLLnPq44jqdBtdIrqGEvfIanjc0bg5MWHRzJt8XrLTMp0iuadO9FBsvNJ4Ot5Lxl8/34n7ItvkFVn0PSsAbbJq/XdfbQmPjfez/2q60t9pTu8dlTwAAAICZcaHXU/GiS/9jAAAAAID5QmjEBRAaAQAAgHlHaMQFEBoBAACAeUdoBAAAAADUIjQCAAAAAGoRGgEAAAAAtQiNAAAAAIBahEYAAAAAQC1CIwAAAACgFqERAAAAAFCrc2h8+PChevnll9XS0hKFQqFQKBQKhUKhUK5x+frXv67u379v016zzqFRAuN7771ntwAAAAAAF/Xb3/5WPXr0aOLl7t27Jjh20Tk0ShoFAAAAAFyeXKCbVOma8QiNAAAAADAluTA3qUJoBAAAAIAZlwtzkyqERgAAAACYcbkwN6lCaAQAAACAGZcLc5MqhEYAAAAAmHG5MDepQmgEAAAAgBmXC3OTKoRGAAAAAJhxuTA3qUJoBAAAAIAZlwtzkyqERgAAAACYcbkwN6kyxdD4WO33lszxRemp/cd2V6Mj1e98LC7bUV9fq/6R3QIAAAAwCbkwN6kypdAowW9JBdnj8b7a75RFLic0Pt7vvZjhR89zb6mvZ3GaCP4AAADAOHJhLld+9N1vqjt3f5Hd55df3L2jvvndH2X3xWU6ofFCwYXQeCGERgAAAODayYW5fPmleuc7zcHRBMbvvKN+mdmXK7PzpDF21Dd1FcUPGGngMAGwPDYKRCYkuX1LqqdPNK9Yep/l+xG/PtsStDLt2B2Nr+G68Fr1qWjHH1NVV3V8MGZvAG5/pWjffBTMqX9e1Mfg/FBYv70WR/7Y/XkqrrOr14wjmqel3r5uPT22+lyTfuvto5oxG9HYqt2ZPgAAAADXTC7M1Zf64DhuYJQi6+guLv87jWV4yIQxEwC8z21oqMJFFbxMiPECRhBqTBth4Ny3G2m4iuhz++WJRaiqDRy17dgw5rcTjc30Q8+DO8SFx7KtmuOrvoR9S8flhUazKX315zweW3R8JKzfBrJy/sPxylj8eo+O3N/hNTT0OKs2i3qrZopAWNZl751wvzcmvb941TmqJ9cuAAAAcA3kwlxzSYPjeQKjlK4Z7wp+CMeygcAPOmHYEBJG3GLfX/jnAo7sLwJEWk+lNTRGmo6vbScJaCLsc1JvHICC8db0Q86xwS3dH81R3KdcH6W+uA0rrD8Twry+mACcrac9vAVz6tXpVPtz94CVOU/6X3dPAAAAALMqF+baiwuOH6gPzhkYpUw/NBrFwt8PASZIRqUIBn7gkL9zx8r+hjChZcNXxIQev97s8eOFFuEHoqQfEuKCczqERu+cdH/UvzgkSh/9MbqS6bcI628OjcVmrr5caEyve7fQmKurYPrq1VeWeP4AAACAGZcLc92KBMe/Vn99zsAoRdbQXVxxaAzDiASC+nW9HxIkaOQDg/DDWSwbvjzxuU3H17aTe4qn+eNL6j1PaPRCVbq/JTQm7TUL628PjY45r/w8Pi8N3sGcNobG9NySnJfdAQAAAFwvuTA3qTKd0KiDSvV9QVEs/IOQkAlbhUyIqgs9ph4/nHT9TmMcRIrt2uNr28mcF40t6UeX0Bi1lX7/L6rf3x+HRtvHbOjNCPvbFBp1vX1vHOXnZiM6L7fdNTS6MYZBOP+dRgAAAOB6yoW5SZUpPWksFvNyrCtxaHFhpyy1gaMIEMGxfkowIaraV+2q+pANFcF5PdXv+2Epo7YdGxzLfWEYDkOY1iU06jDm1xnPnT8fPZ2e5Fi/iXJ/+WF6PeqG2j00hv3Ijls+t8eG17uv57t7aBTh+V6fTEh2n0f7AAAAgGsiF+YmVWQd3cWVv56KbsLQBgAAAOBFkAtzkyqExmuG0AgAAAC8eHJhblKF0HjNEBoBAACAF08uzE2qEBoBAAAAYMblwtykCqERAAAAAGZcLsxNqhAaAQAAAGDG5cLcpMqVhsbPPvuMQqFQKBQKhUKhUCgXLL/+9a+nVi41NMpgvvjFLwaD+8tf/kKhUCgUCoVCoVAolAuUhw8fTqVIaIwzXp3G0OhX8I1vfEO9++676k9/+lNQ/vjHP1IoFAqFQqFQKBQK5RxFAtxHH300sfLxxx+b8oMf/EB99atfLcOrn/1itaHRneAq+fDDD9XXvvY19fnPf55CoVAoFAqFQqFQKNe4fOUrX1E//elP1bNnz0x4jcOjLxsa/cD45z//WX366afq+fPnyckAAAAAgOtLMp5kPcl8kv1ywbE2NLrAKKnz6dOndg8AAAAAYN5I5pPs5wdHJwmNLlXKwfKdxbOzM/Wb3/zG7gUAAAAAzBvJfJL9JANKFnS5UGRDo/+U8ZNPPjFfzgQAAAAAzCfJfJL9ck8ba0OjJEx5t/UPf/iD+XUdAAAAAMB8kswn2U8yoGTB2tAoH0pxTxnl8eTvf/979atf/coeAQAAAACYN5L5JPtJBnRPG10+TEKjezVVEqacIF+IlH9uAwAAAAAwnyTzSfaTDChZ0H9FNRsa3aup8m92PHnyRD148MAeAQAAAACYN5L5JPtJBoxfUa0NjfLvdMgXIU9PT9X9+/ftEQAAAACAeSOZT7KfZEDJgmOFxt/97neERgAAAACYY5L5JPuNHRrl13PkxNFoZI94sZ0M1tTC1tBuYSYNt9TCwkJQ1gYndufVM/fI2kBNrkUAAADg4iTzSfaTDEhovABC48VMZP4kNPqh7WSg1nRw5LIBAAAA9QiNl4TQeDFTCY3acGuyTxsBAACA62bOQuOJGqz5rx+uKT8PpAFhqLa8Y4rgMrB1hOcmglcdt9QgCT1St9sftusCkvTHnS9nms8zxwt/X25/naoNKUU7RvyqZtJ3Pf5h8SRO9hft+WPy6nLHn/j7/flz++2m8AJc2Ef/yZ9fX/cx12oJjWlwLe6n8iN7/tC/Fv7xHfcXrdk58eY4nFMRzac5Nj4GAAAAuFpzFBptYIwX6d4iu1NojMNNTlSvPrFY+Ffpwiz2q67k2qn2u9BU9i2qvzjeDwtx/XmmXu+gk4EONPKHqd8fZzF31dzYsOICjhtf2Yea4/0+BmMIx2/Ifi/ApYEtHmOmjnFFbYZ9zPUhExp1n8pxx6+3dtkfhEZvjm1b9feQ3R/cBwAAAMDVm2JoPFMP772j3n7rNXXn9ZfUS6/fUa+99bZ6595DvecczAI9XlCHi/5OobFapddK64nOjcOJJvvdOUk7UXgJ+xUFF6u1r9n5KOT6H/Y5DmhFH/xzwvbj44Xf78z+aI6yc9Iwh+di5lmCly3R/KVzGs19pk/BXI61v2VOMnU1XVMAAADgqkwlND65d1e98uoN9bl/+ly23Hj1FXX33hN7dEe5RbbmL9rTsBQu3NPQIPu9kGHqbw9x5m//PFf8/X4FEgaCvvv9yoQL4Y03bs9UXTMf+uhs/00fykCStilzF3bZH0O+j9U5mf1R/+I5aZvDgOl7yzEiaFP61DQmMb3QmPZFIzQCAABgCiYeGh+++y31hUxQTMsX1LfefWjP6qBmQe2HnWABb4QL9+xCPSOtp/isPFcW/w31JO00hsaakNfSRlPAyPU/7EMaaPx5FOEYMgEo6HdzQBLJnLSN7zyiNs22N0fp9Z9yaIzqMvsJjQAAAJiwiYbGs5+/ob6cDYh15cvqjQ+6vqxaLPCT4BGHAm8hboKet3BPQ0OeOc5fvJuA5rctgSAT9KykncbQmGmvpf5COh/jfacxDDTtoTFuS+8vx5SrXx/vjTmZk05jHFMQ2grmHnCN5O4Xvw81519FaNSNm3uqGr+9noRGAAAATNgEQ+MD9R/fyQXDlvLtf1M/szW0cwtrV+IFdrh/axgu3NPgUs8FClP0Qt/8YqZ/rguSZWlopyU0iqA9Xbp1M5oPvw0TkKp9VaATafvtoVEfP/DrjOY+mA+9LwlYUkexv6y2YQ7PJRPqXLtu/CZE2vbWBkMzf9Uw0/OvLDQK2fbHzq+nAgAAYAomFxo/eEPdyIXC1nJDvfGBrQMzKhOAcPkyoRQAAAC4ahMLjT/7/pcygbBb+dL3uz9rxDQQGq9e+EQUAAAAmJSJhcYfv5UPhJ3KWz+2tWA2ERovXxESq9dTCYwAAACYjsmFxjczYbBreZPQCAAAAADTMLHQyOupAAAAAHD9TCw08kM4AAAAAHD9TC40TuSf3AAAAAAAXKYJhsZz/uP+P+/6j/sDAAAAAC7bREOjePg/dzoGxy+ob7370J4FAAAAAJiGiYdG8eTeXfXKqzcyQbEoN159Rd2998QeDQAAAACYlqmExsKZenjvHfX2W6+pO6+/pF56/Y567a231Tv3Huo9AAAAAIBZMMXQeAWO+mppacmWvjpKPvNK3+yVA1Rfb5ebjjmvp/Yf223r8X6vOjZTd1KP0dSGd35vX5XNda7b91jt98JzgjqN8JheOkDVi8cd9MXOa5bUnc5ZMf7c9WiqCwAAAMAsmJ/QaMKOF0L09n6QSGoCjQ4xvb4ucbiSz/XxcehKQmOQ5IpwmASxhjb884/63rld6w6kY5T++uEsaEM72nd9smGy11f9qI7qGE36lQTRirSXG78byzh1AQAAAJi++QmNSciK5UPjUV8+y+yz9UnI8qttDo3Ce6pmtbVR8rc71h3Kj7EKcvn9oZZjJJw3Bb3M/ngOS211AQAAAJi6+QmNJlA1PYnLhSF9jg0tyRMyF9qiJ5jtoTEOSR3asILzOtUdqwl8XjiTPpzvFVOrpl+V+PyGoNtaFwAAAIBpm6PQKCSwFN+XS7NIGoaCEBc/9fICjQla3t9l3R2CXWsb5rt9mT53qDvVHhoN167/WakpNEoAbAiUVjDmmnF0rQsAAADAdM1ZaHQkkMThKg5DLdtB2Kn2dQuNrp7ubfjB1GitOyduz5LQmKnLtJkEx5o6pD+NTyg9XkjNhtxx6gIAAAAwVXMaGrUkdEVhSIKN95TPldonZLKtg9BRW2g09dpANFYb9YGy5NedlQ98EtzKNgO54zOf5frSyNVRvZpbGrsuAAAAANM0P6FRhxE/iyRP7qIwFLxC6fihLBNuTPjSdZQfx8fYkOg+GrsN2XYhq6XuvDTwSZ+rp4l6f98PcblXROM6ZHv8p4Jm7LqecPznqwsAAADA9MzRk0YJJN4TvfgJVxCG4mDkFHWYYJYJjUlwk2Nce6bEYWvcNop9Jmg11l2nOD84Lx5DVG+8O+138aqvf06nvpi5io87Z10AAAAApmaOQiMAAAAA4LIRGq+l3BO7Cb/2aZ+6Bn1Inu4CAAAAuO4IjQAAAACAWoRGAAAAAEAtQiMAAAAAoBahEQAAAABQi9AIAAAAAKhFaAQAAAAA1CI0AgAAAABqERoBAAAAALUIjQAaHfX76sj+DQAAgBfPfIbGo75aWjrfQveov6TPtaW3rx6bTx+r/Z73+VJP7Rc79K591SuPc45Uf8z2H+/31FJ/8ktzGW+vHEwDGWdu/MLfl8xFxFwbV48UN0/xHHebv+B6nbdfwdjCesx18fY1XaJpXcPxFPPcrZvhNQnuE/86ZiuT/w9U54aH+PVG18ySuZT23P8CAABgeuYwNLoF6bihsVjkBgtUHSb2TSVSZxQUXf3y94VD4/gh8/J0a/vx/n51jD9+O98uFDSFUBOqorl6vN+38xrOcbcAFl0XX9DHBrn/wKA/c00HoaWxzvZ5lLlpHdIkZO/ZlBt78aRR/+9Rbh7C6196fKTc4fG8BfeIzH/D/38IjQAAANM3f6FRL0J7OuCMG8KaF6dxOPG2swvwMUOg6fP0Fsbjhxl/fNFYJQTkKmsNKtEcdwo2ck5+nruNqf06hfdFfB94OlzDmQmNTePwuP7Gr6cm/1+pu+Ylv714zjN98eaS0AgAADB9cxYa3YK0LgzI5+ECtVgYty2i4/3edmtolGPrXtMrJGHCPJlx51TjkONcPf7TmWJhLUFZf+4qkoV8cmxNX1oX/ZFgzEWdVbP5MbYv/sM5rqsnJPNcjaeqX+rqq33dZrrP02HcQb8bjg/7m85z/tqFx/l1m/r0NZX7QNqXfpTHJaHLfa7nbz/so9+uPwddwphpU/d1PwqNybVpC/j+/syxcX1H/eo+KPp5VI3ROzeeIwAAAFyNuQqN1eKzLjS6RWi57LTH1R9fCAONbqhavGYXzF59rcEkqtuc628XzOLfq8cs6O22+dvvf9RmOea6vrQt+gNFSAmrkT6nwcSXBgMbAsqxRgGqc3+cog9FG7Y/ZYP5OQ3vhWLbte9O9T+r+/5d0XdvX808h3NQjNdvX/a7bTM/NXPg99scV1Zq59Bup+219zFWjt87NqxXq7l/ynP9fW2hMdpf1BHeI+7YpjkCAADA5Zmb0OgvpPVyUoeEmhDoL0r1wrk4J1pQJ+xivAwPXt3ZBbPXvuzX5/jhINRlMS/HxOOp2gjHXmxXfbVF6qzrS3YMGeb8aJ7MZ1XfTNtJ/4vPc3NQPVWK5iGqt4uqjTQkJkFH1AQnqcd9HPa7uA/SU3J9T+c57IPuYzzn3nVI+ytjiq5n3K4ox1T0NbgHdCnr7Bgahbye2peAZo9P+ub1O8vMh+1n5li/Pn/uRXzf+NvZawoAAIBLNyehMVpQlyVaUBtuoR0uuGUBGi/yK5nFeakKb5X0M1nsBov2Ulh3vEguyDH1bTQtrHOSvrQt+kXNMWlbufnQJKRkzq8Njcl2u6ov6bnZgGHCTNpXqccdG48vHa/I91WO9ec57IOep3g+vDlOjvXv5TLwZeY6CI0N8zdmaPSfxidz0KGu6py4z34/0/E0zT+hEQAAYDLm5kljKLOY9ulFbk8vhHv+itMEiGgRqo8rtpsW4LIvDJyymM0uomsW18Hi1/QjbSuu0wQSu51dxDeNX/h9qemXz/+eWSBuS7ZrAmhuXi7vSaNc8+p8f36a6jLHRf2Vz6pT/bktrnVuqmoDjDe34TH5+yYbiKL++/Pon+Pq9PfF8+0k90zG0b4LsLpt6YObp6A//pxU1/DxkfzeqhNem6DP/v2i/477FPfT3w7mCAAAAFfmxQyNZn9uwVl8Xj6pLA+oFsN50Xl+CDGhyu2rDy7BYjl7jg0E7nOvjVwAkM+qOuxYa/oSLL4zC/ekbVvcOWFbTfNetOXXEc6xv8+b72yfNBNeqnPKqqyqraZrl85VPLf+vmw/tOAa1F1z93lZf939VvTdH48/b30d4qpj/Tr0OIMfwonn1L+X/BCXn59w7OEx/r5qTrx6gzmIr43fZ/8+TPsRzKvmb8dzBAAAgKsxp6HxupFFdHPYujph29W/mzg7ZrFPqWlew0ocsrL8p4YS9Pref+TIiP/JjSshfSIBAgAAzCRC44wwT26msGiWpzXhk6LpB5/QLPYpb1rXsCLBNf/UsCLz6T2hI6wBAACgBaERuMZMUK19DRQAAAC4OEIjAAAAAKAWoREAAAAAUIvQCAAAAACoRWgEAAAAANQ6d2j85JNPCI0AAAAAMOdcaJQMOHZoPD09Vffv37dHAAAAAADmjWQ+yX5jhcbnz5+XofHBgwdm37S9//77FAqFQqFQKBQKhUIZo7SRrCeZz4VGyYKdQ+OzZ8/U06dP1ccff6wePXpk9gEAAAAA5oNkPMl6kvkk+0kGDEPjZ+r/Adx8cLnSgZJpAAAAAElFTkSuQmCC"},1151:(e,A,n)=>{n.d(A,{Z:()=>c,a:()=>s});var t=n(7294);const o={},r=t.createContext(o);function s(e){const A=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function c(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:A},e.children)}}}]);