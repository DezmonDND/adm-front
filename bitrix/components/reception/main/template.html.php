
<div class="reception">
  <div class="title"> 
    <div class="title__container"> 
      <h2 class="title__name">Виртуальная приемная</h2>
      <div class="title__description">Информация о персональных данных авторов обращений, направленных в электронном виде, хранится и обрабатывается с соблюдением требований российского законодательства персональных данных.               </div>
    </div>
  </div>
  <form class="reception__form">
    <div class="reception__content"> 
      <h3 class="reception__main_title">Основные данные</h3>
      <fieldset class="fieldset">
        <h3 class="fieldset__title reception__sender_title fieldset__req">Кому направляете электронную анкету</h3>
        <div class="fieldset__answers">
          <select class="select select-icon-right">
            <option class="select__option" value="Филатов Андрей Сергеевич, Глава города Сургута">Филатов Андрей Сергеевич, Глава города Сургута</option>
            <option class="select__option" value="Филатов">Филатов</option>
            <option class="select__option" value="Глава города Сургута">Глава города Сургута</option>
          </select>
        </div>
      </fieldset>
      <fieldset class="fieldset ">
        <h3 class="fieldset__title reception__job_title  ">Наименование вашей организации (юридического лица)</h3>
        <div class="fieldset__answers">
          <input class="input  input-virtual-reception_input    " placeholder="Наименование организации" name="companyName" value="" id="companyName"/>
        </div>
      </fieldset>
      <fieldset class="fieldset fieldset_user-contacts">
        <h3 class="fieldset__title reception__user_title  fieldset__req">Ваши данные</h3>
        <div class="fieldset__answers">
          <input class="input  input-virtual-reception_input    " placeholder="Фамилия" name="firstName" value="" id="firstName" required="required"/>
          <input class="input  input-virtual-reception_input    " placeholder="Имя" name="secondName" value="" id="secondName" required="required"/>
          <input class="input  input-virtual-reception_input    " placeholder="Отчество" name="thirdName" value="" id="thirdName"/>
        </div>
      </fieldset>
      <button class="button button_white reception_add-author-btn   button_icon-left " onclick="addFormField(event)" title=""><span class="button_span">Добавить соавтора</span>
        <ion-icon class="icon" name="people"></ion-icon>
      </button>
      <fieldset class="fieldset ">
        <h3 class="fieldset__title reception__email_title  fieldset__req">Данные для контакта</h3>
        <div class="fieldset__answers">
          <input class="input  input-virtual-reception_input    " placeholder="your_email@mail.ru" name="email" value="" id="email" required="required"/>
          <input class="input  input-virtual-reception_input    phone_sms" placeholder="Номер телефона" name="phone" value="" id="phone" required="required"/>
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <h3 class="fieldset__title reception__feedback_title ">Обращение</h3>
        <div class="fieldset__answers">
          <div class="textarea__container">
            <textarea class="textarea  " placeholder="Содержание вашего обращения" name="feedback" required="required" maxlength="none"></textarea>
            <div class="counter reception_counter"><span class="current">0</span><span>/</span><span class="max">none </span></div>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="files-list" id="files-list-file"></div>
    <div class="reception__buttons">
      <div class="add-file-button" onclick="addDocument(event)">
        <label for="file" id="file-label">Вложить документ
          <ion-icon class="add-file-button__icon" name="add-outline"></ion-icon>
          <input class="input__add-document" type="file" id="file" name="files" multiple="multiple"/>
        </label><span class="add-file-button__desc">Принимаются файлы размером не более 2,5 МБ </span>
      </div>
      <hr/>
      <h4>Введите код CAPTCHA</h4>
      <div class="reception__cap">
        <div class="reception__cap-inp">
          <input class="input  input-virtual-reception_input    " placeholder="Код CAPTCHA" name="captcha" value="" id="captcha" required="required"/>
        </div>
        <div class="reception__cap-captcha"><img src="/resources/captcha.png" alt="captcha"/></div>
      </div>
      <div class="reception__submit">
        <button class="button button_blue button_size_l   " onclick="getValues(event)" title=""><span class="button_span">Отправить обращение</span>
          <ion-icon class="icon" name="arrow-forward-outline"></ion-icon>
        </button>
      </div>
      <div class="reception__agreement"><span>Нажимая на кнопку, я соглашаюсь с<a href="#"> правилами обработки персональных данных </a>и даю свое согласие на <a href="#">обработку персональных данных</a></span></div>
    </div>
  </form>
</div>