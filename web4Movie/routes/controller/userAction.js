var userModel=require("../model/userModel");
var userAction=function(){
	this.userList=function(req,res){
		res.render("user");
	}
	this.houTaiDengLu=function(req,res){
		res.render("houTaiDengLuPage");
	}
	this.jiaoShiDengLuDongZuo=function(req,res){
		var userName=req.body.userName;
		var password=req.body.password;
		userModel.jiaoShiDengLuDongZuo(userName,password,function(result){
			if(result.shu==1){
				res.render("houTaiZhuYe")
			}else{
				alert("登录失败，请重新登录")
			}
		})
	}
}
module.exports=new userAction();