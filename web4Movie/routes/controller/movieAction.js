var movieAction=function(){
	this.xiangQingPage=function(req,res){
		res.render("xiangQing");
	}
}
module.exports=new movieAction();