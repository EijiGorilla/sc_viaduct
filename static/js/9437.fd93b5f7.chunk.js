"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[9437],{69437:(e,t,o)=>{o.r(t),o.d(t,{executeRelationshipQuery:()=>f,executeRelationshipQueryForCount:()=>y});var r=o(54994),n=o(3825),a=o(80963),c=o(78238);function s(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),!o.outFields||null!==t&&void 0!==t&&t.returnCountOnly?delete o.outFields:o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","),o.outSR&&(o.outSR=(0,a.YX)(o.outSR)),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function u(e,t,o){const r=await d(e,t,o),n=r.data,a=n.geometryType,c=n.spatialReference,s={};for(const u of n.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:c,hasZ:!!n.hasZ,hasM:!!n.hasM,features:u.relatedRecords};if(null!=u.objectId)s[u.objectId]=e;else for(const t of Object.keys(u))"relatedRecords"!==t&&(s[u[t]]=e)}return{...r,data:s}}async function d(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;const a=(0,c.z)({...e.query,f:"json",...r,...s(t,r)});return(0,n.A)(e.path+"/queryRelatedRecords",{...o,query:{...o.query,...a}})}var i=o(77725),l=o(58289);async function f(e,t,o){t=l.default.from(t);return u((0,r.Dl)(e),t,o).then((e=>{const t=e.data,o={};return Object.keys(t).forEach((e=>o[e]=i.A.fromJSON(t[e]))),o}))}async function y(e,t,o){t=l.default.from(t);return async function(e,t,o){const r=await d(e,t,o,{returnCountOnly:!0}),n=r.data,a={};for(const c of n.relatedRecordGroups)null!=c.objectId&&(a[c.objectId]=c.count);return{...r,data:a}}((0,r.Dl)(e),t,{...o}).then((e=>e.data))}}}]);
//# sourceMappingURL=9437.fd93b5f7.chunk.js.map