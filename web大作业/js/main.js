////****轮播的实现 ******/////
var indexSilder = 0;
var loopManager ;
var im = document.getElementsByClassName("fadeDo");
///////////////时间的现实和出现
window.onload =function(){
	setInterval(function(){getTime()},1000);
}
function getTime(){
	var s ;
	var time = new Date();
	///alert(time.getFullYear()+"/"+(time.getMonth()+1)+"/"+time.getDate());
	var year = time.getFullYear();
	var day = time.getDate();
	var month = time.getMonth()+1;
	var hour = time.getHours();
	hour = TwoNumber(hour);
	var min = time.getMinutes();
	min = TwoNumber(min);
	var second = time.getSeconds();
	second = TwoNumber(second);	
	document.getElementById("showTime").innerHTML = year+"/"+month+"/" + day + "&nbsp;&nbsp;&nbsp;" + hour + ":" + min +":" + second ;
}
function TwoNumber(i){
	if(i<10){
		i = "0" + i;
	}
	return i;
}


/////////////////时间结束

/////事件处理
function loopGo(){
    loopManager = setInterval(function(){loop();}, 3000);
	setInterval(function(){getTime()},1000);
}
function stopLoop(){
    clearInterval(loopManager);
    pausedAnimation();
}
function startLoop(){
    loopManager = setInterval(function(){loop();},3000);
    runAnimation();
}
function onClickLoop(i){
    indexSilder = i;
    loop();////调用一次loop
}

////动画效果的停止和运行
function pausedAnimation(){
    for(var i = 0;i<im.length;i++){
        /////停止动画效果
        document.getElementById("a").style.opacity = "1";
        im[i].style.animationPlayState = "paused";
        im[i].style.WebKitAnimationPlayState = "paused";
    }
}
function runAnimation(){
    for(var i= 0;i<im.length;i++){
        im[i].style.animationPlayState = "running";
        im[i].style.WebKitAnimationPalyState = "running";
    }
}

/////循环
function loop(){
    var pot = document.getElementsByClassName("pot")[0];
    var pt = pot.getElementsByTagName("div");
    if(indexSilder>2){
        indexSilder = 0;
    }
    indexSilder++;
    for(var i = 0;i<3;i++){
        im[i].style.display = "none";
        pt[i].className = pt[i].className.replace("potActive","");
    }
    im[indexSilder-1].style.display = "block";
    pt[indexSilder-1].className += "potActive";
}