define(["./core"],function(e){var t,n=window.document.documentElement,r=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.oMatchesSelector||n.msMatchesSelector,o=function(n,r){if(n===r)return t=!0,0;var o=r.compareDocumentPosition&&n.compareDocumentPosition&&n.compareDocumentPosition(r);return o?1&o?n===document||e.contains(document,n)?-1:r===document||e.contains(document,r)?1:0:4&o?-1:1:n.compareDocumentPosition?-1:1};e.extend({find:function(t,n,r,o){var i,a,s=0;if(r=r||[],n=n||document,!t||"string"!=typeof t)return r;if(1!==(a=n.nodeType)&&9!==a)return[];if(o)for(;i=o[s++];)e.find.matchesSelector(i,t)&&r.push(i);else e.merge(r,n.querySelectorAll(t));return r},unique:function(e){var n,r=[],i=0,a=0;if(t=!1,e.sort(o),t){for(;n=e[i++];)n===e[i]&&(a=r.push(i));for(;a--;)e.splice(r[a],1)}return e},text:function(t){var n,r="",o=0,i=t.nodeType;if(i){if(1===i||9===i||11===i)return t.textContent;if(3===i||4===i)return t.nodeValue}else for(;n=t[o++];)r+=e.text(n);return r},contains:function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!n.contains(r))},isXMLDoc:function(e){return"HTML"!==(e.ownerDocument||e).documentElement.nodeName},expr:{attrHandle:{},match:{bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,needsContext:/^[\x20\t\r\n\f]*[>+~]/}}}),e.extend(e.find,{matches:function(t,n){return e.find(t,null,null,n)},matchesSelector:function(e,t){return r.call(e,t)},attr:function(e,t){return e.getAttribute(t)}})});