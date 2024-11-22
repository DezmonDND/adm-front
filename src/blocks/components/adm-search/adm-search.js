document.addEventListener('DOMContentLoaded', () => {
    const calendar = new VanillaCalendar('#calendar', options);
    const calendarPopup = new VanillaCalendar('#calendar-popup', options);

    calendar.init();
    calendarPopup.init();
});
