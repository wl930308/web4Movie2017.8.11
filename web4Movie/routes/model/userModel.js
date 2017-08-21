var mysql=require("../database/dbConnect");
var multiparty=require("multiparty");
var path=require("path");
var fs=require("fs");
var userModel=function(){
	//用户注册的提交动作
	this.userZhuCe=function(req,res,callback) {
        //编辑图片上传路径
        var uplujing=path.join(__dirname,"../../public/files/");
        //设置图片上传路径  实例化multiparty
        var form=new multiparty.Form({uploadDir:uplujing});
        //开始上传
        form.parse(req,function (err,fields,files) {
            console.log(JSON.stringify(files,null,2));
            if (err){
                console.log('parse error:'+err);
            }else{
                var inputFile=files.inputFile[0];
                var oldpath=inputFile.path;
                var newpath=uplujing+inputFile.originalFilename;
                console.log("这是要修改的旧路径"+oldpath);
                console.log("这是修改之后的新路径"+newpath);
                fs.rename(oldpath,newpath,function (err) {
                    if (err){
                        console.log('rename error:'+err);
                    }else{
                        console.log('rename ok')
                    }
                });
                //调用dbConnect.js中的方法
                var client=mysql.createServer();
                var cclj="/files/"+inputFile.originalFilename;
                mysql.userZhuCe(client,fields,cclj,function (result) {
                    callback(result)
                })
            }
        })
    }
	//验证注册的用户名是否重复
	this.zhuCeYanZheng=function(userName,callback){
		var client=mysql.createServer();
		mysql.zhuCeYanZheng(client,userName,function(result){
			callback(result)
		})
	}
	//教师登录
	this.jiaoShiDengLuDongZuo=function(userName,password,callback){
		var client=mysql.createServer();
		mysql.yanZhengUsernameAndPassword(client,userName,password,function(result){
			callback(result)
		})
	}
	//查询所有用户
	this.selectUserS=function(callback){
		var client=mysql.createServer();
		mysql.selectUserS(client,function(result){
			callback(result)
		})
	}
	//用户添加
	this.userInsert=function(req,res,callback){
        //编辑图片上传路径
        var uplujing=path.join(__dirname,"../../public/files/");
        //设置图片上传路径  实例化multiparty
        var form=new multiparty.Form({uploadDir:uplujing});
        //开始上传
        form.parse(req,function (err,fields,files){
            console.log(JSON.stringify(files,null,2));
            if (err){
                console.log('parse error:'+err);
            }else{
                var inputFile=files.inputFile[0];
                var oldpath=inputFile.path;
                var newpath=uplujing+inputFile.originalFilename;
                console.log("这是要修改的旧路径"+oldpath);
                console.log("这是修改之后的新路径"+newpath);
                fs.rename(oldpath,newpath,function (err){
                    if (err){
                        console.log('rename error:'+err);
                    }else{
                        console.log('rename ok')
                    }
                });
                //调用dbConnect.js中的方法
                var client=mysql.createServer();
                var cclj="/files/"+inputFile.originalFilename;
                mysql.userInsert(client,fields,cclj,function (result){
                    callback(result)
                })
            }
        })
    }
	//通过ID查询用户，跳到用户修改页面
	this.userEditPage=function(userId,callback){
		var client=mysql.createServer();
		mysql.userEditPage(client,userId,function(result){
			callback(result)
		})
	}
	//用户修改动作
	this.userEdit=function (req,res,callback) {
        //编辑图片上传路径
        var uplujing=path.join(__dirname,"../../public/files/");
        //设置图片上传路径  实例化multiparty
        var form=new multiparty.Form({uploadDir:uplujing});
        //开始上传
        form.parse(req,function (err,fields,files) {
            console.log(JSON.stringify(files,null,2));
            if (err){
                console.log('parse error:'+err);
            }else{
                var inputFile=files.inputFile[0];
                var cclj="";
                if(inputFile.originalFilename==""){
                    cclj=fields.photoBeiYong[0];
                }else{
                    var oldpath=inputFile.path;
                    var newpath=uplujing+inputFile.originalFilename;
                    console.log("这是要修改的旧路径"+oldpath);
                    console.log("这是修改之后的新路径"+newpath);
                    fs.rename(oldpath,newpath,function (err) {
                        if (err){
                            console.log('rename error:'+err);
                        }else{
                            console.log('rename ok')
                        }
                    });
                    cclj="/files/"+inputFile.originalFilename;
                }
                //调用dbConnect.js中的方法
                var client=mysql.createServer();
                mysql.userEdit(client,fields,cclj,function (result) {
                    callback(result);
                })
            }
        })
    }
	//删除用户(单删)
	this.deleteUser=function(userId,callback){
		var client=mysql.createServer();
		mysql.deleteUser(client,userId,function(result){
			callback(result)
		})
	}
	//用户删除(多删)
	this.deleteManyUser=function(userIdSStr,callback){
		var client=mysql.createServer();
   		mysql.deleteManyUser(client,userIdSStr,function(result){
   			callback(result);
   		})
	}
}
module.exports=new userModel();
