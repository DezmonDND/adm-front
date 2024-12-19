// Массив с данными проектов
const INIT_PROJECTS = [
    {
        title: 'Общественное пространство "Городской Сад"',
        addDate: '07 декабря 2024',
        cost: '499 276,00 рублей',
        timeLimit: '01.07.2022 - 31.01.2023',
        initiator: 'Дума города Сургута',
        area: 'Ханты-Мансийский автономный округ – Югра',
        image: 'image_7.jpg',
        link: '1',
        status: 'Победитель конкурса',
        lat: '61.252172',
        lng: '73.362732',
        tag: 'Молодежная политика',
    },
    {
        title: 'Наименование инциативного проекта',
        addDate: '23 сентября 2024',
        cost: '2 978 321,00',
        timeLimit: '2 года',
        initiator: 'Дума города Сургута',
        area: 'Ханты-Мансийский автономный округ – Югра',
        image: 'image_1.jpg',
        link: '2',
        status: 'Победитель конкурса',
        lat: '61.242086',
        lng: '73.394164',
        tag: 'Муниципальные учреждения',
    },
    {
        title: 'Инициативный проект 3',
        addDate: '11 ноября 2024',
        cost: '8 178 321,00',
        timeLimit: '3 года',
        initiator: 'Администрация',
        area: 'Центр города',
        image: 'image_6.jpg',
        link: '3',
        status: 'Победитель конкурса',
        lat: '61.252086',
        lng: '73.404164',
        tag: 'Спорт',
    },
    {
        title: 'Инициативный проект 4',
        addDate: '11 ноября 2024',
        cost: '8 178 321,00',
        timeLimit: '3 года',
        initiator: 'Администрация',
        area: 'Центр города',
        image: 'image_6.jpg',
        link: '3',
        status: 'Победитель конкурса',
        lat: '61.252086',
        lng: '73.504164',
        tag: 'транспортные остановки',
    },
    {
        title: 'Инициативный проект 5',
        addDate: '11 ноября 2024',
        cost: '8 178 321,00',
        timeLimit: '3 года',
        initiator: 'Администрация',
        area: 'Центр города',
        image: 'image_2.jpg',
        link: '3',
        status: 'Победитель конкурса',
        lat: '61.252086',
        lng: '73.454164',
        tag: 'образование',
    },
    {
        title: 'Инициативный проект 6',
        addDate: '11 ноября 2024',
        cost: '8 178 321,00',
        timeLimit: '3 года',
        initiator: 'Администрация',
        area: 'Центр города',
        image: 'image_3.jpg',
        link: '3',
        status: 'Победитель конкурса',
        lat: '61.252086',
        lng: '73.304164',
        tag: 'здравоохранение',
    },
    {
        title: 'Инициативный проект 7',
        addDate: '11 ноября 2024',
        cost: '8 178 321,00',
        timeLimit: '3 года',
        initiator: 'Администрация',
        area: 'Центр города',
        image: 'image_4.jpg',
        link: '3',
        status: 'Победитель конкурса',
        lat: '61.252086',
        lng: '73.324164',
        tag: 'культура',
    },
    {
        title: 'Инициативный проект 8',
        addDate: '11 ноября 2024',
        cost: '8 178 321,00',
        timeLimit: '3 года',
        initiator: 'Администрация',
        area: 'Центр города',
        image: 'monument_image.png',
        link: '3',
        status: 'Победитель конкурса',
        lat: '61.262086',
        lng: '73.404164',
        tag: 'Молодежная политика',
    },
];

// Разметка для карточки проекта
function createInitProjectHTML(project) {
    return `
<a class="init-card" href=${project.link} role="link" aria-label="Карточка инициативного проекта">
	<div class="init-card__container">
        <img alt="Изображение проекта" class="init-card__image" src="../resources/${project.image}">
		<div class="init-card__description">
			<h4 class="init-card__title">${project.title}</h4>
			<div class="init-card__content">
				<div class="init-card__columns">
					<div class="init-card__row"> 
                        <span class="init-card__name">Дата внесения</span>
                        <span class="init-card__text">${project.addDate}</span>
					</div>
					<div class="init-card__row"> 
                        <span class="init-card__name">Общая стоимость</span>
                        <span class="init-card__text">${project.cost}</span>
					</div>
				</div>
				<div class="init-card__columns">
					<div class="init-card__row"> 
                        <span class="init-card__name">Срок реализации</span>
                        <span class="init-card__text">${project.timeLimit}</span>
					</div>
				</div>
				<div class="init-card__columns">
					<div class="init-card__row"> 
                        <span class="init-card__name">Территория реализации</span>
                        <span class="init-card__text">${project.area}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</a>
`;
}

