const input = document.getElementById('focusInput');
const overlay = document.getElementById('overlay');

input.addEventListener('focus', () => {
  overlay.style.display = 'block'; 
});

input.addEventListener('blur', () => {
  overlay.style.display = 'none'; 
});