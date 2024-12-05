const fName = document.getElementById('fname')
const lName = document.getElementById('lname')
const age = document.getElementById('age')

// console.log(fName, lName, age)

function verify() {
    
    if (fName.value !== '' || lName.value !== '' || age.value !== '') {

        if (typeof fName.value === 'string' && typeof lName.value === 'string' && Number.isNaN(+age) === true) {
            document.querySelector('.form').innerHTML = `Thank for your time  ${fName.value} ${lName.value}.`
        }else {
            console.log('Name and age, Not Correct.')
        }

    }else {
        console.log('Please Fill the empty fields !!')
    }

}