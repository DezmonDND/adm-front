const msDropdownList = document.querySelector('.multi-select__dropdown');
const msDropdownItems = document.querySelectorAll('.multi-select__dropdown-item');
const multiSelect = document.querySelector('input[name="multiSelect"]');
const msInput = document.querySelector('.multi-select__input');
const msChose = document.querySelector('.multi-select__chose');
let visibleDropdownItems;
let counter = -1;
let selectedValues = [];

document.addEventListener('DOMContentLoaded', () => {
    msChose &&
        msChose.addEventListener('click', (event) => {
            if (!event.target.closest('.multi-select__chose-item')) {
                msDropdownList.classList.remove('multi-select__dropdown_hidden');
            }
        });
        
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.multi-select') && msDropdownList) {
            msDropdownList.classList.add('multi-select__dropdown_hidden');
        }

        if (event.target.closest('.multi-select__chose-item')) {
            searchSelectedElement(event.target.textContent);
        }
    });

    msDropdownList &&
        msDropdownList.addEventListener('click', (event) => {
            if (event.target.classList.contains('multi-select__dropdown-item_chose')) {
                searchSelectedElement(event.target.textContent);
            } else if (event.target.classList.contains('multi-select__dropdown-item')) {
                createNewElement('li', ['multi-select__chose-item'], event, msChose);
                selectedValues.push(event.target.dataset.value);
                updateMultiSelectValue();
            }
            msInput.value = '';
            msInput.focus();
        });
});

function createNewElement(tag, styles, event, parent) {
    const newElement = document.createElement(tag);
    newElement.classList.add(...styles);
    newElement.textContent = event.target.textContent;
    parent.prepend(newElement);
    event.target.classList.add('multi-select__dropdown-item_chose');
}

function searchSelectedElement(text) {
    msDropdownItems.forEach((item) => {
        if (text.toLowerCase() === item.textContent.toLowerCase()) {
            item.classList.remove('multi-select__dropdown-item_chose');
            deleteElement(text);
            const index = selectedValues.indexOf(item.dataset.value);
            if (index > -1) {
                selectedValues.splice(index, 1);
            }
            updateMultiSelectValue();
        }
    });
}

function deleteElement(text) {
    const msChoseItems = document.querySelectorAll('.multi-select__chose-item');
    msChoseItems.forEach((item) => {
        if (text.toLowerCase() === item.textContent.toLowerCase()) {
            item.remove();
        }
    });
}

function updateMultiSelectValue(e) {
    multiSelect.value = selectedValues.join(', ');
    getValues(e);
}
