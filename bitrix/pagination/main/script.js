const nextButton = document.querySelector(".pag-button_right");
const prevButton = document.querySelector(".pag-button_left");
const buttons = document.querySelectorAll(".pag-button");

function clickPage(event) {
  const currentButton = event.target;

  buttons.forEach((button) => button.classList.remove("pag-button_active"));
  currentButton.classList.add("pag-button_active");

  updateButtonStates();
}

function nextPage() {
  const activeButton = document.querySelector(".pag-button_active");
  const nextButtonIndex = Array.from(buttons).indexOf(activeButton) + 1;
  const nextButton = buttons[nextButtonIndex];

  if (nextButton) {
    clickPage({ target: nextButton });
  }
}

function prevPage() {
  const activeButton = document.querySelector(".pag-button_active");
  const prevButtonIndex = Array.from(buttons).indexOf(activeButton) - 1;
  const prevButton = buttons[prevButtonIndex];

  if (prevButton) {
    clickPage({ target: prevButton });
  }
}

function updateButtonStates() {
  const activeButton = document.querySelector(".pag-button_active");
  const firstPage = activeButton === buttons[0];
  const lastPage = activeButton === buttons[buttons.length - 1];

  prevButton.disabled = firstPage;
  nextButton.disabled = lastPage;

  if (firstPage) {
    prevButton.classList.add("pag-button-with-icon_left_disabled");
  } else {
    prevButton.classList.remove("pag-button-with-icon_left_disabled");
  }

  if (lastPage) {
    nextButton.classList.add("pag-button-with-icon_right_disabled");
  } else {
    nextButton.classList.remove("pag-button-with-icon_right_disabled");
  }
}

updateButtonStates();