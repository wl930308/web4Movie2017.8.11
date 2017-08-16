var mysql=require("mysql");
var uuid=require("node-uuid");

var dao=function(){
	this.createServer=function(){
		var client=mysql.createConnection({
			host:"localhost",
			user:"root",
			password:"root",
			database:"web4movie"
		})
		return client;
	}
	this.selectXinXi=function(client,callback){
		client.query("select * from movie where movie_id=?",[1],function(error,result){
			callback(result[0]);
		})
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
module.exports=new dao();