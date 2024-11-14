document.addEventListener('DOMContentLoaded', () => {
    const carouselElems = document.querySelector('.events-read-elems');
    if(carouselElems) {
        let events = [...carouselElems.children];
        const dots = document.querySelector('.events-read').querySelectorAll('.events-control-dot');

        let slidesToShow = window.innerWidth <= 768 ? (window.innerWidth <= 390 ? 1 : 2) : 4;
        let currentIndex = slidesToShow;
        let isTransitioning = false;
        const transitionDuration = 0.3; // Скорость анимации в секундах

        // Переменные для обработки свайпа
        let startX = 0;
        let endX = 0;

        // Клонируем элементы для создания бесконечного эффекта
        events.slice(-slidesToShow).forEach(event => {
            carouselElems.insertBefore(event.cloneNode(true), carouselElems.firstChild);
        });
        events.slice(0, slidesToShow).forEach(event => {
            carouselElems.appendChild(event.cloneNode(true));
        });

        const updatedEvents = [...carouselElems.children];
        let eventWidth = updatedEvents[0].clientWidth + 20;

        // Устанавливаем начальное смещение
        carouselElems.style.transform = `translateX(${-eventWidth * currentIndex}px)`;
        updateDots();

        const left = document.getElementById('left-news');
        const right = document.getElementById('right-news');

        left.addEventListener('click', () => {
            if (!isTransitioning) shiftSlide(-1);
        });
        
        right.addEventListener('click', () => {
            if (!isTransitioning) shiftSlide(1);
        });

        // Добавляем поддержку свайпа
        carouselElems.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        carouselElems.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        });

        carouselElems.addEventListener('touchend', () => {
            const swipeDistance = startX - endX;
            if (Math.abs(swipeDistance) > 50) { // Порог для распознавания свайпа
                if (swipeDistance > 0 && !isTransitioning) {
                    shiftSlide(1); // Свайп влево
                } else if (swipeDistance < 0 && !isTransitioning) {
                    shiftSlide(-1); // Свайп вправо
                }
            }
            startX = 0;
            endX = 0;
        });

        window.addEventListener('resize', () => {
            slidesToShow = window.innerWidth <= 768 ? (window.innerWidth <= 390 ? 1 : 2) : 4;
            eventWidth = updatedEvents[0].clientWidth + 20;
            carouselElems.style.transform = `translateX(${-eventWidth * currentIndex}px)`;
            updateDots();
        });

        function shiftSlide(direction) {
            if (isTransitioning) return;
            isTransitioning = true;

            carouselElems.style.transition = `transform ${transitionDuration}s ease-in-out`;
            currentIndex += direction;

            carouselElems.style.transform = `translateX(${-eventWidth * currentIndex}px)`;
            updateDots();

            setTimeout(() => handleTransitionEnd(), transitionDuration * 1000);
        }

        function handleTransitionEnd() {
            if (currentIndex === 0) {
                carouselElems.style.transition = 'none';
                currentIndex = updatedEvents.length - 2 * slidesToShow;
                carouselElems.style.transform = `translateX(${-eventWidth * currentIndex}px)`;
            } else if (currentIndex === updatedEvents.length - slidesToShow) {
                carouselElems.style.transition = 'none';
                currentIndex = slidesToShow;
                carouselElems.style.transform = `translateX(${-eventWidth * currentIndex}px)`;
            }
            isTransitioning = false;
        }

        function updateDots() {
            dots.forEach(dot => dot.classList.remove('active'));
            const activeDotIndex = (currentIndex - slidesToShow) % dots.length;
            dots[activeDotIndex].classList.add('active');
        }
    }
});
