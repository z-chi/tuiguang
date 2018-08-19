// author: 赵驰
// time: 2018年8月17日
// 作用: 用于整屏的适配

    // 自定义获取元素函数
    function $id(id) {
        return document.getElementById(id);
    }

    function $class(className, obj) {
        if(obj) {
            return obj.getElementsByClassName(className);
        }
        else {
            return document.getElementsByClassName(className);
        }
    }

    function $tag(tag, obj) {
        if(obj) {
            return obj.getElementsByTagName(tag);
        }
        else {
            return document.getElementsByTagName(tag);
        }
    }  

    function $changeStyle(obj, attr, val) {
        obj.style[attr] = (val/ design) * dev_height + 'px';
    }
    // 工作区窗口的高度
    var dev_height = window.innerHeight;
    console.log('dev_height: ' + dev_height);
    //整个设计图height：1273px;  
    var design = 1273;
    
    // 顶部文本区基本样式
    (function(dev_height, design) {
        var top = $class('top');
        for(item of top) {
            $changeStyle($tag('p', item)[0], 'lineHeight', 48);
            $changeStyle($tag('p', item)[1], 'lineHeight', 28);
            $changeStyle($tag('p', item)[1], 'marginTop', 30);
        }
        
        // center
        var center = $class('center');
        for(item of center) {
            $changeStyle(item, 'marginTop', 60);
            $changeStyle(item, 'marginBottom', 54);
            $changeStyle(item, 'height', 698);
        }

        // foot 
        for(item of $class('foot')) {
            $changeStyle(item, 'paddingBottom', 192);
        }

        // download
        var download = $class('download');
        for(item of download) {
            $changeStyle(item, 'lineHeight', 80);
        }

        // mask
        var mask = $class('mask')[0];
        var serviceBox = $class('service-box')[0];
        var ps = $tag('p', mask);
        mask.style.height = dev_height + 'px';
        $changeStyle(serviceBox, 'top', 324);
        $changeStyle($class('service-bg')[0], 'height', 157);
        $changeStyle($tag('div', serviceBox)[1], 'paddingTop', 42);
        $changeStyle($tag('div', serviceBox)[1], 'paddingBottom', 42);

        $changeStyle(ps[0], 'lineHeight', 36);
        $changeStyle(ps[1], 'lineHeight', 22);
        $changeStyle(ps[1], 'marginTop', 42);
        $changeStyle(ps[2], 'lineHeight', 22);
        $changeStyle(ps[2], 'marginTop', 26);
    })(dev_height, design);
    
    // page1
    (function(dev_height, design) { 
        var top = $class('top')[0];
        $changeStyle(top, 'paddingTop', 400);

        // logo
        var logo = $tag('h2')[0];
        $changeStyle(logo, 'height', 220);
        $changeStyle(logo, 'top', 180);

        // 顶部文本区
        var top_text = $tag('div', top)[0];
        $changeStyle(top_text, 'paddingBottom', 130);

        // t_city 
        var t_city = $tag('p', top)[0];
        $changeStyle(t_city, 'marginTop', 38);
        
        // bottom
        var bottom = $class('bottom')[0];
        var meet = $tag('p', bottom)[0];
        $changeStyle(meet, 'lineHeight', 50);
        $changeStyle(meet, 'marginTop', 156);

        // wait you
        var wait_you = $tag('p', bottom)[1];
        $changeStyle(wait_you, 'lineHeight', 26);
        $changeStyle(wait_you, 'marginTop', 20);

        // botom 的 foot
        var foot = $tag('div', bottom)[1];
        $changeStyle(foot, 'marginTop', 82);

    })(dev_height, design);

    // page2
    (function(dev_height, design) {
        var page2 = $class('page2')[0];

        var top = $class('top', page2)[0];
        $changeStyle(top, 'paddingTop', 90);
    })(dev_height, design);

    // page3 
    (function(dev_height, design) {
        var page3 = $class('page3')[0];
        
        var top = $class('top', page3)[0];
        $changeStyle(top, 'paddingTop', 90);
    })(dev_height, design);


