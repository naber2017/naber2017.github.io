var header_bg_height,service_bg_height,header_height=$("#section1").outerHeight(!0),img_hov=$(".img_hover").outerHeight(!0),resize=function(e){$("#section1").outerHeight(!0);header_bg_height=$("#header-bg").outerHeight(!0),service_bg_height=$("#service-bg").outerHeight(!0),img_hov=$(".img_hover").outerHeight(!0),document.getElementsByClassName("img_hover")[0].style.height=header_bg_height+"px",document.getElementById("section1").style.height=header_bg_height+"px",document.getElementById("services").style.height=service_bg_height+"px"};!function(){var t;window.onresize=function(e){t&&clearTimeout(t),t=resize(e)}}(),window.onload=function(e){header_bg_height=$("#header-bg").outerHeight(!0),service_bg_height=$("#service-bg").outerHeight(!0),header_bg_height!=header_height&&(document.getElementById("section1").style.height=header_bg_height+"px",document.getElementsByClassName("img_hover")[0].style.height=header_bg_height+"px",document.getElementById("services").style.height=service_bg_height+"px")},$(".header_list").on("click","a",function(e){e.preventDefault();var t=$(this).attr("href"),h=$(t).offset().top;$("body,html").animate({scrollTop:h+-50+"px"},1200)});