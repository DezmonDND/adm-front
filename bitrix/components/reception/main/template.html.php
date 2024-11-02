
<h2 class="main__title">Виртуальная приемная</h2><span class="main__description">Информация о персональных данных авторов обращений, направленных в электронном виде, хранится и обрабатывается с соблюдением требований российского законодательства персональных данных. </span>
<form class="virtual-receprion__form">
  <div class="virtual-receprion__content"> 
    <h3 class="virtual-reception__title">Основные данные</h3>
    <div class="virtual-reception__select">
      <div class="form-field form-field_inputs ">
        <h3 class="form-field__title ">Кому направляете электронную анкету</h3>
      </div>
      <select class="select select-virtual-reception select-icon-right">
        <option class="select__option" value="Филатов Андрей Сергеевич, Глава города Сургута">Филатов Андрей Сергеевич, Глава города Сургута</option>
        <option class="select__option" value="Филатов">Филатов</option>
        <option class="select__option" value="Глава города Сургута">Глава города Сургута</option>
      </select>
    </div>
    <div class="form-field form-field_inputs virtual-reception__job-field">
      <h3 class="form-field__title virtual-reception__field-title">Наименование вашей организации (юридического лица)</h3>
      <div class="form-field__input-list">
        <input class="input input-virtual-reception_input   " placeholder="Наименование организации" name="companyName" value=""/>
      </div>
    </div>
    <div class="virtual-reception__user-contacts">
      <div class="form-field form-field_inputs virtual-reception__form-field">
        <h3 class="form-field__title virtual-reception__field-title">Ваши данные</h3>
        <div class="form-field__input-list">
          <input class="input input-virtual-reception_input   " placeholder="Фамилия" name="firstName" value=""/>
          <input class="input input-virtual-reception_input   " placeholder="Имя" name="secondName" value=""/>
          <input class="input input-virtual-reception_input   " placeholder="Отчество" name="thirdName" value=""/>
        </div>
      </div>
    </div>
    <button class="button button_white button_add-author" onclick="addFormField(event)"><span class="button_span">Добавить соавтора</span></button>
    <div class="form-field form-field_inputs virtual-reception__form-field">
      <h3 class="form-field__title virtual-reception__field-title_email">Данные для контакта</h3>
      <div class="form-field__input-list">
        <input class="input input-virtual-reception_input   " placeholder="your_email@mail.ru" name="email" value=""/>
        <input class="input input-virtual-reception_input   " placeholder="892343567" name="phone" value=""/>
      </div>
    </div>
    <div class="form-field form-field_inputs virtual-reception__feedback">
      <h3 class="form-field__title virtual-reception__feedback-title">Обращение</h3>
      <div class="container">
        <textarea class="textarea  " placeholder="Введите ваш ответ" oninput="getLength(this)"></textarea>
        <div class="counter reception"><span class="current">0</span><span>/</span><span class="max"> </span></div>
      </div>
    </div>
  </div>
  <ul class="virtual-reception__documents__list"></ul>
  <div class="virtual-reception__buttons">
    <div class="custom-file-upload" onclick="addDocument()">
      <label for="file" id="file-label">Вложить документ
        <input class="input__add-document" type="file" id="file" name="addDocument" value=""/>
      </label>
    </div>
    <button class="button button_blue virtual-reception__send-button" onclick="getValues(event)"><span class="button_span">Отправить обращение</span><img class="icon" src="/local/templates/surgut/icons/arrow_icon.svg" alt="arrow_icon.svg"/>
    </button>
  </div>
</form>