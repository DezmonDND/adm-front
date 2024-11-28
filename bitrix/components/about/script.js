document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');

    if (tabs && videoPlayer && videoSource) {
        tabs.forEach((tab) => {
            tab.addEventListener('click', (event) => {
                event.preventDefault();

                tabs.forEach((t) => t.classList.remove('tab-button_active'));

                tab.classList.add('tab-button_active');

                const videoPath = `./resources/${tab.getAttribute('value')}`;
                videoSource.src = videoPath;

                videoPlayer.load();
            });
        });
    }
});
