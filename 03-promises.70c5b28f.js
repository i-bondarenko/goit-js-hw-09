function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("eWCmQ");function l(t,o){var n,i;(n=t,i=o,new Promise(((e,t)=>{const o=Math.random()>.3;setTimeout((()=>{o?e({position:n,delay:i}):t({position:n,delay:i})}),i)}))).then((({position:t,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`,{timeout:5e3})})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,{timeout:5e3})}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:o,amount:n}=e.currentTarget.elements;let i=Number(t.value);for(let e=1;e<=n.value;e+=1)1===e||(i+=Number(o.value)),l(e,i)}));
//# sourceMappingURL=03-promises.70c5b28f.js.map