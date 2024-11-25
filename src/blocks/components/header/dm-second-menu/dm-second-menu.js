function toggleSecondMenu(event) {
    const allMenus = document.querySelectorAll('.dm-second-menu');
    const allButtons = document.querySelectorAll('.header__link');

    allMenus.forEach((menu) => menu.classList.remove('dm-second-menu_active'));
    allButtons.forEach((button) => button.classList.remove('header__link_active'));

    let secondMenu;
    const button = event.target;

    button.classList.add('header__link_active');

    if (event.target.textContent === 'О Думе города') {
        secondMenu = document.querySelector('.dm-second-menu_about');
    } else if (event.target.textContent === 'Состав и структура') {
        secondMenu = document.querySelector('.dm-second-menu_struct');
    } else if (event.target.textContent === 'Документы') {
        secondMenu = document.querySelector('.dm-second-menu_doc');
    } else if (event.target.textContent === 'Деятельность') {
        secondMenu = document.querySelector('.dm-second-menu_actions');
    } else {
        ('');
    }

    if (secondMenu) {
        secondMenu.classList.add('dm-second-menu_active');
    }
}
