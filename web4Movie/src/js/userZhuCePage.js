require("../css/userZhuCePage.css");
require("../js/xianshitupian.js");
require("jquery");
require("bootstrap/dist/css/bootstrap.css");
require("bootstrap");
require("bootstrap-loader");
$("#userName").blur(function(){
	var userName=$("#userName").val();
	$.ajax({
		type:"POST",
		url:"/userAction/zhuCeYanZheng",
		data:{userName:userName},
		dataType:"json",
		success:function(result){
			var code=result.resultCode;
			if(code==1){
				document.getElementById("yanZheng").style.display="inline";
			}else{
				document.getElementById("yanZheng").style.display="none";
			}
		},
		error:function(){
			
		}
	})
})