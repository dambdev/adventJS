// Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

// Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

// Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo.Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

// El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz(un array de arrays) donde cada posición puede ser:

// Un espacio vacío es que no hay nada
// Una m es el ratón
// Un * es la comida

// Vamos a ver unos ejemplos:

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

const result = canMouseEat('up', room)   // false
const result2 = canMouseEat('down', room)   // true
const result3 = canMouseEat('right', room)   // false
const result4 = canMouseEat('left', room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

const result5 = canMouseEat('up', room2)   // false
const result6 = canMouseEat('down', room2)   // false
const result7 = canMouseEat('right', room2)   // true
const result8 = canMouseEat('left', room2)   // false

export default function canMouseEat(direction, room) {
  let mouseRow, mouseCol;

  for (let i = 0; i < room.length; i++) {
    const col = room[i].indexOf('m');
    if (col !== -1) {
      mouseRow = i;
      mouseCol = col;
      break;
    }
  }

  let newRow = mouseRow;
  let newCol = mouseCol;

  if (direction === 'up') {
    newRow -= 1;
  } else if (direction === 'down') {
    newRow += 1;
  } else if (direction === 'left') {
    newCol -= 1;
  } else if (direction === 'right') {
    newCol += 1;
  }

  if (newRow < 0 || newRow >= room.length || newCol < 0 || newCol >= room[0].length) {
    return false;
  }
  return room[newRow][newCol] === '*';

}

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);