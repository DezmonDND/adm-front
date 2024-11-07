$(document).ready(function () {
    // Инициализация всех popup-блоков
    $('.popup-fade').each(function () {
        const $popupFade = $(this);

        // Добавляем структуру popup, если она ещё не существует
        if ($popupFade.find('.popup').length === 0) {
            // Оборачиваем контент в .popup и .popup-content
            const content = $popupFade.html();
            $popupFade.empty().append(`
          <div class="popup">
            <a class="popup-close" href="#"><ion-icon name="close"></ion-icon></a>
            <div class="popup-content">${content}</div>
          </div>
        `);
        }
    });

    // Открытие popup
    $('.popup-open').click(function () {
        var popupId = $(this).data('popup-id');
        const $popup = $('#' + popupId);
        $popup.fadeIn();

        // Запуск видео при открытии popup
        const video = $popup.find('video').get(0);
        if (video) {
            video.play();
        }

        return false;
    });

    // Закрытие popup при нажатии на кнопку закрытия
    $(document).on('click', '.popup-close', function () {
        const $popupFade = $(this).closest('.popup-fade');
        $popupFade.fadeOut();

        // Остановка видео при закрытии popup
        const video = $popupFade.find('video').get(0);
        if (video) {
            video.pause();
            video.currentTime = 0; // Сбросить время воспроизведения на начало
        }

        return false;
    });

    // Закрытие popup при нажатии на ESC
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();

            // Остановка всех видео в закрытых popup
            $('.popup-fade video').each(function () {
                this.pause();
                this.currentTime = 0;
            });
        }
    });

    // Закрытие popup при клике вне контента
    $('.popup-fade').click(function (e) {
        if ($(e.target).closest('.popup').length === 0) {
            $(this).fadeOut();

            // Остановка видео при закрытии popup
            const video = $(this).find('video').get(0);
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        }
    });
});
