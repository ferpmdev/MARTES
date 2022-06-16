// 7 - DADOS 2 ARRAYS ORDENADOS!!!! SE DEVUELVE UN ARRAY ORDENADO

const orderTwoArrays = (array1, array2) => {
  let myArraysCombined = [];
  while (array1.length && array2.length) {
    let itemOne;
    if (array1[0] < array2[0]) {
      itemOne = array1.shift();
    } else {
      itemOne = array2.shift();
    }
    myArraysCombined.push(itemOne);
  }
  myArraysCombined = myArraysCombined.concat(array1).concat(array2);
  return myArraysCombined;
};

// console.log(orderTwoArrays([1, 5, 12, 20], [2, 3, 7, 21]));

/////////////////////////////////////////////////////
// 8 ODENAMIENTO DE ARRAY CON FUNCION RECURSIVA ( se usa tambien la función del punto 7)
// DADO UN ARRAY DESORDENADO TE DEVUELVE UN ARRAY ORDENADO

function recursiveOrder(myArray) {
  if (myArray.length === 1) {
    return myArray;
  }
  let middle = Math.trunc(myArray.length / 2);
  let middleLeftArray = myArray.splice(0, middle);
  let middleRigthArray = myArray;
  let recursiveLeft = recursiveOrder(middleLeftArray);
  let recursiveRight = recursiveOrder(middleRigthArray);
  return orderTwoArrays(recursiveLeft, recursiveRight);
}

console.log(recursiveOrder([1, 5, 21, 22, 107, 87]));

// CODIGO ALEX
const ordenarArreglo = function (array_numeros) {
  let aux = 0;
  for (let i = 0; i < array_numeros.length; i++) {
    for (let j = 0; j < array_numeros.length; j++) {
      if (array_numeros[i] < array_numeros[j]) {
        aux = array_numeros[i];
        array_numeros[i] = array_numeros[j];
        array_numeros[j] = aux;
      }
    }
  }
  return array_numeros;
};

let arrayNumeros = [5, 3, 4, 10, 7, 9, 12, 6, 21, 8, 9, 1, 20, 11];

console.log(ordenarArreglo(arrayNumeros));
