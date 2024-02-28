/*! For license information please see 5725.0be1bcef.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[5725],{75725:(e,t,i)=>{i.r(t),i.d(t,{CalciteValueListItem:()=>w,defineCustomElement:()=>k});var a=i(82108),s=i(84343),c=i(39879),n=i(66418),l=i(65079),o=i(76527),r=i(86420),d=i(65769),h=i(48897),u=i(67294),m=i(26964);const v="drag",g="actions-end",p="actions-start",b=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListItemChange=(0,a.lh)(this,"calciteListItemChange",6),this.calciteListItemRemove=(0,a.lh)(this,"calciteListItemRemove",7),this.calciteValueListItemDragHandleBlur=(0,a.lh)(this,"calciteValueListItemDragHandleBlur",6),this.pickListItem=null,this.guid="calcite-value-list-item-".concat((0,n.g)()),this.getPickListRef=e=>this.pickListItem=e,this.handleKeyDown=e=>{" "===e.key&&(this.handleActivated=!this.handleActivated)},this.handleBlur=()=>{this.handleActivated=!1,this.calciteValueListItemDragHandleBlur.emit({item:this.el,handle:this.handleEl})},this.handleSelectChange=e=>{this.selected=e.detail.selected},this.description=void 0,this.disabled=!1,this.deselectDisabled=!1,this.nonInteractive=!1,this.handleActivated=!1,this.icon=null,this.iconFlipRtl=!1,this.label=void 0,this.metadata=void 0,this.removable=!1,this.selected=!1,this.value=void 0}connectedCallback(){(0,s.c)(this),(0,l.c)(this)}disconnectedCallback(){(0,s.d)(this),(0,l.d)(this)}componentWillLoad(){(0,o.a)(this)}componentDidLoad(){(0,o.s)(this)}componentDidRender(){(0,l.u)(this,!!this.el.closest("calcite-value-list")&&"managed")}async toggleSelected(e){this.pickListItem.toggleSelected(e)}async setFocus(){var e;return await(0,o.c)(this),null===(e=this.pickListItem)||void 0===e?void 0:e.setFocus()}calciteListItemChangeHandler(e){e.detail.item=this.el}renderActionsEnd(){const{el:e}=this;return(0,c.g)(e,g)?(0,a.h)("slot",{name:g,slot:r.S.actionsEnd}):null}renderActionsStart(){const{el:e}=this;return(0,c.g)(e,p)?(0,a.h)("slot",{name:p,slot:r.S.actionsStart}):null}renderHandle(){const{icon:e,iconFlipRtl:t}=this;if(e===d.I.grip)return(0,a.h)("span",{class:{[r.C.handle]:!0,[r.C.handleActivated]:this.handleActivated},"data-js-handle":!0,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabindex:"0",ref:e=>this.handleEl=e},(0,a.h)("calcite-icon",{flipRtl:t,icon:v,scale:"s"}))}render(){return(0,a.h)(a.xr,{id:this.el.id||this.guid},this.renderHandle(),(0,a.h)("calcite-pick-list-item",{description:this.description,deselectDisabled:this.deselectDisabled,disabled:this.disabled,label:this.label,metadata:this.metadata,nonInteractive:this.nonInteractive,onCalciteListItemChange:this.handleSelectChange,removable:this.removable,selected:this.selected,value:this.value,ref:this.getPickListRef},this.renderActionsStart(),this.renderActionsEnd()))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{margin-block-end:1px;box-sizing:border-box;display:flex;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}:host *{box-sizing:border-box}calcite-pick-list-item{position:relative;margin:0px;flex-grow:1;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([active]),:host([selected]){--tw-shadow:0 0 0 1px var(--calcite-ui-brand);--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.handle{display:flex;cursor:move;align-items:center;justify-content:center;border-style:none;background-color:transparent;padding-block:0px;padding-inline:0.25rem;color:var(--calcite-ui-border-input);outline-color:transparent}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-value-list-item",{description:[513],disabled:[516],deselectDisabled:[4,"deselect-disabled"],nonInteractive:[516,"non-interactive"],handleActivated:[1028,"handle-activated"],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],label:[513],metadata:[16],removable:[516],selected:[1540],value:[8],toggleSelected:[64],setFocus:[64]},[[0,"calciteListItemChange","calciteListItemChangeHandler"]]]);function f(){if("undefined"===typeof customElements)return;["calcite-value-list-item","calcite-action","calcite-icon","calcite-loader","calcite-pick-list-item"].forEach((e=>{switch(e){case"calcite-value-list-item":customElements.get(e)||customElements.define(e,b);break;case"calcite-action":customElements.get(e)||(0,h.d)();break;case"calcite-icon":customElements.get(e)||(0,u.d)();break;case"calcite-loader":customElements.get(e)||(0,m.d)();break;case"calcite-pick-list-item":customElements.get(e)||(0,r.d)()}}))}f();const w=b,k=f},86420:(e,t,i)=>{i.d(t,{C:()=>v,P:()=>f,S:()=>b,d:()=>w});var a=i(82108),s=i(84343),c=i(39879),n=i(65079),l=i(76527),o=i(62785),r=i(76988),d=i(65769),h=i(48897),u=i(67294),m=i(26964);const v={actions:"actions",actionsEnd:"actions--end",actionsStart:"actions--start",description:"description",handle:"handle",handleActivated:"handle--activated",highlight:"highlight",icon:"icon",iconDot:"icon-dot",label:"label",remove:"remove",title:"title",textContainer:"text-container"},g="check",p="x",b={actionsEnd:"actions-end",actionsStart:"actions-start"},f=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListItemChange=(0,a.lh)(this,"calciteListItemChange",6),this.calciteListItemRemove=(0,a.lh)(this,"calciteListItemRemove",7),this.calciteInternalListItemPropsChange=(0,a.lh)(this,"calciteInternalListItemPropsChange",6),this.calciteInternalListItemValueChange=(0,a.lh)(this,"calciteInternalListItemValueChange",6),this.pickListClickHandler=e=>{this.disabled||this.deselectDisabled&&this.selected||this.nonInteractive||(this.shiftPressed=e.shiftKey,this.selected=!this.selected)},this.pickListKeyDownHandler=e=>{if(" "===e.key){if(e.preventDefault(),this.deselectDisabled&&this.selected||this.nonInteractive)return;this.selected=!this.selected}},this.removeClickHandler=()=>{this.calciteListItemRemove.emit()},this.description=void 0,this.disabled=!1,this.deselectDisabled=!1,this.nonInteractive=!1,this.icon=null,this.iconFlipRtl=!1,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.metadata=void 0,this.removable=!1,this.selected=!1,this.value=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}descriptionWatchHandler(){this.calciteInternalListItemPropsChange.emit()}labelWatchHandler(){this.calciteInternalListItemPropsChange.emit()}onMessagesChange(){}metadataWatchHandler(){this.calciteInternalListItemPropsChange.emit()}selectedWatchHandler(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed}),this.shiftPressed=!1}valueWatchHandler(e,t){this.calciteInternalListItemValueChange.emit({oldValue:t,newValue:e})}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}connectedCallback(){(0,n.c)(this),(0,o.c)(this),(0,r.c)(this),(0,s.c)(this)}async componentWillLoad(){await(0,r.s)(this),(0,l.a)(this)}componentDidLoad(){(0,l.s)(this)}disconnectedCallback(){(0,n.d)(this),(0,o.d)(this),(0,r.d)(this),(0,s.d)(this)}componentDidRender(){(0,n.u)(this,!!this.el.closest("calcite-pick-list")&&"managed")}async toggleSelected(e){this.selected="boolean"===typeof e?e:!this.selected}async setFocus(){var e;await(0,l.c)(this),null===(e=this.focusEl)||void 0===e||e.focus()}renderIcon(){const{icon:e,iconFlipRtl:t}=this;return e?(0,a.h)("span",{class:{[v.icon]:!0,[v.iconDot]:e===d.I.circle},onClick:this.pickListClickHandler},e===d.I.square?(0,a.h)("calcite-icon",{flipRtl:t,icon:g,scale:"s"}):null):null}renderRemoveAction(){return this.removable?(0,a.h)("calcite-action",{class:v.remove,icon:p,onClick:this.removeClickHandler,slot:b.actionsEnd,text:this.messages.remove}):null}renderActionsStart(){const{el:e}=this;return(0,c.g)(e,b.actionsStart)?(0,a.h)("div",{class:{[v.actions]:!0,[v.actionsStart]:!0}},(0,a.h)("slot",{name:b.actionsStart})):null}renderActionsEnd(){const{el:e,removable:t}=this;return(0,c.g)(e,b.actionsEnd)||t?(0,a.h)("div",{class:{[v.actions]:!0,[v.actionsEnd]:!0}},(0,a.h)("slot",{name:b.actionsEnd}),this.renderRemoveAction()):null}render(){const{description:e,label:t}=this;return(0,a.h)(a.FK,null,this.renderIcon(),this.renderActionsStart(),(0,a.h)("label",{"aria-label":t,class:v.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,tabIndex:0,ref:e=>this.focusEl=e},(0,a.h)("div",{"aria-checked":(0,c.t)(this.selected),class:v.textContainer,role:"menuitemcheckbox"},(0,a.h)("span",{class:v.title},t),e?(0,a.h)("span",{class:v.description},e):null)),this.renderActionsEnd())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{description:["descriptionWatchHandler"],label:["labelWatchHandler"],defaultMessages:["onMessagesChange"],messageOverrides:["onMessagesChange"],metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],value:["valueWatchHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return'@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{margin:0px;margin-block-end:1px;box-sizing:border-box;display:flex;align-items:stretch;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing);animation:calcite-fade-in var(--calcite-animation-timing)}:host *{box-sizing:border-box}.label{display:flex;flex:1 1 auto;cursor:pointer;align-items:center;background-color:transparent;outline-color:transparent}.label:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.label:hover{background-color:var(--calcite-ui-foreground-2)}:host([non-interactive]:hover){background-color:var(--calcite-ui-foreground-1)}:host([non-interactive]) .label,:host([non-interactive]) .icon{pointer-events:none}.icon{margin-block:0px;display:flex;cursor:pointer;align-items:center;padding:0.25rem;color:var(--calcite-ui-brand);flex:0 0 auto;line-height:0}.icon:hover{background-color:var(--calcite-ui-foreground-2)}.icon-dot{display:flex;inline-size:1.5rem;align-items:center;padding:0.5rem}.icon-dot:before{opacity:0;content:"\u2022"}.icon calcite-icon{opacity:0}:host([selected]) .icon-dot:before,:host([selected]) .icon calcite-icon{transition:opacity var(--calcite-animation-timing);opacity:1}.text-container{pointer-events:none;display:flex;flex-direction:column;flex-wrap:nowrap;overflow:hidden;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;word-wrap:break-word;word-break:break-word}.title{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.actions{margin:0px;display:flex;flex:0 1 auto;align-items:stretch;justify-content:flex-end}.actions--start~.label{padding-inline-start:0.25rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-pick-list-item",{description:[513],disabled:[516],deselectDisabled:[516,"deselect-disabled"],nonInteractive:[516,"non-interactive"],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],label:[513],messageOverrides:[1040],messages:[1040],metadata:[16],removable:[516],selected:[1540],value:[8],defaultMessages:[32],effectiveLocale:[32],toggleSelected:[64],setFocus:[64]}]);function w(){if("undefined"===typeof customElements)return;["calcite-pick-list-item","calcite-action","calcite-icon","calcite-loader"].forEach((e=>{switch(e){case"calcite-pick-list-item":customElements.get(e)||customElements.define(e,f);break;case"calcite-action":customElements.get(e)||(0,h.d)();break;case"calcite-icon":customElements.get(e)||(0,u.d)();break;case"calcite-loader":customElements.get(e)||(0,m.d)()}}))}w()},65769:(e,t,i)=>{i.d(t,{C:()=>a,I:()=>s,S:()=>c});const a={sticky:"sticky-pos"};var s;!function(e){e.circle="circle",e.square="square",e.grip="grip"}(s||(s={}));const c={menuActions:"menu-actions"}}}]);
//# sourceMappingURL=5725.0be1bcef.chunk.js.map