"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[1734],{11941:(e,t,n)=>{var o,r;n.d(t,{D:()=>r,f:()=>o}),function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(o||(o={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(r||(r={}))},21734:(e,t,n)=>{n.r(t),n.d(t,{destroyContext:()=>w,dracoDecompressPointCloudData:()=>m,filterObbsForModifications:()=>y,filterObbsForModificationsSync:()=>S,initialize:()=>P,interpretObbModificationResults:()=>R,process:()=>h,project:()=>g,setLegacySchema:()=>p,setModifications:()=>b,setModificationsSync:()=>M,test:()=>_,transformNormals:()=>E});var o=n(13312),r=n(44815),i=n(23806),s=n(5845),a=n(20664),c=n(11941),f=n(28899);function l(e){return(0,f.s)("esri/libs/i3s/".concat(e))}let u;var d=n(12119);async function h(e){A=await U();const t=[e.geometryBuffer];return{result:L(A,e,t),transferList:t}}async function m(e){var t;A=await U();const n=[e.geometryBuffer],{geometryBuffer:o}=e,r=o.byteLength,i=A._malloc(r),s=new Uint8Array(A.HEAPU8.buffer,i,r);s.set(new Uint8Array(o));const a=A.dracoDecompressPointCloudData(i,s.byteLength);if(A._free(i),a.error.length>0)throw new Error("i3s.wasm: ".concat(a.error));const c=(null===(t=a.featureIds)||void 0===t?void 0:t.length)>0?a.featureIds.slice():null,f=a.positions.slice();return c&&n.push(c.buffer),n.push(f.buffer),{result:{positions:f,featureIds:c},transferList:n}}async function y(e){await U(),S(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function b(e){await U(),M(e)}async function p(e){A=await U(),A.setLegacySchema(e.context,e.jsonSchema)}async function g(e){const{localMatrix:t,origin:a,positions:c,vertexSpace:f,localMode:l}=e,u=o.A.fromJSON(e.inSpatialReference),d=o.A.fromJSON(e.outSpatialReference);let h;if("georeferenced"===f.type){const[{projectBuffer:e},{initializeProjection:t}]=await Promise.all([Promise.resolve().then(n.bind(n,45308)),Promise.resolve().then(n.bind(n,9624))]);await t(u,d),h=new Float64Array(c.length),e(c,u,0,h,d,0,h.length/3)}else{const e="georeferencedRelative"===f.type?i.A.fromJSON(f):s.A.fromJSON(f),{project:o}=await Promise.resolve().then(n.bind(n,48620));h=(0,r.Ns)(o({positions:c,transform:t?{localMatrix:t}:void 0,vertexSpace:e,inSpatialReference:u,outSpatialReference:d,localMode:l}))}const m=h.length,[y,b,p]=a;for(let n=0;n<m;n+=3)h[n]-=y,h[n+1]-=b,h[n+2]-=p;return{result:{projected:h,original:c},transferList:[h.buffer,c.buffer]}}async function E(e){let{normalMatrix:t,normals:n}=e;const o=new Float32Array(n.length);return(0,a.a)(o,n,t),(0,a.n)(o,o),{result:{transformed:o,original:n},transferList:[o.buffer,n.buffer]}}function w(e){N(e)}let v,A;function M(e){if(!A)return;const t=e.modifications,n=A._malloc(8*t.length),o=new Float64Array(A.HEAPU8.buffer,n,t.length);for(let r=0;r<t.length;++r)o[r]=t[r];A.setModifications(e.context,n,t.length,e.isGeodetic),A._free(n)}function L(e,t,n){const{context:o,localOrigin:r,globalTrafo:i,mbs:s,obb:a,elevationOffset:f,geometryBuffer:l,geometryDescriptor:u,indexToVertexProjector:d,vertexToRenderProjector:h}=t,m=e._malloc(l.byteLength),y=e._malloc(33*Float64Array.BYTES_PER_ELEMENT),b=new Uint8Array(e.HEAPU8.buffer,m,l.byteLength);b.set(new Uint8Array(l));const p=new Float64Array(e.HEAPU8.buffer,y,33);I(p,r);let g=p.byteOffset+3*p.BYTES_PER_ELEMENT,E=new Float64Array(p.buffer,g);I(E,i),g+=16*p.BYTES_PER_ELEMENT,E=new Float64Array(p.buffer,g),I(E,s),g+=4*p.BYTES_PER_ELEMENT,null!=a&&(E=new Float64Array(p.buffer,g),I(E,a.center),g+=3*p.BYTES_PER_ELEMENT,E=new Float64Array(p.buffer,g),I(E,a.halfSize),g+=3*p.BYTES_PER_ELEMENT,E=new Float64Array(p.buffer,g),I(E,a.quaternion));const w=u,v={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:w.featureIndex},A=e.process(o,!!t.obb,m,b.byteLength,w,v,y,f,d,h,t.normalReferenceFrame);if(e._free(y),e._free(m),A.error.length>0)throw new Error("i3s.wasm: ".concat(A.error));if(A.discarded)return null;const M=A.componentOffsets.length>0?A.componentOffsets.slice():null,L=A.featureIds.length>0?A.featureIds.slice():null,R=A.anchorIds.length>0?Array.from(A.anchorIds):null,S=A.anchors.length>0?Array.from(A.anchors):null,N=A.interleavedVertedData.slice().buffer,P=A.indicesType===c.f.Int16?new Uint16Array(A.indices.buffer,A.indices.byteOffset,A.indices.byteLength/2).slice():new Uint32Array(A.indices.buffer,A.indices.byteOffset,A.indices.byteLength/4).slice(),U=A.positions.slice(),_=A.positionIndicesType===c.f.Int16?new Uint16Array(A.positionIndices.buffer,A.positionIndices.byteOffset,A.positionIndices.byteLength/2).slice():new Uint32Array(A.positionIndices.buffer,A.positionIndices.byteOffset,A.positionIndices.byteLength/4).slice(),C={layout:t.layouts[0],interleavedVertexData:N,indices:P,hasColors:A.hasColors,hasModifications:A.hasModifications,positionData:{data:U,indices:_}};return L&&n.push(L.buffer),M&&n.push(M.buffer),n.push(N),n.push(P.buffer),n.push(U.buffer),n.push(_.buffer),{componentOffsets:M,featureIds:L,anchorIds:R,anchors:S,transformedGeometry:C,obb:A.obb}}function R(e){return 0===e?d.Js.Unmodified:1===e?d.Js.PotentiallyModified:2===e?d.Js.Culled:d.Js.Unknown}function S(e){if(!A)return;const{context:t,buffer:n}=e,o=A._malloc(n.byteLength),r=n.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(A.HEAPU8.buffer,o,r),s=new Float64Array(n);i.set(s),A.filterOBBs(t,o,r),s.set(i),A._free(o)}function N(e){A&&0===A.destroy(e)&&(A=null)}function I(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}async function P(){A||await U()}function U(){return A?Promise.resolve(A):(v||(v=(u||(u=new Promise((e=>n.e(7258).then(n.bind(n,77258)).then((e=>e.i)).then((t=>{let{default:n}=t;const o=n({locateFile:l,onRuntimeInitialized:()=>e(o)});delete o.then})))).catch((e=>{throw e}))),u).then((e=>(A=e,v=null,A)))),v)}const _={transform:(e,t)=>A&&L(A,e,t),destroy:N}},12119:(e,t,n)=>{n.d(t,{EG:()=>d,Js:()=>r,TJ:()=>o,UY:()=>a,ay:()=>l,bP:()=>u,cJ:()=>s,iF:()=>i});var o,r,i,s,a,c,f=n(93582);class l{constructor(e,t){this.id=e,this.mbs=t,this.renderMbs=(0,f.f)(0,0,0,-1),this.elevationRangeMin=NaN,this.elevationRangeMax=NaN}invalidateElevationRange(){this.elevationRangeMin=NaN}}(c=o||(o={}))[c.Unmodified=0]="Unmodified",c[c.Culled=1]="Culled",c[c.NotChecked=2]="NotChecked",function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(r||(r={}));class u extends l{constructor(e,t,n,o,s,a,c,f,l,u){super(e,n),this.index=t,this.childCount=o,this.level=s,this.resources=a,this.version=c,this.lodMetric=f,this.maxError=l,this.numFeatures=u,this.failed=!1,this.cacheState=i.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=r.NotChecked}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(i||(i={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(s||(s={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(a||(a={}));class d{constructor(e,t,n,o){this.nodeHasLOD=e,this.isChosen=t,this.lodLevel=n,this.version=o}}}}]);
//# sourceMappingURL=1734.8eb904e4.chunk.js.map