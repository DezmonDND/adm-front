let counterReception = 1;

function addFormField(e) {
    const formField = document.querySelector('.fieldset');
    const userFormContainer = document.querySelector('.fieldset_user-contacts');

    e.preventDefault();

    const newFormFieldData = {
        cls_title: 'reception__new-user_title',
        type: '',
        title: 'Данные соавтора',
        span: '',
        error: false,
        inputs: [
            {
                placeholder: 'Фамилия',
                name: `surname${counterReception}`,
            },
            {
                placeholder: 'Имя',
                name: `name${counterReception}`,
            },
            {
                placeholder: 'Отчество',
                name: `patronymic${counterReception}`,
            },
        ],
    };

    counterReception++;
    const newFormField = formField.cloneNode(true);
    newFormField.innerHTML = `
    <div class='fieldset_new-author'>
      <h3 class="${newFormFieldData.cls_title}">${newFormFieldData.title}</h3>
      <button class="fieldset__delete-button" onclick="deleteFormField(this)"></button>
    </div>
    <div class="fieldset__answers">
      ${newFormFieldData.inputs
          .map(
              (input) => `
          <input class="input" type="text" placeholder="${input.placeholder}" name="${input.name}">
      `,
          )
          .join('')}
    </div>
  `;

    userFormContainer.appendChild(newFormField);
}

function isFormFieldFilled(formField) {
    const inputs = formField.querySelectorAll('.input');
    for (const input of inputs) {
        if (input.value.trim() === '') {
            return false;
        }
    }
    return true;
}

function deleteFormField(button) {
    const fieldset = button.closest('.fieldset');
    fieldset.remove();
}
