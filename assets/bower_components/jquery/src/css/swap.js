define(["../core"],function(e){return e.swap=function(e,t,n,o){var i,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];i=n.apply(e,o||[]);for(r in t)e.style[r]=s[r];return i},e.swap});