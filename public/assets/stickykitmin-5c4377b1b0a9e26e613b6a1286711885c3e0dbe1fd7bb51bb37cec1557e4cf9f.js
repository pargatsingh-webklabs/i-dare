(function(){var t,i;t=window.jQuery,i=t(window),t.fn.stick_in_parent=function(o){var e,s,r,n,l,a,c,p,u,d,f,g;for(null==o&&(o={}),g=o.sticky_class,l=o.inner_scrolling,f=o.recalc_every,d=o.parent,p=o.offset_top,c=o.spacer,s=o.bottoming,null==p&&(p=0),null==d&&(d=void 0),null==l&&(l=!0),null==g&&(g="is_stuck"),e=t(document),null==s&&(s=!0),u=function(t){var i;return window.getComputedStyle?(t=window.getComputedStyle(t[0]),i=parseFloat(t.getPropertyValue("width"))+parseFloat(t.getPropertyValue("margin-left"))+parseFloat(t.getPropertyValue("margin-right")),"border-box"!==t.getPropertyValue("box-sizing")&&(i+=parseFloat(t.getPropertyValue("border-left-width"))+parseFloat(t.getPropertyValue("border-right-width"))+parseFloat(t.getPropertyValue("padding-left"))+parseFloat(t.getPropertyValue("padding-right"))),i):t.outerWidth(!0)},r=function(o,r,n,a,h,k,y,m){var b,v,w,_,x,P,V,F,C,z,I,A;if(!o.data("sticky_kit")){if(o.data("sticky_kit",!0),x=e.height(),V=o.parent(),null!=d&&(V=V.closest(d)),!V.length)throw"failed to find stick parent";if(b=w=!1,(I=null!=c?c&&o.closest(c):t("<div />"))&&I.css("position",o.css("position")),F=function(){var t,i,s;if(!m&&(x=e.height(),t=parseInt(V.css("border-top-width"),10),i=parseInt(V.css("padding-top"),10),r=parseInt(V.css("padding-bottom"),10),n=V.offset().top+t+i,a=V.height(),w&&(b=w=!1,null==c&&(o.insertAfter(I),I.detach()),o.css({position:"",top:"",width:"",bottom:""}).removeClass(g),s=!0),h=o.offset().top-(parseInt(o.css("margin-top"),10)||0)-p,k=o.outerHeight(!0),y=o.css("float"),I&&I.css({width:u(o),height:k,display:o.css("display"),"vertical-align":o.css("vertical-align"),"float":y}),s))return A()},F(),k!==a)return _=void 0,P=p,z=f,A=function(){var t,u,d,v;if(!m&&(d=!1,null!=z&&(--z,0>=z&&(z=f,F(),d=!0)),d||e.height()===x||F(),d=i.scrollTop(),null!=_&&(u=d-_),_=d,w?(s&&(v=d+k+P>a+n,b&&!v&&(b=!1,o.css({position:"fixed",bottom:"",top:P}).trigger("sticky_kit:unbottom"))),d<h&&(w=!1,P=p,null==c&&("left"!==y&&"right"!==y||o.insertAfter(I),I.detach()),t={position:"",width:"",top:""},o.css(t).removeClass(g).trigger("sticky_kit:unstick")),l&&(t=i.height(),k+p>t&&!b&&(P-=u,P=Math.max(t-k,P),P=Math.min(p,P),w&&o.css({top:P+"px"})))):d>h&&(w=!0,t={position:"fixed",top:P},t.width="border-box"===o.css("box-sizing")?o.outerWidth()+"px":o.width()+"px",o.css(t).addClass(g),null==c&&(o.after(I),"left"!==y&&"right"!==y||I.append(o)),o.trigger("sticky_kit:stick")),w&&s&&(null==v&&(v=d+k+P>a+n),!b&&v)))return b=!0,"static"===V.css("position")&&V.css({position:"relative"}),o.css({position:"absolute",bottom:r,top:"auto"}).trigger("sticky_kit:bottom")},C=function(){return F(),A()},v=function(){if(m=!0,i.off("touchmove",A),i.off("scroll",A),i.off("resize",C),t(document.body).off("sticky_kit:recalc",C),o.off("sticky_kit:detach",v),o.removeData("sticky_kit"),o.css({position:"",bottom:"",top:"",width:""}),V.position("position",""),w)return null==c&&("left"!==y&&"right"!==y||o.insertAfter(I),I.remove()),o.removeClass(g)},i.on("touchmove",A),i.on("scroll",A),i.on("resize",C),t(document.body).on("sticky_kit:recalc",C),o.on("sticky_kit:detach",v),setTimeout(A,0)}},n=0,a=this.length;n<a;n++)o=this[n],r(t(o));return this}}).call(this);