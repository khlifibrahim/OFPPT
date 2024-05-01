const DOMResult = document.getElementById('result');

let counter = 0;
for (i = 0; i < 5; i++) {
    let msg = Number(prompt())

    counter += msg
    console.log(counter)
}


console.log(`My result is: ${result}`)

function pushResult() {
    let result = counter / 5;
    DOMResult.innerText = `My result is: ${result}`
}

