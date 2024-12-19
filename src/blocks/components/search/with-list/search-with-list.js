document.addEventListener('DOMContentLoaded', (e) => {
    const search = document.querySelector('.search-with-list');

    if (search) {
        const input = search.querySelector('.input-search');
        const results = search.querySelector('.search-results');

        input.addEventListener('click', () => {
            results.classList.toggle('search-results_active');
            e.stopPropagation();
        });
    }
});

document.addEventListener('click', (e) => {
    const search = document.querySelector('.search-with-list');

    if (search) {
        const resultsActive = search.querySelector('.search-results_active');

        if (resultsActive && !e.target.closest('.search-results, .input-search')) {
            resultsActive.classList.remove('search-results_active');
        }
    }
});
