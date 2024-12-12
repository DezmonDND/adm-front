function removeTabindex() {
    document.querySelectorAll('*').forEach((element) => {
        document.querySelector('.mobile-menu').setAttribute('tabindex', '-1');
        document.querySelector('.mobile-menu').setAttribute('aria-hidden', 'true');

        const isHidden = window.getComputedStyle(element).display === 'none';

        if (isHidden) {
            element.setAttribute('tabindex', '-1');
            element.setAttribute('aria-hidden', 'true');
        } else if (element.hasAttribute('tabindex') && element.getAttribute('tabindex') === '-1') {
            element.removeAttribute('tabindex');
            element.setAttribute('aria-hidden', 'false');
        }
    });

    const headerLinks = document.querySelectorAll('.header__link');

    if (headerLinks) {
        headerLinks.forEach((link) => {
            link.setAttribute('tabindex', '0');
        });
    }

    const headerButtonsContainer = document.querySelector('.header__buttons');

    if (headerButtonsContainer) {
        const buttons = headerButtonsContainer.querySelectorAll('.button');

        buttons.forEach((button) => {
            button.setAttribute('tabindex', '0');
        });
    }

    const headerServices = document.querySelector('.header-services__container');

    if (headerServices) {
        const buttons = headerServices.querySelectorAll('a');

        buttons.forEach((button) => {
            button.setAttribute('tabindex', '0');
        });
    }

    const tabs = document.querySelector('.tabs__container');
    if (tabs) {
        const buttons = tabs.querySelectorAll('a');
        buttons.forEach((button) => {
            button.setAttribute('tabindex', '0');
        });
    }

    const filtersPopup = document.querySelector('.filters-popup');

    if (filtersPopup) {
        if (window.innerWidth > 992) {
            filtersPopup.style.display = 'none';
        }
    }
}

removeTabindex();

function addAriaForIcons() {
    const icons = document.querySelectorAll('ion-icon');
    const importantLinks = document.querySelectorAll('.important-link');

    if (importantLinks) {
        importantLinks.forEach((link) => {
            console.log(link);

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

addAriaForIcons();
