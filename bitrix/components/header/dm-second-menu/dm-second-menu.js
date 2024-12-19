$(document).ready(function () {
    $('.header__link').on('click', function (e) {
        e.stopPropagation();
        $('.dm-second-menu_active')
            .not($(this).find('.dm-second-menu'))
            .removeClass('dm-second-menu_active');
        $('.header__link_active').not(this).removeClass('header__link_active');

        const $menu = $(this).find('.dm-second-menu');

        $menu.toggleClass('dm-second-menu_active');
        $(this).toggleClass('header__link_active');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.dm-second-menu, .header__link').length) {
            $('.dm-second-menu_active').removeClass('dm-second-menu_active');
            $('.header__link_active').removeClass('header__link_active');
        }
    });

    $('.dm-second-menu').on('click', function (e) {
        e.stopPropagation();
    });
});

function closeSecondMenu(e) {
    const button = document.querySelector('.dm-second-menu__button-close');

    // if (e.target.classList.contains('dm-second-menu__button-close')) {
    if (button) {
        e.target.closest('.dm-second-menu').classList.remove('dm-second-menu_active');
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
