function openSelect() {
  const selectMenu = document.querySelector(".select_multiple-menu");
  selectMenu.style.display =
    selectMenu.style.display === "none" ? "flex" : "none";
}

function selectOption(element) {
  element.classList.toggle("select_multiple-option_selected");
}

$(document).ready(function() {
  $('.select').select2();
});