document.addEventListener('DOMContentLoaded', () => {
    const calendarDumaEvents = initializeCalendar('#calendar-dm-events', options);
    const calendarDumaEventsPopup = initializeCalendar('#calendar-dm-events-popup', options);
    const calendarDuma = initializeCalendar('#calendar-duma', options);
});

function toggleDumaCalendar() {
    const calendarDumaEvents = document.querySelector('.dm-events__calendar');

    calendarDumaEvents.classList.toggle('dm-events__calendar_active');
}