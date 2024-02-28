"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[2925],{83491:(e,i,s)=>{s.d(i,{w:()=>y});var t=s(35143),a=s(54901),n=s(50346),l=s(68134),r=s(46053),o=(s(40565),s(18690),s(81806),s(85842)),d=s(47700);const y=e=>{let i=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,d.jI)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,i=e.signal;this.addHandles((0,a.hA)((()=>e.abort()))),await(0,l.C_)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),i),(0,n.Te)(i);const s=(0,d.Hu)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(s)throw s}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),i=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return i&&i.minScale&&i.maxScale&&i.minScale<i.maxScale&&(e.outsideScaleRange=!0),e}};return(0,t._)([(0,r.MZ)()],i.prototype,"view",void 0),(0,t._)([(0,r.MZ)()],i.prototype,"slicePlaneEnabled",void 0),i=(0,t._)([(0,o.$)("esri.views.3d.layers.LayerView3D")],i),i}},72925:(e,i,s)=>{s.r(i),s.d(i,{default:()=>c});var t=s(35143),a=s(98773),n=s(50076),l=s(30726),r=s(50346),o=s(68134),d=s(46053),y=s(85842),h=s(83491),u=s(91196);const p="analysis-view-handles";let v=class extends((0,h.w)(u.A)){constructor(e){super(e),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.addHandles((0,o.wB)((()=>this.layer.analysis),(e=>{this._destroyAnalysisView(),null!=e&&this._createAnalysisView(e)}),o.pc),p)}destroy(){this.removeHandles(p),this._destroyAnalysisView()}async whenAnalysisView(){if(null!=this.analysisView)return this.analysisView;if(null!=this._createAnalysisViewTask)return this._createAnalysisViewTask.promise;throw new n.A("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return null!=this._createAnalysisViewTask||null!=this.analysisView&&this.analysisView.updating}_createAnalysisView(e){const i=(0,a.UT)((async s=>(this.analysisView=await this._createAnalysisViewPromise(e,s),this._createAnalysisViewTask===i&&(this._createAnalysisViewTask=null),this.analysisView)));this._createAnalysisViewTask=i}_destroyAnalysisView(){this.analysisView=(0,l.pR)(this.analysisView),this._createAnalysisViewTask=(0,l.DC)(this._createAnalysisViewTask)}async _createAnalysisViewPromise(e,i){let s=this._analysisModule;if(null==s){const e=await this._loadAnalysisModule();this._analysisModule=e,s=e}const t=new s.default({analysis:e,view:this.view,parent:this});if(await t.when(),(0,r.G4)(i))throw t.destroy(),new n.A("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:e});return t}_loadAnalysisModule(){return Promise.all([s.e(9390),s.e(7818),s.e(2285)]).then(s.bind(s,82285))}};(0,t._)([(0,d.MZ)()],v.prototype,"type",void 0),(0,t._)([(0,d.MZ)()],v.prototype,"layer",void 0),(0,t._)([(0,d.MZ)()],v.prototype,"analysisView",void 0),(0,t._)([(0,d.MZ)()],v.prototype,"_createAnalysisViewTask",void 0),v=(0,t._)([(0,y.$)("esri.views.3d.layers.LineOfSightLayerView3D")],v);const c=v},91196:(e,i,s)=>{s.d(i,{A:()=>v});var t=s(35143),a=s(91967),n=s(54099),l=s(5632),r=s(76460),o=s(30726),d=s(91291),y=s(46053),h=(s(40565),s(18690),s(81806),s(85842)),u=s(19451);let p=class extends((0,l.sA)((0,d.g)(n.A.EventedMixin(a.A)))){constructor(e){super(e),this._updatingHandles=new u.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var i;const s=this.layer&&this.layer.id||"no id",t=(null===(i=this.layer)||void 0===i?void 0:i.title)||"no title";r.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(t,"', id: '").concat(s,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.pR)(this._updatingHandles)}get fullOpacity(){var e,i,s,t;return(null!==(e=null===(i=this.layer)||void 0===i?void 0:i.opacity)&&void 0!==e?e:1)*(null!==(s=null===(t=this.parent)||void 0===t?void 0:t.fullOpacity)&&void 0!==s?s:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,i,s;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(i=this.parent)&&void 0!==i&&i.suspended)&&(null===(s=this.view)||void 0===s?void 0:s.ready)||!1}getSuspendInfo(){var e,i;const s=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(i=this.view)&&void 0!==i&&i.ready||(s.viewNotReady=!0),this.layer&&this.layer.loaded||(s.layerNotLoaded=!0),this.visible||(s.layerInvisible=!0),s}isUpdating(){return!1}};(0,t._)([(0,y.MZ)()],p.prototype,"fullOpacity",null),(0,t._)([(0,y.MZ)()],p.prototype,"layer",void 0),(0,t._)([(0,y.MZ)()],p.prototype,"parent",void 0),(0,t._)([(0,y.MZ)({readOnly:!0})],p.prototype,"suspended",null),(0,t._)([(0,y.MZ)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,t._)([(0,y.MZ)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,t._)([(0,y.MZ)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,t._)([(0,y.MZ)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,t._)([(0,y.MZ)()],p.prototype,"visible",null),(0,t._)([(0,y.MZ)()],p.prototype,"view",void 0),p=(0,t._)([(0,h.$)("esri.views.layers.LayerView")],p);const v=p}}]);
//# sourceMappingURL=2925.e4ab3f7e.chunk.js.map