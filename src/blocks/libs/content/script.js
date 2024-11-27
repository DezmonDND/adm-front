// Находим все элементы с классом `content-card`
document.querySelectorAll('.content-card').forEach((card) => {
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
