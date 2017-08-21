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
	this.userZhuCe=function(client,user,newpath,callback){
		client.query("INSERT INTO USER (user_id, user_name, user_tel, user_email, user_pass, user_photo) VALUES (?,?,?,?,?,?)",[uuid.v4(),user.userName,user.phone,user.email,user.password,newpath],function(error,result){
			callback(result.affectedRows)
		})
	}
	//验证注册的用户名是否重复
	this.zhuCeYanZheng=function(client,userName,callback){
		client.query("SELECT COUNT(*) shuliang FROM USER u WHERE u.user_name=?",[userName],function(error,result){
			callback(result[0].shuliang)
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
	//添加用户
	this.userInsert=function(client,user,newpath,callback){
		client.query("INSERT INTO USER (user_id, user_name, user_tel, user_email, user_pass, user_photo) VALUES (?,?,?,?,?,?)",[uuid.v4(),user.userName,user.phone,user.email,user.password,newpath],function(error,result){
			callback(result.affectedRows)
		})
	}
	//通过ID查询用户，跳到用户修改页面
	this.userEditPage=function(client,userId,callback){
		client.query("SELECT * FROM USER WHERE user_id=?",[userId],function(error,result){
			callback(result[0])
		})
	}
	//用户修改动作
	this.userEdit=function(client,user,newpath,callback){
		client.query("UPDATE USER SET user_name = ?, user_tel = ?, user_email = ?, user_pass = ?, user_photo = ? WHERE user_id = ?",[user.userName[0],user.phone[0],user.email[0],user.password[0],newpath,user.userId[0]],function(error,result){
			callback(result.affectedRows)
		})
	}
	//删除用户(单删)
	this.deleteUser=function(client,userId,callback){
		client.query("DELETE FROM USER WHERE user_id = ?",[userId],function(error,result){
			callback(result.affectedRows)
		})
	}
	//用户删除(多删)
	this.deleteManyUser=function(client,userIdSStr,callback){
		client.query("DELETE FROM USER WHERE user_id in ("+userIdSStr+")",[],function(error,result){
			callback(result.affectedRows);
		})
	}

	
	
	//通过movieId查电影信息
	this.selectXinXi=function(client,movieId,callback){
		client.query("select * from movie where movie_id=?",[movieId],function(error,result){
			callback(result[0]);
		})
	}
	//查movie表全部信息
	this.selectMovies=function(client,callback){
		client.query("select * from movie",function(error,result){
			callback(result);
		})
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
	};
	
	//下面是电影部分
	//搜索电影
	this.selectDianYing = function(client, callback) {
		client.query("SELECT * FROM movie", function(error, result) {
			callback(result);
		})

	};
	//添加电影
	this.insertDianYing = function(client, movie, cclj, callback) {
		client.query("INSERT INTO movie (movie_id,movie_name, movie_jianjie, fangyingriqi, movie_photo) VALUES (?,?,?,?,?)", [uuid.v4(), movie.movie_name[0], movie.movie_jianjie[0], movie.fangyingriqi[0], cclj], function(error, result) {
			callback(result.affectedRows);
		})
	};
	//删除一个电影
	this.deleteOneDianYing = function(client, id, callback) {
		client.query("DELETE FROM movie WHERE movie_id = ?", [id], function(error, result) {
			callback(result.affectedRows);
		})
	};
	//删除多个
	this.deleteManyDianYing = function(client, movieIdStr, callback) {
		client.query("DELETE FROM MOVIE WHERE movie_id in (" + movieIdStr + ")", [], function(error, result) {
			callback(result.affectedRows);
		})
	}
	//修改回显
	this.xiuGaiHuiXian = function(client, id, callback) {
		client.query("SELECT * FROM movie WHERE movie_id=?", [id], function(error, result) {
			callback(result);
		})
	};
	//执行修改方法
	this.dianyingxiugai = function(client, movie, cclj, callback) {
		client.query("UPDATE movie SET movie_name =?,movie_jianjie =?,fangyingriqi=?,movie_photo=? WHERE movie_id =?", [movie.movie_name, movie.movie_jianjie, movie.fangyingriqi, cclj, movie.movie_id], function(error, result) {
			callback(result.affectedRows);
		})
	};

	//查询场次表（查里面的movie_id）
	this.selectChangCi=function(client,callback){
		client.query("SELECT * FROM changci",[],function(error,result){
			callback(result)
		})
	};
	//查询movie 表 movie_id
	this.selectMovieId=function(client,callback){
		client.query("SELECT movie_id,movie_name FROM movie",[],function(error,result){
			callback(result)
		})
	}
	












}
module.exports=new dao();
