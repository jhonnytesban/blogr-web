const icon = document.getElementById('menu')
const nav = document.getElementById('nav')
const list = document.querySelectorAll('.list__item') 
const submenu = document.querySelectorAll('.submenu__list')
let change = true
let num;

const menuChange = () => {
  if(change) {
    icon.style.setProperty('--menu-hamburger', 'url(./images/icon-close.svg)')
    nav.classList.toggle('menu-deactive')
    nav.classList.toggle('menu-active')
    change = false
  }else{
    submenu[0].classList.remove('submenu__list-active')
    submenu[1].classList.remove('submenu__list-active')
    submenu[2].classList.remove('submenu__list-active')
    icon.style.setProperty('--menu-hamburger', 'url(./images/icon-hamburger.svg)')
    nav.classList.toggle('menu-deactive')
    nav.classList.toggle('menu-active')
    change = true
  }
}

const clic = (number) => {
  let p = true
  list[number].addEventListener('click', () => {
    submenu[number].classList.toggle('submenu__list-active')
    optionChange(number)
    P= false
    console.log(p)
  })
}

const optionChange = (number) => {
  switch (submenu[number]) {
    case submenu[0]:
      submenu[1].classList.remove('submenu__list-active')
      submenu[2].classList.remove('submenu__list-active')
      break;
    case submenu[1]:
      submenu[0].classList.remove('submenu__list-active')
      submenu[2].classList.remove('submenu__list-active')
      break;
    case submenu[2]:
      submenu[1].classList.remove('submenu__list-active')
      submenu[0].classList.remove('submenu__list-active')
      break;
  
    default:
      submenu[0].classList.remove('submenu__list-active')
      submenu[1].classList.remove('submenu__list-active')
      submenu[2].classList.remove('submenu__list-active')
      break;
  }
}

menu.addEventListener('click', () => {
  menuChange()
  clic(0)
  clic(1)
  clic(2)
})
