// ¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

// Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles. Para esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

// Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays... y que sólo tenemos que asegurarnos que los números suben y bajan de forma correcta. También nos avisa que sólo pasaremos arrays de, como mínimo, tres posiciones.

// Nos ha pasado algunos ejemplos de cómo debería ser nuestra función y algunos resultados:

const checkSledJump1 = checkSledJump([1, 2, 3, 2, 1]); // true: sube y baja de forma estricta
const checkSledJump2 = checkSledJump([0, 1, 0]); // -> true: sube y baja de forma estricta
const checkSledJump3 = checkSledJump([0, 3, 2, 1]); // -> true: sube y baja de forma estricta
const checkSledJump4 = checkSledJump([0, 1000, 1]); // -> true: sube y baja de forma estricta
const checkSledJump5 = checkSledJump([2, 4, 4, 6, 2]); // false: no sube de forma estricta
const checkSledJump6 = checkSledJump([1, 2, 3]); // false: sólo sube
const checkSledJump7 = checkSledJump([1, 2, 3, 2, 1, 2, 3]); // false: sube y baja y sube... ¡no vale!

// Lo importante: recorrer el array de izquierda a derecha para ver que la subida es siempre estricta, detectar el punto más alto y entonces ver que la bajada es estricta hacia abajo...

export default function checkSledJump(heights) {
    let maxIndex = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] > heights[maxIndex]) {
            maxIndex = i;
        }
    }

    if (maxIndex === 0 || maxIndex === heights.length - 1) return false;

    for (let i = 1; i <= maxIndex; i++) {
        if (heights[i] <= heights[i - 1]) return false;
    }

    for (let i = maxIndex + 1; i < heights.length; i++) {
        if (heights[i] >= heights[i - 1]) return false;
    }

    return true;
}

console.log(checkSledJump1);
console.log(checkSledJump2);
console.log(checkSledJump3);
console.log(checkSledJump4);
console.log(checkSledJump5);
console.log(checkSledJump6);
console.log(checkSledJump7);
