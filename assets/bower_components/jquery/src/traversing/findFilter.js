define(["../core","../var/indexOf","./var/rneedsContext","../selector"],function(e,t,n){function r(n,r,a){if(e.isFunction(r))return e.grep(n,function(e,t){return!!r.call(e,t,e)!==a});if(r.nodeType)return e.grep(n,function(e){return e===r!==a});if("string"==typeof r){if(i.test(r))return e.filter(r,n,a);r=e.filter(r,n)}return e.grep(n,function(e){return t.call(r,e)>=0!==a})}var i=/^.[^:#\[\.,]*$/;e.filter=function(t,n,r){var i=n[0];return r&&(t=":not("+t+")"),1===n.length&&1===i.nodeType?e.find.matchesSelector(i,t)?[i]:[]:e.find.matches(t,e.grep(n,function(e){return 1===e.nodeType}))},e.fn.extend({find:function(t){var n,r=this.length,i=[],a=this;if("string"!=typeof t)return this.pushStack(e(t).filter(function(){for(n=0;r>n;n++)if(e.contains(a[n],this))return!0}));for(n=0;r>n;n++)e.find(t,a[n],i);return i=this.pushStack(r>1?e.unique(i):i),i.selector=this.selector?this.selector+" "+t:t,i},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(t){return!!r(this,"string"==typeof t&&n.test(t)?e(t):t||[],!1).length}})});