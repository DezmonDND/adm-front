function toggleSecondMenu(event) {
    const activeMenu = document.querySelector('.dm-second-menu_active');
    const activeLink = document.querySelector('.header__link_active');
    const button = event.target;
    let newMenu;

    if (event.target.textContent === 'О Думе города') {
        newMenu = document.querySelector('.dm-second-menu_about');
    } else if (event.target.textContent === 'Состав и структура') {
        newMenu = document.querySelector('.dm-second-menu_struct');
    } else if (event.target.textContent === 'Документы') {
        newMenu = document.querySelector('.dm-second-menu_doc');
    } else if (event.target.textContent === 'Деятельность') {
        newMenu = document.querySelector('.dm-second-menu_actions');
    } else if (event.target.textContent === 'О Сургуте') {
        newMenu = document.querySelector('.dm-second-menu_adm-about');
    } else if (event.target.textContent === 'Городская власть') {
        newMenu = document.querySelector('.dm-second-menu_adm-power');
    } else if (event.target.textContent === 'Документы') {
        newMenu = document.querySelector('.dm-second-menu_adm-docs');
    } else if (event.target.textContent === 'Контакты') {
        newMenu = document.querySelector('.dm-second-menu_adm-contacts');
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
