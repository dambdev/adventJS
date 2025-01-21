// Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

// Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

// Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

// Símbolo       Valor
//   .             1
//   ,             5
//   :             10
//   ;             50
//   !             100

// Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

// Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

const decodeNumbers1 = decodeNumbers('...'); // 3
const decodeNumbers2 = decodeNumbers('.,'); // 4 (5 - 1)
const decodeNumbers3 = decodeNumbers(',.'); // 6 (5 + 1)
const decodeNumbers4 = decodeNumbers(',...'); // 8 (5 + 3)
const decodeNumbers5 = decodeNumbers('.........!'); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
const decodeNumbers6 = decodeNumbers('.;'); // 49 (50 - 1)
const decodeNumbers7 = decodeNumbers('..,'); // 5 (-1 + 1 + 5)
const decodeNumbers8 = decodeNumbers('..,!'); // 95 (1 - 1 - 5 + 100)
const decodeNumbers9 = decodeNumbers('.;!'); // 49 (-1 -50 + 100)
const decodeNumbers10 = decodeNumbers('!!!'); // 300
const decodeNumbers11 = decodeNumbers(';!'); // 50
const decodeNumbers12 = decodeNumbers(';.W'); // NaN

export default function decodeNumbers(symbols) {
    const values = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 };
    let result = 0;

    for (let i = 0; i < symbols.length; i++) {
        const currentValue = values[symbols[i]];
        const nextValue = values[symbols[i + 1]];

        if (currentValue === undefined) return NaN;

        if (nextValue > currentValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }
    return result;
}

console.log(decodeNumbers1);
console.log(decodeNumbers2);
console.log(decodeNumbers3);
console.log(decodeNumbers4);
console.log(decodeNumbers5);
console.log(decodeNumbers6);
console.log(decodeNumbers7);
console.log(decodeNumbers8);
console.log(decodeNumbers9);
console.log(decodeNumbers10);
console.log(decodeNumbers11);
console.log(decodeNumbers12);
