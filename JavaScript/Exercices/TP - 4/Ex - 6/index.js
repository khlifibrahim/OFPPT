const ch1 = document.getElementById('ch-1');
const ch2 = document.getElementById('ch-2');
const ch3 = document.getElementById('ch-3');
const ch4 = document.getElementById('ch-4');

console.log(ch1, ch2, ch3, ch4)

function choiceBtn() {
    if (!ch3.checked && ch1.checked && ch2.checked && ch4.checked) {
        console.log('Good!')
        document.getElementById('text').innerText = 'Good !'
    }else {
        console.log('Not good ')
        document.getElementById('text').innerText = 'Not Good !!'
    }
}