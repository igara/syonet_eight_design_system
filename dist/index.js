module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("recoil")},function(e,t,r){"use strict";var n=r(7),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?a:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=a;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=p(r);o&&o!==h&&e(t,o,n)}var a=l(r);f&&(a=a.concat(f(r)));for(var c=s(t),y=s(r),v=0;v<a.length;++v){var g=a[v];if(!(i[g]||n&&n[g]||y&&y[g]||c&&c[g])){var b=d(r,g);try{u(t,g,b)}catch(e){}}}}return t}},function(e,t,r){e.exports=r(9)},function(e,t){e.exports=require("swr")},function(e,t,r){e.exports=r(10)},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,r.apply(this,arguments)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){"use strict";e.exports=r(8)},function(e,t,r){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,m=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case a:case s:case c:case h:return e;default:switch(e=e&&e.$$typeof){case l:case p:case g:case v:case u:return e;default:return t}}case i:return t}}}function S(e){return O(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=p,t.Fragment=a,t.Lazy=g,t.Memo=v,t.Portal=i,t.Profiler=s,t.StrictMode=c,t.Suspense=h,t.isAsyncMode=function(e){return S(e)||O(e)===f},t.isConcurrentMode=S,t.isContextConsumer=function(e){return O(e)===l},t.isContextProvider=function(e){return O(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return O(e)===p},t.isFragment=function(e){return O(e)===a},t.isLazy=function(e){return O(e)===g},t.isMemo=function(e){return O(e)===v},t.isPortal=function(e){return O(e)===i},t.isProfiler=function(e){return O(e)===s},t.isStrictMode=function(e){return O(e)===c},t.isSuspense=function(e){return O(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===d||e===s||e===c||e===h||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===v||e.$$typeof===u||e.$$typeof===l||e.$$typeof===p||e.$$typeof===m||e.$$typeof===w||e.$$typeof===x||e.$$typeof===b)},t.typeOf=O},function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var l={};function f(){}function d(){}function p(){}var h={};c(h,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(k([])));v&&v!==t&&r.call(v,o)&&(h=v);var g=p.prototype=f.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function m(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,c){var s=u(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=p,c(g,"constructor",p),c(p,"constructor",d),d.displayName=c(p,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,a,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(m.prototype),c(m.prototype,i,(function(){return this})),e.AsyncIterator=m,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new m(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){"use strict";r.r(t),r.d(t,"StandardDialog",(function(){return Qe})),r.d(t,"APICallResultDialog",(function(){return ut})),r.d(t,"GlobalDialog",(function(){return bt})),r.d(t,"globalDialogStateAtom",(function(){return dt})),r.d(t,"globalDialogNextNumberStateAtom",(function(){return pt})),r.d(t,"useGlobalDialogState",(function(){return ht})),r.d(t,"useGlobalDialogNextNumberState",(function(){return yt})),r.d(t,"useAddGlobalDialogStateEffect",(function(){return vt})),r.d(t,"useOnCloseCallback",(function(){return gt})),r.d(t,"MenuIcon",(function(){return Ze})),r.d(t,"CloseIcon",(function(){return Ke})),r.d(t,"Text",(function(){return jt})),r.d(t,"breakpoints",(function(){return Et})),r.d(t,"GlobalStyles",(function(){return Pt})),r.d(t,"fetcher",(function(){return Tt})),r.d(t,"useSWRByURL",(function(){return Mt}));var n=r(0),o=r.n(n);var i=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a="-ms-",c="-moz-",s="-webkit-",u="comm",l="decl",f="@keyframes",d=Math.abs,p=String.fromCharCode,h=Object.assign;function y(e){return e.trim()}function v(e,t,r){return e.replace(t,r)}function g(e,t){return e.indexOf(t)}function b(e,t){return 0|e.charCodeAt(t)}function m(e,t,r){return e.slice(t,r)}function w(e){return e.length}function x(e){return e.length}function O(e,t){return t.push(e),e}function S(e,t){return e.map(t).join("")}var k=1,C=1,j=0,E=0,P=0,_="";function $(e,t,r,n,o,i,a){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:k,column:C,length:a,return:""}}function A(e,t){return h($("",null,null,"",null,null,0),e,{length:-e.length},t)}function L(){return P=E>0?b(_,--E):0,C--,10===P&&(C=1,k--),P}function N(){return P=E<j?b(_,E++):0,C++,10===P&&(C=1,k++),P}function T(){return b(_,E)}function D(){return E}function G(e,t){return m(_,e,t)}function M(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I(e){return k=C=1,j=w(_=e),E=0,[]}function R(e){return _="",e}function z(e){return y(G(E-1,function e(t){for(;N();)switch(P){case t:return E;case 34:case 39:34!==t&&39!==t&&e(P);break;case 40:41===t&&e(t);break;case 92:N()}return E}(91===e?e+2:40===e?e+1:e)))}function F(e){for(;(P=T())&&P<33;)N();return M(e)>2||M(P)>3?"":" "}function H(e,t){for(;--t&&N()&&!(P<48||P>102||P>57&&P<65||P>70&&P<97););return G(e,D()+(t<6&&32==T()&&32==N()))}function B(e,t){for(;N()&&e+P!==57&&(e+P!==84||47!==T()););return"/*"+G(t,E-1)+"*"+p(47===e?e:N())}function W(e){for(;!M(T());)N();return G(e,E)}function q(e){return R(function e(t,r,n,o,i,a,c,s,u){var l=0,f=0,d=c,h=0,y=0,b=0,m=1,x=1,S=1,k=0,C="",j=i,E=a,P=o,_=C;for(;x;)switch(b=k,k=N()){case 40:if(108!=b&&58==_.charCodeAt(d-1)){-1!=g(_+=v(z(k),"&","&\f"),"&\f")&&(S=-1);break}case 34:case 39:case 91:_+=z(k);break;case 9:case 10:case 13:case 32:_+=F(b);break;case 92:_+=H(D()-1,7);continue;case 47:switch(T()){case 42:case 47:O(U(B(N(),D()),r,n),u);break;default:_+="/"}break;case 123*m:s[l++]=w(_)*S;case 125*m:case 59:case 0:switch(k){case 0:case 125:x=0;case 59+f:y>0&&w(_)-d&&O(y>32?V(_+";",o,n,d-1):V(v(_," ","")+";",o,n,d-2),u);break;case 59:_+=";";default:if(O(P=Y(_,r,n,l,f,i,s,C,j=[],E=[],d),a),123===k)if(0===f)e(_,r,P,P,j,a,d,s,E);else switch(h){case 100:case 109:case 115:e(t,P,P,o&&O(Y(t,P,P,0,0,i,s,C,i,j=[],d),E),i,E,d,s,o?j:E);break;default:e(_,P,P,P,[""],E,0,s,E)}}l=f=y=0,m=S=1,C=_="",d=c;break;case 58:d=1+w(_),y=b;default:if(m<1)if(123==k)--m;else if(125==k&&0==m++&&125==L())continue;switch(_+=p(k),k*m){case 38:S=f>0?1:(_+="\f",-1);break;case 44:s[l++]=(w(_)-1)*S,S=1;break;case 64:45===T()&&(_+=z(N())),h=T(),f=d=w(C=_+=W(D())),k++;break;case 45:45===b&&2==w(_)&&(m=0)}}return a}("",null,null,null,[""],e=I(e),0,[0],e))}function Y(e,t,r,n,o,i,a,c,s,u,l){for(var f=o-1,p=0===o?i:[""],h=x(p),g=0,b=0,w=0;g<n;++g)for(var O=0,S=m(e,f+1,f=d(b=a[g])),k=e;O<h;++O)(k=y(b>0?p[O]+" "+S:v(S,/&\f/g,p[O])))&&(s[w++]=k);return $(e,t,r,0===o?"rule":c,s,u,l)}function U(e,t,r){return $(e,t,r,u,p(P),m(e,2,-2),0)}function V(e,t,r,n){return $(e,t,r,l,m(e,0,n),m(e,n+1,-1),n)}function Z(e,t){switch(function(e,t){return(((t<<2^b(e,0))<<2^b(e,1))<<2^b(e,2))<<2^b(e,3)}(e,t)){case 5103:return s+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return s+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return s+e+c+e+a+e+e;case 6828:case 4268:return s+e+a+e+e;case 6165:return s+e+a+"flex-"+e+e;case 5187:return s+e+v(e,/(\w+).+(:[^]+)/,s+"box-$1$2"+a+"flex-$1$2")+e;case 5443:return s+e+a+"flex-item-"+v(e,/flex-|-self/,"")+e;case 4675:return s+e+a+"flex-line-pack"+v(e,/align-content|flex-|-self/,"")+e;case 5548:return s+e+a+v(e,"shrink","negative")+e;case 5292:return s+e+a+v(e,"basis","preferred-size")+e;case 6060:return s+"box-"+v(e,"-grow","")+s+e+a+v(e,"grow","positive")+e;case 4554:return s+v(e,/([^-])(transform)/g,"$1"+s+"$2")+e;case 6187:return v(v(v(e,/(zoom-|grab)/,s+"$1"),/(image-set)/,s+"$1"),e,"")+e;case 5495:case 3959:return v(e,/(image-set\([^]*)/,s+"$1$`$1");case 4968:return v(v(e,/(.+:)(flex-)?(.*)/,s+"box-pack:$3"+a+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+s+e+e;case 4095:case 3583:case 4068:case 2532:return v(e,/(.+)-inline(.+)/,s+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(w(e)-1-t>6)switch(b(e,t+1)){case 109:if(45!==b(e,t+4))break;case 102:return v(e,/(.+:)(.+)-([^]+)/,"$1"+s+"$2-$3$1"+c+(108==b(e,t+3)?"$3":"$2-$3"))+e;case 115:return~g(e,"stretch")?Z(v(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==b(e,t+1))break;case 6444:switch(b(e,w(e)-3-(~g(e,"!important")&&10))){case 107:return v(e,":",":"+s)+e;case 101:return v(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+s+(45===b(e,14)?"inline-":"")+"box$3$1"+s+"$2$3$1"+a+"$2box$3")+e}break;case 5936:switch(b(e,t+11)){case 114:return s+e+a+v(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return s+e+a+v(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return s+e+a+v(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return s+e+a+e+e}return e}function J(e,t){for(var r="",n=x(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function X(e,t,r,n){switch(e.type){case"@import":case l:return e.return=e.return||e.value;case u:return"";case f:return e.return=e.value+"{"+J(e.children,n)+"}";case"rule":e.value=e.props.join(",")}return w(r=J(e.children,n))?e.return=e.value+"{"+r+"}":""}function K(e){var t=x(e);return function(r,n,o,i){for(var a="",c=0;c<t;c++)a+=e[c](r,n,o,i)||"";return a}}function Q(e){return function(t){t.root||(t=t.return)&&e(t)}}var ee=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}};var te=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}},re=function(e,t,r){for(var n=0,o=0;n=o,o=T(),38===n&&12===o&&(t[r]=1),!M(o);)N();return G(e,E)},ne=function(e,t){return R(function(e,t){var r=-1,n=44;do{switch(M(n)){case 0:38===n&&12===T()&&(t[r]=1),e[r]+=re(E-1,t,r);break;case 2:e[r]+=z(n);break;case 4:if(44===n){e[++r]=58===T()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=p(n)}}while(n=N());return e}(I(e),t))},oe=new WeakMap,ie=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||oe.get(r))&&!n){oe.set(e,!0);for(var o=[],i=ne(t,o),a=r.props,c=0,s=0;c<i.length;c++)for(var u=0;u<a.length;u++,s++)e.props[s]=o[c]?i[c].replace(/&\f/g,a[u]):a[u]+" "+i[c]}}},ae=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ce="undefined"!=typeof document,se=ce?void 0:ee((function(){return te((function(){var e={};return function(t){return e[t]}}))})),ue=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case l:e.return=Z(e.value,e.length);break;case f:return J([A(e,{value:v(e.value,"@","@"+s)})],n);case"rule":if(e.length)return S(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return J([A(e,{props:[v(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return J([A(e,{props:[v(t,/:(plac\w+)/,":"+s+"input-$1")]}),A(e,{props:[v(t,/:(plac\w+)/,":-moz-$1")]}),A(e,{props:[v(t,/:(plac\w+)/,a+"input-$1")]})],n)}return""}))}}],le=function(e){var t=e.key;if(ce&&"css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||ue;var o,a,c={},s=[];ce&&(o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)c[t[r]]=!0;s.push(e)})));var u=[ie,ae];if(ce){var l,f=[X,Q((function(e){l.insert(e)}))],d=K(u.concat(n,f));a=function(e,t,r,n){l=r,J(q(e?e+"{"+t.styles+"}":t.styles),d),n&&(g.inserted[t.name]=!0)}}else{var p=[X],h=K(u.concat(n,p)),y=se(n)(t),v=function(e,t){var r=t.name;return void 0===y[r]&&(y[r]=J(q(e?e+"{"+t.styles+"}":t.styles),h)),y[r]};a=function(e,t,r,n){var o=t.name,i=v(e,t);return void 0===g.compat?(n&&(g.inserted[o]=!0),i):n?void(g.inserted[o]=i):i}}var g={key:t,sheet:new i({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:a};return g.sheet.hydrate(s),g};function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r(2);var de="undefined"!=typeof document;function pe(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var he=function(e,t,r){var n=e.key+"-"+t.name;if((!1===r||!1===de&&void 0!==e.compat)&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var o="",i=t;do{var a=e.insert(t===i?"."+n:"",i,e.sheet,!0);de||void 0===a||(o+=a),i=i.next}while(void 0!==i);if(!de&&0!==o.length)return o}};var ye=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},ve={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ge=/[A-Z]|^ms/g,be=/_EMO_([^_]+?)_([^]*?)_EMO_/g,me=function(e){return 45===e.charCodeAt(1)},we=function(e){return null!=e&&"boolean"!=typeof e},xe=te((function(e){return me(e)?e:e.replace(ge,"-$&").toLowerCase()})),Oe=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(be,(function(e,t,r){return ke={name:t,styles:r,next:ke},t}))}return 1===ve[e]||me(e)||"number"!=typeof t||0===t?t:t+"px"};function Se(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return ke={name:r.name,styles:r.styles,next:ke},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)ke={name:n.name,styles:n.styles,next:ke},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=Se(e,t,r[o])+";";else for(var i in r){var a=r[i];if("object"!=typeof a)null!=t&&void 0!==t[a]?n+=i+"{"+t[a]+"}":we(a)&&(n+=xe(i)+":"+Oe(i,a)+";");else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=t&&void 0!==t[a[0]]){var c=Se(e,t,a);switch(i){case"animation":case"animationName":n+=xe(i)+":"+c+";";break;default:n+=i+"{"+c+"}"}}else for(var s=0;s<a.length;s++)we(a[s])&&(n+=xe(i)+":"+Oe(i,a[s])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=ke,i=r(e);return ke=o,Se(e,t,i)}break;case"string":}if(null==t)return r;var a=t[r];return void 0!==a?a:r}var ke,Ce=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var je=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,o="";ke=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,o+=Se(r,t,i)):o+=i[0];for(var a=1;a<e.length;a++)o+=Se(r,t,e[a]),n&&(o+=i[a]);Ce.lastIndex=0;for(var c,s="";null!==(c=Ce.exec(o));)s+="-"+c[1];return{name:ye(o)+s,styles:o,next:ke}},Ee="undefined"!=typeof document,Pe={}.hasOwnProperty,_e=Object(n.createContext)("undefined"!=typeof HTMLElement?le({key:"css"}):null);_e.Provider;var $e=function(e){return Object(n.forwardRef)((function(t,r){var o=Object(n.useContext)(_e);return e(t,o,r)}))};Ee||($e=function(e){return function(t){var r=Object(n.useContext)(_e);return null===r?(r=le({key:"css"}),Object(n.createElement)(_e.Provider,{value:r},e(t,r))):e(t,r)}});var Ae=Object(n.createContext)({});var Le="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ne=function(e,t){var r={};for(var n in t)Pe.call(t,n)&&(r[n]=t[n]);return r[Le]=e,r},Te=function(){return null},De=$e((function(e,t,r){var o=e.css;"string"==typeof o&&void 0!==t.registered[o]&&(o=t.registered[o]);var i=e[Le],a=[o],c="";"string"==typeof e.className?c=pe(t.registered,a,e.className):null!=e.className&&(c=e.className+" ");var s=je(a,void 0,Object(n.useContext)(Ae)),u=he(t,s,"string"==typeof i);c+=t.key+"-"+s.name;var l={};for(var f in e)Pe.call(e,f)&&"css"!==f&&f!==Le&&(l[f]=e[f]);l.ref=r,l.className=c;var d=Object(n.createElement)(i,l),p=Object(n.createElement)(Te,null);if(!Ee&&void 0!==u){for(var h,y=s.name,v=s.next;void 0!==v;)y+=" "+v.name,v=v.next;p=Object(n.createElement)("style",((h={})["data-emotion"]=t.key+" "+y,h.dangerouslySetInnerHTML={__html:u},h.nonce=t.sheet.nonce,h))}return Object(n.createElement)(n.Fragment,null,p,d)}));r(6);var Ge=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),Me=function(e,t){var r=arguments;if(null==t||!Pe.call(t,"css"))return n.createElement.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=De,i[1]=Ne(e,t);for(var a=2;a<o;a++)i[a]=r[a];return n.createElement.apply(null,i)},Ie=$e((function(e,t){var r=e.styles,o=je([r],void 0,Object(n.useContext)(Ae));if(!Ee){for(var i,a=o.name,c=o.styles,s=o.next;void 0!==s;)a+=" "+s.name,c+=s.styles,s=s.next;var u=!0===t.compat,l=t.insert("",{name:a,styles:c},t.sheet,u);return u?null:Object(n.createElement)("style",((i={})["data-emotion"]=t.key+"-global "+a,i.dangerouslySetInnerHTML={__html:l},i.nonce=t.sheet.nonce,i))}var f=Object(n.useRef)();return Object(n.useLayoutEffect)((function(){var e=t.key+"-global",r=new Ge({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,i=document.querySelector('style[data-emotion="'+e+" "+o.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==i&&(n=!0,i.setAttribute("data-emotion",e),r.hydrate([i])),f.current=[r,n],function(){r.flush()}}),[t]),Object(n.useLayoutEffect)((function(){var e=f.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==o.next&&he(t,o.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",o,r,!1)}}),[t,o.name]),null}));function Re(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return je(t)}var ze={name:"1jqu4hs",styles:"width:100%;height:100%;overflow:auto"},Fe={name:"105lmki",styles:"position:absolute;padding:0;top:12px;right:12px;background-color:transparent;border:none;cursor:pointer;outline:none;appearance:none"},He=function(e){return Re("position:fixed;top:0;left:0;display:",e.isOpen?"flex":"none",";align-items:center;justify-content:center;width:100%;height:100%;padding:0;border:0;background:rgba(50, 50, 50, 0.5);","","")},Be=function(e){return Re("position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;width:",e.width,";height:",e.width,";border:2px solid;border-radius:20px;background:white;","","")},We=function(){return Fe},qe=function(){return ze},Ye=function(e){return Re("html body{overflow:",e?"hidden":"initial",";}","","")},Ue=function(e){return Re("width:",e.size,"px;height:",e.size,"px;circle{fill:",e.backgroundColor,";stroke:",e.borderColor,";}rect{fill:",e.color,";}","","")},Ve=(o.a.createElement,function(e){return Me("svg",e,Me("circle",{cx:"32",cy:"32",r:"31",fill:"#C4C4C4",stroke:"black",strokeWidth:"2"}),Me("rect",{x:"16",y:"44",width:"32",height:"8",fill:"black"}),Me("rect",{x:"16",y:"28",width:"32",height:"8",fill:"black"}),Me("rect",{x:"16",y:"12",width:"32",height:"8",fill:"black"}))});Ve.defaultProps={width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var Ze=function(e){return Me(Ve,{css:Ue({size:e.size||20,color:e.color||"#C4C4C4",backgroundColor:e.backgroundColor||"black",borderColor:e.borderColor||"black"})})},Je=function(e){return Re("width:",e.size,"px;height:",e.size,"px;circle{fill:",e.backgroundColor,";stroke:",e.borderColor,";}path{fill:",e.color,";}","","")},Xe=(o.a.createElement,function(e){return Me("svg",e,Me("circle",{cx:"32",cy:"32",r:"31",fill:"#C4C4C4",stroke:"black",strokeWidth:"2"}),Me("path",{d:"M24.5373 52L52 12H39.4627L12 52H24.5373Z",fill:"black"}),Me("path",{d:"M39.4627 52L12 12H24.5373L52 52H39.4627Z",fill:"black"}))});Xe.defaultProps={width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var Ke=function(e){return Me(Xe,{css:Je({size:e.size||20,color:e.color||"#C4C4C4",backgroundColor:e.backgroundColor||"black",borderColor:e.borderColor||"black"})})},Qe=(o.a.createElement,function(e){var t,r;return Me("dialog",{css:He({isOpen:e.isOpen}),open:e.isOpen,onClick:e.onClose},Me(Ie,{styles:Ye(e.isOpen)}),Me("div",{css:Be({width:(null==e||null===(t=e.content)||void 0===t?void 0:t.width)||"auto",height:(null==e||null===(r=e.content)||void 0===r?void 0:r.height)||"auto"}),onClick:function(e){return e.stopPropagation()}},Me("div",{css:qe()},e.children),Me("button",{css:We(),onClick:e.onClose,type:"button"},Me(Ke,null))))});function et(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function tt(e,t){if(e){if("string"==typeof e)return et(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?et(e,t):void 0}}function rt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||tt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var nt={name:"1yqd147",styles:"width:94%;height:80%"},ot={name:"w1atjl",styles:"width:100%;height:100%"},it=function(){return ot},at=function(){return nt},ct=function(e){return o.a.useCallback((function(){e(!1)}),[e])},st=function(e){var t=rt(function(e){return o.a.useState(e)}(e.isFirstTime),2),r=t[0],n=t[1];return o.a.useEffect((function(){e.error&&r&&e.setIsopen(!0),n(!1)}),[e,r,n])},ut=(o.a.createElement,function(e){var t=rt(function(e){return o.a.useState(e)}(e.isOpen),2),r=t[0],n=t[1];return st({error:e.error,setIsopen:n,isFirstTime:e.isFirstTime}),Me(Qe,fe({},e,{isOpen:r,onClose:ct(n)}),Me("label",{css:it()},"システムエラー:",Me("br",null),Me("textarea",{css:at(),readOnly:!0,value:e.error})))});function lt(e){return function(e){if(Array.isArray(e))return et(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||tt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}ut.defaultProps={isOpen:!1,isFirstTime:!0};var ft=r(1),dt=Object(ft.atom)({key:"SYONET_EIGHT_DESIGN_SYSTEM_GLOBAL_DIALOG",default:[],dangerouslyAllowMutability:!0}),pt=Object(ft.atom)({key:"SYONET_EIGHT_DESIGN_SYSTEM_GLOBAL_DIALOG_NEXT_NUMBER",default:0}),ht=function(){return Object(ft.useRecoilState)(dt)},yt=function(){return Object(ft.useRecoilState)(pt)},vt=function(e){return o.a.useEffect((function(){-1===e.globalDialogState.findIndex((function(t){return t.uid===e.uid}))&&e.setGlobalDialogState([].concat(lt(e.globalDialogState),[{uid:e.uid,isOpen:!0}]))}),[e])},gt=function(e){return Object(ft.useRecoilCallback)((function(){return function(){e.setGlobalDialogState(e.globalDialogState.reduce((function(t,r,n){return r.uid===e.uid&&(r.isOpen=!1,e.setGlobalDialogNextNumberState(n+1)),t.push(r),t}),[])),e.onClose&&e.onClose()}}),[e])},bt=(o.a.createElement,function(e){var t=rt(ht(),2),r=t[0],n=t[1],o=rt(yt(),2),i=o[0],a=o[1];vt({uid:e.uid,globalDialogState:r,setGlobalDialogState:n});var c=r.findIndex((function(t){return!0===t.isOpen&&t.uid===e.uid})),s=gt({uid:e.uid,globalDialogState:r,setGlobalDialogState:n,setGlobalDialogNextNumberState:a,onClose:e.onClose});return c===i?Me(Qe,fe({},e,{isOpen:!0,onClose:s}),e.children):null});function mt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var wt={name:"1rjs02b",styles:"width:100%;height:100%;padding:0;border:none;outline:none;background:transparent;font-size:16px"},xt={name:"118r9s0",styles:"padding:2px;border:1px solid black;border-radius:4px"},Ot=function(){return xt},St=function(){return wt};o.a.createElement;function kt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ct(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?kt(Object(r),!0).forEach((function(t){mt(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):kt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var jt=function(e){var t={css:Ct(Ct({},Ot()),e.wrapperCSS)},r={css:Ct(Ct({},St()),e.inputCSS),type:e.type?e.type:"text",placeholder:e.placeholder,readOnly:!!e.readOnly&&e.readOnly,defaultValue:e.defaultValue?e.defaultValue:"",onChange:e.onChange?e.onChange:function(){},onClick:e.onClick?e.onClick:function(){}};return Me("div",t,Me("input",r,e.children))},Et={small:"576px",middle:"768px",large:"992px",xlarge:"1200px"};var Pt={name:"gz0ne0",styles:":root{--colors-navigation:#ebffe7;}html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}"};function _t(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}var $t=r(3),At=r.n($t);function Lt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Nt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Lt(Object(r),!0).forEach((function(t){mt(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Lt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Tt=function(){var e,t=(e=At.a.mark((function e(t){var r,n,o,i,a,c,s,u,l,f,d,p,h,y;return At.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.url,n=void 0===r?"":r,o=t.type,i=void 0===o?"json":o,a=t.headers,c=void 0===a?{}:a,s=t.method,u=void 0===s?"GET":s,l=t.bodyObject,f=void 0===l?{}:l,e.prev=1,d={headers:c,method:u},"POST"===u&&(d=Nt(Nt({},d),{},{body:JSON.stringify(f)})),e.next=6,fetch(n,d);case 6:if((p=e.sent).ok){e.next=9;break}throw new Error("server error: ".concat(JSON.stringify(p)));case 9:if("text"!==i){e.next=14;break}return e.next=12,p.text();case 12:return h=e.sent,e.abrupt("return",h);case 14:return e.next=16,p.json();case 16:return y=e.sent,e.abrupt("return",y);case 20:throw e.prev=20,e.t0=e.catch(1),console.error(e.t0),new Error("".concat(e.t0));case 24:case"end":return e.stop()}}),e,null,[[1,20]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){_t(i,n,o,a,c,"next",e)}function c(e){_t(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),Dt=r(4),Gt=r.n(Dt);function Mt(e){return Gt()(e.url,(function(){return Tt(e)}))}}]);