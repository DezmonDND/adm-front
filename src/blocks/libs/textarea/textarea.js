function getLength(event) {
  const textarea = event.target;
  const counterCurrent = textarea.parentNode.querySelector('.current');
  const counterMax = textarea.parentNode.querySelector('.max');

  if (counterCurrent && counterMax) {
      const textLength = textarea.value.length;
      counterCurrent.textContent = textLength;
      if (textLength > Number(counterMax.textContent)) {
          textarea.style.borderColor = '#D10404';
      } else {
          textarea.style.borderColor = '';
      }
  }
}

const textareas = document.querySelectorAll('.textarea');

textareas.forEach((textarea) => {
  textarea.addEventListener('input', getLength);
});