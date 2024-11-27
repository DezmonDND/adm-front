const hearingEventPopupHTML = (event) => {
    const popup = document.createElement('div');
    popup.className = 'hearing-event-popup';

    const container = document.createElement('div');
    container.className = 'hearing-event-popup__container';
    popup.appendChild(container);

    const topContent = document.createElement('div');
    topContent.className = 'hearing-event-popup__top-content';
    container.appendChild(topContent);

    const title = document.createElement('div');
    title.className = 'hearing-event-popup__title';
    title.textContent = event.title;
    topContent.appendChild(title);

    const popupButtons = document.createElement('div');
    popupButtons.className = 'hearing-event-popup__buttons';
    topContent.appendChild(popupButtons);

    const shareButton = document.createElement('button');
    const shareButtonIcon = document.createElement('ion-icon');
    shareButtonIcon.className = 'icon';
    shareButtonIcon.name = 'share-social-outline';
    shareButton.appendChild(shareButtonIcon);
    shareButton.className = 'button files-list__delete-button hearing-event-popup__share-button';
    shareButton.addEventListener('click', getLink);
    popupButtons.appendChild(shareButton);

    const closeButton = document.createElement('button');
    const closeButtonIcon = document.createElement('ion-icon');
    closeButtonIcon.className = 'icon';
    closeButtonIcon.name = 'close-outline';
    closeButton.appendChild(closeButtonIcon);
    closeButton.className = 'button files-list__delete-button';
    closeButton.addEventListener('click', closeHearingEventPopup);
    popupButtons.appendChild(closeButton);

    const bottomContent = document.createElement('div');
    bottomContent.className = 'hearing-event-popup__bottom-content';
    container.appendChild(bottomContent);

    const descTitle = document.createElement('div');
    descTitle.className = 'hearing-event-popup__desc-title';
    descTitle.textContent = 'Описание';
    bottomContent.appendChild(descTitle);

    const descText = document.createElement('div');
    descText.className = 'hearing-event-popup__desc-text';
    descText.textContent = event.extendedProps.description;
    bottomContent.appendChild(descText);

    return popup;
};

function openHearingEventPopup(info) {
    const calendar = document.querySelector('.hearing-calendar');
    const popup = hearingEventPopupHTML(info);
    calendar.appendChild(popup);
    popup.classList.add('hearing-event-popup_open');
}

function closeHearingEventPopup() {
    const calendar = document.querySelector('.hearing-calendar');
    const popup = document.querySelector('.hearing-event-popup');

    if (popup) {
        calendar.removeChild(popup);
    }
}

function handleOutsideClick(event) {
    const popup = document.querySelector('.hearing-event-popup');

}

document.body.addEventListener('click', (event) => {
    handleOutsideClick(event);
});
