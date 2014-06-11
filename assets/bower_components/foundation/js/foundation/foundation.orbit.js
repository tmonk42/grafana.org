!function(t,e,n,i){"use strict";var r=function(){},o=function(r,o){if(r.hasClass(o.slides_container_class))return this;var c,u,d,f,h,p,m=this,g=r,v=0,y=!1;m.slides=function(){return g.children(o.slide_selector)},m.slides().first().addClass(o.active_slide_class),m.update_slide_number=function(e){o.slide_number&&(u.find("span:first").text(parseInt(e)+1),u.find("span:last").text(m.slides().length)),o.bullets&&(d.children().removeClass(o.bullets_active_class),t(d.children().get(e)).addClass(o.bullets_active_class))},m.update_active_link=function(e){var n=t('a[data-orbit-link="'+m.slides().eq(e).attr("data-orbit-slide")+'"]');n.siblings().removeClass(o.bullets_active_class),n.addClass(o.bullets_active_class)},m.build_markup=function(){g.wrap('<div class="'+o.container_class+'"></div>'),c=g.parent(),g.addClass(o.slides_container_class),o.navigation_arrows&&(c.append(t('<a href="#"><span></span></a>').addClass(o.prev_class)),c.append(t('<a href="#"><span></span></a>').addClass(o.next_class))),o.timer&&(f=t("<div>").addClass(o.timer_container_class),f.append("<span>"),f.append(t("<div>").addClass(o.timer_progress_class)),f.addClass(o.timer_paused_class),c.append(f)),o.slide_number&&(u=t("<div>").addClass(o.slide_number_class),u.append("<span></span> "+o.slide_number_text+" <span></span>"),c.append(u)),o.bullets&&(d=t("<ol>").addClass(o.bullets_container_class),c.append(d),d.wrap('<div class="orbit-bullets-container"></div>'),m.slides().each(function(e){var n=t("<li>").attr("data-orbit-slide",e);d.append(n)})),o.stack_on_small&&c.addClass(o.stack_on_small_class)},m._goto=function(e,n){if(e===v)return!1;"object"==typeof p&&p.restart();var i=m.slides(),r="next";if(y=!0,v>e&&(r="prev"),e>=i.length){if(!o.circular)return!1;e=0}else if(0>e){if(!o.circular)return!1;e=i.length-1}var s=t(i.get(v)),a=t(i.get(e));s.css("zIndex",2),s.removeClass(o.active_slide_class),a.css("zIndex",4).addClass(o.active_slide_class),g.trigger("before-slide-change.fndtn.orbit"),o.before_slide_change(),m.update_active_link(e);var l=function(){var t=function(){v=e,y=!1,n===!0&&(p=m.create_timer(),p.start()),m.update_slide_number(v),g.trigger("after-slide-change.fndtn.orbit",[{slide_number:v,total_slides:i.length}]),o.after_slide_change(v,i.length)};g.height()!=a.height()&&o.variable_height?g.animate({height:a.height()},250,"linear",t):t()};if(1===i.length)return l(),!1;var c=function(){"next"===r&&h.next(s,a,l),"prev"===r&&h.prev(s,a,l)};a.height()>g.height()&&o.variable_height?g.animate({height:a.height()},250,"linear",c):c()},m.next=function(t){t.stopImmediatePropagation(),t.preventDefault(),m._goto(v+1)},m.prev=function(t){t.stopImmediatePropagation(),t.preventDefault(),m._goto(v-1)},m.link_custom=function(e){e.preventDefault();var n=t(this).attr("data-orbit-link");if("string"==typeof n&&""!=(n=t.trim(n))){var i=c.find("[data-orbit-slide="+n+"]");-1!=i.index()&&m._goto(i.index())}},m.link_bullet=function(){var e=t(this).attr("data-orbit-slide");if("string"==typeof e&&""!=(e=t.trim(e)))if(isNaN(parseInt(e))){var n=c.find("[data-orbit-slide="+e+"]");-1!=n.index()&&m._goto(n.index()+1)}else m._goto(parseInt(e))},m.timer_callback=function(){m._goto(v+1,!0)},m.compute_dimensions=function(){var e=t(m.slides().get(v)),n=e.height();o.variable_height||m.slides().each(function(){t(this).height()>n&&(n=t(this).height())}),g.height(n)},m.create_timer=function(){var t=new s(c.find("."+o.timer_container_class),o,m.timer_callback);return t},m.stop_timer=function(){"object"==typeof p&&p.stop()},m.toggle_timer=function(){var t=c.find("."+o.timer_container_class);t.hasClass(o.timer_paused_class)?("undefined"==typeof p&&(p=m.create_timer()),p.start()):"object"==typeof p&&p.stop()},m.init=function(){m.build_markup(),o.timer&&(p=m.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),p.start)),h=new l(o,g),"slide"===o.animation&&(h=new a(o,g)),c.on("click","."+o.next_class,m.next),c.on("click","."+o.prev_class,m.prev),c.on("click","[data-orbit-slide]",m.link_bullet),c.on("click",m.toggle_timer),o.swipe&&c.on("touchstart.fndtn.orbit",function(t){t.touches||(t=t.originalEvent);var e={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:i};c.data("swipe-transition",e),t.stopPropagation()}).on("touchmove.fndtn.orbit",function(t){if(t.touches||(t=t.originalEvent),!(t.touches.length>1||t.scale&&1!==t.scale)){var e=c.data("swipe-transition");if("undefined"==typeof e&&(e={}),e.delta_x=t.touches[0].pageX-e.start_page_x,"undefined"==typeof e.is_scrolling&&(e.is_scrolling=!!(e.is_scrolling||Math.abs(e.delta_x)<Math.abs(t.touches[0].pageY-e.start_page_y))),!e.is_scrolling&&!e.active){t.preventDefault();var n=e.delta_x<0?v+1:v-1;e.active=!0,m._goto(n)}}}).on("touchend.fndtn.orbit",function(t){c.data("swipe-transition",{}),t.stopPropagation()}),c.on("mouseenter.fndtn.orbit",function(){o.timer&&o.pause_on_hover&&m.stop_timer()}).on("mouseleave.fndtn.orbit",function(){o.timer&&o.resume_on_mouseout&&p.start()}),t(n).on("click","[data-orbit-link]",m.link_custom),t(e).on("resize",m.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),m.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),function(){c.prev(".preloader").css("display","none"),m.update_slide_number(0),m.update_active_link(0),g.trigger("ready.fndtn.orbit")})},m.init()},s=function(t,e,n){var i,r,o=this,s=e.timer_speed,a=t.find("."+e.timer_progress_class),l=-1;this.update_progress=function(t){var e=a.clone();e.attr("style",""),e.css("width",t+"%"),a.replaceWith(e),a=e},this.restart=function(){clearTimeout(r),t.addClass(e.timer_paused_class),l=-1,o.update_progress(0)},this.start=function(){return t.hasClass(e.timer_paused_class)?(l=-1===l?s:l,t.removeClass(e.timer_paused_class),i=(new Date).getTime(),a.animate({width:"100%"},l,"linear"),r=setTimeout(function(){o.restart(),n()},l),t.trigger("timer-started.fndtn.orbit"),void 0):!0},this.stop=function(){if(t.hasClass(e.timer_paused_class))return!0;clearTimeout(r),t.addClass(e.timer_paused_class);var n=(new Date).getTime();l-=n-i;var a=100-100*(l/s);o.update_progress(a),t.trigger("timer-stopped.fndtn.orbit")}},a=function(e){var n=e.animation_speed,i=1===t("html[dir=rtl]").length,r=i?"marginRight":"marginLeft",o={};o[r]="0%",this.next=function(t,e,i){t.animate({marginLeft:"-100%"},n),e.animate(o,n,function(){t.css(r,"100%"),i()})},this.prev=function(t,e,i){t.animate({marginLeft:"100%"},n),e.css(r,"-100%"),e.animate(o,n,function(){t.css(r,"100%"),i()})}},l=function(e){var n=e.animation_speed;1===t("html[dir=rtl]").length,this.next=function(t,e,i){e.css({margin:"0%",opacity:"0.01"}),e.animate({opacity:"1"},n,"linear",function(){t.css("margin","100%"),i()})},this.prev=function(t,e,i){e.css({margin:"0%",opacity:"0.01"}),e.animate({opacity:"1"},n,"linear",function(){t.css("margin","100%"),i()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.1.1",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:r,after_slide_change:r},init:function(t,e,n){this.bindings(e,n)},events:function(t){var e=new o(this.S(t),this.S(t).data("orbit-init"));this.S(t).data(self.name+"-instance",e)},reflow:function(){var t=this;if(t.S(t.scope).is("[data-orbit]")){var e=t.S(t.scope),n=e.data(t.name+"-instance");n.compute_dimensions()}else t.S("[data-orbit]",t.scope).each(function(e,n){var i=t.S(n);t.data_options(i);var r=i.data(t.name+"-instance");r.compute_dimensions()})}}}(jQuery,this,this.document);