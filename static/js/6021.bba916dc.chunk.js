"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[6021],{76030:(e,t,s)=>{s.d(t,{A:()=>l});var i=s(35143),r=s(91967),o=s(46053),n=(s(40565),s(18690),s(81806),s(85842));let a=class extends r.A{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.tileStore.tileScheme.spatialReference;return e&&e.toJSON()||null}};(0,i._)([(0,o.MZ)({readOnly:!0})],a.prototype,"supportsTileUpdates",null),(0,i._)([(0,o.MZ)({constructOnly:!0})],a.prototype,"remoteClient",void 0),(0,i._)([(0,o.MZ)({constructOnly:!0})],a.prototype,"service",void 0),(0,i._)([(0,o.MZ)()],a.prototype,"spatialReference",null),(0,i._)([(0,o.MZ)({constructOnly:!0})],a.prototype,"tileInfo",void 0),(0,i._)([(0,o.MZ)({constructOnly:!0})],a.prototype,"tileStore",void 0),a=(0,i._)([(0,n.$)("esri.views.2d.layers.features.processors.BaseProcessor")],a);const l=a},46021:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var i=s(35143),r=(s(81806),s(76460),s(40565),s(18690),s(50076),s(85842)),o=s(15011),n=s(4414),a=s(5095),l=s(76030),d=s(77562);class c{constructor(e,t){this.offset=e,this.extent=t}}function p(e){const t=e.key,s=new Map,i=256,r=a.CQ,o=e.tileInfoView.tileInfo.isWrappable;return s.set((0,d.K)(t,-1,-1,o).id,new c([-r,-r],[r-i,r-i,r,r])),s.set((0,d.K)(t,0,-1,o).id,new c([0,-r],[0,r-i,r,r])),s.set((0,d.K)(t,1,-1,o).id,new c([r,-r],[0,r-i,i,r])),s.set((0,d.K)(t,-1,0,o).id,new c([-r,0],[r-i,0,r,r])),s.set((0,d.K)(t,1,0,o).id,new c([r,0],[0,0,i,r])),s.set((0,d.K)(t,-1,1,o).id,new c([-r,r],[r-i,0,r,i])),s.set((0,d.K)(t,0,1,o).id,new c([0,r],[0,0,r,i])),s.set((0,d.K)(t,1,1,o).id,new c([r,r],[0,0,i,i])),s}let u=class extends l.A{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const s=t.schema.processors[0];"heatmap"===s.type&&(0,o.Ui)(this._schema,s)&&(e.mesh=!0,this._schema=s)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}async onTileMessage(e,t,s){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const i=this._tileKeyToFeatureSets.get(e.key.id);if(i&&null!=t.addOrUpdate&&t.addOrUpdate.hasFeatures&&i.set(t.addOrUpdate.instance,t),t.end){const t=[],i=p(e);this._tileKeyToFeatureSets.forEach(((s,r)=>{if(r===e.key.id)s.forEach((e=>{let{addOrUpdate:s}=e;s&&t.push(s)}));else if(i.has(r)){const e=i.get(r),[o,n]=e.offset;s.forEach((e=>{let{addOrUpdate:s}=e;if(s){const e=s.transform(o,n,1,1);t.push(e)}}))}}));const r=(0,n.oQ)(t,this._schema.mesh,512,512),o={tileKey:e.key.id,intensityInfo:r},a=[r.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",o,{...s,transferList:a})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};u=(0,i._)([(0,r.$)("esri.views.2d.layers.features.processors.HeatmapProcessor")],u);const h=u},77562:(e,t,s)=>{function i(e,t,s,i){const r=e.clone(),o=1<<r.level,n=r.col+t,a=r.row+s;return i&&n<0?(r.col=n+o,r.world-=1):n>=o?(r.col=n-o,r.world+=1):r.col=n,r.row=a,r}s.d(t,{K:()=>i})}}]);
//# sourceMappingURL=6021.bba916dc.chunk.js.map