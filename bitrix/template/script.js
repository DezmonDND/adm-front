
function openSelect() {
  const selectMenu = document.querySelector(".select_multiple-menu");
  selectMenu.style.display =
    selectMenu.style.display === "none" ? "flex" : "none";
}

function selectOption(element) {
  element.classList.toggle("select_multiple-option_selected");
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
