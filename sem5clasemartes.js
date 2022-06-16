// 3) Desarrollar una función llamada realizarConsulta que reciba un un número que represente él identificador del profesional a buscar, reutilizar la función buscarPorId, en caso de encontrar él objeto, modificar la propiedad cantidadConsultas incrementando su valor actual + 1, caso contrario retornar null

const arrayProfesionales = [
  {
    id: 0,
    estaHabilitado: false,
    nombre: "Huber Wilkins",
    email: "huberwilkins#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 3,
  },
  {
    id: 1,
    estaHabilitado: true,
    nombre: "Goldie Haley",
    email: "goldiehaley#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 3,
  },
  {
    id: 2,
    estaHabilitado: false,
    nombre: "Pena Landry",
    email: "penalandry@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 9,
  },
  {
    id: 3,
    estaHabilitado: false,
    nombre: "Leanne Burch",
    email: "leanneburch#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 13,
  },
  {
    id: 4,
    estaHabilitado: false,
    nombre: "Haynes Fuentes",
    email: "haynesfuentes@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 75,
  },
  {
    id: 5,
    estaHabilitado: true,
    nombre: "Tamika Fuentes",
    email: "tamikanewman@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 32,
  },
  {
    id: 6,
    estaHabilitado: true,
    nombre: "Russo Baldwin",
    email: "russobaldwin@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 67,
  },
  {
    id: 7,
    estaHabilitado: true,
    nombre: "Dodson Shaffer",
    email: "dodsonshaffer#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 2,
  },
  {
    id: 8,
    estaHabilitado: true,
    nombre: "Guerra Bright",
    email: "guerrabright#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 6,
  },
  {
    id: 9,
    estaHabilitado: true,
    nombre: "Dina Navarro",
    email: "dinanavarro@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 8,
  },
  {
    id: 10,
    estaHabilitado: false,
    nombre: "Stafford Watts",
    email: "staffordwatts@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
  },
  {
    id: 11,
    estaHabilitado: false,
    nombre: "Joni Avery",
    email: "joniavery@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 6,
  },
  {
    id: 12,
    estaHabilitado: true,
    nombre: "Mayra Tran",
    email: "mayratran@speedbolt.com",
    especialidad: "Oftamologia",
    cantidadConsultas: 2,
  },
  {
    id: 13,
    estaHabilitado: false,
    nombre: "Ward Dale",
    email: "warddale@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 23,
  },
];

const buscarPorId = (arrayProf, identificador) => {
  for (let i = 0; i < arrayProf.length; i++) {
    if (arrayProf[i].id === identificador) {
      return arrayProf[i];
    }
  }
  return null;
};

const realizarConsulta2 = (array2, id) => {
  if (buscarPorId) {
    let consultas = array2[id].cantidadConsultas;
    consultas += 1;
    console.log(consultas);
  }
  return null;
};
// realizarConsulta2(arrayProfesionales, 2);

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// ESTA VERSION ES INDEPENDIENTE YA QUE NO REUTILIZA LA FUNCION
const realizarConsulta = (array2, id) => {
  for (let i = 0; i < array2.length; i++) {
    if (array2[i].id === id) {
      let element = array2[i].cantidadConsultas;
      //   console.log(element);
    }
  }
  return null;
};

// 4) Desarrollar una función llamada corregirEmails que reciba un array de profesionales, verificar si existe él carácter # en la propiedad email de cada objeto literal introducido por error y reemplazar por @

function corregirEmails(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.email.includes("#")) {
      element.email.replace("#", "@");
    }
  }
}

// console.log(corregirEmails(arrayProfesionales));

////////////////////////////////////////////////////////////
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

looDeImpares(1, "palabra");
