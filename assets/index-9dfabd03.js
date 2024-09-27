import{_ as d,d as De,u as me,a as Ce,r as c,c as S,w as X,o as Te,b as Ee,G as we,M as Y,e as J,f as O,g,h as D,i as _,j as h,k as P,l as B,t as G,F,m as V,n as Z,p as q,S as Ae,I as Re,B as Ie,D as Le,R as ge,q as be,s as Ue,v as ye,x as He,N as W,y as Se,z as Ge}from"./vendor-a79c0d81.js";import"./__commonjsHelpers__-725317a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=o(l);fetch(l.href,s)}})();const R=(e,t)=>{const o=e[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((i,l)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic import: "+t)))})},{DOC_LANGUAGE:Pe,DOC_NAVIGATIONS:ke}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE wiki, drivers,BIOS Download",DOC_LOGO:"https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/iKOOLCORE.svg",DOC_GITALK:"false",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["iKOOLCORE"]',DOC_LANGUAGE:'[{"content": "English","value": "en"},{"content": "中文","value": "zh"}]',DOC_NAVIGATIONS:'[{"name": "v0925","value": "v20240925","disabled":"false","order": 1}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};function Ne(){const e=[],t=JSON.parse(ke),o=JSON.parse(Pe);return t.forEach(i=>{o.forEach(l=>{const s=Q($(xe(i,l),{nav:i,lang:l}),l);e.push({nav:i,lang:l,children:s})})}),e}function Q(e,t){return e.forEach(o=>{o.title=o[`${t.value}Title`],o.children&&Q(o.children,t)}),e}function $(e,t){return e.forEach((o,i)=>{var s;const l=`${t.nav.value}/${t.lang.value}`;(s=o.disabled)!=null&&s.includes(l)&&e.splice(i,1),o.children&&$(o.children,t)}),e}function xe(e,t){return[{zhTitle:"产品",enTitle:"Products",type:"doc",children:[{zhTitle:"R2",enTitle:"R2",path:`/${e.value}/${t.value}/r2_standard`,component:()=>R(Object.assign({"./docs/v20240925/en/hardware_r2.md":()=>d(()=>import("./hardware_r2-94d121c5.js"),["./hardware_r2-94d121c5.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/v20240925/zh/hardware_r2.md":()=>d(()=>import("./hardware_r2-7ce80c58.js"),["./hardware_r2-7ce80c58.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/hardware_r2.md`)},{zhTitle:"R2 Max",enTitle:"R2 Max",path:`/${e.value}/${t.value}/r2_max`,component:()=>R(Object.assign({"./docs/v20240925/en/hardware_r2_max.md":()=>d(()=>import("./hardware_r2_max-575605a1.js"),["./hardware_r2_max-575605a1.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/v20240925/zh/hardware_r2_max.md":()=>d(()=>import("./hardware_r2_max-31eeff9e.js"),["./hardware_r2_max-31eeff9e.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/hardware_r2_max.md`)}]},{zhTitle:"💿BIOS",enTitle:"💿BIOS",type:"doc",children:[{zhTitle:"常见设置",enTitle:"Settings",path:`/${e.value}/${t.value}/bios`,component:()=>R(Object.assign({"./docs/v20240925/en/bios_settings.md":()=>d(()=>import("./bios_settings-37713f52.js"),["./bios_settings-37713f52.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/v20240925/zh/bios_settings.md":()=>d(()=>import("./bios_settings-914105b2.js"),["./bios_settings-914105b2.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/bios_settings.md`)},{zhTitle:"升级更新",enTitle:"Update",path:`/${e.value}/${t.value}/update`,component:()=>R(Object.assign({"./docs/v20240925/en/bios_update.md":()=>d(()=>import("./bios_update-93fe5069.js"),["./bios_update-93fe5069.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/v20240925/zh/bios_update.md":()=>d(()=>import("./bios_update-81ae2b03.js"),["./bios_update-81ae2b03.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/bios_update.md`)}]},{zhTitle:"🙋‍♂️服务与支持",enTitle:"🙋‍♂️Support",type:"doc",children:[{zhTitle:"资源下载",enTitle:"Downloads",path:`/${e.value}/${t.value}/source`,component:()=>R(Object.assign({"./docs/v20240925/en/faq_source.md":()=>d(()=>import("./faq_source-5cd26cd8.js"),["./faq_source-5cd26cd8.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/v20240925/zh/faq_source.md":()=>d(()=>import("./faq_source-75d918dd.js"),["./faq_source-75d918dd.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/faq_source.md`)},{zhTitle:"路由系统",enTitle:"Firewall",path:`/${e.value}/${t.value}/firewall`,component:()=>R(Object.assign({"./docs/v20240925/en/faq_firewall.md":()=>d(()=>import("./faq_firewall-a7d5246e.js"),["./faq_firewall-a7d5246e.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/v20240925/zh/faq_firewall.md":()=>d(()=>import("./faq_firewall-b5f1e476.js"),["./faq_firewall-b5f1e476.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/faq_firewall.md`)},{zhTitle:"虚拟化",enTitle:"virtualization",path:`/${e.value}/${t.value}/virtualization`,component:()=>R(Object.assign({"./docs/v20240925/en/faq_virtualization.md":()=>d(()=>import("./faq_virtualization-2299fd19.js"),["./faq_virtualization-2299fd19.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url),"./docs/v20240925/zh/faq_virtualization.md":()=>d(()=>import("./faq_virtualization-24fcfc12.js"),["./faq_virtualization-24fcfc12.js","./vendor-a79c0d81.js","./__commonjsHelpers__-725317a4.js","./vendor-94a5fc92.css"],import.meta.url)}),`./docs/${e.value}/${t.value}/faq_virtualization.md`)}]}]}const ee=Ne();function ze(e){const t=[];e.forEach((i,l)=>{const{top:s}=i.getBoundingClientRect();t[l]=s});const o=Me(t);return o>=0?o:e.length-1}function Me(e){let t=-1,o=1/0;for(let i=0;i<e.length;i++)e[i]>0&&e[i]<o&&(o=e[i],t=i);return t}const Be='<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 2750 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect id="WordMark" x="-0" y="0" width="2750" height="500" style="fill:none;"/><g id="WordMark1" serif:id="WordMark"><g><path d="M1654.27,120.077c-25.693,-17.165 -55.899,-26.327 -86.799,-26.327c-86.237,-0 -156.25,70.013 -156.25,156.25c-0,86.237 70.013,156.25 156.25,156.25c63.489,0 120.666,-38.417 144.661,-97.198l-54.929,-22.422c-14.884,36.461 -50.35,60.291 -89.732,60.291c-53.492,-0 -96.921,-43.429 -96.921,-96.921c-0,-53.492 43.429,-96.921 96.921,-96.921c19.167,0 37.904,5.683 53.841,16.331l32.958,-49.333Z"/><path d="M648.964,93.75c86.237,-0 156.25,70.013 156.25,156.25c0,86.237 -70.013,156.25 -156.25,156.25c-86.237,0 -156.25,-70.013 -156.25,-156.25c0,-86.237 70.013,-156.25 156.25,-156.25Zm0,62.5c51.742,-0 93.75,42.008 93.75,93.75c0,51.742 -42.008,93.75 -93.75,93.75c-51.742,0 -93.75,-42.008 -93.75,-93.75c0,-51.742 42.008,-93.75 93.75,-93.75Z"/><path d="M994.797,93.75c86.237,-0 156.25,70.013 156.25,156.25c0,86.237 -70.013,156.25 -156.25,156.25c-86.236,0 -156.25,-70.013 -156.25,-156.25c0,-86.237 70.014,-156.25 156.25,-156.25Zm0,62.5c51.742,-0 93.75,42.008 93.75,93.75c0,51.742 -42.008,93.75 -93.75,93.75c-51.742,0 -93.75,-42.008 -93.75,-93.75c0,-51.742 42.008,-93.75 93.75,-93.75Z"/><path d="M1893.38,93.75c86.237,-0 156.25,70.013 156.25,156.25c-0,86.237 -70.013,156.25 -156.25,156.25c-86.237,0 -156.25,-70.013 -156.25,-156.25c-0,-86.237 70.013,-156.25 156.25,-156.25Zm-0,62.5c51.742,-0 93.75,42.008 93.75,93.75c-0,51.742 -42.008,93.75 -93.75,93.75c-51.742,0 -93.75,-42.008 -93.75,-93.75c-0,-51.742 42.008,-93.75 93.75,-93.75Z"/><rect x="1192.71" y="93.75" width="58.333" height="312.5"/><use xlink:href="#_Image1" x="2099.63" y="93.75" width="252px" height="313px"/><g><rect x="2400.67" y="93.75" width="58.333" height="312.5"/><path d="M2617.34,152.083l0,-58.333l-216.666,0l-0,58.333l216.666,0Z"/><path d="M2617.34,406.25l0,-58.333l-216.666,-0l-0,58.333l216.666,-0Z"/><path d="M2592.34,279.167l0,-58.334l-191.666,0l-0,58.334l191.666,-0Z"/></g><rect x="132.662" y="181.25" width="58.333" height="225"/><g><rect x="237.636" y="93.75" width="58.333" height="312.5"/><path d="M421.168,93.75l-125.198,156.25l125.198,156.25l74.802,0l-125.199,-156.25l125.199,-156.25l-74.802,-0Z"/></g><rect x="132.662" y="93.75" width="58.333" height="58.333" style="fill:#007bfc;"/><path d="M1392.71,406.25l0,-58.333l-200,-0l0,58.333l200,-0Z"/></g></g><defs><image id="_Image1" width="252px" height="313px" xlink:href="data:image/png;base64,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"/></defs></svg>',Fe={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE wiki, drivers,BIOS Download",DOC_LOGO:"https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/iKOOLCORE.svg",DOC_GITALK:"false",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["iKOOLCORE"]',DOC_LANGUAGE:'[{"content": "English","value": "en"},{"content": "中文","value": "zh"}]',DOC_NAVIGATIONS:'[{"name": "v0925","value": "v20240925","disabled":"false","order": 1}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1},{DOC_LANGUAGE:Ve,DOC_NAVIGATIONS:Ke,DOC_ROUTER_MODE:je}=Fe,Xe=De({setup(){const e=me(),t=Ce(),o=c(null),i=c(je==="hash"),l=c(null),s=c(!1),u=c(Be),m=c(null),C=c(null),p=c([]),T=S(()=>p.value.length),U=c(0),E=c([]),I=c(null),a=c(!1),f=c(!1),b=c(JSON.parse(Ve)),ne=c(JSON.parse(Ke)),[,le,ie]=e.fullPath.split("/"),N=c(le),L=c(ie),se=S(()=>n=>e.fullPath.includes(n)),x=S(()=>ee.filter(n=>n.nav.value===N.value&&n.lang.value===L.value)[0].children),re=S(()=>b.value.filter(n=>n.value===L.value)[0].content),y=()=>{document.querySelector("#gitalk").innerHTML="";const{DOC_GITHUB_CLIENTID:n,DOC_GIHUB_CLIENT_SECRET:r,DOC_GITHUB_REPO:v,DOC_GITHUB_OWNER:w,DOC_GITHUB_ADMIN:A,DOC_GITALK:H}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE wiki, drivers,BIOS Download",DOC_LOGO:"https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/iKOOLCORE.svg",DOC_GITALK:"false",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["iKOOLCORE"]',DOC_LANGUAGE:'[{"content": "English","value": "en"},{"content": "中文","value": "zh"}]',DOC_NAVIGATIONS:'[{"name": "v0925","value": "v20240925","disabled":"false","order": 1}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};H==="true"&&(m.value=new we({clientID:n,clientSecret:r,repo:v,owner:w,admin:JSON.parse(A),id:location.pathname,language:L.value,distractionFreeMode:!1}),m.value.render("gitalk"))},j=n=>{var r;p.value.forEach(v=>{v.classList.remove("active")}),(r=p.value[n])==null||r.classList.add("active")},ae=()=>{const n=document.querySelector(".page-content"),r={attributes:!0,childList:!0,subtree:!0};new MutationObserver(()=>{p.value=document.querySelectorAll(".table-of-contents li"),E.value=document.querySelectorAll(".markdown-body h2, .markdown-body h3"),a.value=n.offsetWidth<800}).observe(n,r)},z=()=>{o.value.routerList=x.value},ce=n=>{if(n.disabled&&n.disabled==="true"){Y.info("开发中！");return}const r=e.fullPath,[,v,w]=r.split("/"),{value:A}=n;if(v===A)return;const H=r.split("/");H[1]=A,N.value=A;let M=H.join("/");t.getRoutes().map(_e=>_e.path).includes(M)||(M=`/${n.value}`),t.push(M),y(),f.value=!1},de=()=>{o.value.onchange=({detail:n})=>{U.value=0,y(),e.path!==n&&(s.value=!1,t.push(n),window.scrollTo(0,0))}},ue=n=>{L.value=n.value},pe=n=>{if(!T.value)return;const r=n>68;I.value.style.position="fixed",I.value.style.top=r?"0px":"68px"},he=()=>{const n=ze(E.value);U.value=n,j(n),fe(n)},ve=()=>{let n=0,r=!1;function v(w){p.value.length<1||(pe(w),he())}window.addEventListener("scroll",w=>{n=window.scrollY,r||window.requestAnimationFrame(()=>{v(n),r=!1}),r=!0})},Oe=()=>{const{hash:n}=e;E.value.forEach(r=>{n.includes(r.id)&&r.offsetTop+r.parentNode.getBoundingClientRect().top})},fe=n=>{p.value[n].offsetTop};return X(L,n=>{const r=e.fullPath.split("/");r[2]=n;const v=r.join("/");t.push(v),z();const w=b.value.filter(A=>A.value===n)[0].content;Y.info(`当前语言【${w}】`),y(),f.value=!1}),X(x,n=>{z()}),Te(()=>{p.value=document.querySelectorAll(".table-of-contents li"),I.value=document.querySelector(".table-of-contents"),E.value=document.querySelectorAll(".markdown-body h2, .markdown-body h3"),z(),de(),y(),ae(),j(0),Oe(),document.body.offsetWidth>800&&ve()}),Ee(()=>{I.value=document.querySelector(".table-of-contents")}),{aside:o,header:l,menuList:x,languages:b,visible:f,navigations:ne,cnav:N,clang:L,titles:E,logo:u,gitalk:C,isActive:se,currentLanguage:re,isHash:i,isPhone:a,hasToc:T,onNavClick:ce,onLanguageChange:ue}}});const te=(e,t)=>{const o=e.__vccOpts||e;for(const[i,l]of t)o[i]=l;return o},Ye={ref:"header",slot:"header","disabled-icon":"","header-menu":"[]"},Ze=["innerHTML"],qe={key:1,slot:"right"},Je={class:"mobile-menu"},We=["onClick"],Qe=D("ldesign-theme",null,null,-1),$e={ref:"aside"},et={id:"gitalk",ref:"gitalk"},tt=D("ldesign-backtop",null,null,-1);function ot(e,t,o,i,l,s){const u=Ae,m=Re,C=Ie,p=Le,T=Ue,U=ge,E=be,I=J("router-view");return O(),g("ldesign-page",null,[D("ldesign-header",Ye,[_(u,{slot:"logo"},{default:h(()=>[D("div",{class:"logo",innerHTML:e.logo},null,8,Ze)]),_:1}),e.isPhone?Z("",!0):(O(),P(u,{key:0,align:"center",size:"16px",style:{"margin-right":"16px"}},{default:h(()=>[_(p,{"min-column-width":"100px",options:e.languages,onClick:e.onLanguageChange},{default:h(()=>[_(C,{variant:"text"},{suffix:h(()=>[_(m,{name:"chevron-down"})]),default:h(()=>[B(G(e.currentLanguage)+" ",1)]),_:1})]),_:1},8,["options","onClick"]),(O(!0),g(F,null,V(e.navigations,(a,f)=>(O(),P(C,{key:f,variant:e.isActive(a.value)?"base":"text",onClick:b=>e.onNavClick(a)},{default:h(()=>[B(G(a.name),1)]),_:2},1032,["variant","onClick"]))),128))]),_:1})),e.isPhone?(O(),g("div",qe,[_(C,{variant:"text",shape:"square",onClick:t[0]||(t[0]=a=>e.visible=!e.visible)},{icon:h(()=>[_(m,{name:"bulletpoint"})]),_:1}),_(E,{visible:e.visible,"onUpdate:visible":t[2]||(t[2]=a=>e.visible=a)},{footer:h(()=>[Qe]),default:h(()=>[_(U,{slot:"header",modelValue:e.clang,"onUpdate:modelValue":t[1]||(t[1]=a=>e.clang=a),variant:"default-filled"},{default:h(()=>[(O(!0),g(F,null,V(e.languages,(a,f)=>(O(),P(T,{key:f,value:a.value},{default:h(()=>[B(G(a.content),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),D("ul",Je,[(O(!0),g(F,null,V(e.navigations,(a,f)=>(O(),g("li",{key:f,class:q({active:a.value===e.cnav})},[D("p",{onClick:b=>e.onNavClick(a)},G(a.name),9,We)],2))),128))])]),_:1},8,["visible"])])):Z("",!0)],512),D("ldesign-aside",$e,null,512),D("div",{class:q(["page-content",{"has-toc":e.hasToc}])},[_(I,{style:{visibility:"visible"}}),D("div",et,null,512)],2),tt])}const nt=te(Xe,[["render",ot]]),{DOC_LANGUAGE:lt,DOC_NAVIGATIONS:it}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"iKOOLCORE wiki, drivers,BIOS Download",DOC_LOGO:"https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/iKOOLCORE.svg",DOC_GITALK:"false",DOC_GITHUB_CLIENTID:"a7ebf313d74ec4aebd11",DOC_GIHUB_CLIENT_SECRET:"48cbd6cc2ed33cbdbae8d89dd30edb74bd244953",DOC_GITHUB_REPO:"ikoolcore",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["iKOOLCORE"]',DOC_LANGUAGE:'[{"content": "English","value": "en"},{"content": "中文","value": "zh"}]',DOC_NAVIGATIONS:'[{"name": "v0925","value": "v20240925","disabled":"false","order": 1}]',DOC_TOC:"false",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1},st=JSON.parse(it)[0],rt=JSON.parse(lt);function oe(e,t){let o=[],i;return e.forEach(l=>{const s=l.type||t;let{children:u}=l;l.type==="component"&&(u=l.children.sort((m,C)=>{const p=m.name.toUpperCase(),T=C.name.toUpperCase();return p<T?-1:p>T?1:0})),u?o=o.concat(oe(u,s)):(i={...l},o.push(i))}),o}function at(){const e=[];return ee.forEach(t=>{e.push({path:`/${t.nav.value}`,component:nt,redirect:t.lang.value===rt[0].value?`${t.children[0].children[0].path}`:"",children:oe(t.children)})}),e}const ct=[{path:"/",redirect:`/${st.value}`},{path:"/:w+",redirect:"/404"}].concat(at()),K=ye({routes:ct,history:He("./")});K.beforeEach((e,t,o)=>{W.start(),o()});K.afterEach(()=>{W.done()});const dt={};function ut(e,t){const o=J("router-view");return O(),P(o)}const pt=te(dt,[["render",ut]]),ht=Se(),k=Ge(pt);k.config.performance=!0;k.use(K);k.use(ht);k.mount("#app");
