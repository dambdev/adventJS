// ¡Es hora de poner el árbol de navidad en casa! 🎄

// Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

// Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.

// Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

export default function createXmasTree(height) {
    if (height < 1 || height > 100) {
        console.log('Height must be between 1 and 100');
        return;
    }

    let tree = '';
    for (let i = 0; i < height; i++) {
        tree +=
            '_'.repeat(height - i - 1) +
            '*'.repeat(2 * i + 1) +
            '_'.repeat(height - i - 1) +
            '\n';
    }
    tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + '\n';
    tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
    return tree;
}

const arbol1 = createXmasTree(5);
console.log(arbol1);
// Si le pasamos el argumento 5, se pintaría esto:
// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____

const arbol2 = createXmasTree(3);
console.log(arbol2);
// Si le pasamos el argumento 3, se pintaría esto:
// __*__
// _***_
// *****
// __#__
// __#__
