(SiteFunc = new function(){

	this.IsMobile=function(){
		return navigator.userAgent.match(/Android|iPhone|iPad|iPod/i) ? true : false;
	}

	this.IsWechat=function(){
		return navigator.userAgent.match(/MicroMessenger/i) ? true : false;
	}

	this.Broswer=function(){
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
		else{
			return {type:"Unknow",version:"Unknow"};
		}
	}

	this.GetUrlParam=function(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg); //匹配目标参数
		if (r != null) {
			return unescape(r[2]);//返回参数值
		}else{
			return null;
		}
	}
});