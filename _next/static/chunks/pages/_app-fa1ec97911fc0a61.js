(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{8424:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6142)}])},6526:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let i=r(7677),l=r(544),s=r(4848),n=l._(r(6540)),o=i._(r(961)),a=i._(r(6085)),d=r(7282),c=r(2105),u=r(9641);r(7679);let f=r(7644),m=i._(r(5472)),h=r(1903),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/wmdeals/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,i,l,s,n){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&l(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,l=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function x(e){return n.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,n.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:l,height:o,width:a,decoding:d,className:c,style:u,fetchPriority:f,placeholder:m,loading:p,unoptimized:b,fill:v,onLoadRef:w,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:_,sizesInput:S,onLoad:C,onError:P,...M}=e,N=(0,n.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&g(e,m,w,y,j,b,S))},[r,m,w,y,j,P,b,S]),z=(0,h.useMergedRef)(t,N);return(0,s.jsx)("img",{...M,...x(f),loading:p,width:a,height:o,decoding:d,"data-nimg":v?"fill":"1",className:c,style:u,sizes:l,srcSet:i,src:r,ref:z,onLoad:e=>{g(e.currentTarget,m,w,y,j,b,S)},onError:e=>{_(!0),"empty"!==m&&j(!0),P&&P(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...x(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,i),null):(0,s.jsx)(a.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,n.forwardRef)((e,t)=>{let r=(0,n.useContext)(f.RouterContext),i=(0,n.useContext)(u.ImageConfigContext),l=(0,n.useMemo)(()=>{var e;let t=p||i||c.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),l=t.deviceSizes.sort((e,t)=>e-t),s=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:l,qualities:s}},[i]),{onLoad:o,onLoadingComplete:a}=e,h=(0,n.useRef)(o);(0,n.useEffect)(()=>{h.current=o},[o]);let g=(0,n.useRef)(a);(0,n.useEffect)(()=>{g.current=a},[a]);let[x,w]=(0,n.useState)(!1),[y,j]=(0,n.useState)(!1),{props:_,meta:S}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:l,blurComplete:x,showAltText:y});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{..._,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:j,sizesInput:e.sizes,ref:t}),S.priority?(0,s.jsx)(v,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return l}});let i=r(6540);function l(e,t){let r=(0,i.useRef)(()=>{}),l=(0,i.useRef)(()=>{});return(0,i.useMemo)(()=>e&&t?i=>{null===i?(r.current(),l.current()):(r.current=s(e,i),l.current=s(t,i))}:e||t,[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7282:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(7679);let i=r(9197),l=r(2105);function s(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r,o;let a,d,c,{src:u,sizes:f,unoptimized:m=!1,priority:h=!1,loading:p,className:g,quality:x,width:b,height:v,fill:w=!1,style:y,overrideSrc:j,onLoad:_,onLoadingComplete:S,placeholder:C="empty",blurDataURL:P,fetchPriority:M,decoding:N="async",layout:z,objectFit:E,objectPosition:O,lazyBoundary:k,lazyRoot:R,...I}=e,{imgConf:D,showAltText:W,blurComplete:G,defaultLoader:F}=t,A=D||l.imageConfigDefault;if("allSizes"in A)a=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t),i=null==(r=A.qualities)?void 0:r.sort((e,t)=>e-t);a={...A,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===F)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let T=I.loader||F;delete I.loader,delete I.srcSet;let L="__next_img_default"in T;if(L){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:r,...i}=t;return e(i)}}if(z){"fill"===z&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!f&&(f=t)}let B="",q=n(b),U=n(v);if((o=u)&&"object"==typeof o&&(s(o)||void 0!==o.src)){let e=s(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(d=e.blurWidth,c=e.blurHeight,P=P||e.blurDataURL,B=e.src,!w){if(q||U){if(q&&!U){let t=q/e.width;U=Math.round(e.height*t)}else if(!q&&U){let t=U/e.height;q=Math.round(e.width*t)}}else q=e.width,U=e.height}}let V=!h&&("lazy"===p||void 0===p);(!(u="string"==typeof u?u:B)||u.startsWith("data:")||u.startsWith("blob:"))&&(m=!0,V=!1),a.unoptimized&&(m=!0),L&&!a.dangerouslyAllowSVG&&u.split("?",1)[0].endsWith(".svg")&&(m=!0);let Y=n(x),J=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:O}:{},W?{}:{color:"transparent"},y),X=G||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:q,heightInt:U,blurWidth:d,blurHeight:c,blurDataURL:P||"",objectFit:J.objectFit})+'")':'url("'+C+'")',H=X?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},$=function(e){let{config:t,src:r,unoptimized:i,width:l,quality:s,sizes:n,loader:o}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:l}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:l.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:l,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>l.find(t=>t>=e)||l[l.length-1]))],kind:"x"}}(t,l,n),c=a.length-1;return{sizes:n||"w"!==d?n:"100vw",srcSet:a.map((e,i)=>o({config:t,src:r,quality:s,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:o({config:t,src:r,quality:s,width:a[c]})}}({config:a,src:u,unoptimized:m,width:q,quality:Y,sizes:f,loader:T});return{props:{...I,loading:V?"lazy":p,fetchPriority:M,width:q,height:U,decoding:N,className:g,style:{...J,...H},sizes:$.sizes,srcSet:$.srcSet,src:j||$.src},meta:{unoptimized:m,priority:h,placeholder:C,fill:w}}}},9197:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:l,blurDataURL:s,objectFit:n}=e,o=i?40*i:t,a=l?40*l:r,d=o&&a?"viewBox='0 0 "+o+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2364:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return o}});let i=r(7677),l=r(7282),s=r(6526),n=i._(r(5472));function o(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/wmdeals/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=s.Image},5472:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:i,width:l,quality:s}=e,n=s||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(i)+"&w="+l+"&q="+n+(i.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},6142:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var i=r(4848);r(4472);var l=r(3368),s=r.n(l),n=r(6715);r(378);var o=r(9965),a=r.n(o);let d={worldMobile:[{name:"World Mobile Links",href:"https://worldmobile.me/"},{name:"World Mobile Info",href:"https://worldmobile.info/"},{name:"Stake with The Club",href:"https://stake.worldmobile.club/"}],community:[{name:"Community Forum",href:"https://worldmobile.club/"},{name:"Twitter",href:"https://x.com/Club_wmtx"}],legal:[{name:"Privacy Policy",href:"/privacy"},{name:"Terms of Service",href:"/terms"}],social:[{name:"Twitter",href:"https://x.com/Club_wmtx",icon:"bxl-twitter"}]};function c(){return(0,i.jsxs)("footer",{"aria-labelledby":"footer-heading",className:"bg-black text-white",children:[(0,i.jsx)("h2",{id:"footer-heading",className:"sr-only",children:"Footer"}),(0,i.jsxs)("div",{className:"mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32",children:[(0,i.jsxs)("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8",children:[(0,i.jsxs)("div",{className:"space-y-6",children:[(0,i.jsxs)("a",{href:"#",className:"flex items-center space-x-3",children:[(0,i.jsx)(a(),{src:"/deals-logo.png",alt:"World Mobile Deals",width:40,height:40,priority:!0}),(0,i.jsx)("span",{className:"text-lg font-semibold tracking-wide",children:"World Mobile Deals"})]}),(0,i.jsx)("p",{className:"text-sm text-lightGrey",children:"Get the best prices and deals on World Mobile plans and home internet."}),(0,i.jsx)("div",{className:"flex space-x-6",children:d.social.map(e=>(0,i.jsxs)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-lightGrey hover:text-primary transition",children:[(0,i.jsx)("i",{className:"bx ".concat(e.icon," text-2xl")}),(0,i.jsx)("span",{className:"sr-only",children:e.name})]},e.name))})]}),(0,i.jsxs)("div",{className:"mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3",children:[(0,i.jsx)(u,{title:"World Mobile",links:d.worldMobile}),(0,i.jsx)(u,{title:"Community",links:d.community}),(0,i.jsx)(u,{title:"Legal",links:d.legal})]})]}),(0,i.jsx)("div",{className:"mt-12 border-t border-white/10 pt-8 text-center",children:(0,i.jsxs)("p",{className:"text-xs text-lightGrey",children:["\xa9 ",new Date().getFullYear()," The Club. All rights reserved."]})})]})]})}function u(e){let{title:t,links:r}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-sm font-semibold leading-6 text-white",children:t}),(0,i.jsx)("ul",{role:"list",className:"mt-4 space-y-3",children:r.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:e.href,className:"text-sm text-lightGrey hover:text-primary transition",children:e.name})},e.name))})]})}function f(e){let{Component:t,pageProps:r}=e,l=(0,n.useRouter)(),o="https://worldmobiledeals.com".concat(l.asPath);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"World Mobile Deals - No-Contract Mobile Phone Plans"}),(0,i.jsx)("meta",{name:"description",content:"Switch to World Mobile Deals for no-contract mobile phone plans. Enjoy better privacy, nationwide coverage, and reliable connectivity."}),(0,i.jsx)("link",{rel:"canonical",href:o})]}),(0,i.jsx)("main",{className:"bg-background text-foreground",children:(0,i.jsx)(t,{...r})}),(0,i.jsx)(c,{})]})}},378:()=>{},4472:()=>{},3368:(e,t,r)=>{e.exports=r(6085)},9965:(e,t,r)=>{e.exports=r(2364)},6715:(e,t,r)=>{e.exports=r(8440)}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(8424),t(8440))),_N_E=e.O()}]);