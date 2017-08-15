var movieModel=require("../model/movieModel");
var movieAction=function(){
	this.xiangQingPage=function(req,res){
		res.render("xiangQing");
	}
	this.movieList=function(req,res){
		res.render("movieList")
	}
	this.xuanzuoPage=function(req,res){
		res.render("xuanzuoPage")
	}
}
module.exports=new movieAction();