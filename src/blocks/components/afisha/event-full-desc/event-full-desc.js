$(document).ready(function () {
    $('.afisha-event__banner-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        variableWidth: false,
        init: function (event, slick) {
            updateSlideCount(slick);
        },
        beforeChange: function (event, slick, currentSlide, nextSlide) {
            updateSlideCount(slick);
        },
    });
});

$('.slider__afisha-event-next').on('click', function () {
    $('.afisha-event__banner-list').slick('slickNext');
});
$('.slider__afisha-event-prev').on('click', function () {
    $('.afisha-event__banner-list').slick('slickPrev');
});

function updateSlideCount(slick) {
    console.log("Slick object:", slick);
    const currentSlide = slick.slickCurrentSlide;
    const totalSlides = slick.slideCount;
    $('.afisha-event__comment').text(`${currentSlide + 1}/${totalSlides}`);
}
