const calendars = document.querySelectorAll("#calendar tbody");  // Получаем все календари
const monthYearContainers = document.querySelectorAll("#month-year"); // Предполагается, что у каждого календаря есть свой контейнер для месяца и года
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

function generateCalendar(calendarElement, monthYearElement, month, year) {
    calendarElement.innerHTML = "";
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    let date = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 1; j <= 7; j++) {
            const cell = document.createElement("td");
            if (i === 0 && j < firstDay) {
                const emptyCell = document.createElement("td");
                row.appendChild(emptyCell);
            } else if (date > daysInMonth) {
                break;
            } else {
                cell.textContent = date;
                if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                    cell.classList.add("today");
                }
                row.appendChild(cell);
                date++;
            }
        }
        calendarElement.appendChild(row); // Добавляем строку в текущий календарь
    }

    monthYearElement.textContent = `${months[month]} ${year}`; // Обновляем отображение месяца и года
}

function updateAllCalendars() {
    calendars.forEach((calendarElement, index) => {
        const monthYearElement = monthYearContainers[index]; // Соответствующий элемент для отображения месяца и года
        generateCalendar(calendarElement, monthYearElement, currentMonth, currentYear);
    });
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateAllCalendars(); // Обновляем все календари
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateAllCalendars(); // Обновляем все календари
}

// Инициализируем все календари при загрузке страницы
updateAllCalendars();