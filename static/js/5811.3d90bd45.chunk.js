"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[5811],{25811:(n,t,e)=>{e.r(t),e.d(t,{registerFunctions:()=>P});var r=e(55171),i=e(26043),a=e(67253),u=e(9861),o=e(80324),c=e(43036),l=e(45018),s=e(92975),f=e(31633),d=e(76797),w=e(89189),A=e(56203),h=e(66388),y=e(13904),m=e(65215),v=e(23701),p=e(19902),g=e(65308),F=e(3825);async function D(n,t,e){var i;if(!(null===r.id||void 0===r.id?void 0:r.id.findCredential(n.restUrl)))return null;if("loaded"===n.loadStatus&&""===t&&null!==(i=n.user)&&void 0!==i&&i.sourceJSON&&!1===e)return n.user.sourceJSON;const a={responseType:"json",query:{f:"json"}};if(e&&(a.query.returnUserLicenseTypeExtensions=!0),""===t){const t=await(0,F.A)(n.restUrl+"/community/self",a);if(t.data){const n=t.data;if(null!==n&&void 0!==n&&n.username)return n}return null}const u=await(0,F.A)(n.restUrl+"/community/users/"+t,a);if(u.data){const n=u.data;return n.error?null:n}return null}function T(n){return 0===r.rE.indexOf("4.")?m.A.fromExtent(n):new m.A({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function $(n,t,e){if((0,c.E)(n,2,2,t,e),n[0]instanceof w.A&&n[1]instanceof w.A);else if(n[0]instanceof w.A&&null===n[1]);else if(n[1]instanceof w.A&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new u.D$(t,u.TX.InvalidParameter,e)}async function I(n,t){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return 0;let e=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(e=(0,s.G9)(n.spatialReference)/(0,f.GA)(n.spatialReference));let r=0;if("polyline"===n.type)for(const a of n.paths)for(let n=1;n<a.length;n++)r+=(0,s.BM)(a[n],a[n-1],e);else if("polygon"===n.type)for(const a of n.rings){for(let n=1;n<a.length;n++)r+=(0,s.BM)(a[n],a[n-1],e);(a[0][0]!==a[a.length-1][0]||a[0][1]!==a[a.length-1][1]||void 0!==a[0][2]&&a[0][2]!==a[a.length-1][2])&&(r+=(0,s.BM)(a[0],a[a.length-1],e))}else"extent"===n.type&&(r+=2*(0,s.BM)([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],e),r+=2*(0,s.BM)([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],e),r*=2,r+=4*Math.abs((0,c.H)(n.zmax,0)*e-(0,c.H)(n.zmin,0)*e));const i=new v.A({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,r]]});return(0,A.Zu)(i,t)}function P(n){"async"===n.mode&&(n.functions.disjoint=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>($(i=(0,c.F)(i),t,e),null===i[0]||null===i[1]||(0,A.nf)(i[0],i[1]))))},n.functions.intersects=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>($(i=(0,c.F)(i),t,e),null!==i[0]&&null!==i[1]&&(0,A.HY)(i[0],i[1]))))},n.functions.touches=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>($(i=(0,c.F)(i),t,e),null!==i[0]&&null!==i[1]&&(0,A.yI)(i[0],i[1]))))},n.functions.crosses=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>($(i=(0,c.F)(i),t,e),null!==i[0]&&null!==i[1]&&(0,A.NN)(i[0],i[1]))))},n.functions.within=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>($(i=(0,c.F)(i),t,e),null!==i[0]&&null!==i[1]&&(0,A.ux)(i[0],i[1]))))},n.functions.contains=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>($(i=(0,c.F)(i),t,e),null!==i[0]&&null!==i[1]&&(0,A.gR)(i[0],i[1]))))},n.functions.overlaps=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>($(i=(0,c.F)(i),t,e),null!==i[0]&&null!==i[1]&&(0,A.$f)(i[0],i[1]))))},n.functions.equals=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>((0,c.E)(i,2,2,t,e),i[0]===i[1]||(i[0]instanceof w.A&&i[1]instanceof w.A?(0,A.aI)(i[0],i[1]):((0,c.k)(i[0])&&(0,c.k)(i[1])||!!((0,c.n)(i[0])&&(0,c.n)(i[1])||(0,c.m)(i[0])&&(0,c.m)(i[1])))&&i[0].equals(i[1])))))},n.functions.relate=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,3,3,t,e),i[0]instanceof w.A&&i[1]instanceof w.A)return(0,A.c7)(i[0],i[1],(0,c.j)(i[2]));if(i[0]instanceof w.A&&null===i[1])return!1;if(i[1]instanceof w.A&&null===i[0])return!1;if(null===i[0]&&null===i[1])return!1;throw new u.D$(t,u.TX.InvalidParameter,e)}))},n.functions.intersection=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>($(i=(0,c.F)(i),t,e),null===i[0]||null===i[1]?null:(0,A.y$)(i[0],i[1]))))},n.functions.union=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{const a=[];if(0===(i=(0,c.F)(i)).length)throw new u.D$(t,u.TX.WrongNumberOfParameters,e);if(1===i.length)if((0,c.o)(i[0])){const n=(0,c.F)(i[0]);for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);a.push(n[r])}}else{if(!(0,c.q)(i[0])){if(i[0]instanceof w.A)return(0,c.A)((0,o.Yq)(i[0]),t.spatialReference);if(null===i[0])return null;throw new u.D$(t,u.TX.InvalidParameter,e)}{const n=(0,c.F)(i[0].toArray());for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);a.push(n[r])}}}else for(let o=0;o<i.length;o++)if(null!==i[o]){if(!(i[o]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);a.push(i[o])}return 0===a.length?null:(0,A.KC)(a)}))},n.functions.difference=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>($(i=(0,c.F)(i),t,e),null!==i[0]&&null===i[1]?(0,o.Yq)(i[0]):null===i[0]?null:(0,A.iv)(i[0],i[1]))))},n.functions.symmetricdifference=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>($(i=(0,c.F)(i),t,e),null===i[0]&&null===i[1]?null:null===i[0]?(0,o.Yq)(i[1]):null===i[1]?(0,o.Yq)(i[0]):(0,A.BT)(i[0],i[1]))))},n.functions.clip=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,2,2,t,e),!(i[1]instanceof d.A)&&null!==i[1])throw new u.D$(t,u.TX.InvalidParameter,e);if(null===i[0])return null;if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);return null===i[1]?null:(0,A.$Q)(i[0],i[1])}))},n.functions.cut=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,2,2,t,e),!(i[1]instanceof v.A)&&null!==i[1])throw new u.D$(t,u.TX.InvalidParameter,e);if(null===i[0])return[];if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);return null===i[1]?[(0,o.Yq)(i[0])]:(0,A.Jj)(i[0],i[1])}))},n.functions.area=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,i)=>{if((0,c.E)(i,1,2,t,e),null===(i=(0,c.F)(i))[0])return 0;if((0,c.u)(i[0])){const n=await i[0].sumArea((0,o.uf)((0,c.H)(i[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new u.D$(t,u.TX.Cancelled,e);return n}if((0,c.o)(i[0])||(0,c.q)(i[0])){const n=(0,c.G)(i[0],t.spatialReference);return null===n?0:(0,A._2)(n,(0,o.uf)((0,c.H)(i[1],-1)))}if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);return(0,A._2)(i[0],(0,o.uf)((0,c.H)(i[1],-1)))}))},n.functions.areageodetic=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,i)=>{if((0,c.E)(i,1,2,t,e),null===(i=(0,c.F)(i))[0])return 0;if((0,c.u)(i[0])){const n=await i[0].sumArea((0,o.uf)((0,c.H)(i[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new u.D$(t,u.TX.Cancelled,e);return n}if((0,c.o)(i[0])||(0,c.q)(i[0])){const n=(0,c.G)(i[0],t.spatialReference);return null===n?0:(0,A.PW)(n,(0,o.uf)((0,c.H)(i[1],-1)))}if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);return(0,A.PW)(i[0],(0,o.uf)((0,c.H)(i[1],-1)))}))},n.functions.length=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,i)=>{if((0,c.E)(i,1,2,t,e),null===(i=(0,c.F)(i))[0])return 0;if((0,c.u)(i[0])){const n=await i[0].sumLength((0,o.SQ)((0,c.H)(i[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new u.D$(t,u.TX.Cancelled,e);return n}if((0,c.o)(i[0])||(0,c.q)(i[0])){const n=(0,c.J)(i[0],t.spatialReference);return null===n?0:(0,A.Zu)(n,(0,o.SQ)((0,c.H)(i[1],-1)))}if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);return(0,A.Zu)(i[0],(0,o.SQ)((0,c.H)(i[1],-1)))}))},n.functions.length3d=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if((0,c.E)(i,1,2,t,e),null===(i=(0,c.F)(i))[0])return 0;if((0,c.o)(i[0])||(0,c.q)(i[0])){const n=(0,c.J)(i[0],t.spatialReference);return null===n?0:!0===n.hasZ?I(n,(0,o.SQ)((0,c.H)(i[1],-1))):(0,A.Zu)(n,(0,o.SQ)((0,c.H)(i[1],-1)))}if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);return!0===i[0].hasZ?I(i[0],(0,o.SQ)((0,c.H)(i[1],-1))):(0,A.Zu)(i[0],(0,o.SQ)((0,c.H)(i[1],-1)))}))},n.functions.lengthgeodetic=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,i)=>{if((0,c.E)(i,1,2,t,e),null===(i=(0,c.F)(i))[0])return 0;if((0,c.u)(i[0])){const n=await i[0].sumLength((0,o.SQ)((0,c.H)(i[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new u.D$(t,u.TX.Cancelled,e);return n}if((0,c.o)(i[0])||(0,c.q)(i[0])){const n=(0,c.J)(i[0],t.spatialReference);return null===n?0:(0,A.mh)(n,(0,o.SQ)((0,c.H)(i[1],-1)))}if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);return(0,A.mh)(i[0],(0,o.SQ)((0,c.H)(i[1],-1)))}))},n.functions.distance=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{i=(0,c.F)(i),(0,c.E)(i,2,3,t,e);let a=i[0];((0,c.o)(i[0])||(0,c.q)(i[0]))&&(a=(0,c.K)(i[0],t.spatialReference));let l=i[1];if(((0,c.o)(i[1])||(0,c.q)(i[1]))&&(l=(0,c.K)(i[1],t.spatialReference)),!(a instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);if(!(l instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);return(0,A.Io)(a,l,(0,o.SQ)((0,c.H)(i[2],-1)))}))},n.functions.distancegeodetic=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{i=(0,c.F)(i),(0,c.E)(i,2,3,t,e);const a=i[0],l=i[1];if(!(a instanceof y.A))throw new u.D$(t,u.TX.InvalidParameter,e);if(!(l instanceof y.A))throw new u.D$(t,u.TX.InvalidParameter,e);const s=new v.A({paths:[],spatialReference:a.spatialReference});return s.addPath([a,l]),(0,A.mh)(s,(0,o.SQ)((0,c.H)(i[2],-1)))}))},n.functions.densify=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,2,3,t,e),null===i[0])return null;if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);const a=(0,c.g)(i[1]);if(isNaN(a))throw new u.D$(t,u.TX.InvalidParameter,e);if(a<=0)throw new u.D$(t,u.TX.InvalidParameter,e);return i[0]instanceof m.A||i[0]instanceof v.A?(0,A.jL)(i[0],a,(0,o.SQ)((0,c.H)(i[2],-1))):i[0]instanceof d.A?(0,A.jL)(T(i[0]),a,(0,o.SQ)((0,c.H)(i[2],-1))):i[0]}))},n.functions.densifygeodetic=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,2,3,t,e),null===i[0])return null;if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);const a=(0,c.g)(i[1]);if(isNaN(a))throw new u.D$(t,u.TX.InvalidParameter,e);if(a<=0)throw new u.D$(t,u.TX.InvalidParameter,e);return i[0]instanceof m.A||i[0]instanceof v.A?(0,A.Ow)(i[0],a,(0,o.SQ)((0,c.H)(i[2],-1))):i[0]instanceof d.A?(0,A.Ow)(T(i[0]),a,(0,o.SQ)((0,c.H)(i[2],-1))):i[0]}))},n.functions.generalize=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,2,4,t,e),null===i[0])return null;if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);const a=(0,c.g)(i[1]);if(isNaN(a))throw new u.D$(t,u.TX.InvalidParameter,e);return(0,A.px)(i[0],a,(0,c.h)((0,c.H)(i[2],!0)),(0,o.SQ)((0,c.H)(i[3],-1)))}))},n.functions.buffer=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,2,3,t,e),null===i[0])return null;if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);const a=(0,c.g)(i[1]);if(isNaN(a))throw new u.D$(t,u.TX.InvalidParameter,e);return 0===a?(0,o.Yq)(i[0]):(0,A.r)(i[0],a,(0,o.SQ)((0,c.H)(i[2],-1)))}))},n.functions.buffergeodetic=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,2,3,t,e),null===i[0])return null;if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);const a=(0,c.g)(i[1]);if(isNaN(a))throw new u.D$(t,u.TX.InvalidParameter,e);return 0===a?(0,o.Yq)(i[0]):(0,A.SE)(i[0],a,(0,o.SQ)((0,c.H)(i[2],-1)))}))},n.functions.offset=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,2,6,t,e),null===i[0])return null;if(!(i[0]instanceof m.A||i[0]instanceof v.A))throw new u.D$(t,u.TX.InvalidParameter,e);const a=(0,c.g)(i[1]);if(isNaN(a))throw new u.D$(t,u.TX.InvalidParameter,e);const l=(0,c.g)((0,c.H)(i[4],10));if(isNaN(l))throw new u.D$(t,u.TX.InvalidParameter,e);const s=(0,c.g)((0,c.H)(i[5],0));if(isNaN(s))throw new u.D$(t,u.TX.InvalidParameter,e);return(0,A.cY)(i[0],a,(0,o.SQ)((0,c.H)(i[2],-1)),(0,c.j)((0,c.H)(i[3],"round")).toLowerCase(),l,s)}))},n.functions.rotate=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{i=(0,c.F)(i),(0,c.E)(i,2,3,t,e);let a=i[0];if(null===a)return null;if(!(a instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);a instanceof d.A&&(a=m.A.fromExtent(a));const o=(0,c.g)(i[1]);if(isNaN(o))throw new u.D$(t,u.TX.InvalidParameter,e);const l=(0,c.H)(i[2],null);if(null===l)return(0,A.e$)(a,o);if(l instanceof y.A)return(0,A.e$)(a,o,l);throw new u.D$(t,u.TX.InvalidParameter,e)}))},n.functions.centroid=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,1,1,t,e),null===i[0])return null;let a=i[0];if(((0,c.o)(i[0])||(0,c.q)(i[0]))&&(a=(0,c.K)(i[0],t.spatialReference)),null===a)return null;if(!(a instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);return a instanceof y.A?(0,c.A)((0,o.Yq)(i[0]),t.spatialReference):a instanceof m.A?a.centroid:a instanceof v.A?(0,s.tI)(a):a instanceof h.A?(0,s.e0)(a):a instanceof d.A?a.center:null}))},n.functions.multiparttosinglepart=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,i)=>{i=(0,c.F)(i),(0,c.E)(i,1,1,t,e);const a=[];if(null===i[0])return null;if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);if(i[0]instanceof y.A)return[(0,c.A)((0,o.Yq)(i[0]),t.spatialReference)];if(i[0]instanceof d.A)return[(0,c.A)((0,o.Yq)(i[0]),t.spatialReference)];const l=await(0,A.CR)(i[0]);if(l instanceof m.A){const n=[],t=[];for(let e=0;e<l.rings.length;e++)if(l.isClockwise(l.rings[e])){const t=(0,p.rS)({rings:[l.rings[e]],hasZ:!0===l.hasZ,hazM:!0===l.hasM,spatialReference:l.spatialReference.toJSON()});n.push(t)}else t.push({ring:l.rings[e],pt:l.getPoint(e,0)});for(let e=0;e<t.length;e++)for(let r=0;r<n.length;r++)if(n[r].contains(t[e].pt)){n[r].addRing(t[e].ring);break}return n}if(l instanceof v.A){const n=[];for(let t=0;t<l.paths.length;t++){const e=(0,p.rS)({paths:[l.paths[t]],hasZ:!0===l.hasZ,hazM:!0===l.hasM,spatialReference:l.spatialReference.toJSON()});n.push(e)}return n}if(i[0]instanceof h.A){const n=(0,c.A)((0,o.Yq)(i[0]),t.spatialReference);for(let t=0;t<n.points.length;t++)a.push(n.getPoint(t));return a}return null}))},n.functions.issimple=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,1,1,t,e),null===i[0])return!0;if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);return(0,A.pn)(i[0])}))},n.functions.simplify=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,1,1,t,e),null===i[0])return null;if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);return(0,A.CR)(i[0])}))},n.functions.convexhull=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,1,1,t,e),null===i[0])return null;if(!(i[0]instanceof w.A))throw new u.D$(t,u.TX.InvalidParameter,e);return(0,A.HF)(i[0])}))},n.functions.getuser=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,o)=>{(0,c.E)(o,0,2,t,e);let s=(0,c.H)(o[1],""),f=!0===s;if(s=!0===s||!1===s?"":(0,c.j)(s),0===o.length||o[0]instanceof i.A){var d;let n=null;n=null!==(d=t.services)&&void 0!==d&&d.portal?t.services.portal:g.A.getDefault(),o.length>0&&(n=(0,l.R)(o[0],n));const e=await D(n,s,f);if(e){const n=JSON.parse(JSON.stringify(e));for(const t of["lastLogin","created","modified"])void 0!==n[t]&&null!==n[t]&&(n[t]=new Date(n[t]));return a.A.convertObjectToArcadeDictionary(n,(0,c.L)(t))}return null}let w=null;if((0,c.u)(o[0])&&(w=o[0]),w){var A;if(f=!1,s)return null;await w.load();const n=await w.getOwningSystemUrl();if(!n){if(!s){const n=await w.getIdentityUser();return n?a.A.convertObjectToArcadeDictionary({username:n},(0,c.L)(t)):null}return null}let e=null;e=null!==(A=t.services)&&void 0!==A&&A.portal?t.services.portal:g.A.getDefault(),e=(0,l.R)(new i.A(n),e);const r=await D(e,s,f);if(r){const n=JSON.parse(JSON.stringify(r));for(const t of["lastLogin","created","modified"])void 0!==n[t]&&null!==n[t]&&(n[t]=new Date(n[t]));return a.A.convertObjectToArcadeDictionary(n,(0,c.L)(t))}return null}throw new u.D$(t,u.TX.InvalidParameter,e)}))}),n.functions.nearestcoordinate=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,2,2,t,e),!(i[0]instanceof w.A||null===i[0]))throw new u.D$(t,u.TX.InvalidParameter,e);if(!(i[1]instanceof y.A||null===i[1]))throw new u.D$(t,u.TX.InvalidParameter,e);if(null===i[0]||null===i[1])return null;const o=await(0,A.fC)(i[0],i[1]);return null===o?null:a.A.convertObjectToArcadeDictionary({coordinate:o.coordinate,distance:o.distance},(0,c.L)(t),!1,!0)}))},n.functions.nearestvertex=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,i)=>{if(i=(0,c.F)(i),(0,c.E)(i,2,2,t,e),!(i[0]instanceof w.A||null===i[0]))throw new u.D$(t,u.TX.InvalidParameter,e);if(!(i[1]instanceof y.A||null===i[1]))throw new u.D$(t,u.TX.InvalidParameter,e);if(null===i[0]||null===i[1])return null;const o=await(0,A.JT)(i[0],i[1]);return null===o?null:a.A.convertObjectToArcadeDictionary({coordinate:o.coordinate,distance:o.distance},(0,c.L)(t),!1,!0)}))}}},45018:(n,t,e)=>{e.d(t,{R:()=>i});var r=e(65308);function i(n,t){return null===n?t:new r.A({url:n.field("url")})}},56203:(n,t,e)=>{e.d(t,{$Q:()=>d,$f:()=>D,BT:()=>S,CR:()=>I,HF:()=>P,HY:()=>v,Io:()=>y,JT:()=>q,Jj:()=>w,KC:()=>H,NN:()=>h,Ow:()=>C,PW:()=>Z,SE:()=>N,Zu:()=>Y,_2:()=>L,aI:()=>m,c7:()=>T,cY:()=>E,e$:()=>Q,fC:()=>b,gR:()=>A,iv:()=>X,jL:()=>j,mh:()=>k,nf:()=>F,pn:()=>$,px:()=>J,r:()=>x,ux:()=>g,y$:()=>R,yI:()=>p});e(35238);var r=e(16783),i=e(13904),a=e(19902);function u(n){var t;return Array.isArray(n)?null===(t=n[0])||void 0===t?void 0:t.spatialReference:null===n||void 0===n?void 0:n.spatialReference}function o(n){return n?Array.isArray(n)?n.map(o):n.toJSON?n.toJSON():n:n}function c(n){return Array.isArray(n)?n.map((n=>(0,a.rS)(n))):(0,a.rS)(n)}let l;async function s(){return l||(l=(0,r.ho)("geometryEngineWorker",{strategy:"distributed"})),l}async function f(n,t){return(await s()).invoke("executeGEOperation",{operation:n,parameters:o(t)})}async function d(n,t){return c(await f("clip",[u(n),n,t]))}async function w(n,t){return c(await f("cut",[u(n),n,t]))}function A(n,t){return f("contains",[u(n),n,t])}function h(n,t){return f("crosses",[u(n),n,t])}function y(n,t,e){return f("distance",[u(n),n,t,e])}function m(n,t){return f("equals",[u(n),n,t])}function v(n,t){return f("intersects",[u(n),n,t])}function p(n,t){return f("touches",[u(n),n,t])}function g(n,t){return f("within",[u(n),n,t])}function F(n,t){return f("disjoint",[u(n),n,t])}function D(n,t){return f("overlaps",[u(n),n,t])}function T(n,t,e){return f("relate",[u(n),n,t,e])}function $(n){return f("isSimple",[u(n),n])}async function I(n){return c(await f("simplify",[u(n),n]))}async function P(n){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return c(await f("convexHull",[u(n),n,t]))}async function X(n,t){return c(await f("difference",[u(n),n,t]))}async function S(n,t){return c(await f("symmetricDifference",[u(n),n,t]))}async function R(n,t){return c(await f("intersect",[u(n),n,t]))}async function H(n){const t=function(n,t){let e;return Array.isArray(n)?e=n:(e=[],e.push(n),null!=t&&e.push(t)),e}(n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null);return c(await f("union",[u(t),t]))}async function E(n,t,e,r,i,a){return c(await f("offset",[u(n),n,t,e,r,i,a]))}async function x(n,t,e){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=[u(n),n,t,e,r];return c(await f("buffer",i))}async function N(n,t,e,r,i,a){const o=[u(n),n,t,e,r,i,a];return c(await f("geodesicBuffer",o))}async function b(n,t){let e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=await f("nearestCoordinate",[u(n),n,t,e]);return{...r,coordinate:i.A.fromJSON(r.coordinate)}}async function q(n,t){const e=await f("nearestVertex",[u(n),n,t]);return{...e,coordinate:i.A.fromJSON(e.coordinate)}}function O(n){var t;return"xmin"in n?n.center:"x"in n?n:null===(t=n.extent)||void 0===t?void 0:t.center}async function Q(n,t,e){var r;if(null==n)throw new M;const i=n.spatialReference;if(null==(e=null!==(r=e)&&void 0!==r?r:O(n)))throw new M;const a=n.constructor.fromJSON(await f("rotate",[i,n,t,e]));return a.spatialReference=i,a}async function J(n,t,e,r){return c(await f("generalize",[u(n),n,t,e,r]))}async function j(n,t,e){return c(await f("densify",[u(n),n,t,e]))}async function C(n,t,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return c(await f("geodesicDensify",[u(n),n,t,e,r]))}function L(n,t){return f("planarArea",[u(n),n,t])}function Y(n,t){return f("planarLength",[u(n),n,t])}function Z(n,t,e){return f("geodesicArea",[u(n),n,t,e])}function k(n,t,e){return f("geodesicLength",[u(n),n,t,e])}class M extends Error{constructor(){super("Illegal Argument Exception")}}}}]);
//# sourceMappingURL=5811.3d90bd45.chunk.js.map