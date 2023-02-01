


async function calculateTotal(cart) {
    let total = 0;
    for(let i=0; i< cart.items.length; i++) {
        total += cart.items[i].qty * cart.items[i].price;
    }
    return total;
}


module.exports = {
    calculateTotal
}