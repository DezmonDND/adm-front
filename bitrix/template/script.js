function openSelect() {
  const selectMenu = document.querySelector(".select_multiple-menu");
  selectMenu.style.display =
    selectMenu.style.display === "none" ? "flex" : "none";
}

function selectOption(element) {
  element.classList.toggle("select_multiple-option_selected");
}

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

const msDropdownList = document.querySelector('.ms__dropdown');
const msDropdownItems = document.querySelectorAll('.ms__dropdown-item');
const multiSelect = document.querySelector('input[name="multiSelect"]');
const msInput = document.querySelector('.ms__input');
const msChose = document.querySelector('.ms__chose');
let visibleDropdownItems;
let counter = -1;
let selectedValues = [];

msChose &&
    msChose.addEventListener('click', (event) => {
        if (!event.target.closest('.ms__chose-item')) {
            msDropdownList.classList.remove('ms__dropdown_hidden');
        }
    });

document.addEventListener('click', (event) => {
    if (!event.target.closest('.ms') && msDropdownList) {
        msDropdownList.classList.add('ms__dropdown_hidden');
    }

    if (event.target.closest('.ms__chose-item')) {
        searchSelectedElement(event.target.textContent);
    }
});

msDropdownList &&
    msDropdownList.addEventListener('click', (event) => {
        if (event.target.classList.contains('ms__dropdown-item_chose')) {
            searchSelectedElement(event.target.textContent);
        } else if (event.target.classList.contains('ms__dropdown-item')) {
            createNewElement('li', ['ms__chose-item'], event, msChose);
            selectedValues.push(event.target.dataset.value);
            updateMultiSelectValue();
        }
        msInput.value = '';
        msInput.focus();
    });

function createNewElement(tag, styles, event, parent) {
    const newElement = document.createElement(tag);
    newElement.classList.add(...styles);
    newElement.textContent = event.target.textContent;
    parent.prepend(newElement);
    event.target.classList.add('ms__dropdown-item_chose');
}

function searchSelectedElement(text) {
    msDropdownItems.forEach((item) => {
        if (text.toLowerCase() === item.textContent.toLowerCase()) {
            item.classList.remove('ms__dropdown-item_chose');
            deleteElement(text);
            const index = selectedValues.indexOf(item.dataset.value);
            if (index > -1) {
                selectedValues.splice(index, 1);
            }
            updateMultiSelectValue();
        }
    });
}

function deleteElement(text) {
    const msChoseItems = document.querySelectorAll('.ms__chose-item');
    msChoseItems.forEach((item) => {
        if (text.toLowerCase() === item.textContent.toLowerCase()) {
            item.remove();
        }
    });
}

function updateMultiSelectValue(e) {
    multiSelect.value = selectedValues.join(', ');
    getValues(e);
}

function openSelect() {
  const selectMenu = document.querySelector(".select_multiple-menu");
  selectMenu.style.display =
    selectMenu.style.display === "none" ? "flex" : "none";
}

function selectOption(element) {
  element.classList.toggle("select_multiple-option_selected");
}

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

function getLength() {
  const textarea = document.querySelector(".textarea");
  const counterCurrent = document.querySelector(".current");
  const counterMax = document.querySelector(".max");

  const textLength = textarea.value.length;
  counterCurrent.textContent = textLength;
  if (textLength > Number(counterMax.textContent)) {
    textarea.style.borderColor = "#D10404";
  } else {
    textarea.style.borderColor = "";
  }
}

const msDropdownList = document.querySelector('.ms__dropdown');
const msDropdownItems = document.querySelectorAll('.ms__dropdown-item');
const multiSelect = document.querySelector('input[name="multiSelect"]');
const msInput = document.querySelector('.ms__input');
const msChose = document.querySelector('.ms__chose');
let visibleDropdownItems;
let counter = -1;
let selectedValues = [];

msChose &&
    msChose.addEventListener('click', (event) => {
        if (!event.target.closest('.ms__chose-item')) {
            msDropdownList.classList.remove('ms__dropdown_hidden');
        }
    });

document.addEventListener('click', (event) => {
    if (!event.target.closest('.ms') && msDropdownList) {
        msDropdownList.classList.add('ms__dropdown_hidden');
    }

    if (event.target.closest('.ms__chose-item')) {
        searchSelectedElement(event.target.textContent);
    }
});

msDropdownList &&
    msDropdownList.addEventListener('click', (event) => {
        if (event.target.classList.contains('ms__dropdown-item_chose')) {
            searchSelectedElement(event.target.textContent);
        } else if (event.target.classList.contains('ms__dropdown-item')) {
            createNewElement('li', ['ms__chose-item'], event, msChose);
            selectedValues.push(event.target.dataset.value);
            updateMultiSelectValue();
        }
        msInput.value = '';
        msInput.focus();
    });

function createNewElement(tag, styles, event, parent) {
    const newElement = document.createElement(tag);
    newElement.classList.add(...styles);
    newElement.textContent = event.target.textContent;
    parent.prepend(newElement);
    event.target.classList.add('ms__dropdown-item_chose');
}

function searchSelectedElement(text) {
    msDropdownItems.forEach((item) => {
        if (text.toLowerCase() === item.textContent.toLowerCase()) {
            item.classList.remove('ms__dropdown-item_chose');
            deleteElement(text);
            const index = selectedValues.indexOf(item.dataset.value);
            if (index > -1) {
                selectedValues.splice(index, 1);
            }
            updateMultiSelectValue();
        }
    });
}

function deleteElement(text) {
    const msChoseItems = document.querySelectorAll('.ms__chose-item');
    msChoseItems.forEach((item) => {
        if (text.toLowerCase() === item.textContent.toLowerCase()) {
            item.remove();
        }
    });
}

function updateMultiSelectValue(e) {
    multiSelect.value = selectedValues.join(', ');
    getValues(e);
}
