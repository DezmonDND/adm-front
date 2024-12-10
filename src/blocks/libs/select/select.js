$(document).ready(function () {
    replaceClass();

    const inputs = document.querySelectorAll('.input__add-document');

    inputs.forEach((input) => {
        input.addEventListener('input', function() {            
            addDocument(this.id);
        });
    });

    $('.select').select2();

    $('.select_multiple').select2({
        placeholder: 'Выберите получателя',
        allowClear: true,
    });
});
