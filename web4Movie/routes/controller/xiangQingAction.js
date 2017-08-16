var xiangQingModel=require("../model/xiangQingModel.js");
var xiangQingAction=function(){
	this.selectXinXi=function(req,res){
		console.log(1111111);
		xiangQingModel.selectXinXi(function(result){
			res.json({movie:result})
		})
	}
}
module.exports=new xiangQingAction();
