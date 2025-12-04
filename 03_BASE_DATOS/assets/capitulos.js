import { comic } from "/bd.js";

const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get('id'));

const capitulo = comic.capitulos.find(p => p.id === id);

const capDetalle = document.querySelector ('.banner-capitulo');

console.log(capDetalle);

capDetalle.innerHTML = `
    <h4 class="numero-capitulo">CAPÍTULO ${capitulo.id}</h4>
        <h1 class="titulo-capitulo">${capitulo.nombre}</h1>
        <p class="resumen-capitulo">${capitulo.descripcion}</p>
        <button class="boton-leer">LEER AHORA</button>
`