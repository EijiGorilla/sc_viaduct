/*! For license information please see 2284.f97272dc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[2284],{92284:(t,e,c)=>{c.r(e),c.d(e,{scopeCss:()=>y});const s="-shadowcsshost",n="-shadowcssslotted",o="-shadowcsscontext",r=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+s+r,"gim"),a=new RegExp("("+o+r,"gim"),i=new RegExp("("+n+r,"gim"),p=s+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,m=/::slotted/gim,f=/:host-context/gim,x=/\/\*\s*[\s\S]*?\*\//g,_=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,v=/([{}])/g,b=/(^.*?[^\\])??((:+)(.*)|$)/,S="%BLOCK%",W=(t,e)=>{const c=k(t);let s=0;return c.escapedString.replace(w,(function(){const t=arguments.length<=2?void 0:arguments[2];let n="",o=arguments.length<=4?void 0:arguments[4],r="";o&&o.startsWith("{"+S)&&(n=c.blocks[s++],o=o.substring(8),r="{");const l=e({selector:t,content:n});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(l.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(r).concat(l.content).concat(o)}))},k=t=>{const e=t.split(v),c=[],s=[];let n=0,o=[];for(let r=0;r<e.length;r++){const t=e[r];"}"===t&&n--,n>0?o.push(t):(o.length>0&&(s.push(o.join("")),c.push(S),o=[]),c.push(t)),"{"===t&&n++}o.length>0&&(s.push(o.join("")),c.push(S));return{escapedString:c.join(""),blocks:s}},O=(t,e,c)=>t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];if(e[2]){const t=e[2].split(","),s=[];for(let n=0;n<t.length;n++){const o=t[n].trim();if(!o)break;s.push(c(p,o,e[3]))}return s.join(",")}return p+e[3]})),j=(t,e,c)=>t+e.replace(s,"")+c,E=(t,e,c)=>e.indexOf(s)>-1?j(t,e,c):t+e+c+", "+e+" "+t+c,R=(t,e)=>{const c=(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e);return!c.test(t)},C=(t,e)=>t.replace(b,(function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+e+(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")+(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"")})),T=(t,e,c)=>{const s="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),n=t=>{let n=t.trim();if(!n)return"";if(t.indexOf(p)>-1)n=((t,e,c)=>{if(g.lastIndex=0,g.test(t)){const e=".".concat(c);return t.replace(h,((t,c)=>C(c,e))).replace(g,e+" ")}return e+" "+t})(t,e,c);else{const e=t.replace(g,"");e.length>0&&(n=C(e,s))}return n},o=(t=>{const e=[];let c=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,((t,s)=>{const n="__ph-".concat(c,"__");return e.push(s),c++,n}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((t,s,n)=>{const o="__ph-".concat(c,"__");return e.push(n),c++,s+o})),placeholders:e}})(t);let r,l="",a=0;const i=/( |>|\+|~(?!=))\s*/g;let u=!((t=o.content).indexOf(p)>-1);for(;null!==(r=i.exec(t));){const e=r[1],c=t.slice(a,r.index).trim();u=u||c.indexOf(p)>-1;const s=u?n(c):c;l+="".concat(s," ").concat(e," "),a=i.lastIndex}const d=t.substring(a);return u=u||d.indexOf(p)>-1,l+=u?n(d):d,m=o.placeholders,l.replace(/__ph-(\d+)__/g,((t,e)=>m[+e]));var m},L=(t,e,c,s,n)=>W(t,(t=>{let n=t.selector,o=t.content;"@"!==t.selector[0]?n=((t,e,c,s)=>t.split(",").map((t=>s&&t.indexOf("."+s)>-1?t.trim():R(t,e)?T(t,e,c).trim():t.trim())).join(", "))(t.selector,e,c,s):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(o=L(t.content,e,c,s));return{selector:n.replace(/\s{2,}/g," ").trim(),content:o}})),$=(t,e,c,r,h)=>{const g=((t,e)=>{const c="."+e+" > ",s=[];return t=t.replace(i,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e[2]){const t=e[2].trim(),n=e[3],o=c+t+n;let r="";for(let c=e[4]-1;c>=0;c--){const t=e[5][c];if("}"===t||","===t)break;r=t+r}const l=r+o,a="".concat(r.trimRight()).concat(o.trim());if(l.trim()!==a.trim()){const t="".concat(a,", ").concat(l);s.push({orgSelector:l,updatedSelector:t})}return o}return p+e[3]})),{selectors:s,cssText:t}})(t=(t=>O(t,a,E))(t=(t=>O(t,l,j))(t=t.replace(f,o).replace(d,s).replace(m,n))),r);return t=(t=>u.reduce(((t,e)=>t.replace(e," ")),t))(t=g.cssText),e&&(t=L(t,e,c,r)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(c))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:g.selectors}},y=(t,e,c)=>{const s=e+"-h",n=e+"-s",o=t.match(_)||[];t=(t=>t.replace(x,""))(t);const r=[];if(c){const e=t=>{const e="/*!@___".concat(r.length,"___*/"),c="/*!@".concat(t.selector,"*/");return r.push({placeholder:e,comment:c}),t.selector=e+t.selector,t};t=W(t,(t=>"@"!==t.selector[0]?e(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=W(t.content,e),t):t))}const l=$(t,e,s,n);return t=[l.cssText,...o].join("\n"),c&&r.forEach((e=>{let{placeholder:c,comment:s}=e;t=t.replace(c,s)})),l.slottedSelectors.forEach((e=>{t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=2284.f97272dc.chunk.js.map