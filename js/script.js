
// Evento para desplazar menu side al hacer "click" en btnMenu.

let btnMenu = document.getElementById("btnMenu");
let menuSide = document.getElementById("menuSide");
let body = document.getElementById("body");
let userIcon = document.getElementById("userIcon");


btnMenu.addEventListener("click", function(){

        menuSide.classList.toggle("mostrar");
        body.classList.toggle("noScroll");
        userIcon.classList.toggle("oculto");
});
