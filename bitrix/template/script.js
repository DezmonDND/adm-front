const msDropdownList = document.querySelector(".ms__dropdown");
const msDropdownItems = document.querySelectorAll(".ms__dropdown-item");
const multiSelect = document.querySelector('input[name="multiSelect"]');
const msInput = document.querySelector(".ms__input");
const msChose = document.querySelector(".ms__chose");
let visibleDropdownItems;
let counter = -1;
let selectedValues = [];

msChose &&
  msChose.addEventListener("click", (event) => {
    if (!event.target.closest(".ms__chose-item")) {
      msDropdownList.classList.remove("ms__dropdown_hidden");
    }
  });

document.addEventListener("click", (event) => {
  if (!event.target.closest(".ms")) {
    msDropdownList.classList.add("ms__dropdown_hidden");
  }

  if (event.target.closest(".ms__chose-item")) {
    searchSelectedElement(event.target.textContent);
  }
});

msDropdownList &&
  msDropdownList.addEventListener("click", (event) => {
    if (event.target.classList.contains("ms__dropdown-item_chose")) {
      searchSelectedElement(event.target.textContent);
    } else if (event.target.classList.contains("ms__dropdown-item")) {
      createNewElement("li", ["ms__chose-item"], event, msChose);
      selectedValues.push(event.target.dataset.value);
      updateMultiSelectValue();
    }
    msInput.value = "";
    msInput.focus();
  });

function createNewElement(tag, styles, event, parent) {
  const newElement = document.createElement(tag);
  newElement.classList.add(...styles);
  newElement.textContent = event.target.textContent;
  parent.prepend(newElement);
  event.target.classList.add("ms__dropdown-item_chose");
}

function searchSelectedElement(text) {
  msDropdownItems.forEach((item) => {
    if (text.toLowerCase() === item.textContent.toLowerCase()) {
      item.classList.remove("ms__dropdown-item_chose");
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
  const msChoseItems = document.querySelectorAll(".ms__chose-item");
  msChoseItems.forEach((item) => {
    if (text.toLowerCase() === item.textContent.toLowerCase()) {
      item.remove();
    }
  });
}

function updateMultiSelectValue(e) {
  multiSelect.value = selectedValues.join(", ");
  getValues(e);
}

function getLength() {
  const textarea = document.querySelector(".textarea");
  const counterCurrent = document.querySelector(".current");
  const counterMax = document.querySelector(".max");

  const textLength = textarea.value.length;
  counterCurrent.textContent = textLength;
  if (textLength > Number(counterMax.textContent)) {
    textarea.style.borderColor = "#D10404";
  } else {
    textarea.style.borderColor = "";
  }
}

function openSelect() {
  const selectMenu = document.querySelector(".select_multiple-menu");
  selectMenu.style.display =
    selectMenu.style.display === "none" ? "flex" : "none";
}

function selectOption(element) {
  element.classList.toggle("select_multiple-option_selected");
}
