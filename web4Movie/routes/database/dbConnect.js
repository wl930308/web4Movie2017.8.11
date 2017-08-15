var mysql=require("mysql");
//var uuid=require("node-uuid");
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
	this.yanZhengUsernameAndPassword=function(client,userName,password,callback){
		client.query("SELECT u.user_id,u.user_name,COUNT(*) shu FROM USER u WHERE u.user_name=? AND u.user_pass=?",[userName,password],function(error,result){
			callback(result[0])
		})
	}
}
module.exports=new dao();
