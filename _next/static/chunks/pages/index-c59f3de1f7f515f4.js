(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8414)}])},8663:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(5893),o=n(723),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e){var t=e.isSecondary,n=void 0!==t&&t,o=s(e,["isSecondary"]);return(0,a.jsx)("button",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({className:"".concat(r().button," ").concat(n?r().secondary:"")},o))}},3241:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(5893),o=n(7294),r=n(1664),i=n(9447),s=n(4002),c=n(4135),l=n(5186),u=n(2997),d=n(4091),f=n.n(d);function p(e){var t=e.segments,n=void 0===t?[]:t,c=(0,o.useRef)(null),l=(0,o.useRef)(null);return(0,a.jsxs)(i.t,{className:f().carousel_segmento,spaceBetween:32,slidesPerView:"auto",centeredSlides:!0,pagination:!0,navigation:{prevEl:c.current?c.current:void 0,nextEl:l.current?l.current:void 0},onInit:function(e){e.params.navigation.prevEl=c.current,e.params.navigation.nextEl=l.current,e.navigation.update()},children:[n.map((function(e,t){var n="".concat(e.background.url.startsWith("/")?"https://napoleonabrasives.herokuapp.com":"").concat(e.background.url),o="".concat(e.icon.url.startsWith("/")?"https://napoleonabrasives.herokuapp.com":"").concat(e.icon.url);return(0,a.jsx)(s.o,{className:f().swiper_slide,children:function(t){var i=t.isActive;return(0,a.jsx)("div",{className:"".concat(i?f().active:""),children:(0,a.jsx)(r.default,{href:"/produtos/".concat(e.slug),children:(0,a.jsxs)("div",{className:f().box_segmento,children:[(0,a.jsx)("img",{src:n,width:"384px",height:"496px",alt:e.name}),(0,a.jsx)("div",{className:f().after,children:(0,a.jsxs)("div",{className:f().text,children:[(0,a.jsx)("div",{className:f().box_svg,children:(0,a.jsx)("img",{src:o,alt:e.name,width:"100%",height:"100%"})}),(0,a.jsx)("p",{className:f().p1averta,children:e.name})]})})]})})})}},t)})),(0,a.jsxs)("div",{className:"swipper_buttons",children:[(0,a.jsx)("div",{className:"swiper-button-prev",ref:c}),(0,a.jsx)("div",{className:"swiper-button-next",ref:l})]})]})}c.Z.use([l.Z,u.Z])},9189:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(5893),o=n(944),r=n.n(o);function i(e){var t=e.subtitle,n=void 0===t?"":t,o=e.title,i=void 0===o?"":o,s=e.isBlack,c=void 0!==s&&s,l=e.isWhite,u=void 0!==l&&l,d=e.isLeftAlign,f=void 0!==d&&d;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:r().subtitle,"data-aos":"fade-right",children:n}),(0,a.jsx)("h2",{className:"".concat(c?r().black:u?r().white:r().title," ").concat(f?r().left:""),"data-aos":"fade-right","data-aos-delay":"200",children:i})]})}},8414:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return We},default:function(){return Ye}});var a=n(4051),o=n.n(a),r=n(5893),i=n(7294),s=n(1664),c=n(1163),l=n(7776),u=n(2962),d=n(9359);let f={data:""},p=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,m=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,v=/\/\*[^]*?\*\/|\s\s+|\n/g,_=(e,t)=>{let n,a="",o="",r="";for(let i in e){let s=e[i];"object"==typeof s?(n=t?t.replace(/([^,])+/g,(e=>i.replace(/([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i,o+="@"==i[0]?"f"==i[1]?_(s,i):i+"{"+_(s,"k"==i[1]?"":t)+"}":_(s,n)):"@"==i[0]&&"i"==i[1]?a=i+" "+s+";":(i=i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=_.p?_.p(i,s):i+":"+s+";")}return r[0]?(n=t?t+"{"+r+"}":r,a+n+o):a+o},h={},g=e=>{let t="";for(let n in e)t+=n+("object"==typeof e[n]?g(e[n]):e[n]);return t},x=(e,t,n,a,o)=>{let r="object"==typeof e?g(e):e,i=h[r]||(h[r]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(r));if(!h[i]){let t="object"==typeof e?e:(e=>{let t,n=[{}];for(;t=m.exec(e.replace(v,""));)t[4]&&n.shift(),t[3]?n.unshift(n[0][t[3]]=n[0][t[3]]||{}):t[4]||(n[0][t[1]]=t[2]);return n[0]})(e);h[i]=_(o?{["@keyframes "+i]:t}:t,n?"":"."+i)}return((e,t,n)=>{-1==t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(h[i],t,a),i},b=(e,t,n)=>e.reduce(((e,a,o)=>{let r=t[o];if(r&&r.call){let e=r(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":_(e,""):e}return e+a+(null==r?"":r)}),"");function y(e){let t=this||{},n=e.call?e(t.p):e;return x(n.unshift?n.raw?b(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>n?Object.assign(e,n.call?n(t.p):n):e),{}):n,p(t.target),t.g,t.o,t.k)}y.bind({g:1});let j,O,S,T=y.bind({k:1});function N(e,t){let n=this||{};return function(){let a=arguments;function o(r,i){let s=Object.assign({},r),c=s.className||o.className;n.p=Object.assign({theme:O&&O()},s),n.o=/ *go\d+/.test(c),s.className=y.apply(n,a)+(c?" "+c:""),t&&(s.ref=i);let l=s.as||e;return S&&l[0]&&S(s),j(l,s)}return t?t(o):o}}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}function E(e,t){return t||(t=e.slice(0)),e.raw=t,e}var A,D=function(e,t){return function(e){return"function"===typeof e}(e)?e(t):e},P=function(){var e=0;return function(){return(++e).toString()}}(),k=function(){var e=void 0;return function(){if(void 0===e){var t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}}();!function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"}(A||(A={}));var C=new Map,I=function(e){if(!C.has(e)){var t=setTimeout((function(){C.delete(e),M({type:A.REMOVE_TOAST,toastId:e})}),1e3);C.set(e,t)}},R=function e(t,n){switch(n.type){case A.ADD_TOAST:return w({},t,{toasts:[n.toast].concat(t.toasts).slice(0,20)});case A.UPDATE_TOAST:return n.toast.id&&function(e){var t=C.get(e);t&&clearTimeout(t)}(n.toast.id),w({},t,{toasts:t.toasts.map((function(e){return e.id===n.toast.id?w({},e,n.toast):e}))});case A.UPSERT_TOAST:var a=n.toast;return t.toasts.find((function(e){return e.id===a.id}))?e(t,{type:A.UPDATE_TOAST,toast:a}):e(t,{type:A.ADD_TOAST,toast:a});case A.DISMISS_TOAST:var o=n.toastId;return o?I(o):t.toasts.forEach((function(e){I(e.id)})),w({},t,{toasts:t.toasts.map((function(e){return e.id===o||void 0===o?w({},e,{visible:!1}):e}))});case A.REMOVE_TOAST:return void 0===n.toastId?w({},t,{toasts:[]}):w({},t,{toasts:t.toasts.filter((function(e){return e.id!==n.toastId}))});case A.START_PAUSE:return w({},t,{pausedAt:n.time});case A.END_PAUSE:var r=n.time-(t.pausedAt||0);return w({},t,{pausedAt:void 0,toasts:t.toasts.map((function(e){return w({},e,{pauseDuration:e.pauseDuration+r})}))})}},U=[],H={toasts:[],pausedAt:void 0},M=function(e){H=R(H,e),U.forEach((function(e){e(H)}))},L={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Z=function(e){return function(t,n){var a=function(e,t,n){return void 0===t&&(t="blank"),w({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0},n,{id:(null==n?void 0:n.id)||P()})}(t,e,n);return M({type:A.UPSERT_TOAST,toast:a}),a.id}},F=function(e,t){return Z("blank")(e,t)};F.error=Z("error"),F.success=Z("success"),F.loading=Z("loading"),F.custom=Z("custom"),F.dismiss=function(e){M({type:A.DISMISS_TOAST,toastId:e})},F.remove=function(e){return M({type:A.REMOVE_TOAST,toastId:e})},F.promise=function(e,t,n){var a=F.loading(t.loading,w({},n,null==n?void 0:n.loading));return e.then((function(e){return F.success(D(t.success,e),w({id:a},n,null==n?void 0:n.success)),e})).catch((function(e){F.error(D(t.error,e),w({id:a},n,null==n?void 0:n.error))})),e};var B=function(e){var t=function(e){void 0===e&&(e={});var t=(0,i.useState)(H),n=t[0],a=t[1];(0,i.useEffect)((function(){return U.push(a),function(){var e=U.indexOf(a);e>-1&&U.splice(e,1)}}),[n]);var o=n.toasts.map((function(t){var n,a,o;return w({},e,e[t.type],t,{duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==(a=e)?void 0:a.duration)||L[t.type],style:w({},e.style,null==(o=e[t.type])?void 0:o.style,t.style)})}));return w({},n,{toasts:o})}(e),n=t.toasts,a=t.pausedAt;(0,i.useEffect)((function(){if(!a){var e=Date.now(),t=n.map((function(t){if(t.duration!==1/0){var n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((function(){return F.dismiss(t.id)}),n);t.visible&&F.dismiss(t.id)}}));return function(){t.forEach((function(e){return e&&clearTimeout(e)}))}}}),[n,a]);var o=(0,i.useMemo)((function(){return{startPause:function(){M({type:A.START_PAUSE,time:Date.now()})},endPause:function(){a&&M({type:A.END_PAUSE,time:Date.now()})},updateHeight:function(e,t){return M({type:A.UPDATE_TOAST,toast:{id:e,height:t}})},calculateOffset:function(e,t){var a,o=t||{},r=o.reverseOrder,i=void 0!==r&&r,s=o.gutter,c=void 0===s?8:s,l=o.defaultPosition,u=n.filter((function(t){return(t.position||l)===(e.position||l)&&t.height})),d=u.findIndex((function(t){return t.id===e.id})),f=u.filter((function(e,t){return t<d&&e.visible})).length,p=(a=u.filter((function(e){return e.visible}))).slice.apply(a,i?[f+1]:[0,f]).reduce((function(e,t){return e+(t.height||0)+c}),0);return p}}}),[n,a]);return{toasts:n,handlers:o}};function z(){var e=E(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return z=function(){return e},e}function V(){var e=E(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return V=function(){return e},e}function q(){var e=E(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return q=function(){return e},e}function G(){var e=E(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return G=function(){return e},e}var X=T(G()),W=T(q()),Y=T(V()),J=N("div")(z(),(function(e){return e.primary||"#ff4b4b"}),X,W,(function(e){return e.secondary||"#fff"}),Y);function K(){var e=E(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return K=function(){return e},e}function Q(){var e=E(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return Q=function(){return e},e}var $=T(Q()),ee=N("div")(K(),(function(e){return e.secondary||"#e0e0e0"}),(function(e){return e.primary||"#616161"}),$);function te(){var e=E(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return te=function(){return e},e}function ne(){var e=E(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return ne=function(){return e},e}function ae(){var e=E(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return ae=function(){return e},e}var oe=T(ae()),re=T(ne()),ie=N("div")(te(),(function(e){return e.primary||"#61d345"}),oe,re,(function(e){return e.secondary||"#fff"}));function se(){var e=E(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return se=function(){return e},e}function ce(){var e=E(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return ce=function(){return e},e}function le(){var e=E(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return le=function(){return e},e}function ue(){var e=E(["\n  position: absolute;\n"]);return ue=function(){return e},e}var de=N("div")(ue()),fe=N("div")(le()),pe=T(ce()),me=N("div")(se(),pe),ve=function(e){var t=e.toast,n=t.icon,a=t.type,o=t.iconTheme;return void 0!==n?"string"===typeof n?(0,i.createElement)(me,null,n):n:"blank"===a?null:(0,i.createElement)(fe,null,(0,i.createElement)(ee,Object.assign({},o)),"loading"!==a&&(0,i.createElement)(de,null,"error"===a?(0,i.createElement)(J,Object.assign({},o)):(0,i.createElement)(ie,Object.assign({},o))))};function _e(){var e=E(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n"]);return _e=function(){return e},e}function he(){var e=E(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return he=function(){return e},e}var ge=function(e){return"\n0% {transform: translate3d(0,"+-200*e+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},xe=function(e){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*e+"%,-1px) scale(.6); opacity:0;}\n"},be=N("div",i.forwardRef)(he()),ye=N("div")(_e()),je=(0,i.memo)((function(e){var t=e.toast,n=e.position,a=e.style,o=e.children,r=null!=t&&t.height?function(e,t){var n=e.includes("top")?1:-1,a=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ge(n),xe(n)],o=a[1];return{animation:t?T(a[0])+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":T(o)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(t.position||n||"top-center",t.visible):{opacity:0},s=(0,i.createElement)(ve,{toast:t}),c=(0,i.createElement)(ye,Object.assign({},t.ariaProps),D(t.message,t));return(0,i.createElement)(be,{className:t.className,style:w({},r,a,t.style)},"function"===typeof o?o({icon:s,message:c}):(0,i.createElement)(i.Fragment,null,s,c))}));function Oe(){var e=E(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return Oe=function(){return e},e}!function(e,t,n,a){_.p=t,j=e,O=n,S=a}(i.createElement);var Se=y(Oe()),Te=function(e){var t=e.reverseOrder,n=e.position,a=void 0===n?"top-center":n,o=e.toastOptions,r=e.gutter,s=e.children,c=e.containerStyle,l=e.containerClassName,u=B(o),d=u.toasts,f=u.handlers;return(0,i.createElement)("div",{style:w({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},c),className:l,onMouseEnter:f.startPause,onMouseLeave:f.endPause},d.map((function(e){var n,o=e.position||a,c=function(e,t){var n=e.includes("top"),a=n?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return w({left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+t*(n?1:-1)+"px)"},a,o)}(o,f.calculateOffset(e,{reverseOrder:t,gutter:r,defaultPosition:a})),l=e.height?void 0:(n=function(t){f.updateHeight(e.id,t.height)},function(e){e&&setTimeout((function(){var t=e.getBoundingClientRect();n(t)}))});return(0,i.createElement)("div",{ref:l,className:e.visible?Se:"",key:e.id,style:c},"custom"===e.type?D(e.message,e):s?s(e):(0,i.createElement)(je,{toast:e,position:o}))})))},Ne=F,we=n(4865),Ee=n.n(we),Ae=n(8254),De=n.n(Ae),Pe=n(5414),ke=n.n(Pe),Ce=n(1587),Ie=n(8663),Re=n(6529),Ue=(n(6494),n(3360)),He=n.n(Ue);function Me(){return Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Me.apply(this,arguments)}function Le(e){var t=Me({},e);return(0,r.jsxs)("div",{className:He().carousel_home,children:[(0,r.jsx)("h3",{"data-aos":"fade-right",children:null===t||void 0===t?void 0:t.subtitle}),(0,r.jsx)("h2",{className:He().averta,"data-aos":"fade-left",children:null===t||void 0===t?void 0:t.title}),(0,r.jsx)("p",{className:He().p1,"data-aos":"fade-left",children:null===t||void 0===t?void 0:t.text}),(null===t||void 0===t?void 0:t.showbutton)&&(0,r.jsx)(s.default,{href:(null===t||void 0===t?void 0:t.buttonlink)||"#",children:(0,r.jsx)("a",{"data-aos":"fade-up",children:(0,r.jsx)(Ie.Z,{type:"button",children:null===t||void 0===t?void 0:t.buttontext})})})]})}function Ze(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Fe={desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}},Be=function(e){var t=e.deviceType,n=e.banners,a=void 0===n?[]:n;return 0==a.length&&(a=[{buttonlink:"/sobre",buttontext:"Conhe\xe7a a Napoleon",showbutton:!0,subtitle:"TECNOLOGIA EUROPEIA",text:"",title:"DESEMPENHO PARA VOC\xca"}]),(0,r.jsx)(Re.default,{swipeable:!0,draggable:!0,showDots:!1,responsive:Fe,ssr:!1,infinite:!0,autoPlay:!1,autoPlaySpeed:1e3,keyBoardControl:!0,customTransition:"all .5",transitionDuration:500,deviceType:t,children:a.map((function(e,t){return(0,i.createElement)(Le,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){Ze(e,t,n[t])}))}return e}({},e,{key:t}))}))})},ze=n(9189),Ve=n(3241),qe=n(487);function Ge(e,t,n,a,o,r,i){try{var s=e[r](i),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(a,o)}function Xe(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function i(e){Ge(r,a,o,i,s,"next",e)}function s(e){Ge(r,a,o,i,s,"throw",e)}i(void 0)}))}}var We=!0;function Ye(e){var t,n,a,f,p,m,v,_,h,g,x,b,y,j=e.seo,O=e.banners,S=e.about,T=e.differentials,N=e.catalog,w=e.segments,E=e.settings,A=(0,c.useRouter)(),D=(0,i.useState)(""),P=D[0],k=D[1],C=(0,i.useState)(!1),I=C[0],R=C[1],U="desktop";function H(){return H=Xe(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==P.trim()){e.next=4;break}return Ne.error("Preencha o e-mail para continuar."),e.abrupt("return");case 4:if(void 0!=N.media){e.next=7;break}return Ne.error("Nenhum cat\xe1logo encontrado!"),e.abrupt("return");case 7:fetch("".concat(N.media.url)).then((function(e){e.ok?(e.blob().then((function(e){var t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=N.media.name,n.click()})),k(""),R(!0),Ne.success("Cat\xe1logo baixado com sucesso!")):Ne.error("Nenhum cat\xe1logo encontrado!")}));case 8:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}return d.tq&&(U="mobile"),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.PB,{title:(null===j||void 0===j||null===(t=j.Seo)||void 0===t?void 0:t.metaTitle)||" Napoleon Abrasives",description:(null===j||void 0===j||null===(n=j.Seo)||void 0===n?void 0:n.metaDescription)||"Napoleon, Abrasives",canonical:A.pathname,additionalMetaTags:[{property:"keywords",content:(null===j||void 0===j||null===(a=j.Seo)||void 0===a?void 0:a.keywords)||""}],openGraph:{url:A.pathname,title:(null===j||void 0===j||null===(f=j.Seo)||void 0===f?void 0:f.metaTitle)||"Napoleon Abrasives",description:(null===j||void 0===j||null===(p=j.shareImage)||void 0===p?void 0:p.alt)||(null===j||void 0===j||null===(m=j.Seo)||void 0===m?void 0:m.metaDescription),images:[{url:(null===j||void 0===j||null===(v=j.Seo)||void 0===v||null===(_=v.shareImage)||void 0===_||null===(h=_.media)||void 0===h?void 0:h.url)||"/share.jpg",width:1210,height:544,alt:(null===j||void 0===j||null===(g=j.Seo)||void 0===g||null===(x=g.shareImage)||void 0===x?void 0:x.alt)||""}],site_name:"Napoleon Abrasives"},twitter:{handle:"@napoleonabrasives",site:"@site",cardType:"summary_large_image"},noindex:(null===j||void 0===j||null===(b=j.Seo)||void 0===b?void 0:b.preventIndexing)||!1,nofollow:(null===j||void 0===j||null===(y=j.Seo)||void 0===y?void 0:y.preventIndexing)||!1}),(0,r.jsx)(Te,{position:"bottom-right",reverseOrder:!1}),(0,r.jsx)(Ce.Z,{settings:E,segments:w}),(0,r.jsxs)("div",{className:Ee().container,children:[(0,r.jsx)("main",{className:Ee().home,children:(0,r.jsxs)("section",{className:Ee().section,children:[(0,r.jsx)(Be,{deviceType:U,banners:O}),(0,r.jsx)("div",{className:Ee().historia,children:(0,r.jsxs)("div",{className:Ee().wrap,children:[(0,r.jsx)("h3",{className:"".concat(Ee().averta," aos-init aos-animate"),"data-aos":"fade-right",children:(null===S||void 0===S?void 0:S.subtitlethree)||"65 ANOS DE"}),(0,r.jsx)("h3",{className:"aos-init aos-animate","data-aos":"fade-right","data-aos-delay":"200",children:(null===S||void 0===S?void 0:S.titlethree)||"HIST\xd3RIA, TRADI\xc7\xc3O E SUCESSO!"}),(0,r.jsx)(s.default,{href:"/contato",children:(0,r.jsxs)("a",{className:"".concat(Ee().duvida_text," aos-init aos-animate"),"data-aos":"fade-right","data-aos-delay":"300",children:[(0,r.jsx)("img",{style:{objectFit:"none"},src:"/assets/svg/duvida-icon.svg",alt:"D\xfavida"}),(0,r.jsx)("p",{className:Ee().p2_averta,children:"Entre em contato"})]})})]})})]})}),(0,r.jsxs)("div",{className:"background",children:[(0,r.jsx)("section",{className:Ee().segmentos,children:(0,r.jsx)("div",{className:Ee().image_lixas,children:(0,r.jsx)(l.VS,{y:[20,-40],tagOuter:"figure",children:(0,r.jsx)("img",{style:{objectFit:"none"},src:"/assets/img/lixas.png",alt:"Foto Lixas"})})})}),(0,r.jsx)("section",{children:(0,r.jsx)(ze.Z,{subtitle:"MADEIRA, METAL, AUTOMOTIVO E MUITO MAIS",title:"SEGMENTOS ATENDIDOS"})}),(0,r.jsx)("section",{className:"segmento aos-init aos-animate","data-aos":"fade-up",children:(0,r.jsx)(Ve.Z,{segments:w})}),(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:Ee().sobre,children:[(0,r.jsx)("div",{className:Ee().sobre_img,"data-aos":"fade-up",children:(0,r.jsx)("img",{style:{objectFit:"none"},src:"/assets/svg/mapa-sobre.svg",alt:"Mapa ilustrativo"})}),(0,r.jsxs)("div",{className:Ee().text,children:[(0,r.jsx)(ze.Z,{subtitle:"NOSSA HIST\xd3RIA",title:"SOBRE A NAPOLEON"}),(0,r.jsx)("p",{className:Ee().p1,style:{whiteSpace:"pre-line"},"data-aos":"fade-right",children:null===S||void 0===S?void 0:S.textone}),(0,r.jsx)(s.default,{href:"/sobre",children:(0,r.jsx)("a",{children:(0,r.jsx)(Ie.Z,{children:"CONHE\xc7A A NAPOLEON"})})})]})]})}),(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:De().diff,children:[(0,r.jsx)("div",{className:De().diff_image_mob,children:(0,r.jsx)("img",{style:{objectFit:"none"},src:"/assets/img/diff_mobile.png",alt:"Nossos Diferenciais"})}),(0,r.jsxs)("div",{className:De().list_products,children:[T.map((function(e,t){var n="".concat(e.media.url.startsWith("/")?"https://napoleonabrasives.herokuapp.com":"").concat(e.media.url);return(0,r.jsxs)("div",{className:"".concat(De().box_diff," aos-init aos-animate"),"data-aos":"fade-left",children:[(0,r.jsx)("div",{className:De().image,children:(0,r.jsx)("img",{src:n,width:"100%",height:"100%",alt:e.title})}),(0,r.jsxs)("div",{className:De().content,children:[(0,r.jsx)("p",{className:De().p2averta,children:e.title}),(0,r.jsx)("p",{className:De().p3,children:e.text})]})]},t)})),(0,r.jsx)(s.default,{href:"/contato",children:(0,r.jsx)("a",{children:(0,r.jsx)(Ie.Z,{isSecondary:!0,children:"Entre em Contato"})})})]}),(0,r.jsxs)("div",{className:De().diff_image,children:[(0,r.jsx)(l.VS,{y:[40,-20],tagOuter:"figure",children:(0,r.jsx)("img",{style:{objectFit:"none"},src:"/assets/img/diff.png",alt:"Nossos Diferenciais"})}),(0,r.jsx)(l.VS,{className:De().red_arrows,y:[-80,30],tagOuter:"figure",children:(0,r.jsx)("img",{style:{objectFit:"none"},src:"/assets/svg/diff/diff-arrows.svg",alt:"Flecha vermelha apontando para baixo"})})]})]})})]}),(0,r.jsx)("div",{className:ke().catalogo_fundo,children:(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:ke().content,children:[(0,r.jsx)(ze.Z,{subtitle:"PRODUTOS",title:"FA\xc7A DOWNLOAD DO NOSSO CAT\xc1LOGO"}),(0,r.jsxs)("form",{onSubmit:function(e){return H.apply(this,arguments)},"data-aos":"fade-right",children:[(0,r.jsx)("p",{className:ke().p1,children:"Digite seu e-mail abaixo e receba nosso cat\xe1logo completo."}),(0,r.jsxs)("div",{className:ke().input_div,children:[(0,r.jsx)("input",{type:"email",name:"email",placeholder:"E-mail corporativo",required:!0,onChange:function(e){return k(e.target.value)},value:P}),(0,r.jsx)("label",{children:"Seu e-mail"})]}),(0,r.jsxs)("p",{className:ke().p2,children:["Aviso!",(0,r.jsx)("br",{}),"Para seu conhecimento e seguran\xe7a: as informa\xe7\xf5es acima s\xe3o de natureza corporativa, desprovidas de dados pessoais. Eventualmente, poder\xe3o ser recebidos e-mails pessoais, os quais seguir\xe3o o par\xe2metro de anonimiza\xe7\xe3o e ser\xe3o utilizados exclusivamente para procedimentos preliminares pr\xf3prios das rela\xe7\xf5es negociais B2B ou ",(0,r.jsx)("span",{style:{color:"red"},children:"B2G"}),", nos termos da LGPD 7\xba, V, raz\xe3o pela qual coletamos sua concord\xe2ncia abaixo. No entanto, antes de consentir, pedimos que acesse e leia nossos termos e pol\xedticas, condi\xe7\xe3o para permanecer navegando."]}),(0,r.jsxs)("div",{className:ke().aceito_div,children:[(0,r.jsx)("input",{type:"checkbox",name:"aceito",id:"aceito",required:!0}),(0,r.jsxs)("p",{className:ke().p2,children:["Li e aceito o aviso acima, bem como os ",(0,r.jsx)(s.default,{href:"/docslegais",children:"termos"})," do website da Napoleon."]})]}),(0,r.jsx)(Ie.Z,{isSecondary:!0,type:"submit",disabled:I,children:I?"J\xc1 BAIXADO":"BAIXAR CAT\xc1LOGO"})]})]}),(0,r.jsx)("div",{className:ke().catalogo_img,"data-aos":"fade-down",children:(0,r.jsx)("img",{style:{objectFit:"none"},src:"/assets/img/catalogo.png",alt:"Baixe nosso cat\xe1logo"})})]})}),(0,r.jsx)(qe.Z,{settings:E,segments:w})]})]})}},723:function(e){e.exports={button:"Button_button__LC0yB",secondary:"Button_secondary__iODUy"}},3360:function(e){e.exports={carousel_home:"Card_carousel_home__kglyP",p1:"Card_p1__DjwjT",averta:"Card_averta__l5ZjY"}},4091:function(e){e.exports={carousel_segmento:"CarouselSegmento_carousel_segmento__eyWpI",swiper_slide:"CarouselSegmento_swiper_slide__71ZXq",active:"CarouselSegmento_active__jrNvI",box_segmento:"CarouselSegmento_box_segmento__Bz_PE",box_svg:"CarouselSegmento_box_svg__ihEMD",after:"CarouselSegmento_after__acoNm",text:"CarouselSegmento_text__ZBRY7",p1averta:"CarouselSegmento_p1averta__H0bwv"}},5414:function(e){e.exports={catalogo_fundo:"Catalogo_catalogo_fundo__Cxi5E",content:"Catalogo_content__f8FTQ",input_div:"Catalogo_input_div__uq0x3",aceito_div:"Catalogo_aceito_div__Staxs",p1:"Catalogo_p1__Rr8Jc",p2:"Catalogo_p2__KsqIR",catalogo_img:"Catalogo_catalogo_img__tE4_4"}},8254:function(e){e.exports={diff:"Diff_diff__UvM_P",list_products:"Diff_list_products__Kz4eX",box_diff:"Diff_box_diff__wRJrJ",content:"Diff_content__6xlub",image:"Diff_image__aqoeu",p2averta:"Diff_p2averta__PNvm6",p3:"Diff_p3__RHr4n",diff_image:"Diff_diff_image__utdeb",diff_image_mob:"Diff_diff_image_mob__ByTU1",red_arrows:"Diff_red_arrows__Q8Ldo"}},4865:function(e){e.exports={home:"Home_home__gG_P_",section:"Home_section__22yPl","carousel-container":"Home_carousel-container__1DEao",p1:"Home_p1__53U4_",historia:"Home_historia__prmL2",wrap:"Home_wrap__Ys1dX",averta:"Home_averta__d93NT",p2_averta:"Home_p2_averta__1wCmg",duvida_text:"Home_duvida_text__rWApW",segmentos:"Home_segmentos__2gLa_",image_lixas:"Home_image_lixas___KnvH",floating:"Home_floating__mHVYi",sobre:"Home_sobre__FXY6v",sobre_img:"Home_sobre_img__n5jAt",text:"Home_text__0G5hJ"}},944:function(e){e.exports={subtitle:"Title_subtitle__UChfc",title:"Title_title__urjKO",black:"Title_black__eCmKh",white:"Title_white__vaxvh",left:"Title_left__daPXC"}}},function(e){e.O(0,[348,947,396,769,163,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);