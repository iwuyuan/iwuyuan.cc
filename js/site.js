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
	var _pageHeaderFirst = innerHeight - $(".wuyuan_beauty .page-header").height()-60 +"px";
	$(".first_full").css("height",_pageHeaderFirst);
	//顶部区域显示的高度
	$(".first_full p").animate({height:_pageHeaderFirst}, "slow");
	// 初始化图片查看器插件
	// $(".wuyuan_spring").viewer({url: 'data-src'});
	// **********************************
	
	// 显示隐藏回到顶部
	CheckToTop();
	window.onscroll=function(){
		CheckToTop();
	}
	$(".iwuyuan_pic img,.iwuyuan_article a,.page_container a").off("click").on("click",function(){
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
});