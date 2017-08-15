var userAction=function(){
	this.userList=function(req,res){
		res.render("user");
	}
	this.houTaiDengLu=function(req,res){
		res.render("houTaiDengLuPage");
	}
	this.jiaoShiDengLuDongZuo=function(req,res){
		console.log(req.body)
		var userName=req.body.userName;
		var password=req.body.password;
		if(userName=="wl" && password=="wl"){
			res.render("houTaiZhuYe")
		}
	}
}
module.exports=new userAction();