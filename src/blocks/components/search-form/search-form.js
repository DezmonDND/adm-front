function getValues(e) {
  const inputs = document.querySelectorAll("input");
  const select = document.querySelector("select");
  const values = [];

  e.preventDefault();

  inputs.forEach((input) => {
    values.push(input.value);
  });

  values.push(select.value);

  console.log(values);
}
