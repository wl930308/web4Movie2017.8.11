var mysql=require("../database/dbConnect");
var multiparty=require("multiparty");
var path=require("path");
var fs=require("fs");
var userModel=function(){
	//用户注册的提交动作
	this.userZhuCe=function(user,callback){
		var client=mysql.createServer();
		mysql.userZhuCe(client,user,function(result){
			callback(result);
		})
	}
	//教师登录
	this.jiaoShiDengLuDongZuo=function(userName,password,callback){
		var client=mysql.createServer();
		mysql.yanZhengUsernameAndPassword(client,userName,password,function(result){
			callback(result)
		})
	}
	//查询所有用户
	this.selectUserS=function(callback){
		var client=mysql.createServer();
		mysql.selectUserS(client,function(result){
			callback(result)
		})
	}
}
module.exports=new userModel();
