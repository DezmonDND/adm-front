$(document).ready(function () {
    $('.select').select2();
});

$(document).ready(function () {
    $('.select_multiple').select2({
        placeholder: 'Выберите получателя',
        allowClear: true,
    });
});
