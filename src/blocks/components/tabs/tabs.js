function removeTabindex() {
    const headerLinks = document.querySelectorAll('.header__link');
    const headerButtonsContainer = document.querySelector('.header__buttons');
    const headerServices = document.querySelector('.header-services__container');
    const tabs = document.querySelector('.tabs__container');
    const filtersPopup = document.querySelector('.filters-popup');
    const arrows = document.querySelectorAll('.slider__link');
    const navLinks = document.querySelectorAll('.navigation__link');
    const addFileButtons = document.querySelectorAll('.add-file-button');
    const toggleContainers = document.querySelectorAll('.toggle-container');
    const checkboxes = document.querySelectorAll('.сheckbox__label');

    if (headerLinks) {
        headerLinks.forEach((link) => {
            const button = link.querySelector('button');
            const navLink = link.querySelector('a');
            if (button) {
                button.setAttribute('tabindex', '-1');
            }

            if (navLink) {
                navLink.setAttribute('tabindex', '-1');
            }
        });
    }

    if (headerButtonsContainer) {
        const buttons = headerButtonsContainer.querySelectorAll('.button');
        addAttribute(buttons);
    }
    if (headerServices) {
        const buttons = headerServices.querySelectorAll('a');
        addAttribute(buttons);
    }
    if (tabs) {
        const buttons = tabs.querySelectorAll('a');
        addAttribute(buttons);
    }
    if (filtersPopup) {
        if (window.innerWidth > 992) {
            filtersPopup.style.display = 'none';
        }
    }
    if (addFileButtons) {
        addFileButtons.forEach((button) => {
            const label = button.querySelector('label');
            label.setAttribute('tabindex', '0');
        });
    }

    addAttribute(headerLinks);
    addAttribute(arrows);
    addAttribute(navLinks);
    addAttribute(toggleContainers);
    addAttribute(checkboxes);
}

function addAttribute(items) {
    if (items) {
        items.forEach((item) => {
            item.setAttribute('tabindex', '0');
        });
    }
}

function addAriaForIcons() {
    const icons = document.querySelectorAll('ion-icon');
    const importantLinks = document.querySelectorAll('.important-link');

    if (importantLinks) {
        importantLinks.forEach((link) => {

            const image = link.querySelector('.important-link__icon');
            image.setAttribute('aria-hidden', 'true');
        });
    }

    if (icons) {
        icons.forEach((icon) => {
            icon.setAttribute('aria-hidden', 'true');
        });
    }
}

$(document).ready(function () {
    removeTabindex();
    addAriaForIcons();
});
