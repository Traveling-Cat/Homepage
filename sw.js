if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const a=e=>s(e,r),d={module:{uri:r},exports:o,require:a};i[r]=Promise.all(n.map((e=>d[e]||a(e)))).then((e=>(c(...e),o)))}}define(["./workbox-082d0e8a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.42b0b3b6.css",revision:null},{url:"assets/index.93b2c15b.js",revision:null},{url:"index.html",revision:"2270fa07fa849144d57e8c2e1c890df9"},{url:"loading/loading.css",revision:"97fefeccd8990346f6e8ae49101507fa"},{url:"loading/loading.min.css",revision:"545e4423de4c59bc4303fc592da53790"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/48.png",revision:"bdeb2b915105f31570a75f04717d4ec3"},{url:"images/icon/72.png",revision:"92b2f2a7e6502b7f741829fb8f5d9c3a"},{url:"images/icon/96.png",revision:"b9f82b92026c095b1beefe14b5db782a"},{url:"images/icon/128.png",revision:"db59290018756c0b56353921e36b2700"},{url:"images/icon/144.png",revision:"25a39aeb3e2dc916c168aacf4a128bed"},{url:"images/icon/192.png",revision:"083848b8070ddaa1484564bb6f8876f3"},{url:"images/icon/512.png",revision:"61317460c2ca3ddcce7067f766f2daa3"},{url:"manifest.webmanifest",revision:"ba42536e530a40c0c5d78ad388508288"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
