!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=15)}([function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=p[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(l(o.parts[a],t))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(l(o.parts[a],t));p[o.id]={id:o.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],a=r[0],i=r[1],s=r[2],l=r[3],u={css:i,media:s,sourceMap:l};n[a]?n[a].parts.push(u):t.push(n[a]={id:a,parts:[u]})}return t}function r(e,t){var n=m(),o=b[b.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function i(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function l(e,t){var n,o,r;if(t.singleton){var l=y++;n=v||(v=i(t)),o=u.bind(null,n,l,!1),r=u.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),o=d.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(t),o=c.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=_(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function c(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}var p={},f=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},h=f(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),m=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,b=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},void 0===t.singleton&&(t.singleton=h()),void 0===t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var s=r[i],l=p[s.id];l.refs--,a.push(l)}if(e){n(o(e),t)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete p[l.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){!function(e,n){n(t)}(0,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var o,r,a,i,s;for(s=arguments.length;s-- >2;)z.push(arguments[s]);for(n&&n.children&&(z.length||z.push(n.children),delete n.children);z.length;)if((a=z.pop())instanceof Array)for(s=a.length;s--;)z.push(a[s]);else null!=a&&!0!==a&&!1!==a&&("number"==typeof a&&(a=String(a)),i="string"==typeof a,i&&r?o[o.length-1]+=a:((o||(o=[])).push(a),r=i));var l=new t(e,n||void 0,o||I);return M.vnode&&M.vnode(l),l}function o(e,t){if(t)for(var n in t)e[n]=t[n];return e}function r(e){return o({},e)}function a(e,t){for(var n=t.split("."),o=0;o<n.length&&e;o++)e=e[n[o]];return e}function i(e){return"function"==typeof e}function s(e){return"string"==typeof e}function l(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function u(e,t){return n(e.nodeName,o(r(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function c(e,t,n){var o=t.split(".");return function(t){for(var r=t&&t.target||this,i={},l=i,u=s(n)?a(t,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:t,c=0;c<o.length-1;c++)l=l[o[c]]||(l[o[c]]=!c&&e.state[o[c]]||{});l[o[c]]=u,e.setState(i)}}function d(e){!e._dirty&&(e._dirty=!0)&&1==Z.push(e)&&(M.debounceRendering||W)(p)}function p(){var e,t=Z;for(Z=[];e=t.pop();)e._dirty&&P(e)}function f(e){var t=e&&e.nodeName;return t&&i(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(y(e),t||V)}function m(e,t){return s(t)?e instanceof Text:s(t.nodeName)?!e._componentConstructor&&v(e,t.nodeName):i(t.nodeName)?!e._componentConstructor||e._componentConstructor===t.nodeName||f(t):void 0}function v(e,t){return e.normalizedNodeName===t||F(e.nodeName)===F(t)}function y(e){var t=r(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,n,o,r){if("className"===t&&(t="class"),"class"===t&&o&&"object"==typeof o&&(o=l(o)),"key"===t);else if("class"!==t||r)if("style"===t){if((!o||s(o)||s(n))&&(e.style.cssText=o||""),o&&"object"==typeof o){if(!s(n))for(var a in n)a in o||(e.style[a]="");for(var a in o)e.style[a]="number"!=typeof o[a]||J[a]?o[a]:o[a]+"px"}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var u=e._listeners||(e._listeners={});t=F(t.substring(2)),o?u[t]||e.addEventListener(t,x,!!Q[t]):u[t]&&e.removeEventListener(t,x,!!Q[t]),u[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)g(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var c=r&&t.match(/^xlink\:?(.+)/);null==o||!1===o?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",F(c[1])):e.removeAttribute(t):"object"==typeof o||i(o)||(c?e.setAttributeNS("http://www.w3.org/1999/xlink",F(c[1]),o):e.setAttribute(t,o))}else e.className=o||""}function g(e,t,n){try{e[t]=n}catch(e){}}function x(e){return this._listeners[e.type](M.event&&M.event(e)||e)}function w(e){if(b(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||F(e.nodeName);(X[t]||(X[t]=[])).push(e)}}function C(e,t){var n=F(e),o=X[n]&&X[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return o.normalizedNodeName=n,o}function S(){for(var e;e=Y.pop();)M.afterMount&&M.afterMount(e),e.componentDidMount&&e.componentDidMount()}function N(e,t,n,o,r,a){$++||(K=r&&void 0!==r.ownerSVGElement,ee=e&&!(G in e));var i=E(e,t,n,o);return r&&i.parentNode!==r&&r.appendChild(i),--$||(ee=!1,a||S()),i}function E(e,t,n,o){for(var r=t&&t.attributes&&t.attributes.ref;f(t);)t=h(t,n);if(null==t&&(t=""),s(t))return e&&e instanceof Text&&e.parentNode?e.nodeValue!=t&&(e.nodeValue=t):(e&&A(e),e=document.createTextNode(t)),e;if(i(t.nodeName))return U(e,t,n,o);var a=e,l=String(t.nodeName),u=K,c=t.children;if(K="svg"===l||"foreignObject"!==l&&K,e){if(!v(e,l)){for(a=C(l,K);e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),A(e)}}else a=C(l,K);var d=a.firstChild,p=a[G];if(!p){a[G]=p={};for(var m=a.attributes,y=m.length;y--;)p[m[y].name]=m[y].value}return!ee&&c&&1===c.length&&"string"==typeof c[0]&&d&&d instanceof Text&&!d.nextSibling?d.nodeValue!=c[0]&&(d.nodeValue=c[0]):(c&&c.length||d)&&T(a,c,n,o,!!p.dangerouslySetInnerHTML),j(a,t.attributes,p),r&&(p.ref=r)(a),K=u,a}function T(e,t,n,o,r){var a,i,s,l,u=e.childNodes,c=[],d={},p=0,f=0,h=u.length,v=0,y=t&&t.length;if(h)for(var _=0;_<h;_++){var g=u[_],x=g[G],w=y?(i=g._component)?i.__key:x?x.key:null:null;null!=w?(p++,d[w]=g):(ee||r||x||g instanceof Text)&&(c[v++]=g)}if(y)for(var _=0;_<y;_++){s=t[_],l=null;var w=s.key;if(null!=w)p&&w in d&&(l=d[w],d[w]=void 0,p--);else if(!l&&f<v)for(a=f;a<v;a++)if((i=c[a])&&m(i,s)){l=i,c[a]=void 0,a===v-1&&v--,a===f&&f++;break}l=E(l,s,n,o),l&&l!==e&&(_>=h?e.appendChild(l):l!==u[_]&&(l===u[_+1]&&b(u[_]),e.insertBefore(l,u[_]||null)))}if(p)for(var _ in d)d[_]&&A(d[_]);for(;f<=v;)(l=c[v--])&&A(l)}function A(e,t){var n=e._component;if(n)L(n,!t);else{e[G]&&e[G].ref&&e[G].ref(null),t||w(e);for(var o;o=e.lastChild;)A(o,t)}}function j(e,t,n){var o;for(o in n)t&&o in t||null==n[o]||_(e,o,n[o],n[o]=void 0,K);if(t)for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||_(e,o,n[o],n[o]=t[o],K)}function B(e){var t=e.constructor.name,n=te[t];n?n.push(e):te[t]=[e]}function k(e,t,n){var o=new e(t,n),r=te[e.name];if(R.call(o,t,n),r)for(var a=r.length;a--;)if(r[a].constructor===e){o.nextBase=r[a].nextBase,r.splice(a,1);break}return o}function q(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===M.syncComponentUpdates&&e.base?d(e):P(e,1,r)),e.__ref&&e.__ref(e))}function P(e,t,n,a){if(!e._disable){var s,l,u,c,d=e.props,p=e.state,m=e.context,v=e.prevProps||d,b=e.prevState||p,_=e.prevContext||m,g=e.base,x=e.nextBase,w=g||x,C=e._component;if(g&&(e.props=v,e.state=b,e.context=_,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(d,p,m)?s=!0:e.componentWillUpdate&&e.componentWillUpdate(d,p,m),e.props=d,e.state=p,e.context=m),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!s){for(e.render&&(l=e.render(d,p,m)),e.getChildContext&&(m=o(r(m),e.getChildContext()));f(l);)l=h(l,m);var E,T,j=l&&l.nodeName;if(i(j)){var B=y(l);u=C,u&&u.constructor===j&&B.key==u.__key?q(u,B,1,m):(E=u,u=k(j,B,m),u.nextBase=u.nextBase||x,u._parentComponent=e,e._component=u,q(u,B,0,m),P(u,1,n,!0)),T=u.base}else c=w,E=C,E&&(c=e._component=null),(w||1===t)&&(c&&(c._component=null),T=N(c,l,m,n||!g,w&&w.parentNode,!0));if(w&&T!==w&&u!==C){var U=w.parentNode;U&&T!==U&&(U.replaceChild(T,w),E||(w._component=null,A(w)))}if(E&&L(E,T!==w),e.base=T,T&&!a){for(var R=e,O=e;O=O._parentComponent;)(R=O).base=T;T._component=R,T._componentConstructor=R.constructor}}!g||n?Y.unshift(e):s||(e.componentDidUpdate&&e.componentDidUpdate(v,b,_),M.afterUpdate&&M.afterUpdate(e));var z,I=e._renderCallbacks;if(I)for(;z=I.pop();)z.call(e);$||a||S()}}function U(e,t,n,o){for(var r=e&&e._component,a=r,i=e,s=r&&e._componentConstructor===t.nodeName,l=s,u=y(t);r&&!l&&(r=r._parentComponent);)l=r.constructor===t.nodeName;return r&&l&&(!o||r._component)?(q(r,u,3,n,o),e=r.base):(a&&!s&&(L(a,!0),e=i=null),r=k(t.nodeName,u,n),e&&!r.nextBase&&(r.nextBase=e,i=null),q(r,u,1,n,o),e=r.base,i&&e!==i&&(i._component=null,A(i))),e}function L(e,t){M.beforeUnmount&&M.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;if(o)L(o,t);else if(n){n[G]&&n[G].ref&&n[G].ref(null),e.nextBase=n,t&&(b(n),B(e));for(var r;r=n.lastChild;)A(r,!t)}e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function R(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function O(e,t,n){return N(n,e,{},!1,t)}var M={},z=[],I=[],D={},F=function(e){return D[e]||(D[e]=e.toLowerCase())},H="undefined"!=typeof Promise&&Promise.resolve(),W=H?function(e){H.then(e)}:setTimeout,V={},G="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",J={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},Q={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},Z=[],X={},Y=[],$=0,K=!1,ee=!1,te={};o(R.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=c(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r(n)),o(n,i(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),d(this)},forceUpdate:function(){P(this,2)},render:function(){}}),e.h=n,e.cloneElement=u,e.Component=R,e.render=O,e.rerender=p,e.options=M})},function(e,t,n){var o=n(9);"string"==typeof o&&(o=[[e.i,o,""]]);n(0)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(2),a=n(6),i=o(a),s=n(11);n(3),n(14),s("map_menu",function(e){if(!e)return void console.log("Interactive map_menu not initiated. Exiting.");(0,r.render)((0,r.h)(i.default,e),e.el)},!0)},function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function o(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return y.iterable&&(t[Symbol.iterator]=function(){return t}),t}function r(e){this.map={},e instanceof r?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function a(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function i(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function s(e){var t=new FileReader,n=i(t);return t.readAsArrayBuffer(e),n}function l(e){var t=new FileReader,n=i(t);return t.readAsText(e),n}function u(e){for(var t=new Uint8Array(e),n=new Array(t.length),o=0;o<t.length;o++)n[o]=String.fromCharCode(t[o]);return n.join("")}function c(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(y.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(y.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(y.arrayBuffer&&y.blob&&_(e))this._bodyArrayBuffer=c(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!y.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!g(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob&&(this.blob=function(){var e=a(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?a(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=a(this);if(e)return e;if(this._bodyBlob)return l(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function p(e){var t=e.toUpperCase();return x.indexOf(t)>-1?t:e}function f(e,t){t=t||{};var n=t.body;if(e instanceof f){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new r(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new r(t.headers)),this.method=p(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function h(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),o=n.shift().replace(/\+/g," "),r=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(r))}}),t}function m(e){var t=new r;return e.split(/\r?\n/).forEach(function(e){var n=e.split(":"),o=n.shift().trim();if(o){var r=n.join(":").trim();t.append(o,r)}}),t}function v(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new r(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var y={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(y.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],_=function(e){return e&&DataView.prototype.isPrototypeOf(e)},g=ArrayBuffer.isView||function(e){return e&&b.indexOf(Object.prototype.toString.call(e))>-1};r.prototype.append=function(e,o){e=t(e),o=n(o);var r=this.map[e];this.map[e]=r?r+","+o:o},r.prototype.delete=function(e){delete this.map[t(e)]},r.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},r.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},r.prototype.set=function(e,o){this.map[t(e)]=n(o)},r.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},r.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),o(e)},r.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),o(e)},r.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),o(e)},y.iterable&&(r.prototype[Symbol.iterator]=r.prototype.entries);var x=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function(){return new f(this,{body:this._bodyInit})},d.call(f.prototype),d.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new r(this.headers),url:this.url})},v.error=function(){var e=new v(null,{status:0,statusText:""});return e.type="error",e};var w=[301,302,303,307,308];v.redirect=function(e,t){if(-1===w.indexOf(t))throw new RangeError("Invalid status code");return new v(null,{status:t,headers:{location:e}})},e.Headers=r,e.Request=f,e.Response=v,e.fetch=function(e,t){return new Promise(function(n,o){var r=new f(e,t),a=new XMLHttpRequest;a.onload=function(){var e={status:a.status,statusText:a.statusText,headers:m(a.getAllResponseHeaders()||"")};e.url="responseURL"in a?a.responseURL:e.headers.get("X-Request-URL");var t="response"in a?a.response:a.responseText;n(new v(t,e))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(r.method,r.url,!0),"include"===r.credentials&&(a.withCredentials=!0),"responseType"in a&&y.blob&&(a.responseType="blob"),r.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),a.send(void 0===r._bodyInit?null:r._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),u=n(3),c=o(u),d=(n(10),function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={popup:!1},e}return i(t,e),s(t,[{key:"handonclic",value:function(e,t){this.setState({popup:{title:e,content:t}})}},{key:"closePopup",value:function(){this.setState({popup:!1})}},{key:"getPopup",value:function(){if(this.state.popup)return(0,l.h)("div",{className:c.default.popup},(0,l.h)("button",{className:c.default.salir,onClick:this.closePopup.bind(this)},"Cerrar"),(0,l.h)("h2",null,this.state.popup.title),(0,l.h)("div",{dangerouslySetInnerHTML:{__html:this.state.popup.content}}))}},{key:"render",value:function(e,t){var n=this.getPopup(),o=void 0;return t.popup&&(o=(0,l.h)("div",{className:c.default.fondo})),(0,l.h)("div",{className:c.default.container},o,n,(0,l.h)("div",{className:"cont_circulos"},(0,l.h)("img",{src:"http://archivo.lasillavacia.com/archivos/historias/Galeria/fotomultas.jpg",alt:"",className:"background-img"}),(0,l.h)("div",{onClick:this.handonclic.bind(this,"Los hemanos Daes, megacontratistas de Barranquilla y dueños de Tecnoglass","<p>En enero de 2010, durante su primera administración como alcalde de Barranquilla, Alejandro Char firmó un otrosí al contrato de concesión de amoblamiento urbano que desde 1999 maneja la empresa Construseñales SA, de los hermanos Christian y José Manuel ‘Yuyo’ Daes Abuchaibe, superpoderosos de Barranquilla y dueños de la empresa Tecnoglass. Con ese otrosí, el Distrito le entregó a un privado el 35% del total del recaudo de las fotomultas. Desde entonces, la Alcaldía instala cámaras por toda la ciudad, que hoy suman 56, para registrar infracciones por exceso de velocidad, irrespeto a las cebras y semáforos, bloqueo de intersecciones o incumplimiento a la medida de 'pico y placa'.</p><p>Entre 2010 y febrero de este año, la Secretaría de Tránsito impuso 744 mil comparendos electrónicos por 187 mil millones de pesos. Sin embargo, solo recaudó 30.663 millones de pesos porque los 157.202 millones restantes están en cobros coactivos, según respuesta de esa dependencia a un derecho de petición. Desde su instalación, las cámaras han generado polémica en Barranquilla porque, pese a que la Alcaldía las presentó como aliadas en su campaña para reducir la accidentalidad vial, son consideradas elementos de generación de recursos que no siempre se instalan con criterios técnicos.</p><div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/historia/los-super-poderosos-de-las-fotomultas-en-el-caribe-que-no-saldran-golpeados-61475' target='_blank' >VER MAS...</a></div>"),className:"personaje uno"},(0,l.h)("div",{className:"punto color1"},(0,l.h)("span",null,"Barranquilla"))),(0,l.h)("div",{onClick:this.handonclic.bind(this,"Contratistas y poderosos locales","<p>En los últimos cinco años en los santanderes se han entregado cuatro concesiones -Floridablanca en Santander y Ocaña, Los Patios y Villa del Rosario en Norte de Santander-  para la operación de las fotomulas. Tres han quedado en manos de contratistas conocidos por financiar campañas y una dentro de la red de negocios del emporio del controvertido empresario barranquillero, Alfonso 'el Turco' Hilsaca.</p><p>En los santenderes el concesionario que menos gana con el recaudo de las infracciones es el de Floridablanca que se queda con el 45,3%, el que más gana es el de Hilsaca que está en Villa del Rosario -municipio del área metropolitana de Cúcuta- y se queda con el 80%. Todas las concesiones tienen en común que resultaron de la sociedad de varias empresas y que están en la mira de entes de control por la manera en la que fueron licitados. Su operación ha sido igual de controvertida y en Los Patios, otro de los municipios del área metropolitana de Cúcuta, en solo ocho meses de operación se han emitido 60 mil órdenes de comparendos.</p><div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/historia/fotomultas-en-los-santanderes-la-medida-de-los-privados-61643' target='_blank' >VER MAS...</a></div>"),className:"personaje dos"},(0,l.h)("div",{className:"punto color1"},(0,l.h)("span",null,"Santanderes"))),(0,l.h)("div",{onClick:this.handonclic.bind(this,"Título","<p>Texto de Juan Pa Aquí</p><div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://www.google.com' target='_blank' >VER MAS...</a></div>"),className:"personaje tres"},(0,l.h)("div",{className:"punto color1"},(0,l.h)("span",null,"Zipaquirá"))),(0,l.h)("div",{onClick:this.handonclic.bind(this,"Título","<p>Texto de Natys Aquí porque estoy en crisis</p>"),className:"personaje cua"},(0,l.h)("div",{className:"punto color1"},(0,l.h)("span",null,"Cali"))),(0,l.h)("div",{onClick:this.handonclic.bind(this,"Álvaro León Zuluaga, el afectado en Medellín","<p>En Antioquia la empresa dueña de las fotomultas es Quipux. Fue creada en 1995 en Rionegro y su representante legal es Álvaro León Zuluaga, un contratista que lleva desde la alcaldía de Luis Pérez en 2001 manejando todo el sistema de fotomultas en Medellín y luego, a raíz de un informe de auditoria de la Contraloría de Medellín que decía le pedía a la Secretaría de Movilidad fijar controles a la información que manejaban los empleados de Quipux y la que ellos ingresaban al sistema, el entonces alcalde Sergio Fajardo firmó un convenio interadministrativo con Emtelco, UNE, filial de las Empresas Públicas de Medellín, EPM, para que modernizara el sistema. Ese convenio fue por 6.023 millones a un plazo inicial de 8 años, y ya en el mismo 2006 se le añadieron 4 otrosíes que extendieron su plazo a 12 años.</p><p>En 2010  la alcaldía de Alonso Salazar hizo el otro sí 5 que le agregó una segunda etapa al convenio hasta 2025. El presupuesto para esa nueva etapa fue de 64.424 millones de pesos, adicionales a los 6.023 millones iniciales.</p><p>Para esa segunda etapa el gerente general de UNE suscribió un acuerdo de colaboración empresarial con XM y el Consorcio ITS Medellín, que está conformado por SITT & Cía ltda y Quipux. UNE también firmó otro contrato para el suministro de equipos, software, implantación y mantenimiento de los equipos tecnológicos del sistema de fotodetección con la sociedad Velsis, una empresa brasilera cuya sucursal en Medellín fue creada en 2011 justamente por Álvaro León Zuluaga, el representante legal de Quipux.</p><p>Para el módulo de fotomultas, Quipux tiene el 41 por ciento del recaudo, por lo que el proyecto de ley le pegaría directamente a Álvaro León Zuluaga. En todo caso, Quipux tiene un poder que trasciende a las fotomultas. De hecho, a la empresa la llaman 'el Gran Hermano' porque fuera de Antioquia, desde 2007 la empresa tiene el 49% de la concesión Runt S.A de todo el país (la otra mitad la tienen Heinsohn Software House S.A. e Información y Tecnología S.A) con el ministerio de Transporte.</p><p>La Concesión Runt S.A. diseñó un sistema para unificar la información de todos los carros del país, sus propietarios y sus infracciones. Para eso, Quipux hizo el sistema Qx-tránsito y entonces a las oficinas de tránsito de todo el país les tocó adquirir el software para interactuar en línea con la central de información nacional, lo que convirtió a la empresa en una súper poderosa en ese sector.</p>"),className:"personaje cin"},(0,l.h)("div",{className:"punto color1"},(0,l.h)("span",null,"Medellín")))))}}]),t}(l.Component));t.default=d},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".article-sidebar.col-md-4.col-lg-3{display:none}.field-item>p,.img-container{max-width:713px}@media (min-width:1200px){.article-content.col-sm-12.col-md-8{width:85%}}@media (min-width:992px) and (max-width:1200px){.article-content.col-md-8{width:calc(100% - 20px)!important}}.personaje{position:absolute;cursor:pointer}.personaje.uno{left:43.4%;top:17%}.personaje.dos{left:56.5%;top:46.3%}.personaje.tres{left:49.4%;top:67%}.personaje.cua{left:32%;top:78.5%}.personaje.cin{left:38.3%;top:55%}.cont_circulos{position:relative;width:100%;clear:both}.conten{width:100%;position:absolute;visibility:visible;line-height:1.2em}.climpiar{clear:both;height:1px}.hide{display:none}.show{display:block}.punto{position:absolute;width:1em;height:1em;border:2px solid #fff;border-radius:800px;top:0}.punto a{width:20%;height:20%;display:block;text-align:center;margin-left:29%}.punto span{margin-left:1.3em;font-family:Roboto,sans-serif;text-decoration:none;color:#000;font-weight:600;font-size:1.1em}.inv{display:none}.left{float:left;margin-right:10px;text-align:right}.right{float:right;margin-left:10px;text-align:left}.color1{background-color:#44a5db!important}.background-img{width:100%;height:auto}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".interactive__lsv-interactive___1Fqfq{width:100%;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400}.interactive__lsv-interactive___1Fqfq svg{overflow:visible}",""]),t.locals={"lsv-interactive":"interactive__lsv-interactive___1Fqfq"}},function(e,t,n){t=e.exports=n(1)(),t.push([e.i,".base__container___1iWfj{font-family:Roboto,sans-serif;font-size:16px;display:block;position:relative}.base__popup___3JSrx{background:#fff;border:1px solid undefined;position:absolute;z-index:1;max-width:100%;width:50em;height:inherit;margin:auto;top:2em;left:0;right:0;padding:2em;border-radius:.5em}.base__popup___3JSrx h2{font-size:1.5em;clear:both;text-align:center;color:#000}.base__popup___3JSrx p{font-size:1em!important;line-height:1.5;margin:0 0 1em}@media (max-width:800px){.base__container___1iWfj{min-height:36em}.base__popup___3JSrx{padding:1em;top:0;border-radius:0;height:600px;overflow:scroll}.base__popup___3JSrx h2{font-size:1.1em}.base__popup___3JSrx p{font-size:.9em!important;line-height:1.1em!important}}.base__fondo___Znw3E{width:100%;height:100%;background-color:rgba(0,0,0,.3);position:absolute;z-index:1;transition:.2s}.base__salir___aOe2_{float:right;background:#44a5db;color:#fff;border-radius:2em;padding:.5em 1em;border:1px solid transparent;font-size:.8em;transition:.2s;margin-bottom:1em}.base__salir___aOe2_:hover{background-color:#fff;color:#44a5db;border-color:#44a5db}.base__vermas___1_cjQ{display:block;text-align:center;text-transform:uppercase;font-size:.8em;font-family:Lato,sans-serif;color:#44a5db}",""]),t.locals={container:"base__container___1iWfj",popup:"base__popup___3JSrx",fondo:"base__fondo___Znw3E",salir:"base__salir___aOe2_",vermas:"base__vermas___1_cjQ"}},function(e,t){e.exports={name:"map_revocatoria"}},function(e,t,n){!function(){function t(e){var t=setInterval(function(){"complete"===document.readyState&&(clearInterval(t),e())},100)}function o(e,t){var n=document.getElementById(e);if(!n)return void console.log("Whoops -- the lsv-interactive function couldn't find a <div> with the id you provided. You probably mistyped it in debug.js.");if(/\blsv-interactive\b/.test(n.className)||(n.className+=" lsv-interactive"),/\blsv-interactive--rendered\b/.test(n.className))return void console.log("Interactive",e,"already rendered -- skipping");n.className+=" lsv-interactive--rendered",console.log("Loading interactive",e);var o=n.getElementsByTagName("img");o&&o[0]&&n.removeChild(o[0]);for(var a={},i=0;i<n.attributes.length;i+=1){var s=n.attributes[i];if(/^data-/.test(s.nodeName)){a[s.nodeName.split("data-")[1]]=s.nodeValue}}return{version:"0.4.0a",id:e,el:n,width:function(){return n.offsetWidth},height:function(){return n.offsetHeight},page_width:document.body.offsetWidth,page_height:document.body.offsetHeight,params:a,is_touch_device:r(),onresize:function(e,t){if(!document.addEventListener)return void console.log("onresize not supported in this browser");t="number"!=typeof t?250:t;var o;window.addEventListener("resize",function(){clearTimeout(o),o=setTimeout(function(){e(n.offsetWidth,n.offsetHeight)},t)})}}}function r(){return"ontouchstart"in window||navigator.maxTouchPoints}n(13),e.exports=function(e,n,r){function a(){n(o(e))}if(!e||"string"!=typeof e)return void console.log("Whoops -- you need to give lsv-interactive a string id of the element on the page in which to self-assemble or the element itself.");"#"==e[0]&&(e=e.slice(1)),"function"!=typeof n&&console.log("Warning! You did not provide a callback function as the second parameter to lsv-interactive."),function(){r?a():t(a)}()},e.exports.commafy=function(e){if("number"==typeof e){for(e=parseInt(e,10);/(\d+)(\d{3})/.test(e.toString());)e=e.toString().replace(/(\d+)(\d{3})/,"$1,$2");return e}},e.exports.guid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}()},function(e,t,n){var o=n(7);"string"==typeof o&&(o=[[e.i,o,""]]);n(0)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){var o=n(8);"string"==typeof o&&(o=[[e.i,o,""]]);n(0)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){var o=n(12);"string"==typeof o&&(o=[[e.i,o,""]]);n(0)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){n(5),e.exports=n(4)}]);