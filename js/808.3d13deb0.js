"use strict";(self["webpackChunkvue_portfolio"]=self["webpackChunkvue_portfolio"]||[]).push([[808],{1808:function(e,l,t){t.r(l),t.d(l,{default:function(){return y}});var a=t(3396),n=t(7139),s=t(4870),u=t(9242),i=t(3325);const o=e=>((0,a.dD)("data-v-1f48b450"),e=e(),(0,a.Cn)(),e),r={class:"quizApp"},c=o((()=>(0,a._)("h1",null,"The Great Cat Quiz",-1))),d=o((()=>(0,a._)("br",null,null,-1))),p={key:0,class:"quiz"},v={class:"quiz-info"},w={class:"question"},h={class:"score"},g={class:"options"},S=["for"],_=["id","name","value","disabled"],f=["disabled"],U={key:1},z=o((()=>(0,a._)("h2",null,"You have finished the quiz!",-1)));var b={__name:"QuizView",setup(e){const l=(0,s.iH)([{question:"What is a cat?",answer:0,options:["Feline","Canine","Vulpine","Bovine"],selected:null},{question:"How many kittens does the female cat usually have?",answer:1,options:["1-2","2-5","4-6","6-8"],selected:null},{question:"Where do the cats originate from?",answer:2,options:["Europe","America","Africa","Australia"],selected:null},{question:"When do cats usually have kittens?",answer:0,options:["Spring to late autumn","Winter to spring","Summer to late winter"],selected:null}]),t=(0,s.iH)(!1),o=(0,s.iH)(0),b=(0,a.Fl)((()=>{let e=0;return l.value.map((l=>{l.selected==l.answer&&e++})),e})),m=(0,a.Fl)((()=>{let e=l.value[o.value];return e.index=o.value,e})),q=e=>{l.value[o.value].selected=e.target.value,e.target.value=null},y=()=>{o.value<l.value.length-1?o.value++:(t.value=!0,b.value===l.value.length&&(alert("You got all the answers correctly! Here's your reward: use the word 'catto' in jaypeura.github.io/Vue-website/quiz/reward/"),setTimeout((()=>{i.Z.replace({path:"/quiz/reward/"})}),1e3)))};return(e,i)=>((0,a.wg)(),(0,a.iD)("main",r,[c,d,t.value?((0,a.wg)(),(0,a.iD)("section",U,[z,(0,a._)("p",null,"Your score is "+(0,n.zw)((0,s.SU)(b))+"/"+(0,n.zw)(l.value.length),1)])):((0,a.wg)(),(0,a.iD)("section",p,[(0,a._)("div",v,[(0,a._)("span",w,(0,n.zw)((0,s.SU)(m).question),1),(0,a._)("span",h,"Score "+(0,n.zw)((0,s.SU)(b))+"/"+(0,n.zw)(l.value.length),1)]),(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,s.SU)(m).options,((e,l)=>((0,a.wg)(),(0,a.iD)("label",{key:e,for:"option"+l,class:(0,n.C_)(`option ${(0,s.SU)(m).selected==l?l==(0,s.SU)(m).answer?"correct":"wrong":""} ${null!=(0,s.SU)(m).selected&&l!=(0,s.SU)(m).selected?"disabled":""}`)},[(0,a.wy)((0,a._)("input",{type:"radio",id:"option"+l,name:(0,s.SU)(m).index,value:l,"onUpdate:modelValue":i[0]||(i[0]=e=>(0,s.SU)(m).selected=e),disabled:(0,s.SU)(m).selected,onChange:q},null,40,_),[[u.G2,(0,s.SU)(m).selected]]),(0,a._)("span",null,(0,n.zw)(e),1)],10,S)))),128))]),(0,a._)("button",{onClick:y,disabled:!(0,s.SU)(m).selected,class:"nextQuestion"},(0,n.zw)((0,s.SU)(m).index==l.value.length-1?"Finish":null==(0,s.SU)(m).selected?"Select an option":"Next question"),9,f)]))]))}},m=t(89);const q=(0,m.Z)(b,[["__scopeId","data-v-1f48b450"]]);var y=q}}]);
//# sourceMappingURL=808.3d13deb0.js.map