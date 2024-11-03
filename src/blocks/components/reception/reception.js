function addFormField(e) {
  const formField = document.querySelector(".fieldset");
  const userFormContainer = document.querySelector(".fieldset_user-contacts");
  let counter = 0;

  e.preventDefault();

  const newFormFieldData = {
    cls_title: "reception__new-user_title",
    type: "",
    title: "Данные соавтора",
    span: "",
    error: false,
    inputs: [
      {
        placeholder: "Фамилия",
        name: `firstName-${counter}`,
      },
      {
        placeholder: "Имя",
        name: `secondName-${counter}`,
      },
      {
        placeholder: "Отчество",
        name: `thirdName-${counter}`,
      },
    ],
  };

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
      `
        )
        .join("")}
    </div>
  `;

  counter++;
  userFormContainer.appendChild(newFormField);
}

function isFormFieldFilled(formField) {
  const inputs = formField.querySelectorAll(".input");
  for (const input of inputs) {
    if (input.value.trim() === "") {
      return false;
    }
  }
  return true;
}

function deleteFormField(button) {
  const fieldset = button.closest(".fieldset");
  fieldset.remove();
}

function addDocument() {
  const input = document.querySelector(".input__add-document");
  const list = document.querySelector(".reception__documents-list");

  input.removeEventListener("change", addDocument);

  input.addEventListener("change", () => {
    const curFiles = input.files;

    for (let i = 0; i < curFiles.length; i++) {
      const listItem = document.createElement("li");
      listItem.classList.add("reception__document");
      list.style.display = "flex";

      const button = document.createElement("button");
      button.classList.add("button", "reception__delete-button");
      button.addEventListener("click", () => {
        list.removeChild(listItem);
      });

      const description = document.createElement("div");
      description.classList.add("reception__document-description");

      const image = document.createElement("img");
      image.src = "../icons/doc-2_icon.svg";
      image.classList.add("reception__document-icon");
      image.alt = "Файл документа";

      const title = document.createElement("span");
      title.classList.add("reception__document-title");
      title.textContent = curFiles[i].name;

      description.appendChild(image);
      description.appendChild(title);

      listItem.appendChild(button);
      listItem.appendChild(description);

      list.appendChild(listItem);
    }
    input.value = "";
  });
}
