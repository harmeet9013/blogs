function H6(n,o){for(var a=0;a<o.length;a++){const c=o[a];if(typeof c!="string"&&!Array.isArray(c)){for(const u in c)if(u!=="default"&&!(u in n)){const p=Object.getOwnPropertyDescriptor(c,u);p&&Object.defineProperty(n,u,p.get?p:{enumerable:!0,get:()=>c[u]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function a(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(u){if(u.ep)return;u.ep=!0;const p=a(u);fetch(u.href,p)}})();var ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ZD={exports:{}},Uf={},JD={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Su=Symbol.for("react.element"),W6=Symbol.for("react.portal"),G6=Symbol.for("react.fragment"),q6=Symbol.for("react.strict_mode"),K6=Symbol.for("react.profiler"),Y6=Symbol.for("react.provider"),Q6=Symbol.for("react.context"),Z6=Symbol.for("react.forward_ref"),J6=Symbol.for("react.suspense"),X6=Symbol.for("react.memo"),e7=Symbol.for("react.lazy"),lS=Symbol.iterator;function t7(n){return n===null||typeof n!="object"?null:(n=lS&&n[lS]||n["@@iterator"],typeof n=="function"?n:null)}var XD={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eT=Object.assign,tT={};function bc(n,o,a){this.props=n,this.context=o,this.refs=tT,this.updater=a||XD}bc.prototype.isReactComponent={};bc.prototype.setState=function(n,o){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,o,"setState")};bc.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function nT(){}nT.prototype=bc.prototype;function Lw(n,o,a){this.props=n,this.context=o,this.refs=tT,this.updater=a||XD}var jw=Lw.prototype=new nT;jw.constructor=Lw;eT(jw,bc.prototype);jw.isPureReactComponent=!0;var cS=Array.isArray,oT=Object.prototype.hasOwnProperty,Fw={current:null},rT={key:!0,ref:!0,__self:!0,__source:!0};function iT(n,o,a){var c,u={},p=null,g=null;if(o!=null)for(c in o.ref!==void 0&&(g=o.ref),o.key!==void 0&&(p=""+o.key),o)oT.call(o,c)&&!rT.hasOwnProperty(c)&&(u[c]=o[c]);var k=arguments.length-2;if(k===1)u.children=a;else if(1<k){for(var m=Array(k),C=0;C<k;C++)m[C]=arguments[C+2];u.children=m}if(n&&n.defaultProps)for(c in k=n.defaultProps,k)u[c]===void 0&&(u[c]=k[c]);return{$$typeof:Su,type:n,key:p,ref:g,props:u,_owner:Fw.current}}function n7(n,o){return{$$typeof:Su,type:n.type,key:o,ref:n.ref,props:n.props,_owner:n._owner}}function Vw(n){return typeof n=="object"&&n!==null&&n.$$typeof===Su}function o7(n){var o={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(a){return o[a]})}var dS=/\/+/g;function Pk(n,o){return typeof n=="object"&&n!==null&&n.key!=null?o7(""+n.key):o.toString(36)}function Fp(n,o,a,c,u){var p=typeof n;(p==="undefined"||p==="boolean")&&(n=null);var g=!1;if(n===null)g=!0;else switch(p){case"string":case"number":g=!0;break;case"object":switch(n.$$typeof){case Su:case W6:g=!0}}if(g)return g=n,u=u(g),n=c===""?"."+Pk(g,0):c,cS(u)?(a="",n!=null&&(a=n.replace(dS,"$&/")+"/"),Fp(u,o,a,"",function(C){return C})):u!=null&&(Vw(u)&&(u=n7(u,a+(!u.key||g&&g.key===u.key?"":(""+u.key).replace(dS,"$&/")+"/")+n)),o.push(u)),1;if(g=0,c=c===""?".":c+":",cS(n))for(var k=0;k<n.length;k++){p=n[k];var m=c+Pk(p,k);g+=Fp(p,o,a,m,u)}else if(m=t7(n),typeof m=="function")for(n=m.call(n),k=0;!(p=n.next()).done;)p=p.value,m=c+Pk(p,k++),g+=Fp(p,o,a,m,u);else if(p==="object")throw o=String(n),Error("Objects are not valid as a React child (found: "+(o==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return g}function pp(n,o,a){if(n==null)return n;var c=[],u=0;return Fp(n,c,"","",function(p){return o.call(a,p,u++)}),c}function r7(n){if(n._status===-1){var o=n._result;o=o(),o.then(function(a){(n._status===0||n._status===-1)&&(n._status=1,n._result=a)},function(a){(n._status===0||n._status===-1)&&(n._status=2,n._result=a)}),n._status===-1&&(n._status=0,n._result=o)}if(n._status===1)return n._result.default;throw n._result}var no={current:null},Vp={transition:null},i7={ReactCurrentDispatcher:no,ReactCurrentBatchConfig:Vp,ReactCurrentOwner:Fw};rt.Children={map:pp,forEach:function(n,o,a){pp(n,function(){o.apply(this,arguments)},a)},count:function(n){var o=0;return pp(n,function(){o++}),o},toArray:function(n){return pp(n,function(o){return o})||[]},only:function(n){if(!Vw(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};rt.Component=bc;rt.Fragment=G6;rt.Profiler=K6;rt.PureComponent=Lw;rt.StrictMode=q6;rt.Suspense=J6;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i7;rt.cloneElement=function(n,o,a){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var c=eT({},n.props),u=n.key,p=n.ref,g=n._owner;if(o!=null){if(o.ref!==void 0&&(p=o.ref,g=Fw.current),o.key!==void 0&&(u=""+o.key),n.type&&n.type.defaultProps)var k=n.type.defaultProps;for(m in o)oT.call(o,m)&&!rT.hasOwnProperty(m)&&(c[m]=o[m]===void 0&&k!==void 0?k[m]:o[m])}var m=arguments.length-2;if(m===1)c.children=a;else if(1<m){k=Array(m);for(var C=0;C<m;C++)k[C]=arguments[C+2];c.children=k}return{$$typeof:Su,type:n.type,key:u,ref:p,props:c,_owner:g}};rt.createContext=function(n){return n={$$typeof:Q6,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Y6,_context:n},n.Consumer=n};rt.createElement=iT;rt.createFactory=function(n){var o=iT.bind(null,n);return o.type=n,o};rt.createRef=function(){return{current:null}};rt.forwardRef=function(n){return{$$typeof:Z6,render:n}};rt.isValidElement=Vw;rt.lazy=function(n){return{$$typeof:e7,_payload:{_status:-1,_result:n},_init:r7}};rt.memo=function(n,o){return{$$typeof:X6,type:n,compare:o===void 0?null:o}};rt.startTransition=function(n){var o=Vp.transition;Vp.transition={};try{n()}finally{Vp.transition=o}};rt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};rt.useCallback=function(n,o){return no.current.useCallback(n,o)};rt.useContext=function(n){return no.current.useContext(n)};rt.useDebugValue=function(){};rt.useDeferredValue=function(n){return no.current.useDeferredValue(n)};rt.useEffect=function(n,o){return no.current.useEffect(n,o)};rt.useId=function(){return no.current.useId()};rt.useImperativeHandle=function(n,o,a){return no.current.useImperativeHandle(n,o,a)};rt.useInsertionEffect=function(n,o){return no.current.useInsertionEffect(n,o)};rt.useLayoutEffect=function(n,o){return no.current.useLayoutEffect(n,o)};rt.useMemo=function(n,o){return no.current.useMemo(n,o)};rt.useReducer=function(n,o,a){return no.current.useReducer(n,o,a)};rt.useRef=function(n){return no.current.useRef(n)};rt.useState=function(n){return no.current.useState(n)};rt.useSyncExternalStore=function(n,o,a){return no.current.useSyncExternalStore(n,o,a)};rt.useTransition=function(){return no.current.useTransition()};rt.version="18.2.0";JD.exports=rt;var z=JD.exports;const $r=zw(z),Jd=H6({__proto__:null,default:$r},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s7=z,a7=Symbol.for("react.element"),l7=Symbol.for("react.fragment"),c7=Object.prototype.hasOwnProperty,d7=s7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u7={key:!0,ref:!0,__self:!0,__source:!0};function sT(n,o,a){var c,u={},p=null,g=null;a!==void 0&&(p=""+a),o.key!==void 0&&(p=""+o.key),o.ref!==void 0&&(g=o.ref);for(c in o)c7.call(o,c)&&!u7.hasOwnProperty(c)&&(u[c]=o[c]);if(n&&n.defaultProps)for(c in o=n.defaultProps,o)u[c]===void 0&&(u[c]=o[c]);return{$$typeof:a7,type:n,key:p,ref:g,props:u,_owner:d7.current}}Uf.Fragment=l7;Uf.jsx=sT;Uf.jsxs=sT;ZD.exports=Uf;var V=ZD.exports,v0={},aT={exports:{}},Bo={},lT={exports:{}},cT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function o(se,he){var me=se.length;se.push(he);e:for(;0<me;){var Te=me-1>>>1,Ie=se[Te];if(0<u(Ie,he))se[Te]=he,se[me]=Ie,me=Te;else break e}}function a(se){return se.length===0?null:se[0]}function c(se){if(se.length===0)return null;var he=se[0],me=se.pop();if(me!==he){se[0]=me;e:for(var Te=0,Ie=se.length,He=Ie>>>1;Te<He;){var Ne=2*(Te+1)-1,we=se[Ne],Pe=Ne+1,Ze=se[Pe];if(0>u(we,me))Pe<Ie&&0>u(Ze,we)?(se[Te]=Ze,se[Pe]=me,Te=Pe):(se[Te]=we,se[Ne]=me,Te=Ne);else if(Pe<Ie&&0>u(Ze,me))se[Te]=Ze,se[Pe]=me,Te=Pe;else break e}}return he}function u(se,he){var me=se.sortIndex-he.sortIndex;return me!==0?me:se.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var g=Date,k=g.now();n.unstable_now=function(){return g.now()-k}}var m=[],C=[],A=1,_=null,y=3,E=!1,S=!1,D=!1,R=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(se){for(var he=a(C);he!==null;){if(he.callback===null)c(C);else if(he.startTime<=se)c(C),he.sortIndex=he.expirationTime,o(m,he);else break;he=a(C)}}function L(se){if(D=!1,B(se),!S)if(a(m)!==null)S=!0,de(M);else{var he=a(C);he!==null&&re(L,he.startTime-se)}}function M(se,he){S=!1,D&&(D=!1,I(K),K=-1),E=!0;var me=y;try{for(B(he),_=a(m);_!==null&&(!(_.expirationTime>he)||se&&!ee());){var Te=_.callback;if(typeof Te=="function"){_.callback=null,y=_.priorityLevel;var Ie=Te(_.expirationTime<=he);he=n.unstable_now(),typeof Ie=="function"?_.callback=Ie:_===a(m)&&c(m),B(he)}else c(m);_=a(m)}if(_!==null)var He=!0;else{var Ne=a(C);Ne!==null&&re(L,Ne.startTime-he),He=!1}return He}finally{_=null,y=me,E=!1}}var W=!1,H=null,K=-1,Z=5,Y=-1;function ee(){return!(n.unstable_now()-Y<Z)}function ce(){if(H!==null){var se=n.unstable_now();Y=se;var he=!0;try{he=H(!0,se)}finally{he?ie():(W=!1,H=null)}}else W=!1}var ie;if(typeof P=="function")ie=function(){P(ce)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,oe=te.port2;te.port1.onmessage=ce,ie=function(){oe.postMessage(null)}}else ie=function(){R(ce,0)};function de(se){H=se,W||(W=!0,ie())}function re(se,he){K=R(function(){se(n.unstable_now())},he)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){S||E||(S=!0,de(M))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return y},n.unstable_getFirstCallbackNode=function(){return a(m)},n.unstable_next=function(se){switch(y){case 1:case 2:case 3:var he=3;break;default:he=y}var me=y;y=he;try{return se()}finally{y=me}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,he){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var me=y;y=se;try{return he()}finally{y=me}},n.unstable_scheduleCallback=function(se,he,me){var Te=n.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Te+me:Te):me=Te,se){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=me+Ie,se={id:A++,callback:he,priorityLevel:se,startTime:me,expirationTime:Ie,sortIndex:-1},me>Te?(se.sortIndex=me,o(C,se),a(m)===null&&se===a(C)&&(D?(I(K),K=-1):D=!0,re(L,me-Te))):(se.sortIndex=Ie,o(m,se),S||E||(S=!0,de(M))),se},n.unstable_shouldYield=ee,n.unstable_wrapCallback=function(se){var he=y;return function(){var me=y;y=he;try{return se.apply(this,arguments)}finally{y=me}}}})(cT);lT.exports=cT;var h7=lT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dT=z,Po=h7;function pe(n){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)o+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uT=new Set,Xd={};function Ta(n,o){ec(n,o),ec(n+"Capture",o)}function ec(n,o){for(Xd[n]=o,n=0;n<o.length;n++)uT.add(o[n])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),C0=Object.prototype.hasOwnProperty,p7=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uS={},hS={};function f7(n){return C0.call(hS,n)?!0:C0.call(uS,n)?!1:p7.test(n)?hS[n]=!0:(uS[n]=!0,!1)}function g7(n,o,a,c){if(a!==null&&a.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function m7(n,o,a,c){if(o===null||typeof o>"u"||g7(n,o,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function oo(n,o,a,c,u,p,g){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=n,this.type=o,this.sanitizeURL=p,this.removeEmptyString=g}var $n={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$n[n]=new oo(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var o=n[0];$n[o]=new oo(o,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){$n[n]=new oo(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$n[n]=new oo(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$n[n]=new oo(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){$n[n]=new oo(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){$n[n]=new oo(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){$n[n]=new oo(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){$n[n]=new oo(n,5,!1,n.toLowerCase(),null,!1,!1)});var $w=/[\-:]([a-z])/g;function Uw(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var o=n.replace($w,Uw);$n[o]=new oo(o,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var o=n.replace($w,Uw);$n[o]=new oo(o,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var o=n.replace($w,Uw);$n[o]=new oo(o,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){$n[n]=new oo(n,1,!1,n.toLowerCase(),null,!1,!1)});$n.xlinkHref=new oo("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){$n[n]=new oo(n,1,!1,n.toLowerCase(),null,!0,!0)});function Hw(n,o,a,c){var u=$n.hasOwnProperty(o)?$n[o]:null;(u!==null?u.type!==0:c||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(m7(o,a,u,c)&&(a=null),c||u===null?f7(o)&&(a===null?n.removeAttribute(o):n.setAttribute(o,""+a)):u.mustUseProperty?n[u.propertyName]=a===null?u.type===3?!1:"":a:(o=u.attributeName,c=u.attributeNamespace,a===null?n.removeAttribute(o):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,c?n.setAttributeNS(c,o,a):n.setAttribute(o,a))))}var Ei=dT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fp=Symbol.for("react.element"),Nl=Symbol.for("react.portal"),Bl=Symbol.for("react.fragment"),Ww=Symbol.for("react.strict_mode"),y0=Symbol.for("react.profiler"),hT=Symbol.for("react.provider"),pT=Symbol.for("react.context"),Gw=Symbol.for("react.forward_ref"),A0=Symbol.for("react.suspense"),_0=Symbol.for("react.suspense_list"),qw=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),fT=Symbol.for("react.offscreen"),pS=Symbol.iterator;function ud(n){return n===null||typeof n!="object"?null:(n=pS&&n[pS]||n["@@iterator"],typeof n=="function"?n:null)}var Qt=Object.assign,Nk;function Id(n){if(Nk===void 0)try{throw Error()}catch(a){var o=a.stack.trim().match(/\n( *(at )?)/);Nk=o&&o[1]||""}return`
`+Nk+n}var Bk=!1;function Rk(n,o){if(!n||Bk)return"";Bk=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(C){var c=C}Reflect.construct(n,[],o)}else{try{o.call()}catch(C){c=C}n.call(o.prototype)}else{try{throw Error()}catch(C){c=C}n()}}catch(C){if(C&&c&&typeof C.stack=="string"){for(var u=C.stack.split(`
`),p=c.stack.split(`
`),g=u.length-1,k=p.length-1;1<=g&&0<=k&&u[g]!==p[k];)k--;for(;1<=g&&0<=k;g--,k--)if(u[g]!==p[k]){if(g!==1||k!==1)do if(g--,k--,0>k||u[g]!==p[k]){var m=`
`+u[g].replace(" at new "," at ");return n.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",n.displayName)),m}while(1<=g&&0<=k);break}}}finally{Bk=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Id(n):""}function b7(n){switch(n.tag){case 5:return Id(n.type);case 16:return Id("Lazy");case 13:return Id("Suspense");case 19:return Id("SuspenseList");case 0:case 2:case 15:return n=Rk(n.type,!1),n;case 11:return n=Rk(n.type.render,!1),n;case 1:return n=Rk(n.type,!0),n;default:return""}}function x0(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Bl:return"Fragment";case Nl:return"Portal";case y0:return"Profiler";case Ww:return"StrictMode";case A0:return"Suspense";case _0:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case pT:return(n.displayName||"Context")+".Consumer";case hT:return(n._context.displayName||"Context")+".Provider";case Gw:var o=n.render;return n=n.displayName,n||(n=o.displayName||o.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case qw:return o=n.displayName||null,o!==null?o:x0(n.type)||"Memo";case Zi:o=n._payload,n=n._init;try{return x0(n(o))}catch{}}return null}function k7(n){var o=n.type;switch(n.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=o.render,n=n.displayName||n.name||"",o.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return x0(o);case 8:return o===Ww?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function gs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function gT(n){var o=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function w7(n){var o=gT(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,o),c=""+n[o];if(!n.hasOwnProperty(o)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,p=a.set;return Object.defineProperty(n,o,{configurable:!0,get:function(){return u.call(this)},set:function(g){c=""+g,p.call(this,g)}}),Object.defineProperty(n,o,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(g){c=""+g},stopTracking:function(){n._valueTracker=null,delete n[o]}}}}function gp(n){n._valueTracker||(n._valueTracker=w7(n))}function mT(n){if(!n)return!1;var o=n._valueTracker;if(!o)return!0;var a=o.getValue(),c="";return n&&(c=gT(n)?n.checked?"true":"false":n.value),n=c,n!==a?(o.setValue(n),!0):!1}function lf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function E0(n,o){var a=o.checked;return Qt({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function fS(n,o){var a=o.defaultValue==null?"":o.defaultValue,c=o.checked!=null?o.checked:o.defaultChecked;a=gs(o.value!=null?o.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function bT(n,o){o=o.checked,o!=null&&Hw(n,"checked",o,!1)}function S0(n,o){bT(n,o);var a=gs(o.value),c=o.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}o.hasOwnProperty("value")?D0(n,o.type,a):o.hasOwnProperty("defaultValue")&&D0(n,o.type,gs(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(n.defaultChecked=!!o.defaultChecked)}function gS(n,o,a){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var c=o.type;if(!(c!=="submit"&&c!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+n._wrapperState.initialValue,a||o===n.value||(n.value=o),n.defaultValue=o}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function D0(n,o,a){(o!=="number"||lf(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Md=Array.isArray;function Gl(n,o,a,c){if(n=n.options,o){o={};for(var u=0;u<a.length;u++)o["$"+a[u]]=!0;for(a=0;a<n.length;a++)u=o.hasOwnProperty("$"+n[a].value),n[a].selected!==u&&(n[a].selected=u),u&&c&&(n[a].defaultSelected=!0)}else{for(a=""+gs(a),o=null,u=0;u<n.length;u++){if(n[u].value===a){n[u].selected=!0,c&&(n[u].defaultSelected=!0);return}o!==null||n[u].disabled||(o=n[u])}o!==null&&(o.selected=!0)}}function T0(n,o){if(o.dangerouslySetInnerHTML!=null)throw Error(pe(91));return Qt({},o,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function mS(n,o){var a=o.value;if(a==null){if(a=o.children,o=o.defaultValue,a!=null){if(o!=null)throw Error(pe(92));if(Md(a)){if(1<a.length)throw Error(pe(93));a=a[0]}o=a}o==null&&(o=""),a=o}n._wrapperState={initialValue:gs(a)}}function kT(n,o){var a=gs(o.value),c=gs(o.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),o.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function bS(n){var o=n.textContent;o===n._wrapperState.initialValue&&o!==""&&o!==null&&(n.value=o)}function wT(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function I0(n,o){return n==null||n==="http://www.w3.org/1999/xhtml"?wT(o):n==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var mp,vT=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,a,c,u){MSApp.execUnsafeLocalFunction(function(){return n(o,a,c,u)})}:n}(function(n,o){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=o;else{for(mp=mp||document.createElement("div"),mp.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=mp.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;o.firstChild;)n.appendChild(o.firstChild)}});function eu(n,o){if(o){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=o;return}}n.textContent=o}var zd={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v7=["Webkit","ms","Moz","O"];Object.keys(zd).forEach(function(n){v7.forEach(function(o){o=o+n.charAt(0).toUpperCase()+n.substring(1),zd[o]=zd[n]})});function CT(n,o,a){return o==null||typeof o=="boolean"||o===""?"":a||typeof o!="number"||o===0||zd.hasOwnProperty(n)&&zd[n]?(""+o).trim():o+"px"}function yT(n,o){n=n.style;for(var a in o)if(o.hasOwnProperty(a)){var c=a.indexOf("--")===0,u=CT(a,o[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,u):n[a]=u}}var C7=Qt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function M0(n,o){if(o){if(C7[n]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(pe(137,n));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(pe(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(pe(61))}if(o.style!=null&&typeof o.style!="object")throw Error(pe(62))}}function P0(n,o){if(n.indexOf("-")===-1)return typeof o.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var N0=null;function Kw(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var B0=null,ql=null,Kl=null;function kS(n){if(n=Iu(n)){if(typeof B0!="function")throw Error(pe(280));var o=n.stateNode;o&&(o=Kf(o),B0(n.stateNode,n.type,o))}}function AT(n){ql?Kl?Kl.push(n):Kl=[n]:ql=n}function _T(){if(ql){var n=ql,o=Kl;if(Kl=ql=null,kS(n),o)for(n=0;n<o.length;n++)kS(o[n])}}function xT(n,o){return n(o)}function ET(){}var Ok=!1;function ST(n,o,a){if(Ok)return n(o,a);Ok=!0;try{return xT(n,o,a)}finally{Ok=!1,(ql!==null||Kl!==null)&&(ET(),_T())}}function tu(n,o){var a=n.stateNode;if(a===null)return null;var c=Kf(a);if(c===null)return null;a=c[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(pe(231,o,typeof a));return a}var R0=!1;if(vi)try{var hd={};Object.defineProperty(hd,"passive",{get:function(){R0=!0}}),window.addEventListener("test",hd,hd),window.removeEventListener("test",hd,hd)}catch{R0=!1}function y7(n,o,a,c,u,p,g,k,m){var C=Array.prototype.slice.call(arguments,3);try{o.apply(a,C)}catch(A){this.onError(A)}}var Ld=!1,cf=null,df=!1,O0=null,A7={onError:function(n){Ld=!0,cf=n}};function _7(n,o,a,c,u,p,g,k,m){Ld=!1,cf=null,y7.apply(A7,arguments)}function x7(n,o,a,c,u,p,g,k,m){if(_7.apply(this,arguments),Ld){if(Ld){var C=cf;Ld=!1,cf=null}else throw Error(pe(198));df||(df=!0,O0=C)}}function Ia(n){var o=n,a=n;if(n.alternate)for(;o.return;)o=o.return;else{n=o;do o=n,o.flags&4098&&(a=o.return),n=o.return;while(n)}return o.tag===3?a:null}function DT(n){if(n.tag===13){var o=n.memoizedState;if(o===null&&(n=n.alternate,n!==null&&(o=n.memoizedState)),o!==null)return o.dehydrated}return null}function wS(n){if(Ia(n)!==n)throw Error(pe(188))}function E7(n){var o=n.alternate;if(!o){if(o=Ia(n),o===null)throw Error(pe(188));return o!==n?null:n}for(var a=n,c=o;;){var u=a.return;if(u===null)break;var p=u.alternate;if(p===null){if(c=u.return,c!==null){a=c;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===a)return wS(u),n;if(p===c)return wS(u),o;p=p.sibling}throw Error(pe(188))}if(a.return!==c.return)a=u,c=p;else{for(var g=!1,k=u.child;k;){if(k===a){g=!0,a=u,c=p;break}if(k===c){g=!0,c=u,a=p;break}k=k.sibling}if(!g){for(k=p.child;k;){if(k===a){g=!0,a=p,c=u;break}if(k===c){g=!0,c=p,a=u;break}k=k.sibling}if(!g)throw Error(pe(189))}}if(a.alternate!==c)throw Error(pe(190))}if(a.tag!==3)throw Error(pe(188));return a.stateNode.current===a?n:o}function TT(n){return n=E7(n),n!==null?IT(n):null}function IT(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var o=IT(n);if(o!==null)return o;n=n.sibling}return null}var MT=Po.unstable_scheduleCallback,vS=Po.unstable_cancelCallback,S7=Po.unstable_shouldYield,D7=Po.unstable_requestPaint,cn=Po.unstable_now,T7=Po.unstable_getCurrentPriorityLevel,Yw=Po.unstable_ImmediatePriority,PT=Po.unstable_UserBlockingPriority,uf=Po.unstable_NormalPriority,I7=Po.unstable_LowPriority,NT=Po.unstable_IdlePriority,Hf=null,Wr=null;function M7(n){if(Wr&&typeof Wr.onCommitFiberRoot=="function")try{Wr.onCommitFiberRoot(Hf,n,void 0,(n.current.flags&128)===128)}catch{}}var mr=Math.clz32?Math.clz32:B7,P7=Math.log,N7=Math.LN2;function B7(n){return n>>>=0,n===0?32:31-(P7(n)/N7|0)|0}var bp=64,kp=4194304;function Pd(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hf(n,o){var a=n.pendingLanes;if(a===0)return 0;var c=0,u=n.suspendedLanes,p=n.pingedLanes,g=a&268435455;if(g!==0){var k=g&~u;k!==0?c=Pd(k):(p&=g,p!==0&&(c=Pd(p)))}else g=a&~u,g!==0?c=Pd(g):p!==0&&(c=Pd(p));if(c===0)return 0;if(o!==0&&o!==c&&!(o&u)&&(u=c&-c,p=o&-o,u>=p||u===16&&(p&4194240)!==0))return o;if(c&4&&(c|=a&16),o=n.entangledLanes,o!==0)for(n=n.entanglements,o&=c;0<o;)a=31-mr(o),u=1<<a,c|=n[a],o&=~u;return c}function R7(n,o){switch(n){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O7(n,o){for(var a=n.suspendedLanes,c=n.pingedLanes,u=n.expirationTimes,p=n.pendingLanes;0<p;){var g=31-mr(p),k=1<<g,m=u[g];m===-1?(!(k&a)||k&c)&&(u[g]=R7(k,o)):m<=o&&(n.expiredLanes|=k),p&=~k}}function z0(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function BT(){var n=bp;return bp<<=1,!(bp&4194240)&&(bp=64),n}function zk(n){for(var o=[],a=0;31>a;a++)o.push(n);return o}function Du(n,o,a){n.pendingLanes|=o,o!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,o=31-mr(o),n[o]=a}function z7(n,o){var a=n.pendingLanes&~o;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=o,n.mutableReadLanes&=o,n.entangledLanes&=o,o=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var u=31-mr(a),p=1<<u;o[u]=0,c[u]=-1,n[u]=-1,a&=~p}}function Qw(n,o){var a=n.entangledLanes|=o;for(n=n.entanglements;a;){var c=31-mr(a),u=1<<c;u&o|n[c]&o&&(n[c]|=o),a&=~u}}var Et=0;function RT(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var OT,Zw,zT,LT,jT,L0=!1,wp=[],as=null,ls=null,cs=null,nu=new Map,ou=new Map,es=[],L7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function CS(n,o){switch(n){case"focusin":case"focusout":as=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":nu.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":ou.delete(o.pointerId)}}function pd(n,o,a,c,u,p){return n===null||n.nativeEvent!==p?(n={blockedOn:o,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[u]},o!==null&&(o=Iu(o),o!==null&&Zw(o)),n):(n.eventSystemFlags|=c,o=n.targetContainers,u!==null&&o.indexOf(u)===-1&&o.push(u),n)}function j7(n,o,a,c,u){switch(o){case"focusin":return as=pd(as,n,o,a,c,u),!0;case"dragenter":return ls=pd(ls,n,o,a,c,u),!0;case"mouseover":return cs=pd(cs,n,o,a,c,u),!0;case"pointerover":var p=u.pointerId;return nu.set(p,pd(nu.get(p)||null,n,o,a,c,u)),!0;case"gotpointercapture":return p=u.pointerId,ou.set(p,pd(ou.get(p)||null,n,o,a,c,u)),!0}return!1}function FT(n){var o=ua(n.target);if(o!==null){var a=Ia(o);if(a!==null){if(o=a.tag,o===13){if(o=DT(a),o!==null){n.blockedOn=o,jT(n.priority,function(){zT(a)});return}}else if(o===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $p(n){if(n.blockedOn!==null)return!1;for(var o=n.targetContainers;0<o.length;){var a=j0(n.domEventName,n.eventSystemFlags,o[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);N0=c,a.target.dispatchEvent(c),N0=null}else return o=Iu(a),o!==null&&Zw(o),n.blockedOn=a,!1;o.shift()}return!0}function yS(n,o,a){$p(n)&&a.delete(o)}function F7(){L0=!1,as!==null&&$p(as)&&(as=null),ls!==null&&$p(ls)&&(ls=null),cs!==null&&$p(cs)&&(cs=null),nu.forEach(yS),ou.forEach(yS)}function fd(n,o){n.blockedOn===o&&(n.blockedOn=null,L0||(L0=!0,Po.unstable_scheduleCallback(Po.unstable_NormalPriority,F7)))}function ru(n){function o(u){return fd(u,n)}if(0<wp.length){fd(wp[0],n);for(var a=1;a<wp.length;a++){var c=wp[a];c.blockedOn===n&&(c.blockedOn=null)}}for(as!==null&&fd(as,n),ls!==null&&fd(ls,n),cs!==null&&fd(cs,n),nu.forEach(o),ou.forEach(o),a=0;a<es.length;a++)c=es[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<es.length&&(a=es[0],a.blockedOn===null);)FT(a),a.blockedOn===null&&es.shift()}var Yl=Ei.ReactCurrentBatchConfig,pf=!0;function V7(n,o,a,c){var u=Et,p=Yl.transition;Yl.transition=null;try{Et=1,Jw(n,o,a,c)}finally{Et=u,Yl.transition=p}}function $7(n,o,a,c){var u=Et,p=Yl.transition;Yl.transition=null;try{Et=4,Jw(n,o,a,c)}finally{Et=u,Yl.transition=p}}function Jw(n,o,a,c){if(pf){var u=j0(n,o,a,c);if(u===null)qk(n,o,c,ff,a),CS(n,c);else if(j7(u,n,o,a,c))c.stopPropagation();else if(CS(n,c),o&4&&-1<L7.indexOf(n)){for(;u!==null;){var p=Iu(u);if(p!==null&&OT(p),p=j0(n,o,a,c),p===null&&qk(n,o,c,ff,a),p===u)break;u=p}u!==null&&c.stopPropagation()}else qk(n,o,c,null,a)}}var ff=null;function j0(n,o,a,c){if(ff=null,n=Kw(c),n=ua(n),n!==null)if(o=Ia(n),o===null)n=null;else if(a=o.tag,a===13){if(n=DT(o),n!==null)return n;n=null}else if(a===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;n=null}else o!==n&&(n=null);return ff=n,null}function VT(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(T7()){case Yw:return 1;case PT:return 4;case uf:case I7:return 16;case NT:return 536870912;default:return 16}default:return 16}}var os=null,Xw=null,Up=null;function $T(){if(Up)return Up;var n,o=Xw,a=o.length,c,u="value"in os?os.value:os.textContent,p=u.length;for(n=0;n<a&&o[n]===u[n];n++);var g=a-n;for(c=1;c<=g&&o[a-c]===u[p-c];c++);return Up=u.slice(n,1<c?1-c:void 0)}function Hp(n){var o=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&o===13&&(n=13)):n=o,n===10&&(n=13),32<=n||n===13?n:0}function vp(){return!0}function AS(){return!1}function Ro(n){function o(a,c,u,p,g){this._reactName=a,this._targetInst=u,this.type=c,this.nativeEvent=p,this.target=g,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(p):p[k]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?vp:AS,this.isPropagationStopped=AS,this}return Qt(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vp)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vp)},persist:function(){},isPersistent:vp}),o}var kc={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ev=Ro(kc),Tu=Qt({},kc,{view:0,detail:0}),U7=Ro(Tu),Lk,jk,gd,Wf=Qt({},Tu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tv,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==gd&&(gd&&n.type==="mousemove"?(Lk=n.screenX-gd.screenX,jk=n.screenY-gd.screenY):jk=Lk=0,gd=n),Lk)},movementY:function(n){return"movementY"in n?n.movementY:jk}}),_S=Ro(Wf),H7=Qt({},Wf,{dataTransfer:0}),W7=Ro(H7),G7=Qt({},Tu,{relatedTarget:0}),Fk=Ro(G7),q7=Qt({},kc,{animationName:0,elapsedTime:0,pseudoElement:0}),K7=Ro(q7),Y7=Qt({},kc,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Q7=Ro(Y7),Z7=Qt({},kc,{data:0}),xS=Ro(Z7),J7={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X7={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eF={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tF(n){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(n):(n=eF[n])?!!o[n]:!1}function tv(){return tF}var nF=Qt({},Tu,{key:function(n){if(n.key){var o=J7[n.key]||n.key;if(o!=="Unidentified")return o}return n.type==="keypress"?(n=Hp(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?X7[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tv,charCode:function(n){return n.type==="keypress"?Hp(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Hp(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),oF=Ro(nF),rF=Qt({},Wf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ES=Ro(rF),iF=Qt({},Tu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tv}),sF=Ro(iF),aF=Qt({},kc,{propertyName:0,elapsedTime:0,pseudoElement:0}),lF=Ro(aF),cF=Qt({},Wf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),dF=Ro(cF),uF=[9,13,27,32],nv=vi&&"CompositionEvent"in window,jd=null;vi&&"documentMode"in document&&(jd=document.documentMode);var hF=vi&&"TextEvent"in window&&!jd,UT=vi&&(!nv||jd&&8<jd&&11>=jd),SS=String.fromCharCode(32),DS=!1;function HT(n,o){switch(n){case"keyup":return uF.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function WT(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rl=!1;function pF(n,o){switch(n){case"compositionend":return WT(o);case"keypress":return o.which!==32?null:(DS=!0,SS);case"textInput":return n=o.data,n===SS&&DS?null:n;default:return null}}function fF(n,o){if(Rl)return n==="compositionend"||!nv&&HT(n,o)?(n=$T(),Up=Xw=os=null,Rl=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return UT&&o.locale!=="ko"?null:o.data;default:return null}}var gF={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function TS(n){var o=n&&n.nodeName&&n.nodeName.toLowerCase();return o==="input"?!!gF[n.type]:o==="textarea"}function GT(n,o,a,c){AT(c),o=gf(o,"onChange"),0<o.length&&(a=new ev("onChange","change",null,a,c),n.push({event:a,listeners:o}))}var Fd=null,iu=null;function mF(n){oI(n,0)}function Gf(n){var o=Ll(n);if(mT(o))return n}function bF(n,o){if(n==="change")return o}var qT=!1;if(vi){var Vk;if(vi){var $k="oninput"in document;if(!$k){var IS=document.createElement("div");IS.setAttribute("oninput","return;"),$k=typeof IS.oninput=="function"}Vk=$k}else Vk=!1;qT=Vk&&(!document.documentMode||9<document.documentMode)}function MS(){Fd&&(Fd.detachEvent("onpropertychange",KT),iu=Fd=null)}function KT(n){if(n.propertyName==="value"&&Gf(iu)){var o=[];GT(o,iu,n,Kw(n)),ST(mF,o)}}function kF(n,o,a){n==="focusin"?(MS(),Fd=o,iu=a,Fd.attachEvent("onpropertychange",KT)):n==="focusout"&&MS()}function wF(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Gf(iu)}function vF(n,o){if(n==="click")return Gf(o)}function CF(n,o){if(n==="input"||n==="change")return Gf(o)}function yF(n,o){return n===o&&(n!==0||1/n===1/o)||n!==n&&o!==o}var kr=typeof Object.is=="function"?Object.is:yF;function su(n,o){if(kr(n,o))return!0;if(typeof n!="object"||n===null||typeof o!="object"||o===null)return!1;var a=Object.keys(n),c=Object.keys(o);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var u=a[c];if(!C0.call(o,u)||!kr(n[u],o[u]))return!1}return!0}function PS(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function NS(n,o){var a=PS(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=o&&c>=o)return{node:a,offset:o-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=PS(a)}}function YT(n,o){return n&&o?n===o?!0:n&&n.nodeType===3?!1:o&&o.nodeType===3?YT(n,o.parentNode):"contains"in n?n.contains(o):n.compareDocumentPosition?!!(n.compareDocumentPosition(o)&16):!1:!1}function QT(){for(var n=window,o=lf();o instanceof n.HTMLIFrameElement;){try{var a=typeof o.contentWindow.location.href=="string"}catch{a=!1}if(a)n=o.contentWindow;else break;o=lf(n.document)}return o}function ov(n){var o=n&&n.nodeName&&n.nodeName.toLowerCase();return o&&(o==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||o==="textarea"||n.contentEditable==="true")}function AF(n){var o=QT(),a=n.focusedElem,c=n.selectionRange;if(o!==a&&a&&a.ownerDocument&&YT(a.ownerDocument.documentElement,a)){if(c!==null&&ov(a)){if(o=c.start,n=c.end,n===void 0&&(n=o),"selectionStart"in a)a.selectionStart=o,a.selectionEnd=Math.min(n,a.value.length);else if(n=(o=a.ownerDocument||document)&&o.defaultView||window,n.getSelection){n=n.getSelection();var u=a.textContent.length,p=Math.min(c.start,u);c=c.end===void 0?p:Math.min(c.end,u),!n.extend&&p>c&&(u=c,c=p,p=u),u=NS(a,p);var g=NS(a,c);u&&g&&(n.rangeCount!==1||n.anchorNode!==u.node||n.anchorOffset!==u.offset||n.focusNode!==g.node||n.focusOffset!==g.offset)&&(o=o.createRange(),o.setStart(u.node,u.offset),n.removeAllRanges(),p>c?(n.addRange(o),n.extend(g.node,g.offset)):(o.setEnd(g.node,g.offset),n.addRange(o)))}}for(o=[],n=a;n=n.parentNode;)n.nodeType===1&&o.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<o.length;a++)n=o[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _F=vi&&"documentMode"in document&&11>=document.documentMode,Ol=null,F0=null,Vd=null,V0=!1;function BS(n,o,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;V0||Ol==null||Ol!==lf(c)||(c=Ol,"selectionStart"in c&&ov(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Vd&&su(Vd,c)||(Vd=c,c=gf(F0,"onSelect"),0<c.length&&(o=new ev("onSelect","select",null,o,a),n.push({event:o,listeners:c}),o.target=Ol)))}function Cp(n,o){var a={};return a[n.toLowerCase()]=o.toLowerCase(),a["Webkit"+n]="webkit"+o,a["Moz"+n]="moz"+o,a}var zl={animationend:Cp("Animation","AnimationEnd"),animationiteration:Cp("Animation","AnimationIteration"),animationstart:Cp("Animation","AnimationStart"),transitionend:Cp("Transition","TransitionEnd")},Uk={},ZT={};vi&&(ZT=document.createElement("div").style,"AnimationEvent"in window||(delete zl.animationend.animation,delete zl.animationiteration.animation,delete zl.animationstart.animation),"TransitionEvent"in window||delete zl.transitionend.transition);function qf(n){if(Uk[n])return Uk[n];if(!zl[n])return n;var o=zl[n],a;for(a in o)if(o.hasOwnProperty(a)&&a in ZT)return Uk[n]=o[a];return n}var JT=qf("animationend"),XT=qf("animationiteration"),eI=qf("animationstart"),tI=qf("transitionend"),nI=new Map,RS="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vs(n,o){nI.set(n,o),Ta(o,[n])}for(var Hk=0;Hk<RS.length;Hk++){var Wk=RS[Hk],xF=Wk.toLowerCase(),EF=Wk[0].toUpperCase()+Wk.slice(1);vs(xF,"on"+EF)}vs(JT,"onAnimationEnd");vs(XT,"onAnimationIteration");vs(eI,"onAnimationStart");vs("dblclick","onDoubleClick");vs("focusin","onFocus");vs("focusout","onBlur");vs(tI,"onTransitionEnd");ec("onMouseEnter",["mouseout","mouseover"]);ec("onMouseLeave",["mouseout","mouseover"]);ec("onPointerEnter",["pointerout","pointerover"]);ec("onPointerLeave",["pointerout","pointerover"]);Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SF=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nd));function OS(n,o,a){var c=n.type||"unknown-event";n.currentTarget=a,x7(c,o,void 0,n),n.currentTarget=null}function oI(n,o){o=(o&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],u=c.event;c=c.listeners;e:{var p=void 0;if(o)for(var g=c.length-1;0<=g;g--){var k=c[g],m=k.instance,C=k.currentTarget;if(k=k.listener,m!==p&&u.isPropagationStopped())break e;OS(u,k,C),p=m}else for(g=0;g<c.length;g++){if(k=c[g],m=k.instance,C=k.currentTarget,k=k.listener,m!==p&&u.isPropagationStopped())break e;OS(u,k,C),p=m}}}if(df)throw n=O0,df=!1,O0=null,n}function jt(n,o){var a=o[G0];a===void 0&&(a=o[G0]=new Set);var c=n+"__bubble";a.has(c)||(rI(o,n,2,!1),a.add(c))}function Gk(n,o,a){var c=0;o&&(c|=4),rI(a,n,c,o)}var yp="_reactListening"+Math.random().toString(36).slice(2);function au(n){if(!n[yp]){n[yp]=!0,uT.forEach(function(a){a!=="selectionchange"&&(SF.has(a)||Gk(a,!1,n),Gk(a,!0,n))});var o=n.nodeType===9?n:n.ownerDocument;o===null||o[yp]||(o[yp]=!0,Gk("selectionchange",!1,o))}}function rI(n,o,a,c){switch(VT(o)){case 1:var u=V7;break;case 4:u=$7;break;default:u=Jw}a=u.bind(null,o,a,n),u=void 0,!R0||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(u=!0),c?u!==void 0?n.addEventListener(o,a,{capture:!0,passive:u}):n.addEventListener(o,a,!0):u!==void 0?n.addEventListener(o,a,{passive:u}):n.addEventListener(o,a,!1)}function qk(n,o,a,c,u){var p=c;if(!(o&1)&&!(o&2)&&c!==null)e:for(;;){if(c===null)return;var g=c.tag;if(g===3||g===4){var k=c.stateNode.containerInfo;if(k===u||k.nodeType===8&&k.parentNode===u)break;if(g===4)for(g=c.return;g!==null;){var m=g.tag;if((m===3||m===4)&&(m=g.stateNode.containerInfo,m===u||m.nodeType===8&&m.parentNode===u))return;g=g.return}for(;k!==null;){if(g=ua(k),g===null)return;if(m=g.tag,m===5||m===6){c=p=g;continue e}k=k.parentNode}}c=c.return}ST(function(){var C=p,A=Kw(a),_=[];e:{var y=nI.get(n);if(y!==void 0){var E=ev,S=n;switch(n){case"keypress":if(Hp(a)===0)break e;case"keydown":case"keyup":E=oF;break;case"focusin":S="focus",E=Fk;break;case"focusout":S="blur",E=Fk;break;case"beforeblur":case"afterblur":E=Fk;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=_S;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=W7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=sF;break;case JT:case XT:case eI:E=K7;break;case tI:E=lF;break;case"scroll":E=U7;break;case"wheel":E=dF;break;case"copy":case"cut":case"paste":E=Q7;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=ES}var D=(o&4)!==0,R=!D&&n==="scroll",I=D?y!==null?y+"Capture":null:y;D=[];for(var P=C,B;P!==null;){B=P;var L=B.stateNode;if(B.tag===5&&L!==null&&(B=L,I!==null&&(L=tu(P,I),L!=null&&D.push(lu(P,L,B)))),R)break;P=P.return}0<D.length&&(y=new E(y,S,null,a,A),_.push({event:y,listeners:D}))}}if(!(o&7)){e:{if(y=n==="mouseover"||n==="pointerover",E=n==="mouseout"||n==="pointerout",y&&a!==N0&&(S=a.relatedTarget||a.fromElement)&&(ua(S)||S[Ci]))break e;if((E||y)&&(y=A.window===A?A:(y=A.ownerDocument)?y.defaultView||y.parentWindow:window,E?(S=a.relatedTarget||a.toElement,E=C,S=S?ua(S):null,S!==null&&(R=Ia(S),S!==R||S.tag!==5&&S.tag!==6)&&(S=null)):(E=null,S=C),E!==S)){if(D=_S,L="onMouseLeave",I="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(D=ES,L="onPointerLeave",I="onPointerEnter",P="pointer"),R=E==null?y:Ll(E),B=S==null?y:Ll(S),y=new D(L,P+"leave",E,a,A),y.target=R,y.relatedTarget=B,L=null,ua(A)===C&&(D=new D(I,P+"enter",S,a,A),D.target=B,D.relatedTarget=R,L=D),R=L,E&&S)t:{for(D=E,I=S,P=0,B=D;B;B=Sl(B))P++;for(B=0,L=I;L;L=Sl(L))B++;for(;0<P-B;)D=Sl(D),P--;for(;0<B-P;)I=Sl(I),B--;for(;P--;){if(D===I||I!==null&&D===I.alternate)break t;D=Sl(D),I=Sl(I)}D=null}else D=null;E!==null&&zS(_,y,E,D,!1),S!==null&&R!==null&&zS(_,R,S,D,!0)}}e:{if(y=C?Ll(C):window,E=y.nodeName&&y.nodeName.toLowerCase(),E==="select"||E==="input"&&y.type==="file")var M=bF;else if(TS(y))if(qT)M=CF;else{M=wF;var W=kF}else(E=y.nodeName)&&E.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(M=vF);if(M&&(M=M(n,C))){GT(_,M,a,A);break e}W&&W(n,y,C),n==="focusout"&&(W=y._wrapperState)&&W.controlled&&y.type==="number"&&D0(y,"number",y.value)}switch(W=C?Ll(C):window,n){case"focusin":(TS(W)||W.contentEditable==="true")&&(Ol=W,F0=C,Vd=null);break;case"focusout":Vd=F0=Ol=null;break;case"mousedown":V0=!0;break;case"contextmenu":case"mouseup":case"dragend":V0=!1,BS(_,a,A);break;case"selectionchange":if(_F)break;case"keydown":case"keyup":BS(_,a,A)}var H;if(nv)e:{switch(n){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Rl?HT(n,a)&&(K="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(K="onCompositionStart");K&&(UT&&a.locale!=="ko"&&(Rl||K!=="onCompositionStart"?K==="onCompositionEnd"&&Rl&&(H=$T()):(os=A,Xw="value"in os?os.value:os.textContent,Rl=!0)),W=gf(C,K),0<W.length&&(K=new xS(K,n,null,a,A),_.push({event:K,listeners:W}),H?K.data=H:(H=WT(a),H!==null&&(K.data=H)))),(H=hF?pF(n,a):fF(n,a))&&(C=gf(C,"onBeforeInput"),0<C.length&&(A=new xS("onBeforeInput","beforeinput",null,a,A),_.push({event:A,listeners:C}),A.data=H))}oI(_,o)})}function lu(n,o,a){return{instance:n,listener:o,currentTarget:a}}function gf(n,o){for(var a=o+"Capture",c=[];n!==null;){var u=n,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=tu(n,a),p!=null&&c.unshift(lu(n,p,u)),p=tu(n,o),p!=null&&c.push(lu(n,p,u))),n=n.return}return c}function Sl(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zS(n,o,a,c,u){for(var p=o._reactName,g=[];a!==null&&a!==c;){var k=a,m=k.alternate,C=k.stateNode;if(m!==null&&m===c)break;k.tag===5&&C!==null&&(k=C,u?(m=tu(a,p),m!=null&&g.unshift(lu(a,m,k))):u||(m=tu(a,p),m!=null&&g.push(lu(a,m,k)))),a=a.return}g.length!==0&&n.push({event:o,listeners:g})}var DF=/\r\n?/g,TF=/\u0000|\uFFFD/g;function LS(n){return(typeof n=="string"?n:""+n).replace(DF,`
`).replace(TF,"")}function Ap(n,o,a){if(o=LS(o),LS(n)!==o&&a)throw Error(pe(425))}function mf(){}var $0=null,U0=null;function H0(n,o){return n==="textarea"||n==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var W0=typeof setTimeout=="function"?setTimeout:void 0,IF=typeof clearTimeout=="function"?clearTimeout:void 0,jS=typeof Promise=="function"?Promise:void 0,MF=typeof queueMicrotask=="function"?queueMicrotask:typeof jS<"u"?function(n){return jS.resolve(null).then(n).catch(PF)}:W0;function PF(n){setTimeout(function(){throw n})}function Kk(n,o){var a=o,c=0;do{var u=a.nextSibling;if(n.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(c===0){n.removeChild(u),ru(o);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=u}while(a);ru(o)}function ds(n){for(;n!=null;n=n.nextSibling){var o=n.nodeType;if(o===1||o===3)break;if(o===8){if(o=n.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return n}function FS(n){n=n.previousSibling;for(var o=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(o===0)return n;o--}else a==="/$"&&o++}n=n.previousSibling}return null}var wc=Math.random().toString(36).slice(2),Fr="__reactFiber$"+wc,cu="__reactProps$"+wc,Ci="__reactContainer$"+wc,G0="__reactEvents$"+wc,NF="__reactListeners$"+wc,BF="__reactHandles$"+wc;function ua(n){var o=n[Fr];if(o)return o;for(var a=n.parentNode;a;){if(o=a[Ci]||a[Fr]){if(a=o.alternate,o.child!==null||a!==null&&a.child!==null)for(n=FS(n);n!==null;){if(a=n[Fr])return a;n=FS(n)}return o}n=a,a=n.parentNode}return null}function Iu(n){return n=n[Fr]||n[Ci],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ll(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(pe(33))}function Kf(n){return n[cu]||null}var q0=[],jl=-1;function Cs(n){return{current:n}}function Ft(n){0>jl||(n.current=q0[jl],q0[jl]=null,jl--)}function Ot(n,o){jl++,q0[jl]=n.current,n.current=o}var ms={},Zn=Cs(ms),uo=Cs(!1),wa=ms;function tc(n,o){var a=n.type.contextTypes;if(!a)return ms;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===o)return c.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in a)u[p]=o[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=o,n.__reactInternalMemoizedMaskedChildContext=u),u}function ho(n){return n=n.childContextTypes,n!=null}function bf(){Ft(uo),Ft(Zn)}function VS(n,o,a){if(Zn.current!==ms)throw Error(pe(168));Ot(Zn,o),Ot(uo,a)}function iI(n,o,a){var c=n.stateNode;if(o=o.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var u in c)if(!(u in o))throw Error(pe(108,k7(n)||"Unknown",u));return Qt({},a,c)}function kf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ms,wa=Zn.current,Ot(Zn,n),Ot(uo,uo.current),!0}function $S(n,o,a){var c=n.stateNode;if(!c)throw Error(pe(169));a?(n=iI(n,o,wa),c.__reactInternalMemoizedMergedChildContext=n,Ft(uo),Ft(Zn),Ot(Zn,n)):Ft(uo),Ot(uo,a)}var gi=null,Yf=!1,Yk=!1;function sI(n){gi===null?gi=[n]:gi.push(n)}function RF(n){Yf=!0,sI(n)}function ys(){if(!Yk&&gi!==null){Yk=!0;var n=0,o=Et;try{var a=gi;for(Et=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}gi=null,Yf=!1}catch(u){throw gi!==null&&(gi=gi.slice(n+1)),MT(Yw,ys),u}finally{Et=o,Yk=!1}}return null}var Fl=[],Vl=0,wf=null,vf=0,Ho=[],Wo=0,va=null,mi=1,bi="";function sa(n,o){Fl[Vl++]=vf,Fl[Vl++]=wf,wf=n,vf=o}function aI(n,o,a){Ho[Wo++]=mi,Ho[Wo++]=bi,Ho[Wo++]=va,va=n;var c=mi;n=bi;var u=32-mr(c)-1;c&=~(1<<u),a+=1;var p=32-mr(o)+u;if(30<p){var g=u-u%5;p=(c&(1<<g)-1).toString(32),c>>=g,u-=g,mi=1<<32-mr(o)+u|a<<u|c,bi=p+n}else mi=1<<p|a<<u|c,bi=n}function rv(n){n.return!==null&&(sa(n,1),aI(n,1,0))}function iv(n){for(;n===wf;)wf=Fl[--Vl],Fl[Vl]=null,vf=Fl[--Vl],Fl[Vl]=null;for(;n===va;)va=Ho[--Wo],Ho[Wo]=null,bi=Ho[--Wo],Ho[Wo]=null,mi=Ho[--Wo],Ho[Wo]=null}var Io=null,To=null,Wt=!1,gr=null;function lI(n,o){var a=Go(5,null,null,0);a.elementType="DELETED",a.stateNode=o,a.return=n,o=n.deletions,o===null?(n.deletions=[a],n.flags|=16):o.push(a)}function US(n,o){switch(n.tag){case 5:var a=n.type;return o=o.nodeType!==1||a.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(n.stateNode=o,Io=n,To=ds(o.firstChild),!0):!1;case 6:return o=n.pendingProps===""||o.nodeType!==3?null:o,o!==null?(n.stateNode=o,Io=n,To=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(a=va!==null?{id:mi,overflow:bi}:null,n.memoizedState={dehydrated:o,treeContext:a,retryLane:1073741824},a=Go(18,null,null,0),a.stateNode=o,a.return=n,n.child=a,Io=n,To=null,!0):!1;default:return!1}}function K0(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Y0(n){if(Wt){var o=To;if(o){var a=o;if(!US(n,o)){if(K0(n))throw Error(pe(418));o=ds(a.nextSibling);var c=Io;o&&US(n,o)?lI(c,a):(n.flags=n.flags&-4097|2,Wt=!1,Io=n)}}else{if(K0(n))throw Error(pe(418));n.flags=n.flags&-4097|2,Wt=!1,Io=n}}}function HS(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Io=n}function _p(n){if(n!==Io)return!1;if(!Wt)return HS(n),Wt=!0,!1;var o;if((o=n.tag!==3)&&!(o=n.tag!==5)&&(o=n.type,o=o!=="head"&&o!=="body"&&!H0(n.type,n.memoizedProps)),o&&(o=To)){if(K0(n))throw cI(),Error(pe(418));for(;o;)lI(n,o),o=ds(o.nextSibling)}if(HS(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(pe(317));e:{for(n=n.nextSibling,o=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(o===0){To=ds(n.nextSibling);break e}o--}else a!=="$"&&a!=="$!"&&a!=="$?"||o++}n=n.nextSibling}To=null}}else To=Io?ds(n.stateNode.nextSibling):null;return!0}function cI(){for(var n=To;n;)n=ds(n.nextSibling)}function nc(){To=Io=null,Wt=!1}function sv(n){gr===null?gr=[n]:gr.push(n)}var OF=Ei.ReactCurrentBatchConfig;function pr(n,o){if(n&&n.defaultProps){o=Qt({},o),n=n.defaultProps;for(var a in n)o[a]===void 0&&(o[a]=n[a]);return o}return o}var Cf=Cs(null),yf=null,$l=null,av=null;function lv(){av=$l=yf=null}function cv(n){var o=Cf.current;Ft(Cf),n._currentValue=o}function Q0(n,o,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&o)!==o?(n.childLanes|=o,c!==null&&(c.childLanes|=o)):c!==null&&(c.childLanes&o)!==o&&(c.childLanes|=o),n===a)break;n=n.return}}function Ql(n,o){yf=n,av=$l=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&o&&(co=!0),n.firstContext=null)}function Qo(n){var o=n._currentValue;if(av!==n)if(n={context:n,memoizedValue:o,next:null},$l===null){if(yf===null)throw Error(pe(308));$l=n,yf.dependencies={lanes:0,firstContext:n}}else $l=$l.next=n;return o}var ha=null;function dv(n){ha===null?ha=[n]:ha.push(n)}function dI(n,o,a,c){var u=o.interleaved;return u===null?(a.next=a,dv(o)):(a.next=u.next,u.next=a),o.interleaved=a,yi(n,c)}function yi(n,o){n.lanes|=o;var a=n.alternate;for(a!==null&&(a.lanes|=o),a=n,n=n.return;n!==null;)n.childLanes|=o,a=n.alternate,a!==null&&(a.childLanes|=o),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ji=!1;function uv(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uI(n,o){n=n.updateQueue,o.updateQueue===n&&(o.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,o){return{eventTime:n,lane:o,tag:0,payload:null,callback:null,next:null}}function us(n,o,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,pt&2){var u=c.pending;return u===null?o.next=o:(o.next=u.next,u.next=o),c.pending=o,yi(n,a)}return u=c.interleaved,u===null?(o.next=o,dv(c)):(o.next=u.next,u.next=o),c.interleaved=o,yi(n,a)}function Wp(n,o,a){if(o=o.updateQueue,o!==null&&(o=o.shared,(a&4194240)!==0)){var c=o.lanes;c&=n.pendingLanes,a|=c,o.lanes=a,Qw(n,a)}}function WS(n,o){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var u=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?u=p=g:p=p.next=g,a=a.next}while(a!==null);p===null?u=p=o:p=p.next=o}else u=p=o;a={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=o:n.next=o,a.lastBaseUpdate=o}function Af(n,o,a,c){var u=n.updateQueue;Ji=!1;var p=u.firstBaseUpdate,g=u.lastBaseUpdate,k=u.shared.pending;if(k!==null){u.shared.pending=null;var m=k,C=m.next;m.next=null,g===null?p=C:g.next=C,g=m;var A=n.alternate;A!==null&&(A=A.updateQueue,k=A.lastBaseUpdate,k!==g&&(k===null?A.firstBaseUpdate=C:k.next=C,A.lastBaseUpdate=m))}if(p!==null){var _=u.baseState;g=0,A=C=m=null,k=p;do{var y=k.lane,E=k.eventTime;if((c&y)===y){A!==null&&(A=A.next={eventTime:E,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var S=n,D=k;switch(y=o,E=a,D.tag){case 1:if(S=D.payload,typeof S=="function"){_=S.call(E,_,y);break e}_=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=D.payload,y=typeof S=="function"?S.call(E,_,y):S,y==null)break e;_=Qt({},_,y);break e;case 2:Ji=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,y=u.effects,y===null?u.effects=[k]:y.push(k))}else E={eventTime:E,lane:y,tag:k.tag,payload:k.payload,callback:k.callback,next:null},A===null?(C=A=E,m=_):A=A.next=E,g|=y;if(k=k.next,k===null){if(k=u.shared.pending,k===null)break;y=k,k=y.next,y.next=null,u.lastBaseUpdate=y,u.shared.pending=null}}while(1);if(A===null&&(m=_),u.baseState=m,u.firstBaseUpdate=C,u.lastBaseUpdate=A,o=u.shared.interleaved,o!==null){u=o;do g|=u.lane,u=u.next;while(u!==o)}else p===null&&(u.shared.lanes=0);ya|=g,n.lanes=g,n.memoizedState=_}}function GS(n,o,a){if(n=o.effects,o.effects=null,n!==null)for(o=0;o<n.length;o++){var c=n[o],u=c.callback;if(u!==null){if(c.callback=null,c=a,typeof u!="function")throw Error(pe(191,u));u.call(c)}}}var hI=new dT.Component().refs;function Z0(n,o,a,c){o=n.memoizedState,a=a(c,o),a=a==null?o:Qt({},o,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Qf={isMounted:function(n){return(n=n._reactInternals)?Ia(n)===n:!1},enqueueSetState:function(n,o,a){n=n._reactInternals;var c=to(),u=ps(n),p=ki(c,u);p.payload=o,a!=null&&(p.callback=a),o=us(n,p,u),o!==null&&(br(o,n,u,c),Wp(o,n,u))},enqueueReplaceState:function(n,o,a){n=n._reactInternals;var c=to(),u=ps(n),p=ki(c,u);p.tag=1,p.payload=o,a!=null&&(p.callback=a),o=us(n,p,u),o!==null&&(br(o,n,u,c),Wp(o,n,u))},enqueueForceUpdate:function(n,o){n=n._reactInternals;var a=to(),c=ps(n),u=ki(a,c);u.tag=2,o!=null&&(u.callback=o),o=us(n,u,c),o!==null&&(br(o,n,c,a),Wp(o,n,c))}};function qS(n,o,a,c,u,p,g){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,g):o.prototype&&o.prototype.isPureReactComponent?!su(a,c)||!su(u,p):!0}function pI(n,o,a){var c=!1,u=ms,p=o.contextType;return typeof p=="object"&&p!==null?p=Qo(p):(u=ho(o)?wa:Zn.current,c=o.contextTypes,p=(c=c!=null)?tc(n,u):ms),o=new o(a,p),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Qf,n.stateNode=o,o._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=u,n.__reactInternalMemoizedMaskedChildContext=p),o}function KS(n,o,a,c){n=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(a,c),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(a,c),o.state!==n&&Qf.enqueueReplaceState(o,o.state,null)}function J0(n,o,a,c){var u=n.stateNode;u.props=a,u.state=n.memoizedState,u.refs=hI,uv(n);var p=o.contextType;typeof p=="object"&&p!==null?u.context=Qo(p):(p=ho(o)?wa:Zn.current,u.context=tc(n,p)),u.state=n.memoizedState,p=o.getDerivedStateFromProps,typeof p=="function"&&(Z0(n,o,p,a),u.state=n.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(o=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),o!==u.state&&Qf.enqueueReplaceState(u,u.state,null),Af(n,a,u,c),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308)}function md(n,o,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(pe(309));var c=a.stateNode}if(!c)throw Error(pe(147,n));var u=c,p=""+n;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===p?o.ref:(o=function(g){var k=u.refs;k===hI&&(k=u.refs={}),g===null?delete k[p]:k[p]=g},o._stringRef=p,o)}if(typeof n!="string")throw Error(pe(284));if(!a._owner)throw Error(pe(290,n))}return n}function xp(n,o){throw n=Object.prototype.toString.call(o),Error(pe(31,n==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":n))}function YS(n){var o=n._init;return o(n._payload)}function fI(n){function o(I,P){if(n){var B=I.deletions;B===null?(I.deletions=[P],I.flags|=16):B.push(P)}}function a(I,P){if(!n)return null;for(;P!==null;)o(I,P),P=P.sibling;return null}function c(I,P){for(I=new Map;P!==null;)P.key!==null?I.set(P.key,P):I.set(P.index,P),P=P.sibling;return I}function u(I,P){return I=fs(I,P),I.index=0,I.sibling=null,I}function p(I,P,B){return I.index=B,n?(B=I.alternate,B!==null?(B=B.index,B<P?(I.flags|=2,P):B):(I.flags|=2,P)):(I.flags|=1048576,P)}function g(I){return n&&I.alternate===null&&(I.flags|=2),I}function k(I,P,B,L){return P===null||P.tag!==6?(P=n0(B,I.mode,L),P.return=I,P):(P=u(P,B),P.return=I,P)}function m(I,P,B,L){var M=B.type;return M===Bl?A(I,P,B.props.children,L,B.key):P!==null&&(P.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Zi&&YS(M)===P.type)?(L=u(P,B.props),L.ref=md(I,P,B),L.return=I,L):(L=Zp(B.type,B.key,B.props,null,I.mode,L),L.ref=md(I,P,B),L.return=I,L)}function C(I,P,B,L){return P===null||P.tag!==4||P.stateNode.containerInfo!==B.containerInfo||P.stateNode.implementation!==B.implementation?(P=o0(B,I.mode,L),P.return=I,P):(P=u(P,B.children||[]),P.return=I,P)}function A(I,P,B,L,M){return P===null||P.tag!==7?(P=ma(B,I.mode,L,M),P.return=I,P):(P=u(P,B),P.return=I,P)}function _(I,P,B){if(typeof P=="string"&&P!==""||typeof P=="number")return P=n0(""+P,I.mode,B),P.return=I,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case fp:return B=Zp(P.type,P.key,P.props,null,I.mode,B),B.ref=md(I,null,P),B.return=I,B;case Nl:return P=o0(P,I.mode,B),P.return=I,P;case Zi:var L=P._init;return _(I,L(P._payload),B)}if(Md(P)||ud(P))return P=ma(P,I.mode,B,null),P.return=I,P;xp(I,P)}return null}function y(I,P,B,L){var M=P!==null?P.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return M!==null?null:k(I,P,""+B,L);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case fp:return B.key===M?m(I,P,B,L):null;case Nl:return B.key===M?C(I,P,B,L):null;case Zi:return M=B._init,y(I,P,M(B._payload),L)}if(Md(B)||ud(B))return M!==null?null:A(I,P,B,L,null);xp(I,B)}return null}function E(I,P,B,L,M){if(typeof L=="string"&&L!==""||typeof L=="number")return I=I.get(B)||null,k(P,I,""+L,M);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case fp:return I=I.get(L.key===null?B:L.key)||null,m(P,I,L,M);case Nl:return I=I.get(L.key===null?B:L.key)||null,C(P,I,L,M);case Zi:var W=L._init;return E(I,P,B,W(L._payload),M)}if(Md(L)||ud(L))return I=I.get(B)||null,A(P,I,L,M,null);xp(P,L)}return null}function S(I,P,B,L){for(var M=null,W=null,H=P,K=P=0,Z=null;H!==null&&K<B.length;K++){H.index>K?(Z=H,H=null):Z=H.sibling;var Y=y(I,H,B[K],L);if(Y===null){H===null&&(H=Z);break}n&&H&&Y.alternate===null&&o(I,H),P=p(Y,P,K),W===null?M=Y:W.sibling=Y,W=Y,H=Z}if(K===B.length)return a(I,H),Wt&&sa(I,K),M;if(H===null){for(;K<B.length;K++)H=_(I,B[K],L),H!==null&&(P=p(H,P,K),W===null?M=H:W.sibling=H,W=H);return Wt&&sa(I,K),M}for(H=c(I,H);K<B.length;K++)Z=E(H,I,K,B[K],L),Z!==null&&(n&&Z.alternate!==null&&H.delete(Z.key===null?K:Z.key),P=p(Z,P,K),W===null?M=Z:W.sibling=Z,W=Z);return n&&H.forEach(function(ee){return o(I,ee)}),Wt&&sa(I,K),M}function D(I,P,B,L){var M=ud(B);if(typeof M!="function")throw Error(pe(150));if(B=M.call(B),B==null)throw Error(pe(151));for(var W=M=null,H=P,K=P=0,Z=null,Y=B.next();H!==null&&!Y.done;K++,Y=B.next()){H.index>K?(Z=H,H=null):Z=H.sibling;var ee=y(I,H,Y.value,L);if(ee===null){H===null&&(H=Z);break}n&&H&&ee.alternate===null&&o(I,H),P=p(ee,P,K),W===null?M=ee:W.sibling=ee,W=ee,H=Z}if(Y.done)return a(I,H),Wt&&sa(I,K),M;if(H===null){for(;!Y.done;K++,Y=B.next())Y=_(I,Y.value,L),Y!==null&&(P=p(Y,P,K),W===null?M=Y:W.sibling=Y,W=Y);return Wt&&sa(I,K),M}for(H=c(I,H);!Y.done;K++,Y=B.next())Y=E(H,I,K,Y.value,L),Y!==null&&(n&&Y.alternate!==null&&H.delete(Y.key===null?K:Y.key),P=p(Y,P,K),W===null?M=Y:W.sibling=Y,W=Y);return n&&H.forEach(function(ce){return o(I,ce)}),Wt&&sa(I,K),M}function R(I,P,B,L){if(typeof B=="object"&&B!==null&&B.type===Bl&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case fp:e:{for(var M=B.key,W=P;W!==null;){if(W.key===M){if(M=B.type,M===Bl){if(W.tag===7){a(I,W.sibling),P=u(W,B.props.children),P.return=I,I=P;break e}}else if(W.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Zi&&YS(M)===W.type){a(I,W.sibling),P=u(W,B.props),P.ref=md(I,W,B),P.return=I,I=P;break e}a(I,W);break}else o(I,W);W=W.sibling}B.type===Bl?(P=ma(B.props.children,I.mode,L,B.key),P.return=I,I=P):(L=Zp(B.type,B.key,B.props,null,I.mode,L),L.ref=md(I,P,B),L.return=I,I=L)}return g(I);case Nl:e:{for(W=B.key;P!==null;){if(P.key===W)if(P.tag===4&&P.stateNode.containerInfo===B.containerInfo&&P.stateNode.implementation===B.implementation){a(I,P.sibling),P=u(P,B.children||[]),P.return=I,I=P;break e}else{a(I,P);break}else o(I,P);P=P.sibling}P=o0(B,I.mode,L),P.return=I,I=P}return g(I);case Zi:return W=B._init,R(I,P,W(B._payload),L)}if(Md(B))return S(I,P,B,L);if(ud(B))return D(I,P,B,L);xp(I,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,P!==null&&P.tag===6?(a(I,P.sibling),P=u(P,B),P.return=I,I=P):(a(I,P),P=n0(B,I.mode,L),P.return=I,I=P),g(I)):a(I,P)}return R}var oc=fI(!0),gI=fI(!1),Mu={},Gr=Cs(Mu),du=Cs(Mu),uu=Cs(Mu);function pa(n){if(n===Mu)throw Error(pe(174));return n}function hv(n,o){switch(Ot(uu,o),Ot(du,n),Ot(Gr,Mu),n=o.nodeType,n){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:I0(null,"");break;default:n=n===8?o.parentNode:o,o=n.namespaceURI||null,n=n.tagName,o=I0(o,n)}Ft(Gr),Ot(Gr,o)}function rc(){Ft(Gr),Ft(du),Ft(uu)}function mI(n){pa(uu.current);var o=pa(Gr.current),a=I0(o,n.type);o!==a&&(Ot(du,n),Ot(Gr,a))}function pv(n){du.current===n&&(Ft(Gr),Ft(du))}var Kt=Cs(0);function _f(n){for(var o=n;o!==null;){if(o.tag===13){var a=o.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Qk=[];function fv(){for(var n=0;n<Qk.length;n++)Qk[n]._workInProgressVersionPrimary=null;Qk.length=0}var Gp=Ei.ReactCurrentDispatcher,Zk=Ei.ReactCurrentBatchConfig,Ca=0,Yt=null,vn=null,Tn=null,xf=!1,$d=!1,hu=0,zF=0;function qn(){throw Error(pe(321))}function gv(n,o){if(o===null)return!1;for(var a=0;a<o.length&&a<n.length;a++)if(!kr(n[a],o[a]))return!1;return!0}function mv(n,o,a,c,u,p){if(Ca=p,Yt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Gp.current=n===null||n.memoizedState===null?VF:$F,n=a(c,u),$d){p=0;do{if($d=!1,hu=0,25<=p)throw Error(pe(301));p+=1,Tn=vn=null,o.updateQueue=null,Gp.current=UF,n=a(c,u)}while($d)}if(Gp.current=Ef,o=vn!==null&&vn.next!==null,Ca=0,Tn=vn=Yt=null,xf=!1,o)throw Error(pe(300));return n}function bv(){var n=hu!==0;return hu=0,n}function Or(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?Yt.memoizedState=Tn=n:Tn=Tn.next=n,Tn}function Zo(){if(vn===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=vn.next;var o=Tn===null?Yt.memoizedState:Tn.next;if(o!==null)Tn=o,vn=n;else{if(n===null)throw Error(pe(310));vn=n,n={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},Tn===null?Yt.memoizedState=Tn=n:Tn=Tn.next=n}return Tn}function pu(n,o){return typeof o=="function"?o(n):o}function Jk(n){var o=Zo(),a=o.queue;if(a===null)throw Error(pe(311));a.lastRenderedReducer=n;var c=vn,u=c.baseQueue,p=a.pending;if(p!==null){if(u!==null){var g=u.next;u.next=p.next,p.next=g}c.baseQueue=u=p,a.pending=null}if(u!==null){p=u.next,c=c.baseState;var k=g=null,m=null,C=p;do{var A=C.lane;if((Ca&A)===A)m!==null&&(m=m.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),c=C.hasEagerState?C.eagerState:n(c,C.action);else{var _={lane:A,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};m===null?(k=m=_,g=c):m=m.next=_,Yt.lanes|=A,ya|=A}C=C.next}while(C!==null&&C!==p);m===null?g=c:m.next=k,kr(c,o.memoizedState)||(co=!0),o.memoizedState=c,o.baseState=g,o.baseQueue=m,a.lastRenderedState=c}if(n=a.interleaved,n!==null){u=n;do p=u.lane,Yt.lanes|=p,ya|=p,u=u.next;while(u!==n)}else u===null&&(a.lanes=0);return[o.memoizedState,a.dispatch]}function Xk(n){var o=Zo(),a=o.queue;if(a===null)throw Error(pe(311));a.lastRenderedReducer=n;var c=a.dispatch,u=a.pending,p=o.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do p=n(p,g.action),g=g.next;while(g!==u);kr(p,o.memoizedState)||(co=!0),o.memoizedState=p,o.baseQueue===null&&(o.baseState=p),a.lastRenderedState=p}return[p,c]}function bI(){}function kI(n,o){var a=Yt,c=Zo(),u=o(),p=!kr(c.memoizedState,u);if(p&&(c.memoizedState=u,co=!0),c=c.queue,kv(CI.bind(null,a,c,n),[n]),c.getSnapshot!==o||p||Tn!==null&&Tn.memoizedState.tag&1){if(a.flags|=2048,fu(9,vI.bind(null,a,c,u,o),void 0,null),In===null)throw Error(pe(349));Ca&30||wI(a,o,u)}return u}function wI(n,o,a){n.flags|=16384,n={getSnapshot:o,value:a},o=Yt.updateQueue,o===null?(o={lastEffect:null,stores:null},Yt.updateQueue=o,o.stores=[n]):(a=o.stores,a===null?o.stores=[n]:a.push(n))}function vI(n,o,a,c){o.value=a,o.getSnapshot=c,yI(o)&&AI(n)}function CI(n,o,a){return a(function(){yI(o)&&AI(n)})}function yI(n){var o=n.getSnapshot;n=n.value;try{var a=o();return!kr(n,a)}catch{return!0}}function AI(n){var o=yi(n,1);o!==null&&br(o,n,1,-1)}function QS(n){var o=Or();return typeof n=="function"&&(n=n()),o.memoizedState=o.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pu,lastRenderedState:n},o.queue=n,n=n.dispatch=FF.bind(null,Yt,n),[o.memoizedState,n]}function fu(n,o,a,c){return n={tag:n,create:o,destroy:a,deps:c,next:null},o=Yt.updateQueue,o===null?(o={lastEffect:null,stores:null},Yt.updateQueue=o,o.lastEffect=n.next=n):(a=o.lastEffect,a===null?o.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,o.lastEffect=n)),n}function _I(){return Zo().memoizedState}function qp(n,o,a,c){var u=Or();Yt.flags|=n,u.memoizedState=fu(1|o,a,void 0,c===void 0?null:c)}function Zf(n,o,a,c){var u=Zo();c=c===void 0?null:c;var p=void 0;if(vn!==null){var g=vn.memoizedState;if(p=g.destroy,c!==null&&gv(c,g.deps)){u.memoizedState=fu(o,a,p,c);return}}Yt.flags|=n,u.memoizedState=fu(1|o,a,p,c)}function ZS(n,o){return qp(8390656,8,n,o)}function kv(n,o){return Zf(2048,8,n,o)}function xI(n,o){return Zf(4,2,n,o)}function EI(n,o){return Zf(4,4,n,o)}function SI(n,o){if(typeof o=="function")return n=n(),o(n),function(){o(null)};if(o!=null)return n=n(),o.current=n,function(){o.current=null}}function DI(n,o,a){return a=a!=null?a.concat([n]):null,Zf(4,4,SI.bind(null,o,n),a)}function wv(){}function TI(n,o){var a=Zo();o=o===void 0?null:o;var c=a.memoizedState;return c!==null&&o!==null&&gv(o,c[1])?c[0]:(a.memoizedState=[n,o],n)}function II(n,o){var a=Zo();o=o===void 0?null:o;var c=a.memoizedState;return c!==null&&o!==null&&gv(o,c[1])?c[0]:(n=n(),a.memoizedState=[n,o],n)}function MI(n,o,a){return Ca&21?(kr(a,o)||(a=BT(),Yt.lanes|=a,ya|=a,n.baseState=!0),o):(n.baseState&&(n.baseState=!1,co=!0),n.memoizedState=a)}function LF(n,o){var a=Et;Et=a!==0&&4>a?a:4,n(!0);var c=Zk.transition;Zk.transition={};try{n(!1),o()}finally{Et=a,Zk.transition=c}}function PI(){return Zo().memoizedState}function jF(n,o,a){var c=ps(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},NI(n))BI(o,a);else if(a=dI(n,o,a,c),a!==null){var u=to();br(a,n,c,u),RI(a,o,c)}}function FF(n,o,a){var c=ps(n),u={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(NI(n))BI(o,u);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=o.lastRenderedReducer,p!==null))try{var g=o.lastRenderedState,k=p(g,a);if(u.hasEagerState=!0,u.eagerState=k,kr(k,g)){var m=o.interleaved;m===null?(u.next=u,dv(o)):(u.next=m.next,m.next=u),o.interleaved=u;return}}catch{}finally{}a=dI(n,o,u,c),a!==null&&(u=to(),br(a,n,c,u),RI(a,o,c))}}function NI(n){var o=n.alternate;return n===Yt||o!==null&&o===Yt}function BI(n,o){$d=xf=!0;var a=n.pending;a===null?o.next=o:(o.next=a.next,a.next=o),n.pending=o}function RI(n,o,a){if(a&4194240){var c=o.lanes;c&=n.pendingLanes,a|=c,o.lanes=a,Qw(n,a)}}var Ef={readContext:Qo,useCallback:qn,useContext:qn,useEffect:qn,useImperativeHandle:qn,useInsertionEffect:qn,useLayoutEffect:qn,useMemo:qn,useReducer:qn,useRef:qn,useState:qn,useDebugValue:qn,useDeferredValue:qn,useTransition:qn,useMutableSource:qn,useSyncExternalStore:qn,useId:qn,unstable_isNewReconciler:!1},VF={readContext:Qo,useCallback:function(n,o){return Or().memoizedState=[n,o===void 0?null:o],n},useContext:Qo,useEffect:ZS,useImperativeHandle:function(n,o,a){return a=a!=null?a.concat([n]):null,qp(4194308,4,SI.bind(null,o,n),a)},useLayoutEffect:function(n,o){return qp(4194308,4,n,o)},useInsertionEffect:function(n,o){return qp(4,2,n,o)},useMemo:function(n,o){var a=Or();return o=o===void 0?null:o,n=n(),a.memoizedState=[n,o],n},useReducer:function(n,o,a){var c=Or();return o=a!==void 0?a(o):o,c.memoizedState=c.baseState=o,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:o},c.queue=n,n=n.dispatch=jF.bind(null,Yt,n),[c.memoizedState,n]},useRef:function(n){var o=Or();return n={current:n},o.memoizedState=n},useState:QS,useDebugValue:wv,useDeferredValue:function(n){return Or().memoizedState=n},useTransition:function(){var n=QS(!1),o=n[0];return n=LF.bind(null,n[1]),Or().memoizedState=n,[o,n]},useMutableSource:function(){},useSyncExternalStore:function(n,o,a){var c=Yt,u=Or();if(Wt){if(a===void 0)throw Error(pe(407));a=a()}else{if(a=o(),In===null)throw Error(pe(349));Ca&30||wI(c,o,a)}u.memoizedState=a;var p={value:a,getSnapshot:o};return u.queue=p,ZS(CI.bind(null,c,p,n),[n]),c.flags|=2048,fu(9,vI.bind(null,c,p,a,o),void 0,null),a},useId:function(){var n=Or(),o=In.identifierPrefix;if(Wt){var a=bi,c=mi;a=(c&~(1<<32-mr(c)-1)).toString(32)+a,o=":"+o+"R"+a,a=hu++,0<a&&(o+="H"+a.toString(32)),o+=":"}else a=zF++,o=":"+o+"r"+a.toString(32)+":";return n.memoizedState=o},unstable_isNewReconciler:!1},$F={readContext:Qo,useCallback:TI,useContext:Qo,useEffect:kv,useImperativeHandle:DI,useInsertionEffect:xI,useLayoutEffect:EI,useMemo:II,useReducer:Jk,useRef:_I,useState:function(){return Jk(pu)},useDebugValue:wv,useDeferredValue:function(n){var o=Zo();return MI(o,vn.memoizedState,n)},useTransition:function(){var n=Jk(pu)[0],o=Zo().memoizedState;return[n,o]},useMutableSource:bI,useSyncExternalStore:kI,useId:PI,unstable_isNewReconciler:!1},UF={readContext:Qo,useCallback:TI,useContext:Qo,useEffect:kv,useImperativeHandle:DI,useInsertionEffect:xI,useLayoutEffect:EI,useMemo:II,useReducer:Xk,useRef:_I,useState:function(){return Xk(pu)},useDebugValue:wv,useDeferredValue:function(n){var o=Zo();return vn===null?o.memoizedState=n:MI(o,vn.memoizedState,n)},useTransition:function(){var n=Xk(pu)[0],o=Zo().memoizedState;return[n,o]},useMutableSource:bI,useSyncExternalStore:kI,useId:PI,unstable_isNewReconciler:!1};function ic(n,o){try{var a="",c=o;do a+=b7(c),c=c.return;while(c);var u=a}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:o,stack:u,digest:null}}function e0(n,o,a){return{value:n,source:null,stack:a??null,digest:o??null}}function X0(n,o){try{console.error(o.value)}catch(a){setTimeout(function(){throw a})}}var HF=typeof WeakMap=="function"?WeakMap:Map;function OI(n,o,a){a=ki(-1,a),a.tag=3,a.payload={element:null};var c=o.value;return a.callback=function(){Df||(Df=!0,cw=c),X0(n,o)},a}function zI(n,o,a){a=ki(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var u=o.value;a.payload=function(){return c(u)},a.callback=function(){X0(n,o)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){X0(n,o),typeof c!="function"&&(hs===null?hs=new Set([this]):hs.add(this));var g=o.stack;this.componentDidCatch(o.value,{componentStack:g!==null?g:""})}),a}function JS(n,o,a){var c=n.pingCache;if(c===null){c=n.pingCache=new HF;var u=new Set;c.set(o,u)}else u=c.get(o),u===void 0&&(u=new Set,c.set(o,u));u.has(a)||(u.add(a),n=r9.bind(null,n,o,a),o.then(n,n))}function XS(n){do{var o;if((o=n.tag===13)&&(o=n.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return n;n=n.return}while(n!==null);return null}function e5(n,o,a,c,u){return n.mode&1?(n.flags|=65536,n.lanes=u,n):(n===o?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(o=ki(-1,1),o.tag=2,us(a,o,1))),a.lanes|=1),n)}var WF=Ei.ReactCurrentOwner,co=!1;function Jn(n,o,a,c){o.child=n===null?gI(o,null,a,c):oc(o,n.child,a,c)}function t5(n,o,a,c,u){a=a.render;var p=o.ref;return Ql(o,u),c=mv(n,o,a,c,p,u),a=bv(),n!==null&&!co?(o.updateQueue=n.updateQueue,o.flags&=-2053,n.lanes&=~u,Ai(n,o,u)):(Wt&&a&&rv(o),o.flags|=1,Jn(n,o,c,u),o.child)}function n5(n,o,a,c,u){if(n===null){var p=a.type;return typeof p=="function"&&!Sv(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(o.tag=15,o.type=p,LI(n,o,p,c,u)):(n=Zp(a.type,null,c,o,o.mode,u),n.ref=o.ref,n.return=o,o.child=n)}if(p=n.child,!(n.lanes&u)){var g=p.memoizedProps;if(a=a.compare,a=a!==null?a:su,a(g,c)&&n.ref===o.ref)return Ai(n,o,u)}return o.flags|=1,n=fs(p,c),n.ref=o.ref,n.return=o,o.child=n}function LI(n,o,a,c,u){if(n!==null){var p=n.memoizedProps;if(su(p,c)&&n.ref===o.ref)if(co=!1,o.pendingProps=c=p,(n.lanes&u)!==0)n.flags&131072&&(co=!0);else return o.lanes=n.lanes,Ai(n,o,u)}return ew(n,o,a,c,u)}function jI(n,o,a){var c=o.pendingProps,u=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Hl,So),So|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:n,cachePool:null,transitions:null},o.updateQueue=null,Ot(Hl,So),So|=n,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ot(Hl,So),So|=c}else p!==null?(c=p.baseLanes|a,o.memoizedState=null):c=a,Ot(Hl,So),So|=c;return Jn(n,o,u,a),o.child}function FI(n,o){var a=o.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(o.flags|=512,o.flags|=2097152)}function ew(n,o,a,c,u){var p=ho(a)?wa:Zn.current;return p=tc(o,p),Ql(o,u),a=mv(n,o,a,c,p,u),c=bv(),n!==null&&!co?(o.updateQueue=n.updateQueue,o.flags&=-2053,n.lanes&=~u,Ai(n,o,u)):(Wt&&c&&rv(o),o.flags|=1,Jn(n,o,a,u),o.child)}function o5(n,o,a,c,u){if(ho(a)){var p=!0;kf(o)}else p=!1;if(Ql(o,u),o.stateNode===null)Kp(n,o),pI(o,a,c),J0(o,a,c,u),c=!0;else if(n===null){var g=o.stateNode,k=o.memoizedProps;g.props=k;var m=g.context,C=a.contextType;typeof C=="object"&&C!==null?C=Qo(C):(C=ho(a)?wa:Zn.current,C=tc(o,C));var A=a.getDerivedStateFromProps,_=typeof A=="function"||typeof g.getSnapshotBeforeUpdate=="function";_||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(k!==c||m!==C)&&KS(o,g,c,C),Ji=!1;var y=o.memoizedState;g.state=y,Af(o,c,g,u),m=o.memoizedState,k!==c||y!==m||uo.current||Ji?(typeof A=="function"&&(Z0(o,a,A,c),m=o.memoizedState),(k=Ji||qS(o,a,k,c,y,m,C))?(_||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(o.flags|=4194308)):(typeof g.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=c,o.memoizedState=m),g.props=c,g.state=m,g.context=C,c=k):(typeof g.componentDidMount=="function"&&(o.flags|=4194308),c=!1)}else{g=o.stateNode,uI(n,o),k=o.memoizedProps,C=o.type===o.elementType?k:pr(o.type,k),g.props=C,_=o.pendingProps,y=g.context,m=a.contextType,typeof m=="object"&&m!==null?m=Qo(m):(m=ho(a)?wa:Zn.current,m=tc(o,m));var E=a.getDerivedStateFromProps;(A=typeof E=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(k!==_||y!==m)&&KS(o,g,c,m),Ji=!1,y=o.memoizedState,g.state=y,Af(o,c,g,u);var S=o.memoizedState;k!==_||y!==S||uo.current||Ji?(typeof E=="function"&&(Z0(o,a,E,c),S=o.memoizedState),(C=Ji||qS(o,a,C,c,y,S,m)||!1)?(A||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,S,m),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,S,m)),typeof g.componentDidUpdate=="function"&&(o.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof g.componentDidUpdate!="function"||k===n.memoizedProps&&y===n.memoizedState||(o.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&y===n.memoizedState||(o.flags|=1024),o.memoizedProps=c,o.memoizedState=S),g.props=c,g.state=S,g.context=m,c=C):(typeof g.componentDidUpdate!="function"||k===n.memoizedProps&&y===n.memoizedState||(o.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&y===n.memoizedState||(o.flags|=1024),c=!1)}return tw(n,o,a,c,p,u)}function tw(n,o,a,c,u,p){FI(n,o);var g=(o.flags&128)!==0;if(!c&&!g)return u&&$S(o,a,!1),Ai(n,o,p);c=o.stateNode,WF.current=o;var k=g&&typeof a.getDerivedStateFromError!="function"?null:c.render();return o.flags|=1,n!==null&&g?(o.child=oc(o,n.child,null,p),o.child=oc(o,null,k,p)):Jn(n,o,k,p),o.memoizedState=c.state,u&&$S(o,a,!0),o.child}function VI(n){var o=n.stateNode;o.pendingContext?VS(n,o.pendingContext,o.pendingContext!==o.context):o.context&&VS(n,o.context,!1),hv(n,o.containerInfo)}function r5(n,o,a,c,u){return nc(),sv(u),o.flags|=256,Jn(n,o,a,c),o.child}var nw={dehydrated:null,treeContext:null,retryLane:0};function ow(n){return{baseLanes:n,cachePool:null,transitions:null}}function $I(n,o,a){var c=o.pendingProps,u=Kt.current,p=!1,g=(o.flags&128)!==0,k;if((k=g)||(k=n!==null&&n.memoizedState===null?!1:(u&2)!==0),k?(p=!0,o.flags&=-129):(n===null||n.memoizedState!==null)&&(u|=1),Ot(Kt,u&1),n===null)return Y0(o),n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(o.mode&1?n.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(g=c.children,n=c.fallback,p?(c=o.mode,p=o.child,g={mode:"hidden",children:g},!(c&1)&&p!==null?(p.childLanes=0,p.pendingProps=g):p=eg(g,c,0,null),n=ma(n,c,a,null),p.return=o,n.return=o,p.sibling=n,o.child=p,o.child.memoizedState=ow(a),o.memoizedState=nw,n):vv(o,g));if(u=n.memoizedState,u!==null&&(k=u.dehydrated,k!==null))return GF(n,o,g,c,k,u,a);if(p){p=c.fallback,g=o.mode,u=n.child,k=u.sibling;var m={mode:"hidden",children:c.children};return!(g&1)&&o.child!==u?(c=o.child,c.childLanes=0,c.pendingProps=m,o.deletions=null):(c=fs(u,m),c.subtreeFlags=u.subtreeFlags&14680064),k!==null?p=fs(k,p):(p=ma(p,g,a,null),p.flags|=2),p.return=o,c.return=o,c.sibling=p,o.child=c,c=p,p=o.child,g=n.child.memoizedState,g=g===null?ow(a):{baseLanes:g.baseLanes|a,cachePool:null,transitions:g.transitions},p.memoizedState=g,p.childLanes=n.childLanes&~a,o.memoizedState=nw,c}return p=n.child,n=p.sibling,c=fs(p,{mode:"visible",children:c.children}),!(o.mode&1)&&(c.lanes=a),c.return=o,c.sibling=null,n!==null&&(a=o.deletions,a===null?(o.deletions=[n],o.flags|=16):a.push(n)),o.child=c,o.memoizedState=null,c}function vv(n,o){return o=eg({mode:"visible",children:o},n.mode,0,null),o.return=n,n.child=o}function Ep(n,o,a,c){return c!==null&&sv(c),oc(o,n.child,null,a),n=vv(o,o.pendingProps.children),n.flags|=2,o.memoizedState=null,n}function GF(n,o,a,c,u,p,g){if(a)return o.flags&256?(o.flags&=-257,c=e0(Error(pe(422))),Ep(n,o,g,c)):o.memoizedState!==null?(o.child=n.child,o.flags|=128,null):(p=c.fallback,u=o.mode,c=eg({mode:"visible",children:c.children},u,0,null),p=ma(p,u,g,null),p.flags|=2,c.return=o,p.return=o,c.sibling=p,o.child=c,o.mode&1&&oc(o,n.child,null,g),o.child.memoizedState=ow(g),o.memoizedState=nw,p);if(!(o.mode&1))return Ep(n,o,g,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var k=c.dgst;return c=k,p=Error(pe(419)),c=e0(p,c,void 0),Ep(n,o,g,c)}if(k=(g&n.childLanes)!==0,co||k){if(c=In,c!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(c.suspendedLanes|g)?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,yi(n,u),br(c,n,u,-1))}return Ev(),c=e0(Error(pe(421))),Ep(n,o,g,c)}return u.data==="$?"?(o.flags|=128,o.child=n.child,o=i9.bind(null,n),u._reactRetry=o,null):(n=p.treeContext,To=ds(u.nextSibling),Io=o,Wt=!0,gr=null,n!==null&&(Ho[Wo++]=mi,Ho[Wo++]=bi,Ho[Wo++]=va,mi=n.id,bi=n.overflow,va=o),o=vv(o,c.children),o.flags|=4096,o)}function i5(n,o,a){n.lanes|=o;var c=n.alternate;c!==null&&(c.lanes|=o),Q0(n.return,o,a)}function t0(n,o,a,c,u){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:u}:(p.isBackwards=o,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=u)}function UI(n,o,a){var c=o.pendingProps,u=c.revealOrder,p=c.tail;if(Jn(n,o,c.children,a),c=Kt.current,c&2)c=c&1|2,o.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=o.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&i5(n,a,o);else if(n.tag===19)i5(n,a,o);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===o)break e;for(;n.sibling===null;){if(n.return===null||n.return===o)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ot(Kt,c),!(o.mode&1))o.memoizedState=null;else switch(u){case"forwards":for(a=o.child,u=null;a!==null;)n=a.alternate,n!==null&&_f(n)===null&&(u=a),a=a.sibling;a=u,a===null?(u=o.child,o.child=null):(u=a.sibling,a.sibling=null),t0(o,!1,u,a,p);break;case"backwards":for(a=null,u=o.child,o.child=null;u!==null;){if(n=u.alternate,n!==null&&_f(n)===null){o.child=u;break}n=u.sibling,u.sibling=a,a=u,u=n}t0(o,!0,a,null,p);break;case"together":t0(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Kp(n,o){!(o.mode&1)&&n!==null&&(n.alternate=null,o.alternate=null,o.flags|=2)}function Ai(n,o,a){if(n!==null&&(o.dependencies=n.dependencies),ya|=o.lanes,!(a&o.childLanes))return null;if(n!==null&&o.child!==n.child)throw Error(pe(153));if(o.child!==null){for(n=o.child,a=fs(n,n.pendingProps),o.child=a,a.return=o;n.sibling!==null;)n=n.sibling,a=a.sibling=fs(n,n.pendingProps),a.return=o;a.sibling=null}return o.child}function qF(n,o,a){switch(o.tag){case 3:VI(o),nc();break;case 5:mI(o);break;case 1:ho(o.type)&&kf(o);break;case 4:hv(o,o.stateNode.containerInfo);break;case 10:var c=o.type._context,u=o.memoizedProps.value;Ot(Cf,c._currentValue),c._currentValue=u;break;case 13:if(c=o.memoizedState,c!==null)return c.dehydrated!==null?(Ot(Kt,Kt.current&1),o.flags|=128,null):a&o.child.childLanes?$I(n,o,a):(Ot(Kt,Kt.current&1),n=Ai(n,o,a),n!==null?n.sibling:null);Ot(Kt,Kt.current&1);break;case 19:if(c=(a&o.childLanes)!==0,n.flags&128){if(c)return UI(n,o,a);o.flags|=128}if(u=o.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ot(Kt,Kt.current),c)break;return null;case 22:case 23:return o.lanes=0,jI(n,o,a)}return Ai(n,o,a)}var HI,rw,WI,GI;HI=function(n,o){for(var a=o.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};rw=function(){};WI=function(n,o,a,c){var u=n.memoizedProps;if(u!==c){n=o.stateNode,pa(Gr.current);var p=null;switch(a){case"input":u=E0(n,u),c=E0(n,c),p=[];break;case"select":u=Qt({},u,{value:void 0}),c=Qt({},c,{value:void 0}),p=[];break;case"textarea":u=T0(n,u),c=T0(n,c),p=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=mf)}M0(a,c);var g;a=null;for(C in u)if(!c.hasOwnProperty(C)&&u.hasOwnProperty(C)&&u[C]!=null)if(C==="style"){var k=u[C];for(g in k)k.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(Xd.hasOwnProperty(C)?p||(p=[]):(p=p||[]).push(C,null));for(C in c){var m=c[C];if(k=u!=null?u[C]:void 0,c.hasOwnProperty(C)&&m!==k&&(m!=null||k!=null))if(C==="style")if(k){for(g in k)!k.hasOwnProperty(g)||m&&m.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in m)m.hasOwnProperty(g)&&k[g]!==m[g]&&(a||(a={}),a[g]=m[g])}else a||(p||(p=[]),p.push(C,a)),a=m;else C==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,k=k?k.__html:void 0,m!=null&&k!==m&&(p=p||[]).push(C,m)):C==="children"?typeof m!="string"&&typeof m!="number"||(p=p||[]).push(C,""+m):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(Xd.hasOwnProperty(C)?(m!=null&&C==="onScroll"&&jt("scroll",n),p||k===m||(p=[])):(p=p||[]).push(C,m))}a&&(p=p||[]).push("style",a);var C=p;(o.updateQueue=C)&&(o.flags|=4)}};GI=function(n,o,a,c){a!==c&&(o.flags|=4)};function bd(n,o){if(!Wt)switch(n.tailMode){case"hidden":o=n.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?o||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Kn(n){var o=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(o)for(var u=n.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=n,u=u.sibling;else for(u=n.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=n,u=u.sibling;return n.subtreeFlags|=c,n.childLanes=a,o}function KF(n,o,a){var c=o.pendingProps;switch(iv(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kn(o),null;case 1:return ho(o.type)&&bf(),Kn(o),null;case 3:return c=o.stateNode,rc(),Ft(uo),Ft(Zn),fv(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(_p(o)?o.flags|=4:n===null||n.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,gr!==null&&(hw(gr),gr=null))),rw(n,o),Kn(o),null;case 5:pv(o);var u=pa(uu.current);if(a=o.type,n!==null&&o.stateNode!=null)WI(n,o,a,c,u),n.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!c){if(o.stateNode===null)throw Error(pe(166));return Kn(o),null}if(n=pa(Gr.current),_p(o)){c=o.stateNode,a=o.type;var p=o.memoizedProps;switch(c[Fr]=o,c[cu]=p,n=(o.mode&1)!==0,a){case"dialog":jt("cancel",c),jt("close",c);break;case"iframe":case"object":case"embed":jt("load",c);break;case"video":case"audio":for(u=0;u<Nd.length;u++)jt(Nd[u],c);break;case"source":jt("error",c);break;case"img":case"image":case"link":jt("error",c),jt("load",c);break;case"details":jt("toggle",c);break;case"input":fS(c,p),jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},jt("invalid",c);break;case"textarea":mS(c,p),jt("invalid",c)}M0(a,p),u=null;for(var g in p)if(p.hasOwnProperty(g)){var k=p[g];g==="children"?typeof k=="string"?c.textContent!==k&&(p.suppressHydrationWarning!==!0&&Ap(c.textContent,k,n),u=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(p.suppressHydrationWarning!==!0&&Ap(c.textContent,k,n),u=["children",""+k]):Xd.hasOwnProperty(g)&&k!=null&&g==="onScroll"&&jt("scroll",c)}switch(a){case"input":gp(c),gS(c,p,!0);break;case"textarea":gp(c),bS(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=mf)}c=u,o.updateQueue=c,c!==null&&(o.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=wT(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=g.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=g.createElement(a,{is:c.is}):(n=g.createElement(a),a==="select"&&(g=n,c.multiple?g.multiple=!0:c.size&&(g.size=c.size))):n=g.createElementNS(n,a),n[Fr]=o,n[cu]=c,HI(n,o,!1,!1),o.stateNode=n;e:{switch(g=P0(a,c),a){case"dialog":jt("cancel",n),jt("close",n),u=c;break;case"iframe":case"object":case"embed":jt("load",n),u=c;break;case"video":case"audio":for(u=0;u<Nd.length;u++)jt(Nd[u],n);u=c;break;case"source":jt("error",n),u=c;break;case"img":case"image":case"link":jt("error",n),jt("load",n),u=c;break;case"details":jt("toggle",n),u=c;break;case"input":fS(n,c),u=E0(n,c),jt("invalid",n);break;case"option":u=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},u=Qt({},c,{value:void 0}),jt("invalid",n);break;case"textarea":mS(n,c),u=T0(n,c),jt("invalid",n);break;default:u=c}M0(a,u),k=u;for(p in k)if(k.hasOwnProperty(p)){var m=k[p];p==="style"?yT(n,m):p==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&vT(n,m)):p==="children"?typeof m=="string"?(a!=="textarea"||m!=="")&&eu(n,m):typeof m=="number"&&eu(n,""+m):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Xd.hasOwnProperty(p)?m!=null&&p==="onScroll"&&jt("scroll",n):m!=null&&Hw(n,p,m,g))}switch(a){case"input":gp(n),gS(n,c,!1);break;case"textarea":gp(n),bS(n);break;case"option":c.value!=null&&n.setAttribute("value",""+gs(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Gl(n,!!c.multiple,p,!1):c.defaultValue!=null&&Gl(n,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(n.onclick=mf)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Kn(o),null;case 6:if(n&&o.stateNode!=null)GI(n,o,n.memoizedProps,c);else{if(typeof c!="string"&&o.stateNode===null)throw Error(pe(166));if(a=pa(uu.current),pa(Gr.current),_p(o)){if(c=o.stateNode,a=o.memoizedProps,c[Fr]=o,(p=c.nodeValue!==a)&&(n=Io,n!==null))switch(n.tag){case 3:Ap(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ap(c.nodeValue,a,(n.mode&1)!==0)}p&&(o.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Fr]=o,o.stateNode=c}return Kn(o),null;case 13:if(Ft(Kt),c=o.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&To!==null&&o.mode&1&&!(o.flags&128))cI(),nc(),o.flags|=98560,p=!1;else if(p=_p(o),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(pe(318));if(p=o.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(pe(317));p[Fr]=o}else nc(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;Kn(o),p=!1}else gr!==null&&(hw(gr),gr=null),p=!0;if(!p)return o.flags&65536?o:null}return o.flags&128?(o.lanes=a,o):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(o.child.flags|=8192,o.mode&1&&(n===null||Kt.current&1?Cn===0&&(Cn=3):Ev())),o.updateQueue!==null&&(o.flags|=4),Kn(o),null);case 4:return rc(),rw(n,o),n===null&&au(o.stateNode.containerInfo),Kn(o),null;case 10:return cv(o.type._context),Kn(o),null;case 17:return ho(o.type)&&bf(),Kn(o),null;case 19:if(Ft(Kt),p=o.memoizedState,p===null)return Kn(o),null;if(c=(o.flags&128)!==0,g=p.rendering,g===null)if(c)bd(p,!1);else{if(Cn!==0||n!==null&&n.flags&128)for(n=o.child;n!==null;){if(g=_f(n),g!==null){for(o.flags|=128,bd(p,!1),c=g.updateQueue,c!==null&&(o.updateQueue=c,o.flags|=4),o.subtreeFlags=0,c=a,a=o.child;a!==null;)p=a,n=c,p.flags&=14680066,g=p.alternate,g===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=g.childLanes,p.lanes=g.lanes,p.child=g.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=g.memoizedProps,p.memoizedState=g.memoizedState,p.updateQueue=g.updateQueue,p.type=g.type,n=g.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ot(Kt,Kt.current&1|2),o.child}n=n.sibling}p.tail!==null&&cn()>sc&&(o.flags|=128,c=!0,bd(p,!1),o.lanes=4194304)}else{if(!c)if(n=_f(g),n!==null){if(o.flags|=128,c=!0,a=n.updateQueue,a!==null&&(o.updateQueue=a,o.flags|=4),bd(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!Wt)return Kn(o),null}else 2*cn()-p.renderingStartTime>sc&&a!==1073741824&&(o.flags|=128,c=!0,bd(p,!1),o.lanes=4194304);p.isBackwards?(g.sibling=o.child,o.child=g):(a=p.last,a!==null?a.sibling=g:o.child=g,p.last=g)}return p.tail!==null?(o=p.tail,p.rendering=o,p.tail=o.sibling,p.renderingStartTime=cn(),o.sibling=null,a=Kt.current,Ot(Kt,c?a&1|2:a&1),o):(Kn(o),null);case 22:case 23:return xv(),c=o.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(o.flags|=8192),c&&o.mode&1?So&1073741824&&(Kn(o),o.subtreeFlags&6&&(o.flags|=8192)):Kn(o),null;case 24:return null;case 25:return null}throw Error(pe(156,o.tag))}function YF(n,o){switch(iv(o),o.tag){case 1:return ho(o.type)&&bf(),n=o.flags,n&65536?(o.flags=n&-65537|128,o):null;case 3:return rc(),Ft(uo),Ft(Zn),fv(),n=o.flags,n&65536&&!(n&128)?(o.flags=n&-65537|128,o):null;case 5:return pv(o),null;case 13:if(Ft(Kt),n=o.memoizedState,n!==null&&n.dehydrated!==null){if(o.alternate===null)throw Error(pe(340));nc()}return n=o.flags,n&65536?(o.flags=n&-65537|128,o):null;case 19:return Ft(Kt),null;case 4:return rc(),null;case 10:return cv(o.type._context),null;case 22:case 23:return xv(),null;case 24:return null;default:return null}}var Sp=!1,Qn=!1,QF=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ul(n,o){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){on(n,o,c)}else a.current=null}function iw(n,o,a){try{a()}catch(c){on(n,o,c)}}var s5=!1;function ZF(n,o){if($0=pf,n=QT(),ov(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var u=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var g=0,k=-1,m=-1,C=0,A=0,_=n,y=null;t:for(;;){for(var E;_!==a||u!==0&&_.nodeType!==3||(k=g+u),_!==p||c!==0&&_.nodeType!==3||(m=g+c),_.nodeType===3&&(g+=_.nodeValue.length),(E=_.firstChild)!==null;)y=_,_=E;for(;;){if(_===n)break t;if(y===a&&++C===u&&(k=g),y===p&&++A===c&&(m=g),(E=_.nextSibling)!==null)break;_=y,y=_.parentNode}_=E}a=k===-1||m===-1?null:{start:k,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(U0={focusedElem:n,selectionRange:a},pf=!1,xe=o;xe!==null;)if(o=xe,n=o.child,(o.subtreeFlags&1028)!==0&&n!==null)n.return=o,xe=n;else for(;xe!==null;){o=xe;try{var S=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var D=S.memoizedProps,R=S.memoizedState,I=o.stateNode,P=I.getSnapshotBeforeUpdate(o.elementType===o.type?D:pr(o.type,D),R);I.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var B=o.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(L){on(o,o.return,L)}if(n=o.sibling,n!==null){n.return=o.return,xe=n;break}xe=o.return}return S=s5,s5=!1,S}function Ud(n,o,a){var c=o.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&n)===n){var p=u.destroy;u.destroy=void 0,p!==void 0&&iw(o,a,p)}u=u.next}while(u!==c)}}function Jf(n,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==o)}}function sw(n){var o=n.ref;if(o!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof o=="function"?o(n):o.current=n}}function qI(n){var o=n.alternate;o!==null&&(n.alternate=null,qI(o)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(o=n.stateNode,o!==null&&(delete o[Fr],delete o[cu],delete o[G0],delete o[NF],delete o[BF])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function KI(n){return n.tag===5||n.tag===3||n.tag===4}function a5(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||KI(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function aw(n,o,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,o?a.nodeType===8?a.parentNode.insertBefore(n,o):a.insertBefore(n,o):(a.nodeType===8?(o=a.parentNode,o.insertBefore(n,a)):(o=a,o.appendChild(n)),a=a._reactRootContainer,a!=null||o.onclick!==null||(o.onclick=mf));else if(c!==4&&(n=n.child,n!==null))for(aw(n,o,a),n=n.sibling;n!==null;)aw(n,o,a),n=n.sibling}function lw(n,o,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,o?a.insertBefore(n,o):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(lw(n,o,a),n=n.sibling;n!==null;)lw(n,o,a),n=n.sibling}var jn=null,fr=!1;function Gi(n,o,a){for(a=a.child;a!==null;)YI(n,o,a),a=a.sibling}function YI(n,o,a){if(Wr&&typeof Wr.onCommitFiberUnmount=="function")try{Wr.onCommitFiberUnmount(Hf,a)}catch{}switch(a.tag){case 5:Qn||Ul(a,o);case 6:var c=jn,u=fr;jn=null,Gi(n,o,a),jn=c,fr=u,jn!==null&&(fr?(n=jn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):jn.removeChild(a.stateNode));break;case 18:jn!==null&&(fr?(n=jn,a=a.stateNode,n.nodeType===8?Kk(n.parentNode,a):n.nodeType===1&&Kk(n,a),ru(n)):Kk(jn,a.stateNode));break;case 4:c=jn,u=fr,jn=a.stateNode.containerInfo,fr=!0,Gi(n,o,a),jn=c,fr=u;break;case 0:case 11:case 14:case 15:if(!Qn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var p=u,g=p.destroy;p=p.tag,g!==void 0&&(p&2||p&4)&&iw(a,o,g),u=u.next}while(u!==c)}Gi(n,o,a);break;case 1:if(!Qn&&(Ul(a,o),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){on(a,o,k)}Gi(n,o,a);break;case 21:Gi(n,o,a);break;case 22:a.mode&1?(Qn=(c=Qn)||a.memoizedState!==null,Gi(n,o,a),Qn=c):Gi(n,o,a);break;default:Gi(n,o,a)}}function l5(n){var o=n.updateQueue;if(o!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new QF),o.forEach(function(c){var u=s9.bind(null,n,c);a.has(c)||(a.add(c),c.then(u,u))})}}function hr(n,o){var a=o.deletions;if(a!==null)for(var c=0;c<a.length;c++){var u=a[c];try{var p=n,g=o,k=g;e:for(;k!==null;){switch(k.tag){case 5:jn=k.stateNode,fr=!1;break e;case 3:jn=k.stateNode.containerInfo,fr=!0;break e;case 4:jn=k.stateNode.containerInfo,fr=!0;break e}k=k.return}if(jn===null)throw Error(pe(160));YI(p,g,u),jn=null,fr=!1;var m=u.alternate;m!==null&&(m.return=null),u.return=null}catch(C){on(u,o,C)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)QI(o,n),o=o.sibling}function QI(n,o){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(hr(o,n),Rr(n),c&4){try{Ud(3,n,n.return),Jf(3,n)}catch(D){on(n,n.return,D)}try{Ud(5,n,n.return)}catch(D){on(n,n.return,D)}}break;case 1:hr(o,n),Rr(n),c&512&&a!==null&&Ul(a,a.return);break;case 5:if(hr(o,n),Rr(n),c&512&&a!==null&&Ul(a,a.return),n.flags&32){var u=n.stateNode;try{eu(u,"")}catch(D){on(n,n.return,D)}}if(c&4&&(u=n.stateNode,u!=null)){var p=n.memoizedProps,g=a!==null?a.memoizedProps:p,k=n.type,m=n.updateQueue;if(n.updateQueue=null,m!==null)try{k==="input"&&p.type==="radio"&&p.name!=null&&bT(u,p),P0(k,g);var C=P0(k,p);for(g=0;g<m.length;g+=2){var A=m[g],_=m[g+1];A==="style"?yT(u,_):A==="dangerouslySetInnerHTML"?vT(u,_):A==="children"?eu(u,_):Hw(u,A,_,C)}switch(k){case"input":S0(u,p);break;case"textarea":kT(u,p);break;case"select":var y=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var E=p.value;E!=null?Gl(u,!!p.multiple,E,!1):y!==!!p.multiple&&(p.defaultValue!=null?Gl(u,!!p.multiple,p.defaultValue,!0):Gl(u,!!p.multiple,p.multiple?[]:"",!1))}u[cu]=p}catch(D){on(n,n.return,D)}}break;case 6:if(hr(o,n),Rr(n),c&4){if(n.stateNode===null)throw Error(pe(162));u=n.stateNode,p=n.memoizedProps;try{u.nodeValue=p}catch(D){on(n,n.return,D)}}break;case 3:if(hr(o,n),Rr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ru(o.containerInfo)}catch(D){on(n,n.return,D)}break;case 4:hr(o,n),Rr(n);break;case 13:hr(o,n),Rr(n),u=n.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(Av=cn())),c&4&&l5(n);break;case 22:if(A=a!==null&&a.memoizedState!==null,n.mode&1?(Qn=(C=Qn)||A,hr(o,n),Qn=C):hr(o,n),Rr(n),c&8192){if(C=n.memoizedState!==null,(n.stateNode.isHidden=C)&&!A&&n.mode&1)for(xe=n,A=n.child;A!==null;){for(_=xe=A;xe!==null;){switch(y=xe,E=y.child,y.tag){case 0:case 11:case 14:case 15:Ud(4,y,y.return);break;case 1:Ul(y,y.return);var S=y.stateNode;if(typeof S.componentWillUnmount=="function"){c=y,a=y.return;try{o=c,S.props=o.memoizedProps,S.state=o.memoizedState,S.componentWillUnmount()}catch(D){on(c,a,D)}}break;case 5:Ul(y,y.return);break;case 22:if(y.memoizedState!==null){d5(_);continue}}E!==null?(E.return=y,xe=E):d5(_)}A=A.sibling}e:for(A=null,_=n;;){if(_.tag===5){if(A===null){A=_;try{u=_.stateNode,C?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(k=_.stateNode,m=_.memoizedProps.style,g=m!=null&&m.hasOwnProperty("display")?m.display:null,k.style.display=CT("display",g))}catch(D){on(n,n.return,D)}}}else if(_.tag===6){if(A===null)try{_.stateNode.nodeValue=C?"":_.memoizedProps}catch(D){on(n,n.return,D)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===n)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;A===_&&(A=null),_=_.return}A===_&&(A=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:hr(o,n),Rr(n),c&4&&l5(n);break;case 21:break;default:hr(o,n),Rr(n)}}function Rr(n){var o=n.flags;if(o&2){try{e:{for(var a=n.return;a!==null;){if(KI(a)){var c=a;break e}a=a.return}throw Error(pe(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(eu(u,""),c.flags&=-33);var p=a5(n);lw(n,p,u);break;case 3:case 4:var g=c.stateNode.containerInfo,k=a5(n);aw(n,k,g);break;default:throw Error(pe(161))}}catch(m){on(n,n.return,m)}n.flags&=-3}o&4096&&(n.flags&=-4097)}function JF(n,o,a){xe=n,ZI(n)}function ZI(n,o,a){for(var c=(n.mode&1)!==0;xe!==null;){var u=xe,p=u.child;if(u.tag===22&&c){var g=u.memoizedState!==null||Sp;if(!g){var k=u.alternate,m=k!==null&&k.memoizedState!==null||Qn;k=Sp;var C=Qn;if(Sp=g,(Qn=m)&&!C)for(xe=u;xe!==null;)g=xe,m=g.child,g.tag===22&&g.memoizedState!==null?u5(u):m!==null?(m.return=g,xe=m):u5(u);for(;p!==null;)xe=p,ZI(p),p=p.sibling;xe=u,Sp=k,Qn=C}c5(n)}else u.subtreeFlags&8772&&p!==null?(p.return=u,xe=p):c5(n)}}function c5(n){for(;xe!==null;){var o=xe;if(o.flags&8772){var a=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:Qn||Jf(5,o);break;case 1:var c=o.stateNode;if(o.flags&4&&!Qn)if(a===null)c.componentDidMount();else{var u=o.elementType===o.type?a.memoizedProps:pr(o.type,a.memoizedProps);c.componentDidUpdate(u,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=o.updateQueue;p!==null&&GS(o,p,c);break;case 3:var g=o.updateQueue;if(g!==null){if(a=null,o.child!==null)switch(o.child.tag){case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}GS(o,g,a)}break;case 5:var k=o.stateNode;if(a===null&&o.flags&4){a=k;var m=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&a.focus();break;case"img":m.src&&(a.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var C=o.alternate;if(C!==null){var A=C.memoizedState;if(A!==null){var _=A.dehydrated;_!==null&&ru(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}Qn||o.flags&512&&sw(o)}catch(y){on(o,o.return,y)}}if(o===n){xe=null;break}if(a=o.sibling,a!==null){a.return=o.return,xe=a;break}xe=o.return}}function d5(n){for(;xe!==null;){var o=xe;if(o===n){xe=null;break}var a=o.sibling;if(a!==null){a.return=o.return,xe=a;break}xe=o.return}}function u5(n){for(;xe!==null;){var o=xe;try{switch(o.tag){case 0:case 11:case 15:var a=o.return;try{Jf(4,o)}catch(m){on(o,a,m)}break;case 1:var c=o.stateNode;if(typeof c.componentDidMount=="function"){var u=o.return;try{c.componentDidMount()}catch(m){on(o,u,m)}}var p=o.return;try{sw(o)}catch(m){on(o,p,m)}break;case 5:var g=o.return;try{sw(o)}catch(m){on(o,g,m)}}}catch(m){on(o,o.return,m)}if(o===n){xe=null;break}var k=o.sibling;if(k!==null){k.return=o.return,xe=k;break}xe=o.return}}var XF=Math.ceil,Sf=Ei.ReactCurrentDispatcher,Cv=Ei.ReactCurrentOwner,qo=Ei.ReactCurrentBatchConfig,pt=0,In=null,bn=null,Vn=0,So=0,Hl=Cs(0),Cn=0,gu=null,ya=0,Xf=0,yv=0,Hd=null,lo=null,Av=0,sc=1/0,fi=null,Df=!1,cw=null,hs=null,Dp=!1,rs=null,Tf=0,Wd=0,dw=null,Yp=-1,Qp=0;function to(){return pt&6?cn():Yp!==-1?Yp:Yp=cn()}function ps(n){return n.mode&1?pt&2&&Vn!==0?Vn&-Vn:OF.transition!==null?(Qp===0&&(Qp=BT()),Qp):(n=Et,n!==0||(n=window.event,n=n===void 0?16:VT(n.type)),n):1}function br(n,o,a,c){if(50<Wd)throw Wd=0,dw=null,Error(pe(185));Du(n,a,c),(!(pt&2)||n!==In)&&(n===In&&(!(pt&2)&&(Xf|=a),Cn===4&&ts(n,Vn)),po(n,c),a===1&&pt===0&&!(o.mode&1)&&(sc=cn()+500,Yf&&ys()))}function po(n,o){var a=n.callbackNode;O7(n,o);var c=hf(n,n===In?Vn:0);if(c===0)a!==null&&vS(a),n.callbackNode=null,n.callbackPriority=0;else if(o=c&-c,n.callbackPriority!==o){if(a!=null&&vS(a),o===1)n.tag===0?RF(h5.bind(null,n)):sI(h5.bind(null,n)),MF(function(){!(pt&6)&&ys()}),a=null;else{switch(RT(c)){case 1:a=Yw;break;case 4:a=PT;break;case 16:a=uf;break;case 536870912:a=NT;break;default:a=uf}a=iM(a,JI.bind(null,n))}n.callbackPriority=o,n.callbackNode=a}}function JI(n,o){if(Yp=-1,Qp=0,pt&6)throw Error(pe(327));var a=n.callbackNode;if(Zl()&&n.callbackNode!==a)return null;var c=hf(n,n===In?Vn:0);if(c===0)return null;if(c&30||c&n.expiredLanes||o)o=If(n,c);else{o=c;var u=pt;pt|=2;var p=eM();(In!==n||Vn!==o)&&(fi=null,sc=cn()+500,ga(n,o));do try{n9();break}catch(k){XI(n,k)}while(1);lv(),Sf.current=p,pt=u,bn!==null?o=0:(In=null,Vn=0,o=Cn)}if(o!==0){if(o===2&&(u=z0(n),u!==0&&(c=u,o=uw(n,u))),o===1)throw a=gu,ga(n,0),ts(n,c),po(n,cn()),a;if(o===6)ts(n,c);else{if(u=n.current.alternate,!(c&30)&&!e9(u)&&(o=If(n,c),o===2&&(p=z0(n),p!==0&&(c=p,o=uw(n,p))),o===1))throw a=gu,ga(n,0),ts(n,c),po(n,cn()),a;switch(n.finishedWork=u,n.finishedLanes=c,o){case 0:case 1:throw Error(pe(345));case 2:aa(n,lo,fi);break;case 3:if(ts(n,c),(c&130023424)===c&&(o=Av+500-cn(),10<o)){if(hf(n,0)!==0)break;if(u=n.suspendedLanes,(u&c)!==c){to(),n.pingedLanes|=n.suspendedLanes&u;break}n.timeoutHandle=W0(aa.bind(null,n,lo,fi),o);break}aa(n,lo,fi);break;case 4:if(ts(n,c),(c&4194240)===c)break;for(o=n.eventTimes,u=-1;0<c;){var g=31-mr(c);p=1<<g,g=o[g],g>u&&(u=g),c&=~p}if(c=u,c=cn()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*XF(c/1960))-c,10<c){n.timeoutHandle=W0(aa.bind(null,n,lo,fi),c);break}aa(n,lo,fi);break;case 5:aa(n,lo,fi);break;default:throw Error(pe(329))}}}return po(n,cn()),n.callbackNode===a?JI.bind(null,n):null}function uw(n,o){var a=Hd;return n.current.memoizedState.isDehydrated&&(ga(n,o).flags|=256),n=If(n,o),n!==2&&(o=lo,lo=a,o!==null&&hw(o)),n}function hw(n){lo===null?lo=n:lo.push.apply(lo,n)}function e9(n){for(var o=n;;){if(o.flags&16384){var a=o.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var u=a[c],p=u.getSnapshot;u=u.value;try{if(!kr(p(),u))return!1}catch{return!1}}}if(a=o.child,o.subtreeFlags&16384&&a!==null)a.return=o,o=a;else{if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ts(n,o){for(o&=~yv,o&=~Xf,n.suspendedLanes|=o,n.pingedLanes&=~o,n=n.expirationTimes;0<o;){var a=31-mr(o),c=1<<a;n[a]=-1,o&=~c}}function h5(n){if(pt&6)throw Error(pe(327));Zl();var o=hf(n,0);if(!(o&1))return po(n,cn()),null;var a=If(n,o);if(n.tag!==0&&a===2){var c=z0(n);c!==0&&(o=c,a=uw(n,c))}if(a===1)throw a=gu,ga(n,0),ts(n,o),po(n,cn()),a;if(a===6)throw Error(pe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=o,aa(n,lo,fi),po(n,cn()),null}function _v(n,o){var a=pt;pt|=1;try{return n(o)}finally{pt=a,pt===0&&(sc=cn()+500,Yf&&ys())}}function Aa(n){rs!==null&&rs.tag===0&&!(pt&6)&&Zl();var o=pt;pt|=1;var a=qo.transition,c=Et;try{if(qo.transition=null,Et=1,n)return n()}finally{Et=c,qo.transition=a,pt=o,!(pt&6)&&ys()}}function xv(){So=Hl.current,Ft(Hl)}function ga(n,o){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,IF(a)),bn!==null)for(a=bn.return;a!==null;){var c=a;switch(iv(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&bf();break;case 3:rc(),Ft(uo),Ft(Zn),fv();break;case 5:pv(c);break;case 4:rc();break;case 13:Ft(Kt);break;case 19:Ft(Kt);break;case 10:cv(c.type._context);break;case 22:case 23:xv()}a=a.return}if(In=n,bn=n=fs(n.current,null),Vn=So=o,Cn=0,gu=null,yv=Xf=ya=0,lo=Hd=null,ha!==null){for(o=0;o<ha.length;o++)if(a=ha[o],c=a.interleaved,c!==null){a.interleaved=null;var u=c.next,p=a.pending;if(p!==null){var g=p.next;p.next=u,c.next=g}a.pending=c}ha=null}return n}function XI(n,o){do{var a=bn;try{if(lv(),Gp.current=Ef,xf){for(var c=Yt.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}xf=!1}if(Ca=0,Tn=vn=Yt=null,$d=!1,hu=0,Cv.current=null,a===null||a.return===null){Cn=1,gu=o,bn=null;break}e:{var p=n,g=a.return,k=a,m=o;if(o=Vn,k.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var C=m,A=k,_=A.tag;if(!(A.mode&1)&&(_===0||_===11||_===15)){var y=A.alternate;y?(A.updateQueue=y.updateQueue,A.memoizedState=y.memoizedState,A.lanes=y.lanes):(A.updateQueue=null,A.memoizedState=null)}var E=XS(g);if(E!==null){E.flags&=-257,e5(E,g,k,p,o),E.mode&1&&JS(p,C,o),o=E,m=C;var S=o.updateQueue;if(S===null){var D=new Set;D.add(m),o.updateQueue=D}else S.add(m);break e}else{if(!(o&1)){JS(p,C,o),Ev();break e}m=Error(pe(426))}}else if(Wt&&k.mode&1){var R=XS(g);if(R!==null){!(R.flags&65536)&&(R.flags|=256),e5(R,g,k,p,o),sv(ic(m,k));break e}}p=m=ic(m,k),Cn!==4&&(Cn=2),Hd===null?Hd=[p]:Hd.push(p),p=g;do{switch(p.tag){case 3:p.flags|=65536,o&=-o,p.lanes|=o;var I=OI(p,m,o);WS(p,I);break e;case 1:k=m;var P=p.type,B=p.stateNode;if(!(p.flags&128)&&(typeof P.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(hs===null||!hs.has(B)))){p.flags|=65536,o&=-o,p.lanes|=o;var L=zI(p,k,o);WS(p,L);break e}}p=p.return}while(p!==null)}nM(a)}catch(M){o=M,bn===a&&a!==null&&(bn=a=a.return);continue}break}while(1)}function eM(){var n=Sf.current;return Sf.current=Ef,n===null?Ef:n}function Ev(){(Cn===0||Cn===3||Cn===2)&&(Cn=4),In===null||!(ya&268435455)&&!(Xf&268435455)||ts(In,Vn)}function If(n,o){var a=pt;pt|=2;var c=eM();(In!==n||Vn!==o)&&(fi=null,ga(n,o));do try{t9();break}catch(u){XI(n,u)}while(1);if(lv(),pt=a,Sf.current=c,bn!==null)throw Error(pe(261));return In=null,Vn=0,Cn}function t9(){for(;bn!==null;)tM(bn)}function n9(){for(;bn!==null&&!S7();)tM(bn)}function tM(n){var o=rM(n.alternate,n,So);n.memoizedProps=n.pendingProps,o===null?nM(n):bn=o,Cv.current=null}function nM(n){var o=n;do{var a=o.alternate;if(n=o.return,o.flags&32768){if(a=YF(a,o),a!==null){a.flags&=32767,bn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Cn=6,bn=null;return}}else if(a=KF(a,o,So),a!==null){bn=a;return}if(o=o.sibling,o!==null){bn=o;return}bn=o=n}while(o!==null);Cn===0&&(Cn=5)}function aa(n,o,a){var c=Et,u=qo.transition;try{qo.transition=null,Et=1,o9(n,o,a,c)}finally{qo.transition=u,Et=c}return null}function o9(n,o,a,c){do Zl();while(rs!==null);if(pt&6)throw Error(pe(327));a=n.finishedWork;var u=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(pe(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(z7(n,p),n===In&&(bn=In=null,Vn=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Dp||(Dp=!0,iM(uf,function(){return Zl(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=qo.transition,qo.transition=null;var g=Et;Et=1;var k=pt;pt|=4,Cv.current=null,ZF(n,a),QI(a,n),AF(U0),pf=!!$0,U0=$0=null,n.current=a,JF(a),D7(),pt=k,Et=g,qo.transition=p}else n.current=a;if(Dp&&(Dp=!1,rs=n,Tf=u),p=n.pendingLanes,p===0&&(hs=null),M7(a.stateNode),po(n,cn()),o!==null)for(c=n.onRecoverableError,a=0;a<o.length;a++)u=o[a],c(u.value,{componentStack:u.stack,digest:u.digest});if(Df)throw Df=!1,n=cw,cw=null,n;return Tf&1&&n.tag!==0&&Zl(),p=n.pendingLanes,p&1?n===dw?Wd++:(Wd=0,dw=n):Wd=0,ys(),null}function Zl(){if(rs!==null){var n=RT(Tf),o=qo.transition,a=Et;try{if(qo.transition=null,Et=16>n?16:n,rs===null)var c=!1;else{if(n=rs,rs=null,Tf=0,pt&6)throw Error(pe(331));var u=pt;for(pt|=4,xe=n.current;xe!==null;){var p=xe,g=p.child;if(xe.flags&16){var k=p.deletions;if(k!==null){for(var m=0;m<k.length;m++){var C=k[m];for(xe=C;xe!==null;){var A=xe;switch(A.tag){case 0:case 11:case 15:Ud(8,A,p)}var _=A.child;if(_!==null)_.return=A,xe=_;else for(;xe!==null;){A=xe;var y=A.sibling,E=A.return;if(qI(A),A===C){xe=null;break}if(y!==null){y.return=E,xe=y;break}xe=E}}}var S=p.alternate;if(S!==null){var D=S.child;if(D!==null){S.child=null;do{var R=D.sibling;D.sibling=null,D=R}while(D!==null)}}xe=p}}if(p.subtreeFlags&2064&&g!==null)g.return=p,xe=g;else e:for(;xe!==null;){if(p=xe,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Ud(9,p,p.return)}var I=p.sibling;if(I!==null){I.return=p.return,xe=I;break e}xe=p.return}}var P=n.current;for(xe=P;xe!==null;){g=xe;var B=g.child;if(g.subtreeFlags&2064&&B!==null)B.return=g,xe=B;else e:for(g=P;xe!==null;){if(k=xe,k.flags&2048)try{switch(k.tag){case 0:case 11:case 15:Jf(9,k)}}catch(M){on(k,k.return,M)}if(k===g){xe=null;break e}var L=k.sibling;if(L!==null){L.return=k.return,xe=L;break e}xe=k.return}}if(pt=u,ys(),Wr&&typeof Wr.onPostCommitFiberRoot=="function")try{Wr.onPostCommitFiberRoot(Hf,n)}catch{}c=!0}return c}finally{Et=a,qo.transition=o}}return!1}function p5(n,o,a){o=ic(a,o),o=OI(n,o,1),n=us(n,o,1),o=to(),n!==null&&(Du(n,1,o),po(n,o))}function on(n,o,a){if(n.tag===3)p5(n,n,a);else for(;o!==null;){if(o.tag===3){p5(o,n,a);break}else if(o.tag===1){var c=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(hs===null||!hs.has(c))){n=ic(a,n),n=zI(o,n,1),o=us(o,n,1),n=to(),o!==null&&(Du(o,1,n),po(o,n));break}}o=o.return}}function r9(n,o,a){var c=n.pingCache;c!==null&&c.delete(o),o=to(),n.pingedLanes|=n.suspendedLanes&a,In===n&&(Vn&a)===a&&(Cn===4||Cn===3&&(Vn&130023424)===Vn&&500>cn()-Av?ga(n,0):yv|=a),po(n,o)}function oM(n,o){o===0&&(n.mode&1?(o=kp,kp<<=1,!(kp&130023424)&&(kp=4194304)):o=1);var a=to();n=yi(n,o),n!==null&&(Du(n,o,a),po(n,a))}function i9(n){var o=n.memoizedState,a=0;o!==null&&(a=o.retryLane),oM(n,a)}function s9(n,o){var a=0;switch(n.tag){case 13:var c=n.stateNode,u=n.memoizedState;u!==null&&(a=u.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(pe(314))}c!==null&&c.delete(o),oM(n,a)}var rM;rM=function(n,o,a){if(n!==null)if(n.memoizedProps!==o.pendingProps||uo.current)co=!0;else{if(!(n.lanes&a)&&!(o.flags&128))return co=!1,qF(n,o,a);co=!!(n.flags&131072)}else co=!1,Wt&&o.flags&1048576&&aI(o,vf,o.index);switch(o.lanes=0,o.tag){case 2:var c=o.type;Kp(n,o),n=o.pendingProps;var u=tc(o,Zn.current);Ql(o,a),u=mv(null,o,c,n,u,a);var p=bv();return o.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,ho(c)?(p=!0,kf(o)):p=!1,o.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,uv(o),u.updater=Qf,o.stateNode=u,u._reactInternals=o,J0(o,c,n,a),o=tw(null,o,c,!0,p,a)):(o.tag=0,Wt&&p&&rv(o),Jn(null,o,u,a),o=o.child),o;case 16:c=o.elementType;e:{switch(Kp(n,o),n=o.pendingProps,u=c._init,c=u(c._payload),o.type=c,u=o.tag=l9(c),n=pr(c,n),u){case 0:o=ew(null,o,c,n,a);break e;case 1:o=o5(null,o,c,n,a);break e;case 11:o=t5(null,o,c,n,a);break e;case 14:o=n5(null,o,c,pr(c.type,n),a);break e}throw Error(pe(306,c,""))}return o;case 0:return c=o.type,u=o.pendingProps,u=o.elementType===c?u:pr(c,u),ew(n,o,c,u,a);case 1:return c=o.type,u=o.pendingProps,u=o.elementType===c?u:pr(c,u),o5(n,o,c,u,a);case 3:e:{if(VI(o),n===null)throw Error(pe(387));c=o.pendingProps,p=o.memoizedState,u=p.element,uI(n,o),Af(o,c,null,a);var g=o.memoizedState;if(c=g.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},o.updateQueue.baseState=p,o.memoizedState=p,o.flags&256){u=ic(Error(pe(423)),o),o=r5(n,o,c,a,u);break e}else if(c!==u){u=ic(Error(pe(424)),o),o=r5(n,o,c,a,u);break e}else for(To=ds(o.stateNode.containerInfo.firstChild),Io=o,Wt=!0,gr=null,a=gI(o,null,c,a),o.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(nc(),c===u){o=Ai(n,o,a);break e}Jn(n,o,c,a)}o=o.child}return o;case 5:return mI(o),n===null&&Y0(o),c=o.type,u=o.pendingProps,p=n!==null?n.memoizedProps:null,g=u.children,H0(c,u)?g=null:p!==null&&H0(c,p)&&(o.flags|=32),FI(n,o),Jn(n,o,g,a),o.child;case 6:return n===null&&Y0(o),null;case 13:return $I(n,o,a);case 4:return hv(o,o.stateNode.containerInfo),c=o.pendingProps,n===null?o.child=oc(o,null,c,a):Jn(n,o,c,a),o.child;case 11:return c=o.type,u=o.pendingProps,u=o.elementType===c?u:pr(c,u),t5(n,o,c,u,a);case 7:return Jn(n,o,o.pendingProps,a),o.child;case 8:return Jn(n,o,o.pendingProps.children,a),o.child;case 12:return Jn(n,o,o.pendingProps.children,a),o.child;case 10:e:{if(c=o.type._context,u=o.pendingProps,p=o.memoizedProps,g=u.value,Ot(Cf,c._currentValue),c._currentValue=g,p!==null)if(kr(p.value,g)){if(p.children===u.children&&!uo.current){o=Ai(n,o,a);break e}}else for(p=o.child,p!==null&&(p.return=o);p!==null;){var k=p.dependencies;if(k!==null){g=p.child;for(var m=k.firstContext;m!==null;){if(m.context===c){if(p.tag===1){m=ki(-1,a&-a),m.tag=2;var C=p.updateQueue;if(C!==null){C=C.shared;var A=C.pending;A===null?m.next=m:(m.next=A.next,A.next=m),C.pending=m}}p.lanes|=a,m=p.alternate,m!==null&&(m.lanes|=a),Q0(p.return,a,o),k.lanes|=a;break}m=m.next}}else if(p.tag===10)g=p.type===o.type?null:p.child;else if(p.tag===18){if(g=p.return,g===null)throw Error(pe(341));g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),Q0(g,a,o),g=p.sibling}else g=p.child;if(g!==null)g.return=p;else for(g=p;g!==null;){if(g===o){g=null;break}if(p=g.sibling,p!==null){p.return=g.return,g=p;break}g=g.return}p=g}Jn(n,o,u.children,a),o=o.child}return o;case 9:return u=o.type,c=o.pendingProps.children,Ql(o,a),u=Qo(u),c=c(u),o.flags|=1,Jn(n,o,c,a),o.child;case 14:return c=o.type,u=pr(c,o.pendingProps),u=pr(c.type,u),n5(n,o,c,u,a);case 15:return LI(n,o,o.type,o.pendingProps,a);case 17:return c=o.type,u=o.pendingProps,u=o.elementType===c?u:pr(c,u),Kp(n,o),o.tag=1,ho(c)?(n=!0,kf(o)):n=!1,Ql(o,a),pI(o,c,u),J0(o,c,u,a),tw(null,o,c,!0,n,a);case 19:return UI(n,o,a);case 22:return jI(n,o,a)}throw Error(pe(156,o.tag))};function iM(n,o){return MT(n,o)}function a9(n,o,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Go(n,o,a,c){return new a9(n,o,a,c)}function Sv(n){return n=n.prototype,!(!n||!n.isReactComponent)}function l9(n){if(typeof n=="function")return Sv(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Gw)return 11;if(n===qw)return 14}return 2}function fs(n,o){var a=n.alternate;return a===null?(a=Go(n.tag,o,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=o,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,o=n.dependencies,a.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Zp(n,o,a,c,u,p){var g=2;if(c=n,typeof n=="function")Sv(n)&&(g=1);else if(typeof n=="string")g=5;else e:switch(n){case Bl:return ma(a.children,u,p,o);case Ww:g=8,u|=8;break;case y0:return n=Go(12,a,o,u|2),n.elementType=y0,n.lanes=p,n;case A0:return n=Go(13,a,o,u),n.elementType=A0,n.lanes=p,n;case _0:return n=Go(19,a,o,u),n.elementType=_0,n.lanes=p,n;case fT:return eg(a,u,p,o);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case hT:g=10;break e;case pT:g=9;break e;case Gw:g=11;break e;case qw:g=14;break e;case Zi:g=16,c=null;break e}throw Error(pe(130,n==null?n:typeof n,""))}return o=Go(g,a,o,u),o.elementType=n,o.type=c,o.lanes=p,o}function ma(n,o,a,c){return n=Go(7,n,c,o),n.lanes=a,n}function eg(n,o,a,c){return n=Go(22,n,c,o),n.elementType=fT,n.lanes=a,n.stateNode={isHidden:!1},n}function n0(n,o,a){return n=Go(6,n,null,o),n.lanes=a,n}function o0(n,o,a){return o=Go(4,n.children!==null?n.children:[],n.key,o),o.lanes=a,o.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},o}function c9(n,o,a,c,u){this.tag=o,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zk(0),this.expirationTimes=zk(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zk(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Dv(n,o,a,c,u,p,g,k,m){return n=new c9(n,o,a,k,m),o===1?(o=1,p===!0&&(o|=8)):o=0,p=Go(3,null,null,o),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},uv(p),n}function d9(n,o,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nl,key:c==null?null:""+c,children:n,containerInfo:o,implementation:a}}function sM(n){if(!n)return ms;n=n._reactInternals;e:{if(Ia(n)!==n||n.tag!==1)throw Error(pe(170));var o=n;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(ho(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(pe(171))}if(n.tag===1){var a=n.type;if(ho(a))return iI(n,a,o)}return o}function aM(n,o,a,c,u,p,g,k,m){return n=Dv(a,c,!0,n,u,p,g,k,m),n.context=sM(null),a=n.current,c=to(),u=ps(a),p=ki(c,u),p.callback=o??null,us(a,p,u),n.current.lanes=u,Du(n,u,c),po(n,c),n}function tg(n,o,a,c){var u=o.current,p=to(),g=ps(u);return a=sM(a),o.context===null?o.context=a:o.pendingContext=a,o=ki(p,g),o.payload={element:n},c=c===void 0?null:c,c!==null&&(o.callback=c),n=us(u,o,g),n!==null&&(br(n,u,g,p),Wp(n,u,g)),g}function Mf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function f5(n,o){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<o?a:o}}function Tv(n,o){f5(n,o),(n=n.alternate)&&f5(n,o)}function u9(){return null}var lM=typeof reportError=="function"?reportError:function(n){console.error(n)};function Iv(n){this._internalRoot=n}ng.prototype.render=Iv.prototype.render=function(n){var o=this._internalRoot;if(o===null)throw Error(pe(409));tg(n,o,null,null)};ng.prototype.unmount=Iv.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var o=n.containerInfo;Aa(function(){tg(null,n,null,null)}),o[Ci]=null}};function ng(n){this._internalRoot=n}ng.prototype.unstable_scheduleHydration=function(n){if(n){var o=LT();n={blockedOn:null,target:n,priority:o};for(var a=0;a<es.length&&o!==0&&o<es[a].priority;a++);es.splice(a,0,n),a===0&&FT(n)}};function Mv(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function og(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function g5(){}function h9(n,o,a,c,u){if(u){if(typeof c=="function"){var p=c;c=function(){var C=Mf(g);p.call(C)}}var g=aM(o,c,n,0,null,!1,!1,"",g5);return n._reactRootContainer=g,n[Ci]=g.current,au(n.nodeType===8?n.parentNode:n),Aa(),g}for(;u=n.lastChild;)n.removeChild(u);if(typeof c=="function"){var k=c;c=function(){var C=Mf(m);k.call(C)}}var m=Dv(n,0,!1,null,null,!1,!1,"",g5);return n._reactRootContainer=m,n[Ci]=m.current,au(n.nodeType===8?n.parentNode:n),Aa(function(){tg(o,m,a,c)}),m}function rg(n,o,a,c,u){var p=a._reactRootContainer;if(p){var g=p;if(typeof u=="function"){var k=u;u=function(){var m=Mf(g);k.call(m)}}tg(o,g,n,u)}else g=h9(a,o,n,u,c);return Mf(g)}OT=function(n){switch(n.tag){case 3:var o=n.stateNode;if(o.current.memoizedState.isDehydrated){var a=Pd(o.pendingLanes);a!==0&&(Qw(o,a|1),po(o,cn()),!(pt&6)&&(sc=cn()+500,ys()))}break;case 13:Aa(function(){var c=yi(n,1);if(c!==null){var u=to();br(c,n,1,u)}}),Tv(n,1)}};Zw=function(n){if(n.tag===13){var o=yi(n,134217728);if(o!==null){var a=to();br(o,n,134217728,a)}Tv(n,134217728)}};zT=function(n){if(n.tag===13){var o=ps(n),a=yi(n,o);if(a!==null){var c=to();br(a,n,o,c)}Tv(n,o)}};LT=function(){return Et};jT=function(n,o){var a=Et;try{return Et=n,o()}finally{Et=a}};B0=function(n,o,a){switch(o){case"input":if(S0(n,a),o=a.name,a.type==="radio"&&o!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<a.length;o++){var c=a[o];if(c!==n&&c.form===n.form){var u=Kf(c);if(!u)throw Error(pe(90));mT(c),S0(c,u)}}}break;case"textarea":kT(n,a);break;case"select":o=a.value,o!=null&&Gl(n,!!a.multiple,o,!1)}};xT=_v;ET=Aa;var p9={usingClientEntryPoint:!1,Events:[Iu,Ll,Kf,AT,_T,_v]},kd={findFiberByHostInstance:ua,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},f9={bundleType:kd.bundleType,version:kd.version,rendererPackageName:kd.rendererPackageName,rendererConfig:kd.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=TT(n),n===null?null:n.stateNode},findFiberByHostInstance:kd.findFiberByHostInstance||u9,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tp.isDisabled&&Tp.supportsFiber)try{Hf=Tp.inject(f9),Wr=Tp}catch{}}Bo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p9;Bo.createPortal=function(n,o){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mv(o))throw Error(pe(200));return d9(n,o,null,a)};Bo.createRoot=function(n,o){if(!Mv(n))throw Error(pe(299));var a=!1,c="",u=lM;return o!=null&&(o.unstable_strictMode===!0&&(a=!0),o.identifierPrefix!==void 0&&(c=o.identifierPrefix),o.onRecoverableError!==void 0&&(u=o.onRecoverableError)),o=Dv(n,1,!1,null,null,a,!1,c,u),n[Ci]=o.current,au(n.nodeType===8?n.parentNode:n),new Iv(o)};Bo.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var o=n._reactInternals;if(o===void 0)throw typeof n.render=="function"?Error(pe(188)):(n=Object.keys(n).join(","),Error(pe(268,n)));return n=TT(o),n=n===null?null:n.stateNode,n};Bo.flushSync=function(n){return Aa(n)};Bo.hydrate=function(n,o,a){if(!og(o))throw Error(pe(200));return rg(null,n,o,!0,a)};Bo.hydrateRoot=function(n,o,a){if(!Mv(n))throw Error(pe(405));var c=a!=null&&a.hydratedSources||null,u=!1,p="",g=lM;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),o=aM(o,null,n,1,a??null,u,!1,p,g),n[Ci]=o.current,au(n),c)for(n=0;n<c.length;n++)a=c[n],u=a._getVersion,u=u(a._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[a,u]:o.mutableSourceEagerHydrationData.push(a,u);return new ng(o)};Bo.render=function(n,o,a){if(!og(o))throw Error(pe(200));return rg(null,n,o,!1,a)};Bo.unmountComponentAtNode=function(n){if(!og(n))throw Error(pe(40));return n._reactRootContainer?(Aa(function(){rg(null,null,n,!1,function(){n._reactRootContainer=null,n[Ci]=null})}),!0):!1};Bo.unstable_batchedUpdates=_v;Bo.unstable_renderSubtreeIntoContainer=function(n,o,a,c){if(!og(a))throw Error(pe(200));if(n==null||n._reactInternals===void 0)throw Error(pe(38));return rg(n,o,a,!1,c)};Bo.version="18.2.0-next-9e3b772b8-20220608";function cM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cM)}catch(n){console.error(n)}}cM(),aT.exports=Bo;var ig=aT.exports;const Ip=zw(ig);var m5=ig;v0.createRoot=m5.createRoot,v0.hydrateRoot=m5.hydrateRoot;/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mu(){return mu=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(n[c]=a[c])}return n},mu.apply(this,arguments)}var is;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(is||(is={}));const b5="popstate";function g9(n){n===void 0&&(n={});function o(c,u){let{pathname:p,search:g,hash:k}=c.location;return pw("",{pathname:p,search:g,hash:k},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function a(c,u){return typeof u=="string"?u:dM(u)}return b9(o,a,null,n)}function yn(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function Pv(n,o){if(!n){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function m9(){return Math.random().toString(36).substr(2,8)}function k5(n,o){return{usr:n.state,key:n.key,idx:o}}function pw(n,o,a,c){return a===void 0&&(a=null),mu({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof o=="string"?vc(o):o,{state:a,key:o&&o.key||c||m9()})}function dM(n){let{pathname:o="/",search:a="",hash:c=""}=n;return a&&a!=="?"&&(o+=a.charAt(0)==="?"?a:"?"+a),c&&c!=="#"&&(o+=c.charAt(0)==="#"?c:"#"+c),o}function vc(n){let o={};if(n){let a=n.indexOf("#");a>=0&&(o.hash=n.substr(a),n=n.substr(0,a));let c=n.indexOf("?");c>=0&&(o.search=n.substr(c),n=n.substr(0,c)),n&&(o.pathname=n)}return o}function b9(n,o,a,c){c===void 0&&(c={});let{window:u=document.defaultView,v5Compat:p=!1}=c,g=u.history,k=is.Pop,m=null,C=A();C==null&&(C=0,g.replaceState(mu({},g.state,{idx:C}),""));function A(){return(g.state||{idx:null}).idx}function _(){k=is.Pop;let R=A(),I=R==null?null:R-C;C=R,m&&m({action:k,location:D.location,delta:I})}function y(R,I){k=is.Push;let P=pw(D.location,R,I);a&&a(P,R),C=A()+1;let B=k5(P,C),L=D.createHref(P);try{g.pushState(B,"",L)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;u.location.assign(L)}p&&m&&m({action:k,location:D.location,delta:1})}function E(R,I){k=is.Replace;let P=pw(D.location,R,I);a&&a(P,R),C=A();let B=k5(P,C),L=D.createHref(P);g.replaceState(B,"",L),p&&m&&m({action:k,location:D.location,delta:0})}function S(R){let I=u.location.origin!=="null"?u.location.origin:u.location.href,P=typeof R=="string"?R:dM(R);return yn(I,"No window.location.(origin|href) available to create URL for href: "+P),new URL(P,I)}let D={get action(){return k},get location(){return n(u,g)},listen(R){if(m)throw new Error("A history only accepts one active listener");return u.addEventListener(b5,_),m=R,()=>{u.removeEventListener(b5,_),m=null}},createHref(R){return o(u,R)},createURL:S,encodeLocation(R){let I=S(R);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:y,replace:E,go(R){return g.go(R)}};return D}var w5;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(w5||(w5={}));function k9(n,o,a){a===void 0&&(a="/");let c=typeof o=="string"?vc(o):o,u=pM(c.pathname||"/",a);if(u==null)return null;let p=uM(n);w9(p);let g=null;for(let k=0;g==null&&k<p.length;++k)g=D9(p[k],M9(u));return g}function uM(n,o,a,c){o===void 0&&(o=[]),a===void 0&&(a=[]),c===void 0&&(c="");let u=(p,g,k)=>{let m={relativePath:k===void 0?p.path||"":k,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};m.relativePath.startsWith("/")&&(yn(m.relativePath.startsWith(c),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+c+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(c.length));let C=ba([c,m.relativePath]),A=a.concat(m);p.children&&p.children.length>0&&(yn(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+C+'".')),uM(p.children,o,A,C)),!(p.path==null&&!p.index)&&o.push({path:C,score:E9(C,p.index),routesMeta:A})};return n.forEach((p,g)=>{var k;if(p.path===""||!((k=p.path)!=null&&k.includes("?")))u(p,g);else for(let m of hM(p.path))u(p,g,m)}),o}function hM(n){let o=n.split("/");if(o.length===0)return[];let[a,...c]=o,u=a.endsWith("?"),p=a.replace(/\?$/,"");if(c.length===0)return u?[p,""]:[p];let g=hM(c.join("/")),k=[];return k.push(...g.map(m=>m===""?p:[p,m].join("/"))),u&&k.push(...g),k.map(m=>n.startsWith("/")&&m===""?"/":m)}function w9(n){n.sort((o,a)=>o.score!==a.score?a.score-o.score:S9(o.routesMeta.map(c=>c.childrenIndex),a.routesMeta.map(c=>c.childrenIndex)))}const v9=/^:\w+$/,C9=3,y9=2,A9=1,_9=10,x9=-2,v5=n=>n==="*";function E9(n,o){let a=n.split("/"),c=a.length;return a.some(v5)&&(c+=x9),o&&(c+=y9),a.filter(u=>!v5(u)).reduce((u,p)=>u+(v9.test(p)?C9:p===""?A9:_9),c)}function S9(n,o){return n.length===o.length&&n.slice(0,-1).every((c,u)=>c===o[u])?n[n.length-1]-o[o.length-1]:0}function D9(n,o){let{routesMeta:a}=n,c={},u="/",p=[];for(let g=0;g<a.length;++g){let k=a[g],m=g===a.length-1,C=u==="/"?o:o.slice(u.length)||"/",A=T9({path:k.relativePath,caseSensitive:k.caseSensitive,end:m},C);if(!A)return null;Object.assign(c,A.params);let _=k.route;p.push({params:c,pathname:ba([u,A.pathname]),pathnameBase:z9(ba([u,A.pathnameBase])),route:_}),A.pathnameBase!=="/"&&(u=ba([u,A.pathnameBase]))}return p}function T9(n,o){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[a,c]=I9(n.path,n.caseSensitive,n.end),u=o.match(a);if(!u)return null;let p=u[0],g=p.replace(/(.)\/+$/,"$1"),k=u.slice(1);return{params:c.reduce((C,A,_)=>{if(A==="*"){let y=k[_]||"";g=p.slice(0,p.length-y.length).replace(/(.)\/+$/,"$1")}return C[A]=P9(k[_]||"",A),C},{}),pathname:p,pathnameBase:g,pattern:n}}function I9(n,o,a){o===void 0&&(o=!1),a===void 0&&(a=!0),Pv(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let c=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(g,k)=>(c.push(k),"/([^\\/]+)"));return n.endsWith("*")?(c.push("*"),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,o?void 0:"i"),c]}function M9(n){try{return decodeURI(n)}catch(o){return Pv(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+o+").")),n}}function P9(n,o){try{return decodeURIComponent(n)}catch(a){return Pv(!1,'The value for the URL param "'+o+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+a+").")),n}}function pM(n,o){if(o==="/")return n;if(!n.toLowerCase().startsWith(o.toLowerCase()))return null;let a=o.endsWith("/")?o.length-1:o.length,c=n.charAt(a);return c&&c!=="/"?null:n.slice(a)||"/"}function N9(n,o){o===void 0&&(o="/");let{pathname:a,search:c="",hash:u=""}=typeof n=="string"?vc(n):n;return{pathname:a?a.startsWith("/")?a:B9(a,o):o,search:L9(c),hash:j9(u)}}function B9(n,o){let a=o.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?a.length>1&&a.pop():u!=="."&&a.push(u)}),a.length>1?a.join("/"):"/"}function r0(n,o,a,c){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+o+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function R9(n){return n.filter((o,a)=>a===0||o.route.path&&o.route.path.length>0)}function O9(n,o,a,c){c===void 0&&(c=!1);let u;typeof n=="string"?u=vc(n):(u=mu({},n),yn(!u.pathname||!u.pathname.includes("?"),r0("?","pathname","search",u)),yn(!u.pathname||!u.pathname.includes("#"),r0("#","pathname","hash",u)),yn(!u.search||!u.search.includes("#"),r0("#","search","hash",u)));let p=n===""||u.pathname==="",g=p?"/":u.pathname,k;if(c||g==null)k=a;else{let _=o.length-1;if(g.startsWith("..")){let y=g.split("/");for(;y[0]==="..";)y.shift(),_-=1;u.pathname=y.join("/")}k=_>=0?o[_]:"/"}let m=N9(u,k),C=g&&g!=="/"&&g.endsWith("/"),A=(p||g===".")&&a.endsWith("/");return!m.pathname.endsWith("/")&&(C||A)&&(m.pathname+="/"),m}const ba=n=>n.join("/").replace(/\/\/+/g,"/"),z9=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),L9=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,j9=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function F9(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const fM=["post","put","patch","delete"];new Set(fM);const V9=["get",...fM];new Set(V9);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pf(){return Pf=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(n[c]=a[c])}return n},Pf.apply(this,arguments)}const Nv=z.createContext(null),$9=z.createContext(null),sg=z.createContext(null),ag=z.createContext(null),Ma=z.createContext({outlet:null,matches:[],isDataRoute:!1}),gM=z.createContext(null);function lg(){return z.useContext(ag)!=null}function mM(){return lg()||yn(!1),z.useContext(ag).location}function bM(n){z.useContext(sg).static||z.useLayoutEffect(n)}function Zr(){let{isDataRoute:n}=z.useContext(Ma);return n?n8():U9()}function U9(){lg()||yn(!1);let n=z.useContext(Nv),{basename:o,navigator:a}=z.useContext(sg),{matches:c}=z.useContext(Ma),{pathname:u}=mM(),p=JSON.stringify(R9(c).map(m=>m.pathnameBase)),g=z.useRef(!1);return bM(()=>{g.current=!0}),z.useCallback(function(m,C){if(C===void 0&&(C={}),!g.current)return;if(typeof m=="number"){a.go(m);return}let A=O9(m,JSON.parse(p),u,C.relative==="path");n==null&&o!=="/"&&(A.pathname=A.pathname==="/"?o:ba([o,A.pathname])),(C.replace?a.replace:a.push)(A,C.state,C)},[o,a,p,u,n])}function H9(){let{matches:n}=z.useContext(Ma),o=n[n.length-1];return o?o.params:{}}function W9(n,o){return G9(n,o)}function G9(n,o,a){lg()||yn(!1);let{navigator:c}=z.useContext(sg),{matches:u}=z.useContext(Ma),p=u[u.length-1],g=p?p.params:{};p&&p.pathname;let k=p?p.pathnameBase:"/";p&&p.route;let m=mM(),C;if(o){var A;let D=typeof o=="string"?vc(o):o;k==="/"||(A=D.pathname)!=null&&A.startsWith(k)||yn(!1),C=D}else C=m;let _=C.pathname||"/",y=k==="/"?_:_.slice(k.length)||"/",E=k9(n,{pathname:y}),S=Z9(E&&E.map(D=>Object.assign({},D,{params:Object.assign({},g,D.params),pathname:ba([k,c.encodeLocation?c.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?k:ba([k,c.encodeLocation?c.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),u,a);return o&&S?z.createElement(ag.Provider,{value:{location:Pf({pathname:"/",search:"",hash:"",state:null,key:"default"},C),navigationType:is.Pop}},S):S}function q9(){let n=t8(),o=F9(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),a=n instanceof Error?n.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},p=null;return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},o),a?z.createElement("pre",{style:u},a):null,p)}const K9=z.createElement(q9,null);class Y9 extends z.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,a){return a.location!==o.location||a.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error||a.error,location:a.location,revalidation:o.revalidation||a.revalidation}}componentDidCatch(o,a){console.error("React Router caught the following error during render",o,a)}render(){return this.state.error?z.createElement(Ma.Provider,{value:this.props.routeContext},z.createElement(gM.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q9(n){let{routeContext:o,match:a,children:c}=n,u=z.useContext(Nv);return u&&u.static&&u.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=a.route.id),z.createElement(Ma.Provider,{value:o},c)}function Z9(n,o,a){var c;if(o===void 0&&(o=[]),a===void 0&&(a=null),n==null){var u;if((u=a)!=null&&u.errors)n=a.matches;else return null}let p=n,g=(c=a)==null?void 0:c.errors;if(g!=null){let k=p.findIndex(m=>m.route.id&&(g==null?void 0:g[m.route.id]));k>=0||yn(!1),p=p.slice(0,Math.min(p.length,k+1))}return p.reduceRight((k,m,C)=>{let A=m.route.id?g==null?void 0:g[m.route.id]:null,_=null;a&&(_=m.route.errorElement||K9);let y=o.concat(p.slice(0,C+1)),E=()=>{let S;return A?S=_:m.route.Component?S=z.createElement(m.route.Component,null):m.route.element?S=m.route.element:S=k,z.createElement(Q9,{match:m,routeContext:{outlet:k,matches:y,isDataRoute:a!=null},children:S})};return a&&(m.route.ErrorBoundary||m.route.errorElement||C===0)?z.createElement(Y9,{location:a.location,revalidation:a.revalidation,component:_,error:A,children:E(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):E()},null)}var fw;(function(n){n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate"})(fw||(fw={}));var bu;(function(n){n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId"})(bu||(bu={}));function J9(n){let o=z.useContext(Nv);return o||yn(!1),o}function X9(n){let o=z.useContext($9);return o||yn(!1),o}function e8(n){let o=z.useContext(Ma);return o||yn(!1),o}function kM(n){let o=e8(),a=o.matches[o.matches.length-1];return a.route.id||yn(!1),a.route.id}function t8(){var n;let o=z.useContext(gM),a=X9(bu.UseRouteError),c=kM(bu.UseRouteError);return o||((n=a.errors)==null?void 0:n[c])}function n8(){let{router:n}=J9(fw.UseNavigateStable),o=kM(bu.UseNavigateStable),a=z.useRef(!1);return bM(()=>{a.current=!0}),z.useCallback(function(u,p){p===void 0&&(p={}),a.current&&(typeof u=="number"?n.navigate(u):n.navigate(u,Pf({fromRouteId:o},p)))},[n,o])}function Bd(n){yn(!1)}function o8(n){let{basename:o="/",children:a=null,location:c,navigationType:u=is.Pop,navigator:p,static:g=!1}=n;lg()&&yn(!1);let k=o.replace(/^\/*/,"/"),m=z.useMemo(()=>({basename:k,navigator:p,static:g}),[k,p,g]);typeof c=="string"&&(c=vc(c));let{pathname:C="/",search:A="",hash:_="",state:y=null,key:E="default"}=c,S=z.useMemo(()=>{let D=pM(C,k);return D==null?null:{location:{pathname:D,search:A,hash:_,state:y,key:E},navigationType:u}},[k,C,A,_,y,E,u]);return S==null?null:z.createElement(sg.Provider,{value:m},z.createElement(ag.Provider,{children:a,value:S}))}function r8(n){let{children:o,location:a}=n;return W9(gw(o),a)}var C5;(function(n){n[n.pending=0]="pending",n[n.success=1]="success",n[n.error=2]="error"})(C5||(C5={}));new Promise(()=>{});function gw(n,o){o===void 0&&(o=[]);let a=[];return z.Children.forEach(n,(c,u)=>{if(!z.isValidElement(c))return;let p=[...o,u];if(c.type===z.Fragment){a.push.apply(a,gw(c.props.children,p));return}c.type!==Bd&&yn(!1),!c.props.index||!c.props.children||yn(!1);let g={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=gw(c.props.children,p)),a.push(g)}),a}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const i8="startTransition",y5=Jd[i8];function s8(n){let{basename:o,children:a,future:c,window:u}=n,p=z.useRef();p.current==null&&(p.current=g9({window:u,v5Compat:!0}));let g=p.current,[k,m]=z.useState({action:g.action,location:g.location}),{v7_startTransition:C}=c||{},A=z.useCallback(_=>{C&&y5?y5(()=>m(_)):m(_)},[m,C]);return z.useLayoutEffect(()=>g.listen(A),[g,A]),z.createElement(o8,{basename:o,children:a,location:k.location,navigationType:k.action,navigator:g})}var A5;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher"})(A5||(A5={}));var _5;(function(n){n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(_5||(_5={}));const a8={black:"#000",white:"#fff"},ku=a8,l8={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Xi=l8,c8={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Dl=c8,d8={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Tl=d8,u8={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Il=u8,h8={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},zr=h8,p8={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},wd=p8,f8={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"},x5=f8,g8={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},m8=g8;function U(){return U=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(n[c]=a[c])}return n},U.apply(this,arguments)}function da(n){return n!==null&&typeof n=="object"&&n.constructor===Object}function wM(n){if(!da(n))return n;const o={};return Object.keys(n).forEach(a=>{o[a]=wM(n[a])}),o}function fo(n,o,a={clone:!0}){const c=a.clone?U({},n):n;return da(n)&&da(o)&&Object.keys(o).forEach(u=>{u!=="__proto__"&&(da(o[u])&&u in n&&da(n[u])?c[u]=fo(n[u],o[u],a):a.clone?c[u]=da(o[u])?wM(o[u]):o[u]:c[u]=o[u])}),c}function bs(n){let o="https://mui.com/production-error/?code="+n;for(let a=1;a<arguments.length;a+=1)o+="&args[]="+encodeURIComponent(arguments[a]);return"Minified MUI error #"+n+"; visit "+o+" for the full message."}function _e(n){if(typeof n!="string")throw new Error(bs(7));return n.charAt(0).toUpperCase()+n.slice(1)}function E5(...n){return n.reduce((o,a)=>a==null?o:function(...u){o.apply(this,u),a.apply(this,u)},()=>{})}function vM(n,o=166){let a;function c(...u){const p=()=>{n.apply(this,u)};clearTimeout(a),a=setTimeout(p,o)}return c.clear=()=>{clearTimeout(a)},c}function Jp(n,o){return z.isValidElement(n)&&o.indexOf(n.type.muiName)!==-1}function Mn(n){return n&&n.ownerDocument||document}function _a(n){return Mn(n).defaultView||window}function mw(n,o){typeof n=="function"?n(o):n&&(n.current=o)}const b8=typeof window<"u"?z.useLayoutEffect:z.useEffect,Yr=b8;let S5=0;function k8(n){const[o,a]=z.useState(n),c=n||o;return z.useEffect(()=>{o==null&&(S5+=1,a(`mui-${S5}`))},[o]),c}const D5=Jd["useId".toString()];function Bv(n){if(D5!==void 0){const o=D5();return n??o}return k8(n)}function Nf({controlled:n,default:o,name:a,state:c="value"}){const{current:u}=z.useRef(n!==void 0),[p,g]=z.useState(o),k=u?n:p,m=z.useCallback(C=>{u||g(C)},[]);return[k,m]}function Ur(n){const o=z.useRef(n);return Yr(()=>{o.current=n}),z.useCallback((...a)=>(0,o.current)(...a),[])}function dn(...n){return z.useMemo(()=>n.every(o=>o==null)?null:o=>{n.forEach(a=>{mw(a,o)})},n)}let cg=!0,bw=!1,T5;const w8={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function v8(n){const{type:o,tagName:a}=n;return!!(a==="INPUT"&&w8[o]&&!n.readOnly||a==="TEXTAREA"&&!n.readOnly||n.isContentEditable)}function C8(n){n.metaKey||n.altKey||n.ctrlKey||(cg=!0)}function i0(){cg=!1}function y8(){this.visibilityState==="hidden"&&bw&&(cg=!0)}function A8(n){n.addEventListener("keydown",C8,!0),n.addEventListener("mousedown",i0,!0),n.addEventListener("pointerdown",i0,!0),n.addEventListener("touchstart",i0,!0),n.addEventListener("visibilitychange",y8,!0)}function _8(n){const{target:o}=n;try{return o.matches(":focus-visible")}catch{}return cg||v8(o)}function CM(){const n=z.useCallback(u=>{u!=null&&A8(u.ownerDocument)},[]),o=z.useRef(!1);function a(){return o.current?(bw=!0,window.clearTimeout(T5),T5=window.setTimeout(()=>{bw=!1},100),o.current=!1,!0):!1}function c(u){return _8(u)?(o.current=!0,!0):!1}return{isFocusVisibleRef:o,onFocus:c,onBlur:a,ref:n}}function yM(n){const o=n.documentElement.clientWidth;return Math.abs(window.innerWidth-o)}function Rv(n,o){const a=U({},o);return Object.keys(n).forEach(c=>{if(c.toString().match(/^(components|slots)$/))a[c]=U({},n[c],a[c]);else if(c.toString().match(/^(componentsProps|slotProps)$/)){const u=n[c]||{},p=o[c];a[c]={},!p||!Object.keys(p)?a[c]=u:!u||!Object.keys(u)?a[c]=p:(a[c]=U({},p),Object.keys(u).forEach(g=>{a[c][g]=Rv(u[g],p[g])}))}else a[c]===void 0&&(a[c]=n[c])}),a}function Qe(n,o,a=void 0){const c={};return Object.keys(n).forEach(u=>{c[u]=n[u].reduce((p,g)=>{if(g){const k=o(g);k!==""&&p.push(k),a&&a[g]&&p.push(a[g])}return p},[]).join(" ")}),c}const I5=n=>n,x8=()=>{let n=I5;return{configure(o){n=o},generate(o){return n(o)},reset(){n=I5}}},E8=x8(),AM=E8,S8={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function Ge(n,o,a="Mui"){const c=S8[o];return c?`${a}-${c}`:`${AM.generate(n)}-${o}`}function qe(n,o,a="Mui"){const c={};return o.forEach(u=>{c[u]=Ge(n,u,a)}),c}const xa="$$material";function ve(n,o){if(n==null)return{};var a={},c=Object.keys(n),u,p;for(p=0;p<c.length;p++)u=c[p],!(o.indexOf(u)>=0)&&(a[u]=n[u]);return a}function _M(n){var o=Object.create(null);return function(a){return o[a]===void 0&&(o[a]=n(a)),o[a]}}var D8=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,T8=_M(function(n){return D8.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91});function I8(n){if(n.sheet)return n.sheet;for(var o=0;o<document.styleSheets.length;o++)if(document.styleSheets[o].ownerNode===n)return document.styleSheets[o]}function M8(n){var o=document.createElement("style");return o.setAttribute("data-emotion",n.key),n.nonce!==void 0&&o.setAttribute("nonce",n.nonce),o.appendChild(document.createTextNode("")),o.setAttribute("data-s",""),o}var P8=function(){function n(a){var c=this;this._insertTag=function(u){var p;c.tags.length===0?c.insertionPoint?p=c.insertionPoint.nextSibling:c.prepend?p=c.container.firstChild:p=c.before:p=c.tags[c.tags.length-1].nextSibling,c.container.insertBefore(u,p),c.tags.push(u)},this.isSpeedy=a.speedy===void 0?!0:a.speedy,this.tags=[],this.ctr=0,this.nonce=a.nonce,this.key=a.key,this.container=a.container,this.prepend=a.prepend,this.insertionPoint=a.insertionPoint,this.before=null}var o=n.prototype;return o.hydrate=function(c){c.forEach(this._insertTag)},o.insert=function(c){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(M8(this));var u=this.tags[this.tags.length-1];if(this.isSpeedy){var p=I8(u);try{p.insertRule(c,p.cssRules.length)}catch{}}else u.appendChild(document.createTextNode(c));this.ctr++},o.flush=function(){this.tags.forEach(function(c){return c.parentNode&&c.parentNode.removeChild(c)}),this.tags=[],this.ctr=0},n}(),Yn="-ms-",Bf="-moz-",mt="-webkit-",xM="comm",Ov="rule",zv="decl",N8="@import",EM="@keyframes",B8="@layer",R8=Math.abs,dg=String.fromCharCode,O8=Object.assign;function z8(n,o){return Fn(n,0)^45?(((o<<2^Fn(n,0))<<2^Fn(n,1))<<2^Fn(n,2))<<2^Fn(n,3):0}function SM(n){return n.trim()}function L8(n,o){return(n=o.exec(n))?n[0]:n}function bt(n,o,a){return n.replace(o,a)}function kw(n,o){return n.indexOf(o)}function Fn(n,o){return n.charCodeAt(o)|0}function wu(n,o,a){return n.slice(o,a)}function Lr(n){return n.length}function Lv(n){return n.length}function Mp(n,o){return o.push(n),n}function j8(n,o){return n.map(o).join("")}var ug=1,ac=1,DM=0,bo=0,mn=0,Cc="";function hg(n,o,a,c,u,p,g){return{value:n,root:o,parent:a,type:c,props:u,children:p,line:ug,column:ac,length:g,return:""}}function vd(n,o){return O8(hg("",null,null,"",null,null,0),n,{length:-n.length},o)}function F8(){return mn}function V8(){return mn=bo>0?Fn(Cc,--bo):0,ac--,mn===10&&(ac=1,ug--),mn}function Mo(){return mn=bo<DM?Fn(Cc,bo++):0,ac++,mn===10&&(ac=1,ug++),mn}function qr(){return Fn(Cc,bo)}function Xp(){return bo}function Pu(n,o){return wu(Cc,n,o)}function vu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function TM(n){return ug=ac=1,DM=Lr(Cc=n),bo=0,[]}function IM(n){return Cc="",n}function ef(n){return SM(Pu(bo-1,ww(n===91?n+2:n===40?n+1:n)))}function $8(n){for(;(mn=qr())&&mn<33;)Mo();return vu(n)>2||vu(mn)>3?"":" "}function U8(n,o){for(;--o&&Mo()&&!(mn<48||mn>102||mn>57&&mn<65||mn>70&&mn<97););return Pu(n,Xp()+(o<6&&qr()==32&&Mo()==32))}function ww(n){for(;Mo();)switch(mn){case n:return bo;case 34:case 39:n!==34&&n!==39&&ww(mn);break;case 40:n===41&&ww(n);break;case 92:Mo();break}return bo}function H8(n,o){for(;Mo()&&n+mn!==47+10;)if(n+mn===42+42&&qr()===47)break;return"/*"+Pu(o,bo-1)+"*"+dg(n===47?n:Mo())}function W8(n){for(;!vu(qr());)Mo();return Pu(n,bo)}function G8(n){return IM(tf("",null,null,null,[""],n=TM(n),0,[0],n))}function tf(n,o,a,c,u,p,g,k,m){for(var C=0,A=0,_=g,y=0,E=0,S=0,D=1,R=1,I=1,P=0,B="",L=u,M=p,W=c,H=B;R;)switch(S=P,P=Mo()){case 40:if(S!=108&&Fn(H,_-1)==58){kw(H+=bt(ef(P),"&","&\f"),"&\f")!=-1&&(I=-1);break}case 34:case 39:case 91:H+=ef(P);break;case 9:case 10:case 13:case 32:H+=$8(S);break;case 92:H+=U8(Xp()-1,7);continue;case 47:switch(qr()){case 42:case 47:Mp(q8(H8(Mo(),Xp()),o,a),m);break;default:H+="/"}break;case 123*D:k[C++]=Lr(H)*I;case 125*D:case 59:case 0:switch(P){case 0:case 125:R=0;case 59+A:I==-1&&(H=bt(H,/\f/g,"")),E>0&&Lr(H)-_&&Mp(E>32?P5(H+";",c,a,_-1):P5(bt(H," ","")+";",c,a,_-2),m);break;case 59:H+=";";default:if(Mp(W=M5(H,o,a,C,A,u,k,B,L=[],M=[],_),p),P===123)if(A===0)tf(H,o,W,W,L,p,_,k,M);else switch(y===99&&Fn(H,3)===110?100:y){case 100:case 108:case 109:case 115:tf(n,W,W,c&&Mp(M5(n,W,W,0,0,u,k,B,u,L=[],_),M),u,M,_,k,c?L:M);break;default:tf(H,W,W,W,[""],M,0,k,M)}}C=A=E=0,D=I=1,B=H="",_=g;break;case 58:_=1+Lr(H),E=S;default:if(D<1){if(P==123)--D;else if(P==125&&D++==0&&V8()==125)continue}switch(H+=dg(P),P*D){case 38:I=A>0?1:(H+="\f",-1);break;case 44:k[C++]=(Lr(H)-1)*I,I=1;break;case 64:qr()===45&&(H+=ef(Mo())),y=qr(),A=_=Lr(B=H+=W8(Xp())),P++;break;case 45:S===45&&Lr(H)==2&&(D=0)}}return p}function M5(n,o,a,c,u,p,g,k,m,C,A){for(var _=u-1,y=u===0?p:[""],E=Lv(y),S=0,D=0,R=0;S<c;++S)for(var I=0,P=wu(n,_+1,_=R8(D=g[S])),B=n;I<E;++I)(B=SM(D>0?y[I]+" "+P:bt(P,/&\f/g,y[I])))&&(m[R++]=B);return hg(n,o,a,u===0?Ov:k,m,C,A)}function q8(n,o,a){return hg(n,o,a,xM,dg(F8()),wu(n,2,-2),0)}function P5(n,o,a,c){return hg(n,o,a,zv,wu(n,0,c),wu(n,c+1,-1),c)}function Jl(n,o){for(var a="",c=Lv(n),u=0;u<c;u++)a+=o(n[u],u,n,o)||"";return a}function K8(n,o,a,c){switch(n.type){case B8:if(n.children.length)break;case N8:case zv:return n.return=n.return||n.value;case xM:return"";case EM:return n.return=n.value+"{"+Jl(n.children,c)+"}";case Ov:n.value=n.props.join(",")}return Lr(a=Jl(n.children,c))?n.return=n.value+"{"+a+"}":""}function Y8(n){var o=Lv(n);return function(a,c,u,p){for(var g="",k=0;k<o;k++)g+=n[k](a,c,u,p)||"";return g}}function Q8(n){return function(o){o.root||(o=o.return)&&n(o)}}var Z8=function(o,a,c){for(var u=0,p=0;u=p,p=qr(),u===38&&p===12&&(a[c]=1),!vu(p);)Mo();return Pu(o,bo)},J8=function(o,a){var c=-1,u=44;do switch(vu(u)){case 0:u===38&&qr()===12&&(a[c]=1),o[c]+=Z8(bo-1,a,c);break;case 2:o[c]+=ef(u);break;case 4:if(u===44){o[++c]=qr()===58?"&\f":"",a[c]=o[c].length;break}default:o[c]+=dg(u)}while(u=Mo());return o},X8=function(o,a){return IM(J8(TM(o),a))},N5=new WeakMap,eV=function(o){if(!(o.type!=="rule"||!o.parent||o.length<1)){for(var a=o.value,c=o.parent,u=o.column===c.column&&o.line===c.line;c.type!=="rule";)if(c=c.parent,!c)return;if(!(o.props.length===1&&a.charCodeAt(0)!==58&&!N5.get(c))&&!u){N5.set(o,!0);for(var p=[],g=X8(a,p),k=c.props,m=0,C=0;m<g.length;m++)for(var A=0;A<k.length;A++,C++)o.props[C]=p[m]?g[m].replace(/&\f/g,k[A]):k[A]+" "+g[m]}}},tV=function(o){if(o.type==="decl"){var a=o.value;a.charCodeAt(0)===108&&a.charCodeAt(2)===98&&(o.return="",o.value="")}};function MM(n,o){switch(z8(n,o)){case 5103:return mt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return mt+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return mt+n+Bf+n+Yn+n+n;case 6828:case 4268:return mt+n+Yn+n+n;case 6165:return mt+n+Yn+"flex-"+n+n;case 5187:return mt+n+bt(n,/(\w+).+(:[^]+)/,mt+"box-$1$2"+Yn+"flex-$1$2")+n;case 5443:return mt+n+Yn+"flex-item-"+bt(n,/flex-|-self/,"")+n;case 4675:return mt+n+Yn+"flex-line-pack"+bt(n,/align-content|flex-|-self/,"")+n;case 5548:return mt+n+Yn+bt(n,"shrink","negative")+n;case 5292:return mt+n+Yn+bt(n,"basis","preferred-size")+n;case 6060:return mt+"box-"+bt(n,"-grow","")+mt+n+Yn+bt(n,"grow","positive")+n;case 4554:return mt+bt(n,/([^-])(transform)/g,"$1"+mt+"$2")+n;case 6187:return bt(bt(bt(n,/(zoom-|grab)/,mt+"$1"),/(image-set)/,mt+"$1"),n,"")+n;case 5495:case 3959:return bt(n,/(image-set\([^]*)/,mt+"$1$`$1");case 4968:return bt(bt(n,/(.+:)(flex-)?(.*)/,mt+"box-pack:$3"+Yn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+mt+n+n;case 4095:case 3583:case 4068:case 2532:return bt(n,/(.+)-inline(.+)/,mt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Lr(n)-1-o>6)switch(Fn(n,o+1)){case 109:if(Fn(n,o+4)!==45)break;case 102:return bt(n,/(.+:)(.+)-([^]+)/,"$1"+mt+"$2-$3$1"+Bf+(Fn(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~kw(n,"stretch")?MM(bt(n,"stretch","fill-available"),o)+n:n}break;case 4949:if(Fn(n,o+1)!==115)break;case 6444:switch(Fn(n,Lr(n)-3-(~kw(n,"!important")&&10))){case 107:return bt(n,":",":"+mt)+n;case 101:return bt(n,/(.+:)([^;!]+)(;|!.+)?/,"$1"+mt+(Fn(n,14)===45?"inline-":"")+"box$3$1"+mt+"$2$3$1"+Yn+"$2box$3")+n}break;case 5936:switch(Fn(n,o+11)){case 114:return mt+n+Yn+bt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return mt+n+Yn+bt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return mt+n+Yn+bt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}return mt+n+Yn+n+n}return n}var nV=function(o,a,c,u){if(o.length>-1&&!o.return)switch(o.type){case zv:o.return=MM(o.value,o.length);break;case EM:return Jl([vd(o,{value:bt(o.value,"@","@"+mt)})],u);case Ov:if(o.length)return j8(o.props,function(p){switch(L8(p,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Jl([vd(o,{props:[bt(p,/:(read-\w+)/,":"+Bf+"$1")]})],u);case"::placeholder":return Jl([vd(o,{props:[bt(p,/:(plac\w+)/,":"+mt+"input-$1")]}),vd(o,{props:[bt(p,/:(plac\w+)/,":"+Bf+"$1")]}),vd(o,{props:[bt(p,/:(plac\w+)/,Yn+"input-$1")]})],u)}return""})}},oV=[nV],rV=function(o){var a=o.key;if(a==="css"){var c=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(c,function(D){var R=D.getAttribute("data-emotion");R.indexOf(" ")!==-1&&(document.head.appendChild(D),D.setAttribute("data-s",""))})}var u=o.stylisPlugins||oV,p={},g,k=[];g=o.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),function(D){for(var R=D.getAttribute("data-emotion").split(" "),I=1;I<R.length;I++)p[R[I]]=!0;k.push(D)});var m,C=[eV,tV];{var A,_=[K8,Q8(function(D){A.insert(D)})],y=Y8(C.concat(u,_)),E=function(R){return Jl(G8(R),y)};m=function(R,I,P,B){A=P,E(R?R+"{"+I.styles+"}":I.styles),B&&(S.inserted[I.name]=!0)}}var S={key:a,sheet:new P8({key:a,container:g,nonce:o.nonce,speedy:o.speedy,prepend:o.prepend,insertionPoint:o.insertionPoint}),nonce:o.nonce,inserted:p,registered:{},insert:m};return S.sheet.hydrate(k),S},PM={exports:{}},St={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nn=typeof Symbol=="function"&&Symbol.for,jv=Nn?Symbol.for("react.element"):60103,Fv=Nn?Symbol.for("react.portal"):60106,pg=Nn?Symbol.for("react.fragment"):60107,fg=Nn?Symbol.for("react.strict_mode"):60108,gg=Nn?Symbol.for("react.profiler"):60114,mg=Nn?Symbol.for("react.provider"):60109,bg=Nn?Symbol.for("react.context"):60110,Vv=Nn?Symbol.for("react.async_mode"):60111,kg=Nn?Symbol.for("react.concurrent_mode"):60111,wg=Nn?Symbol.for("react.forward_ref"):60112,vg=Nn?Symbol.for("react.suspense"):60113,iV=Nn?Symbol.for("react.suspense_list"):60120,Cg=Nn?Symbol.for("react.memo"):60115,yg=Nn?Symbol.for("react.lazy"):60116,sV=Nn?Symbol.for("react.block"):60121,aV=Nn?Symbol.for("react.fundamental"):60117,lV=Nn?Symbol.for("react.responder"):60118,cV=Nn?Symbol.for("react.scope"):60119;function Oo(n){if(typeof n=="object"&&n!==null){var o=n.$$typeof;switch(o){case jv:switch(n=n.type,n){case Vv:case kg:case pg:case gg:case fg:case vg:return n;default:switch(n=n&&n.$$typeof,n){case bg:case wg:case yg:case Cg:case mg:return n;default:return o}}case Fv:return o}}}function NM(n){return Oo(n)===kg}St.AsyncMode=Vv;St.ConcurrentMode=kg;St.ContextConsumer=bg;St.ContextProvider=mg;St.Element=jv;St.ForwardRef=wg;St.Fragment=pg;St.Lazy=yg;St.Memo=Cg;St.Portal=Fv;St.Profiler=gg;St.StrictMode=fg;St.Suspense=vg;St.isAsyncMode=function(n){return NM(n)||Oo(n)===Vv};St.isConcurrentMode=NM;St.isContextConsumer=function(n){return Oo(n)===bg};St.isContextProvider=function(n){return Oo(n)===mg};St.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===jv};St.isForwardRef=function(n){return Oo(n)===wg};St.isFragment=function(n){return Oo(n)===pg};St.isLazy=function(n){return Oo(n)===yg};St.isMemo=function(n){return Oo(n)===Cg};St.isPortal=function(n){return Oo(n)===Fv};St.isProfiler=function(n){return Oo(n)===gg};St.isStrictMode=function(n){return Oo(n)===fg};St.isSuspense=function(n){return Oo(n)===vg};St.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===pg||n===kg||n===gg||n===fg||n===vg||n===iV||typeof n=="object"&&n!==null&&(n.$$typeof===yg||n.$$typeof===Cg||n.$$typeof===mg||n.$$typeof===bg||n.$$typeof===wg||n.$$typeof===aV||n.$$typeof===lV||n.$$typeof===cV||n.$$typeof===sV)};St.typeOf=Oo;PM.exports=St;var dV=PM.exports,BM=dV,uV={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hV={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},RM={};RM[BM.ForwardRef]=uV;RM[BM.Memo]=hV;var pV=!0;function fV(n,o,a){var c="";return a.split(" ").forEach(function(u){n[u]!==void 0?o.push(n[u]+";"):c+=u+" "}),c}var OM=function(o,a,c){var u=o.key+"-"+a.name;(c===!1||pV===!1)&&o.registered[u]===void 0&&(o.registered[u]=a.styles)},zM=function(o,a,c){OM(o,a,c);var u=o.key+"-"+a.name;if(o.inserted[a.name]===void 0){var p=a;do o.insert(a===p?"."+u:"",p,o.sheet,!0),p=p.next;while(p!==void 0)}};function gV(n){for(var o=0,a,c=0,u=n.length;u>=4;++c,u-=4)a=n.charCodeAt(c)&255|(n.charCodeAt(++c)&255)<<8|(n.charCodeAt(++c)&255)<<16|(n.charCodeAt(++c)&255)<<24,a=(a&65535)*1540483477+((a>>>16)*59797<<16),a^=a>>>24,o=(a&65535)*1540483477+((a>>>16)*59797<<16)^(o&65535)*1540483477+((o>>>16)*59797<<16);switch(u){case 3:o^=(n.charCodeAt(c+2)&255)<<16;case 2:o^=(n.charCodeAt(c+1)&255)<<8;case 1:o^=n.charCodeAt(c)&255,o=(o&65535)*1540483477+((o>>>16)*59797<<16)}return o^=o>>>13,o=(o&65535)*1540483477+((o>>>16)*59797<<16),((o^o>>>15)>>>0).toString(36)}var mV={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bV=/[A-Z]|^ms/g,kV=/_EMO_([^_]+?)_([^]*?)_EMO_/g,LM=function(o){return o.charCodeAt(1)===45},B5=function(o){return o!=null&&typeof o!="boolean"},s0=_M(function(n){return LM(n)?n:n.replace(bV,"-$&").toLowerCase()}),R5=function(o,a){switch(o){case"animation":case"animationName":if(typeof a=="string")return a.replace(kV,function(c,u,p){return jr={name:u,styles:p,next:jr},u})}return mV[o]!==1&&!LM(o)&&typeof a=="number"&&a!==0?a+"px":a};function Cu(n,o,a){if(a==null)return"";if(a.__emotion_styles!==void 0)return a;switch(typeof a){case"boolean":return"";case"object":{if(a.anim===1)return jr={name:a.name,styles:a.styles,next:jr},a.name;if(a.styles!==void 0){var c=a.next;if(c!==void 0)for(;c!==void 0;)jr={name:c.name,styles:c.styles,next:jr},c=c.next;var u=a.styles+";";return u}return wV(n,o,a)}case"function":{if(n!==void 0){var p=jr,g=a(n);return jr=p,Cu(n,o,g)}break}}if(o==null)return a;var k=o[a];return k!==void 0?k:a}function wV(n,o,a){var c="";if(Array.isArray(a))for(var u=0;u<a.length;u++)c+=Cu(n,o,a[u])+";";else for(var p in a){var g=a[p];if(typeof g!="object")o!=null&&o[g]!==void 0?c+=p+"{"+o[g]+"}":B5(g)&&(c+=s0(p)+":"+R5(p,g)+";");else if(Array.isArray(g)&&typeof g[0]=="string"&&(o==null||o[g[0]]===void 0))for(var k=0;k<g.length;k++)B5(g[k])&&(c+=s0(p)+":"+R5(p,g[k])+";");else{var m=Cu(n,o,g);switch(p){case"animation":case"animationName":{c+=s0(p)+":"+m+";";break}default:c+=p+"{"+m+"}"}}}return c}var O5=/label:\s*([^\s;\n{]+)\s*(;|$)/g,jr,$v=function(o,a,c){if(o.length===1&&typeof o[0]=="object"&&o[0]!==null&&o[0].styles!==void 0)return o[0];var u=!0,p="";jr=void 0;var g=o[0];g==null||g.raw===void 0?(u=!1,p+=Cu(c,a,g)):p+=g[0];for(var k=1;k<o.length;k++)p+=Cu(c,a,o[k]),u&&(p+=g[k]);O5.lastIndex=0;for(var m="",C;(C=O5.exec(p))!==null;)m+="-"+C[1];var A=gV(p)+m;return{name:A,styles:p,next:jr}},vV=function(o){return o()},jM=Jd["useInsertionEffect"]?Jd["useInsertionEffect"]:!1,CV=jM||vV,z5=jM||z.useLayoutEffect,FM=z.createContext(typeof HTMLElement<"u"?rV({key:"css"}):null);FM.Provider;var VM=function(o){return z.forwardRef(function(a,c){var u=z.useContext(FM);return o(a,u,c)})},Ag=z.createContext({}),yV=VM(function(n,o){var a=n.styles,c=$v([a],void 0,z.useContext(Ag)),u=z.useRef();return z5(function(){var p=o.key+"-global",g=new o.sheet.constructor({key:p,nonce:o.sheet.nonce,container:o.sheet.container,speedy:o.sheet.isSpeedy}),k=!1,m=document.querySelector('style[data-emotion="'+p+" "+c.name+'"]');return o.sheet.tags.length&&(g.before=o.sheet.tags[0]),m!==null&&(k=!0,m.setAttribute("data-emotion",p),g.hydrate([m])),u.current=[g,k],function(){g.flush()}},[o]),z5(function(){var p=u.current,g=p[0],k=p[1];if(k){p[1]=!1;return}if(c.next!==void 0&&zM(o,c.next,!0),g.tags.length){var m=g.tags[g.tags.length-1].nextElementSibling;g.before=m,g.flush()}o.insert("",c,g,!1)},[o,c.name]),null});function Uv(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return $v(o)}var Nu=function(){var o=Uv.apply(void 0,arguments),a="animation-"+o.name;return{name:a,styles:"@keyframes "+a+"{"+o.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},AV=T8,_V=function(o){return o!=="theme"},L5=function(o){return typeof o=="string"&&o.charCodeAt(0)>96?AV:_V},j5=function(o,a,c){var u;if(a){var p=a.shouldForwardProp;u=o.__emotion_forwardProp&&p?function(g){return o.__emotion_forwardProp(g)&&p(g)}:p}return typeof u!="function"&&c&&(u=o.__emotion_forwardProp),u},xV=function(o){var a=o.cache,c=o.serialized,u=o.isStringTag;return OM(a,c,u),CV(function(){return zM(a,c,u)}),null},EV=function n(o,a){var c=o.__emotion_real===o,u=c&&o.__emotion_base||o,p,g;a!==void 0&&(p=a.label,g=a.target);var k=j5(o,a,c),m=k||L5(u),C=!m("as");return function(){var A=arguments,_=c&&o.__emotion_styles!==void 0?o.__emotion_styles.slice(0):[];if(p!==void 0&&_.push("label:"+p+";"),A[0]==null||A[0].raw===void 0)_.push.apply(_,A);else{_.push(A[0][0]);for(var y=A.length,E=1;E<y;E++)_.push(A[E],A[0][E])}var S=VM(function(D,R,I){var P=C&&D.as||u,B="",L=[],M=D;if(D.theme==null){M={};for(var W in D)M[W]=D[W];M.theme=z.useContext(Ag)}typeof D.className=="string"?B=fV(R.registered,L,D.className):D.className!=null&&(B=D.className+" ");var H=$v(_.concat(L),R.registered,M);B+=R.key+"-"+H.name,g!==void 0&&(B+=" "+g);var K=C&&k===void 0?L5(P):m,Z={};for(var Y in D)C&&Y==="as"||K(Y)&&(Z[Y]=D[Y]);return Z.className=B,Z.ref=I,z.createElement(z.Fragment,null,z.createElement(xV,{cache:R,serialized:H,isStringTag:typeof P=="string"}),z.createElement(P,Z))});return S.displayName=p!==void 0?p:"Styled("+(typeof u=="string"?u:u.displayName||u.name||"Component")+")",S.defaultProps=o.defaultProps,S.__emotion_real=S,S.__emotion_base=u,S.__emotion_styles=_,S.__emotion_forwardProp=k,Object.defineProperty(S,"toString",{value:function(){return"."+g}}),S.withComponent=function(D,R){return n(D,U({},a,R,{shouldForwardProp:j5(S,R,!0)})).apply(void 0,_)},S}},SV=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],vw=EV.bind();SV.forEach(function(n){vw[n]=vw(n)});function DV(n){return n==null||Object.keys(n).length===0}function TV(n){const{styles:o,defaultTheme:a={}}=n,c=typeof o=="function"?u=>o(DV(u)?a:u):o;return V.jsx(yV,{styles:c})}/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function $M(n,o){return vw(n,o)}const IV=(n,o)=>{Array.isArray(n.__emotion_styles)&&(n.__emotion_styles=o(n.__emotion_styles))},MV=["values","unit","step"],PV=n=>{const o=Object.keys(n).map(a=>({key:a,val:n[a]}))||[];return o.sort((a,c)=>a.val-c.val),o.reduce((a,c)=>U({},a,{[c.key]:c.val}),{})};function NV(n){const{values:o={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:a="px",step:c=5}=n,u=ve(n,MV),p=PV(o),g=Object.keys(p);function k(y){return`@media (min-width:${typeof o[y]=="number"?o[y]:y}${a})`}function m(y){return`@media (max-width:${(typeof o[y]=="number"?o[y]:y)-c/100}${a})`}function C(y,E){const S=g.indexOf(E);return`@media (min-width:${typeof o[y]=="number"?o[y]:y}${a}) and (max-width:${(S!==-1&&typeof o[g[S]]=="number"?o[g[S]]:E)-c/100}${a})`}function A(y){return g.indexOf(y)+1<g.length?C(y,g[g.indexOf(y)+1]):k(y)}function _(y){const E=g.indexOf(y);return E===0?k(g[1]):E===g.length-1?m(g[E]):C(y,g[g.indexOf(y)+1]).replace("@media","@media not all and")}return U({keys:g,values:p,up:k,down:m,between:C,only:A,not:_,unit:a},u)}const BV={borderRadius:4},RV=BV;function Gd(n,o){return o?fo(n,o,{clone:!1}):n}const Hv={xs:0,sm:600,md:900,lg:1200,xl:1536},F5={keys:["xs","sm","md","lg","xl"],up:n=>`@media (min-width:${Hv[n]}px)`};function wr(n,o,a){const c=n.theme||{};if(Array.isArray(o)){const p=c.breakpoints||F5;return o.reduce((g,k,m)=>(g[p.up(p.keys[m])]=a(o[m]),g),{})}if(typeof o=="object"){const p=c.breakpoints||F5;return Object.keys(o).reduce((g,k)=>{if(Object.keys(p.values||Hv).indexOf(k)!==-1){const m=p.up(k);g[m]=a(o[k],k)}else{const m=k;g[m]=o[m]}return g},{})}return a(o)}function UM(n={}){var o;return((o=n.keys)==null?void 0:o.reduce((c,u)=>{const p=n.up(u);return c[p]={},c},{}))||{}}function HM(n,o){return n.reduce((a,c)=>{const u=a[c];return(!u||Object.keys(u).length===0)&&delete a[c],a},o)}function OV(n,...o){const a=UM(n),c=[a,...o].reduce((u,p)=>fo(u,p),{});return HM(Object.keys(a),c)}function zV(n,o){if(typeof n!="object")return{};const a={},c=Object.keys(o);return Array.isArray(n)?c.forEach((u,p)=>{p<n.length&&(a[u]=!0)}):c.forEach(u=>{n[u]!=null&&(a[u]=!0)}),a}function a0({values:n,breakpoints:o,base:a}){const c=a||zV(n,o),u=Object.keys(c);if(u.length===0)return n;let p;return u.reduce((g,k,m)=>(Array.isArray(n)?(g[k]=n[m]!=null?n[m]:n[p],p=m):typeof n=="object"?(g[k]=n[k]!=null?n[k]:n[p],p=k):g[k]=n,g),{})}function _g(n,o,a=!0){if(!o||typeof o!="string")return null;if(n&&n.vars&&a){const c=`vars.${o}`.split(".").reduce((u,p)=>u&&u[p]?u[p]:null,n);if(c!=null)return c}return o.split(".").reduce((c,u)=>c&&c[u]!=null?c[u]:null,n)}function Rf(n,o,a,c=a){let u;return typeof n=="function"?u=n(a):Array.isArray(n)?u=n[a]||c:u=_g(n,a)||c,o&&(u=o(u,c,n)),u}function wt(n){const{prop:o,cssProperty:a=n.prop,themeKey:c,transform:u}=n,p=g=>{if(g[o]==null)return null;const k=g[o],m=g.theme,C=_g(m,c)||{};return wr(g,k,_=>{let y=Rf(C,u,_);return _===y&&typeof _=="string"&&(y=Rf(C,u,`${o}${_==="default"?"":_e(_)}`,_)),a===!1?y:{[a]:y}})};return p.propTypes={},p.filterProps=[o],p}function LV(n){const o={};return a=>(o[a]===void 0&&(o[a]=n(a)),o[a])}const jV={m:"margin",p:"padding"},FV={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},V5={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},VV=LV(n=>{if(n.length>2)if(V5[n])n=V5[n];else return[n];const[o,a]=n.split(""),c=jV[o],u=FV[a]||"";return Array.isArray(u)?u.map(p=>c+p):[c+u]}),Wv=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Gv=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Wv,...Gv];function Bu(n,o,a,c){var u;const p=(u=_g(n,o,!1))!=null?u:a;return typeof p=="number"?g=>typeof g=="string"?g:p*g:Array.isArray(p)?g=>typeof g=="string"?g:p[g]:typeof p=="function"?p:()=>{}}function qv(n){return Bu(n,"spacing",8)}function Ea(n,o){if(typeof o=="string"||o==null)return o;const a=Math.abs(o),c=n(a);return o>=0?c:typeof c=="number"?-c:`-${c}`}function $V(n,o){return a=>n.reduce((c,u)=>(c[u]=Ea(o,a),c),{})}function UV(n,o,a,c){if(o.indexOf(a)===-1)return null;const u=VV(a),p=$V(u,c),g=n[a];return wr(n,g,p)}function WM(n,o){const a=qv(n.theme);return Object.keys(n).map(c=>UV(n,o,c,a)).reduce(Gd,{})}function tn(n){return WM(n,Wv)}tn.propTypes={};tn.filterProps=Wv;function nn(n){return WM(n,Gv)}nn.propTypes={};nn.filterProps=Gv;function HV(n=8){if(n.mui)return n;const o=qv({spacing:n}),a=(...c)=>(c.length===0?[1]:c).map(p=>{const g=o(p);return typeof g=="number"?`${g}px`:g}).join(" ");return a.mui=!0,a}function xg(...n){const o=n.reduce((c,u)=>(u.filterProps.forEach(p=>{c[p]=u}),c),{}),a=c=>Object.keys(c).reduce((u,p)=>o[p]?Gd(u,o[p](c)):u,{});return a.propTypes={},a.filterProps=n.reduce((c,u)=>c.concat(u.filterProps),[]),a}function Vr(n){return typeof n!="number"?n:`${n}px solid`}const WV=wt({prop:"border",themeKey:"borders",transform:Vr}),GV=wt({prop:"borderTop",themeKey:"borders",transform:Vr}),qV=wt({prop:"borderRight",themeKey:"borders",transform:Vr}),KV=wt({prop:"borderBottom",themeKey:"borders",transform:Vr}),YV=wt({prop:"borderLeft",themeKey:"borders",transform:Vr}),QV=wt({prop:"borderColor",themeKey:"palette"}),ZV=wt({prop:"borderTopColor",themeKey:"palette"}),JV=wt({prop:"borderRightColor",themeKey:"palette"}),XV=wt({prop:"borderBottomColor",themeKey:"palette"}),e$=wt({prop:"borderLeftColor",themeKey:"palette"}),Eg=n=>{if(n.borderRadius!==void 0&&n.borderRadius!==null){const o=Bu(n.theme,"shape.borderRadius",4),a=c=>({borderRadius:Ea(o,c)});return wr(n,n.borderRadius,a)}return null};Eg.propTypes={};Eg.filterProps=["borderRadius"];xg(WV,GV,qV,KV,YV,QV,ZV,JV,XV,e$,Eg);const Sg=n=>{if(n.gap!==void 0&&n.gap!==null){const o=Bu(n.theme,"spacing",8),a=c=>({gap:Ea(o,c)});return wr(n,n.gap,a)}return null};Sg.propTypes={};Sg.filterProps=["gap"];const Dg=n=>{if(n.columnGap!==void 0&&n.columnGap!==null){const o=Bu(n.theme,"spacing",8),a=c=>({columnGap:Ea(o,c)});return wr(n,n.columnGap,a)}return null};Dg.propTypes={};Dg.filterProps=["columnGap"];const Tg=n=>{if(n.rowGap!==void 0&&n.rowGap!==null){const o=Bu(n.theme,"spacing",8),a=c=>({rowGap:Ea(o,c)});return wr(n,n.rowGap,a)}return null};Tg.propTypes={};Tg.filterProps=["rowGap"];const t$=wt({prop:"gridColumn"}),n$=wt({prop:"gridRow"}),o$=wt({prop:"gridAutoFlow"}),r$=wt({prop:"gridAutoColumns"}),i$=wt({prop:"gridAutoRows"}),s$=wt({prop:"gridTemplateColumns"}),a$=wt({prop:"gridTemplateRows"}),l$=wt({prop:"gridTemplateAreas"}),c$=wt({prop:"gridArea"});xg(Sg,Dg,Tg,t$,n$,o$,r$,i$,s$,a$,l$,c$);function Xl(n,o){return o==="grey"?o:n}const d$=wt({prop:"color",themeKey:"palette",transform:Xl}),u$=wt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Xl}),h$=wt({prop:"backgroundColor",themeKey:"palette",transform:Xl});xg(d$,u$,h$);function Do(n){return n<=1&&n!==0?`${n*100}%`:n}const p$=wt({prop:"width",transform:Do}),Kv=n=>{if(n.maxWidth!==void 0&&n.maxWidth!==null){const o=a=>{var c,u,p;return{maxWidth:((c=n.theme)==null||(u=c.breakpoints)==null||(p=u.values)==null?void 0:p[a])||Hv[a]||Do(a)}};return wr(n,n.maxWidth,o)}return null};Kv.filterProps=["maxWidth"];const f$=wt({prop:"minWidth",transform:Do}),g$=wt({prop:"height",transform:Do}),m$=wt({prop:"maxHeight",transform:Do}),b$=wt({prop:"minHeight",transform:Do});wt({prop:"size",cssProperty:"width",transform:Do});wt({prop:"size",cssProperty:"height",transform:Do});const k$=wt({prop:"boxSizing"});xg(p$,Kv,f$,g$,m$,b$,k$);const w$={border:{themeKey:"borders",transform:Vr},borderTop:{themeKey:"borders",transform:Vr},borderRight:{themeKey:"borders",transform:Vr},borderBottom:{themeKey:"borders",transform:Vr},borderLeft:{themeKey:"borders",transform:Vr},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Eg},color:{themeKey:"palette",transform:Xl},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Xl},backgroundColor:{themeKey:"palette",transform:Xl},p:{style:nn},pt:{style:nn},pr:{style:nn},pb:{style:nn},pl:{style:nn},px:{style:nn},py:{style:nn},padding:{style:nn},paddingTop:{style:nn},paddingRight:{style:nn},paddingBottom:{style:nn},paddingLeft:{style:nn},paddingX:{style:nn},paddingY:{style:nn},paddingInline:{style:nn},paddingInlineStart:{style:nn},paddingInlineEnd:{style:nn},paddingBlock:{style:nn},paddingBlockStart:{style:nn},paddingBlockEnd:{style:nn},m:{style:tn},mt:{style:tn},mr:{style:tn},mb:{style:tn},ml:{style:tn},mx:{style:tn},my:{style:tn},margin:{style:tn},marginTop:{style:tn},marginRight:{style:tn},marginBottom:{style:tn},marginLeft:{style:tn},marginX:{style:tn},marginY:{style:tn},marginInline:{style:tn},marginInlineStart:{style:tn},marginInlineEnd:{style:tn},marginBlock:{style:tn},marginBlockStart:{style:tn},marginBlockEnd:{style:tn},displayPrint:{cssProperty:!1,transform:n=>({"@media print":{display:n}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Sg},rowGap:{style:Tg},columnGap:{style:Dg},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Do},maxWidth:{style:Kv},minWidth:{transform:Do},height:{transform:Do},maxHeight:{transform:Do},minHeight:{transform:Do},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Ig=w$;function v$(...n){const o=n.reduce((c,u)=>c.concat(Object.keys(u)),[]),a=new Set(o);return n.every(c=>a.size===Object.keys(c).length)}function C$(n,o){return typeof n=="function"?n(o):n}function y$(){function n(a,c,u,p){const g={[a]:c,theme:u},k=p[a];if(!k)return{[a]:c};const{cssProperty:m=a,themeKey:C,transform:A,style:_}=k;if(c==null)return null;if(C==="typography"&&c==="inherit")return{[a]:c};const y=_g(u,C)||{};return _?_(g):wr(g,c,S=>{let D=Rf(y,A,S);return S===D&&typeof S=="string"&&(D=Rf(y,A,`${a}${S==="default"?"":_e(S)}`,S)),m===!1?D:{[m]:D}})}function o(a){var c;const{sx:u,theme:p={}}=a||{};if(!u)return null;const g=(c=p.unstable_sxConfig)!=null?c:Ig;function k(m){let C=m;if(typeof m=="function")C=m(p);else if(typeof m!="object")return m;if(!C)return null;const A=UM(p.breakpoints),_=Object.keys(A);let y=A;return Object.keys(C).forEach(E=>{const S=C$(C[E],p);if(S!=null)if(typeof S=="object")if(g[E])y=Gd(y,n(E,S,p,g));else{const D=wr({theme:p},S,R=>({[E]:R}));v$(D,S)?y[E]=o({sx:S,theme:p}):y=Gd(y,D)}else y=Gd(y,n(E,S,p,g))}),HM(_,y)}return Array.isArray(u)?u.map(k):k(u)}return o}const GM=y$();GM.filterProps=["sx"];const Mg=GM,A$=["breakpoints","palette","spacing","shape"];function Ru(n={},...o){const{breakpoints:a={},palette:c={},spacing:u,shape:p={}}=n,g=ve(n,A$),k=NV(a),m=HV(u);let C=fo({breakpoints:k,direction:"ltr",components:{},palette:U({mode:"light"},c),spacing:m,shape:U({},RV,p)},g);return C=o.reduce((A,_)=>fo(A,_),C),C.unstable_sxConfig=U({},Ig,g==null?void 0:g.unstable_sxConfig),C.unstable_sx=function(_){return Mg({sx:_,theme:this})},C}function _$(n){return Object.keys(n).length===0}function Pg(n=null){const o=z.useContext(Ag);return!o||_$(o)?n:o}const x$=Ru();function Ng(n=x$){return Pg(n)}function E$({styles:n,themeId:o,defaultTheme:a={}}){const c=Ng(a),u=typeof n=="function"?n(o&&c[o]||c):n;return V.jsx(TV,{styles:u})}const S$=["sx"],D$=n=>{var o,a;const c={systemProps:{},otherProps:{}},u=(o=n==null||(a=n.theme)==null?void 0:a.unstable_sxConfig)!=null?o:Ig;return Object.keys(n).forEach(p=>{u[p]?c.systemProps[p]=n[p]:c.otherProps[p]=n[p]}),c};function Yv(n){const{sx:o}=n,a=ve(n,S$),{systemProps:c,otherProps:u}=D$(a);let p;return Array.isArray(o)?p=[c,...o]:typeof o=="function"?p=(...g)=>{const k=o(...g);return da(k)?U({},c,k):c}:p=U({},c,o),U({},u,{sx:p})}function qM(n){var o,a,c="";if(typeof n=="string"||typeof n=="number")c+=n;else if(typeof n=="object")if(Array.isArray(n))for(o=0;o<n.length;o++)n[o]&&(a=qM(n[o]))&&(c&&(c+=" "),c+=a);else for(o in n)n[o]&&(c&&(c+=" "),c+=o);return c}function De(){for(var n,o,a=0,c="";a<arguments.length;)(n=arguments[a++])&&(o=qM(n))&&(c&&(c+=" "),c+=o);return c}const T$=["className","component"];function I$(n={}){const{themeId:o,defaultTheme:a,defaultClassName:c="MuiBox-root",generateClassName:u}=n,p=$M("div",{shouldForwardProp:k=>k!=="theme"&&k!=="sx"&&k!=="as"})(Mg);return z.forwardRef(function(m,C){const A=Ng(a),_=Yv(m),{className:y,component:E="div"}=_,S=ve(_,T$);return V.jsx(p,U({as:E,ref:C,className:De(y,u?u(c):c),theme:o&&A[o]||A},S))})}const M$=["variant"];function $5(n){return n.length===0}function KM(n){const{variant:o}=n,a=ve(n,M$);let c=o||"";return Object.keys(a).sort().forEach(u=>{u==="color"?c+=$5(c)?n[u]:_e(n[u]):c+=`${$5(c)?u:_e(u)}${_e(n[u].toString())}`}),c}const P$=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function N$(n){return Object.keys(n).length===0}function B$(n){return typeof n=="string"&&n.charCodeAt(0)>96}const R$=(n,o)=>o.components&&o.components[n]&&o.components[n].styleOverrides?o.components[n].styleOverrides:null,O$=(n,o)=>{let a=[];o&&o.components&&o.components[n]&&o.components[n].variants&&(a=o.components[n].variants);const c={};return a.forEach(u=>{const p=KM(u.props);c[p]=u.style}),c},z$=(n,o,a,c)=>{var u,p;const{ownerState:g={}}=n,k=[],m=a==null||(u=a.components)==null||(p=u[c])==null?void 0:p.variants;return m&&m.forEach(C=>{let A=!0;Object.keys(C.props).forEach(_=>{g[_]!==C.props[_]&&n[_]!==C.props[_]&&(A=!1)}),A&&k.push(o[KM(C.props)])}),k};function qd(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}const L$=Ru();function Cd({defaultTheme:n,theme:o,themeId:a}){return N$(o)?n:o[a]||o}function YM(n={}){const{themeId:o,defaultTheme:a=L$,rootShouldForwardProp:c=qd,slotShouldForwardProp:u=qd}=n,p=g=>Mg(U({},g,{theme:Cd(U({},g,{defaultTheme:a,themeId:o}))}));return p.__mui_systemSx=!0,(g,k={})=>{IV(g,L=>L.filter(M=>!(M!=null&&M.__mui_systemSx)));const{name:m,slot:C,skipVariantsResolver:A,skipSx:_,overridesResolver:y}=k,E=ve(k,P$),S=A!==void 0?A:C&&C!=="Root"||!1,D=_||!1;let R,I=qd;C==="Root"?I=c:C?I=u:B$(g)&&(I=void 0);const P=$M(g,U({shouldForwardProp:I,label:R},E)),B=(L,...M)=>{const W=M?M.map(Y=>typeof Y=="function"&&Y.__emotion_real!==Y?ee=>Y(U({},ee,{theme:Cd(U({},ee,{defaultTheme:a,themeId:o}))})):Y):[];let H=L;m&&y&&W.push(Y=>{const ee=Cd(U({},Y,{defaultTheme:a,themeId:o})),ce=R$(m,ee);if(ce){const ie={};return Object.entries(ce).forEach(([te,oe])=>{ie[te]=typeof oe=="function"?oe(U({},Y,{theme:ee})):oe}),y(Y,ie)}return null}),m&&!S&&W.push(Y=>{const ee=Cd(U({},Y,{defaultTheme:a,themeId:o}));return z$(Y,O$(m,ee),ee,m)}),D||W.push(p);const K=W.length-M.length;if(Array.isArray(L)&&K>0){const Y=new Array(K).fill("");H=[...L,...Y],H.raw=[...L.raw,...Y]}else typeof L=="function"&&L.__emotion_real!==L&&(H=Y=>L(U({},Y,{theme:Cd(U({},Y,{defaultTheme:a,themeId:o}))})));const Z=P(H,...W);return g.muiName&&(Z.muiName=g.muiName),Z};return P.withConfig&&(B.withConfig=P.withConfig),B}}const j$=YM(),QM=j$;function ZM(n){const{theme:o,name:a,props:c}=n;return!o||!o.components||!o.components[a]||!o.components[a].defaultProps?c:Rv(o.components[a].defaultProps,c)}function Qv({props:n,name:o,defaultTheme:a,themeId:c}){let u=Ng(a);return c&&(u=u[c]||u),ZM({theme:u,name:o,props:n})}function Zv(n,o=0,a=1){return Math.min(Math.max(o,n),a)}function F$(n){n=n.slice(1);const o=new RegExp(`.{1,${n.length>=6?2:1}}`,"g");let a=n.match(o);return a&&a[0].length===1&&(a=a.map(c=>c+c)),a?`rgb${a.length===4?"a":""}(${a.map((c,u)=>u<3?parseInt(c,16):Math.round(parseInt(c,16)/255*1e3)/1e3).join(", ")})`:""}function Sa(n){if(n.type)return n;if(n.charAt(0)==="#")return Sa(F$(n));const o=n.indexOf("("),a=n.substring(0,o);if(["rgb","rgba","hsl","hsla","color"].indexOf(a)===-1)throw new Error(bs(9,n));let c=n.substring(o+1,n.length-1),u;if(a==="color"){if(c=c.split(" "),u=c.shift(),c.length===4&&c[3].charAt(0)==="/"&&(c[3]=c[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(u)===-1)throw new Error(bs(10,u))}else c=c.split(",");return c=c.map(p=>parseFloat(p)),{type:a,values:c,colorSpace:u}}function Bg(n){const{type:o,colorSpace:a}=n;let{values:c}=n;return o.indexOf("rgb")!==-1?c=c.map((u,p)=>p<3?parseInt(u,10):u):o.indexOf("hsl")!==-1&&(c[1]=`${c[1]}%`,c[2]=`${c[2]}%`),o.indexOf("color")!==-1?c=`${a} ${c.join(" ")}`:c=`${c.join(", ")}`,`${o}(${c})`}function V$(n){n=Sa(n);const{values:o}=n,a=o[0],c=o[1]/100,u=o[2]/100,p=c*Math.min(u,1-u),g=(C,A=(C+a/30)%12)=>u-p*Math.max(Math.min(A-3,9-A,1),-1);let k="rgb";const m=[Math.round(g(0)*255),Math.round(g(8)*255),Math.round(g(4)*255)];return n.type==="hsla"&&(k+="a",m.push(o[3])),Bg({type:k,values:m})}function Cw(n){n=Sa(n);let o=n.type==="hsl"||n.type==="hsla"?Sa(V$(n)).values:n.values;return o=o.map(a=>(n.type!=="color"&&(a/=255),a<=.03928?a/12.92:((a+.055)/1.055)**2.4)),Number((.2126*o[0]+.7152*o[1]+.0722*o[2]).toFixed(3))}function $$(n,o){const a=Cw(n),c=Cw(o);return(Math.max(a,c)+.05)/(Math.min(a,c)+.05)}function Xn(n,o){return n=Sa(n),o=Zv(o),(n.type==="rgb"||n.type==="hsl")&&(n.type+="a"),n.type==="color"?n.values[3]=`/${o}`:n.values[3]=o,Bg(n)}function JM(n,o){if(n=Sa(n),o=Zv(o),n.type.indexOf("hsl")!==-1)n.values[2]*=1-o;else if(n.type.indexOf("rgb")!==-1||n.type.indexOf("color")!==-1)for(let a=0;a<3;a+=1)n.values[a]*=1-o;return Bg(n)}function XM(n,o){if(n=Sa(n),o=Zv(o),n.type.indexOf("hsl")!==-1)n.values[2]+=(100-n.values[2])*o;else if(n.type.indexOf("rgb")!==-1)for(let a=0;a<3;a+=1)n.values[a]+=(255-n.values[a])*o;else if(n.type.indexOf("color")!==-1)for(let a=0;a<3;a+=1)n.values[a]+=(1-n.values[a])*o;return Bg(n)}function e4(n,o=.15){return Cw(n)>.5?JM(n,o):XM(n,o)}const U$=z.createContext(null),t4=U$;function n4(){return z.useContext(t4)}const H$=typeof Symbol=="function"&&Symbol.for,W$=H$?Symbol.for("mui.nested"):"__THEME_NESTED__";function G$(n,o){return typeof o=="function"?o(n):U({},n,o)}function q$(n){const{children:o,theme:a}=n,c=n4(),u=z.useMemo(()=>{const p=c===null?a:G$(c,a);return p!=null&&(p[W$]=c!==null),p},[a,c]);return V.jsx(t4.Provider,{value:u,children:o})}const U5={};function H5(n,o,a,c=!1){return z.useMemo(()=>{const u=n&&o[n]||o;if(typeof a=="function"){const p=a(u),g=n?U({},o,{[n]:p}):p;return c?()=>g:g}return n?U({},o,{[n]:a}):U({},o,a)},[n,o,a,c])}function K$(n){const{children:o,theme:a,themeId:c}=n,u=Pg(U5),p=n4()||U5,g=H5(c,u,a),k=H5(c,p,a,!0);return V.jsx(q$,{theme:k,children:V.jsx(Ag.Provider,{value:g,children:o})})}const Y$=["className","component","disableGutters","fixed","maxWidth","classes"],Q$=Ru(),Z$=QM("div",{name:"MuiContainer",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,o[`maxWidth${_e(String(a.maxWidth))}`],a.fixed&&o.fixed,a.disableGutters&&o.disableGutters]}}),J$=n=>Qv({props:n,name:"MuiContainer",defaultTheme:Q$}),X$=(n,o)=>{const a=m=>Ge(o,m),{classes:c,fixed:u,disableGutters:p,maxWidth:g}=n,k={root:["root",g&&`maxWidth${_e(String(g))}`,u&&"fixed",p&&"disableGutters"]};return Qe(k,a,c)};function eU(n={}){const{createStyledComponent:o=Z$,useThemeProps:a=J$,componentName:c="MuiContainer"}=n,u=o(({theme:g,ownerState:k})=>U({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!k.disableGutters&&{paddingLeft:g.spacing(2),paddingRight:g.spacing(2),[g.breakpoints.up("sm")]:{paddingLeft:g.spacing(3),paddingRight:g.spacing(3)}}),({theme:g,ownerState:k})=>k.fixed&&Object.keys(g.breakpoints.values).reduce((m,C)=>{const A=C,_=g.breakpoints.values[A];return _!==0&&(m[g.breakpoints.up(A)]={maxWidth:`${_}${g.breakpoints.unit}`}),m},{}),({theme:g,ownerState:k})=>U({},k.maxWidth==="xs"&&{[g.breakpoints.up("xs")]:{maxWidth:Math.max(g.breakpoints.values.xs,444)}},k.maxWidth&&k.maxWidth!=="xs"&&{[g.breakpoints.up(k.maxWidth)]:{maxWidth:`${g.breakpoints.values[k.maxWidth]}${g.breakpoints.unit}`}}));return z.forwardRef(function(k,m){const C=a(k),{className:A,component:_="div",disableGutters:y=!1,fixed:E=!1,maxWidth:S="lg"}=C,D=ve(C,Y$),R=U({},C,{component:_,disableGutters:y,fixed:E,maxWidth:S}),I=X$(R,c);return V.jsx(u,U({as:_,ownerState:R,className:De(I.root,A),ref:m},D))})}const tU=["component","direction","spacing","divider","children","className","useFlexGap"],nU=Ru(),oU=QM("div",{name:"MuiStack",slot:"Root",overridesResolver:(n,o)=>o.root});function rU(n){return Qv({props:n,name:"MuiStack",defaultTheme:nU})}function iU(n,o){const a=z.Children.toArray(n).filter(Boolean);return a.reduce((c,u,p)=>(c.push(u),p<a.length-1&&c.push(z.cloneElement(o,{key:`separator-${p}`})),c),[])}const sU=n=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[n],aU=({ownerState:n,theme:o})=>{let a=U({display:"flex",flexDirection:"column"},wr({theme:o},a0({values:n.direction,breakpoints:o.breakpoints.values}),c=>({flexDirection:c})));if(n.spacing){const c=qv(o),u=Object.keys(o.breakpoints.values).reduce((m,C)=>((typeof n.spacing=="object"&&n.spacing[C]!=null||typeof n.direction=="object"&&n.direction[C]!=null)&&(m[C]=!0),m),{}),p=a0({values:n.direction,base:u}),g=a0({values:n.spacing,base:u});typeof p=="object"&&Object.keys(p).forEach((m,C,A)=>{if(!p[m]){const y=C>0?p[A[C-1]]:"column";p[m]=y}}),a=fo(a,wr({theme:o},g,(m,C)=>n.useFlexGap?{gap:Ea(c,m)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${sU(C?p[C]:n.direction)}`]:Ea(c,m)}}))}return a=OV(o.breakpoints,a),a};function lU(n={}){const{createStyledComponent:o=oU,useThemeProps:a=rU,componentName:c="MuiStack"}=n,u=()=>Qe({root:["root"]},m=>Ge(c,m),{}),p=o(aU);return z.forwardRef(function(m,C){const A=a(m),_=Yv(A),{component:y="div",direction:E="column",spacing:S=0,divider:D,children:R,className:I,useFlexGap:P=!1}=_,B=ve(_,tU),L={direction:E,spacing:S,useFlexGap:P},M=u();return V.jsx(p,U({as:y,ownerState:L,ref:C,className:De(M.root,I)},B,{children:D?iU(R,D):R}))})}function cU(n,o){return U({toolbar:{minHeight:56,[n.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[n.up("sm")]:{minHeight:64}}},o)}const dU=["mode","contrastThreshold","tonalOffset"],W5={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ku.white,default:ku.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},l0={text:{primary:ku.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ku.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function G5(n,o,a,c){const u=c.light||c,p=c.dark||c*1.5;n[o]||(n.hasOwnProperty(a)?n[o]=n[a]:o==="light"?n.light=XM(n.main,u):o==="dark"&&(n.dark=JM(n.main,p)))}function uU(n="light"){return n==="dark"?{main:Tl[200],light:Tl[50],dark:Tl[400]}:{main:Tl[700],light:Tl[400],dark:Tl[800]}}function hU(n="light"){return n==="dark"?{main:Dl[200],light:Dl[50],dark:Dl[400]}:{main:Dl[500],light:Dl[300],dark:Dl[700]}}function pU(n="light"){return n==="dark"?{main:Xi[500],light:Xi[300],dark:Xi[700]}:{main:Xi[700],light:Xi[400],dark:Xi[800]}}function fU(n="light"){return n==="dark"?{main:Il[400],light:Il[300],dark:Il[700]}:{main:Il[700],light:Il[500],dark:Il[900]}}function gU(n="light"){return n==="dark"?{main:zr[400],light:zr[300],dark:zr[700]}:{main:zr[800],light:zr[500],dark:zr[900]}}function mU(n="light"){return n==="dark"?{main:wd[400],light:wd[300],dark:wd[700]}:{main:"#ed6c02",light:wd[500],dark:wd[900]}}function bU(n){const{mode:o="light",contrastThreshold:a=3,tonalOffset:c=.2}=n,u=ve(n,dU),p=n.primary||uU(o),g=n.secondary||hU(o),k=n.error||pU(o),m=n.info||fU(o),C=n.success||gU(o),A=n.warning||mU(o);function _(D){return $$(D,l0.text.primary)>=a?l0.text.primary:W5.text.primary}const y=({color:D,name:R,mainShade:I=500,lightShade:P=300,darkShade:B=700})=>{if(D=U({},D),!D.main&&D[I]&&(D.main=D[I]),!D.hasOwnProperty("main"))throw new Error(bs(11,R?` (${R})`:"",I));if(typeof D.main!="string")throw new Error(bs(12,R?` (${R})`:"",JSON.stringify(D.main)));return G5(D,"light",P,c),G5(D,"dark",B,c),D.contrastText||(D.contrastText=_(D.main)),D},E={dark:l0,light:W5};return fo(U({common:U({},ku),mode:o,primary:y({color:p,name:"primary"}),secondary:y({color:g,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:y({color:k,name:"error"}),warning:y({color:A,name:"warning"}),info:y({color:m,name:"info"}),success:y({color:C,name:"success"}),grey:m8,contrastThreshold:a,getContrastText:_,augmentColor:y,tonalOffset:c},E[o]),u)}const kU=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function wU(n){return Math.round(n*1e5)/1e5}const q5={textTransform:"uppercase"},K5='"Roboto", "Helvetica", "Arial", sans-serif';function vU(n,o){const a=typeof o=="function"?o(n):o,{fontFamily:c=K5,fontSize:u=14,fontWeightLight:p=300,fontWeightRegular:g=400,fontWeightMedium:k=500,fontWeightBold:m=700,htmlFontSize:C=16,allVariants:A,pxToRem:_}=a,y=ve(a,kU),E=u/14,S=_||(I=>`${I/C*E}rem`),D=(I,P,B,L,M)=>U({fontFamily:c,fontWeight:I,fontSize:S(P),lineHeight:B},c===K5?{letterSpacing:`${wU(L/P)}em`}:{},M,A),R={h1:D(p,96,1.167,-1.5),h2:D(p,60,1.2,-.5),h3:D(g,48,1.167,0),h4:D(g,34,1.235,.25),h5:D(g,24,1.334,0),h6:D(k,20,1.6,.15),subtitle1:D(g,16,1.75,.15),subtitle2:D(k,14,1.57,.1),body1:D(g,16,1.5,.15),body2:D(g,14,1.43,.15),button:D(k,14,1.75,.4,q5),caption:D(g,12,1.66,.4),overline:D(g,12,2.66,1,q5),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return fo(U({htmlFontSize:C,pxToRem:S,fontFamily:c,fontSize:u,fontWeightLight:p,fontWeightRegular:g,fontWeightMedium:k,fontWeightBold:m},R),y,{clone:!1})}const CU=.2,yU=.14,AU=.12;function Ht(...n){return[`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${CU})`,`${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${yU})`,`${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${AU})`].join(",")}const _U=["none",Ht(0,2,1,-1,0,1,1,0,0,1,3,0),Ht(0,3,1,-2,0,2,2,0,0,1,5,0),Ht(0,3,3,-2,0,3,4,0,0,1,8,0),Ht(0,2,4,-1,0,4,5,0,0,1,10,0),Ht(0,3,5,-1,0,5,8,0,0,1,14,0),Ht(0,3,5,-1,0,6,10,0,0,1,18,0),Ht(0,4,5,-2,0,7,10,1,0,2,16,1),Ht(0,5,5,-3,0,8,10,1,0,3,14,2),Ht(0,5,6,-3,0,9,12,1,0,3,16,2),Ht(0,6,6,-3,0,10,14,1,0,4,18,3),Ht(0,6,7,-4,0,11,15,1,0,4,20,3),Ht(0,7,8,-4,0,12,17,2,0,5,22,4),Ht(0,7,8,-4,0,13,19,2,0,5,24,4),Ht(0,7,9,-4,0,14,21,2,0,5,26,4),Ht(0,8,9,-5,0,15,22,2,0,6,28,5),Ht(0,8,10,-5,0,16,24,2,0,6,30,5),Ht(0,8,11,-5,0,17,26,2,0,6,32,5),Ht(0,9,11,-5,0,18,28,2,0,7,34,6),Ht(0,9,12,-6,0,19,29,2,0,7,36,6),Ht(0,10,13,-6,0,20,31,3,0,8,38,7),Ht(0,10,13,-6,0,21,33,3,0,8,40,7),Ht(0,10,14,-6,0,22,35,3,0,8,42,7),Ht(0,11,14,-7,0,23,36,3,0,9,44,8),Ht(0,11,15,-7,0,24,38,3,0,9,46,8)],xU=_U,EU=["duration","easing","delay"],SU={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},DU={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Y5(n){return`${Math.round(n)}ms`}function TU(n){if(!n)return 0;const o=n/36;return Math.round((4+15*o**.25+o/5)*10)}function IU(n){const o=U({},SU,n.easing),a=U({},DU,n.duration);return U({getAutoHeightDuration:TU,create:(u=["all"],p={})=>{const{duration:g=a.standard,easing:k=o.easeInOut,delay:m=0}=p;return ve(p,EU),(Array.isArray(u)?u:[u]).map(C=>`${C} ${typeof g=="string"?g:Y5(g)} ${k} ${typeof m=="string"?m:Y5(m)}`).join(",")}},n,{easing:o,duration:a})}const MU={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},PU=MU,NU=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Of(n={},...o){const{mixins:a={},palette:c={},transitions:u={},typography:p={}}=n,g=ve(n,NU);if(n.vars)throw new Error(bs(18));const k=bU(c),m=Ru(n);let C=fo(m,{mixins:cU(m.breakpoints,a),palette:k,shadows:xU.slice(),typography:vU(k,p),transitions:IU(u),zIndex:U({},PU)});return C=fo(C,g),C=o.reduce((A,_)=>fo(A,_),C),C.unstable_sxConfig=U({},Ig,g==null?void 0:g.unstable_sxConfig),C.unstable_sx=function(_){return Mg({sx:_,theme:this})},C}const BU=Of(),Rg=BU;function As(){const n=Ng(Rg);return n[xa]||n}function Ke({props:n,name:o}){return Qv({props:n,name:o,defaultTheme:Rg,themeId:xa})}const vr=n=>qd(n)&&n!=="classes",RU=qd,OU=YM({themeId:xa,defaultTheme:Rg,rootShouldForwardProp:vr}),fe=OU,zU=["theme"];function LU(n){let{theme:o}=n,a=ve(n,zU);const c=o[xa];return V.jsx(K$,U({},a,{themeId:c?xa:void 0,theme:c||o}))}const jU=n=>{let o;return n<1?o=5.11916*n**2:o=4.5*Math.log(n+1)+2,(o/100).toFixed(2)},Q5=jU;function yu(n){return typeof n=="string"}function Rd(n,o,a){return n===void 0||yu(n)?o:U({},o,{ownerState:U({},o.ownerState,a)})}const FU={disableDefaultClasses:!1},VU=z.createContext(FU);function o4(n){const{disableDefaultClasses:o}=z.useContext(VU);return a=>o?"":n(a)}function r4(n,o=[]){if(n===void 0)return{};const a={};return Object.keys(n).filter(c=>c.match(/^on[A-Z]/)&&typeof n[c]=="function"&&!o.includes(c)).forEach(c=>{a[c]=n[c]}),a}function yw(n,o){return typeof n=="function"?n(o):n}function Z5(n){if(n===void 0)return{};const o={};return Object.keys(n).filter(a=>!(a.match(/^on[A-Z]/)&&typeof n[a]=="function")).forEach(a=>{o[a]=n[a]}),o}function $U(n){const{getSlotProps:o,additionalProps:a,externalSlotProps:c,externalForwardedProps:u,className:p}=n;if(!o){const E=De(u==null?void 0:u.className,c==null?void 0:c.className,p,a==null?void 0:a.className),S=U({},a==null?void 0:a.style,u==null?void 0:u.style,c==null?void 0:c.style),D=U({},a,u,c);return E.length>0&&(D.className=E),Object.keys(S).length>0&&(D.style=S),{props:D,internalRef:void 0}}const g=r4(U({},u,c)),k=Z5(c),m=Z5(u),C=o(g),A=De(C==null?void 0:C.className,a==null?void 0:a.className,p,u==null?void 0:u.className,c==null?void 0:c.className),_=U({},C==null?void 0:C.style,a==null?void 0:a.style,u==null?void 0:u.style,c==null?void 0:c.style),y=U({},C,a,m,k);return A.length>0&&(y.className=A),Object.keys(_).length>0&&(y.style=_),{props:y,internalRef:C.ref}}const UU=["elementType","externalSlotProps","ownerState"];function lc(n){var o;const{elementType:a,externalSlotProps:c,ownerState:u}=n,p=ve(n,UU),g=yw(c,u),{props:k,internalRef:m}=$U(U({},p,{externalSlotProps:g})),C=dn(m,g==null?void 0:g.ref,(o=n.additionalProps)==null?void 0:o.ref);return Rd(a,U({},k,{ref:C}),u)}function J5(n){return n.substring(2).toLowerCase()}function HU(n,o){return o.documentElement.clientWidth<n.clientX||o.documentElement.clientHeight<n.clientY}function WU(n){const{children:o,disableReactTree:a=!1,mouseEvent:c="onClick",onClickAway:u,touchEvent:p="onTouchEnd"}=n,g=z.useRef(!1),k=z.useRef(null),m=z.useRef(!1),C=z.useRef(!1);z.useEffect(()=>(setTimeout(()=>{m.current=!0},0),()=>{m.current=!1}),[]);const A=dn(o.ref,k),_=Ur(S=>{const D=C.current;C.current=!1;const R=Mn(k.current);if(!m.current||!k.current||"clientX"in S&&HU(S,R))return;if(g.current){g.current=!1;return}let I;S.composedPath?I=S.composedPath().indexOf(k.current)>-1:I=!R.documentElement.contains(S.target)||k.current.contains(S.target),!I&&(a||!D)&&u(S)}),y=S=>D=>{C.current=!0;const R=o.props[S];R&&R(D)},E={ref:A};return p!==!1&&(E[p]=y(p)),z.useEffect(()=>{if(p!==!1){const S=J5(p),D=Mn(k.current),R=()=>{g.current=!0};return D.addEventListener(S,_),D.addEventListener("touchmove",R),()=>{D.removeEventListener(S,_),D.removeEventListener("touchmove",R)}}},[_,p]),c!==!1&&(E[c]=y(c)),z.useEffect(()=>{if(c!==!1){const S=J5(c),D=Mn(k.current);return D.addEventListener(S,_),()=>{D.removeEventListener(S,_)}}},[_,c]),V.jsx(z.Fragment,{children:z.cloneElement(o,E)})}const GU=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function qU(n){const o=parseInt(n.getAttribute("tabindex")||"",10);return Number.isNaN(o)?n.contentEditable==="true"||(n.nodeName==="AUDIO"||n.nodeName==="VIDEO"||n.nodeName==="DETAILS")&&n.getAttribute("tabindex")===null?0:n.tabIndex:o}function KU(n){if(n.tagName!=="INPUT"||n.type!=="radio"||!n.name)return!1;const o=c=>n.ownerDocument.querySelector(`input[type="radio"]${c}`);let a=o(`[name="${n.name}"]:checked`);return a||(a=o(`[name="${n.name}"]`)),a!==n}function YU(n){return!(n.disabled||n.tagName==="INPUT"&&n.type==="hidden"||KU(n))}function QU(n){const o=[],a=[];return Array.from(n.querySelectorAll(GU)).forEach((c,u)=>{const p=qU(c);p===-1||!YU(c)||(p===0?o.push(c):a.push({documentOrder:u,tabIndex:p,node:c}))}),a.sort((c,u)=>c.tabIndex===u.tabIndex?c.documentOrder-u.documentOrder:c.tabIndex-u.tabIndex).map(c=>c.node).concat(o)}function ZU(){return!0}function JU(n){const{children:o,disableAutoFocus:a=!1,disableEnforceFocus:c=!1,disableRestoreFocus:u=!1,getTabbable:p=QU,isEnabled:g=ZU,open:k}=n,m=z.useRef(!1),C=z.useRef(null),A=z.useRef(null),_=z.useRef(null),y=z.useRef(null),E=z.useRef(!1),S=z.useRef(null),D=dn(o.ref,S),R=z.useRef(null);z.useEffect(()=>{!k||!S.current||(E.current=!a)},[a,k]),z.useEffect(()=>{if(!k||!S.current)return;const B=Mn(S.current);return S.current.contains(B.activeElement)||(S.current.hasAttribute("tabIndex")||S.current.setAttribute("tabIndex","-1"),E.current&&S.current.focus()),()=>{u||(_.current&&_.current.focus&&(m.current=!0,_.current.focus()),_.current=null)}},[k]),z.useEffect(()=>{if(!k||!S.current)return;const B=Mn(S.current),L=H=>{const{current:K}=S;if(K!==null){if(!B.hasFocus()||c||!g()||m.current){m.current=!1;return}if(!K.contains(B.activeElement)){if(H&&y.current!==H.target||B.activeElement!==y.current)y.current=null;else if(y.current!==null)return;if(!E.current)return;let ee=[];if((B.activeElement===C.current||B.activeElement===A.current)&&(ee=p(S.current)),ee.length>0){var Z,Y;const ce=!!((Z=R.current)!=null&&Z.shiftKey&&((Y=R.current)==null?void 0:Y.key)==="Tab"),ie=ee[0],te=ee[ee.length-1];typeof ie!="string"&&typeof te!="string"&&(ce?te.focus():ie.focus())}else K.focus()}}},M=H=>{R.current=H,!(c||!g()||H.key!=="Tab")&&B.activeElement===S.current&&H.shiftKey&&(m.current=!0,A.current&&A.current.focus())};B.addEventListener("focusin",L),B.addEventListener("keydown",M,!0);const W=setInterval(()=>{B.activeElement&&B.activeElement.tagName==="BODY"&&L(null)},50);return()=>{clearInterval(W),B.removeEventListener("focusin",L),B.removeEventListener("keydown",M,!0)}},[a,c,u,g,k,p]);const I=B=>{_.current===null&&(_.current=B.relatedTarget),E.current=!0,y.current=B.target;const L=o.props.onFocus;L&&L(B)},P=B=>{_.current===null&&(_.current=B.relatedTarget),E.current=!0};return V.jsxs(z.Fragment,{children:[V.jsx("div",{tabIndex:k?0:-1,onFocus:P,ref:C,"data-testid":"sentinelStart"}),z.cloneElement(o,{ref:D,onFocus:I}),V.jsx("div",{tabIndex:k?0:-1,onFocus:P,ref:A,"data-testid":"sentinelEnd"})]})}var go="top",Jo="bottom",Xo="right",mo="left",Jv="auto",Ou=[go,Jo,Xo,mo],cc="start",Au="end",XU="clippingParents",i4="viewport",yd="popper",eH="reference",X5=Ou.reduce(function(n,o){return n.concat([o+"-"+cc,o+"-"+Au])},[]),s4=[].concat(Ou,[Jv]).reduce(function(n,o){return n.concat([o,o+"-"+cc,o+"-"+Au])},[]),tH="beforeRead",nH="read",oH="afterRead",rH="beforeMain",iH="main",sH="afterMain",aH="beforeWrite",lH="write",cH="afterWrite",dH=[tH,nH,oH,rH,iH,sH,aH,lH,cH];function Qr(n){return n?(n.nodeName||"").toLowerCase():null}function No(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var o=n.ownerDocument;return o&&o.defaultView||window}return n}function Da(n){var o=No(n).Element;return n instanceof o||n instanceof Element}function Ko(n){var o=No(n).HTMLElement;return n instanceof o||n instanceof HTMLElement}function Xv(n){if(typeof ShadowRoot>"u")return!1;var o=No(n).ShadowRoot;return n instanceof o||n instanceof ShadowRoot}function uH(n){var o=n.state;Object.keys(o.elements).forEach(function(a){var c=o.styles[a]||{},u=o.attributes[a]||{},p=o.elements[a];!Ko(p)||!Qr(p)||(Object.assign(p.style,c),Object.keys(u).forEach(function(g){var k=u[g];k===!1?p.removeAttribute(g):p.setAttribute(g,k===!0?"":k)}))})}function hH(n){var o=n.state,a={popper:{position:o.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(o.elements.popper.style,a.popper),o.styles=a,o.elements.arrow&&Object.assign(o.elements.arrow.style,a.arrow),function(){Object.keys(o.elements).forEach(function(c){var u=o.elements[c],p=o.attributes[c]||{},g=Object.keys(o.styles.hasOwnProperty(c)?o.styles[c]:a[c]),k=g.reduce(function(m,C){return m[C]="",m},{});!Ko(u)||!Qr(u)||(Object.assign(u.style,k),Object.keys(p).forEach(function(m){u.removeAttribute(m)}))})}}const pH={name:"applyStyles",enabled:!0,phase:"write",fn:uH,effect:hH,requires:["computeStyles"]};function Kr(n){return n.split("-")[0]}var ka=Math.max,zf=Math.min,dc=Math.round;function Aw(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(o){return o.brand+"/"+o.version}).join(" "):navigator.userAgent}function a4(){return!/^((?!chrome|android).)*safari/i.test(Aw())}function uc(n,o,a){o===void 0&&(o=!1),a===void 0&&(a=!1);var c=n.getBoundingClientRect(),u=1,p=1;o&&Ko(n)&&(u=n.offsetWidth>0&&dc(c.width)/n.offsetWidth||1,p=n.offsetHeight>0&&dc(c.height)/n.offsetHeight||1);var g=Da(n)?No(n):window,k=g.visualViewport,m=!a4()&&a,C=(c.left+(m&&k?k.offsetLeft:0))/u,A=(c.top+(m&&k?k.offsetTop:0))/p,_=c.width/u,y=c.height/p;return{width:_,height:y,top:A,right:C+_,bottom:A+y,left:C,x:C,y:A}}function eC(n){var o=uc(n),a=n.offsetWidth,c=n.offsetHeight;return Math.abs(o.width-a)<=1&&(a=o.width),Math.abs(o.height-c)<=1&&(c=o.height),{x:n.offsetLeft,y:n.offsetTop,width:a,height:c}}function l4(n,o){var a=o.getRootNode&&o.getRootNode();if(n.contains(o))return!0;if(a&&Xv(a)){var c=o;do{if(c&&n.isSameNode(c))return!0;c=c.parentNode||c.host}while(c)}return!1}function _i(n){return No(n).getComputedStyle(n)}function fH(n){return["table","td","th"].indexOf(Qr(n))>=0}function _s(n){return((Da(n)?n.ownerDocument:n.document)||window.document).documentElement}function Og(n){return Qr(n)==="html"?n:n.assignedSlot||n.parentNode||(Xv(n)?n.host:null)||_s(n)}function eD(n){return!Ko(n)||_i(n).position==="fixed"?null:n.offsetParent}function gH(n){var o=/firefox/i.test(Aw()),a=/Trident/i.test(Aw());if(a&&Ko(n)){var c=_i(n);if(c.position==="fixed")return null}var u=Og(n);for(Xv(u)&&(u=u.host);Ko(u)&&["html","body"].indexOf(Qr(u))<0;){var p=_i(u);if(p.transform!=="none"||p.perspective!=="none"||p.contain==="paint"||["transform","perspective"].indexOf(p.willChange)!==-1||o&&p.willChange==="filter"||o&&p.filter&&p.filter!=="none")return u;u=u.parentNode}return null}function zu(n){for(var o=No(n),a=eD(n);a&&fH(a)&&_i(a).position==="static";)a=eD(a);return a&&(Qr(a)==="html"||Qr(a)==="body"&&_i(a).position==="static")?o:a||gH(n)||o}function tC(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Kd(n,o,a){return ka(n,zf(o,a))}function mH(n,o,a){var c=Kd(n,o,a);return c>a?a:c}function c4(){return{top:0,right:0,bottom:0,left:0}}function d4(n){return Object.assign({},c4(),n)}function u4(n,o){return o.reduce(function(a,c){return a[c]=n,a},{})}var bH=function(o,a){return o=typeof o=="function"?o(Object.assign({},a.rects,{placement:a.placement})):o,d4(typeof o!="number"?o:u4(o,Ou))};function kH(n){var o,a=n.state,c=n.name,u=n.options,p=a.elements.arrow,g=a.modifiersData.popperOffsets,k=Kr(a.placement),m=tC(k),C=[mo,Xo].indexOf(k)>=0,A=C?"height":"width";if(!(!p||!g)){var _=bH(u.padding,a),y=eC(p),E=m==="y"?go:mo,S=m==="y"?Jo:Xo,D=a.rects.reference[A]+a.rects.reference[m]-g[m]-a.rects.popper[A],R=g[m]-a.rects.reference[m],I=zu(p),P=I?m==="y"?I.clientHeight||0:I.clientWidth||0:0,B=D/2-R/2,L=_[E],M=P-y[A]-_[S],W=P/2-y[A]/2+B,H=Kd(L,W,M),K=m;a.modifiersData[c]=(o={},o[K]=H,o.centerOffset=H-W,o)}}function wH(n){var o=n.state,a=n.options,c=a.element,u=c===void 0?"[data-popper-arrow]":c;u!=null&&(typeof u=="string"&&(u=o.elements.popper.querySelector(u),!u)||l4(o.elements.popper,u)&&(o.elements.arrow=u))}const vH={name:"arrow",enabled:!0,phase:"main",fn:kH,effect:wH,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function hc(n){return n.split("-")[1]}var CH={top:"auto",right:"auto",bottom:"auto",left:"auto"};function yH(n,o){var a=n.x,c=n.y,u=o.devicePixelRatio||1;return{x:dc(a*u)/u||0,y:dc(c*u)/u||0}}function tD(n){var o,a=n.popper,c=n.popperRect,u=n.placement,p=n.variation,g=n.offsets,k=n.position,m=n.gpuAcceleration,C=n.adaptive,A=n.roundOffsets,_=n.isFixed,y=g.x,E=y===void 0?0:y,S=g.y,D=S===void 0?0:S,R=typeof A=="function"?A({x:E,y:D}):{x:E,y:D};E=R.x,D=R.y;var I=g.hasOwnProperty("x"),P=g.hasOwnProperty("y"),B=mo,L=go,M=window;if(C){var W=zu(a),H="clientHeight",K="clientWidth";if(W===No(a)&&(W=_s(a),_i(W).position!=="static"&&k==="absolute"&&(H="scrollHeight",K="scrollWidth")),W=W,u===go||(u===mo||u===Xo)&&p===Au){L=Jo;var Z=_&&W===M&&M.visualViewport?M.visualViewport.height:W[H];D-=Z-c.height,D*=m?1:-1}if(u===mo||(u===go||u===Jo)&&p===Au){B=Xo;var Y=_&&W===M&&M.visualViewport?M.visualViewport.width:W[K];E-=Y-c.width,E*=m?1:-1}}var ee=Object.assign({position:k},C&&CH),ce=A===!0?yH({x:E,y:D},No(a)):{x:E,y:D};if(E=ce.x,D=ce.y,m){var ie;return Object.assign({},ee,(ie={},ie[L]=P?"0":"",ie[B]=I?"0":"",ie.transform=(M.devicePixelRatio||1)<=1?"translate("+E+"px, "+D+"px)":"translate3d("+E+"px, "+D+"px, 0)",ie))}return Object.assign({},ee,(o={},o[L]=P?D+"px":"",o[B]=I?E+"px":"",o.transform="",o))}function AH(n){var o=n.state,a=n.options,c=a.gpuAcceleration,u=c===void 0?!0:c,p=a.adaptive,g=p===void 0?!0:p,k=a.roundOffsets,m=k===void 0?!0:k,C={placement:Kr(o.placement),variation:hc(o.placement),popper:o.elements.popper,popperRect:o.rects.popper,gpuAcceleration:u,isFixed:o.options.strategy==="fixed"};o.modifiersData.popperOffsets!=null&&(o.styles.popper=Object.assign({},o.styles.popper,tD(Object.assign({},C,{offsets:o.modifiersData.popperOffsets,position:o.options.strategy,adaptive:g,roundOffsets:m})))),o.modifiersData.arrow!=null&&(o.styles.arrow=Object.assign({},o.styles.arrow,tD(Object.assign({},C,{offsets:o.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:m})))),o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-placement":o.placement})}const _H={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:AH,data:{}};var Pp={passive:!0};function xH(n){var o=n.state,a=n.instance,c=n.options,u=c.scroll,p=u===void 0?!0:u,g=c.resize,k=g===void 0?!0:g,m=No(o.elements.popper),C=[].concat(o.scrollParents.reference,o.scrollParents.popper);return p&&C.forEach(function(A){A.addEventListener("scroll",a.update,Pp)}),k&&m.addEventListener("resize",a.update,Pp),function(){p&&C.forEach(function(A){A.removeEventListener("scroll",a.update,Pp)}),k&&m.removeEventListener("resize",a.update,Pp)}}const EH={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:xH,data:{}};var SH={left:"right",right:"left",bottom:"top",top:"bottom"};function nf(n){return n.replace(/left|right|bottom|top/g,function(o){return SH[o]})}var DH={start:"end",end:"start"};function nD(n){return n.replace(/start|end/g,function(o){return DH[o]})}function nC(n){var o=No(n),a=o.pageXOffset,c=o.pageYOffset;return{scrollLeft:a,scrollTop:c}}function oC(n){return uc(_s(n)).left+nC(n).scrollLeft}function TH(n,o){var a=No(n),c=_s(n),u=a.visualViewport,p=c.clientWidth,g=c.clientHeight,k=0,m=0;if(u){p=u.width,g=u.height;var C=a4();(C||!C&&o==="fixed")&&(k=u.offsetLeft,m=u.offsetTop)}return{width:p,height:g,x:k+oC(n),y:m}}function IH(n){var o,a=_s(n),c=nC(n),u=(o=n.ownerDocument)==null?void 0:o.body,p=ka(a.scrollWidth,a.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),g=ka(a.scrollHeight,a.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0),k=-c.scrollLeft+oC(n),m=-c.scrollTop;return _i(u||a).direction==="rtl"&&(k+=ka(a.clientWidth,u?u.clientWidth:0)-p),{width:p,height:g,x:k,y:m}}function rC(n){var o=_i(n),a=o.overflow,c=o.overflowX,u=o.overflowY;return/auto|scroll|overlay|hidden/.test(a+u+c)}function h4(n){return["html","body","#document"].indexOf(Qr(n))>=0?n.ownerDocument.body:Ko(n)&&rC(n)?n:h4(Og(n))}function Yd(n,o){var a;o===void 0&&(o=[]);var c=h4(n),u=c===((a=n.ownerDocument)==null?void 0:a.body),p=No(c),g=u?[p].concat(p.visualViewport||[],rC(c)?c:[]):c,k=o.concat(g);return u?k:k.concat(Yd(Og(g)))}function _w(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function MH(n,o){var a=uc(n,!1,o==="fixed");return a.top=a.top+n.clientTop,a.left=a.left+n.clientLeft,a.bottom=a.top+n.clientHeight,a.right=a.left+n.clientWidth,a.width=n.clientWidth,a.height=n.clientHeight,a.x=a.left,a.y=a.top,a}function oD(n,o,a){return o===i4?_w(TH(n,a)):Da(o)?MH(o,a):_w(IH(_s(n)))}function PH(n){var o=Yd(Og(n)),a=["absolute","fixed"].indexOf(_i(n).position)>=0,c=a&&Ko(n)?zu(n):n;return Da(c)?o.filter(function(u){return Da(u)&&l4(u,c)&&Qr(u)!=="body"}):[]}function NH(n,o,a,c){var u=o==="clippingParents"?PH(n):[].concat(o),p=[].concat(u,[a]),g=p[0],k=p.reduce(function(m,C){var A=oD(n,C,c);return m.top=ka(A.top,m.top),m.right=zf(A.right,m.right),m.bottom=zf(A.bottom,m.bottom),m.left=ka(A.left,m.left),m},oD(n,g,c));return k.width=k.right-k.left,k.height=k.bottom-k.top,k.x=k.left,k.y=k.top,k}function p4(n){var o=n.reference,a=n.element,c=n.placement,u=c?Kr(c):null,p=c?hc(c):null,g=o.x+o.width/2-a.width/2,k=o.y+o.height/2-a.height/2,m;switch(u){case go:m={x:g,y:o.y-a.height};break;case Jo:m={x:g,y:o.y+o.height};break;case Xo:m={x:o.x+o.width,y:k};break;case mo:m={x:o.x-a.width,y:k};break;default:m={x:o.x,y:o.y}}var C=u?tC(u):null;if(C!=null){var A=C==="y"?"height":"width";switch(p){case cc:m[C]=m[C]-(o[A]/2-a[A]/2);break;case Au:m[C]=m[C]+(o[A]/2-a[A]/2);break}}return m}function _u(n,o){o===void 0&&(o={});var a=o,c=a.placement,u=c===void 0?n.placement:c,p=a.strategy,g=p===void 0?n.strategy:p,k=a.boundary,m=k===void 0?XU:k,C=a.rootBoundary,A=C===void 0?i4:C,_=a.elementContext,y=_===void 0?yd:_,E=a.altBoundary,S=E===void 0?!1:E,D=a.padding,R=D===void 0?0:D,I=d4(typeof R!="number"?R:u4(R,Ou)),P=y===yd?eH:yd,B=n.rects.popper,L=n.elements[S?P:y],M=NH(Da(L)?L:L.contextElement||_s(n.elements.popper),m,A,g),W=uc(n.elements.reference),H=p4({reference:W,element:B,strategy:"absolute",placement:u}),K=_w(Object.assign({},B,H)),Z=y===yd?K:W,Y={top:M.top-Z.top+I.top,bottom:Z.bottom-M.bottom+I.bottom,left:M.left-Z.left+I.left,right:Z.right-M.right+I.right},ee=n.modifiersData.offset;if(y===yd&&ee){var ce=ee[u];Object.keys(Y).forEach(function(ie){var te=[Xo,Jo].indexOf(ie)>=0?1:-1,oe=[go,Jo].indexOf(ie)>=0?"y":"x";Y[ie]+=ce[oe]*te})}return Y}function BH(n,o){o===void 0&&(o={});var a=o,c=a.placement,u=a.boundary,p=a.rootBoundary,g=a.padding,k=a.flipVariations,m=a.allowedAutoPlacements,C=m===void 0?s4:m,A=hc(c),_=A?k?X5:X5.filter(function(S){return hc(S)===A}):Ou,y=_.filter(function(S){return C.indexOf(S)>=0});y.length===0&&(y=_);var E=y.reduce(function(S,D){return S[D]=_u(n,{placement:D,boundary:u,rootBoundary:p,padding:g})[Kr(D)],S},{});return Object.keys(E).sort(function(S,D){return E[S]-E[D]})}function RH(n){if(Kr(n)===Jv)return[];var o=nf(n);return[nD(n),o,nD(o)]}function OH(n){var o=n.state,a=n.options,c=n.name;if(!o.modifiersData[c]._skip){for(var u=a.mainAxis,p=u===void 0?!0:u,g=a.altAxis,k=g===void 0?!0:g,m=a.fallbackPlacements,C=a.padding,A=a.boundary,_=a.rootBoundary,y=a.altBoundary,E=a.flipVariations,S=E===void 0?!0:E,D=a.allowedAutoPlacements,R=o.options.placement,I=Kr(R),P=I===R,B=m||(P||!S?[nf(R)]:RH(R)),L=[R].concat(B).reduce(function(Ne,we){return Ne.concat(Kr(we)===Jv?BH(o,{placement:we,boundary:A,rootBoundary:_,padding:C,flipVariations:S,allowedAutoPlacements:D}):we)},[]),M=o.rects.reference,W=o.rects.popper,H=new Map,K=!0,Z=L[0],Y=0;Y<L.length;Y++){var ee=L[Y],ce=Kr(ee),ie=hc(ee)===cc,te=[go,Jo].indexOf(ce)>=0,oe=te?"width":"height",de=_u(o,{placement:ee,boundary:A,rootBoundary:_,altBoundary:y,padding:C}),re=te?ie?Xo:mo:ie?Jo:go;M[oe]>W[oe]&&(re=nf(re));var se=nf(re),he=[];if(p&&he.push(de[ce]<=0),k&&he.push(de[re]<=0,de[se]<=0),he.every(function(Ne){return Ne})){Z=ee,K=!1;break}H.set(ee,he)}if(K)for(var me=S?3:1,Te=function(we){var Pe=L.find(function(Ze){var Ce=H.get(Ze);if(Ce)return Ce.slice(0,we).every(function(Me){return Me})});if(Pe)return Z=Pe,"break"},Ie=me;Ie>0;Ie--){var He=Te(Ie);if(He==="break")break}o.placement!==Z&&(o.modifiersData[c]._skip=!0,o.placement=Z,o.reset=!0)}}const zH={name:"flip",enabled:!0,phase:"main",fn:OH,requiresIfExists:["offset"],data:{_skip:!1}};function rD(n,o,a){return a===void 0&&(a={x:0,y:0}),{top:n.top-o.height-a.y,right:n.right-o.width+a.x,bottom:n.bottom-o.height+a.y,left:n.left-o.width-a.x}}function iD(n){return[go,Xo,Jo,mo].some(function(o){return n[o]>=0})}function LH(n){var o=n.state,a=n.name,c=o.rects.reference,u=o.rects.popper,p=o.modifiersData.preventOverflow,g=_u(o,{elementContext:"reference"}),k=_u(o,{altBoundary:!0}),m=rD(g,c),C=rD(k,u,p),A=iD(m),_=iD(C);o.modifiersData[a]={referenceClippingOffsets:m,popperEscapeOffsets:C,isReferenceHidden:A,hasPopperEscaped:_},o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-reference-hidden":A,"data-popper-escaped":_})}const jH={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:LH};function FH(n,o,a){var c=Kr(n),u=[mo,go].indexOf(c)>=0?-1:1,p=typeof a=="function"?a(Object.assign({},o,{placement:n})):a,g=p[0],k=p[1];return g=g||0,k=(k||0)*u,[mo,Xo].indexOf(c)>=0?{x:k,y:g}:{x:g,y:k}}function VH(n){var o=n.state,a=n.options,c=n.name,u=a.offset,p=u===void 0?[0,0]:u,g=s4.reduce(function(A,_){return A[_]=FH(_,o.rects,p),A},{}),k=g[o.placement],m=k.x,C=k.y;o.modifiersData.popperOffsets!=null&&(o.modifiersData.popperOffsets.x+=m,o.modifiersData.popperOffsets.y+=C),o.modifiersData[c]=g}const $H={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:VH};function UH(n){var o=n.state,a=n.name;o.modifiersData[a]=p4({reference:o.rects.reference,element:o.rects.popper,strategy:"absolute",placement:o.placement})}const HH={name:"popperOffsets",enabled:!0,phase:"read",fn:UH,data:{}};function WH(n){return n==="x"?"y":"x"}function GH(n){var o=n.state,a=n.options,c=n.name,u=a.mainAxis,p=u===void 0?!0:u,g=a.altAxis,k=g===void 0?!1:g,m=a.boundary,C=a.rootBoundary,A=a.altBoundary,_=a.padding,y=a.tether,E=y===void 0?!0:y,S=a.tetherOffset,D=S===void 0?0:S,R=_u(o,{boundary:m,rootBoundary:C,padding:_,altBoundary:A}),I=Kr(o.placement),P=hc(o.placement),B=!P,L=tC(I),M=WH(L),W=o.modifiersData.popperOffsets,H=o.rects.reference,K=o.rects.popper,Z=typeof D=="function"?D(Object.assign({},o.rects,{placement:o.placement})):D,Y=typeof Z=="number"?{mainAxis:Z,altAxis:Z}:Object.assign({mainAxis:0,altAxis:0},Z),ee=o.modifiersData.offset?o.modifiersData.offset[o.placement]:null,ce={x:0,y:0};if(W){if(p){var ie,te=L==="y"?go:mo,oe=L==="y"?Jo:Xo,de=L==="y"?"height":"width",re=W[L],se=re+R[te],he=re-R[oe],me=E?-K[de]/2:0,Te=P===cc?H[de]:K[de],Ie=P===cc?-K[de]:-H[de],He=o.elements.arrow,Ne=E&&He?eC(He):{width:0,height:0},we=o.modifiersData["arrow#persistent"]?o.modifiersData["arrow#persistent"].padding:c4(),Pe=we[te],Ze=we[oe],Ce=Kd(0,H[de],Ne[de]),Me=B?H[de]/2-me-Ce-Pe-Y.mainAxis:Te-Ce-Pe-Y.mainAxis,tt=B?-H[de]/2+me+Ce+Ze+Y.mainAxis:Ie+Ce+Ze+Y.mainAxis,Be=o.elements.arrow&&zu(o.elements.arrow),ge=Be?L==="y"?Be.clientTop||0:Be.clientLeft||0:0,Ye=(ie=ee==null?void 0:ee[L])!=null?ie:0,it=re+Me-Ye-ge,Bt=re+tt-Ye,Vt=Kd(E?zf(se,it):se,re,E?ka(he,Bt):he);W[L]=Vt,ce[L]=Vt-re}if(k){var We,Pt=L==="x"?go:mo,st=L==="x"?Jo:Xo,je=W[M],at=M==="y"?"height":"width",Zt=je+R[Pt],Le=je-R[st],ft=[go,mo].indexOf(I)!==-1,vt=(We=ee==null?void 0:ee[M])!=null?We:0,un=ft?Zt:je-H[at]-K[at]-vt+Y.altAxis,Bn=ft?je+H[at]+K[at]-vt-Y.altAxis:Le,Ve=E&&ft?mH(un,je,Bn):Kd(E?un:Zt,je,E?Bn:Le);W[M]=Ve,ce[M]=Ve-je}o.modifiersData[c]=ce}}const qH={name:"preventOverflow",enabled:!0,phase:"main",fn:GH,requiresIfExists:["offset"]};function KH(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function YH(n){return n===No(n)||!Ko(n)?nC(n):KH(n)}function QH(n){var o=n.getBoundingClientRect(),a=dc(o.width)/n.offsetWidth||1,c=dc(o.height)/n.offsetHeight||1;return a!==1||c!==1}function ZH(n,o,a){a===void 0&&(a=!1);var c=Ko(o),u=Ko(o)&&QH(o),p=_s(o),g=uc(n,u,a),k={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(c||!c&&!a)&&((Qr(o)!=="body"||rC(p))&&(k=YH(o)),Ko(o)?(m=uc(o,!0),m.x+=o.clientLeft,m.y+=o.clientTop):p&&(m.x=oC(p))),{x:g.left+k.scrollLeft-m.x,y:g.top+k.scrollTop-m.y,width:g.width,height:g.height}}function JH(n){var o=new Map,a=new Set,c=[];n.forEach(function(p){o.set(p.name,p)});function u(p){a.add(p.name);var g=[].concat(p.requires||[],p.requiresIfExists||[]);g.forEach(function(k){if(!a.has(k)){var m=o.get(k);m&&u(m)}}),c.push(p)}return n.forEach(function(p){a.has(p.name)||u(p)}),c}function XH(n){var o=JH(n);return dH.reduce(function(a,c){return a.concat(o.filter(function(u){return u.phase===c}))},[])}function eW(n){var o;return function(){return o||(o=new Promise(function(a){Promise.resolve().then(function(){o=void 0,a(n())})})),o}}function tW(n){var o=n.reduce(function(a,c){var u=a[c.name];return a[c.name]=u?Object.assign({},u,c,{options:Object.assign({},u.options,c.options),data:Object.assign({},u.data,c.data)}):c,a},{});return Object.keys(o).map(function(a){return o[a]})}var sD={placement:"bottom",modifiers:[],strategy:"absolute"};function aD(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return!o.some(function(c){return!(c&&typeof c.getBoundingClientRect=="function")})}function nW(n){n===void 0&&(n={});var o=n,a=o.defaultModifiers,c=a===void 0?[]:a,u=o.defaultOptions,p=u===void 0?sD:u;return function(k,m,C){C===void 0&&(C=p);var A={placement:"bottom",orderedModifiers:[],options:Object.assign({},sD,p),modifiersData:{},elements:{reference:k,popper:m},attributes:{},styles:{}},_=[],y=!1,E={state:A,setOptions:function(I){var P=typeof I=="function"?I(A.options):I;D(),A.options=Object.assign({},p,A.options,P),A.scrollParents={reference:Da(k)?Yd(k):k.contextElement?Yd(k.contextElement):[],popper:Yd(m)};var B=XH(tW([].concat(c,A.options.modifiers)));return A.orderedModifiers=B.filter(function(L){return L.enabled}),S(),E.update()},forceUpdate:function(){if(!y){var I=A.elements,P=I.reference,B=I.popper;if(aD(P,B)){A.rects={reference:ZH(P,zu(B),A.options.strategy==="fixed"),popper:eC(B)},A.reset=!1,A.placement=A.options.placement,A.orderedModifiers.forEach(function(Y){return A.modifiersData[Y.name]=Object.assign({},Y.data)});for(var L=0;L<A.orderedModifiers.length;L++){if(A.reset===!0){A.reset=!1,L=-1;continue}var M=A.orderedModifiers[L],W=M.fn,H=M.options,K=H===void 0?{}:H,Z=M.name;typeof W=="function"&&(A=W({state:A,options:K,name:Z,instance:E})||A)}}}},update:eW(function(){return new Promise(function(R){E.forceUpdate(),R(A)})}),destroy:function(){D(),y=!0}};if(!aD(k,m))return E;E.setOptions(C).then(function(R){!y&&C.onFirstUpdate&&C.onFirstUpdate(R)});function S(){A.orderedModifiers.forEach(function(R){var I=R.name,P=R.options,B=P===void 0?{}:P,L=R.effect;if(typeof L=="function"){var M=L({state:A,name:I,instance:E,options:B}),W=function(){};_.push(M||W)}})}function D(){_.forEach(function(R){return R()}),_=[]}return E}}var oW=[EH,HH,_H,pH,$H,zH,qH,vH,jH],rW=nW({defaultModifiers:oW});function iW(n){return typeof n=="function"?n():n}const sW=z.forwardRef(function(o,a){const{children:c,container:u,disablePortal:p=!1}=o,[g,k]=z.useState(null),m=dn(z.isValidElement(c)?c.ref:null,a);if(Yr(()=>{p||k(iW(u)||document.body)},[u,p]),Yr(()=>{if(g&&!p)return mw(a,g),()=>{mw(a,null)}},[a,g,p]),p){if(z.isValidElement(c)){const C={ref:m};return z.cloneElement(c,C)}return V.jsx(z.Fragment,{children:c})}return V.jsx(z.Fragment,{children:g&&ig.createPortal(c,g)})}),f4=sW;function aW(n){return Ge("MuiPopper",n)}qe("MuiPopper",["root"]);const lW=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],cW=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function dW(n,o){if(o==="ltr")return n;switch(n){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return n}}function xw(n){return typeof n=="function"?n():n}function uW(n){return n.nodeType!==void 0}const hW=()=>Qe({root:["root"]},o4(aW)),pW={},fW=z.forwardRef(function(o,a){var c;const{anchorEl:u,children:p,direction:g,disablePortal:k,modifiers:m,open:C,placement:A,popperOptions:_,popperRef:y,slotProps:E={},slots:S={},TransitionProps:D}=o,R=ve(o,lW),I=z.useRef(null),P=dn(I,a),B=z.useRef(null),L=dn(B,y),M=z.useRef(L);Yr(()=>{M.current=L},[L]),z.useImperativeHandle(y,()=>B.current,[]);const W=dW(A,g),[H,K]=z.useState(W),[Z,Y]=z.useState(xw(u));z.useEffect(()=>{B.current&&B.current.forceUpdate()}),z.useEffect(()=>{u&&Y(xw(u))},[u]),Yr(()=>{if(!Z||!C)return;const oe=se=>{K(se.placement)};let de=[{name:"preventOverflow",options:{altBoundary:k}},{name:"flip",options:{altBoundary:k}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:se})=>{oe(se)}}];m!=null&&(de=de.concat(m)),_&&_.modifiers!=null&&(de=de.concat(_.modifiers));const re=rW(Z,I.current,U({placement:W},_,{modifiers:de}));return M.current(re),()=>{re.destroy(),M.current(null)}},[Z,k,m,C,_,W]);const ee={placement:H};D!==null&&(ee.TransitionProps=D);const ce=hW(),ie=(c=S.root)!=null?c:"div",te=lc({elementType:ie,externalSlotProps:E.root,externalForwardedProps:R,additionalProps:{role:"tooltip",ref:P},ownerState:o,className:ce.root});return V.jsx(ie,U({},te,{children:typeof p=="function"?p(ee):p}))}),gW=z.forwardRef(function(o,a){const{anchorEl:c,children:u,container:p,direction:g="ltr",disablePortal:k=!1,keepMounted:m=!1,modifiers:C,open:A,placement:_="bottom",popperOptions:y=pW,popperRef:E,style:S,transition:D=!1,slotProps:R={},slots:I={}}=o,P=ve(o,cW),[B,L]=z.useState(!0),M=()=>{L(!1)},W=()=>{L(!0)};if(!m&&!A&&(!D||B))return null;let H;if(p)H=p;else if(c){const Y=xw(c);H=Y&&uW(Y)?Mn(Y).body:Mn(null).body}const K=!A&&m&&(!D||B)?"none":void 0,Z=D?{in:A,onEnter:M,onExited:W}:void 0;return V.jsx(f4,{disablePortal:k,container:H,children:V.jsx(fW,U({anchorEl:c,direction:g,disablePortal:k,modifiers:C,ref:a,open:D?!B:A,placement:_,popperOptions:y,popperRef:E,slotProps:R,slots:I},P,{style:U({position:"fixed",top:0,left:0,display:K},S),TransitionProps:Z,children:u}))})}),mW=gW;function bW(n){const o=Mn(n);return o.body===n?_a(n).innerWidth>o.documentElement.clientWidth:n.scrollHeight>n.clientHeight}function Qd(n,o){o?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden")}function lD(n){return parseInt(_a(n).getComputedStyle(n).paddingRight,10)||0}function kW(n){const a=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(n.tagName)!==-1,c=n.tagName==="INPUT"&&n.getAttribute("type")==="hidden";return a||c}function cD(n,o,a,c,u){const p=[o,a,...c];[].forEach.call(n.children,g=>{const k=p.indexOf(g)===-1,m=!kW(g);k&&m&&Qd(g,u)})}function c0(n,o){let a=-1;return n.some((c,u)=>o(c)?(a=u,!0):!1),a}function wW(n,o){const a=[],c=n.container;if(!o.disableScrollLock){if(bW(c)){const g=yM(Mn(c));a.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${lD(c)+g}px`;const k=Mn(c).querySelectorAll(".mui-fixed");[].forEach.call(k,m=>{a.push({value:m.style.paddingRight,property:"padding-right",el:m}),m.style.paddingRight=`${lD(m)+g}px`})}let p;if(c.parentNode instanceof DocumentFragment)p=Mn(c).body;else{const g=c.parentElement,k=_a(c);p=(g==null?void 0:g.nodeName)==="HTML"&&k.getComputedStyle(g).overflowY==="scroll"?g:c}a.push({value:p.style.overflow,property:"overflow",el:p},{value:p.style.overflowX,property:"overflow-x",el:p},{value:p.style.overflowY,property:"overflow-y",el:p}),p.style.overflow="hidden"}return()=>{a.forEach(({value:p,el:g,property:k})=>{p?g.style.setProperty(k,p):g.style.removeProperty(k)})}}function vW(n){const o=[];return[].forEach.call(n.children,a=>{a.getAttribute("aria-hidden")==="true"&&o.push(a)}),o}class CW{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(o,a){let c=this.modals.indexOf(o);if(c!==-1)return c;c=this.modals.length,this.modals.push(o),o.modalRef&&Qd(o.modalRef,!1);const u=vW(a);cD(a,o.mount,o.modalRef,u,!0);const p=c0(this.containers,g=>g.container===a);return p!==-1?(this.containers[p].modals.push(o),c):(this.containers.push({modals:[o],container:a,restore:null,hiddenSiblings:u}),c)}mount(o,a){const c=c0(this.containers,p=>p.modals.indexOf(o)!==-1),u=this.containers[c];u.restore||(u.restore=wW(u,a))}remove(o,a=!0){const c=this.modals.indexOf(o);if(c===-1)return c;const u=c0(this.containers,g=>g.modals.indexOf(o)!==-1),p=this.containers[u];if(p.modals.splice(p.modals.indexOf(o),1),this.modals.splice(c,1),p.modals.length===0)p.restore&&p.restore(),o.modalRef&&Qd(o.modalRef,a),cD(p.container,o.mount,o.modalRef,p.hiddenSiblings,!1),this.containers.splice(u,1);else{const g=p.modals[p.modals.length-1];g.modalRef&&Qd(g.modalRef,!1)}return c}isTopModal(o){return this.modals.length>0&&this.modals[this.modals.length-1]===o}}function yW(n){return Ge("MuiModal",n)}qe("MuiModal",["root","hidden","backdrop"]);const AW=["children","closeAfterTransition","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],_W=n=>{const{open:o,exited:a}=n;return Qe({root:["root",!o&&a&&"hidden"],backdrop:["backdrop"]},o4(yW))};function xW(n){return typeof n=="function"?n():n}function EW(n){return n?n.props.hasOwnProperty("in"):!1}const SW=new CW,DW=z.forwardRef(function(o,a){var c,u;const{children:p,closeAfterTransition:g=!1,container:k,disableAutoFocus:m=!1,disableEnforceFocus:C=!1,disableEscapeKeyDown:A=!1,disablePortal:_=!1,disableRestoreFocus:y=!1,disableScrollLock:E=!1,hideBackdrop:S=!1,keepMounted:D=!1,manager:R=SW,onBackdropClick:I,onClose:P,onKeyDown:B,open:L,onTransitionEnter:M,onTransitionExited:W,slotProps:H={},slots:K={}}=o,Z=ve(o,AW),Y=R,[ee,ce]=z.useState(!L),ie=z.useRef({}),te=z.useRef(null),oe=z.useRef(null),de=dn(oe,a),re=EW(p),se=(c=o["aria-hidden"])!=null?c:!0,he=()=>Mn(te.current),me=()=>(ie.current.modalRef=oe.current,ie.current.mountNode=te.current,ie.current),Te=()=>{Y.mount(me(),{disableScrollLock:E}),oe.current&&(oe.current.scrollTop=0)},Ie=Ur(()=>{const We=xW(k)||he().body;Y.add(me(),We),oe.current&&Te()}),He=z.useCallback(()=>Y.isTopModal(me()),[Y]),Ne=Ur(We=>{te.current=We,!(!We||!oe.current)&&(L&&He()?Te():Qd(oe.current,se))}),we=z.useCallback(()=>{Y.remove(me(),se)},[Y,se]);z.useEffect(()=>()=>{we()},[we]),z.useEffect(()=>{L?Ie():(!re||!g)&&we()},[L,we,re,g,Ie]);const Pe=U({},o,{closeAfterTransition:g,disableAutoFocus:m,disableEnforceFocus:C,disableEscapeKeyDown:A,disablePortal:_,disableRestoreFocus:y,disableScrollLock:E,exited:ee,hideBackdrop:S,keepMounted:D}),Ze=_W(Pe),Ce=()=>{ce(!1),M&&M()},Me=()=>{ce(!0),W&&W(),g&&we()},tt=We=>{We.target===We.currentTarget&&(I&&I(We),P&&P(We,"backdropClick"))},Be=We=>{B&&B(We),!(We.key!=="Escape"||!He())&&(A||(We.stopPropagation(),P&&P(We,"escapeKeyDown")))},ge={};p.props.tabIndex===void 0&&(ge.tabIndex="-1"),re&&(ge.onEnter=E5(Ce,p.props.onEnter),ge.onExited=E5(Me,p.props.onExited));const Ye=(u=K.root)!=null?u:"div",it=lc({elementType:Ye,externalSlotProps:H.root,externalForwardedProps:Z,additionalProps:{ref:de,role:"presentation",onKeyDown:Be},className:Ze.root,ownerState:Pe}),Bt=K.backdrop,Vt=lc({elementType:Bt,externalSlotProps:H.backdrop,additionalProps:{"aria-hidden":!0,onClick:tt,open:L},className:Ze.backdrop,ownerState:Pe});return!D&&!L&&(!re||ee)?null:V.jsx(f4,{ref:Ne,container:k,disablePortal:_,children:V.jsxs(Ye,U({},it,{children:[!S&&Bt?V.jsx(Bt,U({},Vt)):null,V.jsx(JU,{disableEnforceFocus:C,disableAutoFocus:m,disableRestoreFocus:y,isEnabled:He,open:L,children:z.cloneElement(p,ge)})]}))})}),TW=DW;function IW(n){const{autoHideDuration:o=null,disableWindowBlurListener:a=!1,onClose:c,open:u,resumeHideDuration:p}=n,g=z.useRef();z.useEffect(()=>{if(!u)return;function I(P){P.defaultPrevented||(P.key==="Escape"||P.key==="Esc")&&(c==null||c(P,"escapeKeyDown"))}return document.addEventListener("keydown",I),()=>{document.removeEventListener("keydown",I)}},[u,c]);const k=Ur((I,P)=>{c==null||c(I,P)}),m=Ur(I=>{!c||I==null||(clearTimeout(g.current),g.current=setTimeout(()=>{k(null,"timeout")},I))});z.useEffect(()=>(u&&m(o),()=>{clearTimeout(g.current)}),[u,o,m]);const C=I=>{c==null||c(I,"clickaway")},A=()=>{clearTimeout(g.current)},_=z.useCallback(()=>{o!=null&&m(p??o*.5)},[o,p,m]),y=I=>P=>{const B=I.onBlur;B==null||B(P),_()},E=I=>P=>{const B=I.onFocus;B==null||B(P),A()},S=I=>P=>{const B=I.onMouseEnter;B==null||B(P),A()},D=I=>P=>{const B=I.onMouseLeave;B==null||B(P),_()};return z.useEffect(()=>{if(!a&&u)return window.addEventListener("focus",_),window.addEventListener("blur",A),()=>{window.removeEventListener("focus",_),window.removeEventListener("blur",A)}},[a,_,u]),{getRootProps:(I={})=>{const P=r4(n),B=U({},P,I);return U({role:"presentation"},B,{onBlur:y(B),onFocus:E(B),onMouseEnter:S(B),onMouseLeave:D(B)})},onClickAway:C}}const MW=["onChange","maxRows","minRows","style","value"];function Np(n){return parseInt(n,10)||0}const PW={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function dD(n){return n==null||Object.keys(n).length===0||n.outerHeightStyle===0&&!n.overflow}const NW=z.forwardRef(function(o,a){const{onChange:c,maxRows:u,minRows:p=1,style:g,value:k}=o,m=ve(o,MW),{current:C}=z.useRef(k!=null),A=z.useRef(null),_=dn(a,A),y=z.useRef(null),E=z.useRef(0),[S,D]=z.useState({outerHeightStyle:0}),R=z.useCallback(()=>{const M=A.current,H=_a(M).getComputedStyle(M);if(H.width==="0px")return{outerHeightStyle:0};const K=y.current;K.style.width=H.width,K.value=M.value||o.placeholder||"x",K.value.slice(-1)===`
`&&(K.value+=" ");const Z=H.boxSizing,Y=Np(H.paddingBottom)+Np(H.paddingTop),ee=Np(H.borderBottomWidth)+Np(H.borderTopWidth),ce=K.scrollHeight;K.value="x";const ie=K.scrollHeight;let te=ce;p&&(te=Math.max(Number(p)*ie,te)),u&&(te=Math.min(Number(u)*ie,te)),te=Math.max(te,ie);const oe=te+(Z==="border-box"?Y+ee:0),de=Math.abs(te-ce)<=1;return{outerHeightStyle:oe,overflow:de}},[u,p,o.placeholder]),I=(M,W)=>{const{outerHeightStyle:H,overflow:K}=W;return E.current<20&&(H>0&&Math.abs((M.outerHeightStyle||0)-H)>1||M.overflow!==K)?(E.current+=1,{overflow:K,outerHeightStyle:H}):M},P=z.useCallback(()=>{const M=R();dD(M)||D(W=>I(W,M))},[R]),B=()=>{const M=R();dD(M)||ig.flushSync(()=>{D(W=>I(W,M))})};z.useEffect(()=>{const M=vM(()=>{E.current=0,A.current&&B()});let W;const H=A.current,K=_a(H);return K.addEventListener("resize",M),typeof ResizeObserver<"u"&&(W=new ResizeObserver(M),W.observe(H)),()=>{M.clear(),K.removeEventListener("resize",M),W&&W.disconnect()}}),Yr(()=>{P()}),z.useEffect(()=>{E.current=0},[k]);const L=M=>{E.current=0,C||P(),c&&c(M)};return V.jsxs(z.Fragment,{children:[V.jsx("textarea",U({value:k,onChange:L,ref:_,rows:p,style:U({height:S.outerHeightStyle,overflow:S.overflow?"hidden":void 0},g)},m)),V.jsx("textarea",{"aria-hidden":!0,className:o.className,readOnly:!0,ref:y,tabIndex:-1,style:U({},PW.shadow,g,{padding:0})})]})}),BW=NW;function RW(n){return Ge("MuiSvgIcon",n)}qe("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const OW=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],zW=n=>{const{color:o,fontSize:a,classes:c}=n,u={root:["root",o!=="inherit"&&`color${_e(o)}`,`fontSize${_e(a)}`]};return Qe(u,RW,c)},LW=fe("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,a.color!=="inherit"&&o[`color${_e(a.color)}`],o[`fontSize${_e(a.fontSize)}`]]}})(({theme:n,ownerState:o})=>{var a,c,u,p,g,k,m,C,A,_,y,E,S,D,R,I,P;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(a=n.transitions)==null||(c=a.create)==null?void 0:c.call(a,"fill",{duration:(u=n.transitions)==null||(p=u.duration)==null?void 0:p.shorter}),fontSize:{inherit:"inherit",small:((g=n.typography)==null||(k=g.pxToRem)==null?void 0:k.call(g,20))||"1.25rem",medium:((m=n.typography)==null||(C=m.pxToRem)==null?void 0:C.call(m,24))||"1.5rem",large:((A=n.typography)==null||(_=A.pxToRem)==null?void 0:_.call(A,35))||"2.1875rem"}[o.fontSize],color:(y=(E=(n.vars||n).palette)==null||(S=E[o.color])==null?void 0:S.main)!=null?y:{action:(D=(n.vars||n).palette)==null||(R=D.action)==null?void 0:R.active,disabled:(I=(n.vars||n).palette)==null||(P=I.action)==null?void 0:P.disabled,inherit:void 0}[o.color]}}),g4=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiSvgIcon"}),{children:u,className:p,color:g="inherit",component:k="svg",fontSize:m="medium",htmlColor:C,inheritViewBox:A=!1,titleAccess:_,viewBox:y="0 0 24 24"}=c,E=ve(c,OW),S=U({},c,{color:g,component:k,fontSize:m,instanceFontSize:o.fontSize,inheritViewBox:A,viewBox:y}),D={};A||(D.viewBox=y);const R=zW(S);return V.jsxs(LW,U({as:k,className:De(R.root,p),focusable:"false",color:C,"aria-hidden":_?void 0:!0,role:_?"img":void 0,ref:a},D,E,{ownerState:S,children:[u,_?V.jsx("title",{children:_}):null]}))});g4.muiName="SvgIcon";const uD=g4;function Gt(n,o){function a(c,u){return V.jsx(uD,U({"data-testid":`${o}Icon`,ref:u},c,{children:n}))}return a.muiName=uD.muiName,z.memo(z.forwardRef(a))}var Mt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iC=Symbol.for("react.element"),sC=Symbol.for("react.portal"),zg=Symbol.for("react.fragment"),Lg=Symbol.for("react.strict_mode"),jg=Symbol.for("react.profiler"),Fg=Symbol.for("react.provider"),Vg=Symbol.for("react.context"),jW=Symbol.for("react.server_context"),$g=Symbol.for("react.forward_ref"),Ug=Symbol.for("react.suspense"),Hg=Symbol.for("react.suspense_list"),Wg=Symbol.for("react.memo"),Gg=Symbol.for("react.lazy"),FW=Symbol.for("react.offscreen"),m4;m4=Symbol.for("react.module.reference");function er(n){if(typeof n=="object"&&n!==null){var o=n.$$typeof;switch(o){case iC:switch(n=n.type,n){case zg:case jg:case Lg:case Ug:case Hg:return n;default:switch(n=n&&n.$$typeof,n){case jW:case Vg:case $g:case Gg:case Wg:case Fg:return n;default:return o}}case sC:return o}}}Mt.ContextConsumer=Vg;Mt.ContextProvider=Fg;Mt.Element=iC;Mt.ForwardRef=$g;Mt.Fragment=zg;Mt.Lazy=Gg;Mt.Memo=Wg;Mt.Portal=sC;Mt.Profiler=jg;Mt.StrictMode=Lg;Mt.Suspense=Ug;Mt.SuspenseList=Hg;Mt.isAsyncMode=function(){return!1};Mt.isConcurrentMode=function(){return!1};Mt.isContextConsumer=function(n){return er(n)===Vg};Mt.isContextProvider=function(n){return er(n)===Fg};Mt.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===iC};Mt.isForwardRef=function(n){return er(n)===$g};Mt.isFragment=function(n){return er(n)===zg};Mt.isLazy=function(n){return er(n)===Gg};Mt.isMemo=function(n){return er(n)===Wg};Mt.isPortal=function(n){return er(n)===sC};Mt.isProfiler=function(n){return er(n)===jg};Mt.isStrictMode=function(n){return er(n)===Lg};Mt.isSuspense=function(n){return er(n)===Ug};Mt.isSuspenseList=function(n){return er(n)===Hg};Mt.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===zg||n===jg||n===Lg||n===Ug||n===Hg||n===FW||typeof n=="object"&&n!==null&&(n.$$typeof===Gg||n.$$typeof===Wg||n.$$typeof===Fg||n.$$typeof===Vg||n.$$typeof===$g||n.$$typeof===m4||n.getModuleId!==void 0)};Mt.typeOf=er;function Ew(n,o){return Ew=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Ew(n,o)}function b4(n,o){n.prototype=Object.create(o.prototype),n.prototype.constructor=n,Ew(n,o)}const hD={disabled:!1},Lf=$r.createContext(null);var VW=function(o){return o.scrollTop},Od="unmounted",la="exited",ca="entering",Pl="entered",Sw="exiting",Si=function(n){b4(o,n);function o(c,u){var p;p=n.call(this,c,u)||this;var g=u,k=g&&!g.isMounting?c.enter:c.appear,m;return p.appearStatus=null,c.in?k?(m=la,p.appearStatus=ca):m=Pl:c.unmountOnExit||c.mountOnEnter?m=Od:m=la,p.state={status:m},p.nextCallback=null,p}o.getDerivedStateFromProps=function(u,p){var g=u.in;return g&&p.status===Od?{status:la}:null};var a=o.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(u){var p=null;if(u!==this.props){var g=this.state.status;this.props.in?g!==ca&&g!==Pl&&(p=ca):(g===ca||g===Pl)&&(p=Sw)}this.updateStatus(!1,p)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var u=this.props.timeout,p,g,k;return p=g=k=u,u!=null&&typeof u!="number"&&(p=u.exit,g=u.enter,k=u.appear!==void 0?u.appear:g),{exit:p,enter:g,appear:k}},a.updateStatus=function(u,p){if(u===void 0&&(u=!1),p!==null)if(this.cancelNextCallback(),p===ca){if(this.props.unmountOnExit||this.props.mountOnEnter){var g=this.props.nodeRef?this.props.nodeRef.current:Ip.findDOMNode(this);g&&VW(g)}this.performEnter(u)}else this.performExit();else this.props.unmountOnExit&&this.state.status===la&&this.setState({status:Od})},a.performEnter=function(u){var p=this,g=this.props.enter,k=this.context?this.context.isMounting:u,m=this.props.nodeRef?[k]:[Ip.findDOMNode(this),k],C=m[0],A=m[1],_=this.getTimeouts(),y=k?_.appear:_.enter;if(!u&&!g||hD.disabled){this.safeSetState({status:Pl},function(){p.props.onEntered(C)});return}this.props.onEnter(C,A),this.safeSetState({status:ca},function(){p.props.onEntering(C,A),p.onTransitionEnd(y,function(){p.safeSetState({status:Pl},function(){p.props.onEntered(C,A)})})})},a.performExit=function(){var u=this,p=this.props.exit,g=this.getTimeouts(),k=this.props.nodeRef?void 0:Ip.findDOMNode(this);if(!p||hD.disabled){this.safeSetState({status:la},function(){u.props.onExited(k)});return}this.props.onExit(k),this.safeSetState({status:Sw},function(){u.props.onExiting(k),u.onTransitionEnd(g.exit,function(){u.safeSetState({status:la},function(){u.props.onExited(k)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(u,p){p=this.setNextCallback(p),this.setState(u,p)},a.setNextCallback=function(u){var p=this,g=!0;return this.nextCallback=function(k){g&&(g=!1,p.nextCallback=null,u(k))},this.nextCallback.cancel=function(){g=!1},this.nextCallback},a.onTransitionEnd=function(u,p){this.setNextCallback(p);var g=this.props.nodeRef?this.props.nodeRef.current:Ip.findDOMNode(this),k=u==null&&!this.props.addEndListener;if(!g||k){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var m=this.props.nodeRef?[this.nextCallback]:[g,this.nextCallback],C=m[0],A=m[1];this.props.addEndListener(C,A)}u!=null&&setTimeout(this.nextCallback,u)},a.render=function(){var u=this.state.status;if(u===Od)return null;var p=this.props,g=p.children;p.in,p.mountOnEnter,p.unmountOnExit,p.appear,p.enter,p.exit,p.timeout,p.addEndListener,p.onEnter,p.onEntering,p.onEntered,p.onExit,p.onExiting,p.onExited,p.nodeRef;var k=ve(p,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return $r.createElement(Lf.Provider,{value:null},typeof g=="function"?g(u,k):$r.cloneElement($r.Children.only(g),k))},o}($r.Component);Si.contextType=Lf;Si.propTypes={};function Ml(){}Si.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ml,onEntering:Ml,onEntered:Ml,onExit:Ml,onExiting:Ml,onExited:Ml};Si.UNMOUNTED=Od;Si.EXITED=la;Si.ENTERING=ca;Si.ENTERED=Pl;Si.EXITING=Sw;const aC=Si;function $W(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function lC(n,o){var a=function(p){return o&&z.isValidElement(p)?o(p):p},c=Object.create(null);return n&&z.Children.map(n,function(u){return u}).forEach(function(u){c[u.key]=a(u)}),c}function UW(n,o){n=n||{},o=o||{};function a(A){return A in o?o[A]:n[A]}var c=Object.create(null),u=[];for(var p in n)p in o?u.length&&(c[p]=u,u=[]):u.push(p);var g,k={};for(var m in o){if(c[m])for(g=0;g<c[m].length;g++){var C=c[m][g];k[c[m][g]]=a(C)}k[m]=a(m)}for(g=0;g<u.length;g++)k[u[g]]=a(u[g]);return k}function fa(n,o,a){return a[o]!=null?a[o]:n.props[o]}function HW(n,o){return lC(n.children,function(a){return z.cloneElement(a,{onExited:o.bind(null,a),in:!0,appear:fa(a,"appear",n),enter:fa(a,"enter",n),exit:fa(a,"exit",n)})})}function WW(n,o,a){var c=lC(n.children),u=UW(o,c);return Object.keys(u).forEach(function(p){var g=u[p];if(z.isValidElement(g)){var k=p in o,m=p in c,C=o[p],A=z.isValidElement(C)&&!C.props.in;m&&(!k||A)?u[p]=z.cloneElement(g,{onExited:a.bind(null,g),in:!0,exit:fa(g,"exit",n),enter:fa(g,"enter",n)}):!m&&k&&!A?u[p]=z.cloneElement(g,{in:!1}):m&&k&&z.isValidElement(C)&&(u[p]=z.cloneElement(g,{onExited:a.bind(null,g),in:C.props.in,exit:fa(g,"exit",n),enter:fa(g,"enter",n)}))}}),u}var GW=Object.values||function(n){return Object.keys(n).map(function(o){return n[o]})},qW={component:"div",childFactory:function(o){return o}},cC=function(n){b4(o,n);function o(c,u){var p;p=n.call(this,c,u)||this;var g=p.handleExited.bind($W(p));return p.state={contextValue:{isMounting:!0},handleExited:g,firstRender:!0},p}var a=o.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(u,p){var g=p.children,k=p.handleExited,m=p.firstRender;return{children:m?HW(u,k):WW(u,g,k),firstRender:!1}},a.handleExited=function(u,p){var g=lC(this.props.children);u.key in g||(u.props.onExited&&u.props.onExited(p),this.mounted&&this.setState(function(k){var m=U({},k.children);return delete m[u.key],{children:m}}))},a.render=function(){var u=this.props,p=u.component,g=u.childFactory,k=ve(u,["component","childFactory"]),m=this.state.contextValue,C=GW(this.state.children).map(g);return delete k.appear,delete k.enter,delete k.exit,p===null?$r.createElement(Lf.Provider,{value:m},C):$r.createElement(Lf.Provider,{value:m},$r.createElement(p,k,C))},o}($r.Component);cC.propTypes={};cC.defaultProps=qW;const KW=cC,dC=n=>n.scrollTop;function pc(n,o){var a,c;const{timeout:u,easing:p,style:g={}}=n;return{duration:(a=g.transitionDuration)!=null?a:typeof u=="number"?u:u[o.mode]||0,easing:(c=g.transitionTimingFunction)!=null?c:typeof p=="object"?p[o.mode]:p,delay:g.transitionDelay}}function YW(n){return Ge("MuiPaper",n)}qe("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const QW=["className","component","elevation","square","variant"],ZW=n=>{const{square:o,elevation:a,variant:c,classes:u}=n,p={root:["root",c,!o&&"rounded",c==="elevation"&&`elevation${a}`]};return Qe(p,YW,u)},JW=fe("div",{name:"MuiPaper",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,o[a.variant],!a.square&&o.rounded,a.variant==="elevation"&&o[`elevation${a.elevation}`]]}})(({theme:n,ownerState:o})=>{var a;return U({backgroundColor:(n.vars||n).palette.background.paper,color:(n.vars||n).palette.text.primary,transition:n.transitions.create("box-shadow")},!o.square&&{borderRadius:n.shape.borderRadius},o.variant==="outlined"&&{border:`1px solid ${(n.vars||n).palette.divider}`},o.variant==="elevation"&&U({boxShadow:(n.vars||n).shadows[o.elevation]},!n.vars&&n.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Xn("#fff",Q5(o.elevation))}, ${Xn("#fff",Q5(o.elevation))})`},n.vars&&{backgroundImage:(a=n.vars.overlays)==null?void 0:a[o.elevation]}))}),XW=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiPaper"}),{className:u,component:p="div",elevation:g=1,square:k=!1,variant:m="elevation"}=c,C=ve(c,QW),A=U({},c,{component:p,elevation:g,square:k,variant:m}),_=ZW(A);return V.jsx(JW,U({as:p,ownerState:A,className:De(_.root,u),ref:a},C))}),ko=XW;function eG(n){const{className:o,classes:a,pulsate:c=!1,rippleX:u,rippleY:p,rippleSize:g,in:k,onExited:m,timeout:C}=n,[A,_]=z.useState(!1),y=De(o,a.ripple,a.rippleVisible,c&&a.ripplePulsate),E={width:g,height:g,top:-(g/2)+p,left:-(g/2)+u},S=De(a.child,A&&a.childLeaving,c&&a.childPulsate);return!k&&!A&&_(!0),z.useEffect(()=>{if(!k&&m!=null){const D=setTimeout(m,C);return()=>{clearTimeout(D)}}},[m,k,C]),V.jsx("span",{className:y,style:E,children:V.jsx("span",{className:S})})}const tG=qe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Uo=tG,nG=["center","classes","className"];let qg=n=>n,pD,fD,gD,mD;const Dw=550,oG=80,rG=Nu(pD||(pD=qg`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),iG=Nu(fD||(fD=qg`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),sG=Nu(gD||(gD=qg`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),aG=fe("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),lG=fe(eG,{name:"MuiTouchRipple",slot:"Ripple"})(mD||(mD=qg`
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
`),Uo.rippleVisible,rG,Dw,({theme:n})=>n.transitions.easing.easeInOut,Uo.ripplePulsate,({theme:n})=>n.transitions.duration.shorter,Uo.child,Uo.childLeaving,iG,Dw,({theme:n})=>n.transitions.easing.easeInOut,Uo.childPulsate,sG,({theme:n})=>n.transitions.easing.easeInOut),cG=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiTouchRipple"}),{center:u=!1,classes:p={},className:g}=c,k=ve(c,nG),[m,C]=z.useState([]),A=z.useRef(0),_=z.useRef(null);z.useEffect(()=>{_.current&&(_.current(),_.current=null)},[m]);const y=z.useRef(!1),E=z.useRef(null),S=z.useRef(null),D=z.useRef(null);z.useEffect(()=>()=>{clearTimeout(E.current)},[]);const R=z.useCallback(L=>{const{pulsate:M,rippleX:W,rippleY:H,rippleSize:K,cb:Z}=L;C(Y=>[...Y,V.jsx(lG,{classes:{ripple:De(p.ripple,Uo.ripple),rippleVisible:De(p.rippleVisible,Uo.rippleVisible),ripplePulsate:De(p.ripplePulsate,Uo.ripplePulsate),child:De(p.child,Uo.child),childLeaving:De(p.childLeaving,Uo.childLeaving),childPulsate:De(p.childPulsate,Uo.childPulsate)},timeout:Dw,pulsate:M,rippleX:W,rippleY:H,rippleSize:K},A.current)]),A.current+=1,_.current=Z},[p]),I=z.useCallback((L={},M={},W=()=>{})=>{const{pulsate:H=!1,center:K=u||M.pulsate,fakeElement:Z=!1}=M;if((L==null?void 0:L.type)==="mousedown"&&y.current){y.current=!1;return}(L==null?void 0:L.type)==="touchstart"&&(y.current=!0);const Y=Z?null:D.current,ee=Y?Y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let ce,ie,te;if(K||L===void 0||L.clientX===0&&L.clientY===0||!L.clientX&&!L.touches)ce=Math.round(ee.width/2),ie=Math.round(ee.height/2);else{const{clientX:oe,clientY:de}=L.touches&&L.touches.length>0?L.touches[0]:L;ce=Math.round(oe-ee.left),ie=Math.round(de-ee.top)}if(K)te=Math.sqrt((2*ee.width**2+ee.height**2)/3),te%2===0&&(te+=1);else{const oe=Math.max(Math.abs((Y?Y.clientWidth:0)-ce),ce)*2+2,de=Math.max(Math.abs((Y?Y.clientHeight:0)-ie),ie)*2+2;te=Math.sqrt(oe**2+de**2)}L!=null&&L.touches?S.current===null&&(S.current=()=>{R({pulsate:H,rippleX:ce,rippleY:ie,rippleSize:te,cb:W})},E.current=setTimeout(()=>{S.current&&(S.current(),S.current=null)},oG)):R({pulsate:H,rippleX:ce,rippleY:ie,rippleSize:te,cb:W})},[u,R]),P=z.useCallback(()=>{I({},{pulsate:!0})},[I]),B=z.useCallback((L,M)=>{if(clearTimeout(E.current),(L==null?void 0:L.type)==="touchend"&&S.current){S.current(),S.current=null,E.current=setTimeout(()=>{B(L,M)});return}S.current=null,C(W=>W.length>0?W.slice(1):W),_.current=M},[]);return z.useImperativeHandle(a,()=>({pulsate:P,start:I,stop:B}),[P,I,B]),V.jsx(aG,U({className:De(Uo.root,p.root,g),ref:D},k,{children:V.jsx(KW,{component:null,exit:!0,children:m})}))}),dG=cG;function uG(n){return Ge("MuiButtonBase",n)}const hG=qe("MuiButtonBase",["root","disabled","focusVisible"]),pG=hG,fG=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],gG=n=>{const{disabled:o,focusVisible:a,focusVisibleClassName:c,classes:u}=n,g=Qe({root:["root",o&&"disabled",a&&"focusVisible"]},uG,u);return a&&c&&(g.root+=` ${c}`),g},mG=fe("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${pG.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),bG=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiButtonBase"}),{action:u,centerRipple:p=!1,children:g,className:k,component:m="button",disabled:C=!1,disableRipple:A=!1,disableTouchRipple:_=!1,focusRipple:y=!1,LinkComponent:E="a",onBlur:S,onClick:D,onContextMenu:R,onDragLeave:I,onFocus:P,onFocusVisible:B,onKeyDown:L,onKeyUp:M,onMouseDown:W,onMouseLeave:H,onMouseUp:K,onTouchEnd:Z,onTouchMove:Y,onTouchStart:ee,tabIndex:ce=0,TouchRippleProps:ie,touchRippleRef:te,type:oe}=c,de=ve(c,fG),re=z.useRef(null),se=z.useRef(null),he=dn(se,te),{isFocusVisibleRef:me,onFocus:Te,onBlur:Ie,ref:He}=CM(),[Ne,we]=z.useState(!1);C&&Ne&&we(!1),z.useImperativeHandle(u,()=>({focusVisible:()=>{we(!0),re.current.focus()}}),[]);const[Pe,Ze]=z.useState(!1);z.useEffect(()=>{Ze(!0)},[]);const Ce=Pe&&!A&&!C;z.useEffect(()=>{Ne&&y&&!A&&Pe&&se.current.pulsate()},[A,y,Ne,Pe]);function Me(Ae,Ee,et=_){return Ur(kt=>(Ee&&Ee(kt),!et&&se.current&&se.current[Ae](kt),!0))}const tt=Me("start",W),Be=Me("stop",R),ge=Me("stop",I),Ye=Me("stop",K),it=Me("stop",Ae=>{Ne&&Ae.preventDefault(),H&&H(Ae)}),Bt=Me("start",ee),Vt=Me("stop",Z),We=Me("stop",Y),Pt=Me("stop",Ae=>{Ie(Ae),me.current===!1&&we(!1),S&&S(Ae)},!1),st=Ur(Ae=>{re.current||(re.current=Ae.currentTarget),Te(Ae),me.current===!0&&(we(!0),B&&B(Ae)),P&&P(Ae)}),je=()=>{const Ae=re.current;return m&&m!=="button"&&!(Ae.tagName==="A"&&Ae.href)},at=z.useRef(!1),Zt=Ur(Ae=>{y&&!at.current&&Ne&&se.current&&Ae.key===" "&&(at.current=!0,se.current.stop(Ae,()=>{se.current.start(Ae)})),Ae.target===Ae.currentTarget&&je()&&Ae.key===" "&&Ae.preventDefault(),L&&L(Ae),Ae.target===Ae.currentTarget&&je()&&Ae.key==="Enter"&&!C&&(Ae.preventDefault(),D&&D(Ae))}),Le=Ur(Ae=>{y&&Ae.key===" "&&se.current&&Ne&&!Ae.defaultPrevented&&(at.current=!1,se.current.stop(Ae,()=>{se.current.pulsate(Ae)})),M&&M(Ae),D&&Ae.target===Ae.currentTarget&&je()&&Ae.key===" "&&!Ae.defaultPrevented&&D(Ae)});let ft=m;ft==="button"&&(de.href||de.to)&&(ft=E);const vt={};ft==="button"?(vt.type=oe===void 0?"button":oe,vt.disabled=C):(!de.href&&!de.to&&(vt.role="button"),C&&(vt["aria-disabled"]=C));const un=dn(a,He,re),Bn=U({},c,{centerRipple:p,component:m,disabled:C,disableRipple:A,disableTouchRipple:_,focusRipple:y,tabIndex:ce,focusVisible:Ne}),Ve=gG(Bn);return V.jsxs(mG,U({as:ft,className:De(Ve.root,k),ownerState:Bn,onBlur:Pt,onClick:D,onContextMenu:Be,onFocus:st,onKeyDown:Zt,onKeyUp:Le,onMouseDown:tt,onMouseLeave:it,onMouseUp:Ye,onDragLeave:ge,onTouchEnd:Vt,onTouchMove:We,onTouchStart:Bt,ref:un,tabIndex:C?-1:ce,type:oe},vt,de,{children:[g,Ce?V.jsx(dG,U({ref:he,center:p},ie)):null]}))}),Kg=bG;function kG(n){return Ge("MuiIconButton",n)}const wG=qe("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),vG=wG,CG=["edge","children","className","color","disabled","disableFocusRipple","size"],yG=n=>{const{classes:o,disabled:a,color:c,edge:u,size:p}=n,g={root:["root",a&&"disabled",c!=="default"&&`color${_e(c)}`,u&&`edge${_e(u)}`,`size${_e(p)}`]};return Qe(g,kG,o)},AG=fe(Kg,{name:"MuiIconButton",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,a.color!=="default"&&o[`color${_e(a.color)}`],a.edge&&o[`edge${_e(a.edge)}`],o[`size${_e(a.size)}`]]}})(({theme:n,ownerState:o})=>U({textAlign:"center",flex:"0 0 auto",fontSize:n.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(n.vars||n).palette.action.active,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:n.vars?`rgba(${n.vars.palette.action.activeChannel} / ${n.vars.palette.action.hoverOpacity})`:Xn(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12}),({theme:n,ownerState:o})=>{var a;const c=(a=(n.vars||n).palette)==null?void 0:a[o.color];return U({},o.color==="inherit"&&{color:"inherit"},o.color!=="inherit"&&o.color!=="default"&&U({color:c==null?void 0:c.main},!o.disableRipple&&{"&:hover":U({},c&&{backgroundColor:n.vars?`rgba(${c.mainChannel} / ${n.vars.palette.action.hoverOpacity})`:Xn(c.main,n.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),o.size==="small"&&{padding:5,fontSize:n.typography.pxToRem(18)},o.size==="large"&&{padding:12,fontSize:n.typography.pxToRem(28)},{[`&.${vG.disabled}`]:{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}})}),_G=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiIconButton"}),{edge:u=!1,children:p,className:g,color:k="default",disabled:m=!1,disableFocusRipple:C=!1,size:A="medium"}=c,_=ve(c,CG),y=U({},c,{edge:u,color:k,disabled:m,disableFocusRipple:C,size:A}),E=yG(y);return V.jsx(AG,U({className:De(E.root,g),centerRipple:!0,focusRipple:!C,disabled:m,ref:a,ownerState:y},_,{children:p}))}),k4=_G;function xG(n){return Ge("MuiTypography",n)}qe("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const EG=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],SG=n=>{const{align:o,gutterBottom:a,noWrap:c,paragraph:u,variant:p,classes:g}=n,k={root:["root",p,n.align!=="inherit"&&`align${_e(o)}`,a&&"gutterBottom",c&&"noWrap",u&&"paragraph"]};return Qe(k,xG,g)},DG=fe("span",{name:"MuiTypography",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,a.variant&&o[a.variant],a.align!=="inherit"&&o[`align${_e(a.align)}`],a.noWrap&&o.noWrap,a.gutterBottom&&o.gutterBottom,a.paragraph&&o.paragraph]}})(({theme:n,ownerState:o})=>U({margin:0},o.variant&&n.typography[o.variant],o.align!=="inherit"&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})),bD={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},TG={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},IG=n=>TG[n]||n,MG=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiTypography"}),u=IG(c.color),p=Yv(U({},c,{color:u})),{align:g="inherit",className:k,component:m,gutterBottom:C=!1,noWrap:A=!1,paragraph:_=!1,variant:y="body1",variantMapping:E=bD}=p,S=ve(p,EG),D=U({},p,{align:g,color:u,className:k,component:m,gutterBottom:C,noWrap:A,paragraph:_,variant:y,variantMapping:E}),R=m||(_?"p":E[y]||bD[y])||"span",I=SG(D);return V.jsx(DG,U({as:R,ref:a,ownerState:D,className:De(I.root,k)},S))}),Pn=MG,PG=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],NG=fe(mW,{name:"MuiPopper",slot:"Root",overridesResolver:(n,o)=>o.root})({}),BG=z.forwardRef(function(o,a){var c;const u=Pg(),p=Ke({props:o,name:"MuiPopper"}),{anchorEl:g,component:k,components:m,componentsProps:C,container:A,disablePortal:_,keepMounted:y,modifiers:E,open:S,placement:D,popperOptions:R,popperRef:I,transition:P,slots:B,slotProps:L}=p,M=ve(p,PG),W=(c=B==null?void 0:B.root)!=null?c:m==null?void 0:m.Root,H=U({anchorEl:g,container:A,disablePortal:_,keepMounted:y,modifiers:E,open:S,placement:D,popperOptions:R,popperRef:I,transition:P},M);return V.jsx(NG,U({as:k,direction:u==null?void 0:u.direction,slots:{root:W},slotProps:L??C},H,{ref:a}))}),w4=BG;function yc({props:n,states:o,muiFormControl:a}){return o.reduce((c,u)=>(c[u]=n[u],a&&typeof n[u]>"u"&&(c[u]=a[u]),c),{})}const RG=z.createContext(void 0),Yg=RG;function Pa(){return z.useContext(Yg)}function v4(n){return V.jsx(E$,U({},n,{defaultTheme:Rg,themeId:xa}))}function kD(n){return n!=null&&!(Array.isArray(n)&&n.length===0)}function jf(n,o=!1){return n&&(kD(n.value)&&n.value!==""||o&&kD(n.defaultValue)&&n.defaultValue!=="")}function OG(n){return n.startAdornment}function zG(n){return Ge("MuiInputBase",n)}const LG=qe("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),fc=LG,jG=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],Qg=(n,o)=>{const{ownerState:a}=n;return[o.root,a.formControl&&o.formControl,a.startAdornment&&o.adornedStart,a.endAdornment&&o.adornedEnd,a.error&&o.error,a.size==="small"&&o.sizeSmall,a.multiline&&o.multiline,a.color&&o[`color${_e(a.color)}`],a.fullWidth&&o.fullWidth,a.hiddenLabel&&o.hiddenLabel]},Zg=(n,o)=>{const{ownerState:a}=n;return[o.input,a.size==="small"&&o.inputSizeSmall,a.multiline&&o.inputMultiline,a.type==="search"&&o.inputTypeSearch,a.startAdornment&&o.inputAdornedStart,a.endAdornment&&o.inputAdornedEnd,a.hiddenLabel&&o.inputHiddenLabel]},FG=n=>{const{classes:o,color:a,disabled:c,error:u,endAdornment:p,focused:g,formControl:k,fullWidth:m,hiddenLabel:C,multiline:A,readOnly:_,size:y,startAdornment:E,type:S}=n,D={root:["root",`color${_e(a)}`,c&&"disabled",u&&"error",m&&"fullWidth",g&&"focused",k&&"formControl",y==="small"&&"sizeSmall",A&&"multiline",E&&"adornedStart",p&&"adornedEnd",C&&"hiddenLabel",_&&"readOnly"],input:["input",c&&"disabled",S==="search"&&"inputTypeSearch",A&&"inputMultiline",y==="small"&&"inputSizeSmall",C&&"inputHiddenLabel",E&&"inputAdornedStart",p&&"inputAdornedEnd",_&&"readOnly"]};return Qe(D,zG,o)},Jg=fe("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Qg})(({theme:n,ownerState:o})=>U({},n.typography.body1,{color:(n.vars||n).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${fc.disabled}`]:{color:(n.vars||n).palette.text.disabled,cursor:"default"}},o.multiline&&U({padding:"4px 0 5px"},o.size==="small"&&{paddingTop:1}),o.fullWidth&&{width:"100%"})),Xg=fe("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Zg})(({theme:n,ownerState:o})=>{const a=n.palette.mode==="light",c=U({color:"currentColor"},n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:a?.42:.5},{transition:n.transitions.create("opacity",{duration:n.transitions.duration.shorter})}),u={opacity:"0 !important"},p=n.vars?{opacity:n.vars.opacity.inputPlaceholder}:{opacity:a?.42:.5};return U({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":c,"&::-moz-placeholder":c,"&:-ms-input-placeholder":c,"&::-ms-input-placeholder":c,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${fc.formControl} &`]:{"&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus::-webkit-input-placeholder":p,"&:focus::-moz-placeholder":p,"&:focus:-ms-input-placeholder":p,"&:focus::-ms-input-placeholder":p},[`&.${fc.disabled}`]:{opacity:1,WebkitTextFillColor:(n.vars||n).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},o.size==="small"&&{paddingTop:1},o.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},o.type==="search"&&{MozAppearance:"textfield"})}),VG=V.jsx(v4,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),$G=z.forwardRef(function(o,a){var c;const u=Ke({props:o,name:"MuiInputBase"}),{"aria-describedby":p,autoComplete:g,autoFocus:k,className:m,components:C={},componentsProps:A={},defaultValue:_,disabled:y,disableInjectingGlobalStyles:E,endAdornment:S,fullWidth:D=!1,id:R,inputComponent:I="input",inputProps:P={},inputRef:B,maxRows:L,minRows:M,multiline:W=!1,name:H,onBlur:K,onChange:Z,onClick:Y,onFocus:ee,onKeyDown:ce,onKeyUp:ie,placeholder:te,readOnly:oe,renderSuffix:de,rows:re,slotProps:se={},slots:he={},startAdornment:me,type:Te="text",value:Ie}=u,He=ve(u,jG),Ne=P.value!=null?P.value:Ie,{current:we}=z.useRef(Ne!=null),Pe=z.useRef(),Ze=z.useCallback(Ve=>{},[]),Ce=dn(Pe,B,P.ref,Ze),[Me,tt]=z.useState(!1),Be=Pa(),ge=yc({props:u,muiFormControl:Be,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ge.focused=Be?Be.focused:Me,z.useEffect(()=>{!Be&&y&&Me&&(tt(!1),K&&K())},[Be,y,Me,K]);const Ye=Be&&Be.onFilled,it=Be&&Be.onEmpty,Bt=z.useCallback(Ve=>{jf(Ve)?Ye&&Ye():it&&it()},[Ye,it]);Yr(()=>{we&&Bt({value:Ne})},[Ne,Bt,we]);const Vt=Ve=>{if(ge.disabled){Ve.stopPropagation();return}ee&&ee(Ve),P.onFocus&&P.onFocus(Ve),Be&&Be.onFocus?Be.onFocus(Ve):tt(!0)},We=Ve=>{K&&K(Ve),P.onBlur&&P.onBlur(Ve),Be&&Be.onBlur?Be.onBlur(Ve):tt(!1)},Pt=(Ve,...Ae)=>{if(!we){const Ee=Ve.target||Pe.current;if(Ee==null)throw new Error(bs(1));Bt({value:Ee.value})}P.onChange&&P.onChange(Ve,...Ae),Z&&Z(Ve,...Ae)};z.useEffect(()=>{Bt(Pe.current)},[]);const st=Ve=>{Pe.current&&Ve.currentTarget===Ve.target&&Pe.current.focus(),Y&&!ge.disabled&&Y(Ve)};let je=I,at=P;W&&je==="input"&&(re?at=U({type:void 0,minRows:re,maxRows:re},at):at=U({type:void 0,maxRows:L,minRows:M},at),je=BW);const Zt=Ve=>{Bt(Ve.animationName==="mui-auto-fill-cancel"?Pe.current:{value:"x"})};z.useEffect(()=>{Be&&Be.setAdornedStart(!!me)},[Be,me]);const Le=U({},u,{color:ge.color||"primary",disabled:ge.disabled,endAdornment:S,error:ge.error,focused:ge.focused,formControl:Be,fullWidth:D,hiddenLabel:ge.hiddenLabel,multiline:W,size:ge.size,startAdornment:me,type:Te}),ft=FG(Le),vt=he.root||C.Root||Jg,un=se.root||A.root||{},Bn=he.input||C.Input||Xg;return at=U({},at,(c=se.input)!=null?c:A.input),V.jsxs(z.Fragment,{children:[!E&&VG,V.jsxs(vt,U({},un,!yu(vt)&&{ownerState:U({},Le,un.ownerState)},{ref:a,onClick:st},He,{className:De(ft.root,un.className,m,oe&&"MuiInputBase-readOnly"),children:[me,V.jsx(Yg.Provider,{value:null,children:V.jsx(Bn,U({ownerState:Le,"aria-invalid":ge.error,"aria-describedby":p,autoComplete:g,autoFocus:k,defaultValue:_,disabled:ge.disabled,id:R,onAnimationStart:Zt,name:H,placeholder:te,readOnly:oe,required:ge.required,rows:re,value:Ne,onKeyDown:ce,onKeyUp:ie,type:Te},at,!yu(Bn)&&{as:je,ownerState:U({},Le,at.ownerState)},{ref:Ce,className:De(ft.input,at.className,oe&&"MuiInputBase-readOnly"),onBlur:We,onChange:Pt,onFocus:Vt}))}),S,de?de(U({},ge,{startAdornment:me})):null]}))]})}),uC=$G;function UG(n){return Ge("MuiInput",n)}const HG=U({},fc,qe("MuiInput",["root","underline","input"])),Ad=HG;function WG(n){return Ge("MuiOutlinedInput",n)}const GG=U({},fc,qe("MuiOutlinedInput",["root","notchedOutline","input"])),qi=GG;function qG(n){return Ge("MuiFilledInput",n)}const KG=U({},fc,qe("MuiFilledInput",["root","underline","input"])),ra=KG,YG=Gt(V.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),QG=Gt(V.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function ZG(n){return Ge("MuiAvatar",n)}qe("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const JG=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],XG=n=>{const{classes:o,variant:a,colorDefault:c}=n;return Qe({root:["root",a,c&&"colorDefault"],img:["img"],fallback:["fallback"]},ZG,o)},eq=fe("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,o[a.variant],a.colorDefault&&o.colorDefault]}})(({theme:n,ownerState:o})=>U({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:n.typography.fontFamily,fontSize:n.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},o.variant==="rounded"&&{borderRadius:(n.vars||n).shape.borderRadius},o.variant==="square"&&{borderRadius:0},o.colorDefault&&U({color:(n.vars||n).palette.background.default},n.vars?{backgroundColor:n.vars.palette.Avatar.defaultBg}:{backgroundColor:n.palette.mode==="light"?n.palette.grey[400]:n.palette.grey[600]}))),tq=fe("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(n,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),nq=fe(QG,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(n,o)=>o.fallback})({width:"75%",height:"75%"});function oq({crossOrigin:n,referrerPolicy:o,src:a,srcSet:c}){const[u,p]=z.useState(!1);return z.useEffect(()=>{if(!a&&!c)return;p(!1);let g=!0;const k=new Image;return k.onload=()=>{g&&p("loaded")},k.onerror=()=>{g&&p("error")},k.crossOrigin=n,k.referrerPolicy=o,k.src=a,c&&(k.srcset=c),()=>{g=!1}},[n,o,a,c]),u}const rq=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiAvatar"}),{alt:u,children:p,className:g,component:k="div",imgProps:m,sizes:C,src:A,srcSet:_,variant:y="circular"}=c,E=ve(c,JG);let S=null;const D=oq(U({},m,{src:A,srcSet:_})),R=A||_,I=R&&D!=="error",P=U({},c,{colorDefault:!I,component:k,variant:y}),B=XG(P);return I?S=V.jsx(tq,U({alt:u,src:A,srcSet:_,sizes:C,ownerState:P,className:B.img},m)):p!=null?S=p:R&&u?S=u[0]:S=V.jsx(nq,{ownerState:P,className:B.fallback}),V.jsx(eq,U({as:k,ownerState:P,className:De(B.root,g),ref:a},E,{children:S}))}),hC=rq,iq=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],sq={entering:{opacity:1},entered:{opacity:1}},aq=z.forwardRef(function(o,a){const c=As(),u={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{addEndListener:p,appear:g=!0,children:k,easing:m,in:C,onEnter:A,onEntered:_,onEntering:y,onExit:E,onExited:S,onExiting:D,style:R,timeout:I=u,TransitionComponent:P=aC}=o,B=ve(o,iq),L=z.useRef(null),M=dn(L,k.ref,a),W=te=>oe=>{if(te){const de=L.current;oe===void 0?te(de):te(de,oe)}},H=W(y),K=W((te,oe)=>{dC(te);const de=pc({style:R,timeout:I,easing:m},{mode:"enter"});te.style.webkitTransition=c.transitions.create("opacity",de),te.style.transition=c.transitions.create("opacity",de),A&&A(te,oe)}),Z=W(_),Y=W(D),ee=W(te=>{const oe=pc({style:R,timeout:I,easing:m},{mode:"exit"});te.style.webkitTransition=c.transitions.create("opacity",oe),te.style.transition=c.transitions.create("opacity",oe),E&&E(te)}),ce=W(S),ie=te=>{p&&p(L.current,te)};return V.jsx(P,U({appear:g,in:C,nodeRef:L,onEnter:K,onEntered:Z,onEntering:H,onExit:ee,onExited:ce,onExiting:Y,addEndListener:ie,timeout:I},B,{children:(te,oe)=>z.cloneElement(k,U({style:U({opacity:0,visibility:te==="exited"&&!C?"hidden":void 0},sq[te],R,k.props.style),ref:M},oe))}))}),C4=aq;function lq(n){return Ge("MuiBackdrop",n)}qe("MuiBackdrop",["root","invisible"]);const cq=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],dq=n=>{const{classes:o,invisible:a}=n;return Qe({root:["root",a&&"invisible"]},lq,o)},uq=fe("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,a.invisible&&o.invisible]}})(({ownerState:n})=>U({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})),hq=z.forwardRef(function(o,a){var c,u,p;const g=Ke({props:o,name:"MuiBackdrop"}),{children:k,className:m,component:C="div",components:A={},componentsProps:_={},invisible:y=!1,open:E,slotProps:S={},slots:D={},TransitionComponent:R=C4,transitionDuration:I}=g,P=ve(g,cq),B=U({},g,{component:C,invisible:y}),L=dq(B),M=(c=S.root)!=null?c:_.root;return V.jsx(R,U({in:E,timeout:I},P,{children:V.jsx(uq,U({"aria-hidden":!0},M,{as:(u=(p=D.root)!=null?p:A.Root)!=null?u:C,className:De(L.root,m,M==null?void 0:M.className),ownerState:U({},B,M==null?void 0:M.ownerState),classes:L,ref:a,children:k}))}))}),Lu=hq,pq=Of(),fq=I$({themeId:xa,defaultTheme:pq,defaultClassName:"MuiBox-root",generateClassName:AM.generate}),ju=fq;function gq(n){return Ge("MuiButton",n)}const mq=qe("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Bp=mq,bq=z.createContext({}),kq=bq,wq=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],vq=n=>{const{color:o,disableElevation:a,fullWidth:c,size:u,variant:p,classes:g}=n,k={root:["root",p,`${p}${_e(o)}`,`size${_e(u)}`,`${p}Size${_e(u)}`,o==="inherit"&&"colorInherit",a&&"disableElevation",c&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${_e(u)}`],endIcon:["endIcon",`iconSize${_e(u)}`]},m=Qe(k,gq,g);return U({},g,m)},y4=n=>U({},n.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},n.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},n.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Cq=fe(Kg,{shouldForwardProp:n=>vr(n)||n==="classes",name:"MuiButton",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,o[a.variant],o[`${a.variant}${_e(a.color)}`],o[`size${_e(a.size)}`],o[`${a.variant}Size${_e(a.size)}`],a.color==="inherit"&&o.colorInherit,a.disableElevation&&o.disableElevation,a.fullWidth&&o.fullWidth]}})(({theme:n,ownerState:o})=>{var a,c;const u=n.palette.mode==="light"?n.palette.grey[300]:n.palette.grey[800],p=n.palette.mode==="light"?n.palette.grey.A100:n.palette.grey[700];return U({},n.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":U({textDecoration:"none",backgroundColor:n.vars?`rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`:Xn(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="text"&&o.color!=="inherit"&&{backgroundColor:n.vars?`rgba(${n.vars.palette[o.color].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:Xn(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="outlined"&&o.color!=="inherit"&&{border:`1px solid ${(n.vars||n).palette[o.color].main}`,backgroundColor:n.vars?`rgba(${n.vars.palette[o.color].mainChannel} / ${n.vars.palette.action.hoverOpacity})`:Xn(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="contained"&&{backgroundColor:n.vars?n.vars.palette.Button.inheritContainedHoverBg:p,boxShadow:(n.vars||n).shadows[4],"@media (hover: none)":{boxShadow:(n.vars||n).shadows[2],backgroundColor:(n.vars||n).palette.grey[300]}},o.variant==="contained"&&o.color!=="inherit"&&{backgroundColor:(n.vars||n).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(n.vars||n).palette[o.color].main}}),"&:active":U({},o.variant==="contained"&&{boxShadow:(n.vars||n).shadows[8]}),[`&.${Bp.focusVisible}`]:U({},o.variant==="contained"&&{boxShadow:(n.vars||n).shadows[6]}),[`&.${Bp.disabled}`]:U({color:(n.vars||n).palette.action.disabled},o.variant==="outlined"&&{border:`1px solid ${(n.vars||n).palette.action.disabledBackground}`},o.variant==="contained"&&{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground})},o.variant==="text"&&{padding:"6px 8px"},o.variant==="text"&&o.color!=="inherit"&&{color:(n.vars||n).palette[o.color].main},o.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},o.variant==="outlined"&&o.color!=="inherit"&&{color:(n.vars||n).palette[o.color].main,border:n.vars?`1px solid rgba(${n.vars.palette[o.color].mainChannel} / 0.5)`:`1px solid ${Xn(n.palette[o.color].main,.5)}`},o.variant==="contained"&&{color:n.vars?n.vars.palette.text.primary:(a=(c=n.palette).getContrastText)==null?void 0:a.call(c,n.palette.grey[300]),backgroundColor:n.vars?n.vars.palette.Button.inheritContainedBg:u,boxShadow:(n.vars||n).shadows[2]},o.variant==="contained"&&o.color!=="inherit"&&{color:(n.vars||n).palette[o.color].contrastText,backgroundColor:(n.vars||n).palette[o.color].main},o.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},o.size==="small"&&o.variant==="text"&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},o.size==="large"&&o.variant==="text"&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},o.size==="small"&&o.variant==="outlined"&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},o.size==="large"&&o.variant==="outlined"&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},o.size==="small"&&o.variant==="contained"&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},o.size==="large"&&o.variant==="contained"&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})},({ownerState:n})=>n.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Bp.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Bp.disabled}`]:{boxShadow:"none"}}),yq=fe("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.startIcon,o[`iconSize${_e(a.size)}`]]}})(({ownerState:n})=>U({display:"inherit",marginRight:8,marginLeft:-4},n.size==="small"&&{marginLeft:-2},y4(n))),Aq=fe("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.endIcon,o[`iconSize${_e(a.size)}`]]}})(({ownerState:n})=>U({display:"inherit",marginRight:-4,marginLeft:8},n.size==="small"&&{marginRight:-2},y4(n))),_q=z.forwardRef(function(o,a){const c=z.useContext(kq),u=Rv(c,o),p=Ke({props:u,name:"MuiButton"}),{children:g,color:k="primary",component:m="button",className:C,disabled:A=!1,disableElevation:_=!1,disableFocusRipple:y=!1,endIcon:E,focusVisibleClassName:S,fullWidth:D=!1,size:R="medium",startIcon:I,type:P,variant:B="text"}=p,L=ve(p,wq),M=U({},p,{color:k,component:m,disabled:A,disableElevation:_,disableFocusRipple:y,fullWidth:D,size:R,type:P,variant:B}),W=vq(M),H=I&&V.jsx(yq,{className:W.startIcon,ownerState:M,children:I}),K=E&&V.jsx(Aq,{className:W.endIcon,ownerState:M,children:E});return V.jsxs(Cq,U({ownerState:M,className:De(c.className,W.root,C),component:m,disabled:A,focusRipple:!y,focusVisibleClassName:De(W.focusVisible,S),ref:a,type:P},L,{classes:W,children:[H,g,K]}))}),ks=_q;function xq(n){return Ge("MuiCircularProgress",n)}qe("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const Eq=["className","color","disableShrink","size","style","thickness","value","variant"];let em=n=>n,wD,vD,CD,yD;const Ki=44,Sq=Nu(wD||(wD=em`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Dq=Nu(vD||(vD=em`
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
`)),Tq=n=>{const{classes:o,variant:a,color:c,disableShrink:u}=n,p={root:["root",a,`color${_e(c)}`],svg:["svg"],circle:["circle",`circle${_e(a)}`,u&&"circleDisableShrink"]};return Qe(p,xq,o)},Iq=fe("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,o[a.variant],o[`color${_e(a.color)}`]]}})(({ownerState:n,theme:o})=>U({display:"inline-block"},n.variant==="determinate"&&{transition:o.transitions.create("transform")},n.color!=="inherit"&&{color:(o.vars||o).palette[n.color].main}),({ownerState:n})=>n.variant==="indeterminate"&&Uv(CD||(CD=em`
      animation: ${0} 1.4s linear infinite;
    `),Sq)),Mq=fe("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(n,o)=>o.svg})({display:"block"}),Pq=fe("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.circle,o[`circle${_e(a.variant)}`],a.disableShrink&&o.circleDisableShrink]}})(({ownerState:n,theme:o})=>U({stroke:"currentColor"},n.variant==="determinate"&&{transition:o.transitions.create("stroke-dashoffset")},n.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:n})=>n.variant==="indeterminate"&&!n.disableShrink&&Uv(yD||(yD=em`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Dq)),Nq=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiCircularProgress"}),{className:u,color:p="primary",disableShrink:g=!1,size:k=40,style:m,thickness:C=3.6,value:A=0,variant:_="indeterminate"}=c,y=ve(c,Eq),E=U({},c,{color:p,disableShrink:g,size:k,thickness:C,value:A,variant:_}),S=Tq(E),D={},R={},I={};if(_==="determinate"){const P=2*Math.PI*((Ki-C)/2);D.strokeDasharray=P.toFixed(3),I["aria-valuenow"]=Math.round(A),D.strokeDashoffset=`${((100-A)/100*P).toFixed(3)}px`,R.transform="rotate(-90deg)"}return V.jsx(Iq,U({className:De(S.root,u),style:U({width:k,height:k},R,m),ownerState:E,ref:a,role:"progressbar"},I,y,{children:V.jsx(Mq,{className:S.svg,ownerState:E,viewBox:`${Ki/2} ${Ki/2} ${Ki} ${Ki}`,children:V.jsx(Pq,{className:S.circle,style:D,ownerState:E,cx:Ki,cy:Ki,r:(Ki-C)/2,fill:"none",strokeWidth:C})})}))}),Bq=Nq,Rq=eU({createStyledComponent:fe("div",{name:"MuiContainer",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,o[`maxWidth${_e(String(a.maxWidth))}`],a.fixed&&o.fixed,a.disableGutters&&o.disableGutters]}}),useThemeProps:n=>Ke({props:n,name:"MuiContainer"})}),A4=Rq,Oq=(n,o)=>U({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},o&&!n.vars&&{colorScheme:n.palette.mode}),zq=n=>U({color:(n.vars||n).palette.text.primary},n.typography.body1,{backgroundColor:(n.vars||n).palette.background.default,"@media print":{backgroundColor:(n.vars||n).palette.common.white}}),Lq=(n,o=!1)=>{var a,c;const u={};o&&n.colorSchemes&&Object.entries(n.colorSchemes).forEach(([k,m])=>{var C;u[n.getColorSchemeSelector(k).replace(/\s*&/,"")]={colorScheme:(C=m.palette)==null?void 0:C.mode}});let p=U({html:Oq(n,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:n.typography.fontWeightBold},body:U({margin:0},zq(n),{"&::backdrop":{backgroundColor:(n.vars||n).palette.background.default}})},u);const g=(a=n.components)==null||(c=a.MuiCssBaseline)==null?void 0:c.styleOverrides;return g&&(p=[p,g]),p};function jq(n){const o=Ke({props:n,name:"MuiCssBaseline"}),{children:a,enableColorScheme:c=!1}=o;return V.jsxs(z.Fragment,{children:[V.jsx(v4,{styles:u=>Lq(u,c)}),a]})}const Fq=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","open","slotProps","slots","theme"],Vq=fe("div",{name:"MuiModal",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,!a.open&&a.exited&&o.hidden]}})(({theme:n,ownerState:o})=>U({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!o.open&&o.exited&&{visibility:"hidden"})),$q=fe(Lu,{name:"MuiModal",slot:"Backdrop",overridesResolver:(n,o)=>o.backdrop})({zIndex:-1}),Uq=z.forwardRef(function(o,a){var c,u,p,g,k,m;const C=Ke({name:"MuiModal",props:o}),{BackdropComponent:A=$q,BackdropProps:_,classes:y,className:E,closeAfterTransition:S=!1,children:D,container:R,component:I,components:P={},componentsProps:B={},disableAutoFocus:L=!1,disableEnforceFocus:M=!1,disableEscapeKeyDown:W=!1,disablePortal:H=!1,disableRestoreFocus:K=!1,disableScrollLock:Z=!1,hideBackdrop:Y=!1,keepMounted:ee=!1,onBackdropClick:ce,onClose:ie,open:te,slotProps:oe,slots:de,theme:re}=C,se=ve(C,Fq),[he,me]=z.useState(!0),Te={container:R,closeAfterTransition:S,disableAutoFocus:L,disableEnforceFocus:M,disableEscapeKeyDown:W,disablePortal:H,disableRestoreFocus:K,disableScrollLock:Z,hideBackdrop:Y,keepMounted:ee,onBackdropClick:ce,onClose:ie,open:te},Ie=U({},C,Te,{exited:he}),He=(c=(u=de==null?void 0:de.root)!=null?u:P.Root)!=null?c:Vq,Ne=(p=(g=de==null?void 0:de.backdrop)!=null?g:P.Backdrop)!=null?p:A,we=(k=oe==null?void 0:oe.root)!=null?k:B.root,Pe=(m=oe==null?void 0:oe.backdrop)!=null?m:B.backdrop;return V.jsx(TW,U({slots:{root:He,backdrop:Ne},slotProps:{root:()=>U({},yw(we,Ie),!yu(He)&&{as:I,theme:re},{className:De(E,we==null?void 0:we.className,y==null?void 0:y.root,!Ie.open&&Ie.exited&&(y==null?void 0:y.hidden))}),backdrop:()=>U({},_,yw(Pe,Ie),{className:De(Pe==null?void 0:Pe.className,_==null?void 0:_.className,y==null?void 0:y.backdrop)})},onTransitionEnter:()=>me(!1),onTransitionExited:()=>me(!0),ref:a},se,Te,{children:D}))}),_4=Uq;function Hq(n){return Ge("MuiDialog",n)}const Wq=qe("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),d0=Wq,Gq=z.createContext({}),qq=Gq,Kq=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Yq=fe(Lu,{name:"MuiDialog",slot:"Backdrop",overrides:(n,o)=>o.backdrop})({zIndex:-1}),Qq=n=>{const{classes:o,scroll:a,maxWidth:c,fullWidth:u,fullScreen:p}=n,g={root:["root"],container:["container",`scroll${_e(a)}`],paper:["paper",`paperScroll${_e(a)}`,`paperWidth${_e(String(c))}`,u&&"paperFullWidth",p&&"paperFullScreen"]};return Qe(g,Hq,o)},Zq=fe(_4,{name:"MuiDialog",slot:"Root",overridesResolver:(n,o)=>o.root})({"@media print":{position:"absolute !important"}}),Jq=fe("div",{name:"MuiDialog",slot:"Container",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.container,o[`scroll${_e(a.scroll)}`]]}})(({ownerState:n})=>U({height:"100%","@media print":{height:"auto"},outline:0},n.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},n.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Xq=fe(ko,{name:"MuiDialog",slot:"Paper",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.paper,o[`scrollPaper${_e(a.scroll)}`],o[`paperWidth${_e(String(a.maxWidth))}`],a.fullWidth&&o.paperFullWidth,a.fullScreen&&o.paperFullScreen]}})(({theme:n,ownerState:o})=>U({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},o.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},o.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},o.maxWidth==="xs"&&{maxWidth:n.breakpoints.unit==="px"?Math.max(n.breakpoints.values.xs,444):`max(${n.breakpoints.values.xs}${n.breakpoints.unit}, 444px)`,[`&.${d0.paperScrollBody}`]:{[n.breakpoints.down(Math.max(n.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.maxWidth&&o.maxWidth!=="xs"&&{maxWidth:`${n.breakpoints.values[o.maxWidth]}${n.breakpoints.unit}`,[`&.${d0.paperScrollBody}`]:{[n.breakpoints.down(n.breakpoints.values[o.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${d0.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),eK=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiDialog"}),u=As(),p={enter:u.transitions.duration.enteringScreen,exit:u.transitions.duration.leavingScreen},{"aria-describedby":g,"aria-labelledby":k,BackdropComponent:m,BackdropProps:C,children:A,className:_,disableEscapeKeyDown:y=!1,fullScreen:E=!1,fullWidth:S=!1,maxWidth:D="sm",onBackdropClick:R,onClose:I,open:P,PaperComponent:B=ko,PaperProps:L={},scroll:M="paper",TransitionComponent:W=C4,transitionDuration:H=p,TransitionProps:K}=c,Z=ve(c,Kq),Y=U({},c,{disableEscapeKeyDown:y,fullScreen:E,fullWidth:S,maxWidth:D,scroll:M}),ee=Qq(Y),ce=z.useRef(),ie=re=>{ce.current=re.target===re.currentTarget},te=re=>{ce.current&&(ce.current=null,R&&R(re),I&&I(re,"backdropClick"))},oe=Bv(k),de=z.useMemo(()=>({titleId:oe}),[oe]);return V.jsx(Zq,U({className:De(ee.root,_),closeAfterTransition:!0,components:{Backdrop:Yq},componentsProps:{backdrop:U({transitionDuration:H,as:m},C)},disableEscapeKeyDown:y,onClose:I,open:P,ref:a,onClick:te,ownerState:Y},Z,{children:V.jsx(W,U({appear:!0,in:P,timeout:H,role:"presentation"},K,{children:V.jsx(Jq,{className:De(ee.container),onMouseDown:ie,ownerState:Y,children:V.jsx(Xq,U({as:B,elevation:24,role:"dialog","aria-describedby":g,"aria-labelledby":oe},L,{className:De(ee.paper,L.className),ownerState:Y,children:V.jsx(qq.Provider,{value:de,children:A})}))})}))}))}),pC=eK;function tK(n){return Ge("MuiDialogActions",n)}qe("MuiDialogActions",["root","spacing"]);const nK=["className","disableSpacing"],oK=n=>{const{classes:o,disableSpacing:a}=n;return Qe({root:["root",!a&&"spacing"]},tK,o)},rK=fe("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,!a.disableSpacing&&o.spacing]}})(({ownerState:n})=>U({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),iK=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiDialogActions"}),{className:u,disableSpacing:p=!1}=c,g=ve(c,nK),k=U({},c,{disableSpacing:p}),m=oK(k);return V.jsx(rK,U({className:De(m.root,u),ownerState:k,ref:a},g))}),fC=iK;function sK(n){return Ge("MuiDivider",n)}const aK=qe("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),AD=aK,lK=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],cK=n=>{const{absolute:o,children:a,classes:c,flexItem:u,light:p,orientation:g,textAlign:k,variant:m}=n;return Qe({root:["root",o&&"absolute",m,p&&"light",g==="vertical"&&"vertical",u&&"flexItem",a&&"withChildren",a&&g==="vertical"&&"withChildrenVertical",k==="right"&&g!=="vertical"&&"textAlignRight",k==="left"&&g!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",g==="vertical"&&"wrapperVertical"]},sK,c)},dK=fe("div",{name:"MuiDivider",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,a.absolute&&o.absolute,o[a.variant],a.light&&o.light,a.orientation==="vertical"&&o.vertical,a.flexItem&&o.flexItem,a.children&&o.withChildren,a.children&&a.orientation==="vertical"&&o.withChildrenVertical,a.textAlign==="right"&&a.orientation!=="vertical"&&o.textAlignRight,a.textAlign==="left"&&a.orientation!=="vertical"&&o.textAlignLeft]}})(({theme:n,ownerState:o})=>U({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(n.vars||n).palette.divider,borderBottomWidth:"thin"},o.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},o.light&&{borderColor:n.vars?`rgba(${n.vars.palette.dividerChannel} / 0.08)`:Xn(n.palette.divider,.08)},o.variant==="inset"&&{marginLeft:72},o.variant==="middle"&&o.orientation==="horizontal"&&{marginLeft:n.spacing(2),marginRight:n.spacing(2)},o.variant==="middle"&&o.orientation==="vertical"&&{marginTop:n.spacing(1),marginBottom:n.spacing(1)},o.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},o.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:n})=>U({},n.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:n,ownerState:o})=>U({},o.children&&o.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(n.vars||n).palette.divider}`}}),({theme:n,ownerState:o})=>U({},o.children&&o.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(n.vars||n).palette.divider}`}}),({ownerState:n})=>U({},n.textAlign==="right"&&n.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},n.textAlign==="left"&&n.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),uK=fe("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.wrapper,a.orientation==="vertical"&&o.wrapperVertical]}})(({theme:n,ownerState:o})=>U({display:"inline-block",paddingLeft:`calc(${n.spacing(1)} * 1.2)`,paddingRight:`calc(${n.spacing(1)} * 1.2)`},o.orientation==="vertical"&&{paddingTop:`calc(${n.spacing(1)} * 1.2)`,paddingBottom:`calc(${n.spacing(1)} * 1.2)`})),hK=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiDivider"}),{absolute:u=!1,children:p,className:g,component:k=p?"div":"hr",flexItem:m=!1,light:C=!1,orientation:A="horizontal",role:_=k!=="hr"?"separator":void 0,textAlign:y="center",variant:E="fullWidth"}=c,S=ve(c,lK),D=U({},c,{absolute:u,component:k,flexItem:m,light:C,orientation:A,role:_,textAlign:y,variant:E}),R=cK(D);return V.jsx(dK,U({as:k,className:De(R.root,g),role:_,ref:a,ownerState:D},S,{children:p?V.jsx(uK,{className:R.wrapper,ownerState:D,children:p}):null}))}),ws=hK;function pK(n){return Ge("MuiFab",n)}const fK=qe("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),_D=fK,gK=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],mK=n=>{const{color:o,variant:a,classes:c,size:u}=n,p={root:["root",a,`size${_e(u)}`,o==="inherit"?"colorInherit":o]},g=Qe(p,pK,c);return U({},c,g)},bK=fe(Kg,{name:"MuiFab",slot:"Root",shouldForwardProp:n=>vr(n)||n==="classes",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,o[a.variant],o[`size${_e(a.size)}`],a.color==="inherit"&&o.colorInherit,o[_e(a.size)],o[a.color]]}})(({theme:n,ownerState:o})=>{var a,c;return U({},n.typography.button,{minHeight:36,transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(n.vars||n).zIndex.fab,boxShadow:(n.vars||n).shadows[6],"&:active":{boxShadow:(n.vars||n).shadows[12]},color:n.vars?n.vars.palette.text.primary:(a=(c=n.palette).getContrastText)==null?void 0:a.call(c,n.palette.grey[300]),backgroundColor:(n.vars||n).palette.grey[300],"&:hover":{backgroundColor:(n.vars||n).palette.grey.A100,"@media (hover: none)":{backgroundColor:(n.vars||n).palette.grey[300]},textDecoration:"none"},[`&.${_D.focusVisible}`]:{boxShadow:(n.vars||n).shadows[6]}},o.size==="small"&&{width:40,height:40},o.size==="medium"&&{width:48,height:48},o.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},o.variant==="extended"&&o.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},o.variant==="extended"&&o.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},o.color==="inherit"&&{color:"inherit"})},({theme:n,ownerState:o})=>U({},o.color!=="inherit"&&o.color!=="default"&&(n.vars||n).palette[o.color]!=null&&{color:(n.vars||n).palette[o.color].contrastText,backgroundColor:(n.vars||n).palette[o.color].main,"&:hover":{backgroundColor:(n.vars||n).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(n.vars||n).palette[o.color].main}}}),({theme:n})=>({[`&.${_D.disabled}`]:{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground}})),kK=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiFab"}),{children:u,className:p,color:g="default",component:k="button",disabled:m=!1,disableFocusRipple:C=!1,focusVisibleClassName:A,size:_="large",variant:y="circular"}=c,E=ve(c,gK),S=U({},c,{color:g,component:k,disabled:m,disableFocusRipple:C,size:_,variant:y}),D=mK(S);return V.jsx(bK,U({className:De(D.root,p),component:k,disabled:m,focusRipple:!C,focusVisibleClassName:De(D.focusVisible,A),ownerState:S,ref:a},E,{classes:D,children:u}))}),x4=kK,wK=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],vK=n=>{const{classes:o,disableUnderline:a}=n,u=Qe({root:["root",!a&&"underline"],input:["input"]},qG,o);return U({},o,u)},CK=fe(Jg,{shouldForwardProp:n=>vr(n)||n==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[...Qg(n,o),!a.disableUnderline&&o.underline]}})(({theme:n,ownerState:o})=>{var a;const c=n.palette.mode==="light",u=c?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",p=c?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",g=c?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",k=c?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return U({position:"relative",backgroundColor:n.vars?n.vars.palette.FilledInput.bg:p,borderTopLeftRadius:(n.vars||n).shape.borderRadius,borderTopRightRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),"&:hover":{backgroundColor:n.vars?n.vars.palette.FilledInput.hoverBg:g,"@media (hover: none)":{backgroundColor:n.vars?n.vars.palette.FilledInput.bg:p}},[`&.${ra.focused}`]:{backgroundColor:n.vars?n.vars.palette.FilledInput.bg:p},[`&.${ra.disabled}`]:{backgroundColor:n.vars?n.vars.palette.FilledInput.disabledBg:k}},!o.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(a=(n.vars||n).palette[o.color||"primary"])==null?void 0:a.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${ra.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${ra.error}`]:{"&:before, &:after":{borderBottomColor:(n.vars||n).palette.error.main}},"&:before":{borderBottom:`1px solid ${n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})`:u}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${ra.disabled}, .${ra.error}):before`]:{borderBottom:`1px solid ${(n.vars||n).palette.text.primary}`},[`&.${ra.disabled}:before`]:{borderBottomStyle:"dotted"}},o.startAdornment&&{paddingLeft:12},o.endAdornment&&{paddingRight:12},o.multiline&&U({padding:"25px 12px 8px"},o.size==="small"&&{paddingTop:21,paddingBottom:4},o.hiddenLabel&&{paddingTop:16,paddingBottom:17}))}),yK=fe(Xg,{name:"MuiFilledInput",slot:"Input",overridesResolver:Zg})(({theme:n,ownerState:o})=>U({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!n.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:n.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:n.palette.mode==="light"?null:"#fff",caretColor:n.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},n.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[n.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},o.size==="small"&&{paddingTop:21,paddingBottom:4},o.hiddenLabel&&{paddingTop:16,paddingBottom:17},o.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},o.startAdornment&&{paddingLeft:0},o.endAdornment&&{paddingRight:0},o.hiddenLabel&&o.size==="small"&&{paddingTop:8,paddingBottom:9})),E4=z.forwardRef(function(o,a){var c,u,p,g;const k=Ke({props:o,name:"MuiFilledInput"}),{components:m={},componentsProps:C,fullWidth:A=!1,inputComponent:_="input",multiline:y=!1,slotProps:E,slots:S={},type:D="text"}=k,R=ve(k,wK),I=U({},k,{fullWidth:A,inputComponent:_,multiline:y,type:D}),P=vK(k),B={root:{ownerState:I},input:{ownerState:I}},L=E??C?fo(E??C,B):B,M=(c=(u=S.root)!=null?u:m.Root)!=null?c:CK,W=(p=(g=S.input)!=null?g:m.Input)!=null?p:yK;return V.jsx(uC,U({slots:{root:M,input:W},componentsProps:L,fullWidth:A,inputComponent:_,multiline:y,ref:a,type:D},R,{classes:P}))});E4.muiName="Input";const S4=E4;function AK(n){return Ge("MuiFormControl",n)}qe("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const _K=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],xK=n=>{const{classes:o,margin:a,fullWidth:c}=n,u={root:["root",a!=="none"&&`margin${_e(a)}`,c&&"fullWidth"]};return Qe(u,AK,o)},EK=fe("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:n},o)=>U({},o.root,o[`margin${_e(n.margin)}`],n.fullWidth&&o.fullWidth)})(({ownerState:n})=>U({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},n.margin==="normal"&&{marginTop:16,marginBottom:8},n.margin==="dense"&&{marginTop:8,marginBottom:4},n.fullWidth&&{width:"100%"})),SK=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiFormControl"}),{children:u,className:p,color:g="primary",component:k="div",disabled:m=!1,error:C=!1,focused:A,fullWidth:_=!1,hiddenLabel:y=!1,margin:E="none",required:S=!1,size:D="medium",variant:R="outlined"}=c,I=ve(c,_K),P=U({},c,{color:g,component:k,disabled:m,error:C,fullWidth:_,hiddenLabel:y,margin:E,required:S,size:D,variant:R}),B=xK(P),[L,M]=z.useState(()=>{let ie=!1;return u&&z.Children.forEach(u,te=>{if(!Jp(te,["Input","Select"]))return;const oe=Jp(te,["Select"])?te.props.input:te;oe&&OG(oe.props)&&(ie=!0)}),ie}),[W,H]=z.useState(()=>{let ie=!1;return u&&z.Children.forEach(u,te=>{Jp(te,["Input","Select"])&&(jf(te.props,!0)||jf(te.props.inputProps,!0))&&(ie=!0)}),ie}),[K,Z]=z.useState(!1);m&&K&&Z(!1);const Y=A!==void 0&&!m?A:K;let ee;const ce=z.useMemo(()=>({adornedStart:L,setAdornedStart:M,color:g,disabled:m,error:C,filled:W,focused:Y,fullWidth:_,hiddenLabel:y,size:D,onBlur:()=>{Z(!1)},onEmpty:()=>{H(!1)},onFilled:()=>{H(!0)},onFocus:()=>{Z(!0)},registerEffect:ee,required:S,variant:R}),[L,g,m,C,W,Y,_,y,ee,S,D,R]);return V.jsx(Yg.Provider,{value:ce,children:V.jsx(EK,U({as:k,ownerState:P,className:De(B.root,p),ref:a},I,{children:u}))})}),DK=SK;function TK(n){return Ge("MuiFormHelperText",n)}const IK=qe("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),xD=IK;var ED;const MK=["children","className","component","disabled","error","filled","focused","margin","required","variant"],PK=n=>{const{classes:o,contained:a,size:c,disabled:u,error:p,filled:g,focused:k,required:m}=n,C={root:["root",u&&"disabled",p&&"error",c&&`size${_e(c)}`,a&&"contained",k&&"focused",g&&"filled",m&&"required"]};return Qe(C,TK,o)},NK=fe("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,a.size&&o[`size${_e(a.size)}`],a.contained&&o.contained,a.filled&&o.filled]}})(({theme:n,ownerState:o})=>U({color:(n.vars||n).palette.text.secondary},n.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${xD.disabled}`]:{color:(n.vars||n).palette.text.disabled},[`&.${xD.error}`]:{color:(n.vars||n).palette.error.main}},o.size==="small"&&{marginTop:4},o.contained&&{marginLeft:14,marginRight:14})),BK=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiFormHelperText"}),{children:u,className:p,component:g="p"}=c,k=ve(c,MK),m=Pa(),C=yc({props:c,muiFormControl:m,states:["variant","size","disabled","error","filled","focused","required"]}),A=U({},c,{component:g,contained:C.variant==="filled"||C.variant==="outlined",variant:C.variant,size:C.size,disabled:C.disabled,error:C.error,filled:C.filled,focused:C.focused,required:C.required}),_=PK(A);return V.jsx(NK,U({as:g,ownerState:A,className:De(_.root,p),ref:a},k,{children:u===" "?ED||(ED=V.jsx("span",{className:"notranslate",children:"​"})):u}))}),RK=BK;function OK(n){return Ge("MuiFormLabel",n)}const zK=qe("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Zd=zK,LK=["children","className","color","component","disabled","error","filled","focused","required"],jK=n=>{const{classes:o,color:a,focused:c,disabled:u,error:p,filled:g,required:k}=n,m={root:["root",`color${_e(a)}`,u&&"disabled",p&&"error",g&&"filled",c&&"focused",k&&"required"],asterisk:["asterisk",p&&"error"]};return Qe(m,OK,o)},FK=fe("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:n},o)=>U({},o.root,n.color==="secondary"&&o.colorSecondary,n.filled&&o.filled)})(({theme:n,ownerState:o})=>U({color:(n.vars||n).palette.text.secondary},n.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${Zd.focused}`]:{color:(n.vars||n).palette[o.color].main},[`&.${Zd.disabled}`]:{color:(n.vars||n).palette.text.disabled},[`&.${Zd.error}`]:{color:(n.vars||n).palette.error.main}})),VK=fe("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(n,o)=>o.asterisk})(({theme:n})=>({[`&.${Zd.error}`]:{color:(n.vars||n).palette.error.main}})),$K=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiFormLabel"}),{children:u,className:p,component:g="label"}=c,k=ve(c,LK),m=Pa(),C=yc({props:c,muiFormControl:m,states:["color","required","focused","disabled","error","filled"]}),A=U({},c,{color:C.color||"primary",component:g,disabled:C.disabled,error:C.error,filled:C.filled,focused:C.focused,required:C.required}),_=jK(A);return V.jsxs(FK,U({as:g,ownerState:A,className:De(_.root,p),ref:a},k,{children:[u,C.required&&V.jsxs(VK,{ownerState:A,"aria-hidden":!0,className:_.asterisk,children:[" ","*"]})]}))}),UK=$K,HK=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Tw(n){return`scale(${n}, ${n**2})`}const WK={entering:{opacity:1,transform:Tw(1)},entered:{opacity:1,transform:"none"}},u0=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),D4=z.forwardRef(function(o,a){const{addEndListener:c,appear:u=!0,children:p,easing:g,in:k,onEnter:m,onEntered:C,onEntering:A,onExit:_,onExited:y,onExiting:E,style:S,timeout:D="auto",TransitionComponent:R=aC}=o,I=ve(o,HK),P=z.useRef(),B=z.useRef(),L=As(),M=z.useRef(null),W=dn(M,p.ref,a),H=oe=>de=>{if(oe){const re=M.current;de===void 0?oe(re):oe(re,de)}},K=H(A),Z=H((oe,de)=>{dC(oe);const{duration:re,delay:se,easing:he}=pc({style:S,timeout:D,easing:g},{mode:"enter"});let me;D==="auto"?(me=L.transitions.getAutoHeightDuration(oe.clientHeight),B.current=me):me=re,oe.style.transition=[L.transitions.create("opacity",{duration:me,delay:se}),L.transitions.create("transform",{duration:u0?me:me*.666,delay:se,easing:he})].join(","),m&&m(oe,de)}),Y=H(C),ee=H(E),ce=H(oe=>{const{duration:de,delay:re,easing:se}=pc({style:S,timeout:D,easing:g},{mode:"exit"});let he;D==="auto"?(he=L.transitions.getAutoHeightDuration(oe.clientHeight),B.current=he):he=de,oe.style.transition=[L.transitions.create("opacity",{duration:he,delay:re}),L.transitions.create("transform",{duration:u0?he:he*.666,delay:u0?re:re||he*.333,easing:se})].join(","),oe.style.opacity=0,oe.style.transform=Tw(.75),_&&_(oe)}),ie=H(y),te=oe=>{D==="auto"&&(P.current=setTimeout(oe,B.current||0)),c&&c(M.current,oe)};return z.useEffect(()=>()=>{clearTimeout(P.current)},[]),V.jsx(R,U({appear:u,in:k,nodeRef:M,onEnter:Z,onEntered:Y,onEntering:K,onExit:ce,onExited:ie,onExiting:ee,addEndListener:te,timeout:D==="auto"?null:D},I,{children:(oe,de)=>z.cloneElement(p,U({style:U({opacity:0,transform:Tw(.75),visibility:oe==="exited"&&!k?"hidden":void 0},WK[oe],S,p.props.style),ref:W},de))}))});D4.muiSupportAuto=!0;const xi=D4;function GK(n,o,a,c,u){const[p,g]=z.useState(()=>u&&a?a(n).matches:c?c(n).matches:o);return Yr(()=>{let k=!0;if(!a)return;const m=a(n),C=()=>{k&&g(m.matches)};return C(),m.addListener(C),()=>{k=!1,m.removeListener(C)}},[n,a]),p}const T4=Jd["useSyncExternalStore"];function qK(n,o,a,c,u){const p=z.useCallback(()=>o,[o]),g=z.useMemo(()=>{if(u&&a)return()=>a(n).matches;if(c!==null){const{matches:A}=c(n);return()=>A}return p},[p,n,c,u,a]),[k,m]=z.useMemo(()=>{if(a===null)return[p,()=>()=>{}];const A=a(n);return[()=>A.matches,_=>(A.addListener(_),()=>{A.removeListener(_)})]},[p,a,n]);return T4(m,k,g)}function Fu(n,o={}){const a=Pg(),c=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:u=!1,matchMedia:p=c?window.matchMedia:null,ssrMatchMedia:g=null,noSsr:k=!1}=ZM({name:"MuiUseMediaQuery",props:o,theme:a});let m=typeof n=="function"?n(a):n;return m=m.replace(/^@media( ?)/m,""),(T4!==void 0?qK:GK)(m,u,p,g,k)}const KK=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],YK=n=>{const{classes:o,disableUnderline:a}=n,u=Qe({root:["root",!a&&"underline"],input:["input"]},UG,o);return U({},o,u)},QK=fe(Jg,{shouldForwardProp:n=>vr(n)||n==="classes",name:"MuiInput",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[...Qg(n,o),!a.disableUnderline&&o.underline]}})(({theme:n,ownerState:o})=>{let c=n.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return n.vars&&(c=`rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})`),U({position:"relative"},o.formControl&&{"label + &":{marginTop:16}},!o.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(n.vars||n).palette[o.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Ad.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Ad.error}`]:{"&:before, &:after":{borderBottomColor:(n.vars||n).palette.error.main}},"&:before":{borderBottom:`1px solid ${c}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Ad.disabled}, .${Ad.error}):before`]:{borderBottom:`2px solid ${(n.vars||n).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${c}`}},[`&.${Ad.disabled}:before`]:{borderBottomStyle:"dotted"}})}),ZK=fe(Xg,{name:"MuiInput",slot:"Input",overridesResolver:Zg})({}),I4=z.forwardRef(function(o,a){var c,u,p,g;const k=Ke({props:o,name:"MuiInput"}),{disableUnderline:m,components:C={},componentsProps:A,fullWidth:_=!1,inputComponent:y="input",multiline:E=!1,slotProps:S,slots:D={},type:R="text"}=k,I=ve(k,KK),P=YK(k),L={root:{ownerState:{disableUnderline:m}}},M=S??A?fo(S??A,L):L,W=(c=(u=D.root)!=null?u:C.Root)!=null?c:QK,H=(p=(g=D.input)!=null?g:C.Input)!=null?p:ZK;return V.jsx(uC,U({slots:{root:W,input:H},slotProps:M,fullWidth:_,inputComponent:y,multiline:E,ref:a,type:R},I,{classes:P}))});I4.muiName="Input";const M4=I4;function JK(n){return Ge("MuiInputAdornment",n)}const XK=qe("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),SD=XK;var DD;const eY=["children","className","component","disablePointerEvents","disableTypography","position","variant"],tY=(n,o)=>{const{ownerState:a}=n;return[o.root,o[`position${_e(a.position)}`],a.disablePointerEvents===!0&&o.disablePointerEvents,o[a.variant]]},nY=n=>{const{classes:o,disablePointerEvents:a,hiddenLabel:c,position:u,size:p,variant:g}=n,k={root:["root",a&&"disablePointerEvents",u&&`position${_e(u)}`,g,c&&"hiddenLabel",p&&`size${_e(p)}`]};return Qe(k,JK,o)},oY=fe("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:tY})(({theme:n,ownerState:o})=>U({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},o.variant==="filled"&&{[`&.${SD.positionStart}&:not(.${SD.hiddenLabel})`]:{marginTop:16}},o.position==="start"&&{marginRight:8},o.position==="end"&&{marginLeft:8},o.disablePointerEvents===!0&&{pointerEvents:"none"})),rY=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiInputAdornment"}),{children:u,className:p,component:g="div",disablePointerEvents:k=!1,disableTypography:m=!1,position:C,variant:A}=c,_=ve(c,eY),y=Pa()||{};let E=A;A&&y.variant,y&&!E&&(E=y.variant);const S=U({},c,{hiddenLabel:y.hiddenLabel,size:y.size,disablePointerEvents:k,position:C,variant:E}),D=nY(S);return V.jsx(Yg.Provider,{value:null,children:V.jsx(oY,U({as:g,ownerState:S,className:De(D.root,p),ref:a},_,{children:typeof u=="string"&&!m?V.jsx(Pn,{color:"text.secondary",children:u}):V.jsxs(z.Fragment,{children:[C==="start"?DD||(DD=V.jsx("span",{className:"notranslate",children:"​"})):null,u]})}))})}),h0=rY;function iY(n){return Ge("MuiInputLabel",n)}qe("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const sY=["disableAnimation","margin","shrink","variant","className"],aY=n=>{const{classes:o,formControl:a,size:c,shrink:u,disableAnimation:p,variant:g,required:k}=n,C=Qe({root:["root",a&&"formControl",!p&&"animated",u&&"shrink",c==="small"&&"sizeSmall",g],asterisk:[k&&"asterisk"]},iY,o);return U({},o,C)},lY=fe(UK,{shouldForwardProp:n=>vr(n)||n==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[{[`& .${Zd.asterisk}`]:o.asterisk},o.root,a.formControl&&o.formControl,a.size==="small"&&o.sizeSmall,a.shrink&&o.shrink,!a.disableAnimation&&o.animated,o[a.variant]]}})(({theme:n,ownerState:o})=>U({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},o.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},o.size==="small"&&{transform:"translate(0, 17px) scale(1)"},o.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!o.disableAnimation&&{transition:n.transitions.create(["color","transform","max-width"],{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut})},o.variant==="filled"&&U({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},o.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},o.shrink&&U({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},o.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),o.variant==="outlined"&&U({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},o.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},o.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),cY=z.forwardRef(function(o,a){const c=Ke({name:"MuiInputLabel",props:o}),{disableAnimation:u=!1,shrink:p,className:g}=c,k=ve(c,sY),m=Pa();let C=p;typeof C>"u"&&m&&(C=m.filled||m.focused||m.adornedStart);const A=yc({props:c,muiFormControl:m,states:["size","variant","required"]}),_=U({},c,{disableAnimation:u,formControl:m,shrink:C,size:A.size,variant:A.variant,required:A.required}),y=aY(_);return V.jsx(lY,U({"data-shrink":C,ownerState:_,ref:a,className:De(y.root,g)},k,{classes:y}))}),dY=cY,uY=z.createContext({}),Iw=uY;function hY(n){return Ge("MuiList",n)}qe("MuiList",["root","padding","dense","subheader"]);const pY=["children","className","component","dense","disablePadding","subheader"],fY=n=>{const{classes:o,disablePadding:a,dense:c,subheader:u}=n;return Qe({root:["root",!a&&"padding",c&&"dense",u&&"subheader"]},hY,o)},gY=fe("ul",{name:"MuiList",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,!a.disablePadding&&o.padding,a.dense&&o.dense,a.subheader&&o.subheader]}})(({ownerState:n})=>U({listStyle:"none",margin:0,padding:0,position:"relative"},!n.disablePadding&&{paddingTop:8,paddingBottom:8},n.subheader&&{paddingTop:0})),mY=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiList"}),{children:u,className:p,component:g="ul",dense:k=!1,disablePadding:m=!1,subheader:C}=c,A=ve(c,pY),_=z.useMemo(()=>({dense:k}),[k]),y=U({},c,{component:g,dense:k,disablePadding:m}),E=fY(y);return V.jsx(Iw.Provider,{value:_,children:V.jsxs(gY,U({as:g,className:De(E.root,p),ref:a,ownerState:y},A,{children:[C,u]}))})}),bY=mY,kY=qe("MuiListItemIcon",["root","alignItemsFlexStart"]),TD=kY,wY=qe("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),ID=wY,vY=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function p0(n,o,a){return n===o?n.firstChild:o&&o.nextElementSibling?o.nextElementSibling:a?null:n.firstChild}function MD(n,o,a){return n===o?a?n.firstChild:n.lastChild:o&&o.previousElementSibling?o.previousElementSibling:a?null:n.lastChild}function P4(n,o){if(o===void 0)return!0;let a=n.innerText;return a===void 0&&(a=n.textContent),a=a.trim().toLowerCase(),a.length===0?!1:o.repeating?a[0]===o.keys[0]:a.indexOf(o.keys.join(""))===0}function _d(n,o,a,c,u,p){let g=!1,k=u(n,o,o?a:!1);for(;k;){if(k===n.firstChild){if(g)return!1;g=!0}const m=c?!1:k.disabled||k.getAttribute("aria-disabled")==="true";if(!k.hasAttribute("tabindex")||!P4(k,p)||m)k=u(n,k,a);else return k.focus(),!0}return!1}const CY=z.forwardRef(function(o,a){const{actions:c,autoFocus:u=!1,autoFocusItem:p=!1,children:g,className:k,disabledItemsFocusable:m=!1,disableListWrap:C=!1,onKeyDown:A,variant:_="selectedMenu"}=o,y=ve(o,vY),E=z.useRef(null),S=z.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Yr(()=>{u&&E.current.focus()},[u]),z.useImperativeHandle(c,()=>({adjustStyleForScrollbar:(B,L)=>{const M=!E.current.style.width;if(B.clientHeight<E.current.clientHeight&&M){const W=`${yM(Mn(B))}px`;E.current.style[L.direction==="rtl"?"paddingLeft":"paddingRight"]=W,E.current.style.width=`calc(100% + ${W})`}return E.current}}),[]);const D=B=>{const L=E.current,M=B.key,W=Mn(L).activeElement;if(M==="ArrowDown")B.preventDefault(),_d(L,W,C,m,p0);else if(M==="ArrowUp")B.preventDefault(),_d(L,W,C,m,MD);else if(M==="Home")B.preventDefault(),_d(L,null,C,m,p0);else if(M==="End")B.preventDefault(),_d(L,null,C,m,MD);else if(M.length===1){const H=S.current,K=M.toLowerCase(),Z=performance.now();H.keys.length>0&&(Z-H.lastTime>500?(H.keys=[],H.repeating=!0,H.previousKeyMatched=!0):H.repeating&&K!==H.keys[0]&&(H.repeating=!1)),H.lastTime=Z,H.keys.push(K);const Y=W&&!H.repeating&&P4(W,H);H.previousKeyMatched&&(Y||_d(L,W,!1,m,p0,H))?B.preventDefault():H.previousKeyMatched=!1}A&&A(B)},R=dn(E,a);let I=-1;z.Children.forEach(g,(B,L)=>{if(!z.isValidElement(B)){I===L&&(I+=1,I>=g.length&&(I=-1));return}B.props.disabled||(_==="selectedMenu"&&B.props.selected||I===-1)&&(I=L),I===L&&(B.props.disabled||B.props.muiSkipListHighlight||B.type.muiSkipListHighlight)&&(I+=1,I>=g.length&&(I=-1))});const P=z.Children.map(g,(B,L)=>{if(L===I){const M={};return p&&(M.autoFocus=!0),B.props.tabIndex===void 0&&_==="selectedMenu"&&(M.tabIndex=0),z.cloneElement(B,M)}return B});return V.jsx(bY,U({role:"menu",ref:R,className:k,onKeyDown:D,tabIndex:u?0:-1},y,{children:P}))}),yY=CY;function AY(n){return Ge("MuiPopover",n)}qe("MuiPopover",["root","paper"]);const _Y=["onEntering"],xY=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"],EY=["slotProps"];function PD(n,o){let a=0;return typeof o=="number"?a=o:o==="center"?a=n.height/2:o==="bottom"&&(a=n.height),a}function ND(n,o){let a=0;return typeof o=="number"?a=o:o==="center"?a=n.width/2:o==="right"&&(a=n.width),a}function BD(n){return[n.horizontal,n.vertical].map(o=>typeof o=="number"?`${o}px`:o).join(" ")}function f0(n){return typeof n=="function"?n():n}const SY=n=>{const{classes:o}=n;return Qe({root:["root"],paper:["paper"]},AY,o)},DY=fe(_4,{name:"MuiPopover",slot:"Root",overridesResolver:(n,o)=>o.root})({}),N4=fe(ko,{name:"MuiPopover",slot:"Paper",overridesResolver:(n,o)=>o.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),TY=z.forwardRef(function(o,a){var c,u,p;const g=Ke({props:o,name:"MuiPopover"}),{action:k,anchorEl:m,anchorOrigin:C={vertical:"top",horizontal:"left"},anchorPosition:A,anchorReference:_="anchorEl",children:y,className:E,container:S,elevation:D=8,marginThreshold:R=16,open:I,PaperProps:P={},slots:B,slotProps:L,transformOrigin:M={vertical:"top",horizontal:"left"},TransitionComponent:W=xi,transitionDuration:H="auto",TransitionProps:{onEntering:K}={}}=g,Z=ve(g.TransitionProps,_Y),Y=ve(g,xY),ee=(c=L==null?void 0:L.paper)!=null?c:P,ce=z.useRef(),ie=dn(ce,ee.ref),te=U({},g,{anchorOrigin:C,anchorReference:_,elevation:D,marginThreshold:R,externalPaperSlotProps:ee,transformOrigin:M,TransitionComponent:W,transitionDuration:H,TransitionProps:Z}),oe=SY(te),de=z.useCallback(()=>{if(_==="anchorPosition")return A;const ge=f0(m),it=(ge&&ge.nodeType===1?ge:Mn(ce.current).body).getBoundingClientRect();return{top:it.top+PD(it,C.vertical),left:it.left+ND(it,C.horizontal)}},[m,C.horizontal,C.vertical,A,_]),re=z.useCallback(ge=>({vertical:PD(ge,M.vertical),horizontal:ND(ge,M.horizontal)}),[M.horizontal,M.vertical]),se=z.useCallback(ge=>{const Ye={width:ge.offsetWidth,height:ge.offsetHeight},it=re(Ye);if(_==="none")return{top:null,left:null,transformOrigin:BD(it)};const Bt=de();let Vt=Bt.top-it.vertical,We=Bt.left-it.horizontal;const Pt=Vt+Ye.height,st=We+Ye.width,je=_a(f0(m)),at=je.innerHeight-R,Zt=je.innerWidth-R;if(Vt<R){const Le=Vt-R;Vt-=Le,it.vertical+=Le}else if(Pt>at){const Le=Pt-at;Vt-=Le,it.vertical+=Le}if(We<R){const Le=We-R;We-=Le,it.horizontal+=Le}else if(st>Zt){const Le=st-Zt;We-=Le,it.horizontal+=Le}return{top:`${Math.round(Vt)}px`,left:`${Math.round(We)}px`,transformOrigin:BD(it)}},[m,_,de,re,R]),[he,me]=z.useState(I),Te=z.useCallback(()=>{const ge=ce.current;if(!ge)return;const Ye=se(ge);Ye.top!==null&&(ge.style.top=Ye.top),Ye.left!==null&&(ge.style.left=Ye.left),ge.style.transformOrigin=Ye.transformOrigin,me(!0)},[se]),Ie=(ge,Ye)=>{K&&K(ge,Ye),Te()},He=()=>{me(!1)};z.useEffect(()=>{I&&Te()}),z.useImperativeHandle(k,()=>I?{updatePosition:()=>{Te()}}:null,[I,Te]),z.useEffect(()=>{if(!I)return;const ge=vM(()=>{Te()}),Ye=_a(m);return Ye.addEventListener("resize",ge),()=>{ge.clear(),Ye.removeEventListener("resize",ge)}},[m,I,Te]);let Ne=H;H==="auto"&&!W.muiSupportAuto&&(Ne=void 0);const we=S||(m?Mn(f0(m)).body:void 0),Pe=(u=B==null?void 0:B.root)!=null?u:DY,Ze=(p=B==null?void 0:B.paper)!=null?p:N4,Ce=lc({elementType:Ze,externalSlotProps:U({},ee,{style:he?ee.style:U({},ee.style,{opacity:0})}),additionalProps:{elevation:D,ref:ie},ownerState:te,className:De(oe.paper,ee==null?void 0:ee.className)}),Me=lc({elementType:Pe,externalSlotProps:(L==null?void 0:L.root)||{},externalForwardedProps:Y,additionalProps:{ref:a,slotProps:{backdrop:{invisible:!0}},container:we,open:I},ownerState:te,className:De(oe.root,E)}),{slotProps:tt}=Me,Be=ve(Me,EY);return V.jsx(Pe,U({},Be,!yu(Pe)&&{slotProps:tt},{children:V.jsx(W,U({appear:!0,in:I,onEntering:Ie,onExited:He,timeout:Ne},Z,{children:V.jsx(Ze,U({},Ce,{children:y}))}))}))}),IY=TY;function MY(n){return Ge("MuiMenu",n)}qe("MuiMenu",["root","paper","list"]);const PY=["onEntering"],NY=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],BY={vertical:"top",horizontal:"right"},RY={vertical:"top",horizontal:"left"},OY=n=>{const{classes:o}=n;return Qe({root:["root"],paper:["paper"],list:["list"]},MY,o)},zY=fe(IY,{shouldForwardProp:n=>vr(n)||n==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(n,o)=>o.root})({}),LY=fe(N4,{name:"MuiMenu",slot:"Paper",overridesResolver:(n,o)=>o.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),jY=fe(yY,{name:"MuiMenu",slot:"List",overridesResolver:(n,o)=>o.list})({outline:0}),FY=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiMenu"}),{autoFocus:u=!0,children:p,disableAutoFocusItem:g=!1,MenuListProps:k={},onClose:m,open:C,PaperProps:A={},PopoverClasses:_,transitionDuration:y="auto",TransitionProps:{onEntering:E}={},variant:S="selectedMenu"}=c,D=ve(c.TransitionProps,PY),R=ve(c,NY),I=As(),P=I.direction==="rtl",B=U({},c,{autoFocus:u,disableAutoFocusItem:g,MenuListProps:k,onEntering:E,PaperProps:A,transitionDuration:y,TransitionProps:D,variant:S}),L=OY(B),M=u&&!g&&C,W=z.useRef(null),H=(Y,ee)=>{W.current&&W.current.adjustStyleForScrollbar(Y,I),E&&E(Y,ee)},K=Y=>{Y.key==="Tab"&&(Y.preventDefault(),m&&m(Y,"tabKeyDown"))};let Z=-1;return z.Children.map(p,(Y,ee)=>{z.isValidElement(Y)&&(Y.props.disabled||(S==="selectedMenu"&&Y.props.selected||Z===-1)&&(Z=ee))}),V.jsx(zY,U({onClose:m,anchorOrigin:{vertical:"bottom",horizontal:P?"right":"left"},transformOrigin:P?BY:RY,slots:{paper:LY},slotProps:{paper:U({},A,{classes:U({},A.classes,{root:L.paper})})},className:L.root,open:C,ref:a,transitionDuration:y,TransitionProps:U({onEntering:H},D),ownerState:B},R,{classes:_,children:V.jsx(jY,U({onKeyDown:K,actions:W,autoFocus:u&&(Z===-1||g),autoFocusItem:M,variant:S},k,{className:De(L.list,k.className),children:p}))}))}),B4=FY;function VY(n){return Ge("MuiMenuItem",n)}const $Y=qe("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),xd=$Y,UY=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],HY=(n,o)=>{const{ownerState:a}=n;return[o.root,a.dense&&o.dense,a.divider&&o.divider,!a.disableGutters&&o.gutters]},WY=n=>{const{disabled:o,dense:a,divider:c,disableGutters:u,selected:p,classes:g}=n,m=Qe({root:["root",a&&"dense",o&&"disabled",!u&&"gutters",c&&"divider",p&&"selected"]},VY,g);return U({},g,m)},GY=fe(Kg,{shouldForwardProp:n=>vr(n)||n==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:HY})(({theme:n,ownerState:o})=>U({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:`1px solid ${(n.vars||n).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${xd.selected}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:Xn(n.palette.primary.main,n.palette.action.selectedOpacity),[`&.${xd.focusVisible}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.focusOpacity}))`:Xn(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}},[`&.${xd.selected}:hover`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.hoverOpacity}))`:Xn(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:Xn(n.palette.primary.main,n.palette.action.selectedOpacity)}},[`&.${xd.focusVisible}`]:{backgroundColor:(n.vars||n).palette.action.focus},[`&.${xd.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity},[`& + .${AD.root}`]:{marginTop:n.spacing(1),marginBottom:n.spacing(1)},[`& + .${AD.inset}`]:{marginLeft:52},[`& .${ID.root}`]:{marginTop:0,marginBottom:0},[`& .${ID.inset}`]:{paddingLeft:36},[`& .${TD.root}`]:{minWidth:36}},!o.dense&&{[n.breakpoints.up("sm")]:{minHeight:"auto"}},o.dense&&U({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,{[`& .${TD.root} svg`]:{fontSize:"1.25rem"}}))),qY=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiMenuItem"}),{autoFocus:u=!1,component:p="li",dense:g=!1,divider:k=!1,disableGutters:m=!1,focusVisibleClassName:C,role:A="menuitem",tabIndex:_,className:y}=c,E=ve(c,UY),S=z.useContext(Iw),D=z.useMemo(()=>({dense:g||S.dense||!1,disableGutters:m}),[S.dense,g,m]),R=z.useRef(null);Yr(()=>{u&&R.current&&R.current.focus()},[u]);const I=U({},c,{dense:D.dense,divider:k,disableGutters:m}),P=WY(c),B=dn(R,a);let L;return c.disabled||(L=_!==void 0?_:-1),V.jsx(Iw.Provider,{value:D,children:V.jsx(GY,U({ref:B,role:A,tabIndex:L,component:p,focusVisibleClassName:De(P.focusVisible,C),className:De(P.root,y)},E,{ownerState:I,classes:P}))})}),KY=qY;function YY(n){return Ge("MuiNativeSelect",n)}const QY=qe("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),gC=QY,ZY=["className","disabled","error","IconComponent","inputRef","variant"],JY=n=>{const{classes:o,variant:a,disabled:c,multiple:u,open:p,error:g}=n,k={select:["select",a,c&&"disabled",u&&"multiple",g&&"error"],icon:["icon",`icon${_e(a)}`,p&&"iconOpen",c&&"disabled"]};return Qe(k,YY,o)},R4=({ownerState:n,theme:o})=>U({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":U({},o.vars?{backgroundColor:`rgba(${o.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:o.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${gC.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(o.vars||o).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},n.variant==="filled"&&{"&&&":{paddingRight:32}},n.variant==="outlined"&&{borderRadius:(o.vars||o).shape.borderRadius,"&:focus":{borderRadius:(o.vars||o).shape.borderRadius},"&&&":{paddingRight:32}}),XY=fe("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:vr,overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.select,o[a.variant],a.error&&o.error,{[`&.${gC.multiple}`]:o.multiple}]}})(R4),O4=({ownerState:n,theme:o})=>U({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(o.vars||o).palette.action.active,[`&.${gC.disabled}`]:{color:(o.vars||o).palette.action.disabled}},n.open&&{transform:"rotate(180deg)"},n.variant==="filled"&&{right:7},n.variant==="outlined"&&{right:7}),eQ=fe("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.icon,a.variant&&o[`icon${_e(a.variant)}`],a.open&&o.iconOpen]}})(O4),tQ=z.forwardRef(function(o,a){const{className:c,disabled:u,error:p,IconComponent:g,inputRef:k,variant:m="standard"}=o,C=ve(o,ZY),A=U({},o,{disabled:u,variant:m,error:p}),_=JY(A);return V.jsxs(z.Fragment,{children:[V.jsx(XY,U({ownerState:A,className:De(_.select,c),disabled:u,ref:k||a},C)),o.multiple?null:V.jsx(eQ,{as:g,ownerState:A,className:_.icon})]})}),nQ=tQ;var RD;const oQ=["children","classes","className","label","notched"],rQ=fe("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),iQ=fe("legend")(({ownerState:n,theme:o})=>U({float:"unset",width:"auto",overflow:"hidden"},!n.withLabel&&{padding:0,lineHeight:"11px",transition:o.transitions.create("width",{duration:150,easing:o.transitions.easing.easeOut})},n.withLabel&&U({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:o.transitions.create("max-width",{duration:50,easing:o.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},n.notched&&{maxWidth:"100%",transition:o.transitions.create("max-width",{duration:100,easing:o.transitions.easing.easeOut,delay:50})})));function sQ(n){const{className:o,label:a,notched:c}=n,u=ve(n,oQ),p=a!=null&&a!=="",g=U({},n,{notched:c,withLabel:p});return V.jsx(rQ,U({"aria-hidden":!0,className:o,ownerState:g},u,{children:V.jsx(iQ,{ownerState:g,children:p?V.jsx("span",{children:a}):RD||(RD=V.jsx("span",{className:"notranslate",children:"​"}))})}))}const aQ=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],lQ=n=>{const{classes:o}=n,c=Qe({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},WG,o);return U({},o,c)},cQ=fe(Jg,{shouldForwardProp:n=>vr(n)||n==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:Qg})(({theme:n,ownerState:o})=>{const a=n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return U({position:"relative",borderRadius:(n.vars||n).shape.borderRadius,[`&:hover .${qi.notchedOutline}`]:{borderColor:(n.vars||n).palette.text.primary},"@media (hover: none)":{[`&:hover .${qi.notchedOutline}`]:{borderColor:n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:a}},[`&.${qi.focused} .${qi.notchedOutline}`]:{borderColor:(n.vars||n).palette[o.color].main,borderWidth:2},[`&.${qi.error} .${qi.notchedOutline}`]:{borderColor:(n.vars||n).palette.error.main},[`&.${qi.disabled} .${qi.notchedOutline}`]:{borderColor:(n.vars||n).palette.action.disabled}},o.startAdornment&&{paddingLeft:14},o.endAdornment&&{paddingRight:14},o.multiline&&U({padding:"16.5px 14px"},o.size==="small"&&{padding:"8.5px 14px"}))}),dQ=fe(sQ,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(n,o)=>o.notchedOutline})(({theme:n})=>{const o=n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:n.vars?`rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`:o}}),uQ=fe(Xg,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:Zg})(({theme:n,ownerState:o})=>U({padding:"16.5px 14px"},!n.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:n.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:n.palette.mode==="light"?null:"#fff",caretColor:n.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},n.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[n.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},o.size==="small"&&{padding:"8.5px 14px"},o.multiline&&{padding:0},o.startAdornment&&{paddingLeft:0},o.endAdornment&&{paddingRight:0})),z4=z.forwardRef(function(o,a){var c,u,p,g,k;const m=Ke({props:o,name:"MuiOutlinedInput"}),{components:C={},fullWidth:A=!1,inputComponent:_="input",label:y,multiline:E=!1,notched:S,slots:D={},type:R="text"}=m,I=ve(m,aQ),P=lQ(m),B=Pa(),L=yc({props:m,muiFormControl:B,states:["required"]}),M=U({},m,{color:L.color||"primary",disabled:L.disabled,error:L.error,focused:L.focused,formControl:B,fullWidth:A,hiddenLabel:L.hiddenLabel,multiline:E,size:L.size,type:R}),W=(c=(u=D.root)!=null?u:C.Root)!=null?c:cQ,H=(p=(g=D.input)!=null?g:C.Input)!=null?p:uQ;return V.jsx(uC,U({slots:{root:W,input:H},renderSuffix:K=>V.jsx(dQ,{ownerState:M,className:P.notchedOutline,label:y!=null&&y!==""&&L.required?k||(k=V.jsxs(z.Fragment,{children:[y," ","*"]})):y,notched:typeof S<"u"?S:!!(K.startAdornment||K.filled||K.focused)}),fullWidth:A,inputComponent:_,multiline:E,ref:a,type:R},I,{classes:U({},P,{notchedOutline:null})}))});z4.muiName="Input";const L4=z4;function hQ(n){return Ge("MuiSelect",n)}const pQ=qe("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Ed=pQ;var OD;const fQ=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],gQ=fe("div",{name:"MuiSelect",slot:"Select",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[{[`&.${Ed.select}`]:o.select},{[`&.${Ed.select}`]:o[a.variant]},{[`&.${Ed.error}`]:o.error},{[`&.${Ed.multiple}`]:o.multiple}]}})(R4,{[`&.${Ed.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),mQ=fe("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.icon,a.variant&&o[`icon${_e(a.variant)}`],a.open&&o.iconOpen]}})(O4),bQ=fe("input",{shouldForwardProp:n=>RU(n)&&n!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(n,o)=>o.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function zD(n,o){return typeof o=="object"&&o!==null?n===o:String(n)===String(o)}function kQ(n){return n==null||typeof n=="string"&&!n.trim()}const wQ=n=>{const{classes:o,variant:a,disabled:c,multiple:u,open:p,error:g}=n,k={select:["select",a,c&&"disabled",u&&"multiple",g&&"error"],icon:["icon",`icon${_e(a)}`,p&&"iconOpen",c&&"disabled"],nativeInput:["nativeInput"]};return Qe(k,hQ,o)},vQ=z.forwardRef(function(o,a){const{"aria-describedby":c,"aria-label":u,autoFocus:p,autoWidth:g,children:k,className:m,defaultOpen:C,defaultValue:A,disabled:_,displayEmpty:y,error:E=!1,IconComponent:S,inputRef:D,labelId:R,MenuProps:I={},multiple:P,name:B,onBlur:L,onChange:M,onClose:W,onFocus:H,onOpen:K,open:Z,readOnly:Y,renderValue:ee,SelectDisplayProps:ce={},tabIndex:ie,value:te,variant:oe="standard"}=o,de=ve(o,fQ),[re,se]=Nf({controlled:te,default:A,name:"Select"}),[he,me]=Nf({controlled:Z,default:C,name:"Select"}),Te=z.useRef(null),Ie=z.useRef(null),[He,Ne]=z.useState(null),{current:we}=z.useRef(Z!=null),[Pe,Ze]=z.useState(),Ce=dn(a,D),Me=z.useCallback(Ee=>{Ie.current=Ee,Ee&&Ne(Ee)},[]),tt=He==null?void 0:He.parentNode;z.useImperativeHandle(Ce,()=>({focus:()=>{Ie.current.focus()},node:Te.current,value:re}),[re]),z.useEffect(()=>{C&&he&&He&&!we&&(Ze(g?null:tt.clientWidth),Ie.current.focus())},[He,g]),z.useEffect(()=>{p&&Ie.current.focus()},[p]),z.useEffect(()=>{if(!R)return;const Ee=Mn(Ie.current).getElementById(R);if(Ee){const et=()=>{getSelection().isCollapsed&&Ie.current.focus()};return Ee.addEventListener("click",et),()=>{Ee.removeEventListener("click",et)}}},[R]);const Be=(Ee,et)=>{Ee?K&&K(et):W&&W(et),we||(Ze(g?null:tt.clientWidth),me(Ee))},ge=Ee=>{Ee.button===0&&(Ee.preventDefault(),Ie.current.focus(),Be(!0,Ee))},Ye=Ee=>{Be(!1,Ee)},it=z.Children.toArray(k),Bt=Ee=>{const et=it.find(kt=>kt.props.value===Ee.target.value);et!==void 0&&(se(et.props.value),M&&M(Ee,et))},Vt=Ee=>et=>{let kt;if(et.currentTarget.hasAttribute("tabindex")){if(P){kt=Array.isArray(re)?re.slice():[];const rn=re.indexOf(Ee.props.value);rn===-1?kt.push(Ee.props.value):kt.splice(rn,1)}else kt=Ee.props.value;if(Ee.props.onClick&&Ee.props.onClick(et),re!==kt&&(se(kt),M)){const rn=et.nativeEvent||et,zt=new rn.constructor(rn.type,rn);Object.defineProperty(zt,"target",{writable:!0,value:{value:kt,name:B}}),M(zt,Ee)}P||Be(!1,et)}},We=Ee=>{Y||[" ","ArrowUp","ArrowDown","Enter"].indexOf(Ee.key)!==-1&&(Ee.preventDefault(),Be(!0,Ee))},Pt=He!==null&&he,st=Ee=>{!Pt&&L&&(Object.defineProperty(Ee,"target",{writable:!0,value:{value:re,name:B}}),L(Ee))};delete de["aria-invalid"];let je,at;const Zt=[];let Le=!1;(jf({value:re})||y)&&(ee?je=ee(re):Le=!0);const ft=it.map(Ee=>{if(!z.isValidElement(Ee))return null;let et;if(P){if(!Array.isArray(re))throw new Error(bs(2));et=re.some(kt=>zD(kt,Ee.props.value)),et&&Le&&Zt.push(Ee.props.children)}else et=zD(re,Ee.props.value),et&&Le&&(at=Ee.props.children);return z.cloneElement(Ee,{"aria-selected":et?"true":"false",onClick:Vt(Ee),onKeyUp:kt=>{kt.key===" "&&kt.preventDefault(),Ee.props.onKeyUp&&Ee.props.onKeyUp(kt)},role:"option",selected:et,value:void 0,"data-value":Ee.props.value})});Le&&(P?Zt.length===0?je=null:je=Zt.reduce((Ee,et,kt)=>(Ee.push(et),kt<Zt.length-1&&Ee.push(", "),Ee),[]):je=at);let vt=Pe;!g&&we&&He&&(vt=tt.clientWidth);let un;typeof ie<"u"?un=ie:un=_?null:0;const Bn=ce.id||(B?`mui-component-select-${B}`:void 0),Ve=U({},o,{variant:oe,value:re,open:Pt,error:E}),Ae=wQ(Ve);return V.jsxs(z.Fragment,{children:[V.jsx(gQ,U({ref:Me,tabIndex:un,role:"button","aria-disabled":_?"true":void 0,"aria-expanded":Pt?"true":"false","aria-haspopup":"listbox","aria-label":u,"aria-labelledby":[R,Bn].filter(Boolean).join(" ")||void 0,"aria-describedby":c,onKeyDown:We,onMouseDown:_||Y?null:ge,onBlur:st,onFocus:H},ce,{ownerState:Ve,className:De(ce.className,Ae.select,m),id:Bn,children:kQ(je)?OD||(OD=V.jsx("span",{className:"notranslate",children:"​"})):je})),V.jsx(bQ,U({"aria-invalid":E,value:Array.isArray(re)?re.join(","):re,name:B,ref:Te,"aria-hidden":!0,onChange:Bt,tabIndex:-1,disabled:_,className:Ae.nativeInput,autoFocus:p,ownerState:Ve},de)),V.jsx(mQ,{as:S,className:Ae.icon,ownerState:Ve}),V.jsx(B4,U({id:`menu-${B||""}`,anchorEl:tt,open:Pt,onClose:Ye,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},I,{MenuListProps:U({"aria-labelledby":R,role:"listbox",disableListWrap:!0},I.MenuListProps),PaperProps:U({},I.PaperProps,{style:U({minWidth:vt},I.PaperProps!=null?I.PaperProps.style:null)}),children:ft}))]})}),CQ=vQ,yQ=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],AQ=n=>{const{classes:o}=n;return o},mC={name:"MuiSelect",overridesResolver:(n,o)=>o.root,shouldForwardProp:n=>vr(n)&&n!=="variant",slot:"Root"},_Q=fe(M4,mC)(""),xQ=fe(L4,mC)(""),EQ=fe(S4,mC)(""),j4=z.forwardRef(function(o,a){const c=Ke({name:"MuiSelect",props:o}),{autoWidth:u=!1,children:p,classes:g={},className:k,defaultOpen:m=!1,displayEmpty:C=!1,IconComponent:A=YG,id:_,input:y,inputProps:E,label:S,labelId:D,MenuProps:R,multiple:I=!1,native:P=!1,onClose:B,onOpen:L,open:M,renderValue:W,SelectDisplayProps:H,variant:K="outlined"}=c,Z=ve(c,yQ),Y=P?nQ:CQ,ee=Pa(),ce=yc({props:c,muiFormControl:ee,states:["variant","error"]}),ie=ce.variant||K,te=U({},c,{variant:ie,classes:g}),oe=AQ(te),de=y||{standard:V.jsx(_Q,{ownerState:te}),outlined:V.jsx(xQ,{label:S,ownerState:te}),filled:V.jsx(EQ,{ownerState:te})}[ie],re=dn(a,de.ref);return V.jsx(z.Fragment,{children:z.cloneElement(de,U({inputComponent:Y,inputProps:U({children:p,error:ce.error,IconComponent:A,variant:ie,type:void 0,multiple:I},P?{id:_}:{autoWidth:u,defaultOpen:m,displayEmpty:C,labelId:D,MenuProps:R,onClose:B,onOpen:L,open:M,renderValue:W,SelectDisplayProps:U({id:_},H)},E,{classes:E?fo(oe,E.classes):oe},y?y.props.inputProps:{})},I&&P&&ie==="outlined"?{notched:!0}:{},{ref:re,className:De(de.props.className,k)},!y&&{variant:ie},Z))})});j4.muiName="Select";const SQ=j4;function DQ(n){return Ge("MuiSnackbarContent",n)}qe("MuiSnackbarContent",["root","message","action"]);const TQ=["action","className","message","role"],IQ=n=>{const{classes:o}=n;return Qe({root:["root"],action:["action"],message:["message"]},DQ,o)},MQ=fe(ko,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,o)=>o.root})(({theme:n})=>{const o=n.palette.mode==="light"?.8:.98,a=e4(n.palette.background.default,o);return U({},n.typography.body2,{color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(a),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:a,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),PQ=fe("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,o)=>o.message})({padding:"8px 0"}),NQ=fe("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,o)=>o.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),BQ=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiSnackbarContent"}),{action:u,className:p,message:g,role:k="alert"}=c,m=ve(c,TQ),C=c,A=IQ(C);return V.jsxs(MQ,U({role:k,square:!0,elevation:6,className:De(A.root,p),ownerState:C,ref:a},m,{children:[V.jsx(PQ,{className:A.message,ownerState:C,children:g}),u?V.jsx(NQ,{className:A.action,ownerState:C,children:u}):null]}))}),RQ=BQ;function OQ(n){return Ge("MuiSnackbar",n)}qe("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const zQ=["onEnter","onExited"],LQ=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],jQ=n=>{const{classes:o,anchorOrigin:a}=n,c={root:["root",`anchorOrigin${_e(a.vertical)}${_e(a.horizontal)}`]};return Qe(c,OQ,o)},LD=fe("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,o[`anchorOrigin${_e(a.anchorOrigin.vertical)}${_e(a.anchorOrigin.horizontal)}`]]}})(({theme:n,ownerState:o})=>{const a={left:"50%",right:"auto",transform:"translateX(-50%)"};return U({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},o.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},o.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},o.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[n.breakpoints.up("sm")]:U({},o.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},o.anchorOrigin.horizontal==="center"&&a,o.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},o.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),FQ=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiSnackbar"}),u=As(),p={enter:u.transitions.duration.enteringScreen,exit:u.transitions.duration.leavingScreen},{action:g,anchorOrigin:{vertical:k,horizontal:m}={vertical:"bottom",horizontal:"left"},autoHideDuration:C=null,children:A,className:_,ClickAwayListenerProps:y,ContentProps:E,disableWindowBlurListener:S=!1,message:D,open:R,TransitionComponent:I=xi,transitionDuration:P=p,TransitionProps:{onEnter:B,onExited:L}={}}=c,M=ve(c.TransitionProps,zQ),W=ve(c,LQ),H=U({},c,{anchorOrigin:{vertical:k,horizontal:m},autoHideDuration:C,disableWindowBlurListener:S,TransitionComponent:I,transitionDuration:P}),K=jQ(H),{getRootProps:Z,onClickAway:Y}=IW(U({},H)),[ee,ce]=z.useState(!0),ie=lc({elementType:LD,getSlotProps:Z,externalForwardedProps:W,ownerState:H,additionalProps:{ref:a},className:[K.root,_]}),te=de=>{ce(!0),L&&L(de)},oe=(de,re)=>{ce(!1),B&&B(de,re)};return!R&&ee?null:V.jsx(WU,U({onClickAway:Y},y,{children:V.jsx(LD,U({},ie,{children:V.jsx(I,U({appear:!0,in:R,timeout:P,direction:k==="top"?"down":"up",onEnter:oe,onExited:te},M,{children:A||V.jsx(RQ,U({message:D,action:g},E))}))}))}))}),VQ=FQ,$Q=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],UQ={entering:{transform:"none"},entered:{transform:"none"}},HQ=z.forwardRef(function(o,a){const c=As(),u={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{addEndListener:p,appear:g=!0,children:k,easing:m,in:C,onEnter:A,onEntered:_,onEntering:y,onExit:E,onExited:S,onExiting:D,style:R,timeout:I=u,TransitionComponent:P=aC}=o,B=ve(o,$Q),L=z.useRef(null),M=dn(L,k.ref,a),W=te=>oe=>{if(te){const de=L.current;oe===void 0?te(de):te(de,oe)}},H=W(y),K=W((te,oe)=>{dC(te);const de=pc({style:R,timeout:I,easing:m},{mode:"enter"});te.style.webkitTransition=c.transitions.create("transform",de),te.style.transition=c.transitions.create("transform",de),A&&A(te,oe)}),Z=W(_),Y=W(D),ee=W(te=>{const oe=pc({style:R,timeout:I,easing:m},{mode:"exit"});te.style.webkitTransition=c.transitions.create("transform",oe),te.style.transition=c.transitions.create("transform",oe),E&&E(te)}),ce=W(S),ie=te=>{p&&p(L.current,te)};return V.jsx(P,U({appear:g,in:C,nodeRef:L,onEnter:K,onEntered:Z,onEntering:H,onExit:ee,onExited:ce,onExiting:Y,addEndListener:ie,timeout:I},B,{children:(te,oe)=>z.cloneElement(k,U({style:U({transform:"scale(0)",visibility:te==="exited"&&!C?"hidden":void 0},UQ[te],R,k.props.style),ref:M},oe))}))}),WQ=HQ;function GQ(n){return Ge("MuiSpeedDial",n)}const qQ=qe("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),Rp=qQ,KQ=["ref"],YQ=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],QQ=["ref"],ZQ=n=>{const{classes:o,open:a,direction:c}=n,u={root:["root",`direction${_e(c)}`],fab:["fab"],actions:["actions",!a&&"actionsClosed"]};return Qe(u,GQ,o)};function Sd(n){if(n==="up"||n==="down")return"vertical";if(n==="right"||n==="left")return"horizontal"}function JQ(n,o,a){return n<o?o:n>a?a:n}const Yi=32,Op=16,XQ=fe("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.root,o[`direction${_e(a.direction)}`]]}})(({theme:n,ownerState:o})=>U({zIndex:(n.vars||n).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},o.direction==="up"&&{flexDirection:"column-reverse",[`& .${Rp.actions}`]:{flexDirection:"column-reverse",marginBottom:-Yi,paddingBottom:Op+Yi}},o.direction==="down"&&{flexDirection:"column",[`& .${Rp.actions}`]:{flexDirection:"column",marginTop:-Yi,paddingTop:Op+Yi}},o.direction==="left"&&{flexDirection:"row-reverse",[`& .${Rp.actions}`]:{flexDirection:"row-reverse",marginRight:-Yi,paddingRight:Op+Yi}},o.direction==="right"&&{flexDirection:"row",[`& .${Rp.actions}`]:{flexDirection:"row",marginLeft:-Yi,paddingLeft:Op+Yi}})),eZ=fe(x4,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(n,o)=>o.fab})(()=>({pointerEvents:"auto"})),tZ=fe("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.actions,!a.open&&o.actionsClosed]}})(({ownerState:n})=>U({display:"flex",pointerEvents:"auto"},!n.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})),nZ=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiSpeedDial"}),u=As(),p={enter:u.transitions.duration.enteringScreen,exit:u.transitions.duration.leavingScreen},{ariaLabel:g,FabProps:{ref:k}={},children:m,className:C,direction:A="up",hidden:_=!1,icon:y,onBlur:E,onClose:S,onFocus:D,onKeyDown:R,onMouseEnter:I,onMouseLeave:P,onOpen:B,open:L,TransitionComponent:M=WQ,transitionDuration:W=p,TransitionProps:H}=c,K=ve(c.FabProps,KQ),Z=ve(c,YQ),[Y,ee]=Nf({controlled:L,default:!1,name:"SpeedDial",state:"open"}),ce=U({},c,{open:Y,direction:A}),ie=ZQ(ce),te=z.useRef();z.useEffect(()=>()=>{clearTimeout(te.current)},[]);const oe=z.useRef(0),de=z.useRef(),re=z.useRef([]);re.current=[re.current[0]];const se=z.useCallback(Ce=>{re.current[0]=Ce},[]),he=dn(k,se),me=(Ce,Me)=>tt=>{re.current[Ce+1]=tt,Me&&Me(tt)},Te=Ce=>{R&&R(Ce);const Me=Ce.key.replace("Arrow","").toLowerCase(),{current:tt=Me}=de;if(Ce.key==="Escape"){ee(!1),re.current[0].focus(),S&&S(Ce,"escapeKeyDown");return}if(Sd(Me)===Sd(tt)&&Sd(Me)!==void 0){Ce.preventDefault();const Be=Me===tt?1:-1,ge=JQ(oe.current+Be,0,re.current.length-1);re.current[ge].focus(),oe.current=ge,de.current=tt}};z.useEffect(()=>{Y||(oe.current=0,de.current=void 0)},[Y]);const Ie=Ce=>{Ce.type==="mouseleave"&&P&&P(Ce),Ce.type==="blur"&&E&&E(Ce),clearTimeout(te.current),Ce.type==="blur"?te.current=setTimeout(()=>{ee(!1),S&&S(Ce,"blur")}):(ee(!1),S&&S(Ce,"mouseLeave"))},He=Ce=>{K.onClick&&K.onClick(Ce),clearTimeout(te.current),Y?(ee(!1),S&&S(Ce,"toggle")):(ee(!0),B&&B(Ce,"toggle"))},Ne=Ce=>{Ce.type==="mouseenter"&&I&&I(Ce),Ce.type==="focus"&&D&&D(Ce),clearTimeout(te.current),Y||(te.current=setTimeout(()=>{ee(!0),B&&B(Ce,{focus:"focus",mouseenter:"mouseEnter"}[Ce.type])}))},we=g.replace(/^[^a-z]+|[^\w:.-]+/gi,""),Pe=z.Children.toArray(m).filter(Ce=>z.isValidElement(Ce)),Ze=Pe.map((Ce,Me)=>{const tt=Ce.props,{FabProps:{ref:Be}={},tooltipPlacement:ge}=tt,Ye=ve(tt.FabProps,QQ),it=ge||(Sd(A)==="vertical"?"left":"top");return z.cloneElement(Ce,{FabProps:U({},Ye,{ref:me(Me,Be)}),delay:30*(Y?Me:Pe.length-Me),open:Y,tooltipPlacement:it,id:`${we}-action-${Me}`})});return V.jsxs(XQ,U({className:De(ie.root,C),ref:a,role:"presentation",onKeyDown:Te,onBlur:Ie,onFocus:Ne,onMouseEnter:Ne,onMouseLeave:Ie,ownerState:ce},Z,{children:[V.jsx(M,U({in:!_,timeout:W,unmountOnExit:!0},H,{children:V.jsx(eZ,U({color:"primary","aria-label":g,"aria-haspopup":"true","aria-expanded":Y,"aria-controls":`${we}-actions`},K,{onClick:He,className:De(ie.fab,K.className),ref:he,ownerState:ce,children:z.isValidElement(y)&&Jp(y,["SpeedDialIcon"])?z.cloneElement(y,{open:Y}):y}))})),V.jsx(tZ,{id:`${we}-actions`,role:"menu","aria-orientation":Sd(A),className:De(ie.actions,!Y&&ie.actionsClosed),ownerState:ce,children:Ze})]}))}),F4=nZ;function oZ(n){return Ge("MuiTooltip",n)}const rZ=qe("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),ss=rZ,iZ=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function sZ(n){return Math.round(n*1e5)/1e5}const aZ=n=>{const{classes:o,disableInteractive:a,arrow:c,touch:u,placement:p}=n,g={popper:["popper",!a&&"popperInteractive",c&&"popperArrow"],tooltip:["tooltip",c&&"tooltipArrow",u&&"touch",`tooltipPlacement${_e(p.split("-")[0])}`],arrow:["arrow"]};return Qe(g,oZ,o)},lZ=fe(w4,{name:"MuiTooltip",slot:"Popper",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.popper,!a.disableInteractive&&o.popperInteractive,a.arrow&&o.popperArrow,!a.open&&o.popperClose]}})(({theme:n,ownerState:o,open:a})=>U({zIndex:(n.vars||n).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!a&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${ss.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${ss.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${ss.arrow}`]:U({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${ss.arrow}`]:U({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),cZ=fe("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.tooltip,a.touch&&o.touch,a.arrow&&o.tooltipArrow,o[`tooltipPlacement${_e(a.placement.split("-")[0])}`]]}})(({theme:n,ownerState:o})=>U({backgroundColor:n.vars?n.vars.palette.Tooltip.bg:Xn(n.palette.grey[700],.92),borderRadius:(n.vars||n).shape.borderRadius,color:(n.vars||n).palette.common.white,fontFamily:n.typography.fontFamily,padding:"4px 8px",fontSize:n.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:n.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:n.typography.pxToRem(14),lineHeight:`${sZ(16/14)}em`,fontWeight:n.typography.fontWeightRegular},{[`.${ss.popper}[data-popper-placement*="left"] &`]:U({transformOrigin:"right center"},o.isRtl?U({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):U({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${ss.popper}[data-popper-placement*="right"] &`]:U({transformOrigin:"left center"},o.isRtl?U({marginRight:"14px"},o.touch&&{marginRight:"24px"}):U({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${ss.popper}[data-popper-placement*="top"] &`]:U({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${ss.popper}[data-popper-placement*="bottom"] &`]:U({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})})),dZ=fe("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(n,o)=>o.arrow})(({theme:n})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:n.vars?n.vars.palette.Tooltip.bg:Xn(n.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let zp=!1,g0=null,Dd={x:0,y:0};function Lp(n,o){return a=>{o&&o(a),n(a)}}const uZ=z.forwardRef(function(o,a){var c,u,p,g,k,m,C,A,_,y,E,S,D,R,I,P,B,L,M;const W=Ke({props:o,name:"MuiTooltip"}),{arrow:H=!1,children:K,components:Z={},componentsProps:Y={},describeChild:ee=!1,disableFocusListener:ce=!1,disableHoverListener:ie=!1,disableInteractive:te=!1,disableTouchListener:oe=!1,enterDelay:de=100,enterNextDelay:re=0,enterTouchDelay:se=700,followCursor:he=!1,id:me,leaveDelay:Te=0,leaveTouchDelay:Ie=1500,onClose:He,onOpen:Ne,open:we,placement:Pe="bottom",PopperComponent:Ze,PopperProps:Ce={},slotProps:Me={},slots:tt={},title:Be,TransitionComponent:ge=xi,TransitionProps:Ye}=W,it=ve(W,iZ),Bt=As(),Vt=Bt.direction==="rtl",[We,Pt]=z.useState(),[st,je]=z.useState(null),at=z.useRef(!1),Zt=te||he,Le=z.useRef(),ft=z.useRef(),vt=z.useRef(),un=z.useRef(),[Bn,Ve]=Nf({controlled:we,default:!1,name:"Tooltip",state:"open"});let Ae=Bn;const Ee=Bv(me),et=z.useRef(),kt=z.useCallback(()=>{et.current!==void 0&&(document.body.style.WebkitUserSelect=et.current,et.current=void 0),clearTimeout(un.current)},[]);z.useEffect(()=>()=>{clearTimeout(Le.current),clearTimeout(ft.current),clearTimeout(vt.current),kt()},[kt]);const rn=Fe=>{clearTimeout(g0),zp=!0,Ve(!0),Ne&&!Ae&&Ne(Fe)},zt=Ur(Fe=>{clearTimeout(g0),g0=setTimeout(()=>{zp=!1},800+Te),Ve(!1),He&&Ae&&He(Fe),clearTimeout(Le.current),Le.current=setTimeout(()=>{at.current=!1},Bt.transitions.duration.shortest)}),_n=Fe=>{at.current&&Fe.type!=="touchstart"||(We&&We.removeAttribute("title"),clearTimeout(ft.current),clearTimeout(vt.current),de||zp&&re?ft.current=setTimeout(()=>{rn(Fe)},zp?re:de):rn(Fe))},xs=Fe=>{clearTimeout(ft.current),clearTimeout(vt.current),vt.current=setTimeout(()=>{zt(Fe)},Te)},{isFocusVisibleRef:Es,onBlur:zo,onFocus:tr,ref:Xr}=CM(),[,Na]=z.useState(!1),Ss=Fe=>{zo(Fe),Es.current===!1&&(Na(!1),xs(Fe))},Ba=Fe=>{We||Pt(Fe.currentTarget),tr(Fe),Es.current===!0&&(Na(!0),_n(Fe))},Ra=Fe=>{at.current=!0;const On=K.props;On.onTouchStart&&On.onTouchStart(Fe)},xn=_n,Oa=xs,ei=Fe=>{Ra(Fe),clearTimeout(vt.current),clearTimeout(Le.current),kt(),et.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",un.current=setTimeout(()=>{document.body.style.WebkitUserSelect=et.current,_n(Fe)},se)},wo=Fe=>{K.props.onTouchEnd&&K.props.onTouchEnd(Fe),kt(),clearTimeout(vt.current),vt.current=setTimeout(()=>{zt(Fe)},Ie)};z.useEffect(()=>{if(!Ae)return;function Fe(On){(On.key==="Escape"||On.key==="Esc")&&zt(On)}return document.addEventListener("keydown",Fe),()=>{document.removeEventListener("keydown",Fe)}},[zt,Ae]);const za=dn(K.ref,Xr,Pt,a);!Be&&Be!==0&&(Ae=!1);const Ds=z.useRef(),_c=Fe=>{const On=K.props;On.onMouseMove&&On.onMouseMove(Fe),Dd={x:Fe.clientX,y:Fe.clientY},Ds.current&&Ds.current.update()},Lo={},Ts=typeof Be=="string";ee?(Lo.title=!Ae&&Ts&&!ie?Be:null,Lo["aria-describedby"]=Ae?Ee:null):(Lo["aria-label"]=Ts?Be:null,Lo["aria-labelledby"]=Ae&&!Ts?Ee:null);const hn=U({},Lo,it,K.props,{className:De(it.className,K.props.className),onTouchStart:Ra,ref:za},he?{onMouseMove:_c}:{}),jo={};oe||(hn.onTouchStart=ei,hn.onTouchEnd=wo),ie||(hn.onMouseOver=Lp(xn,hn.onMouseOver),hn.onMouseLeave=Lp(Oa,hn.onMouseLeave),Zt||(jo.onMouseOver=xn,jo.onMouseLeave=Oa)),ce||(hn.onFocus=Lp(Ba,hn.onFocus),hn.onBlur=Lp(Ss,hn.onBlur),Zt||(jo.onFocus=Ba,jo.onBlur=Ss));const xc=z.useMemo(()=>{var Fe;let On=[{name:"arrow",enabled:!!st,options:{element:st,padding:4}}];return(Fe=Ce.popperOptions)!=null&&Fe.modifiers&&(On=On.concat(Ce.popperOptions.modifiers)),U({},Ce.popperOptions,{modifiers:On})},[st,Ce]),ro=U({},W,{isRtl:Vt,arrow:H,disableInteractive:Zt,placement:Pe,PopperComponentProp:Ze,touch:at.current}),Is=aZ(ro),La=(c=(u=tt.popper)!=null?u:Z.Popper)!=null?c:lZ,Rn=(p=(g=(k=tt.transition)!=null?k:Z.Transition)!=null?g:ge)!=null?p:xi,Di=(m=(C=tt.tooltip)!=null?C:Z.Tooltip)!=null?m:cZ,Ms=(A=(_=tt.arrow)!=null?_:Z.Arrow)!=null?A:dZ,ja=Rd(La,U({},Ce,(y=Me.popper)!=null?y:Y.popper,{className:De(Is.popper,Ce==null?void 0:Ce.className,(E=(S=Me.popper)!=null?S:Y.popper)==null?void 0:E.className)}),ro),Fa=Rd(Rn,U({},Ye,(D=Me.transition)!=null?D:Y.transition),ro),nr=Rd(Di,U({},(R=Me.tooltip)!=null?R:Y.tooltip,{className:De(Is.tooltip,(I=(P=Me.tooltip)!=null?P:Y.tooltip)==null?void 0:I.className)}),ro),Va=Rd(Ms,U({},(B=Me.arrow)!=null?B:Y.arrow,{className:De(Is.arrow,(L=(M=Me.arrow)!=null?M:Y.arrow)==null?void 0:L.className)}),ro);return V.jsxs(z.Fragment,{children:[z.cloneElement(K,hn),V.jsx(La,U({as:Ze??w4,placement:Pe,anchorEl:he?{getBoundingClientRect:()=>({top:Dd.y,left:Dd.x,right:Dd.x,bottom:Dd.y,width:0,height:0})}:We,popperRef:Ds,open:We?Ae:!1,id:Ee,transition:!0},jo,ja,{popperOptions:xc,children:({TransitionProps:Fe})=>V.jsx(Rn,U({timeout:Bt.transitions.duration.shorter},Fe,Fa,{children:V.jsxs(Di,U({},nr,{children:[Be,H?V.jsx(Ms,U({},Va,{ref:je})):null]}))}))}))]})}),hZ=uZ;function pZ(n){return Ge("MuiSpeedDialAction",n)}const fZ=qe("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),gZ=fZ,mZ=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],bZ=n=>{const{open:o,tooltipPlacement:a,classes:c}=n,u={fab:["fab",!o&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${_e(a)}`,!o&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return Qe(u,pZ,c)},kZ=fe(x4,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.fab,!a.open&&o.fabClosed]}})(({theme:n,ownerState:o})=>U({margin:8,color:(n.vars||n).palette.text.secondary,backgroundColor:(n.vars||n).palette.background.paper,"&:hover":{backgroundColor:n.vars?n.vars.palette.SpeedDialAction.fabHoverBg:e4(n.palette.background.paper,.15)},transition:`${n.transitions.create("transform",{duration:n.transitions.duration.shorter})}, opacity 0.8s`,opacity:1},!o.open&&{opacity:0,transform:"scale(0)"})),wZ=fe("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[o.staticTooltip,!a.open&&o.staticTooltipClosed,o[`tooltipPlacement${_e(a.tooltipPlacement)}`]]}})(({theme:n,ownerState:o})=>({position:"relative",display:"flex",alignItems:"center",[`& .${gZ.staticTooltipLabel}`]:U({transition:n.transitions.create(["transform","opacity"],{duration:n.transitions.duration.shorter}),opacity:1},!o.open&&{opacity:0,transform:"scale(0.5)"},o.tooltipPlacement==="left"&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},o.tooltipPlacement==="right"&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8})})),vZ=fe("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(n,o)=>o.staticTooltipLabel})(({theme:n})=>U({position:"absolute"},n.typography.body1,{backgroundColor:(n.vars||n).palette.background.paper,borderRadius:(n.vars||n).shape.borderRadius,boxShadow:(n.vars||n).shadows[1],color:(n.vars||n).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})),CZ=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiSpeedDialAction"}),{className:u,delay:p=0,FabProps:g={},icon:k,id:m,open:C,TooltipClasses:A,tooltipOpen:_=!1,tooltipPlacement:y="left",tooltipTitle:E}=c,S=ve(c,mZ),D=U({},c,{tooltipPlacement:y}),R=bZ(D),[I,P]=z.useState(_),B=()=>{P(!1)},L=()=>{P(!0)},M={transitionDelay:`${p}ms`},W=V.jsx(kZ,U({size:"small",className:De(R.fab,u),tabIndex:-1,role:"menuitem",ownerState:D},g,{style:U({},M,g.style),children:k}));return _?V.jsxs(wZ,U({id:m,ref:a,className:R.staticTooltip,ownerState:D},S,{children:[V.jsx(vZ,{style:M,id:`${m}-label`,className:R.staticTooltipLabel,ownerState:D,children:E}),z.cloneElement(W,{"aria-labelledby":`${m}-label`})]})):(!C&&I&&P(!1),V.jsx(hZ,U({id:m,ref:a,title:E,placement:y,onClose:B,onOpen:L,open:C&&I,classes:A},S,{children:W})))}),Wl=CZ,yZ=Gt(V.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function AZ(n){return Ge("MuiSpeedDialIcon",n)}const _Z=qe("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),ia=_Z,xZ=["className","icon","open","openIcon"],EZ=n=>{const{classes:o,open:a,openIcon:c}=n;return Qe({root:["root"],icon:["icon",a&&"iconOpen",c&&a&&"iconWithOpenIconOpen"],openIcon:["openIcon",a&&"openIconOpen"]},AZ,o)},SZ=fe("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:a}=n;return[{[`& .${ia.icon}`]:o.icon},{[`& .${ia.icon}`]:a.open&&o.iconOpen},{[`& .${ia.icon}`]:a.open&&a.openIcon&&o.iconWithOpenIconOpen},{[`& .${ia.openIcon}`]:o.openIcon},{[`& .${ia.openIcon}`]:a.open&&o.openIconOpen},o.root]}})(({theme:n,ownerState:o})=>({height:24,[`& .${ia.icon}`]:U({transition:n.transitions.create(["transform","opacity"],{duration:n.transitions.duration.short})},o.open&&U({transform:"rotate(45deg)"},o.openIcon&&{opacity:0})),[`& .${ia.openIcon}`]:U({position:"absolute",transition:n.transitions.create(["transform","opacity"],{duration:n.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},o.open&&{transform:"rotate(0deg)",opacity:1})})),V4=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiSpeedDialIcon"}),{className:u,icon:p,openIcon:g}=c,k=ve(c,xZ),m=c,C=EZ(m);function A(_,y){return z.isValidElement(_)?z.cloneElement(_,{className:y}):_}return V.jsxs(SZ,U({className:De(C.root,u),ref:a,ownerState:m},k,{children:[g?A(g,C.openIcon):null,p?A(p,C.icon):V.jsx(yZ,{className:C.icon})]}))});V4.muiName="SpeedDialIcon";const $4=V4,DZ=lU({createStyledComponent:fe("div",{name:"MuiStack",slot:"Root",overridesResolver:(n,o)=>o.root}),useThemeProps:n=>Ke({props:n,name:"MuiStack"})}),eo=DZ;function TZ(n){return Ge("MuiTextField",n)}qe("MuiTextField",["root"]);const IZ=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],MZ={standard:M4,filled:S4,outlined:L4},PZ=n=>{const{classes:o}=n;return Qe({root:["root"]},TZ,o)},NZ=fe(DK,{name:"MuiTextField",slot:"Root",overridesResolver:(n,o)=>o.root})({}),BZ=z.forwardRef(function(o,a){const c=Ke({props:o,name:"MuiTextField"}),{autoComplete:u,autoFocus:p=!1,children:g,className:k,color:m="primary",defaultValue:C,disabled:A=!1,error:_=!1,FormHelperTextProps:y,fullWidth:E=!1,helperText:S,id:D,InputLabelProps:R,inputProps:I,InputProps:P,inputRef:B,label:L,maxRows:M,minRows:W,multiline:H=!1,name:K,onBlur:Z,onChange:Y,onClick:ee,onFocus:ce,placeholder:ie,required:te=!1,rows:oe,select:de=!1,SelectProps:re,type:se,value:he,variant:me="outlined"}=c,Te=ve(c,IZ),Ie=U({},c,{autoFocus:p,color:m,disabled:A,error:_,fullWidth:E,multiline:H,required:te,select:de,variant:me}),He=PZ(Ie),Ne={};me==="outlined"&&(R&&typeof R.shrink<"u"&&(Ne.notched=R.shrink),Ne.label=L),de&&((!re||!re.native)&&(Ne.id=void 0),Ne["aria-describedby"]=void 0);const we=Bv(D),Pe=S&&we?`${we}-helper-text`:void 0,Ze=L&&we?`${we}-label`:void 0,Ce=MZ[me],Me=V.jsx(Ce,U({"aria-describedby":Pe,autoComplete:u,autoFocus:p,defaultValue:C,fullWidth:E,multiline:H,name:K,rows:oe,maxRows:M,minRows:W,type:se,value:he,id:we,inputRef:B,onBlur:Z,onChange:Y,onFocus:ce,onClick:ee,placeholder:ie,inputProps:I},Ne,P));return V.jsxs(NZ,U({className:De(He.root,k),disabled:A,error:_,fullWidth:E,ref:a,required:te,color:m,variant:me,ownerState:Ie},Te,{children:[L!=null&&L!==""&&V.jsx(dY,U({htmlFor:we,id:Ze},R,{children:L})),de?V.jsx(SQ,U({"aria-describedby":Pe,id:we,labelId:Ze,value:he,input:Me},re,{children:g})):Me,S&&V.jsx(RK,U({id:Pe},y,{children:S}))]}))}),Mw=BZ;function U4(n,o){return function(){return n.apply(o,arguments)}}const{toString:RZ}=Object.prototype,{getPrototypeOf:bC}=Object,tm=(n=>o=>{const a=RZ.call(o);return n[a]||(n[a]=a.slice(8,-1).toLowerCase())})(Object.create(null)),Jr=n=>(n=n.toLowerCase(),o=>tm(o)===n),nm=n=>o=>typeof o===n,{isArray:Ac}=Array,xu=nm("undefined");function OZ(n){return n!==null&&!xu(n)&&n.constructor!==null&&!xu(n.constructor)&&Yo(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const H4=Jr("ArrayBuffer");function zZ(n){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(n):o=n&&n.buffer&&H4(n.buffer),o}const LZ=nm("string"),Yo=nm("function"),W4=nm("number"),om=n=>n!==null&&typeof n=="object",jZ=n=>n===!0||n===!1,of=n=>{if(tm(n)!=="object")return!1;const o=bC(n);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},FZ=Jr("Date"),VZ=Jr("File"),$Z=Jr("Blob"),UZ=Jr("FileList"),HZ=n=>om(n)&&Yo(n.pipe),WZ=n=>{let o;return n&&(typeof FormData=="function"&&n instanceof FormData||Yo(n.append)&&((o=tm(n))==="formdata"||o==="object"&&Yo(n.toString)&&n.toString()==="[object FormData]"))},GZ=Jr("URLSearchParams"),qZ=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Vu(n,o,{allOwnKeys:a=!1}={}){if(n===null||typeof n>"u")return;let c,u;if(typeof n!="object"&&(n=[n]),Ac(n))for(c=0,u=n.length;c<u;c++)o.call(null,n[c],c,n);else{const p=a?Object.getOwnPropertyNames(n):Object.keys(n),g=p.length;let k;for(c=0;c<g;c++)k=p[c],o.call(null,n[k],k,n)}}function G4(n,o){o=o.toLowerCase();const a=Object.keys(n);let c=a.length,u;for(;c-- >0;)if(u=a[c],o===u.toLowerCase())return u;return null}const q4=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),K4=n=>!xu(n)&&n!==q4;function Pw(){const{caseless:n}=K4(this)&&this||{},o={},a=(c,u)=>{const p=n&&G4(o,u)||u;of(o[p])&&of(c)?o[p]=Pw(o[p],c):of(c)?o[p]=Pw({},c):Ac(c)?o[p]=c.slice():o[p]=c};for(let c=0,u=arguments.length;c<u;c++)arguments[c]&&Vu(arguments[c],a);return o}const KZ=(n,o,a,{allOwnKeys:c}={})=>(Vu(o,(u,p)=>{a&&Yo(u)?n[p]=U4(u,a):n[p]=u},{allOwnKeys:c}),n),YZ=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),QZ=(n,o,a,c)=>{n.prototype=Object.create(o.prototype,c),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:o.prototype}),a&&Object.assign(n.prototype,a)},ZZ=(n,o,a,c)=>{let u,p,g;const k={};if(o=o||{},n==null)return o;do{for(u=Object.getOwnPropertyNames(n),p=u.length;p-- >0;)g=u[p],(!c||c(g,n,o))&&!k[g]&&(o[g]=n[g],k[g]=!0);n=a!==!1&&bC(n)}while(n&&(!a||a(n,o))&&n!==Object.prototype);return o},JZ=(n,o,a)=>{n=String(n),(a===void 0||a>n.length)&&(a=n.length),a-=o.length;const c=n.indexOf(o,a);return c!==-1&&c===a},XZ=n=>{if(!n)return null;if(Ac(n))return n;let o=n.length;if(!W4(o))return null;const a=new Array(o);for(;o-- >0;)a[o]=n[o];return a},eJ=(n=>o=>n&&o instanceof n)(typeof Uint8Array<"u"&&bC(Uint8Array)),tJ=(n,o)=>{const c=(n&&n[Symbol.iterator]).call(n);let u;for(;(u=c.next())&&!u.done;){const p=u.value;o.call(n,p[0],p[1])}},nJ=(n,o)=>{let a;const c=[];for(;(a=n.exec(o))!==null;)c.push(a);return c},oJ=Jr("HTMLFormElement"),rJ=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(a,c,u){return c.toUpperCase()+u}),jD=(({hasOwnProperty:n})=>(o,a)=>n.call(o,a))(Object.prototype),iJ=Jr("RegExp"),Y4=(n,o)=>{const a=Object.getOwnPropertyDescriptors(n),c={};Vu(a,(u,p)=>{o(u,p,n)!==!1&&(c[p]=u)}),Object.defineProperties(n,c)},sJ=n=>{Y4(n,(o,a)=>{if(Yo(n)&&["arguments","caller","callee"].indexOf(a)!==-1)return!1;const c=n[a];if(Yo(c)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+a+"'")})}})},aJ=(n,o)=>{const a={},c=u=>{u.forEach(p=>{a[p]=!0})};return Ac(n)?c(n):c(String(n).split(o)),a},lJ=()=>{},cJ=(n,o)=>(n=+n,Number.isFinite(n)?n:o),m0="abcdefghijklmnopqrstuvwxyz",FD="0123456789",Q4={DIGIT:FD,ALPHA:m0,ALPHA_DIGIT:m0+m0.toUpperCase()+FD},dJ=(n=16,o=Q4.ALPHA_DIGIT)=>{let a="";const{length:c}=o;for(;n--;)a+=o[Math.random()*c|0];return a};function uJ(n){return!!(n&&Yo(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const hJ=n=>{const o=new Array(10),a=(c,u)=>{if(om(c)){if(o.indexOf(c)>=0)return;if(!("toJSON"in c)){o[u]=c;const p=Ac(c)?[]:{};return Vu(c,(g,k)=>{const m=a(g,u+1);!xu(m)&&(p[k]=m)}),o[u]=void 0,p}}return c};return a(n,0)},pJ=Jr("AsyncFunction"),fJ=n=>n&&(om(n)||Yo(n))&&Yo(n.then)&&Yo(n.catch),ae={isArray:Ac,isArrayBuffer:H4,isBuffer:OZ,isFormData:WZ,isArrayBufferView:zZ,isString:LZ,isNumber:W4,isBoolean:jZ,isObject:om,isPlainObject:of,isUndefined:xu,isDate:FZ,isFile:VZ,isBlob:$Z,isRegExp:iJ,isFunction:Yo,isStream:HZ,isURLSearchParams:GZ,isTypedArray:eJ,isFileList:UZ,forEach:Vu,merge:Pw,extend:KZ,trim:qZ,stripBOM:YZ,inherits:QZ,toFlatObject:ZZ,kindOf:tm,kindOfTest:Jr,endsWith:JZ,toArray:XZ,forEachEntry:tJ,matchAll:nJ,isHTMLForm:oJ,hasOwnProperty:jD,hasOwnProp:jD,reduceDescriptors:Y4,freezeMethods:sJ,toObjectSet:aJ,toCamelCase:rJ,noop:lJ,toFiniteNumber:cJ,findKey:G4,global:q4,isContextDefined:K4,ALPHABET:Q4,generateString:dJ,isSpecCompliantForm:uJ,toJSONObject:hJ,isAsyncFn:pJ,isThenable:fJ};function ht(n,o,a,c,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",o&&(this.code=o),a&&(this.config=a),c&&(this.request=c),u&&(this.response=u)}ae.inherits(ht,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ae.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Z4=ht.prototype,J4={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{J4[n]={value:n}});Object.defineProperties(ht,J4);Object.defineProperty(Z4,"isAxiosError",{value:!0});ht.from=(n,o,a,c,u,p)=>{const g=Object.create(Z4);return ae.toFlatObject(n,g,function(m){return m!==Error.prototype},k=>k!=="isAxiosError"),ht.call(g,n.message,o,a,c,u),g.cause=n,g.name=n.name,p&&Object.assign(g,p),g};const gJ=null;function Nw(n){return ae.isPlainObject(n)||ae.isArray(n)}function X4(n){return ae.endsWith(n,"[]")?n.slice(0,-2):n}function VD(n,o,a){return n?n.concat(o).map(function(u,p){return u=X4(u),!a&&p?"["+u+"]":u}).join(a?".":""):o}function mJ(n){return ae.isArray(n)&&!n.some(Nw)}const bJ=ae.toFlatObject(ae,{},null,function(o){return/^is[A-Z]/.test(o)});function rm(n,o,a){if(!ae.isObject(n))throw new TypeError("target must be an object");o=o||new FormData,a=ae.toFlatObject(a,{metaTokens:!0,dots:!1,indexes:!1},!1,function(D,R){return!ae.isUndefined(R[D])});const c=a.metaTokens,u=a.visitor||A,p=a.dots,g=a.indexes,m=(a.Blob||typeof Blob<"u"&&Blob)&&ae.isSpecCompliantForm(o);if(!ae.isFunction(u))throw new TypeError("visitor must be a function");function C(S){if(S===null)return"";if(ae.isDate(S))return S.toISOString();if(!m&&ae.isBlob(S))throw new ht("Blob is not supported. Use a Buffer instead.");return ae.isArrayBuffer(S)||ae.isTypedArray(S)?m&&typeof Blob=="function"?new Blob([S]):Buffer.from(S):S}function A(S,D,R){let I=S;if(S&&!R&&typeof S=="object"){if(ae.endsWith(D,"{}"))D=c?D:D.slice(0,-2),S=JSON.stringify(S);else if(ae.isArray(S)&&mJ(S)||(ae.isFileList(S)||ae.endsWith(D,"[]"))&&(I=ae.toArray(S)))return D=X4(D),I.forEach(function(B,L){!(ae.isUndefined(B)||B===null)&&o.append(g===!0?VD([D],L,p):g===null?D:D+"[]",C(B))}),!1}return Nw(S)?!0:(o.append(VD(R,D,p),C(S)),!1)}const _=[],y=Object.assign(bJ,{defaultVisitor:A,convertValue:C,isVisitable:Nw});function E(S,D){if(!ae.isUndefined(S)){if(_.indexOf(S)!==-1)throw Error("Circular reference detected in "+D.join("."));_.push(S),ae.forEach(S,function(I,P){(!(ae.isUndefined(I)||I===null)&&u.call(o,I,ae.isString(P)?P.trim():P,D,y))===!0&&E(I,D?D.concat(P):[P])}),_.pop()}}if(!ae.isObject(n))throw new TypeError("data must be an object");return E(n),o}function $D(n){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(c){return o[c]})}function kC(n,o){this._pairs=[],n&&rm(n,this,o)}const eP=kC.prototype;eP.append=function(o,a){this._pairs.push([o,a])};eP.toString=function(o){const a=o?function(c){return o.call(this,c,$D)}:$D;return this._pairs.map(function(u){return a(u[0])+"="+a(u[1])},"").join("&")};function kJ(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tP(n,o,a){if(!o)return n;const c=a&&a.encode||kJ,u=a&&a.serialize;let p;if(u?p=u(o,a):p=ae.isURLSearchParams(o)?o.toString():new kC(o,a).toString(c),p){const g=n.indexOf("#");g!==-1&&(n=n.slice(0,g)),n+=(n.indexOf("?")===-1?"?":"&")+p}return n}class wJ{constructor(){this.handlers=[]}use(o,a,c){return this.handlers.push({fulfilled:o,rejected:a,synchronous:c?c.synchronous:!1,runWhen:c?c.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){ae.forEach(this.handlers,function(c){c!==null&&o(c)})}}const UD=wJ,nP={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vJ=typeof URLSearchParams<"u"?URLSearchParams:kC,CJ=typeof FormData<"u"?FormData:null,yJ=typeof Blob<"u"?Blob:null,AJ=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),_J=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Hr={isBrowser:!0,classes:{URLSearchParams:vJ,FormData:CJ,Blob:yJ},isStandardBrowserEnv:AJ,isStandardBrowserWebWorkerEnv:_J,protocols:["http","https","file","blob","url","data"]};function xJ(n,o){return rm(n,new Hr.classes.URLSearchParams,Object.assign({visitor:function(a,c,u,p){return Hr.isNode&&ae.isBuffer(a)?(this.append(c,a.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)}},o))}function EJ(n){return ae.matchAll(/\w+|\[(\w*)]/g,n).map(o=>o[0]==="[]"?"":o[1]||o[0])}function SJ(n){const o={},a=Object.keys(n);let c;const u=a.length;let p;for(c=0;c<u;c++)p=a[c],o[p]=n[p];return o}function oP(n){function o(a,c,u,p){let g=a[p++];const k=Number.isFinite(+g),m=p>=a.length;return g=!g&&ae.isArray(u)?u.length:g,m?(ae.hasOwnProp(u,g)?u[g]=[u[g],c]:u[g]=c,!k):((!u[g]||!ae.isObject(u[g]))&&(u[g]=[]),o(a,c,u[g],p)&&ae.isArray(u[g])&&(u[g]=SJ(u[g])),!k)}if(ae.isFormData(n)&&ae.isFunction(n.entries)){const a={};return ae.forEachEntry(n,(c,u)=>{o(EJ(c),u,a,0)}),a}return null}const DJ={"Content-Type":void 0};function TJ(n,o,a){if(ae.isString(n))try{return(o||JSON.parse)(n),ae.trim(n)}catch(c){if(c.name!=="SyntaxError")throw c}return(a||JSON.stringify)(n)}const im={transitional:nP,adapter:["xhr","http"],transformRequest:[function(o,a){const c=a.getContentType()||"",u=c.indexOf("application/json")>-1,p=ae.isObject(o);if(p&&ae.isHTMLForm(o)&&(o=new FormData(o)),ae.isFormData(o))return u&&u?JSON.stringify(oP(o)):o;if(ae.isArrayBuffer(o)||ae.isBuffer(o)||ae.isStream(o)||ae.isFile(o)||ae.isBlob(o))return o;if(ae.isArrayBufferView(o))return o.buffer;if(ae.isURLSearchParams(o))return a.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let k;if(p){if(c.indexOf("application/x-www-form-urlencoded")>-1)return xJ(o,this.formSerializer).toString();if((k=ae.isFileList(o))||c.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return rm(k?{"files[]":o}:o,m&&new m,this.formSerializer)}}return p||u?(a.setContentType("application/json",!1),TJ(o)):o}],transformResponse:[function(o){const a=this.transitional||im.transitional,c=a&&a.forcedJSONParsing,u=this.responseType==="json";if(o&&ae.isString(o)&&(c&&!this.responseType||u)){const g=!(a&&a.silentJSONParsing)&&u;try{return JSON.parse(o)}catch(k){if(g)throw k.name==="SyntaxError"?ht.from(k,ht.ERR_BAD_RESPONSE,this,null,this.response):k}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Hr.classes.FormData,Blob:Hr.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ae.forEach(["delete","get","head"],function(o){im.headers[o]={}});ae.forEach(["post","put","patch"],function(o){im.headers[o]=ae.merge(DJ)});const wC=im,IJ=ae.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),MJ=n=>{const o={};let a,c,u;return n&&n.split(`
`).forEach(function(g){u=g.indexOf(":"),a=g.substring(0,u).trim().toLowerCase(),c=g.substring(u+1).trim(),!(!a||o[a]&&IJ[a])&&(a==="set-cookie"?o[a]?o[a].push(c):o[a]=[c]:o[a]=o[a]?o[a]+", "+c:c)}),o},HD=Symbol("internals");function Td(n){return n&&String(n).trim().toLowerCase()}function rf(n){return n===!1||n==null?n:ae.isArray(n)?n.map(rf):String(n)}function PJ(n){const o=Object.create(null),a=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let c;for(;c=a.exec(n);)o[c[1]]=c[2];return o}const NJ=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function b0(n,o,a,c,u){if(ae.isFunction(c))return c.call(this,o,a);if(u&&(o=a),!!ae.isString(o)){if(ae.isString(c))return o.indexOf(c)!==-1;if(ae.isRegExp(c))return c.test(o)}}function BJ(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,a,c)=>a.toUpperCase()+c)}function RJ(n,o){const a=ae.toCamelCase(" "+o);["get","set","has"].forEach(c=>{Object.defineProperty(n,c+a,{value:function(u,p,g){return this[c].call(this,o,u,p,g)},configurable:!0})})}class sm{constructor(o){o&&this.set(o)}set(o,a,c){const u=this;function p(k,m,C){const A=Td(m);if(!A)throw new Error("header name must be a non-empty string");const _=ae.findKey(u,A);(!_||u[_]===void 0||C===!0||C===void 0&&u[_]!==!1)&&(u[_||m]=rf(k))}const g=(k,m)=>ae.forEach(k,(C,A)=>p(C,A,m));return ae.isPlainObject(o)||o instanceof this.constructor?g(o,a):ae.isString(o)&&(o=o.trim())&&!NJ(o)?g(MJ(o),a):o!=null&&p(a,o,c),this}get(o,a){if(o=Td(o),o){const c=ae.findKey(this,o);if(c){const u=this[c];if(!a)return u;if(a===!0)return PJ(u);if(ae.isFunction(a))return a.call(this,u,c);if(ae.isRegExp(a))return a.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,a){if(o=Td(o),o){const c=ae.findKey(this,o);return!!(c&&this[c]!==void 0&&(!a||b0(this,this[c],c,a)))}return!1}delete(o,a){const c=this;let u=!1;function p(g){if(g=Td(g),g){const k=ae.findKey(c,g);k&&(!a||b0(c,c[k],k,a))&&(delete c[k],u=!0)}}return ae.isArray(o)?o.forEach(p):p(o),u}clear(o){const a=Object.keys(this);let c=a.length,u=!1;for(;c--;){const p=a[c];(!o||b0(this,this[p],p,o,!0))&&(delete this[p],u=!0)}return u}normalize(o){const a=this,c={};return ae.forEach(this,(u,p)=>{const g=ae.findKey(c,p);if(g){a[g]=rf(u),delete a[p];return}const k=o?BJ(p):String(p).trim();k!==p&&delete a[p],a[k]=rf(u),c[k]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const a=Object.create(null);return ae.forEach(this,(c,u)=>{c!=null&&c!==!1&&(a[u]=o&&ae.isArray(c)?c.join(", "):c)}),a}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,a])=>o+": "+a).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...a){const c=new this(o);return a.forEach(u=>c.set(u)),c}static accessor(o){const c=(this[HD]=this[HD]={accessors:{}}).accessors,u=this.prototype;function p(g){const k=Td(g);c[k]||(RJ(u,g),c[k]=!0)}return ae.isArray(o)?o.forEach(p):p(o),this}}sm.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ae.freezeMethods(sm.prototype);ae.freezeMethods(sm);const wi=sm;function k0(n,o){const a=this||wC,c=o||a,u=wi.from(c.headers);let p=c.data;return ae.forEach(n,function(k){p=k.call(a,p,u.normalize(),o?o.status:void 0)}),u.normalize(),p}function rP(n){return!!(n&&n.__CANCEL__)}function $u(n,o,a){ht.call(this,n??"canceled",ht.ERR_CANCELED,o,a),this.name="CanceledError"}ae.inherits($u,ht,{__CANCEL__:!0});function OJ(n,o,a){const c=a.config.validateStatus;!a.status||!c||c(a.status)?n(a):o(new ht("Request failed with status code "+a.status,[ht.ERR_BAD_REQUEST,ht.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))}const zJ=Hr.isStandardBrowserEnv?function(){return{write:function(a,c,u,p,g,k){const m=[];m.push(a+"="+encodeURIComponent(c)),ae.isNumber(u)&&m.push("expires="+new Date(u).toGMTString()),ae.isString(p)&&m.push("path="+p),ae.isString(g)&&m.push("domain="+g),k===!0&&m.push("secure"),document.cookie=m.join("; ")},read:function(a){const c=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return c?decodeURIComponent(c[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function LJ(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function jJ(n,o){return o?n.replace(/\/+$/,"")+"/"+o.replace(/^\/+/,""):n}function iP(n,o){return n&&!LJ(o)?jJ(n,o):o}const FJ=Hr.isStandardBrowserEnv?function(){const o=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");let c;function u(p){let g=p;return o&&(a.setAttribute("href",g),g=a.href),a.setAttribute("href",g),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return c=u(window.location.href),function(g){const k=ae.isString(g)?u(g):g;return k.protocol===c.protocol&&k.host===c.host}}():function(){return function(){return!0}}();function VJ(n){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return o&&o[1]||""}function $J(n,o){n=n||10;const a=new Array(n),c=new Array(n);let u=0,p=0,g;return o=o!==void 0?o:1e3,function(m){const C=Date.now(),A=c[p];g||(g=C),a[u]=m,c[u]=C;let _=p,y=0;for(;_!==u;)y+=a[_++],_=_%n;if(u=(u+1)%n,u===p&&(p=(p+1)%n),C-g<o)return;const E=A&&C-A;return E?Math.round(y*1e3/E):void 0}}function WD(n,o){let a=0;const c=$J(50,250);return u=>{const p=u.loaded,g=u.lengthComputable?u.total:void 0,k=p-a,m=c(k),C=p<=g;a=p;const A={loaded:p,total:g,progress:g?p/g:void 0,bytes:k,rate:m||void 0,estimated:m&&g&&C?(g-p)/m:void 0,event:u};A[o?"download":"upload"]=!0,n(A)}}const UJ=typeof XMLHttpRequest<"u",HJ=UJ&&function(n){return new Promise(function(a,c){let u=n.data;const p=wi.from(n.headers).normalize(),g=n.responseType;let k;function m(){n.cancelToken&&n.cancelToken.unsubscribe(k),n.signal&&n.signal.removeEventListener("abort",k)}ae.isFormData(u)&&(Hr.isStandardBrowserEnv||Hr.isStandardBrowserWebWorkerEnv?p.setContentType(!1):p.setContentType("multipart/form-data;",!1));let C=new XMLHttpRequest;if(n.auth){const E=n.auth.username||"",S=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";p.set("Authorization","Basic "+btoa(E+":"+S))}const A=iP(n.baseURL,n.url);C.open(n.method.toUpperCase(),tP(A,n.params,n.paramsSerializer),!0),C.timeout=n.timeout;function _(){if(!C)return;const E=wi.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),D={data:!g||g==="text"||g==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:E,config:n,request:C};OJ(function(I){a(I),m()},function(I){c(I),m()},D),C=null}if("onloadend"in C?C.onloadend=_:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(_)},C.onabort=function(){C&&(c(new ht("Request aborted",ht.ECONNABORTED,n,C)),C=null)},C.onerror=function(){c(new ht("Network Error",ht.ERR_NETWORK,n,C)),C=null},C.ontimeout=function(){let S=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const D=n.transitional||nP;n.timeoutErrorMessage&&(S=n.timeoutErrorMessage),c(new ht(S,D.clarifyTimeoutError?ht.ETIMEDOUT:ht.ECONNABORTED,n,C)),C=null},Hr.isStandardBrowserEnv){const E=(n.withCredentials||FJ(A))&&n.xsrfCookieName&&zJ.read(n.xsrfCookieName);E&&p.set(n.xsrfHeaderName,E)}u===void 0&&p.setContentType(null),"setRequestHeader"in C&&ae.forEach(p.toJSON(),function(S,D){C.setRequestHeader(D,S)}),ae.isUndefined(n.withCredentials)||(C.withCredentials=!!n.withCredentials),g&&g!=="json"&&(C.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&C.addEventListener("progress",WD(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&C.upload&&C.upload.addEventListener("progress",WD(n.onUploadProgress)),(n.cancelToken||n.signal)&&(k=E=>{C&&(c(!E||E.type?new $u(null,n,C):E),C.abort(),C=null)},n.cancelToken&&n.cancelToken.subscribe(k),n.signal&&(n.signal.aborted?k():n.signal.addEventListener("abort",k)));const y=VJ(A);if(y&&Hr.protocols.indexOf(y)===-1){c(new ht("Unsupported protocol "+y+":",ht.ERR_BAD_REQUEST,n));return}C.send(u||null)})},sf={http:gJ,xhr:HJ};ae.forEach(sf,(n,o)=>{if(n){try{Object.defineProperty(n,"name",{value:o})}catch{}Object.defineProperty(n,"adapterName",{value:o})}});const WJ={getAdapter:n=>{n=ae.isArray(n)?n:[n];const{length:o}=n;let a,c;for(let u=0;u<o&&(a=n[u],!(c=ae.isString(a)?sf[a.toLowerCase()]:a));u++);if(!c)throw c===!1?new ht(`Adapter ${a} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(ae.hasOwnProp(sf,a)?`Adapter '${a}' is not available in the build`:`Unknown adapter '${a}'`);if(!ae.isFunction(c))throw new TypeError("adapter is not a function");return c},adapters:sf};function w0(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new $u(null,n)}function GD(n){return w0(n),n.headers=wi.from(n.headers),n.data=k0.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),WJ.getAdapter(n.adapter||wC.adapter)(n).then(function(c){return w0(n),c.data=k0.call(n,n.transformResponse,c),c.headers=wi.from(c.headers),c},function(c){return rP(c)||(w0(n),c&&c.response&&(c.response.data=k0.call(n,n.transformResponse,c.response),c.response.headers=wi.from(c.response.headers))),Promise.reject(c)})}const qD=n=>n instanceof wi?n.toJSON():n;function gc(n,o){o=o||{};const a={};function c(C,A,_){return ae.isPlainObject(C)&&ae.isPlainObject(A)?ae.merge.call({caseless:_},C,A):ae.isPlainObject(A)?ae.merge({},A):ae.isArray(A)?A.slice():A}function u(C,A,_){if(ae.isUndefined(A)){if(!ae.isUndefined(C))return c(void 0,C,_)}else return c(C,A,_)}function p(C,A){if(!ae.isUndefined(A))return c(void 0,A)}function g(C,A){if(ae.isUndefined(A)){if(!ae.isUndefined(C))return c(void 0,C)}else return c(void 0,A)}function k(C,A,_){if(_ in o)return c(C,A);if(_ in n)return c(void 0,C)}const m={url:p,method:p,data:p,baseURL:g,transformRequest:g,transformResponse:g,paramsSerializer:g,timeout:g,timeoutMessage:g,withCredentials:g,adapter:g,responseType:g,xsrfCookieName:g,xsrfHeaderName:g,onUploadProgress:g,onDownloadProgress:g,decompress:g,maxContentLength:g,maxBodyLength:g,beforeRedirect:g,transport:g,httpAgent:g,httpsAgent:g,cancelToken:g,socketPath:g,responseEncoding:g,validateStatus:k,headers:(C,A)=>u(qD(C),qD(A),!0)};return ae.forEach(Object.keys(Object.assign({},n,o)),function(A){const _=m[A]||u,y=_(n[A],o[A],A);ae.isUndefined(y)&&_!==k||(a[A]=y)}),a}const sP="1.4.0",vC={};["object","boolean","number","function","string","symbol"].forEach((n,o)=>{vC[n]=function(c){return typeof c===n||"a"+(o<1?"n ":" ")+n}});const KD={};vC.transitional=function(o,a,c){function u(p,g){return"[Axios v"+sP+"] Transitional option '"+p+"'"+g+(c?". "+c:"")}return(p,g,k)=>{if(o===!1)throw new ht(u(g," has been removed"+(a?" in "+a:"")),ht.ERR_DEPRECATED);return a&&!KD[g]&&(KD[g]=!0,console.warn(u(g," has been deprecated since v"+a+" and will be removed in the near future"))),o?o(p,g,k):!0}};function GJ(n,o,a){if(typeof n!="object")throw new ht("options must be an object",ht.ERR_BAD_OPTION_VALUE);const c=Object.keys(n);let u=c.length;for(;u-- >0;){const p=c[u],g=o[p];if(g){const k=n[p],m=k===void 0||g(k,p,n);if(m!==!0)throw new ht("option "+p+" must be "+m,ht.ERR_BAD_OPTION_VALUE);continue}if(a!==!0)throw new ht("Unknown option "+p,ht.ERR_BAD_OPTION)}}const Bw={assertOptions:GJ,validators:vC},Qi=Bw.validators;class Ff{constructor(o){this.defaults=o,this.interceptors={request:new UD,response:new UD}}request(o,a){typeof o=="string"?(a=a||{},a.url=o):a=o||{},a=gc(this.defaults,a);const{transitional:c,paramsSerializer:u,headers:p}=a;c!==void 0&&Bw.assertOptions(c,{silentJSONParsing:Qi.transitional(Qi.boolean),forcedJSONParsing:Qi.transitional(Qi.boolean),clarifyTimeoutError:Qi.transitional(Qi.boolean)},!1),u!=null&&(ae.isFunction(u)?a.paramsSerializer={serialize:u}:Bw.assertOptions(u,{encode:Qi.function,serialize:Qi.function},!0)),a.method=(a.method||this.defaults.method||"get").toLowerCase();let g;g=p&&ae.merge(p.common,p[a.method]),g&&ae.forEach(["delete","get","head","post","put","patch","common"],S=>{delete p[S]}),a.headers=wi.concat(g,p);const k=[];let m=!0;this.interceptors.request.forEach(function(D){typeof D.runWhen=="function"&&D.runWhen(a)===!1||(m=m&&D.synchronous,k.unshift(D.fulfilled,D.rejected))});const C=[];this.interceptors.response.forEach(function(D){C.push(D.fulfilled,D.rejected)});let A,_=0,y;if(!m){const S=[GD.bind(this),void 0];for(S.unshift.apply(S,k),S.push.apply(S,C),y=S.length,A=Promise.resolve(a);_<y;)A=A.then(S[_++],S[_++]);return A}y=k.length;let E=a;for(_=0;_<y;){const S=k[_++],D=k[_++];try{E=S(E)}catch(R){D.call(this,R);break}}try{A=GD.call(this,E)}catch(S){return Promise.reject(S)}for(_=0,y=C.length;_<y;)A=A.then(C[_++],C[_++]);return A}getUri(o){o=gc(this.defaults,o);const a=iP(o.baseURL,o.url);return tP(a,o.params,o.paramsSerializer)}}ae.forEach(["delete","get","head","options"],function(o){Ff.prototype[o]=function(a,c){return this.request(gc(c||{},{method:o,url:a,data:(c||{}).data}))}});ae.forEach(["post","put","patch"],function(o){function a(c){return function(p,g,k){return this.request(gc(k||{},{method:o,headers:c?{"Content-Type":"multipart/form-data"}:{},url:p,data:g}))}}Ff.prototype[o]=a(),Ff.prototype[o+"Form"]=a(!0)});const af=Ff;class CC{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let a;this.promise=new Promise(function(p){a=p});const c=this;this.promise.then(u=>{if(!c._listeners)return;let p=c._listeners.length;for(;p-- >0;)c._listeners[p](u);c._listeners=null}),this.promise.then=u=>{let p;const g=new Promise(k=>{c.subscribe(k),p=k}).then(u);return g.cancel=function(){c.unsubscribe(p)},g},o(function(p,g,k){c.reason||(c.reason=new $u(p,g,k),a(c.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const a=this._listeners.indexOf(o);a!==-1&&this._listeners.splice(a,1)}static source(){let o;return{token:new CC(function(u){o=u}),cancel:o}}}const qJ=CC;function KJ(n){return function(a){return n.apply(null,a)}}function YJ(n){return ae.isObject(n)&&n.isAxiosError===!0}const Rw={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Rw).forEach(([n,o])=>{Rw[o]=n});const QJ=Rw;function aP(n){const o=new af(n),a=U4(af.prototype.request,o);return ae.extend(a,af.prototype,o,{allOwnKeys:!0}),ae.extend(a,o,null,{allOwnKeys:!0}),a.create=function(u){return aP(gc(n,u))},a}const An=aP(wC);An.Axios=af;An.CanceledError=$u;An.CancelToken=qJ;An.isCancel=rP;An.VERSION=sP;An.toFormData=rm;An.AxiosError=ht;An.Cancel=An.CanceledError;An.all=function(o){return Promise.all(o)};An.spread=KJ;An.isAxiosError=YJ;An.mergeConfig=gc;An.AxiosHeaders=wi;An.formToJSON=n=>oP(ae.isHTMLForm(n)?new FormData(n):n);An.HttpStatusCode=QJ;An.default=An;const mc=An;function ZJ(n){const o=Zr(),a={borderBottomWidth:2,borderRadius:"15px"};return Object.keys(n.blogs).map(c=>{const{_id:u,title:p,image:g,author:k,date:m}=n.blogs[c];return V.jsx(xi,{in:!0,children:V.jsxs(n.BlogButton,{component:ko,elevation:1,onClick:()=>{setTimeout(()=>{o(`/blogs/blog/${u}`),n.setShowLoading(!1)},300),n.setShowLoading(!0)},children:[V.jsx(ju,{component:"img",src:g,alt:p,sx:{position:"relative",borderRadius:"15px",width:"100%",height:"300px",objectFit:"cover"}}),V.jsx(ws,{flexItem:!0,sx:a}),V.jsx(Pn,{sx:{textAlign:"left",cursor:"pointer"},variant:(n.isMobile,"h4"),children:V.jsx("strong",{children:p})}),V.jsx(Pn,{sx:{textAlign:"left",cursor:"pointer"},variant:n.isMobile?"caption":"body2",children:V.jsxs("i",{children:["By ",k," • ",V.jsx("strong",{children:m})]})})]})},u)})}function JJ({blogs:n,refresh:o,setRefresh:a,setBlogs:c,setShowLoading:u}){const[p,g]=z.useState(!1),k=Fu(A=>A.breakpoints.down("md")),m=fe(ks)(({theme:A})=>({backgroundColor:A.palette.action.hover,color:A.palette.text.primary,padding:"8px 20px",borderRadius:"15px",width:k?"100%":"300px",fontSize:k?"16px":"24px",transition:"all 200ms ease",border:`2px solid ${A.palette.text.primary}`,"&:hover":{backgroundColor:A.palette.accent.secondary}})),C=fe(ks)(({theme:A})=>({borderRadius:"15px",padding:k?"20px":"20px 40px 20px 40px",width:"100%",transition:"all 200ms ease",flexDirection:"column",cursor:"pointer",color:A.palette.text.primary,gap:"20px","&:hover":{backgroundColor:A.palette.action.hover,transform:"scale(1.2)"}}));return z.useEffect(()=>{o&&((async()=>{u(!0),await mc.get(`${Eu}/api/blogs/allBlogs`).then(_=>{c(_.data),g(!1)}).catch(_=>{g(!0)}),u(!1)})(),a(!1))},[o]),V.jsx(eo,{direction:"column",spacing:k?6:8,sx:{transition:"all 200ms ease",padding:k?"0 5% 5% 5%":"0 28% 5% 28%",paddingTop:k?"100px":"15vh",transition:"all 200ms ease"},children:p?V.jsx(xi,{in:!0,children:V.jsxs(ko,{elevation:2,sx:{borderRadius:"15px",padding:k?"20px":"20px 40px 20px 40px",display:"flex",gap:"40px",flexDirection:"column",justifyContent:"center",alignItems:"center",transition:"all 200ms ease"},children:[V.jsx(Pn,{variant:k?"h6":"h3",children:V.jsx("strong",{children:"Could not connect to the database."})}),V.jsx(m,{onClick:()=>{a(!0)},sx:{},children:"Refresh"})]})}):V.jsx(ZJ,{blogs:n,isMobile:k,BlogButton:C,setShowLoading:u})})}const XJ=Gt(V.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),eX=Gt(V.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}),"AlternateEmail"),yC=Gt(V.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack"),AC=Gt(V.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),tX=Gt(V.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 12 7.7 9.11a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"}),"CancelRounded"),nX=Gt(V.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),am=Gt(V.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle"),oX=Gt(V.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),rX=Gt(V.jsx("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"}),"DarkMode"),lP=Gt(V.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever"),iX=Gt(V.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit"),YD=Gt(V.jsx("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub"),sX=Gt(V.jsx("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}),"LightMode"),aX=Gt(V.jsx("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link"),cP=Gt(V.jsx("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),"List"),dP=Gt(V.jsx("path",{d:"M11 7 9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"}),"Login"),QD=Gt(V.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout"),lX=Gt(V.jsx("path",{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"}),"Password"),cX=Gt(V.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile"),dX=Gt(V.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility"),uX=Gt(V.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");/*! js-cookie v3.0.5 | MIT */function jp(n){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var c in a)n[c]=a[c]}return n}var hX={read:function(n){return n[0]==='"'&&(n=n.slice(1,-1)),n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(n){return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Ow(n,o){function a(u,p,g){if(!(typeof document>"u")){g=jp({},o,g),typeof g.expires=="number"&&(g.expires=new Date(Date.now()+g.expires*864e5)),g.expires&&(g.expires=g.expires.toUTCString()),u=encodeURIComponent(u).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var k="";for(var m in g)g[m]&&(k+="; "+m,g[m]!==!0&&(k+="="+g[m].split(";")[0]));return document.cookie=u+"="+n.write(p,u)+k}}function c(u){if(!(typeof document>"u"||arguments.length&&!u)){for(var p=document.cookie?document.cookie.split("; "):[],g={},k=0;k<p.length;k++){var m=p[k].split("="),C=m.slice(1).join("=");try{var A=decodeURIComponent(m[0]);if(g[A]=n.read(C,A),u===A)break}catch{}}return u?g[u]:g}}return Object.create({set:a,get:c,remove:function(u,p){a(u,"",jp({},p,{expires:-1}))},withAttributes:function(u){return Ow(this.converter,jp({},this.attributes,u))},withConverter:function(u){return Ow(jp({},this.converter,u),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}var kn=Ow(hX,{path:"/"});function pX(n){const o=Zr(),a=()=>{setTimeout(()=>{n.dialogInputs.navigate==="logout"?(kn.remove("token"),kn.remove("userID"),n.setIsLoggedIn(null),n.setSnackbarInputs({open:!0,message:"You are logged out!"})):n.dialogInputs.navigate==="/blogs"?(n.setRefresh(!0),o("/blogs")):window.open(n.dialogInputs.navigate,"_blank"),n.setDialogInputs({open:!1,title:"",content:"",navigate:"",icon:""}),n.setShowLoading(!1)},200),n.setShowLoading(!0)};return V.jsxs(pC,{open:n.dialogInputs.open,onClose:()=>{n.setDialogInputs({open:!1})},components:ju,PaperProps:{component:ko,elevation:1,sx:{borderRadius:"15px",padding:"30px",justifyContent:"center",alignItems:"center",gap:"15px"}},children:[V.jsxs(Pn,{variant:"h4",children:[n.dialogInputs.icon," ",V.jsx("strong",{children:n.dialogInputs.title})]}),V.jsx(ws,{flexItem:!0}),V.jsx(Pn,{variant:(n.isMobile,"h6"),children:n.dialogInputs.content}),V.jsxs(fC,{children:[V.jsx(n.DialogButton,{onClick:()=>{n.setDialogInputs({open:!1})},startIcon:V.jsx(AC,{color:"icon"}),children:"Cancel"}),V.jsx(n.DialogButton,{startIcon:V.jsx(am,{color:"icon"}),onClick:a,children:"Yes"})]})]})}function fX(n){const[o,a]=z.useState(null),c=Zr(),u=fe(KY)(({theme:C})=>({fontSize:n.isMobile?"16px":"18px",width:"100%",padding:n.isMobile?"20px 30px":"10px 30px",gap:"10px",justifyContent:"flex-start"})),p=fe(hC)(({theme:C})=>({color:C.palette.text.primary,backgroundColor:C.palette.action.hover})),g=fe(ju)(({theme:C})=>({width:"100%",height:"100%",backgroundPosition:"center",backgroundSize:"cover"})),k={borderBottomWidth:4,borderRadius:"15px"},m={borderRightWidth:4,borderRadius:"15px"};return V.jsxs(z.Fragment,{children:[V.jsx(n.NavbarButton,{onClick:()=>{setTimeout(()=>{n.isLoggedIn===null?c("/blogs/authUser"):c("/blogs/createBlog"),n.setShowLoading(!1)},200),n.setShowLoading(!0)},startIcon:V.jsx(XJ,{color:"icon"}),children:"New"}),V.jsx(ws,{orientation:"vertical",flexItem:!0,sx:m}),V.jsx(k4,{onClick:C=>{a(C.currentTarget)},children:n.isLoggedIn!==null?V.jsx(p,{children:V.jsx(g,{component:"img",src:n.isLoggedIn.avatar})}):V.jsx(p,{})}),V.jsx(B4,{open:!!o,anchorEl:o,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},onClose:()=>{a(null)},PaperProps:{style:{borderRadius:"15px"}},children:V.jsxs(A4,{disableGutters:!0,children:[n.isLoggedIn!==null?V.jsxs(z.Fragment,{children:[V.jsxs(u,{disabled:!0,dense:!0,sx:{justifyContent:"center",gap:"10px",opacity:"1","&.Mui-disabled":{opacity:.8}},children:[V.jsx(p,{children:V.jsx(g,{component:"img",src:n.isLoggedIn.avatar})}),V.jsx("i",{children:n.isLoggedIn.name})]}),V.jsxs(u,{dense:!0,onClick:()=>{a(null),n.setDialogInputs({open:!0,title:"Logout",content:"Are you sure you want to logout?",navigate:"logout",icon:V.jsx(QD,{color:"icon"})})},children:[V.jsx(QD,{color:"icon"}),"Logout"]})]}):V.jsxs(u,{onClick:()=>{setTimeout(()=>{c("/blogs/authUser"),n.setShowLoading(!1)},200),a(null),n.setShowLoading(!0)},children:[V.jsx(dP,{color:"icon"})," Login"]}),V.jsx(ws,{flexItem:!0,variant:"middle",sx:k}),V.jsxs(u,{dense:!0,onClick:()=>{n.setDialogInputs({open:!0,title:"GitHub",content:"View source code on GitHub?",navigate:"https://github.com/harmeet9013/blogs",icon:V.jsx(YD,{color:"icon"})}),a(null)},children:[V.jsx(YD,{color:"icon"})," Source Code"]}),V.jsx(u,{dense:!0,onClick:()=>{n.setDarkMode(!n.darkMode)},children:n.darkMode?V.jsxs(z.Fragment,{children:[V.jsx(sX,{color:"icon"})," Light Mode"]}):V.jsxs(z.Fragment,{children:[V.jsx(rX,{color:"icon"})," Dark Mode"]})})]})})]})}function gX({darkMode:n,isLoggedIn:o,setDarkMode:a,setShowLoading:c,setRefresh:u,setIsLoggedIn:p,setSnackbarInputs:g}){const k=Zr(),m=Fu(D=>D.breakpoints.down("md")),[C,A]=z.useState(!0),[_,y]=z.useState({open:!1,title:"",content:"",navigate:"",icon:""}),E=fe(ks)(({theme:D})=>({backgroundColor:"transparent",color:D.palette.text.primary,fontSize:m?"18px":"24px",padding:"8px 20px",borderRadius:"15px",fontWeight:"600","&:hover":{backgroundColor:D.palette.accent.primary}})),S=fe(ks)(({theme:D})=>({color:D.palette.text.primary,borderRadius:"15px",backgroundColor:D.palette.action.hover,padding:m?"8px 15px":"8px 20px",fontSize:"16px","&:hover":{backgroundColor:D.palette.accent.secondary}}));return z.useEffect(()=>{const D=()=>{A(window.scrollY<100)};return window.addEventListener("scroll",D),()=>{window.removeEventListener("scroll",D)}},[]),V.jsxs(z.Fragment,{children:[V.jsx(pX,{dialogInputs:_,DialogButton:S,isMobile:m,setDialogInputs:y,setIsLoggedIn:p,setSnackbarInputs:g,setRefresh:u,setShowLoading:c}),V.jsxs(ko,{elevation:C?0:3,sx:{position:"fixed",display:"flex",flexDirection:"row",backgroundColor:C?"transparent":D=>D.palette.background.header,borderRadius:"0px",padding:"0.5% 0% 0.5% 0%",width:"100%",justifyContent:"space-around",alignItems:"center",overflow:"hidden",transition:"all 200ms ease",zIndex:"50"},children:[V.jsx(E,{onClick:()=>{setTimeout(()=>{k("/blogs")},200),c(!0),u(!0)},sx:{fontSize:m?"28px":"35px",letterSpacing:m?"4px":"8px","&:hover":{backgroundColor:"transparent"}},children:"BLOGS"}),V.jsx(eo,{direction:"row",spacing:m?1:3,children:V.jsx(fX,{isLoggedIn:o,darkMode:n,NavbarButton:E,setDarkMode:a,setShowLoading:c,setDialogInputs:y})})]})]})}function mX(n){const o=Zr(),[a,c]=z.useState(!1),u=async()=>{try{await navigator.clipboard.writeText(window.location.href),n.setIsCopied(!0)}catch{n.setIsCopied(!1),n.setSnackbarInputs({open:!0,message:"Sorry. Could not copy link."})}setTimeout(()=>{n.setIsCopied(!1)},8e3)};return V.jsxs(z.Fragment,{children:[V.jsx(Lu,{open:a,sx:{zIndex:"60"}}),V.jsxs(F4,{ariaLabel:"dialButton",sx:{position:"fixed",bottom:n.isMobile?40:"10%",right:n.isMobile?30:"23%",color:p=>p.palette.action.hover,zIndex:"60"},FabProps:{sx:{bgcolor:p=>p.palette.accent.secondary,color:p=>p.palette.text.primary,"&:hover":{bgcolor:p=>p.palette.accent.primary}}},icon:V.jsx($4,{icon:V.jsx(cP,{}),openIcon:V.jsx(tX,{})}),onOpen:()=>{c(!0)},onClose:()=>{c(!1)},open:a,children:[V.jsx(Wl,{onClick:()=>{setTimeout(()=>{o("/blogs"),n.setShowLoading(!1)},300),n.setShowLoading(!0),n.setRefresh(!0)},icon:V.jsx(yC,{color:"icon"}),tooltipOpen:!0,tooltipTitle:"Back"}),V.jsx(Wl,{onClick:u,icon:n.isCopied?V.jsx(am,{color:"iconSuccess"}):V.jsx(aX,{color:"icon"}),tooltipTitle:n.isCopied?"Copied!":"Link",tooltipOpen:!0}),V.jsx(Wl,{onClick:()=>{c(!1),!kn.get("token")||!kn.get("userID")&&n.setDialogInputs({open:!0,title:"Login",desc:"You need to login to perform this action.",button:!1})},icon:V.jsx(iX,{color:"icon"}),tooltipTitle:"Edit",tooltipOpen:!0}),V.jsx(Wl,{onClick:p=>{p.preventDefault(),c(!1),!kn.get("token")||!kn.get("userID")?n.setDialogInputs({open:!0,title:"Login",desc:"You need to login to perform this action.",button:!1}):n.setDialogInputs({open:!0,title:"Delete blog",desc:"Are you sure you want to remove this blog?",button:!0})},icon:V.jsx(lP,{color:"icon"}),tooltipOpen:!0,tooltipTitle:"Delete"})]})]})}function bX(n){const o=Zr();return V.jsxs(pC,{open:n.dialogInputs.open,PaperProps:{component:ko,elevation:1,sx:{borderRadius:"15px",padding:"30px",justifyContent:"center",alignItems:"center",gap:"15px"}},children:[V.jsx(Pn,{variant:"h4",children:V.jsx("strong",{children:n.dialogInputs.title})}),V.jsx(ws,{flexItem:!0}),V.jsx(Pn,{variant:"h6",sx:{textAlign:"center"},children:n.dialogInputs.desc}),V.jsxs(fC,{children:[V.jsx(n.DialogButton,{onClick:()=>{n.setDialogInputs({open:!1}),!n.dialogInputs.button&&n.setShowLoading(!0),setTimeout(()=>{!n.dialogInputs.button&&o(n.dialogInputs.navigate),n.setShowLoading(!1)},300)},startIcon:V.jsx(AC,{color:"icon"}),children:"Cancel"}),n.dialogInputs.button&&V.jsx(n.DialogButton,{onClick:()=>{n.setShowLoading(!0),n.setDialogInputs({open:!1}),n.deleteBlog()},startIcon:V.jsx(am,{color:"icon"}),children:"Yes"})]})]})}var Vf={exports:{}};Vf.exports;(function(n,o){(function(a){const c=a.en=a.en||{};c.dictionary=Object.assign(c.dictionary||{},{"%0 of %1":"%0 of %1","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor","Rich Text Editor. Editing area: %0":"Rich Text Editor. Editing area: %0",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(a,c){n.exports=c()}(self,()=>(()=>{var a={4959:(g,k,m)=>{const C=m(1103),A={};for(const y of Object.keys(C))A[C[y]]=y;const _={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};g.exports=_;for(const y of Object.keys(_)){if(!("channels"in _[y]))throw new Error("missing channels property: "+y);if(!("labels"in _[y]))throw new Error("missing channel labels property: "+y);if(_[y].labels.length!==_[y].channels)throw new Error("channel and label counts mismatch: "+y);const{channels:E,labels:S}=_[y];delete _[y].channels,delete _[y].labels,Object.defineProperty(_[y],"channels",{value:E}),Object.defineProperty(_[y],"labels",{value:S})}_.rgb.hsl=function(y){const E=y[0]/255,S=y[1]/255,D=y[2]/255,R=Math.min(E,S,D),I=Math.max(E,S,D),P=I-R;let B,L;I===R?B=0:E===I?B=(S-D)/P:S===I?B=2+(D-E)/P:D===I&&(B=4+(E-S)/P),B=Math.min(60*B,360),B<0&&(B+=360);const M=(R+I)/2;return L=I===R?0:M<=.5?P/(I+R):P/(2-I-R),[B,100*L,100*M]},_.rgb.hsv=function(y){let E,S,D,R,I;const P=y[0]/255,B=y[1]/255,L=y[2]/255,M=Math.max(P,B,L),W=M-Math.min(P,B,L),H=function(K){return(M-K)/6/W+.5};return W===0?(R=0,I=0):(I=W/M,E=H(P),S=H(B),D=H(L),P===M?R=D-S:B===M?R=.3333333333333333+E-D:L===M&&(R=.6666666666666666+S-E),R<0?R+=1:R>1&&(R-=1)),[360*R,100*I,100*M]},_.rgb.hwb=function(y){const E=y[0],S=y[1];let D=y[2];const R=_.rgb.hsl(y)[0],I=1/255*Math.min(E,Math.min(S,D));return D=1-.00392156862745098*Math.max(E,Math.max(S,D)),[R,100*I,100*D]},_.rgb.cmyk=function(y){const E=y[0]/255,S=y[1]/255,D=y[2]/255,R=Math.min(1-E,1-S,1-D);return[100*((1-E-R)/(1-R)||0),100*((1-S-R)/(1-R)||0),100*((1-D-R)/(1-R)||0),100*R]},_.rgb.keyword=function(y){const E=A[y];if(E)return E;let S,D=1/0;for(const P of Object.keys(C)){const B=C[P],L=(I=B,((R=y)[0]-I[0])**2+(R[1]-I[1])**2+(R[2]-I[2])**2);L<D&&(D=L,S=P)}var R,I;return S},_.keyword.rgb=function(y){return C[y]},_.rgb.xyz=function(y){let E=y[0]/255,S=y[1]/255,D=y[2]/255;return E=E>.04045?((E+.055)/1.055)**2.4:E/12.92,S=S>.04045?((S+.055)/1.055)**2.4:S/12.92,D=D>.04045?((D+.055)/1.055)**2.4:D/12.92,[100*(.4124*E+.3576*S+.1805*D),100*(.2126*E+.7152*S+.0722*D),100*(.0193*E+.1192*S+.9505*D)]},_.rgb.lab=function(y){const E=_.rgb.xyz(y);let S=E[0],D=E[1],R=E[2];return S/=95.047,D/=100,R/=108.883,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,D=D>.008856?D**.3333333333333333:7.787*D+.13793103448275862,R=R>.008856?R**.3333333333333333:7.787*R+.13793103448275862,[116*D-16,500*(S-D),200*(D-R)]},_.hsl.rgb=function(y){const E=y[0]/360,S=y[1]/100,D=y[2]/100;let R,I,P;if(S===0)return P=255*D,[P,P,P];R=D<.5?D*(1+S):D+S-D*S;const B=2*D-R,L=[0,0,0];for(let M=0;M<3;M++)I=E+.3333333333333333*-(M-1),I<0&&I++,I>1&&I--,P=6*I<1?B+6*(R-B)*I:2*I<1?R:3*I<2?B+(R-B)*(.6666666666666666-I)*6:B,L[M]=255*P;return L},_.hsl.hsv=function(y){const E=y[0];let S=y[1]/100,D=y[2]/100,R=S;const I=Math.max(D,.01);return D*=2,S*=D<=1?D:2-D,R*=I<=1?I:2-I,[E,100*(D===0?2*R/(I+R):2*S/(D+S)),100*((D+S)/2)]},_.hsv.rgb=function(y){const E=y[0]/60,S=y[1]/100;let D=y[2]/100;const R=Math.floor(E)%6,I=E-Math.floor(E),P=255*D*(1-S),B=255*D*(1-S*I),L=255*D*(1-S*(1-I));switch(D*=255,R){case 0:return[D,L,P];case 1:return[B,D,P];case 2:return[P,D,L];case 3:return[P,B,D];case 4:return[L,P,D];case 5:return[D,P,B]}},_.hsv.hsl=function(y){const E=y[0],S=y[1]/100,D=y[2]/100,R=Math.max(D,.01);let I,P;P=(2-S)*D;const B=(2-S)*R;return I=S*R,I/=B<=1?B:2-B,I=I||0,P/=2,[E,100*I,100*P]},_.hwb.rgb=function(y){const E=y[0]/360;let S=y[1]/100,D=y[2]/100;const R=S+D;let I;R>1&&(S/=R,D/=R);const P=Math.floor(6*E),B=1-D;I=6*E-P,1&P&&(I=1-I);const L=S+I*(B-S);let M,W,H;switch(P){default:case 6:case 0:M=B,W=L,H=S;break;case 1:M=L,W=B,H=S;break;case 2:M=S,W=B,H=L;break;case 3:M=S,W=L,H=B;break;case 4:M=L,W=S,H=B;break;case 5:M=B,W=S,H=L}return[255*M,255*W,255*H]},_.cmyk.rgb=function(y){const E=y[0]/100,S=y[1]/100,D=y[2]/100,R=y[3]/100;return[255*(1-Math.min(1,E*(1-R)+R)),255*(1-Math.min(1,S*(1-R)+R)),255*(1-Math.min(1,D*(1-R)+R))]},_.xyz.rgb=function(y){const E=y[0]/100,S=y[1]/100,D=y[2]/100;let R,I,P;return R=3.2406*E+-1.5372*S+-.4986*D,I=-.9689*E+1.8758*S+.0415*D,P=.0557*E+-.204*S+1.057*D,R=R>.0031308?1.055*R**.4166666666666667-.055:12.92*R,I=I>.0031308?1.055*I**.4166666666666667-.055:12.92*I,P=P>.0031308?1.055*P**.4166666666666667-.055:12.92*P,R=Math.min(Math.max(0,R),1),I=Math.min(Math.max(0,I),1),P=Math.min(Math.max(0,P),1),[255*R,255*I,255*P]},_.xyz.lab=function(y){let E=y[0],S=y[1],D=y[2];return E/=95.047,S/=100,D/=108.883,E=E>.008856?E**.3333333333333333:7.787*E+.13793103448275862,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,D=D>.008856?D**.3333333333333333:7.787*D+.13793103448275862,[116*S-16,500*(E-S),200*(S-D)]},_.lab.xyz=function(y){let E,S,D;S=(y[0]+16)/116,E=y[1]/500+S,D=S-y[2]/200;const R=S**3,I=E**3,P=D**3;return S=R>.008856?R:(S-.13793103448275862)/7.787,E=I>.008856?I:(E-.13793103448275862)/7.787,D=P>.008856?P:(D-.13793103448275862)/7.787,E*=95.047,S*=100,D*=108.883,[E,S,D]},_.lab.lch=function(y){const E=y[0],S=y[1],D=y[2];let R;return R=360*Math.atan2(D,S)/2/Math.PI,R<0&&(R+=360),[E,Math.sqrt(S*S+D*D),R]},_.lch.lab=function(y){const E=y[0],S=y[1],D=y[2]/360*2*Math.PI;return[E,S*Math.cos(D),S*Math.sin(D)]},_.rgb.ansi16=function(y,E=null){const[S,D,R]=y;let I=E===null?_.rgb.hsv(y)[2]:E;if(I=Math.round(I/50),I===0)return 30;let P=30+(Math.round(R/255)<<2|Math.round(D/255)<<1|Math.round(S/255));return I===2&&(P+=60),P},_.hsv.ansi16=function(y){return _.rgb.ansi16(_.hsv.rgb(y),y[2])},_.rgb.ansi256=function(y){const E=y[0],S=y[1],D=y[2];return E===S&&S===D?E<8?16:E>248?231:Math.round((E-8)/247*24)+232:16+36*Math.round(E/255*5)+6*Math.round(S/255*5)+Math.round(D/255*5)},_.ansi16.rgb=function(y){let E=y%10;if(E===0||E===7)return y>50&&(E+=3.5),E=E/10.5*255,[E,E,E];const S=.5*(1+~~(y>50));return[(1&E)*S*255,(E>>1&1)*S*255,(E>>2&1)*S*255]},_.ansi256.rgb=function(y){if(y>=232){const S=10*(y-232)+8;return[S,S,S]}let E;return y-=16,[Math.floor(y/36)/5*255,Math.floor((E=y%36)/6)/5*255,E%6/5*255]},_.rgb.hex=function(y){const E=(((255&Math.round(y[0]))<<16)+((255&Math.round(y[1]))<<8)+(255&Math.round(y[2]))).toString(16).toUpperCase();return"000000".substring(E.length)+E},_.hex.rgb=function(y){const E=y.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!E)return[0,0,0];let S=E[0];E[0].length===3&&(S=S.split("").map(R=>R+R).join(""));const D=parseInt(S,16);return[D>>16&255,D>>8&255,255&D]},_.rgb.hcg=function(y){const E=y[0]/255,S=y[1]/255,D=y[2]/255,R=Math.max(Math.max(E,S),D),I=Math.min(Math.min(E,S),D),P=R-I;let B,L;return B=P<1?I/(1-P):0,L=P<=0?0:R===E?(S-D)/P%6:R===S?2+(D-E)/P:4+(E-S)/P,L/=6,L%=1,[360*L,100*P,100*B]},_.hsl.hcg=function(y){const E=y[1]/100,S=y[2]/100,D=S<.5?2*E*S:2*E*(1-S);let R=0;return D<1&&(R=(S-.5*D)/(1-D)),[y[0],100*D,100*R]},_.hsv.hcg=function(y){const E=y[1]/100,S=y[2]/100,D=E*S;let R=0;return D<1&&(R=(S-D)/(1-D)),[y[0],100*D,100*R]},_.hcg.rgb=function(y){const E=y[0]/360,S=y[1]/100,D=y[2]/100;if(S===0)return[255*D,255*D,255*D];const R=[0,0,0],I=E%1*6,P=I%1,B=1-P;let L=0;switch(Math.floor(I)){case 0:R[0]=1,R[1]=P,R[2]=0;break;case 1:R[0]=B,R[1]=1,R[2]=0;break;case 2:R[0]=0,R[1]=1,R[2]=P;break;case 3:R[0]=0,R[1]=B,R[2]=1;break;case 4:R[0]=P,R[1]=0,R[2]=1;break;default:R[0]=1,R[1]=0,R[2]=B}return L=(1-S)*D,[255*(S*R[0]+L),255*(S*R[1]+L),255*(S*R[2]+L)]},_.hcg.hsv=function(y){const E=y[1]/100,S=E+y[2]/100*(1-E);let D=0;return S>0&&(D=E/S),[y[0],100*D,100*S]},_.hcg.hsl=function(y){const E=y[1]/100,S=y[2]/100*(1-E)+.5*E;let D=0;return S>0&&S<.5?D=E/(2*S):S>=.5&&S<1&&(D=E/(2*(1-S))),[y[0],100*D,100*S]},_.hcg.hwb=function(y){const E=y[1]/100,S=E+y[2]/100*(1-E);return[y[0],100*(S-E),100*(1-S)]},_.hwb.hcg=function(y){const E=y[1]/100,S=1-y[2]/100,D=S-E;let R=0;return D<1&&(R=(S-D)/(1-D)),[y[0],100*D,100*R]},_.apple.rgb=function(y){return[y[0]/65535*255,y[1]/65535*255,y[2]/65535*255]},_.rgb.apple=function(y){return[y[0]/255*65535,y[1]/255*65535,y[2]/255*65535]},_.gray.rgb=function(y){return[y[0]/100*255,y[0]/100*255,y[0]/100*255]},_.gray.hsl=function(y){return[0,0,y[0]]},_.gray.hsv=_.gray.hsl,_.gray.hwb=function(y){return[0,100,y[0]]},_.gray.cmyk=function(y){return[0,0,0,y[0]]},_.gray.lab=function(y){return[y[0],0,0]},_.gray.hex=function(y){const E=255&Math.round(y[0]/100*255),S=((E<<16)+(E<<8)+E).toString(16).toUpperCase();return"000000".substring(S.length)+S},_.rgb.gray=function(y){return[(y[0]+y[1]+y[2])/3/255*100]}},841:(g,k,m)=>{const C=m(4959),A=m(9325),_={};Object.keys(C).forEach(y=>{_[y]={},Object.defineProperty(_[y],"channels",{value:C[y].channels}),Object.defineProperty(_[y],"labels",{value:C[y].labels});const E=A(y);Object.keys(E).forEach(S=>{const D=E[S];_[y][S]=function(R){const I=function(...P){const B=P[0];if(B==null)return B;B.length>1&&(P=B);const L=R(P);if(typeof L=="object")for(let M=L.length,W=0;W<M;W++)L[W]=Math.round(L[W]);return L};return"conversion"in R&&(I.conversion=R.conversion),I}(D),_[y][S].raw=function(R){const I=function(...P){const B=P[0];return B==null?B:(B.length>1&&(P=B),R(P))};return"conversion"in R&&(I.conversion=R.conversion),I}(D)})}),g.exports=_},9325:(g,k,m)=>{const C=m(4959);function A(E){const S=function(){const R={},I=Object.keys(C);for(let P=I.length,B=0;B<P;B++)R[I[B]]={distance:-1,parent:null};return R}(),D=[E];for(S[E].distance=0;D.length;){const R=D.pop(),I=Object.keys(C[R]);for(let P=I.length,B=0;B<P;B++){const L=I[B],M=S[L];M.distance===-1&&(M.distance=S[R].distance+1,M.parent=R,D.unshift(L))}}return S}function _(E,S){return function(D){return S(E(D))}}function y(E,S){const D=[S[E].parent,E];let R=C[S[E].parent][E],I=S[E].parent;for(;S[I].parent;)D.unshift(S[I].parent),R=_(C[S[I].parent][I],R),I=S[I].parent;return R.conversion=D,R}g.exports=function(E){const S=A(E),D={},R=Object.keys(S);for(let I=R.length,P=0;P<I;P++){const B=R[P];S[B].parent!==null&&(D[B]=y(B,S))}return D}},1103:g=>{g.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8603:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},3062:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},903:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CChCA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},4717:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},9315:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const E=y},8733:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},3508:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},2640:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},3535:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},1568:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},6270:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},5083:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},4036:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},3773:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},3689:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},1905:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},9773:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},2347:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},7754:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},111:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
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

`],sourceRoot:""}]);const E=y},4721:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},5730:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const E=y},4564:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},6082:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},2417:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},1199:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAEA,uBACC,eA0ED,CAxEC,0BACC,iBAKD,CAHC,qCACC,cACD,CAIA,+CACC,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqDD,CAxCC,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,0FAAgG,CAJhG,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAIF,wEACC,qBACD,CAKF,6CACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAMA,wDACC,cAKD,CAHC,qEACC,mCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},4652:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},7442:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},9292:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},7368:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},4070:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},9247:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},1613:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
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

`],sourceRoot:""}]);const E=y},6306:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},2128:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,":root{--ck-color-table-caption-background:#f7f7f7;--ck-color-table-caption-text:#333;--ck-color-table-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-table-caption-background);caption-side:top;color:var(--ck-color-table-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-table-caption-highlighted-background)}to{background-color:var(--ck-color-table-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAMC,yDAA0D,CAJ1D,gBAAiB,CAGjB,wCAAyC,CAJzC,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},5087:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},4101:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,":root{--ck-color-table-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:-999999px;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:-999999px;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-table-column-resizer-hover);opacity:.25}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,iEAAkE,CAClE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAOC,gBAAiB,CAGjB,iBAAkB,CATlB,iBAAkB,CAOlB,oDAAqD,CAFrD,aAAc,CAKd,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,2DAA4D,CAC5D,WACD,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},3881:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},6237:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},7341:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},6945:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},4906:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},5332:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},6781:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},3398:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAMD,CAJC,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},5485:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},3949:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},7686:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},7339:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},9688:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},8847:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},6574:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},4879:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},3662:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},2577:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},1046:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},8793:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},4650:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},7676:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},5868:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},6764:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},9695:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},5542:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},3332:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},4793:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-modal) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},3488:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},8506:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},4921:(g,k,m)=>{m.d(k,{Z:()=>E});var C=m(1799),A=m.n(C),_=m(2609),y=m.n(_)()(A());y.push([g.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=y},2609:g=>{g.exports=function(k){var m=[];return m.toString=function(){return this.map(function(C){var A=k(C);return C[2]?"@media ".concat(C[2]," {").concat(A,"}"):A}).join("")},m.i=function(C,A,_){typeof C=="string"&&(C=[[null,C,""]]);var y={};if(_)for(var E=0;E<this.length;E++){var S=this[E][0];S!=null&&(y[S]=!0)}for(var D=0;D<C.length;D++){var R=[].concat(C[D]);_&&y[R[0]]||(A&&(R[2]?R[2]="".concat(A," and ").concat(R[2]):R[2]=A),m.push(R))}},m}},1799:g=>{function k(C,A){return function(_){if(Array.isArray(_))return _}(C)||function(_,y){var E=_&&(typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"]);if(E!=null){var S,D,R=[],I=!0,P=!1;try{for(E=E.call(_);!(I=(S=E.next()).done)&&(R.push(S.value),!y||R.length!==y);I=!0);}catch(B){P=!0,D=B}finally{try{I||E.return==null||E.return()}finally{if(P)throw D}}return R}}(C,A)||function(_,y){if(_){if(typeof _=="string")return m(_,y);var E=Object.prototype.toString.call(_).slice(8,-1);if(E==="Object"&&_.constructor&&(E=_.constructor.name),E==="Map"||E==="Set")return Array.from(_);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return m(_,y)}}(C,A)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function m(C,A){(A==null||A>C.length)&&(A=C.length);for(var _=0,y=new Array(A);_<A;_++)y[_]=C[_];return y}g.exports=function(C){var A=k(C,4),_=A[1],y=A[3];if(!y)return _;if(typeof btoa=="function"){var E=btoa(unescape(encodeURIComponent(JSON.stringify(y)))),S="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(E),D="/*# ".concat(S," */"),R=y.sources.map(function(I){return"/*# sourceURL=".concat(y.sourceRoot||"").concat(I," */")});return[_].concat(R).concat([D]).join(`
`)}return[_].join(`
`)}},6062:(g,k,m)=>{var C,A=function(){return C===void 0&&(C=!!(window&&document&&document.all&&!window.atob)),C},_=function(){var H={};return function(K){if(H[K]===void 0){var Z=document.querySelector(K);if(window.HTMLIFrameElement&&Z instanceof window.HTMLIFrameElement)try{Z=Z.contentDocument.head}catch{Z=null}H[K]=Z}return H[K]}}(),y=[];function E(H){for(var K=-1,Z=0;Z<y.length;Z++)if(y[Z].identifier===H){K=Z;break}return K}function S(H,K){for(var Z={},Y=[],ee=0;ee<H.length;ee++){var ce=H[ee],ie=K.base?ce[0]+K.base:ce[0],te=Z[ie]||0,oe="".concat(ie," ").concat(te);Z[ie]=te+1;var de=E(oe),re={css:ce[1],media:ce[2],sourceMap:ce[3]};de!==-1?(y[de].references++,y[de].updater(re)):y.push({identifier:oe,updater:W(re,K),references:1}),Y.push(oe)}return Y}function D(H){var K=document.createElement("style"),Z=H.attributes||{};if(Z.nonce===void 0){var Y=m.nc;Y&&(Z.nonce=Y)}if(Object.keys(Z).forEach(function(ce){K.setAttribute(ce,Z[ce])}),typeof H.insert=="function")H.insert(K);else{var ee=_(H.insert||"head");if(!ee)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ee.appendChild(K)}return K}var R,I=(R=[],function(H,K){return R[H]=K,R.filter(Boolean).join(`
`)});function P(H,K,Z,Y){var ee=Z?"":Y.media?"@media ".concat(Y.media," {").concat(Y.css,"}"):Y.css;if(H.styleSheet)H.styleSheet.cssText=I(K,ee);else{var ce=document.createTextNode(ee),ie=H.childNodes;ie[K]&&H.removeChild(ie[K]),ie.length?H.insertBefore(ce,ie[K]):H.appendChild(ce)}}function B(H,K,Z){var Y=Z.css,ee=Z.media,ce=Z.sourceMap;if(ee?H.setAttribute("media",ee):H.removeAttribute("media"),ce&&typeof btoa<"u"&&(Y+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ce))))," */")),H.styleSheet)H.styleSheet.cssText=Y;else{for(;H.firstChild;)H.removeChild(H.firstChild);H.appendChild(document.createTextNode(Y))}}var L=null,M=0;function W(H,K){var Z,Y,ee;if(K.singleton){var ce=M++;Z=L||(L=D(K)),Y=P.bind(null,Z,ce,!1),ee=P.bind(null,Z,ce,!0)}else Z=D(K),Y=B.bind(null,Z,K),ee=function(){(function(ie){if(ie.parentNode===null)return!1;ie.parentNode.removeChild(ie)})(Z)};return Y(H),function(ie){if(ie){if(ie.css===H.css&&ie.media===H.media&&ie.sourceMap===H.sourceMap)return;Y(H=ie)}else ee()}}g.exports=function(H,K){(K=K||{}).singleton||typeof K.singleton=="boolean"||(K.singleton=A());var Z=S(H=H||[],K);return function(Y){if(Y=Y||[],Object.prototype.toString.call(Y)==="[object Array]"){for(var ee=0;ee<Z.length;ee++){var ce=E(Z[ee]);y[ce].references--}for(var ie=S(Y,K),te=0;te<Z.length;te++){var oe=E(Z[te]);y[oe].references===0&&(y[oe].updater(),y.splice(oe,1))}Z=ie}}}}},c={};function u(g){var k=c[g];if(k!==void 0)return k.exports;var m=c[g]={id:g,exports:{}};return a[g](m,m.exports,u),m.exports}u.n=g=>{var k=g&&g.__esModule?()=>g.default:()=>g;return u.d(k,{a:k}),k},u.d=(g,k)=>{for(var m in k)u.o(k,m)&&!u.o(g,m)&&Object.defineProperty(g,m,{enumerable:!0,get:k[m]})},u.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),u.o=(g,k)=>Object.prototype.hasOwnProperty.call(g,k),u.nc=void 0;var p={};return(()=>{u.d(p,{default:()=>Mk});const g=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var k;const m={isMac:C(g),isWindows:(k=g,k.indexOf("windows")>-1),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(g),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(g),isiOS:function(i){return!!i.match(/iphone|ipad/i)||C(i)&&navigator.maxTouchPoints>0}(g),isAndroid:function(i){return i.indexOf("android")>-1}(g),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(g),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}};function C(i){return i.indexOf("macintosh")>-1}function A(i,e,t,r){t=t||function(f,b){return f===b};const s=Array.isArray(i)?i:Array.prototype.slice.call(i),l=Array.isArray(e)?e:Array.prototype.slice.call(e),d=function(f,b,w){const v=_(f,b,w);if(v===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const x=y(f,v),T=y(b,v),N=_(x,T,w),O=f.length-N,$=b.length-N;return{firstIndex:v,lastIndexOld:O,lastIndexNew:$}}(s,l,t);return r?function(f,b){const{firstIndex:w,lastIndexOld:v,lastIndexNew:x}=f;if(w===-1)return Array(b).fill("equal");let T=[];return w>0&&(T=T.concat(Array(w).fill("equal"))),x-w>0&&(T=T.concat(Array(x-w).fill("insert"))),v-w>0&&(T=T.concat(Array(v-w).fill("delete"))),x<b&&(T=T.concat(Array(b-x).fill("equal"))),T}(d,l.length):function(f,b){const w=[],{firstIndex:v,lastIndexOld:x,lastIndexNew:T}=b;return T-v>0&&w.push({index:v,type:"insert",values:f.slice(v,T)}),x-v>0&&w.push({index:v+(T-v),type:"delete",howMany:x-v}),w}(l,d)}function _(i,e,t){for(let r=0;r<Math.max(i.length,e.length);r++)if(i[r]===void 0||e[r]===void 0||!t(i[r],e[r]))return r;return-1}function y(i,e){return i.slice(e).reverse()}function E(i,e,t){t=t||function(O,$){return O===$};const r=i.length,s=e.length;if(r>200||s>200||r+s>300)return E.fastDiff(i,e,t,!0);let l,d;if(s<r){const O=i;i=e,e=O,l="delete",d="insert"}else l="insert",d="delete";const h=i.length,f=e.length,b=f-h,w={},v={};function x(O){const $=(v[O-1]!==void 0?v[O-1]:-1)+1,G=v[O+1]!==void 0?v[O+1]:-1,Q=$>G?-1:1;w[O+Q]&&(w[O]=w[O+Q].slice(0)),w[O]||(w[O]=[]),w[O].push($>G?l:d);let ne=Math.max($,G),ke=ne-O;for(;ke<h&&ne<f&&t(i[ke],e[ne]);)ke++,ne++,w[O].push("equal");return ne}let T,N=0;do{for(T=-N;T<b;T++)v[T]=x(T);for(T=b+N;T>b;T--)v[T]=x(T);v[b]=x(b),N++}while(v[b]!==f);return w[b].slice(1)}E.fastDiff=A;const S=function(){return function i(){i.called=!0}};class D{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=S(),this.off=S()}}const R=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function I(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0;return"e"+R[i>>0&255]+R[i>>8&255]+R[i>>16&255]+R[i>>24&255]+R[e>>0&255]+R[e>>8&255]+R[e>>16&255]+R[e>>24&255]+R[t>>0&255]+R[t>>8&255]+R[t>>16&255]+R[t>>24&255]+R[r>>0&255]+R[r>>8&255]+R[r>>16&255]+R[r>>24&255]}const P={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function B(i,e){const t=P.get(e.priority);for(let r=0;r<i.length;r++)if(P.get(i[r].priority)<t)return void i.splice(r,0,e);i.push(e)}const L="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class M extends Error{constructor(e,t,r){super(function(s,l){const d=new WeakSet,h=(w,v)=>{if(typeof v=="object"&&v!==null){if(d.has(v))return`[object ${v.constructor.name}]`;d.add(v)}return v},f=l?` ${JSON.stringify(l,h)}`:"",b=K(s);return s+f+b}(e,r)),this.name="CKEditorError",this.context=t,this.data=r}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const r=new M(e.message,t);throw r.stack=e.stack,r}}function W(i,e){console.warn(...Z(i,e))}function H(i,e){console.error(...Z(i,e))}function K(i){return`
Read more: ${L}#error-${i}`}function Z(i,e){const t=K(i);return e?[i,e,t]:[i,t]}const Y="38.1.1",ee=new Date(2023,6,11),ce=typeof window=="object"?window:u.g;if(ce.CKEDITOR_VERSION)throw new M("ckeditor-duplicated-modules",null);ce.CKEDITOR_VERSION=Y;const ie=Symbol("listeningTo"),te=Symbol("emitterId"),oe=Symbol("delegations"),de=re(Object);function re(i){return i?class extends i{on(e,t,r){this.listenTo(this,e,t,r)}once(e,t,r){let s=!1;this.listenTo(this,e,(l,...d)=>{s||(s=!0,l.off(),t.call(this,l,...d))},r)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,r,s={}){let l,d;this[ie]||(this[ie]={});const h=this[ie];he(e)||se(e);const f=he(e);(l=h[f])||(l=h[f]={emitter:e,callbacks:{}}),(d=l.callbacks[t])||(d=l.callbacks[t]=[]),d.push(r),function(b,w,v,x,T){w._addEventListener?w._addEventListener(v,x,T):b._addEventListener.call(w,v,x,T)}(this,e,t,r,s)}stopListening(e,t,r){const s=this[ie];let l=e&&he(e);const d=s&&l?s[l]:void 0,h=d&&t?d.callbacks[t]:void 0;if(!(!s||e&&!d||t&&!h))if(r)Ne(this,e,t,r),h.indexOf(r)!==-1&&(h.length===1?delete d.callbacks[t]:Ne(this,e,t,r));else if(h){for(;r=h.pop();)Ne(this,e,t,r);delete d.callbacks[t]}else if(d){for(t in d.callbacks)this.stopListening(e,t);delete s[l]}else{for(l in s)this.stopListening(s[l].emitter);delete this[ie]}}fire(e,...t){try{const r=e instanceof D?e:new D(this,e),s=r.name;let l=Ie(this,s);if(r.path.push(this),l){const h=[r,...t];l=Array.from(l);for(let f=0;f<l.length&&(l[f].callback.apply(this,h),r.off.called&&(delete r.off.called,this._removeEventListener(s,l[f].callback)),!r.stop.called);f++);}const d=this[oe];if(d){const h=d.get(s),f=d.get("*");h&&He(h,r,t),f&&He(f,r,t)}return r.return}catch(r){M.rethrowUnexpectedError(r,this)}}delegate(...e){return{to:(t,r)=>{this[oe]||(this[oe]=new Map),e.forEach(s=>{const l=this[oe].get(s);l?l.set(t,r):this[oe].set(s,new Map([[t,r]]))})}}}stopDelegating(e,t){if(this[oe])if(e)if(t){const r=this[oe].get(e);r&&r.delete(t)}else this[oe].delete(e);else this[oe].clear()}_addEventListener(e,t,r){(function(d,h){const f=me(d);if(f[h])return;let b=h,w=null;const v=[];for(;b!==""&&!f[b];)f[b]={callbacks:[],childEvents:[]},v.push(f[b]),w&&f[b].childEvents.push(w),w=b,b=b.substr(0,b.lastIndexOf(":"));if(b!==""){for(const x of v)x.callbacks=f[b].callbacks.slice();f[b].childEvents.push(w)}})(this,e);const s=Te(this,e),l={callback:t,priority:P.get(r.priority)};for(const d of s)B(d,l)}_removeEventListener(e,t){const r=Te(this,e);for(const s of r)for(let l=0;l<s.length;l++)s[l].callback==t&&(s.splice(l,1),l--)}}:de}function se(i,e){i[te]||(i[te]=e||I())}function he(i){return i[te]}function me(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function Te(i,e){const t=me(i)[e];if(!t)return[];let r=[t.callbacks];for(let s=0;s<t.childEvents.length;s++){const l=Te(i,t.childEvents[s]);r=r.concat(l)}return r}function Ie(i,e){let t;return i._events&&(t=i._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?Ie(i,e.substr(0,e.lastIndexOf(":"))):null}function He(i,e,t){for(let[r,s]of i){s?typeof s=="function"&&(s=s(e.name)):s=e.name;const l=new D(e.source,s);l.path=[...e.path],r.fire(l,...t)}}function Ne(i,e,t,r){e._removeEventListener?e._removeEventListener(t,r):i._removeEventListener.call(e,t,r)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{re[i]=de.prototype[i]});const we=function(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")},Pe=Symbol("observableProperties"),Ze=Symbol("boundObservables"),Ce=Symbol("boundProperties"),Me=Symbol("decoratedMethods"),tt=Symbol("decoratedOriginal"),Be=ge(re());function ge(i){return i?class extends i{set(e,t){if(we(e))return void Object.keys(e).forEach(s=>{this.set(s,e[s])},this);Ye(this);const r=this[Pe];if(e in this&&!r.has(e))throw new M("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>r.get(e),set(s){const l=r.get(e);let d=this.fire(`set:${e}`,e,s,l);d===void 0&&(d=s),l===d&&r.has(e)||(r.set(e,d),this.fire(`change:${e}`,e,d,l))}}),this[e]=t}bind(...e){if(!e.length||!Vt(e))throw new M("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new M("observable-bind-duplicate-properties",this);Ye(this);const t=this[Ce];e.forEach(s=>{if(t.has(s))throw new M("observable-bind-rebind",this)});const r=new Map;return e.forEach(s=>{const l={property:s,to:[]};t.set(s,l),r.set(s,l)}),{to:it,toMany:Bt,_observable:this,_bindProperties:e,_to:[],_bindings:r}}unbind(...e){if(!this[Pe])return;const t=this[Ce],r=this[Ze];if(e.length){if(!Vt(e))throw new M("observable-unbind-wrong-properties",this);e.forEach(s=>{const l=t.get(s);l&&(l.to.forEach(([d,h])=>{const f=r.get(d),b=f[h];b.delete(l),b.size||delete f[h],Object.keys(f).length||(r.delete(d),this.stopListening(d,"change"))}),t.delete(s))})}else r.forEach((s,l)=>{this.stopListening(l,"change")}),r.clear(),t.clear()}decorate(e){Ye(this);const t=this[e];if(!t)throw new M("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(r,s)=>{r.return=t.apply(this,s)}),this[e]=function(...r){return this.fire(e,r)},this[e][tt]=t,this[Me]||(this[Me]=[]),this[Me].push(e)}stopListening(e,t,r){if(!e&&this[Me]){for(const s of this[Me])this[s]=this[s][tt];delete this[Me]}super.stopListening(e,t,r)}}:Be}function Ye(i){i[Pe]||(Object.defineProperty(i,Pe,{value:new Map}),Object.defineProperty(i,Ze,{value:new Map}),Object.defineProperty(i,Ce,{value:new Map}))}function it(...i){const e=function(...l){if(!l.length)throw new M("observable-bind-to-parse-error",null);const d={to:[]};let h;return typeof l[l.length-1]=="function"&&(d.callback=l.pop()),l.forEach(f=>{if(typeof f=="string")h.properties.push(f);else{if(typeof f!="object")throw new M("observable-bind-to-parse-error",null);h={observable:f,properties:[]},d.to.push(h)}}),d}(...i),t=Array.from(this._bindings.keys()),r=t.length;if(!e.callback&&e.to.length>1)throw new M("observable-bind-to-no-callback",this);if(r>1&&e.callback)throw new M("observable-bind-to-extra-callback",this);var s;e.to.forEach(l=>{if(l.properties.length&&l.properties.length!==r)throw new M("observable-bind-to-properties-length",this);l.properties.length||(l.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),s=this._observable,this._to.forEach(l=>{const d=s[Ze];let h;d.get(l.observable)||s.listenTo(l.observable,"change",(f,b)=>{h=d.get(l.observable)[b],h&&h.forEach(w=>{We(s,w.property)})})}),function(l){let d;l._bindings.forEach((h,f)=>{l._to.forEach(b=>{d=b.properties[h.callback?0:l._bindProperties.indexOf(f)],h.to.push([b.observable,d]),function(w,v,x,T){const N=w[Ze],O=N.get(x),$=O||{};$[T]||($[T]=new Set),$[T].add(v),O||N.set(x,$)}(l._observable,h,b.observable,d)})})}(this),this._bindProperties.forEach(l=>{We(this._observable,l)})}function Bt(i,e,t){if(this._bindings.size>1)throw new M("observable-bind-to-many-not-one-binding",this);this.to(...function(r,s){const l=r.map(d=>[d,s]);return Array.prototype.concat.apply([],l)}(i,e),t)}function Vt(i){return i.every(e=>typeof e=="string")}function We(i,e){const t=i[Ce].get(e);let r;t.callback?r=t.callback.apply(i,t.to.map(s=>s[0][s[1]])):(r=t.to[0],r=r[0][r[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=r:i.set(e,r)}function Pt(i){let e=0;for(const t of i)e++;return e}function st(i,e){const t=Math.min(i.length,e.length);for(let r=0;r<t;r++)if(i[r]!=e[r])return r;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}function je(i){return!(!i||!i[Symbol.iterator])}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{ge[i]=Be.prototype[i]});const at=typeof ns=="object"&&ns&&ns.Object===Object&&ns;var Zt=typeof self=="object"&&self&&self.Object===Object&&self;const Le=at||Zt||Function("return this")(),ft=Le.Symbol;var vt=Object.prototype,un=vt.hasOwnProperty,Bn=vt.toString,Ve=ft?ft.toStringTag:void 0;const Ae=function(i){var e=un.call(i,Ve),t=i[Ve];try{i[Ve]=void 0;var r=!0}catch{}var s=Bn.call(i);return r&&(e?i[Ve]=t:delete i[Ve]),s};var Ee=Object.prototype.toString;const et=function(i){return Ee.call(i)};var kt=ft?ft.toStringTag:void 0;const rn=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":kt&&kt in Object(i)?Ae(i):et(i)},zt=Array.isArray,_n=function(i){return i!=null&&typeof i=="object"},xs=function(i){return typeof i=="string"||!zt(i)&&_n(i)&&rn(i)=="[object String]"};function Es(i,e,t={},r=[]){const s=t&&t.xmlns,l=s?i.createElementNS(s,e):i.createElement(e);for(const d in t)l.setAttribute(d,t[d]);!xs(r)&&je(r)||(r=[r]);for(let d of r)xs(d)&&(d=i.createTextNode(d)),l.appendChild(d);return l}const zo=function(i,e){return function(t){return i(e(t))}},tr=zo(Object.getPrototypeOf,Object);var Xr=Function.prototype,Na=Object.prototype,Ss=Xr.toString,Ba=Na.hasOwnProperty,Ra=Ss.call(Object);const xn=function(i){if(!_n(i)||rn(i)!="[object Object]")return!1;var e=tr(i);if(e===null)return!0;var t=Ba.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Ss.call(t)==Ra},Oa=function(){this.__data__=[],this.size=0},ei=function(i,e){return i===e||i!=i&&e!=e},wo=function(i,e){for(var t=i.length;t--;)if(ei(i[t][0],e))return t;return-1};var za=Array.prototype.splice;const Ds=function(i){var e=this.__data__,t=wo(e,i);return!(t<0)&&(t==e.length-1?e.pop():za.call(e,t,1),--this.size,!0)},_c=function(i){var e=this.__data__,t=wo(e,i);return t<0?void 0:e[t][1]},Lo=function(i){return wo(this.__data__,i)>-1},Ts=function(i,e){var t=this.__data__,r=wo(t,i);return r<0?(++this.size,t.push([i,e])):t[r][1]=e,this};function hn(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var r=i[e];this.set(r[0],r[1])}}hn.prototype.clear=Oa,hn.prototype.delete=Ds,hn.prototype.get=_c,hn.prototype.has=Lo,hn.prototype.set=Ts;const jo=hn,xc=function(){this.__data__=new jo,this.size=0},ro=function(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t},Is=function(i){return this.__data__.get(i)},La=function(i){return this.__data__.has(i)},Rn=function(i){if(!we(i))return!1;var e=rn(i);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Di=Le["__core-js_shared__"];var Ms=function(){var i=/[^.]+$/.exec(Di&&Di.keys&&Di.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const ja=function(i){return!!Ms&&Ms in i};var Fa=Function.prototype.toString;const nr=function(i){if(i!=null){try{return Fa.call(i)}catch{}try{return i+""}catch{}}return""};var Va=/^\[object .+?Constructor\]$/,Fe=Function.prototype,On=Object.prototype,Uu=Fe.toString,Hu=On.hasOwnProperty,lm=RegExp("^"+Uu.call(Hu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const cm=function(i){return!(!we(i)||ja(i))&&(Rn(i)?lm:Va).test(nr(i))},dm=function(i,e){return i==null?void 0:i[e]},or=function(i,e){var t=dm(i,e);return cm(t)?t:void 0},Ps=or(Le,"Map"),Ti=or(Object,"create"),Wu=function(){this.__data__=Ti?Ti(null):{},this.size=0},Gu=function(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e};var qu=Object.prototype.hasOwnProperty;const um=function(i){var e=this.__data__;if(Ti){var t=e[i];return t==="__lodash_hash_undefined__"?void 0:t}return qu.call(e,i)?e[i]:void 0};var hm=Object.prototype.hasOwnProperty;const Ku=function(i){var e=this.__data__;return Ti?e[i]!==void 0:hm.call(e,i)},Nt=function(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=Ti&&e===void 0?"__lodash_hash_undefined__":e,this};function Ii(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var r=i[e];this.set(r[0],r[1])}}Ii.prototype.clear=Wu,Ii.prototype.delete=Gu,Ii.prototype.get=um,Ii.prototype.has=Ku,Ii.prototype.set=Nt;const $a=Ii,Yu=function(){this.size=0,this.__data__={hash:new $a,map:new(Ps||jo),string:new $a}},Ns=function(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null},Mi=function(i,e){var t=i.__data__;return Ns(e)?t[typeof e=="string"?"string":"hash"]:t.map},Pi=function(i){var e=Mi(this,i).delete(i);return this.size-=e?1:0,e},Qu=function(i){return Mi(this,i).get(i)},pm=function(i){return Mi(this,i).has(i)},fm=function(i,e){var t=Mi(this,i),r=t.size;return t.set(i,e),this.size+=t.size==r?0:1,this};function ti(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var r=i[e];this.set(r[0],r[1])}}ti.prototype.clear=Yu,ti.prototype.delete=Pi,ti.prototype.get=Qu,ti.prototype.has=pm,ti.prototype.set=fm;const Ua=ti,Ec=function(i,e){var t=this.__data__;if(t instanceof jo){var r=t.__data__;if(!Ps||r.length<199)return r.push([i,e]),this.size=++t.size,this;t=this.__data__=new Ua(r)}return t.set(i,e),this.size=t.size,this};function ni(i){var e=this.__data__=new jo(i);this.size=e.size}ni.prototype.clear=xc,ni.prototype.delete=ro,ni.prototype.get=Is,ni.prototype.has=La,ni.prototype.set=Ec;const Bs=ni,gm=function(i,e){for(var t=-1,r=i==null?0:i.length;++t<r&&e(i[t],t,i)!==!1;);return i},Ha=function(){try{var i=or(Object,"defineProperty");return i({},"",{}),i}catch{}}(),Wa=function(i,e,t){e=="__proto__"&&Ha?Ha(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t};var Sc=Object.prototype.hasOwnProperty;const Dc=function(i,e,t){var r=i[e];Sc.call(i,e)&&ei(r,t)&&(t!==void 0||e in i)||Wa(i,e,t)},Ni=function(i,e,t,r){var s=!t;t||(t={});for(var l=-1,d=e.length;++l<d;){var h=e[l],f=r?r(t[h],i[h],h,t,i):void 0;f===void 0&&(f=i[h]),s?Wa(t,h,f):Dc(t,h,f)}return t},mm=function(i,e){for(var t=-1,r=Array(i);++t<i;)r[t]=e(t);return r},Zu=function(i){return _n(i)&&rn(i)=="[object Arguments]"};var Ga=Object.prototype,bm=Ga.hasOwnProperty,Ju=Ga.propertyIsEnumerable;const qa=Zu(function(){return arguments}())?Zu:function(i){return _n(i)&&bm.call(i,"callee")&&!Ju.call(i,"callee")},Xu=function(){return!1};var Tc=o&&!o.nodeType&&o,eh=Tc&&!0&&n&&!n.nodeType&&n,th=eh&&eh.exports===Tc?Le.Buffer:void 0;const Rs=(th?th.isBuffer:void 0)||Xu;var nh=/^(?:0|[1-9]\d*)$/;const Ic=function(i,e){var t=typeof i;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&nh.test(i))&&i>-1&&i%1==0&&i<e},Mc=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var Ct={};Ct["[object Float32Array]"]=Ct["[object Float64Array]"]=Ct["[object Int8Array]"]=Ct["[object Int16Array]"]=Ct["[object Int32Array]"]=Ct["[object Uint8Array]"]=Ct["[object Uint8ClampedArray]"]=Ct["[object Uint16Array]"]=Ct["[object Uint32Array]"]=!0,Ct["[object Arguments]"]=Ct["[object Array]"]=Ct["[object ArrayBuffer]"]=Ct["[object Boolean]"]=Ct["[object DataView]"]=Ct["[object Date]"]=Ct["[object Error]"]=Ct["[object Function]"]=Ct["[object Map]"]=Ct["[object Number]"]=Ct["[object Object]"]=Ct["[object RegExp]"]=Ct["[object Set]"]=Ct["[object String]"]=Ct["[object WeakMap]"]=!1;const km=function(i){return _n(i)&&Mc(i.length)&&!!Ct[rn(i)]},Ka=function(i){return function(e){return i(e)}};var Ya=o&&!o.nodeType&&o,Bi=Ya&&!0&&n&&!n.nodeType&&n,Pc=Bi&&Bi.exports===Ya&&at.process;const oi=function(){try{var i=Bi&&Bi.require&&Bi.require("util").types;return i||Pc&&Pc.binding&&Pc.binding("util")}catch{}}();var oh=oi&&oi.isTypedArray;const Nc=oh?Ka(oh):km;var Bc=Object.prototype.hasOwnProperty;const Qa=function(i,e){var t=zt(i),r=!t&&qa(i),s=!t&&!r&&Rs(i),l=!t&&!r&&!s&&Nc(i),d=t||r||s||l,h=d?mm(i.length,String):[],f=h.length;for(var b in i)!e&&!Bc.call(i,b)||d&&(b=="length"||s&&(b=="offset"||b=="parent")||l&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||Ic(b,f))||h.push(b);return h};var Rc=Object.prototype;const Os=function(i){var e=i&&i.constructor;return i===(typeof e=="function"&&e.prototype||Rc)},rh=zo(Object.keys,Object);var ih=Object.prototype.hasOwnProperty;const sh=function(i){if(!Os(i))return rh(i);var e=[];for(var t in Object(i))ih.call(i,t)&&t!="constructor"&&e.push(t);return e},zs=function(i){return i!=null&&Mc(i.length)&&!Rn(i)},Za=function(i){return zs(i)?Qa(i):sh(i)},wm=function(i,e){return i&&Ni(e,Za(e),i)},vm=function(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e};var Cm=Object.prototype.hasOwnProperty;const ym=function(i){if(!we(i))return vm(i);var e=Os(i),t=[];for(var r in i)(r!="constructor"||!e&&Cm.call(i,r))&&t.push(r);return t},Ri=function(i){return zs(i)?Qa(i,!0):ym(i)},ri=function(i,e){return i&&Ni(e,Ri(e),i)};var Ja=o&&!o.nodeType&&o,ah=Ja&&!0&&n&&!n.nodeType&&n,lh=ah&&ah.exports===Ja?Le.Buffer:void 0,Oc=lh?lh.allocUnsafe:void 0;const Xa=function(i,e){if(e)return i.slice();var t=i.length,r=Oc?Oc(t):new i.constructor(t);return i.copy(r),r},ch=function(i,e){var t=-1,r=i.length;for(e||(e=Array(r));++t<r;)e[t]=i[t];return e},Am=function(i,e){for(var t=-1,r=i==null?0:i.length,s=0,l=[];++t<r;){var d=i[t];e(d,t,i)&&(l[s++]=d)}return l},dh=function(){return[]};var uh=Object.prototype.propertyIsEnumerable,zc=Object.getOwnPropertySymbols;const Lc=zc?function(i){return i==null?[]:(i=Object(i),Am(zc(i),function(e){return uh.call(i,e)}))}:dh,_m=function(i,e){return Ni(i,Lc(i),e)},hh=function(i,e){for(var t=-1,r=e.length,s=i.length;++t<r;)i[s+t]=e[t];return i},jc=Object.getOwnPropertySymbols?function(i){for(var e=[];i;)hh(e,Lc(i)),i=tr(i);return e}:dh,xm=function(i,e){return Ni(i,jc(i),e)},ph=function(i,e,t){var r=e(i);return zt(i)?r:hh(r,t(i))},Fc=function(i){return ph(i,Za,Lc)},fh=function(i){return ph(i,Ri,jc)},Vc=or(Le,"DataView"),$c=or(Le,"Promise"),el=or(Le,"Set"),Uc=or(Le,"WeakMap");var Hc="[object Map]",Wc="[object Promise]",Gc="[object Set]",yt="[object WeakMap]",gh="[object DataView]",Em=nr(Vc),Sm=nr(Ps),Dm=nr($c),mh=nr(el),Tm=nr(Uc),ii=rn;(Vc&&ii(new Vc(new ArrayBuffer(1)))!=gh||Ps&&ii(new Ps)!=Hc||$c&&ii($c.resolve())!=Wc||el&&ii(new el)!=Gc||Uc&&ii(new Uc)!=yt)&&(ii=function(i){var e=rn(i),t=e=="[object Object]"?i.constructor:void 0,r=t?nr(t):"";if(r)switch(r){case Em:return gh;case Sm:return Hc;case Dm:return Wc;case mh:return Gc;case Tm:return yt}return e});const Ls=ii;var Im=Object.prototype.hasOwnProperty;const bh=function(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&Im.call(i,"index")&&(t.index=i.index,t.input=i.input),t},Cr=Le.Uint8Array,tl=function(i){var e=new i.constructor(i.byteLength);return new Cr(e).set(new Cr(i)),e},Mm=function(i,e){var t=e?tl(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)};var kh=/\w*$/;const wh=function(i){var e=new i.constructor(i.source,kh.exec(i));return e.lastIndex=i.lastIndex,e};var nl=ft?ft.prototype:void 0,ol=nl?nl.valueOf:void 0;const Oi=function(i){return ol?Object(ol.call(i)):{}},vh=function(i,e){var t=e?tl(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)},j=function(i,e,t){var r=i.constructor;switch(e){case"[object ArrayBuffer]":return tl(i);case"[object Boolean]":case"[object Date]":return new r(+i);case"[object DataView]":return Mm(i,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return vh(i,t);case"[object Map]":case"[object Set]":return new r;case"[object Number]":case"[object String]":return new r(i);case"[object RegExp]":return wh(i);case"[object Symbol]":return Oi(i)}};var F=Object.create;const q=function(){function i(){}return function(e){if(!we(e))return{};if(F)return F(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}(),J=function(i){return typeof i.constructor!="function"||Os(i)?{}:q(tr(i))},Se=function(i){return _n(i)&&Ls(i)=="[object Map]"};var ze=oi&&oi.isMap;const $e=ze?Ka(ze):Se,Ue=function(i){return _n(i)&&Ls(i)=="[object Set]"};var $t=oi&&oi.isSet;const Lt=$t?Ka($t):Ue;var js="[object Arguments]",yr="[object Function]",vo="[object Object]",dt={};dt[js]=dt["[object Array]"]=dt["[object ArrayBuffer]"]=dt["[object DataView]"]=dt["[object Boolean]"]=dt["[object Date]"]=dt["[object Float32Array]"]=dt["[object Float64Array]"]=dt["[object Int8Array]"]=dt["[object Int16Array]"]=dt["[object Int32Array]"]=dt["[object Map]"]=dt["[object Number]"]=dt[vo]=dt["[object RegExp]"]=dt["[object Set]"]=dt["[object String]"]=dt["[object Symbol]"]=dt["[object Uint8Array]"]=dt["[object Uint8ClampedArray]"]=dt["[object Uint16Array]"]=dt["[object Uint32Array]"]=!0,dt["[object Error]"]=dt[yr]=dt["[object WeakMap]"]=!1;const si=function i(e,t,r,s,l,d){var h,f=1&t,b=2&t,w=4&t;if(r&&(h=l?r(e,s,l,d):r(e)),h!==void 0)return h;if(!we(e))return e;var v=zt(e);if(v){if(h=bh(e),!f)return ch(e,h)}else{var x=Ls(e),T=x==yr||x=="[object GeneratorFunction]";if(Rs(e))return Xa(e,f);if(x==vo||x==js||T&&!l){if(h=b||T?{}:J(e),!f)return b?xm(e,ri(h,e)):_m(e,wm(h,e))}else{if(!dt[x])return l?e:{};h=j(e,x,f)}}d||(d=new Bs);var N=d.get(e);if(N)return N;d.set(e,h),Lt(e)?e.forEach(function($){h.add(i($,t,r,$,e,d))}):$e(e)&&e.forEach(function($,G){h.set(G,i($,t,r,G,e,d))});var O=v?void 0:(w?b?fh:Fc:b?Ri:Za)(e);return gm(O||e,function($,G){O&&($=e[G=$]),Dc(h,G,i($,t,r,G,e,d))}),h},rr=function(i,e){return si(i,5,e=typeof e=="function"?e:void 0)},En=function(i){return _n(i)&&i.nodeType===1&&!xn(i)};class Co{constructor(e,t){this._config={},t&&this.define(Un(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,r,s=!1){if(xn(t))return void this._setObjectToTarget(e,t,s);const l=t.split(".");t=l.pop();for(const d of l)xn(e[d])||(e[d]={}),e=e[d];if(xn(r))return xn(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,r,s);s&&e[t]!==void 0||(e[t]=r)}_getFromSource(e,t){const r=t.split(".");t=r.pop();for(const s of r){if(!xn(e[s])){e=null;break}e=e[s]}return e?Un(e[t]):void 0}_setObjectToTarget(e,t,r){Object.keys(t).forEach(s=>{this._setToTarget(e,s,t[s],r)})}}function Un(i){return rr(i,ir)}function ir(i){return En(i)?i:void 0}function Hn(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}function Ch(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}const _C=zi(re());function zi(i){return i?class extends i{listenTo(e,t,r,s={}){if(Hn(e)||Ch(e)){const l={capture:!!s.useCapture,passive:!!s.usePassive},d=this._getProxyEmitter(e,l)||new pP(e,l);this.listenTo(d,t,r,s)}else super.listenTo(e,t,r,s)}stopListening(e,t,r){if(Hn(e)||Ch(e)){const s=this._getAllProxyEmitters(e);for(const l of s)this.stopListening(l,t,r)}else super.stopListening(e,t,r)}_getProxyEmitter(e,t){return function(r,s){const l=r[ie];return l&&l[s]?l[s].emitter:null}(this,xC(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:_C}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{zi[i]=_C.prototype[i]});class pP extends re(){constructor(e,t){super(),se(this,xC(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,r){this.attach(e),re().prototype._addEventListener.call(this,e,t,r)}_removeEventListener(e,t){re().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=r=>{this.fire(e,r)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function xC(i,e){let t=function(r){return r["data-ck-expando"]||(r["data-ck-expando"]=I())}(i);for(const r of Object.keys(e).sort())e[r]&&(t+="-"+r);return t}let Pm;try{Pm={window,document}}catch{Pm={window:{},document:{}}}const Je=Pm;function EC(i){const e=[];let t=i;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}function Jt(i){return Object.prototype.toString.call(i)=="[object Text]"}function yh(i){return Object.prototype.toString.apply(i)=="[object Range]"}function SC(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const DC=["top","right","bottom","left","width","height"];class Ut{constructor(e){const t=yh(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),IC(e)||t)if(t){const r=Ut.getDomRangeRects(e);Ah(this,Ut.getBoundingRect(r))}else Ah(this,e.getBoundingClientRect());else if(Ch(e)){const{innerWidth:r,innerHeight:s}=e;Ah(this,{top:0,right:r,bottom:s,left:0,width:r,height:s})}else Ah(this,e)}clone(){return new Ut(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new Ut(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(TC(e))return t;let r,s=e,l=e.parentNode||e.commonAncestorContainer;for(;l&&!TC(l);){if(s instanceof HTMLElement&&MC(s)==="absolute"&&(r=s),r&&(MC(l)!=="relative"||(d=l).ownerDocument.defaultView.getComputedStyle(d).overflow==="visible")){s=l,l=l.parentNode;continue}const h=new Ut(l),f=t.getIntersection(h);if(!f)return null;f.getArea()<t.getArea()&&(t=f),s=l,l=l.parentNode}var d;return t}isEqual(e){for(const t of DC)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,r,s;if(Ch(e))t=e.innerWidth-e.document.documentElement.clientWidth,r=e.innerHeight-e.document.documentElement.clientHeight,s=e.getComputedStyle(e.document.documentElement).direction;else{const l=SC(e);t=e.offsetWidth-e.clientWidth-l.left-l.right,r=e.offsetHeight-e.clientHeight-l.top-l.bottom,s=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=l.left,this.top+=l.top,this.right-=l.right,this.bottom-=l.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,s==="ltr"?this.right-=t:this.left+=t,this.height-=r,this.bottom-=r,this}static getDomRangeRects(e){const t=[],r=Array.from(e.getClientRects());if(r.length)for(const s of r)t.push(new Ut(s));else{let s=e.startContainer;Jt(s)&&(s=s.parentNode);const l=new Ut(s.getBoundingClientRect());l.right=l.left,l.width=0,t.push(l)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let r=0;for(const s of e)r++,t.left=Math.min(t.left,s.left),t.top=Math.min(t.top,s.top),t.right=Math.max(t.right,s.right),t.bottom=Math.max(t.bottom,s.bottom);return r==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Ut(t))}}function Ah(i,e){for(const t of DC)i[t]=e[t]}function TC(i){return!!IC(i)&&i===i.ownerDocument.body}function IC(i){return i!==null&&typeof i=="object"&&i.nodeType===1&&typeof i.getBoundingClientRect=="function"}function MC(i){return i.ownerDocument.defaultView.getComputedStyle(i).position}const sn=class{constructor(i,e){sn._observerInstance||sn._createObserver(),this._element=i,this._callback=e,sn._addElementCallback(i,e),sn._observerInstance.observe(i)}get element(){return this._element}destroy(){sn._deleteElementCallback(this._element,this._callback)}static _addElementCallback(i,e){sn._elementCallbacks||(sn._elementCallbacks=new Map);let t=sn._elementCallbacks.get(i);t||(t=new Set,sn._elementCallbacks.set(i,t)),t.add(e)}static _deleteElementCallback(i,e){const t=sn._getElementCallbacks(i);t&&(t.delete(e),t.size||(sn._elementCallbacks.delete(i),sn._observerInstance.unobserve(i))),sn._elementCallbacks&&!sn._elementCallbacks.size&&(sn._observerInstance=null,sn._elementCallbacks=null)}static _getElementCallbacks(i){return sn._elementCallbacks?sn._elementCallbacks.get(i):null}static _createObserver(){sn._observerInstance=new Je.window.ResizeObserver(i=>{for(const e of i){const t=sn._getElementCallbacks(e.target);if(t)for(const r of t)r(e)}})}};let qc=sn;function fP(i,e){i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}function Nm(i){return e=>e+i}function _h(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function PC(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function rl(i){return i&&i.nodeType===Node.COMMENT_NODE}function Fs(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}qc._observerInstance=null,qc._elementCallbacks=null;var NC=Math.pow;function BC({element:i,target:e,positions:t,limiter:r,fitInViewport:s,viewportOffsetConfig:l}){Rn(e)&&(e=e()),Rn(r)&&(r=r());const d=function(x){return x&&x.parentNode?x.offsetParent===Je.document.body?null:x.offsetParent:null}(i),h=new Ut(i),f=new Ut(e);let b;const w=s&&function(x){x=Object.assign({top:0,bottom:0,left:0,right:0},x);const T=new Ut(Je.window);return T.top+=x.top,T.height-=x.top,T.bottom-=x.bottom,T.height-=x.bottom,T}(l)||null,v={targetRect:f,elementRect:h,positionedElementAncestor:d,viewportRect:w};if(r||s){const x=r&&new Ut(r).getVisible();Object.assign(v,{limiterRect:x,viewportRect:w}),b=function(T,N){const{elementRect:O}=N,$=O.getArea(),G=T.map(ke=>new Bm(ke,N)).filter(ke=>!!ke.name);let Q=0,ne=null;for(const ke of G){const{limiterIntersectionArea:Re,viewportIntersectionArea:xt}=ke;if(Re===$)return ke;const ot=NC(xt,2)+NC(Re,2);ot>Q&&(Q=ot,ne=ke)}return ne}(t,v)||new Bm(t[0],v)}else b=new Bm(t[0],v);return b}function RC(i){const{scrollX:e,scrollY:t}=Je.window;return i.clone().moveBy(e,t)}class Bm{constructor(e,t){const r=e(t.targetRect,t.elementRect,t.viewportRect);if(!r)return;const{left:s,top:l,name:d,config:h}=r;this.name=d,this.config=h,this._positioningFunctionCorrdinates={left:s,top:l},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const r=e.getIntersection(t);if(r)return r.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=RC(this._rect),this._options.positionedElementAncestor&&function(e,t){const r=RC(new Ut(t)),s=SC(t);let l=0,d=0;l-=r.left,d-=r.top,l+=t.scrollLeft,d+=t.scrollTop,l-=s.left,d-=s.top,e.moveBy(l,d)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function OC(i){const e=i.parentNode;e&&e.removeChild(i)}function gP({window:i,rect:e,alignToTop:t,forceScroll:r,viewportOffset:s}){const l=e.clone().moveBy(0,s.bottom),d=e.clone().moveBy(0,-s.top),h=new Ut(i).excludeScrollbarsAndBorders(),f=t&&r,b=[d,l].every(N=>h.contains(N));let{scrollX:w,scrollY:v}=i;const x=w,T=v;f?v-=h.top-e.top+s.top:b||(LC(d,h)?v-=h.top-e.top+s.top:zC(l,h)&&(v+=t?e.top-h.top-s.top:e.bottom-h.bottom+s.bottom)),b||(jC(e,h)?w-=h.left-e.left+s.left:FC(e,h)&&(w+=e.right-h.right+s.right)),w==x&&v===T||i.scrollTo(w,v)}function mP({parent:i,getRect:e,alignToTop:t,forceScroll:r,ancestorOffset:s=0}){const l=Rm(i),d=t&&r;let h,f,b;for(;i!=l.document.body;)f=e(),h=new Ut(i).excludeScrollbarsAndBorders(),b=h.contains(f),d?i.scrollTop-=h.top-f.top+s:b||(LC(f,h)?i.scrollTop-=h.top-f.top+s:zC(f,h)&&(i.scrollTop+=t?f.top-h.top-s:f.bottom-h.bottom+s)),b||(jC(f,h)?i.scrollLeft-=h.left-f.left+s:FC(f,h)&&(i.scrollLeft+=f.right-h.right+s)),i=i.parentNode}function zC(i,e){return i.bottom>e.bottom}function LC(i,e){return i.top<e.top}function jC(i,e){return i.left<e.left}function FC(i,e){return i.right>e.right}function Rm(i){return yh(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function bP(i){if(yh(i)){let e=i.commonAncestorContainer;return Jt(e)&&(e=e.parentNode),e}return i.parentNode}function VC(i,e){const t=Rm(i),r=new Ut(i);if(t===e)return r;{let s=t;for(;s!=e;){const l=s.frameElement,d=new Ut(l).excludeScrollbarsAndBorders();r.moveBy(d.left,d.top),s=s.parent}}return r}const kP={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},wP={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},lt=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)i[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;for(const e of"`-=[];',./\\")i[e]=e.charCodeAt(0);return i}(),vP=Object.fromEntries(Object.entries(lt).map(([i,e])=>[e,i.charAt(0).toUpperCase()+i.slice(1)]));function il(i){let e;if(typeof i=="string"){if(e=lt[i.toLowerCase()],!e)throw new M("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?lt.alt:0)+(i.ctrlKey?lt.ctrl:0)+(i.shiftKey?lt.shift:0)+(i.metaKey?lt.cmd:0);return e}function xh(i){return typeof i=="string"&&(i=function(e){return e.split("+").map(t=>t.trim())}(i)),i.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return il(t.slice(0,-1));const r=il(t);return m.isMac&&r==lt.ctrl?lt.cmd:r}(e):e).reduce((e,t)=>t+e,0)}function $C(i){let e=xh(i);return Object.entries(m.isMac?kP:wP).reduce((t,[r,s])=>(e&lt[r]&&(e&=~lt[r],t+=s),t),"")+(e?vP[e]:"")}function Om(i,e){const t=e==="ltr";switch(i){case lt.arrowleft:return t?"left":"right";case lt.arrowright:return t?"right":"left";case lt.arrowup:return"up";case lt.arrowdown:return"down"}}function Sn(i){return Array.isArray(i)?i:[i]}function CP(i,e,t=1){if(typeof t!="number")throw new M("translation-service-quantity-not-a-number",null,{quantity:t});const r=Object.keys(Je.window.CKEDITOR_TRANSLATIONS).length;r===1&&(i=Object.keys(Je.window.CKEDITOR_TRANSLATIONS)[0]);const s=e.id||e.string;if(r===0||!function(f,b){return!!Je.window.CKEDITOR_TRANSLATIONS[f]&&!!Je.window.CKEDITOR_TRANSLATIONS[f].dictionary[b]}(i,s))return t!==1?e.plural:e.string;const l=Je.window.CKEDITOR_TRANSLATIONS[i].dictionary,d=Je.window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(f=>f===1?0:1),h=l[s];return typeof h=="string"?h:h[Number(d(t))]}Je.window.CKEDITOR_TRANSLATIONS||(Je.window.CKEDITOR_TRANSLATIONS={});const yP=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function UC(i){return yP.includes(i)?"rtl":"ltr"}class AP{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=UC(this.uiLanguage),this.contentLanguageDirection=UC(this.contentLanguage),this.t=(r,s)=>this._t(r,s)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Sn(t),typeof e=="string"&&(e={string:e});const r=e.plural?t[0]:1;return function(s,l){return s.replace(/%(\d+)/g,(d,h)=>h<l.length?l[h]:d)}(CP(this.uiLanguage,e,r),t)}}class sr extends re(){constructor(e={},t={}){super();const r=je(e);if(r||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],r)for(const s of e)this._items.push(s),this._itemMap.set(this._getItemIdBeforeAdding(s),s)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new M("collection-add-item-invalid-index",this);let r=0;for(const s of e){const l=this._getItemIdBeforeAdding(s),d=t+r;this._items.splice(d,0,s),this._itemMap.set(l,s),this.fire("add",s,d),r++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new M("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,r]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:r}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new M("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(r=>new t(r))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(r=>r[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,r=(s,l,d)=>{const h=t._bindToCollection==this,f=t._bindToInternalToExternalMap.get(l);if(h&&f)this._bindToExternalToInternalMap.set(l,f),this._bindToInternalToExternalMap.set(f,l);else{const b=e(l);if(!b)return void this._skippedIndexesFromExternal.push(d);let w=d;for(const v of this._skippedIndexesFromExternal)d>v&&w--;for(const v of t._skippedIndexesFromExternal)w>=v&&w++;this._bindToExternalToInternalMap.set(l,b),this._bindToInternalToExternalMap.set(b,l),this.add(b,w);for(let v=0;v<t._skippedIndexesFromExternal.length;v++)w<=t._skippedIndexesFromExternal[v]&&t._skippedIndexesFromExternal[v]++}};for(const s of t)r(0,s,t.getIndex(s));this.listenTo(t,"add",r),this.listenTo(t,"remove",(s,l,d)=>{const h=this._bindToExternalToInternalMap.get(l);h&&this.remove(h),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((f,b)=>(d<b&&f.push(b-1),d>b&&f.push(b),f),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let r;if(t in e){if(r=e[t],typeof r!="string")throw new M("collection-add-invalid-id",this);if(this.get(r))throw new M("collection-add-item-already-exists",this)}else e[t]=r=I();return r}_remove(e){let t,r,s,l=!1;const d=this._idProperty;if(typeof e=="string"?(r=e,s=this._itemMap.get(r),l=!s,s&&(t=this._items.indexOf(s))):typeof e=="number"?(t=e,s=this._items[t],l=!s,s&&(r=s[d])):(s=e,r=s[d],t=this._items.indexOf(s),l=t==-1||!this._itemMap.get(r)),l)throw new M("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(r);const h=this._bindToInternalToExternalMap.get(s);return this._bindToInternalToExternalMap.delete(s),this._bindToExternalToInternalMap.delete(h),this.fire("remove",s,t),[s,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function pn(i){const e=i.next();return e.done?null:e.value}class yo extends zi(ge()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new M("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Ar{constructor(){this._listener=new(zi())}listenTo(e){this._listener.listenTo(e,"keydown",(t,r)=>{this._listener.fire("_keydown:"+il(r),r)})}set(e,t,r={}){const s=xh(e),l=r.priority;this._listener.listenTo(this._listener,"_keydown:"+s,(d,h)=>{t(h,()=>{h.preventDefault(),h.stopPropagation(),d.stop()}),d.return=!0},{priority:l})}press(e){return!!this._listener.fire("_keydown:"+il(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function _r(i){return je(i)?new Map(i):function(e){const t=new Map;for(const r in e)t.set(r,e[r]);return t}(i)}function zm(i,e){let t;function r(...s){r.cancel(),t=setTimeout(()=>i(...s),e)}return r.cancel=()=>{clearTimeout(t)},r}function Lm(i,e){return!!(t=i.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(r){return!!r&&r.length==1&&/[\udc00-\udfff]/.test(r)}(i.charAt(e));var t}function jm(i,e){return!!(t=i.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const _P=function(){const i=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],e=new RegExp("\\p{Regional_Indicator}{2}","u").source,t="(?:"+i.map(r=>r.source).join("|")+")";return new RegExp(`${e}|${t}(?:‍${t})*`,"ug")}();function HC(i,e){const t=String(i).matchAll(_P);return Array.from(t).some(r=>r.index<e&&e<r.index+r[0].length)}class ue extends ge(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",WC,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",WC),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function WC(i){i.return=!1,i.stop()}class Xe extends ge(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{this.affectsData&&(e.isReadOnly||this._isEnabledBasedOnSelection&&!e.model.canEditAt(e.model.document.selection))&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",GC,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",GC),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function GC(i){i.return=!1,i.stop()}class qC extends Xe{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){B(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class KC extends re(){constructor(e,t=[],r=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const s of t)s.pluginName&&this._availablePlugins.set(s.pluginName,s);this._contextPlugins=new Map;for(const[s,l]of r)this._contextPlugins.set(s,l),this._contextPlugins.set(l,s),s.pluginName&&this._availablePlugins.set(s.pluginName,s)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let r=e;throw typeof e=="function"&&(r=e.pluginName||e.name),new M("plugincollection-plugin-not-loaded",this._context,{plugin:r})}return t}has(e){return this._plugins.has(e)}init(e,t=[],r=[]){const s=this,l=this._context;(function N(O,$=new Set){O.forEach(G=>{f(G)&&($.has(G)||($.add(G),G.pluginName&&!s._availablePlugins.has(G.pluginName)&&s._availablePlugins.set(G.pluginName,G),G.requires&&N(G.requires,$)))})})(e),x(e);const d=[...function N(O,$=new Set){return O.map(G=>f(G)?G:s._availablePlugins.get(G)).reduce((G,Q)=>$.has(Q)?G:($.add(Q),Q.requires&&(x(Q.requires,Q),N(Q.requires,$).forEach(ne=>G.add(ne))),G.add(Q)),new Set)}(e.filter(N=>!w(N,t)))];(function(N,O){for(const $ of O){if(typeof $!="function")throw new M("plugincollection-replace-plugin-invalid-type",null,{pluginItem:$});const G=$.pluginName;if(!G)throw new M("plugincollection-replace-plugin-missing-name",null,{pluginItem:$});if($.requires&&$.requires.length)throw new M("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:G});const Q=s._availablePlugins.get(G);if(!Q)throw new M("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:G});const ne=N.indexOf(Q);if(ne===-1){if(s._contextPlugins.has(Q))return;throw new M("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:G})}if(Q.requires&&Q.requires.length)throw new M("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:G});N.splice(ne,1,$),s._availablePlugins.set(G,$)}})(d,r);const h=d.map(N=>{let O=s._contextPlugins.get(N);return O=O||new N(l),s._add(N,O),O});return T(h,"init").then(()=>T(h,"afterInit")).then(()=>h);function f(N){return typeof N=="function"}function b(N){return f(N)&&!!N.isContextPlugin}function w(N,O){return O.some($=>$===N||v(N)===$||v($)===N)}function v(N){return f(N)?N.pluginName||N.name:N}function x(N,O=null){N.map($=>f($)?$:s._availablePlugins.get($)||$).forEach($=>{(function(G,Q){if(!f(G))throw Q?new M("plugincollection-soft-required",l,{missingPlugin:G,requiredBy:v(Q)}):new M("plugincollection-plugin-not-found",l,{plugin:G})})($,O),function(G,Q){if(b(Q)&&!b(G))throw new M("plugincollection-context-required",l,{plugin:v(G),requiredBy:v(Q)})}($,O),function(G,Q){if(Q&&w(G,t))throw new M("plugincollection-required",l,{plugin:v(G),requiredBy:v(Q)})}($,O)})}function T(N,O){return N.reduce(($,G)=>G[O]?s._contextPlugins.has(G)?$:$.then(G[O].bind(G)):$,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const r=e.pluginName;if(r){if(this._plugins.has(r))throw new M("plugincollection-plugin-name-conflict",null,{pluginName:r,plugin1:this._plugins.get(r).constructor,plugin2:e});this._plugins.set(r,t)}}}class YC{constructor(e){this._contextOwner=null,this.config=new Co(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new KC(this,t);const r=this.config.get("language")||{};this.locale=new AP({uiLanguage:typeof r=="string"?r:r.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new sr}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const r of e.concat(t)){if(typeof r!="function")throw new M("context-initplugins-constructor-only",null,{Plugin:r});if(r.isContextPlugin!==!0)throw new M("context-initplugins-invalid-plugin",null,{Plugin:r})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new M("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const r=new this(e);t(r.initPlugins().then(()=>r))})}}class Eh extends ge(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class xP extends Ar{constructor(e){super(),this.editor=e}set(e,t,r={}){if(typeof t=="string"){const s=t;t=(l,d)=>{this.editor.execute(s),d()}}super.set(e,t,r)}}var EP=u(6062),ye=u.n(EP),QC=u(4717),SP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(QC.Z,SP),QC.Z.locals;const Sh=new WeakMap;function ZC({view:i,element:e,text:t,isDirectHost:r=!0,keepOnFocus:s=!1}){const l=i.document;Sh.has(l)||(Sh.set(l,new Map),l.registerPostFixer(d=>Fm(l,d)),l.on("change:isComposing",()=>{i.change(d=>Fm(l,d))},{priority:"high"})),Sh.get(l).set(e,{text:t,isDirectHost:r,keepOnFocus:s,hostElement:r?e:null}),i.change(d=>Fm(l,d))}function DP(i,e){return!!e.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",e),!0)}function Fm(i,e){const t=Sh.get(i),r=[];let s=!1;for(const[l,d]of t)d.isDirectHost&&(r.push(l),JC(e,l,d)&&(s=!0));for(const[l,d]of t){if(d.isDirectHost)continue;const h=TP(l);h&&(r.includes(h)||(d.hostElement=h,JC(e,l,d)&&(s=!0)))}return s}function JC(i,e,t){const{text:r,isDirectHost:s,hostElement:l}=t;let d=!1;return l.getAttribute("data-placeholder")!==r&&(i.setAttribute("data-placeholder",r,l),d=!0),(s||e.childCount==1)&&function(h,f){if(!h.isAttached()||Array.from(h.getChildren()).some(v=>!v.is("uiElement")))return!1;const b=h.document,w=b.selection.anchor;return!(b.isComposing&&w&&w.parent===h||!f&&b.isFocused&&(!w||w.parent===h))}(l,t.keepOnFocus)?function(h,f){return!f.hasClass("ck-placeholder")&&(h.addClass("ck-placeholder",f),!0)}(i,l)&&(d=!0):DP(i,l)&&(d=!0),d}function TP(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Vs{is(){throw new Error("is() method is abstract")}}const XC=function(i){return si(i,4)};class $s extends re(Vs){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new M("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let r=e.includeSelf?this:this.parent;for(;r;)t[e.parentFirst?"push":"unshift"](r),r=r.parent;return t}getCommonAncestor(e,t={}){const r=this.getAncestors(t),s=e.getAncestors(t);let l=0;for(;r[l]==s[l]&&r[l];)l++;return l===0?null:r[l-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),r=e.getPath(),s=st(t,r);switch(s){case"prefix":return!0;case"extension":return!1;default:return t[s]<r[s]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=XC(this);return delete e.parent,e}}$s.prototype.is=function(i){return i==="node"||i==="view:node"};class Dt extends $s{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Dt&&(this===e||this.data===e.data)}_clone(){return new Dt(this.document,this.data)}}Dt.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class xr extends Vs{constructor(e,t,r){if(super(),this.textNode=e,t<0||t>e.data.length)throw new M("view-textproxy-wrong-offsetintext",this);if(r<0||t+r>e.data.length)throw new M("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+r),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let r=e.includeSelf?this.textNode:this.parent;for(;r!==null;)t[e.parentFirst?"push":"unshift"](r),r=r.parent;return t}}xr.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class Er{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const r of this._patterns){const s=ey(t,r);if(s)return{element:t,pattern:r,match:s}}return null}matchAll(...e){const t=[];for(const r of e)for(const s of this._patterns){const l=ey(r,s);l&&t.push({element:r,pattern:s,match:l})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function ey(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=function(r,s){return r instanceof RegExp?!!s.match(r):r===s}(e.name,i.name),!t.name)||e.attributes&&(t.attributes=function(r,s){const l=new Set(s.getAttributeKeys());return xn(r)?(r.style!==void 0&&W("matcher-pattern-deprecated-attributes-style-key",r),r.class!==void 0&&W("matcher-pattern-deprecated-attributes-class-key",r)):(l.delete("style"),l.delete("class")),Vm(r,l,d=>s.getAttribute(d))}(e.attributes,i),!t.attributes)||e.classes&&(t.classes=function(r,s){return Vm(r,s.getClassNames(),()=>{})}(e.classes,i),!t.classes)||e.styles&&(t.styles=function(r,s){return Vm(r,s.getStyleNames(!0),l=>s.getStyle(l))}(e.styles,i),!t.styles)?null:t}function Vm(i,e,t){const r=function(d){return Array.isArray(d)?d.map(h=>xn(h)?(h.key!==void 0&&h.value!==void 0||W("matcher-pattern-missing-key-or-value",h),[h.key,h.value]):[h,!0]):xn(d)?Object.entries(d):[[d,!0]]}(i),s=Array.from(e),l=[];if(r.forEach(([d,h])=>{s.forEach(f=>{(function(b,w){return b===!0||b===w||b instanceof RegExp&&w.match(b)})(d,f)&&function(b,w,v){if(b===!0)return!0;const x=v(w);return b===x||b instanceof RegExp&&!!String(x).match(b)}(h,f,t)&&l.push(f)})}),r.length&&!(l.length<r.length))return l}const Dh=function(i){return typeof i=="symbol"||_n(i)&&rn(i)=="[object Symbol]"};var IP=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,MP=/^\w*$/;const PP=function(i,e){if(zt(i))return!1;var t=typeof i;return!(t!="number"&&t!="symbol"&&t!="boolean"&&i!=null&&!Dh(i))||MP.test(i)||!IP.test(i)||e!=null&&i in Object(e)};function $m(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var r=arguments,s=e?e.apply(this,r):r[0],l=t.cache;if(l.has(s))return l.get(s);var d=i.apply(this,r);return t.cache=l.set(s,d)||l,d};return t.cache=new($m.Cache||Ua),t}$m.Cache=Ua;const NP=$m,BP=function(i){var e=NP(i,function(r){return t.size===500&&t.clear(),r}),t=e.cache;return e};var RP=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,OP=/\\(\\)?/g,zP=BP(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(RP,function(t,r,s,l){e.push(s?l.replace(OP,"$1"):r||t)}),e});const LP=zP,jP=function(i,e){for(var t=-1,r=i==null?0:i.length,s=Array(r);++t<r;)s[t]=e(i[t],t,i);return s};var ty=ft?ft.prototype:void 0,ny=ty?ty.toString:void 0;const FP=function i(e){if(typeof e=="string")return e;if(zt(e))return jP(e,i)+"";if(Dh(e))return ny?ny.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},Um=function(i){return i==null?"":FP(i)},Hm=function(i,e){return zt(i)?i:PP(i,e)?[i]:LP(Um(i))},VP=function(i){var e=i==null?0:i.length;return e?i[e-1]:void 0},Wm=function(i){if(typeof i=="string"||Dh(i))return i;var e=i+"";return e=="0"&&1/i==-1/0?"-0":e},oy=function(i,e){for(var t=0,r=(e=Hm(e,i)).length;i!=null&&t<r;)i=i[Wm(e[t++])];return t&&t==r?i:void 0},ry=function(i,e,t){var r=-1,s=i.length;e<0&&(e=-e>s?0:s+e),(t=t>s?s:t)<0&&(t+=s),s=e>t?0:t-e>>>0,e>>>=0;for(var l=Array(s);++r<s;)l[r]=i[r+e];return l},$P=function(i,e){return e.length<2?i:oy(i,ry(e,0,-1))},UP=function(i,e){return e=Hm(e,i),(i=$P(i,e))==null||delete i[Wm(VP(e))]},HP=function(i,e){return i==null||UP(i,e)},Th=function(i,e,t){var r=i==null?void 0:oy(i,e);return r===void 0?t:r},Gm=function(i,e,t){(t!==void 0&&!ei(i[e],t)||t===void 0&&!(e in i))&&Wa(i,e,t)},WP=function(i){return function(e,t,r){for(var s=-1,l=Object(e),d=r(e),h=d.length;h--;){var f=d[i?h:++s];if(t(l[f],f,l)===!1)break}return e}}(),GP=function(i){return _n(i)&&zs(i)},qm=function(i,e){if((e!=="constructor"||typeof i[e]!="function")&&e!="__proto__")return i[e]},qP=function(i){return Ni(i,Ri(i))},KP=function(i,e,t,r,s,l,d){var h=qm(i,t),f=qm(e,t),b=d.get(f);if(b)Gm(i,t,b);else{var w=l?l(h,f,t+"",i,e,d):void 0,v=w===void 0;if(v){var x=zt(f),T=!x&&Rs(f),N=!x&&!T&&Nc(f);w=f,x||T||N?zt(h)?w=h:GP(h)?w=ch(h):T?(v=!1,w=Xa(f,!0)):N?(v=!1,w=vh(f,!0)):w=[]:xn(f)||qa(f)?(w=h,qa(h)?w=qP(h):we(h)&&!Rn(h)||(w=J(f))):v=!1}v&&(d.set(f,w),s(w,f,r,l,d),d.delete(f)),Gm(i,t,w)}},YP=function i(e,t,r,s,l){e!==t&&WP(t,function(d,h){if(l||(l=new Bs),we(d))KP(e,t,h,r,i,s,l);else{var f=s?s(qm(e,h),d,h+"",e,t,l):void 0;f===void 0&&(f=d),Gm(e,h,f)}},Ri)},Us=function(i){return i},QP=function(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)};var iy=Math.max;const ZP=function(i,e,t){return e=iy(e===void 0?i.length-1:e,0),function(){for(var r=arguments,s=-1,l=iy(r.length-e,0),d=Array(l);++s<l;)d[s]=r[e+s];s=-1;for(var h=Array(e+1);++s<e;)h[s]=r[s];return h[e]=t(d),QP(i,this,h)}},JP=function(i){return function(){return i}},XP=Ha?function(i,e){return Ha(i,"toString",{configurable:!0,enumerable:!1,value:JP(e),writable:!0})}:Us;var e3=Date.now;const t3=function(i){var e=0,t=0;return function(){var r=e3(),s=16-(r-t);if(t=r,s>0){if(++e>=800)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}(XP),n3=function(i,e){return t3(ZP(i,e,Us),i+"")},o3=function(i,e,t){if(!we(t))return!1;var r=typeof e;return!!(r=="number"?zs(t)&&Ic(e,t.length):r=="string"&&e in t)&&ei(t[e],i)},sy=function(i){return n3(function(e,t){var r=-1,s=t.length,l=s>1?t[s-1]:void 0,d=s>2?t[2]:void 0;for(l=i.length>3&&typeof l=="function"?(s--,l):void 0,d&&o3(t[0],t[1],d)&&(l=s<3?void 0:l,s=1),e=Object(e);++r<s;){var h=t[r];h&&i(e,h,r,l)}return e})},ay=sy(function(i,e,t){YP(i,e,t)}),r3=function(i,e,t,r){if(!we(i))return i;for(var s=-1,l=(e=Hm(e,i)).length,d=l-1,h=i;h!=null&&++s<l;){var f=Wm(e[s]),b=t;if(f==="__proto__"||f==="constructor"||f==="prototype")return i;if(s!=d){var w=h[f];(b=r?r(w,f,h):void 0)===void 0&&(b=we(w)?w:Ic(e[s+1])?[]:{})}Dc(h,f,b),h=h[f]}return i},i3=function(i,e,t){return i==null?i:r3(i,e,t)};class s3{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(r){let s=null,l=0,d=0,h=null;const f=new Map;if(r==="")return f;r.charAt(r.length-1)!=";"&&(r+=";");for(let b=0;b<r.length;b++){const w=r.charAt(b);if(s===null)switch(w){case":":h||(h=r.substr(l,b-l),d=b+1);break;case'"':case"'":s=w;break;case";":{const v=r.substr(d,b-d);h&&f.set(h.trim(),v.trim()),h=null,l=b+1;break}}else w===s&&(s=null)}return f}(e).entries());for(const[r,s]of t)this._styleProcessor.toNormalizedForm(r,s,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([r])=>r===e);return Array.isArray(t)}set(e,t){if(we(e))for(const[r,s]of Object.entries(e))this._styleProcessor.toNormalizedForm(r,s,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Km(e);HP(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!we(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([r])=>r===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const r of t)e.push(...this._styleProcessor.getReducedForm(r,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const r=t.splice(0,t.length-1).join("."),s=Th(this._styles,r);s&&!Array.from(Object.keys(s)).length&&this.remove(r)}}class a3{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,r){if(we(t))Ym(r,Km(e),t);else if(this._normalizers.has(e)){const s=this._normalizers.get(e),{path:l,value:d}=s(t);Ym(r,l,d)}else Ym(r,e,t)}getNormalized(e,t){if(!e)return ay({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const r=this._extractors.get(e);if(typeof r=="string")return Th(t,r);const s=r(e,t);if(s)return s}return Th(t,Km(e))}getReducedForm(e,t){const r=this.getNormalized(e,t);return r===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(r):[[e,r]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(s=>{const l=this.getNormalized(s,e);return l&&typeof l=="object"?Object.keys(l).length:l}),r=new Set([...t,...Object.keys(e)]);return Array.from(r.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const r of t)this._mapStyleNames(r,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Km(i){return i.replace("-",".")}function Ym(i,e,t){let r=t;we(t)&&(r=ay({},Th(i,e),t)),i3(i,e,r)}class Ao extends $s{constructor(e,t,r,s){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(l){const d=_r(l);for(const[h,f]of d)f===null?d.delete(h):typeof f!="string"&&d.set(h,String(f));return d}(r),this._children=[],s&&this._insertChild(0,s),this._classes=new Set,this._attrs.has("class")){const l=this._attrs.get("class");ly(this._classes,l),this._attrs.delete("class")}this._styles=new s3(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Ao))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,r]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==r)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new Er(...e);let r=this.parent;for(;r&&!r.is("documentFragment");){if(t.match(r))return r;r=r.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),r=Array.from(this._attrs).map(s=>`${s[0]}="${s[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(r==""?"":` ${r}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const s of this.getChildren())t.push(s._clone(e));const r=new this.constructor(this.document,this.name,this._attrs,t);return r._classes=new Set(this._classes),r._styles.set(this._styles.getNormalized()),r._customProperties=new Map(this._customProperties),r.getFillerOffset=this.getFillerOffset,r._unsafeAttributesToRender=this._unsafeAttributesToRender,r}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let r=0;const s=function(l,d){return typeof d=="string"?[new Dt(l,d)]:(je(d)||(d=[d]),Array.from(d).map(h=>typeof h=="string"?new Dt(l,h):h instanceof xr?new Dt(l,h.data):h))}(this.document,t);for(const l of s)l.parent!==null&&l._remove(),l.parent=this,l.document=this.document,this._children.splice(e,0,l),e++,r++;return r}_removeChildren(e,t=1){this._fireChange("children",this);for(let r=e;r<e+t;r++)this._children[r].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const r=String(t);this._fireChange("attributes",this),e=="class"?ly(this._classes,r):e=="style"?this._styles.setTo(r):this._attrs.set(e,r)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Sn(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Sn(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Sn(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function ly(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(r=>i.add(r))}Ao.prototype.is=function(i,e){return e?e===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Kc extends Ao{constructor(e,t,r,s){super(e,t,r,s),this.getFillerOffset=cy}}function cy(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}Kc.prototype.is=function(i,e){return e?e===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Ih extends ge(Kc){constructor(e,t,r,s){super(e,t,r,s),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",l=>l&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}Ih.prototype.is=function(i,e){return e?e===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const dy=Symbol("rootName");class uy extends Ih{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(dy)}set rootName(e){this._setCustomProperty(dy,e)}set _name(e){this.name=e}}uy.prototype.is=function(i,e){return e?e===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Hs{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new M("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new M("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=be._createAt(e.startPosition):this._position=be._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,r;do r=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,r=e.parent;if(r.parent===null&&e.offset===r.childCount)return{done:!0,value:void 0};if(r===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let s;if(r instanceof Dt){if(e.isAtEnd)return this._position=be._createAfter(r),this._next();s=r.data[e.offset]}else s=r.getChild(e.offset);if(s instanceof Ao){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new be(s,0);return this._position=e,this._formatReturnValue("elementStart",s,t,e,1)}if(s instanceof Dt){if(this.singleCharacters)return e=new be(s,0),this._position=e,this._next();let l,d=s.data.length;return s==this._boundaryEndParent?(d=this.boundaries.end.offset,l=new xr(s,0,d),e=be._createAfter(l)):(l=new xr(s,0,s.data.length),e.offset++),this._position=e,this._formatReturnValue("text",l,t,e,d)}if(typeof s=="string"){let l;this.singleCharacters?l=1:l=(r===this._boundaryEndParent?this.boundaries.end.offset:r.data.length)-e.offset;const d=new xr(r,e.offset,l);return e.offset+=l,this._position=e,this._formatReturnValue("text",d,t,e,l)}return e=be._createAfter(r),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",r,t,e)}_previous(){let e=this.position.clone();const t=this.position,r=e.parent;if(r.parent===null&&e.offset===0)return{done:!0,value:void 0};if(r==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let s;if(r instanceof Dt){if(e.isAtStart)return this._position=be._createBefore(r),this._previous();s=r.data[e.offset-1]}else s=r.getChild(e.offset-1);if(s instanceof Ao)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",s,t,e,1)):(e=new be(s,s.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",s,t,e));if(s instanceof Dt){if(this.singleCharacters)return e=new be(s,s.data.length),this._position=e,this._previous();let l,d=s.data.length;if(s==this._boundaryStartParent){const h=this.boundaries.start.offset;l=new xr(s,h,s.data.length-h),d=l.data.length,e=be._createBefore(l)}else l=new xr(s,0,s.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",l,t,e,d)}if(typeof s=="string"){let l;if(this.singleCharacters)l=1;else{const h=r===this._boundaryStartParent?this.boundaries.start.offset:0;l=e.offset-h}e.offset-=l;const d=new xr(r,e.offset,l);return this._position=e,this._formatReturnValue("text",d,t,e,l)}return e=be._createBefore(r),this._position=e,this._formatReturnValue("elementStart",r,t,e,1)}_formatReturnValue(e,t,r,s,l){return t instanceof xr&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?r=be._createAfter(t.textNode):(s=be._createAfter(t.textNode),this._position=s)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?r=be._createBefore(t.textNode):(s=be._createBefore(t.textNode),this._position=s))),{done:!1,value:{type:e,item:t,previousPosition:r,nextPosition:s,length:l}}}}class be extends Vs{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Ih);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=be._createAt(this),r=t.offset+e;return t.offset=r<0?0:r,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const r=new Hs(t);return r.skip(e),r.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),r=e.getAncestors();let s=0;for(;t[s]==r[s]&&t[s];)s++;return s===0?null:t[s-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],r=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),r.push(e.offset);const s=st(t,r);switch(s){case"prefix":return"before";case"extension":return"after";default:return t[s]<r[s]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Hs(e)}clone(){return new be(this.parent,this.offset)}static _createAt(e,t){if(e instanceof be)return new this(e.parent,e.offset);{const r=e;if(t=="end")t=r.is("$text")?r.data.length:r.childCount;else{if(t=="before")return this._createBefore(r);if(t=="after")return this._createAfter(r);if(t!==0&&!t)throw new M("view-createpositionat-offset-required",r)}return new be(r,t)}}static _createAfter(e){if(e.is("$textProxy"))return new be(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new M("view-position-after-root",e,{root:e});return new be(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new be(e.textNode,e.offsetInText);if(!e.parent)throw new M("view-position-before-root",e,{root:e});return new be(e.parent,e.index)}}be.prototype.is=function(i){return i==="position"||i==="view:position"};class Oe extends Vs{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Hs({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Mh,{direction:"backward"}),t=this.end.getLastMatchingPosition(Mh);return e.parent.is("$text")&&e.isAtStart&&(e=be._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=be._createAfter(t.parent)),new Oe(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Mh);if(e.isAfter(this.end)||e.isEqual(this.end))return new Oe(e,e);let t=this.end.getLastMatchingPosition(Mh,{direction:"backward"});const r=e.nodeAfter,s=t.nodeBefore;return r&&r.is("$text")&&(e=new be(r,0)),s&&s.is("$text")&&(t=new be(s,s.data.length)),new Oe(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const r=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),s=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return r&&s}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new Oe(this.start,e.start)),this.containsPosition(e.end)&&t.push(new Oe(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,r=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(r=e.end),new Oe(t,r)}return null}getWalker(e={}){return e.boundaries=this,new Hs(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new Oe(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Hs(e);for(const r of t)yield r.item}*getPositions(e={}){e.boundaries=this;const t=new Hs(e);yield t.position;for(const r of t)yield r.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,r,s){return new this(new be(e,t),new be(r,s))}static _createFromPositionAndShift(e,t){const r=e,s=e.getShiftedBy(t);return t>0?new this(r,s):new this(s,r)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(be._createBefore(e),t)}}function Mh(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}Oe.prototype.is=function(i){return i==="range"||i==="view:range"};class Sr extends re(Vs){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let r=!1;for(const s of e._ranges)if(t.isEqual(s)){r=!0;break}if(!r)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Pt(this.getRanges());if(t!=Pt(e.getRanges()))return!1;if(t==0)return!0;for(let r of this.getRanges()){r=r.getTrimmed();let s=!1;for(let l of e.getRanges())if(l=l.getTrimmed(),r.start.isEqual(l.start)&&r.end.isEqual(l.end)){s=!0;break}if(!s)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,r,s]=e;if(typeof r=="object"&&(s=r,r=void 0),t===null)this._setRanges([]),this._setFakeOptions(s);else if(t instanceof Sr||t instanceof Qm)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof Oe)this._setRanges([t],s&&s.backward),this._setFakeOptions(s);else if(t instanceof be)this._setRanges([new Oe(t)]),this._setFakeOptions(s);else if(t instanceof $s){const l=!!s&&!!s.backward;let d;if(r===void 0)throw new M("view-selection-setto-required-second-parameter",this);d=r=="in"?Oe._createIn(t):r=="on"?Oe._createOn(t):new Oe(be._createAt(t,r)),this._setRanges([d],l),this._setFakeOptions(s)}else{if(!je(t))throw new M("view-selection-setto-not-selectable",this);this._setRanges(t,s&&s.backward),this._setFakeOptions(s)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new M("view-selection-setfocus-no-ranges",this);const r=be._createAt(e,t);if(r.compareWith(this.focus)=="same")return;const s=this.anchor;this._ranges.pop(),r.compareWith(s)=="before"?this._addRange(new Oe(r,s),!0):this._addRange(new Oe(s,r)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const r of e)this._addRange(r);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof Oe))throw new M("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new M("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new Oe(e.start,e.end))}}Sr.prototype.is=function(i){return i==="selection"||i==="view:selection"};class Qm extends re(Vs){constructor(...e){super(),this._selection=new Sr,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Qm.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class sl extends D{constructor(e,t,r){super(e,t),this.startRange=r,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Zm=Symbol("bubbling contexts");function Jm(i){return class extends i{fire(e,...t){try{const r=e instanceof D?e:new D(this,e),s=Xm(this);if(!s.size)return;if(Yc(r,"capturing",this),al(s,"$capture",r,...t))return r.return;const l=r.startRange||this.selection.getFirstRange(),d=l?l.getContainedElement():null,h=!!d&&!!hy(s,d);let f=d||function(b){if(!b)return null;const w=b.start.parent,v=b.end.parent,x=w.getPath(),T=v.getPath();return x.length>T.length?w:v}(l);if(Yc(r,"atTarget",f),!h){if(al(s,"$text",r,...t))return r.return;Yc(r,"bubbling",f)}for(;f;){if(f.is("rootElement")){if(al(s,"$root",r,...t))return r.return}else if(f.is("element")&&al(s,f.name,r,...t))return r.return;if(al(s,f,r,...t))return r.return;f=f.parent,Yc(r,"bubbling",f)}return Yc(r,"bubbling",this),al(s,"$document",r,...t),r.return}catch(r){M.rethrowUnexpectedError(r,this)}}_addEventListener(e,t,r){const s=Sn(r.context||"$document"),l=Xm(this);for(const d of s){let h=l.get(d);h||(h=new(re()),l.set(d,h)),this.listenTo(h,e,t,r)}}_removeEventListener(e,t){const r=Xm(this);for(const s of r.values())this.stopListening(s,e,t)}}}{const i=Jm(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{Jm[e]=i.prototype[e]})}function Yc(i,e,t){i instanceof sl&&(i._eventPhase=e,i._currentTarget=t)}function al(i,e,t,...r){const s=typeof e=="string"?i.get(e):hy(i,e);return!!s&&(s.fire(t,...r),t.stop.called)}function hy(i,e){for(const[t,r]of i)if(typeof t=="function"&&t(e))return r;return null}function Xm(i){return i[Zm]||(i[Zm]=new Map),i[Zm]}class Ph extends Jm(ge()){constructor(e){super(),this._postFixers=new Set,this.selection=new Qm,this.roots=new sr({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const r of this._postFixers)if(t=r(e),t)break;while(t)}}class Ws extends Ao{constructor(e,t,r,s){super(e,t,r,s),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=l3}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new M("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function l3(){if(eb(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(eb(i)>1)return null;i=i.parent}return!i||eb(i)>1?null:this.childCount}function eb(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}Ws.DEFAULT_PRIORITY=10,Ws.prototype.is=function(i,e){return e?e===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class tb extends Ao{constructor(e,t,r,s){super(e,t,r,s),this.getFillerOffset=c3}_insertChild(e,t){if(t&&(t instanceof $s||Array.from(t).length>0))throw new M("view-emptyelement-cannot-add",[this,t]);return 0}}function c3(){return null}tb.prototype.is=function(i,e){return e?e===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Nh extends Ao{constructor(e,t,r,s){super(e,t,r,s),this.getFillerOffset=u3}_insertChild(e,t){if(t&&(t instanceof $s||Array.from(t).length>0))throw new M("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const r of this.getAttributeKeys())t.setAttribute(r,this.getAttribute(r));return t}}function d3(i){i.document.on("arrowKey",(e,t)=>function(r,s,l){if(s.keyCode==lt.arrowright){const d=s.domTarget.ownerDocument.defaultView.getSelection(),h=d.rangeCount==1&&d.getRangeAt(0).collapsed;if(h||s.shiftKey){const f=d.focusNode,b=d.focusOffset,w=l.domPositionToView(f,b);if(w===null)return;let v=!1;const x=w.getLastMatchingPosition(T=>(T.item.is("uiElement")&&(v=!0),!(!T.item.is("uiElement")&&!T.item.is("attributeElement"))));if(v){const T=l.viewPositionToDom(x);h?d.collapse(T.parent,T.offset):d.extend(T.parent,T.offset)}}}}(0,t,i.domConverter),{priority:"low"})}function u3(){return null}Nh.prototype.is=function(i,e){return e?e===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class nb extends Ao{constructor(e,t,r,s){super(e,t,r,s),this.getFillerOffset=h3}_insertChild(e,t){if(t&&(t instanceof $s||Array.from(t).length>0))throw new M("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function h3(){return null}nb.prototype.is=function(i,e){return e?e===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Gs extends re(Vs){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let r=0;const s=function(l,d){return typeof d=="string"?[new Dt(l,d)]:(je(d)||(d=[d]),Array.from(d).map(h=>typeof h=="string"?new Dt(l,h):h instanceof xr?new Dt(l,h.data):h))}(this.document,t);for(const l of s)l.parent!==null&&l._remove(),l.parent=this,this._children.splice(e,0,l),e++,r++;return r}_removeChildren(e,t=1){this._fireChange("children",this);for(let r=e;r<e+t;r++)this._children[r].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Gs.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};class py{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Gs(this.document,e)}createText(e){return new Dt(this.document,e)}createAttributeElement(e,t,r={}){const s=new Ws(this.document,e,t);return typeof r.priority=="number"&&(s._priority=r.priority),r.id&&(s._id=r.id),r.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...r.renderUnsafeAttributes),s}createContainerElement(e,t,r={},s={}){let l=null;xn(r)?s=r:l=r;const d=new Kc(this.document,e,t,l);return s.renderUnsafeAttributes&&d._unsafeAttributesToRender.push(...s.renderUnsafeAttributes),d}createEditableElement(e,t,r={}){const s=new Ih(this.document,e,t);return r.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...r.renderUnsafeAttributes),s}createEmptyElement(e,t,r={}){const s=new tb(this.document,e,t);return r.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...r.renderUnsafeAttributes),s}createUIElement(e,t,r){const s=new Nh(this.document,e,t);return r&&(s.render=r),s}createRawElement(e,t,r,s={}){const l=new nb(this.document,e,t);return r&&(l.render=r),s.renderUnsafeAttributes&&l._unsafeAttributesToRender.push(...s.renderUnsafeAttributes),l}setAttribute(e,t,r){r._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,r){xn(e)&&r===void 0?t._setStyle(e):r._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,r){r._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof be?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new M("view-writer-break-non-container-element",this.document);if(!t.parent)throw new M("view-writer-break-root",this.document);if(e.isAtStart)return be._createBefore(t);if(!e.isAtEnd){const r=t._clone(!1);this.insert(be._createAfter(t),r);const s=new Oe(e,be._createAt(t,"end")),l=new be(r,0);this.move(s,l)}return be._createAfter(t)}mergeAttributes(e){const t=e.offset,r=e.parent;if(r.is("$text"))return e;if(r.is("attributeElement")&&r.childCount===0){const d=r.parent,h=r.index;return r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new be(d,h))}const s=r.getChild(t-1),l=r.getChild(t);if(!s||!l)return e;if(s.is("$text")&&l.is("$text"))return gy(s,l);if(s.is("attributeElement")&&l.is("attributeElement")&&s.isSimilar(l)){const d=s.childCount;return s._appendChild(l.getChildren()),l._remove(),this._removeFromClonedElementsGroup(l),this.mergeAttributes(new be(s,d))}return e}mergeContainers(e){const t=e.nodeBefore,r=e.nodeAfter;if(!(t&&r&&t.is("containerElement")&&r.is("containerElement")))throw new M("view-writer-merge-containers-invalid-position",this.document);const s=t.getChild(t.childCount-1),l=s instanceof Dt?be._createAt(s,"end"):be._createAt(t,"end");return this.move(Oe._createIn(r),be._createAt(t,"end")),this.remove(Oe._createOn(r)),l}insert(e,t){my(t=je(t)?[...t]:[t],this.document);const r=t.reduce((d,h)=>{const f=d[d.length-1],b=!h.is("uiElement");return f&&f.breakAttributes==b?f.nodes.push(h):d.push({breakAttributes:b,nodes:[h]}),d},[]);let s=null,l=e;for(const{nodes:d,breakAttributes:h}of r){const f=this._insertNodes(l,d,h);s||(s=f.start),l=f.end}return s?new Oe(s,l):new Oe(e)}remove(e){const t=e instanceof Oe?e:Oe._createOn(e);if(Qc(t,this.document),t.isCollapsed)return new Gs(this.document);const{start:r,end:s}=this._breakAttributesRange(t,!0),l=r.parent,d=s.offset-r.offset,h=l._removeChildren(r.offset,d);for(const b of h)this._removeFromClonedElementsGroup(b);const f=this.mergeAttributes(r);return t.start=f,t.end=f.clone(),new Gs(this.document,h)}clear(e,t){Qc(e,this.document);const r=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const s of r){const l=s.item;let d;if(l.is("element")&&t.isSimilar(l))d=Oe._createOn(l);else if(!s.nextPosition.isAfter(e.start)&&l.is("$textProxy")){const h=l.getAncestors().find(f=>f.is("element")&&t.isSimilar(f));h&&(d=Oe._createIn(h))}d&&(d.end.isAfter(e.end)&&(d.end=e.end),d.start.isBefore(e.start)&&(d.start=e.start),this.remove(d))}}move(e,t){let r;if(t.isAfter(e.end)){const s=(t=this._breakAttributes(t,!0)).parent,l=s.childCount;e=this._breakAttributesRange(e,!0),r=this.remove(e),t.offset+=s.childCount-l}else r=this.remove(e);return this.insert(t,r)}wrap(e,t){if(!(t instanceof Ws))throw new M("view-writer-wrap-invalid-attribute",this.document);if(Qc(e,this.document),e.isCollapsed){let s=e.start;s.parent.is("element")&&(r=s.parent,!Array.from(r.getChildren()).some(d=>!d.is("uiElement")))&&(s=s.getLastMatchingPosition(d=>d.item.is("uiElement"))),s=this._wrapPosition(s,t);const l=this.document.selection;return l.isCollapsed&&l.getFirstPosition().isEqual(e.start)&&this.setSelection(s),new Oe(s)}return this._wrapRange(e,t);var r}unwrap(e,t){if(!(t instanceof Ws))throw new M("view-writer-unwrap-invalid-attribute",this.document);if(Qc(e,this.document),e.isCollapsed)return e;const{start:r,end:s}=this._breakAttributesRange(e,!0),l=r.parent,d=this._unwrapChildren(l,r.offset,s.offset,t),h=this.mergeAttributes(d.start);h.isEqual(d.start)||d.end.offset--;const f=this.mergeAttributes(d.end);return new Oe(h,f)}rename(e,t){const r=new Kc(this.document,e,t.getAttributes());return this.insert(be._createAfter(t),r),this.move(Oe._createIn(t),be._createAt(r,0)),this.remove(Oe._createOn(t)),r}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return be._createAt(e,t)}createPositionAfter(e){return be._createAfter(e)}createPositionBefore(e){return be._createBefore(e)}createRange(e,t){return new Oe(e,t)}createRangeOn(e){return Oe._createOn(e)}createRangeIn(e){return Oe._createIn(e)}createSelection(...e){return new Sr(...e)}createSlot(e="children"){if(!this._slotFactory)throw new M("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,r){let s,l;if(s=r?ob(e):e.parent.is("$text")?e.parent.parent:e.parent,!s)throw new M("view-writer-invalid-position-container",this.document);l=r?this._breakAttributes(e,!0):e.parent.is("$text")?rb(e):e;const d=s._insertChild(l.offset,t);for(const w of t)this._addToClonedElementsGroup(w);const h=l.getShiftedBy(d),f=this.mergeAttributes(l);f.isEqual(l)||h.offset--;const b=this.mergeAttributes(h);return new Oe(f,b)}_wrapChildren(e,t,r,s){let l=t;const d=[];for(;l<r;){const f=e.getChild(l),b=f.is("$text"),w=f.is("attributeElement");if(w&&this._wrapAttributeElement(s,f))d.push(new be(e,l));else if(b||!w||p3(s,f)){const v=s._clone();f._remove(),v._appendChild(f),e._insertChild(l,v),this._addToClonedElementsGroup(v),d.push(new be(e,l))}else this._wrapChildren(f,0,f.childCount,s);l++}let h=0;for(const f of d)f.offset-=h,f.offset!=t&&(this.mergeAttributes(f).isEqual(f)||(h++,r--));return Oe._createFromParentsAndOffsets(e,t,e,r)}_unwrapChildren(e,t,r,s){let l=t;const d=[];for(;l<r;){const f=e.getChild(l);if(f.is("attributeElement"))if(f.isSimilar(s)){const b=f.getChildren(),w=f.childCount;f._remove(),e._insertChild(l,b),this._removeFromClonedElementsGroup(f),d.push(new be(e,l),new be(e,l+w)),l+=w,r+=w-1}else this._unwrapAttributeElement(s,f)?(d.push(new be(e,l),new be(e,l+1)),l++):(this._unwrapChildren(f,0,f.childCount,s),l++);else l++}let h=0;for(const f of d)f.offset-=h,!(f.offset==t||f.offset==r)&&(this.mergeAttributes(f).isEqual(f)||(h++,r--));return Oe._createFromParentsAndOffsets(e,t,e,r)}_wrapRange(e,t){const{start:r,end:s}=this._breakAttributesRange(e,!0),l=r.parent,d=this._wrapChildren(l,r.offset,s.offset,t),h=this.mergeAttributes(d.start);h.isEqual(d.start)||d.end.offset--;const f=this.mergeAttributes(d.end);return new Oe(h,f)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return fy(e.clone());e.parent.is("$text")&&(e=rb(e));const r=this.createAttributeElement("_wrapPosition-fake-element");r._priority=Number.POSITIVE_INFINITY,r.isSimilar=()=>!1,e.parent._insertChild(e.offset,r);const s=new Oe(e,e.getShiftedBy(1));this.wrap(s,t);const l=new be(r.parent,r.index);r._remove();const d=l.nodeBefore,h=l.nodeAfter;return d instanceof Dt&&h instanceof Dt?gy(d,h):fy(l)}_wrapAttributeElement(e,t){if(!by(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const r of e.getAttributeKeys())if(r!=="class"&&r!=="style"&&t.hasAttribute(r)&&t.getAttribute(r)!==e.getAttribute(r))return!1;for(const r of e.getStyleNames())if(t.hasStyle(r)&&t.getStyle(r)!==e.getStyle(r))return!1;for(const r of e.getAttributeKeys())r!=="class"&&r!=="style"&&(t.hasAttribute(r)||this.setAttribute(r,e.getAttribute(r),t));for(const r of e.getStyleNames())t.hasStyle(r)||this.setStyle(r,e.getStyle(r),t);for(const r of e.getClassNames())t.hasClass(r)||this.addClass(r,t);return!0}_unwrapAttributeElement(e,t){if(!by(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const r of e.getAttributeKeys())if(r!=="class"&&r!=="style"&&(!t.hasAttribute(r)||t.getAttribute(r)!==e.getAttribute(r)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const r of e.getStyleNames())if(!t.hasStyle(r)||t.getStyle(r)!==e.getStyle(r))return!1;for(const r of e.getAttributeKeys())r!=="class"&&r!=="style"&&this.removeAttribute(r,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const r=e.start,s=e.end;if(Qc(e,this.document),e.isCollapsed){const f=this._breakAttributes(e.start,t);return new Oe(f,f)}const l=this._breakAttributes(s,t),d=l.parent.childCount,h=this._breakAttributes(r,t);return l.offset+=l.parent.childCount-d,new Oe(h,l)}_breakAttributes(e,t=!1){const r=e.offset,s=e.parent;if(e.parent.is("emptyElement"))throw new M("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new M("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new M("view-writer-cannot-break-raw-element",this.document);if(!t&&s.is("$text")&&ib(s.parent)||ib(s))return e.clone();if(s.is("$text"))return this._breakAttributes(rb(e),t);if(r==s.childCount){const l=new be(s.parent,s.index+1);return this._breakAttributes(l,t)}if(r===0){const l=new be(s.parent,s.index);return this._breakAttributes(l,t)}{const l=s.index+1,d=s._clone();s.parent._insertChild(l,d),this._addToClonedElementsGroup(d);const h=s.childCount-r,f=s._removeChildren(r,h);d._appendChild(f);const b=new be(s.parent,l);return this._breakAttributes(b,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const s of e.getChildren())this._addToClonedElementsGroup(s);const t=e.id;if(!t)return;let r=this._cloneGroups.get(t);r||(r=new Set,this._cloneGroups.set(t,r)),r.add(e),e._clonesGroup=r}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const s of e.getChildren())this._removeFromClonedElementsGroup(s);const t=e.id;if(!t)return;const r=this._cloneGroups.get(t);r&&r.delete(e)}}function ob(i){let e=i.parent;for(;!ib(e);){if(!e)return;e=e.parent}return e}function p3(i,e){return i.priority<e.priority||!(i.priority>e.priority)&&i.getIdentity()<e.getIdentity()}function fy(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new be(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new be(t,0):i}function rb(i){if(i.offset==i.parent.data.length)return new be(i.parent.parent,i.parent.index+1);if(i.offset===0)return new be(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new Dt(i.root.document,e)),new be(i.parent.parent,i.parent.index+1)}function gy(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new be(i,t)}const f3=[Dt,Ws,Kc,tb,nb,Nh];function my(i,e){for(const t of i){if(!f3.some(r=>t instanceof r))throw new M("view-writer-insert-invalid-node-type",e);t.is("$text")||my(t.getChildren(),e)}}function ib(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function Qc(i,e){const t=ob(i.start),r=ob(i.end);if(!t||!r||t!==r)throw new M("view-writer-invalid-range-container",e)}function by(i,e){return i.id===null&&e.id===null}const ky=i=>i.createTextNode(" "),wy=i=>{const e=i.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},vy=i=>{const e=i.createElement("br");return e.dataset.ckeFiller="true",e},Dr=7,Bh="⁠".repeat(Dr);function _o(i){return Jt(i)&&i.data.substr(0,Dr)===Bh}function Zc(i){return i.data.length==Dr&&_o(i)}function Cy(i){return _o(i)?i.data.slice(Dr):i.data}function g3(i,e){if(e.keyCode==lt.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const r=t.getRangeAt(0).startContainer,s=t.getRangeAt(0).startOffset;_o(r)&&s<=Dr&&t.collapse(r,0)}}}var yy=u(9315),m3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(yy.Z,m3),yy.Z.locals;class b3 extends ge(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),m.isBlink&&!m.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new M("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!m.isAndroid)return;let e=null;const t=!(m.isBlink&&!m.isAndroid)||!this.isSelecting;for(const r of this.markedChildren)this._updateChildrenMappings(r);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=be._createBefore(e.parent)));for(const r of this.markedAttributes)this._updateAttrs(r);for(const r of this.markedChildren)this._updateChildren(r,{inlineFillerPosition:e});for(const r of this.markedTexts)!this.markedChildren.has(r.parent)&&this.domConverter.mapViewToDom(r.parent)&&this._updateText(r,{inlineFillerPosition:e});if(t)if(e){const r=this.domConverter.viewPositionToDom(e),s=r.parent.ownerDocument;_o(r.parent)?this._inlineFiller=r.parent:this._inlineFiller=Ay(s,r.parent,r.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),r=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),s=this._diffNodeLists(t,r),l=this._findUpdateActions(s,t,r,k3);if(l.indexOf("update")!==-1){const d={equal:0,insert:0,delete:0};for(const h of l)if(h==="update"){const f=d.equal+d.insert,b=d.equal+d.delete,w=e.getChild(f);!w||w.is("uiElement")||w.is("rawElement")||this._updateElementMappings(w,t[b]),OC(r[f]),d.equal++}else d[h]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?be._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Jt(t.parent)&&_o(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!_o(e))throw new M("view-renderer-filler-was-lost",this);Zc(e)?e.remove():e.data=e.data.substr(Dr),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,r=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(d){if(d.getAttribute("contenteditable")=="false")return!1;const h=d.findAncestor(f=>f.hasAttribute("contenteditable"));return!h||h.getAttribute("contenteditable")=="true"}(t)||r===t.getFillerOffset())return!1;const s=e.nodeBefore,l=e.nodeAfter;return!(s instanceof Dt||l instanceof Dt)&&(!m.isAndroid||!s&&!l)}_updateText(e,t){const r=this.domConverter.findCorrespondingDomText(e);let s=this.domConverter.viewToDom(e).data;const l=t.inlineFillerPosition;l&&l.parent==e.parent&&l.offset==e.index&&(s=Bh+s),_y(r,s)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const r=Array.from(t.attributes).map(l=>l.name),s=e.getAttributeKeys();for(const l of s)this.domConverter.setDomElementAttribute(t,l,e.getAttribute(l),e);for(const l of r)e.hasAttribute(l)||this.domConverter.removeDomElementAttribute(t,l)}_updateChildren(e,t){const r=this.domConverter.mapViewToDom(e);if(!r)return;if(m.isAndroid){let v=null;for(const x of Array.from(r.childNodes)){if(v&&Jt(v)&&Jt(x)){r.normalize();break}v=x}}const s=t.inlineFillerPosition,l=r.childNodes,d=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));s&&s.parent===e&&Ay(r.ownerDocument,d,s.offset);const h=this._diffNodeLists(l,d),f=this._findUpdateActions(h,l,d,w3);let b=0;const w=new Set;for(const v of f)v==="delete"?(w.add(l[b]),OC(l[b])):v!=="equal"&&v!=="update"||b++;b=0;for(const v of f)v==="insert"?(PC(r,b,d[b]),b++):v==="update"?(_y(l[b],d[b].data),b++):v==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(d[b])),b++);for(const v of w)v.parentNode||this.domConverter.unbindDomElement(v)}_diffNodeLists(e,t){return e=function(r,s){const l=Array.from(r);return l.length==0||!s||l[l.length-1]==s&&l.pop(),l}(e,this._fakeSelectionContainer),E(e,t,v3.bind(null,this.domConverter))}_findUpdateActions(e,t,r,s){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let l=[],d=[],h=[];const f={equal:0,insert:0,delete:0};for(const b of e)b==="insert"?h.push(r[f.equal+f.insert]):b==="delete"?d.push(t[f.equal+f.delete]):(l=l.concat(E(d,h,s).map(w=>w==="equal"?"update":w)),l.push("equal"),d=[],h=[]),f[b]++;return l.concat(E(d,h,s).map(b=>b==="equal"?"update":b))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(m.isBlink&&!m.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&m.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(d){const h=d.createElement("div");return h.className="ck-fake-selection-container",Object.assign(h.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),h.textContent=" ",h}(t));const r=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(r,this.selection),!this._fakeSelectionNeedsUpdate(e))return;r.parentElement&&r.parentElement==e||e.appendChild(r),r.textContent=this.selection.fakeSelectionLabel||" ";const s=t.getSelection(),l=t.createRange();s.removeAllRanges(),l.selectNodeContents(r),s.addRange(l)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const r=this.domConverter.viewPositionToDom(this.selection.anchor),s=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(r.parent,r.offset),t.extend(s.parent,s.offset),m.isGecko&&function(l,d){const h=l.parent;if(h.nodeType!=Node.ELEMENT_NODE||l.offset!=h.childNodes.length-1)return;const f=h.childNodes[l.offset];f&&f.tagName=="BR"&&d.addRange(d.getRangeAt(0))}(s,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,r=e.ownerDocument.getSelection();return!t||t.parentElement!==e||r.anchorNode!==t&&!t.contains(r.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const r=e.activeElement,s=this.domConverter.mapDomToView(r);r&&s&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Ay(i,e,t){const r=e instanceof Array?e:e.childNodes,s=r[t];if(Jt(s))return s.data=Bh+s.data,s;{const l=i.createTextNode(Bh);return Array.isArray(e)?r.splice(t,0,l):PC(e,t,l),l}}function k3(i,e){return Hn(i)&&Hn(e)&&!Jt(i)&&!Jt(e)&&!rl(i)&&!rl(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function w3(i,e){return Hn(i)&&Hn(e)&&Jt(i)&&Jt(e)}function v3(i,e,t){return e===t||(Jt(e)&&Jt(t)?e.data===t.data:!(!i.isBlockFiller(e)||!i.isBlockFiller(t)))}function _y(i,e){const t=i.data;if(t==e)return;const r=A(t,e);for(const s of r)s.type==="insert"?i.insertData(s.index,s.values.join("")):i.deleteData(s.index,s.howMany)}const C3=vy(Je.document),y3=ky(Je.document),A3=wy(Je.document),Rh="data-ck-unsafe-attribute-",xy="data-ck-unsafe-element";class Oh{constructor(e,{blockFillerMode:t,renderingMode:r="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Er,this._encounteredRawContentDomNodes=new WeakSet,this.document=e,this.renderingMode=r,this.blockFillerMode=t||(r==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Je.document:Je.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Sr(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const r of Array.from(e.children))this.unbindDomElement(r)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,r){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(r==="img"&&(e==="src"||e==="srcset")||r==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const r=new DOMParser().parseFromString(t,"text/html"),s=r.createDocumentFragment(),l=r.body.childNodes;for(;l.length>0;)s.appendChild(l[0]);const d=r.createTreeWalker(s,NodeFilter.SHOW_ELEMENT),h=[];let f;for(;f=d.nextNode();)h.push(f);for(const b of h){for(const v of b.getAttributeNames())this.setDomElementAttribute(b,v,b.getAttribute(v));const w=b.tagName.toLowerCase();this._shouldRenameElement(w)&&(Dy(w),b.replaceWith(this._createReplacementDomElement(w,b)))}for(;e.firstChild;)e.firstChild.remove();e.append(s)}viewToDom(e,t={}){if(e.is("$text")){const r=this._processDataFromViewText(e);return this._domDocument.createTextNode(r)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let r;if(e.is("documentFragment"))r=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(r,e);else{if(e.is("uiElement"))return r=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(r,e),r;this._shouldRenameElement(e.name)?(Dy(e.name),r=this._createReplacementDomElement(e.name)):r=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(r,this),t.bind&&this.bindElements(r,e);for(const s of e.getAttributeKeys())this.setDomElementAttribute(r,s,e.getAttribute(s),e)}if(t.withChildren!==!1)for(const s of this.viewChildrenToDom(e,t))r.appendChild(s);return r}}setDomElementAttribute(e,t,r,s){const l=this.shouldRenderAttribute(t,r,e.tagName.toLowerCase())||s&&s.shouldRenderUnsafeAttribute(t);l||W("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:r}),function(d){try{Je.document.createAttribute(d)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!l?e.removeAttribute(t):e.hasAttribute(Rh+t)&&l&&e.removeAttribute(Rh+t),e.setAttribute(l?t:Rh+t,r)):W("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:r})}removeDomElementAttribute(e,t){t!=xy&&(e.removeAttribute(t),e.removeAttribute(Rh+t))}*viewChildrenToDom(e,t={}){const r=e.getFillerOffset&&e.getFillerOffset();let s=0;for(const l of e.getChildren()){r===s&&(yield this._getBlockFiller());const d=l.is("element")&&!!l.getCustomProperty("dataPipeline:transparentRendering")&&!pn(l.getAttributes());d&&this.renderingMode=="data"?yield*this.viewChildrenToDom(l,t):(d&&W("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:l}),yield this.viewToDom(l,t)),s++}r===s&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),r=this.viewPositionToDom(e.end),s=this._domDocument.createRange();return s.setStart(t.parent,t.offset),s.setEnd(r.parent,r.offset),s}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const r=this.findCorrespondingDomText(t);if(!r)return null;let s=e.offset;return _o(r)&&(s+=Dr),{parent:r,offset:s}}{let r,s,l;if(e.offset===0){if(r=this.mapViewToDom(t),!r)return null;l=r.childNodes[0]}else{const d=e.nodeBefore;if(s=d.is("$text")?this.findCorrespondingDomText(d):this.mapViewToDom(d),!s)return null;r=s.parentNode,l=s.nextSibling}return Jt(l)&&_o(l)?{parent:l,offset:Dr}:{parent:r,offset:s?_h(s)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const r=this.getHostViewElement(e);if(r)return r;if(rl(e)&&t.skipComments)return null;if(Jt(e)){if(Zc(e))return null;{const s=this._processDataFromDomText(e);return s===""?null:new Dt(this.document,s)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let s;if(this.isDocumentFragment(e))s=new Gs(this.document),t.bind&&this.bindDocumentFragments(e,s);else{s=this._createViewElement(e,t),t.bind&&this.bindElements(e,s);const l=e.attributes;if(l)for(let d=l.length,h=0;h<d;h++)s._setAttribute(l[h].name,l[h].value);if(this._isViewElementWithRawContent(s,t)||rl(e)){const d=rl(e)?e.data:e.innerHTML;return s._setCustomProperty("$rawContent",d),this._encounteredRawContentDomNodes.add(e),s}}if(t.withChildren!==!1)for(const l of this.domChildrenToView(e,t))s._appendChild(l);return s}}*domChildrenToView(e,t){for(let r=0;r<e.childNodes.length;r++){const s=e.childNodes[r],l=this.domToView(s,t);l!==null&&(yield l)}}domSelectionToView(e){if(e.rangeCount===1){let s=e.getRangeAt(0).startContainer;Jt(s)&&(s=s.parentNode);const l=this.fakeSelectionToView(s);if(l)return l}const t=this.isDomSelectionBackward(e),r=[];for(let s=0;s<e.rangeCount;s++){const l=e.getRangeAt(s),d=this.domRangeToView(l);d&&r.push(d)}return new Sr(r,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),r=this.domPositionToView(e.endContainer,e.endOffset);return t&&r?new Oe(t,r):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,_h(e));const r=this.mapDomToView(e);if(r&&(r.is("uiElement")||r.is("rawElement")))return be._createBefore(r);if(Jt(e)){if(Zc(e))return this.domPositionToView(e.parentNode,_h(e));const s=this.findCorrespondingViewText(e);let l=t;return s?(_o(e)&&(l-=Dr,l=l<0?0:l),new be(s,l)):null}if(t===0){const s=this.mapDomToView(e);if(s)return new be(s,0)}else{const s=e.childNodes[t-1];if(Jt(s)&&Zc(s)||s&&this.isBlockFiller(s))return this.domPositionToView(s.parentNode,_h(s));const l=Jt(s)?this.findCorrespondingViewText(s):this.mapDomToView(s);if(l&&l.parent)return new be(l.parent,l.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Zc(e))return null;const t=this.getHostViewElement(e);if(t)return t;const r=e.previousSibling;if(r){if(!this.isElement(r))return null;const s=this.mapDomToView(r);if(s){const l=s.nextSibling;return l instanceof Dt?l:null}}else{const s=this.mapDomToView(e.parentNode);if(s){const l=s.getChild(0);return l instanceof Dt?l:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:r,scrollY:s}=Je.window,l=[];Ey(t,d=>{const{scrollLeft:h,scrollTop:f}=d;l.push([h,f])}),t.focus(),Ey(t,d=>{const[h,f]=l.shift();d.scrollLeft=h,d.scrollTop=f}),Je.window.scrollTo(r,s)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(C3):!(e.tagName!=="BR"||!Sy(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(A3)||function(t,r){return t.isEqualNode(y3)&&Sy(t,r)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const r=t.collapsed;return t.detach(),r}getHostViewElement(e){const t=EC(e);for(t.pop();t.length;){const r=t.pop(),s=this._domToViewMapping.get(r);if(s&&(s.is("uiElement")||s.is("rawElement")))return s}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return ky(this._domDocument);case"markedNbsp":return wy(this._domDocument);case"br":return vy(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Jt(e)&&_o(e)&&t<Dr||this.isElement(e)&&_o(e.childNodes[t]))return!1;const r=this.mapDomToView(e);return!r||!r.is("uiElement")&&!r.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(r=>this.preElements.includes(r.name)))return t;if(t.charAt(0)==" "){const r=this._getTouchingInlineViewNode(e,!1);!(r&&r.is("$textProxy")&&this._nodeEndsWithSpace(r))&&r||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const r=this._getTouchingInlineViewNode(e,!0),s=r&&r.is("$textProxy")&&r.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&r&&!s||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(r=>this.preElements.includes(r.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(b,w){return EC(b).some(x=>x.tagName&&w.includes(x.tagName.toLowerCase()))}(e,this.preElements))return Cy(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const r=this._getTouchingInlineDomNode(e,!1),s=this._getTouchingInlineDomNode(e,!0),l=this._checkShouldLeftTrimDomText(e,r),d=this._checkShouldRightTrimDomText(e,s);l&&(t=t.replace(/^ /,"")),d&&(t=t.replace(/ $/,"")),t=Cy(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const h=s&&this.isElement(s)&&s.tagName!="BR",f=s&&Jt(s)&&s.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!s||h||f)&&(t=t.replace(/\u00A0$/," ")),(l||r&&this.isElement(r)&&r.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!_o(e)}_getTouchingInlineViewNode(e,t){const r=new Hs({startPosition:t?be._createAfter(e):be._createBefore(e),direction:t?"forward":"backward"});for(const s of r){if(s.item.is("element")&&this.inlineObjectElements.includes(s.item.name))return s.item;if(s.item.is("containerElement")||s.item.is("element","br"))return null;if(s.item.is("$textProxy"))return s.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const r=t?"firstChild":"lastChild",s=t?"nextSibling":"previousSibling";let l=!0,d=e;do if(!l&&d[r]?d=d[r]:d[s]?(d=d[s],l=!1):(d=d.parentNode,l=!0),!d||this._isBlockElement(d))return null;while(!Jt(d)&&d.tagName!="BR"&&!this._isInlineObjectElement(d));return d}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(rl(e))return new Nh(this.document,"$comment");const r=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Ao(this.document,r)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const r=this._domDocument.createElement("span");if(r.setAttribute(xy,e),t){for(;t.firstChild;)r.appendChild(t.firstChild);for(const s of t.getAttributeNames())r.setAttribute(s,t.getAttribute(s))}return r}}function Ey(i,e){let t=i;for(;t;)e(t),t=t.parentElement}function Sy(i,e){const t=i.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Dy(i){i==="script"&&W("domconverter-unsafe-script-element-detected"),i==="style"&&W("domconverter-unsafe-style-element-detected")}class Tr extends zi(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Ty=sy(function(i,e){Ni(e,Ri(e),i)});class ll{constructor(e,t,r){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Ty(this,r)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Li extends Tr{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(r,s)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(s.target)&&this.onDomEvent(s)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,r){this.isEnabled&&this.document.fire(e,new ll(this.view,t,r))}}class _3 extends Li{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return il(this)}};this.fire(e.type,e,t)}}const sb=function(){return Le.Date.now()};var x3=/\s/;const E3=function(i){for(var e=i.length;e--&&x3.test(i.charAt(e)););return e};var S3=/^\s+/;const D3=function(i){return i&&i.slice(0,E3(i)+1).replace(S3,"")};var T3=/^[-+]0x[0-9a-f]+$/i,I3=/^0b[01]+$/i,M3=/^0o[0-7]+$/i,P3=parseInt;const Iy=function(i){if(typeof i=="number")return i;if(Dh(i))return NaN;if(we(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=we(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=D3(i);var t=I3.test(i);return t||M3.test(i)?P3(i.slice(2),t?2:8):T3.test(i)?NaN:+i};var N3=Math.max,B3=Math.min;const cl=function(i,e,t){var r,s,l,d,h,f,b=0,w=!1,v=!1,x=!0;if(typeof i!="function")throw new TypeError("Expected a function");function T(Q){var ne=r,ke=s;return r=s=void 0,b=Q,d=i.apply(ke,ne)}function N(Q){var ne=Q-f;return f===void 0||ne>=e||ne<0||v&&Q-b>=l}function O(){var Q=sb();if(N(Q))return $(Q);h=setTimeout(O,function(ne){var ke=e-(ne-f);return v?B3(ke,l-(ne-b)):ke}(Q))}function $(Q){return h=void 0,x&&r?T(Q):(r=s=void 0,d)}function G(){var Q=sb(),ne=N(Q);if(r=arguments,s=this,f=Q,ne){if(h===void 0)return function(ke){return b=ke,h=setTimeout(O,e),w?T(ke):d}(f);if(v)return clearTimeout(h),h=setTimeout(O,e),T(f)}return h===void 0&&(h=setTimeout(O,e)),d}return e=Iy(e)||0,we(t)&&(w=!!t.leading,l=(v="maxWait"in t)?N3(Iy(t.maxWait)||0,e):l,x="trailing"in t?!!t.trailing:x),G.cancel=function(){h!==void 0&&clearTimeout(h),b=0,r=f=s=h=void 0},G.flush=function(){return h===void 0?d:$(sb())},G};class R3 extends Tr{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=cl(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,r)=>{e.selection.isFake&&this.isEnabled&&r.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,r)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(r.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,r=new Sr(t.getRanges(),{backward:t.isBackward,fake:!1});e!=lt.arrowleft&&e!=lt.arrowup||r.setTo(r.getFirstPosition()),e!=lt.arrowright&&e!=lt.arrowdown||r.setTo(r.getLastPosition());const s={oldSelection:t,newSelection:r,domSelection:null};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}const O3=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},z3=function(i){return this.__data__.has(i)};function zh(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new Ua;++e<t;)this.add(i[e])}zh.prototype.add=zh.prototype.push=O3,zh.prototype.has=z3;const L3=zh,j3=function(i,e){for(var t=-1,r=i==null?0:i.length;++t<r;)if(e(i[t],t,i))return!0;return!1},F3=function(i,e){return i.has(e)},My=function(i,e,t,r,s,l){var d=1&t,h=i.length,f=e.length;if(h!=f&&!(d&&f>h))return!1;var b=l.get(i),w=l.get(e);if(b&&w)return b==e&&w==i;var v=-1,x=!0,T=2&t?new L3:void 0;for(l.set(i,e),l.set(e,i);++v<h;){var N=i[v],O=e[v];if(r)var $=d?r(O,N,v,e,i,l):r(N,O,v,i,e,l);if($!==void 0){if($)continue;x=!1;break}if(T){if(!j3(e,function(G,Q){if(!F3(T,Q)&&(N===G||s(N,G,t,r,l)))return T.push(Q)})){x=!1;break}}else if(N!==O&&!s(N,O,t,r,l)){x=!1;break}}return l.delete(i),l.delete(e),x},V3=function(i){var e=-1,t=Array(i.size);return i.forEach(function(r,s){t[++e]=[s,r]}),t},$3=function(i){var e=-1,t=Array(i.size);return i.forEach(function(r){t[++e]=r}),t};var Py=ft?ft.prototype:void 0,ab=Py?Py.valueOf:void 0;const U3=function(i,e,t,r,s,l,d){switch(t){case"[object DataView]":if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=e.byteLength||!l(new Cr(i),new Cr(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ei(+i,+e);case"[object Error]":return i.name==e.name&&i.message==e.message;case"[object RegExp]":case"[object String]":return i==e+"";case"[object Map]":var h=V3;case"[object Set]":var f=1&r;if(h||(h=$3),i.size!=e.size&&!f)return!1;var b=d.get(i);if(b)return b==e;r|=2,d.set(i,e);var w=My(h(i),h(e),r,s,l,d);return d.delete(i),w;case"[object Symbol]":if(ab)return ab.call(i)==ab.call(e)}return!1};var H3=Object.prototype.hasOwnProperty;const W3=function(i,e,t,r,s,l){var d=1&t,h=Fc(i),f=h.length;if(f!=Fc(e).length&&!d)return!1;for(var b=f;b--;){var w=h[b];if(!(d?w in e:H3.call(e,w)))return!1}var v=l.get(i),x=l.get(e);if(v&&x)return v==e&&x==i;var T=!0;l.set(i,e),l.set(e,i);for(var N=d;++b<f;){var O=i[w=h[b]],$=e[w];if(r)var G=d?r($,O,w,e,i,l):r(O,$,w,i,e,l);if(!(G===void 0?O===$||s(O,$,t,r,l):G)){T=!1;break}N||(N=w=="constructor")}if(T&&!N){var Q=i.constructor,ne=e.constructor;Q==ne||!("constructor"in i)||!("constructor"in e)||typeof Q=="function"&&Q instanceof Q&&typeof ne=="function"&&ne instanceof ne||(T=!1)}return l.delete(i),l.delete(e),T};var Ny="[object Arguments]",By="[object Array]",Lh="[object Object]",Ry=Object.prototype.hasOwnProperty;const G3=function(i,e,t,r,s,l){var d=zt(i),h=zt(e),f=d?By:Ls(i),b=h?By:Ls(e),w=(f=f==Ny?Lh:f)==Lh,v=(b=b==Ny?Lh:b)==Lh,x=f==b;if(x&&Rs(i)){if(!Rs(e))return!1;d=!0,w=!1}if(x&&!w)return l||(l=new Bs),d||Nc(i)?My(i,e,t,r,s,l):U3(i,e,f,t,r,s,l);if(!(1&t)){var T=w&&Ry.call(i,"__wrapped__"),N=v&&Ry.call(e,"__wrapped__");if(T||N){var O=T?i.value():i,$=N?e.value():e;return l||(l=new Bs),s(O,$,t,r,l)}}return!!x&&(l||(l=new Bs),W3(i,e,t,r,s,l))},Oy=function i(e,t,r,s,l){return e===t||(e==null||t==null||!_n(e)&&!_n(t)?e!=e&&t!=t:G3(e,t,r,s,i,l))},q3=function(i,e,t){var r=(t=typeof t=="function"?t:void 0)?t(i,e):void 0;return r===void 0?Oy(i,e,void 0,t):!!r};class zy extends Tr{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,r=new Set,s=new Set;for(const d of e){const h=t.mapDomToView(d.target);h&&(h.is("uiElement")||h.is("rawElement")||d.type!=="childList"||this._isBogusBrMutation(d)||s.add(h))}for(const d of e){const h=t.mapDomToView(d.target);if((!h||!h.is("uiElement")&&!h.is("rawElement"))&&d.type==="characterData"){const f=t.findCorrespondingViewText(d.target);f&&!s.has(f.parent)?r.add(f):!f&&_o(d.target)&&s.add(t.mapDomToView(d.target.parentNode))}}let l=!1;for(const d of r)l=!0,this.renderer.markToSync("text",d);for(const d of s){const h=t.mapViewToDom(d),f=Array.from(d.getChildren()),b=Array.from(t.domChildrenToView(h,{withChildren:!1}));q3(f,b,K3)||(l=!0,this.renderer.markToSync("children",d))}l&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function K3(i,e){if(!Array.isArray(i))return i===e||!(!i.is("$text")||!e.is("$text"))&&i.data===e.data}class lb extends Li{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(r,s)=>{const l=t.selection.editableElement;l!==null&&l!==s.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class Y3 extends Tr{constructor(e){super(e),this.mutationObserver=e.getObserver(zy),this.focusObserver=e.getObserver(lb),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=cl(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=cl(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,r=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",r,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",r,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",r,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(s,l)=>{this.document.isComposing&&!m.isAndroid||(this._handleSelectionChange(l,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const r=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(r.anchorNode))return;this.mutationObserver.flush();const s=this.domConverter.domSelectionToView(r);if(s.rangeCount!=0){if(this.view.hasDomSelection=!0,!this.selection.isEqual(s)||!this.domConverter.isDomSelectionCorrect(r))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.focusObserver.flush(),this.selection.isSimilar(s))this.view.forceRender();else{const l={oldSelection:this.selection,newSelection:s,domSelection:r};this.document.fire("selectionChange",l),this._fireSelectionChangeDoneDebounced(l)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class Q3 extends Li{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class Ly{constructor(e,t={}){this._files=t.cacheFiles?jy(e):null,this._native=e}get files(){return this._files||(this._files=jy(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,r){this._native.setDragImage(e,t,r)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function jy(i){const e=Array.from(i.files||[]),t=Array.from(i.items||[]);return e.length?e:t.filter(r=>r.kind==="file").map(r=>r.getAsFile())}class Z3 extends Li{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),r=this.view,s=r.document;let l=null,d=null,h=[];if(e.dataTransfer&&(l=new Ly(e.dataTransfer)),e.data!==null?d=e.data:l&&(d=l.getData("text/plain")),s.selection.isFake)h=Array.from(s.selection.getRanges());else if(t.length)h=t.map(f=>{const b=r.domConverter.domPositionToView(f.startContainer,f.startOffset),w=r.domConverter.domPositionToView(f.endContainer,f.endOffset);return b?r.createRange(b,w):w?r.createRange(w):void 0}).filter(f=>!!f);else if(m.isAndroid){const f=e.target.ownerDocument.defaultView.getSelection();h=Array.from(r.domConverter.domSelectionToView(f).getRanges())}if(m.isAndroid&&e.inputType=="insertCompositionText"&&d&&d.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[r.createRange(h[0].end)]});else if(e.inputType=="insertText"&&d&&d.includes(`
`,isColorInherited:!1}),r.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],r],on:{dragstart:s.to(l=>l.preventDefault())}}]})}}function Q1(i,e,t){return(r,s)=>{const l=r.getVisible();if(!l||r.width<PR||r.height<MR)return Zh;let d;d=e.position==="inside"?r.bottom-s.height:r.bottom-s.height/2,d-=e.verticalOffset;const h=t(r,s);if(e.position==="inside"){const f=s.clone().moveTo(h,d);if(f.getIntersectionArea(l)<f.getArea())return Zh}else{const f=function(b){let w=b.parentElement;if(!w)return null;for(;w.tagName!="BODY";){const v=w.style.overflowY||Je.window.getComputedStyle(w).overflowY;if(v==="auto"||v==="scroll")break;if(w=w.parentElement,!w)return null}return w}(i);if(f){const b=new Ut(f);if(l.bottom+s.height/2>b.bottom)return Zh}}return{top:d,left:h,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function Z1(i){const e=i.config.get("ui.poweredBy"),t=e&&e.position||"border";return IR({position:t,label:NR,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:i.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var OR=Object.defineProperty,J1=Object.getOwnPropertySymbols,zR=Object.prototype.hasOwnProperty,LR=Object.prototype.propertyIsEnumerable,X1=(i,e,t)=>e in i?OR(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;class jR extends ge(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new CR(e),this.focusTracker=new yo,this.tooltipManager=new Qh(e),this.poweredBy=new BR(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const r=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?r():this.once("ready",r)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const r=e.config.get("toolbar.viewportTopOffset");return r?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:r}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let r,s;e.keystrokes.set("Alt+F10",(l,d)=>{const h=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(h)&&!Array.from(t.domRoots.values()).includes(h)&&(r=h);const f=this._getCurrentFocusedToolbarDefinition();f&&s||(s=this._getFocusableCandidateToolbarDefinitions());for(let b=0;b<s.length;b++){const w=s.shift();if(s.push(w),w!==f&&this._focusFocusableCandidateToolbar(w)){f&&f.options.afterBlur&&f.options.afterBlur();break}}d()}),e.keystrokes.set("Esc",(l,d)=>{const h=this._getCurrentFocusedToolbarDefinition();h&&(r?(r.focus(),r=null):e.editing.view.focus(),h.options.afterBlur&&h.options.afterBlur(),d())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:r,options:s}=t;(Fs(r.element)||s.beforeFocus)&&e.push(t)}return e.sort((t,r)=>e_(t)-e_(r)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:r}}=e;return r&&r(),!!Fs(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const r=((s,l)=>{for(var d in l||(l={}))zR.call(l,d)&&X1(s,d,l[d]);if(J1)for(var d of J1(l))LR.call(l,d)&&X1(s,d,l[d]);return s})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=r.top,t.viewportOffset.bottom+=r.bottom,t.viewportOffset.left+=r.left,t.viewportOffset.right+=r.right}}function e_(i){const{toolbarView:e,options:t}=i;let r=10;return Fs(e.element)&&r--,t.isContextual&&r--,r}var t_=u(9688),FR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(t_.Z,FR),t_.Z.locals;class VR extends nt{constructor(e){super(e),this.body=new jB(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class $R extends nt{constructor(e,t,r){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=r,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(r){e.change(s=>{const l=e.document.getRoot(r.name);s.addClass(r.isFocused?"ck-focused":"ck-blurred",l),s.removeClass(r.isFocused?"ck-blurred":"ck-focused",l)})}e.isRenderingInProgress?function r(s){e.once("change:isRenderingInProgress",(l,d,h)=>{h?r(s):t(s)})}(this):t(this)}}class UR extends $R{constructor(e,t,r,s={}){super(e,t,r);const l=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=s.label||(()=>l("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const r=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),r)})}}var n_=u(8847),HR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(n_.Z,HR),n_.Z.locals;class Kb extends Eh{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class o_ extends ge(){constructor(e,t){super(),t&&Ty(this,t),e&&this.set(e)}}var r_=u(4650),WR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(r_.Z,WR),r_.Z.locals;var i_=u(7676),GR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(i_.Z,GR),i_.Z.locals;const Jh=Nm("px");class bl extends ue{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,r=t.document.selection.editableElement;return r?t.domConverter.mapViewToDom(r.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new M("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const r=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),r.set(e.view,e),this._viewToStack.set(e.view,r),r===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new M("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new M("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Wn(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new qR(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(r,s)=>!s&&r>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(r,s)=>{if(s<2)return"";const l=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[l,s])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new KR(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,r)=>!r&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:r=!0,singleViewMode:s=!1}){this.view.class=t,this.view.withArrow=r,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),s&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class qR extends nt{constructor(e){super(e);const t=e.t,r=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new yo,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",r.to("isNavigationVisible",s=>s?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:r.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const r=new Rt(this.locale);return r.set({label:e,icon:t,tooltip:!0}),r}}class KR extends nt{constructor(e,t){super(e);const r=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",r.to("numberOfPanels",s=>s?"":"ck-hidden")],style:{top:r.to("top",Jh),left:r.to("left",Jh),width:r.to("width",Jh),height:r.to("height",Jh)}},children:this.content}),this.on("change:numberOfPanels",(s,l,d,h)=>{d>h?this._addPanels(d-h):this._removePanels(h-d),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new nt;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:r,height:s}=new Ut(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:r,height:s})}}}var s_=u(5868),YR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(s_.Z,YR),s_.Z.locals;const QR=Nm("px");class ZR extends ue{constructor(e){super(e),this._resizeObserver=null,this._balloonConfig=w1(e.config.get("balloonToolbar")),this.toolbarView=this._createToolbarView(),this.focusTracker=new yo,e.ui.once("ready",()=>{this.focusTracker.add(e.ui.getEditableElement()),this.focusTracker.add(this.toolbarView.element)}),e.ui.addToolbar(this.toolbarView,{beforeFocus:()=>this.show(!0),afterBlur:()=>this.hide(),isContextual:!0}),this._balloon=e.plugins.get(bl),this._fireSelectionChangeDebounced=cl(()=>this.fire("_selectionChangeDebounced"),200),this.decorate("show")}static get pluginName(){return"BalloonToolbar"}static get requires(){return[bl]}init(){const e=this.editor,t=e.model.document.selection;this.listenTo(this.focusTracker,"change:isFocused",(r,s,l)=>{const d=this._balloon.visibleView===this.toolbarView;!l&&d?this.hide():l&&this.show()}),this.listenTo(t,"change:range",(r,s)=>{(s.directChange||t.isCollapsed)&&this.hide(),this._fireSelectionChangeDebounced()}),this.listenTo(this,"_selectionChangeDebounced",()=>{this.editor.editing.view.document.isFocused&&this.show()}),this._balloonConfig.shouldNotGroupWhenFull||this.listenTo(e,"ready",()=>{const r=e.ui.view.editable.element;this._resizeObserver=new qc(r,s=>{this.toolbarView.maxWidth=QR(.9*s.contentRect.width)})}),this.listenTo(this.toolbarView,"groupedItemsUpdate",()=>{this._updatePosition()})}afterInit(){const e=this.editor.ui.componentFactory;this.toolbarView.fillFromConfig(this._balloonConfig,e)}_createToolbarView(){const e=this.editor.locale.t,t=!this._balloonConfig.shouldNotGroupWhenFull,r=new Pb(this.editor.locale,{shouldGroupWhenFull:t,isFloating:!0});return r.ariaLabel=e("Editor contextual toolbar"),r.render(),r}show(e=!1){const t=this.editor,r=t.model.document.selection,s=t.model.schema;this._balloon.hasView(this.toolbarView)||r.isCollapsed&&!e||function(l,d){return l.rangeCount===1?!1:[...l.getRanges()].every(h=>{const f=h.getContainedElement();return f&&d.isSelectable(f)})}(r,s)||Array.from(this.toolbarView.items).every(l=>l.isEnabled!==void 0&&!l.isEnabled)||(this.listenTo(this.editor.ui,"update",()=>{this._updatePosition()}),this._balloon.add({view:this.toolbarView,position:this._getBalloonPositionData(),balloonClassName:"ck-toolbar-container"}))}hide(){this._balloon.hasView(this.toolbarView)&&(this.stopListening(this.editor.ui,"update"),this._balloon.remove(this.toolbarView))}_getBalloonPositionData(){const e=this.editor.editing.view,t=e.document,r=t.selection,s=t.selection.isBackward;return{target:()=>{const l=s?r.getFirstRange():r.getLastRange(),d=Ut.getDomRangeRects(e.domConverter.viewRangeToDom(l));return s?d[0]:(d.length>1&&d[d.length-1].width===0&&d.pop(),d[d.length-1])},positions:this._getBalloonPositions(s)}}_updatePosition(){this._balloon.updatePosition(this._getBalloonPositionData())}destroy(){super.destroy(),this.stopListening(),this._fireSelectionChangeDebounced.cancel(),this.toolbarView.destroy(),this.focusTracker.destroy(),this._resizeObserver&&this._resizeObserver.destroy()}_getBalloonPositions(e){const t=m.isSafari&&m.isiOS?Wb({heightOffset:Math.max(Wn.arrowHeightOffset,Math.round(20/Je.window.visualViewport.scale))}):Wn.defaultPositions;return e?[t.northWestArrowSouth,t.northWestArrowSouthWest,t.northWestArrowSouthEast,t.northWestArrowSouthMiddleEast,t.northWestArrowSouthMiddleWest,t.southWestArrowNorth,t.southWestArrowNorthWest,t.southWestArrowNorthEast,t.southWestArrowNorthMiddleWest,t.southWestArrowNorthMiddleEast]:[t.southEastArrowNorth,t.southEastArrowNorthEast,t.southEastArrowNorthWest,t.southEastArrowNorthMiddleEast,t.southEastArrowNorthMiddleWest,t.northEastArrowSouth,t.northEastArrowSouthEast,t.northEastArrowSouthWest,t.northEastArrowSouthMiddleEast,t.northEastArrowSouthMiddleWest]}}var a_=u(9695),JR={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(a_.Z,JR),a_.Z.locals;class l_{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const r="error"in t?t.error:t.reason;r instanceof Error&&this._handleError(r,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(r=>r!==t)}_fire(e,...t){const r=this._listeners[e]||[];for(const s of r)s.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function Yb(i,e=new Set){const t=[i],r=new Set;let s=0;for(;t.length>s;){const l=t[s++];if(!r.has(l)&&XR(l)&&!e.has(l))if(r.add(l),Symbol.iterator in l)try{for(const d of l)t.push(d)}catch{}else for(const d in l)d!=="defaultValue"&&t.push(l[d])}return r}function XR(i){const e=Object.prototype.toString.call(i),t=typeof i;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||i==null||i._watchdogExcluded||i instanceof EventTarget||i instanceof Event)}function c_(i,e,t=new Set){if(i===e&&typeof(r=i)=="object"&&r!==null)return!0;var r;const s=Yb(i,t),l=Yb(e,t);for(const d of s)if(l.has(d))return!0;return!1}class d_ extends l_{constructor(e,t={}){super(t),this._editor=null,this._throttledSave=qb(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(r,s)=>e.create(r,s)),this._destructor=r=>r.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const e=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,e,e.context)}}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._config=this._cloneEditorConfiguration(t)||{},this._config.context=r,this._creator(e,this._config))).then(s=>{this._editor=s,s.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=s.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e={};for(const t of this._editor.model.document.getRootNames())e[t]=this._editor.data.get({rootName:t});return e}_isErrorComingFromThisItem(e){return c_(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return rr(e,(t,r)=>En(t)||r==="context"?t:void 0)}}const ld=Symbol("MainQueueId");class eO{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const r=e===ld;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const s=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(ld),this._queues.get(e)])).then(t),l=s.catch(()=>{});return this._queues.set(e,l),s.finally(()=>{this._activeActions--,this._queues.get(e)===l&&this._activeActions===0&&this._onEmptyCallbacks.forEach(d=>d())})}}function u_(i){return Array.isArray(i)?i:[i]}class tO extends jR{constructor(e,t){super(e),this.view=t}get element(){return this.view.editable.element}init(){const e=this.editor,t=this.view,r=e.editing.view,s=t.editable,l=r.document.getRoot();s.name=l.rootName,t.render();const d=s.element;this.setEditableElement(s.name,d),s.bind("isFocused").to(this.focusTracker),r.attachDomRoot(d),this._initPlaceholder(),this.fire("ready")}destroy(){super.destroy();const e=this.view;this.editor.editing.view.detachDomRoot(e.editable.name),e.destroy()}_initPlaceholder(){const e=this.editor,t=e.editing.view,r=t.document.getRoot(),s=(e.sourceElement,e.config.get("placeholder"));if(s){const l=typeof s=="string"?s:s[r.rootName];l&&ZC({view:t,element:r,text:l,isDirectHost:!1,keepOnFocus:!0})}}}class nO extends VR{constructor(e,t,r){super(e);const s=e.t;this.editable=new UR(e,t,r,{label:l=>s("Rich Text Editor. Editing area: %0",l.name)})}render(){super.render(),this.registerChild(this.editable)}}class Xh extends Hh(yb(NB)){constructor(e,t={}){if(!ep(e)&&t.initialData!==void 0)throw new M("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(l){return ep(l)?(d=l,d instanceof HTMLTextAreaElement?d.value:d.innerHTML):l;var d}(e)),ep(e)&&(this.sourceElement=e,function(l,d){if(d.ckeditorInstance)throw new M("editor-source-element-already-used",l);d.ckeditorInstance=l,l.once("destroy",()=>{delete d.ckeditorInstance})}(this,e));const r=this.config.get("plugins");r.push(ZR),this.config.set("plugins",r),this.config.define("balloonToolbar",this.config.get("toolbar")),this.model.document.createRoot();const s=new nO(this.locale,this.editing.view,this.sourceElement);this.ui=new tO(this,s),function(l){if(!Rn(l.updateSourceElement))throw new M("attachtoform-missing-elementapi-interface",l);const d=l.sourceElement;if(function(h){return!!h&&h.tagName.toLowerCase()==="textarea"}(d)&&d.form){let h;const f=d.form,b=()=>l.updateSourceElement();Rn(f.submit)&&(h=f.submit,f.submit=()=>{b(),h.apply(f)}),f.addEventListener("submit",b),l.on("destroy",()=>{f.removeEventListener("submit",b),h&&(f.submit=h)})}}(this)}destroy(){const e=this.getData();return this.ui.destroy(),super.destroy().then(()=>{this.sourceElement&&this.updateSourceElement(e)})}static create(e,t={}){return new Promise(r=>{if(ep(e)&&e.tagName==="TEXTAREA")throw new M("editor-wrong-element",null);const s=new this(e,t);r(s.initPlugins().then(()=>s.ui.init()).then(()=>s.data.init(s.config.get("initialData"))).then(()=>s.fire("ready")).then(()=>s))})}}function ep(i){return En(i)}Xh.Context=YC,Xh.EditorWatchdog=d_,Xh.ContextWatchdog=class extends l_{constructor(i,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new eO,this._watchdogConfig=e,this._creator=t=>i.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(i){this._creator=i}setDestructor(i){this._destructor=i}get context(){return this._context}create(i={}){return this._actionQueues.enqueue(ld,()=>(this._contextConfig=i,this._create()))}getItem(i){return this._getWatchdog(i)._item}getItemState(i){return this._getWatchdog(i).state}add(i){const e=u_(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let r;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return r=new d_(null,this._watchdogConfig),r.setCreator(t.creator),r._setExcludedProperties(this._contextProps),t.destructor&&r.setDestructor(t.destructor),this._watchdogs.set(t.id,r),r.on("error",(s,{error:l,causesRestart:d})=>{this._fire("itemError",{itemId:t.id,error:l}),d&&this._actionQueues.enqueue(t.id,()=>new Promise(h=>{const f=()=>{r.off("restart",f),this._fire("itemRestart",{itemId:t.id}),h()};r.on("restart",f)}))}),r.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(i){const e=u_(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const r=this._getWatchdog(t);return this._watchdogs.delete(t),r.destroy()})))}destroy(){return this._actionQueues.enqueue(ld,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(ld,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(i=>{console.error("An error happened during destroying the context or items.",i)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(i=>(this._context=i,this._contextProps=Yb(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const i=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(i))})}_getWatchdog(i){const e=this._watchdogs.get(i);if(!e)throw new Error(`Item with the given id was not registered: ${i}.`);return e}_isErrorComingFromThisItem(i){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(i))return!1;return c_(this._context,i.context)}};class Qb extends Li{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function r(s){return(l,d)=>{d.preventDefault();const h=d.dropRange?[d.dropRange]:null,f=new D(t,s);t.fire(f,{dataTransfer:d.dataTransfer,method:l.name,targetRanges:h,target:d.target,domEvent:d.domEvent}),f.stop.called&&d.stopPropagation()}}this.listenTo(t,"paste",r("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",r("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",r("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,r=e.type=="drop"||e.type=="paste",s={dataTransfer:new Ly(t,{cacheFiles:r})};e.type!="drop"&&e.type!="dragover"||(s.dropRange=function(l,d){const h=d.target.ownerDocument,f=d.clientX,b=d.clientY;let w;return h.caretRangeFromPoint&&h.caretRangeFromPoint(f,b)?w=h.caretRangeFromPoint(f,b):d.rangeParent&&(w=h.createRange(),w.setStart(d.rangeParent,d.rangeOffset),w.collapse(!0)),w?l.domConverter.domRangeToView(w):null}(this.view,e)),this.fire(e.type,e,s)}}const h_=["figcaption","li"];function p_(i){let e="";if(i.is("$text")||i.is("$textProxy"))e=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))e=i.getAttribute("alt");else if(i.is("element","br"))e=`
`;else{let t=null;for(const r of i.getChildren()){const s=p_(r);t&&(t.is("containerElement")||r.is("containerElement"))&&(h_.includes(t.name)||h_.includes(r.name)?e+=`
`:e+=`

 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.