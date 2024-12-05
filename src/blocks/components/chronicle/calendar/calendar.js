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

                const button = document.querySelector('.adm-all-news__calendar-button');
                const buttonText = button.querySelector('.button_span');
                const submitNews = document.getElementById('submit-news');

                if (from && to) {
                    from.value = new Date(dates.from).toLocaleDateString();
                    to.value = new Date(dates.to).toLocaleDateString();

                    if (from.value !== to.value && submitNews) {
                        submitNews.click();
                    }

                    if (from.value !== 'Invalid Date' && from.value !== 'Invalid Date') {
                        buttonText.textContent = `Дата c ${from.value} по ${to.value}`;
                    } else {
                        buttonText.textContent = `Период публикации`;
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
