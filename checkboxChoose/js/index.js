window.onload = function() {
    var checkAll = document.getElementById("checkAll");
    var checkReverse = document.getElementById("checkReverse");
    var input = document.getElementsByTagName("input");
    var label = document.getElementsByTagName("label")[0];

    function isCheckAll() {
        for(var i = 1, n = 0; i < input.length; i++) {
            input[i].checked && n++;
        }
        input[0].checked = n == input.length - 1;   //若全选，则input[0].checked为1，否则为0
        label.innerHTML = input[0].checked ? "全不选" : "全选";
    }

    //全选/全不选
    checkAll.onclick = function() {
        for(var i = 1; i < input.length; i++) {
            input[i].checked = this.checked;
        }
        isCheckAll();
    }
    //反选
    checkReverse.onclick = function() {
        for(var i = 1; i < input.length; i++) {
            input[i].checked = !input[i].checked;
        }
        isCheckAll();
    }

    //根据复选个数更新全选框状态
    for(var i = 1; i < input.length; i++) {
        input[i].onclick = function() {
            isCheckAll();
        }
    }
}