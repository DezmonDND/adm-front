const EVENTS_OLD = [
    {
        title: 'Публичные слушания от 01.10.2024',
        title_link: 'https://dev15-surg.mebot24.ru/publichnye-slushaniya/detail.php?ID=251811',
        start: '2024-11-27T10:30:00',
        end: '2024-11-27T11:00:00',
        description:
            'Публичные слушания (постановление Администрации города от 23.10.2024 №5484) по внесению изменений в проект межевания территории микрорайона 20А в городе Сургуте, утвержденный постановлением Администрации города от 24.03.2009 № 1009 «Об утверждении проекта планировки территории «Застройка микрорайона 20А город Сургут» (с изменениями от 16.08.2016 №6125, 06.08.2019 № 5792, 04.12.2023 № 6018), в части земельных участков и территорий.',
        place: 'Среда, 4 декабря, 18:00 — 20:00',
        link: 'https://yandex.ru/maps/973/surgut/house/ulitsa_voskhod_4/Y0oYdQFiQUcFQFhrfX50c3xkbQ==/?ll=73.362822%2C61.252079&z=17',
        link_text: 'улица Восход, 4',
        },
    {
        title: 'Публичные слушания',
        title_link: '2',
        start: '2024-11-27T11:10:00',
        end: '2024-11-27T11:30:00',
        description: 'Описание',
    },
    {
        title: 'Публичные слушания',
        title_link: '3',
        start: '2024-11-21T11:10:00',
        end: '2024-11-21T11:30:00',
        description: 'Описание',
    },
    {
        title: 'Публичные слушания',
        title_link: '4',
        start: '2024-11-21T10:30:00',
        end: '2024-11-21T11:00:00',
        description:
            'Публичные слушания (постановление Администрации города от 23.10.2024 №5484) по внесению изменений в проект межевания территории микрорайона 20А в городе Сургуте, утвержденный постановлением Администрации города от 24.03.2009 № 1009 «Об утверждении проекта планировки территории «Застройка микрорайона 20А город Сургут» (с изменениями от 16.08.2016 №6125, 06.08.2019 № 5792, 04.12.2023 № 6018), в части земельных участков и территорий.',
    },
    {
        title: 'Публичные слушания',
        title_link: '5',
        start: '2024-11-15T11:10:00',
        end: '2024-11-15T11:30:00',
        description: 'Описание',
    },
    {
        title: 'Публичные слушания',
        title_link: '6',
        start: '2024-11-15T10:30:00',
        end: '2024-11-15T11:00:00',
        description:
            'Публичные слушания (постановление Администрации города от 23.10.2024 №5484) по внесению изменений в проект межевания территории микрорайона 20А в городе Сургуте, утвержденный постановлением Администрации города от 24.03.2009 № 1009 «Об утверждении проекта планировки территории «Застройка микрорайона 20А город Сургут» (с изменениями от 16.08.2016 №6125, 06.08.2019 № 5792, 04.12.2023 № 6018), в части земельных участков и территорий.',
    },
    {
        title: 'Публичные слушания',
        title_link: '7',
        start: '2024-11-09T11:10:00',
        end: '2024-11-09T11:30:00',
        description: 'Описание',
    },
];

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('hearing-calendar');
    if (calendarEl) {
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'ru',
            firstDay: 1,
            headerToolbar: {
                left: 'timeGridWeek,dayGridMonth',
                center: 'title',
                right: 'prev,next',
            },
            buttonText: {
                month: 'Месяц',
                week: 'Неделя',
            },
            moreLinkContent: function (arg) {
                return `+${arg.num} еще `;
            },
            slotLabelFormat: [
                {
                    hour: 'numeric',
                    minute: '2-digit',
                    omitZeroMinute: false,
                    meridiem: 'short',
                },
            ],
            allDaySlot: false,
            contentHeight: 600,
            dayMaxEvents: true,
            editable: true,
            selectable: true,
            dayMaxEvents: true,
            events: EVENTS,
            displayEventEnd: false,
            eventClick: function (info) {
                openHearingEventPopup(info.event);
            },
            views: {
                timeGridWeek: {
                    slotDuration: '00:30:00',
                },
            },
            // datesSet(dateInfo) {
            //     AddMySelectToFullCalendar();
            // },
        });
        calendar.render();
    }
});

// function AddMySelectToFullCalendar() {
//     if ($('select[id=mySelect]').length < 1) {
//         const selectHTML = `
//             <select id="mySelect" class='select select_m hearing-calendar__select'>
//             </select>
//         `;

//         const secondChunk = $('.fc-toolbar-chunk:eq(1)');
//         secondChunk.prepend(selectHTML);
//         $('#mySelect').on('change', function () {
//             console.log(this.value);
//         });
//     }
//     createMonthSelect();
// }

// function createMonthSelect() {
//     const months = [
//         'Январь',
//         'Февраль',
//         'Март',
//         'Апрель',
//         'Май',
//         'Июнь',
//         'Июль',
//         'Август',
//         'Сентябрь',
//         'Октябрь',
//         'Ноябрь',
//         'Декабрь',
//     ];

//     const select = document.getElementById('mySelect');
//     months.forEach((month, index) => {
//         const option = document.createElement('option');
//         option.value = index + 1;
//         option.text = month;
//         select.appendChild(option);
//     });
// }
