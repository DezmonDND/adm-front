function toggleModal(modalName, show = true) {
    // Прячем все модальные окна
    ['login', 'login-code', 'login-email'].forEach(name => {
        document.querySelector(`.${name}`).classList.add('hidden');
    });

    if (show) {
        document.querySelector('.overlay').classList.remove('hidden');
        document.querySelector(`.${modalName}`).classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        document.querySelector('.overlay').classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function showLogin() { toggleModal('login'); }
function showCode() { toggleModal('login-code'); }
function showEmail() { toggleModal('login-email'); }

function hideLogin() { toggleModal('login', false); }
function hideCode() { toggleModal('login-code', false); }
function hideEmail() { toggleModal('login-email', false); }

document.querySelector('.overlay').addEventListener('click', () => {
    toggleModal(null, false);
});