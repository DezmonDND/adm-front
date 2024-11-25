document.addEventListener('DOMContentLoaded', () => {
    const calendarAdmEvents = initializeCalendar('#events-calendar', options);
    const calendarAdmEventsPopup = initializeCalendar('#events-calendar-popup', options);
});

function toggleAdmCalendar() {
    const calendarAdmEvents = document.querySelector('.events__calendar');

    calendarAdmEvents.classList.toggle('events__calendar_active');
}
