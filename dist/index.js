!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){var r=t(1),o=t(2);e.exports=function(e,n,t){var a=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var u=0;u<16;++u)n[a+u]=i[u];return n||o(i)}},function(e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),o[n]=e>>>((3&n)<<3)&255;return o}}},function(e,n){for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);e.exports=function(e,n){var r=n||0,o=t;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r);var a=function(){var e=navigator.userAgent;return!/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(e)&&(!!/[Aa]ndroid/.test(e)||void console.error("Error: Unknown environment,please open it in wallet's browser, \n    未知环境, 请在钱包浏览器下打开."))}(),i={__DAPPCALLBACKS:{}},u={system:["getSdkInfo","getLanguageSetting","getSymbol"],gui:["changeFullScreen","changeStatusBar","showToast","showAlert","showDialog","setClipboard","scanQRCode","showProgress","hideProgress","share"],customer:["getCurrentWalletType","checkFingerprintPayment"],eos:["getCurrentWalletAccount","getCurrentBalance","getCurrentAccountInfo","getWalletAccounts","getBalance","getAccountInfo","transfer","getTransactionRecord"],bos:["getCurrentWalletAccount","getCurrentBalance","getCurrentAccountInfo","getWalletAccounts","getBalance","getAccountInfo","transfer","getTransactionRecord"],eth:[]};i.exec=function(e,n,t,r){var u,c,s,f=o()(),p={params:t,namespace:e,function:n,callback:'window.dappSDK.__DAPPCALLBACKS["'.concat(f,'"]')};if(!r){if(!window.Promise)throw"Error: Cannot find Promise constructor in window scope. You can import a Promise library or use callback style.";u=new Promise(function(e,n){c=e,s=n})}i.__DAPPCALLBACKS[f]=function(e){var n=JSON.parse(e),t=n.code,o=n.message,a=n.data,u=null;1e4!==(t=parseInt(t))&&((u=new Error(o)).code=t,u.extra=a),r?r(u,a):u?s(u):c(a),delete i.__DAPPCALLBACKS[f]};var d=JSON.stringify(p);if(a){if(!window.dappApi)throw"Error: Cannot find dappApi in window scope. Please update the app to the newest version.";window.dappApi.request(d)}else{if(!window.webkit||!window.webkit.messageHandlers.dappApi)throw"Error: Cannot find dappApi in window scope. Please update the app to the newest version.";window.webkit.messageHandlers.dappApi.postMessage(d)}if(!r)return u},Object.keys(u).forEach(function(e){var n=u[e];i[e]={};var t=i[e];n.forEach(function(n){t[n]=function(e,n){return function(t,r){return i.exec(e,n,t,r)}}(e,n)})});var c=i;window&&(window.dappSDK=c);n.default=c}])});