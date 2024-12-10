document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');

    if (tabs) {
        tabs.forEach((tab) => {
            tab.addEventListener('click', (event) => {
                event.preventDefault();

                tabs.forEach((t) => t.classList.remove('tab-button_active'));

                tab.classList.add('tab-button_active');
            });
        });
    }
});
