function toggleCalendar() {
    const calendarId = document.getElementById('calendar');
    const calendar = document.querySelector('.search-by-site__calendar');

    if (calendarId) {
        calendar.classList.toggle('search-by-site__calendar_active');
    }
}

function toggleFilters() {
    document.querySelector('.filters-popup').classList.toggle('filters-popup_open');
    document.querySelector('body').classList.toggle('overlay_mobile-menu');
}

function calendarButtonText() {
    const button = document.querySelector('.search-by-site__button');
    const from = document.getElementById('from');
    const to = document.getElementById('to');   

    button.textContent = `Период с ${from.value} по ${to.value}`
}