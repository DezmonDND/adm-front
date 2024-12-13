
<div class="projects-array">
  <div class="projects-array__content projects-array__content">
    <div class="projects-array__edit-buttons">
      <button class="button button_blue button_size_m  button_icon-left " onclick="addProject()" title="" role="button" aria-label="Добавить инициативный проект"><span class="button_span">Добавить инициативный проект</span>
        <ion-icon class="icon" name="add-outline"></ion-icon>
      </button>
    </div>
    <div class="projects-array__list">
      <div class="project-card"> 
        <div class="project-card__content"> 
          <input class="сheckbox  " type="checkbox" id="1" name="undefined" checked="checked"/>
          <label for="1" role="checkbox"> </label>
          <div class="project-card__info"> 
            <h4 class="project-card__title">Название инициативного проекта</h4><span class="project-card__date">Создан 23 сентября 2024</span><span class="button button_blue button_radius button_size_xs   button_without-event" title=""><span class="button_span">Не заполнен</span></span>
          </div>
        </div>
      </div>
      <div class="project-card"> 
        <div class="project-card__content"> 
          <input class="сheckbox  " type="checkbox" id="2" name="undefined" checked="checked"/>
          <label for="2" role="checkbox"> </label>
          <div class="project-card__info"> 
            <h4 class="project-card__title">Название инициативного проекта</h4><span class="project-card__date">Создан 23 сентября 2024</span><span class="button button_red button_radius button_size_xs   button_without-event" title=""><span class="button_span">Выполнен</span></span>
          </div>
        </div>
      </div>
      <div class="project-card"> 
        <div class="project-card__content"> 
          <input class="сheckbox  " type="checkbox" id="3" name="undefined" checked="checked"/>
          <label for="3" role="checkbox"> </label>
          <div class="project-card__info"> 
            <h4 class="project-card__title">Название инициативного проекта</h4><span class="project-card__date">Создан 23 сентября 2024</span><span class="button button_green button_radius button_size_xs   button_without-event" title=""><span class="button_span">Выполнен</span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="projects-array__save-buttons">
      <button class="button button_blue button_size_m  button_icon-left " onclick="deleteProject()" title="" role="button" aria-label="Удалить"><span class="button_span">Удалить</span>
        <ion-icon class="icon" name="trash-outline"></ion-icon>
      </button>
      <button class="button button_white button_size_m   " onclick="cancelEdit()" title="" role="button" aria-label="Отмена"><span class="button_span">Отмена</span>
      </button>
    </div>
  </div>
</div>