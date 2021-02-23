
addEventListener ('DOMContentLoaded', () => {
    const boton_menu = document.querySelector('.boton_menu')
    if (boton_menu){
        boton_menu.addEventListener('click', () =>{
            const menu = document.querySelector('.menu')
            menu.classList.toggle('show')
        })
    }
})