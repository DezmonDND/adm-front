$(document).ready(function () {
    const slidesContainer = document.getElementById('afisha-event__banner-list');

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

    setTimeout(() => {
        if (slidesContainer) {
            const slides = slidesContainer.querySelectorAll('a');

            slides.forEach((slide) => {
                slide.style.display = 'block';
            });
        }
    }, 3100);
    
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

    const selector = '.slick-slide:not(.slick-cloned)';

    $('[data-fancybox="afisha-event__banner-list"]').fancybox({
        selector: selector,
        backFocus: false,
        loop: true,
    });
});
