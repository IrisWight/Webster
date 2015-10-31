$(function () {

//      PRELOADER

    $(window).on('load', function () {
        var $pre = $('.preloader'),
            $img   = $pre.find('.preloader__img');
        $img.fadeOut();
        $pre.delay(350).fadeOut('slow');
    });


//     scroll-button

    $('.scroll-button').on('click', function (e) {
        e.preventDefault();
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 1000);
        return false;
    });


    //   BLOCK-move

    var timeout;
    $(window).scroll(function(){
        clearTimeout(timeout);

        timeout = setTimeout(function(){
            $('.section-content').each(function(){
                var el = $(this);
                var wh = $(window).height(),
                    scrollTop = $(window).scrollTop(),
                    offsetTop = el.offset().top;

                if ( (scrollTop + wh) >= offsetTop) {
                    el.addClass('animated-border')
                    el.find('p')
                        .css({visibility:"visible"})
                        .addClass('animated fadeIn');
                    el.find('h3')
                        .css({visibility:"visible"})
                        .addClass('animated fadeIn');
                    el.find('i')
                        .css({visibility:"visible"})
                        .addClass('animated fadeIn');
                }
            });

        }, 200);

        timeout = setTimeout(function(){

            $('.section-list_item').each(function(){
                var el = $(this);
                var wh = $(window).height(),
                    scrollTop = $(window).scrollTop(),
                    offsetTop = el.offset().top;

                if ( (scrollTop + wh) >= offsetTop) {
                    el.find('.section-list__logo')
                        .addClass('passed-item')
                }
            })

        }, 400);

    });


});