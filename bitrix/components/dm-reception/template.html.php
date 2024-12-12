
<div class="dm-reception">
  <div class="dm-reception__container">
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
    <form class="dm-reception__form"> 
      <h3 class="dm-reception__title">Форма отправки обращения  </h3>
      <div class="dm-reception__fileds">
        <div class="dm-reception__name-inputs">
          <input class="input      " placeholder="Фамилия*" name="first_name" value="" id="first_name"/>
          <input class="input      " placeholder="Имя*" name="second_name" value="" id="second_name"/>
          <input class="input      " placeholder="Отчество*" name="third_name" value="" id="third_name"/>
        </div>
        <div class="dm-reception__inputs">   
          <input class="input      " placeholder="Регион и населенный пункт*" name="city" value="" id="city"/>
          <input class="input      " placeholder="Почтовый адрес" name="post_adress" value="" id="post_adress"/>
          <input class="input      " placeholder="Электронная почта*" name="email" value="" id="email"/>
          <div class="textarea__container">
            <textarea class="textarea  " placeholder="Ваше обращение / вопрос*" name="question" maxlength="20000"></textarea>
            <div class="counter "><span class="current">0</span><span>/</span><span class="max">20000 </span></div>
          </div>
        </div><span class="dm-reception__required"><span class="span_red">*</span> - поля, обязательные для заполнения</span>
      </div>
      <div class="dm-applications__buttons">
        <div class="files-list" id="files-list-file"></div>
        <div class="add-file-button" onclick="addDocument(event)">
          <label for="file" id="file-label">Вложить документ
            <ion-icon class="add-file-button__icon" name="add-outline"></ion-icon>
            <input class="input__add-document" type="file" id="file" name="files" multiple="multiple"/>
          </label><span class="add-file-button__desc">Принимаются файлы размером не более 2,5 МБ </span>
        </div>
        <div class="dm-applications__divider"></div>
        <div class="dm-reception__button-desc">  
          <button class="button button_blue button_size_l   " onclick="getValues(event)" title=""><span class="button_span">Отправить обращение</span>
            <ion-icon class="icon" name="arrow-forward-outline"></ion-icon>
          </button><span class="dm-reception__warning">Перед отправкой проверьте, правильно ли вы заполнили поля</span>
        </div>
      </div>
    </form>
  </div>
</div>