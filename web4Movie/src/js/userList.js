require("../css/userList.css");
//监听socket传来的信息
var socket = io.connect();
socket.on('reload',function(){
	//刷新网页
	window.location.reload();
});
require("jquery");
require("bootstrap");
require("bootstrap-loader");
$.ajax({
	type:"POST",
	url:"/userAction/selectUserS",
	data:{},
	dataType:"json",
	success:function (result) {
        //此处放成功后执行的代码
        //根据id得到表格对象
        var userS=document.getElementById("userS");
        for(var i=0;i<result.jieGuo.length;i++){
			var tbody = document.getElementsByTagName("tbody");
			var tr = userS.insertRow(tbody.length);
			//在tr里 生成td  把数据添加到td中
			var td1 = tr.insertCell(0);
			td1.innerHTML="<input type='checkbox' />";
			var td2 = tr.insertCell(1);
			td2.innerHTML=result.jieGuo[i].user_id;
			var td3 = tr.insertCell(2);
			td3.innerHTML=result.jieGuo[i].user_zhanghao;
			var td4 = tr.insertCell(3);
			td4.innerHTML=result.jieGuo[i].user_name;
			var td5 = tr.insertCell(4);
			td5.innerHTML=result.jieGuo[i].user_pass;
			var td6 = tr.insertCell(5);
			td6.innerHTML=result.jieGuo[i].user_email;
			var td7 = tr.insertCell(6);
			td7.innerHTML=result.jieGuo[i].user_type;
			var td8 = tr.insertCell(7);
			td8.innerHTML=result.jieGuo[i].user_tel;
			var td9 = tr.insertCell(8);
			td9.innerHTML="<a href='/userAction/userInsertPage'>添加</a>  |  <a href='/userAction/userEditPage'>修改</a>  |  <a>删除</a>";
			var as=document.getElementsByTagName("a");
			as[i].style.color="white";
//			td4.innerHTML="<img src='"+data.jieGuo[i].movie_photo+"'/>";
//			//抓生成的img
//			var imgs=document.getElementsByTagName('img');
//			imgs[i].style.height="60px";
//			imgs[i].style.width="60px";
        }
        console.log(result.jieGuo); //这是返回的结果
    },
    error:function(){
    	alert("出错了")
    }
})
