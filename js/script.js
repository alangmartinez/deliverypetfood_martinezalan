
// Evento para desplazar menu side al hacer "click" en btnMenu.

let btnMenu = document.getElementById("btnMenu");
let menuSide = document.getElementById("menuSide");
let body = document.getElementById("body");
let userIcon = document.getElementById("userIcon");
let main = document.getElementById("main");


btnMenu.addEventListener("click", function(){

    if(window.innerWidth >= 1280)
        body.classList.toggle("noScroll");
        menuSide.classList.toggle("mostrar");
        userIcon.classList.toggle("oculto");
        main.classList.toggle("moveRight");
    });
