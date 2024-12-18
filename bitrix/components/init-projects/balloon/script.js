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
    },
];

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

function createInitProjectHTML(project) {
    return `
        <a class="init-card" href=${project.link}>
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

function createInitProjects() {
    const projectsList = document.querySelector('.init-projects__list');

    if (projectsList) {
        INIT_PROJECTS.map((project) => {
            projectsList.insertAdjacentHTML('beforeend', createInitProjectHTML(project));
        });
    }
}

createInitProjects();

function showBalloon(project) {
    const map = document.querySelector('.init-projects__map');

    if (map) {
        const balloonHTML = `
            <div class="balloon"> 
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

document.addEventListener('click', (e) => {});

// Карта
const map = L.map('map').setView([61.252172, 73.362732], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const myIcon = L.divIcon({ className: 'my-div-icon' });

function addMarkers() {
    INIT_PROJECTS.map((project) => {
        const markerOptions = {
            title: `${project.title}`,
            clickable: true,
            draggable: false,
            icon: myIcon,
        };

        return L.marker([project.lat, project.lng], markerOptions).addTo(map);
    });
}
addMarkers();

document.addEventListener('DOMContentLoaded', (e) => {
    const markers = document.querySelectorAll('.leaflet-marker-icon');
    markers.forEach((marker) => {
        marker.addEventListener('click', (e) => {
            const currentProject = INIT_PROJECTS.find(function findProject(el) {
                return el.title === e.target.getAttribute('title');
            });

            showBalloon(currentProject);
        });
    });
});

function closeBalloon() {
    const balloon = document.querySelector('.balloon');
    balloon.remove();
}

document.addEventListener('click', (e) => {
    const balloon = document.querySelector('.balloon');
    const markers = document.querySelectorAll('.leaflet-marker-icon');

    if (balloon) {
        let isClickInsideMarker = false;

        markers.forEach((marker) => {
            if (marker.contains(e.target)) {
                isClickInsideMarker = true;
            }
        });

        if (!balloon.contains(e.target) && !isClickInsideMarker) {
            balloon.remove();
        }
    }
});
