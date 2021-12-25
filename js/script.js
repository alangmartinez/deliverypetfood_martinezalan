// Loader spin


window.onload = function(){
    const loader = document.getElementById("loaderContainer");
    loader.style.opacity = 0;
    loader.style.visibility = "hidden";
    loader.style.position = "absolute";
}



// Evento para desplazar menu side al hacer "click" en btnMenu.

let btnMenu = document.getElementById("btnMenu");
let menuSide = document.getElementById("menuSide");
let body = document.getElementById("body");
let userIcon = document.getElementById("userIcon");
let main = document.getElementById("main");


btnMenu.addEventListener("click", function(){
    body.classList.toggle("noScroll");
    menuSide.classList.toggle("mostrar");
    userIcon.classList.toggle("oculto");
    main.classList.toggle("moveRight");
});



// function saludar(nombre){
//     let frase = `¡Hola ${nombre}! ¿Como estas?`;
//     document.write(frase);
// }

// // saludar("Alan");

// // document.write("<br>")

// // function suma(num1, num2){
// //     let resultado = num1 + num2;
// //     return resultado;
// // }

// // let res = suma(1, 4);

// // document.write(res);

// let free = false;

// function time(){
//     if(edad >= 18){
//         document.write("Podes pasar bro.");
    
//     if (time >= 2 && time <= 7 && free == false){
//         document.write("Pasas gratis sos el primero en llegar. Manito picante");
//         }
//     }
//     else{
//         document.write("No podes pasar nenito. Sos menor");
//     }
// }

// time()