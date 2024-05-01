const fName = document.getElementById('fname')
const lName = document.getElementById('lname')
const age = document.getElementById('age')

function verify() {

    console.log(fName.value !== '')
    console.log(fName.value)

    if (fName.value !== '' || lName.value !== '' || age.value !== '') {
        
        document.querySelector('.form').innerHTML = 'Thank for your time !'

    }else {
        alert("Please fill out all fields")
    }

}