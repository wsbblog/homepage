if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const a=e=>s(e,r),d={module:{uri:r},exports:o,require:a};i[r]=Promise.all(n.map((e=>d[e]||a(e)))).then((e=>(c(...e),o)))}}define(["./workbox-c2058018"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.1e42f993.css",revision:null},{url:"assets/index.ca1d28e4.js",revision:null},{url:"index.html",revision:"66c96378ed97d05ca0788e58857a6271"},{url:"loading/loading.css",revision:"ed8e68b8eed6bf62118b8968f6cd7fe0"},{url:"loading/loading.min.css",revision:"ad670337926785f74414f7a468a7c090"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon/72.png",revision:"ec8452cb3a4b7d8ff7b2a2ea1cc3594e"},{url:"images/icon/96.png",revision:"eccf665515af2f01fab017ddc474533e"},{url:"images/icon/128.png",revision:"af547de537c1cbb8e091e21e324bc67d"},{url:"images/icon/144.png",revision:"15d7e2059e2d99db3eeffac5b801d021"},{url:"images/icon/192.png",revision:"76557fce092579fce29e5478690887ea"},{url:"images/icon/512.png",revision:"8a76dc34acd68f3a584fa2e22dfa7bed"},{url:"manifest.webmanifest",revision:"e27268167d62b0899f4680282a54ba51"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
