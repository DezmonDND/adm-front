$(document).ready(function () {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchMoveX = 0;
    let touchMoveY = 0;
    let marqueeSpeed = 20;

    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    }

    function handleTouchMoveLeft(event) {
        touchMoveX = event.touches[0].clientX;
        touchMoveY = event.touches[0].clientY;
        const deltaX = touchMoveX - touchStartX;
        const deltaY = touchMoveY - touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            const marquee = $(this);
            const newScrollLeft = marquee.scrollLeft() - (deltaX * marqueeSpeed) / 10;
            marquee.scrollLeft(newScrollLeft);
            touchStartX = touchMoveX;
        }
        event.preventDefault();
    }

    $('#about-partners__row')
        .simplemarquee({
            direction: 'left',
            space: 24,
        })
        .on('touchstart', handleTouchStart)
        .on('touchmove', handleTouchMoveLeft);

    $('#about-partners__row-reverse')
        .simplemarquee({
            direction: 'right',
            space: 24,
        })
        .on('touchstart', handleTouchStart)
        .on('touchmove', handleTouchMoveLeft);
});
