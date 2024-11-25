
<div class="dm-events">
  <div class="dm-events__container"> 
    <div class="main-title">
      <div class="main-title__container">
        <h1 class="main-title__title">Хроника и анонсы событий</h1><a class="main-title__link" href="/">Все события</a>
      </div>
    </div>
    <div class="dm-filter__btn">
      <button class="button button_white dm-filter__button button_size_m  button_icon-left " onclick="toggleFilters()" title=""><span class="button_span">Фильтры</span>
        <ion-icon class="icon" name="funnel-outline"></ion-icon>
      </button>
    </div>
    <div class="filters-popup">
      <div class="filters-popup__container"> 
        <div class="filters-popup__top-content"> <span class="filters-popup__title">Фильтры</span>
          <button class="button button files-list__delete-button  button_without-text  " onclick="toggleFilters();" title="">
            <ion-icon class="icon" name="close-outline"></ion-icon>
          </button>
        </div>
        <div class="filters-popup__tags"><span class="filters-popup__title">Раздел</span>
          <div class="tabs-tag"><a class="tab-button " value="Кино">Кино</a><a class="tab-button " value="Концерты">Концерты</a><a class="tab-button " value="Выставки">Выставки</a><a class="tab-button " value="Театр">Театр</a><a class="tab-button " value="Детям">Детям</a><a class="tab-button " value="Конференции">Конференции</a>
          </div>
        </div>
        <div class="filters-popup__calendar"><span class="filters-popup__title">Выберите период публикации                  </span>
          <div class="calendar-dm" id="calendar-dm-events-popup"></div>
        </div>
        <div class="filters-popup__buttons">             
          <button class="button button_blue filters-popup__btn button_size_m   " onclick="console.log(1);" title=""><span class="button_span">Искать</span>
          </button>
        </div>
      </div>
    </div>
    <div class="dm-calendar__btn">
      <button class="button button_white dm-calendar__button    " onclick="toggleDumaCalendar();" title=""><span class="button_span">Календарь</span>
        <ion-icon class="icon" name="calendar-number-outline"></ion-icon>
      </button>
    </div>
    <div class="dm-events__calendar">
      <div class="calendar-dm" id="calendar-dm-events"></div>
    </div>
    <div class="filters">
      <div class="filters_container">
        <select class="select filters__select select-icon-right">
          <option class="select__option" value="Все события">Все события</option>
          <option class="select__option" value="Театр">Театр</option>
          <option class="select__option" value="Детям">Детям</option>
          <option class="select__option" value="Выставки">Выставки</option>
          <option class="select__option" value="Концерты">Концерты</option>
        </select>
        <select class="select filters__select select-icon-right">
          <option class="select__option" value="Любая тематика">Любая тематика</option>
          <option class="select__option" value="Любая тематика">Любая тематика</option>
        </select>
        <select class="select filters__select select-icon-right">
          <option class="select__option" value="Место проведения">Место проведения</option>
          <option class="select__option" value="Место проведения">Место проведения</option>
        </select>
      </div>
      <input class="сheckbox сheckbox-label " type="checkbox" id="10" name="with-card" checked="checked"/>
      <label class="сheckbox__label" for="10">С пушкинской картой</label>
    </div>
    <div class="chronicle">
      <div class="chronicle__container"> 
        <div class="chronicle__list">
          <div class="event">
            <div class="event__container">           
              <div class="event__info"> 
                <div class="event__time-block"> 
                  <ion-icon class="event__icon" name="time"></ion-icon><span class="event__time">11 : 00</span>
                </div>
                <div class="event__location"> <span class="event__place">Здание №1</span>
                  <div class="event__icon-dot"></div><span class="event__place">408 каб</span>
                </div>
              </div>
              <p class="event__description">Комиссия по регламенту, депутатской этике, реализации депутатских полномочий, вопросам информационной политики и взаимодействия с институтами гражданского общества</p><span class="event__number">2           </span>
            </div>
          </div>
          <div class="event">
            <div class="event__container">           
              <div class="event__info"> 
                <div class="event__time-block"> 
                  <ion-icon class="event__icon" name="time"></ion-icon><span class="event__time">11 : 00</span>
                </div>
                <div class="event__location"> <span class="event__place">Здание №1</span>
                  <div class="event__icon-dot"></div><span class="event__place">408 каб</span>
                </div>
              </div>
              <p class="event__description">Комиссия по регламенту, депутатской этике, реализации депутатских полномочий, вопросам информационной политики и взаимодействия с институтами гражданского общества</p><span class="event__number">2           </span>
            </div>
          </div>
          <div class="event">
            <div class="event__container">           
              <div class="event__info"> 
                <div class="event__time-block"> 
                  <ion-icon class="event__icon" name="time"></ion-icon><span class="event__time">11 : 00</span>
                </div>
                <div class="event__location"> <span class="event__place">Здание №1</span>
                  <div class="event__icon-dot"></div><span class="event__place">408 каб</span>
                </div>
              </div>
              <p class="event__description">Комиссия по регламенту, депутатской этике, реализации депутатских полномочий, вопросам информационной политики и взаимодействия с институтами гражданского общества</p><span class="event__number">2           </span>
            </div>
          </div>
          <div class="event">
            <div class="event__container">           
              <div class="event__info"> 
                <div class="event__time-block"> 
                  <ion-icon class="event__icon" name="time"></ion-icon><span class="event__time">11 : 00</span>
                </div>
                <div class="event__location"> <span class="event__place">Здание №1</span>
                  <div class="event__icon-dot"></div><span class="event__place">408 каб</span>
                </div>
              </div>
              <p class="event__description">Комиссия по регламенту, депутатской этике, реализации депутатских полномочий, вопросам информационной политики и взаимодействия с институтами гражданского общества</p><span class="event__number">2           </span>
            </div>
          </div>
          <div class="event">
            <div class="event__container">           
              <div class="event__info"> 
                <div class="event__time-block"> 
                  <ion-icon class="event__icon" name="time"></ion-icon><span class="event__time">11 : 00</span>
                </div>
                <div class="event__location"> <span class="event__place">Здание №1</span>
                  <div class="event__icon-dot"></div><span class="event__place">408 каб</span>
                </div>
              </div>
              <p class="event__description">Комиссия по регламенту, депутатской этике, реализации депутатских полномочий, вопросам информационной политики и взаимодействия с институтами гражданского общества</p><span class="event__number">2           </span>
            </div>
          </div>
          <div class="event">
            <div class="event__container">           
              <div class="event__info"> 
                <div class="event__time-block"> 
                  <ion-icon class="event__icon" name="time"></ion-icon><span class="event__time">11 : 00</span>
                </div>
                <div class="event__location"> <span class="event__place">Здание №1</span>
                  <div class="event__icon-dot"></div><span class="event__place">408 каб</span>
                </div>
              </div>
              <p class="event__description">Комиссия по регламенту, депутатской этике, реализации депутатских полномочий, вопросам информационной политики и взаимодействия с институтами гражданского общества</p><span class="event__number">2           </span>
            </div>
          </div>
          <div class="chronicle__slider">
            <div class="navigation"> <a class="navigation__link">
                <ion-icon class="icon" name="arrow-back-outline"></ion-icon></a>
              <div class="navigation__pages"><span class="navigation__page">1</span><span class="navigation__page">/</span><span class="navigation__page">2</span></div><a class="navigation__link">
                <ion-icon class="icon" name="arrow-forward-outline"></ion-icon></a>
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