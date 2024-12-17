const hearingEventPopupHTML = (event) => {
    const popup = document.createElement('div');
    popup.className = 'hearing-event-popup';

    const container = document.createElement('div');
    container.className = 'hearing-event-popup__container';
    popup.appendChild(container);

    const topContent = document.createElement('div');
    topContent.className = 'hearing-event-popup__top-content';
    container.appendChild(topContent);

    const title = document.createElement('a');
    title.className = 'hearing-event-popup__title';
    title.textContent = event.title;
    title.href = event.extendedProps.title_link;
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
    shareButton.addEventListener('click', getTitleLink);
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

    const bottomInfoBlock = document.createElement('div');
    bottomInfoBlock.className = 'hearing-event-popup__bottom-info';
    bottomContent.appendChild(bottomInfoBlock);

    function createDescPair(titleText, contentText, link = null) {
        const bottomTextBlock = document.createElement('div');
        bottomTextBlock.className = 'hearing-event-popup__bottom-text-block';
        bottomInfoBlock.appendChild(bottomTextBlock);

        const descTitle = document.createElement('div');
        descTitle.className = 'hearing-event-popup__desc-title';
        descTitle.textContent = titleText;
        bottomTextBlock.appendChild(descTitle);

        if (link) {
            const linkEl = document.createElement('a');
            linkEl.className = 'link hearing-event-popup__desc-text';
            linkEl.href = link;
            linkEl.textContent = contentText;
            bottomTextBlock.appendChild(linkEl);
        } else {
            const descText = document.createElement('div');
            descText.className = 'hearing-event-popup__desc-text';
            descText.textContent = contentText;
            bottomTextBlock.appendChild(descText);
        }
    }

    createDescPair('Описание', event.extendedProps.description);
    createDescPair('Время и дата', event.extendedProps.place);
    createDescPair('Место', event.extendedProps.link_text, event.extendedProps.link);

    return popup;
};

function openHearingEventPopup(info) {
    closeHearingEventPopup();

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

const div = document.querySelector('.hearing-event-popup');

jQuery(function ($) {
    $(document).mouseup(function (e) {
        var div = $('.hearing-event-popup');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.hide();
        }
    });
});

function getTitleLink() {
    const popup = document.querySelector('.hearing-event-popup__top-content');
    const link = popup.querySelector('.hearing-event-popup__title');
    window.navigator.clipboard.writeText(link.href);
}
