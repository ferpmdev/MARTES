// Loop de pares
// Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.

const looDePares = function (n) {
  for (let index = 0; index <= 100; index++) {
    console.log(index);
    element = index + n;
    if (element % 2 === 0) {
      console.log(`el número ${element} es par`);
    }
  }
};

// looDePares(3);
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Loop de impares con palabra
// Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

const looDeImpares = function (n, hola) {
  for (let index = 0; index <= 100; index++) {
    console.log(index);
    element = index + n;
    if (element % 2 !== 0) {
      console.log(hola);
    }
  }
};

// looDeImpares(1, "palabra");

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)

function sumatoria(n) {
  total = 0;
  initial = [0];
  for (let index = 0; index < n; index++) {
    const element = initial[index] + 1;
    initial.push(element);
    total += element;
  }
  return total;
}

// console.log(sumatoria(4));

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Nuevo arreglo
// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

function nuevoArreglo(n) {
  newArray = [];
  for (let index = 1; index <= n; index++) {
    newArray.push(index);
  }
  return newArray;
}

console.log(nuevoArreglo(5));
