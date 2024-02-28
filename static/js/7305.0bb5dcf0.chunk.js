/*! For license information please see 7305.0bb5dcf0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_viaduct=self.webpackChunksc_viaduct||[]).push([[7305],{87305:(e,t,i)=>{i.r(t),i.d(t,{CalciteTree:()=>c,defineCustomElement:()=>d});var l=i(82108),s=i(39879);function n(e){return"CALCITE-TREE-ITEM"===(null===e||void 0===e?void 0:e.tagName)}const r=(0,l.w$)(class extends l.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTreeSelect=(0,l.lh)(this,"calciteTreeSelect",6),this.keyDownHandler=e=>{if(this.child)return;const t=this.el,i=e.target;if(!n(i)||!this.el.contains(i)||!["ArrowRight","ArrowDown","ArrowLeft","ArrowUp","Home","End","Tab"].includes(e.key))return;const l=function(e){return Array.from(e.querySelectorAll("calcite-tree-item:not([disabled])")).filter((t=>{let i=t;for(;i!==e&&void 0!==i;){const e=i.parentElement;if(n(e)&&e.hasChildren&&!e.expanded)return!1;i=i.parentElement}return!0}))}(t);if("Tab"!==e.key){if("ArrowDown"===e.key){const t=l.indexOf(i),s=l[t+1];return null===s||void 0===s||s.focus(),void e.preventDefault()}if("ArrowUp"===e.key){const t=l.indexOf(i),s=l[t-1];return null===s||void 0===s||s.focus(),void e.preventDefault()}if("ArrowLeft"===e.key){if(i.hasChildren&&i.expanded)return i.expanded=!1,void e.preventDefault();const t=l.slice(0,l.indexOf(i)).reverse().find((e=>e.depth===i.depth-1));return null===t||void 0===t||t.focus(),void e.preventDefault()}if("ArrowRight"!==e.key)if("Home"!==e.key)if("End"!==e.key);else{const t=l.pop();t&&(t.focus(),e.preventDefault())}else{const t=l.shift();t&&(t.focus(),e.preventDefault())}else if(!i.disabled&&i.hasChildren)if(i.expanded){const t=l.indexOf(i),s=l[t+1];null===s||void 0===s||s.focus(),e.preventDefault()}else i.expanded=!0,e.preventDefault()}else l.forEach((e=>e.tabIndex=-1))},this.lines=!1,this.child=void 0,this.scale="m",this.selectionMode="single",this.selectedItems=[]}componentWillRender(){var e;const t=null===(e=this.el.parentElement)||void 0===e?void 0:e.closest("calcite-tree");this.lines=t?t.lines:this.lines,this.scale=t?t.scale:this.scale,this.selectionMode=t?t.selectionMode:this.selectionMode,this.child=!!t}render(){return(0,l.h)(l.xr,{"aria-multiselectable":this.child?void 0:("multiple"===this.selectionMode||"multichildren"===this.selectionMode).toString(),onKeyDown:this.keyDownHandler,role:this.child?void 0:"tree",tabIndex:this.getRootTabIndex()},(0,l.h)("slot",null))}onFocus(){if(!this.child){const e=this.el.querySelector("calcite-tree-item[selected]:not([disabled])")||this.el.querySelector("calcite-tree-item:not([disabled])");(0,s.k)(e)}}onFocusIn(e){(e.relatedTarget===this.el||!this.el.contains(e.relatedTarget))&&this.el.removeAttribute("tabindex")}onFocusOut(e){!this.el.contains(e.relatedTarget)&&(this.el.tabIndex=this.getRootTabIndex())}onInternalTreeItemSelect(e){if(this.child)return;const t=e.target,i=(0,s.o)(t.querySelectorAll("calcite-tree-item"));if(e.preventDefault(),e.stopPropagation(),"ancestors"===this.selectionMode)return void this.updateAncestorTree(e);const l="none"===this.selectionMode,n=null!==this.selectionMode&&(!t.hasChildren||t.hasChildren&&("children"===this.selectionMode||"multichildren"===this.selectionMode)),r="multichildren"===this.selectionMode&&t.hasChildren,o=!l&&e.detail.modifyCurrentSelection&&("multiple"===this.selectionMode||"multichildren"===this.selectionMode),c=!o&&(("single"===this.selectionMode||"multiple"===this.selectionMode)&&i.length<=0||"children"===this.selectionMode||"multichildren"===this.selectionMode),d=["multiple","none","single","single-persist"].includes(this.selectionMode)&&t.hasChildren,a=[];if(n&&a.push(t),c){(0,s.o)(this.el.querySelectorAll("calcite-tree-item[selected]")).forEach((e=>{a.includes(e)||(e.selected=!1)}))}d&&["multiple","none","single","single-persist"].includes(this.selectionMode)&&(t.expanded=!t.expanded),r&&i.forEach((e=>{e.selected=!1,e.hasChildren&&(e.expanded=!1)})),o&&window.getSelection().removeAllRanges(),o&&t.selected?a.forEach((e=>{e.disabled||(e.selected=!1)})):l||a.forEach((e=>{e.disabled||(e.selected=!0)})),this.selectedItems=l?[]:(0,s.o)(this.el.querySelectorAll("calcite-tree-item")).filter((e=>e.selected)),this.calciteTreeSelect.emit(),e.stopPropagation()}updateAncestorTree(e){const t=e.target,i=e.detail.updateItem;if(t.disabled||t.indeterminate&&!i)return;const l=[];let n=t.parentElement.closest("calcite-tree-item");for(;n;)l.push(n),n=n.parentElement.closest("calcite-tree-item");const r=Array.from(t.querySelectorAll("calcite-tree-item:not([disabled])")),o=r.filter((e=>!e.hasChildren)),c=r.filter((e=>e.hasChildren));let d;function a(e,t){const i=e.filter((e=>e.selected)),l=e.filter((e=>!e.selected));t.selected=i.length===e.length,t.indeterminate=i.length>0&&l.length>0}d=i?t.hasChildren?!(t.selected||t.indeterminate):!t.selected:t.selected,o.forEach((e=>{e.selected=d,e.indeterminate=!1})),c.reverse().forEach((e=>{a(Array.from(e.querySelectorAll(":scope > calcite-tree > calcite-tree-item")),e)})),i&&(t.hasChildren?a(r,t):(t.selected=d,t.indeterminate=!1)),l.forEach((e=>{const t=(0,s.o)(e.querySelectorAll("calcite-tree-item")),i=t.filter((e=>e.selected));if(0===i.length)return e.selected=!1,void(e.indeterminate=!1);const l=i.length<t.length;e.indeterminate=l,e.selected=!l})),this.selectedItems=(0,s.o)(this.el.querySelectorAll("calcite-tree-item")).filter((e=>e.selected)),i&&this.calciteTreeSelect.emit()}getRootTabIndex(){return this.child?-1:0}get el(){return this}static get style(){return":host{display:block}:host(:focus){outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tree",{lines:[1540],child:[1540],scale:[1537],selectionMode:[1537,"selection-mode"],selectedItems:[1040]},[[0,"focus","onFocus"],[0,"focusin","onFocusIn"],[0,"focusout","onFocusOut"],[0,"calciteInternalTreeItemSelect","onInternalTreeItemSelect"]]]);function o(){if("undefined"===typeof customElements)return;["calcite-tree"].forEach((e=>{if("calcite-tree"===e)customElements.get(e)||customElements.define(e,r)}))}o();const c=r,d=o}}]);
//# sourceMappingURL=7305.0bb5dcf0.chunk.js.map