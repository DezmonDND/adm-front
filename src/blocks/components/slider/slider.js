// Скрывать стрелки, если слайдов мало

function updateArrowsVisibility(slick, nextArrowSelector, prevArrowSelector) {
    const slideCount = slick.slideCount;
    const visibleSlides = slick.options.slidesToShow;
    const shouldHide = slideCount <= visibleSlides;

    $(nextArrowSelector).toggle(!shouldHide);
    $(prevArrowSelector).toggle(!shouldHide);
}

// Главная новость

$('.news-card-with-image__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: $('.news-card-with-image__dots'),
    adaptiveHeight: true,
    variableWidth: false,
});

// Главные новости

$(window)
    .on('resize', function (e) {
        const initLib = $('.library-slider').data('init-slider');

        if (window.innerWidth < 993) {
            if (initLib != 1) {
                $('.main-news__card-list')
                    .slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        responsive: [
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 3,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                },
                            },
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 1,
                                },
                            },
                        ],
                    })
                    .data({ 'init-slider': 1 });
                    
                $('.events__news')
                    .slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        responsive: [
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 3,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                },
                            },
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 1,
                                },
                            },
                        ],
                    })
                    .data({ 'init-slider': 1 });

                    $('.important-links__container')
                    .slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        responsive: [
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 3,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                },
                            },
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 1,
                                },
                            },
                        ],
                    })
                    .data({ 'init-slider': 1 });
            }
        } else {
            if (initLib == 1) {
                $('.library-slider').slick('unslick').data({ 'init-slider': 0 });
            }
        }
    })
    .trigger('resize');

$('.slider__main-news-next').on('click', function () {
    $('.main-news__card-list').slick('slickNext');
});
$('.slider__main-news-prev').on('click', function () {
    $('.main-news__card-list').slick('slickPrev');
});

// Анонсы и события

$('.slider__events-next').on('click', function () {
    $('.events__news').slick('slickNext');
});
$('.slider__events-prev').on('click', function () {
    $('.events__news').slick('slickPrev');
});

// Анонсы и события

$('.slider__important-links-next').on('click', function () {
    $('.important-links__container').slick('slickNext');
});
$('.slider__important-links-prev').on('click', function () {
    $('.important-links__container').slick('slickPrev');
});


// Помогите городу стать лучше

// $('.help-city__content').slick({
//     infinite: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//             },
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2,
//             },
//         },
//         {
//             breakpoint: 500,
//             settings: {
//                 slidesToShow: 1,
//             },
//         },
//     ],
// });

// $('.slider__help-city-next').on('click', function () {
//     $('.help-city__content').slick('slickNext');
// });
// $('.slider__help-city-prev').on('click', function () {
//     $('.help-city__content').slick('slickPrev');
// });

$('.help-city__content').on('init', function(event, slick) {
    updateArrowsVisibility(slick, '.slider__help-city-next' , '.slider__help-city-prev' );
}).on('breakpoint', function(event, slick) {
    updateArrowsVisibility(slick);
}).slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});

$('.slider__help-city-next').on('click', function() {
    $('.help-city__content').slick('slickNext');
});
$('.slider__help-city-prev').on('click', function() {
    $('.help-city__content').slick('slickPrev');
});

// Важная информация для жителей

$('.important-inf__container').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});

$('.slider__important-inf-next').on('click', function () {
    $('.important-inf__container').slick('slickNext');
});
$('.slider__important-inf-prev').on('click', function () {
    $('.important-inf__container').slick('slickPrev');
});

// Проекты Думы города

$('.dm-city-projects__card-list').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});

$('.slider__dm-city-projects-next').on('click', function () {
    $('.dm-city-projects__card-list').slick('slickNext');
});
$('.slider__dm-city-projects-prev').on('click', function () {
    $('.dm-city-projects__card-list').slick('slickPrev');
});

// С заботой о жителях

$('.people-care__card-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});

$('.slider__people-care-next').on('click', function () {
    $('.people-care__card-list').slick('slickNext');
});
$('.slider__people-care-prev').on('click', function () {
    $('.people-care__card-list').slick('slickPrev');
});

// Архив трансляций

$('.archive-dm__container').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});

$('.slider__archive-dm-next').on('click', function () {
    $('.archive-dm__container').slick('slickNext');
});
$('.slider__archive-dm-prev').on('click', function () {
    $('.archive-dm__container').slick('slickPrev');
});
