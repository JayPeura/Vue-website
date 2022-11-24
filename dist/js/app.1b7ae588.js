(function(){"use strict";var e={8515:function(e,t,n){var a=n(9242),o=n(3396),r=n(7139);function i(e,t,n,i,s,l){const c=(0,o.up)("SideBar"),u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",{class:(0,r.C_)(["app",s.mode])},[(0,o.Wm)(c),(0,o._)("span",{class:"material-icons-two-tone",onClick:t[0]||(t[0]=(...e)=>l.toggleTheme&&l.toggleTheme(...e)),style:{cursor:"pointer",width:"30px",height:"30px",position:"fixed",top:"1vh",right:"0.5vw"}},(0,r.zw)(s.mode),1),(0,o.Wm)(u,(0,r.vs)((0,o.F4)(l.myProps)),{default:(0,o.w5)((({Component:e})=>[(0,o.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))])),_:2},1024)])),_:1},16)],2)}var s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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",l=n(4870);const c=e=>((0,o.dD)("data-v-94b2bfc4"),e=e(),(0,o.Cn)(),e),u=c((()=>(0,o._)("div",{class:"logo"},[(0,o._)("img",{src:s,alt:"Vue"})],-1))),d=c((()=>(0,o._)("span",{class:"material-symbols-rounded"},"menu",-1))),h=[d],m=c((()=>(0,o._)("h3",null,"Menu",-1))),f={class:"menu"},b=c((()=>(0,o._)("span",{class:"material-symbols-rounded"},"home",-1))),p=c((()=>(0,o._)("span",{class:"text"},"Home",-1))),g=c((()=>(0,o._)("span",{class:"material-symbols-rounded"},"pets",-1))),v=c((()=>(0,o._)("span",{class:"text"},"Cat breeds",-1))),w=c((()=>(0,o._)("span",{class:"material-symbols-rounded"},"quiz",-1))),y=c((()=>(0,o._)("span",{class:"text"},"Cat quiz",-1))),k=c((()=>(0,o._)("span",{class:"material-symbols-rounded"},"person",-1))),C=c((()=>(0,o._)("span",{class:"text"},"GitHub search",-1))),I=c((()=>(0,o._)("span",{class:"material-symbols-rounded"},"spellcheck",-1))),U=c((()=>(0,o._)("span",{class:"text"},"Randomiser",-1))),R=c((()=>(0,o._)("span",{class:"material-symbols-rounded"},"people",-1))),W=c((()=>(0,o._)("span",{class:"text"},"Text Adventure",-1)));var E={__name:"SideBar",setup(e){const t=(0,l.iH)(!1),n=(0,l.iH)(0),a=()=>{t.value=!t.value};return window.addEventListener("keydown",(function(e){["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code)>-1&&e.preventDefault()}),!1),(0,o.bv)((()=>{const e=e=>{switch(e.code){case"ArrowLeft":t.value=!t.value;break;case"ArrowRight":t.value=!1;break;case"ArrowUp":case"ArrowDown":{if(!t.value){t.value=!0;break}const a=n.value+("ArrowDown"===e.code?1:-1);a>=0&&a<6&&(n.value=a,document.querySelectorAll("#navigation")[n.value].focus());break}}};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}})),(e,n)=>{const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("aside",{onKeydown:n[0]||(n[0]=(...t)=>e.keyboard&&e.keyboard(...t)),class:(0,r.C_)(`${t.value&&"is-expanded"}`)},[u,(0,o._)("div",{class:"menu-toggle-wrap"},[(0,o._)("button",{class:"menu-toggle",onClick:a},h)]),m,(0,o._)("div",f,[(0,o.Wm)(i,{class:"button",to:"/",id:"navigation"},{default:(0,o.w5)((()=>[b,p])),_:1}),(0,o.Wm)(i,{class:"button",to:"/list/",id:"navigation"},{default:(0,o.w5)((()=>[g,v])),_:1}),(0,o.Wm)(i,{class:"button",to:"/quiz/",id:"navigation"},{default:(0,o.w5)((()=>[w,y])),_:1}),(0,o.Wm)(i,{class:"button",to:"/profile/",id:"navigation"},{default:(0,o.w5)((()=>[k,C])),_:1}),(0,o.Wm)(i,{class:"button",to:"/random/",id:"navigation"},{default:(0,o.w5)((()=>[I,U])),_:1}),(0,o.Wm)(i,{class:"button",to:"/text-adventure/",id:"navigation"},{default:(0,o.w5)((()=>[R,W])),_:1})])],34)}}},A=n(89);const x=(0,A.Z)(E,[["__scopeId","data-v-94b2bfc4"]]);var Z=x,N={name:"App",components:{SideBar:Z},computed:{myProps(){return{mode:this.mode,toggleTheme:this.toggleTheme}}},data(){return{mode:"dark_mode"}},methods:{toggleTheme:function(){"dark_mode"===this.mode?this.mode="light_mode":this.mode="dark_mode"}}};const z=(0,A.Z)(N,[["render",i]]);var B=z,G=n(6177);(0,a.ri)(B).use(G.Z).mount("#app")},6177:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(2483),o=n(3396);const r=e=>((0,o.dD)("data-v-489946e6"),e=e(),(0,o.Cn)(),e),i={class:"main-container",style:{margin:"0 0 0 120px","overflow-x":"hidden"}},s=r((()=>(0,o._)("div",{class:"container-two"},[(0,o._)("div",{class:"about-cats"},[(0,o._)("h1",null,"Cats in general"),(0,o._)("p",null,[(0,o.Uk)(" Cats originate from Africa, since the earliest known indication for the taming of an African wildcat was excavated close by a human Neolithic grave in Shillourokambos, southern Cyprus, dating to about 7500-7200 BC. During domestication, cats have undergone only minor changes in anatomy and behavior, and they are still capable of surviving in the wild. However this is not ideal for the domestic cat especially in Finland. "),(0,o._)("br"),(0,o._)("br"),(0,o.Uk)(" Female domestic cats can have kittens from spring to late autumn, with litter sizes often ranging from two to five kittens. Population control of cats may be effected by spaying and neutering, but their proliferation and the abandonment of pets has resulted in large numbers of feral cats worldwide, contributing to the extinction of entire bird, mammal, and reptile species. ")]),(0,o._)("hr"),(0,o._)("br"),(0,o._)("h2",null,"Fun facts about cats"),(0,o._)("p",{style:{"text-align":"start"}},[(0,o.Uk)(" - A house cat's genome is 95.6 percent tiger, and they share many behaviors with their jungle ancestors, says Layla Morgan Wilde, a cat behavior expert and the founder of Cat Wisdom 101. These behaviors include scent marking by scratching, prey play, prey stalking, pouncing, chinning, and urine marking. "),(0,o._)("br"),(0,o.Uk)(" - Cats are believed to be the only mammals who don't taste sweetness. "),(0,o._)("br"),(0,o.Uk)(" - Cats are nearsighted, but their peripheral vision and night vision are much better than that of humans. "),(0,o._)("br"),(0,o.Uk)(" - Cats are supposed to have 18 toes (five toes on each front paw; four toes on each back paw). There are cats who have more than 18 toes. These extra-digit felines are referred to as being “polydactyl.” "),(0,o._)("br"),(0,o.Uk)(" - Cats can jump up to six times their length. "),(0,o._)("br"),(0,o.Uk)(" - Cats' claws all curve downward, which means that they can't climb down trees head-first. Instead, they have to back down the trunk. "),(0,o._)("br"),(0,o.Uk)(" - Cats' collarbones don't connect to their other bones, as these bones are buried in their shoulder muscles. "),(0,o._)("br"),(0,o.Uk)(" - Cats have 230 bones, while humans only have 206. "),(0,o._)("br"),(0,o.Uk)(" - Cats have an extra organ that allows them to taste scents on the air, which is why your cat stares at you with her mouth open from time to time. "),(0,o._)("br"),(0,o.Uk)(" - Cats have whiskers on the backs of their front legs, as well. "),(0,o._)("br"),(0,o.Uk)(" - Cats have nearly twice the amount of neurons in their cerebral cortex as dogs. "),(0,o._)("br"),(0,o.Uk)(" - Cats have the largest eyes relative to their head size of any mammal. "),(0,o._)("br"),(0,o.Uk)(" - Cats make very little noise when they walk around. The thick, soft pads on their paws allow them to sneak up on their prey — or you! "),(0,o._)("br"),(0,o.Uk)(" - Cats' rough tongues can lick a bone clean of any shred of meat. "),(0,o._)("br"),(0,o.Uk)(" - Cats use their long tails to balance themselves when they're jumping or walking along narrow ledges. "),(0,o._)("br"),(0,o.Uk)(" - Cats use their whiskers to “feel” the world around them in an effort to determine which small spaces they can fit into. "),(0,o._)("br"),(0,o.Uk)(" - A cat's whiskers are generally about the same width as its body. (This is why you should never, EVER cut their whiskers.) "),(0,o._)("br"),(0,o.Uk)(" - Cats walk like camels and giraffes: They move both of their right feet first, then move both of their left feet. No other animals walk this way. "),(0,o._)("br"),(0,o.Uk)(" - Male cats are more likely to be left-pawed, while female cats are more likely to be right-pawed. Some cats are ambidextrous, but 40 percent are either left- or right-pawed. "),(0,o._)("br"),(0,o.Uk)(" - Though cats can notice the fast movements of their prey, it often seems to them that slow-moving objects are actually stagnant. "),(0,o._)("br"),(0,o.Uk)(" - Some cats can swim. "),(0,o._)("br")]),(0,o._)("div",{style:{margin:"100px"}}),(0,o._)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/2w00lGT_m4w",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}),(0,o._)("div",{style:{margin:"100px"}})])],-1))),l=[s];function c(e,t,n,a,r,s){return(0,o.wg)(),(0,o.iD)("div",i,l)}var u={name:"MainCard",props:{mode:String,toggleTheme:Function}},d=n(89);const h=(0,d.Z)(u,[["render",c],["__scopeId","data-v-489946e6"]]);var m=h;const f=(0,a.p7)({history:(0,a.r5)(),routes:[{path:"/",component:m},{path:"/list/",component:()=>n.e(917).then(n.bind(n,7007))},{path:"/quiz/",component:()=>n.e(808).then(n.bind(n,1808))},{path:"/quiz/reward/",component:()=>n.e(26).then(n.bind(n,8667))},{path:"/profile/",component:()=>n.e(381).then(n.bind(n,1381))},{path:"/random/",component:()=>n.e(7).then(n.bind(n,3007))},{path:"/text-adventure/",component:()=>n.e(759).then(n.bind(n,4759))}]});var b=f}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{7:"088a35d9",26:"01cb0f54",381:"58ba3063",759:"1ff57a37",808:"154aa853",917:"e49862ca"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{7:"4358ba37",26:"b2a7d66a",381:"3cd1045f",759:"c26b2925",808:"2b397b72",917:"62a7de57"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-portfolio:";n.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=a),e[a]=[o];var h=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Vue-website/"}(),function(){var e=function(e,t,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),a(l)}};return o.onerror=o.onload=r,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===t)return o}},a=function(a){return new Promise((function(o,r){var i=n.miniCssF(a),s=n.p+i;if(t(i,s))return o();e(a,s,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={7:1,26:1,381:1,759:1,808:1,917:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(t),s=new Error,l=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],s=a[1],l=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(t&&t(a);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},a=self["webpackChunkvue_portfolio"]=self["webpackChunkvue_portfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8515)}));a=n.O(a)})();
//# sourceMappingURL=app.1b7ae588.js.map