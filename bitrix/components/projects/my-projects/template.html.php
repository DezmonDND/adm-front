
<div class="user-profile"> 
  <button class="user-profile__button" onclick="changeAvatar()" type="button"> <img class="user-profile__avatar" src="./img/user_avatar.png" alt="Аватар"/></button>
  <div class="user-profile__info"> 
    <h2 class="user-profile__name">Валентинов Георгий Викторович</h2><span class="user-profile_job">Должность     </span>
  </div>
</div>
<div class="tabs tabs_projects">
  <button class="tab-button tab-button-m" onclick="" type="button" value="Настройки">Настройки</button>
  <button class="tab-button tab-button-m" onclick="" type="button" value="Мои подписки">Мои подписки</button>
  <button class="tab-button tab-button-m" onclick="" type="button" value="Мои инициативные проекты">Мои инициативные проекты</button>
  <button class="tab-button tab-button-m" onclick="" type="button" value="Мои обращения">Мои обращения</button>
</div>
<div class="projects-array">
  <div class="projects-array__content">
    <div class="projects-array__edit-buttons">
      <button class="button button_blue projects-array__button" onclick="addProject()"><span class="button_span">Добавить инициативный проект</span><img class="icon" src="./icons/plus_icon.svg" alt="plus_icon.svg"/>
      </button>
      <button class="button button_white projects-array__button" onclick="editProject()"><span class="button_span">Редактировать текущие</span></button>
    </div>
    <div class="projects-array__list">
      <div class="project-card"> 
        <div class="project-card__content"> 
          <input class="сheckbox " type="checkbox" id="1" name="undefined" checked="checked"/>
          <label for="1"></label>
          <div class="project-card__info"> 
            <h4 class="project-card__title">Название инициативного проекта</h4><span class="project-card__date">Создан 23 сентября 2024</span>
            <button class="tag tag_project-card tag_ tag_event_false" type="button">Не заполнен</button>
          </div>
        </div>
      </div>
      <div class="project-card"> 
        <div class="project-card__content"> 
          <input class="сheckbox " type="checkbox" id="2" name="undefined" checked="checked"/>
          <label for="2"></label>
          <div class="project-card__info"> 
            <h4 class="project-card__title">Название инициативного проекта</h4><span class="project-card__date">Создан 23 сентября 2024</span>
            <button class="tag tag_project-card tag_ tag_event_false" type="button">Не заполнен</button>
          </div>
        </div>
      </div>
      <div class="project-card"> 
        <div class="project-card__content"> 
          <input class="сheckbox " type="checkbox" id="3" name="undefined" checked="checked"/>
          <label for="3"></label>
          <div class="project-card__info"> 
            <h4 class="project-card__title">Название инициативного проекта</h4><span class="project-card__date">Создан 23 сентября 2024</span>
            <button class="tag tag_project-card tag_ tag_event_true" type="button">Выполнен</button>
          </div>
        </div>
      </div>
    </div>
    <div class="projects-array__save-buttons">
      <button class="button button_blue projects-array__button" onclick="deleteProject()"><span class="button_span">Удалить</span><img class="icon" src="./icons/delete_icon.svg" alt="delete_icon.svg"/>
      </button>
      <button class="button button_white projects-array__button projects-array__button_save_button" onclick="cancelEdit()"><span class="button_span">Отмена</span></button>
    </div>
  </div>
</div>