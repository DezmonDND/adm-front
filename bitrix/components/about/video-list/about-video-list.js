$(document).ready(function () {
    $('#about-video-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        variableWidth: false,
    });

    // $('.slider__afisha-event-next').on('click', function () {
    //     $('#about-video-list').slick('slickNext');
    // });
    // $('.slider__afisha-event-prev').on('click', function () {
    //     $('#about-video-list').slick('slickPrev');
    // });
});
