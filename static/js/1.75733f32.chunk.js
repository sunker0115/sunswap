(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[1],{462:function(e,t){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,r){"use strict";function n(){return Math.floor(9e4*Math.random())+1e4}Object.defineProperty(t,"__esModule",{value:!0}),t.sendAsyncWrapper=function(e,t){var r=this;return new Promise((function(o,a){r.sendAsync({jsonrpc:"2.0",id:n(),method:e,params:t||[]},(function(e,t){e?a(e):o(t.result)}))}))},t.sendFortmaticAsyncWrapper=function(e){var t=this;return new Promise((function(r,n){t.getProvider().sendFortmaticAsync(e,(function(e,t){e?n(e):r(t?t.result:{})}))}))},t.randomId=n,t.findExistingResponse=function(e,t){for(var r=0;r<e.length;r++)if(e[r].id===t)return e[r];return null}},function(e,t,r){e.exports=r(4)},function(e,t,r){"use strict";var n=r(0),o=n(r(1)),a=n(r(5)),i=r(2),s="fm_configure",c={};e.exports=function e(t,r,n){var l=this;if((0,o.default)(this,e),this.fortmaticClient="https://x2.fortmatic.com",!t)throw new Error("Please provide a Fortmatic API key that you acquired from the developer dashboard.");this.apiKey=t,this.options=n,this.ethNetwork=r,this.queryParams=btoa(JSON.stringify({API_KEY:t,ETH_NETWORK:r})),this.transactions={send:function(e,t){var r=new u("fm_composeSend",{to:e.to,value:e.amount});l.getProvider().sendFortmaticAsync(r,t)}},this.getProvider=function(){return c["fortmatic-".concat(l.queryParams)]||(c["fortmatic-".concat(l.queryParams)]=new a.default(l.fortmaticClient,{API_KEY:t,ETH_NETWORK:r})),c["fortmatic-".concat(l.queryParams)]},this.user={login:function(){return l.getProvider().enable()},logout:function(){l.getProvider().account=null,l.getProvider().network=null;var e=new u("fm_logout");return i.sendFortmaticAsyncWrapper.call(l,e)},getUser:function(){var e=new u("fm_get_user");return i.sendFortmaticAsyncWrapper.call(l,e)},getBalances:function(){var e=new u("fm_get_balances");return i.sendFortmaticAsyncWrapper.call(l,e)},getTransactions:function(){var e=new u("fm_get_transactions");return i.sendFortmaticAsyncWrapper.call(l,e)},isLoggedIn:function(){var e=new u("fm_is_logged_in");return i.sendFortmaticAsyncWrapper.call(l,e)},settings:function(){var e=new u("fm_accountSettings");return i.sendFortmaticAsyncWrapper.call(l,e)},deposit:function(e){var t=new u("fm_deposit",e);return i.sendFortmaticAsyncWrapper.call(l,t)}},this.configure=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new u(s);return t.params=[e],i.sendFortmaticAsyncWrapper.call(l,t)}};var u=function e(t,r){(0,o.default)(this,e),this.id=(0,i.randomId)(),this.method=t,this.params=r?[r]:[{}]}},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(6)),a=n(r(9)),i=n(r(1)),s=n(r(10)),c=r(11),u=n(r(12)),l=r(2),f=function(){function e(t,r){if((0,i.default)(this,e),this.fortmaticClient=t,this.requests={},this.queue=[],this.account=null,this.network=null,this.isFortmatic=!0,this.overlayReady=!1,this.isLoggedIn=!1,this.postMessages={FORTMATIC_HANDLE_BATCH_REQUEST:"FORTMATIC_HANDLE_BATCH_REQUEST",FORTMATIC_HANDLE_REQUEST:"FORTMATIC_HANDLE_REQUEST",FORTMATIC_HANDLE_FORTMATIC_REQUEST:"FORTMATIC_HANDLE_FORTMATIC_REQUEST",FORTMATIC_HANDLE_RESPONSE:"FORTMATIC_HANDLE_RESPONSE",FORTMATIC_OVERLAY_READY:"FORTMATIC_OVERLAY_READY",FORTMATIC_SHOW_OVERLAY:"FORTMATIC_SHOW_OVERLAY",FORTMATIC_HIDE_OVERLAY:"FORTMATIC_HIDE_OVERLAY",FORTMATIC_USER_DENIED:"FORTMATIC_USER_DENIED",FORTMATIC_USER_LOGOUT:"FORTMATIC_USER_LOGOUT",FORTMATIC_UNAUTHORIZED_API_KEY:"FORTMATIC_UNAUTHORIZED_API_KEY"},!r.API_KEY)throw new Error("Please provide a Fortmatic API key that you acquired from the developer dashboard.");this.options={API_KEY:r.API_KEY,ETH_NETWORK:r.ETH_NETWORK,DOMAIN_ORIGIN:window.location?window.location.origin:"",version:c.version},this.queryParams=btoa(JSON.stringify(this.options)),this.constructPostMessage(),this.overlay=this.createOverlay(),this.listenMessage()}return(0,s.default)(e,[{key:"constructPostMessage",value:function(){var e=this;Object.keys(this.postMessages).map((function(t){e.postMessages[t]+="-".concat(e.queryParams)}))}},{key:"createOverlay",value:function(){var e=this;return new Promise((function(t,r){var n=function(){if(function(){var t=!0,r=!1,n=void 0;try{for(var o,a=document.getElementsByClassName("fortmatic-iframe")[Symbol.iterator]();!(t=(o=a.next()).done);t=!0)if(o.value.src.includes(e.queryParams))return!1}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}return!0}()){var r=document.createElement("style");r.innerHTML=u.default.css,r.type="text/css",document.head.appendChild(r);var n=document.createElement("iframe");n.className="fortmatic-iframe",n.src="".concat(e.fortmaticClient,"/send?params=").concat(e.queryParams),document.body.appendChild(n);var o=document.createElement("img");o.src="https://static.fortmatic.com/assets/trans.gif",document.body.appendChild(o),t({iframe:n})}else console.error("Fortmatic: Duplicate instances found.")};["loaded","interactive","complete"].indexOf(document.readyState)>-1?n():window.addEventListener("load",n.bind(e),!1)}))}},{key:"showOverlay",value:function(){var e=(0,a.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.overlay;case 2:e.sent.iframe.style.display="block";case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"hideOverlay",value:function(){var e=(0,a.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.overlay;case 2:e.sent.iframe.style.display="none";case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendAsync",value:function(e,t){e.length>0?this.enqueue({payload:{id:(0,l.randomId)(),batch:e.map((function(e){return e.id=(0,l.randomId)(),e})),method:"eth_batchRequest"},cb:t}):this.enqueue({payload:e,cb:t})}},{key:"sendFortmaticAsync",value:function(e,t){this.enqueue({payload:e,cb:t,isNative:!0})}},{key:"send",value:function(e,t){if("string"==typeof e)return l.sendAsyncWrapper.call(this,e,t);if(!t){console.warn("Non-async web3 methods will be deprecated in web3 > 1.0, and are not supported by the Fortmatic provider. An async method to be used instead."),this.sendAsync(e,(function(){}));var r={};switch(e.method){case"eth_accounts":r=this.account?[this.account]:[];break;case"eth_coinbase":r=this.account;break;case"net_version":r=this.network||(this.options.API_KEY.startsWith("pk_live")?1:4);break;case"eth_uninstallFilter":r=!0;break;default:r={}}return{id:e.id,jsonrpc:e.jsonrpc,result:r}}this.sendAsync(e,t)}},{key:"enqueue",value:function(e){this.queue.push(e),this.overlayReady&&this.dequeue()}},{key:"dequeue",value:function(){var e=(0,a.default)(o.default.mark((function e(){var t,r,n,a=this;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==this.queue.length){e.next=2;break}return e.abrupt("return");case 2:if(!(t=this.queue.shift())){e.next=11;break}return r=t.payload,n=t.cb,r.id=(0,l.randomId)(),e.next=9,this.postMessage(t.isNative?this.postMessages.FORTMATIC_HANDLE_FORTMATIC_REQUEST:this.postMessages.FORTMATIC_HANDLE_REQUEST,t.payload);case 9:r.batch&&r.batch.length>0?(r.batch.forEach((function(e){a.requests[e.id]={parentId:r.id,payload:e,cb:function(e,t){var n=a.requests[r.id].batchResponse;if(e&&e.response&&!(0,l.findExistingResponse)(n,e.response.id))throw n.push({jsonrpc:"2.0",id:e.response.id,error:{code:e.response.code,message:e.response.message}}),a.requests[r.id].cb(null,n),e.response;if(t&&t.result&&!(0,l.findExistingResponse)(n,t.id))return n.push(t);throw new Error("Fortmatic: unexpected callback behavior")}}})),this.requests[r.id]={payload:r,cb:n,batchResponse:[]}):this.requests[r.id]={payload:r,cb:n},this.dequeue();case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"postMessage",value:function(){var e=(0,a.default)(o.default.mark((function e(t,r){var n;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.overlay;case 2:if(!(n=e.sent).iframe.contentWindow){e.next=7;break}n.iframe.contentWindow.postMessage({msgType:t,payload:r},"*"),e.next=8;break;case 7:throw new Error("Fortmatic: Modal is not ready.");case 8:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"enable",value:function(){return l.sendAsyncWrapper.call(this,"eth_accounts")}},{key:"listenMessage",value:function(){var e=this;window.addEventListener("message",(function(t){if(t.origin===e.fortmaticClient){var r=t.data.response?t.data.response.id:null;switch(t.data.msgType){case e.postMessages.FORTMATIC_OVERLAY_READY:e.overlayReady=!0,e.dequeue();break;case e.postMessages.FORTMATIC_HANDLE_RESPONSE:try{e.requests[r].cb(null,t.data.response);var n=e.requests[r].parentId;n&&e.requests[n].payload.batch.length===e.requests[n].batchResponse.length&&e.requests[n].cb(null,e.requests[n].batchResponse),"eth_accounts"===e.requests[r].payload.method?e.account=t.data.response.result[0]:"eth_coinbase"===e.requests[r].payload.method?e.account=t.data.response.result:"net_version"===e.requests[r].payload.method&&(e.network=t.data.response.result)}catch(e){}e.isLoggedIn=!0,e.dequeue();break;case e.postMessages.FORTMATIC_HIDE_OVERLAY:e.hideOverlay();break;case e.postMessages.FORTMATIC_SHOW_OVERLAY:e.showOverlay();break;case e.postMessages.FORTMATIC_USER_LOGOUT:e.account=null,e.network=null,e.isLoggedIn=!1;break;case e.postMessages.FORTMATIC_UNAUTHORIZED_API_KEY:throw e.overlayReady=!1,new Error("Given API key is not authorized to access the resource.");case e.postMessages.FORTMATIC_USER_DENIED:if(r){var o=t.data.response&&t.data.response.message?t.data.response.message:"Fortmatic: Modal was closed without executing action!",a=t.data.response&&t.data.response.code?t.data.response.code:1;e.requests[r].cb({message:o,code:a,response:t.data.response})}else e.queue.forEach((function(e){return e.cb({message:"Fortmatic: Modal was closed without executing action!",code:1})}));e.dequeue()}}}))}}]),e}();t.default=f},function(e,t,r){e.exports=r(7)},function(e,t,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(8),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"==typeof e,l=t.regeneratorRuntime;if(l)u&&(e.exports=l);else{(l=t.regeneratorRuntime=u?e.exports:{}).wrap=_;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",m={},y={};y[i]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==n&&o.call(g,i)&&(y=g);var b=A.prototype=w.prototype=Object.create(y);T.prototype=b.constructor=A,A.constructor=T,A[c]=T.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===T||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,A):(e.__proto__=A,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(b),e},l.awrap=function(e){return{__await:e}},O(R.prototype),R.prototype[s]=function(){return this},l.AsyncIterator=R,l.async=function(e,t,r,n){var o=new R(_(e,t,r,n));return l.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},O(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=k,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(M),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return s.type="throw",s.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),m}}}function _(e,t,r,n){var o=t&&t.prototype instanceof w?t:w,a=Object.create(o.prototype),i=new F(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=I(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=E(e,t,r);if("normal"===c.type){if(n=r.done?h:d,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function E(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function w(){}function T(){}function A(){}function O(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function R(e){var t;this._invoke=function(r,n){function a(){return new Promise((function(t,a){!function t(r,n,a,i){var s=E(e[r],e,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,a,i)}),(function(e){t("throw",e,a,i)})):Promise.resolve(u).then((function(e){c.value=e,a(c)}),(function(e){return t("throw",e,a,i)}))}i(s.arg)}(r,n,t,a)}))}return t=t?t.then(a,a):a()}}function I(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,I(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=E(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,m;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function k(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(e,t){function r(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function s(e){r(i,o,a,s,c,"next",e)}function c(e){r(i,o,a,s,c,"throw",e)}s(void 0)}))}}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e){e.exports={name:"fortmatic",version:"1.1.3",description:"Fortmatic Javascript SDK",main:"lib/fortmatic.js",scripts:{build:"WEBPACK_ENV=production webpack","build:dev":"WEBPACK_ENV=development BABEL_ENV=development webpack --progress --colors --watch",test:"nyc --reporter=lcov --reporter=text-summary ava"},author:"Fortmatic <team@fortmatic.com> (https://fortmatic.com/)",license:"MIT",repository:{type:"git",url:"https://github.com/fortmatic/fortmatic-js"},keywords:["Auth","Login","Web3","Crypto","Ethereum","MetaMask","Wallet","Blockchain","Dapp"],homepage:"https://www.fortmatic.com",ava:{require:["@babel/register"],files:["test/**/*.spec.js"],babel:{testOptions:{presets:["@babel/env"],plugins:["@babel/plugin-proposal-function-bind","@babel/plugin-transform-runtime"]}},verbose:!0},nyc:{all:!1,"check-coverage":!0,"per-file":!0,lines:80,statements:80,functions:80,branches:80,include:["src/**/*.js"],exclude:["*/style.js"],require:[],reporter:["html","lcov"]},dependencies:{"@babel/runtime":"7.3.4"},devDependencies:{"@babel/core":"7.3.4","@babel/plugin-proposal-function-bind":"7.2.0","@babel/plugin-transform-modules-commonjs":"7.2.0","@babel/plugin-transform-runtime":"7.3.4","@babel/preset-env":"7.3.4","@babel/register":"7.0.0",ava:"2.2.0","babel-eslint":"10.0.1","babel-loader":"8.0.5",eslint:"5.9.0",lodash:"4.17.11",nyc:"13.1.0",sinon:"7.1.1",webpack:"4.26.1","webpack-cli":"3.1.2"}}},function(e,t,r){"use strict";t.css="\n  .fortmatic-iframe {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    border: none;\n    border-radius: 0;\n    z-index: 2147483647;\n  }\n"}])}}]);
//# sourceMappingURL=1.75733f32.chunk.js.map