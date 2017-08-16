var indexModel=require("../model/indexModel.js");
var indexAction=function(){
	this.selectMovies=function(req,res){
		console.info(1111111);
		indexModel.selectMovies(function(result){
			res.json({movies:result})
		})
	}
}
module.exports=new indexAction();
