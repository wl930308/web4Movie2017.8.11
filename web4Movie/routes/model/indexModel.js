var mysql=require("../database/dbConnect.js");
var indexModel=function(){
	//查询电影表
	this.selectMovies=function(callback){
		var client=mysql.createServer();
		mysql.selectMovies(client,function(result){
			callback(result);
		})
	}
	
	
	
	
}
module.exports=new indexModel();
