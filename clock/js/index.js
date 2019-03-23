window.onload = function() {
    var aImg = document.getElementById('clock').getElementsByTagName('img');
    var now = new Date();
    var prevtime = toZero(now.getHours()) + toZero(now.getMinutes()) + toZero(now.getSeconds());
    var nextTime = "";
    var arr = [];
    var timer = null;

    for(var i = 0; i < aImg.length; i++) {
        aImg[i].src = "images/" + prevtime.charAt(i) + ".png";
    }

    setInterval(toChange, 1000);

    function toChange() {
        var date = new Date();
        nextTime = toZero(date.getHours()) + toZero(date.getMinutes()) + toZero(date.getSeconds());
        toCom(prevtime, nextTime);
        prevtime = nextTime;
    }

    function toCom(str1, str2) {
        arr = [];
        for(var i = 0; i < str1.length; i++) {
            if(str1.charAt(i) != str2.charAt(i)) {
                arr.push(i);
            }
        }
        startMove();
    }

    function startMove() {
        var speed = -4;
        timer = setInterval(function() {
            for(var i = 0; i < arr.length; i++) {
                if(aImg[arr[i]].offsetHeight == 0) {
                    speed = 4;
                    aImg[arr[i]].src = "images/" + nextTime.charAt(arr[i]) + ".png";
                }
                //改变数字高度时默认向底线减少，所以手动改变数字的top向上移动
                aImg[arr[i]].offsetHeight = aImg[arr[i]].offsetHeight + speed + "px";
                aImg[arr[i]].style.top = aImg[arr[i]].offsetHeight / 2 - 18 + "px";
                if(aImg[arr[i]].offsetHeight == 36) {
                    clearInterval(timer);
                }
            }
        }, 10);
    }

    function toZero(num) {
        if(num < 10) {
            return num = "0" + num;
        } else {
            return num = num + "";
        }
    }
};