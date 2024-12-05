const article = document.getElementById('article');
const size = document.getElementById('size');
const price = document.getElementById('price');
const quantity = document.getElementById('quantity');
const total = document.getElementById('total');

console.log(article, size, price)

let tableOfArticles = [
    [],
    [, 1200, 1250, 1300],
    [, 800, 850, 900],
    [, 500, 520, 540]
]

function calculate() {
        
        if (article.selectedIndex || size.selectedIndex) {

            for (i = 0; i < tableOfArticles.length; i++) {

                for (j = 0; j < size.length; j++) {
                    console.log(tableOfArticles[article.selectedIndex][size.selectedIndex])

                    price.value = tableOfArticles[article.selectedIndex][size.selectedIndex]
                    total.innerText = tableOfArticles[article.selectedIndex][size.selectedIndex]

                }
            }

        }
}

function autoPrice() {
    console.log(price.value)
    console.log(quantity.value)
    console.log(+price.value * quantity.value)
    total.innerText = +price.value * quantity.value
}