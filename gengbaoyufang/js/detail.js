
$(window).load(function(){
	// alert('msg');
	$(".Js_love img:first").off("click").on("click",function(){
		$(this).hide();
		$(".Js_love img:last").fadeIn("slow");
	});
	// 分享到QQ空间
	$(".Js_QQShare").off("click").on("click",function(){

	});
	// 分享到微信
	$(".Js_WechatShare").off("click").on("click",function(){
		// 微信显示浮层
		if(SiteFunc.IsWechat()){
			$(".wechat_float").fadeIn("slow");
		}
	});
	$(".wechat_float").off("click").on("click",function(){
		$(".wechat_float").fadeOut("slow");
	});
	// 分享到微博
	$(".Js_WeiboShare").off("click").on("click",function(){

	});
});