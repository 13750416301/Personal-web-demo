window.onload = function() {
    var oList = document.getElementById("list").getElementsByTagName("li")[0];
    var oLis = document.getElementById("lis");
    var li = oLis.getElementsByTagName("li");
    var oTab = document.getElementById("tab");
    var lis = oTab.getElementsByTagName("li");
    var oDiv = oTab.getElementsByTagName("div");
    var oInp = oDiv[0].getElementsByTagName("input");
    var aInp = oDiv[1].getElementsByTagName("input");
    var oP = document.getElementsByTagName("p")[0];

    oList.onclick = function() {
        oLis.style.display = "block";
    }

    for(var i = 0; i < li.length; i++) {
        change(li);
        change(lis);
    }

    //查找内容
    var text = oP.innerHTML;
    oInp[1].onclick = function() {
        var str = oInp[0].value;
        //判断
        if(oP.innerHTML.indexOf(str) == -1) {
            alert("未找到您要找的文字！");
        } else if(str == "") {
            alert("请输入文字！");
        }
        oP.innerHTML = text;
        oP.innerHTML = oP.innerHTML.split(str).join("<span>" + str + "</span>");
    }
    //替换内容
    aInp[2].onclick = function() {
        var str = aInp[0].value;
        var newStr = aInp[1].value;
        //判断
        if(oP.innerHTML.indexOf(str) == -1) {
            alert("未找到您要找的文字！");
        } else if(str == "") {
            alert("请输入文字！");
            return;
        }
        oP.innerHTML = text;
        oP.innerHTML = oP.innerHTML.split(str).join("<span>" + newStr + "</span>");
    }

    //切换选项卡
    function change(obj) {
        obj[i].index = i;
        obj[i].onclick = function() {
            oP.innerHTML = text;
            oTab.style.display = "block";
            for(var j = 0; j < lis.length; j++) {
                lis[j].className = "";
                oDiv[j].style.display = "none";
            }
            lis[this.index].className = "selected";
            oDiv[this.index].style.display = "block";
        }
    }
}