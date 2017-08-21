var indexModel=require("../model/indexModel.js");
var indexAction=function(){
	//这个是index.js发出的请求 查询电影表
	this.selectMovies=function(req,res){
		indexModel.selectMovies(function(result){
			res.json({movies:result});
		})
	}
	
	
	
	
}
module.exports=new indexAction();
