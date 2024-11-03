function getValues(e) {
  e.preventDefault();

  const inputs = document.querySelectorAll(
    ".input, .textarea, .checkbox, .radio"
  );
  let values = {};

  inputs.forEach((input) => {
    if (input.type === "checkbox") {
      values[input.name] = input.checked;
    } else if (input.type === "radio") {
      values[input.name] = input.checked;
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
