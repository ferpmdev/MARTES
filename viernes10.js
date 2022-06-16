// MESA DE TRABAJO VIE_100622
// El público, máximo 100 personas, votó quién considera que estuvo mejor al terminar
// cada etapa. Por ejemplo, sube Alicia, se presenta y baja; sube Bob, se presenta y baja.
// Terminadas ambas presentaciones, el público vota indicando quién cree que ganó esa
// tanda. Luego, continúa la siguiente tanda, igual que la primera. Y finalmente, una tercera.
// ¿Cómo representarías en una tabla tipo planilla de cálculos este problema?

const alicia = [91, 82, 76];
const bob = [92, 81, 75];

function encontrarGanador(a, b) {
  let concurso = {
    puntosA: 0,
    puntosB: 0,
  };
  for (let index = 0; index < a.length; index++) {
    const elementA = a[index];
    const elementB = b[index];
    if (elementA < elementB) {
      concurso.puntosB += 1;
    } else if (elementA > elementB) {
      concurso.puntosA += 1;
    } else {
      null;
    }
  }
  console.table(concurso);
  if (concurso.puntosA > concurso.puntosB) {
    return console.log("gano a");
  } else if (concurso.puntosA < concurso.puntosB) {
    return console.log("gano b");
  } else {
    return console.log("empate");
  }
}

encontrarGanador(alicia, bob);

const Concurso = {
  etapas: [
    { e1alicia: 10, e1bob: 90 },
    { e2alicia: 10, e2bob: 90 },
    { e3alicia: 75, e3bob: 25 },
  ],
  ganador: "alicia",
  encontrarGanador: function (array1, array2) {
    let concurso = {
      puntosA: 0,
      puntosB: 0,
    };
    for (let index = 0; index < a.length; index++) {
      const elementA = a[index];
      const elementB = b[index];
      if (elementA < elementB) {
        concurso.puntosB += 1;
      } else if (elementA > elementB) {
        concurso.puntosA += 1;
      } else {
        null;
      }
    }
    console.table(concurso);
    if (concurso.puntosA > concurso.puntosB) {
      return console.log("gano a");
    } else if (concurso.puntosA < concurso.puntosB) {
      return console.log("gano b");
    } else {
      return console.log("empate");
    }
  },
};
