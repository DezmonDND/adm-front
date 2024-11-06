function getValues(e) {
  if (e) {
    e.preventDefault();
  }

  const inputs = document.querySelectorAll(
    ".input, .textarea, .checkbox, .radio, .input__add-document, .ms__input"
  );
  let values = {};

  inputs.forEach((input) => {
    if (input.type === "checkbox") {
      values[input.name] = input.checked;
    } else if (input.type === "radio") {
      values[input.name] = input.checked;
    } else if (input.name === "multiSelect") {
      values[input.name] = selectedValues.join(", ");
    } else {
      values[input.name] = input.value;
    }
  });

  console.log("Собранные значения:", values);
}

document.addEventListener("input", getValues);

function isValid(input) {
  if (!input.value) {
    options.error = true;
    span = "Ошибка";
    return;
  }
}
