var mysql=require("mysql");
var dao=function(){
	this.createServer=function(){
		var client=mysql.cerateConnection({
			host:"localhost",
			user:"root",
			pass:"root",
			database:"web4movie"
		});
		return client;
	}
	
}
