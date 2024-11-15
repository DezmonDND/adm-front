
<div class="header-visibility">
  <div class="header-visibility-container">
    <div class="header-visibility-elems">
      <div class="header-visibility-elem">
        <div class="header-visibility-elem-left"><span>Размер шрифта:</span></div>
        <div class="header-visibility-elem-right"><span class="font-size-1" onclick="setFontSize(1, this)"> А </span><span class="font-size-15" onclick="setFontSize(1.5, this)"> А </span><span class="font-size-2" onclick="setFontSize(2, this)"> А</span></div>
      </div>
      <div class="header-visibility-elem">
        <div class="header-visibility-elem-left"><span>Межбуквенный интервал:</span></div>
        <div class="header-visibility-elem-right"><span class="letter-spacing-0" onclick="setLetterSpacing(0, this)">А</span><span class="letter-spacing-6" onclick="setLetterSpacing(0.06, this)">А </span><span class="letter-spacing-12" onclick="setLetterSpacing(0.12, this)">А</span></div>
      </div>
      <div class="header-visibility-elem">
        <div class="header-visibility-elem-left"><span>Межстрочный интервал:</span></div>
        <div class="header-visibility-elem-right"><span class="line-height-12" onclick="setLineHeight(1.5, this)">А</span><span class="line-height-15" onclick="setLineHeight(2, this)">А </span><span class="line-height-2" onclick="setLineHeight(2.5, this)">А</span></div>
      </div>
      <div class="header-visibility-elem"> 
        <div class="header-visibility-elem-left"><span>Цвет сайта:</span></div>
        <div class="header-visibility-elem-right">
          <button class="theme-light" onclick="setTheme(`light`, this)">A </button>
          <button class="theme-dark" onclick="setTheme(`dark`, this)">A</button>
          <button class="theme-blue" onclick="setTheme(`blue`, this)">A</button>
        </div>
      </div>
    </div>
    <div class="header-visibility-close">
      <ion-icon name="close-outline"></ion-icon>
    </div>
  </div>
</div>