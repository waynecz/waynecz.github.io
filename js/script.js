var inIndex = function() {
        var url = window.location.href,
            winHeight = $(window).height(),
            lock = 0;
        if (url == "http://waynecz.github.io/" || url == "http://localhost:4000/") {
            lock = 1;
        };
        return lock;
    };
$(window).load(function() {
    // Animate loader off screen
    $(".load-wrap").fadeOut("slow").promise().done(function(){
        setTimeout(function(){
            if (inIndex()) {
                $('.welcome').addClass('index');
                $('#container').addClass('rollDown').delay(900);
                $('#word').find('span').addClass('zoomIn');
            } else {
                $('#main, #footer').addClass('topIn').css({
                    'opacity': '1',
                    'transform': 'translate3d(0,0,0)'
                })
            }
        }, 1000);
    });
});
(function($) {
    // Caption
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
                $('#main, #footer').addClass('topIn').css({
                    'opacity': '1',
                    'transform': 'translate3d(0,0,0)'
                })
            };
        }
    })
})






