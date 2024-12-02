function openSelect() {
    const selectMenu = document.querySelector('.select_multiple-menu');
    selectMenu.style.display = selectMenu.style.display === 'none' ? 'flex' : 'none';
}

function selectOption(element) {
    element.classList.toggle('select_multiple-option_selected');
}

$(document).ready(function () {
    $('.select').select2();
});

$(document).ready(function () {
    $('.select_multi').select2({
        allowClear: true,
        tags: true,
    });
});
