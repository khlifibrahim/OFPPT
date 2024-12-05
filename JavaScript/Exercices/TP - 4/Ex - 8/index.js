const article = document.getElementById('article');
const size = document.getElementById('size');



let tableOfArticles = [
    [],
    [, 1200, 1250, 1300],
    [, 800, 850, 900],
    [, 500, 520, 540]
]

function calculate() {
        
        if (article.selectedIndex || size.selectedIndex) {

            for (i = 0; i < tableOfArticles.length; i++) {
                // console.log(article.selectedIndex)
                // console.log(tableOfArticles[article.selectedIndex])

                for (j = 0; j < size.length; j++) {
                    console.log(tableOfArticles[article.selectedIndex][size.selectedIndex])

                    let displayValue = document.getElementById('text');

                    displayValue.value = tableOfArticles[article.selectedIndex][size.selectedIndex]
                }
            }

        }
}