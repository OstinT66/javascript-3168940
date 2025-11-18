/* const infocomic = document.querySelector(".info-comic");

console.log(infocomic);

infocomic.innerHTML = `
    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>${comic.genero}</p>
`
 */
const hero = document.querySelector(".hero");

const personajes = document.querySelector(".card-personajes");

console.log(hero);

/* hero.innerHTML = `
          <h1>${comic.nombreComic}</h1>
          <p>${comic.sinopsis}</p>
          <div class="actions">
            <button class="btn btn-primary js-start">Comenzar</button>
            <a class="btn btn-ghost" href="#episodes">Watch</a>
          </div>
          <p>${comic.year}</strong></p>
          `
 */

console.log(comic.personaje);

comic.personajes.forEach( char => {
  console.log(char.nombre);
  document.body.innerHTML += `<img src="${char.imagen}" alt="${char.nombre}"/> width="200" height="300"`;

  });

  const div = document.createElement("div");
  div.classList.add("card-personajes");

