// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del array de películas animadas es un videojuego. Ahora tenés que editar el código y modificarlo de manera que puedas eliminar ese último elemento antes de migrar // el contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.

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

const juntarPelisFor = (peli1, peli2) => {
  const pack1 = aMayusculas(peli1);
  for (let i = 0; i < peli2.length; i++) {
    pack1.push(peli2[i].toUpperCase());
  }
  const newPack = pack1.pop();
  console.log("elemento eliminado", newPack);
  return pack1;
};

console.log(juntarPelisFor(peliculas1, peliculas2));
