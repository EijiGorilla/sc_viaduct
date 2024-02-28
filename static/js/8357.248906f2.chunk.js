"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[8357],{61196:(t,e,n)=>{n.d(e,{q:()=>h});var i,a,r,s=n(54787),o={exports:{}};i=o,a=function(){function t(n,i,a,r,s){for(;r>a;){if(r-a>600){var o=r-a+1,h=i-a+1,l=Math.log(o),c=.5*Math.exp(2*l/3),m=.5*Math.sqrt(l*c*(o-c)/o)*(h-o/2<0?-1:1);t(n,i,Math.max(a,Math.floor(i-h*c/o+m)),Math.min(r,Math.floor(i+(o-h)*c/o+m)),s)}var u=n[i],d=a,f=r;for(e(n,a,i),s(n[r],u)>0&&e(n,a,r);d<f;){for(e(n,d,f),d++,f--;s(n[d],u)<0;)d++;for(;s(n[f],u)>0;)f--}0===s(n[a],u)?e(n,a,f):e(n,++f,r),f<=i&&(a=f+1),i<=f&&(r=f-1)}}function e(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}function n(t,e){return t<e?-1:t>e?1:0}return function(e,i,a,r,s){t(e,i,a||0,r||e.length-1,s||n)}},void 0!==(r=a())&&(i.exports=r);const h=(0,s.g)(o.exports)},70373:(t,e,n)=>{n.d(e,{w:()=>s});var i=n(18690),a=n(30015),r=n(61196);class s{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;this._compareMinX=c,this._compareMinY=m,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),g.prune(),X.prune(),Y.prune(),B.prune()}all(t){this._all(this._data,t)}search(t,e){let n=this._data;const i=this._toBBox;if(p(t,n))for(g.clear();n;){for(let a=0,r=n.children.length;a<r;a++){const r=n.children[a],s=n.leaf?i(r):r;p(t,s)&&(n.leaf?e(r):_(t,s)?this._all(r,e):g.push(r))}n=g.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!p(t,e))return!1;for(g.clear();e;){for(let i=0,a=e.children.length;i<a;i++){const a=e.children[i],r=e.leaf?n(a):a;if(p(t,r)){if(e.leaf||_(t,r))return!0;g.push(a)}}e=g.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new A([]),this}remove(t){if(!t)return this;let e,n=this._data,a=null,r=0,s=!1;const o=this._toBBox(t);for(Y.clear(),B.clear();n||Y.length>0;){var h;if(n||(n=Y.pop(),a=Y.data[Y.length-1],r=null!==(h=B.pop())&&void 0!==h?h:0,s=!0),n.leaf&&(e=(0,i.qh)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),Y.push(n),this._condense(Y),this;s||n.leaf||!_(n,o)?a?(r++,n=a.children[r],s=!1):n=null:(Y.push(n),B.push(r),r=0,a=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,e){let n=t;for(X.clear();n;){var i;if(!0===n.leaf)for(const t of n.children)e(t);else X.pushArray(n.children);n=null!==(i=X.pop())&&void 0!==i?i:null}}_build(t,e,n,i){const a=n-e+1;let r=this._maxEntries;if(a<=r){const i=new A(t.slice(e,n+1));return o(i,this._toBBox),i}i||(i=Math.ceil(Math.log(a)/Math.log(r)),r=Math.ceil(a/r**(i-1)));const s=new b([]);s.height=i;const h=Math.ceil(a/r),l=h*Math.ceil(Math.sqrt(r));M(t,e,n,l,this._compareMinX);for(let o=e;o<=n;o+=l){const e=Math.min(o+l-1,n);M(t,o,e,h,this._compareMinY);for(let n=o;n<=e;n+=h){const a=Math.min(n+h-1,e);s.children.push(this._build(t,n,a,i-1))}}return o(s,this._toBBox),s}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,a=1/0;for(let r=0,s=e.children.length;r<s;r++){const s=e.children[r],o=u(s),h=f(t,s)-o;h<a?(a=h,i=o<i?o:i,n=s):h===a&&o<i&&(i=o,n=s)}e=n||e.children[0]}return e}_insert(t,e,n){const i=this._toBBox,a=n?t:i(t);Y.clear();const r=this._chooseSubtree(a,this._data,e,Y);for(r.children.push(t),l(r,a);e>=0&&Y.data[e].children.length>this._maxEntries;)this._split(Y,e),e--;this._adjustParentBBoxes(a,Y,e)}_split(t,e){const n=t.data[e],i=n.children.length,a=this._minEntries;this._chooseSplitAxis(n,a,i);const r=this._chooseSplitIndex(n,a,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const s=n.children.splice(r,n.children.length-r),h=n.leaf?new A(s):new b(s);h.height=n.height,o(n,this._toBBox),o(h,this._toBBox),e?t.data[e-1].children.push(h):this._splitRoot(n,h)}_splitRoot(t,e){this._data=new b([t,e]),this._data.height=t.height+1,o(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let i,a,r;i=a=1/0;for(let s=e;s<=n-e;s++){const e=h(t,0,s,this._toBBox),o=h(t,s,n,this._toBBox),l=x(e,o),c=u(e)+u(o);l<i?(i=l,r=s,a=c<a?c:a):l===i&&c<a&&(a=c,r=s)}return r}_chooseSplitAxis(t,e,n){const i=t.leaf?this._compareMinX:c,a=t.leaf?this._compareMinY:m;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,a)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const a=this._toBBox,r=h(t,0,e,a),s=h(t,n-e,n,a);let o=d(r)+d(s);for(let h=e;h<n-e;h++){const e=t.children[h];l(r,t.leaf?a(e):e),o+=d(r)}for(let h=n-e-1;h>=e;h--){const e=t.children[h];l(s,t.leaf?a(e):e),o+=d(s)}return o}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)l(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const a=t.data[e-1],r=a.children;r.splice((0,i.qh)(r,n,r.length,a.indexHint),1)}else this.clear();else o(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function o(t,e){h(t,0,t.children.length,e,t)}function h(t,e,n,i,a){a||(a=new A([])),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(let r,s=e;s<n;s++)r=t.children[s],l(a,t.leaf?i(r):r);return a}function l(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function c(t,e){return t.minX-e.minX}function m(t,e){return t.minY-e.minY}function u(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function d(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function x(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),a=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,a-n)*Math.max(0,r-i)}function _(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function p(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function M(t,e,n,i,a){const s=[e,n];for(;s.length;){const e=s.pop(),n=s.pop();if(e-n<=i)continue;const o=n+Math.ceil((e-n)/i/2)*i;(0,r.q)(t,o,n,e,a),s.push(n,o,o,e)}}const g=new a.A,X=new a.A,Y=new a.A,B=new a.A({deallocator:void 0});class v{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class w extends v{constructor(){super(...arguments),this.height=1,this.indexHint=new i.vW}}class A extends w{constructor(t){super(),this.children=t,this.leaf=!0}}class b extends w{constructor(t){super(),this.children=t,this.leaf=!1}}},98357:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var i=n(81806),a=n(70373),r=n(48620);class s{async createIndex(t,e){var n;const i=new Array;if(null===(n=t.vertexAttributes)||void 0===n||!n.position)return new a.w;const r=this._createMeshData(t),s=null!=e?await e.invoke("createIndexThread",r,{transferList:i}):this.createIndexThread(r).result;return this._createPooledRBush().fromJSON(s)}createIndexThread(t){const e=new Float64Array(t.position),n=this._createPooledRBush();return t.components?this._createIndexComponentsThread(n,e,t.components.map((t=>new Uint32Array(t)))):this._createIndexAllThread(n,e)}_createIndexAllThread(t,e){const n=new Array(e.length/9);let i=0;for(let a=0;a<e.length;a+=9)n[i++]=o(e,a,a+3,a+6);return t.load(n),{result:t.toJSON()}}_createIndexComponentsThread(t,e,n){let i=0;for(const s of n)i+=s.length/3;const a=new Array(i);let r=0;for(const s of n)for(let t=0;t<s.length;t+=3)a[r++]=o(e,3*s[t],3*s[t+1],3*s[t+2]);return t.load(a),{result:t.toJSON()}}_createMeshData(t){const e=(t.vertexSpace.isRelative?(0,r.bA)({position:t.vertexAttributes.position,normal:null,tangent:null},t.vertexSpace,t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some((t=>!t.faces))?{position:e}:{position:e,components:t.components.map((t=>t.faces))}}_createPooledRBush(){return new a.w(9,(0,i.A)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function o(t,e,n,i){return{minX:Math.min(t[e],t[n],t[i]),maxX:Math.max(t[e],t[n],t[i]),minY:Math.min(t[e+1],t[n+1],t[i+1]),maxY:Math.max(t[e+1],t[n+1],t[i+1]),p0:[t[e],t[e+1],t[e+2]],p1:[t[n],t[n+1],t[n+2]],p2:[t[i],t[i+1],t[i+2]]}}}}]);
//# sourceMappingURL=8357.248906f2.chunk.js.map