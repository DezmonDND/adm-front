function replaceIcons() {
    const content = document.querySelector('.content');

    if (content) {
        const icons = content.querySelectorAll('.glyphicon-save');
        if (icons) {
            icons.forEach((icon) => {
                const link = icon.closest('a');
                const container = link.closest('p');
                container.style.display = 'flex';
                const newIcon = document.createElement('ion-icon');
                newIcon.classList.add('icon');
                newIcon.name = 'download-outline';
                icon.closest('a').appendChild(newIcon);
                icon.closest('a').classList.add('content__link');
            });
        }
    }
}

replaceIcons();
