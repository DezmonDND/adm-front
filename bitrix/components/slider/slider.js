// Помогите городу стать лучше

$('.help-city__content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
});

$('.slider__dm-city-projects-next').on('click', function () {
    $('.dm-city-projects__card-list').slick('slickNext');
});
$('.slider__dm-city-projects-prev').on('click', function () {
    $('.dm-city-projects__card-list').slick('slickPrev');
});
