!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);class n{constructor(t){this.name=t,this.Observers=[]}on(t){this.Observers.push(t)}notify(){this.Observers.forEach(t=>t.update())}}n.prototype.target=null;var o=n;var s=class{constructor(t){this.data=t,Object.keys(t).forEach(e=>this._bind(t,e,t[e]))}_bind(t,e,r){let n=new o;Object.defineProperty(t,e,{get:()=>(o.target&&n.on(o.target),r),set(t){t!==r&&(r=t,n.notify())}})}};var i=class{constructor(t,e,r){this.node=t,this.name=e,this.vm=r,o.target=this;r._data[e];o.target=null,this.update()}update(){this.node.nodeValue=this.vm[this.name]}};const a=/\{\{(.*)\}\}/;var l=class{constructor(t,e){this.el=document.querySelector(t),this.vm=e,this.frag=this._createFragment(),this.el.appendChild(this.frag)}_createFragment(){let t,e=document.createDocumentFragment();for(;t=this.el.firstChild;)this._complie(t),e.appendChild(t);return e}_complie(t){let e=this;if(1===t.nodeType){let r=t.attributes;if(r.hasOwnProperty("v-model")){let n=r["v-model"].value;t.oninput=function(t){e.vm[n]=t.target.value},t.value=this.vm[n]}}else if(3===t.nodeType){let e=t.nodeValue.match(a);if(e){let r=e[1];r=r.trim(),new i(t,r,this.vm)}}}};const u=new class{constructor(t){this.$options=t,this._data=this.$options.data,this.$el=this.$options.el,Object.keys(this._data).forEach(t=>this._proxy(t)),new s(this._data),new l(this.$el,this)}_proxy(t){let e=this;Object.defineProperty(this,t,{get:()=>e._data[t],set:r=>e._data[t]=r})}}({el:"#app",data:{message:"我是双向绑定数据message"}});window.$vm=u}]);