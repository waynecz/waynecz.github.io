var inIndex = function() {
    var url = window.location.href,
        winHeight = $(window).height(),
        lock = false;
    if (url == "http://waynecz.github.io/" || url == "http://localhost:4000/") {
        lock = true;
    };
    return lock;
};

var t_img; // 定时器
var isLoad = true; // 控制变量

// 判断图片加载状况，加载完成后回调
function bannerAnimation() {
    $(".load-wrap").fadeOut(500).promise().done(function() {
            $('.welcome').addClass('index');
            $('#container').addClass('rollDown');
            $('#word').find('span').addClass('zoomIn');
    });
}

// 判断图片加载的函数
function isImgLoad(callback) {
    if ($('#shadow').height === 0) {
        // 找到为0就将isLoad设为false
        isLoad = false;
        return false;
    }
    // 为true，没有发现为0的。加载完毕
    if (isLoad) {
        clearTimeout(t_img); // 清除定时器
        // 回调函数
        callback();
        // 为false，因为找到了没有加载完成的图，将调用定时器递归
    } else {
        isLoad = true;
        t_img = setTimeout(function() {
            isImgLoad(callback); // 递归扫描
        }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
    }
}
function index() {isImgLoad(bannerAnimation);}
(function($) {
    if (inIndex()) {
        setTimeout(index, 2000)
    } else {
        $(".load-wrap").fadeOut(300);
        $('#main, #footer').css({
            'opacity': '1',
            'transform': 'translate3d(0,0,0)'
        })
    }
    
    $('.article-entry').each(function(i) {
        $(this).find('img').each(function() {
            if ($(this).parent().hasClass('fancybox')) return;
            var alt = this.alt;
            if (alt) $(this).after('<span class="caption">' + alt + '</span>');
            $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
        });
        $(this).find('.fancybox').each(function() {
            $(this).attr('rel', 'article' + i);
        });
    });
    if ($.fancybox) {
        $('.fancybox').fancybox();
    }
    // Mobile nav
    $('#main-nav-toggle').click(function() {
        $('#header').toggleClass('mobile-on');
    });
})(jQuery);

$(function() {

    $(window).scroll(function() {
        var words = $('#word').find('span'),
            top = $(window).scrollTop();
        $.each(words, function(i, e) {
            var ratio = $(e).attr('data-ratio');
            $(e).css('transform', 'translate3d(0,' + top * ratio + 'px,0)');
            
        })
        $('.wordWrap').css('transform', 'translate3d(0,' + top * -0.3 + 'px,0)');
        if (inIndex()) {
            if (top >= 290) {
                $('#main, #footer').addClass('topIn');
            };
        }
    })
})