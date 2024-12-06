function toggleHiddenPhone(el) {
    const parent = el.closest('.telephone-elem');
    const hiddenBlock = parent.querySelector('.telephone-elem-main');

    // Переключаем класс активности
    hiddenBlock.classList.toggle('active');

    // Меняем иконку
    const isOpen = hiddenBlock.classList.contains('active');
    el.setAttribute('name', isOpen ? 'chevron-up-outline' : 'chevron-down-outline');
}
