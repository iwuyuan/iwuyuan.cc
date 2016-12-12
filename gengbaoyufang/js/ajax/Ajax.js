/**
 * ajax获取数据
 * 2016/09/23
 */
(Ajax = new function(){

	this.AjaxTest=function(){
		// 测试方法
		alert("Ajax.js");
	}

	this.GetData=function(param,callback){
		$.post("Ajax/Ajax.php",param,function(dat,status){
			if(status=="success"){
				var backdata = eval("("+dat+")");
				callback&callback(backdata);
			}else{
				alert("error");
			}
		})
	}

})