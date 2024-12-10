function showMoreHistory() {
    const button = document.querySelector('.about-history__button');
    const content = document.querySelector('.about-history__hidden');
    const bottonText = button.querySelector('.button_span');

    if (bottonText.textContent === 'Подробнее...') {
        bottonText.textContent = 'Cкрыть';
    } else {
        bottonText.textContent = 'Подробнее...';
    }

    content.classList.toggle('about-history__hidden_open');
}

function showMoreToday() {
    const button = document.querySelector('.about-today__button');
    const content = document.querySelector('.about-today__hidden');
    const bottonText = button.querySelector('.button_span');

    if (bottonText.textContent === 'Подробнее...') {
        bottonText.textContent = 'Cкрыть';
    } else {
        bottonText.textContent = 'Подробнее...';
    }

    content.classList.toggle('about-today__hidden_open');
}

function showMoreTimeline() {
    const button = document.querySelector('.about-timeline__button');
    const content = document.querySelectorAll('.about-timeline-item');
    const bottonText = button.querySelector('.button_span');

    if (bottonText.textContent === 'Рарзвернуть...') {
        bottonText.textContent = 'Свернуть';
    } else {
        bottonText.textContent = 'Рарзвернуть...';
    }

    content.forEach((el) => {
        el.classList.toggle('about-timeline-item_open')
    });
}
