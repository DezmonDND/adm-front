const slides_1 = [
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_1.jpg',
    },
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_1.jpg',
    },
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_1.jpg',
    },
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_1.jpg',
    }
]

const slides_2 = [
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_2.jpg',
    },
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_2.jpg',
    },
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_2.jpg',
    },
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_2.jpg',
    }
]

const slides_3 = [
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_3.jpg',
    },
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_3.jpg',
    },
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_3.jpg',
    },
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_3.jpg',
    }
]

const slides_4 = [
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_4.jpg',
    },
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_4.jpg',
    },
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_4.jpg',
    },
    {
        title: 'Памятный знак для&nbsp;будущего «Сургутского кремля» создадут горожане',
        image: 'image_4.jpg',
    }
]

function removeSlider() {
    const slider = document.querySelector('.news-main__card-list');

    const slide = `
        <a class="news-main-card" href="/">
            <div class="news-main-card__container">
                <div class="news-main-card__image-block"> 
                    <img class="news-main-card__image" src="../resources/${slide.image}" alt="Изображения">
                    <div class="news-main-card__tags">
                        <span class="button button_blue button_radius news-card__tag button_size_xs button_without-event" title="">
                            <span class="button_span">Кино</span>
                        </span>
                    </div>
                </div>
                <div class="news-main-card__content"> 
                    <span class="news-main-card__date">10&nbsp;июня 2023</span>
                    <span class="news-main-card__title">${slide.title}</span>
                </div>
            </div>
        </a>
    `;

    $('#news-main__card-list').slick('destroy');
    slider.innerHTML = '';

    console.log(slider);
    if (value.textContent === 'Самые важные') {
        slider.appendChild(slide);
    } else if (value.textContent === 'Реализация нацпроектов') {
        slider.appendChild(slide2);
    } else {
        console.log(1);
        return;
    }



    $('#news-main__card-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 500, settings: { slidesToShow: 1 } },
        ],
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');

    if (!tabs || tabs.length === 0) {
        console.error('No tab buttons found.');
        return;
    }

    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            tabs.forEach((t) => t.classList.remove('tab-button_active'));
            e.target.classList.add('tab-button_active');
            removeSlider(e.target);
        });
    });
});
