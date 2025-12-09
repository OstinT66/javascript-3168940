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
const contPrincipal = document.querySelector ('.contenedor-cap');

contPrincipal.innerHTML = `
<div class="seccion">
            <h2>Sinopsis</h2>
            <p class="texto-info">
                ${capitulo.sinopsis}
                </p>
            
        </div>

        <div class="seccion">
            <h2>Detalles</h2>
            <div class="detalles">
                <div class="detalle">
                    <div class="detalle-titulo">PÁGINAS</div>
                    <div class="detalle-valor">24</div>
                </div>
                <div class="detalle">
                    <div class="detalle-titulo">DURACIÓN</div>
                    <div class="detalle-valor">15 min</div>
                </div>
                <div class="detalle">
                    <div class="detalle-titulo">FECHA</div>
                    <div class="detalle-valor">2024</div>
                </div>
                <div class="detalle">
                    <div class="detalle-titulo">ESTADO</div>
                    <div class="detalle-valor">Disponible</div>
                </div>
            </div>
        </div>

        <div class="seccion">
            <h2>Momentos Clave</h2>
            <p class="texto-info">
                • El descubrimiento del artefacto misterioso<br><br>
                • El primer encuentro con el mentor<br><br>
                • La decisión de abandonar la vida normal<br><br>
                • La primera demostración de poderes<br><br>
                • El final impactante que deja preguntas sin respuesta
            </p>
        </div>

        <div class="seccion">
            <h2>Vista Previa</h2>
            <div class="previews">
                <video class="preview-pagina" autoplay muted>
                    <source src="./KILLSTATION - EXXIDAE (Legendado).mp4">

                </video>
            </div>
        </div>

        <div class="navegacion">
            <div class="nav-capitulo">
                <div class="nav-label">← ANTERIOR</div>
                <div class="nav-titulo">No hay capítulo anterior</div>
            </div>
            <div class="nav-capitulo">
                <div class="nav-label">SIGUIENTE →</div>
                <div class="nav-titulo">Capítulo 02: El Viaje</div>
            </div>
        </div>
`;


