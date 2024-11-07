
<h2 class="main__title">Виртуальная приемная</h2><span class="main__description">Информация о персональных данных авторов обращений, направленных в электронном виде, хранится и обрабатывается с соблюдением требований российского законодательства персональных данных. </span>
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
        <input class="input input-virtual-reception_input   " placeholder="Наименование организации" name="companyName" value=""/>
      </div>
    </fieldset>
    <fieldset class="fieldset fieldset_user-contacts">
      <h3 class="fieldset__title reception__user_title">Ваши данные</h3>
      <div class="fieldset__answers">
        <input class="input input-virtual-reception_input   " placeholder="Фамилия" name="firstName" value=""/>
        <input class="input input-virtual-reception_input   " placeholder="Имя" name="secondName" value=""/>
        <input class="input input-virtual-reception_input   " placeholder="Отчество" name="thirdName" value=""/>
      </div>
    </fieldset>
    <button class="button button_white reception_add-author-btn    " onclick="addFormField(event)"><span class="button_span">Добавить соавтора</span>
    </button>
    <fieldset class="fieldset ">
      <h3 class="fieldset__title reception__email_title">Данные для контакта</h3>
      <div class="fieldset__answers">
        <input class="input input-virtual-reception_input   " placeholder="your_email@mail.ru" name="email" value=""/>
        <input class="input input-virtual-reception_input   " placeholder="892343567" name="phone" value=""/>
      </div>
    </fieldset>
    <fieldset class="fieldset">
      <h3 class="fieldset__title reception__feedback_title">Обращение</h3>
      <div class="fieldset__answers">
        <div class="container">
          <textarea class="textarea  " placeholder="Введите ваш ответ" name="feedback" maxlength="none" oninput="getLength(this)"></textarea>
          <div class="counter reception_counter"><span class="current">0</span><span>/</span><span class="max">none </span></div>
        </div>
      </div>
    </fieldset>
  </div>
  <ul class="reception__documents-list"></ul>
  <div class="reception__buttons">
    <div class="custom-file-upload" onclick="addDocument()">
      <label for="file" id="file-label">Вложить документ
        <input class="input__add-document" type="file" id="file" name="files" multiple="multiple"/>
      </label>
    </div>
    <button class="button button_blue button_size_l   " onclick="getValues(event)"><span class="button_span">Отправить обращение</span>
      <ion-icon class="icon" name="arrow-forward-outline"></ion-icon>
    </button>
  </div>
</form>