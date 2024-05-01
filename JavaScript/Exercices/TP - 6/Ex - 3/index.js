const quantity = document.querySelectorAll('.quantity');
const pricePunit = document.querySelectorAll('.price_p_unite');
const prices = document.querySelectorAll('.price');
const total = document.querySelector('.total');

// console.log(quantity)

let sum = 0
function addQuantity(i) {

    let result = +quantity[i].value * +pricePunit[i].value
    prices[i].value = result
    sum += result

    total.value = sum
}