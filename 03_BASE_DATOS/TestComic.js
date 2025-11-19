/* const infocomic = document.querySelector(".info-comic");

console.log(infocomic);

infocomic.innerHTML = `
    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>${comic.genero}</p>
`
 */
/* const hero = document.querySelector(".hero");

const cardPersonajes = document.querySelector(".card-personajes");


console.log(comic.personajes);

comic.personajes.forEach( char => {
  const div = document.createElement("div");
  div.classList.add("personajes");

  div.innerHTML = `
      <img src="${char.imagen}" alt="">
      <p>${char.nombre}</p>
      <p>${char.descripcion}</p>
  `
  cardPersonajes.appendChild(div);
});
      */   


const personajesContainer = document.querySelector(".card-container");

console.log(comic.personajes);

comic.personajes.forEach( char => {
  const div = document.createElement("article");
  div.classList.add("card", "pj");

  div.innerHTML = `
            <img src="${comic.ima}" alt="" width="100" height="100">
            <p class="name">${comic.nombre}</p>
          </article>
  `
  personajesContainer.appendChild(div);
            

});