(SiteFunc = new function(){

	this.IsMobile=function(){
		return navigator.userAgent.match(/Android|iPhone|iPad|iPod/i) ? true : false;
	}

	this.IsWechat=function(){
		return navigator.userAgent.match(/MicroMessenger/i) ? true : false;
	}

});