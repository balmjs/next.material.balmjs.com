(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"Kw/F":function(e,t,o){"use strict";o.r(t);var a=o("8r9s");const l={class:"demo-wrapper"},c={class:"demo"},d={class:"demo-wrapper"},n={class:"demo"},s={class:"demo-wrapper"},p={class:"demo"},r={class:"demo-wrapper"},i={class:"demo"};var u={metaInfo:{titleTemplate:"%s - Pagination"},data:function(){return{page:1,total:100,page1:1,total1:100,page2:1,total2:500,page3:1,total3:100,page4:1,total4:100}},render:function(e,t,o,u,m,V){const b=Object(a.resolveComponent)("ui-pagination"),j=Object(a.resolveComponent)("ui-snippet"),O=Object(a.resolveComponent)("docs-page");return Object(a.openBlock)(),Object(a.createBlock)(O,{name:"pagination","demo-count":"4"},{hero:Object(a.withCtx)((()=>[Object(a.createVNode)(b,{modelValue:m.page,"onUpdate:modelValue":t[1]||(t[1]=e=>m.page=e),total:m.total,"show-total":"","page-span":!1,"page-size":[10,25,50]},null,8,["modelValue","total"])])),default:Object(a.withCtx)((()=>[Object(a.createVNode)("section",l,[Object(a.createVNode)("h6",{class:e.$tt("headline6")},"1.1 Default Usage",2),Object(a.createVNode)("div",c,[Object(a.createVNode)(b,{modelValue:m.page1,"onUpdate:modelValue":t[2]||(t[2]=e=>m.page1=e),total:m.total1,"show-total":"",position:"center"},null,8,["modelValue","total"])]),Object(a.createVNode)(j,{code:e.$store.demos[1]},null,8,["code"])]),Object(a.createVNode)("section",d,[Object(a.createVNode)("h6",{class:e.$tt("headline6")},"1.2 Pagination with page size",2),Object(a.createVNode)("div",n,[Object(a.createVNode)(b,{modelValue:m.page2,"onUpdate:modelValue":t[3]||(t[3]=e=>m.page2=e),total:m.total2,"show-total":"","page-size":[10,25,100],position:"left"},null,8,["modelValue","total"])]),Object(a.createVNode)(j,{code:e.$store.demos[2]},null,8,["code"])]),Object(a.createVNode)("section",s,[Object(a.createVNode)("h6",{class:e.$tt("headline6")},"1.3 Pagination with jumper",2),Object(a.createVNode)("div",p,[Object(a.createVNode)(b,{modelValue:m.page3,"onUpdate:modelValue":t[4]||(t[4]=e=>m.page3=e),total:m.total3,"show-total":"","show-jumper":""},null,8,["modelValue","total"])]),Object(a.createVNode)(j,{code:e.$store.demos[3]},null,8,["code"])]),Object(a.createVNode)("section",r,[Object(a.createVNode)("h6",{class:e.$tt("headline6")},"1.4 Mini Mode",2),Object(a.createVNode)("div",i,[Object(a.createVNode)(b,{modelValue:m.page4,"onUpdate:modelValue":t[5]||(t[5]=e=>m.page4=e),total:m.total4,"show-total":"",mini:""},null,8,["modelValue","total"])]),Object(a.createVNode)(j,{code:e.$store.demos[4]},null,8,["code"])])])),_:1})}};t.default=u}}]);