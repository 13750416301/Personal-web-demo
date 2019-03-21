window.onload = function() {

    var oUl = document.getElementById("header");
    var oCon = document.getElementById("container");
    var oDiv = document.getElementById("listContent");
    var oTip = document.getElementById("tips");
    var oTips = document.getElementById("tipsContent");

    for(var i = 0; i < data.length; i++) {
        oUl.innerHTML += "<li>" + data[i].name + "</li>";
    }

    var lis = oUl.getElementsByTagName("li");
    lis[0].className = "sec";

    for(var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function() {
            for(var j = 0; j < lis.length; j++) {
                lis[j].className = "";
                oDiv.innerHTML = "";
                oTips.innerHTML = "";
            }
            this.className = "sec";
            fun(data[this.index]);
        }
    }
    fun(data[0]);

    function fun(da) {
        for(var i = 0; i < da.list.length; i++) {
            var ul = document.createElement("ul");
            var li = document.createElement("li");
            var a = document.createElement("a");
            
            a.innerHTML = da.list[i].title;
            a.href = "javascript:";
            li.appendChild(a);
            ul.appendChild(li);
            oDiv.appendChild(ul);
            a.index = i;
            var h4 = document.createElement("h4");
            var list1 = document.createElement("li");
            list1.className = "col";
            var list2 = document.createElement("li");
            list2.className = "col";
            var list3 = document.createElement("li");
            list3.className = "col";
            var list4 = document.createElement("li");
            list4.className = "col";
            var list5 = document.createElement("li");
            list5.className = "col";
            var list6 = document.createElement("li");
            list6.className = "col";

            a.onmouseover = function() {
                oTip.style.display = "block";
                oTip.style.left = oCon.offsetLeft + this.offsetWidth + 10 + "px";
                oTip.style.top = this.offsetTop + this.scrollTop + "px";
                h4.innerHTML = da.list[this.index].company;
                list1.innerHTML = da.list[this.index].recruitingNumbers;
                list2.innerHTML = da.list[this.index].workingLocation;
                list3.innerHTML = da.list[this.index].workExperience;
                list4.innerHTML = da.list[this.index].education;
                list5.innerHTML = da.list[this.index].wage;
                list6.innerHTML = da.list[this.index].addDate;
                oTips.appendChild(h4);
                oTips.appendChild(list1);
                oTips.appendChild(list2);
                oTips.appendChild(list3);
                oTips.appendChild(list4);
                oTips.appendChild(list5);
                oTips.appendChild(list6);
            }

            li.onmouseout = function() {
                oTip.style.display = "none";
            }
        }
    }
}