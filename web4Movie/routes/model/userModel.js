var mysql=require("../database/dbConnect");
//var multiparty=require("multiparty");
var path=require("path");
var fs=require("fs");
var userModel=function(){
	this.jiaoShiDengLuDongZuo=function(userName,password,callback){
		var client=mysql.createServer();
		mysql.yanZhengUsernameAndPassword(client,userName,password,function(result){
			callback(result)
		})
	}
}
module.exports=new userModel();
