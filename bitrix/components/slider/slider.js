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

// Помогите городу стать лучше

$('.help-city__content').slick({
    infinite: true,
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

$('.slider__help-city-next').on('click', function () {
    $('.help-city__content').slick('slickNext');
});
$('.slider__help-city-prev').on('click', function () {
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
