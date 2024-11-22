
<div class="projects-array">
  <div class="projects-array__content projects-array__content">
    <div class="projects-array__edit-buttons">
      <button class="button button_blue button_size_m  button_icon-left " onclick="addProject()"><span class="button_span">Добавить проект</span>
        <ion-icon class="icon" name="add-outline"></ion-icon>
      </button>
      <button class="button button_white button_size_m   " onclick="editProject()"><span class="button_span">Редактировать</span>
      </button>
    </div>
    <div class="projects-array__list">
      <div class="project-card"> 
        <div class="project-card__content"> 
          <input class="сheckbox  " type="checkbox" id="1" name="undefined" checked="checked"/>
          <label for="1"> </label>
          <div class="project-card__info"> 
            <h4 class="project-card__title">Название инициативного проекта</h4><span class="project-card__date">Создан 23 сентября 2024</span>
            <button class="button button_blue button_radius button_size_xs   button_without-event"><span class="button_span">Не заполнен</span>
            </button>
          </div>
        </div>
      </div>
      <div class="project-card"> 
        <div class="project-card__content"> 
          <input class="сheckbox  " type="checkbox" id="2" name="undefined" checked="checked"/>
          <label for="2"> </label>
          <div class="project-card__info"> 
            <h4 class="project-card__title">Название инициативного проекта</h4><span class="project-card__date">Создан 23 сентября 2024</span>
            <button class="button button_red button_radius button_size_xs   button_without-event"><span class="button_span">Выполнен</span>
            </button>
          </div>
        </div>
      </div>
      <div class="project-card"> 
        <div class="project-card__content"> 
          <input class="сheckbox  " type="checkbox" id="3" name="undefined" checked="checked"/>
          <label for="3"> </label>
          <div class="project-card__info"> 
            <h4 class="project-card__title">Название инициативного проекта</h4><span class="project-card__date">Создан 23 сентября 2024</span>
            <button class="button button_green button_radius button_size_xs   button_without-event"><span class="button_span">Выполнен</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="projects-array__save-buttons">
      <button class="button button_blue button_size_m  button_icon-left " onclick="deleteProject()"><span class="button_span">Удалить</span>
        <ion-icon class="icon" name="trash-outline"></ion-icon>
      </button>
      <button class="button button_white button_size_m   " onclick="cancelEdit()"><span class="button_span">Отмена</span>
      </button>
    </div>
  </div>
</div>