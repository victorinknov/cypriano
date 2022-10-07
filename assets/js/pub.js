let closePublicity = document.getElementById('close')
let pub = document.querySelector('.pub')
document.body.style.overflowY = 'hidden'

closePublicity.addEventListener('click', () => {
    pub.style.display = 'none'
    document.body.style.overflowY = 'visible'
})