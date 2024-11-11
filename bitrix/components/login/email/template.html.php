
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