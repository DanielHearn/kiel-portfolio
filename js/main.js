const body = document.querySelector('body')
const menuButton = document.querySelector('#overlay-button')
// const overlay = document.querySelector('#overlay')

function toggleOverlay () {
  body.classList.toggle('menu-active')
  // menuButton.classList.toggle('active')
}

// Mobile menu
if (menuButton) {
  menuButton.addEventListener('click', toggleOverlay)
}

// Portfolio grid
if (document.querySelector('.subportfolio-grid')) {
  lightGallery(document.querySelector('.subportfolio-grid'), {
    subHtmlSelectorRelative: true,
    speed: 600,
    counter: false,
    showAfterLoad: true,
    download: false,
    cssEasing: 'ease-in-out',
    swipeThreshold: 25
  })
}
