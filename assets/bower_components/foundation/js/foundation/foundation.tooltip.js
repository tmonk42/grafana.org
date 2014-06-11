!function(t,e,n){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.1.1",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,tip_template:function(t,e){return'<span data-selector="'+t+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'">'+e+'<span class="nub"></span></span>'}},cache:{},init:function(t,e,n){Foundation.inherit(this,"random_str"),this.bindings(e,n)},events:function(){var e=this,i=e.S;Modernizr.touch?i(n).off(".tooltip").on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip","["+this.attr_name()+"]:not(a)",function(n){var r=t.extend({},e.settings,e.data_options(i(this)));r.disable_for_touch||(n.preventDefault(),i(r.tooltip_class).hide(),e.showOrCreateTip(i(this)))}).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip",this.settings.tooltip_class,function(t){t.preventDefault(),i(this).fadeOut(150)}):i(n).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip","["+this.attr_name()+"]",function(t){var n=i(this);/enter|over/i.test(t.type)?this.timer=setTimeout(function(){e.showOrCreateTip(n)}.bind(this),e.settings.hover_delay):("mouseout"===t.type||"mouseleave"===t.type)&&(clearTimeout(this.timer),e.hide(n))})},showOrCreateTip:function(t){var e=this.getTip(t);return e&&e.length>0?this.show(t):this.create(t)},getTip:function(t){var e=this.selector(t),n=null;return e&&(n=this.S('span[data-selector="'+e+'"]'+this.settings.tooltip_class)),"object"==typeof n?n:!1},selector:function(t){var e=t.attr("id"),n=t.attr(this.attr_name())||t.attr("data-selector");return(e&&e.length<1||!e)&&"string"!=typeof n&&(n="tooltip"+this.random_str(6),t.attr("data-selector",n)),e&&e.length>0?e:n},create:function(e){var n=t(this.settings.tip_template(this.selector(e),t("<div></div>").html(e.attr("title")).html())),i=this.inheritable_classes(e);n.addClass(i).appendTo(this.settings.append_to),Modernizr.touch&&n.append('<span class="tap-to-close">'+this.settings.touch_close_text+"</span>"),e.removeAttr("title").attr("title",""),this.show(e)},reposition:function(t,e,n){var i,r,o,s,a;if(e.css("visibility","hidden").show(),i=t.data("width"),r=e.children(".nub"),o=r.outerHeight(),s=r.outerHeight(),this.small()?e.css({width:"100%"}):e.css({width:i?i:"auto"}),a=function(t,e,n,i,r){return t.css({top:e?e:"auto",bottom:i?i:"auto",left:r?r:"auto",right:n?n:"auto"}).end()},a(e,t.offset().top+t.outerHeight()+10,"auto","auto",t.offset().left),this.small())a(e,t.offset().top+t.outerHeight()+10,"auto","auto",12.5,this.S(this.scope).width()),e.addClass("tip-override"),a(r,-o,"auto","auto",t.offset().left+10);else{var l=t.offset().left;Foundation.rtl&&(l=t.offset().left+t.outerWidth()-e.outerWidth()),a(e,t.offset().top+t.outerHeight()+10,"auto","auto",l),e.removeClass("tip-override"),r.removeAttr("style"),n&&n.indexOf("tip-top")>-1?a(e,t.offset().top-e.outerHeight()-10,"auto","auto",l).removeClass("tip-override"):n&&n.indexOf("tip-left")>-1?a(e,t.offset().top+t.outerHeight()/2-e.outerHeight()/2,"auto","auto",t.offset().left-e.outerWidth()-o).removeClass("tip-override"):n&&n.indexOf("tip-right")>-1&&a(e,t.offset().top+t.outerHeight()/2-e.outerHeight()/2,"auto","auto",t.offset().left+t.outerWidth()+o).removeClass("tip-override")}e.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches},inheritable_classes:function(e){var n=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(this.settings.additional_inheritable_classes),i=e.attr("class"),r=i?t.map(i.split(" "),function(e){return-1!==t.inArray(e,n)?e:void 0}).join(" "):"";return t.trim(r)},show:function(t){var e=this.getTip(t);return this.reposition(t,e,t.attr("class")),e.fadeIn(150)},hide:function(t){var e=this.getTip(t);return e.fadeOut(150)},reload:function(){var e=t(this);return e.data("fndtn-tooltips")?e.foundationTooltips("destroy").foundationTooltips("init"):e.foundationTooltips("init")},off:function(){this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(e){t("["+this.attr_name()+"]").get(e).attr("title",t(this).text())}).remove()},reflow:function(){}}}(jQuery,this,this.document);