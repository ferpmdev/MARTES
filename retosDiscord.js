// - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:
// 1 - Funcion que reciba un array de edades y retorne el promedio
// 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80
// 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5
// 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
// 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario
// 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
//    {
//       edadesMenor : "// edades menor a 18",
//       edadesMayor : "// edades menor a 18"
//    }

// nota : Se recomienda utilizar estructuras y conceptos vistos en la materia, pueden resolver con metodos pero tambien de forma imperativa (for if)

let edades1 = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9];
let edades2 = [5, 19, 38, 39, 35, 8, 15, -2, 23, 49];
let edades3 = [1, 1, 28, 24, 25, 13, 45, 3, 21, 0];

//////////////////////////////////////////////////////
// ej1
const promedio = function (myArray) {
  let total = 0;
  for (let index = 0; index < myArray.length; index++) {
    let element = myArray[index];
    total += element;
  }
  console.log(total / myArray.length);
};

// promedio(edades3);

//////////////////////////////////////////////////////
//ej2
const elMayor = function (myArray) {
  let ant = 0;
  let newArray = [];
  myArray.forEach((element) => {
    if (ant < element) {
      ant = element;
      newArray.push(element);
    }
  });
  const mayor = newArray.pop();
  console.log(mayor);
};

// elMayor(edades3);

//////////////////////////////////////////////////////
//ej3
const esMenor = function (myArray) {
  let total = 0;
  myArray.forEach((element, index) => {
    element = myArray[index];
    total += element;
  });
  let newArray = [];
  myArray.forEach((element) => {
    if (total > element) {
      total = element;
      newArray.push(element);
    }
  });
  const menor = newArray.pop();
  console.log(menor);
};

// esMenor(edades2);

//////////////////////////////////////////////////////
// funcion para sumar

const suma = function (myArray) {
  let total = 0;
  myArray.forEach((element, index) => {
    element = myArray[index];
    total += element;
  });
  console.log(total);
};

// suma(edades1);

//////////////////////////////////////////////////////
// 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
//ej4

const someoneRepeat = function (myArray) {
  let newArray = [];
  for (let index = 0; index < myArray.length; index++) {
    let reference = myArray[index];
    if (newArray.includes(reference)) return true;
    newArray.push(reference);
  }
  return false;
};

// console.log(someoneRepeat([1, 2, 3]));

//////////////////////////////////////////////////////
// 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario
const wichAge = function (myArray, myAge) {
  for (let index = 0; index < myArray.length; index++) {
    let reference = myArray[index];
    if (myAge === reference) return index;
  }
  return null;
};

// console.log(wichAge([5, 1, 2, 5, 30, 5], 5));

//////////////////////////////////////////////////////
// 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
//    {
//       edadesMenor : "// edades menor a 18",
//       edadesMayor : "// edades menor a 18"
//    }

// nota : Se recomienda utilizar estructuras y conceptos vistos en la materia, pueden resolver con metodos pero tambien de forma imperativa (for if)

const wichMayor2 = function (myArray) {
  ages = {
    older: [],
    minorAge: [],
  };
  for (let index = 0; index < myArray.length; index++) {
    let reference = myArray[index];
    let mayor = ages.older;
    let minor = ages.minorAge;
    if (reference < 18) {
    } else {
    }
  }
  return ages;
};

// console.log(wichMayor([20, 12, 14, 30]));

/////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////
// https://www.youtube.com/watch?v=6Ng3GFLoVq8
// ORDENAMIENTO BURBUJA (no me funciono xq en el video se trabaja con POO)

const order = function (myArray) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > myArray[i + 1]) {
      let reference = myArray[i + 1];
      myArray[i + 1] = myArray[i];
      myArray[i] = reference;
    }
  }
  return myArray;
};

// console.log(order([99, 12, 24]));

const spreadArrays = (array1, array2) => {
  myArraysCombined = [...array1, ...array2];
  console.log(myArraysCombined);
};

// spreadArrays(edades1, edades2);
