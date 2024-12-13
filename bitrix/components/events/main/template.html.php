
<div class="events">
  <div class="full-width-container">
    <div class="full-width-background">
      <div class="full-width-content">                                            
        <div class="events__container"> 
          <div class="main-title">
            <div class="main-title__container">
              <h1 class="main-title__title">Анонсы и события</h1><a class="main-title__link" href="/" role="link" aria-label="Все события">Все события</a>
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
                <div class="calendar-dm" id="events-calendar-popup"></div>
              </div>
              <div class="filters-popup__buttons">             
                <button class="button button_blue filters-popup__btn button_size_m   " onclick="console.log(1);" title="" role="button" aria-label="Искать"><span class="button_span">Искать</span>
                </button>
              </div>
            </div>
          </div>
          <div class="dm-calendar__btn">
            <button class="button button_white dm-calendar__button    " onclick="toggleAdmCalendar();" title="" role="button" aria-label="Календарь"><span class="button_span">Календарь</span>
              <ion-icon class="icon" name="calendar-number-outline"></ion-icon>
            </button>
          </div>
          <div class="events__calendar"> 
            <div class="calendar-dm" id="events-calendar"></div>
          </div>
          <div class="calendar" aria-label="Календарь событий">
            <div class="calendar__links">
              <div class="calendar__link-content"><a class="calendar__link calendar__link_clicked" href="/" role="link" aria-label="18 Вт">18                        </a><span class="calendar__day calendar__day_clicked" tabindex="-1">Вт</span>
                <div class="calendar__icon"><span>2</span></div>
              </div>
              <div class="calendar__link-content"><a class="calendar__link" href="/" role="link" aria-label="19 Ср">19                        </a><span class="calendar__day" tabindex="-1">Ср</span>
              </div>
              <div class="calendar__link-content"><a class="calendar__link calendar__link_active" href="/" role="link" aria-label="20 Чт">20                        </a><span class="calendar__day calendar__day_active" tabindex="-1">Чт</span>
                <div class="calendar__icon"><span>2</span></div>
              </div>
              <div class="calendar__link-content"><a class="calendar__link calendar__link_active" href="/" role="link" aria-label="21 Пт">21                        </a><span class="calendar__day calendar__day_active" tabindex="-1">Пт</span>
                <div class="calendar__icon"><span>2</span></div>
              </div>
              <div class="calendar__link-content"><a class="calendar__link" href="/" role="link" aria-label="22 Сб">22                        </a><span class="calendar__day" tabindex="-1">Сб</span>
              </div>
              <div class="calendar__link-content"><a class="calendar__link" href="/" role="link" aria-label="23 Вс">23                        </a><span class="calendar__day" tabindex="-1">Вс</span>
              </div>
              <div class="calendar__link-content"><a class="calendar__link calendar__link_active" href="/" role="link" aria-label="24 Пр">24                        </a><span class="calendar__day calendar__day_active" tabindex="-1">Пр</span>
                <div class="calendar__icon"><span>2</span></div>
              </div>
              <div class="calendar__link-content"><a class="calendar__link calendar__link_active" href="/" role="link" aria-label="25 Вт">25                        </a><span class="calendar__day calendar__day_active" tabindex="-1">Вт</span>
                <div class="calendar__icon"><span>2</span></div>
              </div>
              <div class="calendar__link-content"><a class="calendar__link" href="/" role="link" aria-label="26 Ср">26                        </a><span class="calendar__day" tabindex="-1">Ср</span>
              </div>
              <div class="calendar__link-content"><a class="calendar__link calendar__link_active" href="/" role="link" aria-label="27 Чт">27                        </a><span class="calendar__day calendar__day_active" tabindex="-1">Чт</span>
                <div class="calendar__icon"><span>2</span></div>
              </div>
              <div class="calendar__link-content"><a class="calendar__link calendar__link_active" href="/" role="link" aria-label="28 Пт">28                        </a><span class="calendar__day calendar__day_active" tabindex="-1">Пт</span>
                <div class="calendar__icon"><span>2</span></div>
              </div>
              <div class="calendar__link-content"><a class="calendar__link" href="/" role="link" aria-label="29 Сб">29                        </a><span class="calendar__day" tabindex="-1">Сб</span>
              </div>
              <div class="calendar__link-content"><a class="calendar__link" href="/" role="link" aria-label="30 Вс">30                        </a><span class="calendar__day" tabindex="-1">Вс</span>
              </div>
              <div class="calendar__divider"></div>
              <div class="calendar__link-content"><a class="calendar__link calendar__link_without-events" href="/" role="link" aria-label="1 Пн">1                        </a><span class="calendar__day calendar__day_without-events" tabindex="-1">Пн</span>
              </div>
              <div class="calendar__link-content"><a class="calendar__link calendar__link_active" href="/" role="link" aria-label="2 Вт">2                        </a><span class="calendar__day calendar__day_active" tabindex="-1">Вт</span>
                <div class="calendar__icon"><span>2</span></div>
              </div>
              <div class="calendar__link-content"><a class="calendar__link calendar__link_without-events" href="/" role="link" aria-label="3 Ср">3                        </a><span class="calendar__day calendar__day_without-events" tabindex="-1">Ср</span>
              </div>
              <div class="calendar__link-content"><a class="calendar__link calendar__link_active" href="/" role="link" aria-label="4 Чт">4                        </a><span class="calendar__day calendar__day_active" tabindex="-1">Чт</span>
                <div class="calendar__icon"><span>2</span></div>
              </div>
            </div>
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
          <div class="events__news" id="events__news"><a class="news-main-card" href="/" title="Памятный знак для будущего «Сургутского кремля» создадут горожане">
              <div class="news-main-card__container">
                <div class="news-main-card__image-block"> <img class="news-main-card__image" src="./resources/image_1.jpg" alt="Изображения"/>
                  <div class="news-main-card__tags"><span class="button button_blue button_radius news-card__tag button_size_xs   button_without-event" title=""><span class="button_span">Кино</span></span>
                  </div>
                </div>
                <div class="news-main-card__content"> <span class="news-main-card__date">10 июня 2023</span><span class="news-main-card__title">Памятный знак для будущего «Сургутского кремля» создадут горожане</span></div>
              </div></a><a class="news-main-card" href="/" title="Памятный знак для будущего «Сургутского кремля» создадут горожане">
              <div class="news-main-card__container">
                <div class="news-main-card__image-block"> <img class="news-main-card__image" src="./resources/image_2.jpg" alt="Изображения"/>
                  <div class="news-main-card__tags"><span class="button button_blue button_radius news-card__tag button_size_xs   button_without-event" title=""><span class="button_span">Кино</span></span>
                  </div>
                </div>
                <div class="news-main-card__content"> <span class="news-main-card__date">10 июня 2023</span><span class="news-main-card__title">Памятный знак для будущего «Сургутского кремля» создадут горожане</span></div>
              </div></a><a class="news-main-card" href="/" title="Памятный знак для будущего «Сургутского кремля» создадут горожане">
              <div class="news-main-card__container">
                <div class="news-main-card__image-block"> <img class="news-main-card__image" src="./resources/image_3.jpg" alt="Изображения"/>
                  <div class="news-main-card__tags"><span class="button button_blue button_radius news-card__tag button_size_xs   button_without-event" title=""><span class="button_span">Кино</span></span>
                  </div>
                </div>
                <div class="news-main-card__content"> <span class="news-main-card__date">10 июня 2023</span><span class="news-main-card__title">Памятный знак для будущего «Сургутского кремля» создадут горожане</span></div>
              </div></a><a class="news-main-card" href="/" title="Памятный знак для будущего «Сургутского кремля» создадут горожане">
              <div class="news-main-card__container">
                <div class="news-main-card__image-block"> <img class="news-main-card__image" src="./resources/image_5.png" alt="Изображения"/>
                  <div class="news-main-card__tags"><span class="button button_blue button_radius news-card__tag button_size_xs   button_without-event" title=""><span class="button_span">Кино</span></span>
                  </div>
                </div>
                <div class="news-main-card__content"> <span class="news-main-card__date">10 июня 2023</span><span class="news-main-card__title">Памятный знак для будущего «Сургутского кремля» создадут горожане</span></div>
              </div></a><a class="news-main-card" href="/" title="Памятный знак для будущего «Сургутского кремля» создадут горожане">
              <div class="news-main-card__container">
                <div class="news-main-card__image-block"> <img class="news-main-card__image" src="./resources/image_1.jpg" alt="Изображения"/>
                  <div class="news-main-card__tags"><span class="button button_blue button_radius news-card__tag button_size_xs   button_without-event" title=""><span class="button_span">Кино</span></span>
                  </div>
                </div>
                <div class="news-main-card__content"> <span class="news-main-card__date">10 июня 2023</span><span class="news-main-card__title">Памятный знак для будущего «Сургутского кремля» создадут горожане</span></div>
              </div></a><a class="news-main-card" href="/" title="Памятный знак для будущего «Сургутского кремля» создадут горожане">
              <div class="news-main-card__container">
                <div class="news-main-card__image-block"> <img class="news-main-card__image" src="./resources/image_2.jpg" alt="Изображения"/>
                  <div class="news-main-card__tags"><span class="button button_blue button_radius news-card__tag button_size_xs   button_without-event" title=""><span class="button_span">Кино</span></span>
                  </div>
                </div>
                <div class="news-main-card__content"> <span class="news-main-card__date">10 июня 2023</span><span class="news-main-card__title">Памятный знак для будущего «Сургутского кремля» создадут горожане</span></div>
              </div></a><a class="news-main-card" href="/" title="Памятный знак для будущего «Сургутского кремля» создадут горожане">
              <div class="news-main-card__container">
                <div class="news-main-card__image-block"> <img class="news-main-card__image" src="./resources/image_3.jpg" alt="Изображения"/>
                  <div class="news-main-card__tags"><span class="button button_blue button_radius news-card__tag button_size_xs   button_without-event" title=""><span class="button_span">Кино</span></span>
                  </div>
                </div>
                <div class="news-main-card__content"> <span class="news-main-card__date">10 июня 2023</span><span class="news-main-card__title">Памятный знак для будущего «Сургутского кремля» создадут горожане</span></div>
              </div></a><a class="news-main-card" href="/" title="Памятный знак для будущего «Сургутского кремля» создадут горожане">
              <div class="news-main-card__container">
                <div class="news-main-card__image-block"> <img class="news-main-card__image" src="./resources/image_5.png" alt="Изображения"/>
                  <div class="news-main-card__tags"><span class="button button_blue button_radius news-card__tag button_size_xs   button_without-event" title=""><span class="button_span">Кино</span></span>
                  </div>
                </div>
                <div class="news-main-card__content"> <span class="news-main-card__date">10 июня 2023</span><span class="news-main-card__title">Памятный знак для будущего «Сургутского кремля» создадут горожане</span></div>
              </div></a>
          </div>
          <div class="events__navigation">
            <div class="navigation"> <a class="navigation__link">
                <ion-icon class="icon" name="arrow-back-outline" role="button" aria-label="Назад"></ion-icon></a>
              <div class="navigation__pages" tabindex="-1"><span class="navigation__page">1</span><span class="navigation__page">/</span><span class="navigation__page">7</span></div><a class="navigation__link">
                <ion-icon class="icon" name="arrow-forward-outline" role="button" aria-label="Вперед"></ion-icon></a>
            </div>
          </div>
          <div class="events__slider">
            <div class="slider"><a class="slider__link slider__events-prev" role="button" aria-label="Назад">
                <ion-icon name="arrow-back-outline"></ion-icon></a><span class="slider__counter">   </span><a class="slider__link slider__events-next" role="button" aria-label="Вперед">
                <ion-icon name="arrow-forward-outline"> </ion-icon></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>