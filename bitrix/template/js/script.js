// Находим все элементы с классом `content-card`
$(document).ready(function () {
    document.querySelectorAll('.content-card').forEach((card) => {

        const fullWidthContainer = document.createElement('div');
        fullWidthContainer.className = 'full-width-container';

        const fullWidthBackground = document.createElement('div');
        fullWidthBackground.className = 'full-width-background';

        const fullWidthContent = document.createElement('div');
        fullWidthContent.className = 'full-width-content';

        card.parentNode.insertBefore(fullWidthContainer, card); 
        fullWidthContent.appendChild(card); 
        fullWidthBackground.appendChild(fullWidthContent); // 
        fullWidthContainer.appendChild(fullWidthBackground);
        // Создаем контейнер внутри карточки
        const container = document.createElement('div');
        container.className = 'content-card__container';

        // Перемещаем текущие дочерние элементы в контейнер
        while (card.firstChild) {
            container.appendChild(card.firstChild);
        }

    // Создаем ссылку с кнопкой "Поделиться"
    const shareButton = document.createElement('button');
    shareButton.className =
        'button button_link button_white button_size_m button_icon-left social_share';
    shareButton.href = '/';
    shareButton.setAttribute('attributes', '{}');

        // Создаем содержимое кнопки
        const buttonSpan = document.createElement('span');
        buttonSpan.className = 'button_span';
        buttonSpan.textContent = 'Поделиться';

        const icon = document.createElement('ion-icon');
        icon.className = 'icon md hydrated';
        icon.setAttribute('name', 'link-outline');
        icon.setAttribute('role', 'img');

        // Собираем структуру кнопки
        shareButton.appendChild(buttonSpan);
        shareButton.appendChild(icon);

        // Добавляем кнопку в контейнер
        container.appendChild(shareButton);

        // Добавляем контейнер в карточку
        card.appendChild(container);
    });
});

function openSelect() {
  const selectMenu = document.querySelector(".select_multiple-menu");
  selectMenu.style.display =
    selectMenu.style.display === "none" ? "flex" : "none";
}

function selectOption(element) {
  element.classList.toggle("select_multiple-option_selected");
}

const msDropdownList = document.querySelector('.multi-select__dropdown');
const msDropdownItems = document.querySelectorAll('.multi-select__dropdown-item');
const multiSelect = document.querySelector('input[name="multiSelect"]');
const msInput = document.querySelector('.multi-select__input');
const msChose = document.querySelector('.multi-select__chose');
let visibleDropdownItems;
let counter = -1;
let selectedValues = [];

msChose &&
    msChose.addEventListener('click', (event) => {
        if (!event.target.closest('.multi-select__chose-item')) {
            msDropdownList.classList.remove('multi-select__dropdown_hidden');
        }
    });

document.addEventListener('click', (event) => {
    if (!event.target.closest('.multi-select') && msDropdownList) {
        msDropdownList.classList.add('multi-select__dropdown_hidden');
    }

    if (event.target.closest('.multi-select__chose-item')) {
        searchSelectedElement(event.target.textContent);
    }
});

msDropdownList &&
    msDropdownList.addEventListener('click', (event) => {
        if (event.target.classList.contains('multi-select__dropdown-item_chose')) {
            searchSelectedElement(event.target.textContent);
        } else if (event.target.classList.contains('multi-select__dropdown-item')) {
            createNewElement('li', ['multi-select__chose-item'], event, msChose);
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
    event.target.classList.add('multi-select__dropdown-item_chose');
}

function searchSelectedElement(text) {
    msDropdownItems.forEach((item) => {
        if (text.toLowerCase() === item.textContent.toLowerCase()) {
            item.classList.remove('multi-select__dropdown-item_chose');
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
    const msChoseItems = document.querySelectorAll('.multi-select__chose-item');
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

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const socialShareButtons = document.querySelectorAll('.social_share');
        
        if (socialShareButtons.length === 0) {
            return;
        }
        const url = window.location.href;
        socialShareButtons.forEach(button => {
            const share = document.createElement('div');
            share.className = 'share-menu';

            if (window.innerWidth <= 992) {
                share.classList.add('mobile-share');
                share.innerHTML = `
                <div class="share-content">
                    <div class ="mobile-share-header">
                        <span>Поделиться</span>
                        <ion-icon class="icon md hydrated mobile-share-header-close" name="close-outline" role="img"></ion-icon>
                    </div>
                    <hr>
                    <div class="header__socials">
                        <button class="button button_link button_white button_without-text"> 
                            <a class="vk_icon header__social-icon" href="https://vk.com/share.php?url=${url}" target="_blank"></a>
                        </button>
                        <button class="button button_link button_white button_without-text"> 
                            <a class="ok_icon header__social-icon" href="https://connect.ok.ru/offer?url=${url}" target="_blank"></a>
                        </button>
                        <button class="button button_link button_white button_without-text"> 
                            <a class="tg_icon header__social-icon" href="https://telegram.me/share/url?url=http:${url}" target="_blank"></a>
                        </button>
                        <button class="button button_link button_white button_without-text" id="copyLink" attributes="{}">
                            <ion-icon class="icon md hydrated" name="link-outline" role="img"></ion-icon>
                        </button>
                    </div>
                </div>`;
            } else {
                share.innerHTML = `
                <div class="share-content">
                    <div class="header__socials">
                        <a class="vk_icon header__social-icon" href="https://vk.com/share.php?url=${url}" target="_blank"></a>
                        <a class="ok_icon header__social-icon" href="https://connect.ok.ru/offer?url=${url} target="_blank"></a>
                        <a class="tg_icon header__social-icon" href="https://telegram.me/share/url?url=${url}" target="_blank"></a>
                    </div>
                    <button id="copyLink" class="button button_white button_size_s">
                        <span class="button_span">Скопировать ссылку</span>
                    </button>
                </div>`;
            }

            share.style.display = 'none';
            share.style.position = 'absolute';
            share.style.zIndex = '1000';

            button.style.position = 'relative';
            button.appendChild(share);

            button.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    document.querySelector('.overlay').classList.remove('hidden');
                }
                share.style.display = 'flex';
            });

            share.addEventListener('click', (e) => e.stopPropagation());

            const closeMobile = share.querySelector('.mobile-share-header-close');
            if (closeMobile) {
                closeMobile.addEventListener('click', (e) => {
                    e.stopPropagation();
                    share.style.display = 'none';
                    share.classList.remove('mobile-menu');
                    document.querySelector('.overlay').classList.add('hidden');
                });
            }

            document.addEventListener('click', (e) => {
                if (!share.contains(e.target) && !button.contains(e.target)) {
                    share.style.display = 'none';
                    share.classList.remove('mobile-menu');
                    document.querySelector('.overlay').classList.add('hidden');
                }
            });

            share.querySelector('#copyLink').addEventListener('click', (e) => {
                e.preventDefault();
                navigator.clipboard.writeText(url);
            });
        });
    }, 500); 
});

function getLength(event) {
    const textarea = event.target;
    const counterCurrent = textarea.parentNode.querySelector('.current');
    const counterMax = textarea.parentNode.querySelector('.max');

    if (counterCurrent && counterMax) {
        const textLength = textarea.value.length;
        counterCurrent.textContent = textLength;
        if (textLength > Number(counterMax.textContent)) {
            textarea.style.borderColor = '#D10404';
        } else {
            textarea.style.borderColor = '';
        }
    }
}

const textareas = document.querySelectorAll('.textarea');

textareas.forEach((textarea) => {
    textarea.addEventListener('input', getLength);
});

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
