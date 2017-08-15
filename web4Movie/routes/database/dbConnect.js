var mysql=require("mysql");
var uuid=require("node-uuid");
var dao=function(){
	//创建服务
	this.createServer=function(){
		var client=mysql.createConnection({//连接数据库
			host:"localhost",
			user:"root",
			password:"root",
			database:"web4movie"
		})
		return client;
	}
	//用户注册的提交动作
	this.userZhuCe=function(client,user,callback){
		client.query("INSERT INTO USER (user_id, user_name, user_tel, user_email, user_pass) VALUES (?,?,?,?,?)",[uuid.v4(),user.userName,user.phone,user.email,user.password],function(error,result){
			callback(result.affectedRows)
		})
	}
	//登录时验证数据库里有没有该用户名和密码，有则登录成功，反之失败
	this.yanZhengUsernameAndPassword=function(client,userName,password,callback){
		client.query("SELECT u.user_id,u.user_name,COUNT(*) shu FROM USER u WHERE u.user_name=? AND u.user_pass=?",[userName,password],function(error,result){
			callback(result[0])
		})
	}
	//查询所有用户
	this.selectUserS=function(client,callback){
		client.query("SELECT * FROM USER",[],function(error,result){
			callback(result)
		})
	}
}
module.exports=new dao();
