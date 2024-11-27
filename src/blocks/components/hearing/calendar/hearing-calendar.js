const EVENTS = [
    {
        title: 'Публичные слушания',
        start: '2024-11-27T10:30:00',
        end: '2024-11-27T11:00:00',
        description: 'Публичные слушания (постановление Администрации города от 23.10.2024 №5484) по внесению изменений в проект межевания территории микрорайона 20А в городе Сургуте, утвержденный постановлением Администрации города от 24.03.2009 № 1009 «Об утверждении проекта планировки территории «Застройка микрорайона 20А город Сургут» (с изменениями от 16.08.2016 №6125, 06.08.2019 № 5792, 04.12.2023 № 6018), в части земельных участков и территорий.',
    },
    {
        title: 'Публичные слушания',
        start: '2024-11-27T11:10:00',
        end: '2024-11-27T11:30:00',
        description: 'Описание',
    },
    {
        title: 'Публичные слушания',
        start: '2024-11-21T11:10:00',
        end: '2024-11-21T11:30:00',
        description: 'Описание',
    },
    {
        title: 'Публичные слушания',
        start: '2024-11-21T10:30:00',
        end: '2024-11-21T11:00:00',
        description: 'Публичные слушания (постановление Администрации города от 23.10.2024 №5484) по внесению изменений в проект межевания территории микрорайона 20А в городе Сургуте, утвержденный постановлением Администрации города от 24.03.2009 № 1009 «Об утверждении проекта планировки территории «Застройка микрорайона 20А город Сургут» (с изменениями от 16.08.2016 №6125, 06.08.2019 № 5792, 04.12.2023 № 6018), в части земельных участков и территорий.',
    },
    {
        title: 'Публичные слушания',
        start: '2024-11-15T11:10:00',
        end: '2024-11-15T11:30:00',
        description: 'Описание',
    },
    {
        title: 'Публичные слушания',
        start: '2024-11-15T10:30:00',
        end: '2024-11-15T11:00:00',
        description: 'Публичные слушания (постановление Администрации города от 23.10.2024 №5484) по внесению изменений в проект межевания территории микрорайона 20А в городе Сургуте, утвержденный постановлением Администрации города от 24.03.2009 № 1009 «Об утверждении проекта планировки территории «Застройка микрорайона 20А город Сургут» (с изменениями от 16.08.2016 №6125, 06.08.2019 № 5792, 04.12.2023 № 6018), в части земельных участков и территорий.',
    },
    {
        title: 'Публичные слушания',
        start: '2024-11-09T11:10:00',
        end: '2024-11-09T11:30:00',
        description: 'Описание',
    },
];

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('hearing-calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'ru',
        headerToolbar: {
            left: 'timeGridWeek,dayGridMonth',
            center: '',
            right: 'prev,next',
        },
        buttonText: {
            month: 'Месяц',
            week: 'Неделя',
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
        eventClick: function (info) {
            openHearingEventPopup(info.event);
        },
        views: {
            timeGridWeek: {
                slotDuration: '00:30:00',
            },
        },
        dateClick: function (info) {
            const startTime = '10:00';
            const endTime = '10:30';
            calendar.addEvent({
                title: 'Текст',
                start: info.dateStr + 'T' + startTime + ':00',
                end: info.dateStr + 'T' + endTime + ':00',
            });
        },
    });
    calendar.render();
});
