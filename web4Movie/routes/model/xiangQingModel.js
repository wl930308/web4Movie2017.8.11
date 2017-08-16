var mysql=require("../database/dbConnect.js");
var xiangQingModel=function(){
	this.selectXinXi=function(callback){
		var client=mysql.createServer();
		mysql.selectXinXi(client,function(result){
			callback(result);
		})
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
module.exports=new xiangQingModel()
