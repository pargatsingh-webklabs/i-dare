$(function(){"use strict";function e(e){var a,i;return $.each(s,function(e){$("body").removeClass(s[e])}),$("body").addClass(e),a="skin",i=e,"undefined"!=typeof Storage?localStorage.setItem(a,i):window.alert("Please use a modern browser to properly view this template!"),!1}$(function(){$(".preloader").fadeOut()}),jQuery(document).on("click",".mega-dropdown",function(e){e.stopPropagation()});var a=function(){(window.innerWidth>0?window.innerWidth:this.screen.width)<1170?($("body").addClass("mini-sidebar"),$(".navbar-brand span").hide(),$(".sidebartoggler i").addClass("ti-menu")):($("body").removeClass("mini-sidebar"),$(".navbar-brand span").show());var e=(window.innerHeight>0?window.innerHeight:this.screen.height)-1;(e-=55)<1&&(e=1),e>55&&$(".page-wrapper").css("min-height",e+"px")};$(window).ready(a),$(window).on("resize",a),$(".sidebartoggler").on("click",function(){$("body").hasClass("mini-sidebar")?($("body").trigger("resize"),$("body").removeClass("mini-sidebar"),$(".navbar-brand span").show()):($("body").trigger("resize"),$("body").addClass("mini-sidebar"),$(".navbar-brand span").hide())}),$(".nav-toggler").click(function(){$("body").toggleClass("show-sidebar"),$(".nav-toggler i").toggleClass("ti-menu"),$(".nav-toggler i").addClass("ti-close")}),$(".search-box a, .search-box .app-search .srh-btn").on("click",function(){$(".app-search").toggle(200)}),$(".right-side-toggle").click(function(){$(".right-sidebar").slideDown(50),$(".right-sidebar").toggleClass("shw-rside")}),$(".floating-labels .form-control").on("focus blur",function(e){$(this).parents(".form-group").toggleClass("focused","focus"===e.type||this.value.length>0)}).trigger("blur"),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(function(){$('[data-toggle="popover"]').popover()}),$(".scroll-sidebar, .right-side-panel, .message-center, .right-sidebar").perfectScrollbar(),$("#chat, #msg, #comment, #todo").perfectScrollbar(),$("body").trigger("resize"),$(".list-task li label").click(function(){$(this).toggleClass("task-done")}),$('a[data-action="collapse"]').on("click",function(e){e.preventDefault(),$(this).closest(".card").find('[data-action="collapse"] i').toggleClass("ti-minus ti-plus"),$(this).closest(".card").children(".card-body").collapse("toggle")}),$('a[data-action="expand"]').on("click",function(e){e.preventDefault(),$(this).closest(".card").find('[data-action="expand"] i').toggleClass("mdi-arrow-expand mdi-arrow-compress"),$(this).closest(".card").toggleClass("card-fullscreen")}),$('a[data-action="close"]').on("click",function(){$(this).closest(".card").removeClass().slideUp("fast")});var i,s=["skin-default","skin-green","skin-red","skin-blue","skin-purple","skin-megna","skin-default-dark","skin-green-dark","skin-red-dark","skin-blue-dark","skin-purple-dark","skin-megna-dark"];(i=function(e){if("undefined"!=typeof Storage)return localStorage.getItem(e);window.alert("Please use a modern browser to properly view this template!")}("skin"))&&$.inArray(i,s)&&e(i),$("[data-skin]").on("click",function(a){$(this).hasClass("knob")||(a.preventDefault(),e($(this).data("skin")))}),$("#themecolors").on("click","a",function(){$("#themecolors li a").removeClass("working"),$(this).addClass("working")})});