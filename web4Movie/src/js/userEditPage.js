require("../css/userEditPage.css");
//监听socket传来的信息
var socket = io.connect();
socket.on('reload',function(){
	//刷新网页
	window.location.reload();
});
require("jquery");
require("bootstrap/dist/css/bootstrap.css");
require("bootstrap");
require("bootstrap-loader");