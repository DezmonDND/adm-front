// window.onload = function () {
//     const inputs = document.querySelectorAll('.input__add-document');

//     inputs.forEach((input) => {
//         input.addEventListener('input', function() {
//             addDocument(this.id);
//         });
//     });
// };

function addDocument(id) {
    const input = document.getElementById(id);
    const list = document.getElementById(`files-list-${id}`);

    if (input) {
        input.addEventListener('change', () => {
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
            const curFiles = input.files;

            for (let i = 0; i < curFiles.length; i++) {
                const listItem = document.createElement('div');
                listItem.classList.add('files-list__document');

                const button = document.createElement('button');
                button.classList.add('button', 'files-list__delete-button');
                button.addEventListener('click', () => {
                    list.removeChild(listItem);
                });

                const icon = document.createElement('ion-icon');
                icon.name = 'close-outline';
                button.appendChild(icon);

                const description = document.createElement('div');
                description.classList.add('files-list__document-description');

                const documentIcon = document.createElement('ion-icon');
                documentIcon.classList.add('files-list__icon');
                documentIcon.name = 'document';
                documentIcon.alt = 'Файл документа';

                const title = document.createElement('span');
                title.classList.add('files-list__document-title');
                title.textContent = curFiles[i].name;

                description.appendChild(documentIcon);
                description.appendChild(title);

                listItem.appendChild(button);
                listItem.appendChild(description);

                list.appendChild(listItem);
            }
        });
    }
}

// Форма

function replaceClass() {
    const form = document.querySelector('.generate_form');

    if (form) {
        const inputs = form.querySelectorAll('input');
        const selects = form.querySelectorAll('select');
        const fieldsets = form.querySelectorAll('.fieldset');

        inputs.forEach((input) => {
            if (input.type === 'submit') {
                input.classList.add('button');
            }

            if (input.type === 'reset') {
                input.classList.add('button');
                input.classList.add('button_white');
            }

            if (input.type === 'text') {
                input.classList.add('input');
            }

            if (input.type === 'file') {
                const answers = input.closest('.fieldset__answers');
                answers.innerHTML = '';
                const newButton = document.createElement('div');
                newButton.className = 'add-file-button';
                newButton.innerHTML = `
                <label for="${input.name}" id="file-label${input.name}">Вложить документ
                    <ion-icon class="add-file-button__icon md hydrated" name="add-outline" role="img"></ion-icon>
                    <input class="input__add-document" type="file" id="${input.name}" name="${input.name}" multiple="${input.multiple}">
                </label>
                <span class="add-file-button__desc">Принимаются файлы размером не более 2,5 МБ </span>
                `;

                newButton.addEventListener('change', () => {
                    addDocument(input.id);
                });

                answers.appendChild(newButton);

                const filesListId = `files-list-${input.name}`;
                const filesList = document.createElement('div');
                filesList.id = filesListId;
                filesList.classList.add('files-list');
                answers.appendChild(filesList);
            }
        });

        selects.forEach((select) => {
            if (select.multiple) {
                select.classList.add('select');
                select.classList.add('select_multiple');
            } else {
                select.classList.add('select');
            }
        });

        fieldsets.forEach((fieldset) => {
            const textarea = fieldset.querySelector('textarea');
            const answers = fieldset.querySelector('.fieldset__answers');
            const calendar = fieldset.querySelector('.calendar-icon');

            if (textarea) {
                const container = document.createElement('div');
                textarea.classList.add('textarea');
                container.className = 'textarea__container';
                container.appendChild(textarea);
                answers.insertBefore(container, textarea.nextSibling);
            }

            if (calendar) {
                const newCalendar = document.createElement('div');
                newCalendar.classList.add('adm-all-news__calendar');
                const onclickFunction = new Function(calendar.getAttribute('onclick'));

                newCalendar.innerHTML = `
                        <button class="calendar-icon button search-by-site__button adm-all-news__calendar-button" title="${calendar.alt}" type='button'>
                            <span class="button_span">Выбрать дату в календаре</span>
                            <ion-icon class="icon md hydrated" name="calendar-outline" role="img"></ion-icon>
                        </button>           
                `;
                calendar.remove();
                answers.appendChild(newCalendar);
                newCalendar.addEventListener('click', onclickFunction);
            }

            const inputs = fieldset.querySelectorAll('.fieldset__answers input');
            const brs = fieldset.querySelectorAll('br');

            brs.forEach((br) => {
                br.remove();
            });

            inputs.forEach((input) => {
                const label = input.closest('label');
                const secondLabel = label?.nextElementSibling;

                if (label && secondLabel && input.type === 'radio') {
                    const labelText = secondLabel?.textContent;
                    const newCheckbox = document.createElement('div');
                    newCheckbox.className = 'fieldset__checkboxes';
                    newCheckbox.innerHTML = `
                            <input class="сheckbox сheckbox-label radio" type="${input.type}" id="${input.id}" name="${input.name}" value='${input.value}'>
                            <label class="сheckbox__label" for="${input.id}">${labelText}</label>
                        `;
                    label.parentNode.replaceChild(newCheckbox, label);
                    secondLabel.remove();
                } else if (input.type === 'checkbox') {
                    const answers = input.closest('.fieldset__answers');
                    const label = input?.nextElementSibling;

                    if (answers) {
                        const container = document.createElement('div');
                        container.classList.add('fieldset__checkboxes');
                        input.classList.add('сheckbox');
                        input.classList.add('сheckbox-label');

                        answers.appendChild(container);
                        container.appendChild(input);
                        container.appendChild(label);
                    }
                }
            });
        });
    }
}

// replaceClass();
