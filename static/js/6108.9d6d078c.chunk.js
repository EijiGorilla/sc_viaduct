"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[6108,8156],{56287:(e,t,n)=>{n.d(t,{r:()=>o});var i=n(35143),r=n(91967),l=n(46053),s=(n(81806),n(76460),n(47249),n(85842));const a={visible:"visibleSublayers"};let o=class extends r.A{constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(a[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((e=>{let{name:t}=e;return t})).map((e=>{let{name:t}=e;return t})).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,n=null===e||void 0===e?void 0:e.sublayers,i=[],r=e=>{const{minScale:n,maxScale:l,sublayers:s,visible:a}=e;a&&(0===t||(0===n||t<=n)&&(0===l||t>=l))&&(s?s.forEach(r):i.push(e))};return null!==n&&void 0!==n&&n.forEach(r),i}toJSON(){const{layer:e,layers:t}=this,{imageFormat:n,imageTransparency:i,version:r}=e;return{format:n,request:"GetMap",service:"WMS",styles:"",transparent:i?"TRUE":"FALSE",version:r,layers:t}}};(0,i._)([(0,l.MZ)()],o.prototype,"layer",null),(0,i._)([(0,l.MZ)({readOnly:!0})],o.prototype,"layers",null),(0,i._)([(0,l.MZ)({type:Number})],o.prototype,"scale",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],o.prototype,"version",null),(0,i._)([(0,l.MZ)({readOnly:!0})],o.prototype,"visibleSublayers",null),o=(0,i._)([(0,s.$)("esri.layers.support.ExportWMSImageParameters")],o)},43543:(e,t,n)=>{n.d(t,{F:()=>r});var i=n(98156);function r(e,t,n){if(null==(null===e||void 0===e?void 0:e.timeInfo))return null;const{datesInUnknownTimezone:r=!1,timeOffset:l,useViewTime:s}=e;let a=e.timeExtent;r&&(a=(0,i.YU)(a));let o=s?t&&a?t.intersection(a):t||a:a;return!o||o.isEmpty||o.isAllTime?o:(l&&(o=o.offset(-l.value,l.unit)),r&&(o=(0,i.h3)(o)),o.equals(n)?n:o)}},98156:(e,t,n)=>{n.d(t,{getTimeSliderSettingsFromWebDocument:()=>p,YU:()=>h,h3:()=>v});var i=n(82111),r=n(18690),l=(n(63241),n(53084)),s=(n(76460),n(18288)),a=n(42052),o=n(72027);function u(e){return void 0!==e.timeInfo}async function m(e,t){var n,l;return null!==(n=null===(l=e.widgets)||void 0===l||null===(l=l.timeSlider)||void 0===l?void 0:l.fullTimeExtent)&&void 0!==n?n:async function(e,t){if(0===e.length)return i.A.allTime;await Promise.all(e.map((e=>e.load({signal:t}))));const n=e.filter(u),l=e.filter((e=>!u(e)&&null!=e.visibilityTimeExtent));if(0===n.length&&0===l.length)return i.A.allTime;const s=[],a=[];for(const i of n){var o;"feature"!==(null===i||void 0===i?void 0:i.type)&&"map-image"!==(null===i||void 0===i?void 0:i.type)||null===(o=i.timeInfo)||void 0===o||!o.hasLiveData?a.push(i):s.push(i)}const m=e=>null==e||e.isAllTime,c=[...a.map((e=>{var t,n;const i=null===(t=e.timeInfo)||void 0===t?void 0:t.fullTimeExtent,{visibilityTimeExtent:r}=e;return null!==(n=null===i||void 0===i?void 0:i.intersection(r))&&void 0!==n?n:r})),...l.map((e=>e.visibilityTimeExtent))];if(c.some(m))return i.A.allTime;const d=s.map((async e=>{var n,i,r,l;const s=null!==(n=null===(i=await e.fetchRecomputedExtents({signal:t}))||void 0===i?void 0:i.timeExtent)&&void 0!==n?n:null===(r=e.timeInfo)||void 0===r?void 0:r.fullTimeExtent,{visibilityTimeExtent:a}=e;return null!==(l=null===s||void 0===s?void 0:s.intersection(a))&&void 0!==l?l:a})),p=(await Promise.allSettled(d)).map((e=>"fulfilled"===e.status?e.value:null));if(p.some(m))return i.A.allTime;const v=[...p,...c].filter(r.Ru);return 0===v.length?i.A.allTime:v.reduce(((e,t)=>e.union(t)))}(e.allLayers,t)}function c(e){const{numStops:t,stopInterval:n,stops:i}=e;return i?{dates:(0,l.o8)(i)}:n?{interval:n.clone()}:{count:null!==t&&void 0!==t?t:5}}function d(e,t){var n;const r=e.currentTimeExtent;if(!r)return null;const{start:l,end:s}=r,a=null!==(n=null!==l&&void 0!==l?l:s)&&void 0!==n?n:null;switch(t){case"time-window":return new i.A({start:l,end:s});case"cumulative-from-start":return new i.A({start:null,end:a});case"cumulative-from-end":return new i.A({start:a,end:null});case"instant":return new i.A({start:a,end:a})}}async function p(e,t){var n,i;if(!(0,a.r)(e)&&!function(e){return null!=e&&"object"==typeof e&&o.X in e}(e))return null;await e.load({signal:t});const r=null===e||void 0===e||null===(n=e.widgets)||void 0===n?void 0:n.timeSlider;if(!r)return null;const l=await m(e,t),s=r.loop,u=function(e){var t;const n=null!==(t=e.numThumbs)&&void 0!==t?t:2,i=e.currentTimeExtent;if(i){const{start:e,end:t}=i;return null!=e&&null!=t&&e.getTime()===t.getTime()?"instant":2===n?"time-window":null==e||0===e.getTime()?"cumulative-from-start":"cumulative-from-end"}return 2===n?"time-window":"cumulative-from-start"}(r);return{fullTimeExtent:l,loop:s,mode:u,playRate:null!==(i=r.stopDelay)&&void 0!==i?i:2e3,stops:c(r),timeExtent:d(r,u)}}function v(e){if(!e)return e;const{start:t,end:n}=e;return new i.A({start:null!=t?(0,s.S1)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=n?(0,s.S1)(n,-n.getTimezoneOffset(),"minutes"):n})}function h(e){if(!e)return e;const{start:t,end:n}=e;return new i.A({start:null!=t?(0,s.S1)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=n?(0,s.S1)(n,n.getTimezoneOffset(),"minutes"):n})}},86108:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var i=n(35143),r=n(50076),l=(n(76460),n(81806),n(47249),n(85842)),s=n(76797),a=n(10183),o=n(30726),u=n(50346),m=n(46053),c=n(56287),d=n(43543);const p=e=>{let t=class extends e{initialize(){this.exportImageParameters=new c.r({layer:this.layer})}destroy(){this.exportImageParameters=(0,o.pR)(this.exportImageParameters)}get exportImageVersion(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return(0,d.F)(this.layer,null===(e=this.view)||void 0===e?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,t){const{layer:n}=this;if(!e)throw new r.A("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:n});const{popupEnabled:i}=n;if(!i)throw new r.A("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:i});const l=this.createFetchPopupFeaturesQuery(e);if(!l)return[];const{extent:s,width:a,height:o,x:m,y:c}=l;if(!(s&&a&&o))throw new r.A("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:a,height:o});const d=await n.fetchFeatureInfo(s,a,o,m,c);return(0,u.Te)(t),d}};return(0,i._)([(0,m.MZ)()],t.prototype,"exportImageParameters",void 0),(0,i._)([(0,m.MZ)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,i._)([(0,m.MZ)()],t.prototype,"layer",void 0),(0,i._)([(0,m.MZ)({readOnly:!0})],t.prototype,"timeExtent",null),t=(0,i._)([(0,l.$)("esri.views.layers.WMSLayerView")],t),t};let v=class extends(p(a.A)){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new r.A("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this._updatingHandles.add((()=>{var e;return null===(e=this.exportImageParameters)||void 0===e?void 0:e.version}),(()=>{this._updatingHandles.addPromise(this.refreshDebounced())}))}createFetchPopupFeaturesQuery(e){const t=this.findExtentInfoAt(e),n=t.extent,i=new s.A(n[0],n[1],n[2],n[3],this._spatialReference),r=t.imageSize,l=r.width,a=r.height,o=i.width/l;return{extent:i,width:l,height:a,x:Math.round((e.x-i.xmin)/o),y:Math.round((i.ymax-e.y)/o)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};v=(0,i._)([(0,l.$)("esri.views.3d.layers.WMSLayerView3D")],v);const h=v},42052:(e,t,n)=>{function i(e){return null!=e&&"object"==typeof e&&"declaredClass"in e&&"esri.WebMap"===e.declaredClass}n.d(t,{r:()=>i})}}]);
//# sourceMappingURL=6108.9d6d078c.chunk.js.map