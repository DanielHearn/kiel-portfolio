const body = document.querySelector('body')
const menuButton = document.querySelector('#overlay-button')
const aboutButton = document.querySelector('.triangle-bottom')

const lightGallery = window.lightGallery

function toggleOverlay () {
  body.classList.toggle('menu-active')
  document.querySelector('html').classList.toggle('fixed')
}

// Mobile menu
if (menuButton) {
  menuButton.addEventListener('click', toggleOverlay)
}

// Front page menu
if (aboutButton) {
  aboutButton.addEventListener('click', toggleOverlay)
}

// Portfolio grid
if (lightGallery && document.querySelector('.subportfolio-grid')) {
  lightGallery(document.querySelector('.subportfolio-grid'), {
    subHtmlSelectorRelative: true,
    speed: 600,
    counter: false,
    showAfterLoad: true,
    download: false,
    cssEasing: 'ease-in-out',
    swipeThreshold: 25,
    mode: 'lg-slide',
    hideBarsDelay: 99999999,
    youtubePlayerParams: {
      autoplay: 0
    },
    preload: 0,
    autoplay: false
  })
}

// Portfolio home page images
if (lightGallery && document.querySelector('.main-images, .main-image')) {
  lightGallery(document.querySelector('.main-images, .main-image'), {
    subHtmlSelectorRelative: true,
    speed: 600,
    counter: false,
    showAfterLoad: true,
    download: false,
    cssEasing: 'ease-in-out',
    swipeThreshold: 25,
    mode: 'lg-slide',
    hideBarsDelay: 99999999,
    youtubePlayerParams: {
      autoplay: 0
    },
    preload: 0,
    autoplay: false
  })
}
