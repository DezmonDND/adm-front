
<header class="header"> 
  <div class="mobile-menu">
    <div class="menu menu_main-bg">
      <div class="menu__container"> 
        <div class="menu__buttons"> <a class="header__main-links" href="/"><img class="header__logo" src="/local/templates/surgut/icons/footer-logo_icon.svg" alt="Логотип"/>
            <div class="header__main-links__block"> <span class="header__title">Администрация Сургута</span><span class="header__main-link">Официальный портал</span></div></a>
          <button class="button button_close button_size_xs button_without-text  " onclick="toggleMenu()">
            <ion-icon class="icon" name="close-outline"></ion-icon>
          </button>
        </div>
        <form class="search search-header-mobile">
          <input class="input  input-search input-search-s " placeholder="Поиск по сайту" name="number" value=""/>
          <button class="search__button search__button_s" type="submit" onclick="getValues()">       </button>
        </form>
        <ul class="menu__list"> 
          <li><a class="menu__item" href="/">Быстрый доступ</a></li>
          <li><a class="menu__item" href="/">Публичные слушания</a></li>
          <li><a class="menu__item" href="/">Противодействие коррупции</a></li>
          <li><a class="menu__item" href="/">Пресс-центр</a></li>
          <li><a class="menu__item" href="/">Обращения граждан</a></li>
          <li><a class="menu__item" href="/">О Сургуте</a></li>
          <li><a class="menu__item" href="/">Городская власть</a></li>
          <li><a class="menu__item" href="/">Документы</a></li>
          <li><a class="menu__item" href="/">Контакты</a></li>
        </ul>
        <div class="menu__socials"> 
          <div class="header__socials"><a class="vk_icon-duma header__social-icon" href="/"></a><a class="ok_icon-duma header__social-icon" href="/"></a>
          </div><a class="header__eye" href="/"> </a>
        </div>
      </div>
    </div>
  </div>
  <div class="header__top-content">
    <div class="header__top-links">
      <div class="header_links"><a class="header__link" href="/">Быстрый доступ</a><a class="header__link" href="/">Публичные слушания</a><a class="header__link" href="/">Противодействие коррупции</a><a class="header__link" href="/">Пресс-центр</a><a class="header__link" href="/">Обращения граждан</a>
      </div>
      <div class="header__socials"><a class="vk_icon header__social-icon" href="/"></a><a class="ok_icon  header__social-icon" href="/"></a><a class="tg_icon header__social-icon" href="/"></a>
      </div>
    </div>
    <div class="header__buttons"> <a class="button button_link button_white button__eye button_size_xs  button_icon-left" href="/" attributes="{}"><span class="button_span">Версия для слабовидящих</span>
        <ion-icon class="icon" name="eye-outline"></ion-icon></a>
      <button class="button button_blue button_header button_size_xs   " onclick="showLogin()"><span class="button_span">Войти</span>
      </button>
    </div>
  </div>
  <div class="header__bottom-content"><a class="header__main-links" href="/"><img class="header__logo" src="/local/templates/surgut/icons/footer-logo_icon.svg" alt="Логотип"/>
      <div class="header__main-links__block"> <span class="header__title">Администрация Сургута</span><span class="header__main-link">Официальный портал</span></div></a>
    <form class="search search-header">
      <input class="input  input-search input-search-s " placeholder="Поиск по сайту" name="number" value=""/>
      <button class="search__button search__button_s" type="submit" onclick="getValues()">       </button>
    </form>
    <div class="header_links"><a class="header__link" href="/">О Сургуте</a><a class="header__link" href="/">Городская власть</a><a class="header__link" href="/">Документы</a><a class="header__link" href="/">Контакты</a>
    </div>
    <button class="button button_burger button_size_xs button_without-text  " onclick="toggleMenu()">
      <ion-icon class="icon" name="menu-outline"></ion-icon>
    </button>
  </div>
</header>
<div class="overlay hidden"></div>
<div class="login hidden">
  <div class="login__content">
    <div class="login__content-top"><span>Вход          </span>
      <ion-icon class="icon" name="close-outline" onclick="hideLogin()"></ion-icon>
    </div>
    <div class="login__content-main">
      <div class="login__content-main__text">
        <div class="login__content-main__title"><span>Введите номер телефона</span></div>
        <div class="login__content-main__subtitle"><span>Мы отправим код или позвоним по номеру телефона. Отвечать на звонок не нужно. Код придет в виде СМС на мобильный телефон</span></div>
      </div>
      <div class="login__content-main__input">
        <input class="input    " placeholder="Номер телефона" value=""/>
      </div>
      <div class="login__content-main__confirm-standart">
        <button class="button button_blue button_size_m   " onclick="showCode()"><span class="button_span">Войти</span>
        </button>
      </div>
      <div class="login__content-main__confirm-delim"> 
        <div class="delim-line"></div><span> или </span>
        <div class="delim-line"> </div>
      </div>
      <div class="login__content-main__confirm-gos"><a class="button button_link button_white button_size_m  " href="/" attributes="{}"><span class="button_span">Войти через госуслуги</span></a>
      </div>
      <div class="login__content-main__confirm-email"><span onclick="showEmail()">Войти по почте </span></div>
    </div>
  </div>
</div>
<div class="overlay hidden"></div>
<div class="login login-code hidden">
  <div class="login__content">
    <div class="login__content-top"><span>Вход          </span>
      <ion-icon class="icon" name="close-outline" onclick="hideCode()"></ion-icon>
    </div>
    <div class="login__content-main">
      <div class="login__content-main__text">
        <div class="login__content-main__title"><span>Введите код</span></div>
        <div class="login__content-main__subtitle"><span>Мы отправили код подтверждения на номер 22222</span></div>
      </div>
      <div class="login__content-main__input">
        <input class="input    " placeholder="Код" value=""/>
      </div>
      <!-- Если код неверный то инпут меняется на этот-->
      <div class="login__content-main__input wrong-code">
        <input class="input    " placeholder="Код" value=""/><span>Неверный код, попробуйте еще раз</span>
      </div>
      <div class="login__content-main__confirm-email"><span onclick="showEmail()">Войти по почте </span></div>
    </div>
  </div>
</div>
<div class="overlay hidden"></div>
<div class="login login-email hidden">
  <div class="login__content">
    <div class="login__content-top"><span>Вход          </span>
      <ion-icon class="icon" name="close-outline" onclick="hideEmail()"></ion-icon>
    </div>
    <div class="login__content-main">
      <div class="login__content-main__text">
        <div class="login__content-main__title"><span>Войти по почте</span></div>
        <div class="login__content-main__subtitle"><span>Только для зарегистрированных пользователей</span></div>
      </div>
      <div class="login__content-main__input">
        <input class="input    " placeholder="Электронная почта" value=""/>
      </div>
      <div class="login__content-main__confirm-standart">
        <button class="button button_blue button_size_m   " onclick="showCode()"><span class="button_span">Войти</span>
        </button>
      </div>
      <div class="login__content-main__confirm-email"><span onclick="showLogin()">Вернуться на главный экран входа</span></div>
    </div>
  </div>
</div>