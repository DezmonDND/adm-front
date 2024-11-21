document.querySelectorAll('.social_share').forEach(button => {
    const share = document.createElement('div');
    share.className = 'share-menu';
    share.innerHTML = `
        <div  class = "share-content">
            <div class="header__socials">
                <a class="vk_icon header__social-icon" href="https://vk.com/share.php?url=http://mysite.com" target="_blank"></a>
                <a class="ok_icon header__social-icon" href="https://connect.ok.ru/offer?url=http://mysite.com"></a>
                <a class="tg_icon header__social-icon" href="https://telegram.me/share/url?url=http://mysite.com"></a>
            </div>
            <button id = 'copyLink' class="button button_white button_size_s">
                <span class="button_span">Скопировать ссылку </span>
            </button>
        </div>
    `;
    share.style.display = 'none'; 
    share.style.position = 'absolute'; 
    share.style.zIndex = '1000';

    button.style.position = 'relative'; 
    button.appendChild(share);

    button.addEventListener('mouseenter', () => {
        share.style.display = 'block';
    });

    button.addEventListener('mouseleave', () => {
        share.style.display = 'none';
    });

    share.querySelector('#copyLink').addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href)
    });
});
