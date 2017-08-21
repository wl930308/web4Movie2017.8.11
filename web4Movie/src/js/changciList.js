require("jquery");
require("../css/changciList.css");
require("bootstrap");
require("bootstrap-loader");

tianjia = function() {
	location.href = "/changciAction/changCiTianJia";
};

var url='/changciAction/selectChangCi';
var data={};
$.post(url,data,function(data){
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
			ljw[i].id = data.jieGuo[i].changci_id;
			//在tr里 生成td  把数据添加到td中
			var td0 = tr.insertCell(0);
			td0.innerHTML = "<input type='checkbox' class='xuanze' id='check" + i + "' onclick=dianji('" + data.jieGuo[i].changci_id + "')>"
			var td1 = tr.insertCell(1);
			td1.innerHTML = data.jieGuo[i].movie_id;

			var td2 = tr.insertCell(2);
			td2.innerHTML = data.jieGuo[i].time;

			var td3 = tr.insertCell(3);
			td3.innerHTML = data.jieGuo[i].paice;

			var td4 = tr.insertCell(4);
			td4.innerHTML = data.jieGuo[i].fangyingting;
			
			var td5 = tr.insertCell(5);
			//给最后一个单元格加入修改和删除的按钮
			//下面是修改的a链接
			var xiugai = document.createElement("a");
			xiugai.href = "/changciAction/xiuGaiHuiXian?id=" + data.jieGuo[i].changci_id;
			xiugai.innerHTML = "修改";
			xiugai.className = "btn btn-success";
			//下面是删除的a链接
			var shanchu = document.createElement("a");
			shanchu.href = "/changciAction/deleteOneChangCi?id=" + data.jieGuo[i].changci_id;
			shanchu.innerHTML = "删除";
			shanchu.className = "btn btn-info";
			td5.appendChild(xiugai);
			td5.appendChild(shanchu);
		} // 这行是for循环结束
},"json")

