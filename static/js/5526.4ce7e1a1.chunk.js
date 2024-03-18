"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[5526],{1741:(e,t,o)=>{o.r(t),o.d(t,{default:()=>B});var r=o(35143),s=(o(35238),o(16868)),i=(o(63844),o(94508),o(47662),o(72690),o(86946),o(71832),o(5766),o(35039),o(86616),o(31382)),n=o(77717),p=o(46053),a=(o(40565),o(18690),o(81806),o(85842)),l=o(31608),u=o(25515),d=o(50076),c=o(49304),y=o(26799),v=o(77725),h=o(13312);let f=class extends c.A{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:o,supportedCrs:r},layer:{apiKey:s,customParameters:i,effectiveMaxRecordCount:n}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:n,queryParameters:{apiKey:s,customParameters:i},spatialReference:o,supportedCrs:r}}queryExtent(e){return null}queryFeatureCount(e){return null}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.queryFeaturesJSON(e,t).then((e=>v.A.fromJSON(e)))}queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=this.getSource();return this.load(t).then((()=>(0,y.bW)(o,e,t)))}queryObjectIds(e){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var o;const r=new RegExp("^".concat(t,"$"),"i");return null!==(o=e.conformsTo.some((e=>r.test(e))))&&void 0!==o&&o}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){var t,o,r,s;const i=null===e||void 0===e||null===(t=e.components)||void 0===t?void 0:t.parameters;return null!==(o=null===i||void 0===i||null===(r=i.limit)||void 0===r||null===(r=r.schema)||void 0===r?void 0:r.maximum)&&void 0!==o?o:null===i||void 0===i||null===(s=i.limitFeatures)||void 0===s||null===(s=s.schema)||void 0===s?void 0:s.maximum}_getStorageSpatialReference(e){var t;const o=null!==(t=e.storageCrs)&&void 0!==t?t:y.QE,r=(0,y.J0)(o);return null==r?h.A.WGS84:new h.A({wkid:r})}_getSupportedSpatialReferences(e,t){var o,r;const s="#/crs",i=null!==(o=e.crs)&&void 0!==o?o:[y.QE],n=i.includes(s)?i.filter((e=>e!==s)).concat(null!==(r=t.crs)&&void 0!==r?r:[]):i,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter((e=>!p.test(e)))}async _loadOGCServices(e,t){const o=null!=t?t.signal:null,{apiKey:r,collectionId:s,customParameters:i,fields:n,geometryType:p,hasZ:a,objectIdField:u,timeInfo:c,url:v}=e,h={fields:null===n||void 0===n?void 0:n.map((e=>e.toJSON())),geometryType:l.Y.toJSON(p),hasZ:null!==a&&void 0!==a&&a,objectIdField:u,timeInfo:null===c||void 0===c?void 0:c.toJSON()},f={apiKey:r,customParameters:i,signal:o},g=await(0,y.Ki)(v,f),[m,S]=await Promise.all([(0,y.Px)(g,f),(0,y.bV)(g,f)]);if(!this._conformsToType(m,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new d.A("ogc-feature-layer:no-geojson-support","Server does not support geojson");const _=S.collections.find((e=>e.id===s));if(!_)throw new d.A("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const M=this._conformsToType(m,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await(0,y.GA)(g,f):null,C=await(0,y.GL)(_,h,f),x=this._getMaxRecordCount(M),R=this._getCapabilities(C.hasZ,x),F=this._getStorageSpatialReference(_).toJSON(),w=this._getSupportedSpatialReferences(_,S),Z=new RegExp("^".concat(y.vJ),"i"),b={};for(const l of w){const e=(0,y.J0)(l);null!=e&&(b[e]||(b[e]=l.replace(Z,"")))}this.featureDefinition={capabilities:R,collection:_,layerDefinition:C,spatialReference:F,supportedCrs:b}}};(0,r._)([(0,p.MZ)()],f.prototype,"featureDefinition",void 0),(0,r._)([(0,p.MZ)({constructOnly:!0})],f.prototype,"layer",void 0),(0,r._)([(0,p.MZ)()],f.prototype,"type",void 0),f=(0,r._)([(0,a.$)("esri.layers.graphics.sources.OGCFeatureSource")],f);var g=o(12406),m=o(65624),S=o(31362),_=o(74440),M=o(41308),C=o(11270),x=o(4554),R=o(94729),F=o(21617),w=o(5682),Z=o(78817),b=o(95363),I=o(91485),O=o(44135),D=o(76350),A=o(53430),T=o(71401),P=o(27937),j=o(68295),E=o(30973),Q=o(76797);const G=(0,D.p)();let q=class extends((0,g.p)((0,S.d)((0,M.J)((0,_.F)((0,m.d)((0,x.f)((0,Z.e)((0,w.j)((0,C.q)((0,R.A)((0,F.J)((0,n.P)(u.A))))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new f({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;null===(e=this.source)||void 0===e||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e,t,o;return null!==(e=null!==(t=this.maxRecordCount)&&void 0!==t?t:null===(o=this.capabilities)||void 0===o?void 0:o.query.maxRecordCount)&&void 0!==e?e:5e3}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){(0,A.yp)(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,E.tn)(this,e)}createQuery(){return new j.A}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var o;let r,s=!1;const i=null===t||void 0===t||null===(o=t.feature)||void 0===o?void 0:o.attributes,n=this.typeIdField&&(null===i||void 0===i?void 0:i[this.typeIdField]);return null!=n&&this.types&&(s=this.types.some((t=>{var o,s;return t.id==n&&(r=null===(o=t.domains)||void 0===o?void 0:o[e],"inherited"===(null===(s=r)||void 0===s?void 0:s.type)&&(r=this._getLayerDomain(e)),!0)}))),s||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(j.A.from(e)||this.createQuery(),t))).then((e=>{var t;return null!==e&&void 0!==e&&null!==(t=e.features)&&void 0!==t&&t.forEach((e=>{e.layer=e.sourceLayer=this})),e}))}serviceSupportsSpatialReference(e){var t,o;return null!==(t=null===(o=this.source)||void 0===o?void 0:o.serviceSupportsSpatialReference(e))&&void 0!==t&&t}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),(0,A.yp)(this.renderer,this.fieldsIndex),(0,A.sv)(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};(0,r._)([(0,p.MZ)({readOnly:!0,json:{origins:{service:{read:!0}}}})],q.prototype,"capabilities",void 0),(0,r._)([(0,p.MZ)({type:String,json:{write:!0}})],q.prototype,"collectionId",void 0),(0,r._)([(0,p.MZ)({type:String})],q.prototype,"copyright",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],q.prototype,"defaultPopupTemplate",null),(0,r._)([(0,p.MZ)({type:String})],q.prototype,"definitionExpression",void 0),(0,r._)([(0,p.MZ)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],q.prototype,"description",void 0),(0,r._)([(0,p.MZ)({type:String})],q.prototype,"displayField",void 0),(0,r._)([(0,p.MZ)({type:Number})],q.prototype,"effectiveMaxRecordCount",null),(0,r._)([(0,p.MZ)(b.Yj)],q.prototype,"elevationInfo",void 0),(0,r._)([(0,p.MZ)({type:[O.A],json:{origins:{service:{name:"layerDefinition.fields"}}}})],q.prototype,"fields",void 0),(0,r._)([(0,p.MZ)(G.fieldsIndex)],q.prototype,"fieldsIndex",void 0),(0,r._)([(0,p.MZ)({readOnly:!0,type:Q.A,json:{origins:{service:{name:"layerDefinition.extent"}}}})],q.prototype,"fullExtent",void 0),(0,r._)([(0,p.MZ)({type:l.g.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:l.g.read}}}}})],q.prototype,"geometryType",void 0),(0,r._)([(0,p.MZ)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],q.prototype,"hasZ",void 0),(0,r._)([(0,p.MZ)({type:Boolean,readOnly:!0})],q.prototype,"isTable",null),(0,r._)([(0,p.MZ)({type:[T.A],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:P.w},write:!0}}}})],q.prototype,"labelingInfo",void 0),(0,r._)([(0,p.MZ)(b.kF)],q.prototype,"labelsVisible",void 0),(0,r._)([(0,p.MZ)(b.fV)],q.prototype,"legendEnabled",void 0),(0,r._)([(0,p.MZ)({type:Number})],q.prototype,"maxRecordCount",void 0),(0,r._)([(0,p.MZ)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],q.prototype,"objectIdField",void 0),(0,r._)([(0,p.MZ)({type:["OGCFeatureLayer"]})],q.prototype,"operationalLayerType",void 0),(0,r._)([(0,p.MZ)(b.M6)],q.prototype,"popupEnabled",void 0),(0,r._)([(0,p.MZ)({type:s.A,json:{name:"popupInfo",write:!0}})],q.prototype,"popupTemplate",void 0),(0,r._)([(0,p.MZ)({types:i.H,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:i.X,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],q.prototype,"renderer",null),(0,r._)([(0,p.MZ)(b.PY)],q.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],q.prototype,"source",void 0),(0,r._)([(0,p.MZ)({readOnly:!0,type:h.A,json:{origins:{service:{read:!0}}}})],q.prototype,"spatialReference",void 0),(0,r._)([(0,p.MZ)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],q.prototype,"title",void 0),(0,r._)([(0,p.MZ)({readOnly:!0,json:{read:!1}})],q.prototype,"type",void 0),(0,r._)([(0,p.MZ)({type:String,readOnly:!0})],q.prototype,"typeIdField",void 0),(0,r._)([(0,p.MZ)({type:[I.A]})],q.prototype,"types",void 0),(0,r._)([(0,p.MZ)(b.OZ)],q.prototype,"url",void 0),q=(0,r._)([(0,a.$)("esri.layers.OGCFeatureLayer")],q);const B=q},8298:(e,t,o)=>{o.d(t,{F:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);
//# sourceMappingURL=5526.4ce7e1a1.chunk.js.map