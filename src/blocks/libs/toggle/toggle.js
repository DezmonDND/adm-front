$(document).ready(function () {
    $('.toggle-container').each(function () {
        // Находим основные элементы
        var container = $(this);
        var header = container.find('.toggle-header');
        var content = container.find('.toggle-content');
        var footer = container.find('.toggle-footer');

        // Оборачиваем текст заголовка в .toggle-title
        var titleText = header.text();
        header.empty().append('<div class="toggle-title">' + titleText + '</div>');

        // Добавляем стрелку
        header.append('<ion-icon class="toggle-arrow" name="chevron-down"></ion-icon>');

        // Проверяем наличие контента и футера и создаем новую структуру
        var newContentHTML = '';

        if (content.length) {
            newContentHTML += '<div class="toggle-content-container">' + content.html() + '</div>';
            content.empty(); // Очищаем оригинальный контент после переноса
        }

        if (footer.length) {
            newContentHTML += '<div class="toggle-content-footer">' + footer.html() + '</div>';
            footer.remove(); // Удаляем оригинальный .toggle-footer после переноса
        }

        // Если .toggle-content не существует, создаем его
        if (!content.length) {
            content = $('<div class="toggle-content closed"></div>').appendTo(container);
        }

        // Вставляем собранный HTML внутрь .toggle-content
        content.append(newContentHTML);

        // Добавляем обработчик для клика
        header.click(function () {
            if (container.hasClass('open')) {
                // Закрытие контента
                content.animate({ height: 0 }, 300, function () {
                    container.removeClass('open');
                    content.addClass('closed'); // Убираем вертикальные отступы
                });
            } else {
                // Открытие контента
                var autoHeight = content.css('height', 'auto').height();
                content.height(0); // Устанавливаем высоту на 0 перед анимацией
                container.addClass('open');
                content.removeClass('closed'); // Добавляем вертикальные отступы
                content.animate({ height: autoHeight }, 300, function () {
                    content.css('height', 'auto');
                });
            }

            // Переключаем иконку стрелки
            header.find('.toggle-arrow').toggleClass('rotated');
        });
    });
});
