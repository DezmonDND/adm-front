const popup = document.querySelector('.hearing-add-event-popup');

function openAddEventPopup() {
    popup.classList.add('hearing-add-event-popup_open');
}

function closeHearingAddEventPopup(event) {
    event.preventDefault();
    const popup = document.querySelector('.hearing-add-event-popup');
    popup.classList.remove('hearing-add-event-popup_open');
}

function createEvent() {
    const inputs = document.querySelectorAll('.input, .textarea');

    let values = {};
    let event = {};

    inputs.forEach((input) => {
        values[input.name] = input.value;
    });

    event.title = values.eventTitle;
    event.description = values.eventAbout;
    event.start = values.eventStart;
    event.end = values.eventEnd;

    return event;
}

function saveEvent(info) {
    const newEvent = createEvent();

    if (newEvent) {
        // newEvent.start = new Date(info.dateStr + 'T' + newEvent.start);
        // newEvent.end = new Date(info.dateStr + 'T' + newEvent.end);
        calendar.addEvent(newEvent);
        closeHearingAddEventPopup();
    }
}
