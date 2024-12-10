function replaceButtonText() {
    const container = document.querySelector('.init-projects-title');

    if (container) {
        const button = container.querySelector('.button');

        if (button) {
            const buttonText = button.querySelector('.button_span');
            console.log(buttonText);
            

            if (window.innerWidth < 550) {
                buttonText.textContent = 'Подать';
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', replaceButtonText);
document.addEventListener('resize', replaceButtonText);