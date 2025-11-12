let imagen = document.querySelector('.imagen1');

let boton1 = document.querySelector('.btn1');
let boton2 = document.querySelector(".btn2");
let boton3 = document.querySelector(".btn3");

boton1.addEventListener("click", () => {
    imagen.classList.toggle("bn");
})

boton2.addEventListener("click", () => {
    imagen.classList.toggle("desenfocar");
})

boton3.addEventListener("click", () => {
    imagen.classList.toggle ("rot")
})