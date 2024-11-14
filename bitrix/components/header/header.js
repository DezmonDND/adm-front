let isOpen = false;

function toggleMenu() {
    isOpen = !isOpen;
    document.querySelector('.button_burger').style.display = isOpen ? 'none' : 'flex';
    document.querySelector('.button_close').style.display = isOpen ? 'flex' : 'none';
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu_active');
    document.querySelector('.menu').classList.toggle('menu_active');
    document.querySelector('body').classList.toggle('overlay_mobile-menu');
}
