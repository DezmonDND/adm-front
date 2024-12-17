function showDmHistory() {
    const button = document.querySelector('.dm-about-history-button');
    const content = document.querySelector('.dm-about-history-hidden');
    const buttonText = button.querySelector('.button_span');

    if (buttonText.textContent === 'Подробнее...') {
        buttonText.textContent = 'Cкрыть';
    } else {
        buttonText.textContent = 'Подробнее...';
    }

    content.classList.toggle('dm-about-history-hidden-open');
}

function showDmPowers() {
    const button = document.querySelector('.dm-about-power-button');
    const content = document.querySelector('.dm-about-power-hidden');
    const buttonText = button.querySelector('.button_span');

    if (buttonText.textContent === 'Подробнее...') {
        buttonText.textContent = 'Cкрыть';
    } else {
        buttonText.textContent = 'Подробнее...';
    }

    content.classList.toggle('dm-about-power-hidden-open');
}