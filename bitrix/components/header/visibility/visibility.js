function visibility() {
    const visible = document.querySelector('.header-visibility')
    if (visible) visible.classList.toggle('active')
    document.body.classList.toggle('visibility')
    const font = document.querySelector('.font-size-1')
    const spacing = document.querySelector('.letter-spacing-0')
    const height = document.querySelector('.line-height-12')
    const theme = document.querySelector('.theme-light')
    setFontSize(1, font)
    setLetterSpacing(0, spacing)
    setLineHeight(1.5, height)
    setTheme('light', theme)
  
    const close = document.querySelector('.header-visibility-close')
    close.addEventListener('click', () => {
      document.body.style.setProperty('--scale', `1`);
      document.body.style.setProperty('--lh', `1.2`);
      document.body.style.setProperty('--ls', `0`);
      document.body.classList.remove('dark-theme');
      visible.classList.remove('active')
      document.body.classList.remove('visibility')
    })
  }

  function setFontSize(scale, el) {
    const parent = el.parentElement;
    const docs = parent.querySelectorAll('.active-param')
    docs.forEach(doc => { doc.classList.remove('active-param')})
    document.body.style.setProperty('--scale', `${scale}`)
    el.classList.add('active-param')
  }
  
  function setLineHeight(scale, el) {
    const parent = el.parentElement;
    const docs = parent.querySelectorAll('.active-param')
    docs.forEach(doc => { doc.classList.remove('active-param')})
    document.body.style.setProperty('--lh', `${scale}`)
    el.classList.add('active-param')
  }
  
  function setLetterSpacing(scale, el) {
    const parent = el.parentElement;
    const docs = parent.querySelectorAll('.active-param')
    docs.forEach(doc => { doc.classList.remove('active-param')})
    document.body.style.setProperty('--ls', `${scale}em`)
    el.classList.add('active-param')
  }
  
  function setTheme(theme, el) {
    const parent = el.parentElement;
    const docs = parent.querySelectorAll('.active-param')
    docs.forEach(doc => {doc.classList.remove('active-param')})
    el.classList.add('active-param')
    if(theme == 'dark') {
      document.body.classList.add('dark-theme')
    }
    if(theme == 'light'){
      document.body.classList.remove('dark-theme')
    }
  }