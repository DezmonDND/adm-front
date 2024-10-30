const submitButton = document.querySelector(".button_interview");
const inputs = document.querySelectorAll(
  ".input, .textarea, .сheckbox, .radio"
);
let values = [];

function getValues(e) {
  e.preventDefault();

  values = [];

  inputs.forEach((input) => {
    if (input.type === "checkbox") {
      values.push(input.checked);
    } else if (input.type === "radio") {
      values.push(input.checked);
    } else {
      values.push(input.value);
    }
  });

  console.log(values);
}
