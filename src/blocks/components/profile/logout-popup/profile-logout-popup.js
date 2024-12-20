function closeLogoutPopup() {
    const popup = document.querySelector('.profile-logout-popup');

    if (popup) {
        popup.classList.remove('profile-logout-popup_open');
        document.querySelector('body').classList.remove('overlay_mobile-menu');
    }
}

function showLogout() {
    const popup = document.querySelector('.profile-logout-popup');

    if (popup) {
        popup.classList.add('profile-logout-popup_open');
        document.querySelector('body').classList.add('overlay_mobile-menu');
    }
}

document.addEventListener('click', (e) => {
    const openedPopup = document.querySelector('.profile-logout-popup_open');

    if (
        openedPopup &&
        !e.target.closest('.profile-logout-popup__content') &&
        !e.target.closest('.button_exit')
    ) {
        openedPopup.classList.remove('profile-logout-popup_open');
        document.querySelector('body').classList.remove('overlay_mobile-menu');
    }
});
