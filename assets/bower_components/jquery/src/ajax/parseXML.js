define(["../core"],function(e){return e.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{r=new DOMParser,n=r.parseFromString(t,"text/xml")}catch(o){n=void 0}return(!n||n.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+t),n},e.parseXML});