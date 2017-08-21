require("jquery");
require("../css/changCiTianJia.css");
require("bootstrap"); 
require("bootstrap-loader");


var url="/changciAction/selectMovieId";
var data={};
$.post(url,data,function(result){
	
	var sel=document.getElementById("movieIdXiaLa");
	var dianyingming=document.getElementById("dianyingming");
	for(var i=0;i<result.jieGuo.length;i++){
		console.log(result.jieGuo[i].movie_name);
		var option=document.createElement("option");		
		option.innerHTML="<span>"+result.jieGuo[i].movie_name+"</span>"+":"+"id:"+result.jieGuo[i].movie_id;
		
	sel.appendChild(option);
		
		
		
	}
},"json")



