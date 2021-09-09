export default function() {
    if (document.querySelector( '.home-slider .content' )) {
        document.querySelector( '.home-slider .content' ).classList.add( 'invisible' );
    }
    if (document.querySelector( '.from-left' )) {
        document.querySelector( '.from-left' ).classList.add( 'invisible' );
    }
    if (document.querySelector( '.from-right' )) {
        document.querySelector( '.from-right' ).classList.add( 'invisible' );
    }
    if (document.querySelector( '.from-top' )) {
        document.querySelector( '.from-top' ).classList.add( 'invisible' );
    }
    if (document.querySelector( '.from-bottom' )) {
        document.querySelector( '.from-bottom' ).classList.add( 'invisible' );
    }

    inView('.blocktext-imagelarge .image-container').on('enter', function(el) {
        document.querySelector('.blocktext-imagelarge').classList.add("visible");
    });

    inView('.blocktext-imagelarge .content').on('enter', el => {
        el.classList.add("visible");
    });

    inView('.home-slider .content').on('enter', function(el) {
        el.classList.remove("invisible");
        el.classList.add("is-animate");
    });

    inView('.from-left').on('enter', el => {
        el.classList.remove("invisible");
        el.classList.add("fade-in-left");
    });

    inView('.from-right').on('enter', el => {
        el.classList.remove("invisible");
        el.classList.add("fade-in-right");
    });

    inView('.from-bottom').on('enter', el => {
        el.classList.remove("invisible");
        el.classList.add("fade-in-bottom");
    });

    inView('.from-top').on('enter', el => {
        el.classList.remove("invisible");
        el.classList.add("fade-in-top");
    });
}
