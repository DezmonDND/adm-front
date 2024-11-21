// Скрывать стрелки, если слайдов мало

function updateArrowsVisibility(slick, nextArrowSelector, prevArrowSelector) {
    const slideCount = slick.slideCount;
    const visibleSlides = slick.options.slidesToShow;
    const shouldHide = slideCount <= visibleSlides;

    $(nextArrowSelector).toggle(!shouldHide);
    $(prevArrowSelector).toggle(!shouldHide);
}

// Инициализировать слайдер

function initSlider(selector, nextArrow, prevArrow, options) {
    $(selector)
        .on('init', function (event, slick) {
            updateArrowsVisibility(slick, nextArrow, prevArrow);
        })
        .on('breakpoint', function (event, slick) {
            updateArrowsVisibility(slick, nextArrow, prevArrow);
        })
        .slick(options);

    $(nextArrow).on('click', function () {
        $(selector).slick('slickNext');
    });
    $(prevArrow).on('click', function () {
        $(selector).slick('slickPrev');
    });
}

// Главная новость

$('.news-card-with-image__list').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: $('.news-card-with-image__dots'),
    adaptiveHeight: true,
    variableWidth: false,
});

// Слайдеры для всех разрешений

const sliders = [
    // Главные новости
    {
        selector: '.main-news__card-list',
        nextArrow: '.slider__main-news-next',
        prevArrow: '.slider__main-news-prev',
        options: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 500, settings: { slidesToShow: 1 } },
            ],
        },
    },
    // Анонсы и события
    {
        selector: '.events__news',
        nextArrow: '.slider__events-next',
        prevArrow: '.slider__events-prev',
        options: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 500, settings: { slidesToShow: 1 } },
            ],
        },
    },
    // Самое важное
    {
        selector: '.important-links__container',
        nextArrow: '.slider__important-links-next',
        prevArrow: '.slider__important-links-prev',
        options: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 500, settings: { slidesToShow: 1 } },
            ],
        },
    },
    // Помогите городу стать лучше
    {
        selector: '.help-city__content',
        nextArrow: '.slider__help-city-next',
        prevArrow: '.slider__help-city-prev',
        options: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                { breakpoint: 850, settings: { slidesToShow: 2 } },
                { breakpoint: 500, settings: { slidesToShow: 1 } },
            ],
        },
    },
    // Важная информация для жителей
    {
        selector: '.important-inf__container',
        nextArrow: '.slider__important-inf-next',
        prevArrow: '.slider__important-inf-prev',
        options: {
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{ breakpoint: 500, settings: { slidesToShow: 1 } }],
        },
    },
    // С заботой о жителях
    {
        selector: '.people-care__card-list',
        nextArrow: '.slider__people-care-next',
        prevArrow: '.slider__people-care-prev',
        options: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
            responsive: [
                { breakpoint: 896, settings: { slidesToShow: 2 } },
                { breakpoint: 500, settings: { slidesToShow: 1 } },
            ],
        },
    },
    // Проекты Думы города
    {
        selector: '.dm-city-projects__card-list',
        nextArrow: '.slider__dm-city-projects-next',
        prevArrow: '.slider__dm-city-projects-prev',
        options: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
            adaptiveHeight: true,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 500, settings: { slidesToShow: 1 } },
            ],
        },
    },
    // Архив трансляций
    {
        selector: '.archive-dm__container',
        nextArrow: '.slider__archive-dm-next',
        prevArrow: '.slider__archive-dm-prev',
        options: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
            responsive: [{ breakpoint: 500, settings: { slidesToShow: 1 } }],
        },
    },
];

// Создать экземпляр слайдера

sliders.forEach((slider) => {
    initSlider(slider.selector, slider.nextArrow, slider.prevArrow, slider.options);
});

// Разобрать слайдеры

const breakpoint = 993;
let slidersInitialized = true;

// Отфильтровать слайдеры для разрешения ниже sm

const slidersToManage = sliders.filter(
    (slider) =>
        slider.selector === '.main-news__card-list' ||
        slider.selector === '.events__news' ||
        slider.selector === '.important-links__container'
);

$(window)
    .on('resize', function () {
        const currentWidth = window.innerWidth;

        if (currentWidth < breakpoint && !slidersInitialized) {
            slidersToManage.forEach(initSlider);
            slidersInitialized = true;
        } else if (currentWidth >= breakpoint && slidersInitialized) {
            slidersToManage.forEach((slider) => destroySlider(slider.selector));
            slidersInitialized = false;
        }
    })
    .trigger('resize');

    function destroySlider(selector) {
        $(selector).slick('unslick');
    }