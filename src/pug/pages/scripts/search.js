function getValues() {
  console.log(1);
}

const pagination = document.querySelector('.pagination');
const pagButtons = pagination.querySelectorAll('.pag-button'); 

function resizePagination() {
  if (window.innerWidth < 768) {
    pagButtons.forEach(button => {
      button.classList.remove('pag-button-l');
      button.classList.add('pag-button-m');
    });
  } else {
    pagButtons.forEach(button => {
      button.classList.remove('pag-button-m');
      button.classList.add('pag-button-l');
    });
  }
}

resizePagination();

console.log(pagButtons);

window.addEventListener('resize', resizePagination);