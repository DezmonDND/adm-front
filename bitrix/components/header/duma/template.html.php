
<header class="header-duma">
  <div class="mobile-menu">
    <div class="menu menu_duma-bg">
      <div class="menu__container">
        <div class="menu__content"> 
          <div class="menu__buttons"> <a class="header__main-links" href="/" role="link" title="Главная" aria-label="Главная страница"><img class="header__logo" src="/local/templates/surgut/icons/footer-logo_icon.svg" alt="Логотип"/>
              <div class="header__main-links__block"> <span class="header__title">Администрация Сургута</span><span class="header__main-link">Официальный портал</span></div></a>
            <button class="button button_close button_size_xs button_without-text  " onclick="toggleMenu()" title="" role="button">
              <ion-icon class="icon" name="close-outline"></ion-icon>
            </button>
          </div>
          <form class="search search-header-mobile">
            <input class="input input_s  input-search input-search-s  " placeholder="Поиск по сайту" name="number" value="" id="number" role="textbox"/>
            <button class="button button_blue search__button search__button_s  button_without-text  " onclick="1" title="" role="button" aria-label="Поиск">
              <ion-icon class="icon" name="search-outline"></ion-icon>
            </button>
          </form>
          <ul class="menu__list"> 
            <li><a class="menu__item" href="/">О думе города</a></li>
            <li><a class="menu__item" href="/">Состав и структура</a></li>
            <li><a class="menu__item" href="/">Документы</a></li>
            <li><a class="menu__item" href="/">Деятельность</a></li>
            <li><a class="menu__item" href="/">Обратная связь</a></li>
          </ul>
        </div>
        <div class="menu__bot">
          <div class="menu__socials"> 
            <div class="header__socials"><a class="header__social-icon vk_icon-mobile" href="/" role="link"></a><a class="header__social-icon ok_icon-mobile" href="/" role="link"></a><a class="header__social-icon tg_icon-mobile" href="/" role="link"></a>
            </div>
            <button class="button button_white button__eye button_size_xs button_without-text  " onclick="visibility()" title="" role="button">
              <ion-icon class="icon" name="eye-outline"></ion-icon>
            </button>
          </div>
          <button class="button button_blue button__login button_size_m   " onclick="showLogin()" title="" role="button" aria-label="Войти"><span class="button_span">Войти</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="header-visibility">
    <div class="header-visibility-container">
      <div class="header-visibility-elems">
        <div class="header-visibility-elem">
          <div class="header-visibility-elem-left"><span>Размер шрифта:</span></div>
          <div class="header-visibility-elem-right"><span class="font-size-1" onclick="setFontSize(1, this)"> А </span><span class="font-size-15" onclick="setFontSize(1.5, this)"> А </span><span class="font-size-2" onclick="setFontSize(2, this)"> А</span></div>
        </div>
        <div class="header-visibility-elem">
          <div class="header-visibility-elem-left"><span>Межбуквенный интервал:</span></div>
          <div class="header-visibility-elem-right"><span class="letter-spacing-0" onclick="setLetterSpacing(0, this)">А</span><span class="letter-spacing-6" onclick="setLetterSpacing(0.06, this)">А </span><span class="letter-spacing-12" onclick="setLetterSpacing(0.12, this)">А</span></div>
        </div>
        <div class="header-visibility-elem">
          <div class="header-visibility-elem-left"><span>Межстрочный интервал:</span></div>
          <div class="header-visibility-elem-right"><span class="line-height-12" onclick="setLineHeight(1.5, this)">А</span><span class="line-height-15" onclick="setLineHeight(2, this)">А </span><span class="line-height-2" onclick="setLineHeight(2.5, this)">А</span></div>
        </div>
        <div class="header-visibility-elem"> 
          <div class="header-visibility-elem-left"><span>Цвет сайта:</span></div>
          <div class="header-visibility-elem-right">
            <button class="theme-light" onclick="setTheme(`light`, this)">A </button>
            <button class="theme-dark" onclick="setTheme(`dark`, this)">A</button>
            <button class="theme-blue" onclick="setTheme(`blue`, this)">A</button>
          </div>
        </div>
      </div>
      <div class="header-visibility-close">
        <ion-icon name="close-outline"></ion-icon>
      </div>
    </div>
  </div>
  <div class="header-duma__container">
    <div class="header__top-content"> <a class="header__main-links" href="/" role="link" title="Главная" aria-label="Главная страница"><img class="header__logo" src="/local/templates/surgut/icons/footer-logo_icon.svg" alt="Логотип"/>
        <div class="header__main-links__block"> <span class="header__title">Дума Сургута</span><span class="header__main-link">Официальный портал</span></div></a>
      <button class="button button_burger button_size_xs button_without-text  " onclick="toggleMenu()" title="" role="button" aria-label="">
        <ion-icon class="icon" name="menu-outline"></ion-icon>
      </button>
      <form class="search search-header-duma">
        <input class="input input_s  input-search input-search-s  " placeholder="Поиск по сайту" name="number" value="" id="number" role="textbox"/>
        <button class="button button_blue search__button search__button_s  button_without-text  " onclick="1" title="" role="button" aria-label="Поиск">
          <ion-icon class="icon" name="search-outline"></ion-icon>
        </button>
      </form>
      <div class="header__buttons"> 
        <button class="button button_white button__eye button_size_xs  button_icon-left " onclick="visibility()" title="" role="button" aria-label="Версия для слабовидящих"><span class="button_span">Версия для слабовидящих</span>
          <ion-icon class="icon" name="eye-outline"></ion-icon>
        </button>
        <button class="button button_blue button_size_s   " onclick="anotherFunction()" title="" role="button" aria-label="Служебный вход"><span class="button_span">Служебный вход</span>
        </button>
      </div>
    </div>
    <div class="header__bottom-content">  
      <ul class="header_links">
        <li class="header__link" aria-expanded="false">
          <button style="all:unset" role="button" aria-label="О Думе города" tabindex="-1">О Думе города</button>
          <div class="dm-second-menu">
            <div class="dm-second-menu__content">
              <div class="dm-second-menu__col">
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Структура</a><a class="dm-second-menu__link" href="/">Председатель </a><a class="dm-second-menu__link" href="/">Руководство </a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Депутаты</a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Аппарат Думы города</a><a class="dm-second-menu__link" href="/">Структура аппарата </a><a class="dm-second-menu__link" href="/">Информация о кадровом обеспечении </a><a class="dm-second-menu__link" href="/">Телефонный справочник </a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Молодежная палата</a><a class="dm-second-menu__link" href="/">Положение </a><a class="dm-second-menu__link" href="/">Состав </a>
                </div>
              </div>
              <div class="dm-second-menu__col">
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Постоянные комитеты</a><a class="dm-second-menu__link" href="/">Комитет по бюджету, налогам, финансам и имуществу </a><a class="dm-second-menu__link" href="/">Комитет по городскому хозяйству и перспективному развитию города </a><a class="dm-second-menu__link" href="/">Комитет по социальной политике </a><a class="dm-second-menu__link" href="/">Комитет по нормотворчеству, информационной политике и правопорядку </a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Депутатские объединения в Думе города</a><a class="dm-second-menu__link" href="/">Информация о кадровом обеспечении </a><a class="dm-second-menu__link" href="/">Телефонный справочник </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="header__link" aria-expanded="false">
          <button style="all:unset" role="button" aria-label="Состав и структура" tabindex="-1">Состав и структура</button>
          <div class="dm-second-menu">
            <div class="dm-second-menu__content">
              <div class="dm-second-menu__col">
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Структура</a><a class="dm-second-menu__link" href="/">Председатель </a><a class="dm-second-menu__link" href="/">Руководство </a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Депутаты</a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Аппарат Думы города</a><a class="dm-second-menu__link" href="/">Структура аппарата </a><a class="dm-second-menu__link" href="/">Информация о кадровом обеспечении </a><a class="dm-second-menu__link" href="/">Телефонный справочник </a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Молодежная палата</a><a class="dm-second-menu__link" href="/">Положение </a><a class="dm-second-menu__link" href="/">Состав </a>
                </div>
              </div>
              <div class="dm-second-menu__col">
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Постоянные комитеты</a><a class="dm-second-menu__link" href="/">Комитет по бюджету, налогам, финансам и имуществу </a><a class="dm-second-menu__link" href="/">Комитет по городскому хозяйству и перспективному развитию города </a><a class="dm-second-menu__link" href="/">Комитет по социальной политике </a><a class="dm-second-menu__link" href="/">Комитет по нормотворчеству, информационной политике и правопорядку </a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Депутатские объединения в Думе города</a><a class="dm-second-menu__link" href="/">Информация о кадровом обеспечении </a><a class="dm-second-menu__link" href="/">Телефонный справочник </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="header__link" aria-expanded="false">
          <button style="all:unset" role="button" aria-label="Документы" tabindex="-1">Документы</button>
          <div class="dm-second-menu">
            <div class="dm-second-menu__content">
              <div class="dm-second-menu__col">
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Структура</a><a class="dm-second-menu__link" href="/">Председатель </a><a class="dm-second-menu__link" href="/">Руководство </a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Депутаты</a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Аппарат Думы города</a><a class="dm-second-menu__link" href="/">Структура аппарата </a><a class="dm-second-menu__link" href="/">Информация о кадровом обеспечении </a><a class="dm-second-menu__link" href="/">Телефонный справочник </a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Молодежная палата</a><a class="dm-second-menu__link" href="/">Положение </a><a class="dm-second-menu__link" href="/">Состав </a>
                </div>
              </div>
              <div class="dm-second-menu__col">
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Постоянные комитеты</a><a class="dm-second-menu__link" href="/">Комитет по бюджету, налогам, финансам и имуществу </a><a class="dm-second-menu__link" href="/">Комитет по городскому хозяйству и перспективному развитию города </a><a class="dm-second-menu__link" href="/">Комитет по социальной политике </a><a class="dm-second-menu__link" href="/">Комитет по нормотворчеству, информационной политике и правопорядку </a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Депутатские объединения в Думе города</a><a class="dm-second-menu__link" href="/">Информация о кадровом обеспечении </a><a class="dm-second-menu__link" href="/">Телефонный справочник </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="header__link" aria-expanded="false">
          <button style="all:unset" role="button" aria-label="Деятельность" tabindex="-1">Деятельность</button>
          <div class="dm-second-menu">
            <div class="dm-second-menu__content">
              <div class="dm-second-menu__col">
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Структура</a><a class="dm-second-menu__link" href="/">Председатель </a><a class="dm-second-menu__link" href="/">Руководство </a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Депутаты</a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Аппарат Думы города</a><a class="dm-second-menu__link" href="/">Структура аппарата </a><a class="dm-second-menu__link" href="/">Информация о кадровом обеспечении </a><a class="dm-second-menu__link" href="/">Телефонный справочник </a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Молодежная палата</a><a class="dm-second-menu__link" href="/">Положение </a><a class="dm-second-menu__link" href="/">Состав </a>
                </div>
              </div>
              <div class="dm-second-menu__col">
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Постоянные комитеты</a><a class="dm-second-menu__link" href="/">Комитет по бюджету, налогам, финансам и имуществу </a><a class="dm-second-menu__link" href="/">Комитет по городскому хозяйству и перспективному развитию города </a><a class="dm-second-menu__link" href="/">Комитет по социальной политике </a><a class="dm-second-menu__link" href="/">Комитет по нормотворчеству, информационной политике и правопорядку </a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Депутатские объединения в Думе города</a><a class="dm-second-menu__link" href="/">Информация о кадровом обеспечении </a><a class="dm-second-menu__link" href="/">Телефонный справочник </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="header__link"> <a href="/">Обратная связь          </a></li>
      </ul>
      <div class="header__socials"><a class="header__social-icon vk_icon-duma" href="/" title="Ссылка на социальные сети Вконтакте" role="link"></a><a class="header__social-icon ok_icon-duma" href="/" title="Ссылка на социальные сети Одноклассники" role="link"></a>
      </div>
    </div>
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
        <input class="input      " placeholder="Номер телефона" value="" role="textbox"/>
      </div>
      <div class="login__content-main__confirm-standart">
        <button class="button button_blue button_size_m   " onclick="showCode()" title="" role="button" aria-label="Войти"><span class="button_span">Войти</span>
        </button>
      </div>
      <div class="login__content-main__confirm-delim"> 
        <div class="delim-line"></div><span> или </span>
        <div class="delim-line"> </div>
      </div>
      <div class="login__content-main__confirm-gos"><a class="button button_link button_white button_size_m  " href="/" title="" role="link" aria-label="Войти через госуслуги"><span class="button_span">Войти через госуслуги</span></a>
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
        <input class="input      " placeholder="Код" value="" role="textbox"/>
      </div>
      <!-- Если код неверный то инпут меняется на этот-->
      <div class="login__content-main__input wrong-code">
        <input class="input      " placeholder="Код" value="" role="textbox"/><span>Неверный код, попробуйте еще раз</span>
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
        <input class="input      " placeholder="Электронная почта" value="" role="textbox"/>
      </div>
      <div class="login__content-main__confirm-standart">
        <button class="button button_blue button_size_m   " onclick="showCode()" title="" role="button" aria-label="Войти"><span class="button_span">Войти</span>
        </button>
      </div>
      <div class="login__content-main__confirm-email"><span onclick="showLogin()">Вернуться на главный экран входа</span></div>
    </div>
  </div>
</div>