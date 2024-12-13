function toggleModal(modalName, show = true) {
    // Прячем все модальные окна
    ['login', 'login-code', 'login-email', 'login-projects', 'delete-project', 'exit'].forEach((name) => {
        if(document.querySelector(`.${name}`))
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

function showLogin() {
    toggleModal('login');
}
function showLoginProjects() {
    toggleModal('login-projects');
}
function showCode() {
    toggleModal('login-code');
}
function showEmail() {
    toggleModal('login-email');
}
function showDeleteProject() {
    toggleModal('delete-project');
}
function showExit() {
    toggleModal('exit');
}

function hideLogin() {
    toggleModal('login', false);
}
function hideLoginProjects() {
    toggleModal('login-projects', false);
}
function hideCode() {
    toggleModal('login-code', false);
}
function hideEmail() {
    toggleModal('login-email', false);
}
function hideDeleteProject() {
    toggleModal('delete-project', false);
}
function hideExit() {
    toggleModal('exit', false)
}

const overlay = document.querySelector('.overlay');
if (overlay)
    overlay.addEventListener('click', () => {
        toggleModal(null, false);
    });
