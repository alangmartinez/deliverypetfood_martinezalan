
// Evento para desplazar menu side al hacer "click" en btnMenu.

let btnMenu = document.getElementById("btnMenu");
let menuSide = document.getElementById("menuSide");
let body = document.getElementById("body");
let userIcon = document.getElementById("userIcon");


btnMenu.addEventListener("click", function(){

        body.classList.toggle("noScroll");
        menuSide.classList.toggle("mostrar");
        userIcon.classList.toggle("oculto");
});
