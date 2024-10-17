"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[5988],{1438:(e,t,n)=>{n.d(t,{el:()=>R});var r=n(86560),s=n(50076),i=n(76460),o=n(65215),a=n(23701),u=n(73548),l=n(80963),c=n(45417),f=(n(35238),n(3825)),h=n(19902),d=n(54994);var p=n(90534),y=n(71838);const m=()=>i.A.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e[0].type}function _(e){return"polyline"===e[0].type}function x(e,t,n){if(t){const t=function(e,t){if(!(e instanceof a.A||e instanceof o.A)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw m().error(e),new s.A(e)}const n=(0,u.r8)(e),r=[];for(const s of n){const e=[];r.push(e),e.push([s[0][0],s[0][1]]);for(let n=0;n<s.length-1;n++){const r=s[n][0],i=s[n][1],o=s[n+1][0],a=s[n+1][1],u=Math.sqrt((o-r)*(o-r)+(a-i)*(a-i)),l=(a-i)/u,c=(o-r)/u,f=u/t;if(f>1){for(let a=1;a<=f-1;a++){const n=a*t,s=c*n+r,o=l*n+i;e.push([s,o])}const n=(u+Math.floor(f-1)*t)/2,s=c*n+r,o=l*n+i;e.push([s,o])}e.push([o,a])}}return function(e){return"polygon"===e.type}(e)?new o.A({rings:r,spatialReference:e.spatialReference}):new a.A({paths:r,spatialReference:e.spatialReference})}(e,1e6);e=(0,c.ci)(t,!0)}return n&&(e=(0,u.kS)(e,n)),e}function S(e,t,n){if(Array.isArray(e)){const r=e[0];if(r>t){const n=(0,u.kd)(r,t);e[0]=r+n*(-2*t)}else if(r<n){const t=(0,u.kd)(r,n);e[0]=r+t*(-2*n)}}else{const r=e.x;if(r>t){const n=(0,u.kd)(r,t);e=e.clone().offset(n*(-2*t),0)}else if(r<n){const t=(0,u.kd)(r,n);e=e.clone().offset(t*(-2*n),0)}}return e}function P(e,t){let n=-1;for(let r=0;r<t.cutIndexes.length;r++){const s=t.cutIndexes[r],i=t.geometries[r],o=(0,u.r8)(i);for(let e=0;e<o.length;e++){const t=o[e];t.some((n=>{if(n[0]<180)return!0;{let n=0;for(let e=0;e<t.length;e++){const r=t[e][0];n=r>n?r:n}n=Number(n.toFixed(9));const r=-360*(0,u.kd)(n,180);for(let s=0;s<t.length;s++){const t=i.getPoint(e,s);i.setPoint(e,s,t.clone().offset(r,0))}return!0}}))}if(s===n){if(g(e))for(const t of(0,u.r8)(i))e[s]=e[s].addRing(t);else if(_(e))for(const t of(0,u.r8)(i))e[s]=e[s].addPath(t)}else n=s,e[s]=i}return e}async function R(e,t,n){var s;if(!Array.isArray(e))return R([e],t);t&&"string"!=typeof t&&m().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const i="string"==typeof t?t:null!==(s=null===t||void 0===t?void 0:t.url)&&void 0!==s?s:r.A.geometryServiceUrl;let g,_,v,A,C,w,G,O,b=0;const E=[],k=[];for(const r of e)if(null!=r)if(g||(g=r.spatialReference,_=(0,l.Vp)(g),v=g.isWebMercator,w=v?102100:4326,A=u.j7[w].maxX,C=u.j7[w].minX,G=u.j7[w].plus180Line,O=u.j7[w].minus180Line),_)if("mesh"===r.type)k.push(r);else if("point"===r.type)k.push(S(r.clone(),A,C));else if("multipoint"===r.type){const e=r.clone();e.points=e.points.map((e=>S(e,A,C))),k.push(e)}else if("extent"===r.type){const e=r.clone()._normalize(!1,!1,_);k.push(e.rings?new o.A(e):e)}else if(r.extent){const e=r.extent,t=(0,u.kd)(e.xmin,C)*(2*A);let n=0===t?r.clone():(0,u.kS)(r.clone(),t);e.offset(t,0);let{xmin:s,xmax:i}=e;s=Number(s.toFixed(9)),i=Number(i.toFixed(9)),e.intersects(G)&&i!==A?(b=i>b?i:b,n=x(n,v),E.push(n),k.push("cut")):e.intersects(O)&&s!==C?(b=i*(2*A)>b?i*(2*A):b,n=x(n,v,360),E.push(n),k.push("cut")):k.push(n)}else k.push(r.clone());else k.push(r);else k.push(r);let j=(0,u.kd)(b,A),F=-90;const q=j,I=new a.A;for(;j>0;){const e=360*j-180;I.addPath([[e,F],[e,-1*F]]),F*=-1,j--}if(E.length>0&&q>0){const t=P(E,await async function(e,t,n,r){const s=(0,d.Dl)(e),i=t[0].spatialReference,o={...r,responseType:"json",query:{...s.query,f:"json",sr:(0,l.YX)(i),target:JSON.stringify({geometryType:(0,h.$B)(t[0]),geometries:t}),cutter:JSON.stringify(n)}},a=await(0,f.A)(s.path+"/cut",o),{cutIndexes:u,geometries:c=[]}=a.data;return{cutIndexes:u,geometries:c.map((e=>{const t=(0,h.rS)(e);return t.spatialReference=i,t}))}}(i,E,I,n)),r=[],s=[];for(let n=0;n<k.length;n++){const i=k[n];if("cut"!==i)s.push(i);else{const i=t.shift(),o=e[n];null!=o&&"polygon"===o.type&&o.rings&&o.rings.length>1&&i.rings.length>=o.rings.length?(r.push(i),s.push("simplify")):s.push(v?(0,c.Gh)(i):i)}}if(!r.length)return s;const o=await async function(e,t,n){const r="string"==typeof e?(0,p.An)(e):e,s=t[0].spatialReference,i=(0,h.$B)(t[0]),o={...n,query:{...r.query,f:"json",sr:(0,l.YX)(s),geometries:JSON.stringify((0,y.X)(t))}},{data:a}=await(0,f.A)(r.path+"/simplify",o);return(0,y.V)(a.geometries,i,s)}(i,r,n),a=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?a.push(t):a.push(v?(0,c.Gh)(o.shift()):o.shift())}return a}const M=[];for(let r=0;r<k.length;r++){const e=k[r];if("cut"!==e)M.push(e);else{const e=E.shift();M.push(!0===v?(0,c.Gh)(e):e)}}return M}},73548:(e,t,n)=>{n.d(t,{j7:()=>o,kS:()=>u,kd:()=>a,r8:()=>l});var r=n(23701),s=n(13312),i=n(19902);const o={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new r.A({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:s.A.WebMercator}),minus180Line:new r.A({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:s.A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new r.A({paths:[[[180,-180],[180,180]]],spatialReference:s.A.WGS84}),minus180Line:new r.A({paths:[[[-180,-180],[-180,180]]],spatialReference:s.A.WGS84})}};function a(e,t){return Math.ceil((e-t)/(2*t))}function u(e,t){const n=l(e);for(const r of n)for(const e of r)e[0]+=t;return e}function l(e){return(0,i.Bi)(e)?e.rings:e.paths}},78238:(e,t,n)=>{function r(e){const t={};for(const n in e){if("declaredClass"===n)continue;const s=e[n];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){t[n]=[];for(let e=0;e<s.length;e++)t[n][e]=r(s[e])}else"object"==typeof s?s.toJSON&&(t[n]=JSON.stringify(s)):t[n]=s}return t}n.d(t,{z:()=>r})},37713:(e,t,n)=>{n.d(t,{I:()=>o});var r=n(54994),s=n(36643),i=n(68295);async function o(e,t,n){const o=(0,r.Dl)(e),{data:a}=await(0,s.gW)(o,i.A.from(t),n);return a.count}},53104:(e,t,n)=>{n.d(t,{V:()=>o});var r=n(54994),s=n(36643),i=n(68295);async function o(e,t,n){const o=(0,r.Dl)(e),{data:a}=await(0,s.Pk)(o,i.A.from(t),n);return a.objectIds}},14009:(e,t,n)=>{n.d(t,{e:()=>u,s:()=>a});var r=n(54994),s=n(36643),i=n(77725),o=n(68295);async function a(e,t,n){const r=await u(e,t,n);return i.A.fromJSON(r)}async function u(e,t,n){const i=(0,r.Dl)(e),a={...n},u=o.A.from(t),{data:l}=await(0,s.eW)(i,u,u.sourceSpatialReference,a);return l}},78469:(e,t,n)=>{n.d(t,{S:()=>m});var r=n(54994),s=n(30726),i=n(86729),o=n(98618);function a(e,t){return t}function u(e,t,n,r){switch(n){case 0:return h(e,t+r,0);case 1:return"lowerLeft"===e.originPosition?h(e,t+r,1):function(e,t,n){let{translate:r,scale:s}=e;return r[n]-t*s[n]}(e,t+r,1)}}function l(e,t,n,r){return 2===n?h(e,t,2):u(e,t,n,r)}function c(e,t,n,r){return 2===n?0===t?0:h(e,t,3):u(e,t,n,r)}function f(e,t,n,r){return 3===n?0===t?0:h(e,t,3):l(e,t,n,r)}function h(e,t,n){let{translate:r,scale:s}=e;return r[n]+t*s[n]}class d{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=a,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._mValueOffset=null,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const t=(0,i.N)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(null!=t)for(const n of e.features)t(n.geometry)}createSpatialReference(){return{}}addField(e,t){const n=e.fields;(0,s.Lw)(n),n.push(t);const r=n.map((e=>e.name));this._attributesConstructor=function(){for(const e of r)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._mValueOffset=null,this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&(this._mValueOffset=this._vertexDimension,this._vertexDimension++),e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,n)=>this.addCoordinatePoint(e,t,n),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,n)=>this._addCoordinatePolygon(e,t,n),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,n)=>this._addCoordinatePolyline(e,t,n),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,n)=>this._addCoordinateMultipoint(e,t,n),this.createGeometry=e=>this._createMultipointGeometry(e)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,n){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:n,queryGeometryType:r}=t,s=(0,o.Ch)(n.clone(),n,!1,!1,this._transform),i=(0,o.zv)(s,r,!1,!1);e.queryGeometryType=r,e.queryGeometry={...i}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,n){const r=this._transform;switch(t=this._applyTransform(r,t,n,0),n){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}_transformPathLikeValue(e,t){let n=0;t<=1&&(n=this._previousCoordinate[t],this._previousCoordinate[t]+=e);const r=this._transform;return null!==this._mValueOffset&&0===e&&t>0&&!(t%this._mValueOffset)?0:this._applyTransform(r,e,t,n)}_addCoordinatePolyline(e,t,n){this._dehydratedAddPointsCoordinate(e.paths,t,n)}_addCoordinatePolygon(e,t,n){this._dehydratedAddPointsCoordinate(e.rings,t,n)}_addCoordinateMultipoint(e,t,n){0===n&&e.points.push([]);const r=this._transformPathLikeValue(t,n);e.points[e.points.length-1].push(r)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,n){0===n&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const r=this._transformPathLikeValue(t,n),s=e[e.length-1];0===n&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),s.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=r}_deriveApplyTransform(e){const{hasZ:t,hasM:n}=e;return t&&n?f:t?l:n?c:u}}var p=n(36643),y=(n(77725),n(68295));async function m(e,t,n){const s=(0,r.Dl)(e),i={...n},o=y.A.from(t),a=!o.quantizationParameters,{data:u}=await(0,p.IJ)(s,o,new d({sourceSpatialReference:o.sourceSpatialReference,applyTransform:a}),i);return u}},36643:(e,t,n)=>{n.d(t,{GB:()=>x,IJ:()=>p,Jf:()=>_,Pk:()=>m,eW:()=>d,gW:()=>g,kS:()=>y});var r=n(3825),s=n(90534),i=n(19902),o=n(1438),a=n(80963),u=n(78238),l=n(89122),c=n(57831);const f="Layer does not support extent calculation.";function h(e,t){var n;const r=e.geometry,s=e.toJSON();delete s.compactGeometryEnabled,delete s.defaultSpatialReferenceEnabled;const o=s;let u,l,c;if(null!=r&&(l=r.spatialReference,c=(0,a.YX)(l),o.geometryType=(0,i.$B)(r),o.geometry=function(e,t){if(t&&"extent"===e.type)return"".concat(e.xmin,",").concat(e.ymin,",").concat(e.xmax,",").concat(e.ymax);if(t&&"point"===e.type)return"".concat(e.x,",").concat(e.y);const n=e.toJSON();return delete n.spatialReference,JSON.stringify(n)}(r,e.compactGeometryEnabled),o.inSR=c),s.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=s.groupByFieldsForStatistics.join(",")),s.objectIds&&(o.objectIds=s.objectIds.join(",")),s.orderByFields&&(o.orderByFields=s.orderByFields.join(",")),!s.outFields||!s.returnDistinctValues&&(null!==t&&void 0!==t&&t.returnCountOnly||null!==t&&void 0!==t&&t.returnExtentOnly||null!==t&&void 0!==t&&t.returnIdsOnly)?delete o.outFields:s.outFields.includes("*")?o.outFields="*":o.outFields=s.outFields.join(","),s.outSR?(o.outSR=(0,a.YX)(s.outSR),u=e.outSpatialReference):r&&(s.returnGeometry||s.returnCentroid)&&(o.outSR=o.inSR,u=l),s.returnGeometry&&delete s.returnGeometry,s.outStatistics&&(o.outStatistics=JSON.stringify(s.outStatistics)),s.fullText&&(o.fullText=JSON.stringify(s.fullText)),s.pixelSize&&(o.pixelSize=JSON.stringify(s.pixelSize)),s.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&null!=l&&null!=(null===(n=e.quantizationParameters)||void 0===n?void 0:n.extent)&&l.equals(e.quantizationParameters.extent.spatialReference)&&delete s.quantizationParameters.extent.spatialReference,o.quantizationParameters=JSON.stringify(s.quantizationParameters)),s.parameterValues&&(o.parameterValues=JSON.stringify(s.parameterValues)),s.rangeValues&&(o.rangeValues=JSON.stringify(s.rangeValues)),s.dynamicDataSource&&(o.layer=JSON.stringify({source:s.dynamicDataSource}),delete s.dynamicDataSource),s.timeExtent){const e=s.timeExtent,{start:t,end:n}=e;null==t&&null==n||(o.time=t===n?t:"".concat(null!==t&&void 0!==t?t:"null",",").concat(null!==n&&void 0!==n?n:"null")),delete s.timeExtent}return e.defaultSpatialReferenceEnabled&&null!=l&&null!=u&&l.equals(u)&&(o.defaultSR=o.inSR,delete o.inSR,delete o.outSR),o}async function d(e,t,n,r){const s=null!=t.timeExtent&&t.timeExtent.isEmpty?{data:{features:[]}}:await x(e,t,"json",r);return(0,c.q)(t,n,s.data),s}async function p(e,t,n,r){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:n.createFeatureResult()};const s=await y(e,t,r),i=s;return i.data=(0,l.m)(s.data,n),i}function y(e,t,n){return x(e,t,"pbf",n)}function m(e,t,n){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):x(e,t,"json",n,{returnIdsOnly:!0})}function g(e,t,n){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):x(e,t,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}async function _(e,t,n){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:{count:0,extent:null}};const r=await x(e,t,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}),s=r.data;if(s.hasOwnProperty("extent"))return r;if(s.features)throw new Error(f);if(s.hasOwnProperty("count"))throw new Error(f);return r}async function x(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const l="string"==typeof e?(0,s.An)(e):e,c=t.geometry?[t.geometry]:[],f=await(0,o.el)(c,null,{signal:i.signal}),d=null===f||void 0===f?void 0:f[0];null!=d&&((t=t.clone()).geometry=d);const p=(0,u.z)({...l.query,f:n,...a,...h(t,a)});return(0,r.A)((0,s.fj)(l.path,(y=a,null==t.formatOf3DObjects||y.returnCountOnly||y.returnExtentOnly||y.returnIdsOnly?"query":"query3d")),{...i,responseType:"pbf"===n?"array-buffer":"json",query:{...p,...i.query}});var y}}}]);
//# sourceMappingURL=5988.84c492c4.chunk.js.map