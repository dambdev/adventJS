// Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

// Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

// La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.

// Por ejemplo:

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
maxProfit(pricesBtc); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
maxProfit(pricesEth); // -> 60 (compra a 10, vende a 70)

// Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura:

const pricesDoge = [18, 15, 12, 11, 9, 7];
maxProfit(pricesDoge); // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3];
maxProfit(pricesAda); // -> -1 (no hay ganancia posible)

export default function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const currentProfit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, currentProfit);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit === 0 ? -1 : maxProfit;
}

const maxProfit1 = maxProfit(pricesBtc);
console.log(maxProfit1); // 16

const maxProfit2 = maxProfit(pricesEth);
console.log(maxProfit2); // 60

const maxProfit3 = maxProfit(pricesDoge);
console.log(maxProfit3); // -1

const maxProfit4 = maxProfit(pricesAda);
console.log(maxProfit4); // -1
