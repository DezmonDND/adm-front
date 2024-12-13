function toggleCalendar() {
    const calendarId = document.getElementById('calendar');
    const calendar = document.querySelector('.search-by-site__calendar');
    if (calendarId) {
        calendar.classList.toggle('search-by-site__calendar_active');
    }
}

document.addEventListener('click', (e) => {
    const calendarActive = document.querySelector('.search-by-site__calendar_active');
    const button = document.querySelector('.search-by-site__button');

    if (calendarActive && !calendarActive.contains(e.target) && !button.contains(e.target)) {
        calendarActive.classList.remove('search-by-site__calendar_active');
    }
});

// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('popupBtn');
//     const popup = document.getElementById('popup');
//     popup.classList.add('popup');

//     if (button) {
//         button.addEventListener('click', () => {
//             if (popup.style.display === 'none') {
//                 popup.style.display = 'block';
//                 popup.classList.add('popup_open');
//             } else {
//                 popup.style.display = 'none';
//                 popup.classList.remove('popup_open');
//             }
//         });
//     }
// });

// document.body.addEventListener('click', (e) => {
//     const popup = document.querySelector('.popup_open');
//     const button = document.getElementById('popupBtn');

//     if (popup && !popup.contains(e.target) && !button.contains(e.target)) {
//         popup.style.display = 'none';
//         popup.classList.remove('popup_open');
//     }
// });

function toggleFilters() {
    document.querySelector('.filters-popup').classList.toggle('filters-popup_open');
    document.querySelector('body').classList.toggle('overlay_mobile-menu');
}

function calendarButtonText() {
    const button = document.querySelector('.search-by-site__button');
    const from = document.getElementById('from');
    const to = document.getElementById('to');

    button.textContent = `Период с ${from.value} по ${to.value}`;
}

function addButtonTitle() {
    const buttons = document.querySelectorAll('button');
    if (buttons) {
        buttons.forEach((button) => {
            if (button.textContent.length === 0) {
                button.title = 'Кнопка';
            } else {
                button.title = button.textContent;
            }
        });
    }
}

function addImageAlt() {
    const imgs = document.querySelectorAll('img');
    if (imgs) {
        imgs.forEach((img) => {
            if (img.alt.length === 0) {
                img.alt = 'Изображение';
            } else {
                return '';
            }
        });
    }
}
addImageAlt();
addButtonTitle();
