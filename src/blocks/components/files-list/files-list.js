window.onload = function () {
    addDocument();
};

function addDocument() {
    const input = document.querySelector('.input__add-document');
    const list = document.querySelector('.files-list');

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
            console.log(curFiles);
        });
    }
}
