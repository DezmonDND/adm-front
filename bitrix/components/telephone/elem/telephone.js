function toggleHiddenPhone(el) {
    const parent = el.closest('.telephone-elem');
    const hiddenBlock = parent.querySelector('.telephone-elem-main');

    hiddenBlock.classList.toggle('active');
    parent.classList.toggle('active');
}
