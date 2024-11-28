function toggleCalendar() {
    const calendarId = document.getElementById('calendar');
    const calendar = document.querySelector('.search-by-site__calendar');

    if (calendarId) {
        calendar.classList.toggle('search-by-site__calendar_active');
    }
}

function toggleFilters() {
    document.querySelector('.filters-popup').classList.toggle('filters-popup_open');
}
