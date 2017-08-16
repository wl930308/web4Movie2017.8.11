var mysql=require("../database/dbConnect.js");
var indexModel=function(){
	this.selectMovies=function(callback){
		console.info(222);
		var client=mysql.createServer();
//		console.log(333);
		mysql.selectMovies(client,function(result){
			callback(result);
		})
	}
}
module.exports=new indexModel();
