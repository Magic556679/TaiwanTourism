(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4678ee4d"],{"0b42":function(t,e,n){var r=n("e8b5"),i=n("68ee"),s=n("861d"),c=n("b622"),o=c("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,i(e)&&(e===Array||r(e.prototype))?e=void 0:s(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},"107c":function(t,e,n){var r=n("d039"),i=n("da84"),s=i.RegExp;t.exports=r((function(){var t=s("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var r=n("825a"),i=n("1626"),s=n("c6b6"),c=n("9263");t.exports=function(t,e){var n=t.exec;if(i(n)){var o=n.call(t,e);return null!==o&&r(o),o}if("RegExp"===s(t))return c.call(t,e);throw TypeError("RegExp#exec called on incompatible receiver")}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),s=n("2d00"),c=i("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"466d":function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),s=n("50c4"),c=n("577e"),o=n("1d80"),u=n("dc4a"),a=n("8aa5"),h=n("14c3");r("match",(function(t,e,n){return[function(e){var n=o(this),r=void 0==e?void 0:u(e,t);return r?r.call(e,n):new RegExp(e)[t](c(n))},function(t){var r=i(this),o=c(t),u=n(e,r,o);if(u.done)return u.value;if(!r.global)return h(r,o);var l=r.unicode;r.lastIndex=0;var f,w=[],d=0;while(null!==(f=h(r,o))){var p=c(f[0]);w[d]=p,""===p&&(r.lastIndex=a(o,s(r.lastIndex),l)),d++}return 0===d?null:w}]}))},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),c=s("filter");r({target:"Array",proto:!0,forced:!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"6eb4":function(t,e,n){},"841c":function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),s=n("1d80"),c=n("129f"),o=n("577e"),u=n("dc4a"),a=n("14c3");r("search",(function(t,e,n){return[function(e){var n=s(this),r=void 0==e?void 0:u(e,t);return r?r.call(e,n):new RegExp(e)[t](o(n))},function(t){var r=i(this),s=o(t),u=n(e,r,s);if(u.done)return u.value;var h=r.lastIndex;c(h,0)||(r.lastIndex=0);var l=a(r,s);return c(r.lastIndex,h)||(r.lastIndex=h),null===l?-1:l.index}]}))},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("577e"),i=n("ad6d"),s=n("9f7f"),c=n("5692"),o=n("7c73"),u=n("69f3").get,a=n("fce3"),h=n("107c"),l=RegExp.prototype.exec,f=c("native-string-replace",String.prototype.replace),w=l,d=function(){var t=/a/,e=/b*/g;return l.call(t,"a"),l.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),p=s.UNSUPPORTED_Y||s.BROKEN_CARET,v=void 0!==/()??/.exec("")[1],b=d||v||p||a||h;b&&(w=function(t){var e,n,s,c,a,h,b,g=this,A=u(g),m=r(t),N=A.raw;if(N)return N.lastIndex=g.lastIndex,e=w.call(N,m),g.lastIndex=N.lastIndex,e;var Y=A.groups,E=p&&g.sticky,y=i.call(g),x=g.source,O=0,R=m;if(E&&(y=y.replace("y",""),-1===y.indexOf("g")&&(y+="g"),R=m.slice(g.lastIndex),g.lastIndex>0&&(!g.multiline||g.multiline&&"\n"!==m.charAt(g.lastIndex-1))&&(x="(?: "+x+")",R=" "+R,O++),n=new RegExp("^(?:"+x+")",y)),v&&(n=new RegExp("^"+x+"$(?!\\s)",y)),d&&(s=g.lastIndex),c=l.call(E?n:g,R),E?c?(c.input=c.input.slice(O),c[0]=c[0].slice(O),c.index=g.lastIndex,g.lastIndex+=c[0].length):g.lastIndex=0:d&&c&&(g.lastIndex=g.global?c.index+c[0].length:s),v&&c&&c.length>1&&f.call(c[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(c[a]=void 0)})),c&&Y)for(c.groups=h=o(null),a=0;a<Y.length;a++)b=Y[a],h[b[0]]=c[b[1]];return c}),t.exports=w},"9d46":function(t,e,n){"use strict";n.r(e);n("ac1f"),n("841c");var r=n("7a23"),i=function(t){return Object(r["t"])("data-v-5116796b"),t=t(),Object(r["r"])(),t},s=i((function(){return Object(r["f"])("div",{class:"about"},[Object(r["f"])("h1",null,"台灣各大景點")],-1)})),c={class:"container"},o={class:"row"},u={class:"col-12"},a={class:"row"},h={class:"col-12 mt-5"},l=i((function(){return Object(r["f"])("option",{disabled:""},"請選擇",-1)})),f=["value"],w={class:"row mt-5"},d={class:"card",style:{width:"18rem"}},p=["src","alt"],v={class:"card-body"},b={class:"card-title"},g={class:"card-title"},A={class:"card-text"},m=i((function(){return Object(r["f"])("a",{href:"#",class:"btn btn-primary"},"Go somewhere",-1)})),N={key:0,class:"row mt-5"},Y={class:"card",style:{width:"18rem"}},E=["src","alt"],y={class:"card-body"},x={class:"card-title"},O={class:"card-title"},R={class:"card-text"},C=i((function(){return Object(r["f"])("a",{href:"#",class:"btn btn-primary"},"Go somewhere",-1)}));function U(t,e,n,i,U,H){return Object(r["q"])(),Object(r["e"])(r["a"],null,[s,Object(r["f"])("div",c,[Object(r["f"])("div",o,[Object(r["f"])("div",u,[Object(r["F"])(Object(r["f"])("input",{type:"text",placeholder:"搜尋關鍵字","onUpdate:modelValue":e[0]||(e[0]=function(t){return U.search=t}),ref:"test"},null,512),[[r["C"],U.search]])])]),Object(r["f"])("div",a,[Object(r["f"])("div",h,[Object(r["F"])(Object(r["f"])("select",{name:"全部地區","onUpdate:modelValue":e[1]||(e[1]=function(t){return U.select=t})},[l,(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(U.city,(function(t){return Object(r["q"])(),Object(r["e"])("option",{key:t.id,value:t},Object(r["z"])(t),9,f)})),128))],512),[[r["B"],U.select]])])]),Object(r["f"])("div",w,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(H.textsearch,(function(t){return Object(r["q"])(),Object(r["e"])("div",{class:"col-12 col-lg-3",key:t.id},[Object(r["f"])("div",d,[Object(r["f"])("img",{src:t.Picture.PictureUrl1,class:"card-img-top",alt:t.Picture.PictureDescription1},null,8,p),Object(r["f"])("div",v,[Object(r["f"])("h3",b,Object(r["z"])(t.City),1),Object(r["f"])("h5",g,Object(r["z"])(t.Name),1),Object(r["f"])("p",A,Object(r["z"])(t.DescriptionDetail),1),m])])])})),128))]),void 0==this.search?(Object(r["q"])(),Object(r["e"])("div",N,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(U.place,(function(t){return Object(r["q"])(),Object(r["e"])("div",{class:"col-12 col-lg-3",key:t.id},[Object(r["f"])("div",Y,[Object(r["f"])("img",{src:t.Picture.PictureUrl1,class:"card-img-top",alt:t.Picture.PictureDescription1},null,8,E),Object(r["f"])("div",y,[Object(r["f"])("h3",x,Object(r["z"])(t.City),1),Object(r["f"])("h5",O,Object(r["z"])(t.Name),1),Object(r["f"])("p",R,Object(r["z"])(t.DescriptionDetail),1),C])])])})),128))])):Object(r["d"])("",!0)])],64)}n("4de4"),n("466d");const H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function S(t,e,n,r){let i,s,c;const o=e||[0],u=(n=n||0)>>>3,a=-1===r?3:0;for(i=0;i<t.length;i+=1)c=i+u,s=c>>>2,o.length<=s&&o.push(0),o[s]|=t[i]<<8*(a+r*(c%4));return{value:o,binLen:8*t.length+n}}function j(t,e,n){switch(e){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(t){case"HEX":return function(t,e,r){return function(t,e,n,r){let i,s,c,o;if(0!=t.length%2)throw new Error("String of HEX type must be in byte increments");const u=e||[0],a=(n=n||0)>>>3,h=-1===r?3:0;for(i=0;i<t.length;i+=2){if(s=parseInt(t.substr(i,2),16),isNaN(s))throw new Error("String of HEX type contains invalid characters");for(o=(i>>>1)+a,c=o>>>2;u.length<=c;)u.push(0);u[c]|=s<<8*(h+r*(o%4))}return{value:u,binLen:4*t.length+n}}(t,e,r,n)};case"TEXT":return function(t,r,i){return function(t,e,n,r,i){let s,c,o,u,a,h,l,f,w=0;const d=n||[0],p=(r=r||0)>>>3;if("UTF8"===e)for(l=-1===i?3:0,o=0;o<t.length;o+=1)for(s=t.charCodeAt(o),c=[],128>s?c.push(s):2048>s?(c.push(192|s>>>6),c.push(128|63&s)):55296>s||57344<=s?c.push(224|s>>>12,128|s>>>6&63,128|63&s):(o+=1,s=65536+((1023&s)<<10|1023&t.charCodeAt(o)),c.push(240|s>>>18,128|s>>>12&63,128|s>>>6&63,128|63&s)),u=0;u<c.length;u+=1){for(h=w+p,a=h>>>2;d.length<=a;)d.push(0);d[a]|=c[u]<<8*(l+i*(h%4)),w+=1}else for(l=-1===i?2:0,f="UTF16LE"===e&&1!==i||"UTF16LE"!==e&&1===i,o=0;o<t.length;o+=1){for(s=t.charCodeAt(o),!0===f&&(u=255&s,s=u<<8|s>>>8),h=w+p,a=h>>>2;d.length<=a;)d.push(0);d[a]|=s<<8*(l+i*(h%4)),w+=2}return{value:d,binLen:8*w+r}}(t,e,r,i,n)};case"B64":return function(t,e,r){return function(t,e,n,r){let i,s,c,o,u,a,h,l=0;const f=e||[0],w=(n=n||0)>>>3,d=-1===r?3:0,p=t.indexOf("=");if(-1===t.search(/^[a-zA-Z0-9=+/]+$/))throw new Error("Invalid character in base-64 string");if(t=t.replace(/=/g,""),-1!==p&&p<t.length)throw new Error("Invalid '=' found in base-64 string");for(s=0;s<t.length;s+=4){for(u=t.substr(s,4),o=0,c=0;c<u.length;c+=1)i=H.indexOf(u.charAt(c)),o|=i<<18-6*c;for(c=0;c<u.length-1;c+=1){for(h=l+w,a=h>>>2;f.length<=a;)f.push(0);f[a]|=(o>>>16-8*c&255)<<8*(d+r*(h%4)),l+=1}}return{value:f,binLen:8*l+n}}(t,e,r,n)};case"BYTES":return function(t,e,r){return function(t,e,n,r){let i,s,c,o;const u=e||[0],a=(n=n||0)>>>3,h=-1===r?3:0;for(s=0;s<t.length;s+=1)i=t.charCodeAt(s),o=s+a,c=o>>>2,u.length<=c&&u.push(0),u[c]|=i<<8*(h+r*(o%4));return{value:u,binLen:8*t.length+n}}(t,e,r,n)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(H){throw new Error("ARRAYBUFFER not supported by this environment")}return function(t,e,r){return function(t,e,n,r){return S(new Uint8Array(t),e,n,r)}(t,e,r,n)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(H){throw new Error("UINT8ARRAY not supported by this environment")}return function(t,e,r){return S(t,e,r,n)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function L(t,e,n,r){switch(t){case"HEX":return function(t){return function(t,e,n,r){let i,s,c="";const o=e/8,u=-1===n?3:0;for(i=0;i<o;i+=1)s=t[i>>>2]>>>8*(u+n*(i%4)),c+="0123456789abcdef".charAt(s>>>4&15)+"0123456789abcdef".charAt(15&s);return r.outputUpper?c.toUpperCase():c}(t,e,n,r)};case"B64":return function(t){return function(t,e,n,r){let i,s,c,o,u,a="";const h=e/8,l=-1===n?3:0;for(i=0;i<h;i+=3)for(o=i+1<h?t[i+1>>>2]:0,u=i+2<h?t[i+2>>>2]:0,c=(t[i>>>2]>>>8*(l+n*(i%4))&255)<<16|(o>>>8*(l+n*((i+1)%4))&255)<<8|u>>>8*(l+n*((i+2)%4))&255,s=0;s<4;s+=1)a+=8*i+6*s<=e?H.charAt(c>>>6*(3-s)&63):r.b64Pad;return a}(t,e,n,r)};case"BYTES":return function(t){return function(t,e,n){let r,i,s="";const c=e/8,o=-1===n?3:0;for(r=0;r<c;r+=1)i=t[r>>>2]>>>8*(o+n*(r%4))&255,s+=String.fromCharCode(i);return s}(t,e,n)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(H){throw new Error("ARRAYBUFFER not supported by this environment")}return function(t){return function(t,e,n){let r;const i=e/8,s=new ArrayBuffer(i),c=new Uint8Array(s),o=-1===n?3:0;for(r=0;r<i;r+=1)c[r]=t[r>>>2]>>>8*(o+n*(r%4))&255;return s}(t,e,n)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(H){throw new Error("UINT8ARRAY not supported by this environment")}return function(t){return function(t,e,n){let r;const i=e/8,s=-1===n?3:0,c=new Uint8Array(i);for(r=0;r<i;r+=1)c[r]=t[r>>>2]>>>8*(s+n*(r%4))&255;return c}(t,e,n)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}const T=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],K=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],k=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],I="Chosen SHA variant is not supported";function F(t,e){let n,r;const i=t.binLen>>>3,s=e.binLen>>>3,c=i<<3,o=4-i<<3;if(i%4!=0){for(n=0;n<s;n+=4)r=i+n>>>2,t.value[r]|=e.value[n>>>2]<<c,t.value.push(0),t.value[r+1]|=e.value[n>>>2]>>>o;return(t.value.length<<2)-4>=s+i&&t.value.pop(),{value:t.value,binLen:t.binLen+e.binLen}}return{value:t.value.concat(e.value),binLen:t.binLen+e.binLen}}function B(t){const e={outputUpper:!1,b64Pad:"=",outputLen:-1},n=t||{},r="Output length must be a multiple of 8";if(e.outputUpper=n.outputUpper||!1,n.b64Pad&&(e.b64Pad=n.b64Pad),n.outputLen){if(n.outputLen%8!=0)throw new Error(r);e.outputLen=n.outputLen}else if(n.shakeLen){if(n.shakeLen%8!=0)throw new Error(r);e.outputLen=n.shakeLen}if("boolean"!=typeof e.outputUpper)throw new Error("Invalid outputUpper formatting option");if("string"!=typeof e.b64Pad)throw new Error("Invalid b64Pad formatting option");return e}function M(t,e,n,r){const i=t+" must include a value and format";if(!e){if(!r)throw new Error(i);return r}if(void 0===e.value||!e.format)throw new Error(i);return j(e.format,e.encoding||"UTF8",n)(e.value)}class P{constructor(t,e,n){const r=n||{};if(this.t=e,this.i=r.encoding||"UTF8",this.numRounds=r.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.s=t,this.o=[],this.h=0,this.u=!1,this.l=0,this.A=!1,this.H=[],this.S=[]}update(t){let e,n=0;const r=this.p>>>5,i=this.m(t,this.o,this.h),s=i.binLen,c=i.value,o=s>>>5;for(e=0;e<o;e+=r)n+this.p<=s&&(this.C=this.R(c.slice(e,e+r),this.C),n+=this.p);this.l+=n,this.o=c.slice(n>>>5),this.h=s%this.p,this.u=!0}getHash(t,e){let n,r,i=this.U;const s=B(e);if(this.v){if(-1===s.outputLen)throw new Error("Output length must be specified in options");i=s.outputLen}const c=L(t,i,this.K,s);if(this.A&&this.T)return c(this.T(s));for(r=this.F(this.o.slice(),this.h,this.l,this.g(this.C),i),n=1;n<this.numRounds;n+=1)this.v&&i%32!=0&&(r[r.length-1]&=16777215>>>24-i%32),r=this.F(r,i,0,this.B(this.s),i);return c(r)}setHMACKey(t,e,n){if(!this.L)throw new Error("Variant does not support HMAC");if(this.u)throw new Error("Cannot set MAC key after calling update");const r=j(e,(n||{}).encoding||"UTF8",this.K);this.M(r(t))}M(t){const e=this.p>>>3,n=e/4-1;let r;if(1!==this.numRounds)throw new Error("Cannot set numRounds with MAC");if(this.A)throw new Error("MAC key already set");for(e<t.binLen/8&&(t.value=this.F(t.value,t.binLen,0,this.B(this.s),this.U));t.value.length<=n;)t.value.push(0);for(r=0;r<=n;r+=1)this.H[r]=909522486^t.value[r],this.S[r]=1549556828^t.value[r];this.C=this.R(this.H,this.C),this.l=this.p,this.A=!0}getHMAC(t,e){const n=B(e);return L(t,this.U,this.K,n)(this.k())}k(){let t;if(!this.A)throw new Error("Cannot call getHMAC without first setting MAC key");const e=this.F(this.o.slice(),this.h,this.l,this.g(this.C),this.U);return t=this.R(this.S,this.B(this.s)),t=this.F(e,this.U,this.p,t,this.U),t}}function z(t,e){return t<<e|t>>>32-e}function X(t,e){return t>>>e|t<<32-e}function $(t,e){return t>>>e}function D(t,e,n){return t^e^n}function _(t,e,n){return t&e^~t&n}function q(t,e,n){return t&e^t&n^e&n}function J(t){return X(t,2)^X(t,13)^X(t,22)}function G(t,e){const n=(65535&t)+(65535&e);return(65535&(t>>>16)+(e>>>16)+(n>>>16))<<16|65535&n}function V(t,e,n,r){const i=(65535&t)+(65535&e)+(65535&n)+(65535&r);return(65535&(t>>>16)+(e>>>16)+(n>>>16)+(r>>>16)+(i>>>16))<<16|65535&i}function Z(t,e,n,r,i){const s=(65535&t)+(65535&e)+(65535&n)+(65535&r)+(65535&i);return(65535&(t>>>16)+(e>>>16)+(n>>>16)+(r>>>16)+(i>>>16)+(s>>>16))<<16|65535&s}function Q(t){return X(t,7)^X(t,18)^$(t,3)}function W(t){return X(t,6)^X(t,11)^X(t,25)}function tt(t){return[1732584193,4023233417,2562383102,271733878,3285377520]}function et(t,e){let n,r,i,s,c,o,u;const a=[];for(n=e[0],r=e[1],i=e[2],s=e[3],c=e[4],u=0;u<80;u+=1)a[u]=u<16?t[u]:z(a[u-3]^a[u-8]^a[u-14]^a[u-16],1),o=u<20?Z(z(n,5),_(r,i,s),c,1518500249,a[u]):u<40?Z(z(n,5),D(r,i,s),c,1859775393,a[u]):u<60?Z(z(n,5),q(r,i,s),c,2400959708,a[u]):Z(z(n,5),D(r,i,s),c,3395469782,a[u]),c=s,s=i,i=z(r,30),r=n,n=o;return e[0]=G(n,e[0]),e[1]=G(r,e[1]),e[2]=G(i,e[2]),e[3]=G(s,e[3]),e[4]=G(c,e[4]),e}function nt(t,e,n,r){let i;const s=15+(e+65>>>9<<4),c=e+n;for(;t.length<=s;)t.push(0);for(t[e>>>5]|=128<<24-e%32,t[s]=4294967295&c,t[s-1]=c/4294967296|0,i=0;i<t.length;i+=16)r=et(t.slice(i,i+16),r);return r}class rt extends P{constructor(t,e,n){if("SHA-1"!==t)throw new Error(I);super(t,e,n);const r=n||{};this.L=!0,this.T=this.k,this.K=-1,this.m=j(this.t,this.i,this.K),this.R=et,this.g=function(t){return t.slice()},this.B=tt,this.F=nt,this.C=[1732584193,4023233417,2562383102,271733878,3285377520],this.p=512,this.U=160,this.v=!1,r.hmacKey&&this.M(M("hmacKey",r.hmacKey,this.K))}}function it(t){let e;return e="SHA-224"==t?K.slice():k.slice(),e}function st(t,e){let n,r,i,s,c,o,u,a,h,l,f;const w=[];for(n=e[0],r=e[1],i=e[2],s=e[3],c=e[4],o=e[5],u=e[6],a=e[7],f=0;f<64;f+=1)w[f]=f<16?t[f]:V(X(d=w[f-2],17)^X(d,19)^$(d,10),w[f-7],Q(w[f-15]),w[f-16]),h=Z(a,W(c),_(c,o,u),T[f],w[f]),l=G(J(n),q(n,r,i)),a=u,u=o,o=c,c=G(s,h),s=i,i=r,r=n,n=G(h,l);var d;return e[0]=G(n,e[0]),e[1]=G(r,e[1]),e[2]=G(i,e[2]),e[3]=G(s,e[3]),e[4]=G(c,e[4]),e[5]=G(o,e[5]),e[6]=G(u,e[6]),e[7]=G(a,e[7]),e}class ct extends P{constructor(t,e,n){if("SHA-224"!==t&&"SHA-256"!==t)throw new Error(I);super(t,e,n);const r=n||{};this.T=this.k,this.L=!0,this.K=-1,this.m=j(this.t,this.i,this.K),this.R=st,this.g=function(t){return t.slice()},this.B=it,this.F=function(e,n,r,i){return function(t,e,n,r,i){let s,c;const o=15+(e+65>>>9<<4),u=e+n;for(;t.length<=o;)t.push(0);for(t[e>>>5]|=128<<24-e%32,t[o]=4294967295&u,t[o-1]=u/4294967296|0,s=0;s<t.length;s+=16)r=st(t.slice(s,s+16),r);return c="SHA-224"===i?[r[0],r[1],r[2],r[3],r[4],r[5],r[6]]:r,c}(e,n,r,i,t)},this.C=it(t),this.p=512,this.U="SHA-224"===t?224:256,this.v=!1,r.hmacKey&&this.M(M("hmacKey",r.hmacKey,this.K))}}class ot{constructor(t,e){this.Y=t,this.N=e}}function ut(t,e){let n;return e>32?(n=64-e,new ot(t.N<<e|t.Y>>>n,t.Y<<e|t.N>>>n)):0!==e?(n=32-e,new ot(t.Y<<e|t.N>>>n,t.N<<e|t.Y>>>n)):t}function at(t,e){let n;return e<32?(n=32-e,new ot(t.Y>>>e|t.N<<n,t.N>>>e|t.Y<<n)):(n=64-e,new ot(t.N>>>e|t.Y<<n,t.Y>>>e|t.N<<n))}function ht(t,e){return new ot(t.Y>>>e,t.N>>>e|t.Y<<32-e)}function lt(t,e,n){return new ot(t.Y&e.Y^t.Y&n.Y^e.Y&n.Y,t.N&e.N^t.N&n.N^e.N&n.N)}function ft(t){const e=at(t,28),n=at(t,34),r=at(t,39);return new ot(e.Y^n.Y^r.Y,e.N^n.N^r.N)}function wt(t,e){let n,r;n=(65535&t.N)+(65535&e.N),r=(t.N>>>16)+(e.N>>>16)+(n>>>16);const i=(65535&r)<<16|65535&n;return n=(65535&t.Y)+(65535&e.Y)+(r>>>16),r=(t.Y>>>16)+(e.Y>>>16)+(n>>>16),new ot((65535&r)<<16|65535&n,i)}function dt(t,e,n,r){let i,s;i=(65535&t.N)+(65535&e.N)+(65535&n.N)+(65535&r.N),s=(t.N>>>16)+(e.N>>>16)+(n.N>>>16)+(r.N>>>16)+(i>>>16);const c=(65535&s)<<16|65535&i;return i=(65535&t.Y)+(65535&e.Y)+(65535&n.Y)+(65535&r.Y)+(s>>>16),s=(t.Y>>>16)+(e.Y>>>16)+(n.Y>>>16)+(r.Y>>>16)+(i>>>16),new ot((65535&s)<<16|65535&i,c)}function pt(t,e,n,r,i){let s,c;s=(65535&t.N)+(65535&e.N)+(65535&n.N)+(65535&r.N)+(65535&i.N),c=(t.N>>>16)+(e.N>>>16)+(n.N>>>16)+(r.N>>>16)+(i.N>>>16)+(s>>>16);const o=(65535&c)<<16|65535&s;return s=(65535&t.Y)+(65535&e.Y)+(65535&n.Y)+(65535&r.Y)+(65535&i.Y)+(c>>>16),c=(t.Y>>>16)+(e.Y>>>16)+(n.Y>>>16)+(r.Y>>>16)+(i.Y>>>16)+(s>>>16),new ot((65535&c)<<16|65535&s,o)}function vt(t,e){return new ot(t.Y^e.Y,t.N^e.N)}function bt(t){const e=at(t,19),n=at(t,61),r=ht(t,6);return new ot(e.Y^n.Y^r.Y,e.N^n.N^r.N)}function gt(t){const e=at(t,1),n=at(t,8),r=ht(t,7);return new ot(e.Y^n.Y^r.Y,e.N^n.N^r.N)}function At(t){const e=at(t,14),n=at(t,18),r=at(t,41);return new ot(e.Y^n.Y^r.Y,e.N^n.N^r.N)}const mt=[new ot(T[0],3609767458),new ot(T[1],602891725),new ot(T[2],3964484399),new ot(T[3],2173295548),new ot(T[4],4081628472),new ot(T[5],3053834265),new ot(T[6],2937671579),new ot(T[7],3664609560),new ot(T[8],2734883394),new ot(T[9],1164996542),new ot(T[10],1323610764),new ot(T[11],3590304994),new ot(T[12],4068182383),new ot(T[13],991336113),new ot(T[14],633803317),new ot(T[15],3479774868),new ot(T[16],2666613458),new ot(T[17],944711139),new ot(T[18],2341262773),new ot(T[19],2007800933),new ot(T[20],1495990901),new ot(T[21],1856431235),new ot(T[22],3175218132),new ot(T[23],2198950837),new ot(T[24],3999719339),new ot(T[25],766784016),new ot(T[26],2566594879),new ot(T[27],3203337956),new ot(T[28],1034457026),new ot(T[29],2466948901),new ot(T[30],3758326383),new ot(T[31],168717936),new ot(T[32],1188179964),new ot(T[33],1546045734),new ot(T[34],1522805485),new ot(T[35],2643833823),new ot(T[36],2343527390),new ot(T[37],1014477480),new ot(T[38],1206759142),new ot(T[39],344077627),new ot(T[40],1290863460),new ot(T[41],3158454273),new ot(T[42],3505952657),new ot(T[43],106217008),new ot(T[44],3606008344),new ot(T[45],1432725776),new ot(T[46],1467031594),new ot(T[47],851169720),new ot(T[48],3100823752),new ot(T[49],1363258195),new ot(T[50],3750685593),new ot(T[51],3785050280),new ot(T[52],3318307427),new ot(T[53],3812723403),new ot(T[54],2003034995),new ot(T[55],3602036899),new ot(T[56],1575990012),new ot(T[57],1125592928),new ot(T[58],2716904306),new ot(T[59],442776044),new ot(T[60],593698344),new ot(T[61],3733110249),new ot(T[62],2999351573),new ot(T[63],3815920427),new ot(3391569614,3928383900),new ot(3515267271,566280711),new ot(3940187606,3454069534),new ot(4118630271,4000239992),new ot(116418474,1914138554),new ot(174292421,2731055270),new ot(289380356,3203993006),new ot(460393269,320620315),new ot(685471733,587496836),new ot(852142971,1086792851),new ot(1017036298,365543100),new ot(1126000580,2618297676),new ot(1288033470,3409855158),new ot(1501505948,4234509866),new ot(1607167915,987167468),new ot(1816402316,1246189591)];function Nt(t){return"SHA-384"===t?[new ot(3418070365,K[0]),new ot(1654270250,K[1]),new ot(2438529370,K[2]),new ot(355462360,K[3]),new ot(1731405415,K[4]),new ot(41048885895,K[5]),new ot(3675008525,K[6]),new ot(1203062813,K[7])]:[new ot(k[0],4089235720),new ot(k[1],2227873595),new ot(k[2],4271175723),new ot(k[3],1595750129),new ot(k[4],2917565137),new ot(k[5],725511199),new ot(k[6],4215389547),new ot(k[7],327033209)]}function Yt(t,e){let n,r,i,s,c,o,u,a,h,l,f,w;const d=[];for(n=e[0],r=e[1],i=e[2],s=e[3],c=e[4],o=e[5],u=e[6],a=e[7],f=0;f<80;f+=1)f<16?(w=2*f,d[f]=new ot(t[w],t[w+1])):d[f]=dt(bt(d[f-2]),d[f-7],gt(d[f-15]),d[f-16]),h=pt(a,At(c),(v=o,b=u,new ot((p=c).Y&v.Y^~p.Y&b.Y,p.N&v.N^~p.N&b.N)),mt[f],d[f]),l=wt(ft(n),lt(n,r,i)),a=u,u=o,o=c,c=wt(s,h),s=i,i=r,r=n,n=wt(h,l);var p,v,b;return e[0]=wt(n,e[0]),e[1]=wt(r,e[1]),e[2]=wt(i,e[2]),e[3]=wt(s,e[3]),e[4]=wt(c,e[4]),e[5]=wt(o,e[5]),e[6]=wt(u,e[6]),e[7]=wt(a,e[7]),e}class Et extends P{constructor(t,e,n){if("SHA-384"!==t&&"SHA-512"!==t)throw new Error(I);super(t,e,n);const r=n||{};this.T=this.k,this.L=!0,this.K=-1,this.m=j(this.t,this.i,this.K),this.R=Yt,this.g=function(t){return t.slice()},this.B=Nt,this.F=function(e,n,r,i){return function(t,e,n,r,i){let s,c;const o=31+(e+129>>>10<<5),u=e+n;for(;t.length<=o;)t.push(0);for(t[e>>>5]|=128<<24-e%32,t[o]=4294967295&u,t[o-1]=u/4294967296|0,s=0;s<t.length;s+=32)r=Yt(t.slice(s,s+32),r);return c="SHA-384"===i?[(r=r)[0].Y,r[0].N,r[1].Y,r[1].N,r[2].Y,r[2].N,r[3].Y,r[3].N,r[4].Y,r[4].N,r[5].Y,r[5].N]:[r[0].Y,r[0].N,r[1].Y,r[1].N,r[2].Y,r[2].N,r[3].Y,r[3].N,r[4].Y,r[4].N,r[5].Y,r[5].N,r[6].Y,r[6].N,r[7].Y,r[7].N],c}(e,n,r,i,t)},this.C=Nt(t),this.p=1024,this.U="SHA-384"===t?384:512,this.v=!1,r.hmacKey&&this.M(M("hmacKey",r.hmacKey,this.K))}}const yt=[new ot(0,1),new ot(0,32898),new ot(2147483648,32906),new ot(2147483648,2147516416),new ot(0,32907),new ot(0,2147483649),new ot(2147483648,2147516545),new ot(2147483648,32777),new ot(0,138),new ot(0,136),new ot(0,2147516425),new ot(0,2147483658),new ot(0,2147516555),new ot(2147483648,139),new ot(2147483648,32905),new ot(2147483648,32771),new ot(2147483648,32770),new ot(2147483648,128),new ot(0,32778),new ot(2147483648,2147483658),new ot(2147483648,2147516545),new ot(2147483648,32896),new ot(0,2147483649),new ot(2147483648,2147516424)],xt=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function Ot(t){let e;const n=[];for(e=0;e<5;e+=1)n[e]=[new ot(0,0),new ot(0,0),new ot(0,0),new ot(0,0),new ot(0,0)];return n}function Rt(t){let e;const n=[];for(e=0;e<5;e+=1)n[e]=t[e].slice();return n}function Ct(t,e){let n,r,i,s;const c=[],o=[];if(null!==t)for(r=0;r<t.length;r+=2)e[(r>>>1)%5][(r>>>1)/5|0]=vt(e[(r>>>1)%5][(r>>>1)/5|0],new ot(t[r+1],t[r]));for(n=0;n<24;n+=1){for(s=Ot(),r=0;r<5;r+=1)c[r]=(u=e[r][0],a=e[r][1],h=e[r][2],l=e[r][3],f=e[r][4],new ot(u.Y^a.Y^h.Y^l.Y^f.Y,u.N^a.N^h.N^l.N^f.N));for(r=0;r<5;r+=1)o[r]=vt(c[(r+4)%5],ut(c[(r+1)%5],1));for(r=0;r<5;r+=1)for(i=0;i<5;i+=1)e[r][i]=vt(e[r][i],o[r]);for(r=0;r<5;r+=1)for(i=0;i<5;i+=1)s[i][(2*r+3*i)%5]=ut(e[r][i],xt[r][i]);for(r=0;r<5;r+=1)for(i=0;i<5;i+=1)e[r][i]=vt(s[r][i],new ot(~s[(r+1)%5][i].Y&s[(r+2)%5][i].Y,~s[(r+1)%5][i].N&s[(r+2)%5][i].N));e[0][0]=vt(e[0][0],yt[n])}var u,a,h,l,f;return e}function Ut(t){let e,n,r=0;const i=[0,0],s=[4294967295&t,t/4294967296&2097151];for(e=6;e>=0;e--)n=s[e>>2]>>>8*e&255,0===n&&0===r||(i[r+1>>2]|=n<<8*(r+1),r+=1);return r=0!==r?r:1,i[0]|=r,{value:r+1>4?i:[i[0]],binLen:8+8*r}}function Ht(t){return F(Ut(t.binLen),t)}function St(t,e){let n,r=Ut(e);r=F(r,t);const i=e>>>2,s=(i-r.value.length%i)%i;for(n=0;n<s;n++)r.value.push(0);return r.value}class jt extends P{constructor(t,e,n){let r=6,i=0;super(t,e,n);const s=n||{};if(1!==this.numRounds){if(s.kmacKey||s.hmacKey)throw new Error("Cannot set numRounds with MAC");if("CSHAKE128"===this.s||"CSHAKE256"===this.s)throw new Error("Cannot set numRounds for CSHAKE variants")}switch(this.K=1,this.m=j(this.t,this.i,this.K),this.R=Ct,this.g=Rt,this.B=Ot,this.C=Ot(),this.v=!1,t){case"SHA3-224":this.p=i=1152,this.U=224,this.L=!0,this.T=this.k;break;case"SHA3-256":this.p=i=1088,this.U=256,this.L=!0,this.T=this.k;break;case"SHA3-384":this.p=i=832,this.U=384,this.L=!0,this.T=this.k;break;case"SHA3-512":this.p=i=576,this.U=512,this.L=!0,this.T=this.k;break;case"SHAKE128":r=31,this.p=i=1344,this.U=-1,this.v=!0,this.L=!1,this.T=null;break;case"SHAKE256":r=31,this.p=i=1088,this.U=-1,this.v=!0,this.L=!1,this.T=null;break;case"KMAC128":r=4,this.p=i=1344,this.I(n),this.U=-1,this.v=!0,this.L=!1,this.T=this.X;break;case"KMAC256":r=4,this.p=i=1088,this.I(n),this.U=-1,this.v=!0,this.L=!1,this.T=this.X;break;case"CSHAKE128":this.p=i=1344,r=this._(n),this.U=-1,this.v=!0,this.L=!1,this.T=null;break;case"CSHAKE256":this.p=i=1088,r=this._(n),this.U=-1,this.v=!0,this.L=!1,this.T=null;break;default:throw new Error(I)}this.F=function(t,e,n,s,c){return function(t,e,n,r,i,s,c){let o,u,a=0;const h=[],l=i>>>5,f=e>>>5;for(o=0;o<f&&e>=i;o+=l)r=Ct(t.slice(o,o+l),r),e-=i;for(t=t.slice(o),e%=i;t.length<l;)t.push(0);for(o=e>>>3,t[o>>2]^=s<<o%4*8,t[l-1]^=2147483648,r=Ct(t,r);32*h.length<c&&(u=r[a%5][a/5|0],h.push(u.N),!(32*h.length>=c));)h.push(u.Y),a+=1,0==64*a%i&&(Ct(null,r),a=0);return h}(t,e,0,s,i,r,c)},s.hmacKey&&this.M(M("hmacKey",s.hmacKey,this.K))}_(t,e){const n=function(t){const e=t||{};return{funcName:M("funcName",e.funcName,1,{value:[],binLen:0}),customization:M("Customization",e.customization,1,{value:[],binLen:0})}}(t||{});e&&(n.funcName=e);const r=F(Ht(n.funcName),Ht(n.customization));if(0!==n.customization.binLen||0!==n.funcName.binLen){const t=St(r,this.p>>>3);for(let e=0;e<t.length;e+=this.p>>>5)this.C=this.R(t.slice(e,e+(this.p>>>5)),this.C),this.l+=this.p;return 4}return 31}I(t){const e=function(t){const e=t||{};return{kmacKey:M("kmacKey",e.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:M("Customization",e.customization,1,{value:[],binLen:0})}}(t||{});this._(t,e.funcName);const n=St(Ht(e.kmacKey),this.p>>>3);for(let r=0;r<n.length;r+=this.p>>>5)this.C=this.R(n.slice(r,r+(this.p>>>5)),this.C),this.l+=this.p;this.A=!0}X(t){const e=F({value:this.o.slice(),binLen:this.h},function(t){let e,n,r=0;const i=[0,0],s=[4294967295&t,t/4294967296&2097151];for(e=6;e>=0;e--)n=s[e>>2]>>>8*e&255,0===n&&0===r||(i[r>>2]|=n<<8*r,r+=1);return r=0!==r?r:1,i[r>>2]|=r<<8*r,{value:r+1>4?i:[i[0]],binLen:8+8*r}}(t.outputLen));return this.F(e.value,e.binLen,this.l,this.g(this.C),t.outputLen)}}var Lt=class{constructor(t,e,n){if("SHA-1"==t)this.O=new rt(t,e,n);else if("SHA-224"==t||"SHA-256"==t)this.O=new ct(t,e,n);else if("SHA-384"==t||"SHA-512"==t)this.O=new Et(t,e,n);else{if("SHA3-224"!=t&&"SHA3-256"!=t&&"SHA3-384"!=t&&"SHA3-512"!=t&&"SHAKE128"!=t&&"SHAKE256"!=t&&"CSHAKE128"!=t&&"CSHAKE256"!=t&&"KMAC128"!=t&&"KMAC256"!=t)throw new Error(I);this.O=new jt(t,e,n)}}update(t){this.O.update(t)}getHash(t,e){return this.O.getHash(t,e)}setHMACKey(t,e,n){this.O.setHMACKey(t,e,n)}getHMAC(t,e){return this.O.getHMAC(t,e)}},Tt={data:function(){return{place:[],search:"",select:"請選擇",city:["全部","臺北市","新北市","桃園市","臺中市","臺南市","高雄市","基隆市","新竹市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","嘉義市","屏東縣","宜蘭縣","花蓮縣","臺東縣","金門縣","澎湖縣","連江縣"]}},methods:{getAuthorizationHeader:function(){var t="5b92a1059adc479db7aac18c4913150a",e="IZj0rm4jFCuk7Yl_DrfEZrs48Lw",n=(new Date).toGMTString(),r=new Lt("SHA-1","TEXT");r.setHMACKey(e,"TEXT"),r.update("x-date: ".concat(n));var i=r.getHMAC("B64"),s='hmac username="'.concat(t,'", algorithm="hmac-sha1", headers="x-date", signature="').concat(i,'"');return{Authorization:s,"X-Date":n}},verify:function(){var t=this,e=this.select;if("請選擇"===this.select){var n="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=20&$format=JSON";this.$http.get(n,{headers:this.getAuthorizationHeader()}).then((function(e){t.place=e.data})).catch((function(){console.log("失敗")}))}else if("全部"===this.select){var r="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=40&$format=JSON";this.$http.get(r,{headers:this.getAuthorizationHeader()}).then((function(e){t.place=e.data})).catch((function(){console.log("失敗")}))}else{var i="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(City,'".concat(e,"')&$format=JSON");this.$http.get(i,{headers:this.getAuthorizationHeader()}).then((function(e){t.place=e.data;var n=t.place.filter((function(t){return t.Picture.PictureUrl1}));t.place=n})).catch((function(){console.log("失敗")}))}}},computed:{textsearch:function(){var t=this;return this.place.filter((function(e){return e.Name.match(t.search)}))}},watch:{select:function(t,e){this.verify(),console.log(t,e)}},mounted:function(){this.verify(),console.log(void 0===this.$refs.test.value)}},Kt=(n("c547"),n("d959")),kt=n.n(Kt);const It=kt()(Tt,[["render",U],["__scopeId","data-v-5116796b"]]);e["default"]=It},"9f7f":function(t,e,n){var r=n("d039"),i=n("da84"),s=i.RegExp;e.UNSUPPORTED_Y=r((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),s=n("7b0b"),c=n("07fa"),o=n("65f0"),u=[].push,a=function(t){var e=1==t,n=2==t,a=3==t,h=4==t,l=6==t,f=7==t,w=5==t||l;return function(d,p,v,b){for(var g,A,m=s(d),N=i(m),Y=r(p,v,3),E=c(N),y=0,x=b||o,O=e?x(d,E):n||f?x(d,0):void 0;E>y;y++)if((w||y in N)&&(g=N[y],A=Y(g,y,m),t))if(e)O[y]=A;else if(A)switch(t){case 3:return!0;case 5:return g;case 6:return y;case 2:u.call(O,g)}else switch(t){case 4:return!1;case 7:u.call(O,g)}return l?-1:a||h?h:O}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6),filterReject:a(7)}},c547:function(t,e,n){"use strict";n("6eb4")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("9263"),s=n("d039"),c=n("b622"),o=n("9112"),u=c("species"),a=RegExp.prototype;t.exports=function(t,e,n,h){var l=c(t),f=!s((function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})),w=f&&!s((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[l]=/./[l]),n.exec=function(){return e=!0,null},n[l](""),!e}));if(!f||!w||n){var d=/./[l],p=e(l,""[t],(function(t,e,n,r,s){var c=e.exec;return c===i||c===a.exec?f&&!s?{done:!0,value:d.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,p[0]),r(a,l,p[1])}h&&o(a[l],"sham",!0)}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fce3:function(t,e,n){var r=n("d039"),i=n("da84"),s=i.RegExp;t.exports=r((function(){var t=s(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-4678ee4d.6021b95c.js.map