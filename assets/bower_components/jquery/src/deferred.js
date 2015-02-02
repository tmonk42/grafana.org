define(["./core","./var/slice","./callbacks"],function(e,t){return e.extend({Deferred:function(t){var n=[["resolve","done",e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory")]],i="pending",o={state:function(){return i},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var t=arguments;return e.Deferred(function(i){e.each(n,function(n,s){var u=e.isFunction(t[n])&&t[n];r[s[1]](function(){var t=u&&u.apply(this,arguments);t&&e.isFunction(t.promise)?t.promise().done(i.resolve).fail(i.reject).progress(i.notify):i[s[0]+"With"](this===o?i.promise():this,u?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?e.extend(t,o):o}},r={};return o.pipe=o.then,e.each(n,function(e,t){var s=t[2],u=t[3];o[t[1]]=s.add,u&&s.add(function(){i=u},n[1^e][2].disable,n[2][2].lock),r[t[0]]=function(){return r[t[0]+"With"](this===r?o:this,arguments),this},r[t[0]+"With"]=s.fireWith}),o.promise(r),t&&t.call(r,r),r},when:function(n){var i,o,r,s=0,u=t.call(arguments),f=u.length,c=1!==f||n&&e.isFunction(n.promise)?f:0,l=1===c?n:e.Deferred(),a=function(e,n,o){return function(r){n[e]=this,o[e]=arguments.length>1?t.call(arguments):r,o===i?l.notifyWith(n,o):--c||l.resolveWith(n,o)}};if(f>1)for(i=new Array(f),o=new Array(f),r=new Array(f);f>s;s++)u[s]&&e.isFunction(u[s].promise)?u[s].promise().done(a(s,r,u)).fail(l.reject).progress(a(s,o,i)):--c;return c||l.resolveWith(r,u),l.promise()}}),e});