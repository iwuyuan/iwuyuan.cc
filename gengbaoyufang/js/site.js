/**
 * @return {test}
 */
	// Ajax.GetData({"email":"18720358338@163.com","pwd":"10272816"},function(data){
	// 	if(data!=""){
	// 		alert("email:"+data["email"]+";pwd:"+data["password"]);
	// 	}
	// });
$(document).ready(function() {
	$(".loading_float").fadeOut("fast");
	$("section,footer").animate({opacity:1},"slow");
	$("body").css({
	   "overflow-x":"auto",
	   "overflow-y":"auto"
	 });
	/* PC鼠标悬停显示信息 */
	if (!SiteFunc.IsMobile()) {
		$(".pic1_2").hover(function(){
			if($(this).find(".pic2_text").is(":hidden")){
				$(this).find(".pic2_text,.pic_view").fadeIn("slow");
			}
		},function(){
			if($(this).find(".pic2_text").is(":visible")){
				$(this).find(".pic2_text,.pic_view").fadeOut("fast");
			}
		});
	}
	$(".jade_pic").off("click").on("click",function(){
		window.location.href="detail.html";
	});
	// 显示隐藏回到顶部
	if ($("body").scrollTop()>100) {
		$(".back_top").fadeIn("slow");
	}else{
		$(".back_top").fadeOut("fast");
	}
	window.onscroll=function(){
		if ($("body").scrollTop()>100) {
			$(".back_top").fadeIn("slow");
		}else{
			$(".back_top").fadeOut("fast");
		}
	}
	// 显示隐藏微信二维码
	$(".back_top").children("img").hover(function() {
		if ($(".back_top div").is(":hidden")) {
			$(".back_top div").fadeIn("slow");
		}
	}, function() {
		if ($(".back_top div").is(":visible")) {
			$(".back_top div").fadeOut("slow");
		}
	});
	$("[type='submit']").off("click").on("click",function(){
		layer.alert("功能暂未开放...");
		return false;
	});
});
