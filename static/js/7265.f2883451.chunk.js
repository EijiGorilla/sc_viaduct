"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[7265,4787,5617,3391],{54787:(e,t,n)=>{n.d(t,{c:()=>r,g:()=>a});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},35617:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>d});var r=n(76797),a=n(66388),i=n(19247),o=n(65215),c=n(23701);const d={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){const r=e.hasZ(t),a=e.hasM(t),o=new i.A({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return r&&(o.z=e.getPointZ(t)),a&&(o.m=e.getPointM(t)),o.cache._geVersion=t,o},exportPolygon:function(e,t,n){const r=new o.A({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportPolyline:function(e,t,n){const r=new c.A({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportMultipoint:function(e,t,n){const r=new a.A({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return r.cache._geVersion=t,r},exportExtent:function(e,t,n){const a=e.hasZ(t),i=e.hasM(t),o=new r.A({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(a){const n=e.getZExtent(t);o.zmin=n.vmin,o.zmax=n.vmax}if(i){const n=e.getMExtent(t);o.mmin=n.vmin,o.mmax=n.vmax}return o.cache._geVersion=t,o}}},63391:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>_,changeDefaultSpatialReferenceTolerance:()=>q,clearDefaultSpatialReferenceTolerance:()=>B,clip:()=>u,contains:()=>f,convexHull:()=>R,crosses:()=>l,cut:()=>s,densify:()=>H,difference:()=>M,disjoint:()=>G,distance:()=>p,equals:()=>h,extendedSpatialReferenceInfo:()=>d,flipHorizontal:()=>O,flipVertical:()=>k,generalize:()=>C,geodesicArea:()=>I,geodesicBuffer:()=>T,geodesicDensify:()=>J,geodesicLength:()=>X,intersect:()=>S,intersectLinesToPoints:()=>Y,intersects:()=>y,isSimple:()=>w,nearestCoordinate:()=>b,nearestVertex:()=>D,nearestVertices:()=>z,offset:()=>Z,overlaps:()=>x,planarArea:()=>N,planarLength:()=>j,relate:()=>m,rotate:()=>L,simplify:()=>v,symmetricDifference:()=>P,touches:()=>A,union:()=>V,within:()=>g});n(35238);var r=n(40565),a=n(52612),i=n(35617),o=n(13312);function c(e){const t=Array.isArray(e)?e[0].spatialReference:e.spatialReference;return t?(0,r.PZ)(o.A,t):o.A.WGS84}function d(e){return a.G.extendedSpatialReferenceInfo(e)}function u(e,t){return a.G.clip(i.hydratedAdapter,c(e),e,t)}function s(e,t){return a.G.cut(i.hydratedAdapter,c(e),e,t)}function f(e,t){return a.G.contains(i.hydratedAdapter,c(e),e,t)}function l(e,t){return a.G.crosses(i.hydratedAdapter,c(e),e,t)}function p(e,t,n){return a.G.distance(i.hydratedAdapter,c(e),e,t,n)}function h(e,t){return a.G.equals(i.hydratedAdapter,c(e),e,t)}function y(e,t){return a.G.intersects(i.hydratedAdapter,c(e),e,t)}function A(e,t){return a.G.touches(i.hydratedAdapter,c(e),e,t)}function g(e,t){return a.G.within(i.hydratedAdapter,c(e),e,t)}function G(e,t){return a.G.disjoint(i.hydratedAdapter,c(e),e,t)}function x(e,t){return a.G.overlaps(i.hydratedAdapter,c(e),e,t)}function m(e,t,n){return a.G.relate(i.hydratedAdapter,c(e),e,t,n)}function w(e){return a.G.isSimple(i.hydratedAdapter,c(e),e)}function v(e){return a.G.simplify(i.hydratedAdapter,c(e),e)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a.G.convexHull(i.hydratedAdapter,c(e),e,t)}function M(e,t){return a.G.difference(i.hydratedAdapter,c(e),e,t)}function P(e,t){return a.G.symmetricDifference(i.hydratedAdapter,c(e),e,t)}function S(e,t){return a.G.intersect(i.hydratedAdapter,c(e),e,t)}function V(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a.G.union(i.hydratedAdapter,c(e),e,t)}function Z(e,t,n,r,o,d){return a.G.offset(i.hydratedAdapter,c(e),e,t,n,r,o,d)}function _(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return a.G.buffer(i.hydratedAdapter,c(e),e,t,n,r)}function T(e,t,n,r,o,d){return a.G.geodesicBuffer(i.hydratedAdapter,c(e),e,t,n,r,o,d)}function b(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a.G.nearestCoordinate(i.hydratedAdapter,c(e),e,t,n)}function D(e,t){return a.G.nearestVertex(i.hydratedAdapter,c(e),e,t)}function z(e,t,n,r){return a.G.nearestVertices(i.hydratedAdapter,c(e),e,t,n,r)}function E(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent?.center??null:null}function L(e,t,n){if(null==e)throw new W;const r=e.spatialReference;if(null==(n=n??E(e)))throw new W;const i=e.constructor.fromJSON(a.G.rotate(e,t,n));return i.spatialReference=r,i}function O(e,t){if(null==e)throw new W;const n=e.spatialReference;if(null==(t=t??E(e)))throw new W;const r=e.constructor.fromJSON(a.G.flipHorizontal(e,t));return r.spatialReference=n,r}function k(e,t){if(null==e)throw new W;const n=e.spatialReference;if(null==(t=t??E(e)))throw new W;const r=e.constructor.fromJSON(a.G.flipVertical(e,t));return r.spatialReference=n,r}function C(e,t,n,r){return a.G.generalize(i.hydratedAdapter,c(e),e,t,n,r)}function H(e,t,n){return a.G.densify(i.hydratedAdapter,c(e),e,t,n)}function J(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return a.G.geodesicDensify(i.hydratedAdapter,c(e),e,t,n,r)}function N(e,t){return a.G.planarArea(i.hydratedAdapter,c(e),e,t)}function j(e,t){return a.G.planarLength(i.hydratedAdapter,c(e),e,t)}function I(e,t,n){return a.G.geodesicArea(i.hydratedAdapter,c(e),e,t,n)}function X(e,t,n){return a.G.geodesicLength(i.hydratedAdapter,c(e),e,t,n)}function Y(e,t){return a.G.intersectLinesToPoints(i.hydratedAdapter,c(e),e,t)}function q(e,t){a.G.changeDefaultSpatialReferenceTolerance(e,t)}function B(e){a.G.clearDefaultSpatialReferenceTolerance(e)}class W extends Error{constructor(){super("Illegal Argument Exception")}}}}]);
//# sourceMappingURL=7265.f2883451.chunk.js.map