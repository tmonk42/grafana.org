define(["../core","./var/nonce","./var/rquery","../ajax"],function(e,t,n){var r=[],o=/(=)\?(?=&|$)|\?\?/;e.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var n=r.pop()||e.expando+"_"+t++;return this[n]=!0,n}}),e.ajaxPrefilter("json jsonp",function(t,i,a){var s,u,l,c=t.jsonp!==!1&&(o.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&o.test(t.data)&&"data");return c||"jsonp"===t.dataTypes[0]?(s=t.jsonpCallback=e.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,c?t[c]=t[c].replace(o,"$1"+s):t.jsonp!==!1&&(t.url+=(n.test(t.url)?"&":"?")+t.jsonp+"="+s),t.converters["script json"]=function(){return l||e.error(s+" was not called"),l[0]},t.dataTypes[0]="json",u=window[s],window[s]=function(){l=arguments},a.always(function(){window[s]=u,t[s]&&(t.jsonpCallback=i.jsonpCallback,r.push(s)),l&&e.isFunction(u)&&u(l[0]),l=u=void 0}),"script"):void 0})});