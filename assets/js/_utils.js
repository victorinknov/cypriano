let allImages = document.querySelectorAll('img')
allImages.forEach(e => e.setAttribute('draggable', 'false'))

let header = document.querySelector('header')
let logo = document.getElementById('logo')
document.body.onscroll = () => {
    window.scrollY == '0' ? header.classList.remove('header-bg') : header.classList.add('header-bg')
}