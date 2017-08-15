var movieAction=function(){
	this.xiangQingPage=function(req,res){
		res.render("xiangQing");
	}
	this.movieList=function(req,res){
		res.render("movieList")
	}
}
module.exports=new movieAction();