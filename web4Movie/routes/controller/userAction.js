var userModel=require("../model/userModel");//引入model模型层
var userAction=function(){
	//跳到后台登录页面
	this.houTaiDengLu=function(req,res){
		res.render("houTaiDengLuPage");
	}
	//跳到用户列表页面
	this.userList=function(req,res){
		res.render("userList");
	}
	//用户注册
	this.userZhuCePage=function(req,res){
		res.render("userZhuCePage")
	}
	//用户注册的提交动作
	this.userZhuCe=function(req,res){
		var user=req.body;
		userModel.userZhuCe(user,function(result){
			if(result==1){
				res.render("success",{title:"恭喜您注册成功"})
			}else{
				res.render("error",{title:"注册失败，请重新注册"})
			}
		})
	}
	//教师登录
	//form表单的提交动作
	this.jiaoShiDengLuDongZuo=function(req,res){
		var userName=req.body.userName;
		var password=req.body.password;
		userModel.jiaoShiDengLuDongZuo(userName,password,function(result){
			if(result.shu==1){
				res.render("houTaiZhuYe")
			}else{
				res.render("error")
			}
		})
	}
	//查询所有用户
	this.selectUserS=function(req,res){
		userModel.selectUserS(function(result){
			res.json({jieGuo:result})
		})
	}
	//跳到用户添加页面
	this.userInsertPage=function(req,res){
		res.render("userInsertPage")
	}
	//跳到用户修改页面
	this.userEditPage=function(req,res){
		res.render("userEditPage")
	}
}
module.exports=new userAction();