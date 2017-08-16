var mysql=require("../database/dbConnect");
var movieModel=function(){
	this.xiangQingPage=function(movieId,callback){
		var client=mysql.createServer();
		mysql.selectXinXi(client,movieId,function(result){
			callback(result);
		})
	}
}
module.exports=new movieModel();