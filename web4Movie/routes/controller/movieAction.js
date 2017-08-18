var movieModel=require("../model/movieModel");
var movieAction=function(){
	this.xiangQingPage=function(req,res){
		var movieId=req.query.id;
		movieModel.xiangQingPage(movieId,function(result){
			console.log(result)
			res.render("xiangQing",{movies:result});
		})
		
	}
	this.movieList=function(req,res){
		res.render("movieList")
	}
	this.xuanzuoPage=function(req,res){
		res.render("xuanzuoPage")
	}
	this.quXuanZuo=function(req,res){
		res.render("xuanzuoPage")
	}
}
module.exports=new movieAction();