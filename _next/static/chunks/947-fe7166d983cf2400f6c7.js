(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[947],{1163:function(i,e,s){i.exports=s(4651)},9359:function(i,e,s){"use strict";var r,o=s(7294),n=(r=o)&&"object"===typeof r&&"default"in r?r.default:r,t=new(s(3451)),a=t.getBrowser(),l=(t.getCPU(),t.getDevice()),d=t.getEngine(),w=t.getOS(),u=t.getUA(),b=function(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return i||e},c=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},m=function(i){var e=c();return e&&e.platform&&(-1!==e.platform.indexOf(i)||"MacIntel"===e.platform&&e.maxTouchPoints>1&&!window.MSStream)};function p(i){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"===typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(i)}function f(i,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function g(i,e,s){return e in i?Object.defineProperty(i,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[e]=s,i}function h(){return(h=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(i[r]=s[r])}return i}).apply(this,arguments)}function v(i,e){var s=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),s.push.apply(s,r)}return s}function x(i){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(i)}function y(i,e){return(y=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i})(i,e)}function k(i,e){if(null==i)return{};var s,r,o=function(i,e){if(null==i)return{};var s,r,o={},n=Object.keys(i);for(r=0;r<n.length;r++)s=n[r],e.indexOf(s)>=0||(o[s]=i[s]);return o}(i,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);for(r=0;r<n.length;r++)s=n[r],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(i,s)&&(o[s]=i[s])}return o}function O(i){if(void 0===i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}var S="mobile",E="tablet",_="smarttv",A="console",C="wearable",j=void 0,M={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},P={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},T={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},N=function(i,e,s,r){return function(i){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?v(s,!0).forEach((function(e){g(i,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(s)):v(s).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(s,e))}))}return i}({},i,{vendor:b(e.vendor),model:b(e.model),os:b(s.name),osVersion:b(s.version),ua:b(r)})},B=function(i){switch(i){case S:return{isMobile:!0};case E:return{isTablet:!0};case _:return{isSmartTV:!0};case A:return{isConsole:!0};case C:return{isWearable:!0};case j:return{isBrowser:!0};default:return T}}(l.type);var I=function(){return"string"===typeof u&&-1!==u.indexOf("Edg/")},z=function(){return l.type===j},R=function(){return a.name===M.Edge},q=function(){return m("iPad")},F=l.type===_,U=l.type===A,V=l.type===C,D=a.name===M.MobileSafari||q(),L=a.name===M.Chromium,W=function(){switch(l.type){case S:case E:return!0;default:return!1}}()||q(),G=l.type===S,Z=l.type===E||q(),H=z(),Y=z(),$=w.name===P.Android,X=w.name===P.WindowsPhone,J=w.name===P.IOS||q(),K=a.name===M.Chrome,Q=a.name===M.Firefox,ii=a.name===M.Safari||a.name===M.MobileSafari,ei=a.name===M.Opera,si=a.name===M.InternetExplorer||a.name===M.Ie,ri=b(w.version),oi=b(w.name),ni=b(a.version),ti=b(a.major),ai=b(a.name),li=b(l.vendor),di=b(l.model),wi=b(d.name),ui=b(d.version),bi=b(u),ci=R()||I(),mi=a.name===M.Yandex,pi=b(l.type,"browser"),fi=function(){var i=c();return i&&(/iPad|iPhone|iPod/.test(i.platform)||"MacIntel"===i.platform&&i.maxTouchPoints>1)&&!window.MSStream}(),gi=q(),hi=m("iPhone"),vi=m("iPod"),xi=function(){var i=c(),e=i&&i.userAgent&&i.userAgent.toLowerCase();return"string"===typeof e&&/electron/.test(e)}(),yi=I(),ki=R()&&!I(),Oi=w.name===P.Windows,Si=w.name===P.MAC_OS,Ei=a.name===M.MIUI,_i=a.name===M.SamsungBrowser;e.tq=W},3451:function(i,e,s){var r;!function(o,n){"use strict";var t="function",a="undefined",l="object",d="string",w="model",u="name",b="type",c="vendor",m="version",p="architecture",f="console",g="mobile",h="tablet",v="smarttv",x="wearable",y="embedded",k={extend:function(i,e){var s={};for(var r in i)e[r]&&e[r].length%2===0?s[r]=e[r].concat(i[r]):s[r]=i[r];return s},has:function(i,e){return typeof i===d&&-1!==e.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return typeof i===d?i.replace(/[^\d\.]/g,"").split(".")[0]:n},trim:function(i,e){return i=i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof e===a?i:i.substring(0,255)}},O={rgx:function(i,e){for(var s,r,o,a,d,w,u=0;u<e.length&&!d;){var b=e[u],c=e[u+1];for(s=r=0;s<b.length&&!d;)if(d=b[s++].exec(i))for(o=0;o<c.length;o++)w=d[++r],typeof(a=c[o])===l&&a.length>0?2==a.length?typeof a[1]==t?this[a[0]]=a[1].call(this,w):this[a[0]]=a[1]:3==a.length?typeof a[1]!==t||a[1].exec&&a[1].test?this[a[0]]=w?w.replace(a[1],a[2]):n:this[a[0]]=w?a[1].call(this,w,a[2]):n:4==a.length&&(this[a[0]]=w?a[3].call(this,w.replace(a[1],a[2])):n):this[a]=w||n;u+=2}},str:function(i,e){for(var s in e)if(typeof e[s]===l&&e[s].length>0){for(var r=0;r<e[s].length;r++)if(k.has(e[s][r],i))return"?"===s?n:s}else if(k.has(e[s],i))return"?"===s?n:s;return i}},S={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},E={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[u,"Chrome"]],[/(?:edge|edgios|edga|edg)\/([\w\.]+)/i],[m,[u,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[u,m],[/opios[\/\s]+([\w\.]+)/i],[m,[u,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[m,[u,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[u,m],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[m,[u,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[m,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[u,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[m,[u,"IE"]],[/yabrowser\/([\w\.]+)/i],[m,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure Browser"],m],[/focus\/([\w\.]+)/i],[m,[u,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[m,[u,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[m,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[u,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[m,[u,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[m,[u,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[u,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 Browser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],m],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[u,m],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[u],[/;fbav\/([\w\.]+);/i],[m,[u,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[u,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[u,m],[/\bgsa\/([\w\.]+)\s.*safari\//i],[m,[u,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[m,[u,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[u,"Chrome WebView"],m],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[m,[u,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[u,m],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[m,[u,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[m,u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[u,[m,O.str,S.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[u,m],[/(navigator|netscape)\/([\w\.-]+)/i],[[u,"Netscape"],m],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[m,[u,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[u,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,k.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[p,/ower/,"",k.lowerize]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,k.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[w,[c,"Samsung"],[b,h]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[w,[c,"Samsung"],[b,g]],[/\((ip(?:hone|od)[\s\w]*);/i],[w,[c,"Apple"],[b,g]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[w,[c,"Apple"],[b,h]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[w,[c,"Huawei"],[b,h]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[w,[c,"Huawei"],[b,g]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[w,/_/g," "],[c,"Xiaomi"],[b,g]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[w,/_/g," "],[c,"Xiaomi"],[b,h]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[w,[c,"OPPO"],[b,g]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[w,[c,"Vivo"],[b,g]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[w,[c,"Realme"],[b,g]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[w,[c,"Motorola"],[b,g]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[w,[c,"Motorola"],[b,h]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[w,[c,"LG"],[b,h]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[w,[c,"LG"],[b,g]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[w,[c,"Lenovo"],[b,h]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[w,/_/g," "],[c,"Nokia"],[b,g]],[/droid.+;\s(pixel\sc)[\s)]/i],[w,[c,"Google"],[b,h]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[w,[c,"Google"],[b,g]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[w,[c,"Sony"],[b,g]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[w,"Xperia Tablet"],[c,"Sony"],[b,h]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[w,[c,"OnePlus"],[b,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[w,[c,"Amazon"],[b,h]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[w,"Fire Phone"],[c,"Amazon"],[b,g]],[/\((playbook);[\w\s\),;-]+(rim)/i],[w,c,[b,h]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[w,[c,"BlackBerry"],[b,g]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[w,[c,"ASUS"],[b,h]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[w,[c,"ASUS"],[b,g]],[/(nexus\s9)/i],[w,[c,"HTC"],[b,h]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[c,[w,/_/g," "],[b,g]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[w,[c,"Acer"],[b,h]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[w,[c,"Meizu"],[b,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[c,w,[b,g]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[c,w,[b,h]],[/\s(surface\sduo)\s/i],[w,[c,"Microsoft"],[b,h]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[w,[c,"Fairphone"],[b,g]],[/\s(u304aa)\sbuild/i],[w,[c,"AT&T"],[b,g]],[/sie-(\w*)/i],[w,[c,"Siemens"],[b,g]],[/[;\/]\s?(rct\w+)\sbuild/i],[w,[c,"RCA"],[b,h]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[w,[c,"Dell"],[b,h]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[w,[c,"Verizon"],[b,h]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[w,[c,"Barnes & Noble"],[b,h]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[w,[c,"NuVision"],[b,h]],[/;\s(k88)\sbuild/i],[w,[c,"ZTE"],[b,h]],[/;\s(nx\d{3}j)\sbuild/i],[w,[c,"ZTE"],[b,g]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[w,[c,"Swiss"],[b,g]],[/[;\/]\s?(zur\d{3})\sbuild/i],[w,[c,"Swiss"],[b,h]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[w,[c,"Zeki"],[b,h]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[c,"Dragon Touch"],w,[b,h]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[w,[c,"Insignia"],[b,h]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[w,[c,"NextBook"],[b,h]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[c,"Voice"],w,[b,g]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[c,"LvTel"],w,[b,g]],[/;\s(ph-1)\s/i],[w,[c,"Essential"],[b,g]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[w,[c,"Envizen"],[b,h]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[w,[c,"MachSpeed"],[b,h]],[/[;\/]\s?tu_(1491)\sbuild/i],[w,[c,"Rotor"],[b,h]],[/(shield[\w\s]+)\sbuild/i],[w,[c,"Nvidia"],[b,h]],[/(sprint)\s(\w+)/i],[c,w,[b,g]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[c,"Microsoft"],[b,g]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[w,[c,"Zebra"],[b,h]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[w,[c,"Zebra"],[b,g]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[c,w,[b,f]],[/droid.+;\s(shield)\sbuild/i],[w,[c,"Nvidia"],[b,f]],[/(playstation\s[345portablevi]+)/i],[w,[c,"Sony"],[b,f]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[w,[c,"Microsoft"],[b,f]],[/smart-tv.+(samsung)/i],[c,[b,v]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[c,"Samsung"],[b,v]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[c,"LG"],[b,v]],[/(apple)\s?tv/i],[c,[w,"Apple TV"],[b,v]],[/crkey/i],[[w,"Chromecast"],[c,"Google"],[b,v]],[/droid.+aft([\w])(\sbuild\/|\))/i],[w,[c,"Amazon"],[b,v]],[/\(dtv[\);].+(aquos)/i],[w,[c,"Sharp"],[b,v]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[c,k.trim],[w,k.trim],[b,v]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[b,v]],[/((pebble))app\/[\d\.]+\s/i],[c,w,[b,x]],[/droid.+;\s(glass)\s\d/i],[w,[c,"Google"],[b,x]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[w,[c,"Zebra"],[b,x]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[c,[b,y]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[w,[b,g]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[w,[b,h]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[b,k.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[w,[c,"Generic"]],[/(phone)/i],[[b,g]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[m,[u,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,u]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[u,m],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[u,[m,O.str,S.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[m,O.str,S.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[u,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[u,"Mac OS"],[m,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[u,m],[/\(bb(10);/i],[m,[u,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[m,[u,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[u,"webOS"]],[/crkey\/([\d\.]+)/i],[m,[u,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],m],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[u,m],[/(sunos)\s?([\w\.\d]*)/i],[[u,"Solaris"],m],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[u,m]]},_=function(i,e){if("object"===typeof i&&(e=i,i=n),!(this instanceof _))return new _(i,e).getResult();var s=i||("undefined"!==typeof o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),r=e?k.extend(E,e):E;return this.getBrowser=function(){var i={name:n,version:n};return O.rgx.call(i,s,r.browser),i.major=k.major(i.version),i},this.getCPU=function(){var i={architecture:n};return O.rgx.call(i,s,r.cpu),i},this.getDevice=function(){var i={vendor:n,model:n,type:n};return O.rgx.call(i,s,r.device),i},this.getEngine=function(){var i={name:n,version:n};return O.rgx.call(i,s,r.engine),i},this.getOS=function(){var i={name:n,version:n};return O.rgx.call(i,s,r.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(i){return s=typeof i===d&&i.length>255?k.trim(i,255):i,this},this.setUA(s),this};_.VERSION="0.7.28",_.BROWSER={NAME:u,MAJOR:"major",VERSION:m},_.CPU={ARCHITECTURE:p},_.DEVICE={MODEL:w,VENDOR:c,TYPE:b,CONSOLE:f,MOBILE:g,SMARTTV:v,TABLET:h,WEARABLE:x,EMBEDDED:y},_.ENGINE={NAME:u,VERSION:m},_.OS={NAME:u,VERSION:m},typeof e!==a?(i.exports&&(e=i.exports=_),e.UAParser=_):(r=function(){return _}.call(e,s,e,i))===n||(i.exports=r);var A="undefined"!==typeof o&&(o.jQuery||o.Zepto);if(A&&!A.ua){var C=new _;A.ua=C.getResult(),A.ua.get=function(){return C.getUA()},A.ua.set=function(i){C.setUA(i);var e=C.getResult();for(var s in e)A.ua[s]=e[s]}}}("object"===typeof window?window:this)}}]);