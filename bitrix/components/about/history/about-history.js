function showMoreHistory() {
    const button = document.querySelector('.about-history__button');
    const content = document.querySelector('.about-history__hidden');

    button.style.display = 'none';
    content.classList.add('about-history__hidden_open');
}

function showMoreToday() {
    const button = document.querySelector('.about-today__button');
    const content = document.querySelector('.about-today__hidden');

    button.style.display = 'none';
    content.classList.add('about-today__hidden_open');
}

function showMoreTimeline() {
    const button = document.querySelector('.about-timeline__button');
    const content = document.querySelectorAll('.about-timeline-item');

    button.style.display = 'none';
    
    content.forEach((el) => {
        el.style.display = 'block';
    });
}
