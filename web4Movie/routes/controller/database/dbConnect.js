var mysql=require("mysql");
var uuid=require("node-uuid")
var dao=function(){
	this.createServer=function(){
		var client=createConnect({
			host:"localhost",
			user:"root",
			password:"root",
			database:"web4movie"
		})
		return client;
	}
}
module.exports=new dao();