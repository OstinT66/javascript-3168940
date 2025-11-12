const asset = document.querySelectorAll('.asset');
const contador = document.getElementById('numero');

let i = 0;

function sumaCont() {
  i++;

  contador.textContent = i;
}

asset.forEach(  item  => {
  item.addEventListener('click', sumaCont);
  console.log('funciona');
});

/* carrusel */

const escenarios = document.querySelectorAll('.escena');
const btnSGT = document.querySelector('.btn-sgt');
const btnANT = document.querySelector('.btn-ant');
const miniaturas = document.querySelectorAll('.sgt');

let indice = 0;

console.log(escenarios);
console.log(btnSGT);
console.log(btnANT);

function mostrarEscenario(i) {

  for (let j = 0; j < escenarios.length; j++) {
    escenarios[j].classList.remove('activa');   
  }


  escenarios[i].classList.add('activa');
}  

mostrarEscenario(0);

btnANT.addEventListener('click', () => {
  indice = indice - 1;
  if (indice < 0) {
    indice = escenarios.length - 1;
  }
  mostrarEscenario(indice);
});

btnSGT.addEventListener('click', () => {
  indice = indice + 1;
  if (indice > escenarios.length - 1) {
    indice = 0;
  }
  mostrarEscenario(indice);
});