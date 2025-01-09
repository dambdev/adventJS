// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

const cartas = [
    'bici coche (balón) bici coche peluche',
    '(muñeca) consola bici',
    'bici coche (balón bici coche',
    'peluche (bici [coche) bici coche balón',
    '(peluche {) bici',
    '() bici',
];

export default function isValid(letter) {
    if (
        letter.includes('[') ||
        letter.includes(']') ||
        letter.includes('{') ||
        letter.includes('}')
    ) {
        return false;
    }

    if (letter.includes('()')) {
        return false;
    }

    let count = 0;
    let insideParentheses = false;
    let content = '';

    for (const char of letter) {
        if (char === '(') {
            count++;
            insideParentheses = true;
        } else if (char === ')') {
            count--;
            insideParentheses = false;

            if (content.trim() === '') return false;
            content = '';
        } else if (insideParentheses) {
            content += char;
        }

        if (count < 0) return false;
    }

    return count === 0;
}

cartas.forEach((carta) => console.log(isValid(carta)));

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌
