!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(a=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot).concat(e," */")}));return[r].concat(i).concat([o]).join("\n")}var a,s,c;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="(".concat(s[2],") and (").concat(r,")")),t.push(s))}},t}},function(e,t,r){var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),s=function(e,t){return t?t.querySelector(e):document.querySelector(e)},c=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var n=s.call(this,e,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,d=0,u=[],p=r(4);function f(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(w(n.parts[a],t))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(w(n.parts[a],t));i[n.id]={id:n.id,refs:1,parts:s}}}}function h(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function v(e,t){var r=c(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),u.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,r);r.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return b(t,e.attrs),v(e,t),t}function b(e,t){Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}))}function w(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=d++;r=l||(l=g(t)),n=L.bind(null,r,a,!1),o=L.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),v(e,t),t}(t),n=z.bind(null,r,t),o=function(){m(r),r.href&&URL.revokeObjectURL(r.href)}):(r=g(t),n=S.bind(null,r),o=function(){m(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=h(e,t);return f(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o];(s=i[a.id]).refs--,n.push(s)}e&&f(h(e,t),t);for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var x,y=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function L(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function S(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function z(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=p(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(e,t,r){var n=r(3);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(1)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: none;\r\n  box-sizing: border-box;\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n}\r\n\r\nbutton:active, button:focus {\r\n  outline: none;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  position: relative;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  z-index: 2;\r\n  grid-template-rows: 50px 1fr;\r\n  font-family: 'Roboto', sans-serif;\r\n  background: rgb(2, 0, 36);\r\n  background:linear-gradient(90deg, rgba(34, 3, 52, 0.69) 0%, rgba(111, 190, 229, 0.44) 10%, rgba(84, 167, 209, 0.93) 100%)\r\n}\r\n\r\nheader {\r\n  position: relative;\r\n  height: 10vh;\r\n  grid-row: 1;\r\n  background-color: #0e0c0c;\r\n  color: #d2de72;\r\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24), 0px 0px 4px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\nheader h1 {\r\n  position: relative;\r\n  padding-left: 45%;\r\n  padding-top: 5px;\r\n  font-size: 22px;\r\n}\r\n\r\n.main {\r\n  display: grid;\r\n  grid-row: 2;\r\n  grid-template-columns: 1fr minmax(150px, 1fr) 12fr 2fr;\r\n  grid-template-areas: \"palette frames draw animation\" \". addButton draw size\";\r\n}\r\n\r\n[draggable] {\r\n  -moz-user-select: none;\r\n  -khtml-user-select: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.tool-item button {\r\n  padding: 20%;\r\n  background-color: rgb(68, 68, 68);\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid black;\r\n}\r\n\r\n.tools {\r\n  display: grid;\r\n    grid-template-rows: 1fr 2fr 1fr 1fr;\r\n  grid-row: 2;\r\n  grid-column: 2;\r\n  grid-area: palette;\r\n}\r\n\r\n.tool-size_container {\r\n  display: grid;\r\n  grid-row: 1;\r\n  grid-column: 1;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  position: relative;\r\n  width: 6vw;\r\n  top: 10vh;\r\n  height: 4vh;\r\n}\r\n\r\n.size-item {\r\n  width: 20px;\r\n  height: 20px;\r\n  align-self: center;\r\n  border: 2px solid grey;\r\n  cursor: pointer;\r\n  ;\r\n}\r\n\r\n.size-item.size-one {\r\n  padding: 5px\r\n}\r\n\r\n.size-item.size-two {\r\n  padding: 4px\r\n}\r\n\r\n.size-item.size-three {\r\n  padding: 3px\r\n}\r\n\r\n.size-item.size-four {\r\n  padding: 2px\r\n}\r\n\r\n.size-item::before {\r\n  content: '';\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: white;\r\n  display: block;\r\n  text-align: center;\r\n  line-height: 12px;\r\n  font-size: 90%;\r\n}\r\n\r\n.tools-container {\r\n  display: grid;\r\n  grid-row: 2;\r\n  grid-template-rows: repeat(4, 1fr);\r\n  position: relative;\r\n  width: 50%;\r\n  justify-self: center;\r\n  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24), 0px 0px 4px rgba(0, 0, 0, 0.12);\r\n  background-color: rgb(68, 68, 68); */\r\n}\r\n\r\n.tool-item .fas {\r\n  font-size: 18px;\r\n  color: white;\r\n  background-color: rgb(68, 68, 68);\r\n}\r\n\r\n.tool-item {\r\n  /* border: 3px solid black; */\r\n  width: 46px;\r\n  height: 46px;\r\n}\r\n\r\n.tool-item:nth-child(2) {\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.color_container {\r\n  grid-column: 1;\r\n  position: relative;\r\n}\r\n\r\n.frames {\r\n  position: relative;\r\n  top: 10%;\r\n  height: 70vh;\r\n  width: 98%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  \r\n}\r\n\r\n.frame {\r\n  position: relative;\r\n  margin: 0 auto;\r\n  margin-bottom: 20%;\r\n  width: 96px;\r\n  height: 96px;\r\n  grid-area: frames;\r\n}\r\n\r\n.delete-button {\r\n  position: relative;\r\n  bottom: 25%;\r\n}\r\n\r\n.move-button {\r\n  position: relative;\r\n  bottom: 75%;\r\n  right: 18%;\r\n}\r\n\r\n.delete-button:hover {\r\n  visibility: visible;\r\n}\r\n\r\n.duplicate-button {\r\n  position: relative;\r\n  bottom: 25%;\r\n  left: 70%;\r\n}\r\n\r\n.addFrames {\r\n  margin: 0 auto;\r\n  width: 90px;\r\n  height: 45px;\r\n  font-size: 14px;\r\n  border: 1px solid black;\r\n  border-radius: 15px;\r\n  background-color: #444444;\r\n  color: white;\r\n  grid-area: addButton;\r\n}\r\n\r\n.canvas {\r\n  background-color: white;\r\n  border: 2px solid black;\r\n  image-rendering: pixelated;\r\n}\r\n\r\n.draw_container {\r\n  grid-area: draw;\r\n  background-color: rgba(68, 68, 68, 0.7);\r\n  border: 1px solid black;\r\n}\r\n\r\n.draw_canvas {\r\n  position: relative;\r\n    top: 5vh;\r\n    left: 3vw;\r\n  width: 90%;\r\n  height: 85vh;\r\n}\r\n\r\n.size_wrapper {\r\n  position: absolute;\r\n  top: 80vh;\r\n    right: 5vw;\r\n  grid-area: size;\r\n}\r\n\r\n.size_label {\r\n  color: rgb(245, 229, 8);\r\n}\r\n\r\n.size_container {\r\n  background-color: #444444;\r\n    width: 100px;\r\n    height: 40px;\r\n    color: white;\r\n    border: 2px solid black;\r\n}\r\n\r\n.frame_canvas {\r\n  width: 96px;\r\n  height: 96px;\r\n  border: 2px solid lightgray;\r\n}\r\n\r\n.animation {\r\n  grid-area: animation;\r\n}\r\n\r\n.prev {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.fas {\r\n  font-size: 20px;\r\n}\r\n\r\n.tool_button.active_tool {\r\n  border: 2px solid red;\r\n}\r\n\r\n.active_tool {\r\n  border: 2px solid red;\r\n}\r\n\r\n.clean {\r\n  position: relative;\r\n  grid-row: 3;\r\n  height: 5vh;\r\n  align-self: center;\r\n  background-color: #444444;\r\n  color: white;\r\n  border: 1px solid #4c4c44;\r\n}\r\n\r\n.firstColor {\r\n  width: 55%;\r\n  height: 50%;\r\n}\r\n\r\n.secondColor {\r\n  position: relative;\r\n  left: 30%;\r\n  bottom: 5vh;\r\n  width: 55%;\r\n  height: 50%;\r\n}\r\n\r\n.fps_value {\r\n  position: relative;\r\n  /* left: 60%;\r\n  bottom: 25px; */\r\n  width: 70px;\r\n  height: 24px;\r\n  background-color: lightgrey;\r\n  border: 2px solid;\r\n}\r\n\r\n.full_screen {\r\n  position: relative;\r\n  top: 50px;\r\n  left: 10px;\r\n  width: 100px;\r\n  height: 40px;\r\n  border: 2px solid black;\r\n  background-color: #444444;\r\n  color: white;\r\n}\r\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(e,t,r){var n=r(6);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(1)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(0)(!1)).push([e.i,"@media screen and (max-width: 1200px) {\r\n    .size_wrapper {\r\n        position: relative;\r\n        top:0;\r\n        right: 0;\r\n        bottom: 70%;\r\n    }\r\n\r\n    .full_screen {\r\n        top: 24vh;\r\n        left: 15vw;\r\n    }\r\n\r\n    .fps_value {\r\n        left: 5vw;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 740px) {\r\n    .size_wrapper {\r\n        position: relative;\r\n         top: 50%;\r\n    }\r\n\r\n    .full_screen {\r\n        top: 20vh;\r\n    }\r\n\r\n    .draw_canvas {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n",""])},function(e,t,r){"use strict";r.r(t);class n{static async fullScreen(){const e=document.querySelector(".preview");e.fullscreenElement?e.exitFullscreen():await e.requestFullscreen()}static changeScreen(){document.querySelector(".full_screen").addEventListener("click",n.fullScreen)}}class o{constructor(e){this.frames=e,this.imagesFrames=[]}animationRender(){const e=document.querySelector(".preview"),t=this;let r=0,o=0;const i=document.querySelector(".fps"),a=document.querySelector(".fps_value");let s=100*i.value;i.addEventListener("input",()=>{s=100*i.value,a.innerHTML=i.value}),this.frames.forEach(e=>{const t=e.querySelector(".frame_canvas").toDataURL("image/png"),r=new Image;r.src=t,this.imagesFrames.push(r),this.frames=[]}),requestAnimationFrame((function n(i){if(i-o>=s){const n=t.imagesFrames,a=e.getContext("2d");a.clearRect(0,0,e.width,e.height),a.drawImage(n[r],0,0,e.width,e.height),r===n.length-1?r=0:r+=1,o=i}requestAnimationFrame(n)})),n.changeScreen()}}class i{constructor(){this.activeFrame="",this.painting=!1}static getSizeOfCanvas(){const e=document.querySelector(".draw_canvas"),t=e.offsetWidth,r=e.offsetHeight;e.setAttribute("width",`${t}px`),e.setAttribute("height",`${r}px`)}static start(){this.getSizeOfCanvas();const e=document.querySelector(".frame"),t=e.querySelector(".frame_canvas"),r=document.querySelector(".frames"),n=document.querySelector(".frame_wrapper"),i=document.querySelector(".draw_canvas");window.addEventListener("resize",this.getSizeOfCanvas);const a=i.getContext("2d"),s=[],c=document.querySelector(".addFrames");this.activeFrame=t;let l=1;s.push(e),c.addEventListener("click",()=>{l+=1,this.activeFrame.classList.remove("active_tool");const t=e.cloneNode(!0);t.className+=` frame${l}`;const r=t.querySelector(".frame_canvas");this.activeFrame=r,this.activeFrame.classList.add("active_tool");const c=t.querySelector(".fa-trash-alt");t.querySelector(".fa-copy").className+=` frame${l}`,c.className+=` frame${l}`,n.appendChild(t),s.push(t),a.clearRect(0,0,i.width,i.height),new o(s).animationRender(s)}),r.addEventListener("click",e=>{if(e.target.classList.contains("fa-trash-alt")){const t=e.target.classList[2],r=document.getElementsByClassName(t);n.removeChild(r[0])}}),r.addEventListener("click",e=>{if(e.target!==this.activeFrame&&""!==this.activeFrame&&this.activeFrame.classList.remove("active_tool"),e.target.classList.contains("frame_canvas")&&(this.activeFrame=e.target,this.activeFrame.classList.add("active_tool")),e.target.classList.contains("fa-copy")){const t=e.target.classList[2],r=document.getElementsByClassName(t),o=r[0].cloneNode(!0),i=r[0].querySelector(".frame_canvas"),c=o.querySelector(".frame_canvas"),d=c.getContext("2d"),u=i.toDataURL("image/png"),p=new Image;p.src=u,a.imageSmoothingEnabled=!1,d.drawImage(p,0,0,c.width,c.height),l+=l,o.classList.remove(t),o.classList.add(`frame${l}`);const f=o.querySelector(".fa-trash-alt");f.classList.remove(t),f.classList.add(`frame${l}`),n.appendChild(o),s.push(o)}}),r.addEventListener("click",()=>{const e=this.activeFrame.toDataURL("image/png"),t=new Image;t.src=e,a.clearRect(0,0,i.width,i.height),a.imageSmoothingEnabled=!1,a.drawImage(t,0,0,i.width,i.height)})}}class a{static render(){const e=document.createElement("link");e.type="text/css",e.rel="stylesheet",e.href="https://use.fontawesome.com/releases/v5.8.2/css/all.css",e.integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",e.crossOrigin="anonymous",document.head.appendChild(e);document.body.innerHTML+="<header><h1>PISKEL</h1></header>",a.renderTools(),a.renderFrames(),a.renderPreview(),a.colorPicker()}static renderTools(){const e=document.createElement("main");e.classList.add("main");const t=document.createElement("section"),r=document.createElement("div");r.classList.add("size_wrapper");t.classList.add("tools");t.innerHTML+='<div class="tool-size_container"><div class="size-item size-one"></div><div class="size-item size-two"></div><div class="size-item size-three"></div><div class="size-item size-four"></div>',t.innerHTML+='<ul class="tools-container"><li class="tool-item" ><button class="pen tool_button"><i class="fas fa-pencil-alt pen"></i></button></li><li class="tool-item" ><button class="paint-bucket tool_button"><i class="fas fa-fill-drip paint-bucket" ></i></button></li><li class="tool-item "><button class="choose-color tool_button"><i class="fas fa-eye-dropper choose-color"></i></button></li><li class="tool-item"><button class="move tool_button"><i class="fas fa-arrows-alt move"></i></button></li><li class="tool-item"><button class="eraster tool_button"><i class="fas fa-eraser eraster"></i></button></li><li class="tool-item"><button class="drawLine tool_button"><i class="fas fa-minus drawLine""></i></button></li></ul>',t.innerHTML+='<button class="clean"> Clean </button>',r.innerHTML+='<p class="size_label">Canvas size</p><select class="size_container"><option class="size_32">32X32</option><option class="size_64">64X64</option><option class="size_128">128X128</option></select>',document.body.appendChild(e),e.appendChild(t),e.appendChild(r)}static renderFrames(){const e=document.createElement("section"),t=document.querySelector("main");e.classList.add("frames");e.innerHTML+='<div class="frame_wrapper"><div class="frame" draggable="true"><canvas class="frame_canvas canvas active_tool" width="96px" height="96px"></canvas><button class="delete-button"><i class="fas fa-trash-alt"></i></button><button class="duplicate-button"><i class="fas fa-copy"></i></button><button class="move-button"><i class="fas fa-arrows-alt"></i></button></div></div>',t.appendChild(e),e.innerHTML+='<button class="addFrames"> + Add new frames </button>',t.innerHTML+='<section class="draw_container"><canvas class="draw_canvas canvas"></canvas></section>'}static renderPreview(){const e=document.createElement("section"),t=document.querySelector("main");e.classList.add("animation");e.innerHTML+='<div><canvas class="preview canvas" width = "300px" height="300px"></canvas><input type="range" name="fps" min ="0.1" max ="50" id="fps" class ="fps"><label for="fps">FPS</label><div class="fps_value"></div></div>',e.innerHTML+='<button class="full_screen">Full Screen</button>',t.appendChild(e)}static colorPicker(){const e=document.createElement("div");e.classList.add("color_container");const t=document.querySelector(".tools");e.innerHTML+='<input type="color" class="firstColor"><input type="color" class="secondColor">',t.appendChild(e)}}r(2),r(5);var s=a;class c{static rgbToHex(e){let t=Number(e).toString(16);return t.length<2&&(t=`0${t}`),t}static fullColorHex(e,t,r){return`#${c.rgbToHex(e)}${c.rgbToHex(t)}${c.rgbToHex(r)}`}static hexToRgb(e){let t=0,r=0,n=0;return 4===e.length?(t=`0x${e[1]}${e[1]}`,r=`0x${e[2]}${e[2]}`,n=`0x${e[3]}${e[3]}`):7===e.length&&(t=`0x${e[1]}${e[2]}`,r=`0x${e[3]}${e[4]}`,n=`0x${e[5]}${e[6]}`),[parseInt(t,16),parseInt(r,16),parseInt(n,16)]}}class l{constructor(e,t,r,n){this.canvas=e,this.ctx=t,this.event=r,this.state=n}fillColor(){const e=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),t=c.hexToRgb(this.state.currentcolor),r=this.event.offsetX,n=this.event.offsetY,o=[[r,n]],i=this.ctx.getImageData(r,n,1,1),{data:a}=i,s=a[0],d=a[1],u=a[2],p=c.fullColorHex(s,d,u);if(this.state.currentcolor!==p){for(;o.length;){let r,n,i,a=0;a=o.pop();const[c]=a;let[p]=a;for(r=4*(p*this.canvas.width+c);p-- >=0&&l.matchStartColor(r,e,s,d,u);)r-=4*this.canvas.width;for(r+=4*this.canvas.width,++p,n=!1,i=!1;p++<this.canvas.height-1&&l.matchStartColor(r,e,s,d,u);)l.colorPixel(r,e,t),c>0&&(l.matchStartColor(r-4,e,s,d,u)?n||(o.push([c-1,p]),n=!0):n&&(n=!1)),c<this.canvas.width-1&&(l.matchStartColor(r+4,e,s,d,u)?i||(o.push([c+1,p]),i=!0):i&&(i=!1)),r+=4*this.canvas.width}this.ctx.putImageData(e,0,0)}}static matchStartColor(e,t,r,n,o){const i=t.data[e],a=t.data[e+1],s=t.data[e+2];return i===r&&a===n&&s===o}static colorPixel(e,t,r){const n=t;n.data[e]=r[0],n.data[e+1]=r[1],n.data[e+2]=r[2],n.data[e+3]=255}}class d{constructor(e,t,r,n,o){this.event=e,this.unitSize=t,this.ctx=r,this.state=n,this.primaryColor=o}getColor(){const{unitSize:e}=this,t=Math.ceil(this.event.offsetX/e)*e,r=Math.ceil(this.event.offsetY/e)*e,n=this.ctx.getImageData(t-e,r-e,e,e),{data:o}=n,i=o[0],a=o[1],s=o[2],l=c.fullColorHex(i,a,s);this.primaryColor.value=l,this.state.currentcolor=this.primaryColor.value}}(class{static start(){s.render(),i.start(),class{static start(){const e=document.querySelector(".firstColor"),t=document.querySelector(".secondColor"),r=document.querySelector(".tools"),n=document.querySelector(".clean"),o=document.querySelector(".size_container"),a=document.querySelector(".tool-size_container"),s=document.querySelector(".draw_canvas"),c=s.getContext("2d",{alpha:!1});c.fillStyle="#e6e6e6",c.fillRect(0,0,s.width,s.height);const u={currentTool:"",currentcolor:e.value,previColor:t.value,canvasSize:32,penSize:1,currentSize:"",activeFrame:"",activeTool:"",activePenSize:"",fullCoord:[],painting:!1},p=s.width/u.canvasSize,f={code:""};document.addEventListener("keydown",e=>{f.code=e.key,f.code!==e.key&&(f.code="")});const h=e=>{const t=Math.ceil(e.offsetX/p)*p,r=Math.ceil(e.offsetY/p)*p;c.fillStyle=u.currentcolor,c.fillRect(t-p,r-p,p*u.penSize,p*u.penSize),c.fill()},v=e=>{const t=Math.ceil(e.offsetX/p)*p,r=Math.ceil(e.offsetY/p)*p;c.clearRect(t-p,r-p,p*u.penSize,p*u.penSize)},m=e=>{c.beginPath();const t=Math.ceil(e.offsetX/p)*p,r=Math.ceil(e.offsetY/p)*p;u.fullCoord.push([t,r]),u.painting=!0},g=e=>{const t=Math.ceil(e.offsetX/p)*p,r=Math.ceil(e.offsetY/p)*p;u.fullCoord.push([t,r]),u.painting=!0};r.addEventListener("click",e=>{u.painting=!1,e.target!==u.activeTool&&""!==u.activeTool&&u.activeTool.classList.remove("active_tool"),e.target.classList.contains("tool_button")&&(u.activeTool=e.target,u.activeTool.classList.add("active_tool")),e.target.classList.contains("choose-color")?u.currentTool="colorPicker":e.target.classList.contains("paint-bucket")?u.currentTool="paintBucket":e.target.classList.contains("move")?u.currentTool="move":e.target.classList.contains("transform")?u.currentTool="transform":e.target.classList.contains("pen")?u.currentTool="pen":e.target.classList.contains("eraster")?u.currentTool="eraster":e.target.classList.contains("drawLine")?u.currentTool="drawLine":u.currentTool=""}),n.addEventListener("click",()=>{c.clearRect(0,0,s.width,s.height)}),s.addEventListener("click",t=>{if("colorPicker"===u.currentTool||"c"===f.code){new d(t,p,c,u,e).getColor()}}),e.addEventListener("input",()=>{u.currentcolor=e.value});o.addEventListener("input",()=>{(()=>{const{value:e}=o,t=e.slice(0,e.indexOf("X"));if(u.canvasSize!==t)if(+u.canvasSize<+t){const e=s.toDataURL("image/png"),r=new Image;r.src=e;const n=s.width/(t/u.canvasSize),o=s.height/(t/u.canvasSize);c.clearRect(0,0,s.width,s.height),c.drawImage(r,0,0,n,o)}else{const e=s.toDataURL("image/png"),r=new Image;r.src=e;const n=s.width*(u.canvasSize/t),o=s.height*(u.canvasSize/t);c.clearRect(0,0,s.width,s.height),c.drawImage(r,0,0,n,o)}u.canvasSize=t})()}),s.addEventListener("mousedown",()=>{if("pen"===u.currentTool||"p"===f.code)s.addEventListener("click",h),s.addEventListener("mousemove",h),s.addEventListener("mousemove",()=>{const e=i.activeFrame,t=s.toDataURL("image/png"),r=new Image;r.src=t,e.getContext("2d").drawImage(r,0,0,e.width,e.height)}),s.addEventListener("mouseup",()=>{s.removeEventListener("mousemove",h),s.removeEventListener("click",h)});else if("eraster"===u.currentTool)s.addEventListener("mousemove",v),s.addEventListener("mouseup",()=>{s.removeEventListener("mousemove",v)});else if("drawLine"===u.currentTool&&(s.addEventListener("click",m),s.addEventListener("mouseup",g),0!==u.fullCoord.length)){c.strokeStyle=u.currentcolor;const e=u.fullCoord;c.lineWidth=p*u.penSize,c.moveTo(e[0][0],e[0][1]),e.forEach(e=>{c.lineTo(e[0],e[1]),c.stroke()});const t=i.activeFrame,r=s.toDataURL("image/png"),n=new Image;n.src=r,t.getContext("2d").drawImage(n,0,0,t.width,t.height),u.painting||(s.removeEventListener("click",m),s.removeEventListener("mouseup",g))}}),s.addEventListener("click",e=>{if("paintBucket"===u.currentTool||"b"===f.code){new l(s,c,e,u).fillColor()}}),a.addEventListener("click",e=>{u.painting=!1,e.target!==u.activePenSize&&""!==u.activePenSize&&u.activePenSize.classList.remove("active_tool"),e.target.classList.contains("size-one")?(u.penSize=1,u.activePenSize=e.target,u.activePenSize.classList.add("active_tool")):e.target.classList.contains("size-two")?(u.penSize=2,u.activePenSize=e.target,u.activePenSize.classList.add("active_tool")):e.target.classList.contains("size-three")?(u.penSize=3,u.activePenSize=e.target,u.activePenSize.classList.add("active_tool")):e.target.classList.contains("size-four")&&(u.penSize=4,u.activePenSize=e.target,u.activePenSize.classList.add("active_tool"))})}}.start()}}).start()}]);
//# sourceMappingURL=app.bundle.js.map