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
	//跳转到添加场次页面
	this.changCiTianJia=function(req,res){
		res.render("changCiTianJia");
	}
	//查询movie_id
	this.selectMovieId=function(req,res){
		changciModel.selectMovieId(function(result){
			res.json({jieGuo:result});
		})
	}
	//执行添加场次
	this.insertChangCi=function(req,res){
		var movieNews=req.body.movieNews;
		changciModel.insertChangCi(movieNews,function(result){
			if(result==1){
				res.json({result:result});
			}
					
		})
	};
	// 删除单个场次
	this.deleteOneChangCi = function(req, res) {
		var id = req.query.id;
		changciModel.deleteOneChangCi(id, function(result) {
			if(result == 1) {
				res.redirect("/changciAction/changciList");
			} else {
				res.render("error");
			}
		})
	};





}
module.exports=new changciAction();