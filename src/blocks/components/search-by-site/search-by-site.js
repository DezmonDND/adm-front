const calendar = document.querySelector('.search-by-site__calendar');

function toggleCalendar() {
    calendar.classList.toggle('search-by-site__calendar_active');
}

function toggleFilters() {
    document.querySelector('.filters-popup').classList.toggle('filters-popup_open');
}
