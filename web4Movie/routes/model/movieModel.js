var mysql = require("../database/dbConnect");
var multiparty = require("multiparty");
var path = require("path");
var fs = require("fs");
var movieModel = function() {
	this.xiangQingPage = function(movieId, callback) {
		var client = mysql.createServer();
		mysql.selectXinXi(client, movieId, function(result) {
			callback(result);
		})
	};

	//查询电影
	this.selectDianYing = function(callback) {
		var client = mysql.createServer();
		mysql.selectDianYing(client, function(result) {
			callback(result);
		})
	};
	//添加电影
	this.insertDianYing = function(req, callback) {
		//编辑图片上传路径
		var upLuJing = path.join(__dirname, "../../public/files/");
		//设置图片的上传路径并实例化得到form对象
		var form = new multiparty.Form({
			uploadDir: upLuJing
		});
		//开始上传
		form.parse(req, function(err, fields, files) {
			// console.info(JSON.stringify(files,null,2));
			if(err) {
				console.info(err)
			} else {
				var inputFile = files.inputFile[0];

				var oldPath = inputFile.path;

				var newPath = upLuJing + inputFile.originalFilename;
				//把储存的图片改名
				fs.rename(oldPath, newPath, function(err) {
					if(err) {
						console.info(err)
					} else {
						var client = mysql.createServer();
						var movie = fields;
						var cclj = "/files/" + inputFile.originalFilename;
						mysql.insertDianYing(client, movie, cclj, function(result) {
							callback(result)
						})
					}
				})
			}
		})
	};
	//删除单个电影
	this.deleteOneDianYing = function(id, callback) {
		var client = mysql.createServer();
		mysql.deleteOneDianYing(client, id, function(result) {
			callback(result);
		})
	};
	//删除多个
	this.deleteManyDianYing = function(movieIdStr, callback) {
		var client = mysql.createServer();
		mysql.deleteManyDianYing(client, movieIdStr, function(result) {
			callback(result);
		})
	};
	//修改回显
	this.xiuGaiHuiXian = function(id, callback) {
		var client = mysql.createServer();
		mysql.xiuGaiHuiXian(client, id, function(result) {
			callback(result);
		})
	};
	//执行修改
	this.dianyingxiugai = function(req, callback) {
		//编辑图片上传路径
		var upLuJing = path.join(__dirname, "../../public/files/");
		//设置图片的上传路径并实例化得到form对象
		var form = new multiparty.Form({
			uploadDir: upLuJing
		});
		//开始上传
		form.parse(req, function(err, fields, files) {
			// console.info(JSON.stringify(files,null,2));
			if(err) {
				console.info(err)
			} else {
				var inputFile = files.inputFile[0];

				var oldPath = inputFile.path;

				var newPath = upLuJing + inputFile.originalFilename;
				//把储存的图片改名
				fs.rename(oldPath, newPath, function(err) {
					if(err) {
						console.info(err)
					} else {
						var client = mysql.createServer();
						var movie = fields;
						var cclj = "/files/" + inputFile.originalFilename;
						mysql.dianyingxiugai(client, movie, cclj, function(result) {
							callback(result)
						})
					}
				})
			}
		})
	}

}
module.exports = new movieModel();