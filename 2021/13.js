// ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

// Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

// Sólo tienes que tener en cuenta unas cosillas ✌️:

// Si el array está vacío, devuelve un array vacío
// Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
// Por suerte, cada posición del array siempre tiene la misma longitud...

const wrapGifts1 = wrapGifts(['📷', '⚽️']);
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

const wrapGifts2 = wrapGifts(['🏈🎸', '🎮🧸']);
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

const wrapGifts3 = wrapGifts(['📷']);
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/

export default function wrapGifts(gifts) {
    if (gifts.length === 0) return [];

    const wrappedGifts = [];
    const maxLength = gifts[0].length;

    wrappedGifts.push('*'.repeat(maxLength + 2));

    for (const gift of gifts) {
        wrappedGifts.push(`*${gift}*`);
    }

    wrappedGifts.push('*'.repeat(maxLength + 2));

    return wrappedGifts;
}

console.log(wrapGifts1);
console.log(wrapGifts2);
console.log(wrapGifts3);
