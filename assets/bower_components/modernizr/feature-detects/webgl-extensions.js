!function(){if(Modernizr.webgl){var e,t,n;try{e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl"),n=t.getSupportedExtensions()}catch(r){return}Modernizr.webgl=void 0===t?new Boolean(!1):new Boolean(!0);for(var o=-1,i=n.length;++o<i;)Modernizr.webgl[n[o]]=!0;window.TEST&&TEST.audvid&&TEST.audvid.push("webgl"),e=void 0}}();