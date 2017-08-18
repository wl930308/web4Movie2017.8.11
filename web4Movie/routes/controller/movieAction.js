var movieModel=require("../model/movieModel");
var movieAction=function(){
	this.xiangQingPage=function(req,res){
		var movieId=req.query.id;
		movieModel.xiangQingPage(movieId,function(result){
			console.log(result)
			res.render("xiangQing",{movies:result});
		})
		
	}
	this.xuanzuoPage=function(req,res){
		res.render("xuanzuoPage")
	}
	
	//跳转页面
	this.movieList = function(req, res) {
		res.render("movieList");
	};
	//查询电影
	this.selectDianYing = function(req, res) {
		movieModel.selectDianYing(function(result) {
			res.json({
				resultCode: 1,
				jieGuo: result
			});
		})
	};
	//添加电影跳页
	this.dianyingtianjia = function(req, res) {
		res.render("movieTianJia");
	};
	//执行添加电影
	this.insertDianYing = function(req, res) {
		movieModel.insertDianYing(req, function(result) {
			if(result == 1) {
				res.redirect("/movieAction/movieList");
			} else {
				res.render("error");
			}

		})
	};
	//删除单个电影
	this.deleteOneDianYing = function(req, res) {
		var id = req.query.id;
		movieModel.deleteOneDianYing(id, function(result) {
			if(result == 1) {
				res.redirect("/movieAction/movieList");
			} else {
				res.render("error");
			}
		})
	};
	//删除多个电影
	this.deleteManyDianYing = function(req, res) {
		var movieIdSStr = req.body.movieIdSStr;
		var movieIdStr = movieIdSStr.split(",");
		movieModel.deleteManyDianYing(movieIdStr, function(result) {
			if(result == movieIdStr.length) {
				res.json({
					code: 1
				});
			} else {
				res.json({
					code: 0
				});
			}
		})
	};
	//修改跳转到修改页面
	this.xiuGaiHuiXian = function(req, res) {
		var id = req.query.id;
		movieModel.xiuGaiHuiXian(id, function(result) {
			res.render("movieXiuGai", {
				jieGuo: result[0]
			});
		})
	};
	//执行电影修改
	this.dianyingxiugai = function(req, res) {
		movieModel.dianyingxiugai(req, function(result) {
			if(result == 1) {
				res.redirect("/movieAction/movieList");
			} else {
				res.render("error");
			}

		})
	};
	
	
}
module.exports=new movieAction();

