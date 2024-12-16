
<div class="search-by-site">
  <input class="input input_s input-search-by-site  input-search-s  " placeholder="Поиск по наименованию или номеру" name="siteSearch" value="" id="siteSearch" role="textbox"/>
  <div class="search-by-site__buttons">
    <select class="select left select_search-by-site__select select-icon-xs" name="section">
      <option class="select__option" value="Раздел">Раздел</option>
      <option class="select__option" value="Раздел 1">Раздел 1</option>
      <option class="select__option" value="Раздел 2">Раздел 2</option>
      <option class="select__option" value="Раздел 3">Раздел 3</option>
      <option class="select__option" value="Раздел 4">Раздел 4</option>
      <option class="select__option" value="Раздел 5">Раздел 5</option>
    </select>
    <button class="button search-by-site__button    " onclick="toggleCalendar();" title="" role="button" aria-label="Период публикации"><span class="button_span">Период публикации</span>
      <ion-icon class="icon" name="calendar-number-outline"></ion-icon>
    </button>
    <button class="button button_blue button_size_m   " onclick="console.log(1);" title="" role="button" aria-label="Искать"><span class="button_span">Искать</span>
    </button>
    <div class="search-by-site__calendar"> 
      <div class="calendar-dm" id="calendar" aria-label="Календарь для выбора дат" tabindex="0"></div>
    </div>
  </div>
  <div class="search-by-site__filters">
    <form class="search search-search-by-site">
      <input class="input input_m  input-search input-search-m  " placeholder="Тема или тип документа" name="laws" value="" id="laws" role="textbox"/>
      <button class="button button_blue search__button search__button_m  button_without-text  " onclick="1" title="" role="button" aria-label="Поиск">
        <ion-icon class="icon" name="search-outline"></ion-icon>
      </button>
    </form>
    <div class="dm-filter__btn">
      <button class="button button_white dm-filter__button button_size_m  button_icon-left " onclick="toggleFilters()" title="" role="button" aria-label="Фильтры"><span class="button_span">Фильтры</span>
        <ion-icon class="icon" name="funnel-outline"></ion-icon>
      </button>
    </div>
  </div>
  <div class="filters-popup">
    <div class="filters-popup__container"> 
      <div class="filters-popup__top-content"> <span class="filters-popup__title">Фильтры</span>
        <button class="button button files-list__delete-button  button_without-text  " onclick="toggleFilters();" title="" role="button" aria-label="Удалить">
          <ion-icon class="icon" name="close-outline"></ion-icon>
        </button>
      </div>
      <div class="filters-popup__tags"><span class="filters-popup__title">Раздел</span>
        <div class="tabs-tag" role="tablist"><a class="tab-button " role="tab" aria-label="Кино">Кино</a><a class="tab-button " role="tab" aria-label="Концерты">Концерты</a><a class="tab-button " role="tab" aria-label="Выставки">Выставки</a><a class="tab-button " role="tab" aria-label="Театр">Театр</a><a class="tab-button " role="tab" aria-label="Детям">Детям</a><a class="tab-button " role="tab" aria-label="Конференции">Конференции</a>
        </div>
      </div>
      <div class="filters-popup__calendar"><span class="filters-popup__title">Выберите период публикации                  </span>
        <div class="calendar-dm" id="calendar-popup" aria-label="Календарь для выбора дат" tabindex="0"></div>
      </div>
      <div class="filters-popup__buttons">             
        <button class="button button_blue filters-popup__btn button_size_m   " onclick="console.log(1);" title="" role="button" aria-label="Искать"><span class="button_span">Искать</span>
        </button>
      </div>
    </div>
  </div>
</div>
<input id="from" name="from" value="value" style="display: none;"/>
<input id="to" name="to" value="value" style="display: none;"/>
<div class="adm-search"><a class="project-card project-card_link" href="/"> 
    <div class="project-card__content"> 
      <div class="project-card__info"> 
        <h4 class="project-card__title">Дети – цветы жизни!</h4><span class="project-card__date">23 сентября 2024</span><span class="button button_blue button_radius button_size_xs   button_without-event" title=""><span class="button_span">Новости ОФПС</span></span>
      </div>
    </div></a><a class="project-card project-card_link" href="/"> 
    <div class="project-card__content"> 
      <div class="project-card__info"> 
        <h4 class="project-card__title">В Сургуте стартовала оперативно-профилактическая акция «Дети России»</h4><span class="project-card__date">23 сентября 2024</span><span class="button button_blue button_radius button_size_xs   button_without-event" title=""><span class="button_span">Новости ОФПС</span></span>
      </div>
    </div></a><a class="project-card project-card_link" href="/"> 
    <div class="project-card__content"> 
      <div class="project-card__info"> 
        <h4 class="project-card__title">Дети – цветы жизни!</h4><span class="project-card__date">23 сентября 2024</span><span class="button button_blue button_radius button_size_xs   button_without-event" title=""><span class="button_span">Новости ОФПС</span></span>
      </div>
    </div></a>
  <div class="adm-search__pagination"> 
    <div class="pagination">
      <button class="pag-button-with-icon pag-button_left" href="/2/1" role="button" aria-label="Назад"><span class="pag-button__span">Назад</span></button><a class="pag-button" href="/2/1" role="button" aria-label="Страница 1">1  </a><a class="pag-button" href="/2/2" role="button" aria-label="Страница 2">2  </a><a class="pag-button" href="/2/3" role="button" aria-label="Страница 3">3  </a><a class="pag-button pag-button_active" href="/2/4" role="button" aria-label="Страница 4">4</a><a class="pag-button" href="/2/5" role="button" aria-label="Страница 5">5  </a><a class="pag-button" href="/2/6" role="button" aria-label="Страница 6">6  </a>
      <button class="pag-button-with-icon pag-button_right" href="/2/6" role="button" aria-label="Вперед"> <span class="pag-button__span">Вперед</span></button>
    </div>
  </div>
</div>