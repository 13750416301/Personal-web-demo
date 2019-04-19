window.onload = function() {
    var items = document.getElementById("nav2-main").getElementsByTagName("li");
    var itemParent = document.getElementById("nav2-main").getElementsByTagName("ul")[0];
    var body = document.getElementsByTagName("body")[0];
    var string = "";
    var timer = null;
    //鼠标在项目栏项目上停留时的函数。
    
    for(var i = 0; i < 16; i++) {
        fun1(items[i], i);   
    }
    

    //fun1(items[0]);

    function fun1(item, index) {
        var itemDetail = document.createElement("div");
        itemDetail.style.position = "absolute";
        itemDetail.style.width = "440px";
        itemDetail.style.height = "240px";
        if(index >= 11) {
            itemDetail.style.left = item.offsetLeft - (440 - item.offsetWidth)  + "px";
        } else {
            itemDetail.style.left = item.offsetLeft + "px";
        }
        
        itemDetail.style.top = item.offsetTop + item.offsetHeight + "px";
        itemDetail.style.backgroundColor = "#fff";
        itemDetail.style.padding = "5px 5px";
        itemDetail.style.boxSizing = "border-box";
        itemDetail.style.display = "none";
        itemParent.appendChild(itemDetail);
        
        var itemList = document.createElement("ul");
        /*
            itemList为ul列表
            itemListli为li
            itemlistA为a
            itemDetail为整个弹框盒子
        */
        for(var i = 0; i < 10; i++) {
            var itemListLi = document.createElement("li");
            var itemListA = document.createElement("a");
            itemListLi.style.width = "180px";
            itemListLi.style.height = "38px";
            itemListLi.style.cssFloat = "left";
            itemListLi.style.lineHeight = "38px";
            if(i % 2 == 0) {
                itemListLi.style.borderRight = "1px solid #666";
            }
            
            if(itemData[index][i] == null) {
                itemData[index][i] == "";
            }
            /*
            if(typeof(itemData[index][i]) == "undefined") {
                itemData[index][i] == "";
            }
            */
            itemListA.innerHTML = itemData[index][i];
            itemListA.setAttribute("href", "#");
            itemListA.style.color = "#666";
            itemListA.onmouseover = function() {
                this.style.color = "#2e9057";
            }
            itemListA.onmouseout = function() {
                this.style.color = "#666";
            }
            itemListLi.appendChild(itemListA);
            itemList.appendChild(itemListLi); 
            
        }
        var itemMore = document.createElement("a");
        itemMore.innerHTML = "查看更多>";
        itemMore.setAttribute("href", "#");
        itemMore.style.color = "#286a46";
        itemMore.style.cssFloat = "right";
        itemMore.style.height = "38px";
        itemMore.style.lineHeight = "38px";
        
        itemDetail.appendChild(itemList);
        itemDetail.appendChild(itemMore);

        item.onmouseout = function() {
            this.style.backgroundColor = "#ebebeb";
            itemDetail.style.display = "none";
        }
        item.onmouseover = function() {
            item.style.backgroundColor = "#fff";
            itemDetail.style.display = "block";
            
        }
        itemDetail.onmouseover = function() {
            this.style.display = "block";
            item.style.backgroundColor = "#fff";
        }
        
        itemDetail.onmouseout = function() {
            this.style.display = "none";
            item.style.backgroundColor = "#ebebeb";
        }
        

        
    }
    
    
    
    
}
