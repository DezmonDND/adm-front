function getBalloonLink() {
    const balloon = document.querySelector('.balloon');

    if (balloon) {
        const title = balloon.querySelector('.balloon-name');
        const link = title.querySelector('a');
        window.navigator.clipboard.writeText(link.href);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const balloons = document.querySelectorAll('.balloon');

    if (balloons) {
        balloons.forEach((balloon) => {
            balloon.addEventListener('click', getBalloonLink);
        });
    }
});
