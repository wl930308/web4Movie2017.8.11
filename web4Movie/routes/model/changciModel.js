var mysql = require("../database/dbConnect");
//var multiparty = require("multiparty");
//var path = require("path");
//var fs = require("fs");

var changciModel=function(){
	//查询场次表
	this.selectChangCi=function(callback){
		var client=mysql.createServer();
		mysql.selectChangCi(client,function(result){
			callback(result);
		})
	};
	this.selectMovieId=function(callback){
		var client=mysql.createServer();
		mysql.selectMovieId(client,function(result){
			callback(result);
		})
	};
	
	
	
	
	
}
module.exports=new changciModel();
