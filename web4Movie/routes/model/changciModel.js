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
	this.insertChangCi=function(movieNews,callback){
		var client=mysql.createServer();
		mysql.insertChangCi(client,movieNews,function(result){
			callback(result);
		})
	};
	//删除单个场次
	this.deleteOneChangCi = function(id, callback) {
		var client = mysql.createServer();
		mysql.deleteOneChangCi(client, id, function(result) {
			callback(result);
		})
	};

	
	
	
	
	
}
module.exports=new changciModel();
