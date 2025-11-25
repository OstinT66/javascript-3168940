const personajesContainer = document.querySelector(".personajes")
console.log(comic.personajes)

personajesContainer.innerHTML = "";

comic.personajes.forEach( char => {
    const div = document.createElement ('div')
    div.classList.add('personaje', 'per-nombre' );

    div.innerHTML = `
                <a href=personajes.html><img src="${char.imagen}" alt="${char.nombre}" class="per-imagen"></a>
                <div class="per-nombre">${char.nombre}</div>
                <div class="per-rol">${char.descripcion}</div>

    `
    personajesContainer.appendChild(div);


});


capitulosContainer = document.querySelector (".capitulos")
console.log(comic.capitulos)

capitulosContainer.innerHTML = "";

comic.capitulos.forEach( char => {
    const div = document.createElement ('div')
    div.classList.add('capitulo', 'cap-info', );
    div.innerHTML = `
                    <a href=assets/capitulos.html> <img src="${char.portada}" alt="${char.nombre}" class="per-imagen"></a>
                    <div class="cap-numero">CAPITULO ${char.id}</div>
                    <div class="cap-titulo">${char.nombre}</div>
                    <p>${char.descripcion}</p>
              
    `
    capitulosContainer.appendChild(div);
});


const miniContainer = document.querySelector(".mini-capitulos")

miniContainer.innerHTML = "";

comic.capitulos.forEach( char => {
    const div = document.createElement ('div')
    div.classList.add('mini-cap' );
    div.innerHTML = `
                    <a href=assets/capitulos.html> <img src="${char.portada}" alt="${char.nombre}" class="mini-cap-img"></a>
                    <div style="margin-top: 5px;">${char.nombre}</div>
    `
    miniContainer.appendChild(div);
});