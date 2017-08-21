require("../css/userList.css");
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
        var aaa=document.getElementById("aaa");
        for(var i=0;i<result.jieGuo.length;i++){
			var tr = userS.insertRow(aaa.length);
			tr.className="leiMing";
			var leiMings=document.getElementsByClassName("leiMing");
			leiMings[i].id=result.jieGuo[i].user_id;
			console.log(leiMings[i])
			//在tr里 生成td  把数据添加到td中
			var td1 = tr.insertCell(0);
			td1.innerHTML="<input class='fuXuanKuang' type='checkbox' onclick=xuanZhong('"+result.jieGuo[i].user_id+"')>";
			var td2 = tr.insertCell(1);
			td2.innerHTML=result.jieGuo[i].user_id;
//			var td3 = tr.insertCell(2);
//			td3.innerHTML=result.jieGuo[i].user_zhanghao;
			var td3 = tr.insertCell(2);
			td3.innerHTML=result.jieGuo[i].user_name;
			var td4 = tr.insertCell(3);
			td4.innerHTML=result.jieGuo[i].user_pass;
			var td5 = tr.insertCell(4);
			td5.innerHTML=result.jieGuo[i].user_email;
			var td6 = tr.insertCell(5);
			td6.innerHTML=result.jieGuo[i].user_type;
			var td7 = tr.insertCell(6);
			td7.innerHTML="<img style='width:60px;height:60px' src='"+result.jieGuo[i].user_photo+"'/>";
			var td8 = tr.insertCell(7);
			td8.innerHTML=result.jieGuo[i].user_tel;
			var td9 = tr.insertCell(8);
			td9.innerHTML="<a href='/userAction/userInsertPage'>添加</a>  |  <a href='/userAction/userEditPage?id="+result.jieGuo[i].user_id+"'>修改</a>  |  <a href='/userAction/deleteUser?id="+result.jieGuo[i].user_id+"'>删除</a>";
        }
        var as=document.getElementsByTagName("a");
        for(var j=0;j<as.length;j++){
        	as[j].style.color="blue";
        }
//      console.log(result.jieGuo); //这是返回的结果
    },
    error:function(){
    	alert("出错了")
    }
})
//添加用户
tianJiaUser=function(){
	location.href="/userAction/userInsertPage";
}
//判定哪个被选中
userIdS=[];
xuanZhong=function(abc){
	var flag=$("#"+abc+" input:checkbox")[0].checked;
	console.log(flag);
	if(flag==true){
		userIdS.push(abc);
	}else{
		var index=$.inArray(abc,userIdS);					
    	userIdS.splice(index,1);
	}
	console.log(userIdS)
}
//全选的单击事件
quanXuan=function(){
	var quanXuan=document.getElementById("quanXuan");
	var leiMing=document.getElementsByClassName("leiMing");
	var fuXuanKuang=document.getElementsByClassName("fuXuanKuang");
	for(var b=0;b<fuXuanKuang.length;b++){
		if(quanXuan.checked==true){
			fuXuanKuang[b].checked=true;
			userIdS.push(leiMing[b].id);
		}else{
			fuXuanKuang[b].checked=false;
			userIdS=[];
		}
	}
	console.log(userIdS);
}
//删除多个用户
deleteManyUser=function(){
	var quanXuan=document.getElementById("quanXuan");
	if(userIdS.length>0){
		var userIdSStr="'"+userIdS.join("\',\'")+"'";
		var url="/userAction/deleteManyUser";
		var data={userIdSStr:userIdSStr};
		$.post(url,data,function(result){
			console.log(result.resultCode);
			var code=result.resultCode
			if(code==1){
				alert("删除成功");
				for(var i=0;i<userIdS.length;i++){
					$("#"+userIdS[i]).remove();
				}
				userIdS=[];
				quanXuan.checked=false;
			}else{
				userIdS=[];
				quanXuan.checked=false;
			}
		},"json")
	}else{
		alert("请选择要删除的用户");
		quanXuan.checked=false;
	}
}