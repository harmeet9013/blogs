function D9(t,o){for(var a=0;a<o.length;a++){const c=o[a];if(typeof c!="string"&&!Array.isArray(c)){for(const u in c)if(u!=="default"&&!(u in t)){const p=Object.getOwnPropertyDescriptor(c,u);p&&Object.defineProperty(t,u,p.get?p:{enumerable:!0,get:()=>c[u]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function a(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(u){if(u.ep)return;u.ep=!0;const p=a(u);fetch(u.href,p)}})();var fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var CI={exports:{}},Mg={},yI={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih=Symbol.for("react.element"),T9=Symbol.for("react.portal"),I9=Symbol.for("react.fragment"),M9=Symbol.for("react.strict_mode"),P9=Symbol.for("react.profiler"),B9=Symbol.for("react.provider"),N9=Symbol.for("react.context"),R9=Symbol.for("react.forward_ref"),O9=Symbol.for("react.suspense"),L9=Symbol.for("react.memo"),z9=Symbol.for("react.lazy"),f5=Symbol.iterator;function j9(t){return t===null||typeof t!="object"?null:(t=f5&&t[f5]||t["@@iterator"],typeof t=="function"?t:null)}var AI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_I=Object.assign,xI={};function Hc(t,o,a){this.props=t,this.context=o,this.refs=xI,this.updater=a||AI}Hc.prototype.isReactComponent={};Hc.prototype.setState=function(t,o){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,o,"setState")};Hc.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function EI(){}EI.prototype=Hc.prototype;function jv(t,o,a){this.props=t,this.context=o,this.refs=xI,this.updater=a||AI}var Fv=jv.prototype=new EI;Fv.constructor=jv;_I(Fv,Hc.prototype);Fv.isPureReactComponent=!0;var g5=Array.isArray,SI=Object.prototype.hasOwnProperty,$v={current:null},DI={key:!0,ref:!0,__self:!0,__source:!0};function TI(t,o,a){var c,u={},p=null,f=null;if(o!=null)for(c in o.ref!==void 0&&(f=o.ref),o.key!==void 0&&(p=""+o.key),o)SI.call(o,c)&&!DI.hasOwnProperty(c)&&(u[c]=o[c]);var b=arguments.length-2;if(b===1)u.children=a;else if(1<b){for(var m=Array(b),v=0;v<b;v++)m[v]=arguments[v+2];u.children=m}if(t&&t.defaultProps)for(c in b=t.defaultProps,b)u[c]===void 0&&(u[c]=b[c]);return{$$typeof:ih,type:t,key:p,ref:f,props:u,_owner:$v.current}}function F9(t,o){return{$$typeof:ih,type:t.type,key:o,ref:t.ref,props:t.props,_owner:t._owner}}function Vv(t){return typeof t=="object"&&t!==null&&t.$$typeof===ih}function $9(t){var o={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return o[a]})}var m5=/\/+/g;function v0(t,o){return typeof t=="object"&&t!==null&&t.key!=null?$9(""+t.key):o.toString(36)}function _f(t,o,a,c,u){var p=typeof t;(p==="undefined"||p==="boolean")&&(t=null);var f=!1;if(t===null)f=!0;else switch(p){case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case ih:case T9:f=!0}}if(f)return f=t,u=u(f),t=c===""?"."+v0(f,0):c,g5(u)?(a="",t!=null&&(a=t.replace(m5,"$&/")+"/"),_f(u,o,a,"",function(v){return v})):u!=null&&(Vv(u)&&(u=F9(u,a+(!u.key||f&&f.key===u.key?"":(""+u.key).replace(m5,"$&/")+"/")+t)),o.push(u)),1;if(f=0,c=c===""?".":c+":",g5(t))for(var b=0;b<t.length;b++){p=t[b];var m=c+v0(p,b);f+=_f(p,o,a,m,u)}else if(m=j9(t),typeof m=="function")for(t=m.call(t),b=0;!(p=t.next()).done;)p=p.value,m=c+v0(p,b++),f+=_f(p,o,a,m,u);else if(p==="object")throw o=String(t),Error("Objects are not valid as a React child (found: "+(o==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return f}function Wp(t,o,a){if(t==null)return t;var c=[],u=0;return _f(t,c,"","",function(p){return o.call(a,p,u++)}),c}function V9(t){if(t._status===-1){var o=t._result;o=o(),o.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=o)}if(t._status===1)return t._result.default;throw t._result}var co={current:null},xf={transition:null},U9={ReactCurrentDispatcher:co,ReactCurrentBatchConfig:xf,ReactCurrentOwner:$v};rt.Children={map:Wp,forEach:function(t,o,a){Wp(t,function(){o.apply(this,arguments)},a)},count:function(t){var o=0;return Wp(t,function(){o++}),o},toArray:function(t){return Wp(t,function(o){return o})||[]},only:function(t){if(!Vv(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};rt.Component=Hc;rt.Fragment=I9;rt.Profiler=P9;rt.PureComponent=jv;rt.StrictMode=M9;rt.Suspense=O9;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U9;rt.cloneElement=function(t,o,a){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var c=_I({},t.props),u=t.key,p=t.ref,f=t._owner;if(o!=null){if(o.ref!==void 0&&(p=o.ref,f=$v.current),o.key!==void 0&&(u=""+o.key),t.type&&t.type.defaultProps)var b=t.type.defaultProps;for(m in o)SI.call(o,m)&&!DI.hasOwnProperty(m)&&(c[m]=o[m]===void 0&&b!==void 0?b[m]:o[m])}var m=arguments.length-2;if(m===1)c.children=a;else if(1<m){b=Array(m);for(var v=0;v<m;v++)b[v]=arguments[v+2];c.children=b}return{$$typeof:ih,type:t.type,key:u,ref:p,props:c,_owner:f}};rt.createContext=function(t){return t={$$typeof:N9,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B9,_context:t},t.Consumer=t};rt.createElement=TI;rt.createFactory=function(t){var o=TI.bind(null,t);return o.type=t,o};rt.createRef=function(){return{current:null}};rt.forwardRef=function(t){return{$$typeof:R9,render:t}};rt.isValidElement=Vv;rt.lazy=function(t){return{$$typeof:z9,_payload:{_status:-1,_result:t},_init:V9}};rt.memo=function(t,o){return{$$typeof:L9,type:t,compare:o===void 0?null:o}};rt.startTransition=function(t){var o=xf.transition;xf.transition={};try{t()}finally{xf.transition=o}};rt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};rt.useCallback=function(t,o){return co.current.useCallback(t,o)};rt.useContext=function(t){return co.current.useContext(t)};rt.useDebugValue=function(){};rt.useDeferredValue=function(t){return co.current.useDeferredValue(t)};rt.useEffect=function(t,o){return co.current.useEffect(t,o)};rt.useId=function(){return co.current.useId()};rt.useImperativeHandle=function(t,o,a){return co.current.useImperativeHandle(t,o,a)};rt.useInsertionEffect=function(t,o){return co.current.useInsertionEffect(t,o)};rt.useLayoutEffect=function(t,o){return co.current.useLayoutEffect(t,o)};rt.useMemo=function(t,o){return co.current.useMemo(t,o)};rt.useReducer=function(t,o,a){return co.current.useReducer(t,o,a)};rt.useRef=function(t){return co.current.useRef(t)};rt.useState=function(t){return co.current.useState(t)};rt.useSyncExternalStore=function(t,o,a){return co.current.useSyncExternalStore(t,o,a)};rt.useTransition=function(){return co.current.useTransition()};rt.version="18.2.0";yI.exports=rt;var z=yI.exports;const Pe=zv(z),Du=D9({__proto__:null,default:Pe},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H9=z,W9=Symbol.for("react.element"),G9=Symbol.for("react.fragment"),q9=Object.prototype.hasOwnProperty,K9=H9.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y9={key:!0,ref:!0,__self:!0,__source:!0};function II(t,o,a){var c,u={},p=null,f=null;a!==void 0&&(p=""+a),o.key!==void 0&&(p=""+o.key),o.ref!==void 0&&(f=o.ref);for(c in o)q9.call(o,c)&&!Y9.hasOwnProperty(c)&&(u[c]=o[c]);if(t&&t.defaultProps)for(c in o=t.defaultProps,o)u[c]===void 0&&(u[c]=o[c]);return{$$typeof:W9,type:t,key:p,ref:f,props:u,_owner:K9.current}}Mg.Fragment=G9;Mg.jsx=II;Mg.jsxs=II;CI.exports=Mg;var L=CI.exports,bw={},MI={exports:{}},$o={},PI={exports:{}},BI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function o(J,le){var ge=J.length;J.push(le);e:for(;0<ge;){var Te=ge-1>>>1,Ie=J[Te];if(0<u(Ie,le))J[Te]=le,J[ge]=Ie,ge=Te;else break e}}function a(J){return J.length===0?null:J[0]}function c(J){if(J.length===0)return null;var le=J[0],ge=J.pop();if(ge!==le){J[0]=ge;e:for(var Te=0,Ie=J.length,Qe=Ie>>>1;Te<Qe;){var Me=2*(Te+1)-1,ve=J[Me],be=Me+1,Oe=J[be];if(0>u(ve,ge))be<Ie&&0>u(Oe,ve)?(J[Te]=Oe,J[be]=ge,Te=be):(J[Te]=ve,J[Me]=ge,Te=Me);else if(be<Ie&&0>u(Oe,ge))J[Te]=Oe,J[be]=ge,Te=be;else break e}}return le}function u(J,le){var ge=J.sortIndex-le.sortIndex;return ge!==0?ge:J.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;t.unstable_now=function(){return p.now()}}else{var f=Date,b=f.now();t.unstable_now=function(){return f.now()-b}}var m=[],v=[],A=1,_=null,y=3,E=!1,S=!1,D=!1,R=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(J){for(var le=a(v);le!==null;){if(le.callback===null)c(v);else if(le.startTime<=J)c(v),le.sortIndex=le.expirationTime,o(m,le);else break;le=a(v)}}function F(J){if(D=!1,B(J),!S)if(a(m)!==null)S=!0,pe(M);else{var le=a(v);le!==null&&oe(F,le.startTime-J)}}function M(J,le){S=!1,D&&(D=!1,I(K),K=-1),E=!0;var ge=y;try{for(B(le),_=a(m);_!==null&&(!(_.expirationTime>le)||J&&!te());){var Te=_.callback;if(typeof Te=="function"){_.callback=null,y=_.priorityLevel;var Ie=Te(_.expirationTime<=le);le=t.unstable_now(),typeof Ie=="function"?_.callback=Ie:_===a(m)&&c(m),B(le)}else c(m);_=a(m)}if(_!==null)var Qe=!0;else{var Me=a(v);Me!==null&&oe(F,Me.startTime-le),Qe=!1}return Qe}finally{_=null,y=ge,E=!1}}var W=!1,H=null,K=-1,Z=5,Y=-1;function te(){return!(t.unstable_now()-Y<Z)}function ce(){if(H!==null){var J=t.unstable_now();Y=J;var le=!0;try{le=H(!0,J)}finally{le?re():(W=!1,H=null)}}else W=!1}var re;if(typeof P=="function")re=function(){P(ce)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ie=ae.port2;ae.port1.onmessage=ce,re=function(){ie.postMessage(null)}}else re=function(){R(ce,0)};function pe(J){H=J,W||(W=!0,re())}function oe(J,le){K=R(function(){J(t.unstable_now())},le)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(J){J.callback=null},t.unstable_continueExecution=function(){S||E||(S=!0,pe(M))},t.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<J?Math.floor(1e3/J):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return a(m)},t.unstable_next=function(J){switch(y){case 1:case 2:case 3:var le=3;break;default:le=y}var ge=y;y=le;try{return J()}finally{y=ge}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(J,le){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ge=y;y=J;try{return le()}finally{y=ge}},t.unstable_scheduleCallback=function(J,le,ge){var Te=t.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?Te+ge:Te):ge=Te,J){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=ge+Ie,J={id:A++,callback:le,priorityLevel:J,startTime:ge,expirationTime:Ie,sortIndex:-1},ge>Te?(J.sortIndex=ge,o(v,J),a(m)===null&&J===a(v)&&(D?(I(K),K=-1):D=!0,oe(F,ge-Te))):(J.sortIndex=Ie,o(m,J),S||E||(S=!0,pe(M))),J},t.unstable_shouldYield=te,t.unstable_wrapCallback=function(J){var le=y;return function(){var ge=y;y=le;try{return J.apply(this,arguments)}finally{y=ge}}}})(BI);PI.exports=BI;var Q9=PI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NI=z,jo=Q9;function he(t){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)o+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var RI=new Set,Tu={};function Ga(t,o){xc(t,o),xc(t+"Capture",o)}function xc(t,o){for(Tu[t]=o,t=0;t<o.length;t++)RI.add(o[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kw=Object.prototype.hasOwnProperty,Z9=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b5={},k5={};function J9(t){return kw.call(k5,t)?!0:kw.call(b5,t)?!1:Z9.test(t)?k5[t]=!0:(b5[t]=!0,!1)}function X9(t,o,a,c){if(a!==null&&a.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function eF(t,o,a,c){if(o===null||typeof o>"u"||X9(t,o,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function uo(t,o,a,c,u,p,f){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=o,this.sanitizeURL=p,this.removeEmptyString=f}var Gn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gn[t]=new uo(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var o=t[0];Gn[o]=new uo(o,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gn[t]=new uo(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gn[t]=new uo(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gn[t]=new uo(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gn[t]=new uo(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gn[t]=new uo(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gn[t]=new uo(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gn[t]=new uo(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uv=/[\-:]([a-z])/g;function Hv(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var o=t.replace(Uv,Hv);Gn[o]=new uo(o,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var o=t.replace(Uv,Hv);Gn[o]=new uo(o,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var o=t.replace(Uv,Hv);Gn[o]=new uo(o,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gn[t]=new uo(t,1,!1,t.toLowerCase(),null,!1,!1)});Gn.xlinkHref=new uo("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gn[t]=new uo(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wv(t,o,a,c){var u=Gn.hasOwnProperty(o)?Gn[o]:null;(u!==null?u.type!==0:c||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(eF(o,a,u,c)&&(a=null),c||u===null?J9(o)&&(a===null?t.removeAttribute(o):t.setAttribute(o,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(o=u.attributeName,c=u.attributeNamespace,a===null?t.removeAttribute(o):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,c?t.setAttributeNS(c,o,a):t.setAttribute(o,a))))}var ji=NI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gp=Symbol.for("react.element"),nc=Symbol.for("react.portal"),oc=Symbol.for("react.fragment"),Gv=Symbol.for("react.strict_mode"),ww=Symbol.for("react.profiler"),OI=Symbol.for("react.provider"),LI=Symbol.for("react.context"),qv=Symbol.for("react.forward_ref"),vw=Symbol.for("react.suspense"),Cw=Symbol.for("react.suspense_list"),Kv=Symbol.for("react.memo"),ds=Symbol.for("react.lazy"),zI=Symbol.for("react.offscreen"),w5=Symbol.iterator;function zd(t){return t===null||typeof t!="object"?null:(t=w5&&t[w5]||t["@@iterator"],typeof t=="function"?t:null)}var en=Object.assign,C0;function ru(t){if(C0===void 0)try{throw Error()}catch(a){var o=a.stack.trim().match(/\n( *(at )?)/);C0=o&&o[1]||""}return`
`+C0+t}var y0=!1;function A0(t,o){if(!t||y0)return"";y0=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(v){var c=v}Reflect.construct(t,[],o)}else{try{o.call()}catch(v){c=v}t.call(o.prototype)}else{try{throw Error()}catch(v){c=v}t()}}catch(v){if(v&&c&&typeof v.stack=="string"){for(var u=v.stack.split(`
`),p=c.stack.split(`
`),f=u.length-1,b=p.length-1;1<=f&&0<=b&&u[f]!==p[b];)b--;for(;1<=f&&0<=b;f--,b--)if(u[f]!==p[b]){if(f!==1||b!==1)do if(f--,b--,0>b||u[f]!==p[b]){var m=`
`+u[f].replace(" at new "," at ");return t.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",t.displayName)),m}while(1<=f&&0<=b);break}}}finally{y0=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ru(t):""}function tF(t){switch(t.tag){case 5:return ru(t.type);case 16:return ru("Lazy");case 13:return ru("Suspense");case 19:return ru("SuspenseList");case 0:case 2:case 15:return t=A0(t.type,!1),t;case 11:return t=A0(t.type.render,!1),t;case 1:return t=A0(t.type,!0),t;default:return""}}function yw(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oc:return"Fragment";case nc:return"Portal";case ww:return"Profiler";case Gv:return"StrictMode";case vw:return"Suspense";case Cw:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case LI:return(t.displayName||"Context")+".Consumer";case OI:return(t._context.displayName||"Context")+".Provider";case qv:var o=t.render;return t=t.displayName,t||(t=o.displayName||o.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kv:return o=t.displayName||null,o!==null?o:yw(t.type)||"Memo";case ds:o=t._payload,t=t._init;try{return yw(t(o))}catch{}}return null}function nF(t){var o=t.type;switch(t.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=o.render,t=t.displayName||t.name||"",o.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yw(o);case 8:return o===Gv?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Ss(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jI(t){var o=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function oF(t){var o=jI(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,o),c=""+t[o];if(!t.hasOwnProperty(o)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,p=a.set;return Object.defineProperty(t,o,{configurable:!0,get:function(){return u.call(this)},set:function(f){c=""+f,p.call(this,f)}}),Object.defineProperty(t,o,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(f){c=""+f},stopTracking:function(){t._valueTracker=null,delete t[o]}}}}function qp(t){t._valueTracker||(t._valueTracker=oF(t))}function FI(t){if(!t)return!1;var o=t._valueTracker;if(!o)return!0;var a=o.getValue(),c="";return t&&(c=jI(t)?t.checked?"true":"false":t.value),t=c,t!==a?(o.setValue(t),!0):!1}function Gf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Aw(t,o){var a=o.checked;return en({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function v5(t,o){var a=o.defaultValue==null?"":o.defaultValue,c=o.checked!=null?o.checked:o.defaultChecked;a=Ss(o.value!=null?o.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function $I(t,o){o=o.checked,o!=null&&Wv(t,"checked",o,!1)}function _w(t,o){$I(t,o);var a=Ss(o.value),c=o.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}o.hasOwnProperty("value")?xw(t,o.type,a):o.hasOwnProperty("defaultValue")&&xw(t,o.type,Ss(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(t.defaultChecked=!!o.defaultChecked)}function C5(t,o,a){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var c=o.type;if(!(c!=="submit"&&c!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+t._wrapperState.initialValue,a||o===t.value||(t.value=o),t.defaultValue=o}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function xw(t,o,a){(o!=="number"||Gf(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var iu=Array.isArray;function bc(t,o,a,c){if(t=t.options,o){o={};for(var u=0;u<a.length;u++)o["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=o.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&c&&(t[a].defaultSelected=!0)}else{for(a=""+Ss(a),o=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}o!==null||t[u].disabled||(o=t[u])}o!==null&&(o.selected=!0)}}function Ew(t,o){if(o.dangerouslySetInnerHTML!=null)throw Error(he(91));return en({},o,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function y5(t,o){var a=o.value;if(a==null){if(a=o.children,o=o.defaultValue,a!=null){if(o!=null)throw Error(he(92));if(iu(a)){if(1<a.length)throw Error(he(93));a=a[0]}o=a}o==null&&(o=""),a=o}t._wrapperState={initialValue:Ss(a)}}function VI(t,o){var a=Ss(o.value),c=Ss(o.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),o.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function A5(t){var o=t.textContent;o===t._wrapperState.initialValue&&o!==""&&o!==null&&(t.value=o)}function UI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sw(t,o){return t==null||t==="http://www.w3.org/1999/xhtml"?UI(o):t==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Kp,HI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,a,c,u){MSApp.execUnsafeLocalFunction(function(){return t(o,a,c,u)})}:t}(function(t,o){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=o;else{for(Kp=Kp||document.createElement("div"),Kp.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Kp.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;o.firstChild;)t.appendChild(o.firstChild)}});function Iu(t,o){if(o){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=o;return}}t.textContent=o}var hu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rF=["Webkit","ms","Moz","O"];Object.keys(hu).forEach(function(t){rF.forEach(function(o){o=o+t.charAt(0).toUpperCase()+t.substring(1),hu[o]=hu[t]})});function WI(t,o,a){return o==null||typeof o=="boolean"||o===""?"":a||typeof o!="number"||o===0||hu.hasOwnProperty(t)&&hu[t]?(""+o).trim():o+"px"}function GI(t,o){t=t.style;for(var a in o)if(o.hasOwnProperty(a)){var c=a.indexOf("--")===0,u=WI(a,o[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,u):t[a]=u}}var iF=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dw(t,o){if(o){if(iF[t]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(he(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(he(61))}if(o.style!=null&&typeof o.style!="object")throw Error(he(62))}}function Tw(t,o){if(t.indexOf("-")===-1)return typeof o.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iw=null;function Yv(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mw=null,kc=null,wc=null;function _5(t){if(t=lh(t)){if(typeof Mw!="function")throw Error(he(280));var o=t.stateNode;o&&(o=Og(o),Mw(t.stateNode,t.type,o))}}function qI(t){kc?wc?wc.push(t):wc=[t]:kc=t}function KI(){if(kc){var t=kc,o=wc;if(wc=kc=null,_5(t),o)for(t=0;t<o.length;t++)_5(o[t])}}function YI(t,o){return t(o)}function QI(){}var _0=!1;function ZI(t,o,a){if(_0)return t(o,a);_0=!0;try{return YI(t,o,a)}finally{_0=!1,(kc!==null||wc!==null)&&(QI(),KI())}}function Mu(t,o){var a=t.stateNode;if(a===null)return null;var c=Og(a);if(c===null)return null;a=c[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(he(231,o,typeof a));return a}var Pw=!1;if(Pi)try{var jd={};Object.defineProperty(jd,"passive",{get:function(){Pw=!0}}),window.addEventListener("test",jd,jd),window.removeEventListener("test",jd,jd)}catch{Pw=!1}function sF(t,o,a,c,u,p,f,b,m){var v=Array.prototype.slice.call(arguments,3);try{o.apply(a,v)}catch(A){this.onError(A)}}var pu=!1,qf=null,Kf=!1,Bw=null,aF={onError:function(t){pu=!0,qf=t}};function lF(t,o,a,c,u,p,f,b,m){pu=!1,qf=null,sF.apply(aF,arguments)}function cF(t,o,a,c,u,p,f,b,m){if(lF.apply(this,arguments),pu){if(pu){var v=qf;pu=!1,qf=null}else throw Error(he(198));Kf||(Kf=!0,Bw=v)}}function qa(t){var o=t,a=t;if(t.alternate)for(;o.return;)o=o.return;else{t=o;do o=t,o.flags&4098&&(a=o.return),t=o.return;while(t)}return o.tag===3?a:null}function JI(t){if(t.tag===13){var o=t.memoizedState;if(o===null&&(t=t.alternate,t!==null&&(o=t.memoizedState)),o!==null)return o.dehydrated}return null}function x5(t){if(qa(t)!==t)throw Error(he(188))}function dF(t){var o=t.alternate;if(!o){if(o=qa(t),o===null)throw Error(he(188));return o!==t?null:t}for(var a=t,c=o;;){var u=a.return;if(u===null)break;var p=u.alternate;if(p===null){if(c=u.return,c!==null){a=c;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===a)return x5(u),t;if(p===c)return x5(u),o;p=p.sibling}throw Error(he(188))}if(a.return!==c.return)a=u,c=p;else{for(var f=!1,b=u.child;b;){if(b===a){f=!0,a=u,c=p;break}if(b===c){f=!0,c=u,a=p;break}b=b.sibling}if(!f){for(b=p.child;b;){if(b===a){f=!0,a=p,c=u;break}if(b===c){f=!0,c=p,a=u;break}b=b.sibling}if(!f)throw Error(he(189))}}if(a.alternate!==c)throw Error(he(190))}if(a.tag!==3)throw Error(he(188));return a.stateNode.current===a?t:o}function XI(t){return t=dF(t),t!==null?eM(t):null}function eM(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var o=eM(t);if(o!==null)return o;t=t.sibling}return null}var tM=jo.unstable_scheduleCallback,E5=jo.unstable_cancelCallback,uF=jo.unstable_shouldYield,hF=jo.unstable_requestPaint,gn=jo.unstable_now,pF=jo.unstable_getCurrentPriorityLevel,Qv=jo.unstable_ImmediatePriority,nM=jo.unstable_UserBlockingPriority,Yf=jo.unstable_NormalPriority,fF=jo.unstable_LowPriority,oM=jo.unstable_IdlePriority,Pg=null,ei=null;function gF(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(Pg,t,void 0,(t.current.flags&128)===128)}catch{}}var Er=Math.clz32?Math.clz32:kF,mF=Math.log,bF=Math.LN2;function kF(t){return t>>>=0,t===0?32:31-(mF(t)/bF|0)|0}var Yp=64,Qp=4194304;function su(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qf(t,o){var a=t.pendingLanes;if(a===0)return 0;var c=0,u=t.suspendedLanes,p=t.pingedLanes,f=a&268435455;if(f!==0){var b=f&~u;b!==0?c=su(b):(p&=f,p!==0&&(c=su(p)))}else f=a&~u,f!==0?c=su(f):p!==0&&(c=su(p));if(c===0)return 0;if(o!==0&&o!==c&&!(o&u)&&(u=c&-c,p=o&-o,u>=p||u===16&&(p&4194240)!==0))return o;if(c&4&&(c|=a&16),o=t.entangledLanes,o!==0)for(t=t.entanglements,o&=c;0<o;)a=31-Er(o),u=1<<a,c|=t[a],o&=~u;return c}function wF(t,o){switch(t){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vF(t,o){for(var a=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var f=31-Er(p),b=1<<f,m=u[f];m===-1?(!(b&a)||b&c)&&(u[f]=wF(b,o)):m<=o&&(t.expiredLanes|=b),p&=~b}}function Nw(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rM(){var t=Yp;return Yp<<=1,!(Yp&4194240)&&(Yp=64),t}function x0(t){for(var o=[],a=0;31>a;a++)o.push(t);return o}function sh(t,o,a){t.pendingLanes|=o,o!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,o=31-Er(o),t[o]=a}function CF(t,o){var a=t.pendingLanes&~o;t.pendingLanes=o,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=o,t.mutableReadLanes&=o,t.entangledLanes&=o,o=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-Er(a),p=1<<u;o[u]=0,c[u]=-1,t[u]=-1,a&=~p}}function Zv(t,o){var a=t.entangledLanes|=o;for(t=t.entanglements;a;){var c=31-Er(a),u=1<<c;u&o|t[c]&o&&(t[c]|=o),a&=~u}}var Tt=0;function iM(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sM,Jv,aM,lM,cM,Rw=!1,Zp=[],ws=null,vs=null,Cs=null,Pu=new Map,Bu=new Map,hs=[],yF="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function S5(t,o){switch(t){case"focusin":case"focusout":ws=null;break;case"dragenter":case"dragleave":vs=null;break;case"mouseover":case"mouseout":Cs=null;break;case"pointerover":case"pointerout":Pu.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bu.delete(o.pointerId)}}function Fd(t,o,a,c,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:o,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[u]},o!==null&&(o=lh(o),o!==null&&Jv(o)),t):(t.eventSystemFlags|=c,o=t.targetContainers,u!==null&&o.indexOf(u)===-1&&o.push(u),t)}function AF(t,o,a,c,u){switch(o){case"focusin":return ws=Fd(ws,t,o,a,c,u),!0;case"dragenter":return vs=Fd(vs,t,o,a,c,u),!0;case"mouseover":return Cs=Fd(Cs,t,o,a,c,u),!0;case"pointerover":var p=u.pointerId;return Pu.set(p,Fd(Pu.get(p)||null,t,o,a,c,u)),!0;case"gotpointercapture":return p=u.pointerId,Bu.set(p,Fd(Bu.get(p)||null,t,o,a,c,u)),!0}return!1}function dM(t){var o=_a(t.target);if(o!==null){var a=qa(o);if(a!==null){if(o=a.tag,o===13){if(o=JI(a),o!==null){t.blockedOn=o,cM(t.priority,function(){aM(a)});return}}else if(o===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ef(t){if(t.blockedOn!==null)return!1;for(var o=t.targetContainers;0<o.length;){var a=Ow(t.domEventName,t.eventSystemFlags,o[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);Iw=c,a.target.dispatchEvent(c),Iw=null}else return o=lh(a),o!==null&&Jv(o),t.blockedOn=a,!1;o.shift()}return!0}function D5(t,o,a){Ef(t)&&a.delete(o)}function _F(){Rw=!1,ws!==null&&Ef(ws)&&(ws=null),vs!==null&&Ef(vs)&&(vs=null),Cs!==null&&Ef(Cs)&&(Cs=null),Pu.forEach(D5),Bu.forEach(D5)}function $d(t,o){t.blockedOn===o&&(t.blockedOn=null,Rw||(Rw=!0,jo.unstable_scheduleCallback(jo.unstable_NormalPriority,_F)))}function Nu(t){function o(u){return $d(u,t)}if(0<Zp.length){$d(Zp[0],t);for(var a=1;a<Zp.length;a++){var c=Zp[a];c.blockedOn===t&&(c.blockedOn=null)}}for(ws!==null&&$d(ws,t),vs!==null&&$d(vs,t),Cs!==null&&$d(Cs,t),Pu.forEach(o),Bu.forEach(o),a=0;a<hs.length;a++)c=hs[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<hs.length&&(a=hs[0],a.blockedOn===null);)dM(a),a.blockedOn===null&&hs.shift()}var vc=ji.ReactCurrentBatchConfig,Zf=!0;function xF(t,o,a,c){var u=Tt,p=vc.transition;vc.transition=null;try{Tt=1,Xv(t,o,a,c)}finally{Tt=u,vc.transition=p}}function EF(t,o,a,c){var u=Tt,p=vc.transition;vc.transition=null;try{Tt=4,Xv(t,o,a,c)}finally{Tt=u,vc.transition=p}}function Xv(t,o,a,c){if(Zf){var u=Ow(t,o,a,c);if(u===null)R0(t,o,c,Jf,a),S5(t,c);else if(AF(u,t,o,a,c))c.stopPropagation();else if(S5(t,c),o&4&&-1<yF.indexOf(t)){for(;u!==null;){var p=lh(u);if(p!==null&&sM(p),p=Ow(t,o,a,c),p===null&&R0(t,o,c,Jf,a),p===u)break;u=p}u!==null&&c.stopPropagation()}else R0(t,o,c,null,a)}}var Jf=null;function Ow(t,o,a,c){if(Jf=null,t=Yv(c),t=_a(t),t!==null)if(o=qa(t),o===null)t=null;else if(a=o.tag,a===13){if(t=JI(o),t!==null)return t;t=null}else if(a===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;t=null}else o!==t&&(t=null);return Jf=t,null}function uM(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pF()){case Qv:return 1;case nM:return 4;case Yf:case fF:return 16;case oM:return 536870912;default:return 16}default:return 16}}var gs=null,eC=null,Sf=null;function hM(){if(Sf)return Sf;var t,o=eC,a=o.length,c,u="value"in gs?gs.value:gs.textContent,p=u.length;for(t=0;t<a&&o[t]===u[t];t++);var f=a-t;for(c=1;c<=f&&o[a-c]===u[p-c];c++);return Sf=u.slice(t,1<c?1-c:void 0)}function Df(t){var o=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&o===13&&(t=13)):t=o,t===10&&(t=13),32<=t||t===13?t:0}function Jp(){return!0}function T5(){return!1}function Vo(t){function o(a,c,u,p,f){this._reactName=a,this._targetInst=u,this.type=c,this.nativeEvent=p,this.target=f,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(p):p[b]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Jp:T5,this.isPropagationStopped=T5,this}return en(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jp)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jp)},persist:function(){},isPersistent:Jp}),o}var Wc={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tC=Vo(Wc),ah=en({},Wc,{view:0,detail:0}),SF=Vo(ah),E0,S0,Vd,Bg=en({},ah,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nC,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vd&&(Vd&&t.type==="mousemove"?(E0=t.screenX-Vd.screenX,S0=t.screenY-Vd.screenY):S0=E0=0,Vd=t),E0)},movementY:function(t){return"movementY"in t?t.movementY:S0}}),I5=Vo(Bg),DF=en({},Bg,{dataTransfer:0}),TF=Vo(DF),IF=en({},ah,{relatedTarget:0}),D0=Vo(IF),MF=en({},Wc,{animationName:0,elapsedTime:0,pseudoElement:0}),PF=Vo(MF),BF=en({},Wc,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NF=Vo(BF),RF=en({},Wc,{data:0}),M5=Vo(RF),OF={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LF={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zF={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jF(t){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(t):(t=zF[t])?!!o[t]:!1}function nC(){return jF}var FF=en({},ah,{key:function(t){if(t.key){var o=OF[t.key]||t.key;if(o!=="Unidentified")return o}return t.type==="keypress"?(t=Df(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LF[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nC,charCode:function(t){return t.type==="keypress"?Df(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Df(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$F=Vo(FF),VF=en({},Bg,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),P5=Vo(VF),UF=en({},ah,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nC}),HF=Vo(UF),WF=en({},Wc,{propertyName:0,elapsedTime:0,pseudoElement:0}),GF=Vo(WF),qF=en({},Bg,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KF=Vo(qF),YF=[9,13,27,32],oC=Pi&&"CompositionEvent"in window,fu=null;Pi&&"documentMode"in document&&(fu=document.documentMode);var QF=Pi&&"TextEvent"in window&&!fu,pM=Pi&&(!oC||fu&&8<fu&&11>=fu),B5=String.fromCharCode(32),N5=!1;function fM(t,o){switch(t){case"keyup":return YF.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gM(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rc=!1;function ZF(t,o){switch(t){case"compositionend":return gM(o);case"keypress":return o.which!==32?null:(N5=!0,B5);case"textInput":return t=o.data,t===B5&&N5?null:t;default:return null}}function JF(t,o){if(rc)return t==="compositionend"||!oC&&fM(t,o)?(t=hM(),Sf=eC=gs=null,rc=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return pM&&o.locale!=="ko"?null:o.data;default:return null}}var XF={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function R5(t){var o=t&&t.nodeName&&t.nodeName.toLowerCase();return o==="input"?!!XF[t.type]:o==="textarea"}function mM(t,o,a,c){qI(c),o=Xf(o,"onChange"),0<o.length&&(a=new tC("onChange","change",null,a,c),t.push({event:a,listeners:o}))}var gu=null,Ru=null;function e8(t){SM(t,0)}function Ng(t){var o=ac(t);if(FI(o))return t}function t8(t,o){if(t==="change")return o}var bM=!1;if(Pi){var T0;if(Pi){var I0="oninput"in document;if(!I0){var O5=document.createElement("div");O5.setAttribute("oninput","return;"),I0=typeof O5.oninput=="function"}T0=I0}else T0=!1;bM=T0&&(!document.documentMode||9<document.documentMode)}function L5(){gu&&(gu.detachEvent("onpropertychange",kM),Ru=gu=null)}function kM(t){if(t.propertyName==="value"&&Ng(Ru)){var o=[];mM(o,Ru,t,Yv(t)),ZI(e8,o)}}function n8(t,o,a){t==="focusin"?(L5(),gu=o,Ru=a,gu.attachEvent("onpropertychange",kM)):t==="focusout"&&L5()}function o8(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ng(Ru)}function r8(t,o){if(t==="click")return Ng(o)}function i8(t,o){if(t==="input"||t==="change")return Ng(o)}function s8(t,o){return t===o&&(t!==0||1/t===1/o)||t!==t&&o!==o}var Tr=typeof Object.is=="function"?Object.is:s8;function Ou(t,o){if(Tr(t,o))return!0;if(typeof t!="object"||t===null||typeof o!="object"||o===null)return!1;var a=Object.keys(t),c=Object.keys(o);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var u=a[c];if(!kw.call(o,u)||!Tr(t[u],o[u]))return!1}return!0}function z5(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function j5(t,o){var a=z5(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=o&&c>=o)return{node:a,offset:o-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=z5(a)}}function wM(t,o){return t&&o?t===o?!0:t&&t.nodeType===3?!1:o&&o.nodeType===3?wM(t,o.parentNode):"contains"in t?t.contains(o):t.compareDocumentPosition?!!(t.compareDocumentPosition(o)&16):!1:!1}function vM(){for(var t=window,o=Gf();o instanceof t.HTMLIFrameElement;){try{var a=typeof o.contentWindow.location.href=="string"}catch{a=!1}if(a)t=o.contentWindow;else break;o=Gf(t.document)}return o}function rC(t){var o=t&&t.nodeName&&t.nodeName.toLowerCase();return o&&(o==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||o==="textarea"||t.contentEditable==="true")}function a8(t){var o=vM(),a=t.focusedElem,c=t.selectionRange;if(o!==a&&a&&a.ownerDocument&&wM(a.ownerDocument.documentElement,a)){if(c!==null&&rC(a)){if(o=c.start,t=c.end,t===void 0&&(t=o),"selectionStart"in a)a.selectionStart=o,a.selectionEnd=Math.min(t,a.value.length);else if(t=(o=a.ownerDocument||document)&&o.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,p=Math.min(c.start,u);c=c.end===void 0?p:Math.min(c.end,u),!t.extend&&p>c&&(u=c,c=p,p=u),u=j5(a,p);var f=j5(a,c);u&&f&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==f.node||t.focusOffset!==f.offset)&&(o=o.createRange(),o.setStart(u.node,u.offset),t.removeAllRanges(),p>c?(t.addRange(o),t.extend(f.node,f.offset)):(o.setEnd(f.node,f.offset),t.addRange(o)))}}for(o=[],t=a;t=t.parentNode;)t.nodeType===1&&o.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<o.length;a++)t=o[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l8=Pi&&"documentMode"in document&&11>=document.documentMode,ic=null,Lw=null,mu=null,zw=!1;function F5(t,o,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zw||ic==null||ic!==Gf(c)||(c=ic,"selectionStart"in c&&rC(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),mu&&Ou(mu,c)||(mu=c,c=Xf(Lw,"onSelect"),0<c.length&&(o=new tC("onSelect","select",null,o,a),t.push({event:o,listeners:c}),o.target=ic)))}function Xp(t,o){var a={};return a[t.toLowerCase()]=o.toLowerCase(),a["Webkit"+t]="webkit"+o,a["Moz"+t]="moz"+o,a}var sc={animationend:Xp("Animation","AnimationEnd"),animationiteration:Xp("Animation","AnimationIteration"),animationstart:Xp("Animation","AnimationStart"),transitionend:Xp("Transition","TransitionEnd")},M0={},CM={};Pi&&(CM=document.createElement("div").style,"AnimationEvent"in window||(delete sc.animationend.animation,delete sc.animationiteration.animation,delete sc.animationstart.animation),"TransitionEvent"in window||delete sc.transitionend.transition);function Rg(t){if(M0[t])return M0[t];if(!sc[t])return t;var o=sc[t],a;for(a in o)if(o.hasOwnProperty(a)&&a in CM)return M0[t]=o[a];return t}var yM=Rg("animationend"),AM=Rg("animationiteration"),_M=Rg("animationstart"),xM=Rg("transitionend"),EM=new Map,$5="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ms(t,o){EM.set(t,o),Ga(o,[t])}for(var P0=0;P0<$5.length;P0++){var B0=$5[P0],c8=B0.toLowerCase(),d8=B0[0].toUpperCase()+B0.slice(1);Ms(c8,"on"+d8)}Ms(yM,"onAnimationEnd");Ms(AM,"onAnimationIteration");Ms(_M,"onAnimationStart");Ms("dblclick","onDoubleClick");Ms("focusin","onFocus");Ms("focusout","onBlur");Ms(xM,"onTransitionEnd");xc("onMouseEnter",["mouseout","mouseover"]);xc("onMouseLeave",["mouseout","mouseover"]);xc("onPointerEnter",["pointerout","pointerover"]);xc("onPointerLeave",["pointerout","pointerover"]);Ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ga("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var au="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u8=new Set("cancel close invalid load scroll toggle".split(" ").concat(au));function V5(t,o,a){var c=t.type||"unknown-event";t.currentTarget=a,cF(c,o,void 0,t),t.currentTarget=null}function SM(t,o){o=(o&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],u=c.event;c=c.listeners;e:{var p=void 0;if(o)for(var f=c.length-1;0<=f;f--){var b=c[f],m=b.instance,v=b.currentTarget;if(b=b.listener,m!==p&&u.isPropagationStopped())break e;V5(u,b,v),p=m}else for(f=0;f<c.length;f++){if(b=c[f],m=b.instance,v=b.currentTarget,b=b.listener,m!==p&&u.isPropagationStopped())break e;V5(u,b,v),p=m}}}if(Kf)throw t=Bw,Kf=!1,Bw=null,t}function Ut(t,o){var a=o[Uw];a===void 0&&(a=o[Uw]=new Set);var c=t+"__bubble";a.has(c)||(DM(o,t,2,!1),a.add(c))}function N0(t,o,a){var c=0;o&&(c|=4),DM(a,t,c,o)}var ef="_reactListening"+Math.random().toString(36).slice(2);function Lu(t){if(!t[ef]){t[ef]=!0,RI.forEach(function(a){a!=="selectionchange"&&(u8.has(a)||N0(a,!1,t),N0(a,!0,t))});var o=t.nodeType===9?t:t.ownerDocument;o===null||o[ef]||(o[ef]=!0,N0("selectionchange",!1,o))}}function DM(t,o,a,c){switch(uM(o)){case 1:var u=xF;break;case 4:u=EF;break;default:u=Xv}a=u.bind(null,o,a,t),u=void 0,!Pw||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(o,a,{capture:!0,passive:u}):t.addEventListener(o,a,!0):u!==void 0?t.addEventListener(o,a,{passive:u}):t.addEventListener(o,a,!1)}function R0(t,o,a,c,u){var p=c;if(!(o&1)&&!(o&2)&&c!==null)e:for(;;){if(c===null)return;var f=c.tag;if(f===3||f===4){var b=c.stateNode.containerInfo;if(b===u||b.nodeType===8&&b.parentNode===u)break;if(f===4)for(f=c.return;f!==null;){var m=f.tag;if((m===3||m===4)&&(m=f.stateNode.containerInfo,m===u||m.nodeType===8&&m.parentNode===u))return;f=f.return}for(;b!==null;){if(f=_a(b),f===null)return;if(m=f.tag,m===5||m===6){c=p=f;continue e}b=b.parentNode}}c=c.return}ZI(function(){var v=p,A=Yv(a),_=[];e:{var y=EM.get(t);if(y!==void 0){var E=tC,S=t;switch(t){case"keypress":if(Df(a)===0)break e;case"keydown":case"keyup":E=$F;break;case"focusin":S="focus",E=D0;break;case"focusout":S="blur",E=D0;break;case"beforeblur":case"afterblur":E=D0;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=I5;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=TF;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=HF;break;case yM:case AM:case _M:E=PF;break;case xM:E=GF;break;case"scroll":E=SF;break;case"wheel":E=KF;break;case"copy":case"cut":case"paste":E=NF;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=P5}var D=(o&4)!==0,R=!D&&t==="scroll",I=D?y!==null?y+"Capture":null:y;D=[];for(var P=v,B;P!==null;){B=P;var F=B.stateNode;if(B.tag===5&&F!==null&&(B=F,I!==null&&(F=Mu(P,I),F!=null&&D.push(zu(P,F,B)))),R)break;P=P.return}0<D.length&&(y=new E(y,S,null,a,A),_.push({event:y,listeners:D}))}}if(!(o&7)){e:{if(y=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",y&&a!==Iw&&(S=a.relatedTarget||a.fromElement)&&(_a(S)||S[Bi]))break e;if((E||y)&&(y=A.window===A?A:(y=A.ownerDocument)?y.defaultView||y.parentWindow:window,E?(S=a.relatedTarget||a.toElement,E=v,S=S?_a(S):null,S!==null&&(R=qa(S),S!==R||S.tag!==5&&S.tag!==6)&&(S=null)):(E=null,S=v),E!==S)){if(D=I5,F="onMouseLeave",I="onMouseEnter",P="mouse",(t==="pointerout"||t==="pointerover")&&(D=P5,F="onPointerLeave",I="onPointerEnter",P="pointer"),R=E==null?y:ac(E),B=S==null?y:ac(S),y=new D(F,P+"leave",E,a,A),y.target=R,y.relatedTarget=B,F=null,_a(A)===v&&(D=new D(I,P+"enter",S,a,A),D.target=B,D.relatedTarget=R,F=D),R=F,E&&S)t:{for(D=E,I=S,P=0,B=D;B;B=Gl(B))P++;for(B=0,F=I;F;F=Gl(F))B++;for(;0<P-B;)D=Gl(D),P--;for(;0<B-P;)I=Gl(I),B--;for(;P--;){if(D===I||I!==null&&D===I.alternate)break t;D=Gl(D),I=Gl(I)}D=null}else D=null;E!==null&&U5(_,y,E,D,!1),S!==null&&R!==null&&U5(_,R,S,D,!0)}}e:{if(y=v?ac(v):window,E=y.nodeName&&y.nodeName.toLowerCase(),E==="select"||E==="input"&&y.type==="file")var M=t8;else if(R5(y))if(bM)M=i8;else{M=o8;var W=n8}else(E=y.nodeName)&&E.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(M=r8);if(M&&(M=M(t,v))){mM(_,M,a,A);break e}W&&W(t,y,v),t==="focusout"&&(W=y._wrapperState)&&W.controlled&&y.type==="number"&&xw(y,"number",y.value)}switch(W=v?ac(v):window,t){case"focusin":(R5(W)||W.contentEditable==="true")&&(ic=W,Lw=v,mu=null);break;case"focusout":mu=Lw=ic=null;break;case"mousedown":zw=!0;break;case"contextmenu":case"mouseup":case"dragend":zw=!1,F5(_,a,A);break;case"selectionchange":if(l8)break;case"keydown":case"keyup":F5(_,a,A)}var H;if(oC)e:{switch(t){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else rc?fM(t,a)&&(K="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(pM&&a.locale!=="ko"&&(rc||K!=="onCompositionStart"?K==="onCompositionEnd"&&rc&&(H=hM()):(gs=A,eC="value"in gs?gs.value:gs.textContent,rc=!0)),W=Xf(v,K),0<W.length&&(K=new M5(K,t,null,a,A),_.push({event:K,listeners:W}),H?K.data=H:(H=gM(a),H!==null&&(K.data=H)))),(H=QF?ZF(t,a):JF(t,a))&&(v=Xf(v,"onBeforeInput"),0<v.length&&(A=new M5("onBeforeInput","beforeinput",null,a,A),_.push({event:A,listeners:v}),A.data=H))}SM(_,o)})}function zu(t,o,a){return{instance:t,listener:o,currentTarget:a}}function Xf(t,o){for(var a=o+"Capture",c=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=Mu(t,a),p!=null&&c.unshift(zu(t,p,u)),p=Mu(t,o),p!=null&&c.push(zu(t,p,u))),t=t.return}return c}function Gl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function U5(t,o,a,c,u){for(var p=o._reactName,f=[];a!==null&&a!==c;){var b=a,m=b.alternate,v=b.stateNode;if(m!==null&&m===c)break;b.tag===5&&v!==null&&(b=v,u?(m=Mu(a,p),m!=null&&f.unshift(zu(a,m,b))):u||(m=Mu(a,p),m!=null&&f.push(zu(a,m,b)))),a=a.return}f.length!==0&&t.push({event:o,listeners:f})}var h8=/\r\n?/g,p8=/\u0000|\uFFFD/g;function H5(t){return(typeof t=="string"?t:""+t).replace(h8,`
`).replace(p8,"")}function tf(t,o,a){if(o=H5(o),H5(t)!==o&&a)throw Error(he(425))}function eg(){}var jw=null,Fw=null;function $w(t,o){return t==="textarea"||t==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Vw=typeof setTimeout=="function"?setTimeout:void 0,f8=typeof clearTimeout=="function"?clearTimeout:void 0,W5=typeof Promise=="function"?Promise:void 0,g8=typeof queueMicrotask=="function"?queueMicrotask:typeof W5<"u"?function(t){return W5.resolve(null).then(t).catch(m8)}:Vw;function m8(t){setTimeout(function(){throw t})}function O0(t,o){var a=o,c=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(c===0){t.removeChild(u),Nu(o);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=u}while(a);Nu(o)}function ys(t){for(;t!=null;t=t.nextSibling){var o=t.nodeType;if(o===1||o===3)break;if(o===8){if(o=t.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return t}function G5(t){t=t.previousSibling;for(var o=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(o===0)return t;o--}else a==="/$"&&o++}t=t.previousSibling}return null}var Gc=Math.random().toString(36).slice(2),Qr="__reactFiber$"+Gc,ju="__reactProps$"+Gc,Bi="__reactContainer$"+Gc,Uw="__reactEvents$"+Gc,b8="__reactListeners$"+Gc,k8="__reactHandles$"+Gc;function _a(t){var o=t[Qr];if(o)return o;for(var a=t.parentNode;a;){if(o=a[Bi]||a[Qr]){if(a=o.alternate,o.child!==null||a!==null&&a.child!==null)for(t=G5(t);t!==null;){if(a=t[Qr])return a;t=G5(t)}return o}t=a,a=t.parentNode}return null}function lh(t){return t=t[Qr]||t[Bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ac(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function Og(t){return t[ju]||null}var Hw=[],lc=-1;function Ps(t){return{current:t}}function Ht(t){0>lc||(t.current=Hw[lc],Hw[lc]=null,lc--)}function Ft(t,o){lc++,Hw[lc]=t.current,t.current=o}var Ds={},oo=Ps(Ds),ko=Ps(!1),Ra=Ds;function Ec(t,o){var a=t.type.contextTypes;if(!a)return Ds;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===o)return c.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in a)u[p]=o[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=o,t.__reactInternalMemoizedMaskedChildContext=u),u}function wo(t){return t=t.childContextTypes,t!=null}function tg(){Ht(ko),Ht(oo)}function q5(t,o,a){if(oo.current!==Ds)throw Error(he(168));Ft(oo,o),Ft(ko,a)}function TM(t,o,a){var c=t.stateNode;if(o=o.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var u in c)if(!(u in o))throw Error(he(108,nF(t)||"Unknown",u));return en({},a,c)}function ng(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ds,Ra=oo.current,Ft(oo,t),Ft(ko,ko.current),!0}function K5(t,o,a){var c=t.stateNode;if(!c)throw Error(he(169));a?(t=TM(t,o,Ra),c.__reactInternalMemoizedMergedChildContext=t,Ht(ko),Ht(oo),Ft(oo,t)):Ht(ko),Ft(ko,a)}var Si=null,Lg=!1,L0=!1;function IM(t){Si===null?Si=[t]:Si.push(t)}function w8(t){Lg=!0,IM(t)}function Bs(){if(!L0&&Si!==null){L0=!0;var t=0,o=Tt;try{var a=Si;for(Tt=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Si=null,Lg=!1}catch(u){throw Si!==null&&(Si=Si.slice(t+1)),tM(Qv,Bs),u}finally{Tt=o,L0=!1}}return null}var cc=[],dc=0,og=null,rg=0,Zo=[],Jo=0,Oa=null,Di=1,Ti="";function ga(t,o){cc[dc++]=rg,cc[dc++]=og,og=t,rg=o}function MM(t,o,a){Zo[Jo++]=Di,Zo[Jo++]=Ti,Zo[Jo++]=Oa,Oa=t;var c=Di;t=Ti;var u=32-Er(c)-1;c&=~(1<<u),a+=1;var p=32-Er(o)+u;if(30<p){var f=u-u%5;p=(c&(1<<f)-1).toString(32),c>>=f,u-=f,Di=1<<32-Er(o)+u|a<<u|c,Ti=p+t}else Di=1<<p|a<<u|c,Ti=t}function iC(t){t.return!==null&&(ga(t,1),MM(t,1,0))}function sC(t){for(;t===og;)og=cc[--dc],cc[dc]=null,rg=cc[--dc],cc[dc]=null;for(;t===Oa;)Oa=Zo[--Jo],Zo[Jo]=null,Ti=Zo[--Jo],Zo[Jo]=null,Di=Zo[--Jo],Zo[Jo]=null}var Lo=null,Ro=null,Yt=!1,xr=null;function PM(t,o){var a=er(5,null,null,0);a.elementType="DELETED",a.stateNode=o,a.return=t,o=t.deletions,o===null?(t.deletions=[a],t.flags|=16):o.push(a)}function Y5(t,o){switch(t.tag){case 5:var a=t.type;return o=o.nodeType!==1||a.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(t.stateNode=o,Lo=t,Ro=ys(o.firstChild),!0):!1;case 6:return o=t.pendingProps===""||o.nodeType!==3?null:o,o!==null?(t.stateNode=o,Lo=t,Ro=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(a=Oa!==null?{id:Di,overflow:Ti}:null,t.memoizedState={dehydrated:o,treeContext:a,retryLane:1073741824},a=er(18,null,null,0),a.stateNode=o,a.return=t,t.child=a,Lo=t,Ro=null,!0):!1;default:return!1}}function Ww(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gw(t){if(Yt){var o=Ro;if(o){var a=o;if(!Y5(t,o)){if(Ww(t))throw Error(he(418));o=ys(a.nextSibling);var c=Lo;o&&Y5(t,o)?PM(c,a):(t.flags=t.flags&-4097|2,Yt=!1,Lo=t)}}else{if(Ww(t))throw Error(he(418));t.flags=t.flags&-4097|2,Yt=!1,Lo=t}}}function Q5(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lo=t}function nf(t){if(t!==Lo)return!1;if(!Yt)return Q5(t),Yt=!0,!1;var o;if((o=t.tag!==3)&&!(o=t.tag!==5)&&(o=t.type,o=o!=="head"&&o!=="body"&&!$w(t.type,t.memoizedProps)),o&&(o=Ro)){if(Ww(t))throw BM(),Error(he(418));for(;o;)PM(t,o),o=ys(o.nextSibling)}if(Q5(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,o=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(o===0){Ro=ys(t.nextSibling);break e}o--}else a!=="$"&&a!=="$!"&&a!=="$?"||o++}t=t.nextSibling}Ro=null}}else Ro=Lo?ys(t.stateNode.nextSibling):null;return!0}function BM(){for(var t=Ro;t;)t=ys(t.nextSibling)}function Sc(){Ro=Lo=null,Yt=!1}function aC(t){xr===null?xr=[t]:xr.push(t)}var v8=ji.ReactCurrentBatchConfig;function Ar(t,o){if(t&&t.defaultProps){o=en({},o),t=t.defaultProps;for(var a in t)o[a]===void 0&&(o[a]=t[a]);return o}return o}var ig=Ps(null),sg=null,uc=null,lC=null;function cC(){lC=uc=sg=null}function dC(t){var o=ig.current;Ht(ig),t._currentValue=o}function qw(t,o,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&o)!==o?(t.childLanes|=o,c!==null&&(c.childLanes|=o)):c!==null&&(c.childLanes&o)!==o&&(c.childLanes|=o),t===a)break;t=t.return}}function Cc(t,o){sg=t,lC=uc=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&o&&(bo=!0),t.firstContext=null)}function ir(t){var o=t._currentValue;if(lC!==t)if(t={context:t,memoizedValue:o,next:null},uc===null){if(sg===null)throw Error(he(308));uc=t,sg.dependencies={lanes:0,firstContext:t}}else uc=uc.next=t;return o}var xa=null;function uC(t){xa===null?xa=[t]:xa.push(t)}function NM(t,o,a,c){var u=o.interleaved;return u===null?(a.next=a,uC(o)):(a.next=u.next,u.next=a),o.interleaved=a,Ni(t,c)}function Ni(t,o){t.lanes|=o;var a=t.alternate;for(a!==null&&(a.lanes|=o),a=t,t=t.return;t!==null;)t.childLanes|=o,a=t.alternate,a!==null&&(a.childLanes|=o),a=t,t=t.return;return a.tag===3?a.stateNode:null}var us=!1;function hC(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function RM(t,o){t=t.updateQueue,o.updateQueue===t&&(o.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,o){return{eventTime:t,lane:o,tag:0,payload:null,callback:null,next:null}}function As(t,o,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,ft&2){var u=c.pending;return u===null?o.next=o:(o.next=u.next,u.next=o),c.pending=o,Ni(t,a)}return u=c.interleaved,u===null?(o.next=o,uC(c)):(o.next=u.next,u.next=o),c.interleaved=o,Ni(t,a)}function Tf(t,o,a){if(o=o.updateQueue,o!==null&&(o=o.shared,(a&4194240)!==0)){var c=o.lanes;c&=t.pendingLanes,a|=c,o.lanes=a,Zv(t,a)}}function Z5(t,o){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var u=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var f={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?u=p=f:p=p.next=f,a=a.next}while(a!==null);p===null?u=p=o:p=p.next=o}else u=p=o;a={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=o:t.next=o,a.lastBaseUpdate=o}function ag(t,o,a,c){var u=t.updateQueue;us=!1;var p=u.firstBaseUpdate,f=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var m=b,v=m.next;m.next=null,f===null?p=v:f.next=v,f=m;var A=t.alternate;A!==null&&(A=A.updateQueue,b=A.lastBaseUpdate,b!==f&&(b===null?A.firstBaseUpdate=v:b.next=v,A.lastBaseUpdate=m))}if(p!==null){var _=u.baseState;f=0,A=v=m=null,b=p;do{var y=b.lane,E=b.eventTime;if((c&y)===y){A!==null&&(A=A.next={eventTime:E,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var S=t,D=b;switch(y=o,E=a,D.tag){case 1:if(S=D.payload,typeof S=="function"){_=S.call(E,_,y);break e}_=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=D.payload,y=typeof S=="function"?S.call(E,_,y):S,y==null)break e;_=en({},_,y);break e;case 2:us=!0}}b.callback!==null&&b.lane!==0&&(t.flags|=64,y=u.effects,y===null?u.effects=[b]:y.push(b))}else E={eventTime:E,lane:y,tag:b.tag,payload:b.payload,callback:b.callback,next:null},A===null?(v=A=E,m=_):A=A.next=E,f|=y;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;y=b,b=y.next,y.next=null,u.lastBaseUpdate=y,u.shared.pending=null}}while(1);if(A===null&&(m=_),u.baseState=m,u.firstBaseUpdate=v,u.lastBaseUpdate=A,o=u.shared.interleaved,o!==null){u=o;do f|=u.lane,u=u.next;while(u!==o)}else p===null&&(u.shared.lanes=0);za|=f,t.lanes=f,t.memoizedState=_}}function J5(t,o,a){if(t=o.effects,o.effects=null,t!==null)for(o=0;o<t.length;o++){var c=t[o],u=c.callback;if(u!==null){if(c.callback=null,c=a,typeof u!="function")throw Error(he(191,u));u.call(c)}}}var OM=new NI.Component().refs;function Kw(t,o,a,c){o=t.memoizedState,a=a(c,o),a=a==null?o:en({},o,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var zg={isMounted:function(t){return(t=t._reactInternals)?qa(t)===t:!1},enqueueSetState:function(t,o,a){t=t._reactInternals;var c=ao(),u=xs(t),p=Ii(c,u);p.payload=o,a!=null&&(p.callback=a),o=As(t,p,u),o!==null&&(Sr(o,t,u,c),Tf(o,t,u))},enqueueReplaceState:function(t,o,a){t=t._reactInternals;var c=ao(),u=xs(t),p=Ii(c,u);p.tag=1,p.payload=o,a!=null&&(p.callback=a),o=As(t,p,u),o!==null&&(Sr(o,t,u,c),Tf(o,t,u))},enqueueForceUpdate:function(t,o){t=t._reactInternals;var a=ao(),c=xs(t),u=Ii(a,c);u.tag=2,o!=null&&(u.callback=o),o=As(t,u,c),o!==null&&(Sr(o,t,c,a),Tf(o,t,c))}};function X5(t,o,a,c,u,p,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,f):o.prototype&&o.prototype.isPureReactComponent?!Ou(a,c)||!Ou(u,p):!0}function LM(t,o,a){var c=!1,u=Ds,p=o.contextType;return typeof p=="object"&&p!==null?p=ir(p):(u=wo(o)?Ra:oo.current,c=o.contextTypes,p=(c=c!=null)?Ec(t,u):Ds),o=new o(a,p),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=zg,t.stateNode=o,o._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),o}function eD(t,o,a,c){t=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(a,c),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(a,c),o.state!==t&&zg.enqueueReplaceState(o,o.state,null)}function Yw(t,o,a,c){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs=OM,hC(t);var p=o.contextType;typeof p=="object"&&p!==null?u.context=ir(p):(p=wo(o)?Ra:oo.current,u.context=Ec(t,p)),u.state=t.memoizedState,p=o.getDerivedStateFromProps,typeof p=="function"&&(Kw(t,o,p,a),u.state=t.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(o=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),o!==u.state&&zg.enqueueReplaceState(u,u.state,null),ag(t,a,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Ud(t,o,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(he(309));var c=a.stateNode}if(!c)throw Error(he(147,t));var u=c,p=""+t;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===p?o.ref:(o=function(f){var b=u.refs;b===OM&&(b=u.refs={}),f===null?delete b[p]:b[p]=f},o._stringRef=p,o)}if(typeof t!="string")throw Error(he(284));if(!a._owner)throw Error(he(290,t))}return t}function of(t,o){throw t=Object.prototype.toString.call(o),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":t))}function tD(t){var o=t._init;return o(t._payload)}function zM(t){function o(I,P){if(t){var B=I.deletions;B===null?(I.deletions=[P],I.flags|=16):B.push(P)}}function a(I,P){if(!t)return null;for(;P!==null;)o(I,P),P=P.sibling;return null}function c(I,P){for(I=new Map;P!==null;)P.key!==null?I.set(P.key,P):I.set(P.index,P),P=P.sibling;return I}function u(I,P){return I=Es(I,P),I.index=0,I.sibling=null,I}function p(I,P,B){return I.index=B,t?(B=I.alternate,B!==null?(B=B.index,B<P?(I.flags|=2,P):B):(I.flags|=2,P)):(I.flags|=1048576,P)}function f(I){return t&&I.alternate===null&&(I.flags|=2),I}function b(I,P,B,F){return P===null||P.tag!==6?(P=H0(B,I.mode,F),P.return=I,P):(P=u(P,B),P.return=I,P)}function m(I,P,B,F){var M=B.type;return M===oc?A(I,P,B.props.children,F,B.key):P!==null&&(P.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ds&&tD(M)===P.type)?(F=u(P,B.props),F.ref=Ud(I,P,B),F.return=I,F):(F=Rf(B.type,B.key,B.props,null,I.mode,F),F.ref=Ud(I,P,B),F.return=I,F)}function v(I,P,B,F){return P===null||P.tag!==4||P.stateNode.containerInfo!==B.containerInfo||P.stateNode.implementation!==B.implementation?(P=W0(B,I.mode,F),P.return=I,P):(P=u(P,B.children||[]),P.return=I,P)}function A(I,P,B,F,M){return P===null||P.tag!==7?(P=Ma(B,I.mode,F,M),P.return=I,P):(P=u(P,B),P.return=I,P)}function _(I,P,B){if(typeof P=="string"&&P!==""||typeof P=="number")return P=H0(""+P,I.mode,B),P.return=I,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Gp:return B=Rf(P.type,P.key,P.props,null,I.mode,B),B.ref=Ud(I,null,P),B.return=I,B;case nc:return P=W0(P,I.mode,B),P.return=I,P;case ds:var F=P._init;return _(I,F(P._payload),B)}if(iu(P)||zd(P))return P=Ma(P,I.mode,B,null),P.return=I,P;of(I,P)}return null}function y(I,P,B,F){var M=P!==null?P.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return M!==null?null:b(I,P,""+B,F);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Gp:return B.key===M?m(I,P,B,F):null;case nc:return B.key===M?v(I,P,B,F):null;case ds:return M=B._init,y(I,P,M(B._payload),F)}if(iu(B)||zd(B))return M!==null?null:A(I,P,B,F,null);of(I,B)}return null}function E(I,P,B,F,M){if(typeof F=="string"&&F!==""||typeof F=="number")return I=I.get(B)||null,b(P,I,""+F,M);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Gp:return I=I.get(F.key===null?B:F.key)||null,m(P,I,F,M);case nc:return I=I.get(F.key===null?B:F.key)||null,v(P,I,F,M);case ds:var W=F._init;return E(I,P,B,W(F._payload),M)}if(iu(F)||zd(F))return I=I.get(B)||null,A(P,I,F,M,null);of(P,F)}return null}function S(I,P,B,F){for(var M=null,W=null,H=P,K=P=0,Z=null;H!==null&&K<B.length;K++){H.index>K?(Z=H,H=null):Z=H.sibling;var Y=y(I,H,B[K],F);if(Y===null){H===null&&(H=Z);break}t&&H&&Y.alternate===null&&o(I,H),P=p(Y,P,K),W===null?M=Y:W.sibling=Y,W=Y,H=Z}if(K===B.length)return a(I,H),Yt&&ga(I,K),M;if(H===null){for(;K<B.length;K++)H=_(I,B[K],F),H!==null&&(P=p(H,P,K),W===null?M=H:W.sibling=H,W=H);return Yt&&ga(I,K),M}for(H=c(I,H);K<B.length;K++)Z=E(H,I,K,B[K],F),Z!==null&&(t&&Z.alternate!==null&&H.delete(Z.key===null?K:Z.key),P=p(Z,P,K),W===null?M=Z:W.sibling=Z,W=Z);return t&&H.forEach(function(te){return o(I,te)}),Yt&&ga(I,K),M}function D(I,P,B,F){var M=zd(B);if(typeof M!="function")throw Error(he(150));if(B=M.call(B),B==null)throw Error(he(151));for(var W=M=null,H=P,K=P=0,Z=null,Y=B.next();H!==null&&!Y.done;K++,Y=B.next()){H.index>K?(Z=H,H=null):Z=H.sibling;var te=y(I,H,Y.value,F);if(te===null){H===null&&(H=Z);break}t&&H&&te.alternate===null&&o(I,H),P=p(te,P,K),W===null?M=te:W.sibling=te,W=te,H=Z}if(Y.done)return a(I,H),Yt&&ga(I,K),M;if(H===null){for(;!Y.done;K++,Y=B.next())Y=_(I,Y.value,F),Y!==null&&(P=p(Y,P,K),W===null?M=Y:W.sibling=Y,W=Y);return Yt&&ga(I,K),M}for(H=c(I,H);!Y.done;K++,Y=B.next())Y=E(H,I,K,Y.value,F),Y!==null&&(t&&Y.alternate!==null&&H.delete(Y.key===null?K:Y.key),P=p(Y,P,K),W===null?M=Y:W.sibling=Y,W=Y);return t&&H.forEach(function(ce){return o(I,ce)}),Yt&&ga(I,K),M}function R(I,P,B,F){if(typeof B=="object"&&B!==null&&B.type===oc&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Gp:e:{for(var M=B.key,W=P;W!==null;){if(W.key===M){if(M=B.type,M===oc){if(W.tag===7){a(I,W.sibling),P=u(W,B.props.children),P.return=I,I=P;break e}}else if(W.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ds&&tD(M)===W.type){a(I,W.sibling),P=u(W,B.props),P.ref=Ud(I,W,B),P.return=I,I=P;break e}a(I,W);break}else o(I,W);W=W.sibling}B.type===oc?(P=Ma(B.props.children,I.mode,F,B.key),P.return=I,I=P):(F=Rf(B.type,B.key,B.props,null,I.mode,F),F.ref=Ud(I,P,B),F.return=I,I=F)}return f(I);case nc:e:{for(W=B.key;P!==null;){if(P.key===W)if(P.tag===4&&P.stateNode.containerInfo===B.containerInfo&&P.stateNode.implementation===B.implementation){a(I,P.sibling),P=u(P,B.children||[]),P.return=I,I=P;break e}else{a(I,P);break}else o(I,P);P=P.sibling}P=W0(B,I.mode,F),P.return=I,I=P}return f(I);case ds:return W=B._init,R(I,P,W(B._payload),F)}if(iu(B))return S(I,P,B,F);if(zd(B))return D(I,P,B,F);of(I,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,P!==null&&P.tag===6?(a(I,P.sibling),P=u(P,B),P.return=I,I=P):(a(I,P),P=H0(B,I.mode,F),P.return=I,I=P),f(I)):a(I,P)}return R}var Dc=zM(!0),jM=zM(!1),ch={},ti=Ps(ch),Fu=Ps(ch),$u=Ps(ch);function Ea(t){if(t===ch)throw Error(he(174));return t}function pC(t,o){switch(Ft($u,o),Ft(Fu,t),Ft(ti,ch),t=o.nodeType,t){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Sw(null,"");break;default:t=t===8?o.parentNode:o,o=t.namespaceURI||null,t=t.tagName,o=Sw(o,t)}Ht(ti),Ft(ti,o)}function Tc(){Ht(ti),Ht(Fu),Ht($u)}function FM(t){Ea($u.current);var o=Ea(ti.current),a=Sw(o,t.type);o!==a&&(Ft(Fu,t),Ft(ti,a))}function fC(t){Fu.current===t&&(Ht(ti),Ht(Fu))}var Zt=Ps(0);function lg(t){for(var o=t;o!==null;){if(o.tag===13){var a=o.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var z0=[];function gC(){for(var t=0;t<z0.length;t++)z0[t]._workInProgressVersionPrimary=null;z0.length=0}var If=ji.ReactCurrentDispatcher,j0=ji.ReactCurrentBatchConfig,La=0,Xt=null,xn=null,Rn=null,cg=!1,bu=!1,Vu=0,C8=0;function Zn(){throw Error(he(321))}function mC(t,o){if(o===null)return!1;for(var a=0;a<o.length&&a<t.length;a++)if(!Tr(t[a],o[a]))return!1;return!0}function bC(t,o,a,c,u,p){if(La=p,Xt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,If.current=t===null||t.memoizedState===null?x8:E8,t=a(c,u),bu){p=0;do{if(bu=!1,Vu=0,25<=p)throw Error(he(301));p+=1,Rn=xn=null,o.updateQueue=null,If.current=S8,t=a(c,u)}while(bu)}if(If.current=dg,o=xn!==null&&xn.next!==null,La=0,Rn=xn=Xt=null,cg=!1,o)throw Error(he(300));return t}function kC(){var t=Vu!==0;return Vu=0,t}function Gr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?Xt.memoizedState=Rn=t:Rn=Rn.next=t,Rn}function sr(){if(xn===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=xn.next;var o=Rn===null?Xt.memoizedState:Rn.next;if(o!==null)Rn=o,xn=t;else{if(t===null)throw Error(he(310));xn=t,t={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},Rn===null?Xt.memoizedState=Rn=t:Rn=Rn.next=t}return Rn}function Uu(t,o){return typeof o=="function"?o(t):o}function F0(t){var o=sr(),a=o.queue;if(a===null)throw Error(he(311));a.lastRenderedReducer=t;var c=xn,u=c.baseQueue,p=a.pending;if(p!==null){if(u!==null){var f=u.next;u.next=p.next,p.next=f}c.baseQueue=u=p,a.pending=null}if(u!==null){p=u.next,c=c.baseState;var b=f=null,m=null,v=p;do{var A=v.lane;if((La&A)===A)m!==null&&(m=m.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),c=v.hasEagerState?v.eagerState:t(c,v.action);else{var _={lane:A,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};m===null?(b=m=_,f=c):m=m.next=_,Xt.lanes|=A,za|=A}v=v.next}while(v!==null&&v!==p);m===null?f=c:m.next=b,Tr(c,o.memoizedState)||(bo=!0),o.memoizedState=c,o.baseState=f,o.baseQueue=m,a.lastRenderedState=c}if(t=a.interleaved,t!==null){u=t;do p=u.lane,Xt.lanes|=p,za|=p,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[o.memoizedState,a.dispatch]}function $0(t){var o=sr(),a=o.queue;if(a===null)throw Error(he(311));a.lastRenderedReducer=t;var c=a.dispatch,u=a.pending,p=o.memoizedState;if(u!==null){a.pending=null;var f=u=u.next;do p=t(p,f.action),f=f.next;while(f!==u);Tr(p,o.memoizedState)||(bo=!0),o.memoizedState=p,o.baseQueue===null&&(o.baseState=p),a.lastRenderedState=p}return[p,c]}function $M(){}function VM(t,o){var a=Xt,c=sr(),u=o(),p=!Tr(c.memoizedState,u);if(p&&(c.memoizedState=u,bo=!0),c=c.queue,wC(WM.bind(null,a,c,t),[t]),c.getSnapshot!==o||p||Rn!==null&&Rn.memoizedState.tag&1){if(a.flags|=2048,Hu(9,HM.bind(null,a,c,u,o),void 0,null),On===null)throw Error(he(349));La&30||UM(a,o,u)}return u}function UM(t,o,a){t.flags|=16384,t={getSnapshot:o,value:a},o=Xt.updateQueue,o===null?(o={lastEffect:null,stores:null},Xt.updateQueue=o,o.stores=[t]):(a=o.stores,a===null?o.stores=[t]:a.push(t))}function HM(t,o,a,c){o.value=a,o.getSnapshot=c,GM(o)&&qM(t)}function WM(t,o,a){return a(function(){GM(o)&&qM(t)})}function GM(t){var o=t.getSnapshot;t=t.value;try{var a=o();return!Tr(t,a)}catch{return!0}}function qM(t){var o=Ni(t,1);o!==null&&Sr(o,t,1,-1)}function nD(t){var o=Gr();return typeof t=="function"&&(t=t()),o.memoizedState=o.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uu,lastRenderedState:t},o.queue=t,t=t.dispatch=_8.bind(null,Xt,t),[o.memoizedState,t]}function Hu(t,o,a,c){return t={tag:t,create:o,destroy:a,deps:c,next:null},o=Xt.updateQueue,o===null?(o={lastEffect:null,stores:null},Xt.updateQueue=o,o.lastEffect=t.next=t):(a=o.lastEffect,a===null?o.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,o.lastEffect=t)),t}function KM(){return sr().memoizedState}function Mf(t,o,a,c){var u=Gr();Xt.flags|=t,u.memoizedState=Hu(1|o,a,void 0,c===void 0?null:c)}function jg(t,o,a,c){var u=sr();c=c===void 0?null:c;var p=void 0;if(xn!==null){var f=xn.memoizedState;if(p=f.destroy,c!==null&&mC(c,f.deps)){u.memoizedState=Hu(o,a,p,c);return}}Xt.flags|=t,u.memoizedState=Hu(1|o,a,p,c)}function oD(t,o){return Mf(8390656,8,t,o)}function wC(t,o){return jg(2048,8,t,o)}function YM(t,o){return jg(4,2,t,o)}function QM(t,o){return jg(4,4,t,o)}function ZM(t,o){if(typeof o=="function")return t=t(),o(t),function(){o(null)};if(o!=null)return t=t(),o.current=t,function(){o.current=null}}function JM(t,o,a){return a=a!=null?a.concat([t]):null,jg(4,4,ZM.bind(null,o,t),a)}function vC(){}function XM(t,o){var a=sr();o=o===void 0?null:o;var c=a.memoizedState;return c!==null&&o!==null&&mC(o,c[1])?c[0]:(a.memoizedState=[t,o],t)}function e4(t,o){var a=sr();o=o===void 0?null:o;var c=a.memoizedState;return c!==null&&o!==null&&mC(o,c[1])?c[0]:(t=t(),a.memoizedState=[t,o],t)}function t4(t,o,a){return La&21?(Tr(a,o)||(a=rM(),Xt.lanes|=a,za|=a,t.baseState=!0),o):(t.baseState&&(t.baseState=!1,bo=!0),t.memoizedState=a)}function y8(t,o){var a=Tt;Tt=a!==0&&4>a?a:4,t(!0);var c=j0.transition;j0.transition={};try{t(!1),o()}finally{Tt=a,j0.transition=c}}function n4(){return sr().memoizedState}function A8(t,o,a){var c=xs(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},o4(t))r4(o,a);else if(a=NM(t,o,a,c),a!==null){var u=ao();Sr(a,t,c,u),i4(a,o,c)}}function _8(t,o,a){var c=xs(t),u={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(o4(t))r4(o,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=o.lastRenderedReducer,p!==null))try{var f=o.lastRenderedState,b=p(f,a);if(u.hasEagerState=!0,u.eagerState=b,Tr(b,f)){var m=o.interleaved;m===null?(u.next=u,uC(o)):(u.next=m.next,m.next=u),o.interleaved=u;return}}catch{}finally{}a=NM(t,o,u,c),a!==null&&(u=ao(),Sr(a,t,c,u),i4(a,o,c))}}function o4(t){var o=t.alternate;return t===Xt||o!==null&&o===Xt}function r4(t,o){bu=cg=!0;var a=t.pending;a===null?o.next=o:(o.next=a.next,a.next=o),t.pending=o}function i4(t,o,a){if(a&4194240){var c=o.lanes;c&=t.pendingLanes,a|=c,o.lanes=a,Zv(t,a)}}var dg={readContext:ir,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},x8={readContext:ir,useCallback:function(t,o){return Gr().memoizedState=[t,o===void 0?null:o],t},useContext:ir,useEffect:oD,useImperativeHandle:function(t,o,a){return a=a!=null?a.concat([t]):null,Mf(4194308,4,ZM.bind(null,o,t),a)},useLayoutEffect:function(t,o){return Mf(4194308,4,t,o)},useInsertionEffect:function(t,o){return Mf(4,2,t,o)},useMemo:function(t,o){var a=Gr();return o=o===void 0?null:o,t=t(),a.memoizedState=[t,o],t},useReducer:function(t,o,a){var c=Gr();return o=a!==void 0?a(o):o,c.memoizedState=c.baseState=o,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},c.queue=t,t=t.dispatch=A8.bind(null,Xt,t),[c.memoizedState,t]},useRef:function(t){var o=Gr();return t={current:t},o.memoizedState=t},useState:nD,useDebugValue:vC,useDeferredValue:function(t){return Gr().memoizedState=t},useTransition:function(){var t=nD(!1),o=t[0];return t=y8.bind(null,t[1]),Gr().memoizedState=t,[o,t]},useMutableSource:function(){},useSyncExternalStore:function(t,o,a){var c=Xt,u=Gr();if(Yt){if(a===void 0)throw Error(he(407));a=a()}else{if(a=o(),On===null)throw Error(he(349));La&30||UM(c,o,a)}u.memoizedState=a;var p={value:a,getSnapshot:o};return u.queue=p,oD(WM.bind(null,c,p,t),[t]),c.flags|=2048,Hu(9,HM.bind(null,c,p,a,o),void 0,null),a},useId:function(){var t=Gr(),o=On.identifierPrefix;if(Yt){var a=Ti,c=Di;a=(c&~(1<<32-Er(c)-1)).toString(32)+a,o=":"+o+"R"+a,a=Vu++,0<a&&(o+="H"+a.toString(32)),o+=":"}else a=C8++,o=":"+o+"r"+a.toString(32)+":";return t.memoizedState=o},unstable_isNewReconciler:!1},E8={readContext:ir,useCallback:XM,useContext:ir,useEffect:wC,useImperativeHandle:JM,useInsertionEffect:YM,useLayoutEffect:QM,useMemo:e4,useReducer:F0,useRef:KM,useState:function(){return F0(Uu)},useDebugValue:vC,useDeferredValue:function(t){var o=sr();return t4(o,xn.memoizedState,t)},useTransition:function(){var t=F0(Uu)[0],o=sr().memoizedState;return[t,o]},useMutableSource:$M,useSyncExternalStore:VM,useId:n4,unstable_isNewReconciler:!1},S8={readContext:ir,useCallback:XM,useContext:ir,useEffect:wC,useImperativeHandle:JM,useInsertionEffect:YM,useLayoutEffect:QM,useMemo:e4,useReducer:$0,useRef:KM,useState:function(){return $0(Uu)},useDebugValue:vC,useDeferredValue:function(t){var o=sr();return xn===null?o.memoizedState=t:t4(o,xn.memoizedState,t)},useTransition:function(){var t=$0(Uu)[0],o=sr().memoizedState;return[t,o]},useMutableSource:$M,useSyncExternalStore:VM,useId:n4,unstable_isNewReconciler:!1};function Ic(t,o){try{var a="",c=o;do a+=tF(c),c=c.return;while(c);var u=a}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:o,stack:u,digest:null}}function V0(t,o,a){return{value:t,source:null,stack:a??null,digest:o??null}}function Qw(t,o){try{console.error(o.value)}catch(a){setTimeout(function(){throw a})}}var D8=typeof WeakMap=="function"?WeakMap:Map;function s4(t,o,a){a=Ii(-1,a),a.tag=3,a.payload={element:null};var c=o.value;return a.callback=function(){hg||(hg=!0,sv=c),Qw(t,o)},a}function a4(t,o,a){a=Ii(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=o.value;a.payload=function(){return c(u)},a.callback=function(){Qw(t,o)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Qw(t,o),typeof c!="function"&&(_s===null?_s=new Set([this]):_s.add(this));var f=o.stack;this.componentDidCatch(o.value,{componentStack:f!==null?f:""})}),a}function rD(t,o,a){var c=t.pingCache;if(c===null){c=t.pingCache=new D8;var u=new Set;c.set(o,u)}else u=c.get(o),u===void 0&&(u=new Set,c.set(o,u));u.has(a)||(u.add(a),t=V8.bind(null,t,o,a),o.then(t,t))}function iD(t){do{var o;if((o=t.tag===13)&&(o=t.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return t;t=t.return}while(t!==null);return null}function sD(t,o,a,c,u){return t.mode&1?(t.flags|=65536,t.lanes=u,t):(t===o?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(o=Ii(-1,1),o.tag=2,As(a,o,1))),a.lanes|=1),t)}var T8=ji.ReactCurrentOwner,bo=!1;function ro(t,o,a,c){o.child=t===null?jM(o,null,a,c):Dc(o,t.child,a,c)}function aD(t,o,a,c,u){a=a.render;var p=o.ref;return Cc(o,u),c=bC(t,o,a,c,p,u),a=kC(),t!==null&&!bo?(o.updateQueue=t.updateQueue,o.flags&=-2053,t.lanes&=~u,Ri(t,o,u)):(Yt&&a&&iC(o),o.flags|=1,ro(t,o,c,u),o.child)}function lD(t,o,a,c,u){if(t===null){var p=a.type;return typeof p=="function"&&!DC(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(o.tag=15,o.type=p,l4(t,o,p,c,u)):(t=Rf(a.type,null,c,o,o.mode,u),t.ref=o.ref,t.return=o,o.child=t)}if(p=t.child,!(t.lanes&u)){var f=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ou,a(f,c)&&t.ref===o.ref)return Ri(t,o,u)}return o.flags|=1,t=Es(p,c),t.ref=o.ref,t.return=o,o.child=t}function l4(t,o,a,c,u){if(t!==null){var p=t.memoizedProps;if(Ou(p,c)&&t.ref===o.ref)if(bo=!1,o.pendingProps=c=p,(t.lanes&u)!==0)t.flags&131072&&(bo=!0);else return o.lanes=t.lanes,Ri(t,o,u)}return Zw(t,o,a,c,u)}function c4(t,o,a){var c=o.pendingProps,u=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(pc,Bo),Bo|=a;else{if(!(a&1073741824))return t=p!==null?p.baseLanes|a:a,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:t,cachePool:null,transitions:null},o.updateQueue=null,Ft(pc,Bo),Bo|=t,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ft(pc,Bo),Bo|=c}else p!==null?(c=p.baseLanes|a,o.memoizedState=null):c=a,Ft(pc,Bo),Bo|=c;return ro(t,o,u,a),o.child}function d4(t,o){var a=o.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(o.flags|=512,o.flags|=2097152)}function Zw(t,o,a,c,u){var p=wo(a)?Ra:oo.current;return p=Ec(o,p),Cc(o,u),a=bC(t,o,a,c,p,u),c=kC(),t!==null&&!bo?(o.updateQueue=t.updateQueue,o.flags&=-2053,t.lanes&=~u,Ri(t,o,u)):(Yt&&c&&iC(o),o.flags|=1,ro(t,o,a,u),o.child)}function cD(t,o,a,c,u){if(wo(a)){var p=!0;ng(o)}else p=!1;if(Cc(o,u),o.stateNode===null)Pf(t,o),LM(o,a,c),Yw(o,a,c,u),c=!0;else if(t===null){var f=o.stateNode,b=o.memoizedProps;f.props=b;var m=f.context,v=a.contextType;typeof v=="object"&&v!==null?v=ir(v):(v=wo(a)?Ra:oo.current,v=Ec(o,v));var A=a.getDerivedStateFromProps,_=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function";_||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==c||m!==v)&&eD(o,f,c,v),us=!1;var y=o.memoizedState;f.state=y,ag(o,c,f,u),m=o.memoizedState,b!==c||y!==m||ko.current||us?(typeof A=="function"&&(Kw(o,a,A,c),m=o.memoizedState),(b=us||X5(o,a,b,c,y,m,v))?(_||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(o.flags|=4194308)):(typeof f.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=c,o.memoizedState=m),f.props=c,f.state=m,f.context=v,c=b):(typeof f.componentDidMount=="function"&&(o.flags|=4194308),c=!1)}else{f=o.stateNode,RM(t,o),b=o.memoizedProps,v=o.type===o.elementType?b:Ar(o.type,b),f.props=v,_=o.pendingProps,y=f.context,m=a.contextType,typeof m=="object"&&m!==null?m=ir(m):(m=wo(a)?Ra:oo.current,m=Ec(o,m));var E=a.getDerivedStateFromProps;(A=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==_||y!==m)&&eD(o,f,c,m),us=!1,y=o.memoizedState,f.state=y,ag(o,c,f,u);var S=o.memoizedState;b!==_||y!==S||ko.current||us?(typeof E=="function"&&(Kw(o,a,E,c),S=o.memoizedState),(v=us||X5(o,a,v,c,y,S,m)||!1)?(A||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(c,S,m),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(c,S,m)),typeof f.componentDidUpdate=="function"&&(o.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof f.componentDidUpdate!="function"||b===t.memoizedProps&&y===t.memoizedState||(o.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&y===t.memoizedState||(o.flags|=1024),o.memoizedProps=c,o.memoizedState=S),f.props=c,f.state=S,f.context=m,c=v):(typeof f.componentDidUpdate!="function"||b===t.memoizedProps&&y===t.memoizedState||(o.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&y===t.memoizedState||(o.flags|=1024),c=!1)}return Jw(t,o,a,c,p,u)}function Jw(t,o,a,c,u,p){d4(t,o);var f=(o.flags&128)!==0;if(!c&&!f)return u&&K5(o,a,!1),Ri(t,o,p);c=o.stateNode,T8.current=o;var b=f&&typeof a.getDerivedStateFromError!="function"?null:c.render();return o.flags|=1,t!==null&&f?(o.child=Dc(o,t.child,null,p),o.child=Dc(o,null,b,p)):ro(t,o,b,p),o.memoizedState=c.state,u&&K5(o,a,!0),o.child}function u4(t){var o=t.stateNode;o.pendingContext?q5(t,o.pendingContext,o.pendingContext!==o.context):o.context&&q5(t,o.context,!1),pC(t,o.containerInfo)}function dD(t,o,a,c,u){return Sc(),aC(u),o.flags|=256,ro(t,o,a,c),o.child}var Xw={dehydrated:null,treeContext:null,retryLane:0};function ev(t){return{baseLanes:t,cachePool:null,transitions:null}}function h4(t,o,a){var c=o.pendingProps,u=Zt.current,p=!1,f=(o.flags&128)!==0,b;if((b=f)||(b=t!==null&&t.memoizedState===null?!1:(u&2)!==0),b?(p=!0,o.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Ft(Zt,u&1),t===null)return Gw(o),t=o.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(o.mode&1?t.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(f=c.children,t=c.fallback,p?(c=o.mode,p=o.child,f={mode:"hidden",children:f},!(c&1)&&p!==null?(p.childLanes=0,p.pendingProps=f):p=Vg(f,c,0,null),t=Ma(t,c,a,null),p.return=o,t.return=o,p.sibling=t,o.child=p,o.child.memoizedState=ev(a),o.memoizedState=Xw,t):CC(o,f));if(u=t.memoizedState,u!==null&&(b=u.dehydrated,b!==null))return I8(t,o,f,c,b,u,a);if(p){p=c.fallback,f=o.mode,u=t.child,b=u.sibling;var m={mode:"hidden",children:c.children};return!(f&1)&&o.child!==u?(c=o.child,c.childLanes=0,c.pendingProps=m,o.deletions=null):(c=Es(u,m),c.subtreeFlags=u.subtreeFlags&14680064),b!==null?p=Es(b,p):(p=Ma(p,f,a,null),p.flags|=2),p.return=o,c.return=o,c.sibling=p,o.child=c,c=p,p=o.child,f=t.child.memoizedState,f=f===null?ev(a):{baseLanes:f.baseLanes|a,cachePool:null,transitions:f.transitions},p.memoizedState=f,p.childLanes=t.childLanes&~a,o.memoizedState=Xw,c}return p=t.child,t=p.sibling,c=Es(p,{mode:"visible",children:c.children}),!(o.mode&1)&&(c.lanes=a),c.return=o,c.sibling=null,t!==null&&(a=o.deletions,a===null?(o.deletions=[t],o.flags|=16):a.push(t)),o.child=c,o.memoizedState=null,c}function CC(t,o){return o=Vg({mode:"visible",children:o},t.mode,0,null),o.return=t,t.child=o}function rf(t,o,a,c){return c!==null&&aC(c),Dc(o,t.child,null,a),t=CC(o,o.pendingProps.children),t.flags|=2,o.memoizedState=null,t}function I8(t,o,a,c,u,p,f){if(a)return o.flags&256?(o.flags&=-257,c=V0(Error(he(422))),rf(t,o,f,c)):o.memoizedState!==null?(o.child=t.child,o.flags|=128,null):(p=c.fallback,u=o.mode,c=Vg({mode:"visible",children:c.children},u,0,null),p=Ma(p,u,f,null),p.flags|=2,c.return=o,p.return=o,c.sibling=p,o.child=c,o.mode&1&&Dc(o,t.child,null,f),o.child.memoizedState=ev(f),o.memoizedState=Xw,p);if(!(o.mode&1))return rf(t,o,f,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var b=c.dgst;return c=b,p=Error(he(419)),c=V0(p,c,void 0),rf(t,o,f,c)}if(b=(f&t.childLanes)!==0,bo||b){if(c=On,c!==null){switch(f&-f){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(c.suspendedLanes|f)?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Ni(t,u),Sr(c,t,u,-1))}return SC(),c=V0(Error(he(421))),rf(t,o,f,c)}return u.data==="$?"?(o.flags|=128,o.child=t.child,o=U8.bind(null,t),u._reactRetry=o,null):(t=p.treeContext,Ro=ys(u.nextSibling),Lo=o,Yt=!0,xr=null,t!==null&&(Zo[Jo++]=Di,Zo[Jo++]=Ti,Zo[Jo++]=Oa,Di=t.id,Ti=t.overflow,Oa=o),o=CC(o,c.children),o.flags|=4096,o)}function uD(t,o,a){t.lanes|=o;var c=t.alternate;c!==null&&(c.lanes|=o),qw(t.return,o,a)}function U0(t,o,a,c,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:u}:(p.isBackwards=o,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=u)}function p4(t,o,a){var c=o.pendingProps,u=c.revealOrder,p=c.tail;if(ro(t,o,c.children,a),c=Zt.current,c&2)c=c&1|2,o.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=o.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&uD(t,a,o);else if(t.tag===19)uD(t,a,o);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===o)break e;for(;t.sibling===null;){if(t.return===null||t.return===o)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Ft(Zt,c),!(o.mode&1))o.memoizedState=null;else switch(u){case"forwards":for(a=o.child,u=null;a!==null;)t=a.alternate,t!==null&&lg(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=o.child,o.child=null):(u=a.sibling,a.sibling=null),U0(o,!1,u,a,p);break;case"backwards":for(a=null,u=o.child,o.child=null;u!==null;){if(t=u.alternate,t!==null&&lg(t)===null){o.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}U0(o,!0,a,null,p);break;case"together":U0(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Pf(t,o){!(o.mode&1)&&t!==null&&(t.alternate=null,o.alternate=null,o.flags|=2)}function Ri(t,o,a){if(t!==null&&(o.dependencies=t.dependencies),za|=o.lanes,!(a&o.childLanes))return null;if(t!==null&&o.child!==t.child)throw Error(he(153));if(o.child!==null){for(t=o.child,a=Es(t,t.pendingProps),o.child=a,a.return=o;t.sibling!==null;)t=t.sibling,a=a.sibling=Es(t,t.pendingProps),a.return=o;a.sibling=null}return o.child}function M8(t,o,a){switch(o.tag){case 3:u4(o),Sc();break;case 5:FM(o);break;case 1:wo(o.type)&&ng(o);break;case 4:pC(o,o.stateNode.containerInfo);break;case 10:var c=o.type._context,u=o.memoizedProps.value;Ft(ig,c._currentValue),c._currentValue=u;break;case 13:if(c=o.memoizedState,c!==null)return c.dehydrated!==null?(Ft(Zt,Zt.current&1),o.flags|=128,null):a&o.child.childLanes?h4(t,o,a):(Ft(Zt,Zt.current&1),t=Ri(t,o,a),t!==null?t.sibling:null);Ft(Zt,Zt.current&1);break;case 19:if(c=(a&o.childLanes)!==0,t.flags&128){if(c)return p4(t,o,a);o.flags|=128}if(u=o.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ft(Zt,Zt.current),c)break;return null;case 22:case 23:return o.lanes=0,c4(t,o,a)}return Ri(t,o,a)}var f4,tv,g4,m4;f4=function(t,o){for(var a=o.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};tv=function(){};g4=function(t,o,a,c){var u=t.memoizedProps;if(u!==c){t=o.stateNode,Ea(ti.current);var p=null;switch(a){case"input":u=Aw(t,u),c=Aw(t,c),p=[];break;case"select":u=en({},u,{value:void 0}),c=en({},c,{value:void 0}),p=[];break;case"textarea":u=Ew(t,u),c=Ew(t,c),p=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=eg)}Dw(a,c);var f;a=null;for(v in u)if(!c.hasOwnProperty(v)&&u.hasOwnProperty(v)&&u[v]!=null)if(v==="style"){var b=u[v];for(f in b)b.hasOwnProperty(f)&&(a||(a={}),a[f]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(Tu.hasOwnProperty(v)?p||(p=[]):(p=p||[]).push(v,null));for(v in c){var m=c[v];if(b=u!=null?u[v]:void 0,c.hasOwnProperty(v)&&m!==b&&(m!=null||b!=null))if(v==="style")if(b){for(f in b)!b.hasOwnProperty(f)||m&&m.hasOwnProperty(f)||(a||(a={}),a[f]="");for(f in m)m.hasOwnProperty(f)&&b[f]!==m[f]&&(a||(a={}),a[f]=m[f])}else a||(p||(p=[]),p.push(v,a)),a=m;else v==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,b=b?b.__html:void 0,m!=null&&b!==m&&(p=p||[]).push(v,m)):v==="children"?typeof m!="string"&&typeof m!="number"||(p=p||[]).push(v,""+m):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(Tu.hasOwnProperty(v)?(m!=null&&v==="onScroll"&&Ut("scroll",t),p||b===m||(p=[])):(p=p||[]).push(v,m))}a&&(p=p||[]).push("style",a);var v=p;(o.updateQueue=v)&&(o.flags|=4)}};m4=function(t,o,a,c){a!==c&&(o.flags|=4)};function Hd(t,o){if(!Yt)switch(t.tailMode){case"hidden":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?o||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Jn(t){var o=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(o)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=a,o}function P8(t,o,a){var c=o.pendingProps;switch(sC(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jn(o),null;case 1:return wo(o.type)&&tg(),Jn(o),null;case 3:return c=o.stateNode,Tc(),Ht(ko),Ht(oo),gC(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(nf(o)?o.flags|=4:t===null||t.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,xr!==null&&(cv(xr),xr=null))),tv(t,o),Jn(o),null;case 5:fC(o);var u=Ea($u.current);if(a=o.type,t!==null&&o.stateNode!=null)g4(t,o,a,c,u),t.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!c){if(o.stateNode===null)throw Error(he(166));return Jn(o),null}if(t=Ea(ti.current),nf(o)){c=o.stateNode,a=o.type;var p=o.memoizedProps;switch(c[Qr]=o,c[ju]=p,t=(o.mode&1)!==0,a){case"dialog":Ut("cancel",c),Ut("close",c);break;case"iframe":case"object":case"embed":Ut("load",c);break;case"video":case"audio":for(u=0;u<au.length;u++)Ut(au[u],c);break;case"source":Ut("error",c);break;case"img":case"image":case"link":Ut("error",c),Ut("load",c);break;case"details":Ut("toggle",c);break;case"input":v5(c,p),Ut("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ut("invalid",c);break;case"textarea":y5(c,p),Ut("invalid",c)}Dw(a,p),u=null;for(var f in p)if(p.hasOwnProperty(f)){var b=p[f];f==="children"?typeof b=="string"?c.textContent!==b&&(p.suppressHydrationWarning!==!0&&tf(c.textContent,b,t),u=["children",b]):typeof b=="number"&&c.textContent!==""+b&&(p.suppressHydrationWarning!==!0&&tf(c.textContent,b,t),u=["children",""+b]):Tu.hasOwnProperty(f)&&b!=null&&f==="onScroll"&&Ut("scroll",c)}switch(a){case"input":qp(c),C5(c,p,!0);break;case"textarea":qp(c),A5(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=eg)}c=u,o.updateQueue=c,c!==null&&(o.flags|=4)}else{f=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=UI(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=f.createElement(a,{is:c.is}):(t=f.createElement(a),a==="select"&&(f=t,c.multiple?f.multiple=!0:c.size&&(f.size=c.size))):t=f.createElementNS(t,a),t[Qr]=o,t[ju]=c,f4(t,o,!1,!1),o.stateNode=t;e:{switch(f=Tw(a,c),a){case"dialog":Ut("cancel",t),Ut("close",t),u=c;break;case"iframe":case"object":case"embed":Ut("load",t),u=c;break;case"video":case"audio":for(u=0;u<au.length;u++)Ut(au[u],t);u=c;break;case"source":Ut("error",t),u=c;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),u=c;break;case"details":Ut("toggle",t),u=c;break;case"input":v5(t,c),u=Aw(t,c),Ut("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=en({},c,{value:void 0}),Ut("invalid",t);break;case"textarea":y5(t,c),u=Ew(t,c),Ut("invalid",t);break;default:u=c}Dw(a,u),b=u;for(p in b)if(b.hasOwnProperty(p)){var m=b[p];p==="style"?GI(t,m):p==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&HI(t,m)):p==="children"?typeof m=="string"?(a!=="textarea"||m!=="")&&Iu(t,m):typeof m=="number"&&Iu(t,""+m):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Tu.hasOwnProperty(p)?m!=null&&p==="onScroll"&&Ut("scroll",t):m!=null&&Wv(t,p,m,f))}switch(a){case"input":qp(t),C5(t,c,!1);break;case"textarea":qp(t),A5(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Ss(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?bc(t,!!c.multiple,p,!1):c.defaultValue!=null&&bc(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=eg)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Jn(o),null;case 6:if(t&&o.stateNode!=null)m4(t,o,t.memoizedProps,c);else{if(typeof c!="string"&&o.stateNode===null)throw Error(he(166));if(a=Ea($u.current),Ea(ti.current),nf(o)){if(c=o.stateNode,a=o.memoizedProps,c[Qr]=o,(p=c.nodeValue!==a)&&(t=Lo,t!==null))switch(t.tag){case 3:tf(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tf(c.nodeValue,a,(t.mode&1)!==0)}p&&(o.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qr]=o,o.stateNode=c}return Jn(o),null;case 13:if(Ht(Zt),c=o.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Yt&&Ro!==null&&o.mode&1&&!(o.flags&128))BM(),Sc(),o.flags|=98560,p=!1;else if(p=nf(o),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(he(318));if(p=o.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(he(317));p[Qr]=o}else Sc(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;Jn(o),p=!1}else xr!==null&&(cv(xr),xr=null),p=!0;if(!p)return o.flags&65536?o:null}return o.flags&128?(o.lanes=a,o):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(o.child.flags|=8192,o.mode&1&&(t===null||Zt.current&1?En===0&&(En=3):SC())),o.updateQueue!==null&&(o.flags|=4),Jn(o),null);case 4:return Tc(),tv(t,o),t===null&&Lu(o.stateNode.containerInfo),Jn(o),null;case 10:return dC(o.type._context),Jn(o),null;case 17:return wo(o.type)&&tg(),Jn(o),null;case 19:if(Ht(Zt),p=o.memoizedState,p===null)return Jn(o),null;if(c=(o.flags&128)!==0,f=p.rendering,f===null)if(c)Hd(p,!1);else{if(En!==0||t!==null&&t.flags&128)for(t=o.child;t!==null;){if(f=lg(t),f!==null){for(o.flags|=128,Hd(p,!1),c=f.updateQueue,c!==null&&(o.updateQueue=c,o.flags|=4),o.subtreeFlags=0,c=a,a=o.child;a!==null;)p=a,t=c,p.flags&=14680066,f=p.alternate,f===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=f.childLanes,p.lanes=f.lanes,p.child=f.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=f.memoizedProps,p.memoizedState=f.memoizedState,p.updateQueue=f.updateQueue,p.type=f.type,t=f.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ft(Zt,Zt.current&1|2),o.child}t=t.sibling}p.tail!==null&&gn()>Mc&&(o.flags|=128,c=!0,Hd(p,!1),o.lanes=4194304)}else{if(!c)if(t=lg(f),t!==null){if(o.flags|=128,c=!0,a=t.updateQueue,a!==null&&(o.updateQueue=a,o.flags|=4),Hd(p,!0),p.tail===null&&p.tailMode==="hidden"&&!f.alternate&&!Yt)return Jn(o),null}else 2*gn()-p.renderingStartTime>Mc&&a!==1073741824&&(o.flags|=128,c=!0,Hd(p,!1),o.lanes=4194304);p.isBackwards?(f.sibling=o.child,o.child=f):(a=p.last,a!==null?a.sibling=f:o.child=f,p.last=f)}return p.tail!==null?(o=p.tail,p.rendering=o,p.tail=o.sibling,p.renderingStartTime=gn(),o.sibling=null,a=Zt.current,Ft(Zt,c?a&1|2:a&1),o):(Jn(o),null);case 22:case 23:return EC(),c=o.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(o.flags|=8192),c&&o.mode&1?Bo&1073741824&&(Jn(o),o.subtreeFlags&6&&(o.flags|=8192)):Jn(o),null;case 24:return null;case 25:return null}throw Error(he(156,o.tag))}function B8(t,o){switch(sC(o),o.tag){case 1:return wo(o.type)&&tg(),t=o.flags,t&65536?(o.flags=t&-65537|128,o):null;case 3:return Tc(),Ht(ko),Ht(oo),gC(),t=o.flags,t&65536&&!(t&128)?(o.flags=t&-65537|128,o):null;case 5:return fC(o),null;case 13:if(Ht(Zt),t=o.memoizedState,t!==null&&t.dehydrated!==null){if(o.alternate===null)throw Error(he(340));Sc()}return t=o.flags,t&65536?(o.flags=t&-65537|128,o):null;case 19:return Ht(Zt),null;case 4:return Tc(),null;case 10:return dC(o.type._context),null;case 22:case 23:return EC(),null;case 24:return null;default:return null}}var sf=!1,eo=!1,N8=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function hc(t,o){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ln(t,o,c)}else a.current=null}function nv(t,o,a){try{a()}catch(c){ln(t,o,c)}}var hD=!1;function R8(t,o){if(jw=Zf,t=vM(),rC(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var u=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var f=0,b=-1,m=-1,v=0,A=0,_=t,y=null;t:for(;;){for(var E;_!==a||u!==0&&_.nodeType!==3||(b=f+u),_!==p||c!==0&&_.nodeType!==3||(m=f+c),_.nodeType===3&&(f+=_.nodeValue.length),(E=_.firstChild)!==null;)y=_,_=E;for(;;){if(_===t)break t;if(y===a&&++v===u&&(b=f),y===p&&++A===c&&(m=f),(E=_.nextSibling)!==null)break;_=y,y=_.parentNode}_=E}a=b===-1||m===-1?null:{start:b,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fw={focusedElem:t,selectionRange:a},Zf=!1,Ee=o;Ee!==null;)if(o=Ee,t=o.child,(o.subtreeFlags&1028)!==0&&t!==null)t.return=o,Ee=t;else for(;Ee!==null;){o=Ee;try{var S=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var D=S.memoizedProps,R=S.memoizedState,I=o.stateNode,P=I.getSnapshotBeforeUpdate(o.elementType===o.type?D:Ar(o.type,D),R);I.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var B=o.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(F){ln(o,o.return,F)}if(t=o.sibling,t!==null){t.return=o.return,Ee=t;break}Ee=o.return}return S=hD,hD=!1,S}function ku(t,o,a){var c=o.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&nv(o,a,p)}u=u.next}while(u!==c)}}function Fg(t,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==o)}}function ov(t){var o=t.ref;if(o!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof o=="function"?o(t):o.current=t}}function b4(t){var o=t.alternate;o!==null&&(t.alternate=null,b4(o)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(o=t.stateNode,o!==null&&(delete o[Qr],delete o[ju],delete o[Uw],delete o[b8],delete o[k8])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k4(t){return t.tag===5||t.tag===3||t.tag===4}function pD(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k4(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rv(t,o,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,o?a.nodeType===8?a.parentNode.insertBefore(t,o):a.insertBefore(t,o):(a.nodeType===8?(o=a.parentNode,o.insertBefore(t,a)):(o=a,o.appendChild(t)),a=a._reactRootContainer,a!=null||o.onclick!==null||(o.onclick=eg));else if(c!==4&&(t=t.child,t!==null))for(rv(t,o,a),t=t.sibling;t!==null;)rv(t,o,a),t=t.sibling}function iv(t,o,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,o?a.insertBefore(t,o):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(iv(t,o,a),t=t.sibling;t!==null;)iv(t,o,a),t=t.sibling}var Un=null,_r=!1;function is(t,o,a){for(a=a.child;a!==null;)w4(t,o,a),a=a.sibling}function w4(t,o,a){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(Pg,a)}catch{}switch(a.tag){case 5:eo||hc(a,o);case 6:var c=Un,u=_r;Un=null,is(t,o,a),Un=c,_r=u,Un!==null&&(_r?(t=Un,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Un.removeChild(a.stateNode));break;case 18:Un!==null&&(_r?(t=Un,a=a.stateNode,t.nodeType===8?O0(t.parentNode,a):t.nodeType===1&&O0(t,a),Nu(t)):O0(Un,a.stateNode));break;case 4:c=Un,u=_r,Un=a.stateNode.containerInfo,_r=!0,is(t,o,a),Un=c,_r=u;break;case 0:case 11:case 14:case 15:if(!eo&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var p=u,f=p.destroy;p=p.tag,f!==void 0&&(p&2||p&4)&&nv(a,o,f),u=u.next}while(u!==c)}is(t,o,a);break;case 1:if(!eo&&(hc(a,o),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(b){ln(a,o,b)}is(t,o,a);break;case 21:is(t,o,a);break;case 22:a.mode&1?(eo=(c=eo)||a.memoizedState!==null,is(t,o,a),eo=c):is(t,o,a);break;default:is(t,o,a)}}function fD(t){var o=t.updateQueue;if(o!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new N8),o.forEach(function(c){var u=H8.bind(null,t,c);a.has(c)||(a.add(c),c.then(u,u))})}}function yr(t,o){var a=o.deletions;if(a!==null)for(var c=0;c<a.length;c++){var u=a[c];try{var p=t,f=o,b=f;e:for(;b!==null;){switch(b.tag){case 5:Un=b.stateNode,_r=!1;break e;case 3:Un=b.stateNode.containerInfo,_r=!0;break e;case 4:Un=b.stateNode.containerInfo,_r=!0;break e}b=b.return}if(Un===null)throw Error(he(160));w4(p,f,u),Un=null,_r=!1;var m=u.alternate;m!==null&&(m.return=null),u.return=null}catch(v){ln(u,o,v)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)v4(o,t),o=o.sibling}function v4(t,o){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yr(o,t),Wr(t),c&4){try{ku(3,t,t.return),Fg(3,t)}catch(D){ln(t,t.return,D)}try{ku(5,t,t.return)}catch(D){ln(t,t.return,D)}}break;case 1:yr(o,t),Wr(t),c&512&&a!==null&&hc(a,a.return);break;case 5:if(yr(o,t),Wr(t),c&512&&a!==null&&hc(a,a.return),t.flags&32){var u=t.stateNode;try{Iu(u,"")}catch(D){ln(t,t.return,D)}}if(c&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,f=a!==null?a.memoizedProps:p,b=t.type,m=t.updateQueue;if(t.updateQueue=null,m!==null)try{b==="input"&&p.type==="radio"&&p.name!=null&&$I(u,p),Tw(b,f);var v=Tw(b,p);for(f=0;f<m.length;f+=2){var A=m[f],_=m[f+1];A==="style"?GI(u,_):A==="dangerouslySetInnerHTML"?HI(u,_):A==="children"?Iu(u,_):Wv(u,A,_,v)}switch(b){case"input":_w(u,p);break;case"textarea":VI(u,p);break;case"select":var y=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var E=p.value;E!=null?bc(u,!!p.multiple,E,!1):y!==!!p.multiple&&(p.defaultValue!=null?bc(u,!!p.multiple,p.defaultValue,!0):bc(u,!!p.multiple,p.multiple?[]:"",!1))}u[ju]=p}catch(D){ln(t,t.return,D)}}break;case 6:if(yr(o,t),Wr(t),c&4){if(t.stateNode===null)throw Error(he(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(D){ln(t,t.return,D)}}break;case 3:if(yr(o,t),Wr(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Nu(o.containerInfo)}catch(D){ln(t,t.return,D)}break;case 4:yr(o,t),Wr(t);break;case 13:yr(o,t),Wr(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(_C=gn())),c&4&&fD(t);break;case 22:if(A=a!==null&&a.memoizedState!==null,t.mode&1?(eo=(v=eo)||A,yr(o,t),eo=v):yr(o,t),Wr(t),c&8192){if(v=t.memoizedState!==null,(t.stateNode.isHidden=v)&&!A&&t.mode&1)for(Ee=t,A=t.child;A!==null;){for(_=Ee=A;Ee!==null;){switch(y=Ee,E=y.child,y.tag){case 0:case 11:case 14:case 15:ku(4,y,y.return);break;case 1:hc(y,y.return);var S=y.stateNode;if(typeof S.componentWillUnmount=="function"){c=y,a=y.return;try{o=c,S.props=o.memoizedProps,S.state=o.memoizedState,S.componentWillUnmount()}catch(D){ln(c,a,D)}}break;case 5:hc(y,y.return);break;case 22:if(y.memoizedState!==null){mD(_);continue}}E!==null?(E.return=y,Ee=E):mD(_)}A=A.sibling}e:for(A=null,_=t;;){if(_.tag===5){if(A===null){A=_;try{u=_.stateNode,v?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(b=_.stateNode,m=_.memoizedProps.style,f=m!=null&&m.hasOwnProperty("display")?m.display:null,b.style.display=WI("display",f))}catch(D){ln(t,t.return,D)}}}else if(_.tag===6){if(A===null)try{_.stateNode.nodeValue=v?"":_.memoizedProps}catch(D){ln(t,t.return,D)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===t)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===t)break e;for(;_.sibling===null;){if(_.return===null||_.return===t)break e;A===_&&(A=null),_=_.return}A===_&&(A=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:yr(o,t),Wr(t),c&4&&fD(t);break;case 21:break;default:yr(o,t),Wr(t)}}function Wr(t){var o=t.flags;if(o&2){try{e:{for(var a=t.return;a!==null;){if(k4(a)){var c=a;break e}a=a.return}throw Error(he(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(Iu(u,""),c.flags&=-33);var p=pD(t);iv(t,p,u);break;case 3:case 4:var f=c.stateNode.containerInfo,b=pD(t);rv(t,b,f);break;default:throw Error(he(161))}}catch(m){ln(t,t.return,m)}t.flags&=-3}o&4096&&(t.flags&=-4097)}function O8(t,o,a){Ee=t,C4(t)}function C4(t,o,a){for(var c=(t.mode&1)!==0;Ee!==null;){var u=Ee,p=u.child;if(u.tag===22&&c){var f=u.memoizedState!==null||sf;if(!f){var b=u.alternate,m=b!==null&&b.memoizedState!==null||eo;b=sf;var v=eo;if(sf=f,(eo=m)&&!v)for(Ee=u;Ee!==null;)f=Ee,m=f.child,f.tag===22&&f.memoizedState!==null?bD(u):m!==null?(m.return=f,Ee=m):bD(u);for(;p!==null;)Ee=p,C4(p),p=p.sibling;Ee=u,sf=b,eo=v}gD(t)}else u.subtreeFlags&8772&&p!==null?(p.return=u,Ee=p):gD(t)}}function gD(t){for(;Ee!==null;){var o=Ee;if(o.flags&8772){var a=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:eo||Fg(5,o);break;case 1:var c=o.stateNode;if(o.flags&4&&!eo)if(a===null)c.componentDidMount();else{var u=o.elementType===o.type?a.memoizedProps:Ar(o.type,a.memoizedProps);c.componentDidUpdate(u,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=o.updateQueue;p!==null&&J5(o,p,c);break;case 3:var f=o.updateQueue;if(f!==null){if(a=null,o.child!==null)switch(o.child.tag){case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}J5(o,f,a)}break;case 5:var b=o.stateNode;if(a===null&&o.flags&4){a=b;var m=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&a.focus();break;case"img":m.src&&(a.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var v=o.alternate;if(v!==null){var A=v.memoizedState;if(A!==null){var _=A.dehydrated;_!==null&&Nu(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}eo||o.flags&512&&ov(o)}catch(y){ln(o,o.return,y)}}if(o===t){Ee=null;break}if(a=o.sibling,a!==null){a.return=o.return,Ee=a;break}Ee=o.return}}function mD(t){for(;Ee!==null;){var o=Ee;if(o===t){Ee=null;break}var a=o.sibling;if(a!==null){a.return=o.return,Ee=a;break}Ee=o.return}}function bD(t){for(;Ee!==null;){var o=Ee;try{switch(o.tag){case 0:case 11:case 15:var a=o.return;try{Fg(4,o)}catch(m){ln(o,a,m)}break;case 1:var c=o.stateNode;if(typeof c.componentDidMount=="function"){var u=o.return;try{c.componentDidMount()}catch(m){ln(o,u,m)}}var p=o.return;try{ov(o)}catch(m){ln(o,p,m)}break;case 5:var f=o.return;try{ov(o)}catch(m){ln(o,f,m)}}}catch(m){ln(o,o.return,m)}if(o===t){Ee=null;break}var b=o.sibling;if(b!==null){b.return=o.return,Ee=b;break}Ee=o.return}}var L8=Math.ceil,ug=ji.ReactCurrentDispatcher,yC=ji.ReactCurrentOwner,tr=ji.ReactCurrentBatchConfig,ft=0,On=null,An=null,Wn=0,Bo=0,pc=Ps(0),En=0,Wu=null,za=0,$g=0,AC=0,wu=null,mo=null,_C=0,Mc=1/0,Ei=null,hg=!1,sv=null,_s=null,af=!1,ms=null,pg=0,vu=0,av=null,Bf=-1,Nf=0;function ao(){return ft&6?gn():Bf!==-1?Bf:Bf=gn()}function xs(t){return t.mode&1?ft&2&&Wn!==0?Wn&-Wn:v8.transition!==null?(Nf===0&&(Nf=rM()),Nf):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:uM(t.type)),t):1}function Sr(t,o,a,c){if(50<vu)throw vu=0,av=null,Error(he(185));sh(t,a,c),(!(ft&2)||t!==On)&&(t===On&&(!(ft&2)&&($g|=a),En===4&&ps(t,Wn)),vo(t,c),a===1&&ft===0&&!(o.mode&1)&&(Mc=gn()+500,Lg&&Bs()))}function vo(t,o){var a=t.callbackNode;vF(t,o);var c=Qf(t,t===On?Wn:0);if(c===0)a!==null&&E5(a),t.callbackNode=null,t.callbackPriority=0;else if(o=c&-c,t.callbackPriority!==o){if(a!=null&&E5(a),o===1)t.tag===0?w8(kD.bind(null,t)):IM(kD.bind(null,t)),g8(function(){!(ft&6)&&Bs()}),a=null;else{switch(iM(c)){case 1:a=Qv;break;case 4:a=nM;break;case 16:a=Yf;break;case 536870912:a=oM;break;default:a=Yf}a=T4(a,y4.bind(null,t))}t.callbackPriority=o,t.callbackNode=a}}function y4(t,o){if(Bf=-1,Nf=0,ft&6)throw Error(he(327));var a=t.callbackNode;if(yc()&&t.callbackNode!==a)return null;var c=Qf(t,t===On?Wn:0);if(c===0)return null;if(c&30||c&t.expiredLanes||o)o=fg(t,c);else{o=c;var u=ft;ft|=2;var p=_4();(On!==t||Wn!==o)&&(Ei=null,Mc=gn()+500,Ia(t,o));do try{F8();break}catch(b){A4(t,b)}while(1);cC(),ug.current=p,ft=u,An!==null?o=0:(On=null,Wn=0,o=En)}if(o!==0){if(o===2&&(u=Nw(t),u!==0&&(c=u,o=lv(t,u))),o===1)throw a=Wu,Ia(t,0),ps(t,c),vo(t,gn()),a;if(o===6)ps(t,c);else{if(u=t.current.alternate,!(c&30)&&!z8(u)&&(o=fg(t,c),o===2&&(p=Nw(t),p!==0&&(c=p,o=lv(t,p))),o===1))throw a=Wu,Ia(t,0),ps(t,c),vo(t,gn()),a;switch(t.finishedWork=u,t.finishedLanes=c,o){case 0:case 1:throw Error(he(345));case 2:ma(t,mo,Ei);break;case 3:if(ps(t,c),(c&130023424)===c&&(o=_C+500-gn(),10<o)){if(Qf(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){ao(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Vw(ma.bind(null,t,mo,Ei),o);break}ma(t,mo,Ei);break;case 4:if(ps(t,c),(c&4194240)===c)break;for(o=t.eventTimes,u=-1;0<c;){var f=31-Er(c);p=1<<f,f=o[f],f>u&&(u=f),c&=~p}if(c=u,c=gn()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*L8(c/1960))-c,10<c){t.timeoutHandle=Vw(ma.bind(null,t,mo,Ei),c);break}ma(t,mo,Ei);break;case 5:ma(t,mo,Ei);break;default:throw Error(he(329))}}}return vo(t,gn()),t.callbackNode===a?y4.bind(null,t):null}function lv(t,o){var a=wu;return t.current.memoizedState.isDehydrated&&(Ia(t,o).flags|=256),t=fg(t,o),t!==2&&(o=mo,mo=a,o!==null&&cv(o)),t}function cv(t){mo===null?mo=t:mo.push.apply(mo,t)}function z8(t){for(var o=t;;){if(o.flags&16384){var a=o.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var u=a[c],p=u.getSnapshot;u=u.value;try{if(!Tr(p(),u))return!1}catch{return!1}}}if(a=o.child,o.subtreeFlags&16384&&a!==null)a.return=o,o=a;else{if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ps(t,o){for(o&=~AC,o&=~$g,t.suspendedLanes|=o,t.pingedLanes&=~o,t=t.expirationTimes;0<o;){var a=31-Er(o),c=1<<a;t[a]=-1,o&=~c}}function kD(t){if(ft&6)throw Error(he(327));yc();var o=Qf(t,0);if(!(o&1))return vo(t,gn()),null;var a=fg(t,o);if(t.tag!==0&&a===2){var c=Nw(t);c!==0&&(o=c,a=lv(t,c))}if(a===1)throw a=Wu,Ia(t,0),ps(t,o),vo(t,gn()),a;if(a===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=o,ma(t,mo,Ei),vo(t,gn()),null}function xC(t,o){var a=ft;ft|=1;try{return t(o)}finally{ft=a,ft===0&&(Mc=gn()+500,Lg&&Bs())}}function ja(t){ms!==null&&ms.tag===0&&!(ft&6)&&yc();var o=ft;ft|=1;var a=tr.transition,c=Tt;try{if(tr.transition=null,Tt=1,t)return t()}finally{Tt=c,tr.transition=a,ft=o,!(ft&6)&&Bs()}}function EC(){Bo=pc.current,Ht(pc)}function Ia(t,o){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,f8(a)),An!==null)for(a=An.return;a!==null;){var c=a;switch(sC(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&tg();break;case 3:Tc(),Ht(ko),Ht(oo),gC();break;case 5:fC(c);break;case 4:Tc();break;case 13:Ht(Zt);break;case 19:Ht(Zt);break;case 10:dC(c.type._context);break;case 22:case 23:EC()}a=a.return}if(On=t,An=t=Es(t.current,null),Wn=Bo=o,En=0,Wu=null,AC=$g=za=0,mo=wu=null,xa!==null){for(o=0;o<xa.length;o++)if(a=xa[o],c=a.interleaved,c!==null){a.interleaved=null;var u=c.next,p=a.pending;if(p!==null){var f=p.next;p.next=u,c.next=f}a.pending=c}xa=null}return t}function A4(t,o){do{var a=An;try{if(cC(),If.current=dg,cg){for(var c=Xt.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}cg=!1}if(La=0,Rn=xn=Xt=null,bu=!1,Vu=0,yC.current=null,a===null||a.return===null){En=1,Wu=o,An=null;break}e:{var p=t,f=a.return,b=a,m=o;if(o=Wn,b.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var v=m,A=b,_=A.tag;if(!(A.mode&1)&&(_===0||_===11||_===15)){var y=A.alternate;y?(A.updateQueue=y.updateQueue,A.memoizedState=y.memoizedState,A.lanes=y.lanes):(A.updateQueue=null,A.memoizedState=null)}var E=iD(f);if(E!==null){E.flags&=-257,sD(E,f,b,p,o),E.mode&1&&rD(p,v,o),o=E,m=v;var S=o.updateQueue;if(S===null){var D=new Set;D.add(m),o.updateQueue=D}else S.add(m);break e}else{if(!(o&1)){rD(p,v,o),SC();break e}m=Error(he(426))}}else if(Yt&&b.mode&1){var R=iD(f);if(R!==null){!(R.flags&65536)&&(R.flags|=256),sD(R,f,b,p,o),aC(Ic(m,b));break e}}p=m=Ic(m,b),En!==4&&(En=2),wu===null?wu=[p]:wu.push(p),p=f;do{switch(p.tag){case 3:p.flags|=65536,o&=-o,p.lanes|=o;var I=s4(p,m,o);Z5(p,I);break e;case 1:b=m;var P=p.type,B=p.stateNode;if(!(p.flags&128)&&(typeof P.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(_s===null||!_s.has(B)))){p.flags|=65536,o&=-o,p.lanes|=o;var F=a4(p,b,o);Z5(p,F);break e}}p=p.return}while(p!==null)}E4(a)}catch(M){o=M,An===a&&a!==null&&(An=a=a.return);continue}break}while(1)}function _4(){var t=ug.current;return ug.current=dg,t===null?dg:t}function SC(){(En===0||En===3||En===2)&&(En=4),On===null||!(za&268435455)&&!($g&268435455)||ps(On,Wn)}function fg(t,o){var a=ft;ft|=2;var c=_4();(On!==t||Wn!==o)&&(Ei=null,Ia(t,o));do try{j8();break}catch(u){A4(t,u)}while(1);if(cC(),ft=a,ug.current=c,An!==null)throw Error(he(261));return On=null,Wn=0,En}function j8(){for(;An!==null;)x4(An)}function F8(){for(;An!==null&&!uF();)x4(An)}function x4(t){var o=D4(t.alternate,t,Bo);t.memoizedProps=t.pendingProps,o===null?E4(t):An=o,yC.current=null}function E4(t){var o=t;do{var a=o.alternate;if(t=o.return,o.flags&32768){if(a=B8(a,o),a!==null){a.flags&=32767,An=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{En=6,An=null;return}}else if(a=P8(a,o,Bo),a!==null){An=a;return}if(o=o.sibling,o!==null){An=o;return}An=o=t}while(o!==null);En===0&&(En=5)}function ma(t,o,a){var c=Tt,u=tr.transition;try{tr.transition=null,Tt=1,$8(t,o,a,c)}finally{tr.transition=u,Tt=c}return null}function $8(t,o,a,c){do yc();while(ms!==null);if(ft&6)throw Error(he(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(CF(t,p),t===On&&(An=On=null,Wn=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||af||(af=!0,T4(Yf,function(){return yc(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=tr.transition,tr.transition=null;var f=Tt;Tt=1;var b=ft;ft|=4,yC.current=null,R8(t,a),v4(a,t),a8(Fw),Zf=!!jw,Fw=jw=null,t.current=a,O8(a),hF(),ft=b,Tt=f,tr.transition=p}else t.current=a;if(af&&(af=!1,ms=t,pg=u),p=t.pendingLanes,p===0&&(_s=null),gF(a.stateNode),vo(t,gn()),o!==null)for(c=t.onRecoverableError,a=0;a<o.length;a++)u=o[a],c(u.value,{componentStack:u.stack,digest:u.digest});if(hg)throw hg=!1,t=sv,sv=null,t;return pg&1&&t.tag!==0&&yc(),p=t.pendingLanes,p&1?t===av?vu++:(vu=0,av=t):vu=0,Bs(),null}function yc(){if(ms!==null){var t=iM(pg),o=tr.transition,a=Tt;try{if(tr.transition=null,Tt=16>t?16:t,ms===null)var c=!1;else{if(t=ms,ms=null,pg=0,ft&6)throw Error(he(331));var u=ft;for(ft|=4,Ee=t.current;Ee!==null;){var p=Ee,f=p.child;if(Ee.flags&16){var b=p.deletions;if(b!==null){for(var m=0;m<b.length;m++){var v=b[m];for(Ee=v;Ee!==null;){var A=Ee;switch(A.tag){case 0:case 11:case 15:ku(8,A,p)}var _=A.child;if(_!==null)_.return=A,Ee=_;else for(;Ee!==null;){A=Ee;var y=A.sibling,E=A.return;if(b4(A),A===v){Ee=null;break}if(y!==null){y.return=E,Ee=y;break}Ee=E}}}var S=p.alternate;if(S!==null){var D=S.child;if(D!==null){S.child=null;do{var R=D.sibling;D.sibling=null,D=R}while(D!==null)}}Ee=p}}if(p.subtreeFlags&2064&&f!==null)f.return=p,Ee=f;else e:for(;Ee!==null;){if(p=Ee,p.flags&2048)switch(p.tag){case 0:case 11:case 15:ku(9,p,p.return)}var I=p.sibling;if(I!==null){I.return=p.return,Ee=I;break e}Ee=p.return}}var P=t.current;for(Ee=P;Ee!==null;){f=Ee;var B=f.child;if(f.subtreeFlags&2064&&B!==null)B.return=f,Ee=B;else e:for(f=P;Ee!==null;){if(b=Ee,b.flags&2048)try{switch(b.tag){case 0:case 11:case 15:Fg(9,b)}}catch(M){ln(b,b.return,M)}if(b===f){Ee=null;break e}var F=b.sibling;if(F!==null){F.return=b.return,Ee=F;break e}Ee=b.return}}if(ft=u,Bs(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(Pg,t)}catch{}c=!0}return c}finally{Tt=a,tr.transition=o}}return!1}function wD(t,o,a){o=Ic(a,o),o=s4(t,o,1),t=As(t,o,1),o=ao(),t!==null&&(sh(t,1,o),vo(t,o))}function ln(t,o,a){if(t.tag===3)wD(t,t,a);else for(;o!==null;){if(o.tag===3){wD(o,t,a);break}else if(o.tag===1){var c=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(_s===null||!_s.has(c))){t=Ic(a,t),t=a4(o,t,1),o=As(o,t,1),t=ao(),o!==null&&(sh(o,1,t),vo(o,t));break}}o=o.return}}function V8(t,o,a){var c=t.pingCache;c!==null&&c.delete(o),o=ao(),t.pingedLanes|=t.suspendedLanes&a,On===t&&(Wn&a)===a&&(En===4||En===3&&(Wn&130023424)===Wn&&500>gn()-_C?Ia(t,0):AC|=a),vo(t,o)}function S4(t,o){o===0&&(t.mode&1?(o=Qp,Qp<<=1,!(Qp&130023424)&&(Qp=4194304)):o=1);var a=ao();t=Ni(t,o),t!==null&&(sh(t,o,a),vo(t,a))}function U8(t){var o=t.memoizedState,a=0;o!==null&&(a=o.retryLane),S4(t,a)}function H8(t,o){var a=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(he(314))}c!==null&&c.delete(o),S4(t,a)}var D4;D4=function(t,o,a){if(t!==null)if(t.memoizedProps!==o.pendingProps||ko.current)bo=!0;else{if(!(t.lanes&a)&&!(o.flags&128))return bo=!1,M8(t,o,a);bo=!!(t.flags&131072)}else bo=!1,Yt&&o.flags&1048576&&MM(o,rg,o.index);switch(o.lanes=0,o.tag){case 2:var c=o.type;Pf(t,o),t=o.pendingProps;var u=Ec(o,oo.current);Cc(o,a),u=bC(null,o,c,t,u,a);var p=kC();return o.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,wo(c)?(p=!0,ng(o)):p=!1,o.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,hC(o),u.updater=zg,o.stateNode=u,u._reactInternals=o,Yw(o,c,t,a),o=Jw(null,o,c,!0,p,a)):(o.tag=0,Yt&&p&&iC(o),ro(null,o,u,a),o=o.child),o;case 16:c=o.elementType;e:{switch(Pf(t,o),t=o.pendingProps,u=c._init,c=u(c._payload),o.type=c,u=o.tag=G8(c),t=Ar(c,t),u){case 0:o=Zw(null,o,c,t,a);break e;case 1:o=cD(null,o,c,t,a);break e;case 11:o=aD(null,o,c,t,a);break e;case 14:o=lD(null,o,c,Ar(c.type,t),a);break e}throw Error(he(306,c,""))}return o;case 0:return c=o.type,u=o.pendingProps,u=o.elementType===c?u:Ar(c,u),Zw(t,o,c,u,a);case 1:return c=o.type,u=o.pendingProps,u=o.elementType===c?u:Ar(c,u),cD(t,o,c,u,a);case 3:e:{if(u4(o),t===null)throw Error(he(387));c=o.pendingProps,p=o.memoizedState,u=p.element,RM(t,o),ag(o,c,null,a);var f=o.memoizedState;if(c=f.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},o.updateQueue.baseState=p,o.memoizedState=p,o.flags&256){u=Ic(Error(he(423)),o),o=dD(t,o,c,a,u);break e}else if(c!==u){u=Ic(Error(he(424)),o),o=dD(t,o,c,a,u);break e}else for(Ro=ys(o.stateNode.containerInfo.firstChild),Lo=o,Yt=!0,xr=null,a=jM(o,null,c,a),o.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Sc(),c===u){o=Ri(t,o,a);break e}ro(t,o,c,a)}o=o.child}return o;case 5:return FM(o),t===null&&Gw(o),c=o.type,u=o.pendingProps,p=t!==null?t.memoizedProps:null,f=u.children,$w(c,u)?f=null:p!==null&&$w(c,p)&&(o.flags|=32),d4(t,o),ro(t,o,f,a),o.child;case 6:return t===null&&Gw(o),null;case 13:return h4(t,o,a);case 4:return pC(o,o.stateNode.containerInfo),c=o.pendingProps,t===null?o.child=Dc(o,null,c,a):ro(t,o,c,a),o.child;case 11:return c=o.type,u=o.pendingProps,u=o.elementType===c?u:Ar(c,u),aD(t,o,c,u,a);case 7:return ro(t,o,o.pendingProps,a),o.child;case 8:return ro(t,o,o.pendingProps.children,a),o.child;case 12:return ro(t,o,o.pendingProps.children,a),o.child;case 10:e:{if(c=o.type._context,u=o.pendingProps,p=o.memoizedProps,f=u.value,Ft(ig,c._currentValue),c._currentValue=f,p!==null)if(Tr(p.value,f)){if(p.children===u.children&&!ko.current){o=Ri(t,o,a);break e}}else for(p=o.child,p!==null&&(p.return=o);p!==null;){var b=p.dependencies;if(b!==null){f=p.child;for(var m=b.firstContext;m!==null;){if(m.context===c){if(p.tag===1){m=Ii(-1,a&-a),m.tag=2;var v=p.updateQueue;if(v!==null){v=v.shared;var A=v.pending;A===null?m.next=m:(m.next=A.next,A.next=m),v.pending=m}}p.lanes|=a,m=p.alternate,m!==null&&(m.lanes|=a),qw(p.return,a,o),b.lanes|=a;break}m=m.next}}else if(p.tag===10)f=p.type===o.type?null:p.child;else if(p.tag===18){if(f=p.return,f===null)throw Error(he(341));f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),qw(f,a,o),f=p.sibling}else f=p.child;if(f!==null)f.return=p;else for(f=p;f!==null;){if(f===o){f=null;break}if(p=f.sibling,p!==null){p.return=f.return,f=p;break}f=f.return}p=f}ro(t,o,u.children,a),o=o.child}return o;case 9:return u=o.type,c=o.pendingProps.children,Cc(o,a),u=ir(u),c=c(u),o.flags|=1,ro(t,o,c,a),o.child;case 14:return c=o.type,u=Ar(c,o.pendingProps),u=Ar(c.type,u),lD(t,o,c,u,a);case 15:return l4(t,o,o.type,o.pendingProps,a);case 17:return c=o.type,u=o.pendingProps,u=o.elementType===c?u:Ar(c,u),Pf(t,o),o.tag=1,wo(c)?(t=!0,ng(o)):t=!1,Cc(o,a),LM(o,c,u),Yw(o,c,u,a),Jw(null,o,c,!0,t,a);case 19:return p4(t,o,a);case 22:return c4(t,o,a)}throw Error(he(156,o.tag))};function T4(t,o){return tM(t,o)}function W8(t,o,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function er(t,o,a,c){return new W8(t,o,a,c)}function DC(t){return t=t.prototype,!(!t||!t.isReactComponent)}function G8(t){if(typeof t=="function")return DC(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qv)return 11;if(t===Kv)return 14}return 2}function Es(t,o){var a=t.alternate;return a===null?(a=er(t.tag,o,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=o,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,o=t.dependencies,a.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Rf(t,o,a,c,u,p){var f=2;if(c=t,typeof t=="function")DC(t)&&(f=1);else if(typeof t=="string")f=5;else e:switch(t){case oc:return Ma(a.children,u,p,o);case Gv:f=8,u|=8;break;case ww:return t=er(12,a,o,u|2),t.elementType=ww,t.lanes=p,t;case vw:return t=er(13,a,o,u),t.elementType=vw,t.lanes=p,t;case Cw:return t=er(19,a,o,u),t.elementType=Cw,t.lanes=p,t;case zI:return Vg(a,u,p,o);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case OI:f=10;break e;case LI:f=9;break e;case qv:f=11;break e;case Kv:f=14;break e;case ds:f=16,c=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return o=er(f,a,o,u),o.elementType=t,o.type=c,o.lanes=p,o}function Ma(t,o,a,c){return t=er(7,t,c,o),t.lanes=a,t}function Vg(t,o,a,c){return t=er(22,t,c,o),t.elementType=zI,t.lanes=a,t.stateNode={isHidden:!1},t}function H0(t,o,a){return t=er(6,t,null,o),t.lanes=a,t}function W0(t,o,a){return o=er(4,t.children!==null?t.children:[],t.key,o),o.lanes=a,o.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},o}function q8(t,o,a,c,u){this.tag=o,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=x0(0),this.expirationTimes=x0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=x0(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function TC(t,o,a,c,u,p,f,b,m){return t=new q8(t,o,a,b,m),o===1?(o=1,p===!0&&(o|=8)):o=0,p=er(3,null,null,o),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},hC(p),t}function K8(t,o,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nc,key:c==null?null:""+c,children:t,containerInfo:o,implementation:a}}function I4(t){if(!t)return Ds;t=t._reactInternals;e:{if(qa(t)!==t||t.tag!==1)throw Error(he(170));var o=t;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(wo(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(he(171))}if(t.tag===1){var a=t.type;if(wo(a))return TM(t,a,o)}return o}function M4(t,o,a,c,u,p,f,b,m){return t=TC(a,c,!0,t,u,p,f,b,m),t.context=I4(null),a=t.current,c=ao(),u=xs(a),p=Ii(c,u),p.callback=o??null,As(a,p,u),t.current.lanes=u,sh(t,u,c),vo(t,c),t}function Ug(t,o,a,c){var u=o.current,p=ao(),f=xs(u);return a=I4(a),o.context===null?o.context=a:o.pendingContext=a,o=Ii(p,f),o.payload={element:t},c=c===void 0?null:c,c!==null&&(o.callback=c),t=As(u,o,f),t!==null&&(Sr(t,u,f,p),Tf(t,u,f)),f}function gg(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vD(t,o){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<o?a:o}}function IC(t,o){vD(t,o),(t=t.alternate)&&vD(t,o)}function Y8(){return null}var P4=typeof reportError=="function"?reportError:function(t){console.error(t)};function MC(t){this._internalRoot=t}Hg.prototype.render=MC.prototype.render=function(t){var o=this._internalRoot;if(o===null)throw Error(he(409));Ug(t,o,null,null)};Hg.prototype.unmount=MC.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var o=t.containerInfo;ja(function(){Ug(null,t,null,null)}),o[Bi]=null}};function Hg(t){this._internalRoot=t}Hg.prototype.unstable_scheduleHydration=function(t){if(t){var o=lM();t={blockedOn:null,target:t,priority:o};for(var a=0;a<hs.length&&o!==0&&o<hs[a].priority;a++);hs.splice(a,0,t),a===0&&dM(t)}};function PC(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function CD(){}function Q8(t,o,a,c,u){if(u){if(typeof c=="function"){var p=c;c=function(){var v=gg(f);p.call(v)}}var f=M4(o,c,t,0,null,!1,!1,"",CD);return t._reactRootContainer=f,t[Bi]=f.current,Lu(t.nodeType===8?t.parentNode:t),ja(),f}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var b=c;c=function(){var v=gg(m);b.call(v)}}var m=TC(t,0,!1,null,null,!1,!1,"",CD);return t._reactRootContainer=m,t[Bi]=m.current,Lu(t.nodeType===8?t.parentNode:t),ja(function(){Ug(o,m,a,c)}),m}function Gg(t,o,a,c,u){var p=a._reactRootContainer;if(p){var f=p;if(typeof u=="function"){var b=u;u=function(){var m=gg(f);b.call(m)}}Ug(o,f,t,u)}else f=Q8(a,o,t,u,c);return gg(f)}sM=function(t){switch(t.tag){case 3:var o=t.stateNode;if(o.current.memoizedState.isDehydrated){var a=su(o.pendingLanes);a!==0&&(Zv(o,a|1),vo(o,gn()),!(ft&6)&&(Mc=gn()+500,Bs()))}break;case 13:ja(function(){var c=Ni(t,1);if(c!==null){var u=ao();Sr(c,t,1,u)}}),IC(t,1)}};Jv=function(t){if(t.tag===13){var o=Ni(t,134217728);if(o!==null){var a=ao();Sr(o,t,134217728,a)}IC(t,134217728)}};aM=function(t){if(t.tag===13){var o=xs(t),a=Ni(t,o);if(a!==null){var c=ao();Sr(a,t,o,c)}IC(t,o)}};lM=function(){return Tt};cM=function(t,o){var a=Tt;try{return Tt=t,o()}finally{Tt=a}};Mw=function(t,o,a){switch(o){case"input":if(_w(t,a),o=a.name,a.type==="radio"&&o!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<a.length;o++){var c=a[o];if(c!==t&&c.form===t.form){var u=Og(c);if(!u)throw Error(he(90));FI(c),_w(c,u)}}}break;case"textarea":VI(t,a);break;case"select":o=a.value,o!=null&&bc(t,!!a.multiple,o,!1)}};YI=xC;QI=ja;var Z8={usingClientEntryPoint:!1,Events:[lh,ac,Og,qI,KI,xC]},Wd={findFiberByHostInstance:_a,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},J8={bundleType:Wd.bundleType,version:Wd.version,rendererPackageName:Wd.rendererPackageName,rendererConfig:Wd.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=XI(t),t===null?null:t.stateNode},findFiberByHostInstance:Wd.findFiberByHostInstance||Y8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lf.isDisabled&&lf.supportsFiber)try{Pg=lf.inject(J8),ei=lf}catch{}}$o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z8;$o.createPortal=function(t,o){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!PC(o))throw Error(he(200));return K8(t,o,null,a)};$o.createRoot=function(t,o){if(!PC(t))throw Error(he(299));var a=!1,c="",u=P4;return o!=null&&(o.unstable_strictMode===!0&&(a=!0),o.identifierPrefix!==void 0&&(c=o.identifierPrefix),o.onRecoverableError!==void 0&&(u=o.onRecoverableError)),o=TC(t,1,!1,null,null,a,!1,c,u),t[Bi]=o.current,Lu(t.nodeType===8?t.parentNode:t),new MC(o)};$o.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var o=t._reactInternals;if(o===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=XI(o),t=t===null?null:t.stateNode,t};$o.flushSync=function(t){return ja(t)};$o.hydrate=function(t,o,a){if(!Wg(o))throw Error(he(200));return Gg(null,t,o,!0,a)};$o.hydrateRoot=function(t,o,a){if(!PC(t))throw Error(he(405));var c=a!=null&&a.hydratedSources||null,u=!1,p="",f=P4;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(f=a.onRecoverableError)),o=M4(o,null,t,1,a??null,u,!1,p,f),t[Bi]=o.current,Lu(t),c)for(t=0;t<c.length;t++)a=c[t],u=a._getVersion,u=u(a._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[a,u]:o.mutableSourceEagerHydrationData.push(a,u);return new Hg(o)};$o.render=function(t,o,a){if(!Wg(o))throw Error(he(200));return Gg(null,t,o,!1,a)};$o.unmountComponentAtNode=function(t){if(!Wg(t))throw Error(he(40));return t._reactRootContainer?(ja(function(){Gg(null,null,t,!1,function(){t._reactRootContainer=null,t[Bi]=null})}),!0):!1};$o.unstable_batchedUpdates=xC;$o.unstable_renderSubtreeIntoContainer=function(t,o,a,c){if(!Wg(a))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return Gg(t,o,a,!1,c)};$o.version="18.2.0-next-9e3b772b8-20220608";function B4(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B4)}catch(t){console.error(t)}}B4(),MI.exports=$o;var dh=MI.exports;const cf=zv(dh);var yD=dh;bw.createRoot=yD.createRoot,bw.hydrateRoot=yD.hydrateRoot;/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gu(){return Gu=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c])}return t},Gu.apply(this,arguments)}var bs;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(bs||(bs={}));const AD="popstate";function X8(t){t===void 0&&(t={});function o(c,u){let{pathname:p,search:f,hash:b}=c.location;return dv("",{pathname:p,search:f,hash:b},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function a(c,u){return typeof u=="string"?u:N4(u)}return t$(o,a,null,t)}function Sn(t,o){if(t===!1||t===null||typeof t>"u")throw new Error(o)}function BC(t,o){if(!t){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function e$(){return Math.random().toString(36).substr(2,8)}function _D(t,o){return{usr:t.state,key:t.key,idx:o}}function dv(t,o,a,c){return a===void 0&&(a=null),Gu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof o=="string"?qc(o):o,{state:a,key:o&&o.key||c||e$()})}function N4(t){let{pathname:o="/",search:a="",hash:c=""}=t;return a&&a!=="?"&&(o+=a.charAt(0)==="?"?a:"?"+a),c&&c!=="#"&&(o+=c.charAt(0)==="#"?c:"#"+c),o}function qc(t){let o={};if(t){let a=t.indexOf("#");a>=0&&(o.hash=t.substr(a),t=t.substr(0,a));let c=t.indexOf("?");c>=0&&(o.search=t.substr(c),t=t.substr(0,c)),t&&(o.pathname=t)}return o}function t$(t,o,a,c){c===void 0&&(c={});let{window:u=document.defaultView,v5Compat:p=!1}=c,f=u.history,b=bs.Pop,m=null,v=A();v==null&&(v=0,f.replaceState(Gu({},f.state,{idx:v}),""));function A(){return(f.state||{idx:null}).idx}function _(){b=bs.Pop;let R=A(),I=R==null?null:R-v;v=R,m&&m({action:b,location:D.location,delta:I})}function y(R,I){b=bs.Push;let P=dv(D.location,R,I);a&&a(P,R),v=A()+1;let B=_D(P,v),F=D.createHref(P);try{f.pushState(B,"",F)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;u.location.assign(F)}p&&m&&m({action:b,location:D.location,delta:1})}function E(R,I){b=bs.Replace;let P=dv(D.location,R,I);a&&a(P,R),v=A();let B=_D(P,v),F=D.createHref(P);f.replaceState(B,"",F),p&&m&&m({action:b,location:D.location,delta:0})}function S(R){let I=u.location.origin!=="null"?u.location.origin:u.location.href,P=typeof R=="string"?R:N4(R);return Sn(I,"No window.location.(origin|href) available to create URL for href: "+P),new URL(P,I)}let D={get action(){return b},get location(){return t(u,f)},listen(R){if(m)throw new Error("A history only accepts one active listener");return u.addEventListener(AD,_),m=R,()=>{u.removeEventListener(AD,_),m=null}},createHref(R){return o(u,R)},createURL:S,encodeLocation(R){let I=S(R);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:y,replace:E,go(R){return f.go(R)}};return D}var xD;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(xD||(xD={}));function n$(t,o,a){a===void 0&&(a="/");let c=typeof o=="string"?qc(o):o,u=L4(c.pathname||"/",a);if(u==null)return null;let p=R4(t);o$(p);let f=null;for(let b=0;f==null&&b<p.length;++b)f=h$(p[b],g$(u));return f}function R4(t,o,a,c){o===void 0&&(o=[]),a===void 0&&(a=[]),c===void 0&&(c="");let u=(p,f,b)=>{let m={relativePath:b===void 0?p.path||"":b,caseSensitive:p.caseSensitive===!0,childrenIndex:f,route:p};m.relativePath.startsWith("/")&&(Sn(m.relativePath.startsWith(c),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(c.length));let v=Pa([c,m.relativePath]),A=a.concat(m);p.children&&p.children.length>0&&(Sn(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),R4(p.children,o,A,v)),!(p.path==null&&!p.index)&&o.push({path:v,score:d$(v,p.index),routesMeta:A})};return t.forEach((p,f)=>{var b;if(p.path===""||!((b=p.path)!=null&&b.includes("?")))u(p,f);else for(let m of O4(p.path))u(p,f,m)}),o}function O4(t){let o=t.split("/");if(o.length===0)return[];let[a,...c]=o,u=a.endsWith("?"),p=a.replace(/\?$/,"");if(c.length===0)return u?[p,""]:[p];let f=O4(c.join("/")),b=[];return b.push(...f.map(m=>m===""?p:[p,m].join("/"))),u&&b.push(...f),b.map(m=>t.startsWith("/")&&m===""?"/":m)}function o$(t){t.sort((o,a)=>o.score!==a.score?a.score-o.score:u$(o.routesMeta.map(c=>c.childrenIndex),a.routesMeta.map(c=>c.childrenIndex)))}const r$=/^:\w+$/,i$=3,s$=2,a$=1,l$=10,c$=-2,ED=t=>t==="*";function d$(t,o){let a=t.split("/"),c=a.length;return a.some(ED)&&(c+=c$),o&&(c+=s$),a.filter(u=>!ED(u)).reduce((u,p)=>u+(r$.test(p)?i$:p===""?a$:l$),c)}function u$(t,o){return t.length===o.length&&t.slice(0,-1).every((c,u)=>c===o[u])?t[t.length-1]-o[o.length-1]:0}function h$(t,o){let{routesMeta:a}=t,c={},u="/",p=[];for(let f=0;f<a.length;++f){let b=a[f],m=f===a.length-1,v=u==="/"?o:o.slice(u.length)||"/",A=p$({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},v);if(!A)return null;Object.assign(c,A.params);let _=b.route;p.push({params:c,pathname:Pa([u,A.pathname]),pathnameBase:C$(Pa([u,A.pathnameBase])),route:_}),A.pathnameBase!=="/"&&(u=Pa([u,A.pathnameBase]))}return p}function p$(t,o){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,c]=f$(t.path,t.caseSensitive,t.end),u=o.match(a);if(!u)return null;let p=u[0],f=p.replace(/(.)\/+$/,"$1"),b=u.slice(1);return{params:c.reduce((v,A,_)=>{if(A==="*"){let y=b[_]||"";f=p.slice(0,p.length-y.length).replace(/(.)\/+$/,"$1")}return v[A]=m$(b[_]||"",A),v},{}),pathname:p,pathnameBase:f,pattern:t}}function f$(t,o,a){o===void 0&&(o=!1),a===void 0&&(a=!0),BC(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let c=[],u="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(f,b)=>(c.push(b),"/([^\\/]+)"));return t.endsWith("*")?(c.push("*"),u+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?u+="\\/*$":t!==""&&t!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,o?void 0:"i"),c]}function g$(t){try{return decodeURI(t)}catch(o){return BC(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+o+").")),t}}function m$(t,o){try{return decodeURIComponent(t)}catch(a){return BC(!1,'The value for the URL param "'+o+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+a+").")),t}}function L4(t,o){if(o==="/")return t;if(!t.toLowerCase().startsWith(o.toLowerCase()))return null;let a=o.endsWith("/")?o.length-1:o.length,c=t.charAt(a);return c&&c!=="/"?null:t.slice(a)||"/"}function b$(t,o){o===void 0&&(o="/");let{pathname:a,search:c="",hash:u=""}=typeof t=="string"?qc(t):t;return{pathname:a?a.startsWith("/")?a:k$(a,o):o,search:y$(c),hash:A$(u)}}function k$(t,o){let a=o.replace(/\/+$/,"").split("/");return t.split("/").forEach(u=>{u===".."?a.length>1&&a.pop():u!=="."&&a.push(u)}),a.length>1?a.join("/"):"/"}function G0(t,o,a,c){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+o+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function w$(t){return t.filter((o,a)=>a===0||o.route.path&&o.route.path.length>0)}function v$(t,o,a,c){c===void 0&&(c=!1);let u;typeof t=="string"?u=qc(t):(u=Gu({},t),Sn(!u.pathname||!u.pathname.includes("?"),G0("?","pathname","search",u)),Sn(!u.pathname||!u.pathname.includes("#"),G0("#","pathname","hash",u)),Sn(!u.search||!u.search.includes("#"),G0("#","search","hash",u)));let p=t===""||u.pathname==="",f=p?"/":u.pathname,b;if(c||f==null)b=a;else{let _=o.length-1;if(f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),_-=1;u.pathname=y.join("/")}b=_>=0?o[_]:"/"}let m=b$(u,b),v=f&&f!=="/"&&f.endsWith("/"),A=(p||f===".")&&a.endsWith("/");return!m.pathname.endsWith("/")&&(v||A)&&(m.pathname+="/"),m}const Pa=t=>t.join("/").replace(/\/\/+/g,"/"),C$=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),y$=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,A$=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function _$(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const z4=["post","put","patch","delete"];new Set(z4);const x$=["get",...z4];new Set(x$);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mg(){return mg=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c])}return t},mg.apply(this,arguments)}const NC=z.createContext(null),E$=z.createContext(null),qg=z.createContext(null),Kg=z.createContext(null),Ka=z.createContext({outlet:null,matches:[],isDataRoute:!1}),j4=z.createContext(null);function Yg(){return z.useContext(Kg)!=null}function F4(){return Yg()||Sn(!1),z.useContext(Kg).location}function $4(t){z.useContext(qg).static||z.useLayoutEffect(t)}function S$(){let{isDataRoute:t}=z.useContext(Ka);return t?$$():D$()}function D$(){Yg()||Sn(!1);let t=z.useContext(NC),{basename:o,navigator:a}=z.useContext(qg),{matches:c}=z.useContext(Ka),{pathname:u}=F4(),p=JSON.stringify(w$(c).map(m=>m.pathnameBase)),f=z.useRef(!1);return $4(()=>{f.current=!0}),z.useCallback(function(m,v){if(v===void 0&&(v={}),!f.current)return;if(typeof m=="number"){a.go(m);return}let A=v$(m,JSON.parse(p),u,v.relative==="path");t==null&&o!=="/"&&(A.pathname=A.pathname==="/"?o:Pa([o,A.pathname])),(v.replace?a.replace:a.push)(A,v.state,v)},[o,a,p,u,t])}function T$(){let{matches:t}=z.useContext(Ka),o=t[t.length-1];return o?o.params:{}}function I$(t,o){return M$(t,o)}function M$(t,o,a){Yg()||Sn(!1);let{navigator:c}=z.useContext(qg),{matches:u}=z.useContext(Ka),p=u[u.length-1],f=p?p.params:{};p&&p.pathname;let b=p?p.pathnameBase:"/";p&&p.route;let m=F4(),v;if(o){var A;let D=typeof o=="string"?qc(o):o;b==="/"||(A=D.pathname)!=null&&A.startsWith(b)||Sn(!1),v=D}else v=m;let _=v.pathname||"/",y=b==="/"?_:_.slice(b.length)||"/",E=n$(t,{pathname:y}),S=O$(E&&E.map(D=>Object.assign({},D,{params:Object.assign({},f,D.params),pathname:Pa([b,c.encodeLocation?c.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?b:Pa([b,c.encodeLocation?c.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),u,a);return o&&S?z.createElement(Kg.Provider,{value:{location:mg({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:bs.Pop}},S):S}function P$(){let t=F$(),o=_$(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},p=null;return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},o),a?z.createElement("pre",{style:u},a):null,p)}const B$=z.createElement(P$,null);class N$ extends z.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,a){return a.location!==o.location||a.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error||a.error,location:a.location,revalidation:o.revalidation||a.revalidation}}componentDidCatch(o,a){console.error("React Router caught the following error during render",o,a)}render(){return this.state.error?z.createElement(Ka.Provider,{value:this.props.routeContext},z.createElement(j4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function R$(t){let{routeContext:o,match:a,children:c}=t,u=z.useContext(NC);return u&&u.static&&u.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=a.route.id),z.createElement(Ka.Provider,{value:o},c)}function O$(t,o,a){var c;if(o===void 0&&(o=[]),a===void 0&&(a=null),t==null){var u;if((u=a)!=null&&u.errors)t=a.matches;else return null}let p=t,f=(c=a)==null?void 0:c.errors;if(f!=null){let b=p.findIndex(m=>m.route.id&&(f==null?void 0:f[m.route.id]));b>=0||Sn(!1),p=p.slice(0,Math.min(p.length,b+1))}return p.reduceRight((b,m,v)=>{let A=m.route.id?f==null?void 0:f[m.route.id]:null,_=null;a&&(_=m.route.errorElement||B$);let y=o.concat(p.slice(0,v+1)),E=()=>{let S;return A?S=_:m.route.Component?S=z.createElement(m.route.Component,null):m.route.element?S=m.route.element:S=b,z.createElement(R$,{match:m,routeContext:{outlet:b,matches:y,isDataRoute:a!=null},children:S})};return a&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?z.createElement(N$,{location:a.location,revalidation:a.revalidation,component:_,error:A,children:E(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):E()},null)}var uv;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(uv||(uv={}));var qu;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(qu||(qu={}));function L$(t){let o=z.useContext(NC);return o||Sn(!1),o}function z$(t){let o=z.useContext(E$);return o||Sn(!1),o}function j$(t){let o=z.useContext(Ka);return o||Sn(!1),o}function V4(t){let o=j$(),a=o.matches[o.matches.length-1];return a.route.id||Sn(!1),a.route.id}function F$(){var t;let o=z.useContext(j4),a=z$(qu.UseRouteError),c=V4(qu.UseRouteError);return o||((t=a.errors)==null?void 0:t[c])}function $$(){let{router:t}=L$(uv.UseNavigateStable),o=V4(qu.UseNavigateStable),a=z.useRef(!1);return $4(()=>{a.current=!0}),z.useCallback(function(u,p){p===void 0&&(p={}),a.current&&(typeof u=="number"?t.navigate(u):t.navigate(u,mg({fromRouteId:o},p)))},[t,o])}function ba(t){Sn(!1)}function V$(t){let{basename:o="/",children:a=null,location:c,navigationType:u=bs.Pop,navigator:p,static:f=!1}=t;Yg()&&Sn(!1);let b=o.replace(/^\/*/,"/"),m=z.useMemo(()=>({basename:b,navigator:p,static:f}),[b,p,f]);typeof c=="string"&&(c=qc(c));let{pathname:v="/",search:A="",hash:_="",state:y=null,key:E="default"}=c,S=z.useMemo(()=>{let D=L4(v,b);return D==null?null:{location:{pathname:D,search:A,hash:_,state:y,key:E},navigationType:u}},[b,v,A,_,y,E,u]);return S==null?null:z.createElement(qg.Provider,{value:m},z.createElement(Kg.Provider,{children:a,value:S}))}function U$(t){let{children:o,location:a}=t;return I$(hv(o),a)}var SD;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(SD||(SD={}));new Promise(()=>{});function hv(t,o){o===void 0&&(o=[]);let a=[];return z.Children.forEach(t,(c,u)=>{if(!z.isValidElement(c))return;let p=[...o,u];if(c.type===z.Fragment){a.push.apply(a,hv(c.props.children,p));return}c.type!==ba&&Sn(!1),!c.props.index||!c.props.children||Sn(!1);let f={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(f.children=hv(c.props.children,p)),a.push(f)}),a}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const H$="startTransition",DD=Du[H$];function W$(t){let{basename:o,children:a,future:c,window:u}=t,p=z.useRef();p.current==null&&(p.current=X8({window:u,v5Compat:!0}));let f=p.current,[b,m]=z.useState({action:f.action,location:f.location}),{v7_startTransition:v}=c||{},A=z.useCallback(_=>{v&&DD?DD(()=>m(_)):m(_)},[m,v]);return z.useLayoutEffect(()=>f.listen(A),[f,A]),z.createElement(V$,{basename:o,children:a,location:b.location,navigationType:b.action,navigator:f})}var TD;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(TD||(TD={}));var ID;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ID||(ID={}));const G$={black:"#000",white:"#fff"},Ku=G$,q$={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},qr=q$,K$={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},ql=K$,Y$={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Kl=Y$,Q$={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Yl=Q$,Z$={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Xo=Z$,J$={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Ca=J$,X$={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"},MD=X$,eV={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},pv=eV;function U(){return U=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c])}return t},U.apply(this,arguments)}function ya(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function U4(t){if(!ya(t))return t;const o={};return Object.keys(t).forEach(a=>{o[a]=U4(t[a])}),o}function Co(t,o,a={clone:!0}){const c=a.clone?U({},t):t;return ya(t)&&ya(o)&&Object.keys(o).forEach(u=>{u!=="__proto__"&&(ya(o[u])&&u in t&&ya(t[u])?c[u]=Co(t[u],o[u],a):a.clone?c[u]=ya(o[u])?U4(o[u]):o[u]:c[u]=o[u])}),c}function Ts(t){let o="https://mui.com/production-error/?code="+t;for(let a=1;a<arguments.length;a+=1)o+="&args[]="+encodeURIComponent(arguments[a]);return"Minified MUI error #"+t+"; visit "+o+" for the full message."}function Ce(t){if(typeof t!="string")throw new Error(Ts(7));return t.charAt(0).toUpperCase()+t.slice(1)}function PD(...t){return t.reduce((o,a)=>a==null?o:function(...u){o.apply(this,u),a.apply(this,u)},()=>{})}function RC(t,o=166){let a;function c(...u){const p=()=>{t.apply(this,u)};clearTimeout(a),a=setTimeout(p,o)}return c.clear=()=>{clearTimeout(a)},c}function q0(t,o){return z.isValidElement(t)&&o.indexOf(t.type.muiName)!==-1}function lo(t){return t&&t.ownerDocument||document}function Oi(t){return lo(t).defaultView||window}function fv(t,o){typeof t=="function"?t(o):t&&(t.current=o)}const tV=typeof window<"u"?z.useLayoutEffect:z.useEffect,ii=tV;let BD=0;function nV(t){const[o,a]=z.useState(t),c=t||o;return z.useEffect(()=>{o==null&&(BD+=1,a(`mui-${BD}`))},[o]),c}const ND=Du["useId".toString()];function OC(t){if(ND!==void 0){const o=ND();return t??o}return nV(t)}function gv({controlled:t,default:o,name:a,state:c="value"}){const{current:u}=z.useRef(t!==void 0),[p,f]=z.useState(o),b=u?t:p,m=z.useCallback(v=>{u||f(v)},[]);return[b,m]}function Sa(t){const o=z.useRef(t);return ii(()=>{o.current=t}),z.useCallback((...a)=>(0,o.current)(...a),[])}function mn(...t){return z.useMemo(()=>t.every(o=>o==null)?null:o=>{t.forEach(a=>{fv(a,o)})},t)}let Qg=!0,mv=!1,RD;const oV={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function rV(t){const{type:o,tagName:a}=t;return!!(a==="INPUT"&&oV[o]&&!t.readOnly||a==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function iV(t){t.metaKey||t.altKey||t.ctrlKey||(Qg=!0)}function K0(){Qg=!1}function sV(){this.visibilityState==="hidden"&&mv&&(Qg=!0)}function aV(t){t.addEventListener("keydown",iV,!0),t.addEventListener("mousedown",K0,!0),t.addEventListener("pointerdown",K0,!0),t.addEventListener("touchstart",K0,!0),t.addEventListener("visibilitychange",sV,!0)}function lV(t){const{target:o}=t;try{return o.matches(":focus-visible")}catch{}return Qg||rV(o)}function LC(){const t=z.useCallback(u=>{u!=null&&aV(u.ownerDocument)},[]),o=z.useRef(!1);function a(){return o.current?(mv=!0,window.clearTimeout(RD),RD=window.setTimeout(()=>{mv=!1},100),o.current=!1,!0):!1}function c(u){return lV(u)?(o.current=!0,!0):!1}return{isFocusVisibleRef:o,onFocus:c,onBlur:a,ref:t}}function H4(t){const o=t.documentElement.clientWidth;return Math.abs(window.innerWidth-o)}function zC(t,o){const a=U({},o);return Object.keys(t).forEach(c=>{if(c.toString().match(/^(components|slots)$/))a[c]=U({},t[c],a[c]);else if(c.toString().match(/^(componentsProps|slotProps)$/)){const u=t[c]||{},p=o[c];a[c]={},!p||!Object.keys(p)?a[c]=u:!u||!Object.keys(u)?a[c]=p:(a[c]=U({},p),Object.keys(u).forEach(f=>{a[c][f]=zC(u[f],p[f])}))}else a[c]===void 0&&(a[c]=t[c])}),a}function Ue(t,o,a=void 0){const c={};return Object.keys(t).forEach(u=>{c[u]=t[u].reduce((p,f)=>{if(f){const b=o(f);b!==""&&p.push(b),a&&a[f]&&p.push(a[f])}return p},[]).join(" ")}),c}const OD=t=>t,cV=()=>{let t=OD;return{configure(o){t=o},generate(o){return t(o)},reset(){t=OD}}},dV=cV(),W4=dV,uV={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function je(t,o,a="Mui"){const c=uV[o];return c?`${a}-${c}`:`${W4.generate(t)}-${o}`}function Fe(t,o,a="Mui"){const c={};return o.forEach(u=>{c[u]=je(t,u,a)}),c}const Fa="$$material";function ye(t,o){if(t==null)return{};var a={},c=Object.keys(t),u,p;for(p=0;p<c.length;p++)u=c[p],!(o.indexOf(u)>=0)&&(a[u]=t[u]);return a}function G4(t){var o=Object.create(null);return function(a){return o[a]===void 0&&(o[a]=t(a)),o[a]}}var hV=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,pV=G4(function(t){return hV.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function fV(t){if(t.sheet)return t.sheet;for(var o=0;o<document.styleSheets.length;o++)if(document.styleSheets[o].ownerNode===t)return document.styleSheets[o]}function gV(t){var o=document.createElement("style");return o.setAttribute("data-emotion",t.key),t.nonce!==void 0&&o.setAttribute("nonce",t.nonce),o.appendChild(document.createTextNode("")),o.setAttribute("data-s",""),o}var mV=function(){function t(a){var c=this;this._insertTag=function(u){var p;c.tags.length===0?c.insertionPoint?p=c.insertionPoint.nextSibling:c.prepend?p=c.container.firstChild:p=c.before:p=c.tags[c.tags.length-1].nextSibling,c.container.insertBefore(u,p),c.tags.push(u)},this.isSpeedy=a.speedy===void 0?!0:a.speedy,this.tags=[],this.ctr=0,this.nonce=a.nonce,this.key=a.key,this.container=a.container,this.prepend=a.prepend,this.insertionPoint=a.insertionPoint,this.before=null}var o=t.prototype;return o.hydrate=function(c){c.forEach(this._insertTag)},o.insert=function(c){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(gV(this));var u=this.tags[this.tags.length-1];if(this.isSpeedy){var p=fV(u);try{p.insertRule(c,p.cssRules.length)}catch{}}else u.appendChild(document.createTextNode(c));this.ctr++},o.flush=function(){this.tags.forEach(function(c){return c.parentNode&&c.parentNode.removeChild(c)}),this.tags=[],this.ctr=0},t}(),Xn="-ms-",bg="-moz-",kt="-webkit-",q4="comm",jC="rule",FC="decl",bV="@import",K4="@keyframes",kV="@layer",wV=Math.abs,Zg=String.fromCharCode,vV=Object.assign;function CV(t,o){return Hn(t,0)^45?(((o<<2^Hn(t,0))<<2^Hn(t,1))<<2^Hn(t,2))<<2^Hn(t,3):0}function Y4(t){return t.trim()}function yV(t,o){return(t=o.exec(t))?t[0]:t}function wt(t,o,a){return t.replace(o,a)}function bv(t,o){return t.indexOf(o)}function Hn(t,o){return t.charCodeAt(o)|0}function Yu(t,o,a){return t.slice(o,a)}function Kr(t){return t.length}function $C(t){return t.length}function df(t,o){return o.push(t),t}function AV(t,o){return t.map(o).join("")}var Jg=1,Pc=1,Q4=0,_o=0,yn=0,Kc="";function Xg(t,o,a,c,u,p,f){return{value:t,root:o,parent:a,type:c,props:u,children:p,line:Jg,column:Pc,length:f,return:""}}function Gd(t,o){return vV(Xg("",null,null,"",null,null,0),t,{length:-t.length},o)}function _V(){return yn}function xV(){return yn=_o>0?Hn(Kc,--_o):0,Pc--,yn===10&&(Pc=1,Jg--),yn}function zo(){return yn=_o<Q4?Hn(Kc,_o++):0,Pc++,yn===10&&(Pc=1,Jg++),yn}function ni(){return Hn(Kc,_o)}function Of(){return _o}function uh(t,o){return Yu(Kc,t,o)}function Qu(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Z4(t){return Jg=Pc=1,Q4=Kr(Kc=t),_o=0,[]}function J4(t){return Kc="",t}function Lf(t){return Y4(uh(_o-1,kv(t===91?t+2:t===40?t+1:t)))}function EV(t){for(;(yn=ni())&&yn<33;)zo();return Qu(t)>2||Qu(yn)>3?"":" "}function SV(t,o){for(;--o&&zo()&&!(yn<48||yn>102||yn>57&&yn<65||yn>70&&yn<97););return uh(t,Of()+(o<6&&ni()==32&&zo()==32))}function kv(t){for(;zo();)switch(yn){case t:return _o;case 34:case 39:t!==34&&t!==39&&kv(yn);break;case 40:t===41&&kv(t);break;case 92:zo();break}return _o}function DV(t,o){for(;zo()&&t+yn!==47+10;)if(t+yn===42+42&&ni()===47)break;return"/*"+uh(o,_o-1)+"*"+Zg(t===47?t:zo())}function TV(t){for(;!Qu(ni());)zo();return uh(t,_o)}function IV(t){return J4(zf("",null,null,null,[""],t=Z4(t),0,[0],t))}function zf(t,o,a,c,u,p,f,b,m){for(var v=0,A=0,_=f,y=0,E=0,S=0,D=1,R=1,I=1,P=0,B="",F=u,M=p,W=c,H=B;R;)switch(S=P,P=zo()){case 40:if(S!=108&&Hn(H,_-1)==58){bv(H+=wt(Lf(P),"&","&\f"),"&\f")!=-1&&(I=-1);break}case 34:case 39:case 91:H+=Lf(P);break;case 9:case 10:case 13:case 32:H+=EV(S);break;case 92:H+=SV(Of()-1,7);continue;case 47:switch(ni()){case 42:case 47:df(MV(DV(zo(),Of()),o,a),m);break;default:H+="/"}break;case 123*D:b[v++]=Kr(H)*I;case 125*D:case 59:case 0:switch(P){case 0:case 125:R=0;case 59+A:I==-1&&(H=wt(H,/\f/g,"")),E>0&&Kr(H)-_&&df(E>32?zD(H+";",c,a,_-1):zD(wt(H," ","")+";",c,a,_-2),m);break;case 59:H+=";";default:if(df(W=LD(H,o,a,v,A,u,b,B,F=[],M=[],_),p),P===123)if(A===0)zf(H,o,W,W,F,p,_,b,M);else switch(y===99&&Hn(H,3)===110?100:y){case 100:case 108:case 109:case 115:zf(t,W,W,c&&df(LD(t,W,W,0,0,u,b,B,u,F=[],_),M),u,M,_,b,c?F:M);break;default:zf(H,W,W,W,[""],M,0,b,M)}}v=A=E=0,D=I=1,B=H="",_=f;break;case 58:_=1+Kr(H),E=S;default:if(D<1){if(P==123)--D;else if(P==125&&D++==0&&xV()==125)continue}switch(H+=Zg(P),P*D){case 38:I=A>0?1:(H+="\f",-1);break;case 44:b[v++]=(Kr(H)-1)*I,I=1;break;case 64:ni()===45&&(H+=Lf(zo())),y=ni(),A=_=Kr(B=H+=TV(Of())),P++;break;case 45:S===45&&Kr(H)==2&&(D=0)}}return p}function LD(t,o,a,c,u,p,f,b,m,v,A){for(var _=u-1,y=u===0?p:[""],E=$C(y),S=0,D=0,R=0;S<c;++S)for(var I=0,P=Yu(t,_+1,_=wV(D=f[S])),B=t;I<E;++I)(B=Y4(D>0?y[I]+" "+P:wt(P,/&\f/g,y[I])))&&(m[R++]=B);return Xg(t,o,a,u===0?jC:b,m,v,A)}function MV(t,o,a){return Xg(t,o,a,q4,Zg(_V()),Yu(t,2,-2),0)}function zD(t,o,a,c){return Xg(t,o,a,FC,Yu(t,0,c),Yu(t,c+1,-1),c)}function Ac(t,o){for(var a="",c=$C(t),u=0;u<c;u++)a+=o(t[u],u,t,o)||"";return a}function PV(t,o,a,c){switch(t.type){case kV:if(t.children.length)break;case bV:case FC:return t.return=t.return||t.value;case q4:return"";case K4:return t.return=t.value+"{"+Ac(t.children,c)+"}";case jC:t.value=t.props.join(",")}return Kr(a=Ac(t.children,c))?t.return=t.value+"{"+a+"}":""}function BV(t){var o=$C(t);return function(a,c,u,p){for(var f="",b=0;b<o;b++)f+=t[b](a,c,u,p)||"";return f}}function NV(t){return function(o){o.root||(o=o.return)&&t(o)}}var RV=function(o,a,c){for(var u=0,p=0;u=p,p=ni(),u===38&&p===12&&(a[c]=1),!Qu(p);)zo();return uh(o,_o)},OV=function(o,a){var c=-1,u=44;do switch(Qu(u)){case 0:u===38&&ni()===12&&(a[c]=1),o[c]+=RV(_o-1,a,c);break;case 2:o[c]+=Lf(u);break;case 4:if(u===44){o[++c]=ni()===58?"&\f":"",a[c]=o[c].length;break}default:o[c]+=Zg(u)}while(u=zo());return o},LV=function(o,a){return J4(OV(Z4(o),a))},jD=new WeakMap,zV=function(o){if(!(o.type!=="rule"||!o.parent||o.length<1)){for(var a=o.value,c=o.parent,u=o.column===c.column&&o.line===c.line;c.type!=="rule";)if(c=c.parent,!c)return;if(!(o.props.length===1&&a.charCodeAt(0)!==58&&!jD.get(c))&&!u){jD.set(o,!0);for(var p=[],f=LV(a,p),b=c.props,m=0,v=0;m<f.length;m++)for(var A=0;A<b.length;A++,v++)o.props[v]=p[m]?f[m].replace(/&\f/g,b[A]):b[A]+" "+f[m]}}},jV=function(o){if(o.type==="decl"){var a=o.value;a.charCodeAt(0)===108&&a.charCodeAt(2)===98&&(o.return="",o.value="")}};function X4(t,o){switch(CV(t,o)){case 5103:return kt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return kt+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return kt+t+bg+t+Xn+t+t;case 6828:case 4268:return kt+t+Xn+t+t;case 6165:return kt+t+Xn+"flex-"+t+t;case 5187:return kt+t+wt(t,/(\w+).+(:[^]+)/,kt+"box-$1$2"+Xn+"flex-$1$2")+t;case 5443:return kt+t+Xn+"flex-item-"+wt(t,/flex-|-self/,"")+t;case 4675:return kt+t+Xn+"flex-line-pack"+wt(t,/align-content|flex-|-self/,"")+t;case 5548:return kt+t+Xn+wt(t,"shrink","negative")+t;case 5292:return kt+t+Xn+wt(t,"basis","preferred-size")+t;case 6060:return kt+"box-"+wt(t,"-grow","")+kt+t+Xn+wt(t,"grow","positive")+t;case 4554:return kt+wt(t,/([^-])(transform)/g,"$1"+kt+"$2")+t;case 6187:return wt(wt(wt(t,/(zoom-|grab)/,kt+"$1"),/(image-set)/,kt+"$1"),t,"")+t;case 5495:case 3959:return wt(t,/(image-set\([^]*)/,kt+"$1$`$1");case 4968:return wt(wt(t,/(.+:)(flex-)?(.*)/,kt+"box-pack:$3"+Xn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+kt+t+t;case 4095:case 3583:case 4068:case 2532:return wt(t,/(.+)-inline(.+)/,kt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kr(t)-1-o>6)switch(Hn(t,o+1)){case 109:if(Hn(t,o+4)!==45)break;case 102:return wt(t,/(.+:)(.+)-([^]+)/,"$1"+kt+"$2-$3$1"+bg+(Hn(t,o+3)==108?"$3":"$2-$3"))+t;case 115:return~bv(t,"stretch")?X4(wt(t,"stretch","fill-available"),o)+t:t}break;case 4949:if(Hn(t,o+1)!==115)break;case 6444:switch(Hn(t,Kr(t)-3-(~bv(t,"!important")&&10))){case 107:return wt(t,":",":"+kt)+t;case 101:return wt(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+kt+(Hn(t,14)===45?"inline-":"")+"box$3$1"+kt+"$2$3$1"+Xn+"$2box$3")+t}break;case 5936:switch(Hn(t,o+11)){case 114:return kt+t+Xn+wt(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return kt+t+Xn+wt(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return kt+t+Xn+wt(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return kt+t+Xn+t+t}return t}var FV=function(o,a,c,u){if(o.length>-1&&!o.return)switch(o.type){case FC:o.return=X4(o.value,o.length);break;case K4:return Ac([Gd(o,{value:wt(o.value,"@","@"+kt)})],u);case jC:if(o.length)return AV(o.props,function(p){switch(yV(p,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ac([Gd(o,{props:[wt(p,/:(read-\w+)/,":"+bg+"$1")]})],u);case"::placeholder":return Ac([Gd(o,{props:[wt(p,/:(plac\w+)/,":"+kt+"input-$1")]}),Gd(o,{props:[wt(p,/:(plac\w+)/,":"+bg+"$1")]}),Gd(o,{props:[wt(p,/:(plac\w+)/,Xn+"input-$1")]})],u)}return""})}},$V=[FV],VV=function(o){var a=o.key;if(a==="css"){var c=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(c,function(D){var R=D.getAttribute("data-emotion");R.indexOf(" ")!==-1&&(document.head.appendChild(D),D.setAttribute("data-s",""))})}var u=o.stylisPlugins||$V,p={},f,b=[];f=o.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),function(D){for(var R=D.getAttribute("data-emotion").split(" "),I=1;I<R.length;I++)p[R[I]]=!0;b.push(D)});var m,v=[zV,jV];{var A,_=[PV,NV(function(D){A.insert(D)})],y=BV(v.concat(u,_)),E=function(R){return Ac(IV(R),y)};m=function(R,I,P,B){A=P,E(R?R+"{"+I.styles+"}":I.styles),B&&(S.inserted[I.name]=!0)}}var S={key:a,sheet:new mV({key:a,container:f,nonce:o.nonce,speedy:o.speedy,prepend:o.prepend,insertionPoint:o.insertionPoint}),nonce:o.nonce,inserted:p,registered:{},insert:m};return S.sheet.hydrate(b),S},e3={exports:{}},It={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ln=typeof Symbol=="function"&&Symbol.for,VC=Ln?Symbol.for("react.element"):60103,UC=Ln?Symbol.for("react.portal"):60106,em=Ln?Symbol.for("react.fragment"):60107,tm=Ln?Symbol.for("react.strict_mode"):60108,nm=Ln?Symbol.for("react.profiler"):60114,om=Ln?Symbol.for("react.provider"):60109,rm=Ln?Symbol.for("react.context"):60110,HC=Ln?Symbol.for("react.async_mode"):60111,im=Ln?Symbol.for("react.concurrent_mode"):60111,sm=Ln?Symbol.for("react.forward_ref"):60112,am=Ln?Symbol.for("react.suspense"):60113,UV=Ln?Symbol.for("react.suspense_list"):60120,lm=Ln?Symbol.for("react.memo"):60115,cm=Ln?Symbol.for("react.lazy"):60116,HV=Ln?Symbol.for("react.block"):60121,WV=Ln?Symbol.for("react.fundamental"):60117,GV=Ln?Symbol.for("react.responder"):60118,qV=Ln?Symbol.for("react.scope"):60119;function Uo(t){if(typeof t=="object"&&t!==null){var o=t.$$typeof;switch(o){case VC:switch(t=t.type,t){case HC:case im:case em:case nm:case tm:case am:return t;default:switch(t=t&&t.$$typeof,t){case rm:case sm:case cm:case lm:case om:return t;default:return o}}case UC:return o}}}function t3(t){return Uo(t)===im}It.AsyncMode=HC;It.ConcurrentMode=im;It.ContextConsumer=rm;It.ContextProvider=om;It.Element=VC;It.ForwardRef=sm;It.Fragment=em;It.Lazy=cm;It.Memo=lm;It.Portal=UC;It.Profiler=nm;It.StrictMode=tm;It.Suspense=am;It.isAsyncMode=function(t){return t3(t)||Uo(t)===HC};It.isConcurrentMode=t3;It.isContextConsumer=function(t){return Uo(t)===rm};It.isContextProvider=function(t){return Uo(t)===om};It.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===VC};It.isForwardRef=function(t){return Uo(t)===sm};It.isFragment=function(t){return Uo(t)===em};It.isLazy=function(t){return Uo(t)===cm};It.isMemo=function(t){return Uo(t)===lm};It.isPortal=function(t){return Uo(t)===UC};It.isProfiler=function(t){return Uo(t)===nm};It.isStrictMode=function(t){return Uo(t)===tm};It.isSuspense=function(t){return Uo(t)===am};It.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===em||t===im||t===nm||t===tm||t===am||t===UV||typeof t=="object"&&t!==null&&(t.$$typeof===cm||t.$$typeof===lm||t.$$typeof===om||t.$$typeof===rm||t.$$typeof===sm||t.$$typeof===WV||t.$$typeof===GV||t.$$typeof===qV||t.$$typeof===HV)};It.typeOf=Uo;e3.exports=It;var KV=e3.exports,n3=KV,YV={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},QV={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o3={};o3[n3.ForwardRef]=YV;o3[n3.Memo]=QV;var ZV=!0;function JV(t,o,a){var c="";return a.split(" ").forEach(function(u){t[u]!==void 0?o.push(t[u]+";"):c+=u+" "}),c}var r3=function(o,a,c){var u=o.key+"-"+a.name;(c===!1||ZV===!1)&&o.registered[u]===void 0&&(o.registered[u]=a.styles)},i3=function(o,a,c){r3(o,a,c);var u=o.key+"-"+a.name;if(o.inserted[a.name]===void 0){var p=a;do o.insert(a===p?"."+u:"",p,o.sheet,!0),p=p.next;while(p!==void 0)}};function XV(t){for(var o=0,a,c=0,u=t.length;u>=4;++c,u-=4)a=t.charCodeAt(c)&255|(t.charCodeAt(++c)&255)<<8|(t.charCodeAt(++c)&255)<<16|(t.charCodeAt(++c)&255)<<24,a=(a&65535)*1540483477+((a>>>16)*59797<<16),a^=a>>>24,o=(a&65535)*1540483477+((a>>>16)*59797<<16)^(o&65535)*1540483477+((o>>>16)*59797<<16);switch(u){case 3:o^=(t.charCodeAt(c+2)&255)<<16;case 2:o^=(t.charCodeAt(c+1)&255)<<8;case 1:o^=t.charCodeAt(c)&255,o=(o&65535)*1540483477+((o>>>16)*59797<<16)}return o^=o>>>13,o=(o&65535)*1540483477+((o>>>16)*59797<<16),((o^o>>>15)>>>0).toString(36)}var eU={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tU=/[A-Z]|^ms/g,nU=/_EMO_([^_]+?)_([^]*?)_EMO_/g,s3=function(o){return o.charCodeAt(1)===45},FD=function(o){return o!=null&&typeof o!="boolean"},Y0=G4(function(t){return s3(t)?t:t.replace(tU,"-$&").toLowerCase()}),$D=function(o,a){switch(o){case"animation":case"animationName":if(typeof a=="string")return a.replace(nU,function(c,u,p){return Yr={name:u,styles:p,next:Yr},u})}return eU[o]!==1&&!s3(o)&&typeof a=="number"&&a!==0?a+"px":a};function Zu(t,o,a){if(a==null)return"";if(a.__emotion_styles!==void 0)return a;switch(typeof a){case"boolean":return"";case"object":{if(a.anim===1)return Yr={name:a.name,styles:a.styles,next:Yr},a.name;if(a.styles!==void 0){var c=a.next;if(c!==void 0)for(;c!==void 0;)Yr={name:c.name,styles:c.styles,next:Yr},c=c.next;var u=a.styles+";";return u}return oU(t,o,a)}case"function":{if(t!==void 0){var p=Yr,f=a(t);return Yr=p,Zu(t,o,f)}break}}if(o==null)return a;var b=o[a];return b!==void 0?b:a}function oU(t,o,a){var c="";if(Array.isArray(a))for(var u=0;u<a.length;u++)c+=Zu(t,o,a[u])+";";else for(var p in a){var f=a[p];if(typeof f!="object")o!=null&&o[f]!==void 0?c+=p+"{"+o[f]+"}":FD(f)&&(c+=Y0(p)+":"+$D(p,f)+";");else if(Array.isArray(f)&&typeof f[0]=="string"&&(o==null||o[f[0]]===void 0))for(var b=0;b<f.length;b++)FD(f[b])&&(c+=Y0(p)+":"+$D(p,f[b])+";");else{var m=Zu(t,o,f);switch(p){case"animation":case"animationName":{c+=Y0(p)+":"+m+";";break}default:c+=p+"{"+m+"}"}}}return c}var VD=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Yr,WC=function(o,a,c){if(o.length===1&&typeof o[0]=="object"&&o[0]!==null&&o[0].styles!==void 0)return o[0];var u=!0,p="";Yr=void 0;var f=o[0];f==null||f.raw===void 0?(u=!1,p+=Zu(c,a,f)):p+=f[0];for(var b=1;b<o.length;b++)p+=Zu(c,a,o[b]),u&&(p+=f[b]);VD.lastIndex=0;for(var m="",v;(v=VD.exec(p))!==null;)m+="-"+v[1];var A=XV(p)+m;return{name:A,styles:p,next:Yr}},rU=function(o){return o()},a3=Du["useInsertionEffect"]?Du["useInsertionEffect"]:!1,iU=a3||rU,UD=a3||z.useLayoutEffect,l3=z.createContext(typeof HTMLElement<"u"?VV({key:"css"}):null);l3.Provider;var c3=function(o){return z.forwardRef(function(a,c){var u=z.useContext(l3);return o(a,u,c)})},dm=z.createContext({}),sU=c3(function(t,o){var a=t.styles,c=WC([a],void 0,z.useContext(dm)),u=z.useRef();return UD(function(){var p=o.key+"-global",f=new o.sheet.constructor({key:p,nonce:o.sheet.nonce,container:o.sheet.container,speedy:o.sheet.isSpeedy}),b=!1,m=document.querySelector('style[data-emotion="'+p+" "+c.name+'"]');return o.sheet.tags.length&&(f.before=o.sheet.tags[0]),m!==null&&(b=!0,m.setAttribute("data-emotion",p),f.hydrate([m])),u.current=[f,b],function(){f.flush()}},[o]),UD(function(){var p=u.current,f=p[0],b=p[1];if(b){p[1]=!1;return}if(c.next!==void 0&&i3(o,c.next,!0),f.tags.length){var m=f.tags[f.tags.length-1].nextElementSibling;f.before=m,f.flush()}o.insert("",c,f,!1)},[o,c.name]),null});function Ju(){for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return WC(o)}var Ya=function(){var o=Ju.apply(void 0,arguments),a="animation-"+o.name;return{name:a,styles:"@keyframes "+a+"{"+o.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},aU=pV,lU=function(o){return o!=="theme"},HD=function(o){return typeof o=="string"&&o.charCodeAt(0)>96?aU:lU},WD=function(o,a,c){var u;if(a){var p=a.shouldForwardProp;u=o.__emotion_forwardProp&&p?function(f){return o.__emotion_forwardProp(f)&&p(f)}:p}return typeof u!="function"&&c&&(u=o.__emotion_forwardProp),u},cU=function(o){var a=o.cache,c=o.serialized,u=o.isStringTag;return r3(a,c,u),iU(function(){return i3(a,c,u)}),null},dU=function t(o,a){var c=o.__emotion_real===o,u=c&&o.__emotion_base||o,p,f;a!==void 0&&(p=a.label,f=a.target);var b=WD(o,a,c),m=b||HD(u),v=!m("as");return function(){var A=arguments,_=c&&o.__emotion_styles!==void 0?o.__emotion_styles.slice(0):[];if(p!==void 0&&_.push("label:"+p+";"),A[0]==null||A[0].raw===void 0)_.push.apply(_,A);else{_.push(A[0][0]);for(var y=A.length,E=1;E<y;E++)_.push(A[E],A[0][E])}var S=c3(function(D,R,I){var P=v&&D.as||u,B="",F=[],M=D;if(D.theme==null){M={};for(var W in D)M[W]=D[W];M.theme=z.useContext(dm)}typeof D.className=="string"?B=JV(R.registered,F,D.className):D.className!=null&&(B=D.className+" ");var H=WC(_.concat(F),R.registered,M);B+=R.key+"-"+H.name,f!==void 0&&(B+=" "+f);var K=v&&b===void 0?HD(P):m,Z={};for(var Y in D)v&&Y==="as"||K(Y)&&(Z[Y]=D[Y]);return Z.className=B,Z.ref=I,z.createElement(z.Fragment,null,z.createElement(cU,{cache:R,serialized:H,isStringTag:typeof P=="string"}),z.createElement(P,Z))});return S.displayName=p!==void 0?p:"Styled("+(typeof u=="string"?u:u.displayName||u.name||"Component")+")",S.defaultProps=o.defaultProps,S.__emotion_real=S,S.__emotion_base=u,S.__emotion_styles=_,S.__emotion_forwardProp=b,Object.defineProperty(S,"toString",{value:function(){return"."+f}}),S.withComponent=function(D,R){return t(D,U({},a,R,{shouldForwardProp:WD(S,R,!0)})).apply(void 0,_)},S}},uU=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],wv=dU.bind();uU.forEach(function(t){wv[t]=wv(t)});function hU(t){return t==null||Object.keys(t).length===0}function pU(t){const{styles:o,defaultTheme:a={}}=t,c=typeof o=="function"?u=>o(hU(u)?a:u):o;return L.jsx(sU,{styles:c})}/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function d3(t,o){return wv(t,o)}const fU=(t,o)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=o(t.__emotion_styles))},gU=["values","unit","step"],mU=t=>{const o=Object.keys(t).map(a=>({key:a,val:t[a]}))||[];return o.sort((a,c)=>a.val-c.val),o.reduce((a,c)=>U({},a,{[c.key]:c.val}),{})};function bU(t){const{values:o={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:a="px",step:c=5}=t,u=ye(t,gU),p=mU(o),f=Object.keys(p);function b(y){return`@media (min-width:${typeof o[y]=="number"?o[y]:y}${a})`}function m(y){return`@media (max-width:${(typeof o[y]=="number"?o[y]:y)-c/100}${a})`}function v(y,E){const S=f.indexOf(E);return`@media (min-width:${typeof o[y]=="number"?o[y]:y}${a}) and (max-width:${(S!==-1&&typeof o[f[S]]=="number"?o[f[S]]:E)-c/100}${a})`}function A(y){return f.indexOf(y)+1<f.length?v(y,f[f.indexOf(y)+1]):b(y)}function _(y){const E=f.indexOf(y);return E===0?b(f[1]):E===f.length-1?m(f[E]):v(y,f[f.indexOf(y)+1]).replace("@media","@media not all and")}return U({keys:f,values:p,up:b,down:m,between:v,only:A,not:_,unit:a},u)}const kU={borderRadius:4},wU=kU;function Cu(t,o){return o?Co(t,o,{clone:!1}):t}const GC={xs:0,sm:600,md:900,lg:1200,xl:1536},GD={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${GC[t]}px)`};function Ir(t,o,a){const c=t.theme||{};if(Array.isArray(o)){const p=c.breakpoints||GD;return o.reduce((f,b,m)=>(f[p.up(p.keys[m])]=a(o[m]),f),{})}if(typeof o=="object"){const p=c.breakpoints||GD;return Object.keys(o).reduce((f,b)=>{if(Object.keys(p.values||GC).indexOf(b)!==-1){const m=p.up(b);f[m]=a(o[b],b)}else{const m=b;f[m]=o[m]}return f},{})}return a(o)}function u3(t={}){var o;return((o=t.keys)==null?void 0:o.reduce((c,u)=>{const p=t.up(u);return c[p]={},c},{}))||{}}function h3(t,o){return t.reduce((a,c)=>{const u=a[c];return(!u||Object.keys(u).length===0)&&delete a[c],a},o)}function vU(t,...o){const a=u3(t),c=[a,...o].reduce((u,p)=>Co(u,p),{});return h3(Object.keys(a),c)}function CU(t,o){if(typeof t!="object")return{};const a={},c=Object.keys(o);return Array.isArray(t)?c.forEach((u,p)=>{p<t.length&&(a[u]=!0)}):c.forEach(u=>{t[u]!=null&&(a[u]=!0)}),a}function Q0({values:t,breakpoints:o,base:a}){const c=a||CU(t,o),u=Object.keys(c);if(u.length===0)return t;let p;return u.reduce((f,b,m)=>(Array.isArray(t)?(f[b]=t[m]!=null?t[m]:t[p],p=m):typeof t=="object"?(f[b]=t[b]!=null?t[b]:t[p],p=b):f[b]=t,f),{})}function Bc(t,o,a=!0){if(!o||typeof o!="string")return null;if(t&&t.vars&&a){const c=`vars.${o}`.split(".").reduce((u,p)=>u&&u[p]?u[p]:null,t);if(c!=null)return c}return o.split(".").reduce((c,u)=>c&&c[u]!=null?c[u]:null,t)}function kg(t,o,a,c=a){let u;return typeof t=="function"?u=t(a):Array.isArray(t)?u=t[a]||c:u=Bc(t,a)||c,o&&(u=o(u,c,t)),u}function Ct(t){const{prop:o,cssProperty:a=t.prop,themeKey:c,transform:u}=t,p=f=>{if(f[o]==null)return null;const b=f[o],m=f.theme,v=Bc(m,c)||{};return Ir(f,b,_=>{let y=kg(v,u,_);return _===y&&typeof _=="string"&&(y=kg(v,u,`${o}${_==="default"?"":Ce(_)}`,_)),a===!1?y:{[a]:y}})};return p.propTypes={},p.filterProps=[o],p}function yU(t){const o={};return a=>(o[a]===void 0&&(o[a]=t(a)),o[a])}const AU={m:"margin",p:"padding"},_U={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},qD={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},xU=yU(t=>{if(t.length>2)if(qD[t])t=qD[t];else return[t];const[o,a]=t.split(""),c=AU[o],u=_U[a]||"";return Array.isArray(u)?u.map(p=>c+p):[c+u]}),qC=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],KC=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...qC,...KC];function hh(t,o,a,c){var u;const p=(u=Bc(t,o,!1))!=null?u:a;return typeof p=="number"?f=>typeof f=="string"?f:p*f:Array.isArray(p)?f=>typeof f=="string"?f:p[f]:typeof p=="function"?p:()=>{}}function YC(t){return hh(t,"spacing",8)}function $a(t,o){if(typeof o=="string"||o==null)return o;const a=Math.abs(o),c=t(a);return o>=0?c:typeof c=="number"?-c:`-${c}`}function EU(t,o){return a=>t.reduce((c,u)=>(c[u]=$a(o,a),c),{})}function SU(t,o,a,c){if(o.indexOf(a)===-1)return null;const u=xU(a),p=EU(u,c),f=t[a];return Ir(t,f,p)}function p3(t,o){const a=YC(t.theme);return Object.keys(t).map(c=>SU(t,o,c,a)).reduce(Cu,{})}function sn(t){return p3(t,qC)}sn.propTypes={};sn.filterProps=qC;function an(t){return p3(t,KC)}an.propTypes={};an.filterProps=KC;function DU(t=8){if(t.mui)return t;const o=YC({spacing:t}),a=(...c)=>(c.length===0?[1]:c).map(p=>{const f=o(p);return typeof f=="number"?`${f}px`:f}).join(" ");return a.mui=!0,a}function um(...t){const o=t.reduce((c,u)=>(u.filterProps.forEach(p=>{c[p]=u}),c),{}),a=c=>Object.keys(c).reduce((u,p)=>o[p]?Cu(u,o[p](c)):u,{});return a.propTypes={},a.filterProps=t.reduce((c,u)=>c.concat(u.filterProps),[]),a}function Zr(t){return typeof t!="number"?t:`${t}px solid`}const TU=Ct({prop:"border",themeKey:"borders",transform:Zr}),IU=Ct({prop:"borderTop",themeKey:"borders",transform:Zr}),MU=Ct({prop:"borderRight",themeKey:"borders",transform:Zr}),PU=Ct({prop:"borderBottom",themeKey:"borders",transform:Zr}),BU=Ct({prop:"borderLeft",themeKey:"borders",transform:Zr}),NU=Ct({prop:"borderColor",themeKey:"palette"}),RU=Ct({prop:"borderTopColor",themeKey:"palette"}),OU=Ct({prop:"borderRightColor",themeKey:"palette"}),LU=Ct({prop:"borderBottomColor",themeKey:"palette"}),zU=Ct({prop:"borderLeftColor",themeKey:"palette"}),hm=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const o=hh(t.theme,"shape.borderRadius",4),a=c=>({borderRadius:$a(o,c)});return Ir(t,t.borderRadius,a)}return null};hm.propTypes={};hm.filterProps=["borderRadius"];um(TU,IU,MU,PU,BU,NU,RU,OU,LU,zU,hm);const pm=t=>{if(t.gap!==void 0&&t.gap!==null){const o=hh(t.theme,"spacing",8),a=c=>({gap:$a(o,c)});return Ir(t,t.gap,a)}return null};pm.propTypes={};pm.filterProps=["gap"];const fm=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const o=hh(t.theme,"spacing",8),a=c=>({columnGap:$a(o,c)});return Ir(t,t.columnGap,a)}return null};fm.propTypes={};fm.filterProps=["columnGap"];const gm=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const o=hh(t.theme,"spacing",8),a=c=>({rowGap:$a(o,c)});return Ir(t,t.rowGap,a)}return null};gm.propTypes={};gm.filterProps=["rowGap"];const jU=Ct({prop:"gridColumn"}),FU=Ct({prop:"gridRow"}),$U=Ct({prop:"gridAutoFlow"}),VU=Ct({prop:"gridAutoColumns"}),UU=Ct({prop:"gridAutoRows"}),HU=Ct({prop:"gridTemplateColumns"}),WU=Ct({prop:"gridTemplateRows"}),GU=Ct({prop:"gridTemplateAreas"}),qU=Ct({prop:"gridArea"});um(pm,fm,gm,jU,FU,$U,VU,UU,HU,WU,GU,qU);function _c(t,o){return o==="grey"?o:t}const KU=Ct({prop:"color",themeKey:"palette",transform:_c}),YU=Ct({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:_c}),QU=Ct({prop:"backgroundColor",themeKey:"palette",transform:_c});um(KU,YU,QU);function No(t){return t<=1&&t!==0?`${t*100}%`:t}const ZU=Ct({prop:"width",transform:No}),QC=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const o=a=>{var c;return{maxWidth:((c=t.theme)==null||(c=c.breakpoints)==null||(c=c.values)==null?void 0:c[a])||GC[a]||No(a)}};return Ir(t,t.maxWidth,o)}return null};QC.filterProps=["maxWidth"];const JU=Ct({prop:"minWidth",transform:No}),XU=Ct({prop:"height",transform:No}),eH=Ct({prop:"maxHeight",transform:No}),tH=Ct({prop:"minHeight",transform:No});Ct({prop:"size",cssProperty:"width",transform:No});Ct({prop:"size",cssProperty:"height",transform:No});const nH=Ct({prop:"boxSizing"});um(ZU,QC,JU,XU,eH,tH,nH);const oH={border:{themeKey:"borders",transform:Zr},borderTop:{themeKey:"borders",transform:Zr},borderRight:{themeKey:"borders",transform:Zr},borderBottom:{themeKey:"borders",transform:Zr},borderLeft:{themeKey:"borders",transform:Zr},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:hm},color:{themeKey:"palette",transform:_c},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:_c},backgroundColor:{themeKey:"palette",transform:_c},p:{style:an},pt:{style:an},pr:{style:an},pb:{style:an},pl:{style:an},px:{style:an},py:{style:an},padding:{style:an},paddingTop:{style:an},paddingRight:{style:an},paddingBottom:{style:an},paddingLeft:{style:an},paddingX:{style:an},paddingY:{style:an},paddingInline:{style:an},paddingInlineStart:{style:an},paddingInlineEnd:{style:an},paddingBlock:{style:an},paddingBlockStart:{style:an},paddingBlockEnd:{style:an},m:{style:sn},mt:{style:sn},mr:{style:sn},mb:{style:sn},ml:{style:sn},mx:{style:sn},my:{style:sn},margin:{style:sn},marginTop:{style:sn},marginRight:{style:sn},marginBottom:{style:sn},marginLeft:{style:sn},marginX:{style:sn},marginY:{style:sn},marginInline:{style:sn},marginInlineStart:{style:sn},marginInlineEnd:{style:sn},marginBlock:{style:sn},marginBlockStart:{style:sn},marginBlockEnd:{style:sn},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:pm},rowGap:{style:gm},columnGap:{style:fm},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:No},maxWidth:{style:QC},minWidth:{transform:No},height:{transform:No},maxHeight:{transform:No},minHeight:{transform:No},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},mm=oH;function rH(...t){const o=t.reduce((c,u)=>c.concat(Object.keys(u)),[]),a=new Set(o);return t.every(c=>a.size===Object.keys(c).length)}function iH(t,o){return typeof t=="function"?t(o):t}function sH(){function t(a,c,u,p){const f={[a]:c,theme:u},b=p[a];if(!b)return{[a]:c};const{cssProperty:m=a,themeKey:v,transform:A,style:_}=b;if(c==null)return null;if(v==="typography"&&c==="inherit")return{[a]:c};const y=Bc(u,v)||{};return _?_(f):Ir(f,c,S=>{let D=kg(y,A,S);return S===D&&typeof S=="string"&&(D=kg(y,A,`${a}${S==="default"?"":Ce(S)}`,S)),m===!1?D:{[m]:D}})}function o(a){var c;const{sx:u,theme:p={}}=a||{};if(!u)return null;const f=(c=p.unstable_sxConfig)!=null?c:mm;function b(m){let v=m;if(typeof m=="function")v=m(p);else if(typeof m!="object")return m;if(!v)return null;const A=u3(p.breakpoints),_=Object.keys(A);let y=A;return Object.keys(v).forEach(E=>{const S=iH(v[E],p);if(S!=null)if(typeof S=="object")if(f[E])y=Cu(y,t(E,S,p,f));else{const D=Ir({theme:p},S,R=>({[E]:R}));rH(D,S)?y[E]=o({sx:S,theme:p}):y=Cu(y,D)}else y=Cu(y,t(E,S,p,f))}),h3(_,y)}return Array.isArray(u)?u.map(b):b(u)}return o}const f3=sH();f3.filterProps=["sx"];const bm=f3,aH=["breakpoints","palette","spacing","shape"];function ph(t={},...o){const{breakpoints:a={},palette:c={},spacing:u,shape:p={}}=t,f=ye(t,aH),b=bU(a),m=DU(u);let v=Co({breakpoints:b,direction:"ltr",components:{},palette:U({mode:"light"},c),spacing:m,shape:U({},wU,p)},f);return v=o.reduce((A,_)=>Co(A,_),v),v.unstable_sxConfig=U({},mm,f==null?void 0:f.unstable_sxConfig),v.unstable_sx=function(_){return bm({sx:_,theme:this})},v}function lH(t){return Object.keys(t).length===0}function km(t=null){const o=z.useContext(dm);return!o||lH(o)?t:o}const cH=ph();function wm(t=cH){return km(t)}function dH({styles:t,themeId:o,defaultTheme:a={}}){const c=wm(a),u=typeof t=="function"?t(o&&c[o]||c):t;return L.jsx(pU,{styles:u})}const uH=["sx"],hH=t=>{var o,a;const c={systemProps:{},otherProps:{}},u=(o=t==null||(a=t.theme)==null?void 0:a.unstable_sxConfig)!=null?o:mm;return Object.keys(t).forEach(p=>{u[p]?c.systemProps[p]=t[p]:c.otherProps[p]=t[p]}),c};function ZC(t){const{sx:o}=t,a=ye(t,uH),{systemProps:c,otherProps:u}=hH(a);let p;return Array.isArray(o)?p=[c,...o]:typeof o=="function"?p=(...f)=>{const b=o(...f);return ya(b)?U({},c,b):c}:p=U({},c,o),U({},u,{sx:p})}function g3(t){var o,a,c="";if(typeof t=="string"||typeof t=="number")c+=t;else if(typeof t=="object")if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(a=g3(t[o]))&&(c&&(c+=" "),c+=a);else for(o in t)t[o]&&(c&&(c+=" "),c+=o);return c}function JC(){for(var t,o,a=0,c="";a<arguments.length;)(t=arguments[a++])&&(o=g3(t))&&(c&&(c+=" "),c+=o);return c}const pH=["className","component"];function fH(t={}){const{themeId:o,defaultTheme:a,defaultClassName:c="MuiBox-root",generateClassName:u}=t,p=d3("div",{shouldForwardProp:b=>b!=="theme"&&b!=="sx"&&b!=="as"})(bm);return z.forwardRef(function(m,v){const A=wm(a),_=ZC(m),{className:y,component:E="div"}=_,S=ye(_,pH);return L.jsx(p,U({as:E,ref:v,className:JC(y,u?u(c):c),theme:o&&A[o]||A},S))})}const gH=["variant"];function KD(t){return t.length===0}function m3(t){const{variant:o}=t,a=ye(t,gH);let c=o||"";return Object.keys(a).sort().forEach(u=>{u==="color"?c+=KD(c)?t[u]:Ce(t[u]):c+=`${KD(c)?u:Ce(u)}${Ce(t[u].toString())}`}),c}const mH=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function bH(t){return Object.keys(t).length===0}function kH(t){return typeof t=="string"&&t.charCodeAt(0)>96}const wH=(t,o)=>o.components&&o.components[t]&&o.components[t].styleOverrides?o.components[t].styleOverrides:null,vH=(t,o)=>{let a=[];o&&o.components&&o.components[t]&&o.components[t].variants&&(a=o.components[t].variants);const c={};return a.forEach(u=>{const p=m3(u.props);c[p]=u.style}),c},CH=(t,o,a,c)=>{var u;const{ownerState:p={}}=t,f=[],b=a==null||(u=a.components)==null||(u=u[c])==null?void 0:u.variants;return b&&b.forEach(m=>{let v=!0;Object.keys(m.props).forEach(A=>{p[A]!==m.props[A]&&t[A]!==m.props[A]&&(v=!1)}),v&&f.push(o[m3(m.props)])}),f};function yu(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const yH=ph(),AH=t=>t&&t.charAt(0).toLowerCase()+t.slice(1);function qd({defaultTheme:t,theme:o,themeId:a}){return bH(o)?t:o[a]||o}function _H(t){return t?(o,a)=>a[t]:null}function b3(t={}){const{themeId:o,defaultTheme:a=yH,rootShouldForwardProp:c=yu,slotShouldForwardProp:u=yu}=t,p=f=>bm(U({},f,{theme:qd(U({},f,{defaultTheme:a,themeId:o}))}));return p.__mui_systemSx=!0,(f,b={})=>{fU(f,F=>F.filter(M=>!(M!=null&&M.__mui_systemSx)));const{name:m,slot:v,skipVariantsResolver:A,skipSx:_,overridesResolver:y=_H(AH(v))}=b,E=ye(b,mH),S=A!==void 0?A:v&&v!=="Root"&&v!=="root"||!1,D=_||!1;let R,I=yu;v==="Root"||v==="root"?I=c:v?I=u:kH(f)&&(I=void 0);const P=d3(f,U({shouldForwardProp:I,label:R},E)),B=(F,...M)=>{const W=M?M.map(Y=>typeof Y=="function"&&Y.__emotion_real!==Y?te=>Y(U({},te,{theme:qd(U({},te,{defaultTheme:a,themeId:o}))})):Y):[];let H=F;m&&y&&W.push(Y=>{const te=qd(U({},Y,{defaultTheme:a,themeId:o})),ce=wH(m,te);if(ce){const re={};return Object.entries(ce).forEach(([ae,ie])=>{re[ae]=typeof ie=="function"?ie(U({},Y,{theme:te})):ie}),y(Y,re)}return null}),m&&!S&&W.push(Y=>{const te=qd(U({},Y,{defaultTheme:a,themeId:o}));return CH(Y,vH(m,te),te,m)}),D||W.push(p);const K=W.length-M.length;if(Array.isArray(F)&&K>0){const Y=new Array(K).fill("");H=[...F,...Y],H.raw=[...F.raw,...Y]}else typeof F=="function"&&F.__emotion_real!==F&&(H=Y=>F(U({},Y,{theme:qd(U({},Y,{defaultTheme:a,themeId:o}))})));const Z=P(H,...W);return f.muiName&&(Z.muiName=f.muiName),Z};return P.withConfig&&(B.withConfig=P.withConfig),B}}const xH=b3(),k3=xH;function w3(t){const{theme:o,name:a,props:c}=t;return!o||!o.components||!o.components[a]||!o.components[a].defaultProps?c:zC(o.components[a].defaultProps,c)}function XC({props:t,name:o,defaultTheme:a,themeId:c}){let u=wm(a);return c&&(u=u[c]||u),w3({theme:u,name:o,props:t})}function e1(t,o=0,a=1){return Math.min(Math.max(o,t),a)}function EH(t){t=t.slice(1);const o=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let a=t.match(o);return a&&a[0].length===1&&(a=a.map(c=>c+c)),a?`rgb${a.length===4?"a":""}(${a.map((c,u)=>u<3?parseInt(c,16):Math.round(parseInt(c,16)/255*1e3)/1e3).join(", ")})`:""}function Va(t){if(t.type)return t;if(t.charAt(0)==="#")return Va(EH(t));const o=t.indexOf("("),a=t.substring(0,o);if(["rgb","rgba","hsl","hsla","color"].indexOf(a)===-1)throw new Error(Ts(9,t));let c=t.substring(o+1,t.length-1),u;if(a==="color"){if(c=c.split(" "),u=c.shift(),c.length===4&&c[3].charAt(0)==="/"&&(c[3]=c[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(u)===-1)throw new Error(Ts(10,u))}else c=c.split(",");return c=c.map(p=>parseFloat(p)),{type:a,values:c,colorSpace:u}}function vm(t){const{type:o,colorSpace:a}=t;let{values:c}=t;return o.indexOf("rgb")!==-1?c=c.map((u,p)=>p<3?parseInt(u,10):u):o.indexOf("hsl")!==-1&&(c[1]=`${c[1]}%`,c[2]=`${c[2]}%`),o.indexOf("color")!==-1?c=`${a} ${c.join(" ")}`:c=`${c.join(", ")}`,`${o}(${c})`}function SH(t){t=Va(t);const{values:o}=t,a=o[0],c=o[1]/100,u=o[2]/100,p=c*Math.min(u,1-u),f=(v,A=(v+a/30)%12)=>u-p*Math.max(Math.min(A-3,9-A,1),-1);let b="rgb";const m=[Math.round(f(0)*255),Math.round(f(8)*255),Math.round(f(4)*255)];return t.type==="hsla"&&(b+="a",m.push(o[3])),vm({type:b,values:m})}function YD(t){t=Va(t);let o=t.type==="hsl"||t.type==="hsla"?Va(SH(t)).values:t.values;return o=o.map(a=>(t.type!=="color"&&(a/=255),a<=.03928?a/12.92:((a+.055)/1.055)**2.4)),Number((.2126*o[0]+.7152*o[1]+.0722*o[2]).toFixed(3))}function DH(t,o){const a=YD(t),c=YD(o);return(Math.max(a,c)+.05)/(Math.min(a,c)+.05)}function cn(t,o){return t=Va(t),o=e1(o),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${o}`:t.values[3]=o,vm(t)}function TH(t,o){if(t=Va(t),o=e1(o),t.type.indexOf("hsl")!==-1)t.values[2]*=1-o;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let a=0;a<3;a+=1)t.values[a]*=1-o;return vm(t)}function IH(t,o){if(t=Va(t),o=e1(o),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*o;else if(t.type.indexOf("rgb")!==-1)for(let a=0;a<3;a+=1)t.values[a]+=(255-t.values[a])*o;else if(t.type.indexOf("color")!==-1)for(let a=0;a<3;a+=1)t.values[a]+=(1-t.values[a])*o;return vm(t)}const MH=z.createContext(null),v3=MH;function C3(){return z.useContext(v3)}const PH=typeof Symbol=="function"&&Symbol.for,BH=PH?Symbol.for("mui.nested"):"__THEME_NESTED__";function NH(t,o){return typeof o=="function"?o(t):U({},t,o)}function RH(t){const{children:o,theme:a}=t,c=C3(),u=z.useMemo(()=>{const p=c===null?a:NH(c,a);return p!=null&&(p[BH]=c!==null),p},[a,c]);return L.jsx(v3.Provider,{value:u,children:o})}const QD={};function ZD(t,o,a,c=!1){return z.useMemo(()=>{const u=t&&o[t]||o;if(typeof a=="function"){const p=a(u),f=t?U({},o,{[t]:p}):p;return c?()=>f:f}return t?U({},o,{[t]:a}):U({},o,a)},[t,o,a,c])}function OH(t){const{children:o,theme:a,themeId:c}=t,u=km(QD),p=C3()||QD,f=ZD(c,u,a),b=ZD(c,p,a,!0);return L.jsx(RH,{theme:b,children:L.jsx(dm.Provider,{value:f,children:o})})}const LH=["className","component","disableGutters","fixed","maxWidth","classes"],zH=ph(),jH=k3("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[`maxWidth${Ce(String(a.maxWidth))}`],a.fixed&&o.fixed,a.disableGutters&&o.disableGutters]}}),FH=t=>XC({props:t,name:"MuiContainer",defaultTheme:zH}),$H=(t,o)=>{const a=m=>je(o,m),{classes:c,fixed:u,disableGutters:p,maxWidth:f}=t,b={root:["root",f&&`maxWidth${Ce(String(f))}`,u&&"fixed",p&&"disableGutters"]};return Ue(b,a,c)};function VH(t={}){const{createStyledComponent:o=jH,useThemeProps:a=FH,componentName:c="MuiContainer"}=t,u=o(({theme:f,ownerState:b})=>U({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!b.disableGutters&&{paddingLeft:f.spacing(2),paddingRight:f.spacing(2),[f.breakpoints.up("sm")]:{paddingLeft:f.spacing(3),paddingRight:f.spacing(3)}}),({theme:f,ownerState:b})=>b.fixed&&Object.keys(f.breakpoints.values).reduce((m,v)=>{const A=v,_=f.breakpoints.values[A];return _!==0&&(m[f.breakpoints.up(A)]={maxWidth:`${_}${f.breakpoints.unit}`}),m},{}),({theme:f,ownerState:b})=>U({},b.maxWidth==="xs"&&{[f.breakpoints.up("xs")]:{maxWidth:Math.max(f.breakpoints.values.xs,444)}},b.maxWidth&&b.maxWidth!=="xs"&&{[f.breakpoints.up(b.maxWidth)]:{maxWidth:`${f.breakpoints.values[b.maxWidth]}${f.breakpoints.unit}`}}));return z.forwardRef(function(b,m){const v=a(b),{className:A,component:_="div",disableGutters:y=!1,fixed:E=!1,maxWidth:S="lg"}=v,D=ye(v,LH),R=U({},v,{component:_,disableGutters:y,fixed:E,maxWidth:S}),I=$H(R,c);return L.jsx(u,U({as:_,ownerState:R,className:JC(I.root,A),ref:m},D))})}const UH=["component","direction","spacing","divider","children","className","useFlexGap"],HH=ph(),WH=k3("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,o)=>o.root});function GH(t){return XC({props:t,name:"MuiStack",defaultTheme:HH})}function qH(t,o){const a=z.Children.toArray(t).filter(Boolean);return a.reduce((c,u,p)=>(c.push(u),p<a.length-1&&c.push(z.cloneElement(o,{key:`separator-${p}`})),c),[])}const KH=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],YH=({ownerState:t,theme:o})=>{let a=U({display:"flex",flexDirection:"column"},Ir({theme:o},Q0({values:t.direction,breakpoints:o.breakpoints.values}),c=>({flexDirection:c})));if(t.spacing){const c=YC(o),u=Object.keys(o.breakpoints.values).reduce((m,v)=>((typeof t.spacing=="object"&&t.spacing[v]!=null||typeof t.direction=="object"&&t.direction[v]!=null)&&(m[v]=!0),m),{}),p=Q0({values:t.direction,base:u}),f=Q0({values:t.spacing,base:u});typeof p=="object"&&Object.keys(p).forEach((m,v,A)=>{if(!p[m]){const y=v>0?p[A[v-1]]:"column";p[m]=y}}),a=Co(a,Ir({theme:o},f,(m,v)=>t.useFlexGap?{gap:$a(c,m)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${KH(v?p[v]:t.direction)}`]:$a(c,m)}}))}return a=vU(o.breakpoints,a),a};function QH(t={}){const{createStyledComponent:o=WH,useThemeProps:a=GH,componentName:c="MuiStack"}=t,u=()=>Ue({root:["root"]},m=>je(c,m),{}),p=o(YH);return z.forwardRef(function(m,v){const A=a(m),_=ZC(A),{component:y="div",direction:E="column",spacing:S=0,divider:D,children:R,className:I,useFlexGap:P=!1}=_,B=ye(_,UH),F={direction:E,spacing:S,useFlexGap:P},M=u();return L.jsx(p,U({as:y,ownerState:F,ref:v,className:JC(M.root,I)},B,{children:D?qH(R,D):R}))})}function ZH(t,o){return U({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},o)}const JH=["mode","contrastThreshold","tonalOffset"],JD={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Ku.white,default:Ku.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Z0={text:{primary:Ku.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Ku.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function XD(t,o,a,c){const u=c.light||c,p=c.dark||c*1.5;t[o]||(t.hasOwnProperty(a)?t[o]=t[a]:o==="light"?t.light=IH(t.main,u):o==="dark"&&(t.dark=TH(t.main,p)))}function XH(t="light"){return t==="dark"?{main:Kl[200],light:Kl[50],dark:Kl[400]}:{main:Kl[700],light:Kl[400],dark:Kl[800]}}function eW(t="light"){return t==="dark"?{main:ql[200],light:ql[50],dark:ql[400]}:{main:ql[500],light:ql[300],dark:ql[700]}}function tW(t="light"){return t==="dark"?{main:qr[500],light:qr[300],dark:qr[700]}:{main:qr[700],light:qr[400],dark:qr[800]}}function nW(t="light"){return t==="dark"?{main:Yl[400],light:Yl[300],dark:Yl[700]}:{main:Yl[700],light:Yl[500],dark:Yl[900]}}function oW(t="light"){return t==="dark"?{main:Xo[400],light:Xo[300],dark:Xo[700]}:{main:Xo[800],light:Xo[500],dark:Xo[900]}}function rW(t="light"){return t==="dark"?{main:Ca[400],light:Ca[300],dark:Ca[700]}:{main:"#ed6c02",light:Ca[500],dark:Ca[900]}}function iW(t){const{mode:o="light",contrastThreshold:a=3,tonalOffset:c=.2}=t,u=ye(t,JH),p=t.primary||XH(o),f=t.secondary||eW(o),b=t.error||tW(o),m=t.info||nW(o),v=t.success||oW(o),A=t.warning||rW(o);function _(D){return DH(D,Z0.text.primary)>=a?Z0.text.primary:JD.text.primary}const y=({color:D,name:R,mainShade:I=500,lightShade:P=300,darkShade:B=700})=>{if(D=U({},D),!D.main&&D[I]&&(D.main=D[I]),!D.hasOwnProperty("main"))throw new Error(Ts(11,R?` (${R})`:"",I));if(typeof D.main!="string")throw new Error(Ts(12,R?` (${R})`:"",JSON.stringify(D.main)));return XD(D,"light",P,c),XD(D,"dark",B,c),D.contrastText||(D.contrastText=_(D.main)),D},E={dark:Z0,light:JD};return Co(U({common:U({},Ku),mode:o,primary:y({color:p,name:"primary"}),secondary:y({color:f,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:y({color:b,name:"error"}),warning:y({color:A,name:"warning"}),info:y({color:m,name:"info"}),success:y({color:v,name:"success"}),grey:pv,contrastThreshold:a,getContrastText:_,augmentColor:y,tonalOffset:c},E[o]),u)}const sW=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function aW(t){return Math.round(t*1e5)/1e5}const eT={textTransform:"uppercase"},tT='"Roboto", "Helvetica", "Arial", sans-serif';function lW(t,o){const a=typeof o=="function"?o(t):o,{fontFamily:c=tT,fontSize:u=14,fontWeightLight:p=300,fontWeightRegular:f=400,fontWeightMedium:b=500,fontWeightBold:m=700,htmlFontSize:v=16,allVariants:A,pxToRem:_}=a,y=ye(a,sW),E=u/14,S=_||(I=>`${I/v*E}rem`),D=(I,P,B,F,M)=>U({fontFamily:c,fontWeight:I,fontSize:S(P),lineHeight:B},c===tT?{letterSpacing:`${aW(F/P)}em`}:{},M,A),R={h1:D(p,96,1.167,-1.5),h2:D(p,60,1.2,-.5),h3:D(f,48,1.167,0),h4:D(f,34,1.235,.25),h5:D(f,24,1.334,0),h6:D(b,20,1.6,.15),subtitle1:D(f,16,1.75,.15),subtitle2:D(b,14,1.57,.1),body1:D(f,16,1.5,.15),body2:D(f,14,1.43,.15),button:D(b,14,1.75,.4,eT),caption:D(f,12,1.66,.4),overline:D(f,12,2.66,1,eT),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Co(U({htmlFontSize:v,pxToRem:S,fontFamily:c,fontSize:u,fontWeightLight:p,fontWeightRegular:f,fontWeightMedium:b,fontWeightBold:m},R),y,{clone:!1})}const cW=.2,dW=.14,uW=.12;function Kt(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${cW})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${dW})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${uW})`].join(",")}const hW=["none",Kt(0,2,1,-1,0,1,1,0,0,1,3,0),Kt(0,3,1,-2,0,2,2,0,0,1,5,0),Kt(0,3,3,-2,0,3,4,0,0,1,8,0),Kt(0,2,4,-1,0,4,5,0,0,1,10,0),Kt(0,3,5,-1,0,5,8,0,0,1,14,0),Kt(0,3,5,-1,0,6,10,0,0,1,18,0),Kt(0,4,5,-2,0,7,10,1,0,2,16,1),Kt(0,5,5,-3,0,8,10,1,0,3,14,2),Kt(0,5,6,-3,0,9,12,1,0,3,16,2),Kt(0,6,6,-3,0,10,14,1,0,4,18,3),Kt(0,6,7,-4,0,11,15,1,0,4,20,3),Kt(0,7,8,-4,0,12,17,2,0,5,22,4),Kt(0,7,8,-4,0,13,19,2,0,5,24,4),Kt(0,7,9,-4,0,14,21,2,0,5,26,4),Kt(0,8,9,-5,0,15,22,2,0,6,28,5),Kt(0,8,10,-5,0,16,24,2,0,6,30,5),Kt(0,8,11,-5,0,17,26,2,0,6,32,5),Kt(0,9,11,-5,0,18,28,2,0,7,34,6),Kt(0,9,12,-6,0,19,29,2,0,7,36,6),Kt(0,10,13,-6,0,20,31,3,0,8,38,7),Kt(0,10,13,-6,0,21,33,3,0,8,40,7),Kt(0,10,14,-6,0,22,35,3,0,8,42,7),Kt(0,11,14,-7,0,23,36,3,0,9,44,8),Kt(0,11,15,-7,0,24,38,3,0,9,46,8)],pW=hW,fW=["duration","easing","delay"],gW={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},y3={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function nT(t){return`${Math.round(t)}ms`}function mW(t){if(!t)return 0;const o=t/36;return Math.round((4+15*o**.25+o/5)*10)}function bW(t){const o=U({},gW,t.easing),a=U({},y3,t.duration);return U({getAutoHeightDuration:mW,create:(u=["all"],p={})=>{const{duration:f=a.standard,easing:b=o.easeInOut,delay:m=0}=p;return ye(p,fW),(Array.isArray(u)?u:[u]).map(v=>`${v} ${typeof f=="string"?f:nT(f)} ${b} ${typeof m=="string"?m:nT(m)}`).join(",")}},t,{easing:o,duration:a})}const kW={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},wW=kW,vW=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function t1(t={},...o){const{mixins:a={},palette:c={},transitions:u={},typography:p={}}=t,f=ye(t,vW);if(t.vars)throw new Error(Ts(18));const b=iW(c),m=ph(t);let v=Co(m,{mixins:ZH(m.breakpoints,a),palette:b,shadows:pW.slice(),typography:lW(b,p),transitions:bW(u),zIndex:U({},wW)});return v=Co(v,f),v=o.reduce((A,_)=>Co(A,_),v),v.unstable_sxConfig=U({},mm,f==null?void 0:f.unstable_sxConfig),v.unstable_sx=function(_){return bm({sx:_,theme:this})},v}function CW(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function yW(t){return parseFloat(t)}const AW=t1(),Cm=AW;function Qa(){const t=wm(Cm);return t[Fa]||t}function $e({props:t,name:o}){return XC({props:t,name:o,defaultTheme:Cm,themeId:Fa})}const cr=t=>yu(t)&&t!=="classes",_W=yu,xW=b3({themeId:Fa,defaultTheme:Cm,rootShouldForwardProp:cr}),fe=xW,EW=["theme"];function SW(t){let{theme:o}=t,a=ye(t,EW);const c=o[Fa];return L.jsx(OH,U({},a,{themeId:c?Fa:void 0,theme:c||o}))}const DW=t=>{let o;return t<1?o=5.11916*t**2:o=4.5*Math.log(t+1)+2,(o/100).toFixed(2)},oT=DW;function A3(t){var o,a,c="";if(typeof t=="string"||typeof t=="number")c+=t;else if(typeof t=="object")if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(a=A3(t[o]))&&(c&&(c+=" "),c+=a);else for(o in t)t[o]&&(c&&(c+=" "),c+=o);return c}function Ae(){for(var t,o,a=0,c="";a<arguments.length;)(t=arguments[a++])&&(o=A3(t))&&(c&&(c+=" "),c+=o);return c}function Xu(t){return typeof t=="string"}function lu(t,o,a){return t===void 0||Xu(t)?o:U({},o,{ownerState:U({},o.ownerState,a)})}const TW={disableDefaultClasses:!1},IW=z.createContext(TW);function _3(t){const{disableDefaultClasses:o}=z.useContext(IW);return a=>o?"":t(a)}function MW(t,o=[]){if(t===void 0)return{};const a={};return Object.keys(t).filter(c=>c.match(/^on[A-Z]/)&&typeof t[c]=="function"&&!o.includes(c)).forEach(c=>{a[c]=t[c]}),a}function vv(t,o){return typeof t=="function"?t(o):t}function rT(t){if(t===void 0)return{};const o={};return Object.keys(t).filter(a=>!(a.match(/^on[A-Z]/)&&typeof t[a]=="function")).forEach(a=>{o[a]=t[a]}),o}function PW(t){const{getSlotProps:o,additionalProps:a,externalSlotProps:c,externalForwardedProps:u,className:p}=t;if(!o){const E=Ae(u==null?void 0:u.className,c==null?void 0:c.className,p,a==null?void 0:a.className),S=U({},a==null?void 0:a.style,u==null?void 0:u.style,c==null?void 0:c.style),D=U({},a,u,c);return E.length>0&&(D.className=E),Object.keys(S).length>0&&(D.style=S),{props:D,internalRef:void 0}}const f=MW(U({},u,c)),b=rT(c),m=rT(u),v=o(f),A=Ae(v==null?void 0:v.className,a==null?void 0:a.className,p,u==null?void 0:u.className,c==null?void 0:c.className),_=U({},v==null?void 0:v.style,a==null?void 0:a.style,u==null?void 0:u.style,c==null?void 0:c.style),y=U({},v,a,m,b);return A.length>0&&(y.className=A),Object.keys(_).length>0&&(y.style=_),{props:y,internalRef:v.ref}}const BW=["elementType","externalSlotProps","ownerState"];function eh(t){var o;const{elementType:a,externalSlotProps:c,ownerState:u}=t,p=ye(t,BW),f=vv(c,u),{props:b,internalRef:m}=PW(U({},p,{externalSlotProps:f})),v=mn(m,f==null?void 0:f.ref,(o=t.additionalProps)==null?void 0:o.ref);return lu(a,U({},b,{ref:v}),u)}const NW=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function RW(t){const o=parseInt(t.getAttribute("tabindex")||"",10);return Number.isNaN(o)?t.contentEditable==="true"||(t.nodeName==="AUDIO"||t.nodeName==="VIDEO"||t.nodeName==="DETAILS")&&t.getAttribute("tabindex")===null?0:t.tabIndex:o}function OW(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!1;const o=c=>t.ownerDocument.querySelector(`input[type="radio"]${c}`);let a=o(`[name="${t.name}"]:checked`);return a||(a=o(`[name="${t.name}"]`)),a!==t}function LW(t){return!(t.disabled||t.tagName==="INPUT"&&t.type==="hidden"||OW(t))}function zW(t){const o=[],a=[];return Array.from(t.querySelectorAll(NW)).forEach((c,u)=>{const p=RW(c);p===-1||!LW(c)||(p===0?o.push(c):a.push({documentOrder:u,tabIndex:p,node:c}))}),a.sort((c,u)=>c.tabIndex===u.tabIndex?c.documentOrder-u.documentOrder:c.tabIndex-u.tabIndex).map(c=>c.node).concat(o)}function jW(){return!0}function FW(t){const{children:o,disableAutoFocus:a=!1,disableEnforceFocus:c=!1,disableRestoreFocus:u=!1,getTabbable:p=zW,isEnabled:f=jW,open:b}=t,m=z.useRef(!1),v=z.useRef(null),A=z.useRef(null),_=z.useRef(null),y=z.useRef(null),E=z.useRef(!1),S=z.useRef(null),D=mn(o.ref,S),R=z.useRef(null);z.useEffect(()=>{!b||!S.current||(E.current=!a)},[a,b]),z.useEffect(()=>{if(!b||!S.current)return;const B=lo(S.current);return S.current.contains(B.activeElement)||(S.current.hasAttribute("tabIndex")||S.current.setAttribute("tabIndex","-1"),E.current&&S.current.focus()),()=>{u||(_.current&&_.current.focus&&(m.current=!0,_.current.focus()),_.current=null)}},[b]),z.useEffect(()=>{if(!b||!S.current)return;const B=lo(S.current),F=H=>{const{current:K}=S;if(K!==null){if(!B.hasFocus()||c||!f()||m.current){m.current=!1;return}if(!K.contains(B.activeElement)){if(H&&y.current!==H.target||B.activeElement!==y.current)y.current=null;else if(y.current!==null)return;if(!E.current)return;let te=[];if((B.activeElement===v.current||B.activeElement===A.current)&&(te=p(S.current)),te.length>0){var Z,Y;const ce=!!((Z=R.current)!=null&&Z.shiftKey&&((Y=R.current)==null?void 0:Y.key)==="Tab"),re=te[0],ae=te[te.length-1];typeof re!="string"&&typeof ae!="string"&&(ce?ae.focus():re.focus())}else K.focus()}}},M=H=>{R.current=H,!(c||!f()||H.key!=="Tab")&&B.activeElement===S.current&&H.shiftKey&&(m.current=!0,A.current&&A.current.focus())};B.addEventListener("focusin",F),B.addEventListener("keydown",M,!0);const W=setInterval(()=>{B.activeElement&&B.activeElement.tagName==="BODY"&&F(null)},50);return()=>{clearInterval(W),B.removeEventListener("focusin",F),B.removeEventListener("keydown",M,!0)}},[a,c,u,f,b,p]);const I=B=>{_.current===null&&(_.current=B.relatedTarget),E.current=!0,y.current=B.target;const F=o.props.onFocus;F&&F(B)},P=B=>{_.current===null&&(_.current=B.relatedTarget),E.current=!0};return L.jsxs(z.Fragment,{children:[L.jsx("div",{tabIndex:b?0:-1,onFocus:P,ref:v,"data-testid":"sentinelStart"}),z.cloneElement(o,{ref:D,onFocus:I}),L.jsx("div",{tabIndex:b?0:-1,onFocus:P,ref:A,"data-testid":"sentinelEnd"})]})}var yo="top",ar="bottom",lr="right",Ao="left",n1="auto",fh=[yo,ar,lr,Ao],Nc="start",th="end",$W="clippingParents",x3="viewport",Kd="popper",VW="reference",iT=fh.reduce(function(t,o){return t.concat([o+"-"+Nc,o+"-"+th])},[]),E3=[].concat(fh,[n1]).reduce(function(t,o){return t.concat([o,o+"-"+Nc,o+"-"+th])},[]),UW="beforeRead",HW="read",WW="afterRead",GW="beforeMain",qW="main",KW="afterMain",YW="beforeWrite",QW="write",ZW="afterWrite",JW=[UW,HW,WW,GW,qW,KW,YW,QW,ZW];function si(t){return t?(t.nodeName||"").toLowerCase():null}function Fo(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var o=t.ownerDocument;return o&&o.defaultView||window}return t}function Ua(t){var o=Fo(t).Element;return t instanceof o||t instanceof Element}function nr(t){var o=Fo(t).HTMLElement;return t instanceof o||t instanceof HTMLElement}function o1(t){if(typeof ShadowRoot>"u")return!1;var o=Fo(t).ShadowRoot;return t instanceof o||t instanceof ShadowRoot}function XW(t){var o=t.state;Object.keys(o.elements).forEach(function(a){var c=o.styles[a]||{},u=o.attributes[a]||{},p=o.elements[a];!nr(p)||!si(p)||(Object.assign(p.style,c),Object.keys(u).forEach(function(f){var b=u[f];b===!1?p.removeAttribute(f):p.setAttribute(f,b===!0?"":b)}))})}function eG(t){var o=t.state,a={popper:{position:o.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(o.elements.popper.style,a.popper),o.styles=a,o.elements.arrow&&Object.assign(o.elements.arrow.style,a.arrow),function(){Object.keys(o.elements).forEach(function(c){var u=o.elements[c],p=o.attributes[c]||{},f=Object.keys(o.styles.hasOwnProperty(c)?o.styles[c]:a[c]),b=f.reduce(function(m,v){return m[v]="",m},{});!nr(u)||!si(u)||(Object.assign(u.style,b),Object.keys(p).forEach(function(m){u.removeAttribute(m)}))})}}const tG={name:"applyStyles",enabled:!0,phase:"write",fn:XW,effect:eG,requires:["computeStyles"]};function oi(t){return t.split("-")[0]}var Ba=Math.max,wg=Math.min,Rc=Math.round;function Cv(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(o){return o.brand+"/"+o.version}).join(" "):navigator.userAgent}function S3(){return!/^((?!chrome|android).)*safari/i.test(Cv())}function Oc(t,o,a){o===void 0&&(o=!1),a===void 0&&(a=!1);var c=t.getBoundingClientRect(),u=1,p=1;o&&nr(t)&&(u=t.offsetWidth>0&&Rc(c.width)/t.offsetWidth||1,p=t.offsetHeight>0&&Rc(c.height)/t.offsetHeight||1);var f=Ua(t)?Fo(t):window,b=f.visualViewport,m=!S3()&&a,v=(c.left+(m&&b?b.offsetLeft:0))/u,A=(c.top+(m&&b?b.offsetTop:0))/p,_=c.width/u,y=c.height/p;return{width:_,height:y,top:A,right:v+_,bottom:A+y,left:v,x:v,y:A}}function r1(t){var o=Oc(t),a=t.offsetWidth,c=t.offsetHeight;return Math.abs(o.width-a)<=1&&(a=o.width),Math.abs(o.height-c)<=1&&(c=o.height),{x:t.offsetLeft,y:t.offsetTop,width:a,height:c}}function D3(t,o){var a=o.getRootNode&&o.getRootNode();if(t.contains(o))return!0;if(a&&o1(a)){var c=o;do{if(c&&t.isSameNode(c))return!0;c=c.parentNode||c.host}while(c)}return!1}function Li(t){return Fo(t).getComputedStyle(t)}function nG(t){return["table","td","th"].indexOf(si(t))>=0}function Ns(t){return((Ua(t)?t.ownerDocument:t.document)||window.document).documentElement}function ym(t){return si(t)==="html"?t:t.assignedSlot||t.parentNode||(o1(t)?t.host:null)||Ns(t)}function sT(t){return!nr(t)||Li(t).position==="fixed"?null:t.offsetParent}function oG(t){var o=/firefox/i.test(Cv()),a=/Trident/i.test(Cv());if(a&&nr(t)){var c=Li(t);if(c.position==="fixed")return null}var u=ym(t);for(o1(u)&&(u=u.host);nr(u)&&["html","body"].indexOf(si(u))<0;){var p=Li(u);if(p.transform!=="none"||p.perspective!=="none"||p.contain==="paint"||["transform","perspective"].indexOf(p.willChange)!==-1||o&&p.willChange==="filter"||o&&p.filter&&p.filter!=="none")return u;u=u.parentNode}return null}function gh(t){for(var o=Fo(t),a=sT(t);a&&nG(a)&&Li(a).position==="static";)a=sT(a);return a&&(si(a)==="html"||si(a)==="body"&&Li(a).position==="static")?o:a||oG(t)||o}function i1(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Au(t,o,a){return Ba(t,wg(o,a))}function rG(t,o,a){var c=Au(t,o,a);return c>a?a:c}function T3(){return{top:0,right:0,bottom:0,left:0}}function I3(t){return Object.assign({},T3(),t)}function M3(t,o){return o.reduce(function(a,c){return a[c]=t,a},{})}var iG=function(o,a){return o=typeof o=="function"?o(Object.assign({},a.rects,{placement:a.placement})):o,I3(typeof o!="number"?o:M3(o,fh))};function sG(t){var o,a=t.state,c=t.name,u=t.options,p=a.elements.arrow,f=a.modifiersData.popperOffsets,b=oi(a.placement),m=i1(b),v=[Ao,lr].indexOf(b)>=0,A=v?"height":"width";if(!(!p||!f)){var _=iG(u.padding,a),y=r1(p),E=m==="y"?yo:Ao,S=m==="y"?ar:lr,D=a.rects.reference[A]+a.rects.reference[m]-f[m]-a.rects.popper[A],R=f[m]-a.rects.reference[m],I=gh(p),P=I?m==="y"?I.clientHeight||0:I.clientWidth||0:0,B=D/2-R/2,F=_[E],M=P-y[A]-_[S],W=P/2-y[A]/2+B,H=Au(F,W,M),K=m;a.modifiersData[c]=(o={},o[K]=H,o.centerOffset=H-W,o)}}function aG(t){var o=t.state,a=t.options,c=a.element,u=c===void 0?"[data-popper-arrow]":c;u!=null&&(typeof u=="string"&&(u=o.elements.popper.querySelector(u),!u)||D3(o.elements.popper,u)&&(o.elements.arrow=u))}const lG={name:"arrow",enabled:!0,phase:"main",fn:sG,effect:aG,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Lc(t){return t.split("-")[1]}var cG={top:"auto",right:"auto",bottom:"auto",left:"auto"};function dG(t,o){var a=t.x,c=t.y,u=o.devicePixelRatio||1;return{x:Rc(a*u)/u||0,y:Rc(c*u)/u||0}}function aT(t){var o,a=t.popper,c=t.popperRect,u=t.placement,p=t.variation,f=t.offsets,b=t.position,m=t.gpuAcceleration,v=t.adaptive,A=t.roundOffsets,_=t.isFixed,y=f.x,E=y===void 0?0:y,S=f.y,D=S===void 0?0:S,R=typeof A=="function"?A({x:E,y:D}):{x:E,y:D};E=R.x,D=R.y;var I=f.hasOwnProperty("x"),P=f.hasOwnProperty("y"),B=Ao,F=yo,M=window;if(v){var W=gh(a),H="clientHeight",K="clientWidth";if(W===Fo(a)&&(W=Ns(a),Li(W).position!=="static"&&b==="absolute"&&(H="scrollHeight",K="scrollWidth")),W=W,u===yo||(u===Ao||u===lr)&&p===th){F=ar;var Z=_&&W===M&&M.visualViewport?M.visualViewport.height:W[H];D-=Z-c.height,D*=m?1:-1}if(u===Ao||(u===yo||u===ar)&&p===th){B=lr;var Y=_&&W===M&&M.visualViewport?M.visualViewport.width:W[K];E-=Y-c.width,E*=m?1:-1}}var te=Object.assign({position:b},v&&cG),ce=A===!0?dG({x:E,y:D},Fo(a)):{x:E,y:D};if(E=ce.x,D=ce.y,m){var re;return Object.assign({},te,(re={},re[F]=P?"0":"",re[B]=I?"0":"",re.transform=(M.devicePixelRatio||1)<=1?"translate("+E+"px, "+D+"px)":"translate3d("+E+"px, "+D+"px, 0)",re))}return Object.assign({},te,(o={},o[F]=P?D+"px":"",o[B]=I?E+"px":"",o.transform="",o))}function uG(t){var o=t.state,a=t.options,c=a.gpuAcceleration,u=c===void 0?!0:c,p=a.adaptive,f=p===void 0?!0:p,b=a.roundOffsets,m=b===void 0?!0:b,v={placement:oi(o.placement),variation:Lc(o.placement),popper:o.elements.popper,popperRect:o.rects.popper,gpuAcceleration:u,isFixed:o.options.strategy==="fixed"};o.modifiersData.popperOffsets!=null&&(o.styles.popper=Object.assign({},o.styles.popper,aT(Object.assign({},v,{offsets:o.modifiersData.popperOffsets,position:o.options.strategy,adaptive:f,roundOffsets:m})))),o.modifiersData.arrow!=null&&(o.styles.arrow=Object.assign({},o.styles.arrow,aT(Object.assign({},v,{offsets:o.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:m})))),o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-placement":o.placement})}const hG={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:uG,data:{}};var uf={passive:!0};function pG(t){var o=t.state,a=t.instance,c=t.options,u=c.scroll,p=u===void 0?!0:u,f=c.resize,b=f===void 0?!0:f,m=Fo(o.elements.popper),v=[].concat(o.scrollParents.reference,o.scrollParents.popper);return p&&v.forEach(function(A){A.addEventListener("scroll",a.update,uf)}),b&&m.addEventListener("resize",a.update,uf),function(){p&&v.forEach(function(A){A.removeEventListener("scroll",a.update,uf)}),b&&m.removeEventListener("resize",a.update,uf)}}const fG={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:pG,data:{}};var gG={left:"right",right:"left",bottom:"top",top:"bottom"};function jf(t){return t.replace(/left|right|bottom|top/g,function(o){return gG[o]})}var mG={start:"end",end:"start"};function lT(t){return t.replace(/start|end/g,function(o){return mG[o]})}function s1(t){var o=Fo(t),a=o.pageXOffset,c=o.pageYOffset;return{scrollLeft:a,scrollTop:c}}function a1(t){return Oc(Ns(t)).left+s1(t).scrollLeft}function bG(t,o){var a=Fo(t),c=Ns(t),u=a.visualViewport,p=c.clientWidth,f=c.clientHeight,b=0,m=0;if(u){p=u.width,f=u.height;var v=S3();(v||!v&&o==="fixed")&&(b=u.offsetLeft,m=u.offsetTop)}return{width:p,height:f,x:b+a1(t),y:m}}function kG(t){var o,a=Ns(t),c=s1(t),u=(o=t.ownerDocument)==null?void 0:o.body,p=Ba(a.scrollWidth,a.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),f=Ba(a.scrollHeight,a.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0),b=-c.scrollLeft+a1(t),m=-c.scrollTop;return Li(u||a).direction==="rtl"&&(b+=Ba(a.clientWidth,u?u.clientWidth:0)-p),{width:p,height:f,x:b,y:m}}function l1(t){var o=Li(t),a=o.overflow,c=o.overflowX,u=o.overflowY;return/auto|scroll|overlay|hidden/.test(a+u+c)}function P3(t){return["html","body","#document"].indexOf(si(t))>=0?t.ownerDocument.body:nr(t)&&l1(t)?t:P3(ym(t))}function _u(t,o){var a;o===void 0&&(o=[]);var c=P3(t),u=c===((a=t.ownerDocument)==null?void 0:a.body),p=Fo(c),f=u?[p].concat(p.visualViewport||[],l1(c)?c:[]):c,b=o.concat(f);return u?b:b.concat(_u(ym(f)))}function yv(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function wG(t,o){var a=Oc(t,!1,o==="fixed");return a.top=a.top+t.clientTop,a.left=a.left+t.clientLeft,a.bottom=a.top+t.clientHeight,a.right=a.left+t.clientWidth,a.width=t.clientWidth,a.height=t.clientHeight,a.x=a.left,a.y=a.top,a}function cT(t,o,a){return o===x3?yv(bG(t,a)):Ua(o)?wG(o,a):yv(kG(Ns(t)))}function vG(t){var o=_u(ym(t)),a=["absolute","fixed"].indexOf(Li(t).position)>=0,c=a&&nr(t)?gh(t):t;return Ua(c)?o.filter(function(u){return Ua(u)&&D3(u,c)&&si(u)!=="body"}):[]}function CG(t,o,a,c){var u=o==="clippingParents"?vG(t):[].concat(o),p=[].concat(u,[a]),f=p[0],b=p.reduce(function(m,v){var A=cT(t,v,c);return m.top=Ba(A.top,m.top),m.right=wg(A.right,m.right),m.bottom=wg(A.bottom,m.bottom),m.left=Ba(A.left,m.left),m},cT(t,f,c));return b.width=b.right-b.left,b.height=b.bottom-b.top,b.x=b.left,b.y=b.top,b}function B3(t){var o=t.reference,a=t.element,c=t.placement,u=c?oi(c):null,p=c?Lc(c):null,f=o.x+o.width/2-a.width/2,b=o.y+o.height/2-a.height/2,m;switch(u){case yo:m={x:f,y:o.y-a.height};break;case ar:m={x:f,y:o.y+o.height};break;case lr:m={x:o.x+o.width,y:b};break;case Ao:m={x:o.x-a.width,y:b};break;default:m={x:o.x,y:o.y}}var v=u?i1(u):null;if(v!=null){var A=v==="y"?"height":"width";switch(p){case Nc:m[v]=m[v]-(o[A]/2-a[A]/2);break;case th:m[v]=m[v]+(o[A]/2-a[A]/2);break}}return m}function nh(t,o){o===void 0&&(o={});var a=o,c=a.placement,u=c===void 0?t.placement:c,p=a.strategy,f=p===void 0?t.strategy:p,b=a.boundary,m=b===void 0?$W:b,v=a.rootBoundary,A=v===void 0?x3:v,_=a.elementContext,y=_===void 0?Kd:_,E=a.altBoundary,S=E===void 0?!1:E,D=a.padding,R=D===void 0?0:D,I=I3(typeof R!="number"?R:M3(R,fh)),P=y===Kd?VW:Kd,B=t.rects.popper,F=t.elements[S?P:y],M=CG(Ua(F)?F:F.contextElement||Ns(t.elements.popper),m,A,f),W=Oc(t.elements.reference),H=B3({reference:W,element:B,strategy:"absolute",placement:u}),K=yv(Object.assign({},B,H)),Z=y===Kd?K:W,Y={top:M.top-Z.top+I.top,bottom:Z.bottom-M.bottom+I.bottom,left:M.left-Z.left+I.left,right:Z.right-M.right+I.right},te=t.modifiersData.offset;if(y===Kd&&te){var ce=te[u];Object.keys(Y).forEach(function(re){var ae=[lr,ar].indexOf(re)>=0?1:-1,ie=[yo,ar].indexOf(re)>=0?"y":"x";Y[re]+=ce[ie]*ae})}return Y}function yG(t,o){o===void 0&&(o={});var a=o,c=a.placement,u=a.boundary,p=a.rootBoundary,f=a.padding,b=a.flipVariations,m=a.allowedAutoPlacements,v=m===void 0?E3:m,A=Lc(c),_=A?b?iT:iT.filter(function(S){return Lc(S)===A}):fh,y=_.filter(function(S){return v.indexOf(S)>=0});y.length===0&&(y=_);var E=y.reduce(function(S,D){return S[D]=nh(t,{placement:D,boundary:u,rootBoundary:p,padding:f})[oi(D)],S},{});return Object.keys(E).sort(function(S,D){return E[S]-E[D]})}function AG(t){if(oi(t)===n1)return[];var o=jf(t);return[lT(t),o,lT(o)]}function _G(t){var o=t.state,a=t.options,c=t.name;if(!o.modifiersData[c]._skip){for(var u=a.mainAxis,p=u===void 0?!0:u,f=a.altAxis,b=f===void 0?!0:f,m=a.fallbackPlacements,v=a.padding,A=a.boundary,_=a.rootBoundary,y=a.altBoundary,E=a.flipVariations,S=E===void 0?!0:E,D=a.allowedAutoPlacements,R=o.options.placement,I=oi(R),P=I===R,B=m||(P||!S?[jf(R)]:AG(R)),F=[R].concat(B).reduce(function(Me,ve){return Me.concat(oi(ve)===n1?yG(o,{placement:ve,boundary:A,rootBoundary:_,padding:v,flipVariations:S,allowedAutoPlacements:D}):ve)},[]),M=o.rects.reference,W=o.rects.popper,H=new Map,K=!0,Z=F[0],Y=0;Y<F.length;Y++){var te=F[Y],ce=oi(te),re=Lc(te)===Nc,ae=[yo,ar].indexOf(ce)>=0,ie=ae?"width":"height",pe=nh(o,{placement:te,boundary:A,rootBoundary:_,altBoundary:y,padding:v}),oe=ae?re?lr:Ao:re?ar:yo;M[ie]>W[ie]&&(oe=jf(oe));var J=jf(oe),le=[];if(p&&le.push(pe[ce]<=0),b&&le.push(pe[oe]<=0,pe[J]<=0),le.every(function(Me){return Me})){Z=te,K=!1;break}H.set(te,le)}if(K)for(var ge=S?3:1,Te=function(ve){var be=F.find(function(Oe){var He=H.get(Oe);if(He)return He.slice(0,ve).every(function(Ne){return Ne})});if(be)return Z=be,"break"},Ie=ge;Ie>0;Ie--){var Qe=Te(Ie);if(Qe==="break")break}o.placement!==Z&&(o.modifiersData[c]._skip=!0,o.placement=Z,o.reset=!0)}}const xG={name:"flip",enabled:!0,phase:"main",fn:_G,requiresIfExists:["offset"],data:{_skip:!1}};function dT(t,o,a){return a===void 0&&(a={x:0,y:0}),{top:t.top-o.height-a.y,right:t.right-o.width+a.x,bottom:t.bottom-o.height+a.y,left:t.left-o.width-a.x}}function uT(t){return[yo,lr,ar,Ao].some(function(o){return t[o]>=0})}function EG(t){var o=t.state,a=t.name,c=o.rects.reference,u=o.rects.popper,p=o.modifiersData.preventOverflow,f=nh(o,{elementContext:"reference"}),b=nh(o,{altBoundary:!0}),m=dT(f,c),v=dT(b,u,p),A=uT(m),_=uT(v);o.modifiersData[a]={referenceClippingOffsets:m,popperEscapeOffsets:v,isReferenceHidden:A,hasPopperEscaped:_},o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-reference-hidden":A,"data-popper-escaped":_})}const SG={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:EG};function DG(t,o,a){var c=oi(t),u=[Ao,yo].indexOf(c)>=0?-1:1,p=typeof a=="function"?a(Object.assign({},o,{placement:t})):a,f=p[0],b=p[1];return f=f||0,b=(b||0)*u,[Ao,lr].indexOf(c)>=0?{x:b,y:f}:{x:f,y:b}}function TG(t){var o=t.state,a=t.options,c=t.name,u=a.offset,p=u===void 0?[0,0]:u,f=E3.reduce(function(A,_){return A[_]=DG(_,o.rects,p),A},{}),b=f[o.placement],m=b.x,v=b.y;o.modifiersData.popperOffsets!=null&&(o.modifiersData.popperOffsets.x+=m,o.modifiersData.popperOffsets.y+=v),o.modifiersData[c]=f}const IG={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:TG};function MG(t){var o=t.state,a=t.name;o.modifiersData[a]=B3({reference:o.rects.reference,element:o.rects.popper,strategy:"absolute",placement:o.placement})}const PG={name:"popperOffsets",enabled:!0,phase:"read",fn:MG,data:{}};function BG(t){return t==="x"?"y":"x"}function NG(t){var o=t.state,a=t.options,c=t.name,u=a.mainAxis,p=u===void 0?!0:u,f=a.altAxis,b=f===void 0?!1:f,m=a.boundary,v=a.rootBoundary,A=a.altBoundary,_=a.padding,y=a.tether,E=y===void 0?!0:y,S=a.tetherOffset,D=S===void 0?0:S,R=nh(o,{boundary:m,rootBoundary:v,padding:_,altBoundary:A}),I=oi(o.placement),P=Lc(o.placement),B=!P,F=i1(I),M=BG(F),W=o.modifiersData.popperOffsets,H=o.rects.reference,K=o.rects.popper,Z=typeof D=="function"?D(Object.assign({},o.rects,{placement:o.placement})):D,Y=typeof Z=="number"?{mainAxis:Z,altAxis:Z}:Object.assign({mainAxis:0,altAxis:0},Z),te=o.modifiersData.offset?o.modifiersData.offset[o.placement]:null,ce={x:0,y:0};if(W){if(p){var re,ae=F==="y"?yo:Ao,ie=F==="y"?ar:lr,pe=F==="y"?"height":"width",oe=W[F],J=oe+R[ae],le=oe-R[ie],ge=E?-K[pe]/2:0,Te=P===Nc?H[pe]:K[pe],Ie=P===Nc?-K[pe]:-H[pe],Qe=o.elements.arrow,Me=E&&Qe?r1(Qe):{width:0,height:0},ve=o.modifiersData["arrow#persistent"]?o.modifiersData["arrow#persistent"].padding:T3(),be=ve[ae],Oe=ve[ie],He=Au(0,H[pe],Me[pe]),Ne=B?H[pe]/2-ge-He-be-Y.mainAxis:Te-He-be-Y.mainAxis,bt=B?-H[pe]/2+ge+He+Oe+Y.mainAxis:Ie+He+Oe+Y.mainAxis,Re=o.elements.arrow&&gh(o.elements.arrow),ke=Re?F==="y"?Re.clientTop||0:Re.clientLeft||0:0,et=(re=te==null?void 0:te[F])!=null?re:0,dt=oe+Ne-et-ke,zt=oe+bt-et,Wt=Au(E?wg(J,dt):J,oe,E?Ba(le,zt):le);W[F]=Wt,ce[F]=Wt-oe}if(b){var Ze,Ot=F==="x"?yo:Ao,it=F==="x"?ar:lr,We=W[M],st=M==="y"?"height":"width",tn=We+R[Ot],Ve=We-R[it],gt=[yo,Ao].indexOf(I)!==-1,yt=(Ze=te==null?void 0:te[M])!=null?Ze:0,bn=gt?tn:We-H[st]-K[st]-yt+Y.altAxis,zn=gt?We+H[st]+K[st]-yt-Y.altAxis:Ve,qe=E&&gt?rG(bn,We,zn):Au(E?bn:tn,We,E?zn:Ve);W[M]=qe,ce[M]=qe-We}o.modifiersData[c]=ce}}const RG={name:"preventOverflow",enabled:!0,phase:"main",fn:NG,requiresIfExists:["offset"]};function OG(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function LG(t){return t===Fo(t)||!nr(t)?s1(t):OG(t)}function zG(t){var o=t.getBoundingClientRect(),a=Rc(o.width)/t.offsetWidth||1,c=Rc(o.height)/t.offsetHeight||1;return a!==1||c!==1}function jG(t,o,a){a===void 0&&(a=!1);var c=nr(o),u=nr(o)&&zG(o),p=Ns(o),f=Oc(t,u,a),b={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(c||!c&&!a)&&((si(o)!=="body"||l1(p))&&(b=LG(o)),nr(o)?(m=Oc(o,!0),m.x+=o.clientLeft,m.y+=o.clientTop):p&&(m.x=a1(p))),{x:f.left+b.scrollLeft-m.x,y:f.top+b.scrollTop-m.y,width:f.width,height:f.height}}function FG(t){var o=new Map,a=new Set,c=[];t.forEach(function(p){o.set(p.name,p)});function u(p){a.add(p.name);var f=[].concat(p.requires||[],p.requiresIfExists||[]);f.forEach(function(b){if(!a.has(b)){var m=o.get(b);m&&u(m)}}),c.push(p)}return t.forEach(function(p){a.has(p.name)||u(p)}),c}function $G(t){var o=FG(t);return JW.reduce(function(a,c){return a.concat(o.filter(function(u){return u.phase===c}))},[])}function VG(t){var o;return function(){return o||(o=new Promise(function(a){Promise.resolve().then(function(){o=void 0,a(t())})})),o}}function UG(t){var o=t.reduce(function(a,c){var u=a[c.name];return a[c.name]=u?Object.assign({},u,c,{options:Object.assign({},u.options,c.options),data:Object.assign({},u.data,c.data)}):c,a},{});return Object.keys(o).map(function(a){return o[a]})}var hT={placement:"bottom",modifiers:[],strategy:"absolute"};function pT(){for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return!o.some(function(c){return!(c&&typeof c.getBoundingClientRect=="function")})}function HG(t){t===void 0&&(t={});var o=t,a=o.defaultModifiers,c=a===void 0?[]:a,u=o.defaultOptions,p=u===void 0?hT:u;return function(b,m,v){v===void 0&&(v=p);var A={placement:"bottom",orderedModifiers:[],options:Object.assign({},hT,p),modifiersData:{},elements:{reference:b,popper:m},attributes:{},styles:{}},_=[],y=!1,E={state:A,setOptions:function(I){var P=typeof I=="function"?I(A.options):I;D(),A.options=Object.assign({},p,A.options,P),A.scrollParents={reference:Ua(b)?_u(b):b.contextElement?_u(b.contextElement):[],popper:_u(m)};var B=$G(UG([].concat(c,A.options.modifiers)));return A.orderedModifiers=B.filter(function(F){return F.enabled}),S(),E.update()},forceUpdate:function(){if(!y){var I=A.elements,P=I.reference,B=I.popper;if(pT(P,B)){A.rects={reference:jG(P,gh(B),A.options.strategy==="fixed"),popper:r1(B)},A.reset=!1,A.placement=A.options.placement,A.orderedModifiers.forEach(function(Y){return A.modifiersData[Y.name]=Object.assign({},Y.data)});for(var F=0;F<A.orderedModifiers.length;F++){if(A.reset===!0){A.reset=!1,F=-1;continue}var M=A.orderedModifiers[F],W=M.fn,H=M.options,K=H===void 0?{}:H,Z=M.name;typeof W=="function"&&(A=W({state:A,options:K,name:Z,instance:E})||A)}}}},update:VG(function(){return new Promise(function(R){E.forceUpdate(),R(A)})}),destroy:function(){D(),y=!0}};if(!pT(b,m))return E;E.setOptions(v).then(function(R){!y&&v.onFirstUpdate&&v.onFirstUpdate(R)});function S(){A.orderedModifiers.forEach(function(R){var I=R.name,P=R.options,B=P===void 0?{}:P,F=R.effect;if(typeof F=="function"){var M=F({state:A,name:I,instance:E,options:B}),W=function(){};_.push(M||W)}})}function D(){_.forEach(function(R){return R()}),_=[]}return E}}var WG=[fG,PG,hG,tG,IG,xG,RG,lG,SG],GG=HG({defaultModifiers:WG});function qG(t){return typeof t=="function"?t():t}const KG=z.forwardRef(function(o,a){const{children:c,container:u,disablePortal:p=!1}=o,[f,b]=z.useState(null),m=mn(z.isValidElement(c)?c.ref:null,a);if(ii(()=>{p||b(qG(u)||document.body)},[u,p]),ii(()=>{if(f&&!p)return fv(a,f),()=>{fv(a,null)}},[a,f,p]),p){if(z.isValidElement(c)){const v={ref:m};return z.cloneElement(c,v)}return L.jsx(z.Fragment,{children:c})}return L.jsx(z.Fragment,{children:f&&dh.createPortal(c,f)})}),N3=KG;function YG(t){return je("MuiPopper",t)}Fe("MuiPopper",["root"]);const QG=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],ZG=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function JG(t,o){if(o==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function Av(t){return typeof t=="function"?t():t}function XG(t){return t.nodeType!==void 0}const eq=()=>Ue({root:["root"]},_3(YG)),tq={},nq=z.forwardRef(function(o,a){var c;const{anchorEl:u,children:p,direction:f,disablePortal:b,modifiers:m,open:v,placement:A,popperOptions:_,popperRef:y,slotProps:E={},slots:S={},TransitionProps:D}=o,R=ye(o,QG),I=z.useRef(null),P=mn(I,a),B=z.useRef(null),F=mn(B,y),M=z.useRef(F);ii(()=>{M.current=F},[F]),z.useImperativeHandle(y,()=>B.current,[]);const W=JG(A,f),[H,K]=z.useState(W),[Z,Y]=z.useState(Av(u));z.useEffect(()=>{B.current&&B.current.forceUpdate()}),z.useEffect(()=>{u&&Y(Av(u))},[u]),ii(()=>{if(!Z||!v)return;const ie=J=>{K(J.placement)};let pe=[{name:"preventOverflow",options:{altBoundary:b}},{name:"flip",options:{altBoundary:b}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:J})=>{ie(J)}}];m!=null&&(pe=pe.concat(m)),_&&_.modifiers!=null&&(pe=pe.concat(_.modifiers));const oe=GG(Z,I.current,U({placement:W},_,{modifiers:pe}));return M.current(oe),()=>{oe.destroy(),M.current(null)}},[Z,b,m,v,_,W]);const te={placement:H};D!==null&&(te.TransitionProps=D);const ce=eq(),re=(c=S.root)!=null?c:"div",ae=eh({elementType:re,externalSlotProps:E.root,externalForwardedProps:R,additionalProps:{role:"tooltip",ref:P},ownerState:o,className:ce.root});return L.jsx(re,U({},ae,{children:typeof p=="function"?p(te):p}))}),oq=z.forwardRef(function(o,a){const{anchorEl:c,children:u,container:p,direction:f="ltr",disablePortal:b=!1,keepMounted:m=!1,modifiers:v,open:A,placement:_="bottom",popperOptions:y=tq,popperRef:E,style:S,transition:D=!1,slotProps:R={},slots:I={}}=o,P=ye(o,ZG),[B,F]=z.useState(!0),M=()=>{F(!1)},W=()=>{F(!0)};if(!m&&!A&&(!D||B))return null;let H;if(p)H=p;else if(c){const Y=Av(c);H=Y&&XG(Y)?lo(Y).body:lo(null).body}const K=!A&&m&&(!D||B)?"none":void 0,Z=D?{in:A,onEnter:M,onExited:W}:void 0;return L.jsx(N3,{disablePortal:b,container:H,children:L.jsx(nq,U({anchorEl:c,direction:f,disablePortal:b,modifiers:v,ref:a,open:D?!B:A,placement:_,popperOptions:y,popperRef:E,slotProps:R,slots:I},P,{style:U({position:"fixed",top:0,left:0,display:K},S),TransitionProps:Z,children:u}))})}),rq=oq;function iq(t){const o=lo(t);return o.body===t?Oi(t).innerWidth>o.documentElement.clientWidth:t.scrollHeight>t.clientHeight}function xu(t,o){o?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function fT(t){return parseInt(Oi(t).getComputedStyle(t).paddingRight,10)||0}function sq(t){const a=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(t.tagName)!==-1,c=t.tagName==="INPUT"&&t.getAttribute("type")==="hidden";return a||c}function gT(t,o,a,c,u){const p=[o,a,...c];[].forEach.call(t.children,f=>{const b=p.indexOf(f)===-1,m=!sq(f);b&&m&&xu(f,u)})}function J0(t,o){let a=-1;return t.some((c,u)=>o(c)?(a=u,!0):!1),a}function aq(t,o){const a=[],c=t.container;if(!o.disableScrollLock){if(iq(c)){const f=H4(lo(c));a.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${fT(c)+f}px`;const b=lo(c).querySelectorAll(".mui-fixed");[].forEach.call(b,m=>{a.push({value:m.style.paddingRight,property:"padding-right",el:m}),m.style.paddingRight=`${fT(m)+f}px`})}let p;if(c.parentNode instanceof DocumentFragment)p=lo(c).body;else{const f=c.parentElement,b=Oi(c);p=(f==null?void 0:f.nodeName)==="HTML"&&b.getComputedStyle(f).overflowY==="scroll"?f:c}a.push({value:p.style.overflow,property:"overflow",el:p},{value:p.style.overflowX,property:"overflow-x",el:p},{value:p.style.overflowY,property:"overflow-y",el:p}),p.style.overflow="hidden"}return()=>{a.forEach(({value:p,el:f,property:b})=>{p?f.style.setProperty(b,p):f.style.removeProperty(b)})}}function lq(t){const o=[];return[].forEach.call(t.children,a=>{a.getAttribute("aria-hidden")==="true"&&o.push(a)}),o}class cq{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(o,a){let c=this.modals.indexOf(o);if(c!==-1)return c;c=this.modals.length,this.modals.push(o),o.modalRef&&xu(o.modalRef,!1);const u=lq(a);gT(a,o.mount,o.modalRef,u,!0);const p=J0(this.containers,f=>f.container===a);return p!==-1?(this.containers[p].modals.push(o),c):(this.containers.push({modals:[o],container:a,restore:null,hiddenSiblings:u}),c)}mount(o,a){const c=J0(this.containers,p=>p.modals.indexOf(o)!==-1),u=this.containers[c];u.restore||(u.restore=aq(u,a))}remove(o,a=!0){const c=this.modals.indexOf(o);if(c===-1)return c;const u=J0(this.containers,f=>f.modals.indexOf(o)!==-1),p=this.containers[u];if(p.modals.splice(p.modals.indexOf(o),1),this.modals.splice(c,1),p.modals.length===0)p.restore&&p.restore(),o.modalRef&&xu(o.modalRef,a),gT(p.container,o.mount,o.modalRef,p.hiddenSiblings,!1),this.containers.splice(u,1);else{const f=p.modals[p.modals.length-1];f.modalRef&&xu(f.modalRef,!1)}return c}isTopModal(o){return this.modals.length>0&&this.modals[this.modals.length-1]===o}}function dq(t){return je("MuiModal",t)}Fe("MuiModal",["root","hidden","backdrop"]);const uq=["children","closeAfterTransition","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],hq=t=>{const{open:o,exited:a}=t;return Ue({root:["root",!o&&a&&"hidden"],backdrop:["backdrop"]},_3(dq))};function pq(t){return typeof t=="function"?t():t}function fq(t){return t?t.props.hasOwnProperty("in"):!1}const gq=new cq,mq=z.forwardRef(function(o,a){var c,u;const{children:p,closeAfterTransition:f=!1,container:b,disableAutoFocus:m=!1,disableEnforceFocus:v=!1,disableEscapeKeyDown:A=!1,disablePortal:_=!1,disableRestoreFocus:y=!1,disableScrollLock:E=!1,hideBackdrop:S=!1,keepMounted:D=!1,manager:R=gq,onBackdropClick:I,onClose:P,onKeyDown:B,open:F,onTransitionEnter:M,onTransitionExited:W,slotProps:H={},slots:K={}}=o,Z=ye(o,uq),Y=R,[te,ce]=z.useState(!F),re=z.useRef({}),ae=z.useRef(null),ie=z.useRef(null),pe=mn(ie,a),oe=fq(p),J=(c=o["aria-hidden"])!=null?c:!0,le=()=>lo(ae.current),ge=()=>(re.current.modalRef=ie.current,re.current.mountNode=ae.current,re.current),Te=()=>{Y.mount(ge(),{disableScrollLock:E}),ie.current&&(ie.current.scrollTop=0)},Ie=Sa(()=>{const Ze=pq(b)||le().body;Y.add(ge(),Ze),ie.current&&Te()}),Qe=z.useCallback(()=>Y.isTopModal(ge()),[Y]),Me=Sa(Ze=>{ae.current=Ze,!(!Ze||!ie.current)&&(F&&Qe()?Te():xu(ie.current,J))}),ve=z.useCallback(()=>{Y.remove(ge(),J)},[Y,J]);z.useEffect(()=>()=>{ve()},[ve]),z.useEffect(()=>{F?Ie():(!oe||!f)&&ve()},[F,ve,oe,f,Ie]);const be=U({},o,{closeAfterTransition:f,disableAutoFocus:m,disableEnforceFocus:v,disableEscapeKeyDown:A,disablePortal:_,disableRestoreFocus:y,disableScrollLock:E,exited:te,hideBackdrop:S,keepMounted:D}),Oe=hq(be),He=()=>{ce(!1),M&&M()},Ne=()=>{ce(!0),W&&W(),f&&ve()},bt=Ze=>{Ze.target===Ze.currentTarget&&(I&&I(Ze),P&&P(Ze,"backdropClick"))},Re=Ze=>{B&&B(Ze),!(Ze.key!=="Escape"||!Qe())&&(A||(Ze.stopPropagation(),P&&P(Ze,"escapeKeyDown")))},ke={};p.props.tabIndex===void 0&&(ke.tabIndex="-1"),oe&&(ke.onEnter=PD(He,p.props.onEnter),ke.onExited=PD(Ne,p.props.onExited));const et=(u=K.root)!=null?u:"div",dt=eh({elementType:et,externalSlotProps:H.root,externalForwardedProps:Z,additionalProps:{ref:pe,role:"presentation",onKeyDown:Re},className:Oe.root,ownerState:be}),zt=K.backdrop,Wt=eh({elementType:zt,externalSlotProps:H.backdrop,additionalProps:{"aria-hidden":!0,onClick:bt,open:F},className:Oe.backdrop,ownerState:be});return!D&&!F&&(!oe||te)?null:L.jsx(N3,{ref:Me,container:b,disablePortal:_,children:L.jsxs(et,U({},dt,{children:[!S&&zt?L.jsx(zt,U({},Wt)):null,L.jsx(FW,{disableEnforceFocus:v,disableAutoFocus:m,disableRestoreFocus:y,isEnabled:Qe,open:F,children:z.cloneElement(p,ke)})]}))})}),bq=mq,kq=["onChange","maxRows","minRows","style","value"];function hf(t){return parseInt(t,10)||0}const wq={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function mT(t){return t==null||Object.keys(t).length===0||t.outerHeightStyle===0&&!t.overflow}const vq=z.forwardRef(function(o,a){const{onChange:c,maxRows:u,minRows:p=1,style:f,value:b}=o,m=ye(o,kq),{current:v}=z.useRef(b!=null),A=z.useRef(null),_=mn(a,A),y=z.useRef(null),E=z.useRef(0),[S,D]=z.useState({outerHeightStyle:0}),R=z.useCallback(()=>{const M=A.current,H=Oi(M).getComputedStyle(M);if(H.width==="0px")return{outerHeightStyle:0};const K=y.current;K.style.width=H.width,K.value=M.value||o.placeholder||"x",K.value.slice(-1)===`
`&&(K.value+=" ");const Z=H.boxSizing,Y=hf(H.paddingBottom)+hf(H.paddingTop),te=hf(H.borderBottomWidth)+hf(H.borderTopWidth),ce=K.scrollHeight;K.value="x";const re=K.scrollHeight;let ae=ce;p&&(ae=Math.max(Number(p)*re,ae)),u&&(ae=Math.min(Number(u)*re,ae)),ae=Math.max(ae,re);const ie=ae+(Z==="border-box"?Y+te:0),pe=Math.abs(ae-ce)<=1;return{outerHeightStyle:ie,overflow:pe}},[u,p,o.placeholder]),I=(M,W)=>{const{outerHeightStyle:H,overflow:K}=W;return E.current<20&&(H>0&&Math.abs((M.outerHeightStyle||0)-H)>1||M.overflow!==K)?(E.current+=1,{overflow:K,outerHeightStyle:H}):M},P=z.useCallback(()=>{const M=R();mT(M)||D(W=>I(W,M))},[R]),B=()=>{const M=R();mT(M)||dh.flushSync(()=>{D(W=>I(W,M))})};z.useEffect(()=>{const M=RC(()=>{E.current=0,A.current&&B()});let W;const H=A.current,K=Oi(H);return K.addEventListener("resize",M),typeof ResizeObserver<"u"&&(W=new ResizeObserver(M),W.observe(H)),()=>{M.clear(),K.removeEventListener("resize",M),W&&W.disconnect()}}),ii(()=>{P()}),z.useEffect(()=>{E.current=0},[b]);const F=M=>{E.current=0,v||P(),c&&c(M)};return L.jsxs(z.Fragment,{children:[L.jsx("textarea",U({value:b,onChange:F,ref:_,rows:p,style:U({height:S.outerHeightStyle,overflow:S.overflow?"hidden":void 0},f)},m)),L.jsx("textarea",{"aria-hidden":!0,className:o.className,readOnly:!0,ref:y,tabIndex:-1,style:U({},wq.shadow,f,{padding:0})})]})}),Cq=vq;function yq(t){return je("MuiSvgIcon",t)}Fe("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Aq=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],_q=t=>{const{color:o,fontSize:a,classes:c}=t,u={root:["root",o!=="inherit"&&`color${Ce(o)}`,`fontSize${Ce(a)}`]};return Ue(u,yq,c)},xq=fe("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,a.color!=="inherit"&&o[`color${Ce(a.color)}`],o[`fontSize${Ce(a.fontSize)}`]]}})(({theme:t,ownerState:o})=>{var a,c,u,p,f,b,m,v,A,_,y,E,S,D,R,I,P;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(a=t.transitions)==null||(c=a.create)==null?void 0:c.call(a,"fill",{duration:(u=t.transitions)==null||(p=u.duration)==null?void 0:p.shorter}),fontSize:{inherit:"inherit",small:((f=t.typography)==null||(b=f.pxToRem)==null?void 0:b.call(f,20))||"1.25rem",medium:((m=t.typography)==null||(v=m.pxToRem)==null?void 0:v.call(m,24))||"1.5rem",large:((A=t.typography)==null||(_=A.pxToRem)==null?void 0:_.call(A,35))||"2.1875rem"}[o.fontSize],color:(y=(E=(t.vars||t).palette)==null||(S=E[o.color])==null?void 0:S.main)!=null?y:{action:(D=(t.vars||t).palette)==null||(R=D.action)==null?void 0:R.active,disabled:(I=(t.vars||t).palette)==null||(P=I.action)==null?void 0:P.disabled,inherit:void 0}[o.color]}}),R3=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiSvgIcon"}),{children:u,className:p,color:f="inherit",component:b="svg",fontSize:m="medium",htmlColor:v,inheritViewBox:A=!1,titleAccess:_,viewBox:y="0 0 24 24"}=c,E=ye(c,Aq),S=U({},c,{color:f,component:b,fontSize:m,instanceFontSize:o.fontSize,inheritViewBox:A,viewBox:y}),D={};A||(D.viewBox=y);const R=_q(S);return L.jsxs(xq,U({as:b,className:Ae(R.root,p),focusable:"false",color:v,"aria-hidden":_?void 0:!0,role:_?"img":void 0,ref:a},D,E,{ownerState:S,children:[u,_?L.jsx("title",{children:_}):null]}))});R3.muiName="SvgIcon";const bT=R3;function ct(t,o){function a(c,u){return L.jsx(bT,U({"data-testid":`${o}Icon`,ref:u},c,{children:t}))}return a.muiName=bT.muiName,z.memo(z.forwardRef(a))}var Rt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c1=Symbol.for("react.element"),d1=Symbol.for("react.portal"),Am=Symbol.for("react.fragment"),_m=Symbol.for("react.strict_mode"),xm=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),Sm=Symbol.for("react.context"),Eq=Symbol.for("react.server_context"),Dm=Symbol.for("react.forward_ref"),Tm=Symbol.for("react.suspense"),Im=Symbol.for("react.suspense_list"),Mm=Symbol.for("react.memo"),Pm=Symbol.for("react.lazy"),Sq=Symbol.for("react.offscreen"),O3;O3=Symbol.for("react.module.reference");function dr(t){if(typeof t=="object"&&t!==null){var o=t.$$typeof;switch(o){case c1:switch(t=t.type,t){case Am:case xm:case _m:case Tm:case Im:return t;default:switch(t=t&&t.$$typeof,t){case Eq:case Sm:case Dm:case Pm:case Mm:case Em:return t;default:return o}}case d1:return o}}}Rt.ContextConsumer=Sm;Rt.ContextProvider=Em;Rt.Element=c1;Rt.ForwardRef=Dm;Rt.Fragment=Am;Rt.Lazy=Pm;Rt.Memo=Mm;Rt.Portal=d1;Rt.Profiler=xm;Rt.StrictMode=_m;Rt.Suspense=Tm;Rt.SuspenseList=Im;Rt.isAsyncMode=function(){return!1};Rt.isConcurrentMode=function(){return!1};Rt.isContextConsumer=function(t){return dr(t)===Sm};Rt.isContextProvider=function(t){return dr(t)===Em};Rt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===c1};Rt.isForwardRef=function(t){return dr(t)===Dm};Rt.isFragment=function(t){return dr(t)===Am};Rt.isLazy=function(t){return dr(t)===Pm};Rt.isMemo=function(t){return dr(t)===Mm};Rt.isPortal=function(t){return dr(t)===d1};Rt.isProfiler=function(t){return dr(t)===xm};Rt.isStrictMode=function(t){return dr(t)===_m};Rt.isSuspense=function(t){return dr(t)===Tm};Rt.isSuspenseList=function(t){return dr(t)===Im};Rt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Am||t===xm||t===_m||t===Tm||t===Im||t===Sq||typeof t=="object"&&t!==null&&(t.$$typeof===Pm||t.$$typeof===Mm||t.$$typeof===Em||t.$$typeof===Sm||t.$$typeof===Dm||t.$$typeof===O3||t.getModuleId!==void 0)};Rt.typeOf=dr;function _v(t,o){return _v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},_v(t,o)}function L3(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,_v(t,o)}const kT={disabled:!1},vg=Pe.createContext(null);var Dq=function(o){return o.scrollTop},cu="unmounted",ka="exited",wa="entering",ec="entered",xv="exiting",Fi=function(t){L3(o,t);function o(c,u){var p;p=t.call(this,c,u)||this;var f=u,b=f&&!f.isMounting?c.enter:c.appear,m;return p.appearStatus=null,c.in?b?(m=ka,p.appearStatus=wa):m=ec:c.unmountOnExit||c.mountOnEnter?m=cu:m=ka,p.state={status:m},p.nextCallback=null,p}o.getDerivedStateFromProps=function(u,p){var f=u.in;return f&&p.status===cu?{status:ka}:null};var a=o.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(u){var p=null;if(u!==this.props){var f=this.state.status;this.props.in?f!==wa&&f!==ec&&(p=wa):(f===wa||f===ec)&&(p=xv)}this.updateStatus(!1,p)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var u=this.props.timeout,p,f,b;return p=f=b=u,u!=null&&typeof u!="number"&&(p=u.exit,f=u.enter,b=u.appear!==void 0?u.appear:f),{exit:p,enter:f,appear:b}},a.updateStatus=function(u,p){if(u===void 0&&(u=!1),p!==null)if(this.cancelNextCallback(),p===wa){if(this.props.unmountOnExit||this.props.mountOnEnter){var f=this.props.nodeRef?this.props.nodeRef.current:cf.findDOMNode(this);f&&Dq(f)}this.performEnter(u)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ka&&this.setState({status:cu})},a.performEnter=function(u){var p=this,f=this.props.enter,b=this.context?this.context.isMounting:u,m=this.props.nodeRef?[b]:[cf.findDOMNode(this),b],v=m[0],A=m[1],_=this.getTimeouts(),y=b?_.appear:_.enter;if(!u&&!f||kT.disabled){this.safeSetState({status:ec},function(){p.props.onEntered(v)});return}this.props.onEnter(v,A),this.safeSetState({status:wa},function(){p.props.onEntering(v,A),p.onTransitionEnd(y,function(){p.safeSetState({status:ec},function(){p.props.onEntered(v,A)})})})},a.performExit=function(){var u=this,p=this.props.exit,f=this.getTimeouts(),b=this.props.nodeRef?void 0:cf.findDOMNode(this);if(!p||kT.disabled){this.safeSetState({status:ka},function(){u.props.onExited(b)});return}this.props.onExit(b),this.safeSetState({status:xv},function(){u.props.onExiting(b),u.onTransitionEnd(f.exit,function(){u.safeSetState({status:ka},function(){u.props.onExited(b)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(u,p){p=this.setNextCallback(p),this.setState(u,p)},a.setNextCallback=function(u){var p=this,f=!0;return this.nextCallback=function(b){f&&(f=!1,p.nextCallback=null,u(b))},this.nextCallback.cancel=function(){f=!1},this.nextCallback},a.onTransitionEnd=function(u,p){this.setNextCallback(p);var f=this.props.nodeRef?this.props.nodeRef.current:cf.findDOMNode(this),b=u==null&&!this.props.addEndListener;if(!f||b){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var m=this.props.nodeRef?[this.nextCallback]:[f,this.nextCallback],v=m[0],A=m[1];this.props.addEndListener(v,A)}u!=null&&setTimeout(this.nextCallback,u)},a.render=function(){var u=this.state.status;if(u===cu)return null;var p=this.props,f=p.children;p.in,p.mountOnEnter,p.unmountOnExit,p.appear,p.enter,p.exit,p.timeout,p.addEndListener,p.onEnter,p.onEntering,p.onEntered,p.onExit,p.onExiting,p.onExited,p.nodeRef;var b=ye(p,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Pe.createElement(vg.Provider,{value:null},typeof f=="function"?f(u,b):Pe.cloneElement(Pe.Children.only(f),b))},o}(Pe.Component);Fi.contextType=vg;Fi.propTypes={};function Ql(){}Fi.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ql,onEntering:Ql,onEntered:Ql,onExit:Ql,onExiting:Ql,onExited:Ql};Fi.UNMOUNTED=cu;Fi.EXITED=ka;Fi.ENTERING=wa;Fi.ENTERED=ec;Fi.EXITING=xv;const Bm=Fi;function Tq(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u1(t,o){var a=function(p){return o&&z.isValidElement(p)?o(p):p},c=Object.create(null);return t&&z.Children.map(t,function(u){return u}).forEach(function(u){c[u.key]=a(u)}),c}function Iq(t,o){t=t||{},o=o||{};function a(A){return A in o?o[A]:t[A]}var c=Object.create(null),u=[];for(var p in t)p in o?u.length&&(c[p]=u,u=[]):u.push(p);var f,b={};for(var m in o){if(c[m])for(f=0;f<c[m].length;f++){var v=c[m][f];b[c[m][f]]=a(v)}b[m]=a(m)}for(f=0;f<u.length;f++)b[u[f]]=a(u[f]);return b}function Da(t,o,a){return a[o]!=null?a[o]:t.props[o]}function Mq(t,o){return u1(t.children,function(a){return z.cloneElement(a,{onExited:o.bind(null,a),in:!0,appear:Da(a,"appear",t),enter:Da(a,"enter",t),exit:Da(a,"exit",t)})})}function Pq(t,o,a){var c=u1(t.children),u=Iq(o,c);return Object.keys(u).forEach(function(p){var f=u[p];if(z.isValidElement(f)){var b=p in o,m=p in c,v=o[p],A=z.isValidElement(v)&&!v.props.in;m&&(!b||A)?u[p]=z.cloneElement(f,{onExited:a.bind(null,f),in:!0,exit:Da(f,"exit",t),enter:Da(f,"enter",t)}):!m&&b&&!A?u[p]=z.cloneElement(f,{in:!1}):m&&b&&z.isValidElement(v)&&(u[p]=z.cloneElement(f,{onExited:a.bind(null,f),in:v.props.in,exit:Da(f,"exit",t),enter:Da(f,"enter",t)}))}}),u}var Bq=Object.values||function(t){return Object.keys(t).map(function(o){return t[o]})},Nq={component:"div",childFactory:function(o){return o}},h1=function(t){L3(o,t);function o(c,u){var p;p=t.call(this,c,u)||this;var f=p.handleExited.bind(Tq(p));return p.state={contextValue:{isMounting:!0},handleExited:f,firstRender:!0},p}var a=o.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(u,p){var f=p.children,b=p.handleExited,m=p.firstRender;return{children:m?Mq(u,b):Pq(u,f,b),firstRender:!1}},a.handleExited=function(u,p){var f=u1(this.props.children);u.key in f||(u.props.onExited&&u.props.onExited(p),this.mounted&&this.setState(function(b){var m=U({},b.children);return delete m[u.key],{children:m}}))},a.render=function(){var u=this.props,p=u.component,f=u.childFactory,b=ye(u,["component","childFactory"]),m=this.state.contextValue,v=Bq(this.state.children).map(f);return delete b.appear,delete b.enter,delete b.exit,p===null?Pe.createElement(vg.Provider,{value:m},v):Pe.createElement(vg.Provider,{value:m},Pe.createElement(p,b,v))},o}(Pe.Component);h1.propTypes={};h1.defaultProps=Nq;const Rq=h1,p1=t=>t.scrollTop;function Is(t,o){var a,c;const{timeout:u,easing:p,style:f={}}=t;return{duration:(a=f.transitionDuration)!=null?a:typeof u=="number"?u:u[o.mode]||0,easing:(c=f.transitionTimingFunction)!=null?c:typeof p=="object"?p[o.mode]:p,delay:f.transitionDelay}}function Oq(t){return je("MuiCollapse",t)}Fe("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Lq=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],zq=t=>{const{orientation:o,classes:a}=t,c={root:["root",`${o}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${o}`],wrapperInner:["wrapperInner",`${o}`]};return Ue(c,Oq,a)},jq=fe("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[a.orientation],a.state==="entered"&&o.entered,a.state==="exited"&&!a.in&&a.collapsedSize==="0px"&&o.hidden]}})(({theme:t,ownerState:o})=>U({height:0,overflow:"hidden",transition:t.transitions.create("height")},o.orientation==="horizontal"&&{height:"auto",width:0,transition:t.transitions.create("width")},o.state==="entered"&&U({height:"auto",overflow:"visible"},o.orientation==="horizontal"&&{width:"auto"}),o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&{visibility:"hidden"})),Fq=fe("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(t,o)=>o.wrapper})(({ownerState:t})=>U({display:"flex",width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),$q=fe("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(t,o)=>o.wrapperInner})(({ownerState:t})=>U({width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),z3=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiCollapse"}),{addEndListener:u,children:p,className:f,collapsedSize:b="0px",component:m,easing:v,in:A,onEnter:_,onEntered:y,onEntering:E,onExit:S,onExited:D,onExiting:R,orientation:I="vertical",style:P,timeout:B=y3.standard,TransitionComponent:F=Bm}=c,M=ye(c,Lq),W=U({},c,{orientation:I,collapsedSize:b}),H=zq(W),K=Qa(),Z=z.useRef(),Y=z.useRef(null),te=z.useRef(),ce=typeof b=="number"?`${b}px`:b,re=I==="horizontal",ae=re?"width":"height";z.useEffect(()=>()=>{clearTimeout(Z.current)},[]);const ie=z.useRef(null),pe=mn(a,ie),oe=be=>Oe=>{if(be){const He=ie.current;Oe===void 0?be(He):be(He,Oe)}},J=()=>Y.current?Y.current[re?"clientWidth":"clientHeight"]:0,le=oe((be,Oe)=>{Y.current&&re&&(Y.current.style.position="absolute"),be.style[ae]=ce,_&&_(be,Oe)}),ge=oe((be,Oe)=>{const He=J();Y.current&&re&&(Y.current.style.position="");const{duration:Ne,easing:bt}=Is({style:P,timeout:B,easing:v},{mode:"enter"});if(B==="auto"){const Re=K.transitions.getAutoHeightDuration(He);be.style.transitionDuration=`${Re}ms`,te.current=Re}else be.style.transitionDuration=typeof Ne=="string"?Ne:`${Ne}ms`;be.style[ae]=`${He}px`,be.style.transitionTimingFunction=bt,E&&E(be,Oe)}),Te=oe((be,Oe)=>{be.style[ae]="auto",y&&y(be,Oe)}),Ie=oe(be=>{be.style[ae]=`${J()}px`,S&&S(be)}),Qe=oe(D),Me=oe(be=>{const Oe=J(),{duration:He,easing:Ne}=Is({style:P,timeout:B,easing:v},{mode:"exit"});if(B==="auto"){const bt=K.transitions.getAutoHeightDuration(Oe);be.style.transitionDuration=`${bt}ms`,te.current=bt}else be.style.transitionDuration=typeof He=="string"?He:`${He}ms`;be.style[ae]=ce,be.style.transitionTimingFunction=Ne,R&&R(be)}),ve=be=>{B==="auto"&&(Z.current=setTimeout(be,te.current||0)),u&&u(ie.current,be)};return L.jsx(F,U({in:A,onEnter:le,onEntered:Te,onEntering:ge,onExit:Ie,onExited:Qe,onExiting:Me,addEndListener:ve,nodeRef:ie,timeout:B==="auto"?null:B},M,{children:(be,Oe)=>L.jsx(jq,U({as:m,className:Ae(H.root,f,{entered:H.entered,exited:!A&&ce==="0px"&&H.hidden}[be]),style:U({[re?"minWidth":"minHeight"]:ce},P),ownerState:U({},W,{state:be}),ref:pe},Oe,{children:L.jsx(Fq,{ownerState:U({},W,{state:be}),className:H.wrapper,ref:Y,children:L.jsx($q,{ownerState:U({},W,{state:be}),className:H.wrapperInner,children:p})})}))}))});z3.muiSupportAuto=!0;const Vq=z3;function Uq(t){return je("MuiPaper",t)}Fe("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Hq=["className","component","elevation","square","variant"],Wq=t=>{const{square:o,elevation:a,variant:c,classes:u}=t,p={root:["root",c,!o&&"rounded",c==="elevation"&&`elevation${a}`]};return Ue(p,Uq,u)},Gq=fe("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[a.variant],!a.square&&o.rounded,a.variant==="elevation"&&o[`elevation${a.elevation}`]]}})(({theme:t,ownerState:o})=>{var a;return U({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!o.square&&{borderRadius:t.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.divider}`},o.variant==="elevation"&&U({boxShadow:(t.vars||t).shadows[o.elevation]},!t.vars&&t.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${cn("#fff",oT(o.elevation))}, ${cn("#fff",oT(o.elevation))})`},t.vars&&{backgroundImage:(a=t.vars.overlays)==null?void 0:a[o.elevation]}))}),qq=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiPaper"}),{className:u,component:p="div",elevation:f=1,square:b=!1,variant:m="elevation"}=c,v=ye(c,Hq),A=U({},c,{component:p,elevation:f,square:b,variant:m}),_=Wq(A);return L.jsx(Gq,U({as:p,ownerState:A,className:Ae(_.root,u),ref:a},v))}),Nm=qq;function Kq(t){const{className:o,classes:a,pulsate:c=!1,rippleX:u,rippleY:p,rippleSize:f,in:b,onExited:m,timeout:v}=t,[A,_]=z.useState(!1),y=Ae(o,a.ripple,a.rippleVisible,c&&a.ripplePulsate),E={width:f,height:f,top:-(f/2)+p,left:-(f/2)+u},S=Ae(a.child,A&&a.childLeaving,c&&a.childPulsate);return!b&&!A&&_(!0),z.useEffect(()=>{if(!b&&m!=null){const D=setTimeout(m,v);return()=>{clearTimeout(D)}}},[m,b,v]),L.jsx("span",{className:y,style:E,children:L.jsx("span",{className:S})})}const Yq=Fe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Qo=Yq,Qq=["center","classes","className"];let Rm=t=>t,wT,vT,CT,yT;const Ev=550,Zq=80,Jq=Ya(wT||(wT=Rm`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Xq=Ya(vT||(vT=Rm`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),eK=Ya(CT||(CT=Rm`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),tK=fe("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),nK=fe(Kq,{name:"MuiTouchRipple",slot:"Ripple"})(yT||(yT=Rm`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),Qo.rippleVisible,Jq,Ev,({theme:t})=>t.transitions.easing.easeInOut,Qo.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,Qo.child,Qo.childLeaving,Xq,Ev,({theme:t})=>t.transitions.easing.easeInOut,Qo.childPulsate,eK,({theme:t})=>t.transitions.easing.easeInOut),oK=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiTouchRipple"}),{center:u=!1,classes:p={},className:f}=c,b=ye(c,Qq),[m,v]=z.useState([]),A=z.useRef(0),_=z.useRef(null);z.useEffect(()=>{_.current&&(_.current(),_.current=null)},[m]);const y=z.useRef(!1),E=z.useRef(null),S=z.useRef(null),D=z.useRef(null);z.useEffect(()=>()=>{clearTimeout(E.current)},[]);const R=z.useCallback(F=>{const{pulsate:M,rippleX:W,rippleY:H,rippleSize:K,cb:Z}=F;v(Y=>[...Y,L.jsx(nK,{classes:{ripple:Ae(p.ripple,Qo.ripple),rippleVisible:Ae(p.rippleVisible,Qo.rippleVisible),ripplePulsate:Ae(p.ripplePulsate,Qo.ripplePulsate),child:Ae(p.child,Qo.child),childLeaving:Ae(p.childLeaving,Qo.childLeaving),childPulsate:Ae(p.childPulsate,Qo.childPulsate)},timeout:Ev,pulsate:M,rippleX:W,rippleY:H,rippleSize:K},A.current)]),A.current+=1,_.current=Z},[p]),I=z.useCallback((F={},M={},W=()=>{})=>{const{pulsate:H=!1,center:K=u||M.pulsate,fakeElement:Z=!1}=M;if((F==null?void 0:F.type)==="mousedown"&&y.current){y.current=!1;return}(F==null?void 0:F.type)==="touchstart"&&(y.current=!0);const Y=Z?null:D.current,te=Y?Y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let ce,re,ae;if(K||F===void 0||F.clientX===0&&F.clientY===0||!F.clientX&&!F.touches)ce=Math.round(te.width/2),re=Math.round(te.height/2);else{const{clientX:ie,clientY:pe}=F.touches&&F.touches.length>0?F.touches[0]:F;ce=Math.round(ie-te.left),re=Math.round(pe-te.top)}if(K)ae=Math.sqrt((2*te.width**2+te.height**2)/3),ae%2===0&&(ae+=1);else{const ie=Math.max(Math.abs((Y?Y.clientWidth:0)-ce),ce)*2+2,pe=Math.max(Math.abs((Y?Y.clientHeight:0)-re),re)*2+2;ae=Math.sqrt(ie**2+pe**2)}F!=null&&F.touches?S.current===null&&(S.current=()=>{R({pulsate:H,rippleX:ce,rippleY:re,rippleSize:ae,cb:W})},E.current=setTimeout(()=>{S.current&&(S.current(),S.current=null)},Zq)):R({pulsate:H,rippleX:ce,rippleY:re,rippleSize:ae,cb:W})},[u,R]),P=z.useCallback(()=>{I({},{pulsate:!0})},[I]),B=z.useCallback((F,M)=>{if(clearTimeout(E.current),(F==null?void 0:F.type)==="touchend"&&S.current){S.current(),S.current=null,E.current=setTimeout(()=>{B(F,M)});return}S.current=null,v(W=>W.length>0?W.slice(1):W),_.current=M},[]);return z.useImperativeHandle(a,()=>({pulsate:P,start:I,stop:B}),[P,I,B]),L.jsx(tK,U({className:Ae(Qo.root,p.root,f),ref:D},b,{children:L.jsx(Rq,{component:null,exit:!0,children:m})}))}),rK=oK;function iK(t){return je("MuiButtonBase",t)}const sK=Fe("MuiButtonBase",["root","disabled","focusVisible"]),aK=sK,lK=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],cK=t=>{const{disabled:o,focusVisible:a,focusVisibleClassName:c,classes:u}=t,f=Ue({root:["root",o&&"disabled",a&&"focusVisible"]},iK,u);return a&&c&&(f.root+=` ${c}`),f},dK=fe("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${aK.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),uK=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiButtonBase"}),{action:u,centerRipple:p=!1,children:f,className:b,component:m="button",disabled:v=!1,disableRipple:A=!1,disableTouchRipple:_=!1,focusRipple:y=!1,LinkComponent:E="a",onBlur:S,onClick:D,onContextMenu:R,onDragLeave:I,onFocus:P,onFocusVisible:B,onKeyDown:F,onKeyUp:M,onMouseDown:W,onMouseLeave:H,onMouseUp:K,onTouchEnd:Z,onTouchMove:Y,onTouchStart:te,tabIndex:ce=0,TouchRippleProps:re,touchRippleRef:ae,type:ie}=c,pe=ye(c,lK),oe=z.useRef(null),J=z.useRef(null),le=mn(J,ae),{isFocusVisibleRef:ge,onFocus:Te,onBlur:Ie,ref:Qe}=LC(),[Me,ve]=z.useState(!1);v&&Me&&ve(!1),z.useImperativeHandle(u,()=>({focusVisible:()=>{ve(!0),oe.current.focus()}}),[]);const[be,Oe]=z.useState(!1);z.useEffect(()=>{Oe(!0)},[]);const He=be&&!A&&!v;z.useEffect(()=>{Me&&y&&!A&&be&&J.current.pulsate()},[A,y,Me,be]);function Ne(xe,Se,tt=_){return Sa(vt=>(Se&&Se(vt),!tt&&J.current&&J.current[xe](vt),!0))}const bt=Ne("start",W),Re=Ne("stop",R),ke=Ne("stop",I),et=Ne("stop",K),dt=Ne("stop",xe=>{Me&&xe.preventDefault(),H&&H(xe)}),zt=Ne("start",te),Wt=Ne("stop",Z),Ze=Ne("stop",Y),Ot=Ne("stop",xe=>{Ie(xe),ge.current===!1&&ve(!1),S&&S(xe)},!1),it=Sa(xe=>{oe.current||(oe.current=xe.currentTarget),Te(xe),ge.current===!0&&(ve(!0),B&&B(xe)),P&&P(xe)}),We=()=>{const xe=oe.current;return m&&m!=="button"&&!(xe.tagName==="A"&&xe.href)},st=z.useRef(!1),tn=Sa(xe=>{y&&!st.current&&Me&&J.current&&xe.key===" "&&(st.current=!0,J.current.stop(xe,()=>{J.current.start(xe)})),xe.target===xe.currentTarget&&We()&&xe.key===" "&&xe.preventDefault(),F&&F(xe),xe.target===xe.currentTarget&&We()&&xe.key==="Enter"&&!v&&(xe.preventDefault(),D&&D(xe))}),Ve=Sa(xe=>{y&&xe.key===" "&&J.current&&Me&&!xe.defaultPrevented&&(st.current=!1,J.current.stop(xe,()=>{J.current.pulsate(xe)})),M&&M(xe),D&&xe.target===xe.currentTarget&&We()&&xe.key===" "&&!xe.defaultPrevented&&D(xe)});let gt=m;gt==="button"&&(pe.href||pe.to)&&(gt=E);const yt={};gt==="button"?(yt.type=ie===void 0?"button":ie,yt.disabled=v):(!pe.href&&!pe.to&&(yt.role="button"),v&&(yt["aria-disabled"]=v));const bn=mn(a,Qe,oe),zn=U({},c,{centerRipple:p,component:m,disabled:v,disableRipple:A,disableTouchRipple:_,focusRipple:y,tabIndex:ce,focusVisible:Me}),qe=cK(zn);return L.jsxs(dK,U({as:gt,className:Ae(qe.root,b),ownerState:zn,onBlur:Ot,onClick:D,onContextMenu:Re,onFocus:it,onKeyDown:tn,onKeyUp:Ve,onMouseDown:bt,onMouseLeave:dt,onMouseUp:et,onDragLeave:ke,onTouchEnd:Wt,onTouchMove:Ze,onTouchStart:zt,ref:bn,tabIndex:v?-1:ce,type:ie},yt,pe,{children:[f,He?L.jsx(rK,U({ref:le,center:p},re)):null]}))}),mh=uK;function hK(t){return je("MuiIconButton",t)}const pK=Fe("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),fK=pK,gK=["edge","children","className","color","disabled","disableFocusRipple","size"],mK=t=>{const{classes:o,disabled:a,color:c,edge:u,size:p}=t,f={root:["root",a&&"disabled",c!=="default"&&`color${Ce(c)}`,u&&`edge${Ce(u)}`,`size${Ce(p)}`]};return Ue(f,hK,o)},bK=fe(mh,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,a.color!=="default"&&o[`color${Ce(a.color)}`],a.edge&&o[`edge${Ce(a.edge)}`],o[`size${Ce(a.size)}`]]}})(({theme:t,ownerState:o})=>U({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:cn(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12}),({theme:t,ownerState:o})=>{var a;const c=(a=(t.vars||t).palette)==null?void 0:a[o.color];return U({},o.color==="inherit"&&{color:"inherit"},o.color!=="inherit"&&o.color!=="default"&&U({color:c==null?void 0:c.main},!o.disableRipple&&{"&:hover":U({},c&&{backgroundColor:t.vars?`rgba(${c.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:cn(c.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),o.size==="small"&&{padding:5,fontSize:t.typography.pxToRem(18)},o.size==="large"&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${fK.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),kK=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiIconButton"}),{edge:u=!1,children:p,className:f,color:b="default",disabled:m=!1,disableFocusRipple:v=!1,size:A="medium"}=c,_=ye(c,gK),y=U({},c,{edge:u,color:b,disabled:m,disableFocusRipple:v,size:A}),E=mK(y);return L.jsx(bK,U({className:Ae(E.root,f),centerRipple:!0,focusRipple:!v,disabled:m,ref:a,ownerState:y},_,{children:p}))}),Om=kK;function wK(t){return je("MuiTypography",t)}Fe("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const vK=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],CK=t=>{const{align:o,gutterBottom:a,noWrap:c,paragraph:u,variant:p,classes:f}=t,b={root:["root",p,t.align!=="inherit"&&`align${Ce(o)}`,a&&"gutterBottom",c&&"noWrap",u&&"paragraph"]};return Ue(b,wK,f)},yK=fe("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,a.variant&&o[a.variant],a.align!=="inherit"&&o[`align${Ce(a.align)}`],a.noWrap&&o.noWrap,a.gutterBottom&&o.gutterBottom,a.paragraph&&o.paragraph]}})(({theme:t,ownerState:o})=>U({margin:0},o.variant&&t.typography[o.variant],o.align!=="inherit"&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})),AT={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},AK={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},_K=t=>AK[t]||t,xK=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiTypography"}),u=_K(c.color),p=ZC(U({},c,{color:u})),{align:f="inherit",className:b,component:m,gutterBottom:v=!1,noWrap:A=!1,paragraph:_=!1,variant:y="body1",variantMapping:E=AT}=p,S=ye(p,vK),D=U({},p,{align:f,color:u,className:b,component:m,gutterBottom:v,noWrap:A,paragraph:_,variant:y,variantMapping:E}),R=m||(_?"p":E[y]||AT[y])||"span",I=CK(D);return L.jsx(yK,U({as:R,ref:a,ownerState:D,className:Ae(I.root,b)},S))}),Jt=xK,EK=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],SK=fe(rq,{name:"MuiPopper",slot:"Root",overridesResolver:(t,o)=>o.root})({}),DK=z.forwardRef(function(o,a){var c;const u=km(),p=$e({props:o,name:"MuiPopper"}),{anchorEl:f,component:b,components:m,componentsProps:v,container:A,disablePortal:_,keepMounted:y,modifiers:E,open:S,placement:D,popperOptions:R,popperRef:I,transition:P,slots:B,slotProps:F}=p,M=ye(p,EK),W=(c=B==null?void 0:B.root)!=null?c:m==null?void 0:m.Root,H=U({anchorEl:f,container:A,disablePortal:_,keepMounted:y,modifiers:E,open:S,placement:D,popperOptions:R,popperRef:I,transition:P},M);return L.jsx(SK,U({as:b,direction:u==null?void 0:u.direction,slots:{root:W},slotProps:F??v},H,{ref:a}))}),j3=DK;function Yc({props:t,states:o,muiFormControl:a}){return o.reduce((c,u)=>(c[u]=t[u],a&&typeof t[u]>"u"&&(c[u]=a[u]),c),{})}const TK=z.createContext(void 0),Lm=TK;function Za(){return z.useContext(Lm)}function F3(t){return L.jsx(dH,U({},t,{defaultTheme:Cm,themeId:Fa}))}function _T(t){return t!=null&&!(Array.isArray(t)&&t.length===0)}function Cg(t,o=!1){return t&&(_T(t.value)&&t.value!==""||o&&_T(t.defaultValue)&&t.defaultValue!=="")}function IK(t){return t.startAdornment}function MK(t){return je("MuiInputBase",t)}const PK=Fe("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),zc=PK,BK=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],zm=(t,o)=>{const{ownerState:a}=t;return[o.root,a.formControl&&o.formControl,a.startAdornment&&o.adornedStart,a.endAdornment&&o.adornedEnd,a.error&&o.error,a.size==="small"&&o.sizeSmall,a.multiline&&o.multiline,a.color&&o[`color${Ce(a.color)}`],a.fullWidth&&o.fullWidth,a.hiddenLabel&&o.hiddenLabel]},jm=(t,o)=>{const{ownerState:a}=t;return[o.input,a.size==="small"&&o.inputSizeSmall,a.multiline&&o.inputMultiline,a.type==="search"&&o.inputTypeSearch,a.startAdornment&&o.inputAdornedStart,a.endAdornment&&o.inputAdornedEnd,a.hiddenLabel&&o.inputHiddenLabel]},NK=t=>{const{classes:o,color:a,disabled:c,error:u,endAdornment:p,focused:f,formControl:b,fullWidth:m,hiddenLabel:v,multiline:A,readOnly:_,size:y,startAdornment:E,type:S}=t,D={root:["root",`color${Ce(a)}`,c&&"disabled",u&&"error",m&&"fullWidth",f&&"focused",b&&"formControl",y==="small"&&"sizeSmall",A&&"multiline",E&&"adornedStart",p&&"adornedEnd",v&&"hiddenLabel",_&&"readOnly"],input:["input",c&&"disabled",S==="search"&&"inputTypeSearch",A&&"inputMultiline",y==="small"&&"inputSizeSmall",v&&"inputHiddenLabel",E&&"inputAdornedStart",p&&"inputAdornedEnd",_&&"readOnly"]};return Ue(D,MK,o)},Fm=fe("div",{name:"MuiInputBase",slot:"Root",overridesResolver:zm})(({theme:t,ownerState:o})=>U({},t.typography.body1,{color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${zc.disabled}`]:{color:(t.vars||t).palette.text.disabled,cursor:"default"}},o.multiline&&U({padding:"4px 0 5px"},o.size==="small"&&{paddingTop:1}),o.fullWidth&&{width:"100%"})),$m=fe("input",{name:"MuiInputBase",slot:"Input",overridesResolver:jm})(({theme:t,ownerState:o})=>{const a=t.palette.mode==="light",c=U({color:"currentColor"},t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:a?.42:.5},{transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})}),u={opacity:"0 !important"},p=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:a?.42:.5};return U({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":c,"&::-moz-placeholder":c,"&:-ms-input-placeholder":c,"&::-ms-input-placeholder":c,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${zc.formControl} &`]:{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":p,"&:focus::-moz-placeholder":p,"&:focus:-ms-input-placeholder":p,"&:focus::-ms-input-placeholder":p},[`&.${zc.disabled}`]:{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},o.size==="small"&&{paddingTop:1},o.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},o.type==="search"&&{MozAppearance:"textfield"})}),RK=L.jsx(F3,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),OK=z.forwardRef(function(o,a){var c;const u=$e({props:o,name:"MuiInputBase"}),{"aria-describedby":p,autoComplete:f,autoFocus:b,className:m,components:v={},componentsProps:A={},defaultValue:_,disabled:y,disableInjectingGlobalStyles:E,endAdornment:S,fullWidth:D=!1,id:R,inputComponent:I="input",inputProps:P={},inputRef:B,maxRows:F,minRows:M,multiline:W=!1,name:H,onBlur:K,onChange:Z,onClick:Y,onFocus:te,onKeyDown:ce,onKeyUp:re,placeholder:ae,readOnly:ie,renderSuffix:pe,rows:oe,slotProps:J={},slots:le={},startAdornment:ge,type:Te="text",value:Ie}=u,Qe=ye(u,BK),Me=P.value!=null?P.value:Ie,{current:ve}=z.useRef(Me!=null),be=z.useRef(),Oe=z.useCallback(qe=>{},[]),He=mn(be,B,P.ref,Oe),[Ne,bt]=z.useState(!1),Re=Za(),ke=Yc({props:u,muiFormControl:Re,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ke.focused=Re?Re.focused:Ne,z.useEffect(()=>{!Re&&y&&Ne&&(bt(!1),K&&K())},[Re,y,Ne,K]);const et=Re&&Re.onFilled,dt=Re&&Re.onEmpty,zt=z.useCallback(qe=>{Cg(qe)?et&&et():dt&&dt()},[et,dt]);ii(()=>{ve&&zt({value:Me})},[Me,zt,ve]);const Wt=qe=>{if(ke.disabled){qe.stopPropagation();return}te&&te(qe),P.onFocus&&P.onFocus(qe),Re&&Re.onFocus?Re.onFocus(qe):bt(!0)},Ze=qe=>{K&&K(qe),P.onBlur&&P.onBlur(qe),Re&&Re.onBlur?Re.onBlur(qe):bt(!1)},Ot=(qe,...xe)=>{if(!ve){const Se=qe.target||be.current;if(Se==null)throw new Error(Ts(1));zt({value:Se.value})}P.onChange&&P.onChange(qe,...xe),Z&&Z(qe,...xe)};z.useEffect(()=>{zt(be.current)},[]);const it=qe=>{be.current&&qe.currentTarget===qe.target&&be.current.focus(),Y&&!ke.disabled&&Y(qe)};let We=I,st=P;W&&We==="input"&&(oe?st=U({type:void 0,minRows:oe,maxRows:oe},st):st=U({type:void 0,maxRows:F,minRows:M},st),We=Cq);const tn=qe=>{zt(qe.animationName==="mui-auto-fill-cancel"?be.current:{value:"x"})};z.useEffect(()=>{Re&&Re.setAdornedStart(!!ge)},[Re,ge]);const Ve=U({},u,{color:ke.color||"primary",disabled:ke.disabled,endAdornment:S,error:ke.error,focused:ke.focused,formControl:Re,fullWidth:D,hiddenLabel:ke.hiddenLabel,multiline:W,size:ke.size,startAdornment:ge,type:Te}),gt=NK(Ve),yt=le.root||v.Root||Fm,bn=J.root||A.root||{},zn=le.input||v.Input||$m;return st=U({},st,(c=J.input)!=null?c:A.input),L.jsxs(z.Fragment,{children:[!E&&RK,L.jsxs(yt,U({},bn,!Xu(yt)&&{ownerState:U({},Ve,bn.ownerState)},{ref:a,onClick:it},Qe,{className:Ae(gt.root,bn.className,m,ie&&"MuiInputBase-readOnly"),children:[ge,L.jsx(Lm.Provider,{value:null,children:L.jsx(zn,U({ownerState:Ve,"aria-invalid":ke.error,"aria-describedby":p,autoComplete:f,autoFocus:b,defaultValue:_,disabled:ke.disabled,id:R,onAnimationStart:tn,name:H,placeholder:ae,readOnly:ie,required:ke.required,rows:oe,value:Me,onKeyDown:ce,onKeyUp:re,type:Te},st,!Xu(zn)&&{as:We,ownerState:U({},Ve,st.ownerState)},{ref:He,className:Ae(gt.input,st.className,ie&&"MuiInputBase-readOnly"),onBlur:Ze,onChange:Ot,onFocus:Wt}))}),S,pe?pe(U({},ke,{startAdornment:ge})):null]}))]})}),f1=OK;function LK(t){return je("MuiInput",t)}const zK=U({},zc,Fe("MuiInput",["root","underline","input"])),Yd=zK;function jK(t){return je("MuiOutlinedInput",t)}const FK=U({},zc,Fe("MuiOutlinedInput",["root","notchedOutline","input"])),ss=FK;function $K(t){return je("MuiFilledInput",t)}const VK=U({},zc,Fe("MuiFilledInput",["root","underline","input"])),fa=VK,UK=ct(L.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),HK=ct(L.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function WK(t){return je("MuiAvatar",t)}Fe("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const GK=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],qK=t=>{const{classes:o,variant:a,colorDefault:c}=t;return Ue({root:["root",a,c&&"colorDefault"],img:["img"],fallback:["fallback"]},WK,o)},KK=fe("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[a.variant],a.colorDefault&&o.colorDefault]}})(({theme:t,ownerState:o})=>U({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},o.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},o.variant==="square"&&{borderRadius:0},o.colorDefault&&U({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}))),YK=fe("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),QK=fe(HK,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,o)=>o.fallback})({width:"75%",height:"75%"});function ZK({crossOrigin:t,referrerPolicy:o,src:a,srcSet:c}){const[u,p]=z.useState(!1);return z.useEffect(()=>{if(!a&&!c)return;p(!1);let f=!0;const b=new Image;return b.onload=()=>{f&&p("loaded")},b.onerror=()=>{f&&p("error")},b.crossOrigin=t,b.referrerPolicy=o,b.src=a,c&&(b.srcset=c),()=>{f=!1}},[t,o,a,c]),u}const JK=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiAvatar"}),{alt:u,children:p,className:f,component:b="div",imgProps:m,sizes:v,src:A,srcSet:_,variant:y="circular"}=c,E=ye(c,GK);let S=null;const D=ZK(U({},m,{src:A,srcSet:_})),R=A||_,I=R&&D!=="error",P=U({},c,{colorDefault:!I,component:b,variant:y}),B=qK(P);return I?S=L.jsx(YK,U({alt:u,src:A,srcSet:_,sizes:v,ownerState:P,className:B.img},m)):p!=null?S=p:R&&u?S=u[0]:S=L.jsx(QK,{ownerState:P,className:B.fallback}),L.jsx(KK,U({as:b,ownerState:P,className:Ae(B.root,f),ref:a},E,{children:S}))}),Ha=JK,XK=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],eY={entering:{opacity:1},entered:{opacity:1}},tY=z.forwardRef(function(o,a){const c=Qa(),u={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{addEndListener:p,appear:f=!0,children:b,easing:m,in:v,onEnter:A,onEntered:_,onEntering:y,onExit:E,onExited:S,onExiting:D,style:R,timeout:I=u,TransitionComponent:P=Bm}=o,B=ye(o,XK),F=z.useRef(null),M=mn(F,b.ref,a),W=ae=>ie=>{if(ae){const pe=F.current;ie===void 0?ae(pe):ae(pe,ie)}},H=W(y),K=W((ae,ie)=>{p1(ae);const pe=Is({style:R,timeout:I,easing:m},{mode:"enter"});ae.style.webkitTransition=c.transitions.create("opacity",pe),ae.style.transition=c.transitions.create("opacity",pe),A&&A(ae,ie)}),Z=W(_),Y=W(D),te=W(ae=>{const ie=Is({style:R,timeout:I,easing:m},{mode:"exit"});ae.style.webkitTransition=c.transitions.create("opacity",ie),ae.style.transition=c.transitions.create("opacity",ie),E&&E(ae)}),ce=W(S),re=ae=>{p&&p(F.current,ae)};return L.jsx(P,U({appear:f,in:v,nodeRef:F,onEnter:K,onEntered:Z,onEntering:H,onExit:te,onExited:ce,onExiting:Y,addEndListener:re,timeout:I},B,{children:(ae,ie)=>z.cloneElement(b,U({style:U({opacity:0,visibility:ae==="exited"&&!v?"hidden":void 0},eY[ae],R,b.props.style),ref:M},ie))}))}),yg=tY;function nY(t){return je("MuiBackdrop",t)}Fe("MuiBackdrop",["root","invisible"]);const oY=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],rY=t=>{const{classes:o,invisible:a}=t;return Ue({root:["root",a&&"invisible"]},nY,o)},iY=fe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,a.invisible&&o.invisible]}})(({ownerState:t})=>U({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},t.invisible&&{backgroundColor:"transparent"})),sY=z.forwardRef(function(o,a){var c,u,p;const f=$e({props:o,name:"MuiBackdrop"}),{children:b,className:m,component:v="div",components:A={},componentsProps:_={},invisible:y=!1,open:E,slotProps:S={},slots:D={},TransitionComponent:R=yg,transitionDuration:I}=f,P=ye(f,oY),B=U({},f,{component:v,invisible:y}),F=rY(B),M=(c=S.root)!=null?c:_.root;return L.jsx(R,U({in:E,timeout:I},P,{children:L.jsx(iY,U({"aria-hidden":!0},M,{as:(u=(p=D.root)!=null?p:A.Root)!=null?u:v,className:Ae(F.root,m,M==null?void 0:M.className),ownerState:U({},B,M==null?void 0:M.ownerState),classes:F,ref:a,children:b}))}))}),g1=sY,aY=t1(),lY=fH({themeId:Fa,defaultTheme:aY,defaultClassName:"MuiBox-root",generateClassName:W4.generate}),jc=lY;function cY(t){return je("MuiButton",t)}const dY=Fe("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),pf=dY,uY=z.createContext({}),$3=uY,hY=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],pY=t=>{const{color:o,disableElevation:a,fullWidth:c,size:u,variant:p,classes:f}=t,b={root:["root",p,`${p}${Ce(o)}`,`size${Ce(u)}`,`${p}Size${Ce(u)}`,o==="inherit"&&"colorInherit",a&&"disableElevation",c&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${Ce(u)}`],endIcon:["endIcon",`iconSize${Ce(u)}`]},m=Ue(b,cY,f);return U({},f,m)},V3=t=>U({},t.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},t.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},t.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),fY=fe(mh,{shouldForwardProp:t=>cr(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[a.variant],o[`${a.variant}${Ce(a.color)}`],o[`size${Ce(a.size)}`],o[`${a.variant}Size${Ce(a.size)}`],a.color==="inherit"&&o.colorInherit,a.disableElevation&&o.disableElevation,a.fullWidth&&o.fullWidth]}})(({theme:t,ownerState:o})=>{var a,c;const u=t.palette.mode==="light"?t.palette.grey[300]:t.palette.grey[800],p=t.palette.mode==="light"?t.palette.grey.A100:t.palette.grey[700];return U({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":U({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:cn(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="text"&&o.color!=="inherit"&&{backgroundColor:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:cn(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="outlined"&&o.color!=="inherit"&&{border:`1px solid ${(t.vars||t).palette[o.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:cn(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="contained"&&{backgroundColor:t.vars?t.vars.palette.Button.inheritContainedHoverBg:p,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},o.variant==="contained"&&o.color!=="inherit"&&{backgroundColor:(t.vars||t).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o.color].main}}),"&:active":U({},o.variant==="contained"&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${pf.focusVisible}`]:U({},o.variant==="contained"&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${pf.disabled}`]:U({color:(t.vars||t).palette.action.disabled},o.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},o.variant==="contained"&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},o.variant==="text"&&{padding:"6px 8px"},o.variant==="text"&&o.color!=="inherit"&&{color:(t.vars||t).palette[o.color].main},o.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},o.variant==="outlined"&&o.color!=="inherit"&&{color:(t.vars||t).palette[o.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[o.color].mainChannel} / 0.5)`:`1px solid ${cn(t.palette[o.color].main,.5)}`},o.variant==="contained"&&{color:t.vars?t.vars.palette.text.primary:(a=(c=t.palette).getContrastText)==null?void 0:a.call(c,t.palette.grey[300]),backgroundColor:t.vars?t.vars.palette.Button.inheritContainedBg:u,boxShadow:(t.vars||t).shadows[2]},o.variant==="contained"&&o.color!=="inherit"&&{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main},o.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},o.size==="small"&&o.variant==="text"&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},o.size==="large"&&o.variant==="text"&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},o.size==="small"&&o.variant==="outlined"&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},o.size==="large"&&o.variant==="outlined"&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},o.size==="small"&&o.variant==="contained"&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},o.size==="large"&&o.variant==="contained"&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})},({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${pf.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${pf.disabled}`]:{boxShadow:"none"}}),gY=fe("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.startIcon,o[`iconSize${Ce(a.size)}`]]}})(({ownerState:t})=>U({display:"inherit",marginRight:8,marginLeft:-4},t.size==="small"&&{marginLeft:-2},V3(t))),mY=fe("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.endIcon,o[`iconSize${Ce(a.size)}`]]}})(({ownerState:t})=>U({display:"inherit",marginRight:-4,marginLeft:8},t.size==="small"&&{marginRight:-2},V3(t))),bY=z.forwardRef(function(o,a){const c=z.useContext($3),u=zC(c,o),p=$e({props:u,name:"MuiButton"}),{children:f,color:b="primary",component:m="button",className:v,disabled:A=!1,disableElevation:_=!1,disableFocusRipple:y=!1,endIcon:E,focusVisibleClassName:S,fullWidth:D=!1,size:R="medium",startIcon:I,type:P,variant:B="text"}=p,F=ye(p,hY),M=U({},p,{color:b,component:m,disabled:A,disableElevation:_,disableFocusRipple:y,fullWidth:D,size:R,type:P,variant:B}),W=pY(M),H=I&&L.jsx(gY,{className:W.startIcon,ownerState:M,children:I}),K=E&&L.jsx(mY,{className:W.endIcon,ownerState:M,children:E});return L.jsxs(fY,U({ownerState:M,className:Ae(c.className,W.root,v),component:m,disabled:A,focusRipple:!y,focusVisibleClassName:Ae(W.focusVisible,S),ref:a,type:P},F,{classes:W,children:[H,f,K]}))}),fc=bY;function kY(t){return je("MuiButtonGroup",t)}const wY=Fe("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),Jr=wY,vY=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],CY=(t,o)=>{const{ownerState:a}=t;return[{[`& .${Jr.grouped}`]:o.grouped},{[`& .${Jr.grouped}`]:o[`grouped${Ce(a.orientation)}`]},{[`& .${Jr.grouped}`]:o[`grouped${Ce(a.variant)}`]},{[`& .${Jr.grouped}`]:o[`grouped${Ce(a.variant)}${Ce(a.orientation)}`]},{[`& .${Jr.grouped}`]:o[`grouped${Ce(a.variant)}${Ce(a.color)}`]},o.root,o[a.variant],a.disableElevation===!0&&o.disableElevation,a.fullWidth&&o.fullWidth,a.orientation==="vertical"&&o.vertical]},yY=t=>{const{classes:o,color:a,disabled:c,disableElevation:u,fullWidth:p,orientation:f,variant:b}=t,m={root:["root",b,f==="vertical"&&"vertical",p&&"fullWidth",u&&"disableElevation"],grouped:["grouped",`grouped${Ce(f)}`,`grouped${Ce(b)}`,`grouped${Ce(b)}${Ce(f)}`,`grouped${Ce(b)}${Ce(a)}`,c&&"disabled"]};return Ue(m,kY,o)},AY=fe("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:CY})(({theme:t,ownerState:o})=>U({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},o.variant==="contained"&&{boxShadow:(t.vars||t).shadows[2]},o.disableElevation&&{boxShadow:"none"},o.fullWidth&&{width:"100%"},o.orientation==="vertical"&&{flexDirection:"column"},{[`& .${Jr.grouped}`]:U({minWidth:40,"&:not(:first-of-type)":U({},o.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},o.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},o.variant==="outlined"&&o.orientation==="horizontal"&&{marginLeft:-1},o.variant==="outlined"&&o.orientation==="vertical"&&{marginTop:-1}),"&:not(:last-of-type)":U({},o.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},o.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},o.variant==="text"&&o.orientation==="horizontal"&&{borderRight:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${Jr.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},o.variant==="text"&&o.orientation==="vertical"&&{borderBottom:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${Jr.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},o.variant==="text"&&o.color!=="inherit"&&{borderColor:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / 0.5)`:cn(t.palette[o.color].main,.5)},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"transparent"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"transparent"},o.variant==="contained"&&o.orientation==="horizontal"&&{borderRight:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${Jr.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},o.variant==="contained"&&o.orientation==="vertical"&&{borderBottom:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${Jr.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},o.variant==="contained"&&o.color!=="inherit"&&{borderColor:(t.vars||t).palette[o.color].dark},{"&:hover":U({},o.variant==="outlined"&&o.orientation==="horizontal"&&{borderRightColor:"currentColor"},o.variant==="outlined"&&o.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),"&:hover":U({},o.variant==="contained"&&{boxShadow:"none"})},o.variant==="contained"&&{boxShadow:"none"})})),_Y=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiButtonGroup"}),{children:u,className:p,color:f="primary",component:b="div",disabled:m=!1,disableElevation:v=!1,disableFocusRipple:A=!1,disableRipple:_=!1,fullWidth:y=!1,orientation:E="horizontal",size:S="medium",variant:D="outlined"}=c,R=ye(c,vY),I=U({},c,{color:f,component:b,disabled:m,disableElevation:v,disableFocusRipple:A,disableRipple:_,fullWidth:y,orientation:E,size:S,variant:D}),P=yY(I),B=z.useMemo(()=>({className:P.grouped,color:f,disabled:m,disableElevation:v,disableFocusRipple:A,disableRipple:_,fullWidth:y,size:S,variant:D}),[f,m,v,A,_,y,S,D,P.grouped]);return L.jsx(AY,U({as:b,role:"group",className:Ae(P.root,p),ref:a,ownerState:I},R,{children:L.jsx($3.Provider,{value:B,children:u})}))}),U3=_Y;function xY(t){return je("MuiCard",t)}Fe("MuiCard",["root"]);const EY=["className","raised"],SY=t=>{const{classes:o}=t;return Ue({root:["root"]},xY,o)},DY=fe(Nm,{name:"MuiCard",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({overflow:"hidden"})),TY=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiCard"}),{className:u,raised:p=!1}=c,f=ye(c,EY),b=U({},c,{raised:p}),m=SY(b);return L.jsx(DY,U({className:Ae(m.root,u),elevation:p?8:void 0,ref:a,ownerState:b},f))}),IY=TY;function MY(t){return je("MuiCardContent",t)}Fe("MuiCardContent",["root"]);const PY=["className","component"],BY=t=>{const{classes:o}=t;return Ue({root:["root"]},MY,o)},NY=fe("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),RY=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiCardContent"}),{className:u,component:p="div"}=c,f=ye(c,PY),b=U({},c,{component:p}),m=BY(b);return L.jsx(NY,U({as:p,className:Ae(m.root,u),ownerState:b,ref:a},f))}),OY=RY;function LY(t){return je("MuiCircularProgress",t)}Fe("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const zY=["className","color","disableShrink","size","style","thickness","value","variant"];let Vm=t=>t,xT,ET,ST,DT;const as=44,jY=Ya(xT||(xT=Vm`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),FY=Ya(ET||(ET=Vm`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),$Y=t=>{const{classes:o,variant:a,color:c,disableShrink:u}=t,p={root:["root",a,`color${Ce(c)}`],svg:["svg"],circle:["circle",`circle${Ce(a)}`,u&&"circleDisableShrink"]};return Ue(p,LY,o)},VY=fe("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[a.variant],o[`color${Ce(a.color)}`]]}})(({ownerState:t,theme:o})=>U({display:"inline-block"},t.variant==="determinate"&&{transition:o.transitions.create("transform")},t.color!=="inherit"&&{color:(o.vars||o).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&Ju(ST||(ST=Vm`
      animation: ${0} 1.4s linear infinite;
    `),jY)),UY=fe("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,o)=>o.svg})({display:"block"}),HY=fe("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.circle,o[`circle${Ce(a.variant)}`],a.disableShrink&&o.circleDisableShrink]}})(({ownerState:t,theme:o})=>U({stroke:"currentColor"},t.variant==="determinate"&&{transition:o.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&Ju(DT||(DT=Vm`
      animation: ${0} 1.4s ease-in-out infinite;
    `),FY)),WY=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiCircularProgress"}),{className:u,color:p="primary",disableShrink:f=!1,size:b=40,style:m,thickness:v=3.6,value:A=0,variant:_="indeterminate"}=c,y=ye(c,zY),E=U({},c,{color:p,disableShrink:f,size:b,thickness:v,value:A,variant:_}),S=$Y(E),D={},R={},I={};if(_==="determinate"){const P=2*Math.PI*((as-v)/2);D.strokeDasharray=P.toFixed(3),I["aria-valuenow"]=Math.round(A),D.strokeDashoffset=`${((100-A)/100*P).toFixed(3)}px`,R.transform="rotate(-90deg)"}return L.jsx(VY,U({className:Ae(S.root,u),style:U({width:b,height:b},R,m),ownerState:E,ref:a,role:"progressbar"},I,y,{children:L.jsx(UY,{className:S.svg,ownerState:E,viewBox:`${as/2} ${as/2} ${as} ${as}`,children:L.jsx(HY,{className:S.circle,style:D,ownerState:E,cx:as,cy:as,r:(as-v)/2,fill:"none",strokeWidth:v})})}))}),oh=WY,GY=VH({createStyledComponent:fe("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[`maxWidth${Ce(String(a.maxWidth))}`],a.fixed&&o.fixed,a.disableGutters&&o.disableGutters]}}),useThemeProps:t=>$e({props:t,name:"MuiContainer"})}),ri=GY,qY=(t,o)=>U({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},o&&!t.vars&&{colorScheme:t.palette.mode}),KY=t=>U({color:(t.vars||t).palette.text.primary},t.typography.body1,{backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}}),YY=(t,o=!1)=>{var a,c;const u={};o&&t.colorSchemes&&Object.entries(t.colorSchemes).forEach(([b,m])=>{var v;u[t.getColorSchemeSelector(b).replace(/\s*&/,"")]={colorScheme:(v=m.palette)==null?void 0:v.mode}});let p=U({html:qY(t,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:U({margin:0},KY(t),{"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}})},u);const f=(a=t.components)==null||(c=a.MuiCssBaseline)==null?void 0:c.styleOverrides;return f&&(p=[p,f]),p};function QY(t){const o=$e({props:t,name:"MuiCssBaseline"}),{children:a,enableColorScheme:c=!1}=o;return L.jsxs(z.Fragment,{children:[L.jsx(F3,{styles:u=>YY(u,c)}),a]})}const ZY=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","open","slotProps","slots","theme"],JY=fe("div",{name:"MuiModal",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,!a.open&&a.exited&&o.hidden]}})(({theme:t,ownerState:o})=>U({position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0},!o.open&&o.exited&&{visibility:"hidden"})),XY=fe(g1,{name:"MuiModal",slot:"Backdrop",overridesResolver:(t,o)=>o.backdrop})({zIndex:-1}),eQ=z.forwardRef(function(o,a){var c,u,p,f,b,m;const v=$e({name:"MuiModal",props:o}),{BackdropComponent:A=XY,BackdropProps:_,classes:y,className:E,closeAfterTransition:S=!1,children:D,container:R,component:I,components:P={},componentsProps:B={},disableAutoFocus:F=!1,disableEnforceFocus:M=!1,disableEscapeKeyDown:W=!1,disablePortal:H=!1,disableRestoreFocus:K=!1,disableScrollLock:Z=!1,hideBackdrop:Y=!1,keepMounted:te=!1,onBackdropClick:ce,onClose:re,open:ae,slotProps:ie,slots:pe,theme:oe}=v,J=ye(v,ZY),[le,ge]=z.useState(!0),Te={container:R,closeAfterTransition:S,disableAutoFocus:F,disableEnforceFocus:M,disableEscapeKeyDown:W,disablePortal:H,disableRestoreFocus:K,disableScrollLock:Z,hideBackdrop:Y,keepMounted:te,onBackdropClick:ce,onClose:re,open:ae},Ie=U({},v,Te,{exited:le}),Qe=(c=(u=pe==null?void 0:pe.root)!=null?u:P.Root)!=null?c:JY,Me=(p=(f=pe==null?void 0:pe.backdrop)!=null?f:P.Backdrop)!=null?p:A,ve=(b=ie==null?void 0:ie.root)!=null?b:B.root,be=(m=ie==null?void 0:ie.backdrop)!=null?m:B.backdrop;return L.jsx(bq,U({slots:{root:Qe,backdrop:Me},slotProps:{root:()=>U({},vv(ve,Ie),!Xu(Qe)&&{as:I,theme:oe},{className:Ae(E,ve==null?void 0:ve.className,y==null?void 0:y.root,!Ie.open&&Ie.exited&&(y==null?void 0:y.hidden))}),backdrop:()=>U({},_,vv(be,Ie),{className:Ae(be==null?void 0:be.className,_==null?void 0:_.className,y==null?void 0:y.backdrop)})},onTransitionEnter:()=>ge(!1),onTransitionExited:()=>ge(!0),ref:a},J,Te,{children:D}))}),H3=eQ;function tQ(t){return je("MuiDialog",t)}const nQ=Fe("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),X0=nQ,oQ=z.createContext({}),W3=oQ,rQ=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],iQ=fe(g1,{name:"MuiDialog",slot:"Backdrop",overrides:(t,o)=>o.backdrop})({zIndex:-1}),sQ=t=>{const{classes:o,scroll:a,maxWidth:c,fullWidth:u,fullScreen:p}=t,f={root:["root"],container:["container",`scroll${Ce(a)}`],paper:["paper",`paperScroll${Ce(a)}`,`paperWidth${Ce(String(c))}`,u&&"paperFullWidth",p&&"paperFullScreen"]};return Ue(f,tQ,o)},aQ=fe(H3,{name:"MuiDialog",slot:"Root",overridesResolver:(t,o)=>o.root})({"@media print":{position:"absolute !important"}}),lQ=fe("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.container,o[`scroll${Ce(a.scroll)}`]]}})(({ownerState:t})=>U({height:"100%","@media print":{height:"auto"},outline:0},t.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},t.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),cQ=fe(Nm,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.paper,o[`scrollPaper${Ce(a.scroll)}`],o[`paperWidth${Ce(String(a.maxWidth))}`],a.fullWidth&&o.paperFullWidth,a.fullScreen&&o.paperFullScreen]}})(({theme:t,ownerState:o})=>U({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},o.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},o.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},o.maxWidth==="xs"&&{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${X0.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.maxWidth&&o.maxWidth!=="xs"&&{maxWidth:`${t.breakpoints.values[o.maxWidth]}${t.breakpoints.unit}`,[`&.${X0.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[o.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${X0.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),dQ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiDialog"}),u=Qa(),p={enter:u.transitions.duration.enteringScreen,exit:u.transitions.duration.leavingScreen},{"aria-describedby":f,"aria-labelledby":b,BackdropComponent:m,BackdropProps:v,children:A,className:_,disableEscapeKeyDown:y=!1,fullScreen:E=!1,fullWidth:S=!1,maxWidth:D="sm",onBackdropClick:R,onClose:I,open:P,PaperComponent:B=Nm,PaperProps:F={},scroll:M="paper",TransitionComponent:W=yg,transitionDuration:H=p,TransitionProps:K}=c,Z=ye(c,rQ),Y=U({},c,{disableEscapeKeyDown:y,fullScreen:E,fullWidth:S,maxWidth:D,scroll:M}),te=sQ(Y),ce=z.useRef(),re=oe=>{ce.current=oe.target===oe.currentTarget},ae=oe=>{ce.current&&(ce.current=null,R&&R(oe),I&&I(oe,"backdropClick"))},ie=OC(b),pe=z.useMemo(()=>({titleId:ie}),[ie]);return L.jsx(aQ,U({className:Ae(te.root,_),closeAfterTransition:!0,components:{Backdrop:iQ},componentsProps:{backdrop:U({transitionDuration:H,as:m},v)},disableEscapeKeyDown:y,onClose:I,open:P,ref:a,onClick:ae,ownerState:Y},Z,{children:L.jsx(W,U({appear:!0,in:P,timeout:H,role:"presentation"},K,{children:L.jsx(lQ,{className:Ae(te.container),onMouseDown:re,ownerState:Y,children:L.jsx(cQ,U({as:B,elevation:24,role:"dialog","aria-describedby":f,"aria-labelledby":ie},F,{className:Ae(te.paper,F.className),ownerState:Y,children:L.jsx(W3.Provider,{value:pe,children:A})}))})}))}))}),uQ=dQ;function hQ(t){return je("MuiDialogActions",t)}Fe("MuiDialogActions",["root","spacing"]);const pQ=["className","disableSpacing"],fQ=t=>{const{classes:o,disableSpacing:a}=t;return Ue({root:["root",!a&&"spacing"]},hQ,o)},gQ=fe("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,!a.disableSpacing&&o.spacing]}})(({ownerState:t})=>U({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),mQ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiDialogActions"}),{className:u,disableSpacing:p=!1}=c,f=ye(c,pQ),b=U({},c,{disableSpacing:p}),m=fQ(b);return L.jsx(gQ,U({className:Ae(m.root,u),ownerState:b,ref:a},f))}),bQ=mQ;function kQ(t){return je("MuiDialogContent",t)}Fe("MuiDialogContent",["root","dividers"]);function wQ(t){return je("MuiDialogTitle",t)}const vQ=Fe("MuiDialogTitle",["root"]),CQ=vQ,yQ=["className","dividers"],AQ=t=>{const{classes:o,dividers:a}=t;return Ue({root:["root",a&&"dividers"]},kQ,o)},_Q=fe("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,a.dividers&&o.dividers]}})(({theme:t,ownerState:o})=>U({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}:{[`.${CQ.root} + &`]:{paddingTop:0}})),xQ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiDialogContent"}),{className:u,dividers:p=!1}=c,f=ye(c,yQ),b=U({},c,{dividers:p}),m=AQ(b);return L.jsx(_Q,U({className:Ae(m.root,u),ownerState:b,ref:a},f))}),ew=xQ;function EQ(t){return je("MuiDialogContentText",t)}Fe("MuiDialogContentText",["root"]);const SQ=["children","className"],DQ=t=>{const{classes:o}=t,c=Ue({root:["root"]},EQ,o);return U({},o,c)},TQ=fe(Jt,{shouldForwardProp:t=>cr(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,o)=>o.root})({}),IQ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiDialogContentText"}),{className:u}=c,p=ye(c,SQ),f=DQ(p);return L.jsx(TQ,U({component:"p",variant:"body1",color:"text.secondary",ref:a,ownerState:p,className:Ae(f.root,u)},c,{classes:f}))}),MQ=IQ,PQ=["className","id"],BQ=t=>{const{classes:o}=t;return Ue({root:["root"]},wQ,o)},NQ=fe(Jt,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),RQ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiDialogTitle"}),{className:u,id:p}=c,f=ye(c,PQ),b=c,m=BQ(b),{titleId:v=p}=z.useContext(W3);return L.jsx(NQ,U({component:"h2",className:Ae(m.root,u),ownerState:b,ref:a,variant:"h6",id:p??v},f))}),OQ=RQ;function LQ(t){return je("MuiDivider",t)}const zQ=Fe("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),TT=zQ,jQ=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],FQ=t=>{const{absolute:o,children:a,classes:c,flexItem:u,light:p,orientation:f,textAlign:b,variant:m}=t;return Ue({root:["root",o&&"absolute",m,p&&"light",f==="vertical"&&"vertical",u&&"flexItem",a&&"withChildren",a&&f==="vertical"&&"withChildrenVertical",b==="right"&&f!=="vertical"&&"textAlignRight",b==="left"&&f!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",f==="vertical"&&"wrapperVertical"]},LQ,c)},$Q=fe("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,a.absolute&&o.absolute,o[a.variant],a.light&&o.light,a.orientation==="vertical"&&o.vertical,a.flexItem&&o.flexItem,a.children&&o.withChildren,a.children&&a.orientation==="vertical"&&o.withChildrenVertical,a.textAlign==="right"&&a.orientation!=="vertical"&&o.textAlignRight,a.textAlign==="left"&&a.orientation!=="vertical"&&o.textAlignLeft]}})(({theme:t,ownerState:o})=>U({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},o.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},o.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:cn(t.palette.divider,.08)},o.variant==="inset"&&{marginLeft:72},o.variant==="middle"&&o.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},o.variant==="middle"&&o.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},o.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},o.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>U({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:o})=>U({},o.children&&o.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:o})=>U({},o.children&&o.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>U({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),VQ=fe("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.wrapper,a.orientation==="vertical"&&o.wrapperVertical]}})(({theme:t,ownerState:o})=>U({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},o.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),UQ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiDivider"}),{absolute:u=!1,children:p,className:f,component:b=p?"div":"hr",flexItem:m=!1,light:v=!1,orientation:A="horizontal",role:_=b!=="hr"?"separator":void 0,textAlign:y="center",variant:E="fullWidth"}=c,S=ye(c,jQ),D=U({},c,{absolute:u,component:b,flexItem:m,light:v,orientation:A,role:_,textAlign:y,variant:E}),R=FQ(D);return L.jsx($Q,U({as:b,className:Ae(R.root,f),role:_,ref:a,ownerState:D},S,{children:p?L.jsx(VQ,{className:R.wrapper,ownerState:D,children:p}):null}))}),Dr=UQ,HQ=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function WQ(t,o,a){const c=o.getBoundingClientRect(),u=a&&a.getBoundingClientRect(),p=Oi(o);let f;if(o.fakeTransform)f=o.fakeTransform;else{const v=p.getComputedStyle(o);f=v.getPropertyValue("-webkit-transform")||v.getPropertyValue("transform")}let b=0,m=0;if(f&&f!=="none"&&typeof f=="string"){const v=f.split("(")[1].split(")")[0].split(",");b=parseInt(v[4],10),m=parseInt(v[5],10)}return t==="left"?u?`translateX(${u.right+b-c.left}px)`:`translateX(${p.innerWidth+b-c.left}px)`:t==="right"?u?`translateX(-${c.right-u.left-b}px)`:`translateX(-${c.left+c.width-b}px)`:t==="up"?u?`translateY(${u.bottom+m-c.top}px)`:`translateY(${p.innerHeight+m-c.top}px)`:u?`translateY(-${c.top-u.top+c.height-m}px)`:`translateY(-${c.top+c.height-m}px)`}function GQ(t){return typeof t=="function"?t():t}function ff(t,o,a){const c=GQ(a),u=WQ(t,o,c);u&&(o.style.webkitTransform=u,o.style.transform=u)}const qQ=z.forwardRef(function(o,a){const c=Qa(),u={enter:c.transitions.easing.easeOut,exit:c.transitions.easing.sharp},p={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{addEndListener:f,appear:b=!0,children:m,container:v,direction:A="down",easing:_=u,in:y,onEnter:E,onEntered:S,onEntering:D,onExit:R,onExited:I,onExiting:P,style:B,timeout:F=p,TransitionComponent:M=Bm}=o,W=ye(o,HQ),H=z.useRef(null),K=mn(m.ref,H,a),Z=J=>le=>{J&&(le===void 0?J(H.current):J(H.current,le))},Y=Z((J,le)=>{ff(A,J,v),p1(J),E&&E(J,le)}),te=Z((J,le)=>{const ge=Is({timeout:F,style:B,easing:_},{mode:"enter"});J.style.webkitTransition=c.transitions.create("-webkit-transform",U({},ge)),J.style.transition=c.transitions.create("transform",U({},ge)),J.style.webkitTransform="none",J.style.transform="none",D&&D(J,le)}),ce=Z(S),re=Z(P),ae=Z(J=>{const le=Is({timeout:F,style:B,easing:_},{mode:"exit"});J.style.webkitTransition=c.transitions.create("-webkit-transform",le),J.style.transition=c.transitions.create("transform",le),ff(A,J,v),R&&R(J)}),ie=Z(J=>{J.style.webkitTransition="",J.style.transition="",I&&I(J)}),pe=J=>{f&&f(H.current,J)},oe=z.useCallback(()=>{H.current&&ff(A,H.current,v)},[A,v]);return z.useEffect(()=>{if(y||A==="down"||A==="right")return;const J=RC(()=>{H.current&&ff(A,H.current,v)}),le=Oi(H.current);return le.addEventListener("resize",J),()=>{J.clear(),le.removeEventListener("resize",J)}},[A,y,v]),z.useEffect(()=>{y||oe()},[y,oe]),L.jsx(M,U({nodeRef:H,onEnter:Y,onEntered:ce,onEntering:te,onExit:ae,onExited:ie,onExiting:re,addEndListener:pe,appear:b,in:y,timeout:F},W,{children:(J,le)=>z.cloneElement(m,U({ref:K,style:U({visibility:J==="exited"&&!y?"hidden":void 0},B,m.props.style)},le))}))}),G3=qQ;function KQ(t){return je("MuiFab",t)}const YQ=Fe("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),IT=YQ,QQ=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],ZQ=t=>{const{color:o,variant:a,classes:c,size:u}=t,p={root:["root",a,`size${Ce(u)}`,o==="inherit"?"colorInherit":o]},f=Ue(p,KQ,c);return U({},c,f)},JQ=fe(mh,{name:"MuiFab",slot:"Root",shouldForwardProp:t=>cr(t)||t==="classes",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[a.variant],o[`size${Ce(a.size)}`],a.color==="inherit"&&o.colorInherit,o[Ce(a.size)],o[a.color]]}})(({theme:t,ownerState:o})=>{var a,c;return U({},t.typography.button,{minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(t.vars||t).zIndex.fab,boxShadow:(t.vars||t).shadows[6],"&:active":{boxShadow:(t.vars||t).shadows[12]},color:t.vars?t.vars.palette.text.primary:(a=(c=t.palette).getContrastText)==null?void 0:a.call(c,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],"&:hover":{backgroundColor:(t.vars||t).palette.grey.A100,"@media (hover: none)":{backgroundColor:(t.vars||t).palette.grey[300]},textDecoration:"none"},[`&.${IT.focusVisible}`]:{boxShadow:(t.vars||t).shadows[6]}},o.size==="small"&&{width:40,height:40},o.size==="medium"&&{width:48,height:48},o.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},o.variant==="extended"&&o.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},o.variant==="extended"&&o.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},o.color==="inherit"&&{color:"inherit"})},({theme:t,ownerState:o})=>U({},o.color!=="inherit"&&o.color!=="default"&&(t.vars||t).palette[o.color]!=null&&{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o.color].main}}}),({theme:t})=>({[`&.${IT.disabled}`]:{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground}})),XQ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiFab"}),{children:u,className:p,color:f="default",component:b="button",disabled:m=!1,disableFocusRipple:v=!1,focusVisibleClassName:A,size:_="large",variant:y="circular"}=c,E=ye(c,QQ),S=U({},c,{color:f,component:b,disabled:m,disableFocusRipple:v,size:_,variant:y}),D=ZQ(S);return L.jsx(JQ,U({className:Ae(D.root,p),component:b,disabled:m,focusRipple:!v,focusVisibleClassName:Ae(D.focusVisible,A),ownerState:S,ref:a},E,{classes:D,children:u}))}),eZ=XQ,tZ=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],nZ=t=>{const{classes:o,disableUnderline:a}=t,u=Ue({root:["root",!a&&"underline"],input:["input"]},$K,o);return U({},o,u)},oZ=fe(Fm,{shouldForwardProp:t=>cr(t)||t==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[...zm(t,o),!a.disableUnderline&&o.underline]}})(({theme:t,ownerState:o})=>{var a;const c=t.palette.mode==="light",u=c?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",p=c?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",f=c?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",b=c?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return U({position:"relative",backgroundColor:t.vars?t.vars.palette.FilledInput.bg:p,borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),"&:hover":{backgroundColor:t.vars?t.vars.palette.FilledInput.hoverBg:f,"@media (hover: none)":{backgroundColor:t.vars?t.vars.palette.FilledInput.bg:p}},[`&.${fa.focused}`]:{backgroundColor:t.vars?t.vars.palette.FilledInput.bg:p},[`&.${fa.disabled}`]:{backgroundColor:t.vars?t.vars.palette.FilledInput.disabledBg:b}},!o.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(a=(t.vars||t).palette[o.color||"primary"])==null?void 0:a.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${fa.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${fa.error}`]:{"&:before, &:after":{borderBottomColor:(t.vars||t).palette.error.main}},"&:before":{borderBottom:`1px solid ${t.vars?`rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`:u}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${fa.disabled}, .${fa.error}):before`]:{borderBottom:`1px solid ${(t.vars||t).palette.text.primary}`},[`&.${fa.disabled}:before`]:{borderBottomStyle:"dotted"}},o.startAdornment&&{paddingLeft:12},o.endAdornment&&{paddingRight:12},o.multiline&&U({padding:"25px 12px 8px"},o.size==="small"&&{paddingTop:21,paddingBottom:4},o.hiddenLabel&&{paddingTop:16,paddingBottom:17}))}),rZ=fe($m,{name:"MuiFilledInput",slot:"Input",overridesResolver:jm})(({theme:t,ownerState:o})=>U({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!t.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:t.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:t.palette.mode==="light"?null:"#fff",caretColor:t.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},t.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[t.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},o.size==="small"&&{paddingTop:21,paddingBottom:4},o.hiddenLabel&&{paddingTop:16,paddingBottom:17},o.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},o.startAdornment&&{paddingLeft:0},o.endAdornment&&{paddingRight:0},o.hiddenLabel&&o.size==="small"&&{paddingTop:8,paddingBottom:9})),q3=z.forwardRef(function(o,a){var c,u,p,f;const b=$e({props:o,name:"MuiFilledInput"}),{components:m={},componentsProps:v,fullWidth:A=!1,inputComponent:_="input",multiline:y=!1,slotProps:E,slots:S={},type:D="text"}=b,R=ye(b,tZ),I=U({},b,{fullWidth:A,inputComponent:_,multiline:y,type:D}),P=nZ(b),B={root:{ownerState:I},input:{ownerState:I}},F=E??v?Co(E??v,B):B,M=(c=(u=S.root)!=null?u:m.Root)!=null?c:oZ,W=(p=(f=S.input)!=null?f:m.Input)!=null?p:rZ;return L.jsx(f1,U({slots:{root:M,input:W},componentsProps:F,fullWidth:A,inputComponent:_,multiline:y,ref:a,type:D},R,{classes:P}))});q3.muiName="Input";const K3=q3;function iZ(t){return je("MuiFormControl",t)}Fe("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const sZ=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],aZ=t=>{const{classes:o,margin:a,fullWidth:c}=t,u={root:["root",a!=="none"&&`margin${Ce(a)}`,c&&"fullWidth"]};return Ue(u,iZ,o)},lZ=fe("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:t},o)=>U({},o.root,o[`margin${Ce(t.margin)}`],t.fullWidth&&o.fullWidth)})(({ownerState:t})=>U({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},t.margin==="normal"&&{marginTop:16,marginBottom:8},t.margin==="dense"&&{marginTop:8,marginBottom:4},t.fullWidth&&{width:"100%"})),cZ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiFormControl"}),{children:u,className:p,color:f="primary",component:b="div",disabled:m=!1,error:v=!1,focused:A,fullWidth:_=!1,hiddenLabel:y=!1,margin:E="none",required:S=!1,size:D="medium",variant:R="outlined"}=c,I=ye(c,sZ),P=U({},c,{color:f,component:b,disabled:m,error:v,fullWidth:_,hiddenLabel:y,margin:E,required:S,size:D,variant:R}),B=aZ(P),[F,M]=z.useState(()=>{let re=!1;return u&&z.Children.forEach(u,ae=>{if(!q0(ae,["Input","Select"]))return;const ie=q0(ae,["Select"])?ae.props.input:ae;ie&&IK(ie.props)&&(re=!0)}),re}),[W,H]=z.useState(()=>{let re=!1;return u&&z.Children.forEach(u,ae=>{q0(ae,["Input","Select"])&&(Cg(ae.props,!0)||Cg(ae.props.inputProps,!0))&&(re=!0)}),re}),[K,Z]=z.useState(!1);m&&K&&Z(!1);const Y=A!==void 0&&!m?A:K;let te;const ce=z.useMemo(()=>({adornedStart:F,setAdornedStart:M,color:f,disabled:m,error:v,filled:W,focused:Y,fullWidth:_,hiddenLabel:y,size:D,onBlur:()=>{Z(!1)},onEmpty:()=>{H(!1)},onFilled:()=>{H(!0)},onFocus:()=>{Z(!0)},registerEffect:te,required:S,variant:R}),[F,f,m,v,W,Y,_,y,te,S,D,R]);return L.jsx(Lm.Provider,{value:ce,children:L.jsx(lZ,U({as:b,ownerState:P,className:Ae(B.root,p),ref:a},I,{children:u}))})}),dZ=cZ;function uZ(t){return je("MuiFormHelperText",t)}const hZ=Fe("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),MT=hZ;var PT;const pZ=["children","className","component","disabled","error","filled","focused","margin","required","variant"],fZ=t=>{const{classes:o,contained:a,size:c,disabled:u,error:p,filled:f,focused:b,required:m}=t,v={root:["root",u&&"disabled",p&&"error",c&&`size${Ce(c)}`,a&&"contained",b&&"focused",f&&"filled",m&&"required"]};return Ue(v,uZ,o)},gZ=fe("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,a.size&&o[`size${Ce(a.size)}`],a.contained&&o.contained,a.filled&&o.filled]}})(({theme:t,ownerState:o})=>U({color:(t.vars||t).palette.text.secondary},t.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${MT.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${MT.error}`]:{color:(t.vars||t).palette.error.main}},o.size==="small"&&{marginTop:4},o.contained&&{marginLeft:14,marginRight:14})),mZ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiFormHelperText"}),{children:u,className:p,component:f="p"}=c,b=ye(c,pZ),m=Za(),v=Yc({props:c,muiFormControl:m,states:["variant","size","disabled","error","filled","focused","required"]}),A=U({},c,{component:f,contained:v.variant==="filled"||v.variant==="outlined",variant:v.variant,size:v.size,disabled:v.disabled,error:v.error,filled:v.filled,focused:v.focused,required:v.required}),_=fZ(A);return L.jsx(gZ,U({as:f,ownerState:A,className:Ae(_.root,p),ref:a},b,{children:u===" "?PT||(PT=L.jsx("span",{className:"notranslate",children:"​"})):u}))}),bZ=mZ;function kZ(t){return je("MuiFormLabel",t)}const wZ=Fe("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Eu=wZ,vZ=["children","className","color","component","disabled","error","filled","focused","required"],CZ=t=>{const{classes:o,color:a,focused:c,disabled:u,error:p,filled:f,required:b}=t,m={root:["root",`color${Ce(a)}`,u&&"disabled",p&&"error",f&&"filled",c&&"focused",b&&"required"],asterisk:["asterisk",p&&"error"]};return Ue(m,kZ,o)},yZ=fe("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:t},o)=>U({},o.root,t.color==="secondary"&&o.colorSecondary,t.filled&&o.filled)})(({theme:t,ownerState:o})=>U({color:(t.vars||t).palette.text.secondary},t.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${Eu.focused}`]:{color:(t.vars||t).palette[o.color].main},[`&.${Eu.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${Eu.error}`]:{color:(t.vars||t).palette.error.main}})),AZ=fe("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(t,o)=>o.asterisk})(({theme:t})=>({[`&.${Eu.error}`]:{color:(t.vars||t).palette.error.main}})),_Z=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiFormLabel"}),{children:u,className:p,component:f="label"}=c,b=ye(c,vZ),m=Za(),v=Yc({props:c,muiFormControl:m,states:["color","required","focused","disabled","error","filled"]}),A=U({},c,{color:v.color||"primary",component:f,disabled:v.disabled,error:v.error,filled:v.filled,focused:v.focused,required:v.required}),_=CZ(A);return L.jsxs(yZ,U({as:f,ownerState:A,className:Ae(_.root,p),ref:a},b,{children:[u,v.required&&L.jsxs(AZ,{ownerState:A,"aria-hidden":!0,className:_.asterisk,children:[" ","*"]})]}))}),xZ=_Z,EZ=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Sv(t){return`scale(${t}, ${t**2})`}const SZ={entering:{opacity:1,transform:Sv(1)},entered:{opacity:1,transform:"none"}},tw=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Y3=z.forwardRef(function(o,a){const{addEndListener:c,appear:u=!0,children:p,easing:f,in:b,onEnter:m,onEntered:v,onEntering:A,onExit:_,onExited:y,onExiting:E,style:S,timeout:D="auto",TransitionComponent:R=Bm}=o,I=ye(o,EZ),P=z.useRef(),B=z.useRef(),F=Qa(),M=z.useRef(null),W=mn(M,p.ref,a),H=ie=>pe=>{if(ie){const oe=M.current;pe===void 0?ie(oe):ie(oe,pe)}},K=H(A),Z=H((ie,pe)=>{p1(ie);const{duration:oe,delay:J,easing:le}=Is({style:S,timeout:D,easing:f},{mode:"enter"});let ge;D==="auto"?(ge=F.transitions.getAutoHeightDuration(ie.clientHeight),B.current=ge):ge=oe,ie.style.transition=[F.transitions.create("opacity",{duration:ge,delay:J}),F.transitions.create("transform",{duration:tw?ge:ge*.666,delay:J,easing:le})].join(","),m&&m(ie,pe)}),Y=H(v),te=H(E),ce=H(ie=>{const{duration:pe,delay:oe,easing:J}=Is({style:S,timeout:D,easing:f},{mode:"exit"});let le;D==="auto"?(le=F.transitions.getAutoHeightDuration(ie.clientHeight),B.current=le):le=pe,ie.style.transition=[F.transitions.create("opacity",{duration:le,delay:oe}),F.transitions.create("transform",{duration:tw?le:le*.666,delay:tw?oe:oe||le*.333,easing:J})].join(","),ie.style.opacity=0,ie.style.transform=Sv(.75),_&&_(ie)}),re=H(y),ae=ie=>{D==="auto"&&(P.current=setTimeout(ie,B.current||0)),c&&c(M.current,ie)};return z.useEffect(()=>()=>{clearTimeout(P.current)},[]),L.jsx(R,U({appear:u,in:b,nodeRef:M,onEnter:Z,onEntered:Y,onEntering:K,onExit:ce,onExited:re,onExiting:te,addEndListener:ae,timeout:D==="auto"?null:D},I,{children:(ie,pe)=>z.cloneElement(p,U({style:U({opacity:0,transform:Sv(.75),visibility:ie==="exited"&&!b?"hidden":void 0},SZ[ie],S,p.props.style),ref:W},pe))}))});Y3.muiSupportAuto=!0;const dn=Y3;function DZ(t,o,a,c,u){const[p,f]=z.useState(()=>u&&a?a(t).matches:c?c(t).matches:o);return ii(()=>{let b=!0;if(!a)return;const m=a(t),v=()=>{b&&f(m.matches)};return v(),m.addListener(v),()=>{b=!1,m.removeListener(v)}},[t,a]),p}const Q3=Du["useSyncExternalStore"];function TZ(t,o,a,c,u){const p=z.useCallback(()=>o,[o]),f=z.useMemo(()=>{if(u&&a)return()=>a(t).matches;if(c!==null){const{matches:A}=c(t);return()=>A}return p},[p,t,c,u,a]),[b,m]=z.useMemo(()=>{if(a===null)return[p,()=>()=>{}];const A=a(t);return[()=>A.matches,_=>(A.addListener(_),()=>{A.removeListener(_)})]},[p,a,t]);return Q3(m,b,f)}function Z3(t,o={}){const a=km(),c=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:u=!1,matchMedia:p=c?window.matchMedia:null,ssrMatchMedia:f=null,noSsr:b=!1}=w3({name:"MuiUseMediaQuery",props:o,theme:a});let m=typeof t=="function"?t(a):t;return m=m.replace(/^@media( ?)/m,""),(Q3!==void 0?TZ:DZ)(m,u,p,f,b)}const IZ=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],MZ=t=>{const{classes:o,disableUnderline:a}=t,u=Ue({root:["root",!a&&"underline"],input:["input"]},LK,o);return U({},o,u)},PZ=fe(Fm,{shouldForwardProp:t=>cr(t)||t==="classes",name:"MuiInput",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[...zm(t,o),!a.disableUnderline&&o.underline]}})(({theme:t,ownerState:o})=>{let c=t.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return t.vars&&(c=`rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`),U({position:"relative"},o.formControl&&{"label + &":{marginTop:16}},!o.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(t.vars||t).palette[o.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Yd.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Yd.error}`]:{"&:before, &:after":{borderBottomColor:(t.vars||t).palette.error.main}},"&:before":{borderBottom:`1px solid ${c}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Yd.disabled}, .${Yd.error}):before`]:{borderBottom:`2px solid ${(t.vars||t).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${c}`}},[`&.${Yd.disabled}:before`]:{borderBottomStyle:"dotted"}})}),BZ=fe($m,{name:"MuiInput",slot:"Input",overridesResolver:jm})({}),J3=z.forwardRef(function(o,a){var c,u,p,f;const b=$e({props:o,name:"MuiInput"}),{disableUnderline:m,components:v={},componentsProps:A,fullWidth:_=!1,inputComponent:y="input",multiline:E=!1,slotProps:S,slots:D={},type:R="text"}=b,I=ye(b,IZ),P=MZ(b),F={root:{ownerState:{disableUnderline:m}}},M=S??A?Co(S??A,F):F,W=(c=(u=D.root)!=null?u:v.Root)!=null?c:PZ,H=(p=(f=D.input)!=null?f:v.Input)!=null?p:BZ;return L.jsx(f1,U({slots:{root:W,input:H},slotProps:M,fullWidth:_,inputComponent:y,multiline:E,ref:a,type:R},I,{classes:P}))});J3.muiName="Input";const X3=J3;function NZ(t){return je("MuiInputAdornment",t)}const RZ=Fe("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),BT=RZ;var NT;const OZ=["children","className","component","disablePointerEvents","disableTypography","position","variant"],LZ=(t,o)=>{const{ownerState:a}=t;return[o.root,o[`position${Ce(a.position)}`],a.disablePointerEvents===!0&&o.disablePointerEvents,o[a.variant]]},zZ=t=>{const{classes:o,disablePointerEvents:a,hiddenLabel:c,position:u,size:p,variant:f}=t,b={root:["root",a&&"disablePointerEvents",u&&`position${Ce(u)}`,f,c&&"hiddenLabel",p&&`size${Ce(p)}`]};return Ue(b,NZ,o)},jZ=fe("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:LZ})(({theme:t,ownerState:o})=>U({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},o.variant==="filled"&&{[`&.${BT.positionStart}&:not(.${BT.hiddenLabel})`]:{marginTop:16}},o.position==="start"&&{marginRight:8},o.position==="end"&&{marginLeft:8},o.disablePointerEvents===!0&&{pointerEvents:"none"})),FZ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiInputAdornment"}),{children:u,className:p,component:f="div",disablePointerEvents:b=!1,disableTypography:m=!1,position:v,variant:A}=c,_=ye(c,OZ),y=Za()||{};let E=A;A&&y.variant,y&&!E&&(E=y.variant);const S=U({},c,{hiddenLabel:y.hiddenLabel,size:y.size,disablePointerEvents:b,position:v,variant:E}),D=zZ(S);return L.jsx(Lm.Provider,{value:null,children:L.jsx(jZ,U({as:f,ownerState:S,className:Ae(D.root,p),ref:a},_,{children:typeof u=="string"&&!m?L.jsx(Jt,{color:"text.secondary",children:u}):L.jsxs(z.Fragment,{children:[v==="start"?NT||(NT=L.jsx("span",{className:"notranslate",children:"​"})):null,u]})}))})}),nw=FZ;function $Z(t){return je("MuiInputLabel",t)}Fe("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const VZ=["disableAnimation","margin","shrink","variant","className"],UZ=t=>{const{classes:o,formControl:a,size:c,shrink:u,disableAnimation:p,variant:f,required:b}=t,v=Ue({root:["root",a&&"formControl",!p&&"animated",u&&"shrink",c==="small"&&"sizeSmall",f],asterisk:[b&&"asterisk"]},$Z,o);return U({},o,v)},HZ=fe(xZ,{shouldForwardProp:t=>cr(t)||t==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[{[`& .${Eu.asterisk}`]:o.asterisk},o.root,a.formControl&&o.formControl,a.size==="small"&&o.sizeSmall,a.shrink&&o.shrink,!a.disableAnimation&&o.animated,o[a.variant]]}})(({theme:t,ownerState:o})=>U({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},o.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},o.size==="small"&&{transform:"translate(0, 17px) scale(1)"},o.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!o.disableAnimation&&{transition:t.transitions.create(["color","transform","max-width"],{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut})},o.variant==="filled"&&U({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},o.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},o.shrink&&U({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},o.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),o.variant==="outlined"&&U({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},o.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},o.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),WZ=z.forwardRef(function(o,a){const c=$e({name:"MuiInputLabel",props:o}),{disableAnimation:u=!1,shrink:p,className:f}=c,b=ye(c,VZ),m=Za();let v=p;typeof v>"u"&&m&&(v=m.filled||m.focused||m.adornedStart);const A=Yc({props:c,muiFormControl:m,states:["size","variant","required"]}),_=U({},c,{disableAnimation:u,formControl:m,shrink:v,size:A.size,variant:A.variant,required:A.required}),y=UZ(_);return L.jsx(HZ,U({"data-shrink":v,ownerState:_,ref:a,className:Ae(y.root,f)},b,{classes:y}))}),GZ=WZ;function qZ(t){return je("MuiLink",t)}const KZ=Fe("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),YZ=KZ,eP={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},QZ=t=>eP[t]||t,ZZ=({theme:t,ownerState:o})=>{const a=QZ(o.color),c=Bc(t,`palette.${a}`,!1)||o.color,u=Bc(t,`palette.${a}Channel`);return"vars"in t&&u?`rgba(${u} / 0.4)`:cn(c,.4)},JZ=ZZ,XZ=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],eJ=t=>{const{classes:o,component:a,focusVisible:c,underline:u}=t,p={root:["root",`underline${Ce(u)}`,a==="button"&&"button",c&&"focusVisible"]};return Ue(p,qZ,o)},tJ=fe(Jt,{name:"MuiLink",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[`underline${Ce(a.underline)}`],a.component==="button"&&o.button]}})(({theme:t,ownerState:o})=>U({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&U({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:JZ({theme:t,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${YZ.focusVisible}`]:{outline:"auto"}})),nJ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiLink"}),{className:u,color:p="primary",component:f="a",onBlur:b,onFocus:m,TypographyClasses:v,underline:A="always",variant:_="inherit",sx:y}=c,E=ye(c,XZ),{isFocusVisibleRef:S,onBlur:D,onFocus:R,ref:I}=LC(),[P,B]=z.useState(!1),F=mn(a,I),M=Z=>{D(Z),S.current===!1&&B(!1),b&&b(Z)},W=Z=>{R(Z),S.current===!0&&B(!0),m&&m(Z)},H=U({},c,{color:p,component:f,focusVisible:P,underline:A,variant:_}),K=eJ(H);return L.jsx(tJ,U({color:p,className:Ae(K.root,u),classes:v,component:f,onBlur:M,onFocus:W,ref:F,ownerState:H,variant:_,sx:[...Object.keys(eP).includes(p)?[]:[{color:p}],...Array.isArray(y)?y:[y]]},E))}),oJ=nJ,rJ=z.createContext({}),Dv=rJ;function iJ(t){return je("MuiList",t)}Fe("MuiList",["root","padding","dense","subheader"]);const sJ=["children","className","component","dense","disablePadding","subheader"],aJ=t=>{const{classes:o,disablePadding:a,dense:c,subheader:u}=t;return Ue({root:["root",!a&&"padding",c&&"dense",u&&"subheader"]},iJ,o)},lJ=fe("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,!a.disablePadding&&o.padding,a.dense&&o.dense,a.subheader&&o.subheader]}})(({ownerState:t})=>U({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})),cJ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiList"}),{children:u,className:p,component:f="ul",dense:b=!1,disablePadding:m=!1,subheader:v}=c,A=ye(c,sJ),_=z.useMemo(()=>({dense:b}),[b]),y=U({},c,{component:f,dense:b,disablePadding:m}),E=aJ(y);return L.jsx(Dv.Provider,{value:_,children:L.jsxs(lJ,U({as:f,className:Ae(E.root,p),ref:a,ownerState:y},A,{children:[v,u]}))})}),dJ=cJ,uJ=Fe("MuiListItemIcon",["root","alignItemsFlexStart"]),RT=uJ,hJ=Fe("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),OT=hJ,pJ=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function ow(t,o,a){return t===o?t.firstChild:o&&o.nextElementSibling?o.nextElementSibling:a?null:t.firstChild}function LT(t,o,a){return t===o?a?t.firstChild:t.lastChild:o&&o.previousElementSibling?o.previousElementSibling:a?null:t.lastChild}function tP(t,o){if(o===void 0)return!0;let a=t.innerText;return a===void 0&&(a=t.textContent),a=a.trim().toLowerCase(),a.length===0?!1:o.repeating?a[0]===o.keys[0]:a.indexOf(o.keys.join(""))===0}function Qd(t,o,a,c,u,p){let f=!1,b=u(t,o,o?a:!1);for(;b;){if(b===t.firstChild){if(f)return!1;f=!0}const m=c?!1:b.disabled||b.getAttribute("aria-disabled")==="true";if(!b.hasAttribute("tabindex")||!tP(b,p)||m)b=u(t,b,a);else return b.focus(),!0}return!1}const fJ=z.forwardRef(function(o,a){const{actions:c,autoFocus:u=!1,autoFocusItem:p=!1,children:f,className:b,disabledItemsFocusable:m=!1,disableListWrap:v=!1,onKeyDown:A,variant:_="selectedMenu"}=o,y=ye(o,pJ),E=z.useRef(null),S=z.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ii(()=>{u&&E.current.focus()},[u]),z.useImperativeHandle(c,()=>({adjustStyleForScrollbar:(B,F)=>{const M=!E.current.style.width;if(B.clientHeight<E.current.clientHeight&&M){const W=`${H4(lo(B))}px`;E.current.style[F.direction==="rtl"?"paddingLeft":"paddingRight"]=W,E.current.style.width=`calc(100% + ${W})`}return E.current}}),[]);const D=B=>{const F=E.current,M=B.key,W=lo(F).activeElement;if(M==="ArrowDown")B.preventDefault(),Qd(F,W,v,m,ow);else if(M==="ArrowUp")B.preventDefault(),Qd(F,W,v,m,LT);else if(M==="Home")B.preventDefault(),Qd(F,null,v,m,ow);else if(M==="End")B.preventDefault(),Qd(F,null,v,m,LT);else if(M.length===1){const H=S.current,K=M.toLowerCase(),Z=performance.now();H.keys.length>0&&(Z-H.lastTime>500?(H.keys=[],H.repeating=!0,H.previousKeyMatched=!0):H.repeating&&K!==H.keys[0]&&(H.repeating=!1)),H.lastTime=Z,H.keys.push(K);const Y=W&&!H.repeating&&tP(W,H);H.previousKeyMatched&&(Y||Qd(F,W,!1,m,ow,H))?B.preventDefault():H.previousKeyMatched=!1}A&&A(B)},R=mn(E,a);let I=-1;z.Children.forEach(f,(B,F)=>{if(!z.isValidElement(B)){I===F&&(I+=1,I>=f.length&&(I=-1));return}B.props.disabled||(_==="selectedMenu"&&B.props.selected||I===-1)&&(I=F),I===F&&(B.props.disabled||B.props.muiSkipListHighlight||B.type.muiSkipListHighlight)&&(I+=1,I>=f.length&&(I=-1))});const P=z.Children.map(f,(B,F)=>{if(F===I){const M={};return p&&(M.autoFocus=!0),B.props.tabIndex===void 0&&_==="selectedMenu"&&(M.tabIndex=0),z.cloneElement(B,M)}return B});return L.jsx(dJ,U({role:"menu",ref:R,className:b,onKeyDown:D,tabIndex:u?0:-1},y,{children:P}))}),gJ=fJ;function mJ(t){return je("MuiPopover",t)}Fe("MuiPopover",["root","paper"]);const bJ=["onEntering"],kJ=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"],wJ=["slotProps"];function zT(t,o){let a=0;return typeof o=="number"?a=o:o==="center"?a=t.height/2:o==="bottom"&&(a=t.height),a}function jT(t,o){let a=0;return typeof o=="number"?a=o:o==="center"?a=t.width/2:o==="right"&&(a=t.width),a}function FT(t){return[t.horizontal,t.vertical].map(o=>typeof o=="number"?`${o}px`:o).join(" ")}function rw(t){return typeof t=="function"?t():t}const vJ=t=>{const{classes:o}=t;return Ue({root:["root"],paper:["paper"]},mJ,o)},CJ=fe(H3,{name:"MuiPopover",slot:"Root",overridesResolver:(t,o)=>o.root})({}),nP=fe(Nm,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,o)=>o.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),yJ=z.forwardRef(function(o,a){var c,u,p;const f=$e({props:o,name:"MuiPopover"}),{action:b,anchorEl:m,anchorOrigin:v={vertical:"top",horizontal:"left"},anchorPosition:A,anchorReference:_="anchorEl",children:y,className:E,container:S,elevation:D=8,marginThreshold:R=16,open:I,PaperProps:P={},slots:B,slotProps:F,transformOrigin:M={vertical:"top",horizontal:"left"},TransitionComponent:W=dn,transitionDuration:H="auto",TransitionProps:{onEntering:K}={}}=f,Z=ye(f.TransitionProps,bJ),Y=ye(f,kJ),te=(c=F==null?void 0:F.paper)!=null?c:P,ce=z.useRef(),re=mn(ce,te.ref),ae=U({},f,{anchorOrigin:v,anchorReference:_,elevation:D,marginThreshold:R,externalPaperSlotProps:te,transformOrigin:M,TransitionComponent:W,transitionDuration:H,TransitionProps:Z}),ie=vJ(ae),pe=z.useCallback(()=>{if(_==="anchorPosition")return A;const ke=rw(m),dt=(ke&&ke.nodeType===1?ke:lo(ce.current).body).getBoundingClientRect();return{top:dt.top+zT(dt,v.vertical),left:dt.left+jT(dt,v.horizontal)}},[m,v.horizontal,v.vertical,A,_]),oe=z.useCallback(ke=>({vertical:zT(ke,M.vertical),horizontal:jT(ke,M.horizontal)}),[M.horizontal,M.vertical]),J=z.useCallback(ke=>{const et={width:ke.offsetWidth,height:ke.offsetHeight},dt=oe(et);if(_==="none")return{top:null,left:null,transformOrigin:FT(dt)};const zt=pe();let Wt=zt.top-dt.vertical,Ze=zt.left-dt.horizontal;const Ot=Wt+et.height,it=Ze+et.width,We=Oi(rw(m)),st=We.innerHeight-R,tn=We.innerWidth-R;if(Wt<R){const Ve=Wt-R;Wt-=Ve,dt.vertical+=Ve}else if(Ot>st){const Ve=Ot-st;Wt-=Ve,dt.vertical+=Ve}if(Ze<R){const Ve=Ze-R;Ze-=Ve,dt.horizontal+=Ve}else if(it>tn){const Ve=it-tn;Ze-=Ve,dt.horizontal+=Ve}return{top:`${Math.round(Wt)}px`,left:`${Math.round(Ze)}px`,transformOrigin:FT(dt)}},[m,_,pe,oe,R]),[le,ge]=z.useState(I),Te=z.useCallback(()=>{const ke=ce.current;if(!ke)return;const et=J(ke);et.top!==null&&(ke.style.top=et.top),et.left!==null&&(ke.style.left=et.left),ke.style.transformOrigin=et.transformOrigin,ge(!0)},[J]),Ie=(ke,et)=>{K&&K(ke,et),Te()},Qe=()=>{ge(!1)};z.useEffect(()=>{I&&Te()}),z.useImperativeHandle(b,()=>I?{updatePosition:()=>{Te()}}:null,[I,Te]),z.useEffect(()=>{if(!I)return;const ke=RC(()=>{Te()}),et=Oi(m);return et.addEventListener("resize",ke),()=>{ke.clear(),et.removeEventListener("resize",ke)}},[m,I,Te]);let Me=H;H==="auto"&&!W.muiSupportAuto&&(Me=void 0);const ve=S||(m?lo(rw(m)).body:void 0),be=(u=B==null?void 0:B.root)!=null?u:CJ,Oe=(p=B==null?void 0:B.paper)!=null?p:nP,He=eh({elementType:Oe,externalSlotProps:U({},te,{style:le?te.style:U({},te.style,{opacity:0})}),additionalProps:{elevation:D,ref:re},ownerState:ae,className:Ae(ie.paper,te==null?void 0:te.className)}),Ne=eh({elementType:be,externalSlotProps:(F==null?void 0:F.root)||{},externalForwardedProps:Y,additionalProps:{ref:a,slotProps:{backdrop:{invisible:!0}},container:ve,open:I},ownerState:ae,className:Ae(ie.root,E)}),{slotProps:bt}=Ne,Re=ye(Ne,wJ);return L.jsx(be,U({},Re,!Xu(be)&&{slotProps:bt},{children:L.jsx(W,U({appear:!0,in:I,onEntering:Ie,onExited:Qe,timeout:Me},Z,{children:L.jsx(Oe,U({},He,{children:y}))}))}))}),AJ=yJ;function _J(t){return je("MuiMenu",t)}Fe("MuiMenu",["root","paper","list"]);const xJ=["onEntering"],EJ=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],SJ={vertical:"top",horizontal:"right"},DJ={vertical:"top",horizontal:"left"},TJ=t=>{const{classes:o}=t;return Ue({root:["root"],paper:["paper"],list:["list"]},_J,o)},IJ=fe(AJ,{shouldForwardProp:t=>cr(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,o)=>o.root})({}),MJ=fe(nP,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,o)=>o.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),PJ=fe(gJ,{name:"MuiMenu",slot:"List",overridesResolver:(t,o)=>o.list})({outline:0}),BJ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiMenu"}),{autoFocus:u=!0,children:p,disableAutoFocusItem:f=!1,MenuListProps:b={},onClose:m,open:v,PaperProps:A={},PopoverClasses:_,transitionDuration:y="auto",TransitionProps:{onEntering:E}={},variant:S="selectedMenu"}=c,D=ye(c.TransitionProps,xJ),R=ye(c,EJ),I=Qa(),P=I.direction==="rtl",B=U({},c,{autoFocus:u,disableAutoFocusItem:f,MenuListProps:b,onEntering:E,PaperProps:A,transitionDuration:y,TransitionProps:D,variant:S}),F=TJ(B),M=u&&!f&&v,W=z.useRef(null),H=(Y,te)=>{W.current&&W.current.adjustStyleForScrollbar(Y,I),E&&E(Y,te)},K=Y=>{Y.key==="Tab"&&(Y.preventDefault(),m&&m(Y,"tabKeyDown"))};let Z=-1;return z.Children.map(p,(Y,te)=>{z.isValidElement(Y)&&(Y.props.disabled||(S==="selectedMenu"&&Y.props.selected||Z===-1)&&(Z=te))}),L.jsx(IJ,U({onClose:m,anchorOrigin:{vertical:"bottom",horizontal:P?"right":"left"},transformOrigin:P?SJ:DJ,slots:{paper:MJ},slotProps:{paper:U({},A,{classes:U({},A.classes,{root:F.paper})})},className:F.root,open:v,ref:a,transitionDuration:y,TransitionProps:U({onEntering:H},D),ownerState:B},R,{classes:_,children:L.jsx(PJ,U({onKeyDown:K,actions:W,autoFocus:u&&(Z===-1||f),autoFocusItem:M,variant:S},b,{className:Ae(F.list,b.className),children:p}))}))}),oP=BJ;function NJ(t){return je("MuiMenuItem",t)}const RJ=Fe("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Zd=RJ,OJ=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],LJ=(t,o)=>{const{ownerState:a}=t;return[o.root,a.dense&&o.dense,a.divider&&o.divider,!a.disableGutters&&o.gutters]},zJ=t=>{const{disabled:o,dense:a,divider:c,disableGutters:u,selected:p,classes:f}=t,m=Ue({root:["root",a&&"dense",o&&"disabled",!u&&"gutters",c&&"divider",p&&"selected"]},NJ,f);return U({},f,m)},jJ=fe(mh,{shouldForwardProp:t=>cr(t)||t==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:LJ})(({theme:t,ownerState:o})=>U({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Zd.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:cn(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${Zd.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:cn(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${Zd.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:cn(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:cn(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${Zd.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${Zd.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${TT.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${TT.inset}`]:{marginLeft:52},[`& .${OT.root}`]:{marginTop:0,marginBottom:0},[`& .${OT.inset}`]:{paddingLeft:36},[`& .${RT.root}`]:{minWidth:36}},!o.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},o.dense&&U({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${RT.root} svg`]:{fontSize:"1.25rem"}}))),FJ=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiMenuItem"}),{autoFocus:u=!1,component:p="li",dense:f=!1,divider:b=!1,disableGutters:m=!1,focusVisibleClassName:v,role:A="menuitem",tabIndex:_,className:y}=c,E=ye(c,OJ),S=z.useContext(Dv),D=z.useMemo(()=>({dense:f||S.dense||!1,disableGutters:m}),[S.dense,f,m]),R=z.useRef(null);ii(()=>{u&&R.current&&R.current.focus()},[u]);const I=U({},c,{dense:D.dense,divider:b,disableGutters:m}),P=zJ(c),B=mn(R,a);let F;return c.disabled||(F=_!==void 0?_:-1),L.jsx(Dv.Provider,{value:D,children:L.jsx(jJ,U({ref:B,role:A,tabIndex:F,component:p,focusVisibleClassName:Ae(P.focusVisible,v),className:Ae(P.root,y)},E,{ownerState:I,classes:P}))})}),$J=FJ;function VJ(t){return je("MuiNativeSelect",t)}const UJ=Fe("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),m1=UJ,HJ=["className","disabled","error","IconComponent","inputRef","variant"],WJ=t=>{const{classes:o,variant:a,disabled:c,multiple:u,open:p,error:f}=t,b={select:["select",a,c&&"disabled",u&&"multiple",f&&"error"],icon:["icon",`icon${Ce(a)}`,p&&"iconOpen",c&&"disabled"]};return Ue(b,VJ,o)},rP=({ownerState:t,theme:o})=>U({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":U({},o.vars?{backgroundColor:`rgba(${o.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:o.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${m1.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(o.vars||o).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},t.variant==="filled"&&{"&&&":{paddingRight:32}},t.variant==="outlined"&&{borderRadius:(o.vars||o).shape.borderRadius,"&:focus":{borderRadius:(o.vars||o).shape.borderRadius},"&&&":{paddingRight:32}}),GJ=fe("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:cr,overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.select,o[a.variant],a.error&&o.error,{[`&.${m1.multiple}`]:o.multiple}]}})(rP),iP=({ownerState:t,theme:o})=>U({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(o.vars||o).palette.action.active,[`&.${m1.disabled}`]:{color:(o.vars||o).palette.action.disabled}},t.open&&{transform:"rotate(180deg)"},t.variant==="filled"&&{right:7},t.variant==="outlined"&&{right:7}),qJ=fe("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.icon,a.variant&&o[`icon${Ce(a.variant)}`],a.open&&o.iconOpen]}})(iP),KJ=z.forwardRef(function(o,a){const{className:c,disabled:u,error:p,IconComponent:f,inputRef:b,variant:m="standard"}=o,v=ye(o,HJ),A=U({},o,{disabled:u,variant:m,error:p}),_=WJ(A);return L.jsxs(z.Fragment,{children:[L.jsx(GJ,U({ownerState:A,className:Ae(_.select,c),disabled:u,ref:b||a},v)),o.multiple?null:L.jsx(qJ,{as:f,ownerState:A,className:_.icon})]})}),YJ=KJ;var $T;const QJ=["children","classes","className","label","notched"],ZJ=fe("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),JJ=fe("legend")(({ownerState:t,theme:o})=>U({float:"unset",width:"auto",overflow:"hidden"},!t.withLabel&&{padding:0,lineHeight:"11px",transition:o.transitions.create("width",{duration:150,easing:o.transitions.easing.easeOut})},t.withLabel&&U({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:o.transitions.create("max-width",{duration:50,easing:o.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},t.notched&&{maxWidth:"100%",transition:o.transitions.create("max-width",{duration:100,easing:o.transitions.easing.easeOut,delay:50})})));function XJ(t){const{className:o,label:a,notched:c}=t,u=ye(t,QJ),p=a!=null&&a!=="",f=U({},t,{notched:c,withLabel:p});return L.jsx(ZJ,U({"aria-hidden":!0,className:o,ownerState:f},u,{children:L.jsx(JJ,{ownerState:f,children:p?L.jsx("span",{children:a}):$T||($T=L.jsx("span",{className:"notranslate",children:"​"}))})}))}const eX=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],tX=t=>{const{classes:o}=t,c=Ue({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},jK,o);return U({},o,c)},nX=fe(Fm,{shouldForwardProp:t=>cr(t)||t==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:zm})(({theme:t,ownerState:o})=>{const a=t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return U({position:"relative",borderRadius:(t.vars||t).shape.borderRadius,[`&:hover .${ss.notchedOutline}`]:{borderColor:(t.vars||t).palette.text.primary},"@media (hover: none)":{[`&:hover .${ss.notchedOutline}`]:{borderColor:t.vars?`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:a}},[`&.${ss.focused} .${ss.notchedOutline}`]:{borderColor:(t.vars||t).palette[o.color].main,borderWidth:2},[`&.${ss.error} .${ss.notchedOutline}`]:{borderColor:(t.vars||t).palette.error.main},[`&.${ss.disabled} .${ss.notchedOutline}`]:{borderColor:(t.vars||t).palette.action.disabled}},o.startAdornment&&{paddingLeft:14},o.endAdornment&&{paddingRight:14},o.multiline&&U({padding:"16.5px 14px"},o.size==="small"&&{padding:"8.5px 14px"}))}),oX=fe(XJ,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(t,o)=>o.notchedOutline})(({theme:t})=>{const o=t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:t.vars?`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:o}}),rX=fe($m,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:jm})(({theme:t,ownerState:o})=>U({padding:"16.5px 14px"},!t.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:t.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:t.palette.mode==="light"?null:"#fff",caretColor:t.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},t.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[t.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},o.size==="small"&&{padding:"8.5px 14px"},o.multiline&&{padding:0},o.startAdornment&&{paddingLeft:0},o.endAdornment&&{paddingRight:0})),sP=z.forwardRef(function(o,a){var c,u,p,f,b;const m=$e({props:o,name:"MuiOutlinedInput"}),{components:v={},fullWidth:A=!1,inputComponent:_="input",label:y,multiline:E=!1,notched:S,slots:D={},type:R="text"}=m,I=ye(m,eX),P=tX(m),B=Za(),F=Yc({props:m,muiFormControl:B,states:["required"]}),M=U({},m,{color:F.color||"primary",disabled:F.disabled,error:F.error,focused:F.focused,formControl:B,fullWidth:A,hiddenLabel:F.hiddenLabel,multiline:E,size:F.size,type:R}),W=(c=(u=D.root)!=null?u:v.Root)!=null?c:nX,H=(p=(f=D.input)!=null?f:v.Input)!=null?p:rX;return L.jsx(f1,U({slots:{root:W,input:H},renderSuffix:K=>L.jsx(oX,{ownerState:M,className:P.notchedOutline,label:y!=null&&y!==""&&F.required?b||(b=L.jsxs(z.Fragment,{children:[y," ","*"]})):y,notched:typeof S<"u"?S:!!(K.startAdornment||K.filled||K.focused)}),fullWidth:A,inputComponent:_,multiline:E,ref:a,type:R},I,{classes:U({},P,{notchedOutline:null})}))});sP.muiName="Input";const aP=sP;function iX(t){return je("MuiSelect",t)}const sX=Fe("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Jd=sX;var VT;const aX=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],lX=fe("div",{name:"MuiSelect",slot:"Select",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[{[`&.${Jd.select}`]:o.select},{[`&.${Jd.select}`]:o[a.variant]},{[`&.${Jd.error}`]:o.error},{[`&.${Jd.multiple}`]:o.multiple}]}})(rP,{[`&.${Jd.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),cX=fe("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.icon,a.variant&&o[`icon${Ce(a.variant)}`],a.open&&o.iconOpen]}})(iP),dX=fe("input",{shouldForwardProp:t=>_W(t)&&t!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(t,o)=>o.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function UT(t,o){return typeof o=="object"&&o!==null?t===o:String(t)===String(o)}function uX(t){return t==null||typeof t=="string"&&!t.trim()}const hX=t=>{const{classes:o,variant:a,disabled:c,multiple:u,open:p,error:f}=t,b={select:["select",a,c&&"disabled",u&&"multiple",f&&"error"],icon:["icon",`icon${Ce(a)}`,p&&"iconOpen",c&&"disabled"],nativeInput:["nativeInput"]};return Ue(b,iX,o)},pX=z.forwardRef(function(o,a){const{"aria-describedby":c,"aria-label":u,autoFocus:p,autoWidth:f,children:b,className:m,defaultOpen:v,defaultValue:A,disabled:_,displayEmpty:y,error:E=!1,IconComponent:S,inputRef:D,labelId:R,MenuProps:I={},multiple:P,name:B,onBlur:F,onChange:M,onClose:W,onFocus:H,onOpen:K,open:Z,readOnly:Y,renderValue:te,SelectDisplayProps:ce={},tabIndex:re,value:ae,variant:ie="standard"}=o,pe=ye(o,aX),[oe,J]=gv({controlled:ae,default:A,name:"Select"}),[le,ge]=gv({controlled:Z,default:v,name:"Select"}),Te=z.useRef(null),Ie=z.useRef(null),[Qe,Me]=z.useState(null),{current:ve}=z.useRef(Z!=null),[be,Oe]=z.useState(),He=mn(a,D),Ne=z.useCallback(Se=>{Ie.current=Se,Se&&Me(Se)},[]),bt=Qe==null?void 0:Qe.parentNode;z.useImperativeHandle(He,()=>({focus:()=>{Ie.current.focus()},node:Te.current,value:oe}),[oe]),z.useEffect(()=>{v&&le&&Qe&&!ve&&(Oe(f?null:bt.clientWidth),Ie.current.focus())},[Qe,f]),z.useEffect(()=>{p&&Ie.current.focus()},[p]),z.useEffect(()=>{if(!R)return;const Se=lo(Ie.current).getElementById(R);if(Se){const tt=()=>{getSelection().isCollapsed&&Ie.current.focus()};return Se.addEventListener("click",tt),()=>{Se.removeEventListener("click",tt)}}},[R]);const Re=(Se,tt)=>{Se?K&&K(tt):W&&W(tt),ve||(Oe(f?null:bt.clientWidth),ge(Se))},ke=Se=>{Se.button===0&&(Se.preventDefault(),Ie.current.focus(),Re(!0,Se))},et=Se=>{Re(!1,Se)},dt=z.Children.toArray(b),zt=Se=>{const tt=dt.find(vt=>vt.props.value===Se.target.value);tt!==void 0&&(J(tt.props.value),M&&M(Se,tt))},Wt=Se=>tt=>{let vt;if(tt.currentTarget.hasAttribute("tabindex")){if(P){vt=Array.isArray(oe)?oe.slice():[];const un=oe.indexOf(Se.props.value);un===-1?vt.push(Se.props.value):vt.splice(un,1)}else vt=Se.props.value;if(Se.props.onClick&&Se.props.onClick(tt),oe!==vt&&(J(vt),M)){const un=tt.nativeEvent||tt,$t=new un.constructor(un.type,un);Object.defineProperty($t,"target",{writable:!0,value:{value:vt,name:B}}),M($t,Se)}P||Re(!1,tt)}},Ze=Se=>{Y||[" ","ArrowUp","ArrowDown","Enter"].indexOf(Se.key)!==-1&&(Se.preventDefault(),Re(!0,Se))},Ot=Qe!==null&&le,it=Se=>{!Ot&&F&&(Object.defineProperty(Se,"target",{writable:!0,value:{value:oe,name:B}}),F(Se))};delete pe["aria-invalid"];let We,st;const tn=[];let Ve=!1;(Cg({value:oe})||y)&&(te?We=te(oe):Ve=!0);const gt=dt.map(Se=>{if(!z.isValidElement(Se))return null;let tt;if(P){if(!Array.isArray(oe))throw new Error(Ts(2));tt=oe.some(vt=>UT(vt,Se.props.value)),tt&&Ve&&tn.push(Se.props.children)}else tt=UT(oe,Se.props.value),tt&&Ve&&(st=Se.props.children);return z.cloneElement(Se,{"aria-selected":tt?"true":"false",onClick:Wt(Se),onKeyUp:vt=>{vt.key===" "&&vt.preventDefault(),Se.props.onKeyUp&&Se.props.onKeyUp(vt)},role:"option",selected:tt,value:void 0,"data-value":Se.props.value})});Ve&&(P?tn.length===0?We=null:We=tn.reduce((Se,tt,vt)=>(Se.push(tt),vt<tn.length-1&&Se.push(", "),Se),[]):We=st);let yt=be;!f&&ve&&Qe&&(yt=bt.clientWidth);let bn;typeof re<"u"?bn=re:bn=_?null:0;const zn=ce.id||(B?`mui-component-select-${B}`:void 0),qe=U({},o,{variant:ie,value:oe,open:Ot,error:E}),xe=hX(qe);return L.jsxs(z.Fragment,{children:[L.jsx(lX,U({ref:Ne,tabIndex:bn,role:"button","aria-disabled":_?"true":void 0,"aria-expanded":Ot?"true":"false","aria-haspopup":"listbox","aria-label":u,"aria-labelledby":[R,zn].filter(Boolean).join(" ")||void 0,"aria-describedby":c,onKeyDown:Ze,onMouseDown:_||Y?null:ke,onBlur:it,onFocus:H},ce,{ownerState:qe,className:Ae(ce.className,xe.select,m),id:zn,children:uX(We)?VT||(VT=L.jsx("span",{className:"notranslate",children:"​"})):We})),L.jsx(dX,U({"aria-invalid":E,value:Array.isArray(oe)?oe.join(","):oe,name:B,ref:Te,"aria-hidden":!0,onChange:zt,tabIndex:-1,disabled:_,className:xe.nativeInput,autoFocus:p,ownerState:qe},pe)),L.jsx(cX,{as:S,className:xe.icon,ownerState:qe}),L.jsx(oP,U({id:`menu-${B||""}`,anchorEl:bt,open:Ot,onClose:et,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},I,{MenuListProps:U({"aria-labelledby":R,role:"listbox",disableListWrap:!0},I.MenuListProps),PaperProps:U({},I.PaperProps,{style:U({minWidth:yt},I.PaperProps!=null?I.PaperProps.style:null)}),children:gt}))]})}),fX=pX,gX=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],mX=t=>{const{classes:o}=t;return o},b1={name:"MuiSelect",overridesResolver:(t,o)=>o.root,shouldForwardProp:t=>cr(t)&&t!=="variant",slot:"Root"},bX=fe(X3,b1)(""),kX=fe(aP,b1)(""),wX=fe(K3,b1)(""),lP=z.forwardRef(function(o,a){const c=$e({name:"MuiSelect",props:o}),{autoWidth:u=!1,children:p,classes:f={},className:b,defaultOpen:m=!1,displayEmpty:v=!1,IconComponent:A=UK,id:_,input:y,inputProps:E,label:S,labelId:D,MenuProps:R,multiple:I=!1,native:P=!1,onClose:B,onOpen:F,open:M,renderValue:W,SelectDisplayProps:H,variant:K="outlined"}=c,Z=ye(c,gX),Y=P?YJ:fX,te=Za(),ce=Yc({props:c,muiFormControl:te,states:["variant","error"]}),re=ce.variant||K,ae=U({},c,{variant:re,classes:f}),ie=mX(ae),pe=y||{standard:L.jsx(bX,{ownerState:ae}),outlined:L.jsx(kX,{label:S,ownerState:ae}),filled:L.jsx(wX,{ownerState:ae})}[re],oe=mn(a,pe.ref);return L.jsx(z.Fragment,{children:z.cloneElement(pe,U({inputComponent:Y,inputProps:U({children:p,error:ce.error,IconComponent:A,variant:re,type:void 0,multiple:I},P?{id:_}:{autoWidth:u,defaultOpen:m,displayEmpty:v,labelId:D,MenuProps:R,onClose:B,onOpen:F,open:M,renderValue:W,SelectDisplayProps:U({id:_},H)},E,{classes:E?Co(ie,E.classes):ie},y?y.props.inputProps:{})},I&&P&&re==="outlined"?{notched:!0}:{},{ref:oe,className:Ae(pe.props.className,b)},!y&&{variant:re},Z))})});lP.muiName="Select";const vX=lP;function CX(t){return je("MuiSkeleton",t)}Fe("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const yX=["animation","className","component","height","style","variant","width"];let Ag=t=>t,HT,WT,GT,qT;const AX=t=>{const{classes:o,variant:a,animation:c,hasChildren:u,width:p,height:f}=t;return Ue({root:["root",a,c,u&&"withChildren",u&&!p&&"fitContent",u&&!f&&"heightAuto"]},CX,o)},_X=Ya(HT||(HT=Ag`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),xX=Ya(WT||(WT=Ag`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),EX=fe("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[a.variant],a.animation!==!1&&o[a.animation],a.hasChildren&&o.withChildren,a.hasChildren&&!a.width&&o.fitContent,a.hasChildren&&!a.height&&o.heightAuto]}})(({theme:t,ownerState:o})=>{const a=CW(t.shape.borderRadius)||"px",c=yW(t.shape.borderRadius);return U({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:cn(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},o.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${c}${a}/${Math.round(c/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},o.variant==="circular"&&{borderRadius:"50%"},o.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},o.hasChildren&&{"& > *":{visibility:"hidden"}},o.hasChildren&&!o.width&&{maxWidth:"fit-content"},o.hasChildren&&!o.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&Ju(GT||(GT=Ag`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),_X),({ownerState:t,theme:o})=>t.animation==="wave"&&Ju(qT||(qT=Ag`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),xX,(o.vars||o).palette.action.hover)),SX=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiSkeleton"}),{animation:u="pulse",className:p,component:f="span",height:b,style:m,variant:v="text",width:A}=c,_=ye(c,yX),y=U({},c,{animation:u,component:f,variant:v,hasChildren:!!_.children}),E=AX(y);return L.jsx(EX,U({as:f,ref:a,className:Ae(E.root,p),ownerState:y},_,{style:U({width:A,height:b},m)}))}),k1=SX;function DX(t){return je("MuiTooltip",t)}const TX=Fe("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),ks=TX,IX=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function MX(t){return Math.round(t*1e5)/1e5}const PX=t=>{const{classes:o,disableInteractive:a,arrow:c,touch:u,placement:p}=t,f={popper:["popper",!a&&"popperInteractive",c&&"popperArrow"],tooltip:["tooltip",c&&"tooltipArrow",u&&"touch",`tooltipPlacement${Ce(p.split("-")[0])}`],arrow:["arrow"]};return Ue(f,DX,o)},BX=fe(j3,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.popper,!a.disableInteractive&&o.popperInteractive,a.arrow&&o.popperArrow,!a.open&&o.popperClose]}})(({theme:t,ownerState:o,open:a})=>U({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!a&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${ks.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${ks.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${ks.arrow}`]:U({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${ks.arrow}`]:U({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),NX=fe("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.tooltip,a.touch&&o.touch,a.arrow&&o.tooltipArrow,o[`tooltipPlacement${Ce(a.placement.split("-")[0])}`]]}})(({theme:t,ownerState:o})=>U({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:cn(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${MX(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${ks.popper}[data-popper-placement*="left"] &`]:U({transformOrigin:"right center"},o.isRtl?U({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):U({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${ks.popper}[data-popper-placement*="right"] &`]:U({transformOrigin:"left center"},o.isRtl?U({marginRight:"14px"},o.touch&&{marginRight:"24px"}):U({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${ks.popper}[data-popper-placement*="top"] &`]:U({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${ks.popper}[data-popper-placement*="bottom"] &`]:U({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})})),RX=fe("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,o)=>o.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:cn(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let gf=!1,iw=null,Xd={x:0,y:0};function mf(t,o){return a=>{o&&o(a),t(a)}}const OX=z.forwardRef(function(o,a){var c,u,p,f,b,m,v,A,_,y,E,S,D,R,I,P,B,F,M;const W=$e({props:o,name:"MuiTooltip"}),{arrow:H=!1,children:K,components:Z={},componentsProps:Y={},describeChild:te=!1,disableFocusListener:ce=!1,disableHoverListener:re=!1,disableInteractive:ae=!1,disableTouchListener:ie=!1,enterDelay:pe=100,enterNextDelay:oe=0,enterTouchDelay:J=700,followCursor:le=!1,id:ge,leaveDelay:Te=0,leaveTouchDelay:Ie=1500,onClose:Qe,onOpen:Me,open:ve,placement:be="bottom",PopperComponent:Oe,PopperProps:He={},slotProps:Ne={},slots:bt={},title:Re,TransitionComponent:ke=dn,TransitionProps:et}=W,dt=ye(W,IX),zt=Qa(),Wt=zt.direction==="rtl",[Ze,Ot]=z.useState(),[it,We]=z.useState(null),st=z.useRef(!1),tn=ae||le,Ve=z.useRef(),gt=z.useRef(),yt=z.useRef(),bn=z.useRef(),[zn,qe]=gv({controlled:ve,default:!1,name:"Tooltip",state:"open"});let xe=zn;const Se=OC(ge),tt=z.useRef(),vt=z.useCallback(()=>{tt.current!==void 0&&(document.body.style.WebkitUserSelect=tt.current,tt.current=void 0),clearTimeout(bn.current)},[]);z.useEffect(()=>()=>{clearTimeout(Ve.current),clearTimeout(gt.current),clearTimeout(yt.current),vt()},[vt]);const un=Ge=>{clearTimeout(iw),gf=!0,qe(!0),Me&&!xe&&Me(Ge)},$t=Sa(Ge=>{clearTimeout(iw),iw=setTimeout(()=>{gf=!1},800+Te),qe(!1),Qe&&xe&&Qe(Ge),clearTimeout(Ve.current),Ve.current=setTimeout(()=>{st.current=!1},zt.transitions.duration.shortest)}),Tn=Ge=>{st.current&&Ge.type!=="touchstart"||(Ze&&Ze.removeAttribute("title"),clearTimeout(gt.current),clearTimeout(yt.current),pe||gf&&oe?gt.current=setTimeout(()=>{un(Ge)},gf?oe:pe):un(Ge))},Rs=Ge=>{clearTimeout(gt.current),clearTimeout(yt.current),yt.current=setTimeout(()=>{$t(Ge)},Te)},{isFocusVisibleRef:Os,onBlur:Ho,onFocus:ur,ref:li}=LC(),[,Ja]=z.useState(!1),Ls=Ge=>{Ho(Ge),Os.current===!1&&(Ja(!1),Rs(Ge))},Xa=Ge=>{Ze||Ot(Ge.currentTarget),ur(Ge),Os.current===!0&&(Ja(!0),Tn(Ge))},el=Ge=>{st.current=!0;const Fn=K.props;Fn.onTouchStart&&Fn.onTouchStart(Ge)},In=Tn,tl=Rs,ci=Ge=>{el(Ge),clearTimeout(yt.current),clearTimeout(Ve.current),vt(),tt.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",bn.current=setTimeout(()=>{document.body.style.WebkitUserSelect=tt.current,Tn(Ge)},J)},xo=Ge=>{K.props.onTouchEnd&&K.props.onTouchEnd(Ge),vt(),clearTimeout(yt.current),yt.current=setTimeout(()=>{$t(Ge)},Ie)};z.useEffect(()=>{if(!xe)return;function Ge(Fn){(Fn.key==="Escape"||Fn.key==="Esc")&&$t(Fn)}return document.addEventListener("keydown",Ge),()=>{document.removeEventListener("keydown",Ge)}},[$t,xe]);const nl=mn(K.ref,li,Ot,a);!Re&&Re!==0&&(xe=!1);const zs=z.useRef(),Zc=Ge=>{const Fn=K.props;Fn.onMouseMove&&Fn.onMouseMove(Ge),Xd={x:Ge.clientX,y:Ge.clientY},zs.current&&zs.current.update()},Wo={},js=typeof Re=="string";te?(Wo.title=!xe&&js&&!re?Re:null,Wo["aria-describedby"]=xe?Se:null):(Wo["aria-label"]=js?Re:null,Wo["aria-labelledby"]=xe&&!js?Se:null);const kn=U({},Wo,dt,K.props,{className:Ae(dt.className,K.props.className),onTouchStart:el,ref:nl},le?{onMouseMove:Zc}:{}),Go={};ie||(kn.onTouchStart=ci,kn.onTouchEnd=xo),re||(kn.onMouseOver=mf(In,kn.onMouseOver),kn.onMouseLeave=mf(tl,kn.onMouseLeave),tn||(Go.onMouseOver=In,Go.onMouseLeave=tl)),ce||(kn.onFocus=mf(Xa,kn.onFocus),kn.onBlur=mf(Ls,kn.onBlur),tn||(Go.onFocus=Xa,Go.onBlur=Ls));const Jc=z.useMemo(()=>{var Ge;let Fn=[{name:"arrow",enabled:!!it,options:{element:it,padding:4}}];return(Ge=He.popperOptions)!=null&&Ge.modifiers&&(Fn=Fn.concat(He.popperOptions.modifiers)),U({},He.popperOptions,{modifiers:Fn})},[it,He]),ho=U({},W,{isRtl:Wt,arrow:H,disableInteractive:tn,placement:be,PopperComponentProp:Oe,touch:st.current}),Fs=PX(ho),ol=(c=(u=bt.popper)!=null?u:Z.Popper)!=null?c:BX,jn=(p=(f=(b=bt.transition)!=null?b:Z.Transition)!=null?f:ke)!=null?p:dn,$i=(m=(v=bt.tooltip)!=null?v:Z.Tooltip)!=null?m:NX,$s=(A=(_=bt.arrow)!=null?_:Z.Arrow)!=null?A:RX,rl=lu(ol,U({},He,(y=Ne.popper)!=null?y:Y.popper,{className:Ae(Fs.popper,He==null?void 0:He.className,(E=(S=Ne.popper)!=null?S:Y.popper)==null?void 0:E.className)}),ho),il=lu(jn,U({},et,(D=Ne.transition)!=null?D:Y.transition),ho),hr=lu($i,U({},(R=Ne.tooltip)!=null?R:Y.tooltip,{className:Ae(Fs.tooltip,(I=(P=Ne.tooltip)!=null?P:Y.tooltip)==null?void 0:I.className)}),ho),sl=lu($s,U({},(B=Ne.arrow)!=null?B:Y.arrow,{className:Ae(Fs.arrow,(F=(M=Ne.arrow)!=null?M:Y.arrow)==null?void 0:F.className)}),ho);return L.jsxs(z.Fragment,{children:[z.cloneElement(K,kn),L.jsx(ol,U({as:Oe??j3,placement:be,anchorEl:le?{getBoundingClientRect:()=>({top:Xd.y,left:Xd.x,right:Xd.x,bottom:Xd.y,width:0,height:0})}:Ze,popperRef:zs,open:Ze?xe:!1,id:Se,transition:!0},Go,rl,{popperOptions:Jc,children:({TransitionProps:Ge})=>L.jsx(jn,U({timeout:zt.transitions.duration.shorter},Ge,il,{children:L.jsxs($i,U({},hr,{children:[Re,H?L.jsx($s,U({},sl,{ref:We})):null]}))}))}))]})}),io=OX,LX=QH({createStyledComponent:fe("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,o)=>o.root}),useThemeProps:t=>$e({props:t,name:"MuiStack"})}),Dt=LX;function zX(t){return je("MuiTextField",t)}Fe("MuiTextField",["root"]);const jX=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],FX={standard:X3,filled:K3,outlined:aP},$X=t=>{const{classes:o}=t;return Ue({root:["root"]},zX,o)},VX=fe(dZ,{name:"MuiTextField",slot:"Root",overridesResolver:(t,o)=>o.root})({}),UX=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiTextField"}),{autoComplete:u,autoFocus:p=!1,children:f,className:b,color:m="primary",defaultValue:v,disabled:A=!1,error:_=!1,FormHelperTextProps:y,fullWidth:E=!1,helperText:S,id:D,InputLabelProps:R,inputProps:I,InputProps:P,inputRef:B,label:F,maxRows:M,minRows:W,multiline:H=!1,name:K,onBlur:Z,onChange:Y,onClick:te,onFocus:ce,placeholder:re,required:ae=!1,rows:ie,select:pe=!1,SelectProps:oe,type:J,value:le,variant:ge="outlined"}=c,Te=ye(c,jX),Ie=U({},c,{autoFocus:p,color:m,disabled:A,error:_,fullWidth:E,multiline:H,required:ae,select:pe,variant:ge}),Qe=$X(Ie),Me={};ge==="outlined"&&(R&&typeof R.shrink<"u"&&(Me.notched=R.shrink),Me.label=F),pe&&((!oe||!oe.native)&&(Me.id=void 0),Me["aria-describedby"]=void 0);const ve=OC(D),be=S&&ve?`${ve}-helper-text`:void 0,Oe=F&&ve?`${ve}-label`:void 0,He=FX[ge],Ne=L.jsx(He,U({"aria-describedby":be,autoComplete:u,autoFocus:p,defaultValue:v,fullWidth:E,multiline:H,name:K,rows:ie,maxRows:M,minRows:W,type:J,value:le,id:ve,inputRef:B,onBlur:Z,onChange:Y,onFocus:ce,onClick:te,placeholder:re,inputProps:I},Me,P));return L.jsxs(VX,U({className:Ae(Qe.root,b),disabled:A,error:_,fullWidth:E,ref:a,required:ae,color:m,variant:ge,ownerState:Ie},Te,{children:[F!=null&&F!==""&&L.jsx(GZ,U({htmlFor:ve,id:Oe},R,{children:F})),pe?L.jsx(vX,U({"aria-describedby":be,id:ve,labelId:Oe,value:le,input:Ne},oe,{children:f})):Ne,S&&L.jsx(bZ,U({id:be},y,{children:S}))]}))}),_g=UX;function HX(t){return je("MuiToggleButton",t)}const WX=Fe("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),KT=WX,GX=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],qX=t=>{const{classes:o,fullWidth:a,selected:c,disabled:u,size:p,color:f}=t,b={root:["root",c&&"selected",u&&"disabled",a&&"fullWidth",`size${Ce(p)}`,f]};return Ue(b,HX,o)},KX=fe(mh,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[`size${Ce(a.size)}`]]}})(({theme:t,ownerState:o})=>{let a=o.color==="standard"?t.palette.text.primary:t.palette[o.color].main,c;return t.vars&&(a=o.color==="standard"?t.vars.palette.text.primary:t.vars.palette[o.color].main,c=o.color==="standard"?t.vars.palette.text.primaryChannel:t.vars.palette[o.color].mainChannel),U({},t.typography.button,{borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active},o.fullWidth&&{width:"100%"},{[`&.${KT.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:cn(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${KT.selected}`]:{color:a,backgroundColor:t.vars?`rgba(${c} / ${t.vars.palette.action.selectedOpacity})`:cn(a,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${c} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:cn(a,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${c} / ${t.vars.palette.action.selectedOpacity})`:cn(a,t.palette.action.selectedOpacity)}}}},o.size==="small"&&{padding:7,fontSize:t.typography.pxToRem(13)},o.size==="large"&&{padding:15,fontSize:t.typography.pxToRem(15)})}),YX=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiToggleButton"}),{children:u,className:p,color:f="standard",disabled:b=!1,disableFocusRipple:m=!1,fullWidth:v=!1,onChange:A,onClick:_,selected:y,size:E="medium",value:S}=c,D=ye(c,GX),R=U({},c,{color:f,disabled:b,disableFocusRipple:m,fullWidth:v,size:E}),I=qX(R),P=B=>{_&&(_(B,S),B.defaultPrevented)||A&&A(B,S)};return L.jsx(KX,U({className:Ae(I.root,p),disabled:b,focusRipple:!m,ref:a,onClick:P,onChange:A,value:S,ownerState:R,"aria-pressed":y},D,{children:u}))}),sw=YX;function QX(t,o){return o===void 0||t===void 0?!1:Array.isArray(o)?o.indexOf(t)>=0:t===o}function ZX(t){return je("MuiToggleButtonGroup",t)}const JX=Fe("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),Ai=JX,XX=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],eee=t=>{const{classes:o,orientation:a,fullWidth:c,disabled:u}=t,p={root:["root",a==="vertical"&&"vertical",c&&"fullWidth"],grouped:["grouped",`grouped${Ce(a)}`,u&&"disabled"]};return Ue(p,ZX,o)},tee=fe("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[{[`& .${Ai.grouped}`]:o.grouped},{[`& .${Ai.grouped}`]:o[`grouped${Ce(a.orientation)}`]},o.root,a.orientation==="vertical"&&o.vertical,a.fullWidth&&o.fullWidth]}})(({ownerState:t,theme:o})=>U({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},t.orientation==="vertical"&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},{[`& .${Ai.grouped}`]:U({},t.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${Ai.selected} + .${Ai.grouped}.${Ai.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${Ai.selected} + .${Ai.grouped}.${Ai.selected}`]:{borderTop:0,marginTop:0}})})),nee=z.forwardRef(function(o,a){const c=$e({props:o,name:"MuiToggleButtonGroup"}),{children:u,className:p,color:f="standard",disabled:b=!1,exclusive:m=!1,fullWidth:v=!1,onChange:A,orientation:_="horizontal",size:y="medium",value:E}=c,S=ye(c,XX),D=U({},c,{disabled:b,fullWidth:v,orientation:_,size:y}),R=eee(D),I=(B,F)=>{if(!A)return;const M=E&&E.indexOf(F);let W;E&&M>=0?(W=E.slice(),W.splice(M,1)):W=E?E.concat(F):[F],A(B,W)},P=(B,F)=>{A&&A(B,E===F?null:F)};return L.jsx(tee,U({role:"group",className:Ae(R.root,p),ref:a,ownerState:D},S,{children:z.Children.map(u,B=>z.isValidElement(B)?z.cloneElement(B,{className:Ae(R.grouped,B.props.className),onChange:m?P:I,selected:B.props.selected===void 0?QX(B.props.value,E):B.props.selected,size:B.props.size||y,fullWidth:v,color:B.props.color||f,disabled:B.props.disabled||b}):null)}))}),oee=nee;function cP(t,o){return function(){return t.apply(o,arguments)}}const{toString:ree}=Object.prototype,{getPrototypeOf:w1}=Object,Um=(t=>o=>{const a=ree.call(o);return t[a]||(t[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),ai=t=>(t=t.toLowerCase(),o=>Um(o)===t),Hm=t=>o=>typeof o===t,{isArray:Qc}=Array,rh=Hm("undefined");function iee(t){return t!==null&&!rh(t)&&t.constructor!==null&&!rh(t.constructor)&&or(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const dP=ai("ArrayBuffer");function see(t){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(t):o=t&&t.buffer&&dP(t.buffer),o}const aee=Hm("string"),or=Hm("function"),uP=Hm("number"),Wm=t=>t!==null&&typeof t=="object",lee=t=>t===!0||t===!1,Ff=t=>{if(Um(t)!=="object")return!1;const o=w1(t);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},cee=ai("Date"),dee=ai("File"),uee=ai("Blob"),hee=ai("FileList"),pee=t=>Wm(t)&&or(t.pipe),fee=t=>{let o;return t&&(typeof FormData=="function"&&t instanceof FormData||or(t.append)&&((o=Um(t))==="formdata"||o==="object"&&or(t.toString)&&t.toString()==="[object FormData]"))},gee=ai("URLSearchParams"),mee=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function bh(t,o,{allOwnKeys:a=!1}={}){if(t===null||typeof t>"u")return;let c,u;if(typeof t!="object"&&(t=[t]),Qc(t))for(c=0,u=t.length;c<u;c++)o.call(null,t[c],c,t);else{const p=a?Object.getOwnPropertyNames(t):Object.keys(t),f=p.length;let b;for(c=0;c<f;c++)b=p[c],o.call(null,t[b],b,t)}}function hP(t,o){o=o.toLowerCase();const a=Object.keys(t);let c=a.length,u;for(;c-- >0;)if(u=a[c],o===u.toLowerCase())return u;return null}const pP=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),fP=t=>!rh(t)&&t!==pP;function Tv(){const{caseless:t}=fP(this)&&this||{},o={},a=(c,u)=>{const p=t&&hP(o,u)||u;Ff(o[p])&&Ff(c)?o[p]=Tv(o[p],c):Ff(c)?o[p]=Tv({},c):Qc(c)?o[p]=c.slice():o[p]=c};for(let c=0,u=arguments.length;c<u;c++)arguments[c]&&bh(arguments[c],a);return o}const bee=(t,o,a,{allOwnKeys:c}={})=>(bh(o,(u,p)=>{a&&or(u)?t[p]=cP(u,a):t[p]=u},{allOwnKeys:c}),t),kee=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),wee=(t,o,a,c)=>{t.prototype=Object.create(o.prototype,c),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:o.prototype}),a&&Object.assign(t.prototype,a)},vee=(t,o,a,c)=>{let u,p,f;const b={};if(o=o||{},t==null)return o;do{for(u=Object.getOwnPropertyNames(t),p=u.length;p-- >0;)f=u[p],(!c||c(f,t,o))&&!b[f]&&(o[f]=t[f],b[f]=!0);t=a!==!1&&w1(t)}while(t&&(!a||a(t,o))&&t!==Object.prototype);return o},Cee=(t,o,a)=>{t=String(t),(a===void 0||a>t.length)&&(a=t.length),a-=o.length;const c=t.indexOf(o,a);return c!==-1&&c===a},yee=t=>{if(!t)return null;if(Qc(t))return t;let o=t.length;if(!uP(o))return null;const a=new Array(o);for(;o-- >0;)a[o]=t[o];return a},Aee=(t=>o=>t&&o instanceof t)(typeof Uint8Array<"u"&&w1(Uint8Array)),_ee=(t,o)=>{const c=(t&&t[Symbol.iterator]).call(t);let u;for(;(u=c.next())&&!u.done;){const p=u.value;o.call(t,p[0],p[1])}},xee=(t,o)=>{let a;const c=[];for(;(a=t.exec(o))!==null;)c.push(a);return c},Eee=ai("HTMLFormElement"),See=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(a,c,u){return c.toUpperCase()+u}),YT=(({hasOwnProperty:t})=>(o,a)=>t.call(o,a))(Object.prototype),Dee=ai("RegExp"),gP=(t,o)=>{const a=Object.getOwnPropertyDescriptors(t),c={};bh(a,(u,p)=>{o(u,p,t)!==!1&&(c[p]=u)}),Object.defineProperties(t,c)},Tee=t=>{gP(t,(o,a)=>{if(or(t)&&["arguments","caller","callee"].indexOf(a)!==-1)return!1;const c=t[a];if(or(c)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+a+"'")})}})},Iee=(t,o)=>{const a={},c=u=>{u.forEach(p=>{a[p]=!0})};return Qc(t)?c(t):c(String(t).split(o)),a},Mee=()=>{},Pee=(t,o)=>(t=+t,Number.isFinite(t)?t:o),aw="abcdefghijklmnopqrstuvwxyz",QT="0123456789",mP={DIGIT:QT,ALPHA:aw,ALPHA_DIGIT:aw+aw.toUpperCase()+QT},Bee=(t=16,o=mP.ALPHA_DIGIT)=>{let a="";const{length:c}=o;for(;t--;)a+=o[Math.random()*c|0];return a};function Nee(t){return!!(t&&or(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Ree=t=>{const o=new Array(10),a=(c,u)=>{if(Wm(c)){if(o.indexOf(c)>=0)return;if(!("toJSON"in c)){o[u]=c;const p=Qc(c)?[]:{};return bh(c,(f,b)=>{const m=a(f,u+1);!rh(m)&&(p[b]=m)}),o[u]=void 0,p}}return c};return a(t,0)},Oee=ai("AsyncFunction"),Lee=t=>t&&(Wm(t)||or(t))&&or(t.then)&&or(t.catch),se={isArray:Qc,isArrayBuffer:dP,isBuffer:iee,isFormData:fee,isArrayBufferView:see,isString:aee,isNumber:uP,isBoolean:lee,isObject:Wm,isPlainObject:Ff,isUndefined:rh,isDate:cee,isFile:dee,isBlob:uee,isRegExp:Dee,isFunction:or,isStream:pee,isURLSearchParams:gee,isTypedArray:Aee,isFileList:hee,forEach:bh,merge:Tv,extend:bee,trim:mee,stripBOM:kee,inherits:wee,toFlatObject:vee,kindOf:Um,kindOfTest:ai,endsWith:Cee,toArray:yee,forEachEntry:_ee,matchAll:xee,isHTMLForm:Eee,hasOwnProperty:YT,hasOwnProp:YT,reduceDescriptors:gP,freezeMethods:Tee,toObjectSet:Iee,toCamelCase:See,noop:Mee,toFiniteNumber:Pee,findKey:hP,global:pP,isContextDefined:fP,ALPHABET:mP,generateString:Bee,isSpecCompliantForm:Nee,toJSONObject:Ree,isAsyncFn:Oee,isThenable:Lee};function pt(t,o,a,c,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",o&&(this.code=o),a&&(this.config=a),c&&(this.request=c),u&&(this.response=u)}se.inherits(pt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:se.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const bP=pt.prototype,kP={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{kP[t]={value:t}});Object.defineProperties(pt,kP);Object.defineProperty(bP,"isAxiosError",{value:!0});pt.from=(t,o,a,c,u,p)=>{const f=Object.create(bP);return se.toFlatObject(t,f,function(m){return m!==Error.prototype},b=>b!=="isAxiosError"),pt.call(f,t.message,o,a,c,u),f.cause=t,f.name=t.name,p&&Object.assign(f,p),f};const zee=null;function Iv(t){return se.isPlainObject(t)||se.isArray(t)}function wP(t){return se.endsWith(t,"[]")?t.slice(0,-2):t}function ZT(t,o,a){return t?t.concat(o).map(function(u,p){return u=wP(u),!a&&p?"["+u+"]":u}).join(a?".":""):o}function jee(t){return se.isArray(t)&&!t.some(Iv)}const Fee=se.toFlatObject(se,{},null,function(o){return/^is[A-Z]/.test(o)});function Gm(t,o,a){if(!se.isObject(t))throw new TypeError("target must be an object");o=o||new FormData,a=se.toFlatObject(a,{metaTokens:!0,dots:!1,indexes:!1},!1,function(D,R){return!se.isUndefined(R[D])});const c=a.metaTokens,u=a.visitor||A,p=a.dots,f=a.indexes,m=(a.Blob||typeof Blob<"u"&&Blob)&&se.isSpecCompliantForm(o);if(!se.isFunction(u))throw new TypeError("visitor must be a function");function v(S){if(S===null)return"";if(se.isDate(S))return S.toISOString();if(!m&&se.isBlob(S))throw new pt("Blob is not supported. Use a Buffer instead.");return se.isArrayBuffer(S)||se.isTypedArray(S)?m&&typeof Blob=="function"?new Blob([S]):Buffer.from(S):S}function A(S,D,R){let I=S;if(S&&!R&&typeof S=="object"){if(se.endsWith(D,"{}"))D=c?D:D.slice(0,-2),S=JSON.stringify(S);else if(se.isArray(S)&&jee(S)||(se.isFileList(S)||se.endsWith(D,"[]"))&&(I=se.toArray(S)))return D=wP(D),I.forEach(function(B,F){!(se.isUndefined(B)||B===null)&&o.append(f===!0?ZT([D],F,p):f===null?D:D+"[]",v(B))}),!1}return Iv(S)?!0:(o.append(ZT(R,D,p),v(S)),!1)}const _=[],y=Object.assign(Fee,{defaultVisitor:A,convertValue:v,isVisitable:Iv});function E(S,D){if(!se.isUndefined(S)){if(_.indexOf(S)!==-1)throw Error("Circular reference detected in "+D.join("."));_.push(S),se.forEach(S,function(I,P){(!(se.isUndefined(I)||I===null)&&u.call(o,I,se.isString(P)?P.trim():P,D,y))===!0&&E(I,D?D.concat(P):[P])}),_.pop()}}if(!se.isObject(t))throw new TypeError("data must be an object");return E(t),o}function JT(t){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(c){return o[c]})}function v1(t,o){this._pairs=[],t&&Gm(t,this,o)}const vP=v1.prototype;vP.append=function(o,a){this._pairs.push([o,a])};vP.toString=function(o){const a=o?function(c){return o.call(this,c,JT)}:JT;return this._pairs.map(function(u){return a(u[0])+"="+a(u[1])},"").join("&")};function $ee(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function CP(t,o,a){if(!o)return t;const c=a&&a.encode||$ee,u=a&&a.serialize;let p;if(u?p=u(o,a):p=se.isURLSearchParams(o)?o.toString():new v1(o,a).toString(c),p){const f=t.indexOf("#");f!==-1&&(t=t.slice(0,f)),t+=(t.indexOf("?")===-1?"?":"&")+p}return t}class Vee{constructor(){this.handlers=[]}use(o,a,c){return this.handlers.push({fulfilled:o,rejected:a,synchronous:c?c.synchronous:!1,runWhen:c?c.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){se.forEach(this.handlers,function(c){c!==null&&o(c)})}}const XT=Vee,yP={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Uee=typeof URLSearchParams<"u"?URLSearchParams:v1,Hee=typeof FormData<"u"?FormData:null,Wee=typeof Blob<"u"?Blob:null,Gee=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),qee=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Xr={isBrowser:!0,classes:{URLSearchParams:Uee,FormData:Hee,Blob:Wee},isStandardBrowserEnv:Gee,isStandardBrowserWebWorkerEnv:qee,protocols:["http","https","file","blob","url","data"]};function Kee(t,o){return Gm(t,new Xr.classes.URLSearchParams,Object.assign({visitor:function(a,c,u,p){return Xr.isNode&&se.isBuffer(a)?(this.append(c,a.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)}},o))}function Yee(t){return se.matchAll(/\w+|\[(\w*)]/g,t).map(o=>o[0]==="[]"?"":o[1]||o[0])}function Qee(t){const o={},a=Object.keys(t);let c;const u=a.length;let p;for(c=0;c<u;c++)p=a[c],o[p]=t[p];return o}function AP(t){function o(a,c,u,p){let f=a[p++];const b=Number.isFinite(+f),m=p>=a.length;return f=!f&&se.isArray(u)?u.length:f,m?(se.hasOwnProp(u,f)?u[f]=[u[f],c]:u[f]=c,!b):((!u[f]||!se.isObject(u[f]))&&(u[f]=[]),o(a,c,u[f],p)&&se.isArray(u[f])&&(u[f]=Qee(u[f])),!b)}if(se.isFormData(t)&&se.isFunction(t.entries)){const a={};return se.forEachEntry(t,(c,u)=>{o(Yee(c),u,a,0)}),a}return null}const Zee={"Content-Type":void 0};function Jee(t,o,a){if(se.isString(t))try{return(o||JSON.parse)(t),se.trim(t)}catch(c){if(c.name!=="SyntaxError")throw c}return(a||JSON.stringify)(t)}const qm={transitional:yP,adapter:["xhr","http"],transformRequest:[function(o,a){const c=a.getContentType()||"",u=c.indexOf("application/json")>-1,p=se.isObject(o);if(p&&se.isHTMLForm(o)&&(o=new FormData(o)),se.isFormData(o))return u&&u?JSON.stringify(AP(o)):o;if(se.isArrayBuffer(o)||se.isBuffer(o)||se.isStream(o)||se.isFile(o)||se.isBlob(o))return o;if(se.isArrayBufferView(o))return o.buffer;if(se.isURLSearchParams(o))return a.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let b;if(p){if(c.indexOf("application/x-www-form-urlencoded")>-1)return Kee(o,this.formSerializer).toString();if((b=se.isFileList(o))||c.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Gm(b?{"files[]":o}:o,m&&new m,this.formSerializer)}}return p||u?(a.setContentType("application/json",!1),Jee(o)):o}],transformResponse:[function(o){const a=this.transitional||qm.transitional,c=a&&a.forcedJSONParsing,u=this.responseType==="json";if(o&&se.isString(o)&&(c&&!this.responseType||u)){const f=!(a&&a.silentJSONParsing)&&u;try{return JSON.parse(o)}catch(b){if(f)throw b.name==="SyntaxError"?pt.from(b,pt.ERR_BAD_RESPONSE,this,null,this.response):b}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xr.classes.FormData,Blob:Xr.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};se.forEach(["delete","get","head"],function(o){qm.headers[o]={}});se.forEach(["post","put","patch"],function(o){qm.headers[o]=se.merge(Zee)});const C1=qm,Xee=se.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ete=t=>{const o={};let a,c,u;return t&&t.split(`
`).forEach(function(f){u=f.indexOf(":"),a=f.substring(0,u).trim().toLowerCase(),c=f.substring(u+1).trim(),!(!a||o[a]&&Xee[a])&&(a==="set-cookie"?o[a]?o[a].push(c):o[a]=[c]:o[a]=o[a]?o[a]+", "+c:c)}),o},eI=Symbol("internals");function eu(t){return t&&String(t).trim().toLowerCase()}function $f(t){return t===!1||t==null?t:se.isArray(t)?t.map($f):String(t)}function tte(t){const o=Object.create(null),a=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let c;for(;c=a.exec(t);)o[c[1]]=c[2];return o}const nte=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function lw(t,o,a,c,u){if(se.isFunction(c))return c.call(this,o,a);if(u&&(o=a),!!se.isString(o)){if(se.isString(c))return o.indexOf(c)!==-1;if(se.isRegExp(c))return c.test(o)}}function ote(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,a,c)=>a.toUpperCase()+c)}function rte(t,o){const a=se.toCamelCase(" "+o);["get","set","has"].forEach(c=>{Object.defineProperty(t,c+a,{value:function(u,p,f){return this[c].call(this,o,u,p,f)},configurable:!0})})}class Km{constructor(o){o&&this.set(o)}set(o,a,c){const u=this;function p(b,m,v){const A=eu(m);if(!A)throw new Error("header name must be a non-empty string");const _=se.findKey(u,A);(!_||u[_]===void 0||v===!0||v===void 0&&u[_]!==!1)&&(u[_||m]=$f(b))}const f=(b,m)=>se.forEach(b,(v,A)=>p(v,A,m));return se.isPlainObject(o)||o instanceof this.constructor?f(o,a):se.isString(o)&&(o=o.trim())&&!nte(o)?f(ete(o),a):o!=null&&p(a,o,c),this}get(o,a){if(o=eu(o),o){const c=se.findKey(this,o);if(c){const u=this[c];if(!a)return u;if(a===!0)return tte(u);if(se.isFunction(a))return a.call(this,u,c);if(se.isRegExp(a))return a.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,a){if(o=eu(o),o){const c=se.findKey(this,o);return!!(c&&this[c]!==void 0&&(!a||lw(this,this[c],c,a)))}return!1}delete(o,a){const c=this;let u=!1;function p(f){if(f=eu(f),f){const b=se.findKey(c,f);b&&(!a||lw(c,c[b],b,a))&&(delete c[b],u=!0)}}return se.isArray(o)?o.forEach(p):p(o),u}clear(o){const a=Object.keys(this);let c=a.length,u=!1;for(;c--;){const p=a[c];(!o||lw(this,this[p],p,o,!0))&&(delete this[p],u=!0)}return u}normalize(o){const a=this,c={};return se.forEach(this,(u,p)=>{const f=se.findKey(c,p);if(f){a[f]=$f(u),delete a[p];return}const b=o?ote(p):String(p).trim();b!==p&&delete a[p],a[b]=$f(u),c[b]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const a=Object.create(null);return se.forEach(this,(c,u)=>{c!=null&&c!==!1&&(a[u]=o&&se.isArray(c)?c.join(", "):c)}),a}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,a])=>o+": "+a).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...a){const c=new this(o);return a.forEach(u=>c.set(u)),c}static accessor(o){const c=(this[eI]=this[eI]={accessors:{}}).accessors,u=this.prototype;function p(f){const b=eu(f);c[b]||(rte(u,f),c[b]=!0)}return se.isArray(o)?o.forEach(p):p(o),this}}Km.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);se.freezeMethods(Km.prototype);se.freezeMethods(Km);const Mi=Km;function cw(t,o){const a=this||C1,c=o||a,u=Mi.from(c.headers);let p=c.data;return se.forEach(t,function(b){p=b.call(a,p,u.normalize(),o?o.status:void 0)}),u.normalize(),p}function _P(t){return!!(t&&t.__CANCEL__)}function kh(t,o,a){pt.call(this,t??"canceled",pt.ERR_CANCELED,o,a),this.name="CanceledError"}se.inherits(kh,pt,{__CANCEL__:!0});function ite(t,o,a){const c=a.config.validateStatus;!a.status||!c||c(a.status)?t(a):o(new pt("Request failed with status code "+a.status,[pt.ERR_BAD_REQUEST,pt.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))}const ste=Xr.isStandardBrowserEnv?function(){return{write:function(a,c,u,p,f,b){const m=[];m.push(a+"="+encodeURIComponent(c)),se.isNumber(u)&&m.push("expires="+new Date(u).toGMTString()),se.isString(p)&&m.push("path="+p),se.isString(f)&&m.push("domain="+f),b===!0&&m.push("secure"),document.cookie=m.join("; ")},read:function(a){const c=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return c?decodeURIComponent(c[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function ate(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function lte(t,o){return o?t.replace(/\/+$/,"")+"/"+o.replace(/^\/+/,""):t}function xP(t,o){return t&&!ate(o)?lte(t,o):o}const cte=Xr.isStandardBrowserEnv?function(){const o=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");let c;function u(p){let f=p;return o&&(a.setAttribute("href",f),f=a.href),a.setAttribute("href",f),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return c=u(window.location.href),function(f){const b=se.isString(f)?u(f):f;return b.protocol===c.protocol&&b.host===c.host}}():function(){return function(){return!0}}();function dte(t){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return o&&o[1]||""}function ute(t,o){t=t||10;const a=new Array(t),c=new Array(t);let u=0,p=0,f;return o=o!==void 0?o:1e3,function(m){const v=Date.now(),A=c[p];f||(f=v),a[u]=m,c[u]=v;let _=p,y=0;for(;_!==u;)y+=a[_++],_=_%t;if(u=(u+1)%t,u===p&&(p=(p+1)%t),v-f<o)return;const E=A&&v-A;return E?Math.round(y*1e3/E):void 0}}function tI(t,o){let a=0;const c=ute(50,250);return u=>{const p=u.loaded,f=u.lengthComputable?u.total:void 0,b=p-a,m=c(b),v=p<=f;a=p;const A={loaded:p,total:f,progress:f?p/f:void 0,bytes:b,rate:m||void 0,estimated:m&&f&&v?(f-p)/m:void 0,event:u};A[o?"download":"upload"]=!0,t(A)}}const hte=typeof XMLHttpRequest<"u",pte=hte&&function(t){return new Promise(function(a,c){let u=t.data;const p=Mi.from(t.headers).normalize(),f=t.responseType;let b;function m(){t.cancelToken&&t.cancelToken.unsubscribe(b),t.signal&&t.signal.removeEventListener("abort",b)}se.isFormData(u)&&(Xr.isStandardBrowserEnv||Xr.isStandardBrowserWebWorkerEnv?p.setContentType(!1):p.setContentType("multipart/form-data;",!1));let v=new XMLHttpRequest;if(t.auth){const E=t.auth.username||"",S=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";p.set("Authorization","Basic "+btoa(E+":"+S))}const A=xP(t.baseURL,t.url);v.open(t.method.toUpperCase(),CP(A,t.params,t.paramsSerializer),!0),v.timeout=t.timeout;function _(){if(!v)return;const E=Mi.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),D={data:!f||f==="text"||f==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:E,config:t,request:v};ite(function(I){a(I),m()},function(I){c(I),m()},D),v=null}if("onloadend"in v?v.onloadend=_:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(_)},v.onabort=function(){v&&(c(new pt("Request aborted",pt.ECONNABORTED,t,v)),v=null)},v.onerror=function(){c(new pt("Network Error",pt.ERR_NETWORK,t,v)),v=null},v.ontimeout=function(){let S=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const D=t.transitional||yP;t.timeoutErrorMessage&&(S=t.timeoutErrorMessage),c(new pt(S,D.clarifyTimeoutError?pt.ETIMEDOUT:pt.ECONNABORTED,t,v)),v=null},Xr.isStandardBrowserEnv){const E=(t.withCredentials||cte(A))&&t.xsrfCookieName&&ste.read(t.xsrfCookieName);E&&p.set(t.xsrfHeaderName,E)}u===void 0&&p.setContentType(null),"setRequestHeader"in v&&se.forEach(p.toJSON(),function(S,D){v.setRequestHeader(D,S)}),se.isUndefined(t.withCredentials)||(v.withCredentials=!!t.withCredentials),f&&f!=="json"&&(v.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&v.addEventListener("progress",tI(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&v.upload&&v.upload.addEventListener("progress",tI(t.onUploadProgress)),(t.cancelToken||t.signal)&&(b=E=>{v&&(c(!E||E.type?new kh(null,t,v):E),v.abort(),v=null)},t.cancelToken&&t.cancelToken.subscribe(b),t.signal&&(t.signal.aborted?b():t.signal.addEventListener("abort",b)));const y=dte(A);if(y&&Xr.protocols.indexOf(y)===-1){c(new pt("Unsupported protocol "+y+":",pt.ERR_BAD_REQUEST,t));return}v.send(u||null)})},Vf={http:zee,xhr:pte};se.forEach(Vf,(t,o)=>{if(t){try{Object.defineProperty(t,"name",{value:o})}catch{}Object.defineProperty(t,"adapterName",{value:o})}});const fte={getAdapter:t=>{t=se.isArray(t)?t:[t];const{length:o}=t;let a,c;for(let u=0;u<o&&(a=t[u],!(c=se.isString(a)?Vf[a.toLowerCase()]:a));u++);if(!c)throw c===!1?new pt(`Adapter ${a} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(se.hasOwnProp(Vf,a)?`Adapter '${a}' is not available in the build`:`Unknown adapter '${a}'`);if(!se.isFunction(c))throw new TypeError("adapter is not a function");return c},adapters:Vf};function dw(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new kh(null,t)}function nI(t){return dw(t),t.headers=Mi.from(t.headers),t.data=cw.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),fte.getAdapter(t.adapter||C1.adapter)(t).then(function(c){return dw(t),c.data=cw.call(t,t.transformResponse,c),c.headers=Mi.from(c.headers),c},function(c){return _P(c)||(dw(t),c&&c.response&&(c.response.data=cw.call(t,t.transformResponse,c.response),c.response.headers=Mi.from(c.response.headers))),Promise.reject(c)})}const oI=t=>t instanceof Mi?t.toJSON():t;function Fc(t,o){o=o||{};const a={};function c(v,A,_){return se.isPlainObject(v)&&se.isPlainObject(A)?se.merge.call({caseless:_},v,A):se.isPlainObject(A)?se.merge({},A):se.isArray(A)?A.slice():A}function u(v,A,_){if(se.isUndefined(A)){if(!se.isUndefined(v))return c(void 0,v,_)}else return c(v,A,_)}function p(v,A){if(!se.isUndefined(A))return c(void 0,A)}function f(v,A){if(se.isUndefined(A)){if(!se.isUndefined(v))return c(void 0,v)}else return c(void 0,A)}function b(v,A,_){if(_ in o)return c(v,A);if(_ in t)return c(void 0,v)}const m={url:p,method:p,data:p,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:b,headers:(v,A)=>u(oI(v),oI(A),!0)};return se.forEach(Object.keys(Object.assign({},t,o)),function(A){const _=m[A]||u,y=_(t[A],o[A],A);se.isUndefined(y)&&_!==b||(a[A]=y)}),a}const EP="1.4.0",y1={};["object","boolean","number","function","string","symbol"].forEach((t,o)=>{y1[t]=function(c){return typeof c===t||"a"+(o<1?"n ":" ")+t}});const rI={};y1.transitional=function(o,a,c){function u(p,f){return"[Axios v"+EP+"] Transitional option '"+p+"'"+f+(c?". "+c:"")}return(p,f,b)=>{if(o===!1)throw new pt(u(f," has been removed"+(a?" in "+a:"")),pt.ERR_DEPRECATED);return a&&!rI[f]&&(rI[f]=!0,console.warn(u(f," has been deprecated since v"+a+" and will be removed in the near future"))),o?o(p,f,b):!0}};function gte(t,o,a){if(typeof t!="object")throw new pt("options must be an object",pt.ERR_BAD_OPTION_VALUE);const c=Object.keys(t);let u=c.length;for(;u-- >0;){const p=c[u],f=o[p];if(f){const b=t[p],m=b===void 0||f(b,p,t);if(m!==!0)throw new pt("option "+p+" must be "+m,pt.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new pt("Unknown option "+p,pt.ERR_BAD_OPTION)}}const Mv={assertOptions:gte,validators:y1},ls=Mv.validators;class xg{constructor(o){this.defaults=o,this.interceptors={request:new XT,response:new XT}}request(o,a){typeof o=="string"?(a=a||{},a.url=o):a=o||{},a=Fc(this.defaults,a);const{transitional:c,paramsSerializer:u,headers:p}=a;c!==void 0&&Mv.assertOptions(c,{silentJSONParsing:ls.transitional(ls.boolean),forcedJSONParsing:ls.transitional(ls.boolean),clarifyTimeoutError:ls.transitional(ls.boolean)},!1),u!=null&&(se.isFunction(u)?a.paramsSerializer={serialize:u}:Mv.assertOptions(u,{encode:ls.function,serialize:ls.function},!0)),a.method=(a.method||this.defaults.method||"get").toLowerCase();let f;f=p&&se.merge(p.common,p[a.method]),f&&se.forEach(["delete","get","head","post","put","patch","common"],S=>{delete p[S]}),a.headers=Mi.concat(f,p);const b=[];let m=!0;this.interceptors.request.forEach(function(D){typeof D.runWhen=="function"&&D.runWhen(a)===!1||(m=m&&D.synchronous,b.unshift(D.fulfilled,D.rejected))});const v=[];this.interceptors.response.forEach(function(D){v.push(D.fulfilled,D.rejected)});let A,_=0,y;if(!m){const S=[nI.bind(this),void 0];for(S.unshift.apply(S,b),S.push.apply(S,v),y=S.length,A=Promise.resolve(a);_<y;)A=A.then(S[_++],S[_++]);return A}y=b.length;let E=a;for(_=0;_<y;){const S=b[_++],D=b[_++];try{E=S(E)}catch(R){D.call(this,R);break}}try{A=nI.call(this,E)}catch(S){return Promise.reject(S)}for(_=0,y=v.length;_<y;)A=A.then(v[_++],v[_++]);return A}getUri(o){o=Fc(this.defaults,o);const a=xP(o.baseURL,o.url);return CP(a,o.params,o.paramsSerializer)}}se.forEach(["delete","get","head","options"],function(o){xg.prototype[o]=function(a,c){return this.request(Fc(c||{},{method:o,url:a,data:(c||{}).data}))}});se.forEach(["post","put","patch"],function(o){function a(c){return function(p,f,b){return this.request(Fc(b||{},{method:o,headers:c?{"Content-Type":"multipart/form-data"}:{},url:p,data:f}))}}xg.prototype[o]=a(),xg.prototype[o+"Form"]=a(!0)});const Uf=xg;class A1{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let a;this.promise=new Promise(function(p){a=p});const c=this;this.promise.then(u=>{if(!c._listeners)return;let p=c._listeners.length;for(;p-- >0;)c._listeners[p](u);c._listeners=null}),this.promise.then=u=>{let p;const f=new Promise(b=>{c.subscribe(b),p=b}).then(u);return f.cancel=function(){c.unsubscribe(p)},f},o(function(p,f,b){c.reason||(c.reason=new kh(p,f,b),a(c.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const a=this._listeners.indexOf(o);a!==-1&&this._listeners.splice(a,1)}static source(){let o;return{token:new A1(function(u){o=u}),cancel:o}}}const mte=A1;function bte(t){return function(a){return t.apply(null,a)}}function kte(t){return se.isObject(t)&&t.isAxiosError===!0}const Pv={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pv).forEach(([t,o])=>{Pv[o]=t});const wte=Pv;function SP(t){const o=new Uf(t),a=cP(Uf.prototype.request,o);return se.extend(a,Uf.prototype,o,{allOwnKeys:!0}),se.extend(a,o,null,{allOwnKeys:!0}),a.create=function(u){return SP(Fc(t,u))},a}const Dn=SP(C1);Dn.Axios=Uf;Dn.CanceledError=kh;Dn.CancelToken=mte;Dn.isCancel=_P;Dn.VERSION=EP;Dn.toFormData=Gm;Dn.AxiosError=pt;Dn.Cancel=Dn.CanceledError;Dn.all=function(o){return Promise.all(o)};Dn.spread=bte;Dn.isAxiosError=kte;Dn.mergeConfig=Fc;Dn.AxiosHeaders=Mi;Dn.formToJSON=t=>AP(se.isHTMLForm(t)?new FormData(t):t);Dn.HttpStatusCode=wte;Dn.default=Dn;const $c=Dn;/*! js-cookie v3.0.5 | MIT */function bf(t){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var c in a)t[c]=a[c]}return t}var vte={read:function(t){return t[0]==='"'&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Bv(t,o){function a(u,p,f){if(!(typeof document>"u")){f=bf({},o,f),typeof f.expires=="number"&&(f.expires=new Date(Date.now()+f.expires*864e5)),f.expires&&(f.expires=f.expires.toUTCString()),u=encodeURIComponent(u).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var b="";for(var m in f)f[m]&&(b+="; "+m,f[m]!==!0&&(b+="="+f[m].split(";")[0]));return document.cookie=u+"="+t.write(p,u)+b}}function c(u){if(!(typeof document>"u"||arguments.length&&!u)){for(var p=document.cookie?document.cookie.split("; "):[],f={},b=0;b<p.length;b++){var m=p[b].split("="),v=m.slice(1).join("=");try{var A=decodeURIComponent(m[0]);if(f[A]=t.read(v,A),u===A)break}catch{}}return u?f[u]:f}}return Object.create({set:a,get:c,remove:function(u,p){a(u,"",bf({},p,{expires:-1}))},withAttributes:function(u){return Bv(this.converter,bf({},this.attributes,u))},withConverter:function(u){return Bv(bf({},this.converter,u),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(t)}})}var so=Bv(vte,{path:"/"});const Cte=ct(L.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle"),yte=ct(L.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}),"AlternateEmail"),DP=ct(L.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack"),Ate=ct(L.jsx("path",{d:"M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41l-6.59-6.59a.9959.9959 0 0 0-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z"}),"ArrowUpwardRounded"),_te=ct(L.jsx("path",{d:"M13 24c-3.26 0-6.19-1.99-7.4-5.02l-3.03-7.61c-.31-.79.43-1.58 1.24-1.32l.79.26c.56.18 1.02.61 1.24 1.16L7.25 15H8V3.25C8 2.56 8.56 2 9.25 2s1.25.56 1.25 1.25V12h1V1.25c0-.69.56-1.25 1.25-1.25S14 .56 14 1.25V12h1V2.75c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25V12h1V5.75c0-.69.56-1.25 1.25-1.25S21 5.06 21 5.75V16c0 4.42-3.58 8-8 8z"}),"BackHand"),xte=ct(L.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),TP=ct(L.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle"),Ete=ct(L.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Ste=ct(L.jsx("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"}),"DarkMode"),Dte=ct(L.jsx("path",{d:"M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"}),"DarkModeOutlined"),IP=ct(L.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever"),Tte=ct(L.jsx("path",{d:"M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h6l-2 2v1h8v-1l-2-2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"}),"DesktopMac"),Ite=ct(L.jsx("path",{d:"M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"}),"DesktopMacOutlined"),Mte=ct(L.jsx("path",{d:"M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"}),"DownloadRounded"),Pte=ct(L.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit"),Bte=ct(L.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"}),"EmailRounded"),_1=ct(L.jsx("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub"),x1=ct(L.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home"),Nte=ct(L.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"}),"InfoRounded"),Rte=ct(L.jsx("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}),"LightMode"),Ote=ct(L.jsx("path",{d:"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}),"LightModeOutlined"),Lte=ct(L.jsx("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link"),zte=ct(L.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn"),E1=ct(L.jsx("path",{d:"M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"}),"Login"),jte=ct(L.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout"),Fte=ct(L.jsx("path",{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"}),"Password"),$te=ct(L.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh"),Vte=ct(L.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save"),Ute=ct(L.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile"),Hte=ct(L.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility"),Wte=ct(L.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff"),Gte=ct(L.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"}),"Web");function iI(t,o){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);o&&(c=c.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),a.push.apply(a,c)}return a}function Nn(t){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?iI(Object(a),!0).forEach(function(c){qte(t,c,a[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):iI(Object(a)).forEach(function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(a,c))})}return t}function qte(t,o,a){return o in t?Object.defineProperty(t,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[o]=a,t}function gc(){return gc=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c])}return t},gc.apply(this,arguments)}function Hf(t,o){return Kte(t)||Yte(t,o)||Qte(t,o)||Zte()}function Kte(t){if(Array.isArray(t))return t}function Yte(t,o){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var c=[],u=!0,p=!1,f,b;try{for(a=a.call(t);!(u=(f=a.next()).done)&&(c.push(f.value),!(o&&c.length===o));u=!0);}catch(m){p=!0,b=m}finally{try{!u&&a.return!=null&&a.return()}finally{if(p)throw b}}return c}}function Qte(t,o){if(t){if(typeof t=="string")return sI(t,o);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return sI(t,o)}}function sI(t,o){(o==null||o>t.length)&&(o=t.length);for(var a=0,c=new Array(o);a<o;a++)c[a]=t[a];return c}function Zte(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var MP=z.createContext(),Jte=function(o){var a=o.open,c=o.options,u=o.onCancel,p=o.onConfirm,f=o.onClose,b=c.title,m=c.description,v=c.content,A=c.confirmationText,_=c.cancellationText,y=c.dialogProps,E=c.dialogActionsProps,S=c.confirmationButtonProps,D=c.cancellationButtonProps,R=c.titleProps,I=c.contentProps,P=c.allowClose,B=c.confirmationKeyword,F=c.confirmationKeywordTextFieldProps,M=c.hideCancelButton,W=c.buttonOrder,H=Pe.useState(""),K=Hf(H,2),Z=K[0],Y=K[1],te=B&&Z!==B,ce=Pe.createElement(Pe.Fragment,null,B&&Pe.createElement(_g,gc({onChange:function(ie){return Y(ie.target.value)},value:Z,fullWidth:!0},F))),re=W.map(function(ae){if(ae==="cancel")return!M&&Pe.createElement(fc,gc({key:"cancel"},D,{onClick:u}),_);if(ae==="confirm")return Pe.createElement(fc,gc({key:"confirm",color:"primary",disabled:te},S,{onClick:p}),A);throw new Error('Supported button types are only "confirm" and "cancel", got: '.concat(ae))});return Pe.createElement(uQ,gc({fullWidth:!0},y,{open:a,onClose:P?f:null}),b&&Pe.createElement(OQ,R,b),v?Pe.createElement(ew,I,v,ce):m?Pe.createElement(ew,I,Pe.createElement(MQ,null,m),ce):B&&Pe.createElement(ew,I,ce),Pe.createElement(bQ,E,re))},cs={title:"Are you sure?",description:"",content:null,confirmationText:"Ok",cancellationText:"Cancel",dialogProps:{},dialogActionsProps:{},confirmationButtonProps:{},cancellationButtonProps:{},titleProps:{},contentProps:{},allowClose:!0,confirmationKeywordTextFieldProps:{},hideCancelButton:!1,buttonOrder:["cancel","confirm"]},Xte=function(o,a){var c=Nn(Nn({},o.dialogProps||cs.dialogProps),a.dialogProps||{}),u=Nn(Nn({},o.dialogActionsProps||cs.dialogActionsProps),a.dialogActionsProps||{}),p=Nn(Nn({},o.confirmationButtonProps||cs.confirmationButtonProps),a.confirmationButtonProps||{}),f=Nn(Nn({},o.cancellationButtonProps||cs.cancellationButtonProps),a.cancellationButtonProps||{}),b=Nn(Nn({},o.titleProps||cs.titleProps),a.titleProps||{}),m=Nn(Nn({},o.contentProps||cs.contentProps),a.contentProps||{}),v=Nn(Nn({},o.confirmationKeywordTextFieldProps||cs.confirmationKeywordTextFieldProps),a.confirmationKeywordTextFieldProps||{});return Nn(Nn(Nn(Nn({},cs),o),a),{},{dialogProps:c,dialogActionsProps:u,confirmationButtonProps:p,cancellationButtonProps:f,titleProps:b,contentProps:m,confirmationKeywordTextFieldProps:v})},ene=function(o){var a=o.children,c=o.defaultOptions,u=c===void 0?{}:c,p=z.useState({}),f=Hf(p,2),b=f[0],m=f[1],v=z.useState([]),A=Hf(v,2),_=A[0],y=A[1],E=Hf(_,2),S=E[0],D=E[1],R=z.useCallback(function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(function(M,W){m(F),y([M,W])})},[]),I=z.useCallback(function(){y([])},[]),P=z.useCallback(function(){D&&(D(),I())},[D,I]),B=z.useCallback(function(){S&&(S(),I())},[S,I]);return Pe.createElement(z.Fragment,null,Pe.createElement(MP.Provider,{value:R},a),Pe.createElement(Jte,{open:_.length===2,options:Xte(u,b),onClose:I,onCancel:P,onConfirm:B}))},tne=function(){var o=z.useContext(MP);return o};let nne={data:""},one=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||nne,rne=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ine=/\/\*[^]*?\*\/|  +/g,aI=/\n+/g,Aa=(t,o)=>{let a="",c="",u="";for(let p in t){let f=t[p];p[0]=="@"?p[1]=="i"?a=p+" "+f+";":c+=p[1]=="f"?Aa(f,p):p+"{"+Aa(f,p[1]=="k"?"":o)+"}":typeof f=="object"?c+=Aa(f,o?o.replace(/([^,])+/g,b=>p.replace(/(^:.*)|([^,])+/g,m=>/&/.test(m)?m.replace(/&/g,b):b?b+" "+m:m)):p):f!=null&&(p=/^--/.test(p)?p:p.replace(/[A-Z]/g,"-$&").toLowerCase(),u+=Aa.p?Aa.p(p,f):p+":"+f+";")}return a+(o&&u?o+"{"+u+"}":u)+c},_i={},PP=t=>{if(typeof t=="object"){let o="";for(let a in t)o+=a+PP(t[a]);return o}return t},sne=(t,o,a,c,u)=>{let p=PP(t),f=_i[p]||(_i[p]=(m=>{let v=0,A=11;for(;v<m.length;)A=101*A+m.charCodeAt(v++)>>>0;return"go"+A})(p));if(!_i[f]){let m=p!==t?t:(v=>{let A,_,y=[{}];for(;A=rne.exec(v.replace(ine,""));)A[4]?y.shift():A[3]?(_=A[3].replace(aI," ").trim(),y.unshift(y[0][_]=y[0][_]||{})):y[0][A[1]]=A[2].replace(aI," ").trim();return y[0]})(t);_i[f]=Aa(u?{["@keyframes "+f]:m}:m,a?"":"."+f)}let b=a&&_i.g?_i.g:null;return a&&(_i.g=_i[f]),((m,v,A,_)=>{_?v.data=v.data.replace(_,m):v.data.indexOf(m)===-1&&(v.data=A?m+v.data:v.data+m)})(_i[f],o,c,b),f},ane=(t,o,a)=>t.reduce((c,u,p)=>{let f=o[p];if(f&&f.call){let b=f(a),m=b&&b.props&&b.props.className||/^go/.test(b)&&b;f=m?"."+m:b&&typeof b=="object"?b.props?"":Aa(b,""):b===!1?"":b}return c+u+(f??"")},"");function S1(t){let o=this||{},a=t.call?t(o.p):t;return sne(a.unshift?a.raw?ane(a,[].slice.call(arguments,1),o.p):a.reduce((c,u)=>Object.assign(c,u&&u.call?u(o.p):u),{}):a,one(o.target),o.g,o.o,o.k)}S1.bind({g:1});S1.bind({k:1});function lI(t,o){for(var a=0;a<o.length;a++){var c=o[a];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function BP(t,o,a){return o&&lI(t.prototype,o),a&&lI(t,a),t}function Nt(){return Nt=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c])}return t},Nt.apply(this,arguments)}function NP(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}function wh(t,o){if(t==null)return{};var a={},c=Object.keys(t),u,p;for(p=0;p<c.length;p++)u=c[p],!(o.indexOf(u)>=0)&&(a[u]=t[u]);return a}function cI(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var dI=function(){return""},lne=Pe.createContext({enqueueSnackbar:dI,closeSnackbar:dI}),va={downXs:"@media (max-width:599.95px)",upSm:"@media (min-width:600px)"},uI=function(o){return o.charAt(0).toUpperCase()+o.slice(1)},D1=function(o){return""+uI(o.vertical)+uI(o.horizontal)},kf=function(o){return!!o||o===0},wf="unmounted",Zl="exited",Jl="entering",tu="entered",hI="exiting",T1=function(t){NP(o,t);function o(c){var u;u=t.call(this,c)||this;var p=c.appear,f;return u.appearStatus=null,c.in?p?(f=Zl,u.appearStatus=Jl):f=tu:c.unmountOnExit||c.mountOnEnter?f=wf:f=Zl,u.state={status:f},u.nextCallback=null,u}o.getDerivedStateFromProps=function(u,p){var f=u.in;return f&&p.status===wf?{status:Zl}:null};var a=o.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(u){var p=null;if(u!==this.props){var f=this.state.status;this.props.in?f!==Jl&&f!==tu&&(p=Jl):(f===Jl||f===tu)&&(p=hI)}this.updateStatus(!1,p)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var u=this.props.timeout,p=u,f=u;return u!=null&&typeof u!="number"&&typeof u!="string"&&(f=u.exit,p=u.enter),{exit:f,enter:p}},a.updateStatus=function(u,p){u===void 0&&(u=!1),p!==null?(this.cancelNextCallback(),p===Jl?this.performEnter(u):this.performExit()):this.props.unmountOnExit&&this.state.status===Zl&&this.setState({status:wf})},a.performEnter=function(u){var p=this,f=this.props.enter,b=u,m=this.getTimeouts();if(!u&&!f){this.safeSetState({status:tu},function(){p.props.onEntered&&p.props.onEntered(p.node,b)});return}this.props.onEnter&&this.props.onEnter(this.node,b),this.safeSetState({status:Jl},function(){p.props.onEntering&&p.props.onEntering(p.node,b),p.onTransitionEnd(m.enter,function(){p.safeSetState({status:tu},function(){p.props.onEntered&&p.props.onEntered(p.node,b)})})})},a.performExit=function(){var u=this,p=this.props.exit,f=this.getTimeouts();if(!p){this.safeSetState({status:Zl},function(){u.props.onExited&&u.props.onExited(u.node)});return}this.props.onExit&&this.props.onExit(this.node),this.safeSetState({status:hI},function(){u.props.onExiting&&u.props.onExiting(u.node),u.onTransitionEnd(f.exit,function(){u.safeSetState({status:Zl},function(){u.props.onExited&&u.props.onExited(u.node)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&this.nextCallback.cancel&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(u,p){p=this.setNextCallback(p),this.setState(u,p)},a.setNextCallback=function(u){var p=this,f=!0;return this.nextCallback=function(){f&&(f=!1,p.nextCallback=null,u())},this.nextCallback.cancel=function(){f=!1},this.nextCallback},a.onTransitionEnd=function(u,p){this.setNextCallback(p);var f=u==null&&!this.props.addEndListener;if(!this.node||f){setTimeout(this.nextCallback,0);return}this.props.addEndListener&&this.props.addEndListener(this.node,this.nextCallback),u!=null&&setTimeout(this.nextCallback,u)},a.render=function(){var u=this.state.status;if(u===wf)return null;var p=this.props,f=p.children,b=wh(p,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return f(u,b)},BP(o,[{key:"node",get:function(){var u,p=(u=this.props.nodeRef)===null||u===void 0?void 0:u.current;if(!p)throw new Error("notistack - Custom snackbar is not refForwarding");return p}}]),o}(Pe.Component);function Xl(){}T1.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Xl,onEntering:Xl,onEntered:Xl,onExit:Xl,onExiting:Xl,onExited:Xl};function pI(t,o){typeof t=="function"?t(o):t&&(t.current=o)}function Nv(t,o){return z.useMemo(function(){return t==null&&o==null?null:function(a){pI(t,a),pI(o,a)}},[t,o])}function Eg(t){var o=t.timeout,a=t.style,c=a===void 0?{}:a,u=t.mode;return{duration:typeof o=="object"?o[u]||0:o,easing:c.transitionTimingFunction,delay:c.transitionDelay}}var Rv={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},RP=function(o){o.scrollTop=o.scrollTop},fI=function(o){return Math.round(o)+"ms"};function mc(t,o){t===void 0&&(t=["all"]);var a=o||{},c=a.duration,u=c===void 0?300:c,p=a.easing,f=p===void 0?Rv.easeInOut:p,b=a.delay,m=b===void 0?0:b,v=Array.isArray(t)?t:[t];return v.map(function(A){var _=typeof u=="string"?u:fI(u),y=typeof m=="string"?m:fI(m);return A+" "+_+" "+f+" "+y}).join(",")}function cne(t){return t&&t.ownerDocument||document}function OP(t){var o=cne(t);return o.defaultView||window}function dne(t,o){o===void 0&&(o=166);var a;function c(){for(var u=this,p=arguments.length,f=new Array(p),b=0;b<p;b++)f[b]=arguments[b];var m=function(){t.apply(u,f)};clearTimeout(a),a=setTimeout(m,o)}return c.clear=function(){clearTimeout(a)},c}function une(t,o){var a=o.getBoundingClientRect(),c=OP(o),u;if(o.fakeTransform)u=o.fakeTransform;else{var p=c.getComputedStyle(o);u=p.getPropertyValue("-webkit-transform")||p.getPropertyValue("transform")}var f=0,b=0;if(u&&u!=="none"&&typeof u=="string"){var m=u.split("(")[1].split(")")[0].split(",");f=parseInt(m[4],10),b=parseInt(m[5],10)}switch(t){case"left":return"translateX("+(c.innerWidth+f-a.left)+"px)";case"right":return"translateX(-"+(a.left+a.width-f)+"px)";case"up":return"translateY("+(c.innerHeight+b-a.top)+"px)";default:return"translateY(-"+(a.top+a.height-b)+"px)"}}function vf(t,o){if(o){var a=une(t,o);a&&(o.style.webkitTransform=a,o.style.transform=a)}}var LP=z.forwardRef(function(t,o){var a=t.children,c=t.direction,u=c===void 0?"down":c,p=t.in,f=t.style,b=t.timeout,m=b===void 0?0:b,v=t.onEnter,A=t.onEntered,_=t.onExit,y=t.onExited,E=wh(t,["children","direction","in","style","timeout","onEnter","onEntered","onExit","onExited"]),S=z.useRef(null),D=Nv(a.ref,S),R=Nv(D,o),I=function(H,K){vf(u,H),RP(H),v&&v(H,K)},P=function(H){var K=(f==null?void 0:f.transitionTimingFunction)||Rv.easeOut,Z=Eg({timeout:m,mode:"enter",style:Nt({},f,{transitionTimingFunction:K})});H.style.webkitTransition=mc("-webkit-transform",Z),H.style.transition=mc("transform",Z),H.style.webkitTransform="none",H.style.transform="none"},B=function(H){var K=(f==null?void 0:f.transitionTimingFunction)||Rv.sharp,Z=Eg({timeout:m,mode:"exit",style:Nt({},f,{transitionTimingFunction:K})});H.style.webkitTransition=mc("-webkit-transform",Z),H.style.transition=mc("transform",Z),vf(u,H),_&&_(H)},F=function(H){H.style.webkitTransition="",H.style.transition="",y&&y(H)},M=z.useCallback(function(){S.current&&vf(u,S.current)},[u]);return z.useEffect(function(){if(!(p||u==="down"||u==="right")){var W=dne(function(){S.current&&vf(u,S.current)}),H=OP(S.current);return H.addEventListener("resize",W),function(){W.clear(),H.removeEventListener("resize",W)}}},[u,p]),z.useEffect(function(){p||M()},[p,M]),z.createElement(T1,Object.assign({appear:!0,nodeRef:S,onEnter:I,onEntered:A,onEntering:P,onExit:B,onExited:F,in:p,timeout:m},E),function(W,H){return z.cloneElement(a,Nt({ref:R,style:Nt({visibility:W==="exited"&&!p?"hidden":void 0},f,{},a.props.style)},H))})});LP.displayName="Slide";var Ym=function(o){return Pe.createElement("svg",Object.assign({viewBox:"0 0 24 24",focusable:"false",style:{fontSize:20,marginInlineEnd:8,userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0}},o))},hne=function(){return Pe.createElement(Ym,null,Pe.createElement("path",{d:`M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41
        10.59L10 14.17L17.59 6.58L19 8L10 17Z`}))},pne=function(){return Pe.createElement(Ym,null,Pe.createElement("path",{d:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"}))},fne=function(){return Pe.createElement(Ym,null,Pe.createElement("path",{d:`M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,
        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,
        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z`}))},gne=function(){return Pe.createElement(Ym,null,Pe.createElement("path",{d:`M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,
        0 22,12A10,10 0 0,0 12,2Z`}))},mne={default:void 0,success:Pe.createElement(hne,null),warning:Pe.createElement(pne,null),error:Pe.createElement(fne,null),info:Pe.createElement(gne,null)},Na={maxSnack:3,persist:!1,hideIconVariant:!1,disableWindowBlurListener:!1,variant:"default",autoHideDuration:5e3,iconVariant:mne,anchorOrigin:{vertical:"bottom",horizontal:"left"},TransitionComponent:LP,transitionDuration:{enter:225,exit:195}},bne=function(o,a){var c=function(p){return typeof p=="number"||p===null};return c(o)?o:c(a)?a:Na.autoHideDuration},kne=function(o,a){var c=function(p,f){return f.some(function(b){return typeof p===b})};return c(o,["string","number"])?o:c(o,["object"])?Nt({},Na.transitionDuration,{},c(a,["object"])&&a,{},o):c(a,["string","number"])?a:c(a,["object"])?Nt({},Na.transitionDuration,{},a):Na.transitionDuration},wne=function(o,a){return function(c,u){return u===void 0&&(u=!1),u?Nt({},Na[c],{},a[c],{},o[c]):c==="autoHideDuration"?bne(o.autoHideDuration,a.autoHideDuration):c==="transitionDuration"?kne(o.transitionDuration,a.transitionDuration):o[c]||a[c]||Na[c]}};function vh(t){return Object.entries(t).reduce(function(o,a){var c,u=a[0],p=a[1];return Nt({},o,(c={},c[u]=S1(p),c))},{})}var Vc={SnackbarContainer:"notistack-SnackbarContainer",Snackbar:"notistack-Snackbar",CollapseWrapper:"notistack-CollapseWrapper",MuiContent:"notistack-MuiContent",MuiContentVariant:function(o){return"notistack-MuiContent-"+o}},gI=vh({root:{height:0},entered:{height:"auto"}}),uw="0px",hw=175,zP=z.forwardRef(function(t,o){var a=t.children,c=t.in,u=t.onExited,p=z.useRef(null),f=z.useRef(null),b=Nv(o,f),m=function(){return p.current?p.current.clientHeight:0},v=function(D){D.style.height=uw},A=function(D){var R=m(),I=Eg({timeout:hw,mode:"enter"}),P=I.duration,B=I.easing;D.style.transitionDuration=typeof P=="string"?P:P+"ms",D.style.height=R+"px",D.style.transitionTimingFunction=B||""},_=function(D){D.style.height="auto"},y=function(D){D.style.height=m()+"px"},E=function(D){RP(D);var R=Eg({timeout:hw,mode:"exit"}),I=R.duration,P=R.easing;D.style.transitionDuration=typeof I=="string"?I:I+"ms",D.style.height=uw,D.style.transitionTimingFunction=P||""};return z.createElement(T1,{in:c,unmountOnExit:!0,onEnter:v,onEntered:_,onEntering:A,onExit:y,onExited:u,onExiting:E,nodeRef:f,timeout:hw},function(S,D){return z.createElement("div",Object.assign({ref:b,className:Ae(gI.root,S==="entered"&&gI.entered),style:Nt({pointerEvents:"all",overflow:"hidden",minHeight:uw,transition:mc("height")},S==="entered"&&{overflow:"visible"},{},S==="exited"&&!c&&{visibility:"hidden"})},D),z.createElement("div",{ref:p,className:Vc.CollapseWrapper,style:{display:"flex",width:"100%"}},a))})});zP.displayName="Collapse";var mI={right:"left",left:"right",bottom:"up",top:"down"},vne=function(o){return o.horizontal!=="center"?mI[o.horizontal]:mI[o.vertical]},Cne=function(o){return"anchorOrigin"+D1(o)},yne=function(o){o===void 0&&(o={});var a={containerRoot:!0,containerAnchorOriginTopCenter:!0,containerAnchorOriginBottomCenter:!0,containerAnchorOriginTopRight:!0,containerAnchorOriginBottomRight:!0,containerAnchorOriginTopLeft:!0,containerAnchorOriginBottomLeft:!0};return Object.keys(o).filter(function(c){return!a[c]}).reduce(function(c,u){var p;return Nt({},c,(p={},p[u]=o[u],p))},{})},Ane=function(){};function Su(t,o){return t.reduce(function(a,c){return c==null?a:function(){for(var p=arguments.length,f=new Array(p),b=0;b<p;b++)f[b]=arguments[b];var m=[].concat(f);o&&m.indexOf(o)===-1&&m.push(o),a.apply(this,m),c.apply(this,m)}},Ane)}var _ne=typeof window<"u"?z.useLayoutEffect:z.useEffect;function bI(t){var o=z.useRef(t);return _ne(function(){o.current=t}),z.useCallback(function(){return o.current.apply(void 0,arguments)},[])}var jP=z.forwardRef(function(t,o){var a=t.children,c=t.className,u=t.autoHideDuration,p=t.disableWindowBlurListener,f=p===void 0?!1:p,b=t.onClose,m=t.id,v=t.open,A=t.SnackbarProps,_=A===void 0?{}:A,y=z.useRef(),E=bI(function(){b&&b.apply(void 0,arguments)}),S=bI(function(B){!b||B==null||(y.current&&clearTimeout(y.current),y.current=setTimeout(function(){E(null,"timeout",m)},B))});z.useEffect(function(){return v&&S(u),function(){y.current&&clearTimeout(y.current)}},[v,u,S]);var D=function(){y.current&&clearTimeout(y.current)},R=z.useCallback(function(){u!=null&&S(u*.5)},[u,S]),I=function(F){_.onMouseEnter&&_.onMouseEnter(F),D()},P=function(F){_.onMouseLeave&&_.onMouseLeave(F),R()};return z.useEffect(function(){if(!f&&v)return window.addEventListener("focus",R),window.addEventListener("blur",D),function(){window.removeEventListener("focus",R),window.removeEventListener("blur",D)}},[f,R,v]),z.createElement("div",Object.assign({ref:o},_,{className:Ae(Vc.Snackbar,c),onMouseEnter:I,onMouseLeave:P}),a)});jP.displayName="Snackbar";var pw,xne=vh({root:(pw={display:"flex",flexWrap:"wrap",flexGrow:1},pw[va.upSm]={flexGrow:"initial",minWidth:"288px"},pw)}),FP=z.forwardRef(function(t,o){var a=t.className,c=wh(t,["className"]);return Pe.createElement("div",Object.assign({ref:o,className:Ae(xne.root,a)},c))});FP.displayName="SnackbarContent";var nu=vh({root:{backgroundColor:"#313131",fontSize:"0.875rem",lineHeight:1.43,letterSpacing:"0.01071em",color:"#fff",alignItems:"center",padding:"6px 16px",borderRadius:"4px",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"},lessPadding:{paddingLeft:8*2.5+"px"},default:{backgroundColor:"#313131"},success:{backgroundColor:"#43a047"},error:{backgroundColor:"#d32f2f"},warning:{backgroundColor:"#ff9800"},info:{backgroundColor:"#2196f3"},message:{display:"flex",alignItems:"center",padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:"16px",marginRight:"-8px"}}),kI="notistack-snackbar",$P=z.forwardRef(function(t,o){var a=t.id,c=t.message,u=t.action,p=t.iconVariant,f=t.variant,b=t.hideIconVariant,m=t.style,v=t.className,A=p[f],_=u;return typeof _=="function"&&(_=_(a)),Pe.createElement(FP,{ref:o,role:"alert","aria-describedby":kI,style:m,className:Ae(Vc.MuiContent,Vc.MuiContentVariant(f),nu.root,nu[f],v,!b&&A&&nu.lessPadding)},Pe.createElement("div",{id:kI,className:nu.message},b?null:A,c),_&&Pe.createElement("div",{className:nu.action},_))});$P.displayName="MaterialDesignContent";var VP=z.memo($P),Ene=vh({wrappedRoot:{width:"100%",position:"relative",transform:"translateX(0)",top:0,right:0,bottom:0,left:0,minWidth:"288px"}}),Sne=function(o){var a=z.useRef(),c=z.useState(!0),u=c[0],p=c[1],f=Su([o.snack.onClose,o.onClose]),b=function(){o.snack.requestClose&&f(null,"instructed",o.snack.id)},m=z.useCallback(function(){a.current=setTimeout(function(){p(function(Z){return!Z})},125)},[]);z.useEffect(function(){return function(){a.current&&clearTimeout(a.current)}},[]);var v=o.snack,A=o.classes,_=o.Component,y=_===void 0?VP:_,E=z.useMemo(function(){return yne(A)},[A]),S=v.open,D=v.SnackbarProps,R=v.TransitionComponent,I=v.TransitionProps,P=v.transitionDuration,B=v.disableWindowBlurListener,F=v.content,M=wh(v,["open","SnackbarProps","TransitionComponent","TransitionProps","transitionDuration","disableWindowBlurListener","content","entered","requestClose","onEnter","onEntered","onExit","onExited"]),W=Nt({direction:vne(M.anchorOrigin),timeout:P},I),H=F;typeof H=="function"&&(H=H(M.id,M.message));var K=["onEnter","onEntered","onExit","onExited"].reduce(function(Z,Y){var te;return Nt({},Z,(te={},te[Y]=Su([o.snack[Y],o[Y]],M.id),te))},{});return Pe.createElement(zP,{in:u,onExited:K.onExited},Pe.createElement(jP,{open:S,id:M.id,disableWindowBlurListener:B,autoHideDuration:M.autoHideDuration,className:Ae(Ene.wrappedRoot,E.root,E[Cne(M.anchorOrigin)]),SnackbarProps:D,onClose:f},Pe.createElement(R,Object.assign({},W,{appear:!0,in:S,onExit:K.onExit,onExited:m,onEnter:K.onEnter,onEntered:Su([K.onEntered,b],M.id)}),H||Pe.createElement(y,Object.assign({},M)))))},ou,fw,Cf,yf,gw,xi={view:{default:20,dense:4},snackbar:{default:6,dense:2}},wI="."+Vc.CollapseWrapper,mw=16,Af=vh({root:(ou={boxSizing:"border-box",display:"flex",maxHeight:"100%",position:"fixed",zIndex:1400,height:"auto",width:"auto",transition:mc(["top","right","bottom","left","max-width"],{duration:300,easing:"ease"}),pointerEvents:"none"},ou[wI]={padding:xi.snackbar.default+"px 0px",transition:"padding 300ms ease 0ms"},ou.maxWidth="calc(100% - "+xi.view.default*2+"px)",ou[va.downXs]={width:"100%",maxWidth:"calc(100% - "+mw*2+"px)"},ou),rootDense:(fw={},fw[wI]={padding:xi.snackbar.dense+"px 0px"},fw),top:{top:xi.view.default-xi.snackbar.default+"px",flexDirection:"column"},bottom:{bottom:xi.view.default-xi.snackbar.default+"px",flexDirection:"column-reverse"},left:(Cf={left:xi.view.default+"px"},Cf[va.upSm]={alignItems:"flex-start"},Cf[va.downXs]={left:mw+"px"},Cf),right:(yf={right:xi.view.default+"px"},yf[va.upSm]={alignItems:"flex-end"},yf[va.downXs]={right:mw+"px"},yf),center:(gw={left:"50%",transform:"translateX(-50%)"},gw[va.upSm]={alignItems:"center"},gw)}),Dne=function(o){var a=o.classes,c=a===void 0?{}:a,u=o.anchorOrigin,p=o.dense,f=o.children,b=Ae(Vc.SnackbarContainer,Af[u.vertical],Af[u.horizontal],Af.root,c.containerRoot,c["containerAnchorOrigin"+D1(u)],p&&Af.rootDense);return Pe.createElement("div",{className:b},f)},Tne=z.memo(Dne),vI=function(o){var a=typeof o=="string"||z.isValidElement(o);return!a},Oo,UP,Ine=function(t){NP(o,t);function o(c){var u;return u=t.call(this,c)||this,u.enqueueSnackbar=function(p,f){if(f===void 0&&(f={}),p==null)throw new Error("enqueueSnackbar called with invalid argument");var b=vI(p)?p:f,m=vI(p)?p.message:p,v=b.key,A=b.preventDuplicate,_=wh(b,["key","preventDuplicate"]),y=kf(v),E=y?v:new Date().getTime()+Math.random(),S=wne(_,u.props),D=Nt({id:E},_,{message:m,open:!0,entered:!1,requestClose:!1,persist:S("persist"),action:S("action"),content:S("content"),variant:S("variant"),anchorOrigin:S("anchorOrigin"),disableWindowBlurListener:S("disableWindowBlurListener"),autoHideDuration:S("autoHideDuration"),hideIconVariant:S("hideIconVariant"),TransitionComponent:S("TransitionComponent"),transitionDuration:S("transitionDuration"),TransitionProps:S("TransitionProps",!0),iconVariant:S("iconVariant",!0),style:S("style",!0),SnackbarProps:S("SnackbarProps",!0),className:Ae(u.props.className,_.className)});return D.persist&&(D.autoHideDuration=void 0),u.setState(function(R){if(A===void 0&&u.props.preventDuplicate||A){var I=function(M){return y?M.id===E:M.message===m},P=R.queue.findIndex(I)>-1,B=R.snacks.findIndex(I)>-1;if(P||B)return R}return u.handleDisplaySnack(Nt({},R,{queue:[].concat(R.queue,[D])}))}),E},u.handleDisplaySnack=function(p){var f=p.snacks;return f.length>=u.maxSnack?u.handleDismissOldest(p):u.processQueue(p)},u.processQueue=function(p){var f=p.queue,b=p.snacks;return f.length>0?Nt({},p,{snacks:[].concat(b,[f[0]]),queue:f.slice(1,f.length)}):p},u.handleDismissOldest=function(p){if(p.snacks.some(function(A){return!A.open||A.requestClose}))return p;var f=!1,b=!1,m=p.snacks.reduce(function(A,_){return A+(_.open&&_.persist?1:0)},0);m===u.maxSnack&&(b=!0);var v=p.snacks.map(function(A){return!f&&(!A.persist||b)?(f=!0,A.entered?(A.onClose&&A.onClose(null,"maxsnack",A.id),u.props.onClose&&u.props.onClose(null,"maxsnack",A.id),Nt({},A,{open:!1})):Nt({},A,{requestClose:!0})):Nt({},A)});return Nt({},p,{snacks:v})},u.handleEnteredSnack=function(p,f,b){if(!kf(b))throw new Error("handleEnteredSnack Cannot be called with undefined key");u.setState(function(m){var v=m.snacks;return{snacks:v.map(function(A){return A.id===b?Nt({},A,{entered:!0}):Nt({},A)})}})},u.handleCloseSnack=function(p,f,b){u.props.onClose&&u.props.onClose(p,f,b);var m=b===void 0;u.setState(function(v){var A=v.snacks,_=v.queue;return{snacks:A.map(function(y){return!m&&y.id!==b?Nt({},y):y.entered?Nt({},y,{open:!1}):Nt({},y,{requestClose:!0})}),queue:_.filter(function(y){return y.id!==b})}})},u.closeSnackbar=function(p){var f=u.state.snacks.find(function(b){return b.id===p});kf(p)&&f&&f.onClose&&f.onClose(null,"instructed",p),u.handleCloseSnack(null,"instructed",p)},u.handleExitedSnack=function(p,f){if(!kf(f))throw new Error("handleExitedSnack Cannot be called with undefined key");u.setState(function(b){var m=u.processQueue(Nt({},b,{snacks:b.snacks.filter(function(v){return v.id!==f})}));return m.queue.length===0?m:u.handleDismissOldest(m)})},Oo=u.enqueueSnackbar,UP=u.closeSnackbar,u.state={snacks:[],queue:[],contextValue:{enqueueSnackbar:u.enqueueSnackbar.bind(cI(u)),closeSnackbar:u.closeSnackbar.bind(cI(u))}},u}var a=o.prototype;return a.render=function(){var u=this,p=this.state.contextValue,f=this.props,b=f.domRoot,m=f.children,v=f.dense,A=v===void 0?!1:v,_=f.Components,y=_===void 0?{}:_,E=f.classes,S=this.state.snacks.reduce(function(R,I){var P,B=D1(I.anchorOrigin),F=R[B]||[];return Nt({},R,(P={},P[B]=[].concat(F,[I]),P))},{}),D=Object.keys(S).map(function(R){var I=S[R],P=I[0];return Pe.createElement(Tne,{key:R,dense:A,anchorOrigin:P.anchorOrigin,classes:E},I.map(function(B){return Pe.createElement(Sne,{key:B.id,snack:B,classes:E,Component:y[B.variant],onClose:u.handleCloseSnack,onEnter:u.props.onEnter,onExit:u.props.onExit,onExited:Su([u.handleExitedSnack,u.props.onExited],B.id),onEntered:Su([u.handleEnteredSnack,u.props.onEntered],B.id)})}))});return Pe.createElement(lne.Provider,{value:p},m,b?dh.createPortal(D,b):D)},BP(o,[{key:"maxSnack",get:function(){return this.props.maxSnack||Na.maxSnack}}]),o}(z.Component);let zi,HP,WP,GP,qP,Ta,Sg,no,rr,Dg,Wf,tc,Wa,Ov,du,KP,to,Lv,uu;function Mne(t){no=S$(),rr=tne(),Sg=!!Z3("(prefers-color-scheme: dark)");const o={color:a=>a.palette.text.primary,backgroundColor:a=>a.palette.action.hover,padding:"8px 15px",fontSize:"1rem",borderRadius:"15px","&:hover":{backgroundColor:a=>a.palette.accent.hover}};KP={dialogProps:{maxWidth:"xs",disableScrollLock:!0,PaperProps:{elevation:0,sx:{padding:"15px 0px 15px 0px",justfifyContent:"center",alignItems:"center",borderRadius:"15px",backgroundColor:a=>a.palette.background.dialog,transition:a=>`${a.transitions.create()} !important`}}},titleProps:{fontSize:"2.5rem"},contentProps:{sx:{fontSize:"1.2rem"}},confirmationButtonProps:{autoFocus:!0,startIcon:L.jsx(TP,{color:"icon"}),sx:o},cancellationButtonProps:{startIcon:L.jsx(xte,{color:"icon"}),sx:o}},to={tooltip:{sx:{backgroundColor:a=>a.palette.accent.primary,color:a=>a.palette.text.primary,fontSize:"0.8rem",borderRadius:"15px",transition:a=>`${a.transitions.create()} !important`}}},Lv={borderRadius:"15px",transition:a=>`${a.transitions.create()} !important`,"&.Mui-focused":{backgroundColor:a=>a.palette.action.hover},"&.MuiOutlinedInput-root":{"& fieldset":{transition:a=>a.transitions.create(),border:2,borderColor:a=>a.palette.action.disabled},"&:hover fieldset":{borderColor:a=>a.palette.text.primary},"&.Mui-focused fieldset":{borderColor:a=>a.palette.textField.main}}},Wa=()=>{Oo("Server Offline!",{variant:"info"})},du=fe(VP)(({theme:a})=>({color:a.palette.text.primary,borderRadius:" 15px",transition:c=>`${c.transitions.create()} !important`,"&.notistack-MuiContent-success":{backgroundColor:t.darkMode?Xo[900]:Xo[300]},"&.notistack-MuiContent-error":{backgroundColor:t.darkMode?qr[900]:qr[300]},"&.notistack-MuiContent-warning":{backgroundColor:t.darkMode?Ca[900]:Ca[300]},"&.notistack-MuiContent-info":{backgroundColor:t.darkMode?pv[900]:pv[300]}})),Dg=fe(fc)(({theme:a})=>({textTransform:"none",color:a.palette.text.primary,padding:"8px 20px",fontSize:t.isMobile?"18px":"24px",fontWeight:"500",borderRadius:"15px",transition:a.transitions.create(),"&:hover":{backgroundColor:a.palette.accent.hover}})),Ov=fe(Dg)(({theme:a})=>({fontSize:"16px",backgroundColor:a.palette.background.button})),tc=fe($J)(({theme:a})=>({fontSize:"18px",width:"100%",padding:"15px 30px",gap:"10px",fontWeight:"500",justifyContent:"flex-start",transition:a.transitions.create(),"&:hover":{backgroundColor:a.palette.accent.hover}})),Wf=fe(Ha)(({theme:a})=>({transition:a.transitions.create(),color:a.palette.text.primary,backgroundColor:a.palette.action.hover})),zi=fe(fc)(({theme:a})=>({textTransform:"none",color:a.palette.text.primary,borderRadius:"15px",backgroundColor:a.palette.background.button,padding:"8px 20px",fontSize:"1.3rem",width:"100%",border:`2px solid ${a.palette.action.disabled}`,transition:`${a.transitions.create()} !important`,"&:hover":{backgroundColor:a.palette.accent.hover,border:`2px solid ${a.palette.accent.primary}`}})),HP=fe(fc)(({theme:a})=>({transition:`${a.transitions.create()}`,textTransform:"none",borderRadius:"15px",padding:t.isMobile?"10px":"20px 40px 20px 40px",flexDirection:"column",cursor:"pointer",color:a.palette.text.primary,border:`1px solid ${a.palette.divider}`,gap:"20px","&:hover":!t.isMobile&&{backgroundColor:a.palette.accent.hover,transform:"translateY(-0.5rem) !important",boxShadow:a.shadows[4]}})),WP=fe(jc)(({theme:a})=>({transition:a.transitions.create(),position:"relative",borderRadius:"15px",width:"100%",height:"300px",objectFit:"cover",pointerEvents:"none",border:`1px solid ${a.palette.action.disabled}`})),GP=fe(Jt)(({theme:a})=>({transition:a.transitions.create(),textAlign:"left",letterSpacing:"2px",fontWeight:"600"})),qP=fe(jc)(({theme:a})=>({transition:a.transitions.create(),borderRadius:"15px",width:"100%",height:t.isMobile?"300px":"500px",objectFit:"cover",pointerEvents:"none"})),Ta=fe(fc)(({theme:a})=>({padding:"10px ",color:a.palette.icon.main,transition:`${a.transitions.create()} !important`,"&:hover":{backgroundColor:a.palette.accent.hover}})),uu=fe(Om)(({theme:a})=>({transition:a.transitions.create(),"&:hover":{transform:"translateY(-0.2rem)",color:a.palette.icon.main,backgroundColor:a.palette.accent.primary,boxShadow:a.shadows[4]}}))}function Pne(t){const[o,a]=z.useState(!1),[c,u]=z.useState(!1),p=async f=>{f.preventDefault(),t.setShowLoading(!0);const b={email:f.target.email.value,password:f.target.password.value};try{const m=await $c.post(`${Uc}/api/users/login`,{loginData:b});so.set("token",m.data.token,{secure:!1,httpOnly:!1}),so.set("userID",m.data.userID,{secure:!1,httpOnly:!1}),t.setIsLoggedIn({name:m.data.name,avatar:m.data.avatar}),Oo("You are now logged in!",{variant:"success"}),no("/")}catch(m){m.code==="ERR_NETWORK"?Wa():confirmDialog({title:"Wrong credentials.",description:"Email or password is wrong. Please try again.",hideCancelButton:!0}).then(()=>{}).catch(()=>{})}finally{t.setShowLoading(!1)}};return t.isLoggedIn.logged?L.jsx(dn,{in:!0,children:L.jsxs(Dt,{spacing:4,paddingTop:"7rem",paddingBottom:4,children:[L.jsxs(Jt,{variant:t.isMobile?"h5":"h4",children:[L.jsx(_te,{})," Where you tryna go? ",L.jsx("br",{}),"You are already logged in."]}),L.jsx(zi,{onClick:()=>{t.setShowLoading(!0),setTimeout(()=>{no("/"),t.setShowLoading(!1)},200)},startIcon:L.jsx(x1,{color:"icon"}),children:"Home"})]})}):L.jsx(dn,{in:!0,children:L.jsxs(Dt,{spacing:3,justifyContent:"flex-start",alignItems:"flex-start",borderRadius:"15px",padding:t.isMobile?4:5,marginTop:"7rem",marginBottom:"2rem",width:t.isMobile?"100%":"30rem",sx:{transition:f=>f.transitions.create()},children:[L.jsx(Jt,{variant:"h2",letterSpacing:2,sx:{cursor:"default"},children:"Sign in"}),L.jsx(Dr,{flexItem:!0}),L.jsxs(jc,{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center",gap:f=>f.spacing(3),component:"form",onSubmit:p,children:[L.jsx(_g,{fullWidth:!0,required:!0,helperText:"Enter a valid email address",placeholder:"Email Address",id:"email",variant:"outlined",color:"textField",type:"text",InputProps:{sx:Lv,startAdornment:L.jsx(nw,{position:"start",children:L.jsx(yte,{color:"icon"})})}}),L.jsx(_g,{fullWidth:!0,required:!0,helperText:"Please enter your password",placeholder:"Password",id:"password",variant:"outlined",type:o?"text":"password",InputProps:{sx:Lv,startAdornment:L.jsx(nw,{position:"start",children:L.jsx(Fte,{color:"icon"})}),endAdornment:L.jsxs(nw,{position:"end",children:[L.jsx(Dr,{orientation:"vertical",flexItem:!0}),L.jsx(Vq,{in:!c,children:L.jsx(Om,{disableRipple:!0,onClick:()=>{u(!0),setTimeout(()=>{a(!o),u(!1)},100)},edge:"end",children:o?L.jsx(Hte,{color:"warning"}):L.jsx(Wte,{})})})]})}}),L.jsx(zi,{type:"submit",startIcon:L.jsx(E1,{color:"icon"}),children:"Login"})]})]})})}function Bne(t){return L.jsxs(Dt,{direction:"column",spacing:4,justifyContent:"center",alignItems:"center",width:t.isMobile?"100%":"50rem",paddingTop:"15vh",marginBottom:4,children:[L.jsxs(Jt,{variant:"h6",children:["Uh oh, seems like you have wandered off somewhere else. ",L.jsx("br",{}),"Don't worry, I gotchu."]}),L.jsx(zi,{onClick:()=>{t.setShowLoading(!0),setTimeout(()=>{no("/"),t.setShowLoading(!1)},200)},startIcon:L.jsx(x1,{color:"icon"}),children:"Latest Blogs"})]})}function Nne(t){const[o,a]=z.useState(!1),c=()=>{a(window.scrollY>200)};return z.useEffect(()=>(window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}),[]),L.jsx(G3,{direction:"up",in:o,children:L.jsx(io,{title:"Scroll to Top",disableInteractive:!0,componentsProps:to,children:L.jsx(eZ,{sx:{transition:u=>`${u.transitions.create()} !important`,position:"fixed",bottom:25,right:t.isMobile?30:50,backdropFilter:"blur(10px)",color:u=>u.palette.icon.main,backgroundColor:u=>u.palette.background.actions,border:u=>`2px solid ${u.palette.action.disabled}`,"&:hover":{backgroundColor:u=>u.palette.accent.hover}},onClick:u=>{u.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},children:L.jsx(Ate,{})})})})}function Rne(t){return L.jsx(dn,{in:!0,children:L.jsxs(Dt,{component:ri,spacing:4,marginBottom:4,children:[L.jsx(Dr,{flexItem:!0}),L.jsx(Jt,{variant:"body1",sx:{cursor:"default",textDecoration:"none",textAlign:"justify",color:o=>o.palette.text.disabled},children:"This website is a simple blog website built using the MERN Stack. This site is hosted using GitHub pages, The backend server is hosted on vercel and the database is hosted on MongoDBAtlas. The site features many amazing features along with a beautiful UI/UX and a responsive design."})]})})}function One(t){return L.jsx(dn,{in:!0,children:L.jsxs(Dt,{component:ri,spacing:2,marginBottom:5,children:[L.jsx(Dr,{flexItem:!0}),L.jsxs(Jt,{variant:"button",sx:{cursor:"default"},children:["Created with love 💞",L.jsx("br",{}),"By Harmeet"]}),L.jsxs(Dt,{direction:t.isMobile?"column":"row",spacing:2,justifyContent:"center",alignItems:"center",component:ri,children:[L.jsx(Ov,{fullWidth:t.isMobile&&!0,startIcon:L.jsx(_1,{color:"icon"}),onClick:()=>{window.open("https://github.com/harmeet9013/blogs")},children:"Source Code"}),L.jsx(Ov,{fullWidth:t.isMobile&&!0,startIcon:L.jsx(Gte,{color:"icon"}),onClick:()=>{window.open("https://harmeet9013.github.io")},children:"Portfolio"})]})]})})}function Lne(t){return Object.keys(t.blogs).map(o=>{const{_id:a,title:c,image:u,author:p,date:f,avatar:b}=t.blogs[o],[m,v]=z.useState(!0),[A,_]=z.useState(!0);return L.jsx(dn,{in:!0,style:{transitionDelay:o*100},children:L.jsxs(HP,{onClick:()=>{setTimeout(()=>{no(`/blog/${a}`),t.setShowLoading(!1)},200),t.setShowLoading(!0)},children:[m&&L.jsx(oh,{color:"icon",size:30}),L.jsx(WP,{component:"img",src:u,alt:c,onError:()=>v(!0),onLoad:()=>{v(!1)},sx:{display:m&&"none"}}),L.jsxs(Dt,{spacing:2,component:ri,children:[L.jsx(Jt,{sx:{textAlign:"left",cursor:"pointer"},fontWeight:"600",variant:"h4",children:c}),L.jsxs(Dt,{spacing:2,direction:"row",children:[A&&L.jsx(k1,{variant:"circular",children:L.jsx(Ha,{})}),L.jsx(dn,{in:!0,children:L.jsx(Ha,{src:b&&b,onLoad:()=>_(!1),sx:{display:A&&"none"}})}),L.jsxs(Dt,{direction:"column",alignItems:"flex-start",justifyContent:"flex-start",sx:{color:y=>y.palette.text.disabled},children:[L.jsxs(Jt,{variant:"body2",children:["By ",L.jsx("strong",{children:p})]}),L.jsx(Jt,{variant:"body2",children:f})]})]})]})]},a)})})}function zne(t){return L.jsxs(z.Fragment,{children:[L.jsx(Dt,{direction:"column",spacing:4,paddingTop:"8rem",width:t.isMobile?"100%":"48rem",marginBottom:4,sx:{transition:o=>o.transitions.create()},children:t.blogs&&!t.showLoading?L.jsx(Lne,{blogs:t.blogs,setShowLoading:t.setShowLoading}):!t.showLoading&&L.jsx(dn,{in:!0,children:L.jsxs(Dt,{direction:"column",spacing:4,justifyContent:"center",alignItems:"center",children:[L.jsxs(Jt,{variant:"h6",children:["Could not connect to the database. ",L.jsx("br",{}),"Try again after sometime."]}),L.jsx(zi,{onClick:()=>t.setRefresh(!0),startIcon:L.jsx($te,{color:"icon"}),children:"Refresh"})]})})}),!t.showLoading&&L.jsx(Rne,{})]})}const jne=""+new URL("harmeet_singh-82742f2a.jpg",import.meta.url).href;function Fne(t){return!t.showLoading&&L.jsx(dn,{in:!0,children:L.jsxs(Dt,{component:ri,spacing:4,direction:t.isMobile?"column":"row",paddingTop:"7rem",paddingBottom:4,children:[L.jsx(jc,{component:"img",src:jne,sx:{width:t.isMobile?"100%":"30rem",borderRadius:"15px",transition:o=>o.transitions.create(),objectFit:"cover","&:hover":{boxShadow:o=>o.shadows[4]}}}),L.jsxs(Dt,{direction:"column",spacing:3,justifyContent:"flex-start",alignItems:"flex-start",width:"100%",sx:{cursor:"default"},children:[L.jsx(Jt,{variant:t.isMobile?"h4":"h2",letterSpacing:10,fontWeight:400,children:"About"}),L.jsx(Dr,{flexItem:!0,sx:{borderBottomWidth:5,width:"20%"}}),L.jsx(IY,{sx:{borderRadius:"15px",transition:o=>o.transitions.create()},children:L.jsx(OY,{children:L.jsxs(Jt,{variant:t.isMobile?"body1":"h5",textAlign:"center",children:["My name is Harmeet Singh, and I am a fresher"," ",L.jsx("b",{children:" MERN Stack Web Developer"}),"."]})})}),L.jsxs(Jt,{variant:"body1",textAlign:"left",paddingRight:t.isMobile?5:25,children:["This website was built in 3 weeks with several"," ",L.jsx(io,{title:"Takes you to GitHub",disableInteractive:!0,componentsProps:to,children:L.jsx(oJ,{onClick:()=>window.open("https://github.com/harmeet9013/blogs/commits/main"),color:"secondary",underline:"none",sx:{cursor:"pointer"},children:"QOL changes"})})," ","along the way."]}),L.jsx(Jt,{variant:"body1",textAlign:"right",paddingLeft:t.isMobile?5:25,children:"I specialize in building beautiful SPA's and scalable backend solutions."}),L.jsx(Jt,{variant:"h4",paddingTop:4,children:"Get in touch with me!"}),L.jsxs(Dt,{direction:"row",spacing:4,width:"100%",justifyContent:t.isMobile&&"center",alignItems:"center",children:[L.jsx(io,{title:"Download Resume",disableInteractive:!0,componentsProps:to,children:L.jsx(uu,{size:"large",onClick:()=>window.open("https://bit.ly/harmeet9013-resume"),children:L.jsx(Mte,{})})}),L.jsx(io,{title:"Github",disableInteractive:!0,componentsProps:to,children:L.jsx(uu,{size:"large",onClick:()=>window.open("https://github.com/harmeet9013"),children:L.jsx(_1,{})})}),L.jsx(io,{title:"LinkedIn",disableInteractive:!0,componentsProps:to,children:L.jsx(uu,{size:"large",onClick:()=>window.open("https://linkedin.com/in/harmeet9013"),children:L.jsx(zte,{})})}),L.jsx(io,{title:"Email",disableInteractive:!0,componentsProps:to,children:L.jsx(uu,{size:"large",onClick:()=>window.open("mailto:hssaggu1313@gmail.com"),children:L.jsx(Bte,{})})})]})]})]})})}function $ne(t){const[o,a]=z.useState(null),[c,u]=z.useState(!0);z.useEffect(()=>{const f=()=>{a(null)};return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}},[]);const p=()=>{t.setShowLoading(!0),setTimeout(()=>{so.remove("token"),so.remove("userID"),t.setIsLoggedIn({logged:!1,name:"",avatar:""}),t.setShowLoading(!1),Oo("You are logged out!",{variant:"info"})},200)};return L.jsxs(z.Fragment,{children:[L.jsx(Dg,{onClick:()=>{setTimeout(()=>{no("/about"),t.setShowLoading(!1)},200),t.setShowLoading(!0)},startIcon:L.jsx(Nte,{color:"icon"}),children:"About"}),L.jsx(Dr,{orientation:"vertical",flexItem:!0,sx:{borderRightWidth:2}}),L.jsx(Om,{sx:{"&:hover":{backgroundColor:f=>f.palette.accent.hover}},onClick:f=>{a(f.currentTarget)},children:t.isLoggedIn.logged?L.jsxs(z.Fragment,{children:[c&&L.jsx(k1,{variant:"circular",children:L.jsx(Ha,{})}),L.jsx(dn,{in:!c,children:L.jsx(Wf,{src:t.isLoggedIn.avatar,onLoad:()=>u(!1),sx:{display:c&&"none"}})})]}):L.jsx(dn,{in:!0,children:L.jsx(Wf,{})})}),L.jsx(oP,{open:!!o,anchorEl:o,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},onClose:()=>{a(null)},disableScrollLock:!0,TransitionComponent:dn,PaperProps:{elevation:0,sx:{borderRadius:"15px",transition:f=>f.transitions.create()}},children:L.jsxs(ri,{disableGutters:!0,children:[t.isLoggedIn.logged?L.jsxs(z.Fragment,{children:[L.jsxs(tc,{disabled:!0,sx:{justifyContent:"center",gap:"10px",opacity:"1","&.Mui-disabled":{opacity:.8}},children:[c?L.jsx(oh,{size:25,color:"icon"}):L.jsx(Wf,{src:t.isLoggedIn.avatar,onLoad:()=>u(!1),sx:{display:c&&"none"}}),t.isLoggedIn.name]}),L.jsxs(tc,{onClick:()=>{a(null),setTimeout(()=>{no("/createBlog"),t.setShowLoading(!1)},200),t.setShowLoading(!0)},children:[L.jsx(Cte,{color:"icon"})," New Blog"]}),L.jsxs(tc,{divider:!0,onClick:()=>{a(null),rr({title:"Logout",content:"Are you sure you want to logout?",confirmationText:"Yes",cancellationText:"No"}).then(p).catch(()=>{})},children:[L.jsx(jte,{color:"icon"}),"Logout"]})]}):L.jsxs(tc,{divider:!0,onClick:()=>{setTimeout(()=>{no("/authUser"),t.setShowLoading(!1)},200),a(null),t.setShowLoading(!0)},children:[L.jsx(E1,{color:"icon"})," Login"]}),L.jsxs(tc,{divider:!0,onClick:()=>{rr({title:"GitHub",content:"View source code on GitHub?",confirmationText:"Yes",cancellationText:"No"}).then(()=>{window.open("https://github.com/harmeet9013/blogs")}).catch(()=>{}),a(null)},children:[L.jsx(_1,{color:"icon"})," Source Code"]}),L.jsxs(oee,{value:t.selectedTheme,exclusive:!0,onChange:(f,b)=>{b!==null&&(t.setSelectedTheme(b),b==="system"?(so.remove("theme"),t.setDarkMode(Sg)):(so.set("theme",b),t.setDarkMode(b==="dark")))},sx:{"& .MuiToggleButtonGroup-grouped":{transition:f=>f.transitions.create(),margin:f=>f.spacing(.5),padding:f=>f.spacing(2),border:0,"&:hover":{backgroundColor:f=>f.palette.accent.hover},"&:not(:first-of-type)":{borderRadius:"15px"},"&:first-of-type":{borderRadius:"15px"}}},children:[L.jsx(io,{title:"Light Mode",disableInteractive:!0,componentsProps:to,children:L.jsx(sw,{value:"light","aria-label":"light",children:t.selectedTheme==="light"?L.jsx(Rte,{color:"icon"}):L.jsx(Ote,{})})}),L.jsx(io,{title:"System",disableInteractive:!0,componentsProps:to,children:L.jsx(sw,{value:"system","aria-label":"system",children:t.selectedTheme==="system"?L.jsx(Tte,{color:"icon"}):L.jsx(Ite,{})})}),L.jsx(io,{title:"Dark Mode",disableInteractive:!0,componentsProps:to,children:L.jsx(sw,{value:"dark","aria-label":"dark",children:t.selectedTheme==="dark"?L.jsx(Ste,{color:"icon"}):L.jsx(Dte,{})})})]})]})})]})}function Vne(t){const[o,a]=z.useState(!0),[c,u]=z.useState(0),p=()=>{const f=window.scrollY;a(f<100||c>f),u(f)};return z.useEffect(()=>(window.addEventListener("scroll",p),()=>{window.removeEventListener("scroll",p)}),[c]),L.jsx(G3,{direction:"down",in:o,children:L.jsxs(Dt,{direction:"row",justifyContent:"space-around",alignItems:"center",position:"fixed",width:"100%",overflow:"hidden",zIndex:"50",borderBottom:f=>`2px solid ${f.palette.divider}`,sx:{transition:f=>f.transitions.create(),backgroundColor:f=>f.palette.background.header,backdropFilter:"blur(10px)"},children:[L.jsx(yg,{in:!0,children:L.jsx(Dg,{onClick:()=>{t.setShowLoading(!0),t.setRefresh(!0),setTimeout(()=>{no("/")},200)},sx:{fontSize:t.isMobile?"1.8rem":"2.2rem",letterSpacing:t.isMobile?4:8,fontWeight:"bold",border:"none","&:hover":{backgroundColor:"transparent"},background:f=>`linear-gradient(to right, ${f.palette.icon.main}, ${f.palette.accent.secondary})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Blogs"})}),L.jsx(yg,{in:!0,children:L.jsx(Dt,{direction:"row",spacing:t.isMobile?1:3,children:L.jsx($ne,{isMobile:t.isMobile,isLoggedIn:t.isLoggedIn,selectedTheme:t.selectedTheme,setDarkMode:t.setDarkMode,setIsLoggedIn:t.setIsLoggedIn,setShowLoading:t.setShowLoading,setSelectedTheme:t.setSelectedTheme})})})]})})}var Tg={exports:{}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */Tg.exports;(function(t,o){(function(a,c){t.exports=c(z)})(self,a=>(()=>{var c={703:(b,m,v)=>{var A=v(414);function _(){}function y(){}y.resetWarningCache=_,b.exports=function(){function E(R,I,P,B,F,M){if(M!==A){var W=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw W.name="Invariant Violation",W}}function S(){return E}E.isRequired=E;var D={array:E,bigint:E,bool:E,func:E,number:E,object:E,string:E,symbol:E,any:E,arrayOf:S,element:E,elementType:E,instanceOf:S,node:E,objectOf:S,oneOf:S,oneOfType:S,shape:S,exact:S,checkPropTypes:y,resetWarningCache:_};return D.PropTypes=D,D}},697:(b,m,v)=>{b.exports=v(703)()},414:b=>{b.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:b=>{b.exports=a}},u={};function p(b){var m=u[b];if(m!==void 0)return m.exports;var v=u[b]={exports:{}};return c[b](v,v.exports,p),v.exports}p.n=b=>{var m=b&&b.__esModule?()=>b.default:()=>b;return p.d(m,{a:m}),m},p.d=(b,m)=>{for(var v in m)p.o(m,v)&&!p.o(b,v)&&Object.defineProperty(b,v,{enumerable:!0,get:m[v]})},p.o=(b,m)=>Object.prototype.hasOwnProperty.call(b,m),p.r=b=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})};var f={};return(()=>{p.r(f),p.d(f,{CKEditor:()=>Yi,CKEditorContext:()=>Cl});var b=p(787),m=p.n(b),v=p(697),A=p.n(v);const _=new Array(256).fill("").map((j,$)=>("0"+$.toString(16)).slice(-2));class y{constructor($){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof $.crashNumberLimit=="number"?$.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof $.minimumNonErrorTimePeriod=="number"?$.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=q=>{const X="error"in q?q.error:q.reason;X instanceof Error&&this._handleError(X,q)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on($,q){this._listeners[$]||(this._listeners[$]=[]),this._listeners[$].push(q)}off($,q){this._listeners[$]=this._listeners[$].filter(X=>X!==q)}_fire($,...q){const X=this._listeners[$]||[];for(const De of X)De.apply(this,[null,...q])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError($,q){if(this._shouldReactToError($)){this.crashes.push({message:$.message,stack:$.stack,filename:q instanceof ErrorEvent?q.filename:void 0,lineno:q instanceof ErrorEvent?q.lineno:void 0,colno:q instanceof ErrorEvent?q.colno:void 0,date:this._now()});const X=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:$,causesRestart:X}),X?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError($){return $.is&&$.is("CKEditorError")&&$.context!==void 0&&$.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem($)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function E(j,$=new Set){const q=[j],X=new Set;let De=0;for(;q.length>De;){const ze=q[De++];if(!X.has(ze)&&S(ze)&&!$.has(ze))if(X.add(ze),Symbol.iterator in ze)try{for(const Ke of ze)q.push(Ke)}catch{}else for(const Ke in ze)Ke!=="defaultValue"&&q.push(ze[Ke])}return X}function S(j){const $=Object.prototype.toString.call(j),q=typeof j;return!(q==="number"||q==="boolean"||q==="string"||q==="symbol"||q==="function"||$==="[object Date]"||$==="[object RegExp]"||$==="[object Module]"||j==null||j._watchdogExcluded||j instanceof EventTarget||j instanceof Event)}function D(j,$,q=new Set){if(j===$&&typeof(X=j)=="object"&&X!==null)return!0;var X;const De=E(j,q),ze=E($,q);for(const Ke of De)if(ze.has(Ke))return!0;return!1}const R=function(j){var $=typeof j;return j!=null&&($=="object"||$=="function")},I=typeof fs=="object"&&fs&&fs.Object===Object&&fs;var P=typeof self=="object"&&self&&self.Object===Object&&self;const B=I||P||Function("return this")(),F=function(){return B.Date.now()};var M=/\s/;const W=function(j){for(var $=j.length;$--&&M.test(j.charAt($)););return $};var H=/^\s+/;const K=function(j){return j&&j.slice(0,W(j)+1).replace(H,"")},Z=B.Symbol;var Y=Object.prototype,te=Y.hasOwnProperty,ce=Y.toString,re=Z?Z.toStringTag:void 0;const ae=function(j){var $=te.call(j,re),q=j[re];try{j[re]=void 0;var X=!0}catch{}var De=ce.call(j);return X&&($?j[re]=q:delete j[re]),De};var ie=Object.prototype.toString;const pe=function(j){return ie.call(j)};var oe=Z?Z.toStringTag:void 0;const J=function(j){return j==null?j===void 0?"[object Undefined]":"[object Null]":oe&&oe in Object(j)?ae(j):pe(j)},le=function(j){return j!=null&&typeof j=="object"},ge=function(j){return typeof j=="symbol"||le(j)&&J(j)=="[object Symbol]"};var Te=/^[-+]0x[0-9a-f]+$/i,Ie=/^0b[01]+$/i,Qe=/^0o[0-7]+$/i,Me=parseInt;const ve=function(j){if(typeof j=="number")return j;if(ge(j))return NaN;if(R(j)){var $=typeof j.valueOf=="function"?j.valueOf():j;j=R($)?$+"":$}if(typeof j!="string")return j===0?j:+j;j=K(j);var q=Ie.test(j);return q||Qe.test(j)?Me(j.slice(2),q?2:8):Te.test(j)?NaN:+j};var be=Math.max,Oe=Math.min;const He=function(j,$,q){var X,De,ze,Ke,Ye,Gt,Vt=0,Ys=!1,Pr=!1,Eo=!0;if(typeof j!="function")throw new TypeError("Expected a function");function ut(qn){var gr=X,Kn=De;return X=De=void 0,Vt=qn,Ke=j.apply(Kn,gr)}function gi(qn){var gr=qn-Gt;return Gt===void 0||gr>=$||gr<0||Pr&&qn-Vt>=ze}function fr(){var qn=F();if(gi(qn))return Mn(qn);Ye=setTimeout(fr,function(gr){var Kn=$-(gr-Gt);return Pr?Oe(Kn,ze-(gr-Vt)):Kn}(qn))}function Mn(qn){return Ye=void 0,Eo&&X?ut(qn):(X=De=void 0,Ke)}function So(){var qn=F(),gr=gi(qn);if(X=arguments,De=this,Gt=qn,gr){if(Ye===void 0)return function(Kn){return Vt=Kn,Ye=setTimeout(fr,$),Ys?ut(Kn):Ke}(Gt);if(Pr)return clearTimeout(Ye),Ye=setTimeout(fr,$),ut(Gt)}return Ye===void 0&&(Ye=setTimeout(fr,$)),Ke}return $=ve($)||0,R(q)&&(Ys=!!q.leading,ze=(Pr="maxWait"in q)?be(ve(q.maxWait)||0,$):ze,Eo="trailing"in q?!!q.trailing:Eo),So.cancel=function(){Ye!==void 0&&clearTimeout(Ye),Vt=0,X=Gt=De=Ye=void 0},So.flush=function(){return Ye===void 0?Ke:Mn(F())},So},Ne=function(j,$,q){var X=!0,De=!0;if(typeof j!="function")throw new TypeError("Expected a function");return R(q)&&(X="leading"in q?!!q.leading:X,De="trailing"in q?!!q.trailing:De),He(j,$,{leading:X,maxWait:$,trailing:De})},bt=function(){this.__data__=[],this.size=0},Re=function(j,$){return j===$||j!=j&&$!=$},ke=function(j,$){for(var q=j.length;q--;)if(Re(j[q][0],$))return q;return-1};var et=Array.prototype.splice;const dt=function(j){var $=this.__data__,q=ke($,j);return!(q<0)&&(q==$.length-1?$.pop():et.call($,q,1),--this.size,!0)},zt=function(j){var $=this.__data__,q=ke($,j);return q<0?void 0:$[q][1]},Wt=function(j){return ke(this.__data__,j)>-1},Ze=function(j,$){var q=this.__data__,X=ke(q,j);return X<0?(++this.size,q.push([j,$])):q[X][1]=$,this};function Ot(j){var $=-1,q=j==null?0:j.length;for(this.clear();++$<q;){var X=j[$];this.set(X[0],X[1])}}Ot.prototype.clear=bt,Ot.prototype.delete=dt,Ot.prototype.get=zt,Ot.prototype.has=Wt,Ot.prototype.set=Ze;const it=Ot,We=function(){this.__data__=new it,this.size=0},st=function(j){var $=this.__data__,q=$.delete(j);return this.size=$.size,q},tn=function(j){return this.__data__.get(j)},Ve=function(j){return this.__data__.has(j)},gt=function(j){if(!R(j))return!1;var $=J(j);return $=="[object Function]"||$=="[object GeneratorFunction]"||$=="[object AsyncFunction]"||$=="[object Proxy]"},yt=B["__core-js_shared__"];var bn=function(){var j=/[^.]+$/.exec(yt&&yt.keys&&yt.keys.IE_PROTO||"");return j?"Symbol(src)_1."+j:""}();const zn=function(j){return!!bn&&bn in j};var qe=Function.prototype.toString;const xe=function(j){if(j!=null){try{return qe.call(j)}catch{}try{return j+""}catch{}}return""};var Se=/^\[object .+?Constructor\]$/,tt=Function.prototype,vt=Object.prototype,un=tt.toString,$t=vt.hasOwnProperty,Tn=RegExp("^"+un.call($t).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Rs=function(j){return!(!R(j)||zn(j))&&(gt(j)?Tn:Se).test(xe(j))},Os=function(j,$){return j==null?void 0:j[$]},Ho=function(j,$){var q=Os(j,$);return Rs(q)?q:void 0},ur=Ho(B,"Map"),li=Ho(Object,"create"),Ja=function(){this.__data__=li?li(null):{},this.size=0},Ls=function(j){var $=this.has(j)&&delete this.__data__[j];return this.size-=$?1:0,$};var Xa=Object.prototype.hasOwnProperty;const el=function(j){var $=this.__data__;if(li){var q=$[j];return q==="__lodash_hash_undefined__"?void 0:q}return Xa.call($,j)?$[j]:void 0};var In=Object.prototype.hasOwnProperty;const tl=function(j){var $=this.__data__;return li?$[j]!==void 0:In.call($,j)},ci=function(j,$){var q=this.__data__;return this.size+=this.has(j)?0:1,q[j]=li&&$===void 0?"__lodash_hash_undefined__":$,this};function xo(j){var $=-1,q=j==null?0:j.length;for(this.clear();++$<q;){var X=j[$];this.set(X[0],X[1])}}xo.prototype.clear=Ja,xo.prototype.delete=Ls,xo.prototype.get=el,xo.prototype.has=tl,xo.prototype.set=ci;const nl=xo,zs=function(){this.size=0,this.__data__={hash:new nl,map:new(ur||it),string:new nl}},Zc=function(j){var $=typeof j;return $=="string"||$=="number"||$=="symbol"||$=="boolean"?j!=="__proto__":j===null},Wo=function(j,$){var q=j.__data__;return Zc($)?q[typeof $=="string"?"string":"hash"]:q.map},js=function(j){var $=Wo(this,j).delete(j);return this.size-=$?1:0,$},kn=function(j){return Wo(this,j).get(j)},Go=function(j){return Wo(this,j).has(j)},Jc=function(j,$){var q=Wo(this,j),X=q.size;return q.set(j,$),this.size+=q.size==X?0:1,this};function ho(j){var $=-1,q=j==null?0:j.length;for(this.clear();++$<q;){var X=j[$];this.set(X[0],X[1])}}ho.prototype.clear=zs,ho.prototype.delete=js,ho.prototype.get=kn,ho.prototype.has=Go,ho.prototype.set=Jc;const Fs=ho,ol=function(j,$){var q=this.__data__;if(q instanceof it){var X=q.__data__;if(!ur||X.length<199)return X.push([j,$]),this.size=++q.size,this;q=this.__data__=new Fs(X)}return q.set(j,$),this.size=q.size,this};function jn(j){var $=this.__data__=new it(j);this.size=$.size}jn.prototype.clear=We,jn.prototype.delete=st,jn.prototype.get=tn,jn.prototype.has=Ve,jn.prototype.set=ol;const $i=jn,$s=function(j,$){for(var q=-1,X=j==null?0:j.length;++q<X&&$(j[q],q,j)!==!1;);return j},rl=function(){try{var j=Ho(Object,"defineProperty");return j({},"",{}),j}catch{}}(),il=function(j,$,q){$=="__proto__"&&rl?rl(j,$,{configurable:!0,enumerable:!0,value:q,writable:!0}):j[$]=q};var hr=Object.prototype.hasOwnProperty;const sl=function(j,$,q){var X=j[$];hr.call(j,$)&&Re(X,q)&&(q!==void 0||$ in j)||il(j,$,q)},Ge=function(j,$,q,X){var De=!q;q||(q={});for(var ze=-1,Ke=$.length;++ze<Ke;){var Ye=$[ze],Gt=X?X(q[Ye],j[Ye],Ye,q,j):void 0;Gt===void 0&&(Gt=j[Ye]),De?il(q,Ye,Gt):sl(q,Ye,Gt)}return q},Fn=function(j,$){for(var q=-1,X=Array(j);++q<j;)X[q]=$(q);return X},Ch=function(j){return le(j)&&J(j)=="[object Arguments]"};var yh=Object.prototype,Qm=yh.hasOwnProperty,Zm=yh.propertyIsEnumerable;const Jm=Ch(function(){return arguments}())?Ch:function(j){return le(j)&&Qm.call(j,"callee")&&!Zm.call(j,"callee")},pr=Array.isArray,Vs=function(){return!1};var Vi=o&&!o.nodeType&&o,Ah=Vi&&!0&&t&&!t.nodeType&&t,_h=Ah&&Ah.exports===Vi?B.Buffer:void 0;const xh=(_h?_h.isBuffer:void 0)||Vs;var Xm=/^(?:0|[1-9]\d*)$/;const eb=function(j,$){var q=typeof j;return!!($=$??9007199254740991)&&(q=="number"||q!="symbol"&&Xm.test(j))&&j>-1&&j%1==0&&j<$},Eh=function(j){return typeof j=="number"&&j>-1&&j%1==0&&j<=9007199254740991};var Lt={};Lt["[object Float32Array]"]=Lt["[object Float64Array]"]=Lt["[object Int8Array]"]=Lt["[object Int16Array]"]=Lt["[object Int32Array]"]=Lt["[object Uint8Array]"]=Lt["[object Uint8ClampedArray]"]=Lt["[object Uint16Array]"]=Lt["[object Uint32Array]"]=!0,Lt["[object Arguments]"]=Lt["[object Array]"]=Lt["[object ArrayBuffer]"]=Lt["[object Boolean]"]=Lt["[object DataView]"]=Lt["[object Date]"]=Lt["[object Error]"]=Lt["[object Function]"]=Lt["[object Map]"]=Lt["[object Number]"]=Lt["[object Object]"]=Lt["[object RegExp]"]=Lt["[object Set]"]=Lt["[object String]"]=Lt["[object WeakMap]"]=!1;const Ui=function(j){return le(j)&&Eh(j.length)&&!!Lt[J(j)]},al=function(j){return function($){return j($)}};var Sh=o&&!o.nodeType&&o,Us=Sh&&!0&&t&&!t.nodeType&&t,Hi=Us&&Us.exports===Sh&&I.process;const Wi=function(){try{var j=Us&&Us.require&&Us.require("util").types;return j||Hi&&Hi.binding&&Hi.binding("util")}catch{}}();var Dh=Wi&&Wi.isTypedArray;const tb=Dh?al(Dh):Ui;var nb=Object.prototype.hasOwnProperty;const di=function(j,$){var q=pr(j),X=!q&&Jm(j),De=!q&&!X&&xh(j),ze=!q&&!X&&!De&&tb(j),Ke=q||X||De||ze,Ye=Ke?Fn(j.length,String):[],Gt=Ye.length;for(var Vt in j)!$&&!nb.call(j,Vt)||Ke&&(Vt=="length"||De&&(Vt=="offset"||Vt=="parent")||ze&&(Vt=="buffer"||Vt=="byteLength"||Vt=="byteOffset")||eb(Vt,Gt))||Ye.push(Vt);return Ye};var ll=Object.prototype;const Xc=function(j){var $=j&&j.constructor;return j===(typeof $=="function"&&$.prototype||ll)},ui=function(j,$){return function(q){return j($(q))}},Hs=ui(Object.keys,Object);var ob=Object.prototype.hasOwnProperty;const cl=function(j){if(!Xc(j))return Hs(j);var $=[];for(var q in Object(j))ob.call(j,q)&&q!="constructor"&&$.push(q);return $},dl=function(j){return j!=null&&Eh(j.length)&&!gt(j)},ed=function(j){return dl(j)?di(j):cl(j)},td=function(j,$){return j&&Ge($,ed($),j)},Gi=function(j){var $=[];if(j!=null)for(var q in Object(j))$.push(q);return $};var rb=Object.prototype.hasOwnProperty;const Th=function(j){if(!R(j))return Gi(j);var $=Xc(j),q=[];for(var X in j)(X!="constructor"||!$&&rb.call(j,X))&&q.push(X);return q},ul=function(j){return dl(j)?di(j,!0):Th(j)},ib=function(j,$){return j&&Ge($,ul($),j)};var Ih=o&&!o.nodeType&&o,hl=Ih&&!0&&t&&!t.nodeType&&t,Mh=hl&&hl.exports===Ih?B.Buffer:void 0,nd=Mh?Mh.allocUnsafe:void 0;const Ph=function(j,$){if($)return j.slice();var q=j.length,X=nd?nd(q):new j.constructor(q);return j.copy(X),X},Bh=function(j,$){var q=-1,X=j.length;for($||($=Array(X));++q<X;)$[q]=j[q];return $},Ws=function(j,$){for(var q=-1,X=j==null?0:j.length,De=0,ze=[];++q<X;){var Ke=j[q];$(Ke,q,j)&&(ze[De++]=Ke)}return ze},Nh=function(){return[]};var od=Object.prototype.propertyIsEnumerable,rd=Object.getOwnPropertySymbols;const At=rd?function(j){return j==null?[]:(j=Object(j),Ws(rd(j),function($){return od.call(j,$)}))}:Nh,sb=function(j,$){return Ge(j,At(j),$)},pl=function(j,$){for(var q=-1,X=$.length,De=j.length;++q<X;)j[De+q]=$[q];return j},fl=ui(Object.getPrototypeOf,Object),qi=Object.getOwnPropertySymbols?function(j){for(var $=[];j;)pl($,At(j)),j=fl(j);return $}:Nh,id=function(j,$){return Ge(j,qi(j),$)},hi=function(j,$,q){var X=$(j);return pr(j)?X:pl(X,q(j))},Rh=function(j){return hi(j,ed,At)},sd=function(j){return hi(j,ul,qi)},ad=Ho(B,"DataView"),gl=Ho(B,"Promise"),ld=Ho(B,"Set"),Gs=Ho(B,"WeakMap");var Oh="[object Map]",Lh="[object Promise]",zh="[object Set]",qs="[object WeakMap]",ml="[object DataView]",ab=xe(ad),lb=xe(ur),cb=xe(gl),db=xe(ld),Ki=xe(Gs),pi=J;(ad&&pi(new ad(new ArrayBuffer(1)))!=ml||ur&&pi(new ur)!=Oh||gl&&pi(gl.resolve())!=Lh||ld&&pi(new ld)!=zh||Gs&&pi(new Gs)!=qs)&&(pi=function(j){var $=J(j),q=$=="[object Object]"?j.constructor:void 0,X=q?xe(q):"";if(X)switch(X){case ab:return ml;case lb:return Oh;case cb:return Lh;case db:return zh;case Ki:return qs}return $});const bl=pi;var jh=Object.prototype.hasOwnProperty;const Fh=function(j){var $=j.length,q=new j.constructor($);return $&&typeof j[0]=="string"&&jh.call(j,"index")&&(q.index=j.index,q.input=j.input),q},cd=B.Uint8Array,kl=function(j){var $=new j.constructor(j.byteLength);return new cd($).set(new cd(j)),$},$h=function(j,$){var q=$?kl(j.buffer):j.buffer;return new j.constructor(q,j.byteOffset,j.byteLength)};var ub=/\w*$/;const Vh=function(j){var $=new j.constructor(j.source,ub.exec(j));return $.lastIndex=j.lastIndex,$};var Uh=Z?Z.prototype:void 0,dd=Uh?Uh.valueOf:void 0;const ud=function(j){return dd?Object(dd.call(j)):{}},hb=function(j,$){var q=$?kl(j.buffer):j.buffer;return new j.constructor(q,j.byteOffset,j.length)},Hh=function(j,$,q){var X=j.constructor;switch($){case"[object ArrayBuffer]":return kl(j);case"[object Boolean]":case"[object Date]":return new X(+j);case"[object DataView]":return $h(j,q);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return hb(j,q);case"[object Map]":case"[object Set]":return new X;case"[object Number]":case"[object String]":return new X(j);case"[object RegExp]":return Vh(j);case"[object Symbol]":return ud(j)}};var hd=Object.create;const pb=function(){function j(){}return function($){if(!R($))return{};if(hd)return hd($);j.prototype=$;var q=new j;return j.prototype=void 0,q}}(),Wh=function(j){return typeof j.constructor!="function"||Xc(j)?{}:pb(fl(j))},pd=function(j){return le(j)&&bl(j)=="[object Map]"};var Gh=Wi&&Wi.isMap;const fd=Gh?al(Gh):pd,gd=function(j){return le(j)&&bl(j)=="[object Set]"};var wl=Wi&&Wi.isSet;const md=wl?al(wl):gd;var bd="[object Arguments]",kd="[object Function]",wd="[object Object]",_t={};_t[bd]=_t["[object Array]"]=_t["[object ArrayBuffer]"]=_t["[object DataView]"]=_t["[object Boolean]"]=_t["[object Date]"]=_t["[object Float32Array]"]=_t["[object Float64Array]"]=_t["[object Int8Array]"]=_t["[object Int16Array]"]=_t["[object Int32Array]"]=_t["[object Map]"]=_t["[object Number]"]=_t[wd]=_t["[object RegExp]"]=_t["[object Set]"]=_t["[object String]"]=_t["[object Symbol]"]=_t["[object Uint8Array]"]=_t["[object Uint8ClampedArray]"]=_t["[object Uint16Array]"]=_t["[object Uint32Array]"]=!0,_t["[object Error]"]=_t[kd]=_t["[object WeakMap]"]=!1;const qh=function j($,q,X,De,ze,Ke){var Ye,Gt=1&q,Vt=2&q,Ys=4&q;if(X&&(Ye=ze?X($,De,ze,Ke):X($)),Ye!==void 0)return Ye;if(!R($))return $;var Pr=pr($);if(Pr){if(Ye=Fh($),!Gt)return Bh($,Ye)}else{var Eo=bl($),ut=Eo==kd||Eo=="[object GeneratorFunction]";if(xh($))return Ph($,Gt);if(Eo==wd||Eo==bd||ut&&!ze){if(Ye=Vt||ut?{}:Wh($),!Gt)return Vt?id($,ib(Ye,$)):sb($,td(Ye,$))}else{if(!_t[Eo])return ze?$:{};Ye=Hh($,Eo,Gt)}}Ke||(Ke=new $i);var gi=Ke.get($);if(gi)return gi;Ke.set($,Ye),md($)?$.forEach(function(Mn){Ye.add(j(Mn,q,X,Mn,$,Ke))}):fd($)&&$.forEach(function(Mn,So){Ye.set(So,j(Mn,q,X,So,$,Ke))});var fr=Pr?void 0:(Ys?Vt?sd:Rh:Vt?ul:ed)($);return $s(fr||$,function(Mn,So){fr&&(Mn=$[So=Mn]),sl(Ye,So,j(Mn,q,X,So,$,Ke))}),Ye},fb=function(j,$){return qh(j,5,$=typeof $=="function"?$:void 0)};var gb=Function.prototype,mb=Object.prototype,Kh=gb.toString,bb=mb.hasOwnProperty,fi=Kh.call(Object);const Ks=function(j){if(!le(j)||J(j)!="[object Object]")return!1;var $=fl(j);if($===null)return!0;var q=bb.call($,"constructor")&&$.constructor;return typeof q=="function"&&q instanceof q&&Kh.call(q)==fi},kb=function(j){return le(j)&&j.nodeType===1&&!Ks(j)};class Yh extends y{constructor($,q={}){super(q),this._editor=null,this._throttledSave=Ne(this._save.bind(this),typeof q.saveInterval=="number"?q.saveInterval:5e3),$&&(this._creator=(X,De)=>$.create(X,De)),this._destructor=X=>X.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator($){this._creator=$}setDestructor($){this._destructor=$}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch($=>{console.error("An error happened during the editor destroying.",$)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const $=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,$,$.context)}}).then(()=>{this._fire("restart")})}create($=this._elementOrData,q=this._config,X){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=$,this._config=this._cloneEditorConfiguration(q)||{},this._config.context=X,this._creator($,this._config))).then(De=>{this._editor=De,De.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=De.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const $=this._editor;return this._editor=null,$.model.document.off("change:data",this._throttledSave),this._destructor($)})}_save(){const $=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=$}catch(q){console.error(q,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties($){this._excludedProps=$}_getData(){const $={};for(const q of this._editor.model.document.getRootNames())$[q]=this._editor.data.get({rootName:q});return $}_isErrorComingFromThisItem($){return D(this._editor,$.context,this._excludedProps)}_cloneEditorConfiguration($){return fb($,(q,X)=>kb(q)||X==="context"?q:void 0)}}const Mr=Symbol("MainQueueId");class vl extends y{constructor($,q={}){super(q),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new wb,this._watchdogConfig=q,this._creator=X=>$.create(X),this._destructor=X=>X.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator($){this._creator=$}setDestructor($){this._destructor=$}get context(){return this._context}create($={}){return this._actionQueues.enqueue(Mr,()=>(this._contextConfig=$,this._create()))}getItem($){return this._getWatchdog($)._item}getItemState($){return this._getWatchdog($).state}add($){const q=Qh($);return Promise.all(q.map(X=>this._actionQueues.enqueue(X.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let De;if(this._watchdogs.has(X.id))throw new Error(`Item with the given id is already added: '${X.id}'.`);if(X.type==="editor")return De=new Yh(null,this._watchdogConfig),De.setCreator(X.creator),De._setExcludedProperties(this._contextProps),X.destructor&&De.setDestructor(X.destructor),this._watchdogs.set(X.id,De),De.on("error",(ze,{error:Ke,causesRestart:Ye})=>{this._fire("itemError",{itemId:X.id,error:Ke}),Ye&&this._actionQueues.enqueue(X.id,()=>new Promise(Gt=>{const Vt=()=>{De.off("restart",Vt),this._fire("itemRestart",{itemId:X.id}),Gt()};De.on("restart",Vt)}))}),De.create(X.sourceElementOrData,X.config,this._context);throw new Error(`Not supported item type: '${X.type}'.`)})))}remove($){const q=Qh($);return Promise.all(q.map(X=>this._actionQueues.enqueue(X,()=>{const De=this._getWatchdog(X);return this._watchdogs.delete(X),De.destroy()})))}destroy(){return this._actionQueues.enqueue(Mr,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Mr,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch($=>{console.error("An error happened during destroying the context or items.",$)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then($=>(this._context=$,this._contextProps=E(this._context),Promise.all(Array.from(this._watchdogs.values()).map(q=>(q._setExcludedProperties(this._contextProps),q.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const $=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(q=>q.destroy())).then(()=>this._destructor($))})}_getWatchdog($){const q=this._watchdogs.get($);if(!q)throw new Error(`Item with the given id was not registered: ${$}.`);return q}_isErrorComingFromThisItem($){for(const q of this._watchdogs.values())if(q._isErrorComingFromThisItem($))return!1;return D(this._context,$.context)}}class wb{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty($){this._onEmptyCallbacks.push($)}enqueue($,q){const X=$===Mr;this._activeActions++,this._queues.get($)||this._queues.set($,Promise.resolve());const De=(X?Promise.all(this._queues.values()):Promise.all([this._queues.get(Mr),this._queues.get($)])).then(q),ze=De.catch(()=>{});return this._queues.set($,ze),De.finally(()=>{this._activeActions--,this._queues.get($)===ze&&this._activeActions===0&&this._onEmptyCallbacks.forEach(Ke=>Ke())})}}function Qh(j){return Array.isArray(j)?j:[j]}const Zh=m().createContext("contextWatchdog");class Cl extends m().Component{constructor($,q){super($,q),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate($){return this._shouldComponentUpdate($)}async _shouldComponentUpdate($){return $.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog($.config)),$.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog($.config),!0):this.props.children!==$.children}render(){return m().createElement(Zh.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog($){this.contextWatchdog=new vl(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(q,X)=>{this.props.onError(X.error,{phase:"runtime",willContextRestart:X.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create($).catch(q=>{this.props.onError(q,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Cl.defaultProps={isLayoutReady:!0,onError:(j,$)=>console.error(j,$)},Cl.propTypes={id:A().string,isLayoutReady:A().bool,context:A().func,watchdogConfig:A().object,config:A().object,onReady:A().func,onError:A().func};const yl="Lock from React integration (@ckeditor/ckeditor5-react)";class Yi extends m().Component{constructor($){super($),this.editorDestructionInProgress=null,this.domContainer=m().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:q}=window;if(q){const[X]=q.split(".").map(Number);X<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate($){return!!this.editor&&($.id!==this.props.id||$.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor($)&&this.editor.data.set($.data),"disabled"in $&&($.disabled?this.editor.enableReadOnlyMode(yl):this.editor.disableReadOnlyMode(yl)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return m().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof vl?this.watchdog=new Jh(this.context):this.watchdog=new Yi._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator(($,q)=>this._createEditor($,q)),this.watchdog.on("error",($,{error:q,causesRestart:X})=>{(this.props.onError||console.error)(q,{phase:"runtime",willEditorRestart:X})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch($=>{(this.props.onError||console.error)($,{phase:"initialization",willEditorRestart:!1})}))}_createEditor($,q){return this.props.editor.create($,q).then(X=>{"disabled"in this.props&&this.props.disabled&&X.enableReadOnlyMode(yl);const De=X.model.document,ze=X.editing.view.document;return De.on("change:data",Ke=>{this.props.onChange&&this.props.onChange(Ke,X)}),ze.on("focus",Ke=>{this.props.onFocus&&this.props.onFocus(Ke,X)}),ze.on("blur",Ke=>{this.props.onBlur&&this.props.onBlur(Ke,X)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(X)}),X})}async _destroyEditor(){this.editorDestructionInProgress=new Promise($=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,$()):this.instance?(await this.instance.destroy(),this.instance=null,$()):void $())})}_shouldUpdateEditor($){return this.props.data!==$.data&&this.editor.data.get()!==$.data}_getConfig(){const $=this.props.config||{};return this.props.data&&$.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...$,initialData:$.initialData||this.props.data||""}}}Yi.contextType=Zh,Yi.propTypes={editor:A().func.isRequired,data:A().string,config:A().object,disableWatchdog:A().bool,watchdogConfig:A().object,onChange:A().func,onReady:A().func,onFocus:A().func,onBlur:A().func,onError:A().func,disabled:A().bool,id:A().any},Yi._EditorWatchdog=Yh;class Jh{constructor($){this._contextWatchdog=$,this._id=function(){const q=4294967296*Math.random()>>>0,X=4294967296*Math.random()>>>0,De=4294967296*Math.random()>>>0,ze=4294967296*Math.random()>>>0;return"e"+_[q>>0&255]+_[q>>8&255]+_[q>>16&255]+_[q>>24&255]+_[X>>0&255]+_[X>>8&255]+_[X>>16&255]+_[X>>24&255]+_[De>>0&255]+_[De>>8&255]+_[De>>16&255]+_[De>>24&255]+_[ze>>0&255]+_[ze>>8&255]+_[ze>>16&255]+_[ze>>24&255]}()}setCreator($){this._creator=$}create($,q){return this._contextWatchdog.add({sourceElementOrData:$,config:q,creator:this._creator,id:this._id,type:"editor"})}on($,q){this._contextWatchdog.on("itemError",(X,{itemId:De,error:ze})=>{De===this._id&&q(null,{error:ze,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}})(),f})())})(Tg,Tg.exports);var YP=Tg.exports,Ig={exports:{}};Ig.exports;(function(t,o){(function(a){const c=a.en=a.en||{};c.dictionary=Object.assign(c.dictionary||{},{"%0 of %1":"%0 of %1","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor","Rich Text Editor. Editing area: %0":"Rich Text Editor. Editing area: %0",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(a,c){t.exports=c()}(self,()=>(()=>{var a={4959:(f,b,m)=>{const v=m(1103),A={};for(const y of Object.keys(v))A[v[y]]=y;const _={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};f.exports=_;for(const y of Object.keys(_)){if(!("channels"in _[y]))throw new Error("missing channels property: "+y);if(!("labels"in _[y]))throw new Error("missing channel labels property: "+y);if(_[y].labels.length!==_[y].channels)throw new Error("channel and label counts mismatch: "+y);const{channels:E,labels:S}=_[y];delete _[y].channels,delete _[y].labels,Object.defineProperty(_[y],"channels",{value:E}),Object.defineProperty(_[y],"labels",{value:S})}_.rgb.hsl=function(y){const E=y[0]/255,S=y[1]/255,D=y[2]/255,R=Math.min(E,S,D),I=Math.max(E,S,D),P=I-R;let B,F;I===R?B=0:E===I?B=(S-D)/P:S===I?B=2+(D-E)/P:D===I&&(B=4+(E-S)/P),B=Math.min(60*B,360),B<0&&(B+=360);const M=(R+I)/2;return F=I===R?0:M<=.5?P/(I+R):P/(2-I-R),[B,100*F,100*M]},_.rgb.hsv=function(y){let E,S,D,R,I;const P=y[0]/255,B=y[1]/255,F=y[2]/255,M=Math.max(P,B,F),W=M-Math.min(P,B,F),H=function(K){return(M-K)/6/W+.5};return W===0?(R=0,I=0):(I=W/M,E=H(P),S=H(B),D=H(F),P===M?R=D-S:B===M?R=.3333333333333333+E-D:F===M&&(R=.6666666666666666+S-E),R<0?R+=1:R>1&&(R-=1)),[360*R,100*I,100*M]},_.rgb.hwb=function(y){const E=y[0],S=y[1];let D=y[2];const R=_.rgb.hsl(y)[0],I=1/255*Math.min(E,Math.min(S,D));return D=1-.00392156862745098*Math.max(E,Math.max(S,D)),[R,100*I,100*D]},_.rgb.cmyk=function(y){const E=y[0]/255,S=y[1]/255,D=y[2]/255,R=Math.min(1-E,1-S,1-D);return[100*((1-E-R)/(1-R)||0),100*((1-S-R)/(1-R)||0),100*((1-D-R)/(1-R)||0),100*R]},_.rgb.keyword=function(y){const E=A[y];if(E)return E;let S,D=1/0;for(const P of Object.keys(v)){const B=v[P],F=(I=B,((R=y)[0]-I[0])**2+(R[1]-I[1])**2+(R[2]-I[2])**2);F<D&&(D=F,S=P)}var R,I;return S},_.keyword.rgb=function(y){return v[y]},_.rgb.xyz=function(y){let E=y[0]/255,S=y[1]/255,D=y[2]/255;return E=E>.04045?((E+.055)/1.055)**2.4:E/12.92,S=S>.04045?((S+.055)/1.055)**2.4:S/12.92,D=D>.04045?((D+.055)/1.055)**2.4:D/12.92,[100*(.4124*E+.3576*S+.1805*D),100*(.2126*E+.7152*S+.0722*D),100*(.0193*E+.1192*S+.9505*D)]},_.rgb.lab=function(y){const E=_.rgb.xyz(y);let S=E[0],D=E[1],R=E[2];return S/=95.047,D/=100,R/=108.883,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,D=D>.008856?D**.3333333333333333:7.787*D+.13793103448275862,R=R>.008856?R**.3333333333333333:7.787*R+.13793103448275862,[116*D-16,500*(S-D),200*(D-R)]},_.hsl.rgb=function(y){const E=y[0]/360,S=y[1]/100,D=y[2]/100;let R,I,P;if(S===0)return P=255*D,[P,P,P];R=D<.5?D*(1+S):D+S-D*S;const B=2*D-R,F=[0,0,0];for(let M=0;M<3;M++)I=E+.3333333333333333*-(M-1),I<0&&I++,I>1&&I--,P=6*I<1?B+6*(R-B)*I:2*I<1?R:3*I<2?B+(R-B)*(.6666666666666666-I)*6:B,F[M]=255*P;return F},_.hsl.hsv=function(y){const E=y[0];let S=y[1]/100,D=y[2]/100,R=S;const I=Math.max(D,.01);return D*=2,S*=D<=1?D:2-D,R*=I<=1?I:2-I,[E,100*(D===0?2*R/(I+R):2*S/(D+S)),100*((D+S)/2)]},_.hsv.rgb=function(y){const E=y[0]/60,S=y[1]/100;let D=y[2]/100;const R=Math.floor(E)%6,I=E-Math.floor(E),P=255*D*(1-S),B=255*D*(1-S*I),F=255*D*(1-S*(1-I));switch(D*=255,R){case 0:return[D,F,P];case 1:return[B,D,P];case 2:return[P,D,F];case 3:return[P,B,D];case 4:return[F,P,D];case 5:return[D,P,B]}},_.hsv.hsl=function(y){const E=y[0],S=y[1]/100,D=y[2]/100,R=Math.max(D,.01);let I,P;P=(2-S)*D;const B=(2-S)*R;return I=S*R,I/=B<=1?B:2-B,I=I||0,P/=2,[E,100*I,100*P]},_.hwb.rgb=function(y){const E=y[0]/360;let S=y[1]/100,D=y[2]/100;const R=S+D;let I;R>1&&(S/=R,D/=R);const P=Math.floor(6*E),B=1-D;I=6*E-P,1&P&&(I=1-I);const F=S+I*(B-S);let M,W,H;switch(P){default:case 6:case 0:M=B,W=F,H=S;break;case 1:M=F,W=B,H=S;break;case 2:M=S,W=B,H=F;break;case 3:M=S,W=F,H=B;break;case 4:M=F,W=S,H=B;break;case 5:M=B,W=S,H=F}return[255*M,255*W,255*H]},_.cmyk.rgb=function(y){const E=y[0]/100,S=y[1]/100,D=y[2]/100,R=y[3]/100;return[255*(1-Math.min(1,E*(1-R)+R)),255*(1-Math.min(1,S*(1-R)+R)),255*(1-Math.min(1,D*(1-R)+R))]},_.xyz.rgb=function(y){const E=y[0]/100,S=y[1]/100,D=y[2]/100;let R,I,P;return R=3.2406*E+-1.5372*S+-.4986*D,I=-.9689*E+1.8758*S+.0415*D,P=.0557*E+-.204*S+1.057*D,R=R>.0031308?1.055*R**.4166666666666667-.055:12.92*R,I=I>.0031308?1.055*I**.4166666666666667-.055:12.92*I,P=P>.0031308?1.055*P**.4166666666666667-.055:12.92*P,R=Math.min(Math.max(0,R),1),I=Math.min(Math.max(0,I),1),P=Math.min(Math.max(0,P),1),[255*R,255*I,255*P]},_.xyz.lab=function(y){let E=y[0],S=y[1],D=y[2];return E/=95.047,S/=100,D/=108.883,E=E>.008856?E**.3333333333333333:7.787*E+.13793103448275862,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,D=D>.008856?D**.3333333333333333:7.787*D+.13793103448275862,[116*S-16,500*(E-S),200*(S-D)]},_.lab.xyz=function(y){let E,S,D;S=(y[0]+16)/116,E=y[1]/500+S,D=S-y[2]/200;const R=S**3,I=E**3,P=D**3;return S=R>.008856?R:(S-.13793103448275862)/7.787,E=I>.008856?I:(E-.13793103448275862)/7.787,D=P>.008856?P:(D-.13793103448275862)/7.787,E*=95.047,S*=100,D*=108.883,[E,S,D]},_.lab.lch=function(y){const E=y[0],S=y[1],D=y[2];let R;return R=360*Math.atan2(D,S)/2/Math.PI,R<0&&(R+=360),[E,Math.sqrt(S*S+D*D),R]},_.lch.lab=function(y){const E=y[0],S=y[1],D=y[2]/360*2*Math.PI;return[E,S*Math.cos(D),S*Math.sin(D)]},_.rgb.ansi16=function(y,E=null){const[S,D,R]=y;let I=E===null?_.rgb.hsv(y)[2]:E;if(I=Math.round(I/50),I===0)return 30;let P=30+(Math.round(R/255)<<2|Math.round(D/255)<<1|Math.round(S/255));return I===2&&(P+=60),P},_.hsv.ansi16=function(y){return _.rgb.ansi16(_.hsv.rgb(y),y[2])},_.rgb.ansi256=function(y){const E=y[0],S=y[1],D=y[2];return E===S&&S===D?E<8?16:E>248?231:Math.round((E-8)/247*24)+232:16+36*Math.round(E/255*5)+6*Math.round(S/255*5)+Math.round(D/255*5)},_.ansi16.rgb=function(y){let E=y%10;if(E===0||E===7)return y>50&&(E+=3.5),E=E/10.5*255,[E,E,E];const S=.5*(1+~~(y>50));return[(1&E)*S*255,(E>>1&1)*S*255,(E>>2&1)*S*255]},_.ansi256.rgb=function(y){if(y>=232){const S=10*(y-232)+8;return[S,S,S]}let E;return y-=16,[Math.floor(y/36)/5*255,Math.floor((E=y%36)/6)/5*255,E%6/5*255]},_.rgb.hex=function(y){const E=(((255&Math.round(y[0]))<<16)+((255&Math.round(y[1]))<<8)+(255&Math.round(y[2]))).toString(16).toUpperCase();return"000000".substring(E.length)+E},_.hex.rgb=function(y){const E=y.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!E)return[0,0,0];let S=E[0];E[0].length===3&&(S=S.split("").map(R=>R+R).join(""));const D=parseInt(S,16);return[D>>16&255,D>>8&255,255&D]},_.rgb.hcg=function(y){const E=y[0]/255,S=y[1]/255,D=y[2]/255,R=Math.max(Math.max(E,S),D),I=Math.min(Math.min(E,S),D),P=R-I;let B,F;return B=P<1?I/(1-P):0,F=P<=0?0:R===E?(S-D)/P%6:R===S?2+(D-E)/P:4+(E-S)/P,F/=6,F%=1,[360*F,100*P,100*B]},_.hsl.hcg=function(y){const E=y[1]/100,S=y[2]/100,D=S<.5?2*E*S:2*E*(1-S);let R=0;return D<1&&(R=(S-.5*D)/(1-D)),[y[0],100*D,100*R]},_.hsv.hcg=function(y){const E=y[1]/100,S=y[2]/100,D=E*S;let R=0;return D<1&&(R=(S-D)/(1-D)),[y[0],100*D,100*R]},_.hcg.rgb=function(y){const E=y[0]/360,S=y[1]/100,D=y[2]/100;if(S===0)return[255*D,255*D,255*D];const R=[0,0,0],I=E%1*6,P=I%1,B=1-P;let F=0;switch(Math.floor(I)){case 0:R[0]=1,R[1]=P,R[2]=0;break;case 1:R[0]=B,R[1]=1,R[2]=0;break;case 2:R[0]=0,R[1]=1,R[2]=P;break;case 3:R[0]=0,R[1]=B,R[2]=1;break;case 4:R[0]=P,R[1]=0,R[2]=1;break;default:R[0]=1,R[1]=0,R[2]=B}return F=(1-S)*D,[255*(S*R[0]+F),255*(S*R[1]+F),255*(S*R[2]+F)]},_.hcg.hsv=function(y){const E=y[1]/100,S=E+y[2]/100*(1-E);let D=0;return S>0&&(D=E/S),[y[0],100*D,100*S]},_.hcg.hsl=function(y){const E=y[1]/100,S=y[2]/100*(1-E)+.5*E;let D=0;return S>0&&S<.5?D=E/(2*S):S>=.5&&S<1&&(D=E/(2*(1-S))),[y[0],100*D,100*S]},_.hcg.hwb=function(y){const E=y[1]/100,S=E+y[2]/100*(1-E);return[y[0],100*(S-E),100*(1-S)]},_.hwb.hcg=function(y){const E=y[1]/100,S=1-y[2]/100,D=S-E;let R=0;return D<1&&(R=(S-D)/(1-D)),[y[0],100*D,100*R]},_.apple.rgb=function(y){return[y[0]/65535*255,y[1]/65535*255,y[2]/65535*255]},_.rgb.apple=function(y){return[y[0]/255*65535,y[1]/255*65535,y[2]/255*65535]},_.gray.rgb=function(y){return[y[0]/100*255,y[0]/100*255,y[0]/100*255]},_.gray.hsl=function(y){return[0,0,y[0]]},_.gray.hsv=_.gray.hsl,_.gray.hwb=function(y){return[0,100,y[0]]},_.gray.cmyk=function(y){return[0,0,0,y[0]]},_.gray.lab=function(y){return[y[0],0,0]},_.gray.hex=function(y){const E=255&Math.round(y[0]/100*255),S=((E<<16)+(E<<8)+E).toString(16).toUpperCase();return"000000".substring(S.length)+S},_.rgb.gray=function(y){return[(y[0]+y[1]+y[2])/3/255*100]}},841:(f,b,m)=>{const v=m(4959),A=m(9325),_={};Object.keys(v).forEach(y=>{_[y]={},Object.defineProperty(_[y],"channels",{value:v[y].channels}),Object.defineProperty(_[y],"labels",{value:v[y].labels});const E=A(y);Object.keys(E).forEach(S=>{const D=E[S];_[y][S]=function(R){const I=function(...P){const B=P[0];if(B==null)return B;B.length>1&&(P=B);const F=R(P);if(typeof F=="object")for(let M=F.length,W=0;W<M;W++)F[W]=Math.round(F[W]);return F};return"conversion"in R&&(I.conversion=R.conversion),I}(D),_[y][S].raw=function(R){const I=function(...P){const B=P[0];return B==null?B:(B.length>1&&(P=B),R(P))};return"conversion"in R&&(I.conversion=R.conversion),I}(D)})}),f.exports=_},9325:(f,b,m)=>{const v=m(4959);function A(E){const S=function(){const R={},I=Object.keys(v);for(let P=I.length,B=0;B<P;B++)R[I[B]]={distance:-1,parent:null};return R}(),D=[E];for(S[E].distance=0;D.length;){const R=D.pop(),I=Object.keys(v[R]);for(let P=I.length,B=0;B<P;B++){const F=I[B],M=S[F];M.distance===-1&&(M.distance=S[R].distance+1,M.parent=R,D.unshift(F))}}return S}function _(E,S){return function(D){return S(E(D))}}function y(E,S){const D=[S[E].parent,E];let R=v[S[E].parent][E],I=S[E].parent;for(;S[I].parent;)D.unshift(S[I].parent),R=_(v[S[I].parent][I],R),I=S[I].parent;return R.conversion=D,R}f.exports=function(E){const S=A(E),D={},R=Object.keys(S);for(let I=R.length,P=0;P<I;P++){const B=R[P];S[B].parent!==null&&(D[B]=y(B,S))}return D}},1103:f=>{f.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8603:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const E=y},3062:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const E=y},903:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CChCA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;
}
`],sourceRoot:""}]);const E=y},4717:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const E=y},9315:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const E=y},8733:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const E=y},3508:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const E=y},2640:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const E=y},3535:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const E=y},1568:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const E=y},6270:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const E=y},5083:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const E=y},4036:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const E=y},3773:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const E=y},3689:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const E=y},1905:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=y},9773:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const E=y},2347:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const E=y},7754:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=y},111:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const E=y},4721:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const E=y},5730:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const E=y},4564:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const E=y},6082:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const E=y},2417:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const E=y},1199:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAEA,uBACC,eA0ED,CAxEC,0BACC,iBAKD,CAHC,qCACC,cACD,CAIA,+CACC,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqDD,CAxCC,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,0FAAgG,CAJhG,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAIF,wEACC,qBACD,CAKF,6CACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAMA,wDACC,cAKD,CAHC,qEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

.ck-content .todo-list {
	list-style: none;

	& li {
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			-webkit-appearance: none;
			display: inline-block;
			position: relative;
			width: var(--ck-todo-list-checkmark-size);
			height: var(--ck-todo-list-checkmark-size);
			vertical-align: middle;

			/* Needed on iOS */
			border: 0;

			/* LTR styles */
			left: -25px;
			margin-right: -15px;
			right: 0;
			margin-left: 0;

			&::before {
				display: block;
				position: absolute;
				box-sizing: border-box;
				content: '';
				width: 100%;
				height: 100%;
				border: 1px solid hsl(0, 0%, 20%);
				border-radius: 2px;
				transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;
			}

			&::after {
				display: block;
				position: absolute;
				box-sizing: content-box;
				pointer-events: none;
				content: '';

				/* Calculate tick position, size and border-width proportional to the checkmark size. */
				left: calc( var(--ck-todo-list-checkmark-size) / 3 );
				top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
				border-style: solid;
				border-color: transparent;
				border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
				transform: rotate(45deg);
			}

			&[checked] {
				&::before {
					background: hsl(126, 64%, 41%);
					border-color: hsl(126, 64%, 41%);
				}

				&::after {
					border-color: hsl(0, 0%, 100%);
				}
			}
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}
	}
}

/* RTL styles */
[dir="rtl"] .todo-list .todo-list__label > input {
	left: 0;
	margin-right: 0;
	right: -25px;
	margin-left: -15px;
}

/*
 * To-do list should be interactive only during the editing
 * (https://github.com/ckeditor/ckeditor5/issues/2090).
 */
.ck-editor__editable .todo-list .todo-list__label > input {
	cursor: pointer;

	&:hover::before {
		box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
	}
}
`],sourceRoot:""}]);const E=y},4652:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const E=y},7442:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const E=y},9292:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=y},7368:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=y},4070:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const E=y},9247:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const E=y},1613:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const E=y},6306:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const E=y},2128:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,":root{--ck-color-table-caption-background:#f7f7f7;--ck-color-table-caption-text:#333;--ck-color-table-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-table-caption-background);caption-side:top;color:var(--ck-color-table-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-table-caption-highlighted-background)}to{background-color:var(--ck-color-table-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAMC,yDAA0D,CAJ1D,gBAAiB,CAGjB,wCAAyC,CAJzC,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-caption-background: hsl(0, 0%, 97%);
	--ck-color-table-caption-text: hsl(0, 0%, 20%);
	--ck-color-table-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-table-caption-text);
	background-color: var(--ck-color-table-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-table-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-table-caption-background);
	}
}
`],sourceRoot:""}]);const E=y},5087:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const E=y},4101:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,":root{--ck-color-table-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:-999999px;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:-999999px;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-table-column-resizer-hover);opacity:.25}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,iEAAkE,CAClE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAOC,gBAAiB,CAGjB,iBAAkB,CATlB,iBAAkB,CAOlB,oDAAqD,CAFrD,aAAc,CAKd,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,2DAA4D,CAC5D,WACD,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-table-column-resizer-hover);
	opacity: 0.25;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const E=y},3881:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const E=y},6237:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=y},7341:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const E=y},6945:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=y},4906:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=y},5332:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=y},6781:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const E=y},3398:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAMD,CAJC,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const E=y},5485:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=y},3949:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=y},7686:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=y},7339:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const E=y},9688:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=y},8847:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const E=y},6574:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const E=y},4879:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=y},3662:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const E=y},2577:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=y},1046:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=y},8793:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=y},4650:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const E=y},7676:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=y},5868:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=y},6764:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const E=y},9695:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const E=y},5542:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=y},3332:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const E=y},4793:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-modal) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-modal) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const E=y},3488:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=y},8506:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const E=y},4921:(f,b,m)=>{m.d(b,{Z:()=>E});var v=m(1799),A=m.n(v),_=m(2609),y=m.n(_)()(A());y.push([f.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const E=y},2609:f=>{f.exports=function(b){var m=[];return m.toString=function(){return this.map(function(v){var A=b(v);return v[2]?"@media ".concat(v[2]," {").concat(A,"}"):A}).join("")},m.i=function(v,A,_){typeof v=="string"&&(v=[[null,v,""]]);var y={};if(_)for(var E=0;E<this.length;E++){var S=this[E][0];S!=null&&(y[S]=!0)}for(var D=0;D<v.length;D++){var R=[].concat(v[D]);_&&y[R[0]]||(A&&(R[2]?R[2]="".concat(A," and ").concat(R[2]):R[2]=A),m.push(R))}},m}},1799:f=>{function b(v,A){return function(_){if(Array.isArray(_))return _}(v)||function(_,y){var E=_&&(typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"]);if(E!=null){var S,D,R=[],I=!0,P=!1;try{for(E=E.call(_);!(I=(S=E.next()).done)&&(R.push(S.value),!y||R.length!==y);I=!0);}catch(B){P=!0,D=B}finally{try{I||E.return==null||E.return()}finally{if(P)throw D}}return R}}(v,A)||function(_,y){if(_){if(typeof _=="string")return m(_,y);var E=Object.prototype.toString.call(_).slice(8,-1);if(E==="Object"&&_.constructor&&(E=_.constructor.name),E==="Map"||E==="Set")return Array.from(_);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return m(_,y)}}(v,A)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function m(v,A){(A==null||A>v.length)&&(A=v.length);for(var _=0,y=new Array(A);_<A;_++)y[_]=v[_];return y}f.exports=function(v){var A=b(v,4),_=A[1],y=A[3];if(!y)return _;if(typeof btoa=="function"){var E=btoa(unescape(encodeURIComponent(JSON.stringify(y)))),S="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(E),D="/*# ".concat(S," */"),R=y.sources.map(function(I){return"/*# sourceURL=".concat(y.sourceRoot||"").concat(I," */")});return[_].concat(R).concat([D]).join(`
`)}return[_].join(`
`)}},6062:(f,b,m)=>{var v,A=function(){return v===void 0&&(v=!!(window&&document&&document.all&&!window.atob)),v},_=function(){var H={};return function(K){if(H[K]===void 0){var Z=document.querySelector(K);if(window.HTMLIFrameElement&&Z instanceof window.HTMLIFrameElement)try{Z=Z.contentDocument.head}catch{Z=null}H[K]=Z}return H[K]}}(),y=[];function E(H){for(var K=-1,Z=0;Z<y.length;Z++)if(y[Z].identifier===H){K=Z;break}return K}function S(H,K){for(var Z={},Y=[],te=0;te<H.length;te++){var ce=H[te],re=K.base?ce[0]+K.base:ce[0],ae=Z[re]||0,ie="".concat(re," ").concat(ae);Z[re]=ae+1;var pe=E(ie),oe={css:ce[1],media:ce[2],sourceMap:ce[3]};pe!==-1?(y[pe].references++,y[pe].updater(oe)):y.push({identifier:ie,updater:W(oe,K),references:1}),Y.push(ie)}return Y}function D(H){var K=document.createElement("style"),Z=H.attributes||{};if(Z.nonce===void 0){var Y=m.nc;Y&&(Z.nonce=Y)}if(Object.keys(Z).forEach(function(ce){K.setAttribute(ce,Z[ce])}),typeof H.insert=="function")H.insert(K);else{var te=_(H.insert||"head");if(!te)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");te.appendChild(K)}return K}var R,I=(R=[],function(H,K){return R[H]=K,R.filter(Boolean).join(`
`)});function P(H,K,Z,Y){var te=Z?"":Y.media?"@media ".concat(Y.media," {").concat(Y.css,"}"):Y.css;if(H.styleSheet)H.styleSheet.cssText=I(K,te);else{var ce=document.createTextNode(te),re=H.childNodes;re[K]&&H.removeChild(re[K]),re.length?H.insertBefore(ce,re[K]):H.appendChild(ce)}}function B(H,K,Z){var Y=Z.css,te=Z.media,ce=Z.sourceMap;if(te?H.setAttribute("media",te):H.removeAttribute("media"),ce&&typeof btoa<"u"&&(Y+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ce))))," */")),H.styleSheet)H.styleSheet.cssText=Y;else{for(;H.firstChild;)H.removeChild(H.firstChild);H.appendChild(document.createTextNode(Y))}}var F=null,M=0;function W(H,K){var Z,Y,te;if(K.singleton){var ce=M++;Z=F||(F=D(K)),Y=P.bind(null,Z,ce,!1),te=P.bind(null,Z,ce,!0)}else Z=D(K),Y=B.bind(null,Z,K),te=function(){(function(re){if(re.parentNode===null)return!1;re.parentNode.removeChild(re)})(Z)};return Y(H),function(re){if(re){if(re.css===H.css&&re.media===H.media&&re.sourceMap===H.sourceMap)return;Y(H=re)}else te()}}f.exports=function(H,K){(K=K||{}).singleton||typeof K.singleton=="boolean"||(K.singleton=A());var Z=S(H=H||[],K);return function(Y){if(Y=Y||[],Object.prototype.toString.call(Y)==="[object Array]"){for(var te=0;te<Z.length;te++){var ce=E(Z[te]);y[ce].references--}for(var re=S(Y,K),ae=0;ae<Z.length;ae++){var ie=E(Z[ae]);y[ie].references===0&&(y[ie].updater(),y.splice(ie,1))}Z=re}}}}},c={};function u(f){var b=c[f];if(b!==void 0)return b.exports;var m=c[f]={id:f,exports:{}};return a[f](m,m.exports,u),m.exports}u.n=f=>{var b=f&&f.__esModule?()=>f.default:()=>f;return u.d(b,{a:b}),b},u.d=(f,b)=>{for(var m in b)u.o(b,m)&&!u.o(f,m)&&Object.defineProperty(f,m,{enumerable:!0,get:b[m]})},u.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),u.o=(f,b)=>Object.prototype.hasOwnProperty.call(f,b),u.nc=void 0;var p={};return(()=>{u.d(p,{default:()=>w0});const f=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var b;const m={isMac:v(f),isWindows:(b=f,b.indexOf("windows")>-1),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(f),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(f),isiOS:function(i){return!!i.match(/iphone|ipad/i)||v(i)&&navigator.maxTouchPoints>0}(f),isAndroid:function(i){return i.indexOf("android")>-1}(f),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(f),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}};function v(i){return i.indexOf("macintosh")>-1}function A(i,e,n,r){n=n||function(g,k){return g===k};const s=Array.isArray(i)?i:Array.prototype.slice.call(i),l=Array.isArray(e)?e:Array.prototype.slice.call(e),d=function(g,k,w){const C=_(g,k,w);if(C===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const x=y(g,C),T=y(k,C),N=_(x,T,w),O=g.length-N,V=k.length-N;return{firstIndex:C,lastIndexOld:O,lastIndexNew:V}}(s,l,n);return r?function(g,k){const{firstIndex:w,lastIndexOld:C,lastIndexNew:x}=g;if(w===-1)return Array(k).fill("equal");let T=[];return w>0&&(T=T.concat(Array(w).fill("equal"))),x-w>0&&(T=T.concat(Array(x-w).fill("insert"))),C-w>0&&(T=T.concat(Array(C-w).fill("delete"))),x<k&&(T=T.concat(Array(k-x).fill("equal"))),T}(d,l.length):function(g,k){const w=[],{firstIndex:C,lastIndexOld:x,lastIndexNew:T}=k;return T-C>0&&w.push({index:C,type:"insert",values:g.slice(C,T)}),x-C>0&&w.push({index:C+(T-C),type:"delete",howMany:x-C}),w}(l,d)}function _(i,e,n){for(let r=0;r<Math.max(i.length,e.length);r++)if(i[r]===void 0||e[r]===void 0||!n(i[r],e[r]))return r;return-1}function y(i,e){return i.slice(e).reverse()}function E(i,e,n){n=n||function(O,V){return O===V};const r=i.length,s=e.length;if(r>200||s>200||r+s>300)return E.fastDiff(i,e,n,!0);let l,d;if(s<r){const O=i;i=e,e=O,l="delete",d="insert"}else l="insert",d="delete";const h=i.length,g=e.length,k=g-h,w={},C={};function x(O){const V=(C[O-1]!==void 0?C[O-1]:-1)+1,G=C[O+1]!==void 0?C[O+1]:-1,Q=V>G?-1:1;w[O+Q]&&(w[O]=w[O+Q].slice(0)),w[O]||(w[O]=[]),w[O].push(V>G?l:d);let ne=Math.max(V,G),we=ne-O;for(;we<h&&ne<g&&n(i[we],e[ne]);)we++,ne++,w[O].push("equal");return ne}let T,N=0;do{for(T=-N;T<k;T++)C[T]=x(T);for(T=k+N;T>k;T--)C[T]=x(T);C[k]=x(k),N++}while(C[k]!==g);return w[k].slice(1)}E.fastDiff=A;const S=function(){return function i(){i.called=!0}};class D{constructor(e,n){this.source=e,this.name=n,this.path=[],this.stop=S(),this.off=S()}}const R=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function I(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0;return"e"+R[i>>0&255]+R[i>>8&255]+R[i>>16&255]+R[i>>24&255]+R[e>>0&255]+R[e>>8&255]+R[e>>16&255]+R[e>>24&255]+R[n>>0&255]+R[n>>8&255]+R[n>>16&255]+R[n>>24&255]+R[r>>0&255]+R[r>>8&255]+R[r>>16&255]+R[r>>24&255]}const P={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function B(i,e){const n=P.get(e.priority);for(let r=0;r<i.length;r++)if(P.get(i[r].priority)<n)return void i.splice(r,0,e);i.push(e)}const F="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class M extends Error{constructor(e,n,r){super(function(s,l){const d=new WeakSet,h=(w,C)=>{if(typeof C=="object"&&C!==null){if(d.has(C))return`[object ${C.constructor.name}]`;d.add(C)}return C},g=l?` ${JSON.stringify(l,h)}`:"",k=K(s);return s+g+k}(e,r)),this.name="CKEditorError",this.context=n,this.data=r}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,n){if(e.is&&e.is("CKEditorError"))throw e;const r=new M(e.message,n);throw r.stack=e.stack,r}}function W(i,e){console.warn(...Z(i,e))}function H(i,e){console.error(...Z(i,e))}function K(i){return`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[r.createRange(h[0].end)]});else if(e.inputType=="insertText"&&d&&d.includes(`
`,isColorInherited:!1}),r.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...n?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[n]}]:[],r],on:{dragstart:s.to(l=>l.preventDefault())}}]})}}function nx(i,e,n){return(r,s)=>{const l=r.getVisible();if(!l||r.width<mL||r.height<gL)return Tp;let d;d=e.position==="inside"?r.bottom-s.height:r.bottom-s.height/2,d-=e.verticalOffset;const h=n(r,s);if(e.position==="inside"){const g=s.clone().moveTo(h,d);if(g.getIntersectionArea(l)<g.getArea())return Tp}else{const g=function(k){let w=k.parentElement;if(!w)return null;for(;w.tagName!="BODY";){const C=w.style.overflowY||Je.window.getComputedStyle(w).overflowY;if(C==="auto"||C==="scroll")break;if(w=w.parentElement,!w)return null}return w}(i);if(g){const k=new qt(g);if(l.bottom+s.height/2>k.bottom)return Tp}}return{top:d,left:h,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function ox(i){const e=i.config.get("ui.poweredBy"),n=e&&e.position||"border";return fL({position:n,label:bL,verticalOffset:n==="inside"?5:0,horizontalOffset:5,side:i.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var vL=Object.defineProperty,rx=Object.getOwnPropertySymbols,CL=Object.prototype.hasOwnProperty,yL=Object.prototype.propertyIsEnumerable,ix=(i,e,n)=>e in i?vL(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;class AL extends ke(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const n=e.editing.view;this.editor=e,this.componentFactory=new iL(e),this.focusTracker=new Do,this.tooltipManager=new Dp(e),this.poweredBy=new kL(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(n.document,"layoutChanged",this.update.bind(this)),this.listenTo(n,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,n){this._editableElementsMap.set(e,n),n.ckeditorInstance||(n.ckeditorInstance=this.editor),this.focusTracker.add(n);const r=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(n)};this.isReady?r():this.once("ready",r)}removeEditableElement(e){const n=this._editableElementsMap.get(e);n&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(n),this.focusTracker.remove(n),n.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,n={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:n})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,n=e.config.get("ui.viewportOffset");if(n)return n;const r=e.config.get("toolbar.viewportTopOffset");return r?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:r}):{top:0}}_initFocusTracking(){const e=this.editor,n=e.editing.view;let r,s;e.keystrokes.set("Alt+F10",(l,d)=>{const h=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(h)&&!Array.from(n.domRoots.values()).includes(h)&&(r=h);const g=this._getCurrentFocusedToolbarDefinition();g&&s||(s=this._getFocusableCandidateToolbarDefinitions());for(let k=0;k<s.length;k++){const w=s.shift();if(s.push(w),w!==g&&this._focusFocusableCandidateToolbar(w)){g&&g.options.afterBlur&&g.options.afterBlur();break}}d()}),e.keystrokes.set("Esc",(l,d)=>{const h=this._getCurrentFocusedToolbarDefinition();h&&(r?(r.focus(),r=null):e.editing.view.focus(),h.options.afterBlur&&h.options.afterBlur(),d())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const n of this._focusableToolbarDefinitions){const{toolbarView:r,options:s}=n;(Qs(r.element)||s.beforeFocus)&&e.push(n)}return e.sort((n,r)=>sx(n)-sx(r)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:n,options:{beforeFocus:r}}=e;return r&&r(),!!Qs(n.element)&&(n.focus(),!0)}_handleScrollToTheSelection(e,n){const r=((s,l)=>{for(var d in l||(l={}))CL.call(l,d)&&ix(s,d,l[d]);if(rx)for(var d of rx(l))yL.call(l,d)&&ix(s,d,l[d]);return s})({top:0,bottom:0,left:0,right:0},this.viewportOffset);n.viewportOffset.top+=r.top,n.viewportOffset.bottom+=r.bottom,n.viewportOffset.left+=r.left,n.viewportOffset.right+=r.right}}function sx(i){const{toolbarView:e,options:n}=i;let r=10;return Qs(e.element)&&r--,n.isContextual&&r--,r}var ax=u(9688),_L={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_e()(ax.Z,_L),ax.Z.locals;class xL extends nt{constructor(e){super(e),this.body=new AO(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class EL extends nt{constructor(e,n,r){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=r,this._hasExternalElement=!!this._editableElement,this._editingView=n}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function n(r){e.change(s=>{const l=e.document.getRoot(r.name);s.addClass(r.isFocused?"ck-focused":"ck-blurred",l),s.removeClass(r.isFocused?"ck-blurred":"ck-focused",l)})}e.isRenderingInProgress?function r(s){e.once("change:isRenderingInProgress",(l,d,h)=>{h?r(s):n(s)})}(this):n(this)}}class SL extends EL{constructor(e,n,r,s={}){super(e,n,r);const l=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=s.label||(()=>l("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(n=>{const r=e.document.getRoot(this.name);n.setAttribute("aria-label",this._generateLabel(this),r)})}}var lx=u(8847),DL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_e()(lx.Z,DL),lx.Z.locals;class Ok extends rp{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,n)=>{window.alert(n.message)},{priority:"lowest"})}showSuccess(e,n={}){this._showNotification({message:e,type:"success",namespace:n.namespace,title:n.title})}showInfo(e,n={}){this._showNotification({message:e,type:"info",namespace:n.namespace,title:n.title})}showWarning(e,n={}){this._showNotification({message:e,type:"warning",namespace:n.namespace,title:n.title})}_showNotification(e){const n=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(n,{message:e.message,type:e.type,title:e.title||""})}}class cx extends ke(){constructor(e,n){super(),n&&Ry(this,n),e&&this.set(e)}}var dx=u(4650),TL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_e()(dx.Z,TL),dx.Z.locals;var ux=u(7676),IL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_e()(ux.Z,IL),ux.Z.locals;const Ip=Cb("px");class Ol extends ue{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const n=this.editor.editing.view,r=n.document.selection.editableElement;return r?n.domConverter.mapViewToDom(r.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new M("contextualballoon-add-view-exist",[this,e]);const n=e.stackId||"main";if(!this._idToStack.has(n))return this._idToStack.set(n,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(n)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(n));const r=this._idToStack.get(n);e.singleViewMode&&this.showStack(n),r.set(e.view,e),this._viewToStack.set(e.view,r),r===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new M("contextualballoon-remove-view-not-exist",[this,e]);const n=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(n.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(n.values())[n.size-2])),n.size===1?(this._idToStack.delete(this._getStackId(n)),this._numberOfStacks=this._idToStack.size):n.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const n=this._idToStack.get(e);if(!n)throw new M("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==n&&this._showView(Array.from(n.values()).pop())}_createPanelView(){this._view=new Yn(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(n=>n[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let n=e.indexOf(this._visibleStack)+1;e[n]||(n=0),this.showStack(this._getStackId(e[n]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let n=e.indexOf(this._visibleStack)-1;e[n]||(n=e.length-1),this.showStack(this._getStackId(e[n]))}_createRotatorView(){const e=new ML(this.editor.locale),n=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(r,s)=>!s&&r>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(r,s)=>{if(s<2)return"";const l=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return n("%0 of %1",[l,s])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new PL(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(n,r)=>!r&&n>=2?Math.min(n-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:n="",withArrow:r=!0,singleViewMode:s=!1}){this.view.class=n,this.view.withArrow=r,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),s&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class ML extends nt{constructor(e){super(e);const n=e.t,r=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Do,this.buttonPrevView=this._createButtonView(n("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(n("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",r.to("isNavigationVisible",s=>s?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:r.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,n){const r=new jt(this.locale);return r.set({label:e,icon:n,tooltip:!0}),r}}class PL extends nt{constructor(e,n){super(e);const r=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=n,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",r.to("numberOfPanels",s=>s?"":"ck-hidden")],style:{top:r.to("top",Ip),left:r.to("left",Ip),width:r.to("width",Ip),height:r.to("height",Ip)}},children:this.content}),this.on("change:numberOfPanels",(s,l,d,h)=>{d>h?this._addPanels(d-h):this._removePanels(h-d),this.updatePosition()})}_addPanels(e){for(;e--;){const n=new nt;n.setTemplate({tag:"div"}),this.content.add(n),this.registerChild(n)}}_removePanels(e){for(;e--;){const n=this.content.last;this.content.remove(n),this.deregisterChild(n),n.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:n}=this._balloonPanelView,{width:r,height:s}=new qt(this._balloonPanelView.element);Object.assign(this,{top:e,left:n,width:r,height:s})}}}var hx=u(5868),BL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_e()(hx.Z,BL),hx.Z.locals;const NL=Cb("px");class RL extends ue{constructor(e){super(e),this._resizeObserver=null,this._balloonConfig=x_(e.config.get("balloonToolbar")),this.toolbarView=this._createToolbarView(),this.focusTracker=new Do,e.ui.once("ready",()=>{this.focusTracker.add(e.ui.getEditableElement()),this.focusTracker.add(this.toolbarView.element)}),e.ui.addToolbar(this.toolbarView,{beforeFocus:()=>this.show(!0),afterBlur:()=>this.hide(),isContextual:!0}),this._balloon=e.plugins.get(Ol),this._fireSelectionChangeDebounced=Dl(()=>this.fire("_selectionChangeDebounced"),200),this.decorate("show")}static get pluginName(){return"BalloonToolbar"}static get requires(){return[Ol]}init(){const e=this.editor,n=e.model.document.selection;this.listenTo(this.focusTracker,"change:isFocused",(r,s,l)=>{const d=this._balloon.visibleView===this.toolbarView;!l&&d?this.hide():l&&this.show()}),this.listenTo(n,"change:range",(r,s)=>{(s.directChange||n.isCollapsed)&&this.hide(),this._fireSelectionChangeDebounced()}),this.listenTo(this,"_selectionChangeDebounced",()=>{this.editor.editing.view.document.isFocused&&this.show()}),this._balloonConfig.shouldNotGroupWhenFull||this.listenTo(e,"ready",()=>{const r=e.ui.view.editable.element;this._resizeObserver=new vd(r,s=>{this.toolbarView.maxWidth=NL(.9*s.contentRect.width)})}),this.listenTo(this.toolbarView,"groupedItemsUpdate",()=>{this._updatePosition()})}afterInit(){const e=this.editor.ui.componentFactory;this.toolbarView.fillFromConfig(this._balloonConfig,e)}_createToolbarView(){const e=this.editor.locale.t,n=!this._balloonConfig.shouldNotGroupWhenFull,r=new vk(this.editor.locale,{shouldGroupWhenFull:n,isFloating:!0});return r.ariaLabel=e("Editor contextual toolbar"),r.render(),r}show(e=!1){const n=this.editor,r=n.model.document.selection,s=n.model.schema;this._balloon.hasView(this.toolbarView)||r.isCollapsed&&!e||function(l,d){return l.rangeCount===1?!1:[...l.getRanges()].every(h=>{const g=h.getContainedElement();return g&&d.isSelectable(g)})}(r,s)||Array.from(this.toolbarView.items).every(l=>l.isEnabled!==void 0&&!l.isEnabled)||(this.listenTo(this.editor.ui,"update",()=>{this._updatePosition()}),this._balloon.add({view:this.toolbarView,position:this._getBalloonPositionData(),balloonClassName:"ck-toolbar-container"}))}hide(){this._balloon.hasView(this.toolbarView)&&(this.stopListening(this.editor.ui,"update"),this._balloon.remove(this.toolbarView))}_getBalloonPositionData(){const e=this.editor.editing.view,n=e.document,r=n.selection,s=n.selection.isBackward;return{target:()=>{const l=s?r.getFirstRange():r.getLastRange(),d=qt.getDomRangeRects(e.domConverter.viewRangeToDom(l));return s?d[0]:(d.length>1&&d[d.length-1].width===0&&d.pop(),d[d.length-1])},positions:this._getBalloonPositions(s)}}_updatePosition(){this._balloon.updatePosition(this._getBalloonPositionData())}destroy(){super.destroy(),this.stopListening(),this._fireSelectionChangeDebounced.cancel(),this.toolbarView.destroy(),this.focusTracker.destroy(),this._resizeObserver&&this._resizeObserver.destroy()}_getBalloonPositions(e){const n=m.isSafari&&m.isiOS?Bk({heightOffset:Math.max(Yn.arrowHeightOffset,Math.round(20/Je.window.visualViewport.scale))}):Yn.defaultPositions;return e?[n.northWestArrowSouth,n.northWestArrowSouthWest,n.northWestArrowSouthEast,n.northWestArrowSouthMiddleEast,n.northWestArrowSouthMiddleWest,n.southWestArrowNorth,n.southWestArrowNorthWest,n.southWestArrowNorthEast,n.southWestArrowNorthMiddleWest,n.southWestArrowNorthMiddleEast]:[n.southEastArrowNorth,n.southEastArrowNorthEast,n.southEastArrowNorthWest,n.southEastArrowNorthMiddleEast,n.southEastArrowNorthMiddleWest,n.northEastArrowSouth,n.northEastArrowSouthEast,n.northEastArrowSouthWest,n.northEastArrowSouthMiddleEast,n.northEastArrowSouthMiddleWest]}}var px=u(9695),OL={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};_e()(px.Z,OL),px.Z.locals;class fx{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=n=>{const r="error"in n?n.error:n.reason;r instanceof Error&&this._handleError(r,n)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,n){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(n)}off(e,n){this._listeners[e]=this._listeners[e].filter(r=>r!==n)}_fire(e,...n){const r=this._listeners[e]||[];for(const s of r)s.apply(this,[null,...n])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,n){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:n instanceof ErrorEvent?n.filename:void 0,lineno:n instanceof ErrorEvent?n.lineno:void 0,colno:n instanceof ErrorEvent?n.colno:void 0,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function Lk(i,e=new Set){const n=[i],r=new Set;let s=0;for(;n.length>s;){const l=n[s++];if(!r.has(l)&&LL(l)&&!e.has(l))if(r.add(l),Symbol.iterator in l)try{for(const d of l)n.push(d)}catch{}else for(const d in l)d!=="defaultValue"&&n.push(l[d])}return r}function LL(i){const e=Object.prototype.toString.call(i),n=typeof i;return!(n==="number"||n==="boolean"||n==="string"||n==="symbol"||n==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||i==null||i._watchdogExcluded||i instanceof EventTarget||i instanceof Event)}function gx(i,e,n=new Set){if(i===e&&typeof(r=i)=="object"&&r!==null)return!0;var r;const s=Lk(i,n),l=Lk(e,n);for(const d of s)if(l.has(d))return!0;return!1}class mx extends fx{constructor(e,n={}){super(n),this._editor=null,this._throttledSave=Rk(this._save.bind(this),typeof n.saveInterval=="number"?n.saveInterval:5e3),e&&(this._creator=(r,s)=>e.create(r,s)),this._destructor=r=>r.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const e=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,e,e.context)}}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,n=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._config=this._cloneEditorConfiguration(n)||{},this._config.context=r,this._creator(e,this._config))).then(s=>{this._editor=s,s.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=s.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=e}catch(n){console.error(n,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e={};for(const n of this._editor.model.document.getRootNames())e[n]=this._editor.data.get({rootName:n});return e}_isErrorComingFromThisItem(e){return gx(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return fr(e,(n,r)=>Mn(n)||r==="context"?n:void 0)}}const Rd=Symbol("MainQueueId");class zL{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,n){const r=e===Rd;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const s=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(Rd),this._queues.get(e)])).then(n),l=s.catch(()=>{});return this._queues.set(e,l),s.finally(()=>{this._activeActions--,this._queues.get(e)===l&&this._activeActions===0&&this._onEmptyCallbacks.forEach(d=>d())})}}function bx(i){return Array.isArray(i)?i:[i]}class jL extends AL{constructor(e,n){super(e),this.view=n}get element(){return this.view.editable.element}init(){const e=this.editor,n=this.view,r=e.editing.view,s=n.editable,l=r.document.getRoot();s.name=l.rootName,n.render();const d=s.element;this.setEditableElement(s.name,d),s.bind("isFocused").to(this.focusTracker),r.attachDomRoot(d),this._initPlaceholder(),this.fire("ready")}destroy(){super.destroy();const e=this.view;this.editor.editing.view.detachDomRoot(e.editable.name),e.destroy()}_initPlaceholder(){const e=this.editor,n=e.editing.view,r=n.document.getRoot(),s=(e.sourceElement,e.config.get("placeholder"));if(s){const l=typeof s=="string"?s:s[r.rootName];l&&oy({view:n,element:r,text:l,isDirectHost:!1,keepOnFocus:!0})}}}class FL extends xL{constructor(e,n,r){super(e);const s=e.t;this.editable=new SL(e,n,r,{label:l=>s("Rich Text Editor. Editing area: %0",l.name)})}render(){super.render(),this.registerChild(this.editable)}}class Mp extends yp(dk(bO)){constructor(e,n={}){if(!Pp(e)&&n.initialData!==void 0)throw new M("editor-create-initial-data",null);super(n),this.config.get("initialData")===void 0&&this.config.set("initialData",function(l){return Pp(l)?(d=l,d instanceof HTMLTextAreaElement?d.value:d.innerHTML):l;var d}(e)),Pp(e)&&(this.sourceElement=e,function(l,d){if(d.ckeditorInstance)throw new M("editor-source-element-already-used",l);d.ckeditorInstance=l,l.once("destroy",()=>{delete d.ckeditorInstance})}(this,e));const r=this.config.get("plugins");r.push(RL),this.config.set("plugins",r),this.config.define("balloonToolbar",this.config.get("toolbar")),this.model.document.createRoot();const s=new FL(this.locale,this.editing.view,this.sourceElement);this.ui=new jL(this,s),function(l){if(!jn(l.updateSourceElement))throw new M("attachtoform-missing-elementapi-interface",l);const d=l.sourceElement;if(function(h){return!!h&&h.tagName.toLowerCase()==="textarea"}(d)&&d.form){let h;const g=d.form,k=()=>l.updateSourceElement();jn(g.submit)&&(h=g.submit,g.submit=()=>{k(),h.apply(g)}),g.addEventListener("submit",k),l.on("destroy",()=>{g.removeEventListener("submit",k),h&&(g.submit=h)})}}(this)}destroy(){const e=this.getData();return this.ui.destroy(),super.destroy().then(()=>{this.sourceElement&&this.updateSourceElement(e)})}static create(e,n={}){return new Promise(r=>{if(Pp(e)&&e.tagName==="TEXTAREA")throw new M("editor-wrong-element",null);const s=new this(e,n);r(s.initPlugins().then(()=>s.ui.init()).then(()=>s.data.init(s.config.get("initialData"))).then(()=>s.fire("ready")).then(()=>s))})}}function Pp(i){return Mn(i)}Mp.Context=ty,Mp.EditorWatchdog=mx,Mp.ContextWatchdog=class extends fx{constructor(i,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new zL,this._watchdogConfig=e,this._creator=n=>i.create(n),this._destructor=n=>n.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(i){this._creator=i}setDestructor(i){this._destructor=i}get context(){return this._context}create(i={}){return this._actionQueues.enqueue(Rd,()=>(this._contextConfig=i,this._create()))}getItem(i){return this._getWatchdog(i)._item}getItemState(i){return this._getWatchdog(i).state}add(i){const e=bx(i);return Promise.all(e.map(n=>this._actionQueues.enqueue(n.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let r;if(this._watchdogs.has(n.id))throw new Error(`Item with the given id is already added: '${n.id}'.`);if(n.type==="editor")return r=new mx(null,this._watchdogConfig),r.setCreator(n.creator),r._setExcludedProperties(this._contextProps),n.destructor&&r.setDestructor(n.destructor),this._watchdogs.set(n.id,r),r.on("error",(s,{error:l,causesRestart:d})=>{this._fire("itemError",{itemId:n.id,error:l}),d&&this._actionQueues.enqueue(n.id,()=>new Promise(h=>{const g=()=>{r.off("restart",g),this._fire("itemRestart",{itemId:n.id}),h()};r.on("restart",g)}))}),r.create(n.sourceElementOrData,n.config,this._context);throw new Error(`Not supported item type: '${n.type}'.`)})))}remove(i){const e=bx(i);return Promise.all(e.map(n=>this._actionQueues.enqueue(n,()=>{const r=this._getWatchdog(n);return this._watchdogs.delete(n),r.destroy()})))}destroy(){return this._actionQueues.enqueue(Rd,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Rd,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(i=>{console.error("An error happened during destroying the context or items.",i)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(i=>(this._context=i,this._contextProps=Lk(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const i=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(i))})}_getWatchdog(i){const e=this._watchdogs.get(i);if(!e)throw new Error(`Item with the given id was not registered: ${i}.`);return e}_isErrorComingFromThisItem(i){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(i))return!1;return gx(this._context,i.context)}};class zk extends Zi{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const n=this.document;function r(s){return(l,d)=>{d.preventDefault();const h=d.dropRange?[d.dropRange]:null,g=new D(n,s);n.fire(g,{dataTransfer:d.dataTransfer,method:l.name,targetRanges:h,target:d.target,domEvent:d.domEvent}),g.stop.called&&d.stopPropagation()}}this.listenTo(n,"paste",r("clipboardInput"),{priority:"low"}),this.listenTo(n,"drop",r("clipboardInput"),{priority:"low"}),this.listenTo(n,"dragover",r("dragging"),{priority:"low"})}onDomEvent(e){const n="clipboardData"in e?e.clipboardData:e.dataTransfer,r=e.type=="drop"||e.type=="paste",s={dataTransfer:new Hy(n,{cacheFiles:r})};e.type!="drop"&&e.type!="dragover"||(s.dropRange=function(l,d){const h=d.target.ownerDocument,g=d.clientX,k=d.clientY;let w;return h.caretRangeFromPoint&&h.caretRangeFromPoint(g,k)?w=h.caretRangeFromPoint(g,k):d.rangeParent&&(w=h.createRange(),w.setStart(d.rangeParent,d.rangeOffset),w.collapse(!0)),w?l.domConverter.domRangeToView(w):null}(this.view,e)),this.fire(e.type,e,s)}}const kx=["figcaption","li"];function wx(i){let e="";if(i.is("$text")||i.is("$textProxy"))e=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))e=i.getAttribute("alt");else if(i.is("element","br"))e=`
`;else{let n=null;for(const r of i.getChildren()){const s=wx(r);n&&(n.is("containerElement")||r.is("containerElement"))&&(kx.includes(n.name)||kx.includes(r.name)?e+=`
`:e+=`
