"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[530],{62315:(e,t,r)=>{r.d(t,{A:()=>f});var i=r(35143),n=(r(35238),r(69098)),o=r(73582),s=r(42553),a=r(30726),c=r(46053),d=r(21403),l=(r(47249),r(81806),r(85842)),u=r(40565),g=r(37546),h=r(19247);let p=class extends((0,n.O)(s.oY)){constructor(e){super(e),this.type="plane",this.position=null,this.heading=0,this.tilt=0,this.width=10,this.height=10}equals(e){return this.heading===e.heading&&this.tilt===e.tilt&&(0,a.CM)(this.position,e.position)&&this.width===e.width&&this.height===e.height}};(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1,write:!0}})],p.prototype,"type",void 0),(0,i._)([(0,c.MZ)({type:h.A}),(0,g.P)()],p.prototype,"position",void 0),(0,i._)([(0,c.MZ)({type:Number,nonNullable:!0,range:{min:0,max:360}}),(0,g.P)(),(0,d.w)((e=>o.ie.normalize((0,u.GB)(e),0,!0)))],p.prototype,"heading",void 0),(0,i._)([(0,c.MZ)({type:Number,nonNullable:!0,range:{min:0,max:360}}),(0,g.P)(),(0,d.w)((e=>o.ie.normalize((0,u.GB)(e),0,!0)))],p.prototype,"tilt",void 0),(0,i._)([(0,c.MZ)({type:Number,nonNullable:!0}),(0,g.P)()],p.prototype,"width",void 0),(0,i._)([(0,c.MZ)({type:Number,nonNullable:!0}),(0,g.P)()],p.prototype,"height",void 0),p=(0,i._)([(0,l.$)("esri.analysis.SlicePlane")],p);const f=p},48678:(e,t,r)=>{r.d(t,{S:()=>h,b:()=>g});var i,n,o=r(57528),s=r(3799),a=r(58350),c=r(21390),d=r(64839),l=r(32307),u=r(66470);function g(e){const t=new l.N5,{vertex:r,fragment:g,attributes:h,varyings:p}=t;return(0,s.NB)(r,e),h.add(u.r.POSITION,"vec3"),h.add(u.r.UV0,"vec2"),p.add("vUV","vec2"),r.code.add((0,d.H)(i||(i=(0,o.A)(["void main(void) {\nvUV = uv0;\ngl_Position = proj * view * vec4(position, 1.0);\n}"])))),g.uniforms.add(new a.E("backgroundColor",(e=>e.backgroundColor)),new a.E("gridColor",(e=>e.gridColor)),new c.m("gridWidth",(e=>e.gridWidth))),g.code.add((0,d.H)(n||(n=(0,o.A)(["void main() {\nconst float LINE_WIDTH = 1.0;\nvec2 uvScaled = vUV * gridWidth;\nvec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));\nvec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);\ngrid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);\ngrid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);\nfloat gridFade = max(grid.x, grid.y);\nfloat gridAlpha = gridColor.a * gridFade;\nfragColor =\nvec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +\nvec4(gridColor.rgb, 1.0) * gridAlpha;\n}"])))),t}const h=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}))},67169:(e,t,r)=>{r.d(t,{b:()=>f});var i=r(69539),n=r(68134),o=r(9392),s=r(93131),a=r(77654),c=r(56121),d=r(38317),l=r(91175),u=r(62577),g=r(45463),h=r(425),p=r(76336);class f extends c.q{constructor(e,t){const r=(0,a.wZ)(t),o=r?s.aj:s.YG,c=o*s.UF,l=s.YG,u={renderOccluded:g.m$.OccludeAndTransparent,isDecoration:!0},p=new h.W({...u,width:o}),f=new h.W({...u,width:c}),m=new h.W({...u,width:l});super({view:e,...d.MO,...b({isCorner:r,unfocusedMaterial:p,focusedMaterial:f,outlineMaterial:m})}),this._themeHandle=(0,n.wB)((()=>e.effectiveTheme.accentColor),(e=>{const t=i.A.toUnitRGBA(e);p.setParameters({color:t}),f.setParameters({color:t}),m.setParameters({color:t})}),n.Vh)}destroy(){this._themeHandle.remove(),super.destroy()}}function b(e){let{isCorner:t,unfocusedMaterial:r,focusedMaterial:i,outlineMaterial:n}=e;const c=t?[(0,o.fA)(1,0,0),(0,o.fA)(0,0,0),(0,o.fA)(0,1,0)]:[(0,o.fA)(1,0,0),(0,o.fA)(-1,0,0)];return{renderObjects:[new l.M((0,u.Z8)(r,c),p.p7.Unfocused|a.oc),new l.M((0,u.Z8)(i,c),p.p7.Focused|a.oc),new l.M((0,u.Z8)(n,c),a.zm)],collisionType:{type:"line",paths:[c]},radius:t?s.E3:s.sd,state:a.oc}}},78136:(e,t,r)=>{r.d(t,{Q:()=>_});var i=r(69539),n=r(59784),o=r(68134),s=r(77654),a=r(56121),c=r(38317),d=r(91175),l=r(50468),u=r(51799),g=r(62577),h=r(45463),p=r(66470),f=r(77447),b=r(425),m=r(76336);class _ extends a.q{constructor(e,t){const r=new f.r({transparent:!0,writeDepth:!1,renderOccluded:h.m$.Opaque,isDecoration:!0}),s=c.eO.calloutWidth,a=new b.W({width:s,renderOccluded:h.m$.OccludeAndTransparent,isDecoration:!0});super({view:e,...w({imageMaterial:r,calloutMaterial:a})}),this._currentTexture=null,this._themeHandle=(0,o.wB)((()=>e.effectiveTheme.accentColor),(e=>{const o=(0,n._L)(e,.5),s=(0,n.bJ)(e),c=this._currentTexture,d=t(o,s);r.setParameters({textureId:d.texture.id}),a.setParameters({color:i.A.toUnitRGBA(e)}),this._currentTexture=d,null===c||void 0===c||c.release()}),o.Vh)}destroy(){var e;this._themeHandle.remove(),null!==(e=this._currentTexture)&&void 0!==e&&e.release(),super.destroy()}}function w(e){let{imageMaterial:t,calloutMaterial:r}=e;const{focusMultiplier:i,calloutLength:n,discRadius:o}=c.eO,a=o*i,h=(e,t)=>{const r=[0,1,2,2,3,0];return new u.V(t,[[p.r.POSITION,new l.n([n-e,-e,0,n+e,-e,0,n+e,e,0,n-e,e,0],r,3,!0)],[p.r.UV0,new l.n([0,0,1,0,1,1,0,1],r,2,!0)]])},f=(0,g.Z8)(r,[[0,0,0],[n-o,0,0]]),b=(0,g.Z8)(r,[[0,0,0],[n-a,0,0]]),_=s.s5;return{autoScaleRenderObjects:!1,collisionPriority:1,collisionType:{type:"disc",direction:[0,0,1],offset:[n,0,0]},focusMultiplier:i,radius:o,renderObjects:[new d.M(h(o,t),m.p7.Unfocused|_),new d.M(f,m.p7.Unfocused|_),new d.M(h(a,t),m.p7.Focused|_),new d.M(b,m.p7.Focused|_)],state:_}}},20205:(e,t,r)=>{r.d(t,{r:()=>i,x:()=>M});var i,n,o=r(69539),s=r(59784),a=r(68134),c=r(34761),d=r(13191),l=r(60008),u=r(20664),g=r(9392),h=r(75762),p=r(93131),f=r(77654),b=r(56121),m=r(91175),_=r(83490),w=r(62577),A=r(45463),v=r(76956),T=r(425),O=r(76336);(n=i||(i={}))[n.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT",n[n.CENTER_ON_ARROW=1]="CENTER_ON_ARROW";class M extends b.q{constructor(e,t){const r=new T.W({width:1,renderOccluded:A.m$.OccludeAndTransparent,isDecoration:!0}),i=new v.v({cullFace:_.s2.Back,renderOccluded:A.m$.Opaque,isDecoration:!0}),n=new v.v({cullFace:_.s2.Back,renderOccluded:A.m$.Opaque,isDecoration:!0}),c=new v.v({cullFace:_.s2.Back,renderOccluded:A.m$.Opaque,isDecoration:!0}),d=new v.v({writeDepth:!1,cullFace:_.s2.Front,renderOccluded:A.m$.Transparent,isDecoration:!0});super({view:e,...E({offsetMode:t,tubeMaterial:i,tipMaterial:n,capMaterial:c,outlineMaterial:d,calloutMaterial:r})}),this._themeHandle=(0,a.wB)((()=>e.effectiveTheme.accentColor),(e=>{const t=(0,s.bJ)(e),a=o.A.toUnitRGBA(e),l=o.A.toUnitRGBA(t),u=o.A.toUnitRGBA(o.A.blendColors(t,e,.4)),g=o.A.toUnitRGBA(o.A.blendColors(t,e,.14));r.setParameters({color:a}),i.setParameters({color:g}),n.setParameters({color:l}),c.setParameters({color:u}),d.setParameters({color:a})}),a.Vh)}destroy(){this._themeHandle.remove(),super.destroy()}}function E(e){let{offsetMode:t,tubeMaterial:r,tipMaterial:n,capMaterial:o,outlineMaterial:s,calloutMaterial:a}=e;const c=t===i.CENTER_ON_CALLOUT?p.I4:0,d=[(0,g.fA)(c,0,-p.vA/2),(0,g.fA)(c,0,p.vA/2)],l=function(e,t){const r=(0,u.f)((0,g.vt)(),e[e.length-1],e[e.length-2]);(0,u.n)(r,r),(0,u.j)(r,r,p.xj),(0,u.g)(r,r,e[e.length-1]);{const t=(0,u.f)((0,g.vt)(),e[0],e[1]);return(0,u.n)(t,t),(0,u.j)(t,t,p.xj),(0,u.g)(t,t,e[0]),[t,...e,r]}}(d),h=I({vertices:d,padding:0,materials:{tube:r,tip:n,cap:o}}),b=I({vertices:d,padding:p.D9,materials:{tube:s,tip:s,cap:s}}),_=(0,w.Z8)(a,[[c,0,0],[c-p.I4,0,0]]),A=(0,w.Z8)(a,[[c,0,0],[c-p.I4,0,0]]);return{renderObjects:[...h.normal.map((e=>new m.M(e,O.p7.Unfocused|f.s5))),...b.normal.map((e=>new m.M(e,O.p7.Unfocused|f.s5))),new m.M(_,O.p7.Unfocused|f.s5|f.xM),...h.focused.map((e=>new m.M(e,O.p7.Focused|f.s5))),...b.focused.map((e=>new m.M(e,O.p7.Focused|f.s5))),new m.M(A,O.p7.Focused|f.s5|f.xM)],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[l]},collisionPriority:1,radius:p.rb,state:f.s5}}function I(e){let{vertices:t,padding:r,materials:i}=e;const n=e=>{const n=t.slice(0),o=(0,u.f)(h.rq.get(),n[0],n[1]);(0,u.n)(o,o);const s=(0,u.f)(h.rq.get(),n[n.length-1],n[n.length-2]);if((0,u.n)(s,s),r>0){const e=(0,u.j)((0,g.vt)(),s,-r);n[n.length-1]=(0,u.g)(e,e,n[n.length-1]);const t=(0,u.j)((0,g.vt)(),o,-r);n[0]=(0,u.g)(t,t,n[0])}const a=e?p.cE:1,f=p.xj*a,b=p.rb*a,m=(0,c.D_)(h.Rc.get());if(r>0){const e=f/4,t=(0,u.s)(h.rq.get(),0,e,0),i=1+r/e;(0,c.Tl)(m,m,t),(0,c.hs)(m,m,(0,u.s)(h.rq.get(),i,i,i)),(0,c.Tl)(m,m,(0,u.j)(t,t,-1/i))}const _=(0,c.D_)((0,d.vt)()),A=(0,g.fA)(0,1,0),v=(0,c.I0)((0,d.vt)(),(0,l.Yc)(h.J8.get(),A,s));v[12]=n[n.length-1][0],v[13]=n[n.length-1][1],v[14]=n[n.length-1][2],(0,c.lw)(v,v,m);const T=i.tube,O=function(e,t,r){const i=[],n=12;for(let o=0;o<n;o++){const t=o/n*2*Math.PI;i.push([Math.cos(t)*e,Math.sin(t)*e])}return(0,w.Nq)(r,i,t,[],[],!1)}(p.qD*(e?p.FF:1)+r,n,T);O.transformation=_;const M=[O],E=i.tip,I=(0,w.EE)(E,f,b,24,!1,!1,!0);I.transformation=v,M.push(I);const C=i.cap,R=(0,w.EE)(C,f,b,24,!1,!0,!1);R.transformation=v,M.push(R);const P=(0,c.I0)((0,d.vt)(),(0,l.Yc)(h.J8.get(),A,o));return P[12]=n[0][0],P[13]=n[0][1],P[14]=n[0][2],(0,c.lw)(P,P,m),M.push(I.instantiate({transformation:P})),M.push(R.instantiate({transformation:P})),M};return{normal:n(!1),focused:n(!0)}}},56332:(e,t,r)=>{r.d(t,{E$:()=>n,Or:()=>o,qb:()=>s});var i=r(59784);const n=(0,r(55855).fA)(0,0,0,.04);function o(e){let{accentColor:t}=e;return(0,i.f6)(t,.5)}function s(e){let{accentColor:t}=e;return(0,i.f6)(t,.7)}},77654:(e,t,r)=>{r.d(t,{s5:()=>ve,xM:()=>Me,CB:()=>Te,pu:()=>Oe,h7:()=>ne,Yx:()=>he,DI:()=>re,PI:()=>be,tn:()=>fe,FK:()=>ee,W6:()=>oe,r_:()=>ie,wZ:()=>pe,fE:()=>Pe,d0:()=>me,Md:()=>we,bR:()=>Ae,oc:()=>Ce,zm:()=>Re,xQ:()=>te,gi:()=>ae,d8:()=>ce,Oj:()=>de,vJ:()=>se});r(35238);var i=r(62315),n=(r(81806),r(76460)),o=r(15941),s=r(76931),a=r(34761),c=r(20664),d=r(9392),l=r(9624),u=r(5568),g=r(79650),h=r(13927),p=r(95925),f=r(96190),b=r(75762),m=r(56332),_=r(93131),w=r(17430),A=r(38317),v=r(7256),T=r(43047),O=r(55855),M=r(32314),E=r(62577),I=r(45463),C=r(34981),R=r(99415),P=r(59696),q=r(77730),N=r(82809),S=r(86401),L=r(63928),y=r(64839),j=r(16506),x=r(42693),U=r(32119),V=r(28584),W=r(48678),D=r(93345),k=r(57162);class H extends y.Y{constructor(){super(...arguments),this.backgroundColor=(0,O.fA)(1,0,0,.5),this.gridColor=(0,O.fA)(0,1,0,.5),this.gridWidth=4}}class G extends x.w{initializeProgram(e){return new V.B(e.rctx,G.shader.get().build(this.configuration),U.D)}initializePipeline(){return(0,k.Ey)({blending:(0,k.p3)(D.dn.ONE,D.dn.ONE,D.dn.ONE_MINUS_SRC_ALPHA,D.dn.ONE_MINUS_SRC_ALPHA),depthTest:{func:D.MT.LESS},colorWrite:k.wE})}}G.shader=new j.$(W.S,(()=>r.e(3744).then(r.bind(r,3744))));class Z extends L.W{constructor(e){super(e,new F),this.produces=new Map([[q.N.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>e===C.V.Color]]),this._configuration=new R.K}createBufferWriter(){return new N.Z(S.zK)}createGLMaterial(e){return new B(e)}getConfiguration(){return this._configuration}}class B extends P.A{constructor(e){super(e),this.ensureTechnique(G,null)}beginSlot(){return this.technique}}class F extends H{constructor(){super(...arguments),this.renderOccluded=I.m$.Occlude,this.isDecoration=!1}}class $ extends M.X{constructor(e){super(e),this._material=null,this._renderOccluded=I.m$.OccludeAndTransparent,this._gridWidth=1,this._gridColor=(0,O.fA)(1,0,0,1),this._backgroundColor=(0,O.fA)(1,0,0,1),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get gridWidth(){return this._gridWidth}set gridWidth(e){this._gridWidth!==e&&(this._gridWidth=e,this._updateMaterial())}get gridColor(){return this._gridColor}set gridColor(e){(0,T.c)(this._gridColor,e),this._updateMaterial()}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){(0,T.c)(this._backgroundColor,e),this._updateMaterial()}createExternalResources(){this._material=new Z(this._materialParameters)}destroyExternalResources(){this._material=null}forEachExternalMaterial(e){null!=this._material&&e(this._material)}createGeometries(e){if(null!=this._material){const t=(0,E.Gj)(this._material);e.addGeometry(t)}}get _materialParameters(){return{backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){null!=this._material&&this._material.setParameters(this._materialParameters)}}var Y,J,z=r(74487),X=r(37431),K=r(76336),Q=r(19247);r(76797);function ee(e,t,r,i,n,o,s,a){return function(e,t,r,i,n,o){const s=(0,c.m)(e,t),a=b.rq.get(),d=b.rq.get();switch(i===Oe.HORIZONTAL_OR_VERTICAL?Math.abs(s)>_.lS?Oe.HORIZONTAL:Oe.VERTICAL:i){case Oe.VERTICAL:{const i=Math.abs(s)<=_.Ll?e:r.viewUp;(0,c.b)(a,i,t),(0,c.c)(d,t);break}case Oe.HORIZONTAL:(0,c.b)(a,r.viewUp,t),(0,c.b)(d,t,a);break;case Oe.TILTED:{const i=Math.abs(s)<=_.Ll?t:r.viewUp;(0,c.b)(a,i,e),(0,c.b)(d,e,a);break}}const l=(0,c.b)(b.rq.get(),a,d);(0,c.m)(l,r.viewForward)>0&&(0,c.j)(d,d,-1),(0,c.n)(n,a),(0,c.n)(o,d)}(t,s.worldUpAtPosition(e,b.rq.get()),n,o,a.basis1,a.basis2),(0,c.j)(a.basis1,a.basis1,r),(0,c.j)(a.basis2,a.basis2,i),(0,c.c)(a.origin,e),(0,h.mR)(a.basis2,a.basis1,a.origin,a.plane),a}function te(e,t,r,i,n,o){const s=(0,c.c)(b.rq.get(),n.origin);(0,c.g)(s,s,(0,c.j)(b.rq.get(),n.basis1,e.direction[0]<0?1:-1)),(0,c.g)(s,s,(0,c.j)(b.rq.get(),n.basis2,e.direction[1]<0?1:-1));const a=(0,c.l)(n.basis1),d=(0,c.l)(n.basis2),l=(0,c.f)(b.rq.get(),r,s),u=(0,c.f)(b.rq.get(),t,s);let h=0,p=0;if(pe(e)){const t=he(n),r=he(o);h=a-.5*e.direction[0]*(0,c.m)(n.basis1,u)/a,p=d-.5*e.direction[1]*(0,c.m)(n.basis2,u)/d;const i=r/t;h*=i,p*=i}const f=h+.5*e.direction[0]*(0,c.m)(n.basis1,l)/a,m=p+.5*e.direction[1]*(0,c.m)(n.basis2,l)/d,w=(0,c.j)(b.rq.get(),n.basis1,f/a),A=(0,c.j)(b.rq.get(),n.basis2,m/d);(f<=0||ue(o.origin,w,i)<=_.Sw)&&(0,c.c)(w,o.basis1),(m<=0||ue(o.origin,A,i)<=_.Sw)&&(0,c.c)(A,o.basis2);const v=(0,c.c)(b.rq.get(),s);return(0,c.g)(v,v,(0,c.j)(b.rq.get(),w,e.direction[0]<0?-1:1)),(0,c.g)(v,v,(0,c.j)(b.rq.get(),A,e.direction[1]<0?-1:1)),(0,g.f)(v,w,A,o)}function re(e,t){return _.aE*Math.min(t.width,t.height)*t.computeRenderPixelSizeAt(e)}function ie(e,t,r,i){const n=(0,c.b)(b.rq.get(),t,r);return(0,c.b)(n,n,t),(0,h.O_)(e,n,i)}function ne(e,t){return(0,A.wQ)(e.basis1,e.basis2,e.origin,t)}function oe(e,t,r,i){const n=t.worldUpAtPosition(e.origin,b.rq.get()),o=b.rq.get();switch(r){case Te.HEADING:(0,c.c)(o,n);break;case Te.TILT:(0,c.c)(o,e.basis1)}return(0,h.O_)(e.origin,o,i)}function se(e,t,r,i){const n=le(r,Y.NEGATIVE_X),o=b.Rc.get();(0,a.Qr)(o,t,n.edge*Math.PI/2);const l=(0,c.n)(b.rq.get(),n.basis);let u=(0,c.j)(b.rq.get(),l,n.direction*i.computeScreenPixelSizeAt(n.position)*_.I4);(0,c.g)(u,u,n.position);const h=i.projectToRenderScreen(u,(0,s.sc)(b.rq.get())),p=function(e,t){const[r,i,n,o]=e.viewport,s=Math.min(n,o)/16;let a=!0;return t[0]<r+s?(t[0]=r+s,a=!1):t[0]>r+n-s&&(t[0]=r+n-s,a=!1),t[1]<i+s?(t[1]=i+s,a=!1):t[1]>i+o-s&&(t[1]=i+o-s,a=!1),a}(i,h);(0,X.RI)(i,h,Ee),(0,c.n)(Ee.direction,Ee.direction);const f=b.rq.get();!p&&(0,g.i)(r,Ee,f)&&(u=f),o[12]=0,o[13]=0,o[14]=0,e.modelTransform=o,e.renderLocation=(0,d.o8)(u),p?e.state|=Me:e.state&=~Me}function ae(e,t,r,i){const n=(0,c.l)(i.basis1),o=(0,c.l)(i.basis2),s=ge(i),d=he(i),l=(0,c.s)(b.rq.get(),0,0,0);(0,c.g)(l,(0,c.j)(b.rq.get(),i.basis1,t.direction[0]),(0,c.j)(b.rq.get(),i.basis2,t.direction[1])),(0,c.g)(l,i.origin,l);let u=0,g=1;if(pe(t))1===t.direction[0]&&-1===t.direction[1]?u=Ie:1===t.direction[0]&&1===t.direction[1]?u=Math.PI:-1===t.direction[0]&&1===t.direction[1]&&(u=3*Math.PI/2),g=d;else{const e=0!==t.direction[0]?1:2;u=1===e?Ie:0,g=(1===e?o:n)-s}const h=(0,a.N9)(b.Rc.get(),u);(0,a.hs)(h,h,(0,c.s)(b.rq.get(),g,g,g)),(0,a.lw)(h,r,h),h[12]=0,h[13]=0,h[14]=0,e.modelTransform=h,e.renderLocation=l}function ce(e,t,r,i){const n=i.worldUpAtPosition(r.origin,b.rq.get()),o=le(r,Y.POSITIVE_X),s=(0,a.N9)(b.Rc.get(),o.edge*Math.PI/2);(0,a.eL)(s,s,-_e(r,n)),(0,a.lw)(s,t,s),s[12]=0,s[13]=0,s[14]=0,e.modelTransform=s,e.renderLocation=o.position}function de(e,t,r){const i=le(r,Y.POSITIVE_Y),n=(0,a.N9)(b.Rc.get(),i.edge*Math.PI/2);(0,a.eL)(n,n,Ie),(0,a.lw)(n,t,n),n[12]=0,n[13]=0,n[14]=0,e.modelTransform=n,e.renderLocation=i.position}function le(e,t){switch(t){case Y.POSITIVE_X:return{basis:e.basis1,direction:1,position:(0,c.g)(b.rq.get(),e.origin,e.basis1),edge:t};case Y.POSITIVE_Y:return{basis:e.basis2,direction:1,position:(0,c.g)(b.rq.get(),e.origin,e.basis2),edge:t};case Y.NEGATIVE_X:return{basis:e.basis1,direction:-1,position:(0,c.f)(b.rq.get(),e.origin,e.basis1),edge:t};case Y.NEGATIVE_Y:return{basis:e.basis2,direction:-1,position:(0,c.f)(b.rq.get(),e.origin,e.basis2),edge:t}}}function ue(e,t,r){const i=r.projectToRenderScreen((0,c.g)(b.rq.get(),e,t),(0,s.sc)(b.rq.get())),n=r.projectToRenderScreen((0,c.f)(b.rq.get(),e,t),(0,s.sc)(b.rq.get()));return(0,c.q)((0,c.f)(i,i,n))}function ge(e){const t=(0,c.l)(e.basis1),r=(0,c.l)(e.basis2);return _.Jj*Math.min(t,r)}function he(e){return ge(e)}function pe(e){return 0!==e.direction[0]&&0!==e.direction[1]}function fe(e){return new v.t({view:e,attached:!1,color:(0,m.qb)(e.effectiveTheme),width:_.NT,renderOccluded:I.m$.OccludeAndTransparent,geometry:[[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]],isDecoration:!0})}function be(e){return new $({view:e,attached:!1,backgroundColor:m.E$,gridColor:(0,m.Or)(e.effectiveTheme),gridWidth:4,renderOccluded:I.m$.OccludeAndTransparent,isDecoration:!0})}function me(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new i.A;if(null==e)return null;const{renderCoordsHelper:s}=t,a=s.fromRenderCoords(e.origin,new Q.A({spatialReference:t.spatialReference}));if(null==a)return null;const d=(0,l.tryProjectWithZConversion)(a,r);if(null==d)return null;n.position=d;const u=2*(0,c.l)(e.basis1),g=2*(0,c.l)(e.basis2),h=z.d.renderUnitScaleFactor(t.spatialReference,r);n.width=u*h,n.height=g*h;const p=s.worldUpAtPosition(e.origin,b.rq.get());return n.tilt=(0,o.KJ)(_e(e,p)),n.heading=s.headingAtPosition(e.origin,e.basis1)-90,n}function _e(e,t){return(0,f.EJ)(t,e.basis2,e.basis1)+Ie}function we(e,t){if(null==(null===e||void 0===e?void 0:e.position))return null;const r=(0,w.B)(e.position,t.spatialReference,t.elevationProvider);if(null==r)return null;const i=z.d.renderUnitScaleFactor(e.position.spatialReference,t.spatialReference),n=e.width*i,o=e.height*i;return{position:r,heading:e.heading,tilt:e.tilt,renderWidth:n,renderHeight:o}}function Ae(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(0,g.a)();if(null==e)return null;const s=function(e,t,r,i,s,a){let d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:(0,g.a)();return a.toRenderCoords(e,d.origin)?(a.worldBasisAtPosition(d.origin,u._.X,d.basis1),a.worldBasisAtPosition(d.origin,u._.Y,d.basis2),(0,h.mR)(d.basis2,d.basis1,d.origin,d.plane),(0,g.r)(d,-(0,o.kU)(t),(0,g.n)(d),d),(0,g.r)(d,(0,o.kU)(r),d.basis1,d),(0,c.j)(d.basis1,d.basis1,i/2),(0,c.j)(d.basis2,d.basis2,s/2),(0,g.u)(d),d):(n.A.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error("Failed to project slice plane position, projection from ".concat(e.spatialReference.wkid," is not supported")),null)}(e.position,e.heading,e.tilt,e.renderWidth,e.renderHeight,t.renderCoordsHelper,i);return r.tiltEnabled||null==s||function(e,t,r){const i=t.worldUpAtPosition(e.origin,b.rq.get()),n=e.basis1,o=_e(e,i),s=Math.round(o/Ie)*Ie;(0,g.r)(e,s-o,n,r)}(s,t.renderCoordsHelper,s),s}(J=Y||(Y={}))[J.POSITIVE_X=0]="POSITIVE_X",J[J.POSITIVE_Y=1]="POSITIVE_Y",J[J.NEGATIVE_X=2]="NEGATIVE_X",J[J.NEGATIVE_Y=3]="NEGATIVE_Y";const ve=K.SJ.Custom1;var Te,Oe;!function(e){e[e.HEADING=1]="HEADING",e[e.TILT=2]="TILT"}(Te||(Te={})),function(e){e[e.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL",e[e.HORIZONTAL=1]="HORIZONTAL",e[e.VERTICAL=2]="VERTICAL",e[e.TILTED=3]="TILTED"}(Oe||(Oe={}));const Me=K.SJ.Custom2,Ee=(0,p.vt)(),Ie=Math.PI/2,Ce=K.SJ.Custom1,Re=K.SJ.Custom2;function Pe(e){return null!=("building-scene-3d"===e.type?e:null)}}}]);
//# sourceMappingURL=530.901f1ca5.chunk.js.map