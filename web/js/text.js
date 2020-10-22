///////js的做法  通过id可以进行一个简化 jquery更为简单 
function showText(i){

    var bar = document.getElementsByClassName("rightOne");///点击显示
    var tex = document.getElementsByClassName("rightOneText");////文本内容
    var fl = document.getElementById("closeDoJs");
    var flag = document.getElementsByClassName("isNo");
    ////alert(fl.classList);
    isNo = tex[i].style.display;
    /////alert(isNo);
    if(isNo=="" || isNo != "none"){
        bar[i].className = bar[i].className.replace("rightOne","rightTwo");
        tex[i].style.display = "none";
    }else{
        fl.classList.remove("rightTwo");
        fl.classList.add("rightOne");
        tex[i].style.display = "block";
    }
    /////alert(flag[i].className);
    
}

