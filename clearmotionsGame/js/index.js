$(function() {
    var aBut = $('top').getElementsByTagName('input')[0];
    var aSpan = $('bom').getElementsByTagName('span');
    var aDiv = $('bom').getElementsByTagName('div')[1];
    var aImg = $('bom').getElementsByTagName('img')[0];
    var arrImg = ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png','img/6.png','img/7.png','img/8.png','img/9.png','img/10.png','img/11.png'];
    var sdNum = 1;            //图片运行速度
    var onOff = true;         //一个开关
    for(var i = 0; i < aSpan.length; i++) {
        aSpan[i].num = 0;         //把得分和失分都归为0
    }

    aBut.onclick = function() {
        this.value = '游戏进行中...';
        this.disable = true;     //使按钮无法再次点击
        var width = parseInt(getStyle(aDiv, 'width'));  //获取图片活动的宽度
        var height = parseInt(getStyle(aDiv, 'height')) - 24;  //获取图片活动的高度，并且减去自身的高度
        aImg.style.display = 'block';  //让qq表情显示出来
        aotu();
        function aotu() {
            onoff = true;         //如果为true就表示QQ表情落到最下面时会获得失分
            var n = Math.round(Math.random() * (arrImg.length - 1));  //随机显示数组中的QQ表情
            var x = Math.round(Math.random() * (width - 24));         //随机获得img在屏幕的位置
            aImg.src = arrImg[n];      //随机显示显示表情
            aImg.style.left = x + 'px';   //让img随机显示在屏幕的位置
            doMove(aImg, 'top', sdNum, height, function() {
                
            })

        }
    }

})