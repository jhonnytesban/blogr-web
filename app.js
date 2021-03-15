const icon = document.getElementById('menu')
const nav = document.getElementById('nav')
let change = true

const menuChange = () => {
  if(change) {
    icon.style.setProperty('--menu-hamburger', 'url(./images/icon-close.svg)')
    nav.classList.toggle('menu-deactive')
    nav.classList.toggle('menu-active')
    change = false
  }else{
    icon.style.setProperty('--menu-hamburger', 'url(./images/icon-hamburger.svg)')
    nav.classList.toggle('menu-deactive')
    nav.classList.toggle('menu-active')
    change = true
  }
}

menu.addEventListener('click', () => {
  menuChange()
})
