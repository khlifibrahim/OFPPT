const choice = document.getElementsByName('choice');
console.log(choice)

function choiceBtn() {
     
    for (i = 0; i < choice.length; i++) {
        if (choice[i].checked) {
            console.log(choice[i].parentElement.innerText)
            document.getElementById('text').innerHTML = choice[i].parentElement.innerText
        }
    }
}