function openMenu() {
    const burgerButton = document.querySelector('.button_burger');
    const closeButton = document.querySelector('.button_close');
    const mobileMenu = document.querySelector('.menu');
    const body = document.querySelector('body');

    burgerButton.style.display = 'none';
    closeButton.style.display = 'flex';
    mobileMenu.style.display = 'flex';
    mobileMenu.style.right = '0';
}

function closeMenu() {
    const burgerButton = document.querySelector('.button_burger');
    const closeButton = document.querySelector('.button_close');
    const mobileMenu = document.querySelector('.menu');
    const body = document.querySelector('body');

    burgerButton.style.display = 'flex';
    closeButton.style.display = 'none';
    mobileMenu.style.display = 'none';
}
