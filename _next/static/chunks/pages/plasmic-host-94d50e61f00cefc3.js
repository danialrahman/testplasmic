(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{8030:function(e,t,n){"use strict";var r,o;n.d(t,{FW:function(){return S},n5:function(){return T},nh:function(){return y},v9:function(){return P},xH:function(){return H}});var i=n(7294),a=n(3935);n(488);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=globalThis;null==f.__PlasmicHostVersion&&(f.__PlasmicHostVersion="2");var p=[],m=new function(e){var t=this;this.value=e,this.set=function(e){t.value=e,p.forEach((function(e){return e()}))},this.get=function(){return t.value}}(null);function _(){return function(e,t){if(void 0===t&&(t=""),null===e||void 0===e)throw t=(function(e){return"string"===typeof e}(t)?t:t())||"",new Error("Value must not be undefined or null"+(t?"- "+t:""));return e}(new URL("https://fakeurl/"+location.hash.replace(/#/,"?")).searchParams.get("origin"),"Missing information from Plasmic window.")}var d=0;function h(e){d++,m.set(e)}var v=(0,i.createContext)(!1);function b(){var e,t,n=!!window.parent,r=!(null==(e=location.hash)||!e.match(/\bcanvas=true\b/)),o=!(null==(t=location.hash)||!t.match(/\blive=true\b/))||!n,u=n&&!document.querySelector("#plasmic-studio-tag")&&!r&&!o,c=function(){var e=(0,i.useState)(0)[1];return(0,i.useCallback)((function(){e((function(e){return e+1}))}),[])}();if((0,i.useLayoutEffect)((function(){return p.push(c),function(){var e=p.indexOf(c);e>=0&&p.splice(e,1)}}),[c]),(0,i.useEffect)((function(){u&&n&&window.parent!==window&&function(){var e=document.createElement("script"),t=_();e.src=t+"/static/js/studio.js",document.body.appendChild(e)}()}),[u,n]),(0,i.useEffect)((function(){if(!u&&!document.querySelector("#getlibs")&&o){var e=document.createElement("script");e.id="getlibs",e.src=_()+"/static/js/getlibs.js",e.async=!1,e.onload=function(){null==window.__GetlibsReadyResolver||window.__GetlibsReadyResolver()},document.head.append(e)}}),[u]),!n)return null;if(r||o){var s=document.querySelector("#plasmic-app.__wab_user-body");s||((s=document.createElement("div")).id="plasmic-app",s.classList.add("__wab_user-body"),document.body.appendChild(s));var l=new URLSearchParams(location.hash),f=!!r&&{componentName:l.get("componentName")};return(0,a.createPortal)((0,i.createElement)(E,{key:""+d},(0,i.createElement)(v.Provider,{value:f},m.get())),s,"plasmic-app")}return u&&window.parent===window?(0,i.createElement)("iframe",{src:"https://docs.plasmic.app/app-content/app-host-ready#appHostUrl="+encodeURIComponent(location.href),style:{width:"100vw",height:"100vh",border:"none",position:"fixed",top:0,left:0,zIndex:99999999}}):null}var y=function(e){var t=e.enableWebpackHmr,n=(0,i.useState)(null),r=n[0],o=n[1];return(0,i.useEffect)((function(){o((0,i.createElement)(b,null))}),[]),(0,i.createElement)(i.Fragment,null,!t&&(0,i.createElement)(O,null),r)},w=[];function g(e){return w.push(e),function(){var t=w.indexOf(e);t>=0&&w.splice(t,1)}}var E=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,c(t,n),r.getDerivedStateFromError=function(e){return{error:e}};var o=r.prototype;return o.componentDidCatch=function(e){w.forEach((function(t){return t(e)}))},o.render=function(){return this.state.error?(0,i.createElement)("div",null,"Error: ",""+this.state.error.message):this.props.children},r}(i.Component);function O(){return null}var C=(0,i.createContext)(void 0);function R(e,t){if(t){for(var n,r=e,o=l(t.split("."));!(n=o()).done;){var i,a=n.value;r=null==(i=r)?void 0:i[a]}return r}}function P(e){return R(T(),e)}function T(){return(0,i.useContext)(C)}function S(e){var t,n,r=e.name,o=e.data,a=e.children,c=null!=(t=T())?t:{};return r?i.createElement(C.Provider,{value:u({},c,(n={},n[r]=o,n))},a):i.createElement(i.Fragment,null,a)}var L=globalThis;L.__PlasmicFetcherRegistry=[];var x=globalThis;null==x.__PlasmicComponentRegistry&&(x.__PlasmicComponentRegistry=[]);var A=globalThis;null==A.__PlasmicContextRegistry&&(A.__PlasmicContextRegistry=[]);var j,D,F=globalThis;function H(e,t){return V(e,t)}null==F.__PlasmicTraitRegistry&&(F.__PlasmicTraitRegistry=[]);var V=function(e,t){return e?t:Array.isArray(t)?t.map((function(t){return H(e,t)})):t&&(0,i.isValidElement)(t)&&"string"!==typeof t?(0,i.cloneElement)(t):t},G=globalThis,N=null!=(j=null==G||null==(D=G.__Sub)?void 0:D.setRepeatedElementFn)?j:function(e){V=e},k={__proto__:null,PlasmicCanvasContext:v,PlasmicCanvasHost:y,usePlasmicCanvasContext:function(){return(0,i.useContext)(v)},unstable_registerFetcher:function(e,t){L.__PlasmicFetcherRegistry.push({fetcher:e,meta:t})},registerComponent:function(e,t){x.__PlasmicComponentRegistry.push({component:e,meta:t})},registerGlobalContext:function(e,t){A.__PlasmicContextRegistry.push({component:e,meta:t})},registerTrait:function(e,t){F.__PlasmicTraitRegistry.push({trait:e,meta:t})},repeatedElement:H,DataContext:C,applySelector:R,useSelector:P,useSelectors:function(e){void 0===e&&(e={});var t=T();return Object.fromEntries(Object.entries(e).filter((function(e){var t=e[0],n=e[1];return!!t&&!!n})).map((function(e){var n=e[0],r=e[1];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}(n,R(t,r))})))},useDataEnv:T,DataProvider:S,DataCtxReader:function(e){return(0,e.children)(T())}},U=globalThis;null==U.__Sub&&(console.log("Plasmic: Setting up app host dependencies"),U.__Sub=u({React:r||(r=n.t(i,2)),ReactDOM:o||(o=n.t(a,2)),hostModule:k,hostUtils:{setPlasmicRootNode:h,registerRenderErrorListener:g,setRepeatedElementFn:N},setPlasmicRootNode:h,registerRenderErrorListener:g,setRepeatedElementFn:N},k))},488:function(){if("undefined"!==typeof window){if(window.parent!==window)try{window.__REACT_DEVTOOLS_GLOBAL_HOOK__=window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__}catch(t){}if(!window.__REACT_DEVTOOLS_GLOBAL_HOOK__){var e=new Map;window.__REACT_DEVTOOLS_GLOBAL_HOOK__={supportsFiber:!0,renderers:e,inject:function(t){e.set(e.size+1,t)},onCommitFiberRoot:function(){},onCommitFiberUnmount:function(){}}}window.__REACT_DEVTOOLS_GLOBAL_HOOK__.__PlasmicPreambleVersion||(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.__PlasmicPreambleVersion="1")}},5651:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plasmic-host",function(){return n(6279)}])},6279:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),o=(n(7294),n(4298)),i=n.n(o),a=n(8030);function u(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(i(),{src:"https://static1.plasmic.app/preamble.js",strategy:"beforeInteractive"}),(0,r.jsx)(a.nh,{})]})}},4298:function(e,t,n){e.exports=n(3573)}},function(e){e.O(0,[774,888,179],(function(){return t=5651,e(e.s=t);var t}));var t=e.O();_N_E=t}]);