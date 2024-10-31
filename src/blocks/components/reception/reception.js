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
