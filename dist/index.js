!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("swr")):"function"==typeof define&&define.amd?define(["react","swr"],t):"object"==typeof exports?exports.syonet_eight_design_system=t(require("react"),require("swr")):e.syonet_eight_design_system=t(e.React,e[void 0])}(this,(function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(t,r){t.exports=e},function(e,t,r){"use strict";var n=r(6),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?a:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=a;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=p(r);o&&o!==h&&e(t,o,n)}var a=l(r);f&&(a=a.concat(f(r)));for(var c=s(t),y=s(r),v=0;v<a.length;++v){var m=a[v];if(!(i[m]||n&&n[m]||y&&y[m]||c&&c[m])){var g=d(r,m);try{u(t,m,g)}catch(e){}}}}return t}},function(e,t,r){e.exports=r(8)},function(e,r){e.exports=t},function(e,t,r){e.exports=r(9)},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,r.apply(this,arguments)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){"use strict";e.exports=r(7)},function(e,t,r){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,g=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,x=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case a:case s:case c:case h:return e;default:switch(e=e&&e.$$typeof){case l:case p:case m:case v:case u:return e;default:return t}}case i:return t}}}function S(e){return k(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=p,t.Fragment=a,t.Lazy=m,t.Memo=v,t.Portal=i,t.Profiler=s,t.StrictMode=c,t.Suspense=h,t.isAsyncMode=function(e){return S(e)||k(e)===f},t.isConcurrentMode=S,t.isContextConsumer=function(e){return k(e)===l},t.isContextProvider=function(e){return k(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return k(e)===p},t.isFragment=function(e){return k(e)===a},t.isLazy=function(e){return k(e)===m},t.isMemo=function(e){return k(e)===v},t.isPortal=function(e){return k(e)===i},t.isProfiler=function(e){return k(e)===s},t.isStrictMode=function(e){return k(e)===c},t.isSuspense=function(e){return k(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===d||e===s||e===c||e===h||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===v||e.$$typeof===u||e.$$typeof===l||e.$$typeof===p||e.$$typeof===b||e.$$typeof===x||e.$$typeof===w||e.$$typeof===g)},t.typeOf=k},function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var l={};function f(){}function d(){}function p(){}var h={};c(h,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(C([])));v&&v!==t&&r.call(v,o)&&(h=v);var m=p.prototype=f.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,c){var s=u(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function C(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=p,c(m,"constructor",p),c(p,"constructor",d),d.displayName=c(p,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,a,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(m),c(m,a,"Generator"),c(m,o,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=C,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:C(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){"use strict";r.r(t),r.d(t,"StandardDialog",(function(){return Xe})),r.d(t,"APICallResultDialog",(function(){return it})),r.d(t,"MenuIcon",(function(){return Ve})),r.d(t,"CloseIcon",(function(){return Qe})),r.d(t,"Variables",(function(){return n})),r.d(t,"GlobalStyles",(function(){return ct})),r.d(t,"useSWRByURL",(function(){return ht}));var n={};r.r(n),r.d(n,"breakpoints",(function(){return at}));var o=r(0),i=r.n(o);var a=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),c="-ms-",s="-moz-",u="-webkit-",l="comm",f="decl",d="@keyframes",p=Math.abs,h=String.fromCharCode,y=Object.assign;function v(e){return e.trim()}function m(e,t,r){return e.replace(t,r)}function g(e,t){return e.indexOf(t)}function b(e,t){return 0|e.charCodeAt(t)}function x(e,t,r){return e.slice(t,r)}function w(e){return e.length}function k(e){return e.length}function S(e,t){return t.push(e),e}function C(e,t){return e.map(t).join("")}var O=1,$=1,j=0,_=0,E=0,P="";function A(e,t,r,n,o,i,a){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:O,column:$,length:a,return:""}}function L(e,t){return y(A("",null,null,"",null,null,0),e,{length:-e.length},t)}function T(){return E=_>0?b(P,--_):0,$--,10===E&&($=1,O--),E}function N(){return E=_<j?b(P,_++):0,$++,10===E&&($=1,O++),E}function M(){return b(P,_)}function R(){return _}function z(e,t){return x(P,e,t)}function F(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I(e){return O=$=1,j=w(P=e),_=0,[]}function G(e){return P="",e}function q(e){return v(z(_-1,function e(t){for(;N();)switch(E){case t:return _;case 34:case 39:34!==t&&39!==t&&e(E);break;case 40:41===t&&e(t);break;case 92:N()}return _}(91===e?e+2:40===e?e+1:e)))}function D(e){for(;(E=M())&&E<33;)N();return F(e)>2||F(E)>3?"":" "}function H(e,t){for(;--t&&N()&&!(E<48||E>102||E>57&&E<65||E>70&&E<97););return z(e,R()+(t<6&&32==M()&&32==N()))}function W(e,t){for(;N()&&e+E!==57&&(e+E!==84||47!==M()););return"/*"+z(t,_-1)+"*"+h(47===e?e:N())}function B(e){for(;!F(M());)N();return z(e,_)}function U(e){return G(function e(t,r,n,o,i,a,c,s,u){var l=0,f=0,d=c,p=0,y=0,v=0,b=1,x=1,k=1,C=0,O="",$=i,j=a,_=o,E=O;for(;x;)switch(v=C,C=N()){case 40:if(108!=v&&58==E.charCodeAt(d-1)){-1!=g(E+=m(q(C),"&","&\f"),"&\f")&&(k=-1);break}case 34:case 39:case 91:E+=q(C);break;case 9:case 10:case 13:case 32:E+=D(v);break;case 92:E+=H(R()-1,7);continue;case 47:switch(M()){case 42:case 47:S(Z(W(N(),R()),r,n),u);break;default:E+="/"}break;case 123*b:s[l++]=w(E)*k;case 125*b:case 59:case 0:switch(C){case 0:case 125:x=0;case 59+f:y>0&&w(E)-d&&S(y>32?V(E+";",o,n,d-1):V(m(E," ","")+";",o,n,d-2),u);break;case 59:E+=";";default:if(S(_=Y(E,r,n,l,f,i,s,O,$=[],j=[],d),a),123===C)if(0===f)e(E,r,_,_,$,a,d,s,j);else switch(p){case 100:case 109:case 115:e(t,_,_,o&&S(Y(t,_,_,0,0,i,s,O,i,$=[],d),j),i,j,d,s,o?$:j);break;default:e(E,_,_,_,[""],j,0,s,j)}}l=f=y=0,b=k=1,O=E="",d=c;break;case 58:d=1+w(E),y=v;default:if(b<1)if(123==C)--b;else if(125==C&&0==b++&&125==T())continue;switch(E+=h(C),C*b){case 38:k=f>0?1:(E+="\f",-1);break;case 44:s[l++]=(w(E)-1)*k,k=1;break;case 64:45===M()&&(E+=q(N())),p=M(),f=d=w(O=E+=B(R())),C++;break;case 45:45===v&&2==w(E)&&(b=0)}}return a}("",null,null,null,[""],e=I(e),0,[0],e))}function Y(e,t,r,n,o,i,a,c,s,u,l){for(var f=o-1,d=0===o?i:[""],h=k(d),y=0,g=0,b=0;y<n;++y)for(var w=0,S=x(e,f+1,f=p(g=a[y])),C=e;w<h;++w)(C=v(g>0?d[w]+" "+S:m(S,/&\f/g,d[w])))&&(s[b++]=C);return A(e,t,r,0===o?"rule":c,s,u,l)}function Z(e,t,r){return A(e,t,r,l,h(E),x(e,2,-2),0)}function V(e,t,r,n){return A(e,t,r,f,x(e,0,n),x(e,n+1,-1),n)}function J(e,t){switch(function(e,t){return(((t<<2^b(e,0))<<2^b(e,1))<<2^b(e,2))<<2^b(e,3)}(e,t)){case 5103:return u+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return u+e+s+e+c+e+e;case 6828:case 4268:return u+e+c+e+e;case 6165:return u+e+c+"flex-"+e+e;case 5187:return u+e+m(e,/(\w+).+(:[^]+)/,u+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return u+e+c+"flex-item-"+m(e,/flex-|-self/,"")+e;case 4675:return u+e+c+"flex-line-pack"+m(e,/align-content|flex-|-self/,"")+e;case 5548:return u+e+c+m(e,"shrink","negative")+e;case 5292:return u+e+c+m(e,"basis","preferred-size")+e;case 6060:return u+"box-"+m(e,"-grow","")+u+e+c+m(e,"grow","positive")+e;case 4554:return u+m(e,/([^-])(transform)/g,"$1"+u+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+e+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,u+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(w(e)-1-t>6)switch(b(e,t+1)){case 109:if(45!==b(e,t+4))break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+s+(108==b(e,t+3)?"$3":"$2-$3"))+e;case 115:return~g(e,"stretch")?J(m(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==b(e,t+1))break;case 6444:switch(b(e,w(e)-3-(~g(e,"!important")&&10))){case 107:return m(e,":",":"+u)+e;case 101:return m(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(45===b(e,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+c+"$2box$3")+e}break;case 5936:switch(b(e,t+11)){case 114:return u+e+c+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return u+e+c+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return u+e+c+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return u+e+c+e+e}return e}function K(e,t){for(var r="",n=k(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function Q(e,t,r,n){switch(e.type){case"@import":case f:return e.return=e.return||e.value;case l:return"";case d:return e.return=e.value+"{"+K(e.children,n)+"}";case"rule":e.value=e.props.join(",")}return w(r=K(e.children,n))?e.return=e.value+"{"+r+"}":""}function X(e){var t=k(e);return function(r,n,o,i){for(var a="",c=0;c<t;c++)a+=e[c](r,n,o,i)||"";return a}}function ee(e){return function(t){t.root||(t=t.return)&&e(t)}}var te=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}};var re=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}},ne=function(e,t,r){for(var n=0,o=0;n=o,o=M(),38===n&&12===o&&(t[r]=1),!F(o);)N();return z(e,_)},oe=function(e,t){return G(function(e,t){var r=-1,n=44;do{switch(F(n)){case 0:38===n&&12===M()&&(t[r]=1),e[r]+=ne(_-1,t,r);break;case 2:e[r]+=q(n);break;case 4:if(44===n){e[++r]=58===M()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=h(n)}}while(n=N());return e}(I(e),t))},ie=new WeakMap,ae=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ie.get(r))&&!n){ie.set(e,!0);for(var o=[],i=oe(t,o),a=r.props,c=0,s=0;c<i.length;c++)for(var u=0;u<a.length;u++,s++)e.props[s]=o[c]?i[c].replace(/&\f/g,a[u]):a[u]+" "+i[c]}}},ce=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},se="undefined"!=typeof document,ue=se?void 0:te((function(){return re((function(){var e={};return function(t){return e[t]}}))})),le=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case f:e.return=J(e.value,e.length);break;case d:return K([L(e,{value:m(e.value,"@","@"+u)})],n);case"rule":if(e.length)return C(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return K([L(e,{props:[m(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return K([L(e,{props:[m(t,/:(plac\w+)/,":"+u+"input-$1")]}),L(e,{props:[m(t,/:(plac\w+)/,":-moz-$1")]}),L(e,{props:[m(t,/:(plac\w+)/,c+"input-$1")]})],n)}return""}))}}],fe=function(e){var t=e.key;if(se&&"css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||le;var o,i,c={},s=[];se&&(o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)c[t[r]]=!0;s.push(e)})));var u=[ae,ce];if(se){var l,f=[Q,ee((function(e){l.insert(e)}))],d=X(u.concat(n,f));i=function(e,t,r,n){l=r,K(U(e?e+"{"+t.styles+"}":t.styles),d),n&&(m.inserted[t.name]=!0)}}else{var p=[Q],h=X(u.concat(n,p)),y=ue(n)(t),v=function(e,t){var r=t.name;return void 0===y[r]&&(y[r]=K(U(e?e+"{"+t.styles+"}":t.styles),h)),y[r]};i=function(e,t,r,n){var o=t.name,i=v(e,t);return void 0===m.compat?(n&&(m.inserted[o]=!0),i):n?void(m.inserted[o]=i):i}}var m={key:t,sheet:new a({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:i};return m.sheet.hydrate(s),m};r(1);var de="undefined"!=typeof document;function pe(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var he=function(e,t,r){var n=e.key+"-"+t.name;if((!1===r||!1===de&&void 0!==e.compat)&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var o="",i=t;do{var a=e.insert(t===i?"."+n:"",i,e.sheet,!0);de||void 0===a||(o+=a),i=i.next}while(void 0!==i);if(!de&&0!==o.length)return o}};var ye=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},ve={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},me=/[A-Z]|^ms/g,ge=/_EMO_([^_]+?)_([^]*?)_EMO_/g,be=function(e){return 45===e.charCodeAt(1)},xe=function(e){return null!=e&&"boolean"!=typeof e},we=re((function(e){return be(e)?e:e.replace(me,"-$&").toLowerCase()})),ke=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ge,(function(e,t,r){return Ce={name:t,styles:r,next:Ce},t}))}return 1===ve[e]||be(e)||"number"!=typeof t||0===t?t:t+"px"};function Se(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return Ce={name:r.name,styles:r.styles,next:Ce},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)Ce={name:n.name,styles:n.styles,next:Ce},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=Se(e,t,r[o])+";";else for(var i in r){var a=r[i];if("object"!=typeof a)null!=t&&void 0!==t[a]?n+=i+"{"+t[a]+"}":xe(a)&&(n+=we(i)+":"+ke(i,a)+";");else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=t&&void 0!==t[a[0]]){var c=Se(e,t,a);switch(i){case"animation":case"animationName":n+=we(i)+":"+c+";";break;default:n+=i+"{"+c+"}"}}else for(var s=0;s<a.length;s++)xe(a[s])&&(n+=we(i)+":"+ke(i,a[s])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=Ce,i=r(e);return Ce=o,Se(e,t,i)}break;case"string":}if(null==t)return r;var a=t[r];return void 0!==a?a:r}var Ce,Oe=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var $e=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,o="";Ce=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,o+=Se(r,t,i)):o+=i[0];for(var a=1;a<e.length;a++)o+=Se(r,t,e[a]),n&&(o+=i[a]);Oe.lastIndex=0;for(var c,s="";null!==(c=Oe.exec(o));)s+="-"+c[1];return{name:ye(o)+s,styles:o,next:Ce}},je="undefined"!=typeof document,_e={}.hasOwnProperty,Ee=Object(o.createContext)("undefined"!=typeof HTMLElement?fe({key:"css"}):null);Ee.Provider;var Pe=function(e){return Object(o.forwardRef)((function(t,r){var n=Object(o.useContext)(Ee);return e(t,n,r)}))};je||(Pe=function(e){return function(t){var r=Object(o.useContext)(Ee);return null===r?(r=fe({key:"css"}),Object(o.createElement)(Ee.Provider,{value:r},e(t,r))):e(t,r)}});var Ae=Object(o.createContext)({});var Le="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Te=function(e,t){var r={};for(var n in t)_e.call(t,n)&&(r[n]=t[n]);return r[Le]=e,r},Ne=function(){return null},Me=Pe((function(e,t,r){var n=e.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var i=e[Le],a=[n],c="";"string"==typeof e.className?c=pe(t.registered,a,e.className):null!=e.className&&(c=e.className+" ");var s=$e(a,void 0,Object(o.useContext)(Ae)),u=he(t,s,"string"==typeof i);c+=t.key+"-"+s.name;var l={};for(var f in e)_e.call(e,f)&&"css"!==f&&f!==Le&&(l[f]=e[f]);l.ref=r,l.className=c;var d=Object(o.createElement)(i,l),p=Object(o.createElement)(Ne,null);if(!je&&void 0!==u){for(var h,y=s.name,v=s.next;void 0!==v;)y+=" "+v.name,v=v.next;p=Object(o.createElement)("style",((h={})["data-emotion"]=t.key+" "+y,h.dangerouslySetInnerHTML={__html:u},h.nonce=t.sheet.nonce,h))}return Object(o.createElement)(o.Fragment,null,p,d)}));r(5);var Re=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),ze=function(e,t){var r=arguments;if(null==t||!_e.call(t,"css"))return o.createElement.apply(void 0,r);var n=r.length,i=new Array(n);i[0]=Me,i[1]=Te(e,t);for(var a=2;a<n;a++)i[a]=r[a];return o.createElement.apply(null,i)},Fe=Pe((function(e,t){var r=e.styles,n=$e([r],void 0,Object(o.useContext)(Ae));if(!je){for(var i,a=n.name,c=n.styles,s=n.next;void 0!==s;)a+=" "+s.name,c+=s.styles,s=s.next;var u=!0===t.compat,l=t.insert("",{name:a,styles:c},t.sheet,u);return u?null:Object(o.createElement)("style",((i={})["data-emotion"]=t.key+"-global "+a,i.dangerouslySetInnerHTML={__html:l},i.nonce=t.sheet.nonce,i))}var f=Object(o.useRef)();return Object(o.useLayoutEffect)((function(){var e=t.key+"-global",r=new Re({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,i=document.querySelector('style[data-emotion="'+e+" "+n.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==i&&(o=!0,i.setAttribute("data-emotion",e),r.hydrate([i])),f.current=[r,o],function(){r.flush()}}),[t]),Object(o.useLayoutEffect)((function(){var e=f.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==n.next&&he(t,n.next,!0),r.tags.length){var o=r.tags[r.tags.length-1].nextElementSibling;r.before=o,r.flush()}t.insert("",n,r,!1)}}),[t,n.name]),null}));function Ie(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return $e(t)}var Ge={name:"1x4r5gf",styles:"width:100%;overflow:auto"},qe={name:"1qb8qzq",styles:"position:absolute;top:12px;right:12px"},De=function(e){return Ie("position:fixed;top:0;left:0;display:",e.isOpen?"flex":"none",";align-items:center;justify-content:center;width:100%;height:100%;padding:0;border:0;background:rgba(50, 50, 50, 0.5);","","")},He=function(e){return Ie("position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;width:",e.width,";height:",e.width,";border:2px solid;border-radius:20px;background:white;","","")},We=function(){return qe},Be=function(){return Ge},Ue=function(e){return Ie("html body{overflow:",e?"hidden":"initial",";}","","")},Ye=function(e){return Ie("width:",e.size,"px;height:",e.size,"px;circle{fill:",e.backgroundColor,";stroke:",e.borderColor,";}rect{fill:",e.color,";}","","")},Ze=(i.a.createElement,function(e){return ze("svg",e,ze("circle",{cx:"32",cy:"32",r:"31",fill:"#C4C4C4",stroke:"black",strokeWidth:"2"}),ze("rect",{x:"16",y:"44",width:"32",height:"8",fill:"black"}),ze("rect",{x:"16",y:"28",width:"32",height:"8",fill:"black"}),ze("rect",{x:"16",y:"12",width:"32",height:"8",fill:"black"}))});Ze.defaultProps={width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var Ve=function(e){return ze(Ze,{css:Ye({size:e.size||20,color:e.color||"#C4C4C4",backgroundColor:e.backgroundColor||"black",borderColor:e.borderColor||"black"})})},Je=function(e){return Ie("width:",e.size,"px;height:",e.size,"px;circle{fill:",e.backgroundColor,";stroke:",e.borderColor,";}path{fill:",e.color,";}","","")},Ke=(i.a.createElement,function(e){return ze("svg",e,ze("circle",{cx:"32",cy:"32",r:"31",fill:"#C4C4C4",stroke:"black",strokeWidth:"2"}),ze("path",{d:"M24.5373 52L52 12H39.4627L12 52H24.5373Z",fill:"black"}),ze("path",{d:"M39.4627 52L12 12H24.5373L52 52H39.4627Z",fill:"black"}))});Ke.defaultProps={width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var Qe=function(e){return ze(Ke,{css:Je({size:e.size||20,color:e.color||"#C4C4C4",backgroundColor:e.backgroundColor||"black",borderColor:e.borderColor||"black"})})},Xe=(i.a.createElement,function(e){var t,r;return ze("dialog",{css:De({isOpen:e.isOpen}),open:e.isOpen,onClick:e.onClose},ze(Fe,{styles:Ue(e.isOpen)}),ze("div",{css:He({width:(null==e||null===(t=e.content)||void 0===t?void 0:t.width)||"auto",height:(null==e||null===(r=e.content)||void 0===r?void 0:r.height)||"auto"}),onClick:function(e){return e.stopPropagation()}},ze("div",{css:Be()},e.children),ze("span",{css:We(),onClick:e.onClose},ze(Qe,null))))});function et(){return(et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function tt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function rt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return tt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?tt(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var nt=function(e){return i.a.useCallback((function(){e(!1)}),[e])},ot=function(e){var t=rt(function(e){return i.a.useState(e)}(e.isFirstTime),2),r=t[0],n=t[1];return i.a.useEffect((function(){e.error&&r&&e.setIsopen(!0),n(!1)}),[e,r,n])},it=(i.a.createElement,function(e){var t=rt(function(e){return i.a.useState(e)}(e.isOpen),2),r=t[0],n=t[1];return ot({error:e.error,setIsopen:n,isFirstTime:e.isFirstTime}),ze(Xe,et({},e,{isOpen:r,onClose:nt(n)}),ze("label",null,"システムエラー:",ze("br",null),ze("textarea",{readOnly:!0,value:e.error})))});it.defaultProps={isOpen:!1,isFirstTime:!0};var at={small:"576px",middle:"768px",large:"992px",xlarge:"1200px"};var ct={name:"gz0ne0",styles:":root{--colors-navigation:#ebffe7;}html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}"};function st(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}var ut=r(2),lt=r.n(ut),ft=r(3),dt=r.n(ft),pt=function(){var e,t=(e=lt.a.mark((function e(t){var r,n;return lt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("server error: ".concat(JSON.stringify(r)));case 6:return e.next=8,r.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:return e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){st(i,n,o,a,c,"next",e)}function c(e){st(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();function ht(e){return dt()(e,pt)}}])}));