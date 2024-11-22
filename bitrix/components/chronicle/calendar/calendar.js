const options = {
    settings: {
        lang: 'ru-RU',
        selection: {
            day: 'multiple-ranged',
        },
    },
    CSSClasses: {
        daySelectedFirst: 'calendar-day_selected-first',
        daySelectedIntermediate: 'calendar-day_selected-intermediate',
        daySelectedLast: 'calendar-day_selected-last',
        dayBtn: 'calendar-day__btn',
        dayBtnHover: 'calendar-day__btn_hover',
        dayBtnSelected: 'calendar-day__btn_selected',
        dayBtnWeekend: 'calendar-day__btn',
        dayBtnHoliday: 'calendar-day__btn',
        dayHoverFirst: 'calendar-day_hover-first',
        dayHoverLast: 'calendar-day_hover-last',
        dayHoverIntermediate: 'calendar-day_hover-intermediate',
        dayBtnToday: 'calendar-day__btn_today',
    },
};

document.addEventListener('DOMContentLoaded', () => {
    const calendar = new VanillaCalendar('#calendar', options);
    const calendarPopup = new VanillaCalendar('#calendar-popup', options);

    calendar.init();
    calendarPopup.init();
});

document.addEventListener('DOMContentLoaded', () => {
    const calendarDuma = new VanillaCalendar('#calendar-duma', options);

    calendarDuma.init();
});
