const hamburger = document.getElementsByClassName('hamburger')[0]
const nav = document.getElementsByTagName('nav')[0]

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show-menu')
})