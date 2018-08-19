
// swiper
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
});

// 弹窗
(function() {
    var serviceBtn = $class('service-btn')[0];
        serviceBtn.onclick = function() {
            $class('mask')[0].style.display = 'block';
            document.documentElement.style.height = dev_height + 'px';
            document.documentElement.style.overflow = 'hidden';
            document.body.style.height = dev_height + 'px';
            document.body.style.overflow = 'hidden';
        }

    var serviceBox = $class('service-box')[0];
    serviceBox.onclick = function(e) {
        e.stopPropagation();
    }
    var mask = $class('mask')[0];
    mask.onclick = function() {
        document.documentElement.style.height = '100%';
        document.documentElement.style.overflow = 'visible';
        document.body.style.height = '100%';
        document.body.style.overflow = 'visible';
        this.style.display = 'none';
    }
})();

// 免费下载
(function() {
    // 将download的点击事件代理给swiper-contaioner进行处理
    var swiper_container = $class('swiper-container')[0];
    swiper_container.onclick = function(e) {
        console.log(e.target);
        if(e.target.className == 'download') {
            var download = e.target;
            download.style.borderColor = '#ccc';
            setTimeout(function() {
                var url = window.location.href;
                url = url.slice(0, url.lastIndexOf('/'));
                window.location.href = url+'/guide.html';
            }, 500);
        }
    }
})();

// 