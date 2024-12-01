document.addEventListener('DOMContentLoaded', () => {
    const calendar = initializeCalendar('#calendar-all-news', options);
});

function toggleAdmAllNewsCalendar() {
    const calendarId = document.getElementById('calendar-all-news');
    const calendar = document.querySelector('.adm-all-news__calendar-content');

    if (calendarId) {
        calendar.classList.toggle('adm-all-news__calendar-content_active');
    }
}