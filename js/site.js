/********************************************************************
*	CreateTime	: 2016/11/05										*
*	Description : iwuyuan.cc 公共脚本文件	 							*
* 	Author		: Paul												*
*   Web			: 耕宝玉坊											*
*   Version 	: 1.0.0												*
*   ModifyTime	: 2016/11/27										*
*********************************************************************/
$(document).ready(function(){
	// ****************** 首页 ********************
	// 第一项组图标头高度+导航栏高度
	// var _pageHeaderFirst = innerHeight - $(".wuyuan_beauty .page-header").height()-60 +"px";
	// $(".first_full").css("height",_pageHeaderFirst);
	// //顶部区域显示的高度
	// $(".first_full p").animate({height:_pageHeaderFirst}, "slow");
	// 初始化图片查看器插件
	// $(".wuyuan_spring").viewer({url: 'data-src'});
	// **********************************
	// 手机版菜单栏展开时点击导航栏以外区域（不包括footer）收起菜单栏
	$("section").off("click").on("click",function(){
		if($(".navbar-collapse").hasClass("in")){
			$(".navbar-toggle").trigger("click");
		}
	});
	// 显示隐藏回到顶部
	CheckToTop();
	window.onscroll=function(){
		CheckToTop();
	}
	// 缓慢滑动回到顶部
	$(".back_top").off("click").on("click",function(){
		$('html,body').animate({
	        scrollTop:"0"
	    }, 1000);
	});
	// 提示信息
	$(".iwuyuan_pic img,.iwuyuan_article a,.page_container a,.btn").off("click").on("click",function(){
		layer.msg('程序员宝宝还没写好<br/>先看看别的吧', {
	    	time: 4000, //4s后自动关闭
	    	btn: ['加油吧!!!', '哈哈哈...', '小菜鸟快点:)']
	    });
	});
	// 显示隐藏回到顶部图标
	function CheckToTop(){
		if ($("body").scrollTop()>100) {
			$(".back_top").fadeIn("slow");
		}else{
			$(".back_top").fadeOut("fast");
		}
	}

 	$(".iwuyuan_piclist a").off("click").on("click",function(){
        $(".iwuyuan_bigpic").attr("src",$(this).find("img").attr("src"));
    });

 	// 判断当前浏览器
    function getExplorerInfo() {
		var explorer = window.navigator.userAgent.toLowerCase() ;
		//ie 
		if (explorer.indexOf("msie") >= 0) {
			var ver=explorer.match(/msie ([\d.]+)/)[1];
			return {type:"IE",version:ver};
		}
		//firefox 
		else if (explorer.indexOf("firefox") >= 0) {
			var ver=explorer.match(/firefox\/([\d.]+)/)[1];
			return {type:"Firefox",version:ver};
		}
		//Chrome
		else if(explorer.indexOf("chrome") >= 0){
			var ver=explorer.match(/chrome\/([\d.]+)/)[1];
			return {type:"Chrome",version:ver};
		}
		//Opera
		else if(explorer.indexOf("opera") >= 0){
			var ver=explorer.match(/opera.([\d.]+)/)[1];
			return {type:"Opera",version:ver};
		}
		//Safari
		else if(explorer.indexOf("Safari") >= 0){
			var ver=explorer.match(/version\/([\d.]+)/)[1];
			return {type:"Safari",version:ver};
		}
	}
	// 当前为IE10以下时提示并尝试关闭页面
	if(getExplorerInfo().type=="IE"&&getExplorerInfo().version<10){
		alert("为了您更好的浏览网页信息，请使用非IE浏览器访问本站!");
		window.close();//关闭当前页
	}
});