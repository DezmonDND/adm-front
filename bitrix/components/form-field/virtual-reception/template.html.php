
<h2 class="main__title">Виртуальная приемная<span class="main__description">Информация о персональных данных авторов обращений, направленных в электронном виде, хранится и обрабатывается с соблюдением требований российского законодательства персональных данных. </span>
  <form class="virtual-receprion__form">
    <div class="virtual-receprion__content"> 
      <h3 class="virtual-reception__title">Основные данные</h3>
      <div class="virtual-reception__select">
        <div class="undefined form-field form-field_inputs">
          <h3 class="undefined form-field__title">Кому направляете электронную анкету</h3>
        </div>
        <select class="select select-virtual-reception select-icon-[object Object],[object Object],[object Object]">
        </select>
      </div>
      <div class="virtual-reception__form-field form-field form-field_inputs">
        <h3 class="virtual-reception__field-title form-field__title">Наименование вашей организации (юридического лица)</h3>
        <div class="form-field__input-list">
          <input class="input input-virtual-reception_input input-undefined input-search-undefined " placeholder="Наименование организации" name="companyName" value=""/>
        </div>
      </div>
      <div class="virtual-reception__form-field form-field form-field_inputs">
        <h3 class="virtual-reception__field-title form-field__title">Ваши данные</h3>
        <div class="form-field__input-list">
          <input class="input input-virtual-reception_input input-undefined input-search-undefined " placeholder="Фамилия" name="firstName" value=""/>
          <input class="input input-virtual-reception_input input-undefined input-search-undefined " placeholder="Имя" name="secondName" value=""/>
          <input class="input input-virtual-reception_input input-undefined input-search-undefined " placeholder="Отчество" name="thirdName" value=""/>
        </div>
      </div>
      <button class="button button_white button_add-author" onclick="getValues(event)"><span class="button_span">Добавить соавтора</span><img class="icon" src="./icons/add-author-disabled_icon.svg" alt="add-author-disabled_icon.svg"/>
      </button>
      <div class="virtual-reception__form-field form-field form-field_inputs">
        <h3 class="virtual-reception__field-title form-field__title">Данные для контакта</h3>
        <div class="form-field__input-list">
          <input class="input input-virtual-reception_input input-undefined input-search-undefined " placeholder="your_email@mail.ru" name="email" value=""/>
          <input class="input input-virtual-reception_input input-undefined input-search-undefined " placeholder="892343567" name="phone" value=""/>
        </div>
      </div>
      <div class="virtual-reception__form-field form-field form-field_inputs">
        <h3 class="virtual-reception__field-title form-field__title">Обращение</h3>
        <div class="container">
          <textarea class="textarea textarea-undefined" placeholder="Введите ваш ответ" oninput="getLength(this)"></textarea>
          <div class="counter"><span class="current">0</span><span>/</span><span class="max">900</span></div>
        </div>
      </div>
    </div>
    <ul class="virtual-reception__documents__list">
      <li class="virtual-reception__document">
        <button class="button button virtual-reception__delete-button" onclick="getValues(event)"><span class="button_span"></span><img class="icon" src="./icons/close-btn_icon.svg" alt="close-btn_icon.svg"/>
        </button>
        <div class="virtual-reception__document-description"> <img class="virtual-reception__document-icon" src="../icons/doc-2_icon.svg" alt=""/><span class="virtual-reception__document-title">Отчёт о деятельности постоянных комитетов в 2023 году.pdf</span></div>
      </li>
      <li class="virtual-reception__document">
        <button class="button button virtual-reception__delete-button" onclick="getValues(event)"><span class="button_span"></span><img class="icon" src="./icons/close-btn_icon.svg" alt="close-btn_icon.svg"/>
        </button>
        <div class="virtual-reception__document-description"> <img class="virtual-reception__document-icon" src="../icons/doc-2_icon.svg" alt=""/><span class="virtual-reception__document-title">Отчёт о деятельности постоянных комитетов в 2023 году.pdf                   </span></div>
      </li>
      <li class="virtual-reception__document">
        <button class="button button virtual-reception__delete-button" onclick="getValues(event)"><span class="button_span"></span><img class="icon" src="./icons/close-btn_icon.svg" alt="close-btn_icon.svg"/>
        </button>
        <div class="virtual-reception__document-description"> <img class="virtual-reception__document-icon" src="../icons/doc-2_icon.svg" alt=""/><span class="virtual-reception__document-title">Отчёт о деятельности постоянных комитетов в 2023 году.pdf                                              </span></div>
      </li>
    </ul>
    <div class="virtual-reception__buttons">
      <div class="custom-file-upload">
        <label for="file" id="file-label">Вложить документ
          <input class="hidden" type="file" id="file" name="addDocument" autocomplete="off" value=""/>
        </label>
      </div>
      <button class="button button_blue virtual-reception__send-button" onclick="getValues(event)"><span class="button_span">Отправить обращение</span><img class="icon" src="./icons/arrow_icon.svg" alt="arrow_icon.svg"/>
      </button>
    </div>
  </form>
</h2>