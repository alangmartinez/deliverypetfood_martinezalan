// Loader spin

onload = ()=>{
    const loader = document.getElementById("loaderContainer");
    loader.style.opacity = 0;
    loader.style.visibility = "hidden";
    loader.style.position = "absolute";
    loader.style.zIndex = "-1";
}

// Evento para desplazar menu side al hacer "click" en btnMenu.

let btnMenu = document.getElementById("btnMenu");
let menuSide = document.getElementById("menuSide");
let body = document.getElementById("body");
let userIcon = document.getElementById("userIcon");
let main = document.getElementById("main");


btnMenu.addEventListener("click", ()=>{
    body.classList.toggle("noScroll");
    menuSide.classList.toggle("mostrar");
    userIcon.classList.toggle("oculto");
});

let btnUser = document.getElementById("btnUser");
let loginUser = document.getElementById("login");
let login = false;

// if(login == false){
//     btnUser.addEventListener("click", function(){
//         loginUser.classList.toggle("mostrarLogin");
//     });
// }

btnUser.addEventListener("click", ()=> {
    if(login == false){
        loginUser.style.transform = "translateX(0)";
        loginUser.style.opacity = "1";
        login = true;

    }
    else{
        loginUser.style.transform = "translateX(100%)";
        loginUser.style.opacity = "0";
        login = false;
    }
})

const form = document.getElementById("form");

form.addEventListener("click", (e)=>{
    e.preventDefault();
})
