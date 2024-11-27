document.querySelectorAll('.social_share').forEach(button => {
    const share = document.createElement('div');
    share.className = 'share-menu';
    if (window.innerWidth <= 768) {
        share.classList.add('mobile-share')
        share.innerHTML = `
        <div class="share-content">
            <div class ="mobile-share-header">
                <span>Поделиться</span>
                <ion-icon class="icon md hydrated" name="close-outline"role="img"></ion-icon>
            </div>
            <div class="header__socials">
                <a class="vk_icon header__social-icon" href="https://vk.com/share.php?url=http://mysite.com" target="_blank"></a>
                <a class="ok_icon header__social-icon" href="https://connect.ok.ru/offer?url=http://mysite.com" target="_blank"></a>
                <a class="tg_icon header__social-icon" href="https://telegram.me/share/url?url=http://mysite.com" target="_blank"></a>
                <button class="button button_link button_white  button_without-text" id="copyLink" attributes="{}"><ion-icon class="icon md hydrated" name="link-outline" role="img"></ion-icon></a>
            </div>
        </div>
    `
    } else {
        share.innerHTML = `
        <div class="share-content">
            <div class="header__socials">
                <a class="vk_icon header__social-icon" href="https://vk.com/share.php?url=http://mysite.com" target="_blank"></a>
                <a class="ok_icon header__social-icon" href="https://connect.ok.ru/offer?url=http://mysite.com" target="_blank"></a>
                <a class="tg_icon header__social-icon" href="https://telegram.me/share/url?url=http://mysite.com" target="_blank"></a>
            </div>
            <button id="copyLink" class="button button_white button_size_s">
                <span class="button_span">Скопировать ссылку</span>
            </button>
        </div>
    `
    }
    
    share.style.display = 'none'; 
    share.style.position = 'absolute'; 
    share.style.zIndex = '1000';

    button.style.position = 'relative'; 
    button.appendChild(share);

    button.addEventListener('click', (e) => {
        e.preventDefault();
        share.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
        if (!share.contains(e.target) && !button.contains(e.target)) {
            share.style.display = 'none';
            share.classList.remove('mobile-menu');
        }
    });

    share.querySelector('#copyLink').addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert('Ссылка скопирована!'))
            .catch(err => alert('Ошибка при копировании ссылки'));
    });
});
