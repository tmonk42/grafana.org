!function(e){String.prototype.trim===e&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===e&&(Array.prototype.reduce=function(t){if(void 0===this||null===this)throw new TypeError;var n,i=Object(this),r=i.length>>>0,o=0;if("function"!=typeof t)throw new TypeError;if(0==r&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in i){n=i[o++];break}if(++o>=r)throw new TypeError}for(;r>o;)o in i&&(n=t.call(e,n,i[o],o,i)),o++;return n})}();var Zepto=function(){function e(e){return null==e?String(e):Y[G.call(e)]||"object"}function t(t){return"function"==e(t)}function n(e){return null!=e&&e==e.window}function i(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE}function r(t){return"object"==e(t)}function o(e){return r(e)&&!n(e)&&e.__proto__==Object.prototype}function s(e){return e instanceof Array}function a(e){return"number"==typeof e.length}function l(e){return A.call(e,function(e){return null!=e})}function c(e){return e.length>0?T.fn.concat.apply([],e):e}function u(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function d(e){return e in M?M[e]:M[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function f(e,t){return"number"!=typeof t||O[u(e)]?t:t+"px"}function p(e){var t,n;return D[e]||(t=F.createElement(e),F.body.appendChild(t),n=q(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),"none"==n&&(n="block"),D[e]=n),D[e]}function h(e){return"children"in e?j.call(e.children):T.map(e.childNodes,function(e){return 1==e.nodeType?e:void 0})}function m(e,t,n){for(C in t)n&&(o(t[C])||s(t[C]))?(o(t[C])&&!o(e[C])&&(e[C]={}),s(t[C])&&!s(e[C])&&(e[C]=[]),m(e[C],t[C],n)):t[C]!==_&&(e[C]=t[C])}function g(e,t){return t===_?T(e):T(e).filter(t)}function v(e,n,i,r){return t(n)?n.call(e,i,r):n}function y(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function b(e,t){var n=e.className,i=n&&n.baseVal!==_;return t===_?i?n.baseVal:n:(i?n.baseVal=t:e.className=t,void 0)}function x(e){var t;try{return e?"true"==e||("false"==e?!1:"null"==e?null:isNaN(t=Number(e))?/^[\[\{]/.test(e)?T.parseJSON(e):e:t):e}catch(n){return e}}function w(e,t){t(e);for(var n in e.childNodes)w(e.childNodes[n],t)}var _,C,T,k,S,E,N=[],j=N.slice,A=N.filter,F=window.document,D={},M={},q=F.defaultView.getComputedStyle,O={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},L=/^\s*<(\w+|!)[^>]*>/,P=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,z=/^(?:body|html)$/i,I=["val","css","html","text","data","width","height","offset"],H=["after","prepend","before","append"],$=F.createElement("table"),R=F.createElement("tr"),B={tr:F.createElement("tbody"),tbody:$,thead:$,tfoot:$,td:R,th:R,"*":F.createElement("div")},W=/complete|loaded|interactive/,X=/^\.([\w-]+)$/,U=/^#([\w-]*)$/,V=/^[\w-]+$/,Y={},G=Y.toString,Q={},Z=F.createElement("div");return Q.matches=function(e,t){if(!e||1!==e.nodeType)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var i,r=e.parentNode,o=!r;return o&&(r=Z).appendChild(e),i=~Q.qsa(r,t).indexOf(e),o&&Z.removeChild(e),i},S=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},E=function(e){return A.call(e,function(t,n){return e.indexOf(t)==n})},Q.fragment=function(e,t,n){e.replace&&(e=e.replace(P,"<$1></$2>")),t===_&&(t=L.test(e)&&RegExp.$1),t in B||(t="*");var i,r,s=B[t];return s.innerHTML=""+e,r=T.each(j.call(s.childNodes),function(){s.removeChild(this)}),o(n)&&(i=T(r),T.each(n,function(e,t){I.indexOf(e)>-1?i[e](t):i.attr(e,t)})),r},Q.Z=function(e,t){return e=e||[],e.__proto__=T.fn,e.selector=t||"",e},Q.isZ=function(e){return e instanceof Q.Z},Q.init=function(e,n){if(e){if(t(e))return T(F).ready(e);if(Q.isZ(e))return e;var i;if(s(e))i=l(e);else if(r(e))i=[o(e)?T.extend({},e):e],e=null;else if(L.test(e))i=Q.fragment(e.trim(),RegExp.$1,n),e=null;else{if(n!==_)return T(n).find(e);i=Q.qsa(F,e)}return Q.Z(i,e)}return Q.Z()},T=function(e,t){return Q.init(e,t)},T.extend=function(e){var t,n=j.call(arguments,1);return"boolean"==typeof e&&(t=e,e=n.shift()),n.forEach(function(n){m(e,n,t)}),e},Q.qsa=function(e,t){var n;return i(e)&&U.test(t)?(n=e.getElementById(RegExp.$1))?[n]:[]:1!==e.nodeType&&9!==e.nodeType?[]:j.call(X.test(t)?e.getElementsByClassName(RegExp.$1):V.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t))},T.contains=function(e,t){return e!==t&&e.contains(t)},T.type=e,T.isFunction=t,T.isWindow=n,T.isArray=s,T.isPlainObject=o,T.isEmptyObject=function(e){var t;for(t in e)return!1;return!0},T.inArray=function(e,t,n){return N.indexOf.call(t,e,n)},T.camelCase=S,T.trim=function(e){return e.trim()},T.uuid=0,T.support={},T.expr={},T.map=function(e,t){var n,i,r,o=[];if(a(e))for(i=0;i<e.length;i++)n=t(e[i],i),null!=n&&o.push(n);else for(r in e)n=t(e[r],r),null!=n&&o.push(n);return c(o)},T.each=function(e,t){var n,i;if(a(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===!1)return e}else for(i in e)if(t.call(e[i],i,e[i])===!1)return e;return e},T.grep=function(e,t){return A.call(e,t)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Y["[object "+t+"]"]=t.toLowerCase()}),T.fn={forEach:N.forEach,reduce:N.reduce,push:N.push,sort:N.sort,indexOf:N.indexOf,concat:N.concat,map:function(e){return T(T.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return T(j.apply(this,arguments))},ready:function(e){return W.test(F.readyState)?e(T):F.addEventListener("DOMContentLoaded",function(){e(T)},!1),this},get:function(e){return e===_?j.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(e){return N.every.call(this,function(t,n){return e.call(t,n,t)!==!1}),this},filter:function(e){return t(e)?this.not(this.not(e)):T(A.call(this,function(t){return Q.matches(t,e)}))},add:function(e,t){return T(E(this.concat(T(e,t))))},is:function(e){return this.length>0&&Q.matches(this[0],e)},not:function(e){var n=[];if(t(e)&&e.call!==_)this.each(function(t){e.call(this,t)||n.push(this)});else{var i="string"==typeof e?this.filter(e):a(e)&&t(e.item)?j.call(e):T(e);this.forEach(function(e){i.indexOf(e)<0&&n.push(e)})}return T(n)},has:function(e){return this.filter(function(){return r(e)?T.contains(this,e):T(this).find(e).size()})},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!r(e)?e:T(e)},last:function(){var e=this[this.length-1];return e&&!r(e)?e:T(e)},find:function(e){var t,n=this;return t="object"==typeof e?T(e).filter(function(){var e=this;return N.some.call(n,function(t){return T.contains(t,e)})}):1==this.length?T(Q.qsa(this[0],e)):this.map(function(){return Q.qsa(this,e)})},closest:function(e,t){var n=this[0],r=!1;for("object"==typeof e&&(r=T(e));n&&!(r?r.indexOf(n)>=0:Q.matches(n,e));)n=n!==t&&!i(n)&&n.parentNode;return T(n)},parents:function(e){for(var t=[],n=this;n.length>0;)n=T.map(n,function(e){return(e=e.parentNode)&&!i(e)&&t.indexOf(e)<0?(t.push(e),e):void 0});return g(t,e)},parent:function(e){return g(E(this.pluck("parentNode")),e)},children:function(e){return g(this.map(function(){return h(this)}),e)},contents:function(){return this.map(function(){return j.call(this.childNodes)})},siblings:function(e){return g(this.map(function(e,t){return A.call(h(t.parentNode),function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return T.map(this,function(t){return t[e]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==q(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){var n=t(e);if(this[0]&&!n)var i=T(e).get(0),r=i.parentNode||this.length>1;return this.each(function(t){T(this).wrapAll(n?e.call(this,t):r?i.cloneNode(!0):i)})},wrapAll:function(e){if(this[0]){T(this[0]).before(e=T(e));for(var t;(t=e.children()).length;)e=t.first();T(e).append(this)}return this},wrapInner:function(e){var n=t(e);return this.each(function(t){var i=T(this),r=i.contents(),o=n?e.call(this,t):e;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=T(this);(e===_?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(e){return T(this.pluck("previousElementSibling")).filter(e||"*")},next:function(e){return T(this.pluck("nextElementSibling")).filter(e||"*")},html:function(e){return e===_?this.length>0?this[0].innerHTML:null:this.each(function(t){var n=this.innerHTML;T(this).empty().append(v(this,e,t,n))})},text:function(e){return e===_?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e})},attr:function(e,t){var n;return"string"==typeof e&&t===_?0==this.length||1!==this[0].nodeType?_:"value"==e&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(e))&&e in this[0]?this[0][e]:n:this.each(function(n){if(1===this.nodeType)if(r(e))for(C in e)y(this,C,e[C]);else y(this,e,v(this,t,n,this.getAttribute(e)))})},removeAttr:function(e){return this.each(function(){1===this.nodeType&&y(this,e)})},prop:function(e,t){return t===_?this[0]&&this[0][e]:this.each(function(n){this[e]=v(this,t,n,this[e])})},data:function(e,t){var n=this.attr("data-"+u(e),t);return null!==n?x(n):_},val:function(e){return e===_?this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(t){this.value=v(this,e,t,this.value)})},offset:function(e){if(e)return this.each(function(t){var n=T(this),i=v(this,e,t,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,n){if(arguments.length<2&&"string"==typeof t)return this[0]&&(this[0].style[S(t)]||q(this[0],"").getPropertyValue(t));var i="";if("string"==e(t))n||0===n?i=u(t)+":"+f(t,n):this.each(function(){this.style.removeProperty(u(t))});else for(C in t)t[C]||0===t[C]?i+=u(C)+":"+f(C,t[C])+";":this.each(function(){this.style.removeProperty(u(C))});return this.each(function(){this.style.cssText+=";"+i})},index:function(e){return e?this.indexOf(T(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return N.some.call(this,function(e){return this.test(b(e))},d(e))},addClass:function(e){return this.each(function(t){k=[];var n=b(this),i=v(this,e,t,n);i.split(/\s+/g).forEach(function(e){T(this).hasClass(e)||k.push(e)},this),k.length&&b(this,n+(n?" ":"")+k.join(" "))})},removeClass:function(e){return this.each(function(t){return e===_?b(this,""):(k=b(this),v(this,e,t,k).split(/\s+/g).forEach(function(e){k=k.replace(d(e)," ")}),b(this,k.trim()),void 0)})},toggleClass:function(e,t){return this.each(function(n){var i=T(this),r=v(this,e,n,b(this));r.split(/\s+/g).forEach(function(e){(t===_?!i.hasClass(e):t)?i.addClass(e):i.removeClass(e)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var e=this[0],t=this.offsetParent(),n=this.offset(),i=z.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(T(e).css("margin-top"))||0,n.left-=parseFloat(T(e).css("margin-left"))||0,i.top+=parseFloat(T(t[0]).css("border-top-width"))||0,i.left+=parseFloat(T(t[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||F.body;e&&!z.test(e.nodeName)&&"static"==T(e).css("position");)e=e.offsetParent;return e})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(e){T.fn[e]=function(t){var r,o=this[0],s=e.replace(/./,function(e){return e[0].toUpperCase()});return t===_?n(o)?o["inner"+s]:i(o)?o.documentElement["offset"+s]:(r=this.offset())&&r[e]:this.each(function(n){o=T(this),o.css(e,v(this,t,n,o[e]()))})}}),H.forEach(function(t,n){var i=n%2;T.fn[t]=function(){var t,r,o=T.map(arguments,function(n){return t=e(n),"object"==t||"array"==t||null==n?n:Q.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(e,t){r=i?t:t.parentNode,t=0==n?t.nextSibling:1==n?t.firstChild:2==n?t:null,o.forEach(function(e){if(s)e=e.cloneNode(!0);else if(!r)return T(e).remove();w(r.insertBefore(e,t),function(e){null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src||window.eval.call(window,e.innerHTML)})})})},T.fn[i?t+"To":"insert"+(n?"Before":"After")]=function(e){return T(e)[t](this),this}}),Q.Z.prototype=T.fn,Q.uniq=E,Q.deserializeValue=x,T.zepto=Q,T}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(e){function t(e){var t=this.os={},n=this.browser={},i=e.match(/WebKit\/([\d.]+)/),r=e.match(/(Android)\s+([\d.]+)/),o=e.match(/(iPad).*OS\s([\d_]+)/),s=!o&&e.match(/(iPhone\sOS)\s([\d_]+)/),a=e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=a&&e.match(/TouchPad/),c=e.match(/Kindle\/([\d.]+)/),u=e.match(/Silk\/([\d._]+)/),d=e.match(/(BlackBerry).*Version\/([\d.]+)/),f=e.match(/(BB10).*Version\/([\d.]+)/),p=e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),h=e.match(/PlayBook/),m=e.match(/Chrome\/([\d.]+)/)||e.match(/CriOS\/([\d.]+)/),g=e.match(/Firefox\/([\d.]+)/);(n.webkit=!!i)&&(n.version=i[1]),r&&(t.android=!0,t.version=r[2]),s&&(t.ios=t.iphone=!0,t.version=s[2].replace(/_/g,".")),o&&(t.ios=t.ipad=!0,t.version=o[2].replace(/_/g,".")),a&&(t.webos=!0,t.version=a[2]),l&&(t.touchpad=!0),d&&(t.blackberry=!0,t.version=d[2]),f&&(t.bb10=!0,t.version=f[2]),p&&(t.rimtabletos=!0,t.version=p[2]),h&&(n.playbook=!0),c&&(t.kindle=!0,t.version=c[1]),u&&(n.silk=!0,n.version=u[1]),!u&&t.android&&e.match(/Kindle Fire/)&&(n.silk=!0),m&&(n.chrome=!0,n.version=m[1]),g&&(n.firefox=!0,n.version=g[1]),t.tablet=!!(o||h||r&&!e.match(/Mobile/)||g&&e.match(/Tablet/)),t.phone=!(t.tablet||!(r||s||a||d||f||m&&e.match(/Android/)||m&&e.match(/CriOS\/([\d.]+)/)||g&&e.match(/Mobile/)))}t.call(e,navigator.userAgent),e.__detect=t}(Zepto),function(e){function t(e){return e._zid||(e._zid=p++)}function n(e,n,o,s){if(n=i(n),n.ns)var a=r(n.ns);return(f[t(e)]||[]).filter(function(e){return!(!e||n.e&&e.e!=n.e||n.ns&&!a.test(e.ns)||o&&t(e.fn)!==t(o)||s&&e.sel!=s)})}function i(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function r(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function o(t,n,i){"string"!=e.type(t)?e.each(t,i):t.split(/\s/).forEach(function(e){i(e,n)})}function s(e,t){return e.del&&("focus"==e.e||"blur"==e.e)||!!t}function a(e){return m[e]||e}function l(n,r,l,c,u,d){var p=t(n),h=f[p]||(f[p]=[]);o(r,l,function(t,r){var o=i(t);o.fn=r,o.sel=c,o.e in m&&(r=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=u&&u(r,t);var l=o.del||r;o.proxy=function(e){var t=l.apply(n,[e].concat(e.data));return t===!1&&(e.preventDefault(),e.stopPropagation()),t},o.i=h.length,h.push(o),n.addEventListener(a(o.e),o.proxy,s(o,d))})}function c(e,i,r,l,c){var u=t(e);o(i||"",r,function(t,i){n(e,t,i,l).forEach(function(t){delete f[u][t.i],e.removeEventListener(a(t.e),t.proxy,s(t,c))})})}function u(t){var n,i={originalEvent:t};for(n in t)y.test(n)||void 0===t[n]||(i[n]=t[n]);return e.each(b,function(e,n){i[e]=function(){return this[n]=g,t[e].apply(t,arguments)},i[n]=v}),i}function d(e){if(!("defaultPrevented"in e)){e.defaultPrevented=!1;var t=e.preventDefault;e.preventDefault=function(){this.defaultPrevented=!0,t.call(this)}}}var f=(e.zepto.qsa,{}),p=1,h={},m={mouseenter:"mouseover",mouseleave:"mouseout"};h.click=h.mousedown=h.mouseup=h.mousemove="MouseEvents",e.event={add:l,remove:c},e.proxy=function(n,i){if(e.isFunction(n)){var r=function(){return n.apply(i,arguments)};return r._zid=t(n),r}if("string"==typeof i)return e.proxy(n[i],n);throw new TypeError("expected function")},e.fn.bind=function(e,t){return this.each(function(){l(this,e,t)})},e.fn.unbind=function(e,t){return this.each(function(){c(this,e,t)})},e.fn.one=function(e,t){return this.each(function(n,i){l(this,e,t,null,function(e,t){return function(){var n=e.apply(i,arguments);return c(i,t,e),n}})})};var g=function(){return!0},v=function(){return!1},y=/^([A-Z]|layer[XY]$)/,b={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,n,i){return this.each(function(r,o){l(o,n,i,t,function(n){return function(i){var r,s=e(i.target).closest(t,o).get(0);return s?(r=e.extend(u(i),{currentTarget:s,liveFired:o}),n.apply(s,[r].concat([].slice.call(arguments,1)))):void 0}})})},e.fn.undelegate=function(e,t,n){return this.each(function(){c(this,t,n,e)})},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,i){return!n||e.isFunction(n)?this.bind(t,n||i):this.delegate(n,t,i)},e.fn.off=function(t,n,i){return!n||e.isFunction(n)?this.unbind(t,n||i):this.undelegate(n,t,i)},e.fn.trigger=function(t,n){return("string"==typeof t||e.isPlainObject(t))&&(t=e.Event(t)),d(t),t.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(t)})},e.fn.triggerHandler=function(t,i){var r,o;return this.each(function(s,a){r=u("string"==typeof t?e.Event(t):t),r.data=i,r.target=a,e.each(n(a,t.type||t),function(e,t){return o=t.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),["focus","blur"].forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.each(function(){try{this[t]()}catch(e){}}),this}}),e.Event=function(e,t){"string"!=typeof e&&(t=e,e=t.type);var n=document.createEvent(h[e]||"Events"),i=!0;if(t)for(var r in t)"bubbles"==r?i=!!t[r]:n[r]=t[r];return n.initEvent(e,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(e){function t(t,n,i){var r=e.Event(n);return e(t).trigger(r,i),!r.defaultPrevented}function n(e,n,i,r){return e.global?t(n||y,i,r):void 0}function i(t){t.global&&0===e.active++&&n(t,null,"ajaxStart")}function r(t){t.global&&!--e.active&&n(t,null,"ajaxStop")}function o(e,t){var i=t.context;return t.beforeSend.call(i,e,t)===!1||n(t,i,"ajaxBeforeSend",[e,t])===!1?!1:(n(t,i,"ajaxSend",[e,t]),void 0)}function s(e,t,i){var r=i.context,o="success";i.success.call(r,e,o,t),n(i,r,"ajaxSuccess",[t,i,e]),l(o,t,i)}function a(e,t,i,r){var o=r.context;r.error.call(o,i,t,e),n(r,o,"ajaxError",[i,r,e]),l(t,i,r)}function l(e,t,i){var o=i.context;i.complete.call(o,t,e),n(i,o,"ajaxComplete",[t,i]),r(i)}function c(){}function u(e){return e&&(e=e.split(";",2)[0]),e&&(e==C?"html":e==_?"json":x.test(e)?"script":w.test(e)&&"xml")||"text"}function d(e,t){return(e+"&"+t).replace(/[&?]{1,2}/,"?")}function f(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()||(t.url=d(t.url,t.data))}function p(t,n,i,r){var o=!e.isFunction(n);return{url:t,data:o?n:void 0,success:o?e.isFunction(i)?i:void 0:n,dataType:o?r||i:i}}function h(t,n,i,r){var o,s=e.isArray(n);e.each(n,function(n,a){o=e.type(a),r&&(n=i?r:r+"["+(s?"":n)+"]"),!r&&s?t.add(a.name,a.value):"array"==o||!i&&"object"==o?h(t,a,i,n):t.add(n,a)})}var m,g,v=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,_="application/json",C="text/html",T=/^\s*$/;e.active=0,e.ajaxJSONP=function(t){if(!("type"in t))return e.ajax(t);var n,i="jsonp"+ ++v,r=y.createElement("script"),l=function(){clearTimeout(n),e(r).remove(),delete window[i]},u=function(e){l(),e&&"timeout"!=e||(window[i]=c),a(null,e||"abort",d,t)},d={abort:u};return o(d,t)===!1?(u("abort"),!1):(window[i]=function(e){l(),s(e,d,t)},r.onerror=function(){u("error")},r.src=t.url.replace(/=\?/,"="+i),e("head").append(r),t.timeout>0&&(n=setTimeout(function(){u("timeout")},t.timeout)),d)},e.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:_,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},e.ajax=function(t){var n=e.extend({},t||{});for(m in e.ajaxSettings)void 0===n[m]&&(n[m]=e.ajaxSettings[m]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),f(n),n.cache===!1&&(n.url=d(n.url,"_="+Date.now()));var r=n.dataType,l=/=\?/.test(n.url);if("jsonp"==r||l)return l||(n.url=d(n.url,"callback=?")),e.ajaxJSONP(n);var p,h=n.accepts[r],v={},y=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,b=n.xhr();n.crossDomain||(v["X-Requested-With"]="XMLHttpRequest"),h&&(v.Accept=h,h.indexOf(",")>-1&&(h=h.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(h)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&(v["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=e.extend(v,n.headers||{}),b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=c,clearTimeout(p);var t,i=!1;if(b.status>=200&&b.status<300||304==b.status||0==b.status&&"file:"==y){r=r||u(b.getResponseHeader("content-type")),t=b.responseText;try{"script"==r?(1,eval)(t):"xml"==r?t=b.responseXML:"json"==r&&(t=T.test(t)?null:e.parseJSON(t))}catch(o){i=o}i?a(i,"parsererror",b,n):s(t,b,n)}else a(null,b.status?"error":"abort",b,n)}};var x="async"in n?n.async:!0;b.open(n.type,n.url,x);for(g in n.headers)b.setRequestHeader(g,n.headers[g]);return o(b,n)===!1?(b.abort(),!1):(n.timeout>0&&(p=setTimeout(function(){b.onreadystatechange=c,b.abort(),a(null,"timeout",b,n)},n.timeout)),b.send(n.data?n.data:null),b)},e.get=function(){return e.ajax(p.apply(null,arguments))},e.post=function(){var t=p.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=p.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,i){if(!this.length)return this;var r,o=this,s=t.split(/\s/),a=p(t,n,i),l=a.success;return s.length>1&&(a.url=s[0],r=s[1]),a.success=function(t){o.html(r?e("<div>").html(t.replace(b,"")).find(r):t),l&&l.apply(o,arguments)},e.ajax(a),this};var k=encodeURIComponent;e.param=function(e,t){var n=[];return n.add=function(e,t){this.push(k(e)+"="+k(t))},h(n,e,t),n.join("&").replace(/%20/g,"+")}}(Zepto),function(e){e.fn.serializeArray=function(){var t,n=[];return e(Array.prototype.slice.call(this.get(0).elements)).each(function(){t=e(this);var i=t.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:t.attr("name"),value:t.val()})}),n},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},e.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(e,t){function n(e){return i(e.replace(/([a-z])([A-Z])/,"$1-$2"))}function i(e){return e.toLowerCase()}function r(e){return o?o+e:i(e)}var o,s,a,l,c,u,d,f,p="",h={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},m=window.document,g=m.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};e.each(h,function(e,n){return g.style[e+"TransitionProperty"]!==t?(p="-"+i(e)+"-",o=n,!1):void 0}),s=p+"transform",y[a=p+"transition-property"]=y[l=p+"transition-duration"]=y[c=p+"transition-timing-function"]=y[u=p+"animation-name"]=y[d=p+"animation-duration"]=y[f=p+"animation-timing-function"]="",e.fx={off:o===t&&g.style.transitionProperty===t,speeds:{_default:400,fast:200,slow:600},cssPrefix:p,transitionEnd:r("TransitionEnd"),animationEnd:r("AnimationEnd")},e.fn.animate=function(t,n,i,r){return e.isPlainObject(n)&&(i=n.easing,r=n.complete,n=n.duration),n&&(n=("number"==typeof n?n:e.fx.speeds[n]||e.fx.speeds._default)/1e3),this.anim(t,n,i,r)},e.fn.anim=function(i,r,o,p){var h,m,g,b={},x="",w=this,_=e.fx.transitionEnd;if(r===t&&(r=.4),e.fx.off&&(r=0),"string"==typeof i)b[u]=i,b[d]=r+"s",b[f]=o||"linear",_=e.fx.animationEnd;else{m=[];for(h in i)v.test(h)?x+=h+"("+i[h]+") ":(b[h]=i[h],m.push(n(h)));x&&(b[s]=x,m.push(s)),r>0&&"object"==typeof i&&(b[a]=m.join(", "),b[l]=r+"s",b[c]=o||"linear")}return g=function(t){if("undefined"!=typeof t){if(t.target!==t.currentTarget)return;e(t.target).unbind(_,g)}e(this).css(y),p&&p.call(this)},r>0&&this.bind(_,g),this.size()&&this.get(0).clientLeft,this.css(b),0>=r&&setTimeout(function(){w.each(function(){g.call(this)})},0),this},g=null}(Zepto),function(e,t){function n(n,i,r,o,s){"function"!=typeof i||s||(s=i,i=t);var a={opacity:r};return o&&(a.scale=o,n.css(e.fx.cssPrefix+"transform-origin","0 0")),n.animate(a,i,null,s)}function i(t,i,r,o){return n(t,i,0,r,function(){s.call(e(this)),o&&o.call(this)})}var r=window.document,o=(r.documentElement,e.fn.show),s=e.fn.hide,a=e.fn.toggle;e.fn.show=function(e,i){return o.call(this),e===t?e=0:this.css("opacity",0),n(this,e,1,"1,1",i)},e.fn.hide=function(e,n){return e===t?s.call(this):i(this,e,"0,0",n)},e.fn.toggle=function(n,i){return n===t||"boolean"==typeof n?a.call(this,n):this.each(function(){var t=e(this);t["none"==t.css("display")?"show":"hide"](n,i)})},e.fn.fadeTo=function(e,t,i){return n(this,e,t,null,i)},e.fn.fadeIn=function(e,t){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,o.call(this).fadeTo(e,n,t)},e.fn.fadeOut=function(e,t){return i(this,e,null,t)},e.fn.fadeToggle=function(t,n){return this.each(function(){var i=e(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](t,n)})}}(Zepto),function(e){var t,n=[];e.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(n.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",t&&clearTimeout(t),t=setTimeout(function(){n=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(e){function t(t,i){var l=t[a],c=l&&r[l];if(void 0===i)return c||n(t);if(c){if(i in c)return c[i];var u=s(i);if(u in c)return c[u]}return o.call(e(t),i)}function n(t,n,o){var l=t[a]||(t[a]=++e.uuid),c=r[l]||(r[l]=i(t));return void 0!==n&&(c[s(n)]=o),c}function i(t){var n={};return e.each(t.attributes,function(t,i){0==i.name.indexOf("data-")&&(n[s(i.name.replace("data-",""))]=e.zepto.deserializeValue(i.value))}),n}var r={},o=e.fn.data,s=e.camelCase,a=e.expando="Zepto"+ +new Date;e.fn.data=function(i,r){return void 0===r?e.isPlainObject(i)?this.each(function(t,r){e.each(i,function(e,t){n(r,e,t)})}):0==this.length?void 0:t(this[0],i):this.each(function(){n(this,i,r)})},e.fn.removeData=function(t){return"string"==typeof t&&(t=t.split(/\s+/)),this.each(function(){var n=this[a],i=n&&r[n];i&&e.each(t,function(){delete i[s(this)]})})}}(Zepto),function(e){function t(t){return t=e(t),!(!t.width()&&!t.height())&&"none"!==t.css("display")}function n(e,t){e=e.replace(/=#\]/g,'="#"]');var n,i,r=a.exec(e);if(r&&r[2]in s&&(n=s[r[2]],i=r[3],e=r[1],i)){var o=Number(i);i=isNaN(o)?i.replace(/^["']|["']$/g,""):o}return t(e,n,i)}var i=e.zepto,r=i.qsa,o=i.matches,s=e.expr[":"]={visible:function(){return t(this)?this:void 0},hidden:function(){return t(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(e){return 0===e?this:void 0},last:function(e,t){return e===t.length-1?this:void 0},eq:function(e,t,n){return e===n?this:void 0},contains:function(t,n,i){return e(this).text().indexOf(i)>-1?this:void 0},has:function(e,t,n){return i.qsa(this,n).length?this:void 0}},a=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),l=/^\s*>/,c="Zepto"+ +new Date;i.qsa=function(t,o){return n(o,function(n,s,a){try{var u;!n&&s?n="*":l.test(n)&&(u=e(t).addClass(c),n="."+c+" "+n);var d=r(t,n)}catch(f){throw console.error("error performing selector: %o",o),f}finally{u&&u.removeClass(c)}return s?i.uniq(e.map(d,function(e,t){return s.call(e,t,d,a)})):d})},i.matches=function(e,t){return n(t,function(t,n,i){return!(t&&!o(e,t)||n&&n.call(e,null,i)!==e)})}}(Zepto),function(e){e.fn.end=function(){return this.prevObject||e()},e.fn.andSelf=function(){return this.add(this.prevObject||e())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(t){var n=e.fn[t];e.fn[t]=function(){var e=n.apply(this,arguments);return e.prevObject=this,e}})}(Zepto),function(e){function t(e){return"tagName"in e?e:e.parentNode}function n(e,t,n,i){var r=Math.abs(e-t),o=Math.abs(n-i);return r>=o?e-t>0?"Left":"Right":n-i>0?"Up":"Down"}function i(){c=null,u.last&&(u.el.trigger("longTap"),u={})}function r(){c&&clearTimeout(c),c=null}function o(){s&&clearTimeout(s),a&&clearTimeout(a),l&&clearTimeout(l),c&&clearTimeout(c),s=a=l=c=null,u={}}var s,a,l,c,u={},d=750;e(document).ready(function(){var f,p;e(document.body).bind("touchstart",function(n){f=Date.now(),p=f-(u.last||f),u.el=e(t(n.touches[0].target)),s&&clearTimeout(s),u.x1=n.touches[0].pageX,u.y1=n.touches[0].pageY,p>0&&250>=p&&(u.isDoubleTap=!0),u.last=f,c=setTimeout(i,d)}).bind("touchmove",function(e){r(),u.x2=e.touches[0].pageX,u.y2=e.touches[0].pageY,Math.abs(u.x1-u.x2)>10&&e.preventDefault()}).bind("touchend",function(){r(),u.x2&&Math.abs(u.x1-u.x2)>30||u.y2&&Math.abs(u.y1-u.y2)>30?l=setTimeout(function(){u.el.trigger("swipe"),u.el.trigger("swipe"+n(u.x1,u.x2,u.y1,u.y2)),u={}},0):"last"in u&&(a=setTimeout(function(){var t=e.Event("tap");t.cancelTouch=o,u.el.trigger(t),u.isDoubleTap?(u.el.trigger("doubleTap"),u={}):s=setTimeout(function(){s=null,u.el.trigger("singleTap"),u={}},250)},0))}).bind("touchcancel",o),e(window).bind("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.bind(t,e)}})}(Zepto),this.Zepto&&function(e){var t,n;return t=function(e,t,n,i,r){var o,s;return e?(s=e[n](),o={width:["left","right"],height:["top","bottom"]},o[n].forEach(function(t){return s+=parseInt(e.css("padding-"+t),10),i&&(s+=parseInt(e.css("border-"+t+"-width"),10)),r?s+=parseInt(e.css("margin-"+t),10):void 0}),s):null},["width","height"].forEach(function(n){var i,r,o,s,a;return i=n.replace(/./,function(e){return e[0].toUpperCase()}),(r=e.fn)[s="inner"+i]||(r[s]=function(e){return t(this,i,n,!1,e)}),(o=e.fn)[a="outer"+i]||(o[a]=function(e){return t(this,i,n,!0,e)})}),(n=e.fn).detach||(n.detach=function(e){var t,n;return n=this,null!=e&&(n=n.filter(e)),t=n.clone(!0),n.remove(),t})}(Zepto);