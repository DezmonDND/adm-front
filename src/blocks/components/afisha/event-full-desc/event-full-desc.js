$(document).ready(function () {
    setTimeout(() => {
        $('#afisha-event__banner-list').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: true,
            variableWidth: false,
        });
    }, 3000);

    $('.slider__afisha-event-next').on('click', function () {
        $('#afisha-event__banner-list').slick('slickNext');
    });
    $('.slider__afisha-event-prev').on('click', function () {
        $('#afisha-event__banner-list').slick('slickPrev');
    });

    $('#afisha-event__banner-list').on('init', function (event, slick) {
        $('.slider__counter').text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });

    $('#afisha-event__banner-list').on('afterChange', function (event, slick, currentSlide) {
        $('.slider__counter').text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
});

function showBigImage() {
    const main = document.querySelector('main');
    // main.style.overflow = 'hidden';
    destroySlider('#afisha-event__banner-list');
    Fancybox.bind('[data-fancybox="afisha-event__banner-list"]', {

    });
    $( ".afisha-event__banner-list" ).fancybox( {
        onClose: function () {
            $( window ).trigger( '.afisha-event__banner-list' );
            $('#afisha-event__banner-list').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                adaptiveHeight: true,
                variableWidth: false,
            });
        }
    } );

    // $('#afisha-event__banner-list').magnificPopup({
    // 	delegate: 'a',
    // 	type: 'image',
    // 	tLoading: 'Loading image #%curr%...',
    // 	mainClass: 'mfp-img-mobile',
    // 	gallery: {
    // 		enabled: true,
    // 		navigateByImgClick: true,
    // 		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    // 	},
    // 	image: {
    // 		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    // 		titleSrc: function(item) {
    // 			return item.el.attr('title') + ' by Marsel Van Oosten';
    // 		}
    // 	}
    // });
    // destroySlider('#afisha-event__banner-list')

    // $('.afisha-event__banner-list').swipebox({
    //     hideBarsDelay: 0,
    //     initialIndexOnArray : 2,
    //     afterClose: function () {
    //         main.style.overflow = 'unset';
    //     },
    // });
    // $('#afisha-event__banner-list').click(function (e) {
    //     e.preventDefault();
    //     $.swipebox(
    //         [
    //             { href: '../img/banner.png', title: 'My Caption' },
    //             { href: '../img/banner_3.png', title: 'My Second Caption' },
    //         ],
    //         {
    //             hideBarsDelay: 0,
    //             afterClose: function () {
    //                 main.style.overflow = 'unset';
    //             },
    //             loopAtEnd: true
    //         },
    //     );
    // });
}
