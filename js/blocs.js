function setUpSpecialNavs(){$(".navbar-toggle").click(function(t){}),$("body").on("mousedown touchstart",".content-tint, .close-special-menu",function(t){}).on("click",".blocsapp-special-menu a",function(t){}
function extraNavFuncs(){$(".site-navigation a").click(function(t){$(t.target).closest(".dropdown-toggle").length||$(".navbar-collapse").collapse("hide")}),$("a.dropdown-toggle").click(function(t){}
function setFillScreenBlocHeight(){$(".bloc-fill-screen").each(function(t){}
function animateWhenVisible(){hideAll(),inViewCheck(),$(window).scroll(function(){}
function setUpDropdownSubs(){$("ul.dropdown-menu [data-toggle=dropdown]").on("click",function(t){}
function hideAll(){$(".animated").each(function(t){}
function inViewCheck(){$($(".hideMe").get().reverse()).each(function(t){}
function setUpVisibilityToggle(){$(document).on("click","[data-toggle-visibility]",function(t){}
function setUpLightBox(){window.targetLightbox,$(document).on("click","[data-lightbox]",function(t){}).on("hidden.bs.modal","#lightbox-modal",function(){}),$(document).on("click",".next-lightbox, .prev-lightbox",function(t){}
function addSwipeSupport(){$(".carousel-inner").length&&$(".carousel-inner").swipe({swipeLeft:function(t,e,i,a,o){swipeRight:function(){threshold:0})}
function addKeyBoardSupport(){$(window).keydown(function(t){})}
$(document).ready(function(){$("#scroll-hero").click(function(t){}),extraNavFuncs(),setUpSpecialNavs(),setUpDropdownSubs(),setUpLightBox(),setUpVisibilityToggle(),addSwipeSupport(),addKeyBoardSupport(),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&$("#page-loading-blocs-notifaction").remove()}),$(window).load(function(){setFillScreenBlocHeight(),animateWhenVisible(),$("#page-loading-blocs-notifaction").remove()}).resize(function(){}),$(function(){$('[data-toggle="tooltip"]').tooltip()});