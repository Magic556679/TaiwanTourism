(function(e){function t(t){for(var r,o,a=t[0],i=t[1],d=t[2],l=0,s=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&s.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(s.length)s.shift()();return u.push.apply(u,d||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0cefdb":"9af57ae5","chunk-2d213505":"ddfda10b","chunk-4678ee4d":"6021b95c"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-4678ee4d":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0cefdb":"31d6cfe0","chunk-2d213505":"31d6cfe0","chunk-4678ee4d":"56a84277"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var d=u[a],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===r||l===c))return t()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){d=s[a],l=d.getAttribute("data-href");if(l===r||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],b.parentNode.removeChild(b),n(u)},b.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e);var s=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}c[e]=void 0}};var b=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/TaiwanTourism/dist/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var b=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1354:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("bc3a"),c=n.n(o),u=n("130e"),a={id:"nav"},i=Object(r["g"])("Home"),d=Object(r["g"])(" | "),l=Object(r["g"])("台灣景點"),s=Object(r["g"])(" ｜ "),b=Object(r["g"])("路由示範"),f=Object(r["g"])(" | "),p=Object(r["g"])("路由示範"),m=Object(r["g"])(" | "),j=Object(r["g"])("動態路由 id");function O(e,t){var n=Object(r["x"])("router-link"),o=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",a,[Object(r["h"])(n,{to:"/"},{default:Object(r["E"])((function(){return[i]})),_:1}),d,Object(r["h"])(n,{to:"/attractions"},{default:Object(r["E"])((function(){return[l]})),_:1}),s,Object(r["h"])(n,{to:"/products"},{default:Object(r["E"])((function(){return[b]})),_:1}),f,Object(r["h"])(n,{to:{name:"routerdemo"}},{default:Object(r["E"])((function(){return[p]})),_:1}),m,Object(r["h"])(n,{to:"/product/:id"},{default:Object(r["E"])((function(){return[j]})),_:1})]),Object(r["h"])(o)],64)}n("b99d");var h=n("d959"),v=n.n(h);const g={},y=v()(g,[["render",O]]);var k=y,x=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),w={class:"home"},E={class:"mt-3 mb-3"},_={class:"mt-3 mb-3"},C=Object(r["g"])("123123"),P={class:"mt-2"},D={class:"mt-2"};function S(e,t,n,o,c,u){var a=Object(r["x"])("HelloWorld"),i=Object(r["x"])("vuex-demo"),d=Object(r["x"])("props-demo"),l=Object(r["x"])("emit-demo");return Object(r["q"])(),Object(r["e"])("div",w,[Object(r["h"])(a,{msg:"Welcome to Your Vue.js App"}),Object(r["f"])("div",E,[Object(r["h"])(i)]),Object(r["f"])("div",_,[Object(r["h"])(d,{propsDemo:c.text,text:c.innertext,propsobj:c.obj},{default:Object(r["E"])((function(){return[C]})),_:1},8,["propsDemo","text","propsobj"])]),Object(r["f"])("button",{class:"mt-2",onClick:t[0]||(t[0]=function(){return u.add&&u.add.apply(u,arguments)})}," home.vue add "),Object(r["f"])("div",P,[Object(r["h"])(l,{onEmitClick:u.add},null,8,["onEmitClick"])]),Object(r["f"])("h3",D," Home.vue 主元件的 data：num "+Object(r["z"])(c.num),1)])}var T={class:"hello"};function q(e,t,n,o,c,u){return Object(r["q"])(),Object(r["e"])("div",T,[Object(r["f"])("h1",null,Object(r["z"])(n.msg),1)])}var A={name:"HelloWorld",props:{msg:String}};n("7af5");const H=v()(A,[["render",q],["__scopeId","data-v-007b3654"]]);var z=H;function L(e,t,n,o,c,u){return Object(r["q"])(),Object(r["e"])("div",null,Object(r["z"])(u.greeting),1)}var N={name:"VuexDemo",computed:{greeting:function(){return this.$store.state.greeting}}};const V=v()(N,[["render",L]]);var M=V,W=Object(r["f"])("br",null,null,-1),B=Object(r["f"])("br",null,null,-1);function $(e,t,n,o,c,u){return Object(r["q"])(),Object(r["e"])("div",null,[Object(r["g"])(Object(r["z"])(n.propsDemo)+" "+Object(r["z"])(n.text),1),W,Object(r["g"])(Object(r["z"])(n.propsobj)+" / "+Object(r["z"])(c.newobj)+" ",1),B,Object(r["F"])(Object(r["f"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.newobj=e})},null,512),[[r["C"],c.newobj]])])}n("b0c0");var F={props:["propsDemo","text","propsobj"],data:function(){return{newobj:""}},created:function(){this.newobj=this.propsobj.name}};const I=v()(F,[["render",$]]);var J=I;function U(e,t,n,o,c,u){return Object(r["q"])(),Object(r["e"])("div",null,[Object(r["f"])("button",{type:"button",onClick:t[0]||(t[0]=function(){return u.click&&u.click.apply(u,arguments)})},"emid add")])}var K={data:function(){return{emitText:"測試"}},methods:{click:function(){this.$emit("EmitClick"),console.log("內")}}};const Y=v()(K,[["render",U]]);var G=Y,Q={name:"Home",data:function(){return{text:"我是外部元件傳進來的",num:0,innertext:"我是外部元件",obj:{name:"傳參考"}}},methods:{add:function(){this.num+=1,console.log("外")}},components:{HelloWorld:z,VuexDemo:M,PropsDemo:J,EmitDemo:G},mounted:function(){console.log(this.$router)}};const R=v()(Q,[["render",S]]);var X=R,Z=[{path:"/",name:"Home",component:X},{path:"/attractions",name:"Attractions",component:function(){return n.e("chunk-4678ee4d").then(n.bind(null,"9d46"))}},{path:"/products",name:"routerdemo",component:function(){return n.e("chunk-2d213505").then(n.bind(null,"abc1"))}},{path:"/product/:id",name:"id",component:function(){return n.e("chunk-2d0cefdb").then(n.bind(null,"628a"))}}],ee=Object(x["a"])({history:Object(x["b"])(),routes:Z}),te=ee,ne=n("5502"),re=Object(ne["a"])({state:{greeting:"我是 Vuex 傳進來的 state"},mutations:{},actions:{},modules:{}}),oe=Object(r["c"])(k);oe.use(u["a"],c.a),oe.use(te),oe.use(re),oe.mount("#app")},"7af5":function(e,t,n){"use strict";n("bbcd")},b99d:function(e,t,n){"use strict";n("1354")},bbcd:function(e,t,n){}});
//# sourceMappingURL=app.1f2682eb.js.map