document.addEventListener('DOMContentLoaded', () => {
    const calendarAdmEvents = new VanillaCalendar('#events-calendar', options);
    const calendarAdmEventsPopup = new VanillaCalendar('#events-calendar-popup', options);

    calendarAdmEvents.init();
    calendarAdmEventsPopup.init();
});

function toggleAdmCalendar() {
    const calendarAdmEvents = document.querySelector('.events__calendar');

    calendarAdmEvents.classList.toggle('events__calendar_active');
}