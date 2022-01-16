const subtitle = document.querySelector('.subtitle')

//reload page (if click) after animation
subtitle.addEventListener('animationend', () => {
  document.addEventListener('click', () => {
    location.reload()
  })
})