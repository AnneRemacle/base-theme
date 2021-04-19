export default function() {
    (function($) {
        $( '.home-slider .content' ).addClass( 'invisible' );
        $( '.from-left' ).addClass( 'invisible' );
        $( '.from-right' ).addClass( 'invisible' );
        $( '.from-bottom' ).addClass( 'invisible' );
        $( '.from-top' ).addClass( 'invisible' );
        // $( '.slider-textimage .content' ).addClass( 'invisible' );
        // $( '.slider-textimage .image-container' ).addClass( 'invisible' );

        $(document).ready(function(){
            // inView('.slider-textimage .content').on('enter', function(el) {
            //     $(el).removeClass("invisible");
            //     $(el).addClass("is-animate");
            // });
            //
            // inView('.slider-textimage .image-container').on('enter', function(el) {
            //     $(el).removeClass("invisible");
            //     $(el).addClass("is-animate");
            // });

            inView('.home-slider .content').on('enter', function(el) {
                $(el).removeClass("invisible");
                $(el).addClass("is-animate");
            });

            inView('.from-left').on('enter', function(el) {
                $(el).removeClass("invisible");
                $(el).addClass("fade-in-left");
            });

            inView('.from-right').on('enter', function(el) {
                $(el).removeClass("invisible");
                $(el).addClass("fade-in-right");
            });

            inView('.from-bottom').on('enter', function(el) {
                $(el).removeClass("invisible");
                $(el).addClass("fade-in-bottom");
            });

            inView('.from-top').on('enter', function(el) {
                $(el).removeClass("invisible");
                $(el).addClass("fade-in-top");
            });

            var steps = $( '.step' );

            $(window).on( 'scroll', function() {
                if ($('body').hasClass("page-template-about")) {
                    var topblock = $('.steps-container').offset().top - 600;
                    var scroll = $(window).scrollTop();
                    var maxscroll = $('.steps-container').innerHeight();
                    var percent = (scroll - topblock) / maxscroll * 100;
                    var top = percent+'%';

                    if( scroll >= topblock && scroll <= maxscroll ) {
                        inView.offset(300);
                    }
                }
            } );
    		inView('.step').on('enter', function(el) {
    			$(el).addClass("active")
    		}).on('exit', function(el) {
    			$(el).removeClass('active')
    		});
        })
    })(jQuery);

}
