function toggleSecondMenu(event) {
    const activeMenu = document.querySelector('.dm-second-menu_active');
    const activeLink = document.querySelector('.header__link_active');
    const body = document.querySelector('body');
    const button = event.target;
    let newMenu;

    if (event.target.textContent === 'О Думе города') {
        newMenu = document.querySelector('.dm-second-menu_about');
    } else if (event.target.textContent === 'Состав и структура') {
        newMenu = document.querySelector('.dm-second-menu_struct');
    } else if (event.target.textContent === 'Деятельность') {
        newMenu = document.querySelector('.dm-second-menu_actions');
    } else if (event.target.textContent === 'Обратная связь') {
        newMenu = document.querySelector('.dm-second-menu_feedbacks');
    } else if (event.target.textContent === 'О Сургуте') {
        newMenu = document.querySelector('.dm-second-menu_adm-about');
    } else if (event.target.textContent === 'Городская власть') {
        newMenu = document.querySelector('.dm-second-menu_adm-power');
    } else if (event.target.textContent === 'Документы') {
        if (body.classList.contains('tmp-duma')) {
            newMenu = document.querySelector('.dm-second-menu_doc');
        } else {
            newMenu = document.querySelector('.dm-second-menu_adm-documents');
        }
    } else if (event.target.textContent === 'Контакты') {
        newMenu = document.querySelector('.dm-second-menu_adm-contacts');
    } else if (event.target.textContent === 'Быстрый доступ') {
        newMenu = document.querySelector('.dm-second-menu_adm-quick');
    } else if (event.target.textContent === 'Публичные слушания') {
        newMenu = document.querySelector('.dm-second-menu_adm-public');
    } else if (event.target.textContent === 'Противодействие коррупции') {
        newMenu = document.querySelector('.dm-second-menu_adm-corruption');
    } else if (event.target.textContent === 'Пресс-центр') {
        newMenu = document.querySelector('.dm-second-menu_adm-press');
    } else if (event.target.textContent === 'Обращения граждан') {
        newMenu = document.querySelector('.dm-second-menu_adm-citizens');
    }

    if (newMenu) {
        if (activeMenu && activeMenu === newMenu) {
            activeMenu.classList.remove('dm-second-menu_active');
            activeLink.classList.remove('header__link_active');
        } else if (activeMenu && activeMenu !== newMenu) {
            activeMenu.classList.remove('dm-second-menu_active');
            activeLink.classList.remove('header__link_active');
            button.classList.add('header__link_active');
            newMenu.classList.add('dm-second-menu_active');
        } else {
            button.classList.add('header__link_active');
            newMenu.classList.add('dm-second-menu_active');
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        if (!event.target.closest('.header__link')) {
            const dropdowns = document.querySelectorAll('.dm-second-menu');
            dropdowns.forEach((dropdown) => {
                if (
                    dropdown.classList.contains('dm-second-menu_active') &&
                    !dropdown.contains(event.target)
                ) {
                    dropdown.classList.remove('dm-second-menu_active');
                    document
                        .querySelector('.header__link_active')
                        .classList.remove('header__link_active');
                }
            });
        }
    });
});

function closeSecondMenu() {
    const openedSecondMenu = document.querySelector('.dm-second-menu_active');
    const activeLink = document.querySelector('.header__link_active');

    if (openedSecondMenu && activeLink) {
        openedSecondMenu.classList.remove('dm-second-menu_active');
        activeLink.classList.remove('header__link_active');
    }
}

const secondMenuCloseButton = () => {
    const secondMenus = document.querySelectorAll('.dm-second-menu');

    secondMenus.forEach((menu) => {
        const menuContent = menu.querySelector('.dm-second-menu__content');
        const closeButton = document.createElement('button');
        const closeButtonIcon = document.createElement('ion-icon');

        closeButtonIcon.className = 'icon';
        closeButtonIcon.name = 'close-outline';
        closeButton.appendChild(closeButtonIcon);
        closeButton.className = 'button files-list__delete-button dm-second-menu__button-close';
        closeButton.addEventListener('click', closeSecondMenu);
        menuContent.appendChild(closeButton);
    });
};

document.addEventListener('DOMContentLoaded', secondMenuCloseButton);
