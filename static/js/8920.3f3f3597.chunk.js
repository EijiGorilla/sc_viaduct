"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[8920],{11113:(t,e,o)=>{o.d(e,{Ee:()=>n,W4:()=>a,t_:()=>l,tr:()=>h,zJ:()=>s});var i=o(24648),r=o(96820);function s(t,e,o){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";return(0,r.zJ)(t,(0,i.kM)(e,o).value,o,s,n)}function n(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,r.Ee)(t,e.value,e.unit,o,i)}function a(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,r.W4)(t,e.value,e.unit,o,i)}function h(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,r.tr)(t,e.value,e.unit,o,i)}function l(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"abbr";return(0,r.t_)(t,e.value,e.unit,o,i)}},24648:(t,e,o)=>{o.d(e,{d_:()=>s,eY:()=>r,gT:()=>n,kM:()=>h});var i=o(31633);function r(t,e){return{type:(0,i.t$)(e),value:t,unit:e}}function s(t,e){return{type:(0,i.t$)(e),value:t,unit:e}}function n(t,e){return{type:(0,i.t$)(e),value:t,unit:e}}function a(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"arithmetic";return{type:(0,i.t$)(e),value:t,unit:e,rotationType:o}}function h(t,e){const o=function(t,e){return(0,i.oU)(t.value,t.unit,e)}(t,e);return"angle"===t.type?a(o,e,t.rotationType):r(o,e)}s(0,"meters"),n(0,"square-meters"),a(0,"radians"),a(0,"degrees")},96820:(t,e,o)=>{o.d(e,{Ee:()=>c,W4:()=>d,t_:()=>p,tr:()=>u,v7:()=>x,zJ:()=>l});var i=o(55877),r=(o(73582),o(15941)),s=(o(24648),o(88685)),n=o(31633),a=o(50265);function h(t,e,o){return t.units[e][o]}function l(t,e,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";return"".concat((0,a.ZV)(e,{minimumFractionDigits:i,maximumFractionDigits:i,signDisplay:e>0?"never":"exceptZero"})," ").concat(h(t,o,r))}function c(t,e,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const s=(0,n.x0)(e,o);return l(t,(0,n.oU)(e,o,s),s,i,r)}function d(t,e,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const s=(0,n.x$)(e,o);return l(t,(0,n.oU)(e,o,s),s,i,r)}function u(t,e,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const s=(0,n.OU)(e,o);return l(t,(0,n.oU)(e,o,s),s,i,r)}function p(t,e,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"abbr";const s=(0,n.y7)(e,o);return l(t,(0,n.oU)(e,o,s),s,i,r)}new Map;const _=["B","kB","MB","GB","TB"];function x(t,e){let o=0===(e=Math.round(e))?0:Math.floor(Math.log(e)/Math.log(i.u.KILOBYTES));o=(0,r.qE)(o,0,_.length-1);const n=(0,a.ZV)(e/i.u.KILOBYTES**o,{maximumFractionDigits:2});return(0,s.HC)(t.units.bytes[_[o]],{fileSize:n})}},19747:(t,e,o)=>{o.d(e,{c:()=>s});var i=o(31633),r=o(65308);function s(t){var e,o,s,n,a;const h="metric";if(null==t)return h;const l=t.map,c=null!==(e=l&&"portalItem"in l?null===(o=l.portalItem)||void 0===o?void 0:o.portal:null)&&void 0!==e?e:r.A.getDefault();switch(null!==(s=null===(n=c.user)||void 0===n?void 0:n.units)&&void 0!==s?s:c.units){case h:return h;case"english":return"imperial"}return null!==(a=(0,i.jM)(t.spatialReference))&&void 0!==a?a:h}},11020:(t,e,o)=>{o.d(e,{NB:()=>T,Rc:()=>R});var i=o(69539),r=o(88321),s=o(68134),n=o(76931),a=o(52007),h=o(45136),l=o(83670),c=o(69230),d=o(17072),u=o(35143),p=o(91967),_=o(46053),x=(o(40565),o(18690),o(81806),o(85842));o(27347);let v=t=>({vnodeSelector:"",properties:void 0,children:void 0,text:t.toString(),domNode:null}),g=(t,e,o)=>{for(let i=0,r=e.length;i<r;i++){let r=e[i];Array.isArray(r)?g(t,r,o):null!=r&&!1!==r&&("string"==typeof r&&(r=v(r)),o.push(r))}};function m(t,e,o){if(Array.isArray(e))o=e,e=void 0;else if(e&&("string"==typeof e||e.hasOwnProperty("vnodeSelector"))||o&&("string"==typeof o||o.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let i,r;return o&&1===o.length&&"string"==typeof o[0]?i=o[0]:o&&(r=[],g(t,o,r),0===r.length&&(r=void 0)),{vnodeSelector:t,properties:e,children:r,text:""===i?void 0:i,domNode:null}}o(48396);let f=class extends p.A{get startPosition(){return[this.startX,this.startY]}set startPosition(t){this._set("startX",t[0]),this._set("startY",t[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(t){this._set("endX",t[0]),this._set("endY",t[1])}constructor(t){super(t),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0,this.isDecoration=!0}get _strokeStyle(){const t=this.color;return"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(t[3],")")}get _lineCap(){return"round"}render(){const{height:t,left:e,top:o,width:i,x1:r,x2:s,y1:n,y2:a}=this._calculateCoordinates(y),h="stroke: ".concat(this._strokeStyle,"; stroke-width: ").concat(this.width,"; stroke-linecap: ").concat(this._lineCap,";");return m("div",{classes:{"esri-line-overlay-item":!0},styles:{left:e+"px",top:o+"px",width:i+"px",height:t+"px",visibility:this.visible?"visible":"hidden"}},[m("svg",{width:i,height:t},[m("line",{x1:r,y1:n,x2:s,y2:a,style:h})])])}renderCanvas(t){if(!this.visible)return;t.strokeStyle=this._strokeStyle,t.lineWidth=this.width,t.lineCap=this._lineCap;const e=this._calculateCoordinates(y);t.beginPath(),t.moveTo(e.left+e.x1,e.top+e.y1),t.lineTo(e.left+e.x2,e.top+e.y2),t.stroke()}_calculateCoordinates(t){const e=Math.min(this.startX,this.endX),o=Math.max(this.startX,this.endX),i=Math.min(this.startY,this.endY),r=Math.max(this.startY,this.endY),s=this.width;return t.left=e-s,t.top=i-s,t.width=o-e+2*s,t.height=Math.max(20,r-i+2*s),t.x1=this.startX-e+s,t.y1=this.startY-i+s,t.x2=this.endX-e+s,t.y2=this.endY-i+s,t}};(0,u._)([(0,_.MZ)()],f.prototype,"startX",void 0),(0,u._)([(0,_.MZ)()],f.prototype,"startY",void 0),(0,u._)([(0,_.MZ)()],f.prototype,"endX",void 0),(0,u._)([(0,_.MZ)()],f.prototype,"endY",void 0),(0,u._)([(0,_.MZ)()],f.prototype,"startPosition",null),(0,u._)([(0,_.MZ)()],f.prototype,"endPosition",null),(0,u._)([(0,_.MZ)()],f.prototype,"width",void 0),(0,u._)([(0,_.MZ)()],f.prototype,"color",void 0),(0,u._)([(0,_.MZ)()],f.prototype,"visible",void 0),(0,u._)([(0,_.MZ)()],f.prototype,"isDecoration",void 0),(0,u._)([(0,_.MZ)({readOnly:!0})],f.prototype,"_strokeStyle",null),f=(0,u._)([(0,x.$)("esri.views.overlay.LineOverlayItem")],f);const y={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},b=f,S={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};let w=class extends p.A{get position(){return[this.x,this.y]}set position(t){this._set("x",t[0]),this._set("y",t[1])}get _textShadowColor(){const{textColor:t,backgroundColor:e}=this,o=e.clone();return o.a*=t.a,o}get _textShadow(){const t=this._textShadowColor.toCss(!0);return"0 0 ".concat(this._textShadowSize,"px ").concat(t)}get _padding(){return.5*this.fontSize}get _borderRadius(){return this._padding}constructor(t){super(t),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this.isDecoration=!0,this.backgroundColor=new i.A([0,0,0,.6]),this.textColor=new i.A([255,255,255]),this._textShadowSize=1}render(){return m("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",lineHeight:this.fontSize+"px",backgroundColor:this.backgroundColor.toCss(!0),color:this.textColor.toCss(!0),padding:this._padding+"px",borderRadius:this._borderRadius+"px",textShadow:this._textShadow}},[this.text])}renderCanvas(t){if(!this.visible)return;const e=t.font.replace(/^(.*?)px/,"");t.font="".concat(this.fontSize,"px ").concat(e);const o=this._padding,i=this._borderRadius,r=t.measureText(this.text).width,s=this.fontSize,n=C[this.anchor];t.textAlign="center",t.textBaseline="middle";const a=r+2*o,h=s+2*o,l=this.x+n.x*a,c=this.y+n.y*h;this._roundedRect(t,l,c,a,h,i),t.fillStyle=this.backgroundColor.toCss(!0),t.fill();const d=this.x+(n.x+.5)*a,u=this.y+(n.y+.5)*h;this._renderTextShadow(t,this.text,d,u),t.fillStyle=this.textColor.toCss(!0),t.fillText(this.text,d,u)}_renderTextShadow(t,e,o,i){t.lineJoin="miter",t.fillStyle="rgba(".concat(this._textShadowColor.r,", ").concat(this._textShadowColor.g,", ").concat(this._textShadowColor.b,", ").concat(1/M.length,")");const r=this._textShadowSize;for(const[s,n]of M)t.fillText(e,o+r*s,i+r*n)}_roundedRect(t,e,o,i,r,s){t.beginPath(),t.moveTo(e,o+s),t.arcTo(e,o,e+s,o,s),t.lineTo(e+i-s,o),t.arcTo(e+i,o,e+i,o+s,s),t.lineTo(e+i,o+r-s),t.arcTo(e+i,o+r,e+i-s,o+r,s),t.lineTo(e+s,o+r),t.arcTo(e,o+r,e,o+r-s,s),t.closePath()}_cssClasses(){const t={"esri-text-overlay-item":!0};let e;for(e in S)t[S[e]]=this.anchor===e;return t}};(0,u._)([(0,_.MZ)()],w.prototype,"x",void 0),(0,u._)([(0,_.MZ)()],w.prototype,"y",void 0),(0,u._)([(0,_.MZ)()],w.prototype,"position",null),(0,u._)([(0,_.MZ)()],w.prototype,"text",void 0),(0,u._)([(0,_.MZ)()],w.prototype,"fontSize",void 0),(0,u._)([(0,_.MZ)()],w.prototype,"anchor",void 0),(0,u._)([(0,_.MZ)()],w.prototype,"visible",void 0),(0,u._)([(0,_.MZ)()],w.prototype,"isDecoration",void 0),(0,u._)([(0,_.MZ)()],w.prototype,"backgroundColor",void 0),(0,u._)([(0,_.MZ)()],w.prototype,"textColor",void 0),(0,u._)([(0,_.MZ)()],w.prototype,"_textShadowSize",void 0),(0,u._)([(0,_.MZ)()],w.prototype,"_textShadowColor",null),(0,u._)([(0,_.MZ)()],w.prototype,"_textShadow",null),(0,u._)([(0,_.MZ)()],w.prototype,"_padding",null),(0,u._)([(0,_.MZ)()],w.prototype,"_borderRadius",null),w=(0,u._)([(0,x.$)("esri.views.overlay.TextOverlayItem")],w);const C={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},M=[];{const t=16;for(let e=0;e<360;e+=360/t)M.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)])}const I=w;class T extends c.B{constructor(t){super(t),this._handles=new r.A,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._backgroundColor=new i.A([0,0,0,.6]),this._calloutColor=new i.A([0,0,0,.5]),this._textColor=new i.A([255,255,255]),this._distance=25,this._anchor="right",this.updatePositionOnCameraMove=!0,this.applyProperties(t)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this.updateLabelPosition()}get isDecoration(){return this._isDecoration}set isDecoration(t){this._isDecoration=t,this._textItem&&(this._textItem.isDecoration=t),this._calloutItem&&(this._calloutItem.isDecoration=t)}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){this._backgroundColor=t,this.attached&&(this._textItem.backgroundColor=this._backgroundColor)}get calloutColor(){return this._calloutColor}set calloutColor(t){this._calloutColor=t,this.attached&&(this._calloutItem.color=this._calloutColor.toRgba())}get textColor(){return this._textColor}set textColor(t){this._textColor=t,this.attached&&(this._textItem.textColor=this._textColor)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this.updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this.updateLabelPosition())}get _camera(){return this.view.state.cssCamera}overlaps(t){var e;return!!this.attached&&this.textItem.visible&&t.textItem.visible&&!(null===(e=this.view.overlay)||void 0===e||!e.overlaps(this._textItem,t.textItem))}updateLabelPosition(){if(!this.attached)return;this._showText=!1,this._showCallout=!1;const{geometry:t,view:e,visible:o}=this;if(null!=t&&e._stage)switch(t.type){case"point":if(!this._computeLabelPositionFromPoint(t.point,L))break;if(t.callout){const e=this._camera,o=t.callout.distance;(0,a.i)(Y,Y,[0,t.callout.offset]),e.renderToScreen(Y,L),(0,a.s)(D,0,1),(0,a.a)(D,D,o),(0,a.i)(D,D,Y),e.renderToScreen(D,X),this._showCallout=this._updatePosition(L,X)}else this._textItem.position=[L[0],L[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(t,this._distance,L,X))break;this._showCallout=this._updatePosition(L,X),this._showText=!0;break;case"segment":{if(!this._computeLabelPositionFromSegment(t,this._distance,this._anchor,L,X))break;this._showText=!0;const e=this._updatePosition(L,X);this._showCallout=!1!==t.callout&&e,this._showCallout||(this._textItem.anchor="center")}}this.updateVisibility(o)}_computeLabelPositionFromPoint(t,e){const o=this._camera;return o.projectToRenderScreen(t,Y),!(Y[2]<0||Y[2]>1)&&(o.renderToScreen(Y,e),!0)}_computeLabelPositionFromCorner(t,e,o,i){if(!t)return!1;const r=this._camera;return k(t.left,1,r,z),(0,a.n)(z,z),k(t.right,0,r,B),(0,a.i)(D,z,B),(0,a.n)(D,D),(0,a.e)(D,D),r.projectToRenderScreen(t.left.endRenderSpace,Y),!(Y[2]<0||Y[2]>1)&&(r.renderToScreen(Y,o),(0,a.a)(D,D,e),(0,a.i)(D,D,Y),r.renderToScreen(D,i),!0)}_computeLabelPositionFromSegment(t,e,o,i,r){if(!t)return!1;const s=t.segment,n=this._camera;(0,d.QO)(s.startRenderSpace,s.endRenderSpace,n,z),(0,a.s)(D,-z[1],z[0]);let h=!1;switch(o){case"top":h=D[1]<0;break;case"bottom":h=D[1]>0;break;case"left":h=D[0]>0;break;case"right":h=D[0]<0}if(h&&(0,a.n)(D,D),0===(0,a.h)(D))switch(o){case"top":D[1]=1;break;case"bottom":D[1]=-1;break;case"left":D[0]=-1;break;case"right":D[0]=1}return s.eval(G[t.sampleLocation],j),n.projectToRenderScreen(j,Y),!(Y[2]<0||Y[2]>1)&&(n.renderToScreen(Y,i),(0,a.a)(D,D,e),(0,a.i)(D,D,Y),n.renderToScreen(D,r),!0)}_updatePosition(t,e){if(e){const o=e[0]-t[0],i=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(o)>Math.abs(i)?o>0?"left":"right":i>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){var t;this._textItem=new I({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor,isDecoration:this._isDecoration}),this._calloutItem=new b({color:this._calloutColor.toRgba(),visible:!0,width:2,isDecoration:this._isDecoration}),this.updateLabelPosition(),null!==(t=this.view.overlay)&&void 0!==t&&t.items.addMany([this._textItem,this._calloutItem]),this.updatePositionOnCameraMove&&this._handles.add((0,s.wB)((()=>this.view.state.camera),(()=>this.updateLabelPosition())))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function k(t,e,o,i){t.eval(e,P,A),(0,h.g)(Z,P,A),o.projectToRenderScreen(P,F),o.projectToRenderScreen(Z,E),(0,a.c)(i,U,O),(0,a.e)(i,i)}function R(t){switch(t){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const P=(0,l.c)(),Z=(0,l.c)(),A=(0,l.c)(),z=(0,n.QG)(),B=(0,n.QG)(),D=(0,n.QG)(),j=(0,l.c)(),Y=(0,n.r_)(),L=(0,n.gs)(),X=(0,n.gs)(),F=(0,n.r_)(),O=F,E=(0,n.r_)(),U=E,G={start:0,center:.5,end:1}},25191:(t,e,o)=>{o.d(e,{C:()=>c,J:()=>d});var i=o(45136),r=o(83670),s=o(9624),n=o(98510),a=o(14487),h=o(75762),l=o(94966);class c{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,r.c)(),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,r.c)();this.startRenderSpace=t,this.endRenderSpace=e,this.type="euclidean"}eval(t,e,o){return(0,i.p)(e,this.startRenderSpace,this.endRenderSpace,t),o&&((0,i.f)(o,this.endRenderSpace,this.startRenderSpace),(0,i.n)(o,o)),e}createRenderGeometry(t,e){const o=[],r=[],s=(e,s)=>{const n=p;(0,i.f)(n,e,t),o.push([n[0],n[1],n[2]]),r.push([s[0],s[1],s[2]])},n=e.worldUpAtPosition(this.eval(.5,u),h.rq.get());return s(this.startRenderSpace,n),s(this.endRenderSpace,n),{points:o,normals:r}}static fromPositionAndVector(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,i.i)(u,e,o),(0,i.g)(u,t,u),new c((0,r.g)(t),(0,r.g)(u))}}class d{_projectIn(t,e){this._project?(0,a.F)(t,this.renderSpatialReference,e,this._pcpf):(0,i.c)(e,t)}constructor(t,e,o){this.startRenderSpace=t,this.endRenderSpace=e,this.renderSpatialReference=o,this.type="geodesic",this._start=(0,r.c)(),this._end=(0,r.c)(),this._pcpf=(0,n.lO)(o),this._project=(0,s.canProjectWithoutEngine)(o,this._pcpf),this._projectIn(t,this._start),this._projectIn(e,this._end)}eval(t,e,o){if(this._project)if(o){const r=p;(0,l.is)(this._start,this._end,t,e,r),(0,i.g)(_,e,r),(0,a.F)(e,this._pcpf,e,this.renderSpatialReference),(0,a.F)(_,this._pcpf,_,this.renderSpatialReference),(0,i.f)(o,_,e),(0,i.n)(o,o)}else(0,l.nu)(this._start,this._end,t,e),(0,a.F)(e,this._pcpf,e,this.renderSpatialReference);else(0,i.p)(e,this._start,this._end,t),o&&((0,i.f)(o,this._end,this._start),(0,i.n)(o,o));return e}createRenderGeometry(t,e){const o=[],r=[],s=(e,s)=>{const n=_;(0,i.f)(n,e,t),o.push([n[0],n[1],n[2]]),r.push([s[0],s[1],s[2]])};for(let i=0;i<128;++i){const t=i/127,o=u,r=p;this.eval(t,o),e.worldUpAtPosition(o,r),s(o,r)}return{points:o,normals:r}}}const u=(0,r.c)(),p=(0,r.c)(),_=(0,r.c)()},17072:(t,e,o)=>{o.d(e,{QO:()=>l,XG:()=>c,jq:()=>d});var i=o(76931),r=o(52007),s=o(45136),n=o(83670),a=o(18117),h=o(12482);function l(t,e,o,i){o.projectToRenderScreen(t,_),o.projectToRenderScreen(e,x),(0,r.c)(i,x,_),(0,r.e)(i,i)}function c(t,e,o,i){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:(0,n.c)();const a=(0,s.c)(p,t);return a[2]=(0,h.xS)(i,a,e,o)||0,i.renderCoordsHelper.toRenderCoords(a,e,r),r}function d(t,e,o,r){return"2d"===r.type?(u.x=t[0],u.y=t[1],u.spatialReference=e,r.toScreen(u)):(c(t,e,o,r,p),r.state.camera.projectToScreen(p,v),(0,i.tc)(v[0],v[1]))}const u=(0,a.T)(0,0,0,null),p=(0,n.c)(),_=(0,i.r_)(),x=(0,i.r_)(),v=(0,i.gs)()}}]);
//# sourceMappingURL=8920.3f3f3597.chunk.js.map