"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[4508],{61196:(e,t,i)=>{i.d(t,{q:()=>a});var s,r,n,o=i(54787),l={exports:{}};s=l,r=function(){function e(i,s,r,n,o){for(;n>r;){if(n-r>600){var l=n-r+1,a=s-r+1,u=Math.log(l),c=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*c*(l-c)/l)*(a-l/2<0?-1:1);e(i,s,Math.max(r,Math.floor(s-a*c/l+p)),Math.min(n,Math.floor(s+(l-a)*c/l+p)),o)}var h=i[s],d=r,g=n;for(t(i,r,s),o(i[n],h)>0&&t(i,r,n);d<g;){for(t(i,d,g),d++,g--;o(i[d],h)<0;)d++;for(;o(i[g],h)>0;)g--}0===o(i[r],h)?t(i,r,g):t(i,++g,n),g<=s&&(r=g+1),s<=g&&(n=g-1)}}function t(e,t,i){var s=e[t];e[t]=e[i],e[i]=s}function i(e,t){return e<t?-1:e>t?1:0}return function(t,s,r,n,o){e(t,s,r||0,n||t.length-1,o||i)}},void 0!==(n=r())&&(s.exports=n);const a=(0,o.g)(l.exports)},90321:(e,t,i)=>{function s(e,t){return e?t?4:3:t?3:2}function r(e,t,i,r){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const l=e.coords,a=[],u=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:c,coords:p}=t,h=s(i,r);let d=0;for(const s of c){const e=n(u,p,d,s,i,r);e&&a.push(e),d+=s*h}if(a.sort(((e,t)=>{let s=e[2]-t[2];return 0===s&&i&&(s=e[4]-t[4]),s})),a.length){let e=6*a[0][2];l[0]=a[0][0]/e,l[1]=a[0][1]/e,i&&(e=6*a[0][4],l[2]=0!==e?a[0][3]/e:0),(l[0]<u[0]||l[0]>u[1]||l[1]<u[2]||l[1]>u[3]||i&&(l[2]<u[4]||l[2]>u[5]))&&(l.length=0)}if(!l.length){const e=t.lengths[0]?o(p,0,c[0],i,r):null;if(!e)return null;l[0]=e[0],l[1]=e[1],i&&e.length>2&&(l[2]=e[2])}return e}function n(e,t,i,r,n,o){const l=s(n,o);let a=i,u=i+l,c=0,p=0,h=0,d=0,g=0;for(let s=0,f=r-1;s<f;s++,a+=l,u+=l){const i=t[a],s=t[a+1],r=t[a+2],o=t[u],l=t[u+1],y=t[u+2];let f=i*l-o*s;d+=f,c+=(i+o)*f,p+=(s+l)*f,n&&(f=i*y-o*r,h+=(r+y)*f,g+=f),i<e[0]&&(e[0]=i),i>e[1]&&(e[1]=i),s<e[2]&&(e[2]=s),s>e[3]&&(e[3]=s),n&&(r<e[4]&&(e[4]=r),r>e[5]&&(e[5]=r))}if(d>0&&(d*=-1),g>0&&(g*=-1),!d)return null;const y=[c,p,.5*d];return n&&(y[3]=h,y[4]=.5*g),y}function o(e,t,i,r,n){const o=s(r,n);let p=t,h=t+o,d=0,g=0,y=0,f=0;for(let s=0,b=i-1;s<b;s++,p+=o,h+=o){const t=e[p],i=e[p+1],s=e[p+2],n=e[h],o=e[h+1],b=e[h+2],m=r?a(t,i,s,n,o,b):l(t,i,n,o);if(m)if(d+=m,r){const e=c(t,i,s,n,o,b);g+=m*e[0],y+=m*e[1],f+=m*e[2]}else{const e=u(t,i,n,o);g+=m*e[0],y+=m*e[1]}}return d>0?r?[g/d,y/d,f/d]:[g/d,y/d]:i>0?r?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,i,s){const r=i-e,n=s-t;return Math.sqrt(r*r+n*n)}function a(e,t,i,s,r,n){const o=s-e,l=r-t,a=n-i;return Math.sqrt(o*o+l*l+a*a)}function u(e,t,i,s){return[e+.5*(i-e),t+.5*(s-t)]}function c(e,t,i,s,r,n){return[e+.5*(s-e),t+.5*(r-t),i+.5*(n-i)]}i.d(t,{Q:()=>r})},33376:(e,t,i)=>{i.d(t,{T:()=>o});var s=i(90321),r=i(20176),n=i(1484);const o={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new r.Om(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(null==e.centroid&&(e.centroid=(0,s.Q)(new n.A,e.geometry,t.hasZ,t.hasM)),e.centroid)}},42208:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var s=i(35143),r=i(50076),n=i(30726),o=i(68134),l=i(46053),a=(i(81806),i(76460),i(47249),i(85842)),u=i(83491),c=i(19321),p=i(183),h=i(43804),d=i(65768),g=i(40200),y=i(44513),f=i(91196);let b=class extends((0,u.w)(f.A)){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null,this.ignoresMemoryFactor=!0}initialize(){this._set("processor",new p.K({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.addHandles(this.layer.on("graphic-update",(e=>this.processor.graphicsCore.graphicUpdateHandler(e)))),this.addResolvingPromise((0,g.V)(this).then((e=>this.fullExtentInLocalViewSpatialReference=e))),this.layer.internal?this.notifyChange("updating"):this.addHandles((0,o.z7)((()=>this.view?.basemapTerrain?.ready),(()=>()=>this.notifyChange("updating")),{once:!0}))}destroy(){this._updatingHandles.removeAll(),this._set("processor",(0,n.pR)(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){return this.canResume()&&!this.processor?.frustumVisibilitySuspended}get visibleAtCurrentScale(){return!this.processor?.scaleVisibilitySuspended}get slicePlaneEnabled(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e}set slicePlaneEnabled(e){this._slicePlaneEnabled=e}getSuspendInfo(){const e=super.getSuspendInfo();return e.outsideOfView=this.processor?.frustumVisibilitySuspended??!1,e}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor?.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return this.processor.highlight(e)}async elevationAlignPointsInFeatures(e,t){const{processor:i}=this;if(null==i?.graphics3DGraphics)throw new r.A("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:s}=i;return(0,c.a)(this.view,this.layer,(e=>"number"==typeof e?s.get(e):void 0),e,t)}async queryForSymbologySnapping(e,t){return(0,h.N)(this.processor,e,t)}get updatePolicy(){return this.processor?.graphicsCore.effectiveUpdatePolicy||y.q.SYNC}isUpdating(){return this.view&&this.layer&&!(!this.processor?.updating&&(this.layer.internal||this.view.basemapTerrain?.ready))}get performanceInfo(){return new d.P(this.usedMemory,this.loadedGraphics.length,-1,-1)}get usedMemory(){return this.processor?.graphicsCore?.usedMemory??0}get unloadedMemory(){return this.processor?.graphicsCore?.unprocessedMemoryEstimate}get test(){return{graphics3DProcessor:this.processor,loadedGraphics:this.loadedGraphics}}};(0,s._)([(0,l.MZ)()],b.prototype,"loadedGraphics",null),(0,s._)([(0,l.MZ)({readOnly:!0})],b.prototype,"legendEnabled",null),(0,s._)([(0,l.MZ)()],b.prototype,"layer",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],b.prototype,"processor",void 0),(0,s._)([(0,l.MZ)({readOnly:!0})],b.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,l.MZ)()],b.prototype,"_slicePlaneEnabled",void 0),(0,s._)([(0,l.MZ)({type:Boolean})],b.prototype,"slicePlaneEnabled",null),b=(0,s._)([(0,a.$)("esri.views.3d.layers.GraphicsLayerView3D")],b);const m=b},83491:(e,t,i)=>{i.d(t,{w:()=>c});var s=i(35143),r=i(54901),n=i(50346),o=i(68134),l=i(46053),a=(i(81806),i(76460),i(47249),i(85842)),u=i(47700);const c=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,u.jI)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,r.hA)((()=>e.abort()))),await(0,o.C_)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,n.Te)(t);const i=(0,u.Hu)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}};return(0,s._)([(0,l.MZ)()],t.prototype,"view",void 0),(0,s._)([(0,l.MZ)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,s._)([(0,a.$)("esri.views.3d.layers.LayerView3D")],t),t}},183:(e,t,i)=>{i.d(t,{K:()=>O});var s=i(35143),r=i(39356),n=i(91967),o=i(19276),l=i(54901),a=i(30726),u=i(50346),c=i(68134),p=i(46053),h=(i(81806),i(76460),i(47249),i(85842)),d=i(15011),g=i(19451),y=i(25515),f=i(32535),b=i(86486),m=i(68295),v=i(57662),_=i(38865),w=i(29257),I=i(35148),C=i(44220),E=i(90592),M=i(93788),S=i(36423),A=i(83490),V=i(44513);let O=class extends n.A{constructor(e){super(e),this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=v.Om.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null,this._updatingHandles=new g.U}initialize(){const{layer:e}=this,t="effectiveScaleRange"in e?e:null,i=this.scaleVisibilityEnabled&&null!=t,s=new w.w({owner:this,layer:this.owner.layer,preferredUpdatePolicy:V.q.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(e,t)=>new I.V({graphicsCoreOwner:this,graphicsCore:e,queryGraphicUIDsInExtent:t,elevationProvider:this.view.elevationProvider}),scaleVisibility:i?(e,i)=>new M.N({graphicsCoreOwner:this,layer:t,queryGraphicUIDsInExtent:i,graphicsCore:e,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:e=>new E.w(e)}});if(this._set("graphicsCore",s),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new C.p({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const e=this.owner;this._updatingHandles.add((()=>e.fullOpacity),(()=>this.graphicsCore.opacityChange()))}if("elevationInfo"in e){const t=e;this._updatingHandles.add((()=>t.elevationInfo),((e,t)=>{(0,d.Ui)(e,t)&&this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}))}this._set("initializePromise",this._initializeAsync()),this._updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(e){if((0,u.zf)(e))return;throw e}this.destroyed||(this.addHandles((0,c.wB)((()=>this.view.clippingArea),(()=>this._updateClippingExtent()),c.OH)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this._updatingHandles.destroy(),this._set("frustumVisibility",(0,a.pR)(this.frustumVisibility)),this._set("graphicsCore",(0,a.pR)(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibility(){return this.graphicsCore?.scaleVisibility}get elevationAlignment(){return this.graphicsCore?.elevationAlignment}get scaleVisibilitySuspended(){return!(null==this.scaleVisibility||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return null!=this.frustumVisibility&&this.frustumVisibility.suspended}get suspended(){return this.owner.suspended??!1}get updating(){return!!(this.graphicsCore?.updating||null!=this.scaleVisibility&&this.scaleVisibility.updating||null!=this.frustumVisibility&&this.frustumVisibility.updating||this._updatingHandles.updating)}get graphics3DGraphics(){return this.graphicsCore?.graphics3DGraphics}get graphics3DGraphicsByObjectID(){return this.graphicsCore?.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){return this.owner.fullOpacity??1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,t,i){const s=(0,b.vl)(e,{renderer:t,arcade:i});if(s?.color){const e=s.color;e[0]=e[0]/255,e[1]=e[1]/255,e[2]=e[2]/255}return s}getRenderingInfoAsync(e,t,i,s){return(0,b.LO)(e,{renderer:t,arcade:i,...s})}getHit(e){if(this.owner.loadedGraphics){const t=this.owner.loadedGraphics.find((t=>t.uid===e));if(t){const e=this.layer instanceof y.A?this.layer:null,i=(0,f.wP)(t,e);return{type:"graphic",graphic:i,layer:i.layer}}}return null}whenGraphicBounds(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}computeAttachmentOrigin(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}getSymbolLayerSize(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}maskOccludee(e){const t=this.graphicsCore?.objectStates;if(!t)return(0,l.hA)();const{set:i,handle:s}=t.acquireSet(A.Mg.MaskOccludee,null);return t.setUid(i,e.uid),s}highlight(e){const t=this.graphicsCore?.objectStates;if(!t)return(0,l.hA)();if(e instanceof m.A)return P;if("number"==typeof e)return this.highlight([e]);if(e instanceof r.A)return this.highlight([e]);if(e instanceof o.A&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof r.A){const i=e.map((e=>e.uid)),{set:s,handle:r}=t.acquireSet(A.Mg.Highlight,null);return t.setUids(s,i),r}if("number"==typeof e[0]){const i=e,{set:s,handle:r}=t.acquireSet(A.Mg.Highlight,null);return t.setObjectIds(s,i),r}}return P}_setupSuspendResumeExtent(){const{scaleVisibility:e,frustumVisibility:t}=this;if(null==e&&null==t)return;const i=i=>{let{computedExtent:s,extentPadding:r}=i;this._suspendResumeExtent=(0,S.t8)(s,this._suspendResumeExtent,_.qD,r),null!=e&&e.setExtent(this._suspendResumeExtent),null!=t&&t.setExtent(this._suspendResumeExtent)};this.addHandles((0,c.wB)((()=>({computedExtent:this.graphicsCore?.computedExtent,extentPadding:this.graphicsCore?.extentPadding})),(e=>i(e)),c.pc))}_updateClippingExtent(){const e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};(0,s._)([(0,p.MZ)()],O.prototype,"type",void 0),(0,s._)([(0,p.MZ)({constructOnly:!0})],O.prototype,"owner",void 0),(0,s._)([(0,p.MZ)()],O.prototype,"layer",null),(0,s._)([(0,p.MZ)()],O.prototype,"view",null),(0,s._)([(0,p.MZ)({constructOnly:!0})],O.prototype,"graphicsCore",void 0),(0,s._)([(0,p.MZ)()],O.prototype,"scaleVisibility",null),(0,s._)([(0,p.MZ)({constructOnly:!0})],O.prototype,"frustumVisibility",void 0),(0,s._)([(0,p.MZ)()],O.prototype,"elevationAlignment",null),(0,s._)([(0,p.MZ)()],O.prototype,"scaleVisibilitySuspended",null),(0,s._)([(0,p.MZ)({readOnly:!0})],O.prototype,"frustumVisibilitySuspended",null),(0,s._)([(0,p.MZ)()],O.prototype,"suspended",null),(0,s._)([(0,p.MZ)({readOnly:!0})],O.prototype,"updating",null),(0,s._)([(0,p.MZ)()],O.prototype,"loadedGraphics",null),(0,s._)([(0,p.MZ)()],O.prototype,"fullOpacity",null),(0,s._)([(0,p.MZ)()],O.prototype,"slicePlaneEnabled",null),(0,s._)([(0,p.MZ)()],O.prototype,"drapeSourceType",void 0),(0,s._)([(0,p.MZ)()],O.prototype,"updatePolicy",null),(0,s._)([(0,p.MZ)({constructOnly:!0})],O.prototype,"scaleVisibilityEnabled",void 0),(0,s._)([(0,p.MZ)({constructOnly:!0})],O.prototype,"frustumVisibilityEnabled",void 0),(0,s._)([(0,p.MZ)()],O.prototype,"initializePromise",void 0),O=(0,s._)([(0,h.$)("esri.views.3d.layers.graphics.GraphicsProcessor")],O);const P=(0,l.hA)()},19321:(e,t,i)=>{i.d(t,{a:()=>h});i(35238);var s=i(50346),r=i(9392),n=i(64232),o=i(18117),l=i(12482),a=i(67425),u=i(49296),c=i(41595),p=i(13312);async function h(e,t,i,h,d){const{elevationProvider:g,renderCoordsHelper:y}=e,{elevationInfo:f}=t,{pointsInFeatures:b,spatialReference:m}=h,v=p.A.fromJSON(m),_=(0,c.MF)(f,!0),w=await(0,c.q6)(_,v,d);(0,s.Te)(d);const I=[],C=new Set,E=new Set,M=new u.F,S=(0,o.T)(0,0,0,p.A.WGS84),A=new a.Uk,V=(0,r.vt)();S.spatialReference=v;const O=e.elevationProvider.spatialReference??e.spatialReference;for(const{objectId:s,points:r}of b){const e=i(s);if(null==e){for(const e of r)I.push(e.z??0);C.add(s);continue}e.isDraped&&E.add(s);const o=e.graphic.geometry;M.setFromElevationInfo((0,l.ze)(o,f)),M.updateFeatureExpressionInfoContext(w,e.graphic,t);for(const{x:t,y:i,z:s}of r)S.x=t,S.y=i,S.z=s??0,await(0,n.W)(S,V,O,0,{signal:d}),(0,a.sE)(V,g,M,y,A),I.push(A.z)}return{elevations:I,drapedObjectIds:E,failedObjectIds:C}}},43804:(e,t,i)=>{i.d(t,{N:()=>n});var s=i(50346),r=i(98976);async function n(e,t,i){if(null==e||0===t.candidates.length)return o;const n=e.graphics3DGraphicsByObjectID??e.graphics3DGraphics,l=[],a=[],{renderer:u}=e,c=null!=u&&"arcadeRequired"in u&&u.arcadeRequired?(0,r.lw)():null,p=async(t,s)=>{let{graphic:r,graphics3DSymbol:n}=s;const o=await c,l=await e.getRenderingInfoAsync(r,u,o,{signal:i});return null==l?[]:n.queryForSnapping(t,d,l,i)},{candidates:h,spatialReference:d}=t;for(let s=0;s<h.length;++s){const e=h[s],{objectId:t}=e,i="number"==typeof t?n?.get(t):void 0;if(null==i)continue;const{graphics3DSymbol:r}=i;r.symbologySnappingSupported&&(l.push(p(e,i)),a.push(s))}if(0===l.length)return o;const g=await Promise.all(l);(0,s.Te)(i);const y=[],f=[];for(let s=0;s<g.length;++s){const e=g[s],t=a[s];for(const i of e)y.push(i),f.push(t)}return{candidates:y,sourceCandidateIndices:f}}const o={candidates:[],sourceCandidateIndices:[]}},40200:(e,t,i)=>{i.d(t,{V:()=>n});var s=i(45417),r=i(39483);function n(e){const t=e.view.spatialReference,i=e.layer.fullExtent,n=null!=i&&i.spatialReference;if(null==i||!n)return Promise.resolve(null);if(n.equals(t))return Promise.resolve(i.clone());const o=(0,s.Cv)(i,t);return null!=o?Promise.resolve(o):e.view.state.isLocal?(0,r.projectGeometry)(i,t,e.layer.portalItem).then((t=>!e.destroyed&&t?t:null)).catch((()=>null)):Promise.resolve(null)}},91196:(e,t,i)=>{i.d(t,{A:()=>y});var s=i(35143),r=i(91967),n=i(54099),o=i(5632),l=i(76460),a=i(30726),u=i(91291),c=i(46053),p=(i(81806),i(47249),i(85842)),h=i(19451),d=i(90992);let g=class extends((0,o.sA)((0,u.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new h.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";l.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,a.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,t=this.layer?.visibilityTimeExtent;return!e||!t||!e.intersection(t).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,d.g7)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,d.g7)(t)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,c.MZ)()],g.prototype,"view",void 0),(0,s._)([(0,c.MZ)()],g.prototype,"fullOpacity",null),(0,s._)([(0,c.MZ)()],g.prototype,"layer",void 0),(0,s._)([(0,c.MZ)()],g.prototype,"parent",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],g.prototype,"suspended",null),(0,s._)([(0,c.MZ)({readOnly:!0})],g.prototype,"suspendInfo",null),(0,s._)([(0,c.MZ)({readOnly:!0})],g.prototype,"legendEnabled",null),(0,s._)([(0,c.MZ)({type:Boolean,readOnly:!0})],g.prototype,"updating",null),(0,s._)([(0,c.MZ)({readOnly:!0})],g.prototype,"updatingProgress",null),(0,s._)([(0,c.MZ)()],g.prototype,"updateSuspended",null),(0,s._)([(0,c.MZ)()],g.prototype,"visible",null),(0,s._)([(0,c.MZ)({readOnly:!0})],g.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,c.MZ)({readOnly:!0})],g.prototype,"visibleAtCurrentTimeExtent",null),g=(0,s._)([(0,p.$)("esri.views.layers.LayerView")],g);const y=g}}]);
//# sourceMappingURL=4508.6191e93c.chunk.js.map