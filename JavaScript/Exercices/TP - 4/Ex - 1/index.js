const paragraph = document.getElementById('random-number');

function aleatoir() {
    console.log("ok!")

    let randomNumber = Math.floor( Math.random() * 100)
    console.log(randomNumber)

    paragraph.innerHTML = randomNumber
}

aleatoir()