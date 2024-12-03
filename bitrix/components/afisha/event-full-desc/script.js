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
