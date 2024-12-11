function getValues(e) {
    if (e) {
        e.preventDefault();
    }

    const inputs = document.querySelectorAll(
        '.input, .textarea, .checkbox, .radio, .input__add-document, .ms__input',
    );
    let values = {};
    let errors = [];

    inputs.forEach((input) => {
        input.classList.remove('error-input');
        const errorSpan = input.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.remove();
        }
    });

    inputs.forEach((input) => {
        const name = input.name;

        if (input.hasAttribute('required') && !input.value.trim()) {
            errors.push(input);
        }

        if (input.type === 'checkbox' || input.type === 'radio') {
            values[name] = input.checked;
        } else if (name === 'multiSelect') {
            values[name] = selectedValues.join(', ');
        } else {
            values[name] = input.value;
        }
    });

    errors.forEach((input) => {
        input.classList.add('error-input');

        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error-message');
        errorSpan.textContent = 'Обязательное поле';

        if (
            !input.nextElementSibling ||
            !input.nextElementSibling.classList.contains('error-message')
        ) {
            input.insertAdjacentElement('afterend', errorSpan);
        }
    });

    console.log('Собранные значения:', values);
    if (errors.length) {
        console.error('Ошибки:', errors);
    }
}

document.addEventListener('input', (e) => {
    const input = e.target;
    if (input.classList.contains('error-input') && input.value.trim()) {
        input.classList.remove('error-input');
        const errorSpan = input.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.remove();
        }
    }
});

function isValid(input) {
    if (!input.value) {
        options.error = true;
        span = 'Ошибка';
        return;
    }
}
