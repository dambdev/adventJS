// ¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

// Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

// 👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

// 👎 Lo malo: la lista está desordenada y podría faltar el último...

// Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

const missingReindeer1 = missingReindeer([0, 2, 3]); // -> 1
const missingReindeer2 = missingReindeer([5, 6, 1, 2, 3, 7, 0]); // -> 4
const missingReindeer3 = missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
const missingReindeer4 = missingReindeer([3, 0, 1]); // -> 2
const missingReindeer5 = missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
const missingReindeer6 = missingReindeer([0]); // -> 1 (¡es el último el que falta!)

export default function missingReindeer(ids) {
    const maxId = Math.max(...ids);
    for (let i = 0; i <= maxId; i++) {
        if (!ids.includes(i)) {
            return i;
        }
    }
    return maxId + 1;
}

console.log(missingReindeer1); // -> 1
console.log(missingReindeer2); // -> 4
console.log(missingReindeer3); // -> 2 (¡es el último el que falta!)
console.log(missingReindeer4); // -> 2
console.log(missingReindeer5); // -> 8
console.log(missingReindeer6); // -> 1 (¡es el último el que falta!)
