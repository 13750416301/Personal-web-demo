window.onload = function() {
    var items = document.getElementById("nav2-main").getElementsByTagName("li");
    var itemParent = document.getElementById("nav2-main").getElementsByTagName("ul")[0];
    var body = document.getElementsByTagName("body")[0];
    var imgList = document.getElementById("scroll-left-bottom").getElementsByTagName("img"); //滚动图列表
    var scrollImg = document.getElementById("scroll-main");  //轮播图的容器
    var scaleA = document.getElementById("today-detail").getElementsByTagName("a");  //今日特惠列表
    var scaleImg = document.getElementById("today-detail").getElementsByTagName("img");  //缩放图
    var string = "";
    var timer = null;
    
    
    //鼠标在项目栏项目上停留时的函数。
    for(var i = 0; i < 16; i++) {
        fun1(items[i], i);   
    }
    //fun1(items[0]);

    //右侧列表的显示函数
    fun2();

    //左侧滚动图片的函数
    for(var i = 0; i < imgList.length; i++) {
        fun3(imgList, i);
    }

    //图片缩放功能
    for(var i = 0; i < scaleA.length; i++) {
        fun4(scaleA[i], i);
    }
    
    

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

    //右侧列表的函数
    function fun2() {
        var titleLi = document.getElementById("rightListTitle").getElementsByTagName("li");
        var rightList1 = document.getElementById("rightList1");
        var rightList2 = document.getElementById("rightList2");
        
        titleLi[0].onmouseover = function() {
            this.style.borderBottom = "4px solid #286a46";
            this.style.color = "#fff";
            titleLi[1].style.borderBottom = "none";
            titleLi[1].style.color = "#888";
            rightList1.style.display = "block";
            rightList2.style.display = "none";
        }

        titleLi[1].onmouseover = function() {
            this.style.borderBottom = "4px solid #286a46";
            this.style.color = "#fff";
            titleLi[0].style.borderBottom = "none";
            titleLi[0].style.color = "#888";
            rightList1.style.display = "none";
            rightList2.style.display = "block";
        }
    }

    function fun3(imgItems, index) {
        var scrollLabel = document.getElementById("scroll-label");
        var scrollH1 = document.getElementById("scroll-left-text").getElementsByTagName("h1")[0];
        var scrollP = document.getElementById("scroll-left-text").getElementsByTagName("p")[0];
        for(var i = 0; i < imgItems.length; i++) {
            if(i == index) {
                imgItems[i].onmouseover = function() {
                    this.parentNode.style.borderColor = "#286a46";
                    scrollImg.style.backgroundImage = "url('images/scroll/"+ (index + 1).toString() + ".jpeg')";
                    scrollLabel.innerHTML = leftScrollText[index].label;
                    scrollLabel.style.backgroundColor = leftScrollText[index].labelColor;
                    scrollH1.innerHTML = leftScrollText[index].h1;
                    scrollP.innerHTML = leftScrollText[index].p;
                    for(var j = 0; j < imgItems.length; j++) {
                        if(j != index) {
                            imgItems[j].parentNode.style.borderColor = "#999";
                        }
                    }
                }
            }
        }
        
    }
    
    function fun4(obj, index) {
        obj.onmouseover = function() {
            scaleImg[index].style.transform = "scale(1.25)";
        }
        obj.onmouseout = function() {
            scaleImg[index].style.transform = "scale(1)";
        }
    }
    
    
}
