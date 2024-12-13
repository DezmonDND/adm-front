
<div class="dm-events">
  <div class="dm-events__container"> 
    <div class="main-title">
      <div class="main-title__container">
        <h1 class="main-title__title">Хроника и анонсы событий</h1><a class="main-title__link" href="/" role="link" aria-label="Все события">Все события</a>
      </div>
    </div>
    <div class="dm-filter__btn">
      <button class="button button_white dm-filter__button button_size_m  button_icon-left " onclick="toggleFilters()" title="" role="button" aria-label="Фильтры"><span class="button_span">Фильтры</span>
        <ion-icon class="icon" name="funnel-outline"></ion-icon>
      </button>
    </div>
    <div class="filters-popup">
      <div class="filters-popup__container"> 
        <div class="filters-popup__top-content"> <span class="filters-popup__title">Фильтры</span>
          <button class="button button files-list__delete-button  button_without-text  " onclick="toggleFilters();" title="" role="button" aria-label="Удалить">
            <ion-icon class="icon" name="close-outline"></ion-icon>
          </button>
        </div>
        <div class="filters-popup__tags"><span class="filters-popup__title">Раздел</span>
          <div class="tabs-tag" role="tablist"><a class="tab-button " value="Кино" role="tab" aria-label="Кино">Кино</a><a class="tab-button " value="Концерты" role="tab" aria-label="Концерты">Концерты</a><a class="tab-button " value="Выставки" role="tab" aria-label="Выставки">Выставки</a><a class="tab-button " value="Театр" role="tab" aria-label="Театр">Театр</a><a class="tab-button " value="Детям" role="tab" aria-label="Детям">Детям</a><a class="tab-button " value="Конференции" role="tab" aria-label="Конференции">Конференции</a>
          </div>
        </div>
        <div class="filters-popup__calendar"><span class="filters-popup__title">Выберите период публикации                  </span>
          <div class="calendar-dm" id="calendar-dm-events-popup"></div>
        </div>
        <div class="filters-popup__buttons">             
          <button class="button button_blue filters-popup__btn button_size_m   " onclick="console.log(1);" title="" role="button" aria-label="Искать"><span class="button_span">Искать</span>
          </button>
        </div>
      </div>
    </div>
    <div class="dm-calendar__btn">
      <button class="button button_white dm-calendar__button    " onclick="toggleDumaCalendar();" title="" role="button" aria-label="Календарь"><span class="button_span">Календарь</span>
        <ion-icon class="icon" name="calendar-number-outline"></ion-icon>
      </button>
    </div>
    <div class="dm-events__calendar">
      <div class="calendar-dm" id="calendar-dm-events"></div>
    </div>
    <div class="filters">
      <div class="filters_container">
        <select class="select single select_filters__select select-icon-right" name="events" role="listbox">
          <option class="select__option" value="Все события">Все события</option>
          <option class="select__option" value="Театр">Театр</option>
          <option class="select__option" value="Детям">Детям</option>
          <option class="select__option" value="Выставки">Выставки</option>
          <option class="select__option" value="Концерты">Концерты</option>
        </select>
        <select class="select single select_filters__select select-icon-right" name="thema" role="listbox">
          <option class="select__option" value="Любая тематика">Любая тематика</option>
          <option class="select__option" value="Любая тематика">Любая тематика</option>
        </select>
        <select class="select single select_filters__select select-icon-right" name="thema" role="listbox">
          <option class="select__option" value="Место проведения">Место проведения</option>
          <option class="select__option" value="Место проведения">Место проведения</option>
        </select>
      </div>
      <input class="сheckbox сheckbox-label " type="checkbox" id="10" name="with-card" checked="checked"/>
      <label class="сheckbox__label" for="10" role="checkbox">С пушкинской картой</label>
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