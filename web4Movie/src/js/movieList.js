require("jquery");
require("../css/movieList.css");
require("bootstrap");
require("bootstrap-loader");

//ajax 查询电影
$.ajax({
	type: "POST",
	url: "/movieAction/selectDianYing",
	dataType: "json",
	data: {},
	success: function(data) {
		//根据id得到表格对象
		var table = document.getElementById("a");
		//利用for循环添加标签  用来显示数据
		for(var i = 0; i < data.jieGuo.length; i++) {
			//获得所有的tr用来计算当前有几个tr
			var trs = document.getElementsByTagName("tr");
			//给每一行添加id
			var tr = table.insertRow(trs.length);
			tr.className = "ljw";
			var ljw = document.getElementsByClassName("ljw");
			ljw[i].id = data.jieGuo[i].movie_id;
			//在tr里 生成td  把数据添加到td中
			var td0 = tr.insertCell(0);
			td0.innerHTML = "<input type='checkbox' class='xuanze' id='check" + i + "' onclick=dianji('" + data.jieGuo[i].movie_id + "')>"
			var td1 = tr.insertCell(1);
			td1.innerHTML = data.jieGuo[i].movie_name;

			var td2 = tr.insertCell(2);
			td2.innerHTML = data.jieGuo[i].movie_jianjie;

			var td3 = tr.insertCell(3);
			td3.innerHTML = data.jieGuo[i].fangyingriqi;

			var td4 = tr.insertCell(4);
			td4.innerHTML = "<img src='" + data.jieGuo[i].movie_photo + "'/>";
			//抓生成的img
			var imgs = document.getElementsByTagName('img');
			imgs[i].style.height = "60px";
			imgs[i].style.width = "60px";

			var td5 = tr.insertCell(5);
			//给最后一个单元格加入修改和删除的按钮
			//下面是修改的a链接
			var xiugai = document.createElement("a");
			xiugai.href = "/movieAction/xiuGaiHuiXian?id=" + data.jieGuo[i].movie_id;
			xiugai.innerHTML = "修改";
			xiugai.className = "btn btn-success";
			//下面是删除的a链接
			var shanchu = document.createElement("a");
			shanchu.href = "/movieAction/deleteOneDianYing?id=" + data.jieGuo[i].movie_id;
			shanchu.innerHTML = "删除";
			shanchu.className = "btn btn-info";
			td5.appendChild(xiugai);
			td5.appendChild(shanchu);
		} // 这行是for循环结束
	},
	error: function() {
		alert("错误！！！");
	}
})
//添加按钮执行的跳页方法
tianjia = function() {
	location.href = "/movieAction/dianyingtianjia";
};
//下面是判定是否选中
movieIds = [];
dianji = function(a) {
	console.info(a)
	var flag = $("#" + a + "  input:checkbox")[0].checked;
	console.log(flag);
	if(flag == true) {
		movieIds.push(a);
	} else {
		var index = $.inArray(a, movieIds);
		movieIds.splice(index, 1);
		beiXuanZhong.splice(index, 1);
	}
	console.log(movieIds)
}

//全选 的点击事件

quanxuan = function() {
	var quanxuan = document.getElementById("quanxuan");
	var checks = document.getElementsByClassName("xuanze");
	var ljw = document.getElementsByClassName("ljw");
	for(var j = 0; j < checks.length; j++) {
		if(quanxuan.checked == true) {
			checks[j].checked = true;
			movieIds.push(ljw[j].id);

		} else {
			checks[j].checked = false;
			movieIds = [];

		}

	}
	console.log(movieIds);

} //这是全选的结束

//删除多个
shanChuManyDianYing = function() {
	var quanxuan = document.getElementById("quanxuan");
	if(movieIds.length > 0) {
		var movieIdSStr = "'" + movieIds.join("\',\'") + "'";
		var url = "/movieAction/deleteManyDianYing";
		var data = {
			movieIdSStr: movieIdSStr
		};
		$.post(url, data, function(result) {
			console.log(result.code);
			if(result.code == 1) {
				alert("删除成功");
				for(var i = 0; i < movieIds.length; i++) {
					$("#" + movieIds[i]).remove();
				}
				movieIds = [];
				quanxuan.checked = false;
			} else {
				movieIds = [];
				quanxuan.checked = false;
			}
		}, "json")
	} else {
		alert("请先选择要删除的内容");
		quanxuan.checked = false;
	}
}