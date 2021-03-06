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

 	// 分享到朋友圈
 	$(".sharepic_wechat").off("click").on("click",function(){
 		if(SiteFunc.IsWechat()){
 			$(".wechat_float").fadeIn("slow");
 		}
 	});
 	$(".wechat_float").off("click").on("click",function(){
 		$(".wechat_float").fadeOut("slow");
 	});

 	// 分享到微博
 	$(".sharepic_weibo").off("click").on("click",function(){
 		var _title=encodeURIComponent(document.title);
 		var _url=encodeURIComponent(location.href);
 		var _img=encodeURIComponent("http://www.iwuyuan.cc/"+$(".iwuyuan_bigpic").attr("src").replace("../../",""));
 		window.open("http://service.weibo.com/share/share.php?appkey=3706659912&title="+_title+"&url="+_url+"&pic="+_img+"&searchPic=false&style=simple");
 	});

	// 当前为IE10以下时提示并尝试关闭页面
	if(SiteFunc.Broswer().type=="IE"&&SiteFunc.Broswer().version<10){
		alert("为了您更好的浏览网页信息，请使用非IE浏览器访问本站!");
		window.close();//关闭当前页
	}

});