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

            if (values.length > 0) {
                const from = document.getElementById('from');
                const to = document.getElementById('to');

                const dates = {
                    from: values[0],
                    to: values[values.length - 1],
                };
                newDates = dates;

                writeDates(from, to, dates);
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

function getDates() {
    const href = window.location.href;
    // const href = 'https://dev15-surg-duma.mebot24.ru/novosti/?tag=&from=02.12.2024&to=08.12.2024';
    const urlParams = new URLSearchParams(new URL(href).search);
    const fromParam = urlParams.get('from');
    const toParam = urlParams.get('to');
    const button = document.querySelector('.search-by-site__button');

    if (button) {
        const buttonText = button.querySelector('.button_span');

        if (fromParam && toParam) {
            buttonText.textContent = `Дата c ${fromParam} по ${toParam}`;
        }
    }
}

function writeDates(from, to, dates) {
    const button = document.querySelector('.search-by-site__button');

    if (button) {
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
        }
    }
}

getDates();