// Создать список проектов
function createInitProjects() {
    const projectsList = document.querySelector('.init-projects__list');

    if (projectsList) {
        INIT_PROJECTS.map((project) => {
            projectsList.insertAdjacentHTML('beforeend', createInitProjectHTML(project));
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createInitProjects();
});

// Закрыть попап на кнопку
function closeBalloon() {
    const balloon = document.querySelector('.balloon');
    balloon.remove();
    document.querySelector('body').classList.remove('balloon_overlay');
}

// Получить ссылку при клике по кнопке
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

function initMap() {
    const mapContainer = document.getElementById('map');

    if (mapContainer) {
        // Разметка для балуна
        function showBalloon(project) {
            const map = document.querySelector('.init-projects__map');

            if (map) {
                const balloonHTML = `
            <div class="balloon"> 
                <div class="balloon-content-container"> 
                    <div class="balloon-title">
                        <div class="balloon-name"> 
                            <a href=${project.link}>${project.title}</a>
                        </div>
                        <div class="balloon-btns"> 
                            <ion-icon name="link-outline" onclick="getBalloonLink()" aria-hidden="true" role="img" class="md hydrated"></ion-icon>
                            <ion-icon name="close" onclick="closeBalloon()" aria-hidden="true" role="img" class="md hydrated"></ion-icon>
                        </div>
                    </div>
                    <div class="balloon-content">
                        <div class="balloon-img">
                            <img src="./resources/${project.image}" alt="Изображение проекта">
                        </div><div class="balloon-info">
                        <div class="balloon-info-item">
                            <span>Дата внесения</span>
                            <span>${project.addDate}</span>
                        </div>
                        <div class="balloon-info-item">
                            <span>Срок реализации</span>
                            <span>${project.timeLimit}</span>
                        </div>
                        <div class="balloon-info-item">
                            <span>Территория реализации</span>
                            <span>${project.area}</span>
                        </div>
                        <div class="balloon-info-item">
                            <span>Инициатор</span>
                            <span>${project.initiator}</span>
                        </div>
                        <div class="balloon-info-item">
                            <span>Общая стоимость</span>
                            <span>${project.cost}</span>
                        </div>
                        <div class="balloon-info-item">
                            <span>Статус проекта</span>
                            <span>${project.status}</span>
                        </div>
                    </div>    
                </div>
            </div>
        `;

                const balloons = document.querySelectorAll('.balloon');
                if (balloons) {
                    balloons.forEach((el) => {
                        el.remove();
                    });
                }

                map.insertAdjacentHTML('beforeend', balloonHTML);
            }
        }

        // Карта
        const map = L.map('map').setView([61.252172, 73.362732], 12);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // Удалить логотипы разработчика
        var attributionControl = map.attributionControl;
        attributionControl.remove();

        function getIcon(project) {
            const tag = project.tag.toLowerCase();
            if (tag === 'муниципальные учреждения') {
                return 'municipal_init-icon.svg';
            } else if (tag === 'инициативные проекты') {
                return 'project_init-icon.svg';
            } else if (tag === 'спорт') {
                return 'sport_init-icon.svg';
            } else if (tag === 'транспортные остановки') {
                return 'bus_init-icon.svg';
            } else if (tag === 'образование') {
                return 'education_init-icon.svg';
            } else if (tag === 'здравоохранение') {
                return 'health_init-icon.svg';
            } else if (tag === 'культура') {
                return 'culture_init-icon.svg';
            } else if (tag === 'молодежная политика') {
                return 'jung-policy_init-icon.svg';
            }
        }

        // Создать маркеры на карте для каждого балуна
        function addMarkers() {
            INIT_PROJECTS.map((project) => {
                // Кастомная иконка
                const myIcon = L.icon({
                    iconUrl: `../icons/${getIcon(project)}`,
                    className: 'balloon-icon',
                });

                const markerOptions = {
                    title: `${project.title}`,
                    clickable: true,
                    draggable: false,
                    icon: myIcon,
                };

                const marker = L.marker([project.lat, project.lng], markerOptions).addTo(map);
                marker.tagId = project.tag;
                return marker;
            });
        }

        addMarkers();

        // Открыть попап при клике по маркеру
        document.addEventListener('DOMContentLoaded', (e) => {
            const markers = document.querySelectorAll('.leaflet-marker-icon');
            markers.forEach((marker) => {
                marker.addEventListener('click', (e) => {
                    const currentProject = INIT_PROJECTS.find(function findProject(el) {
                        return el.title === e.target.getAttribute('title');
                    });

                    showBalloon(currentProject);
                    const balloon = document.querySelector('.balloon');

                    if (window.innerWidth < 768) {
                        setTimeout(() => {
                            balloon.style.bottom = 0;
                        });
                    } else {
                        setTimeout(() => {
                            balloon.style.opacity = 1;
                        });
                    }

                    if (window.innerWidth < 768) {
                        document.querySelector('body').classList.add('balloon_overlay');
                        document
                            .querySelector('.init-projects__map')
                            .classList.add('balloon_overlay-map');
                    }
                });
            });
        });

        // Закрыть попап при клике вне попапа
        document.addEventListener('click', (e) => {
            const balloon = document.querySelector('.balloon-content-container');
            const markers = document.querySelectorAll('.leaflet-marker-icon');

            if (balloon) {
                let isClickInsideMarker = false;

                markers.forEach((marker) => {
                    if (marker.contains(e.target)) {
                        isClickInsideMarker = true;
                    }
                });

                if (!balloon.contains(e.target) && !isClickInsideMarker) {
                    balloon.closest('.balloon').remove();
                    document.querySelector('body').classList.remove('balloon_overlay');
                    document
                        .querySelector('.init-projects__map')
                        .classList.remove('balloon_overlay-map');
                }
            }
        });

        function getTagImage(project) {
            const tag = project.tag.toLowerCase();
            if (tag === 'муниципальные учреждения') {
                return 'business';
            } else if (tag === 'инициативные проекты') {
                return 'bulb';
            } else if (tag === 'спорт') {
                return 'football';
            } else if (tag === 'транспортные остановки') {
                return 'bus';
            } else if (tag === 'образование') {
                return 'school';
            } else if (tag === 'здравоохранение') {
                return 'fitness';
            } else if (tag === 'культура') {
                return 'book';
            } else if (tag === 'молодежная политика') {
                return 'accessibility';
            }
        }

        function createTagHTML(project) {
            const button = document.createElement('button');
            button.classList.add('tab-button');
            button.setAttribute('data-tag-value', project.tag);
            button.textContent = project.tag;

            const image = document.createElement('ion-icon');
            image.name = getTagImage(project);
            button.appendChild(image);
            return button;
        }

        function createTagsList() {
            const map = document.querySelector('.init-projects__map');

            if (map && INIT_PROJECTS) {
                const tagList = document.createElement('div');
                tagList.classList.add('tabs-tag');
                tagList.setAttribute('id', 'init-project-tags');
                map.appendChild(tagList);

                const uniqueTags = [...new Set(INIT_PROJECTS.map((project) => project.tag))];

                uniqueTags.forEach((tag) => {
                    const button = createTagHTML({ tag });
                    tagList.append(button);
                });

                $('#init-project-tags').slick({
                    infinite: false,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    lazyLoad: 'progressive',
                    arrows: true,
                    adaptiveHeight: true,
                    variableWidth: true,
                    responsive: [
                        { breakpoint: 1300, settings: { slidesToShow: 4 } },
                        { breakpoint: 1100, settings: { slidesToShow: 3 } },
                        { breakpoint: 992, settings: { slidesToShow: 2 } },
                        { breakpoint: 500, settings: { slidesToShow: 1 } },
                    ],
                });
            }
        }

        createTagsList();

        // Получить все маркеры с карты
        function getAllMarkersFromMap() {
            const markers = [];
            for (const layerId in map._layers) {
                const layer = map._layers[layerId];
                if (layer instanceof L.Marker) {
                    markers.push(layer);
                }
            }
            return markers;
        }

        let allMarkers = getAllMarkersFromMap();

        // Отфильтровать балуны
        function filterBalloons() {
            const mapElement = document.querySelector('.init-projects__map');

            if (mapElement) {
                const tags = mapElement.querySelectorAll('.tab-button');
                tags.forEach((tag) => {
                    tag.classList.add('tab-button_active');
                });

                tags.forEach((tag) => {
                    tag.addEventListener('click', (e) => {
                        e.target.classList.toggle('tab-button_active');

                        const filteredMarkers = allMarkers.filter((marker) => {
                            return (
                                marker.tagId.toLowerCase() ===
                                e.target.dataset.tagValue.toLowerCase()
                            );
                        });

                        filteredMarkers.forEach((marker) => {
                            const markerElement = marker.getElement();

                            if (markerElement) {
                                markerElement.style.display = 'none';

                                if (e.target.classList.contains('tab-button_active')) {
                                    markerElement.style.display = 'block';
                                }
                            }
                        });
                    });
                });
            }
        }

        filterBalloons();
    }
}

initMap();
