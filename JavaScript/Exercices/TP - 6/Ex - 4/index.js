const fName = document.getElementById('fname')
const lName = document.getElementById('lname')
const age = document.getElementById('age')
const required = document.querySelectorAll('.required')

// console.log(required)



// console.log(fName, lName, age)

function verify() {
    
    if (fName.value !== '' || lName.value !== '' || age.value !== '') {

        if (typeof fName.value === 'string' && typeof lName.value === 'string' && Number.isNaN(+age) === true) {
            document.querySelector('.form').innerHTML = `Thank for your time  ${fName.value} ${lName.value}.`
        }else {
            alert('Name and age, Not Correct.')
            console.log('Name and age, Not Correct.')
        }

    }else {
        
        required.forEach(el => {
            if(el.classList.contains('hide')) {
                el.classList.remove('hide')
            }
        })

        console.log('Please Fill the empty fields !!')
        // alert('Please Fill the empty fields !!')
    }

}