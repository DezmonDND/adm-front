
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
        <input class="input     " placeholder="Номер телефона" value=""/>
      </div>
      <div class="login__content-main__confirm-standart">
        <button class="button button_blue button_size_m   " onclick="showCode()" title=""><span class="button_span">Войти</span>
        </button>
      </div>
      <div class="login__content-main__confirm-delim"> 
        <div class="delim-line"></div><span> или </span>
        <div class="delim-line"> </div>
      </div>
      <div class="login__content-main__confirm-gos"><a class="button button_link button_white button_size_m  " href="/" title="" attributes="{}"><span class="button_span">Войти через госуслуги</span></a>
      </div>
      <div class="login__content-main__confirm-email"><span onclick="showEmail()">Войти по почте </span></div>
    </div>
  </div>
</div>