!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=21)}([function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return s}));const r=(t,e)=>t&&e?`${t}_${e}`:"",i=(t,e)=>`${t}#channel:${e}`,o=(t,e,n)=>{if(t.length<e.length)return"";const r=t.indexOf(e);if(-1===r)return"";const i=r+e.length,o=t.indexOf(n,i);let u="";return o!==i?u=-1!==o&&o>i||-1!==o?t.substring(i,o):t.substring(i):""===n&&(u=t.substring(i)),u},u=(t,e)=>{const n=Object.getOwnPropertyNames(t),r=Object.getOwnPropertyNames(e);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++){const i=n[r];if(t[i]!==e[i])return!1}return!0},s=()=>"complete"===document.readyState&&"visible"===document.visibilityState},function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return u}));let r=null;const i=()=>r,o=t=>{r?t(!0):(chrome.runtime.sendMessage("mnojpmjdmbbfmejpflffifhffcmidifd",{type:"SupportsGreaselion"},(function(e){if(!chrome.runtime.lastError&&e&&e.supported)return r=chrome.runtime.connect("mnojpmjdmbbfmejpflffifhffcmidifd",{name:"Greaselion"}),void t(!0)})),setTimeout(()=>{if(!r)return r=chrome.runtime.connect("jidkidbbcafjabdphckchenhfomhnfma",{name:"Greaselion"}),void t(!0)},100))},u=(t,e)=>{t&&r&&r.postMessage({type:"GreaselionError",mediaType:t,data:{errorMessage:e}})}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(1);let i=!1;const o=(t,e)=>{if(!t||i)return;i=!0;const n=Object(r.b)();n&&(n.postMessage({type:"RegisterOnUpdatedTab",mediaType:t}),n.onMessage.addListener((function(t){if(t.data)switch(t.type){case"OnUpdatedTab":e(t.data.changeInfo)}})))}},,,,,,function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));const r="github",i="github.com"},,function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(1),i=n(0);const o=(t,e,n,o)=>{if(!t||!e)return;const u=Object(r.b)();u&&u.postMessage({type:"MediaDurationMetadata",mediaType:t,data:{mediaKey:i.b(t,e),duration:n,firstVisit:o}})}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return s}));const r=t=>t?`https://github.com/${t}/`:"",i=t=>{if(!t.pathname)return"";const e=t.pathname.split("/").filter(t=>t);return e&&0!==e.length?e.length>1&&"orgs"===e[0]?e[1]:e[0]:""},o=t=>!!["/","/about","/enterprise","/events","/explore","/home","/issues","/login","/logout","/marketplace","/nonprofit","/notifications","/pricing","/pulls","/search","/settings","/team","/tos"].includes(t),u=t=>{if(!t)return!1;const e=t.match("[?|&]tab=([^&]+)&?");if(!e||e.length<2||!e[1])return!1;const n=e[1];return!!["repositories"].includes(n)},s=async t=>{if(!t)throw new Error("Invalid parameters");const e=(t=>t?"https://api.github.com/users/"+t:"")(t);if(!e)throw new Error("Invalid profile api url");const n=await fetch(e);if(!n.ok)throw new Error(`Profile API request failed: ${n.statusText} (${n.status})`);const r=await n.json();return{user:{id:r.id,screenName:r.login,fullName:r.name||r.login,favIconUrl:r.avatar_url},post:{id:"",timestamp:"",text:""}}}},,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(11),o=n(3),u=n(9),s=n(12);let c=0,a="";const f=new Set,d=()=>{c=Date.now()},l=t=>{t&&(t.url||"complete"===t.status)&&location.href!==a&&(a=location.href,d())};chrome.extension.inIncognitoContext||(Object(r.a)(t=>{t?(document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState?d():(()=>{const t=new URL(location.href),e=s.c(t),n=!f.has(e);n&&f.add(e);const r=Math.round((Date.now()-c)/1e3);i.a(u.b,e,r,n)})()})),"visible"===document.visibilityState&&d(),o.a(u.b,l)):console.error("Failed to initialize communications port")}),console.info("Greaselion script loaded: githubAutoContribution.ts"))}]);