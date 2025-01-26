// En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

// Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

// Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales.Por ejemplo la á y la ä cuenta como una a.

// Vamos a ver unos ejemplos de frases:

const result = pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
const result2 = pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

const result3 = pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
const result4 = pangram('De la a a la z, nos faltan letras') // false

export default function pangram(letter) {
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
  const letterLower = letter.toLowerCase();

  return alphabet.split('').every(letter => letterLower.includes(letter));
}

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);