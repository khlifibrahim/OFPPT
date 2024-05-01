const select = document.getElementById('select');


function choiceBtn() {
    
    console.log(select.value)

    document.getElementById('text').innerText = select.value
}