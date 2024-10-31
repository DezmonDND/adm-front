
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
