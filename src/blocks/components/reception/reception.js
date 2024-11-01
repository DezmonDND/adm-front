function addFormField(e) {
  const formField = document.querySelector(".virtual-reception__form-field");
  const userFormContainer = document.querySelector(
    ".virtual-reception__user-contacts"
  );
  let counter = 0;

  e.preventDefault();

  const newFormFieldData = {
    cls: "virtual-reception__form-field",
    cls_title: "virtual-reception__field-title form-field__title",
    type: "",
    title: "Данные соавтора",
    span: "",
    error: false,
    inputs: [
      {
        placeholder: "Фамилия",
        name: `firstName-${counter}`,
        sort: "virtual-reception_input",
      },
      {
        placeholder: "Имя",
        name: `secondName-${counter}`,
        sort: "virtual-reception_input",
      },
      {
        placeholder: "Отчество",
        name: `thirdName-${counter}`,
        sort: "virtual-reception_input",
      },
    ],
  };

  const newFormField = formField.cloneNode(true);
  newFormField.innerHTML = `
    <h3 class="${newFormFieldData.cls_title}">${newFormFieldData.title}</h3>
    <div class="form-field__input-list">
      ${newFormFieldData.inputs
        .map(
          (input) => `
        <div class="form-field__input">
          <input class="input input-${input.sort}" type="text" placeholder="${input.placeholder}" name="${input.name}">
          <span class="form-field__span">${newFormFieldData.span}</span>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  counter++;
  userFormContainer.appendChild(newFormField);
}

function addDocument() {
  const input = document.querySelector(".input__add-document");
  const list = document.querySelector(".virtual-reception__documents__list");

  input.removeEventListener("change", addDocument);

  input.addEventListener("change", () => {
    const curFiles = input.files;

    for (let i = 0; i < curFiles.length; i++) {
      const listItem = document.createElement("li");
      listItem.classList.add("virtual-reception__document");

      const button = document.createElement("button");
      button.classList.add("button", "virtual-reception__delete-button");
      button.addEventListener("click", () => {
        list.removeChild(listItem);
      });

      const description = document.createElement("div");
      description.classList.add("virtual-reception__document-description");

      const image = document.createElement("img");
      image.src = "../icons/doc-2_icon.svg";
      image.classList.add("virtual-reception__document-icon");
      image.alt = "Файл документа";

      const title = document.createElement("span");
      title.classList.add("virtual-reception__document-title");
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
