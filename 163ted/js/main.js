window.onload = function() {
    var items = document.getElementById("nav2-main").getElementsByTagName("li");
    var body = document.getElementsByTagName("body")[0];
    var string = "";
    fun();

    function fun() {
        items[0].onmouseover = function() {
            items[0].style.backgroundColor = "#fff";
            var itemDetail = document.createElement("div");
            itemDetail.style.width = "587px";
            itemDetail.style.height = "279px";
            itemDetail.style.left = "0px";
            itemDetail.style.top = "0px";
            itemDetail.style.backgroundColor = "#000";
            body.appendChild(itemDetail);
        }
    
        items[0].onmouseout = function() {
            items[0].style.backgroundColor = "#ebebeb";
        }
    }
    
}