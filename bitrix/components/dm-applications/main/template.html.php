
<div class="dm-applications">
  <div class="dm-applications__container">
    <ul class="dm-applications__list"> 
      <li class="dm-applications__item">Обращения рассматриваются в соответствии с Федеральным законом от 02.05.2006 <a class="link" href="/">№ 59-ФЗ "О порядке рассмотрения обращений граждан Российской Федерации"</a>;</li>
      <li class="dm-applications__item">Обращения подлежат обязательной регистрации в течение трех дней с момента поступления <a class="link" href="/">отделом по организационному и документационному обеспечению Думы города</a>;</li>
      <li class="dm-applications__item">Ответ на обращение направляется по электронной почте;</li>
      <li class="dm-applications__item">Ответ может быть продублирован обычной почтой по почтовому адресу, указанному в анкете, если в форме отмечено соответствующее поле;</li>
      <li class="dm-applications__item">Длина текста электронного обращения не должна превышать 20 тысяч символов;</li>
      <li class="dm-applications__item">Электронное обращение может содержать вложенный файл, размером не более 2,5мб.</li>
      <li class="dm-applications__item">Обращения, содержащие в электронном виде материалы большего объема, следует направлять <a class="link" href="/">иным способом</a>;</li>
      <li class="dm-applications__item">Информация о персональных данных авторов обращений, направленных в электронном виде, <a class="link" href="/">хранится и обрабатывается</a> с соблюдением требований российского законодательства о персональных данных. </li>
    </ul>
    <form class="dm-applications__form"> 
      <h3 class="dm-applications__title">Основные данные</h3>
      <fieldset class="fieldset">
        <h3 class="fieldset__title reception__sender_title">Адресат обращения</h3>
        <div class="fieldset__answers">
          <select class="select select-icon-right">
            <option class="select__option" value="Барсов Евгений Вячеславович">Барсов Евгений Вячеславович</option>
            <option class="select__option" value="Филатов">Филатов</option>
            <option class="select__option" value="Глава города Сургута">Глава города Сургута</option>
          </select>
        </div>
      </fieldset>
      <fieldset class="fieldset fieldset_user-contacts">
        <h3 class="fieldset__title reception__user_title">Ваши данные (от кого)</h3>
        <div class="fieldset__answers">
          <input class="input input-virtual-reception_input   " placeholder="Фамилия" name="firstName" value=""/>
          <input class="input input-virtual-reception_input   " placeholder="Имя" name="secondName" value=""/>
          <input class="input input-virtual-reception_input   " placeholder="Отчество" name="thirdName" value=""/>
        </div>
      </fieldset>
      <fieldset class="fieldset ">
        <h3 class="fieldset__title reception__job_title">Почтовый адрес для контакта</h3>
        <div class="fieldset__answers">
          <input class="input input-virtual-reception_input   " placeholder="Пример: some@mail.ru" name="companyName" value=""/>
        </div>
      </fieldset>
      <div class="dm-applications__get-answer">      
        <input class="сheckbox сheckbox-label " type="checkbox" id="contact" name="contact"/>
        <label class="сheckbox__label" for="contact">Требование дать письменный ответ по почте</label>
      </div>
      <div class="dm-applications__divider">    </div>
      <fieldset class="fieldset">
        <h3 class="fieldset__title reception__feedback_title">Обращение</h3>
        <div class="fieldset__answers">
          <div class="textarea__container">
            <textarea class="textarea  " placeholder="Введите ваше обращение (не больше 20 тысяч символов)" name="feedback" maxlength="20000" oninput="getLength(this)"></textarea>
            <div class="counter reception_counter"><span class="current">0</span><span>/</span><span class="max">20000 </span></div>
          </div>
        </div>
      </fieldset>
    </form>
    <div class="dm-applications__buttons">
      <div class="add-file-button" onclick="addDocument()">
        <label for="file" id="file-label">Вложить документ
          <ion-icon class="add-file-button__icon" name="add-outline"></ion-icon>
          <input class="input__add-document" type="file" id="file" name="files" multiple="multiple"/>
        </label><span class="add-file-button__desc">Принимаются файлы размером не более 2,5 МБ </span>
      </div>
      <div class="files-list"></div>
      <div class="dm-applications__divider"> </div>
      <div class="dm-applications__agreement">
        <input class="сheckbox " type="checkbox" id="accept" name="accept"/>
        <label for="accept"> </label>
        <p class="dm-applications__desc"><span class="dm-applications__span">Согласие на обработку персональных данных:</span> нажимая на кнопку "Отправить" выражаю согласие на обработку, в том числе с помощью средств автоматизации, моих персональных данных. <a class="dm-applications__link" href="/">С Политикой Думы города Сургута в отношении обработки персональных данных</a> ознакомлен.           </p>
      </div>
      <button class="button button_blue button_size_l   " onclick="getValues(event)"><span class="button_span">Отправить обращение</span>
        <ion-icon class="icon" name="arrow-forward-outline"></ion-icon>
      </button>
    </div>
  </div>
</div>