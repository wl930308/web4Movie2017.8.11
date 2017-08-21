var changciModel=require("../model/changciModel");
var changciAction=function(){
	//执行跳页	
	this.changciList=function(req,res){
		res.render("changciList");
	};
	//查询场次
	this.selectChangCi=function(req,res){
		changciModel.selectChangCi(function(result){

			res.json({
					resultCode: 1,
					jieGuo: result
				});
		})
	};
	this.changCiTianJia=function(req,res){
		res.render("changCiTianJia");
	}
	//查询movie_id
	this.selectMovieId=function(req,res){
		changciModel.selectMovieId(function(result){
			res.json({jieGuo:result});
		})
	}





}
module.exports=new changciAction();