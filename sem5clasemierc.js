const arrayCuentas = [
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: "$3,253.40",
    edadTitular: 33,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: "$3,229.45",
    edadTitular: 27,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: "$1,360.19",
    edadTitular: 34,
    tipoCuenta: "corriente",
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: "$3,627.12",
    edadTitular: 30,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: "$1,616.52",
    edadTitular: 34,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: "$1,408.68",
    edadTitular: 25,
    tipoCuenta: "corriente",
  },
];

// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

const menoresDeTreinta = (arr) => {
  cuentasMenoresDeTreinta = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    element.edadTitular < 30 && cuentasMenoresDeTreinta.push(element);
  }
  return cuentasMenoresDeTreinta;
};

// console.log(menoresDeTreinta(arrayCuentas));

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.

const treintaOMas = (arr) => {
  cuentasTreintaOMas = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    element.edadTitular >= 30 && cuentasTreintaOMas.push(element);
  }
  return cuentasTreintaOMas;
};

// console.log(treintaOMas(arrayCuentas));

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
const getTreinta = (arr) => {
  cuentasTreinta = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    element.edadTitular === 30 && cuentasTreinta.push(element);
  }
  return cuentasTreinta;
};

console.log(getTreinta(arrayCuentas));

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// Obtener la cuenta con el titular de la misma más joven.
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// Obtener un nuevo array por cada tipo de cuenta.
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// Obtener un nuevo array con las cuentas habilitadas.
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// Obtener un nuevo array con las cuentas deshabilitadas.
// Obtener la cuenta con el menor saldo.
// Obtener la cuenta con el mayor saldo.