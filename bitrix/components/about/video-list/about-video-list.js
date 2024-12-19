$(document).ready(function () {
    $('#about-video-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        variableWidth: false,
    });

    const slides = document.querySelectorAll('.slick-slide');
    if (slides) {
        slides.forEach((slide) => {
            const video = slide.querySelector('video');
            const source = slide.querySelector('source');
            if (slide.getAttribute('id') === '') {
                slide.removeAttribute('id');

                if (video) {
                    video.removeAttribute('id');
                    source.removeAttribute('id');
                } 
            }
        });
    }

    // $('.slider__afisha-event-next').on('click', function () {
    //     $('#about-video-list').slick('slickNext');
    // });
    // $('.slider__afisha-event-prev').on('click', function () {
    //     $('#about-video-list').slick('slickPrev');
    // });
});
