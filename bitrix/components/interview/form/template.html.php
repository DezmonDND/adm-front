
<form class="interview-form">
  <div class="form-field ">
    <h3 class="form-field__title ">1. Предполагается возможность финансового участия соответствующих заинтересованных лиц в реализации инициативного проекта?</h3>
    <div class="form-field__answers">
      <div class="form-field__input">
        <input class="сheckbox сheckbox-label radio" type="radio" id="1" name="radio"/>
        <label class="сheckbox__label" for="1">Да</label><span class="form-field__text"> </span>
      </div>
      <div class="form-field__input">
        <input class="сheckbox сheckbox-label radio" type="radio" id="2" name="radio"/>
        <label class="сheckbox__label" for="2">Нет</label><span class="form-field__text"> </span>
      </div>
    </div>
  </div>
  <div class="form-field ">
    <h3 class="form-field__title">2. Предполагается возможность финансового участия соответствующих заинтересованных лиц в реализации инициативного проекта?</h3>
    <div class="form-field__answers">
      <div class="form-field__input">
        <input class="сheckbox сheckbox-label " type="checkbox" id="3" name="undefined"/>
        <label class="сheckbox__label" for="3">Первый вариант</label><span class="form-field__text"> </span>
      </div>
      <div class="form-field__input">
        <input class="сheckbox сheckbox-label " type="checkbox" id="4" name="undefined"/>
        <label class="сheckbox__label" for="4">Второй вариант</label><span class="form-field__text"> </span>
      </div>
      <div class="form-field__input">
        <input class="сheckbox сheckbox-label " type="checkbox" id="5" name="undefined"/>
        <label class="сheckbox__label" for="5">Третий вариант</label><span class="form-field__text"> </span>
      </div>
    </div>
  </div>
  <div class="form-field form-field_inputs ">
    <h3 class="form-field__title ">3. Предполагается возможность финансового участия соответствующих заинтересованных лиц в реализации инициативного проекта?</h3>
    <div class="form-field__input-list">
      <input class="input input-interview-full   " placeholder="Введите ваш ответ" name="answer3" value=""/>
    </div>
  </div>
  <div class="form-field form-field_inputs ">
    <h3 class="form-field__title ">4. Предполагается возможность финансового участия соответствующих заинтересованных лиц в реализации инициативного проекта?</h3>
    <div class="container">
      <textarea class="textarea  " placeholder="Введите ваш ответ" oninput="getLength(this)"></textarea>
      <div class="counter "><span class="current">0</span><span>/</span><span class="max"> </span></div>
    </div>
  </div>
  <button class="button button_blue button_interview" onclick="getValues(event)"><span class="button_span">Отправить форму</span><img class="icon" src="/local/templates/surgut/icons/arrow_icon.svg" alt="arrow_icon.svg"/>
  </button>
</form>