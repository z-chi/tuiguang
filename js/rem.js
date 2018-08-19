
// author: 赵驰
// time: 2018年8月17日
// 作用: 用于rem的适配

(function(doc, win){
    function rem(design) {
        // 获取根元素
        var html = doc.documentElement;
        console.log('html:'+html);
        // 获取设备宽度
        var dev_width = html.getBoundingClientRect().width;
        console.log('dev_width:'+dev_width);
        // 判断设计设备宽度是否大于设计图宽度
        // 大于则将根元素宽度设为设计图宽度
        if(dev_width > design) {
            console.log('dev_width > design');
            dev_width = design;
            console.log('将dev_width改为：'+dev_width);
        }
        // 否则将跟元素的宽度赋值为他们比值的100倍
        var width = (dev_width/ design) * 100;
        html.style.fontSize = width +'px';
    }
    var design = 750; //设计图宽度
    // 设置根元素的fontSize值
    rem(design);
    // 检测屏幕变化：横竖屏切换则重新给根元素fontsize进行赋值
    window.addEventListener('resize', function() {
        rem(design);
    }, false);
})(document, window);