(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2515],{57135:function(e,n,t){e.exports=t(94808)},80363:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=80363,e.exports=n},47437:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var o=t(50189),r=t(53782),i=t(22951),a=t(91976),u=t(67591),c=t(43415),s=t(41473),l=t(41418),f="2.5.1",p=t(69882),d=t(69286),v=["version","dependencies","codeSandbox","codePen"];function h(e){var n=e.version,t=e.dependencies,i=e.codeSandbox,a=e.codePen,u=(0,r.Z)(e,v),c=(0,o.Z)({},u);return a&&(c.codePenOption={title:"uiw".concat(n," - demo"),includeModule:["uiw"],js:(c.code||"").replace("_mount_",'document.getElementById("container")'),html:'<div id="container" style="padding: 24px"></div>',css_external:"https://unpkg.com/uiw@".concat(n,"/dist/uiw.min.css"),js_external:"https://unpkg.com/react@17.x/umd/react.development.js;https://unpkg.com/react-dom@17.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@".concat(n,"/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.1.3/index.js")}),i&&(c.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n            "template": "node",\n            "container": {\n              "startScript": "start",\n              "node": "14"\n            }\n          }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:(c.code||"").replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"uiw-demo",description:"uiw v".concat(n," - demo"),dependencies:{react:"^17.0.2","react-dom":"^17.0.2","@uiw/react-amap":"latest"},devDependencies:{"@kkt/less-modules":"~7.1.1",kkt:"~7.1.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,d.jsx)(p.Z,(0,o.Z)((0,o.Z)({},c),{},{dependencies:(0,o.Z)((0,o.Z)({},t),{},{React:s},s),style:{marginBottom:0}}))}var m="index_footer__Fp4ea",M=function(e){var n=(e||{}).editorUrl;return(0,d.jsxs)("div",{className:m,children:[n&&(0,d.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-amap/edit/master".concat(n),children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-amap/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-amap",children:"GitHub"}),(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"}),(0,d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-baidu-map",children:"\u767e\u5ea6\u5730\u56fe React \u7248\u672c"})]})},g="index_markdown__hcQCp",w=["inline","node"],y=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t},k=function(e){(0,u.Z)(t,e);var n=(0,c.Z)(t);function t(e){var o;return(0,i.Z)(this,t),(o=n.call(this,e)).editorUrl=void 0,o.getMdStr=void 0,o.dependencies=void 0,o.state={mdStr:""},o}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(n){e.setState({mdStr:n.default||n})}))}},{key:"render",value:function(){var e=this;return(0,d.jsxs)(s.Fragment,{children:[(0,d.jsx)(l.Z,{style:{padding:"20px 26px"},source:this.state.mdStr,className:g,components:{code:function(n){var t=n.inline,i=n.node,a=(0,r.Z)(n,w),u=a,c=u.noPreview,s=u.noScroll,l=u.bgWhite,p=u.noCode,v=u.codeSandbox,m=u.codePen;if(t)return(0,d.jsx)("code",(0,o.Z)({},a));var M={noPreview:c,noScroll:s,bgWhite:l,noCode:p,codeSandbox:v,codePen:m};return 0===Object.keys(M).filter((function(e){return void 0!==M[e]})).length?(0,d.jsx)("code",(0,o.Z)({},a)):(0,d.jsx)(h,{version:f,code:y(i.children),dependencies:e.dependencies,noPreview:c,noScroll:s,bgWhite:l,noCode:p,codePen:m,codeSandbox:v})}}}),(0,d.jsx)(M,{editorUrl:this.editorUrl})]})}}]),t}(s.Component)},94808:function(e){var n=function(e){"use strict";var n,t=Object.prototype,o=t.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag";function c(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{c({},"")}catch(D){c=function(e,n,t){return e[n]=t}}function s(e,n,t,o){var r=n&&n.prototype instanceof m?n:m,i=Object.create(r.prototype),a=new A(o||[]);return i._invoke=function(e,n,t){var o=f;return function(r,i){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===r)throw i;return j()}for(t.method=r,t.arg=i;;){var a=t.delegate;if(a){var u=x(a,t);if(u){if(u===h)continue;return u}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(o===f)throw o=v,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);o=d;var c=l(e,n,t);if("normal"===c.type){if(o=t.done?v:p,c.arg===h)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(o=v,t.method="throw",t.arg=c.arg)}}}(e,t,a),i}function l(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(D){return{type:"throw",arg:D}}}e.wrap=s;var f="suspendedStart",p="suspendedYield",d="executing",v="completed",h={};function m(){}function M(){}function g(){}var w={};c(w,i,(function(){return this}));var y=Object.getPrototypeOf,k=y&&y(y(T([])));k&&k!==t&&o.call(k,i)&&(w=k);var b=g.prototype=m.prototype=Object.create(w);function C(e){["next","throw","return"].forEach((function(n){c(e,n,(function(e){return this._invoke(n,e)}))}))}function E(e,n){function t(r,i,a,u){var c=l(e[r],e,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"===typeof f&&o.call(f,"__await")?n.resolve(f.__await).then((function(e){t("next",e,a,u)}),(function(e){t("throw",e,a,u)})):n.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return t("throw",e,a,u)}))}u(c.arg)}var r;this._invoke=function(e,o){function i(){return new n((function(n,r){t(e,o,n,r)}))}return r=r?r.then(i,i):i()}}function x(e,t){var o=e.iterator[t.method];if(o===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,x(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=l(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function Z(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function S(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(Z,this),this.reset(!0)}function T(e){if(e){var t=e[i];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:n,done:!0}}return M.prototype=g,c(b,"constructor",g),c(g,"constructor",M),M.displayName=c(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"===typeof e&&e.constructor;return!!n&&(n===M||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,u,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},C(E.prototype),c(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(n,t,o,r,i){void 0===i&&(i=Promise);var a=new E(s(n,t,o,r),i);return e.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},C(b),c(b,u,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var n=[];for(var t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(o,r){return u.type="throw",u.arg=e,t.next=o,r&&(t.method="next",t.arg=n),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),h},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),S(t),h}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var o=t.completion;if("throw"===o.type){var r=o.arg;S(t)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,o){return this.delegate={iterator:T(e),resultName:t,nextLoc:o},"next"===this.method&&(this.arg=n),h}},e}(e.exports);try{regeneratorRuntime=n}catch(t){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},98202:function(e,n,t){"use strict";t.d(n,{_F:function(){return h},Qc:function(){return x},hr:function(){return A},Cd:function(){return D},cp:function(){return R},xV:function(){return P},mS:function(){return B},Pj:function(){return U},bT:function(){return Q},cd:function(){return q},nx:function(){return X},D5:function(){return ae},Rj:function(){return se},Jx:function(){return de},fz:function(){return me},mg:function(){return we},$v:function(){return ye},aH:function(){return Ce},Ae:function(){return Ze},jf:function(){return Ae},xv:function(){return De},$2:function(){return Le},yO:function(){return Ie},b:function(){return p},Dc:function(){return E},LH:function(){return S},Hq:function(){return j},T5:function(){return L},av:function(){return _},Ij:function(){return z},Z4:function(){return F},ZZ:function(){return W},kY:function(){return $},mT:function(){return K},Sx:function(){return re},fx:function(){return oe},$d:function(){return ce},HV:function(){return fe},yS:function(){return he},d1:function(){return ge},qb:function(){return be},H_:function(){return xe},Cl:function(){return Se},XK:function(){return je},oQ:function(){return Oe},GE:function(){return Re}});var o=t(22951),r=t(91976),i=t(67591),a=t(43415),u=t(57135),c=t.n(u);function s(e,n,t,o,r,i,a){try{var u=e[i](a),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(o,r)}var l=t(41473),f={};function p(e,n){void 0===n&&(n="_react_amap");var t=document&&(document.head||document.getElementsByTagName("head")[0]);return new Promise((function(o,r){if(document&&!(e in f)){var i=document.createElement("script");i.type="text/javascript",i.id=n,i.async=!0,i.defer=!0,i.src=e,i.onerror=function(n){t.removeChild(i),r(new URIError("The Script "+e+" is no accessible."))},i.onload=function(){f[e]=!0,o()},t.appendChild(i)}else o()}))}var d=t(69286);function v(e){return new Promise((function(n,t){window.setTimeout(n,e)}))}var h=function(e){(0,i.Z)(t,e);var n=(0,a.Z)(t);function t(e){var r;if((0,o.Z)(this,t),(r=n.call(this,e)).state={loaded:!!window.AMap},r.handleError=function(e){r.setState({error:e})},r.finish=function(){r.setState({loaded:!0})},null===e.akay)throw new TypeError("AMap: akay is required");return r}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){var e=this.props.callbackName;if(null==window.AMap){if(window[e])return void t.waitQueue.push([this.finish,this.handleError]);this.loadMap()}}},{key:"render",value:function(){return this.state.loaded?this.props.children:this.props.fallback?this.props.fallback(this.state.error):this.state.error?(0,d.jsx)("div",{style:{color:"red"},children:this.state.error.message}):null}},{key:"getScriptSrc",value:function(){var e=this.props,n=e.protocol||window.location.protocol;-1===n.indexOf(":")&&(n+=":");var t="";return e.plugin&&(t="&plugin="+e.plugin),n+"//"+e.hostAndPath+"?v="+e.version+"&key="+e.akay+"&callback="+e.callbackName+t}},{key:"loadMap",value:function(){var e,n=this;return(e=c().mark((function e(){var o,r,i,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=n.props.callbackName,r=n.getScriptSrc(),window[o]=function(){var e=t.waitQueue;t.waitQueue=[],e.forEach((function(e){return e[0]()})),n.finish()},i=0;case 4:if(!(i<3)){e.next=22;break}return e.prev=5,e.next=8,p(r);case 8:return e.abrupt("break",22);case 11:if(e.prev=11,e.t0=e.catch(5),2!==i){e.next=17;break}if("object"!==typeof(a=function(){var o=new Error("Failed to load AMap: "+e.t0.message),r=t.waitQueue;return t.waitQueue=[],r.forEach((function(e){return e[1](o)})),n.handleError(o),{v:void 0}}())){e.next=17;break}return e.abrupt("return",a.v);case 17:return e.next=19,v(1e3*i);case 19:i++,e.next=4;break;case 22:case"end":return e.stop()}}),e,null,[[5,11]])})),function(){var n=this,t=arguments;return new Promise((function(o,r){var i=e.apply(n,t);function a(e){s(i,o,r,a,u,"next",e)}function u(e){s(i,o,r,a,u,"throw",e)}a(void 0)}))})()}}]),t}(l.Component);h.defaultProps={protocol:/^file:/.test(window.location.protocol)?"https":window.location.protocol,akay:"",hostAndPath:"webapi.amap.com/maps",version:"2.0",callbackName:"load_amap_sdk",plugin:""},h.waitQueue=[];var m=t(25773),M=t(11026),g=t(30808),w=t(64649);function y(e,n){var t=(0,l.useState)(n),o=(0,M.Z)(t,2),r=o[0],i=o[1];(0,l.useEffect)((function(){e&&void 0!==n&&(n?e.show&&e.show():e.hide&&e.hide(),n!==r&&i(n))}),[e,n])}function k(e,n,t,o){void 0===n&&(n={}),void 0===t&&(t=[]),t.forEach((function(t){var o=t,r=n[o];(0,l.useEffect)((function(){if(e){var n=t.toLocaleLowerCase().replace(/^on/,"");return r&&n&&e.on(n,r),function(){n&&r&&e.off(n,r)}}}),[e,n[o]])}))}function b(e,n,t){void 0===e&&(e={}),void 0===n&&(n={}),void 0===t&&(t=[]),t.forEach((function(t){var o="set"+t,r=""+t.charAt(0).toLowerCase()+t.slice(1),i=(0,l.useState)(n[r]),a=(0,M.Z)(i,2),u=a[0],c=a[1];(0,l.useEffect)((function(){e&&void 0!==n[r]&&n[r]!==u&&e[o]&&"function"===typeof e[o]&&(e[o](n[r]),c(n[r]))}),[e,n[r]])}))}var C=["map"],E=function(e){void 0===e&&(e={});var n=(0,g.Z)(e,C),t=(0,l.useState)(),o=(0,M.Z)(t,2),r=o[0],i=o[1];return(0,l.useEffect)((function(){var e;if(AMap&&!r)return AMap.plugin(["AMap.AutoComplete"],(function(){e=new AMap.AutoComplete((0,m.Z)({},n)),i(e)})),function(){e&&i(void 0)}}),[]),b(r,e,["Type","City","CityLimit"]),k(r,e,["onChoose","onSelect"]),{autoComplete:r,setAutoComplete:i}},x=l.forwardRef((function(e,n){var t=E(e).autoComplete;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{autoComplete:t})})),null})),Z=["map","visiable"],S=function(e){void 0===e&&(e={});var n=e,t=n.map,o=n.visiable,r=(0,g.Z)(e,Z),i=(0,l.useState)(),a=(0,M.Z)(i,2),u=a[0],c=a[1];return(0,l.useEffect)((function(){if(AMap&&t&&!u){var e=new AMap.BezierCurve((0,m.Z)({},r));return t.add(e),c(e),function(){e&&(t&&t.removeLayer(e),c(void 0))}}}),[t]),y(u,o),b(u,e,["Options","Path","ExtData","ExtData"]),k(u,e,["onHide","onShow","onDblClick","onMouseOver","onMouseUp","onMouseDown","onclick","onTouchEnd","onTouchMove","onTouchStart","onRightClick","onMouseOut"]),{bezierCurve:u,setBezierCurve:c}},A=l.forwardRef((function(e,n){var t=S(e).bezierCurve;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{bezierCurve:t})})),null})),T=["map","visiable"],j=function(e){void 0===e&&(e={});var n=e,t=n.map,o=n.visiable,r=(0,g.Z)(e,T),i=(0,l.useState)(),a=(0,M.Z)(i,2),u=a[0],c=a[1];return(0,l.useEffect)((function(){if(AMap&&t&&!u){var e=new AMap.Circle((0,m.Z)({},r));t.add(e),c(e)}return function(){u&&(t&&t.remove(u),c(void 0))}}),[t]),y(u,o),b(u,e,["Center","Raius","Options","ExtData"]),k(u,e,["onHide","onShow","onRightClick","onClick","onTouchEnd","onDblClick","onTouchMove","onTouchStart","onMouseOut","onMouseOver","onMouseUp","onMouseDown"]),{circle:u,setCircle:c}},D=l.forwardRef((function(e,n){var t=j(e).circle;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{circle:t})})),null})),O=["map","visiable"],L=function(e){void 0===e&&(e={});var n=e,t=n.map,o=n.visiable,r=(0,g.Z)(e,O),i=(0,l.useState)(),a=(0,M.Z)(i,2),u=a[0],c=a[1];return(0,l.useEffect)((function(){if(AMap&&t&&!u){var e=new AMap.CircleMarker((0,m.Z)({},r));return t.add(e),c(e),function(){e&&(t&&t.removeLayer(e),c(void 0))}}}),[t]),y(u,o),b(u,e,["Center","Raius","zIndex","Bubble","Cursor","StrokeColor","StrokeOpacity","StrokeWeight","FillColor","FillOpacity","Draggable","ExtData"]),k(u,e,["onHide","onShow","onMouseover","onTouchend","onClick","onTouchmove","onRightclick","onMouseup","onMouseout","onTouchstart","onMousedown","onDblclick"]),{circleMarker:u,setCircleMarker:c}},R=l.forwardRef((function(e,n){var t=L(e).circleMarker;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{circleMarker:t})})),null})),I=["map","position"],_=function(e){void 0===e&&(e={});var n=e,t=n.map,o=n.position,r=(0,g.Z)(e,I),i=(0,l.useState)(),a=(0,M.Z)(i,2),u=a[0],c=a[1];return(0,l.useEffect)((function(){if(AMap&&t&&!u){var e=new AMap.ContextMenu((0,m.Z)({},r));c(e);var n=function(n){return e.open(t,o||n.lnglat)};return t.on("rightclick",n),function(){e&&(t.off("rightclick",n),t&&t.removeLayer(e),c(void 0))}}}),[t]),k(u,e,["onOpen","onClose"]),{contextMenu:u,setContextMenu:c}},H=function(){},P=l.forwardRef((function(e,n){var t=_(e).contextMenu;(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{contextMenu:t})}));var o=l.Children.toArray(e.children);return(0,d.jsx)(l.Fragment,{children:AMap&&t&&o.map((function(n,o){return l.isValidElement(n)?l.cloneElement(n,(0,m.Z)({},n.props,{AMap:AMap,map:e.map,contextMenu:t,key:o})):null}))})}));function z(e){void 0===e&&(e={});var n=(0,l.useState)(),t=(0,M.Z)(n,2),o=t[0],r=t[1],i=e,a=i.map,u=i.position,c=i.visiable,s=i.offset;return(0,l.useEffect)((function(){var e;if(a&&!o)return a.plugin(["AMap.ControlBar","AMap.HawkEye"],(function(){e=new AMap.ControlBar({offset:s,position:u}),a.addControl(e),r(e)})),function(){e&&a.removeControl(e)}}),[a]),y(o,c),{controlBarControl:o,setControlBarControl:r}}P.Item=function(e){void 0===e&&(e={});var n=e,t=n.text,o=void 0===t?"":t,r=n.onClick,i=void 0===r?H:r;return(0,l.useEffect)((function(){return e.contextMenu&&e.contextMenu.addItem(o,i,1),function(){e.contextMenu&&e.contextMenu.removeItem(o,i)}}),[e.contextMenu,e.text,e.onClick]),null};var B=l.forwardRef((function(e,n){var t=z(e).controlBarControl;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{controlBarControl:t})}),[t]),null})),N=["map","visiable"],F=function(e){void 0===e&&(e={});var n=e,t=n.map,o=n.visiable,r=(0,g.Z)(e,N),i=(0,l.useState)(),a=(0,M.Z)(i,2),u=a[0],c=a[1];return(0,l.useEffect)((function(){if(AMap&&t&&!u){var e=new AMap.Ellipse((0,m.Z)({},r));return t.add(e),c(e),function(){e&&(t&&t.removeLayer(e),c(void 0))}}}),[t]),y(u,o),b(u,e,["Center","Radius","Options","ExtData"]),k(u,e,["onHide","onShow","onClick","onDblClick","onRightClick","onMouseOut","onMouseOver","onMouseUp","onMouseDown","onTouchEnd","onTouchMove","onTouchStart"]),{ellipse:u,setEllipse:c}},U=l.forwardRef((function(e,n){var t=F(e).ellipse;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{ellipse:t})})),null})),G=["map","type","onComplete","onError"],W=function(e){void 0===e&&(e={});var n=e,t=n.map,o=n.type,r=void 0===o?"position":o,i=n.onComplete,a=n.onError,u=(0,g.Z)(e,G),c=(0,l.useState)(),s=(0,M.Z)(c,2),f=s[0],p=s[1];function d(e,n){"complete"===e&&i?i(n):a&&a(n)}return(0,l.useEffect)((function(){var e;if(AMap&&!f)return AMap.plugin(["AMap.Geolocation"],(function(){e=new AMap.Geolocation((0,m.Z)({},u)),p(e)})),function(){e&&p(void 0)}}),[AMap]),(0,l.useMemo)((function(){if(/^(position|cityInfo)$/.test(r)){var e="position"===r?"getCurrentPosition":"getCityInfo";f&&t?(f[e](d),t.addControl(f)):f&&f[e](d)}}),[f]),{geolocation:f,setGeolocation:p}},Q=l.forwardRef((function(e,n){var t=W(e).geolocation;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{geolocation:t})})),null})),V=["map","offset","visiable"];function $(e){void 0===e&&(e={});var n=(0,l.useState)(),t=(0,M.Z)(n,2),o=t[0],r=t[1],i=e,a=i.map,u=i.offset,c=i.visiable,s=(0,g.Z)(e,V);return(0,l.useEffect)((function(){var e;if(a&&!o)return a.plugin(["AMap.HawkEye"],(function(){e=new AMap.HawkEye((0,m.Z)({offset:u},s)),a.addControl(e),r(e)})),function(){e&&a&&(a.removeLayer(e),r(void 0))}}),[a]),y(o,c),{hawkEyeControl:o,setHawkEyeControl:r}}var q=l.forwardRef((function(e,n){var t=$(e).hawkEyeControl;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{hawkEyeControl:t})}),[t]),null})),Y=t(7510),J=["map","visiable","position"],K=function(e){void 0===e&&(e={});var n=e,t=n.map,o=n.visiable,r=n.position,i=(0,g.Z)(e,J),a=(0,l.useState)(o),u=(0,M.Z)(a,2),c=u[0],s=u[1],f=(0,l.useState)(),p=(0,M.Z)(f,2),d=p[0],v=p[1];return(0,l.useEffect)((function(){if(AMap&&t&&!d){var e=t.getCenter(),n=new AMap.InfoWindow((0,m.Z)({},i,{position:r||e}));return v(n),c&&n.open(t,r||e),function(){n&&(t&&t.remove(n),v(void 0))}}}),[t]),(0,l.useMemo)((function(){if(c!==o&&d&&t)if(s(o),o){var e=t.getCenter();d.open(t,r||e)}else d.close()}),[o,d]),(0,l.useEffect)((function(){if(t&&d&&o){var e=t.getCenter();d.open(t,r||e)}}),[r]),b(d,e,["Content","Anchor","Size"]),k(d,e,["onOpen","onClose","onChange"]),{infoWindow:d,setInfoWindow:v}},X=l.forwardRef((function(e,n){var t=e.children,o=(0,l.useMemo)((function(){return document.createElement("div")}),[]);(0,l.useEffect)((function(){return(0,Y.render)((0,d.jsx)(l.Fragment,{children:t}),o)}),[t]);var r=K((0,m.Z)({},e,{content:t?o:e.content})).infoWindow;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{infoWindow:r})})),null})),ee={map:void 0,AMap:void 0,container:void 0},ne=function(e,n){return(0,m.Z)({},e,n)},te=l.createContext({state:ee,dispatch:function(){return null}});function oe(){var e=(0,l.useContext)(te);return{state:e.state,dispatch:e.dispatch}}var re=function(e){void 0===e&&(e={});var n=(0,m.Z)({},e),t=(0,l.useState)(),o=(0,M.Z)(t,2),r=o[0],i=o[1],a=(0,l.useState)(e.zoom||15),u=(0,M.Z)(a,2),c=u[0],s=u[1],f=(0,l.useState)(e.container),p=(0,M.Z)(f,2),d=p[0],v=p[1],h=(0,l.useContext)(te).dispatch;return(0,l.useEffect)((function(){var e;return d&&!r&&AMap&&(e=new AMap.Map(d,(0,m.Z)({zoom:c},n)),i(e)),function(){e&&(e.destroy(),i(void 0))}}),[d]),(0,l.useEffect)((function(){return r&&d&&h({map:r,container:d,AMap:AMap}),function(){h({map:void 0,container:void 0,AMap:void 0})}}),[r,d]),(0,l.useMemo)((function(){r&&"number"===typeof e.zoom&&c!==e.zoom&&e.zoom>=2&&e.zoom<=20&&(s(e.zoom),r.setZoom(e.zoom))}),[c,e.zoom]),function(e,n,t){void 0===n&&(n={}),void 0===t&&(t=[]),t.forEach((function(t){var o=t,r=(0,l.useState)(n[o]),i=(0,M.Z)(r,2),a=i[0],u=i[1];(0,l.useEffect)((function(){if(e&&void 0!==n[o]&&n[o]!==a){var t=e.getStatus();e.setStatus((0,m.Z)({},t,(0,w.Z)({},o,n[o]))),u(n[o])}}),[e,n[o]])}))}(r,e,["dragEnable","zoomEnable","jogEnable","pitchEnable","rotateEnable","animateEnable","keyboardEnable"]),b(r,e,["Zoom","LabelzIndex","Layers","Center","City","Bounds","LimitBounds","Lang","Rotation","DefaultCursor","MapStyle","Features","DefaultLayer","Pitch"]),k(r,e,["onMouseMove","onZoomChange","onMapMove","onMouseWheel","onZoomStart","onMouseOver","onMouseOut","onDblClick","onClick","onZoomEnd","onMoveEnd","onMouseUp","onMouseDown","onRightClick","onMoveStart","onDragStart","onDragging","onDragEnd","onHotspotOut","onHotspotOver","onTouchStart","onComplete","onHotspotClick","onTouchMove","onTouchEnd","onResize"]),{map:r,setMap:i,container:d,setContainer:v}},ie=["className","style","children"],ae=(0,l.forwardRef)((function(e,n){var t=e.className,o=e.style,r=e.children,i=(0,g.Z)(e,ie),a=(0,l.useReducer)(ne,ee),u=(0,M.Z)(a,2),c=u[0],s=u[1],f=(0,l.useRef)(null),p=re((0,m.Z)({container:f.current},i)),v=p.setContainer,h=p.container,w=p.map;(0,l.useEffect)((function(){return v(f.current)}),[f.current]),(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},i,{map:w,AMap:AMap,container:f.current})}),[w]);var y=l.Children.toArray(r);return(0,l.useEffect)((function(){w&&s({map:w,container:f.current,AMap:AMap})}),[w]),(0,d.jsxs)(te.Provider,{value:{state:c,dispatch:s},children:[(0,d.jsx)("div",{ref:f,className:t,style:(0,m.Z)({fontSize:1,height:"100%"},o)}),AMap&&w&&"function"===typeof r&&r({AMap:AMap,map:w,container:h}),AMap&&w&&y.map((function(e,n){return"string"===typeof e?(0,l.cloneElement)((0,d.jsx)(l.Fragment,{children:e}),{key:n}):(0,l.isValidElement)(e)?e.type&&"string"===typeof e.type?(0,l.cloneElement)(e,{key:n}):(0,l.cloneElement)(e,(0,m.Z)({},e.props,{AMap:AMap,map:w,container:h,key:n})):null}))]})})),ue=["map","visiable","defaultType"];function ce(e){void 0===e&&(e={});var n=(0,l.useState)(),t=(0,M.Z)(n,2),o=t[0],r=t[1],i=e,a=i.map,u=i.visiable,c=i.defaultType,s=void 0===c?0:c,f=(0,g.Z)(e,ue);return(0,l.useEffect)((function(){var e;if(a&&!o)return a.plugin(["AMap.MapType"],(function(){e=new AMap.MapType((0,m.Z)({defaultType:s},f)),a.addControl(e),r(e)})),function(){e&&a.removeControl(e)}}),[a]),y(o,u),{mapTypeControl:o,setMapTypeControl:r}}var se=l.forwardRef((function(e,n){var t=ce(e).mapTypeControl;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{mapTypeControl:t})}),[t]),null})),le=["visiable"],fe=function(e){void 0===e&&(e={});var n=e.visiable,t=(0,g.Z)(e,le),o=oe().state,r=(0,l.useState)(),i=(0,M.Z)(r,2),a=i[0],u=i[1];return(0,l.useEffect)((function(){if(!a&&o.map){var e=new AMap.Marker((0,m.Z)({},t));o.map.add(e),u(e)}return function(){a&&(a.remove(),u(void 0))}}),[o.map,a]),y(a,n),b(a,e,["Path","Anchor","Offset","Animation","Clickable","Position","Angle","Label","zIndex","Icon","Draggable","Cursor","Content","Map","Title","Top","Shadow","Shape","ExtData"]),k(a,e,["onClick","onDblClick","onRightClick","onMouseMove","onMouseOver","onMouseOut","onMouseDown","onMouseUp","onDragStart","onDragging","onDragEnd","onMoving","onMoveEnd","onMoveAlong","onTouchStart","onTouchMove","onTouchEnd"]),{marker:a,setMarker:u}},pe=["children","className","content"],de=(0,l.forwardRef)((function(e,n){var t=e.children,o=e.className,r=e.content,i=(0,g.Z)(e,pe),a=(0,l.useMemo)((function(){return document.createElement("div")}),[]);a.className=o||"",(0,l.useEffect)((function(){return(0,Y.render)((0,d.jsx)(l.Fragment,{children:t}),a)}),[t]);var u=fe((0,m.Z)({},i,{content:t?a:r})).marker;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},i,{marker:u})}),[u]),null})),ve=["map","visiable"],he=function(e){void 0===e&&(e={});var n=e,t=n.map,o=n.visiable,r=(0,g.Z)(e,ve)||{},i=r.opacity,a=void 0===i?.8:i,u=r.zIndex,c=void 0===u?1111:u,s=r.style,f=r.data,p=(0,l.useState)(),d=(0,M.Z)(p,2),v=d[0],h=d[1];return(0,l.useEffect)((function(){if(AMap&&t&&!v){var e=s;e||(e=[{url:"https://webapi.amap.com/images/mass/mass0.png",anchor:new AMap.Pixel(6,6),size:new AMap.Size(11,11),zIndex:3},{url:"https://webapi.amap.com/images/mass/mass1.png",anchor:new AMap.Pixel(4,4),size:new AMap.Size(7,7),zIndex:2},{url:"https://webapi.amap.com/images/mass/mass2.png",anchor:new AMap.Pixel(3,3),size:new AMap.Size(5,5),zIndex:1}]);var n=new AMap.MassMarks(f||[],{opacity:a,zIndex:c,style:e});return h(n),n.setMap(t),function(){n&&(n.clear(),h(void 0))}}}),[t]),y(v,o),b(v,e,["Map","Data","Style","Opacity","zIndex","Zooms"]),k(v,e,["onClick","onDblClick","onMouseMove","onMouseOut","onMouseUp","onMouseDown","onMouseOver","onTouchStart","onTouchEnd"]),{massMarks:v,setMassMarks:h}},me=l.forwardRef((function(e,n){var t=he(e).massMarks;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{massMarks:t})}),[t,e]),null})),Me=["map","visiable"],ge=function(e){void 0===e&&(e={});var n=e,t=n.map,o=n.visiable,r=(0,g.Z)(e,Me),i=(0,l.useState)(),a=(0,M.Z)(i,2),u=a[0],c=a[1];return(0,l.useEffect)((function(){if(AMap&&t&&!u){var e=new AMap.Polygon((0,m.Z)({},r));t.add(e),c(e)}}),[t]),y(u,o),b(u,e,["ExtData","ExtData"]),k(u,e,["onClick","onDblClick","onRightClick","onHide","onShow","onMouseDown","onMouseUp","onMouseOver","onMouseOut","onChange","onTouchStart","onTouchMove","onTouchEnd"]),{polygon:u,setPolygon:c}},we=(0,l.forwardRef)((function(e,n){var t=e.children,o=ge(e).polygon;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{polygon:o})})),t&&(0,l.isValidElement)(t)?(0,l.cloneElement)(t,(0,m.Z)({},e,{polygon:o})):null})),ye=(0,l.forwardRef)((function(e,n){var t=e.active,o=e.map,r=e.polygon,i=(0,l.useState)(!0),a=(0,M.Z)(i,2),u=a[0],c=a[1],s=(0,l.useState)(),f=(0,M.Z)(s,2),p=f[0],d=f[1];return(0,l.useEffect)((function(){if(r&&o&&!p&&AMap&&AMap.PolygonEditor){var e=new AMap.PolygonEditor(o,r);r.on("hide",(function(){return c(!1)})),r.on("show",(function(){return c(!0)})),d(e)}}),[r]),(0,l.useEffect)((function(){p&&(u&&!t?p.close():u&&t?p.open():!u&&t&&p.close())}),[t,u]),k(p,e,["onEnd","onAddnode","onAdjust","onMove","onAdd"]),null})),ke=["map","visiable"];function be(e){void 0===e&&(e={});var n=(0,l.useState)(),t=(0,M.Z)(n,2),o=t[0],r=t[1],i=e,a=i.map,u=i.visiable,c=(0,g.Z)(e,ke);return(0,l.useEffect)((function(){if(a&&!o){var e=new AMap.Polyline((0,m.Z)({},c));return a.add(e),r(e),function(){e&&(a&&a.removeLayer(e),r(void 0))}}}),[a]),y(o,u),b(o,e,["Path","Options","Map","ExtData"]),k(o,e,["onHide","onShow","onMouseOut","onChange","onRightClick","onDblClick","onMouseDown","onClick","onMouseOver","onTouchEnd","onTouchMove","onTouchStart","onMouseUp"]),{polyline:o,setPolyline:r}}var Ce=l.forwardRef((function(e,n){var t=be(e).polyline;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{polyline:t})}),[t]),null})),Ee=["map","visiable"],xe=function(e){void 0===e&&(e={});var n=e,t=n.map,o=n.visiable,r=(0,g.Z)(e,Ee),i=(0,l.useState)(),a=(0,M.Z)(i,2),u=a[0],c=a[1];return(0,l.useEffect)((function(){if(AMap&&t&&!u){var e=new AMap.Rectangle((0,m.Z)({},r));return t.add(e),c(e),function(){e&&(t&&t.removeLayer(e),c(void 0))}}}),[t]),y(u,o),b(u,e,["Bounds","Options","Map","ExtData"]),k(u,e,["onHide","onShow","onClick","onDblClick","onRightClick","onMouseOut","onMouseOver","onMouseUp","onMouseDown","onTouchEnd","onTouchMove","onTouchStart"]),{rectangle:u,setRectangle:c}},Ze=l.forwardRef((function(e,n){var t=xe(e).rectangle;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{rectangle:t})})),null}));function Se(e){void 0===e&&(e={});var n=(0,l.useState)(),t=(0,M.Z)(n,2),o=t[0],r=t[1],i=e,a=i.map,u=i.position,c=i.visiable,s=i.offset;return(0,l.useEffect)((function(){var e;if(a&&!o)return a.plugin(["AMap.Scale"],(function(){e=new AMap.Scale({offset:s,position:u}),a.addControl(e),r(e)})),function(){e&&a.removeControl(e)}}),[a]),y(o,c),{scaleControl:o,setScaleControl:r}}var Ae=l.forwardRef((function(e,n){var t=Se(e).scaleControl;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{scaleControl:t})}),[t]),null})),Te=["map","visiable"],je=function(e){void 0===e&&(e={});var n=e,t=n.map,o=n.visiable,r=(0,g.Z)(e,Te),i=(0,l.useState)(),a=(0,M.Z)(i,2),u=a[0],c=a[1];return(0,l.useEffect)((function(){if(AMap&&t&&!u){var e=new AMap.Text((0,m.Z)({},r));return t.add(e),c(e),function(){e&&(e.remove(),c(void 0))}}}),[t]),y(u,o),b(u,e,["Style","Title","Clickable","Draggable","Map","Position","Offset","Angle","zIndex","Top","Cursor","ExtData"]),k(u,e,["onMoving","onTouchMove","onTouchEnd","onMoveaLong","onTouchStart","onMoveEnd","onClick","onDblClick","onRightClick","onMouseMove","onMouseOver","onMouseOut","onMouseDown","onMouseUp","onDragStart","onDragEnd","onDragging"]),{text:u,setText:c}},De=(0,l.forwardRef)((function(e,n){var t=je(e).text;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{text:t})})),null}));function Oe(e){void 0===e&&(e={});var n=(0,l.useState)(),t=(0,M.Z)(n,2),o=t[0],r=t[1],i=e,a=i.map,u=i.position,c=i.visiable,s=i.offset;return(0,l.useEffect)((function(){var e;if(a&&!o)return a.plugin(["AMap.ToolBar"],(function(){e=new AMap.ToolBar({offset:s,position:u}),a.addControl(e),r(e)})),function(){e&&a.removeControl(e)}}),[a]),y(o,c),{toolBarControl:o,setToolBarControl:r}}var Le=l.forwardRef((function(e,n){var t=Oe(e).toolBarControl;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{toolBarControl:t})}),[t]),null})),Re=function(e){void 0===e&&(e={});var n=e,t=n.city,o=void 0===t?"":t,r=n.type,i=void 0===r?"live":r,a=n.onComplete,u=n.onError,c=(0,l.useState)(),s=(0,M.Z)(c,2),f=s[0],p=s[1],d="live"===i?"getLive":"getForecast";return(0,l.useEffect)((function(){var e;if(AMap&&!f)return AMap.plugin(["AMap.Weather"],(function(){e=new AMap.Weather,p(e)})),function(){e&&p(void 0)}}),[]),(0,l.useMemo)((function(){var e;f&&o&&i&&(e=f,i&&o&&/^(live|forecast)$/.test(i)&&e[d](o,(function(e,n){e&&u?u(e):n&&a&&a(n)})))}),[f,o,i]),{weather:f,setWeather:p}},Ie=l.forwardRef((function(e,n){var t=Re(e).weather;return(0,l.useImperativeHandle)(n,(function(){return(0,m.Z)({},e,{weather:t})})),null}))}}]);
//# sourceMappingURL=2515.2d92c1b3.chunk.js.map