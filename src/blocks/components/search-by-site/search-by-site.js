function toggleCalendar() {
    document
        .querySelector('.search-by-site__calendar')
        .classList.toggle('search-by-site__calendar_active');
}

document.addEventListener('click', function (e) {
    console.log(e.target.classList);
    
    if (e.target.classList.contains('.search-by-site__calendar_active')) {
        document
            .querySelector('.search-by-site__calendar')
            .classList.remove('search-by-site__calendar_active');
    }
});

function toggleFilters() {
    document.querySelector('.filters-popup').classList.toggle('filters-popup_open');
}
