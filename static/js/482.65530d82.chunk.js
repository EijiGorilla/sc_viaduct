"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[482],{78101:(e,t,n)=>{n.r(t),n.d(t,{loadGLTFMesh:()=>F});var o=n(69539),r=n(3825),l=n(87663),u=n(15941),s=n(30672),a=n(64982),i=n(83670),c=n(83529),f=n(79629),d=n(44032),p=n(75257),m=n(63713),v=n(56623),x=n(88105),g=n(20664),y=n(43047),T=n(6381);Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,n){var o,r;const l=e.typedBuffer,u=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=n?n.count:t.count;let c=(null!==(o=null===n||void 0===n?void 0:n.dstIndex)&&void 0!==o?o:0)*u,f=(null!==(r=null===n||void 0===n?void 0:n.srcIndex)&&void 0!==r?r:0)*a;for(let d=0;d<i;++d){for(let e=0;e<9;++e)l[c+e]=s[f+e];c+=u,f+=a}}},Symbol.toStringTag,{value:"Module"}));Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,n){var o,r;const l=e.typedBuffer,u=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=n?n.count:t.count;let c=(null!==(o=null===n||void 0===n?void 0:n.dstIndex)&&void 0!==o?o:0)*u,f=(null!==(r=null===n||void 0===n?void 0:n.srcIndex)&&void 0!==r?r:0)*a;for(let d=0;d<i;++d){for(let e=0;e<16;++e)l[c+e]=s[f+e];c+=u,f+=a}}},Symbol.toStringTag,{value:"Module"}));n(39539);var b=n(34721),h=n(64591),w=n(2e3);function A(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,T.GJ)(e.ElementType)))}var B=n(48620),C=n(11109),E=n(56516),S=n(420),M=n(37040),_=n(50791),R=n(93345);async function F(e,t,n){var l;const s={...n,useTransform:null===(l=null===n||void 0===n?void 0:n.useTransform)||void 0===l||l},a=new C.R(function(e){const t=null===e||void 0===e?void 0:e.resolveFile,n=null===e||void 0===e?void 0:e.requestFile;return t||n?{busy:!1,request:async(e,o,l)=>{var u;const s=null!==(u=null===t||void 0===t?void 0:t(e))&&void 0!==u?u:e;if(n){const e=await n(s,o,null===l||void 0===l?void 0:l.signal);if(void 0!==e)return e}const a="image"===o?"image":"binary"===o?"array-buffer":"json";return(await(0,r.A)(s,{responseType:a,signal:null!=l?l.signal:null})).data}}:null}(s)),f=(await(0,E.y)(a,t,s,!0)).model,x=f.lods.shift(),g=new Map,y=new Map;f.textures.forEach(((e,t)=>g.set(t,function(e){return new p.A({data:((0,M.x3)(e.data),e.data),wrap:k(e.parameters.wrap)})}(e)))),f.materials.forEach(((e,t)=>y.set(t,function(e,t){const n=new o.A(function(e,t){return(0,c.f)(D(e[0]),D(e[1]),D(e[2]),t)}(e.color,e.opacity)),r=e.emissiveFactor?new o.A(function(e){return(0,i.f)(D(e[0]),D(e[1]),D(e[2]))}(e.emissiveFactor)):null,l=e=>{var t;return e?new m.A({scale:e.scale?[e.scale[0],e.scale[1]]:[1,1],rotation:(0,u.KJ)(null!==(t=e.rotation)&&void 0!==t?t:0),offset:e.offset?[e.offset[0],e.offset[1]]:[0,0]}):null};return new d.A({color:n,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:r,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:j(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:l(e.colorTextureTransform),normalTextureTransform:l(e.normalTextureTransform),occlusionTextureTransform:l(e.occlusionTextureTransform),emissiveTextureTransform:l(e.emissiveTextureTransform),metallicRoughnessTextureTransform:l(e.metallicRoughnessTextureTransform)})}(e,g))));const T=P(x);for(const o of T.parts)q(T,o,y);const{position:b,normal:h,tangent:w,color:A,texCoord0:S}=T.vertexAttributes,_={position:b.typedBuffer,normal:null!=h?h.typedBuffer:null,tangent:null!=w?w.typedBuffer:null,uv:null!=S?S.typedBuffer:null,color:null!=A?A.typedBuffer:null},R=(0,B.qD)(_,e,s);return{transform:R.transform,vertexSpace:R.vertexSpace,components:T.components,spatialReference:e.spatialReference,vertexAttributes:new v.H({position:R.vertexAttributes.position,normal:R.vertexAttributes.normal,tangent:R.vertexAttributes.tangent,color:_.color,uv:_.uv})}}function I(e,t){if(null==e)return"-";const n=e.typedBuffer;return"".concat((0,l.tE)(t,n.buffer,(()=>t.size)),"/").concat(n.byteOffset,"/").concat(n.byteLength)}function O(e){return null!=e?e.toString():"-"}function P(e){let t=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},o=new Map,r=new Map,u=[];for(const s of e.parts){const{attributes:{position:e,normal:a,color:i,tangent:c,texCoord0:f}}=s,d="\n      ".concat(I(e,o),"/\n      ").concat(I(a,o),"/\n      ").concat(I(i,o),"/\n      ").concat(I(c,o),"/\n      ").concat(I(f,o),"/\n      ").concat(O(s.transform),"\n    ");let p=!1;const m=(0,l.tE)(r,d,(()=>(p=!0,{start:t,length:e.count})));p&&(t+=e.count),a&&(n.normal=!0),i&&(n.color=!0),c&&(n.tangent=!0),f&&(n.texCoord0=!0),u.push({gltf:s,writeVertices:p,region:m})}return{vertexAttributes:{position:A(x.Xm,t),normal:n.normal?A(x.xs,t):null,tangent:n.tangent?A(x.Eq,t):null,color:n.color?A(x.XP,t):null,texCoord0:n.texCoord0?A(x.gH,t):null},parts:u,components:[]}}function q(e,t,n){t.writeVertices&&function(e,t){const{position:n,normal:o,tangent:r,color:l,texCoord0:i}=e.vertexAttributes,c=t.region.start,{attributes:f,transform:d}=t.gltf,p=f.position.count;if((0,g.c)(n.slice(c,p),f.position,d),null!=f.normal&&null!=o){const e=(0,s.n)((0,a.a)(),d),t=o.slice(c,p);(0,g.b)(t,f.normal,e),(0,u.or)(e)&&(0,g.d)(t,t)}else null!=o&&(0,h.f)(o,0,0,1,{dstIndex:c,count:p});if(null!=f.tangent&&null!=r){const e=(0,s.n)((0,a.a)(),d),t=r.slice(c,p);(0,y.a)(t,f.tangent,e),(0,u.or)(e)&&(0,y.n)(t,t)}else null!=r&&(0,w.f)(r,0,0,1,1,{dstIndex:c,count:p});if(null!=f.texCoord0&&null!=i?(0,b.a)(i.slice(c,p),f.texCoord0):null!=i&&(0,b.f)(i,0,0,{dstIndex:c,count:p}),null!=f.color&&null!=l){const e=f.color,t=l.slice(c,p);if(4===e.elementCount)e instanceof x.Eq?(0,y.b)(t,e,255):e instanceof x.XP?(0,w.a)(t,e):e instanceof x.Uz&&(0,y.b)(t,e,1/256);else{(0,w.f)(t,255,255,255,255);const n=x.eI.fromTypedArray(t.typedBuffer,t.typedBufferStride);e instanceof x.xs?(0,g.e)(n,e,255):e instanceof x.eI?(0,h.a)(n,e):e instanceof x.nS&&(0,g.e)(n,e,1/256)}}else null!=l&&(0,w.f)(l.slice(c,p),255,255,255,255)}(e,t);const{indices:o,attributes:r,primitiveType:l,material:i}=t.gltf;let c=(0,S.x)(o||r.position.count,l);const d=t.region.start;if(d){const e=new Uint32Array(c);for(let t=0;t<c.length;t++)e[t]+=d;c=e}e.components.push(new f.A({name:t.gltf.name,faces:c,material:n.get(i),shading:r.normal?"source":"flat",trustSourceNormals:!0}))}function j(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function k(e){return{horizontal:z(e.s),vertical:z(e.t)}}function z(e){switch(e){case R.pF.CLAMP_TO_EDGE:return"clamp";case R.pF.MIRRORED_REPEAT:return"mirror";case R.pF.REPEAT:return"repeat"}}function D(e){return e**(1/_.T)*255}}}]);
//# sourceMappingURL=482.65530d82.chunk.js.map