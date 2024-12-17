
<header class="header"> 
  <div class="mobile-menu">
    <div class="menu menu_main-bg">
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
  <div class="header__top-content">
    <div class="header__top-links">
      <ul class="header_links">
        <li class="header__link" aria-expanded="false">
          <button style="all:unset" role="button" aria-label="Быстрый доступ" tabindex="-1">Быстрый доступ</button>
          <div class="dm-second-menu">
            <div class="dm-second-menu__content">
              <div class="dm-second-menu__col">
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Анонсы и события</a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Телефонный справочник</a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Инициативные проекты</a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Поддержка мобилизованных граждан и членов их семей</a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="header__link" aria-label="Публичные слушания"> <a href="/" tabindex="-1">Публичные слушания          </a></li>
        <li class="header__link" aria-label="Противодействие коррупции"> <a href="/" tabindex="-1">Противодействие коррупции          </a></li>
        <li class="header__link" aria-label="Пресс-центр"> <a href="/" tabindex="-1">Пресс-центр          </a></li>
        <li class="header__link" aria-expanded="false">
          <button style="all:unset" role="button" aria-label="Обращения граждан" tabindex="-1">Обращения граждан</button>
          <div class="dm-second-menu">
            <div class="dm-second-menu__content">
              <div class="dm-second-menu__col">
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Обращения граждан</a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Порядок обращения граждан</a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Личный прием</a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Электронное обращение</a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Обзор обращений</a>
                </div>
                <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Узнать статус обращения</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="header__socials"><a class="header__social-icon vk_icon" href="/" title="Ссылка на социальные сети Вконтакте" role="link"></a><a class="header__social-icon ok_icon " href="/" title="Ссылка на социальные сети Одноклассники" role="link"></a><a class="header__social-icon tg_icon" href="/" title="Ссылка на социальные сети Телеграмм" role="link"></a>
      </div>
    </div>
    <div class="header__buttons"> 
      <button class="button button_white button__eye button_size_xs  button_icon-left " onclick="visibility()" title="" role="button" aria-label="Версия для слабовидящих"><span class="button_span">Версия для слабовидящих</span>
        <ion-icon class="icon" name="eye-outline"></ion-icon>
      </button>
      <button class="button button_blue button_size_s   " onclick="showLogin()" title="" role="button" aria-label="Войти"><span class="button_span">Войти</span>
      </button>
    </div>
  </div>
  <div class="header__bottom-content"><a class="header__main-links" href="/" role="link" title="Главная" aria-label="Главная страница"><img class="header__logo" src="/local/templates/surgut/icons/footer-logo_icon.svg" alt="Логотип"/>
      <div class="header__main-links__block"> <span class="header__title">Администрация Сургута</span><span class="header__main-link">Официальный портал</span></div></a>
    <form class="search search-header">
      <input class="input input_s  input-search input-search-s  " placeholder="Поиск по сайту" name="number" value="" id="number" role="textbox"/>
      <button class="button button_blue search__button search__button_s  button_without-text  " onclick="1" title="" role="button" aria-label="Поиск">
        <ion-icon class="icon" name="search-outline"></ion-icon>
      </button>
    </form>
    <ul class="header_links">
      <li class="header__link" aria-expanded="false">
        <button style="all:unset" role="button" aria-label="О Сургуте" tabindex="-1">О Сургуте</button>
        <div class="dm-second-menu">
          <div class="dm-second-menu__content">
            <div class="dm-second-menu__col">
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Сургут сегодня</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">История Сургута</a>
              </div>
            </div>
            <div class="dm-second-menu__col">
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Официальные символы</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Устав Сургута</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Генплан</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Стратегия развития</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Инвестиционный паспорт город Сургута</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Общественные советы города Сургута</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Ими гордится Сургут</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Справочная информация</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Градостроительная деятельность</a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="header__link" aria-expanded="false">
        <button style="all:unset" role="button" aria-label="Городская власть" tabindex="-1">Городская власть</button>
        <div class="dm-second-menu">
          <div class="dm-second-menu__content">
            <div class="dm-second-menu__col">
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Глава города</a><a class="dm-second-menu__link" href="/">Биография </a><a class="dm-second-menu__link" href="/">Полномочия </a><a class="dm-second-menu__link" href="/">Ежегодный доклад </a><a class="dm-second-menu__link" href="/">Должностной знак </a><a class="dm-second-menu__link" href="/">Виртуальная приемная </a><a class="dm-second-menu__link" href="/">Официальные выступления </a>
              </div>
            </div>
            <div class="dm-second-menu__col">
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Дума города</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Администрация</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Территориальная избирательная комиссия</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Государственные органы</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Правила землепользования и застройки г.Сургута</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Местные нормативы градостроительного проектирования</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Бюджет города Сургута</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Законодательная карта</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Бюджет</a>
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
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Постановления</a><a class="dm-second-menu__link" href="/">Постановления Главы города </a><a class="dm-second-menu__link" href="/">Постановления Администрации города </a><a class="dm-second-menu__link" href="/">Постановления Мэра и администрации города до 12.04.2005 г. </a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Распоряжения</a><a class="dm-second-menu__link" href="/">Распоряжения Главы города </a><a class="dm-second-menu__link" href="/">Распоряжения Администрации города </a><a class="dm-second-menu__link" href="/">Распоряжения Мэра и администрации города до 12.04.2005 г. </a>
              </div>
            </div>
            <div class="dm-second-menu__col">
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Важные документы для горожан</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Проекты документов: антикоррупционная экспертиза и общественное обсуждение</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Решения Думы города</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Муниципальные программы</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Порядок обжалования муниципальных правовых актов</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Антимонопольный комплаенс</a>
              </div>
              <div class="dm-second-menu__links"><a class="dm-second-menu__title" href="/">Оценка регулирующего воздействия и экспертиза муниципальных нормативных правовых актов (проектов)</a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="header__link" aria-label="Контакты"> <a href="/" tabindex="-1">Контакты          </a></li>
    </ul>
    <button class="button button_burger button_size_xs button_without-text  " onclick="toggleMenu()" title="" role="button">
      <ion-icon class="icon" name="menu-outline"></ion-icon>
    </button>
  </div>
  <div class="header-visibility__top-content"> 
    <div class="mobile-menu">
      <div class="menu menu_main-bg">
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
    <div class="header-visibility__top-links">
      <ul class="header_links">
        <li class="header__link" aria-label="О Сургуте"> <a href="/" tabindex="-1">О Сургуте          </a></li>
        <li class="header__link" aria-label="Городская власть"> <a href="/" tabindex="-1">Городская власть          </a></li>
        <li class="header__link" aria-label="Документы"> <a href="/" tabindex="-1">Документы          </a></li>
        <li class="header__link" aria-label="Контакты"> <a href="/" tabindex="-1">Контакты          </a></li>
      </ul>
      <div class="header__socials"><a class="header__social-icon vk_icon" href="/" title="Ссылка на социальные сети Вконтакте" role="link"></a><a class="header__social-icon ok_icon" href="/" title="Ссылка на социальные сети Одноклассники" role="link"></a><a class="header__social-icon tg_icon" href="/" title="Ссылка на социальные сети Телеграмм" role="link"></a>
      </div>
    </div>
    <div class="header__buttons"> 
      <button class="button button_blue button_header button_size_xs   " onclick="showLogin()" title="" role="button" aria-label="Войти"><span class="button_span">Войти</span>
      </button>
    </div>
  </div>
  <div class="header-visibility__middle-content"> <a class="header__main-links" href="/" role="link" title="Главная" aria-label="Главная страница"><img class="header__logo" src="/local/templates/surgut/icons/footer-logo_icon.svg" alt="Логотип"/>
      <div class="header__main-links__block"> <span class="header__title">Администрация Сургута</span><span class="header__main-link">Официальный портал</span></div></a>
    <form class="search search-header">
      <input class="input input_s  input-search input-search-s  " placeholder="Поиск по сайту" name="adm-by-site-search" value="" id="adm-by-site-search" role="textbox"/>
      <button class="button button_blue search__button search__button_s  button_without-text  " onclick="1" title="" role="button" aria-label="Поиск">
        <ion-icon class="icon" name="search-outline"></ion-icon>
      </button>
    </form>
    <button class="button button_burger button_size_xs button_without-text  " onclick="toggleMenu()" title="" role="button">
      <ion-icon class="icon" name="menu-outline"></ion-icon>
    </button>
  </div>
  <div class="header-visibility__bottom-content">
    <ul class="header_links">
      <li class="header__link" aria-label="Быстрый доступ"> <a href="/" tabindex="-1">Быстрый доступ          </a></li>
      <li class="header__link" aria-label="Публичные слушания"> <a href="/" tabindex="-1">Публичные слушания          </a></li>
      <li class="header__link" aria-label="Противодействие коррупции"> <a href="/" tabindex="-1">Противодействие коррупции          </a></li>
      <li class="header__link" aria-label="Пресс-центр"> <a href="/" tabindex="-1">Пресс-центр          </a></li>
      <li class="header__link" aria-label="Обращения граждан"> <a href="/" tabindex="-1">Обращения граждан          </a></li>
    </ul>
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