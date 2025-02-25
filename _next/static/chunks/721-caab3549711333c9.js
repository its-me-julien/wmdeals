"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{7003:(e,t,n)=>{function r(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function o(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function i(e){let t=null;return()=>(null==t&&(t=e()),t)}n.d(t,{EN:()=>ej,_q:()=>eO,kS:()=>eI});let l=i(function(){return o(/^Mac/i)}),u=i(function(){return o(/^iPhone/i)}),a=i(function(){return o(/^iPad/i)||l()&&navigator.maxTouchPoints>1}),s=i(function(){return u()||a()});i(function(){return l()||s()}),i(function(){return r(/AppleWebKit/i)&&!c()});let c=i(function(){return r(/Chrome/i)}),d=i(function(){return r(/Android/i)});i(function(){return r(/Firefox/i)});let f=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},p=e=>e&&"window"in e&&e.window===e?e:f(e).defaultView||window;var v,m,g,h=n(6540);let E=null,y=new Set,b=new Map,w=!1,T=!1,P={Tab:!0,Escape:!0};function S(e,t){for(let n of y)n(e,t)}function k(e){w=!0,e.metaKey||!l()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(E="keyboard",S("keyboard",e))}function L(e){E="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(w=!0,S("pointer",e))}function F(e){(0===e.mozInputSource&&e.isTrusted||(d()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType))&&(w=!0,E="virtual")}function C(e){e.target!==window&&e.target!==document&&(w||T||(E="virtual",S("virtual",e)),w=!1,T=!1)}function A(){w=!1,T=!0}function D(e){if("undefined"==typeof window||b.get(p(e)))return;let t=p(e),n=f(e),r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){w=!0,r.apply(this,arguments)},n.addEventListener("keydown",k,!0),n.addEventListener("keyup",k,!0),n.addEventListener("click",F,!0),t.addEventListener("focus",C,!0),t.addEventListener("blur",A,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",L,!0),n.addEventListener("pointermove",L,!0),n.addEventListener("pointerup",L,!0)):(n.addEventListener("mousedown",L,!0),n.addEventListener("mousemove",L,!0),n.addEventListener("mouseup",L,!0)),t.addEventListener("beforeunload",()=>{M(e)},{once:!0}),b.set(t,{focus:r})}let M=(e,t)=>{let n=p(e),r=f(e);t&&r.removeEventListener("DOMContentLoaded",t),b.has(n)&&(n.HTMLElement.prototype.focus=b.get(n).focus,r.removeEventListener("keydown",k,!0),r.removeEventListener("keyup",k,!0),r.removeEventListener("click",F,!0),n.removeEventListener("focus",C,!0),n.removeEventListener("blur",A,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",L,!0),r.removeEventListener("pointermove",L,!0),r.removeEventListener("pointerup",L,!0)):(r.removeEventListener("mousedown",L,!0),r.removeEventListener("mousemove",L,!0),r.removeEventListener("mouseup",L,!0)),b.delete(n))};function H(){return"pointer"!==E}"undefined"!=typeof document&&function(e){let t;let n=f(void 0);"loading"!==n.readyState?D(void 0):(t=()=>{D(void 0)},n.addEventListener("DOMContentLoaded",t)),()=>M(e,t)}();let O=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),I="undefined"!=typeof document?h.useLayoutEffect:()=>{};class j{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function x(e){let t=(0,h.useRef)({isFocused:!1,observer:null});I(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]);let n=function(e){let t=(0,h.useRef)(null);return I(()=>{t.current=e},[e]),(0,h.useCallback)((...e)=>{let n=t.current;return null==n?void 0:n(...e)},[])}(t=>{null==e||e(t)});return(0,h.useCallback)(e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target;r.addEventListener("focusout",e=>{t.current.isFocused=!1,r.disabled&&n(new j("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&r.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}}),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}},[n])}let N=!1,R=0;function B(){N=!0,setTimeout(()=>{N=!1},50)}function W(e){"touch"===e.pointerType&&B()}function U(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",W):document.addEventListener("touchend",B),R++,()=>{--R>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",W):document.removeEventListener("touchend",B))}}var K=Object.defineProperty,V=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,q=(e,t,n)=>(V(e,"symbol"!=typeof t?t+"":t,n),n);class _{set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}constructor(){q(this,"current",this.detect()),q(this,"handoffState","pending"),q(this,"currentId",0)}}let Y=new _;function X(e){return Y.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function z(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add(()=>e.removeEventListener(n,r,o))),requestAnimationFrame(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];let o=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(o))},nextFrame(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];let o=setTimeout(...n);return t.add(()=>clearTimeout(o))},microTask(){for(var e,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];let i={current:!0};return e=()=>{i.current&&r[0]()},"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e})),t.add(()=>{i.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(e){let t=z();return e(t),this.add(()=>t.dispose())},add:t=>(e.includes(t)||e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function Z(){let[e]=(0,h.useState)(z);return(0,h.useEffect)(()=>()=>e.dispose(),[e]),e}let $=(e,t)=>{Y.isServer?(0,h.useEffect)(e,t):(0,h.useLayoutEffect)(e,t)},G=function(e){let t;let n=(t=(0,h.useRef)(e),$(()=>{t.current=e},[e]),t);return h.useCallback(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.current(...t)},[n])},J=Symbol();function Q(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=(0,h.useRef)(t);(0,h.useEffect)(()=>{r.current=t},[t]);let o=G(e=>{for(let t of r.current)null!=t&&("function"==typeof t?t(e):t.current=e)});return t.every(e=>null==e||(null==e?void 0:e[J]))?void 0:o}var ee=n(7836);void 0!==ee&&"undefined"!=typeof globalThis&&"undefined"!=typeof Element&&(null==(v=null==ee?void 0:ee.env)?void 0:v.NODE_ENV)==="test"&&void 0===(null==(m=null==Element?void 0:Element.prototype)?void 0:m.getAnimations)&&(Element.prototype.getAnimations=function(){return console.warn("Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.\nPlease install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.\n\nExample usage:\n```js\nimport { mockAnimationsApi } from 'jsdom-testing-mocks'\nmockAnimationsApi()\n```"),[]});var et=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(et||{});let en=(0,h.createContext)(()=>{});function er(e){let{value:t,children:n}=e;return h.createElement(en.Provider,{value:t},n)}let eo=(0,h.createContext)(null);eo.displayName="OpenClosedContext";var ei=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(ei||{});function el(e){let{value:t,children:n}=e;return h.createElement(eo.Provider,{value:t},n)}function eu(e){let{children:t}=e;return h.createElement(eo.Provider,{value:null},t)}function ea(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(e in t){let n=t[e];return"function"==typeof n?n(...r):n}let i=Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e=>'"'.concat(e,'"')).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(i,ea),i}function es(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.from(new Set(t.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}var ec=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ec||{}),ed=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(ed||{});function ef(){let e,t;let n=(e=(0,h.useRef)([]),t=(0,h.useCallback)(t=>{for(let n of e.current)null!=n&&("function"==typeof n?n(t):n.current=t)},[]),function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];if(!r.every(e=>null==e))return e.current=r,t});return(0,h.useCallback)(e=>(function(e){let{ourProps:t,theirProps:n,slot:r,defaultTag:o,features:i,visible:l=!0,name:u,mergeRefs:a}=e;a=null!=a?a:ev;let s=em(n,t);if(l)return ep(s,r,o,u,a);let c=null!=i?i:0;if(2&c){let{static:e=!1,...t}=s;if(e)return ep(t,r,o,u,a)}if(1&c){let{unmount:e=!0,...t}=s;return ea(e?0:1,{0:()=>null,1:()=>ep({...t,hidden:!0,style:{display:"none"}},r,o,u,a)})}return ep(s,r,o,u,a)})({mergeRefs:n,...e}),[n])}function ep(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,{as:i=n,children:l,refName:u="ref",...a}=ey(e,["unmount","static"]),s=void 0!==e.ref?{[u]:e.ref}:{},c="function"==typeof l?l(t):l;"className"in a&&a.className&&"function"==typeof a.className&&(a.className=a.className(t)),a["aria-labelledby"]&&a["aria-labelledby"]===a.id&&(a["aria-labelledby"]=void 0);let d={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r.replace(/([A-Z])/g,e=>"-".concat(e.toLowerCase())));if(e)for(let e of(d["data-headlessui-state"]=n.join(" "),n))d["data-".concat(e)]=""}if(i===h.Fragment&&(Object.keys(eE(a)).length>0||Object.keys(eE(d)).length>0)){if(!(0,h.isValidElement)(c)||Array.isArray(c)&&c.length>1){if(Object.keys(eE(a)).length>0)throw Error(['Passing props on "Fragment"!',"","The current component <".concat(r,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(eE(a)).concat(Object.keys(eE(d))).map(e=>"  - ".concat(e)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>"  - ".concat(e)).join("\n")].join("\n"))}else{let e=c.props,t=null==e?void 0:e.className,n="function"==typeof t?function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return es(t(...n),a.className)}:es(t,a.className),r=em(c.props,eE(ey(a,["ref"])));for(let e in d)e in r&&delete d[e];return(0,h.cloneElement)(c,Object.assign({},r,d,s,{ref:o(h.version.split(".")[0]>="19"?c.props.ref:c.ref,s.ref)},n?{className:n}:{}))}}return(0,h.createElement)(i,Object.assign({},ey(a,["ref"]),i!==h.Fragment&&s,i!==h.Fragment&&d),c)}function ev(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.every(e=>null==e)?void 0:e=>{for(let n of t)null!=n&&("function"==typeof n?n(e):n.current=e)}}function em(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},o={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=o[t]||(o[t]=[]),o[t].push(e[t])):r[t]=e[t];if(r.disabled||r["aria-disabled"])for(let e in o)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e)&&(o[e]=[e=>{var t;return null==(t=null==e?void 0:e.preventDefault)?void 0:t.call(e)}]);for(let e in o)Object.assign(r,{[e](t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(let n of o[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;n(t,...r)}}});return r}function eg(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},o={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=o[t]||(o[t]=[]),o[t].push(e[t])):r[t]=e[t];for(let e in o)Object.assign(r,{[e](){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];for(let t of o[e])null==t||t(...n)}});return r}function eh(e){var t;return Object.assign((0,h.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function eE(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function ey(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}let eb=null!=(g=h.startTransition)?g:function(e){e()};var ew=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ew||{}),eT=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(eT||{}),eP=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.SetButtonElement=4]="SetButtonElement",e[e.SetPanelElement=5]="SetPanelElement",e))(eP||{});let eS={0:e=>({...e,disclosureState:ea(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId},4:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},5:(e,t)=>e.panelElement===t.element?e:{...e,panelElement:t.element}},ek=(0,h.createContext)(null);function eL(e){let t=(0,h.useContext)(ek);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Disclosure /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,eL),t}return t}ek.displayName="DisclosureContext";let eF=(0,h.createContext)(null);eF.displayName="DisclosureAPIContext";let eC=(0,h.createContext)(null);function eA(e,t){return ea(t.type,eS,e,t)}eC.displayName="DisclosurePanelContext";let eD=h.Fragment,eM=ec.RenderStrategy|ec.Static,eH=eh(function(e,t){let{defaultOpen:n=!1,...r}=e,o=(0,h.useRef)(null),i=Q(t,function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return Object.assign(e,{[J]:t})}(e=>{o.current=e},void 0===e.as||e.as===h.Fragment)),l=(0,h.useReducer)(eA,{disclosureState:n?0:1,buttonElement:null,panelElement:null,buttonId:null,panelId:null}),[{disclosureState:u,buttonId:a},s]=l,c=G(e=>{s({type:1});let t=X(o);if(!t||!a)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(a):t.getElementById(a);null==n||n.focus()}),d=(0,h.useMemo)(()=>({close:c}),[c]),f=(0,h.useMemo)(()=>({open:0===u,close:c}),[u,c]),p=ef();return h.createElement(ek.Provider,{value:l},h.createElement(eF.Provider,{value:d},h.createElement(er,{value:c},h.createElement(el,{value:ea(u,{0:ei.Open,1:ei.Closed})},p({ourProps:{ref:i},theirProps:r,slot:f,defaultTag:eD,name:"Disclosure"})))))}),eO=eh(function(e,t){var n;let r=(0,h.useId)(),{id:o="headlessui-disclosure-button-".concat(r),disabled:i=!1,autoFocus:l=!1,...u}=e,[a,s]=eL("Disclosure.Button"),c=(0,h.useContext)(eC),d=null!==c&&c===a.panelId,v=Q((0,h.useRef)(null),t,G(e=>{if(!d)return s({type:4,element:e})}));(0,h.useEffect)(()=>{if(!d)return s({type:2,buttonId:o}),()=>{s({type:2,buttonId:null})}},[o,s,d]);let m=G(e=>{var t;if(d){if(1===a.disclosureState)return;switch(e.key){case ew.Space:case ew.Enter:e.preventDefault(),e.stopPropagation(),s({type:0}),null==(t=a.buttonElement)||t.focus()}}else switch(e.key){case ew.Space:case ew.Enter:e.preventDefault(),e.stopPropagation(),s({type:0})}}),g=G(e=>{e.key===ew.Space&&e.preventDefault()}),E=G(e=>{var t;(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r})(e.currentTarget)||i||(d?(s({type:0}),null==(t=a.buttonElement)||t.focus()):s({type:0}))}),{isFocusVisible:b,focusProps:w}=function(e={}){var t,n,r;let{autoFocus:o=!1,isTextInput:i,within:l}=e,u=(0,h.useRef)({isFocused:!1,isFocusVisible:o||H()}),[a,s]=(0,h.useState)(!1),[c,d]=(0,h.useState)(()=>u.current.isFocused&&u.current.isFocusVisible),v=(0,h.useCallback)(()=>d(u.current.isFocused&&u.current.isFocusVisible),[]),m=(0,h.useCallback)(e=>{u.current.isFocused=e,s(e),v()},[v]);t=e=>{u.current.isFocusVisible=e,v()},n=[],r={isTextInput:i},D(),(0,h.useEffect)(()=>{let e=(e,n)=>{(function(e,t,n){var r;let o="undefined"!=typeof window?p(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,i="undefined"!=typeof window?p(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,l="undefined"!=typeof window?p(null==n?void 0:n.target).HTMLElement:HTMLElement,u="undefined"!=typeof window?p(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||(null==n?void 0:n.target)instanceof o&&!O.has(null==n?void 0:null===(r=n.target)||void 0===r?void 0:r.type)||(null==n?void 0:n.target)instanceof i||(null==n?void 0:n.target)instanceof l&&(null==n?void 0:n.target.isContentEditable))&&"keyboard"===t&&n instanceof u&&!P[n.key])})(!!(null==r?void 0:r.isTextInput),e,n)&&t(H())};return y.add(e),()=>{y.delete(e)}},n);let{focusProps:g}=function(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:o}=e,i=(0,h.useCallback)(e=>{if(e.target===e.currentTarget)return r&&r(e),o&&o(!1),!0},[r,o]),l=x(i),u=(0,h.useCallback)(e=>{let t=f(e.target);e.target===e.currentTarget&&t.activeElement===e.target&&(n&&n(e),o&&o(!0),l(e))},[o,n,l]);return{focusProps:{onFocus:!t&&(n||o||r)?u:void 0,onBlur:!t&&(r||o)?i:void 0}}}({isDisabled:l,onFocusChange:m}),{focusWithinProps:E}=function(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:o}=e,i=(0,h.useRef)({isFocusWithin:!1}),l=(0,h.useCallback)(e=>{i.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(i.current.isFocusWithin=!1,n&&n(e),o&&o(!1))},[n,o,i]),u=x(l),a=(0,h.useCallback)(e=>{i.current.isFocusWithin||document.activeElement!==e.target||(r&&r(e),o&&o(!0),i.current.isFocusWithin=!0,u(e))},[r,o,u]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:a,onBlur:l}}}({isDisabled:!l,onFocusWithinChange:m});return{isFocused:a,isFocusVisible:c,focusProps:l?E:g}}({autoFocus:l}),{isHovered:T,hoverProps:S}=function(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:o}=e,[i,l]=(0,h.useState)(!1),u=(0,h.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,h.useEffect)(U,[]);let{hoverProps:a,triggerHoverEnd:s}=(0,h.useMemo)(()=>{let e=(e,r)=>{if(u.pointerType=r,o||"touch"===r||u.isHovered||!e.currentTarget.contains(e.target))return;u.isHovered=!0;let i=e.currentTarget;u.target=i,t&&t({type:"hoverstart",target:i,pointerType:r}),n&&n(!0),l(!0)},i=(e,t)=>{if(u.pointerType="",u.target=null,"touch"===t||!u.isHovered)return;u.isHovered=!1;let o=e.currentTarget;r&&r({type:"hoverend",target:o,pointerType:t}),n&&n(!1),l(!1)},a={};return"undefined"!=typeof PointerEvent?(a.onPointerEnter=t=>{N&&"mouse"===t.pointerType||e(t,t.pointerType)},a.onPointerLeave=e=>{!o&&e.currentTarget.contains(e.target)&&i(e,e.pointerType)}):(a.onTouchStart=()=>{u.ignoreEmulatedMouseEvents=!0},a.onMouseEnter=t=>{u.ignoreEmulatedMouseEvents||N||e(t,"mouse"),u.ignoreEmulatedMouseEvents=!1},a.onMouseLeave=e=>{!o&&e.currentTarget.contains(e.target)&&i(e,"mouse")}),{hoverProps:a,triggerHoverEnd:i}},[t,n,r,o,u]);return(0,h.useEffect)(()=>{o&&s({currentTarget:u.target},u.pointerType)},[o]),{hoverProps:a,isHovered:i}}({isDisabled:i}),{pressed:k,pressProps:L}=function(){let{disabled:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,h.useRef)(null),[n,r]=(0,h.useState)(!1),o=Z(),i=G(()=>{t.current=null,r(!1),o.dispose()}),l=G(e=>{if(o.dispose(),null===t.current){t.current=e.currentTarget,r(!0);{let n=X(e.currentTarget);o.addEventListener(n,"pointerup",i,!1),o.addEventListener(n,"pointermove",e=>{if(t.current){var n,o;let i,l;r((i=e.width/2,l=e.height/2,n={top:e.clientY-l,right:e.clientX+i,bottom:e.clientY+l,left:e.clientX-i},o=t.current.getBoundingClientRect(),!(!n||!o||n.right<o.left||n.left>o.right||n.bottom<o.top||n.top>o.bottom)))}},!1),o.addEventListener(n,"pointercancel",i,!1)}}});return{pressed:n,pressProps:e?{}:{onPointerDown:l,onPointerUp:i,onClick:i}}}({disabled:i}),F=(0,h.useMemo)(()=>({open:0===a.disclosureState,hover:T,active:k,disabled:i,focus:b,autofocus:l}),[a,T,k,b,i,l]),C=(n=a.buttonElement,(0,h.useMemo)(()=>{var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";if("string"==typeof r&&"button"===r.toLowerCase()||(null==n?void 0:n.tagName)==="BUTTON"&&!n.hasAttribute("type"))return"button"},[e.type,e.as,n])),A=d?eg({ref:v,type:C,disabled:i||void 0,autoFocus:l,onKeyDown:m,onClick:E},w,S,L):eg({ref:v,id:o,type:C,"aria-expanded":0===a.disclosureState,"aria-controls":a.panelElement?a.panelId:void 0,disabled:i||void 0,autoFocus:l,onKeyDown:m,onKeyUp:g,onClick:E},w,S,L);return ef()({ourProps:A,theirProps:u,slot:F,defaultTag:"button",name:"Disclosure.Button"})}),eI=eh(function(e,t){let n=(0,h.useId)(),{id:r="headlessui-disclosure-panel-".concat(n),transition:o=!1,...i}=e,[l,u]=eL("Disclosure.Panel"),{close:a}=function e(t){let n=(0,h.useContext)(eF);if(null===n){let n=Error("<".concat(t," /> is missing a parent <Disclosure /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),[s,c]=(0,h.useState)(null),d=Q(t,G(e=>{eb(()=>u({type:5,element:e}))}),c);(0,h.useEffect)(()=>(u({type:3,panelId:r}),()=>{u({type:3,panelId:null})}),[r,u]);let f=(0,h.useContext)(eo),[p,v]=function(e,t,n,r){let[o,i]=(0,h.useState)(n),{hasFlag:l,addFlag:u,removeFlag:a}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,[t,n]=(0,h.useState)(e),r=(0,h.useCallback)(e=>n(e),[t]),o=(0,h.useCallback)(e=>n(t=>t|e),[t]),i=(0,h.useCallback)(e=>(t&e)===e,[t]);return{flags:t,setFlag:r,addFlag:o,hasFlag:i,removeFlag:(0,h.useCallback)(e=>n(t=>t&~e),[n]),toggleFlag:(0,h.useCallback)(e=>n(t=>t^e),[n])}}(e&&o?3:0),s=(0,h.useRef)(!1),c=(0,h.useRef)(!1);return $(()=>{if(e){if(n&&i(!0),!t){n&&u(3);return}return function(e,t){let{prepare:n,run:r,done:o,inFlight:i}=t,l=z();return function(e,t){let{inFlight:n,prepare:r}=t;if(null!=n&&n.current){r();return}let o=e.style.transition;e.style.transition="none",r(),e.offsetHeight,e.style.transition=o}(e,{prepare:n,inFlight:i}),l.nextFrame(()=>{r(),l.requestAnimationFrame(()=>{l.add(function(e,t){var n,r;let o=z();if(!e)return o.dispose;let i=!1;o.add(()=>{i=!0});let l=null!=(r=null==(n=e.getAnimations)?void 0:n.call(e).filter(e=>e instanceof CSSTransition))?r:[];return 0===l.length?t():Promise.allSettled(l.map(e=>e.finished)).then(()=>{i||t()}),o.dispose}(e,o))})}),l.dispose}(t,{inFlight:s,prepare(){c.current?c.current=!1:c.current=s.current,s.current=!0,c.current||(n?(u(3),a(4)):(u(4),a(2)))},run(){c.current?n?(a(3),u(4)):(a(4),u(3)):n?a(1):u(1)},done(){var e;c.current&&"function"==typeof t.getAnimations&&t.getAnimations().length>0||(s.current=!1,a(7),n||i(!1),null==(e=null==r?void 0:r.end)||e.call(r,n))}})}},[e,n,t,Z()]),e?[o,{closed:l(1),enter:l(2),leave:l(4),transition:l(2)||l(4)}]:[n,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}(o,s,null!==f?(f&ei.Open)===ei.Open:0===l.disclosureState),m=(0,h.useMemo)(()=>({open:0===l.disclosureState,close:a}),[l.disclosureState,a]),g={ref:d,id:r,...function(e){let t={};for(let n in e)!0===e[n]&&(t["data-".concat(n)]="");return t}(v)},E=ef();return h.createElement(eu,null,h.createElement(eC.Provider,{value:l.panelId},E({ourProps:g,theirProps:i,slot:m,defaultTag:"div",features:eM,visible:p,name:"Disclosure.Panel"})))}),ej=Object.assign(eH,{Button:eO,Panel:eI})},4902:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},i),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 12H6"}))})},7348:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(6540);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},i),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"}))})}}]);