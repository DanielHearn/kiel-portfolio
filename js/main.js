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
  lightGallery(document.querySelector('.subportfolio-grid'))
  /* const portfolioImages = document.querySelectorAll('.subportfolio-grid .subportfolio-item[data-is-youtube="false"], .subportfolio-grid .subportfolio-item[data-is-youtube=""]')
  const portfolioVideos = document.querySelectorAll('.subportfolio-grid .subportfolio-item[data-is-youtube="true"]')

  for (let img = 0; img < portfolioImages.length; img++) {
    const portfolioImage = portfolioImages[img]
    portfolioImage.addEventListener('click', function () {
      BigPicture({
        el: portfolioImage,
        gallery: portfolioImages
      })
    })
  }

  for (let vid = 0; vid < portfolioVideos.length; vid++) {
    const portfolioVideo = portfolioVideos[vid]
    portfolioVideo.addEventListener('click', function () {
      BigPicture({
        el: portfolioVideo,
        ytSrc: portfolioVideo.dataset.youtube
      })
    })
  } */
}
