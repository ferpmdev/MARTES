// Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
// crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
// para poder agregar los elementos contenidos en el segundo array dentro del
// primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas.

let peliculas1 = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];

let peliculas2 = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];

const aMayusculas = (peli) => {
  let newArray = [];
  for (let i = 0; i < peli.length; i++) {
    newArray.push(peli[i].toUpperCase());
  }
  return newArray;
};

// solucion con spread operator
const juntarPelis = (peli1, peli2) => {
  const pack1 = aMayusculas(peli1);
  const pack2 = aMayusculas(peli2);
  const total = [...pack1, ...pack2];
  return total;
};

// solucion con boucle for
const juntarPelisFor = (peli1, peli2) => {
  const pack1 = aMayusculas(peli1);
  for (let i = 0; i < peli2.length; i++) {
    pack1.push(peli2[i].toUpperCase());
  }
  return pack1;
};

console.log("con spread operator", juntarPelis(peliculas1, peliculas2));
console.log("con boucle for", juntarPelisFor(peliculas1, peliculas2));
