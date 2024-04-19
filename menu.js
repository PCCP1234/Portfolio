let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('background-menu-overlay')

btnMenu.addEventListener('click', () =>{
    menu.classList.add('menu-open')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('menu-open')
})

overlay.addEventListener('click', () =>{
    menu.classList.remove('menu-open')
})