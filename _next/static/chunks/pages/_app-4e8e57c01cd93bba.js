(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{8424:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6142)}])},6526:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let i=r(7677),s=r(544),l=r(4848),n=s._(r(6540)),o=i._(r(961)),a=i._(r(6085)),d=r(7282),u=r(2105),c=r(9641);r(7679);let f=r(7644),m=i._(r(5472)),h=r(1903),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,i,s,l,n){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,s=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function x(e){return n.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,n.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:s,height:o,width:a,decoding:d,className:u,style:c,fetchPriority:f,placeholder:m,loading:p,unoptimized:b,fill:v,onLoadRef:w,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:_,sizesInput:S,onLoad:C,onError:N,...P}=e,M=(0,n.useCallback)(e=>{e&&(N&&(e.src=e.src),e.complete&&g(e,m,w,y,j,b,S))},[r,m,w,y,j,N,b,S]),z=(0,h.useMergedRef)(t,M);return(0,l.jsx)("img",{...P,...x(f),loading:p,width:a,height:o,decoding:d,"data-nimg":v?"fill":"1",className:u,style:c,sizes:s,srcSet:i,src:r,ref:z,onLoad:e=>{g(e.currentTarget,m,w,y,j,b,S)},onError:e=>{_(!0),"empty"!==m&&j(!0),N&&N(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...x(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,i),null):(0,l.jsx)(a.default,{children:(0,l.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,n.forwardRef)((e,t)=>{let r=(0,n.useContext)(f.RouterContext),i=(0,n.useContext)(c.ImageConfigContext),s=(0,n.useMemo)(()=>{var e;let t=p||i||u.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),s=t.deviceSizes.sort((e,t)=>e-t),l=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:s,qualities:l}},[i]),{onLoad:o,onLoadingComplete:a}=e,h=(0,n.useRef)(o);(0,n.useEffect)(()=>{h.current=o},[o]);let g=(0,n.useRef)(a);(0,n.useEffect)(()=>{g.current=a},[a]);let[x,w]=(0,n.useState)(!1),[y,j]=(0,n.useState)(!1),{props:_,meta:S}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:s,blurComplete:x,showAltText:y});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b,{..._,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:j,sizesInput:e.sizes,ref:t}),S.priority?(0,l.jsx)(v,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return s}});let i=r(6540);function s(e,t){let r=(0,i.useRef)(()=>{}),s=(0,i.useRef)(()=>{});return(0,i.useMemo)(()=>e&&t?i=>{null===i?(r.current(),s.current()):(r.current=l(e,i),s.current=l(t,i))}:e||t,[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7282:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(7679);let i=r(9197),s=r(2105);function l(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r,o;let a,d,u,{src:c,sizes:f,unoptimized:m=!1,priority:h=!1,loading:p,className:g,quality:x,width:b,height:v,fill:w=!1,style:y,overrideSrc:j,onLoad:_,onLoadingComplete:S,placeholder:C="empty",blurDataURL:N,fetchPriority:P,decoding:M="async",layout:z,objectFit:k,objectPosition:E,lazyBoundary:O,lazyRoot:R,...I}=e,{imgConf:D,showAltText:W,blurComplete:G,defaultLoader:F}=t,A=D||s.imageConfigDefault;if("allSizes"in A)a=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t),i=null==(r=A.qualities)?void 0:r.sort((e,t)=>e-t);a={...A,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===F)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=I.loader||F;delete I.loader,delete I.srcSet;let T="__next_img_default"in L;if(T){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...i}=t;return e(i)}}if(z){"fill"===z&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!f&&(f=t)}let B="",q=n(b),U=n(v);if((o=c)&&"object"==typeof o&&(l(o)||void 0!==o.src)){let e=l(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(d=e.blurWidth,u=e.blurHeight,N=N||e.blurDataURL,B=e.src,!w){if(q||U){if(q&&!U){let t=q/e.width;U=Math.round(e.height*t)}else if(!q&&U){let t=U/e.height;q=Math.round(e.width*t)}}else q=e.width,U=e.height}}let V=!h&&("lazy"===p||void 0===p);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(m=!0,V=!1),a.unoptimized&&(m=!0),T&&!a.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(m=!0);let Y=n(x),J=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:E}:{},W?{}:{color:"transparent"},y),X=G||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:q,heightInt:U,blurWidth:d,blurHeight:u,blurDataURL:N||"",objectFit:J.objectFit})+'")':'url("'+C+'")',H=X?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},$=function(e){let{config:t,src:r,unoptimized:i,width:s,quality:l,sizes:n,loader:o}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,n),u=a.length-1;return{sizes:n||"w"!==d?n:"100vw",srcSet:a.map((e,i)=>o({config:t,src:r,quality:l,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:o({config:t,src:r,quality:l,width:a[u]})}}({config:a,src:c,unoptimized:m,width:q,quality:Y,sizes:f,loader:L});return{props:{...I,loading:V?"lazy":p,fetchPriority:P,width:q,height:U,decoding:M,className:g,style:{...J,...H},sizes:$.sizes,srcSet:$.srcSet,src:j||$.src},meta:{unoptimized:m,priority:h,placeholder:C,fill:w}}}},9197:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:s,blurDataURL:l,objectFit:n}=e,o=i?40*i:t,a=s?40*s:r,d=o&&a?"viewBox='0 0 "+o+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2364:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return o}});let i=r(7677),s=r(7282),l=r(6526),n=i._(r(5472));function o(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=l.Image},5472:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:i,width:s,quality:l}=e,n=l||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(i)+"&w="+s+"&q="+n+(i.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},6142:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var i=r(4848);r(4472),r(378);var s=r(9965),l=r.n(s);let n={worldMobile:[{name:"World Mobile Links",href:"https://worldmobile.me/"},{name:"Grow the Network",href:"https://worldmobile.info/"},{name:"Stake with The Club",href:"https://stake.worldmobile.club/"}],community:[{name:"Community Forum",href:"https://worldmobile.club/"},{name:"Twitter",href:"https://x.com/Club_wmtx"}],legal:[{name:"Privacy Policy",href:"/privacy"},{name:"Terms of Service",href:"/terms"}],social:[{name:"Twitter",href:"https://x.com/Club_wmtx",icon:"bxl-twitter"}]};function o(){return(0,i.jsxs)("footer",{"aria-labelledby":"footer-heading",className:"bg-black text-white",children:[(0,i.jsx)("h2",{id:"footer-heading",className:"sr-only",children:"Footer"}),(0,i.jsxs)("div",{className:"mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32",children:[(0,i.jsxs)("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8",children:[(0,i.jsxs)("div",{className:"space-y-6",children:[(0,i.jsxs)("a",{href:"https://wm.deals/",className:"flex items-center space-x-3",children:[(0,i.jsx)(l(),{src:"/web-app-manifest-512x512.png",alt:"WM Deals",width:40,height:40,priority:!0}),(0,i.jsx)("span",{className:"text-lg font-semibold tracking-wide",children:"WM Deals"})]}),(0,i.jsx)("p",{className:"text-sm text-lightGrey",children:"WM Deals is an independent affiliate site. We’re not connected to World Mobile, and we may earn a commission when you use our links."}),(0,i.jsx)("div",{className:"flex space-x-6",children:n.social.map(e=>(0,i.jsxs)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-lightGrey hover:text-primary transition",children:[(0,i.jsx)("i",{className:"bx ".concat(e.icon," text-2xl")}),(0,i.jsx)("span",{className:"sr-only",children:e.name})]},e.name))})]}),(0,i.jsxs)("div",{className:"mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3",children:[(0,i.jsx)(a,{title:"Links",links:n.worldMobile}),(0,i.jsx)(a,{title:"Community",links:n.community}),(0,i.jsx)(a,{title:"Legal",links:n.legal})]})]}),(0,i.jsx)("div",{className:"mt-12 border-t border-white/10 pt-8 text-center",children:(0,i.jsxs)("p",{className:"text-xs text-lightGrey",children:["\xa9 ",new Date().getFullYear()," WM Deals. All rights reserved."]})})]})]})}function a(e){let{title:t,links:r}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-sm font-semibold leading-6 text-white",children:t}),(0,i.jsx)("ul",{role:"list",className:"mt-4 space-y-3",children:r.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:e.href,className:"text-sm text-lightGrey hover:text-primary transition",children:e.name})},e.name))})]})}function d(e){let{Component:t,pageProps:r}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("main",{className:"bg-background text-foreground",children:(0,i.jsx)(t,{...r})}),(0,i.jsx)(o,{})]})}},378:()=>{},4472:()=>{},9965:(e,t,r)=>{e.exports=r(2364)}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(8424),t(8440))),_N_E=e.O()}]);