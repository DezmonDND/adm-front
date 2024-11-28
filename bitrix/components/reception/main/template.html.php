
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
        <h3 class="fieldset__title reception__sender_title">Кому направляете электронную анкету</h3>
        <div class="fieldset__answers">
          <select class="select select-icon-right">
            <option class="select__option" value="Филатов Андрей Сергеевич, Глава города Сургута">Филатов Андрей Сергеевич, Глава города Сургута</option>
            <option class="select__option" value="Филатов">Филатов</option>
            <option class="select__option" value="Глава города Сургута">Глава города Сургута</option>
          </select>
        </div>
      </fieldset>
      <fieldset class="fieldset ">
        <h3 class="fieldset__title reception__job_title">Наименование вашей организации (юридического лица)</h3>
        <div class="fieldset__answers">
          <input class="input  input-virtual-reception_input   " placeholder="Наименование организации" name="companyName" value="" id="companyName"/>
        </div>
      </fieldset>
      <fieldset class="fieldset fieldset_user-contacts">
        <h3 class="fieldset__title reception__user_title">Ваши данные</h3>
        <div class="fieldset__answers">
          <input class="input  input-virtual-reception_input   " placeholder="Фамилия" name="firstName" value="" id="firstName"/>
          <input class="input  input-virtual-reception_input   " placeholder="Имя" name="secondName" value="" id="secondName"/>
          <input class="input  input-virtual-reception_input   " placeholder="Отчество" name="thirdName" value="" id="thirdName"/>
        </div>
      </fieldset>
      <button class="button button_white reception_add-author-btn   button_icon-left " onclick="addFormField(event)" title=""><span class="button_span">Добавить соавтора</span>
        <ion-icon class="icon" name="people"></ion-icon>
      </button>
      <fieldset class="fieldset ">
        <h3 class="fieldset__title reception__email_title">Данные для контакта</h3>
        <div class="fieldset__answers">
          <input class="input  input-virtual-reception_input   " placeholder="your_email@mail.ru" name="email" value="" id="email"/>
          <input class="input  input-virtual-reception_input   " placeholder="892343567" name="phone" value="" id="phone"/>
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <h3 class="fieldset__title reception__feedback_title">Обращение</h3>
        <div class="fieldset__answers">
          <div class="textarea__container">
            <textarea class="textarea  " placeholder="Введите ваш ответ" name="feedback" maxlength="900"></textarea>
            <div class="counter reception_counter"><span class="current">0</span><span>/</span><span class="max">900 </span></div>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="files-list"></div>
    <div class="reception__buttons">
      <div class="add-file-button" onclick="addDocument()">
        <label for="file" id="file-label">Вложить документ
          <ion-icon class="add-file-button__icon" name="add-outline"></ion-icon>
          <input class="input__add-document" type="file" id="file" name="files" multiple="multiple"/>
        </label>
      </div>
      <button class="button button_blue button_size_l   " onclick="getValues(event)" title=""><span class="button_span">Отправить обращение</span>
        <ion-icon class="icon" name="arrow-forward-outline"></ion-icon>
      </button>
    </div>
  </form>
</div>