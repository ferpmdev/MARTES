/* Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Te piden crear una función que compare las calificaciones e indique si son iguales
o diferentes. Te confirman que están en el orden adecuado y que solo traen
valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden en
orden al del array resultante de combinar películas con películas animadas. Es
decir, el primer elemento del array de películas general corresponde al primer
elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente. */

let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compare(calif1, calif2) {
  let allCalif = [...calif1, ...calif2];
  for (let index = 0, limit = calif1.length; index < limit; index++) {
    if (allCalif[index] === allCalif[index + limit]) {
      console.log(`la calificación de la película ${index + 1} SI es igual`);
    } else {
      console.log(`la calificación de la película ${index + 1} NO es igual`);
    }
  }
}

compare(euroScores, asiaScores);

//---------------------------------------------
// ESTO TAMPOCO ANDUVO

// function compare(calif1, calif2) {
//   let allCalif = [...calif1, ...calif2];
//   allCalif.forEach((element, index) => {
//     if (allCalif[index] === allCalif[index + 9]) {
//       console.log(`la calificación de la película ${index} es igual`);
//     } else {
//       console.log(`la calificación de la película ${index} NO es igual`);
//     }
//   });
// }

//---------------------------------------------
// ESTO TAMPOCO ANDUVO

// const compare = (calif1, calif2) => {
//     for (let i; i <= calif1.length; i++) {
//       let peli1 = peli1[i];
//       function compare2(peli1) {
//         for (let a; a <= calif2.length; a++) {
//           const peli2 = peli2[i];
//           const pares = [...peli1, ...peli2];
//           if (pares[0] === pares[1]) {
//             let mens1 = "las calificaciones son iguales";
//           } else {
//             let mens2 = "las calificaciones son distintas";
//           }
//         }
//       }
//       return compare2(peli1);
//       console.log(peli1);
//     }
//   };

//---------------------------------------------
// ESTO TAMPOCO ANDUVO

// function compare(calif1) {
//   for (let i; i < calif1.length; i++) {
//     calif1[i] = "Hola";
//     console.log(elemento);
//   }
//   return elemento;
// }

//---------------------------------------------
// ESTO TAMPOCO ANDUVO

// allCalif.forEach((element, index) => {
//   console.log("element:", element, "index:", index);
// element[index] === element[index + 9]
//   ? console.log("la calificación es igual")
//   : console.log("es diferente");
//});
//}
