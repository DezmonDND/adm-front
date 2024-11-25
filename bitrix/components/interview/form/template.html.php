
<form class="interview-form">
  <fieldset class="undefined fieldset">
    <h3 class="fieldset__title ">1. Предполагается возможность финансового участия соответствующих заинтересованных лиц в реализации инициативного проекта?</h3>
    <div class="fieldset__answers_checkboxes">
      <div class="fieldset__checkboxes">
        <input class="сheckbox сheckbox-label radio" type="radio" id="1" name="radio"/>
        <label class="сheckbox__label" for="1">Да</label>
      </div>
      <div class="fieldset__checkboxes">
        <input class="сheckbox сheckbox-label radio" type="radio" id="2" name="radio"/>
        <label class="сheckbox__label" for="2">Нет</label>
      </div>
    </div>
  </fieldset>
  <fieldset class="undefined fieldset">
    <h3 class="fieldset__title ">2. Предполагается возможность финансового участия соответствующих заинтересованных лиц в реализации инициативного проекта?</h3>
    <div class="fieldset__answers_checkboxes">
      <div class="fieldset__checkboxes">
        <input class="сheckbox сheckbox-label " type="checkbox" id="3" name="undefined"/>
        <label class="сheckbox__label" for="3">Первый вариант</label>
      </div>
      <div class="fieldset__checkboxes">
        <input class="сheckbox сheckbox-label " type="checkbox" id="4" name="undefined"/>
        <label class="сheckbox__label" for="4">Второй вариант</label>
      </div>
      <div class="fieldset__checkboxes">
        <input class="сheckbox сheckbox-label " type="checkbox" id="5" name="undefined"/>
        <label class="сheckbox__label" for="5">Третий вариант</label>
      </div>
    </div>
  </fieldset>
  <fieldset class="fieldset ">
    <h3 class="fieldset__title ">3. Предполагается возможность финансового участия соответствующих заинтересованных лиц в реализации инициативного проекта?</h3>
    <div class="fieldset__answers">
      <input class="input  input-interview-full   " placeholder="Введите ваш ответ" name="answer3" value=""/>
    </div>
  </fieldset>
  <fieldset class="fieldset">
    <h3 class="fieldset__title ">4. Предполагается возможность финансового участия соответствующих заинтересованных лиц в реализации инициативного проекта?</h3>
    <div class="fieldset__answers">
      <div class="textarea__container">
        <textarea class="textarea  " placeholder="Введите ваш ответ" maxlength="900" oninput="getLength(this)"></textarea>
        <div class="counter "><span class="current">0</span><span>/</span><span class="max">900 </span></div>
      </div>
    </div>
  </fieldset>
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
  <fieldset class="fieldset">
    <h3 class="fieldset__title reception__sender_title">Кому направляете электронную анкету</h3>
    <div class="fieldset__answers">
      <div class="ms">
        <ul class="ms__chose">
          <li>
            <input class="input ms__input" id="name" name="multiSelect" value="" type="text"/>
          </li>
        </ul>
        <ul class="ms__dropdown ms__dropdown_hidden" id="multiSelectDropdown">
          <li class="ms__dropdown-item ms__dropdown-item_visible" data-value="Филатов Андрей Сергеевич">Филатов Андрей Сергеевич</li>
          <li class="ms__dropdown-item ms__dropdown-item_visible" data-value="Филатов Андрей Сергеевич, Глава">Филатов Андрей Сергеевич, Глава </li>
          <li class="ms__dropdown-item ms__dropdown-item_visible" data-value="Филатов Андрей, Глава города Сургута">Филатов Андрей, Глава города Сургута</li>
        </ul>
      </div>
    </div>
  </fieldset>
  <button class="button button_blue button_size_l   " onclick="getValues(event)" title=""><span class="button_span">Отправить форму</span>
    <ion-icon class="icon" name="arrow-forward-outline"></ion-icon>
  </button>
</form>