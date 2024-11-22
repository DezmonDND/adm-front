document.addEventListener('DOMContentLoaded', () => {
    const calendarDumaEvents = new VanillaCalendar('#calendar-dm-events', options);
    const calendarDumaEventsPopup = new VanillaCalendar('#calendar-dm-events-popup', options);
    const calendarDuma = new VanillaCalendar('#calendar-duma', options);

    calendarDuma.init();
    calendarDumaEvents.init();
    calendarDumaEventsPopup.init();
});

function toggleDumaCalendar() {
    const calendarDumaEvents = document.querySelector('.dm-events__calendar');

    calendarDumaEvents.classList.toggle('dm-events__calendar_active');
}
