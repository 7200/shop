//找元素
var tt = document.querySelectorAll('.content>.goods1>.left>p>button');
//定义一个日期对象(2017,6,21,11,0,0)
var temp = new Date(2017, 6, 21, 11, 0, 0);

function restTime() {
	//获取当前的日期
	var dd = new Date();
	//计算出剩余时间,此处为所有剩余的秒数
	var rt = (temp.getTime() - dd.getTime()) / 1000;
	//将剩余的所有秒数分解出为对应的小时数/分钟数/秒数
	var hh = Math.floor(rt / 3600); //此处取整得到小时数
	//具体分析4832秒得出剩出分钟数
	var mm = Math.floor((rt % 3600) / 60);
	//获取剩出的秒数
	var ss = Math.floor((rt % 3600) % 60);
	//转换为两位数显示
	hh = hh >= 10 ? hh : '0' + hh;
	mm = mm >= 10 ? mm : '0' + mm;
	ss = ss >= 10 ? ss : '0' + ss;
	//分别输出剩余多少小时/分钟/秒
	tt[0].innerHTML = hh;
	tt[1].innerHTML = mm;
	tt[2].innerHTML = ss;
}
//restTime();
setInterval(restTime, 1000);
////goods1实现多图无缝轮播效果////
var xx = ['img/g1.jpg', 'img/g2.jpg', 'img/g3.jpg', 'img/g4.jpg', 'img/g5.jpg', 'img/g6.jpg', 'img/g7.jpg', 'img/g8.jpg', 'img/g9.jpg', 'img/g10.jpg'];
var goods = [
	['goods1', 200],
	['goods2', 180],
	['goods3', 90],
	['goods4', 78],
	['goods5', 252],
	['goods6', 89],
	['goods7', 100],
	['goods8', 120],
	['goods9', 156],
	['goods10', 289]
];
//此元素有动画效果
var gds1Div = document.querySelector('.content>.goods1>.right>div');

function initGds1() {
	for(var i = 0; i < xx.length; i++) {
		var dv = document.createElement('div');
		dv.style.width = '330px';
		dv.style.height = '150px';
		dv.innerHTML = "<p>" + goods[i][0] + "<br>" + "$" + goods[i][1] + "</p>";
		//dv.innerHTML+="<p>"+"$"+goods[0][1]+"</p>";
		//dv.style.backgroundColor = 'grey';
		var img = document.createElement('img');
		img.src = xx[i];
		dv.appendChild(img);
		gds1Div.appendChild(dv);
	} //for
}
//加载所有轮播的商品
initGds1();
//实现手动位移式轮播效果
var btn = document.querySelectorAll(".content>.goods1>.right>button");
//存储轮播的次数,应该是大于等0
var fg = 0;
btn[0].onclick = function() {
	lunboLeft();
}
btn[1].onclick = function() {
	lunboRight();
}
//实现左轮播
function lunboLeft() {
	--fg;
	if(fg <= 0) {
		fg = 0;
	}
	dispArrow();//方法调用
	gds1Div.style.left = -fg * 990 + 'px';
}
//实现右轮播
function lunboRight() {
	++fg;
	if(fg >= 3) {
		fg = 3;
		}
	dispArrow();//方法调用
	gds1Div.style.left = -fg * 990 + 'px';
}
//隐藏按钮
var dv = document.querySelector(".content>.goods1>.right");
dv.onmousemove = function() {
	dispArrow();//方法调用
}
//多种情况显示按钮箭头
function dispArrow(){
	if(fg <= 0) {
		btn[0].style.display = 'none';
		btn[1].style.display = 'inline-block';
	} else if(fg > 0 && fg < 3) {
		btn[0].style.display = 'inline-block';
		btn[1].style.display = 'inline-block';
	} else {
		btn[0].style.display = 'inline-block';
		btn[1].style.display = 'none';
	}
}
dv.onmouseleave = function() {
	btn[0].style.display = 'none';
	btn[1].style.display = 'none';
}