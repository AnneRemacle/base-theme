export default function (){
    (function ($) {
        var $window = $(window);
        var $buttonTop = $('.button-top');
        var scrollTimer;

        $(window).on('scroll', function () {
            if($(window).scrollTop() > 500){
                $buttonTop.addClass('show');
            }else{
                $buttonTop.removeClass('show');
            }
        })

        $buttonTop.on('click', function () {
            $('html, body').animate({
                scrollTop: 0,
            }, 400);
        });
    })(jQuery)
}
