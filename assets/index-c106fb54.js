import{d as I,r as A,s as L,a as N,o as l,c as a,w as P,K as $,b as V,T as y,e as z,f as b,N as O,g as w,h as G,i as S}from"./vendor-909dccda.js";import"./__commonjsHelpers__-725317a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const _ of r)if(_.type==="childList")for(const m of _.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function i(r){const _={};return r.integrity&&(_.integrity=r.integrity),r.referrerpolicy&&(_.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?_.credentials="include":r.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function s(r){if(r.ep)return;r.ep=!0;const _=i(r);fetch(r.href,_)}})();const U="modulepreload",g=function(o,t){return new URL(o,t).href},h={},e=function(t,i,s){if(!i||i.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(i.map(_=>{if(_=g(_,s),_ in h)return;h[_]=!0;const m=_.endsWith(".css"),E=m?'[rel="stylesheet"]':"";if(!!s)for(let d=r.length-1;d>=0;d--){const u=r[d];if(u.href===_&&(!m||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${E}`))return;const c=document.createElement("link");if(c.rel=m?"stylesheet":U,m||(c.as="script",c.crossOrigin=""),c.href=_,document.head.appendChild(c),m)return new Promise((d,u)=>{c.addEventListener("load",d),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${_}`)))})})).then(()=>t())},n=(o,t)=>{const i=o[t];return i?typeof i=="function"?i():Promise.resolve(i):new Promise((s,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t)))})},{DOC_LANGUAGE:k,DOC_NAVIGATIONS:B}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"Ikoolcore",DOC_LOGO:"https://yun.swimly.cn/source/ikoolcore/iKoolCore.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"c3fa1cd407ff0c3c8cd0",DOC_GIHUB_CLIENT_SECRET:"109a56d5e869c89d6f5347de42a231519ecab49c",DOC_GITHUB_REPO:"wiki.ikoolcore.com",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["swimly","KoolCore"]',DOC_LANGUAGE:'[{"content": "简体中文","value": "zh-CN"},{"content": "English","value": "en"}]',DOC_NAVIGATIONS:'[{"name": "R1","value": "R1"}]',DOC_TOC:"true",DOC_LAYOUT:"Default",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0};function j(){const o=[],t=JSON.parse(B),i=JSON.parse(k);return t.forEach(s=>{i.forEach(r=>{const _=T(D(H(s,r),{nav:s,lang:r}),r);o.push({nav:s,lang:r,children:_})})}),o}function T(o,t){return o.forEach(i=>{i.title=i[`${t.value}Title`],i.children&&T(i.children,t)}),o}function D(o,t){return o.forEach((i,s)=>{var _;const r=`${t.nav.value}/${t.lang.value}`;(_=i.disabled)!=null&&_.includes(r)&&o.splice(s,1),i.children&&D(i.children,t)}),o}function H(o,t){return[{"zh-CNTitle":"项目",enTitle:"Describe",type:"doc",children:[{"zh-CNTitle":"了解项目",enTitle:"Learn about the R1 project",disabled:["R2/zh-CN","R2/en"],path:`/${o.value}/${t.value}/introduction`,component:()=>n(Object.assign({"./docs/R1/en/introduction.md":()=>e(()=>import("./introduction-2f5e2ab3.js"),["./introduction-2f5e2ab3.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/introduction.md":()=>e(()=>import("./introduction-b102f043.js"),["./introduction-b102f043.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/introduction.md`)},{"zh-CNTitle":"项目由来",enTitle:"Origin of project",path:`/${o.value}/${t.value}/origin`,component:()=>n(Object.assign({"./docs/R1/en/origin.md":()=>e(()=>import("./origin-d8f56e3e.js"),["./origin-d8f56e3e.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/origin.md":()=>e(()=>import("./origin-a96e3c91.js"),["./origin-a96e3c91.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/origin.md":()=>e(()=>import("./origin-f41d1761.js"),["./origin-f41d1761.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/origin.md":()=>e(()=>import("./origin-24113982.js"),["./origin-24113982.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/origin.md`)},{"zh-CNTitle":"产品定位",enTitle:"Product Positioning",path:`/${o.value}/${t.value}/position`,component:()=>n(Object.assign({"./docs/R1/en/position.md":()=>e(()=>import("./position-f721ef6e.js"),["./position-f721ef6e.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/position.md":()=>e(()=>import("./position-3d48edcd.js"),["./position-3d48edcd.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/position.md":()=>e(()=>import("./position-617c217c.js"),["./position-617c217c.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/position.md":()=>e(()=>import("./position-516f1e6d.js"),["./position-516f1e6d.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/position.md`)},{"zh-CNTitle":"硬件参数",enTitle:"Hardware Parameters",path:`/${o.value}/${t.value}/hardware`,component:()=>n(Object.assign({"./docs/R1/en/hardware.md":()=>e(()=>import("./hardware-2a619716.js"),["./hardware-2a619716.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/hardware.md":()=>e(()=>import("./hardware-a3d36cad.js"),["./hardware-a3d36cad.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/hardware.md":()=>e(()=>import("./hardware-9490da2b.js"),["./hardware-9490da2b.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/hardware.md":()=>e(()=>import("./hardware-5f18149e.js"),["./hardware-5f18149e.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/hardware.md`)}]},{"zh-CNTitle":"设计",enTitle:"Design",type:"doc",children:[{"zh-CNTitle":"设计图纸",enTitle:"Design Drawings",path:`/${o.value}/${t.value}/design`,component:()=>n(Object.assign({"./docs/R1/en/design.md":()=>e(()=>import("./design-d2540686.js"),["./design-d2540686.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/design.md":()=>e(()=>import("./design-ecee4aef.js"),["./design-ecee4aef.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/design.md":()=>e(()=>import("./design-88229bfa.js"),["./design-88229bfa.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/design.md":()=>e(()=>import("./design-b3dd1c9b.js"),["./design-b3dd1c9b.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/design.md`)}]},{"zh-CNTitle":"预售",enTitle:"Pre Sale",type:"doc",children:[{"zh-CNTitle":"配置及价格",enTitle:"Configuration and Price",path:`/${o.value}/${t.value}/configuration`,component:()=>n(Object.assign({"./docs/R1/en/configuration.md":()=>e(()=>import("./configuration-4627cfc0.js"),["./configuration-4627cfc0.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/configuration.md":()=>e(()=>import("./configuration-9e61ff80.js"),["./configuration-9e61ff80.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/configuration.md":()=>e(()=>import("./configuration-3f43387f.js"),["./configuration-3f43387f.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/configuration.md":()=>e(()=>import("./configuration-5d1662c7.js"),["./configuration-5d1662c7.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/configuration.md`)},{"zh-CNTitle":"购买须知",enTitle:"Purchase Notes",path:`/${o.value}/${t.value}/purchase-notes`,component:()=>n(Object.assign({"./docs/R1/en/purchase-notes.md":()=>e(()=>import("./purchase-notes-36a83d3d.js"),["./purchase-notes-36a83d3d.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/purchase-notes.md":()=>e(()=>import("./purchase-notes-dfa7c3e9.js"),["./purchase-notes-dfa7c3e9.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/purchase-notes.md":()=>e(()=>import("./purchase-notes-744033dc.js"),["./purchase-notes-744033dc.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/purchase-notes.md":()=>e(()=>import("./purchase-notes-95b25f88.js"),["./purchase-notes-95b25f88.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/purchase-notes.md`)},{"zh-CNTitle":"实时库存",enTitle:"Real-time Inventory",path:`/${o.value}/${t.value}/reserve`,component:()=>n(Object.assign({"./docs/R1/en/reserve.md":()=>e(()=>import("./reserve-89747de0.js"),["./reserve-89747de0.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/reserve.md":()=>e(()=>import("./reserve-424b6fd6.js"),["./reserve-424b6fd6.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/reserve.md":()=>e(()=>import("./reserve-804cb972.js"),["./reserve-804cb972.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/reserve.md":()=>e(()=>import("./reserve-72c4758c.js"),["./reserve-72c4758c.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/reserve.md`)},{"zh-CNTitle":"进度信息",enTitle:"Progress",path:`/${o.value}/${t.value}/progress`,component:()=>n(Object.assign({"./docs/R1/en/progress.md":()=>e(()=>import("./progress-0fd8afab.js"),["./progress-0fd8afab.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/progress.md":()=>e(()=>import("./progress-a8ebc5cd.js"),["./progress-a8ebc5cd.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/progress.md":()=>e(()=>import("./progress-f2afc9dd.js"),["./progress-f2afc9dd.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/progress.md":()=>e(()=>import("./progress-7a16d100.js"),["./progress-7a16d100.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/progress.md`)}]},{"zh-CNTitle":"售后",enTitle:"After Sales",type:"doc",children:[{"zh-CNTitle":"服务内容",enTitle:"Service Content",path:`/${o.value}/${t.value}/service`,component:()=>n(Object.assign({"./docs/R1/en/service.md":()=>e(()=>import("./service-e73d11d7.js"),["./service-e73d11d7.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/service.md":()=>e(()=>import("./service-ff292189.js"),["./service-ff292189.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/service.md":()=>e(()=>import("./service-d24bd3c9.js"),["./service-d24bd3c9.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/service.md":()=>e(()=>import("./service-a111ef07.js"),["./service-a111ef07.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/service.md`)},{"zh-CNTitle":"BIOS与驱动",enTitle:"BIOS and Drivers",path:`/${o.value}/${t.value}/bios-drive`,component:()=>n(Object.assign({"./docs/R1/en/bios-drive.md":()=>e(()=>import("./bios-drive-1ea20bd0.js"),["./bios-drive-1ea20bd0.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/bios-drive.md":()=>e(()=>import("./bios-drive-7137fd41.js"),["./bios-drive-7137fd41.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/bios-drive.md":()=>e(()=>import("./bios-drive-29f7d4ec.js"),["./bios-drive-29f7d4ec.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/bios-drive.md":()=>e(()=>import("./bios-drive-8916166e.js"),["./bios-drive-8916166e.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/bios-drive.md`)},{"zh-CNTitle":"R1组件",enTitle:"R1 Component",path:`/${o.value}/${t.value}/component`,component:()=>n(Object.assign({"./docs/R1/en/component.md":()=>e(()=>import("./component-48850c18.js"),["./component-48850c18.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/component.md":()=>e(()=>import("./component-242fa317.js"),["./component-242fa317.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/component.md":()=>e(()=>import("./component-bc6b9abf.js"),["./component-bc6b9abf.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/component.md":()=>e(()=>import("./component-050ed4bf.js"),["./component-050ed4bf.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/component.md`)},{"zh-CNTitle":"常见问题",enTitle:"Problem",path:`/${o.value}/${t.value}/question`,component:()=>n(Object.assign({"./docs/R1/en/question.md":()=>e(()=>import("./question-93c18901.js"),["./question-93c18901.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/question.md":()=>e(()=>import("./question-41575a56.js"),["./question-41575a56.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/question.md":()=>e(()=>import("./question-2cbee227.js"),["./question-2cbee227.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/question.md":()=>e(()=>import("./question-81fb1bd4.js"),["./question-81fb1bd4.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/question.md`)}]},{"zh-CNTitle":"使用",enTitle:"Use",type:"doc",children:[{"zh-CNTitle":"出厂配置",enTitle:"Factory Configuration",path:`/${o.value}/${t.value}/factory-setting`,component:()=>n(Object.assign({"./docs/R1/en/factory-setting.md":()=>e(()=>import("./factory-setting-be3dd916.js"),["./factory-setting-be3dd916.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/factory-setting.md":()=>e(()=>import("./factory-setting-14486819.js"),["./factory-setting-14486819.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/factory-setting.md":()=>e(()=>import("./factory-setting-c044a03c.js"),["./factory-setting-c044a03c.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/factory-setting.md":()=>e(()=>import("./factory-setting-cf93e4dd.js"),["./factory-setting-cf93e4dd.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/factory-setting.md`)},{"zh-CNTitle":"使用说明书",enTitle:"Manual",path:`/${o.value}/${t.value}/manual`,component:()=>n(Object.assign({"./docs/R1/en/manual.md":()=>e(()=>import("./manual-f6990ece.js"),["./manual-f6990ece.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/manual.md":()=>e(()=>import("./manual-1e7164a0.js"),["./manual-1e7164a0.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/manual.md":()=>e(()=>import("./manual-65bf150a.js"),["./manual-65bf150a.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/manual.md":()=>e(()=>import("./manual-2cc2a1e5.js"),["./manual-2cc2a1e5.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/manual.md`)},{"zh-CNTitle":"默认系统",enTitle:"Default System",path:`/${o.value}/${t.value}/default-system`,component:()=>n(Object.assign({"./docs/R1/en/default-system.md":()=>e(()=>import("./default-system-a05af784.js"),["./default-system-a05af784.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/default-system.md":()=>e(()=>import("./default-system-adc8e277.js"),["./default-system-adc8e277.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/default-system.md":()=>e(()=>import("./default-system-054ed597.js"),["./default-system-054ed597.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/default-system.md":()=>e(()=>import("./default-system-42e0ab96.js"),["./default-system-42e0ab96.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/default-system.md`)},{"zh-CNTitle":"开箱、拆解评测",enTitle:"Review",path:`/${o.value}/${t.value}/review`,component:()=>n(Object.assign({"./docs/R1/en/review.md":()=>e(()=>import("./review-9e41b849.js"),["./review-9e41b849.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/review.md":()=>e(()=>import("./review-6b36a4f8.js"),["./review-6b36a4f8.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/review.md":()=>e(()=>import("./review-d0cd0b7b.js"),["./review-d0cd0b7b.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/review.md":()=>e(()=>import("./review-8d1aaa25.js"),["./review-8d1aaa25.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/review.md`)},{"zh-CNTitle":"教程分享",enTitle:"Tutorial Sharing",path:`/${o.value}/${t.value}/tutorial-share`,component:()=>n(Object.assign({"./docs/R1/en/tutorial-share.md":()=>e(()=>import("./tutorial-share-ed4fc195.js"),["./tutorial-share-ed4fc195.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R1/zh-CN/tutorial-share.md":()=>e(()=>import("./tutorial-share-e630db1e.js"),["./tutorial-share-e630db1e.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/en/tutorial-share.md":()=>e(()=>import("./tutorial-share-ba353a85.js"),["./tutorial-share-ba353a85.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url),"./docs/R2/zh-CN/tutorial-share.md":()=>e(()=>import("./tutorial-share-fff72cf9.js"),["./tutorial-share-fff72cf9.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js"],import.meta.url)}),`./docs/${o.value}/${t.value}/tutorial-share.md`)}]}]}const K=j(),M=Object.assign({"/src/layout/modules/Default.vue":()=>e(()=>import("./Default-a17cd218.js"),["./Default-a17cd218.js","./vendor-909dccda.js","./__commonjsHelpers__-725317a4.js","./Default-33251071.css"],import.meta.url)}),q=I({name:"Layout",setup(){const o=A("Default");return{component:L(N(M[`/src/layout/modules/${o.value}.vue`]))}}});const C=(o,t)=>{const i=o.__vccOpts||o;for(const[s,r]of t)i[s]=r;return i};function x(o,t,i,s,r,_){return l(),a(y,{name:"fade"},{default:P(()=>[(l(),a($,null,[(l(),a(V(o.component)))],1024))]),_:1})}const J=C(q,[["render",x]]),{DOC_LANGUAGE:W,DOC_NAVIGATIONS:F}={DOC_BASE_DIR:"/ikoolcore/",DOC_ROUTER_MODE:"hash",DOC_DEV_PORT:"12000",DOC_TITLE:"Ikoolcore",DOC_LOGO:"https://yun.swimly.cn/source/ikoolcore/iKoolCore.svg",DOC_GITALK:"true",DOC_GITHUB_CLIENTID:"c3fa1cd407ff0c3c8cd0",DOC_GIHUB_CLIENT_SECRET:"109a56d5e869c89d6f5347de42a231519ecab49c",DOC_GITHUB_REPO:"wiki.ikoolcore.com",DOC_GITHUB_OWNER:"KoolCore",DOC_GITHUB_ADMIN:'["swimly","KoolCore"]',DOC_LANGUAGE:'[{"content": "简体中文","value": "zh-CN"},{"content": "English","value": "en"}]',DOC_NAVIGATIONS:'[{"name": "R1","value": "R1"}]',DOC_TOC:"true",DOC_LAYOUT:"Default",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0},Y=JSON.parse(F)[0],Q=JSON.parse(W);function f(o,t){let i=[],s;return o.forEach(r=>{const _=r.type||t;let{children:m}=r;r.type==="component"&&(m=r.children.sort((E,v)=>{const c=E.name.toUpperCase(),d=v.name.toUpperCase();return c<d?-1:c>d?1:0})),m?i=i.concat(f(m,_)):(s={...r},i.push(s))}),i}function X(){const o=[];return K.forEach(t=>{o.push({path:`/${t.nav.value}`,component:J,redirect:t.lang.value===Q[0].value?`${t.children[0].children[0].path}`:"",children:f(t.children)})}),o}const Z=[{path:"/",redirect:`/${Y.value}`},{path:"/:w+",redirect:"/404"}].concat(X()),R=z({routes:Z,history:b("./")});R.beforeEach((o,t,i)=>{O.start(),i()});R.afterEach(()=>{O.done()});const ee={};function te(o,t){const i=w("router-view");return l(),a(i)}const oe=C(ee,[["render",te]]),re=G(),p=S(oe);p.config.performance=!0;p.use(R);p.use(re);p.mount("#app");export{C as _,K as c};
