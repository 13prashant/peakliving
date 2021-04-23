const hamburger = document.getElementsByClassName('hamburger')[0]
const nav = document.getElementsByTagName('nav')[0]

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('close')
    nav.classList.toggle('show-menu')
})