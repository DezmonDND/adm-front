function showLogin() {
    hideCode()
    hideEmail()
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.login').classList.remove('hidden');
    document.body.style.overflow = 'hidden'
}

function hideLogin() {
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.login').classList.add('hidden');
    document.body.style.overflow = 'auto'
}

function showCode() {
    hideLogin()
    hideEmail()
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.login-code').classList.remove('hidden');
    document.body.style.overflow = 'hidden'
}

function hideCode() {
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.login-code').classList.add('hidden');
    document.body.style.overflow = 'auto'
}

function showEmail() {
    hideLogin()
    hideCode()
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.login-email').classList.remove('hidden');
    document.body.style.overflow = 'hidden'
}

function hideEmail(){
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('.login-email').classList.add('hidden');
    document.body.style.overflow = 'auto'
}

document.querySelector('.overlay').addEventListener('click', hideLogin);
document.querySelector('.overlay').addEventListener('click', hideCode);
document.querySelector('.overlay').addEventListener('click', hideEmail);
