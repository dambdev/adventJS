// Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

// Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

// La configuración de las máquinas es un string.Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

// Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas(pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

// Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas.Lo mejor es que veamos un ejemplo:

const from = 'BAL'
const to = 'LIB'
const result = canReconfigure(from, to) // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

const from2 = 'CON'
const to2 = 'JUU'
const result2 = canReconfigure(from2, to2) // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

const from3 = 'XBOX'
const to3 = 'XXBO'
const result3 = canReconfigure(from3, to3) // false
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

const from4 = 'XBOX'
const to4 = 'XOBX'
const result4 = canReconfigure(from4, to4) // true

const from5 = 'MMM'
const to5 = 'MID'
const result5 = canReconfigure(from5, to5) // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

const from6 = 'AA'
const to6 = 'MID'
const result6 = canReconfigure(from6, to6) // false -> no tiene la misma longitud


export default function canReconfigure(from, to) {
  if (from.length !== to.length) return false;
  const fromMap = {};
  const toMap = {};

  for (let i = 0; i < from.length; i++) {
    const fromChar = from[i];
    const toChar = to[i];

    if (fromMap[fromChar] && fromMap[fromChar] !== toChar) return false;
    if (toMap[toChar] && toMap[toChar] !== fromChar) return false;

    fromMap[fromChar] = toChar;
    toMap[toChar] = fromChar;
  }

  return true;
}

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
