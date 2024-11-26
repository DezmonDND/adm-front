$('.afisha-event__banner-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    variableWidth: false,
});

$('.slider__afisha-event-next').on('click', function () {
    $('.afisha-event__banner-list').slick('slickNext');
});
$('.slider__afisha-event-prev').on('click', function () {
    $('.afisha-event__banner-list').slick('slickPrev');
});