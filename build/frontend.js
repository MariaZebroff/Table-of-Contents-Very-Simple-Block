(()=>{"use strict";var e={143:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(601),o=r.n(n),a=r(314),c=r.n(a)()(o());c.push([e.id,".wp-block-toc-block-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n.toc-toggle-button {\n    border: none;\n    background-color: transparent;\n    -webkit-text-decoration: underline;\n    text-decoration: underline;\n    color: #2271b1;\n    cursor: pointer;\n}\n\n.margintoc {\nmargin-left: 20px;\n}\n\n.no-markers {\n    list-style-type: none;\n}",""]);const i=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);n&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},338:(e,t,r)=>{var n=r(795);t.H=n.createRoot,n.hydrateRoot},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},c=[],i=0;i<e.length;i++){var l=e[i],u=n.base?l[0]+n.base:l[0],s=a[u]||0,f="".concat(u," ").concat(s);a[u]=s+1;var p=r(f),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var m=o(d,n);n.byIndex=i,t.splice(i,0,{identifier:f,updater:m,references:1})}c.push(f)}return c}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=r(a[c]);t[i].references--}for(var l=n(e,o),u=0;u<a.length;u++){var s=r(a[u]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},795:e=>{e.exports=window.ReactDOM}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var n=r(338);const o=window.wp.domReady,a=window.React,c=window.wp.i18n;var i=r(72),l=r.n(i),u=r(825),s=r.n(u),f=r(659),p=r.n(f),d=r(56),m=r.n(d),v=r(540),y=r.n(v),b=r(113),h=r.n(b),g=r(143),w={};function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return(t=function(e){var t=function(e){if("object"!=x(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==x(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}w.styleTagTransform=h(),w.setAttributes=m(),w.insert=p().bind(null,"head"),w.domAPI=s(),w.insertStyleElement=y(),l()(g.A,w),g.A&&g.A.locals&&g.A.locals;var k=function(e){var t,r,n=(t=(0,a.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,c,i=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(u)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1],l=e.attributes,u=l.headings,s=l.showNumbers,f=l.collapsible,p=l.textAlign,d=l.color,m=l.backgroundColor,v=l.fontSize;function y(e){return e.replace(/(?<!\d)\.+/g,"")}var b=s?function(e){var t=[];return e.map((function(e){var r=parseInt(e.level[1]);t[r-1]=(t[r-1]||0)+1;for(var n=r;n<t.length;n++)t[n]=0;var o=t.slice(0,r).join(".");return y(o),O(O({},e),{},{nestedNumber:o})}))}(u):u;return React.createElement("div",{className:"wp-block-toc-block-wrapper",style:{background:m,color:d,fontSize:v+"px"}},React.createElement("div",{style:{alignSelf:p}},f&&React.createElement("button",{style:{color:d},className:"toc-toggle-button margintoc",onClick:function(){return i((function(e){return!e}))}},o?(0,c.__)("Show TOC","toc-block"):(0,c.__)("Hide TOC","toc-block")),!o&&u.length>0?React.createElement(React.Fragment,null,React.createElement("h3",{className:"margintoc"},"Table of Contents"),React.createElement("ul",{className:s?"no-markers":""},b.map((function(e,t){return React.createElement("li",{key:t,style:{marginLeft:"".concat(20*(parseInt(e.level[1])-1),"px")}},s&&"".concat(y(e.nestedNumber),". "),React.createElement("a",{style:{color:d},href:"#".concat(e.id),onClick:function(t){return function(e,t){e.preventDefault();var r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth",block:"start"})}(t,e.id)}},e.text))})))):!o&&React.createElement("p",null,(0,c.__)("No headings found. Add some headings to your content!","toc-block"))))};o((function(){var e=document.querySelectorAll(".wp-block-toc-block, [data-toc-shortcode]");document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((function(e,t){var r=e.innerText.toLowerCase().replace(/\s+/g,"-");e.setAttribute("id",r),console.log("existingIds",e)})),e.forEach((function(e){var t=e.querySelector(".data-div"),r=JSON.parse(t.dataset.attributes);console.log("attributes",r),(0,n.H)(e).render(React.createElement(k,{attributes:r}))}))}))})();