$(function(){for(var a=window.location,s=$("ul#sidebarnav a").filter(function(){return this.href==a}).addClass("active").parent().addClass("active");;){if(!s.is("li"))break;s=s.parent().addClass("in").parent().addClass("active").children("a").addClass("active")}$("#sidebarnav a").on("click",function(){$(this).hasClass("active")?$(this).hasClass("active")&&($(this).removeClass("active"),$(this).parents("ul:first").removeClass("active"),$(this).next("ul").removeClass("in")):($("ul",$(this).parents("ul:first")).removeClass("in"),$("a",$(this).parents("ul:first")).removeClass("active"),$(this).next("ul").addClass("in"),$(this).addClass("active"))}),$("#sidebarnav >li >a.has-arrow").on("click",function(a){a.preventDefault()})});