// Este año los elfos han comprado una máquina que envuelve regalos.Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

// A la máquina se le pasa un array con los regalos.Cada regalo es un string.Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

// El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados.Por ejemplo:

const gifts2 = ['cat', 'game', 'socks'];
const wrapped2 = wrapping2(gifts2);

// console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */

function wrapping2(gifts: string[]) {
  return gifts.map(gift => {
    const length = gift.length;
    return `*${'*'.repeat(length)}*\n*${gift}*\n*${'*'.repeat(length)}*`;
  });
}

console.log(wrapped2);