const options = {
    settings: {
        lang: 'ru-RU',
        visibility: {
            theme: 'light',
        },
        selection: {
            day: 'multiple-ranged',
        },
    },
    actions: {
        clickDay(e, dates) {
            let values = dates.selectedDates;
            let newDates = [];
            if (values.length > 0) {
                const from = document.getElementById('from');
                const to = document.getElementById('to');

                const dates = {
                    from: values[0],
                    to: values[values.length - 1],
                };
                newDates = dates;

                const button = document.querySelector('.search-by-site__button');
                const buttonIcon = button.querySelector('.icon ');

                if (from && to) {
                    from.value = new Date(dates.from).toLocaleDateString();
                    to.value = new Date(dates.to).toLocaleDateString();

                    buttonIcon.name = 'calendar-outline';

                    if (from.value !== 'Invalid Date' && from.value !== 'Invalid Date') {
                        button.textContent = `Дата начала ${from.value} Дата окончания ${to.value}`;
                        button.appendChild(buttonIcon)
                    } else {
                        button.textContent = `Период публикации`;
                        button.appendChild(buttonIcon)
                    }
                } else {
                }
            } else {
                console.log('Нет выбранных дат');
            }
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

function initializeCalendar(selector, options) {
    const element = document.querySelector(selector);

    if (element) {
        const calendar = new VanillaCalendar(element, options);
        return calendar.init();
    }
}
