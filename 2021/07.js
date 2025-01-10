// Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

// Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

// La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:

const almacen = {
    estanteria1: {
        cajon1: {
            producto1: 'coca-cola',
            producto2: 'fanta',
            producto3: 'sprite',
        },
    },
    estanteria2: {
        cajon1: 'vacio',
        cajon2: {
            producto1: 'pantalones',
            producto2: 'camiseta', // <- ¡Está aquí!
        },
    },
};

const otroAlmacen = {
    baul: {
        fondo: {
            objeto: 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando',
        },
    },
};

//   Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones.Lo importante es buscar que el producto está en los almacenes.

export default function contains(store, product) {
    for (const key in store) {
        if (store[key] === product) {
            return true;
        }
        if (typeof store[key] === 'object') {
            if (contains(store[key], product)) {
                return true;
            }
        }
    }
    return false;
}

const contains1 = contains(almacen, 'camiseta');
console.log(contains1); // true

const contains2 = contains(otroAlmacen, 'gameboy');
console.log(contains2); // false
