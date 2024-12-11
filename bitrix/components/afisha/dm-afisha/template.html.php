
<div class="dm-afisha">
  <div class="dm-afisha__container">
    <div class="dm-filter__btn"><span class="button button_white dm-filter__button button_size_m  button_icon-left button_without-event" title=""><span class="button_span">Фильтры</span>
        <ion-icon class="icon" name="funnel-outline"></ion-icon></span>
    </div>
    <div class="dm-calendar__btn"><span class="button button_white dm-calendar__button   button_icon-left button_without-event" title=""><span class="button_span">Календарь</span>
        <ion-icon class="icon" name="calendar-number-outline"></ion-icon></span>
    </div>
    <div class="filters">
      <div class="filters_container">
        <select class="select single select_filters__select select-icon-right" name="events">
          <option class="select__option" value="Все события">Все события</option>
          <option class="select__option" value="Театр">Театр</option>
          <option class="select__option" value="Детям">Детям</option>
          <option class="select__option" value="Выставки">Выставки</option>
          <option class="select__option" value="Концерты">Концерты</option>
        </select>
        <select class="select single select_filters__select select-icon-right" name="thema">
          <option class="select__option" value="Любая тематика">Любая тематика</option>
          <option class="select__option" value="Любая тематика">Любая тематика</option>
        </select>
        <select class="select single select_filters__select select-icon-right" name="thema">
          <option class="select__option" value="Место проведения">Место проведения</option>
          <option class="select__option" value="Место проведения">Место проведения</option>
        </select>
      </div>
    </div>
    <div class="chronicle">
      <div class="chronicle__container"> 
        <div class="chronicle__list">
          <div class="no-events">
            <div class="no-events__container">
              <ion-icon class="no-events__icon" name="alert-circle"></ion-icon>
              <p class="no-events__text">На выбранную дату событий нет</p>
            </div>
          </div>
        </div>
        <div class="chronicle__calendar">
          <div class="calendar-dm" id="calendar-duma"></div>
        </div>
      </div>
    </div>
  </div>
</div>