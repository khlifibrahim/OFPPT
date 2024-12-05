const fName = document.getElementById('fname')
const lName = document.getElementById('lname')
const age = document.getElementById('age')
const username = document.getElementById('username')
const passwd = document.getElementById('password')
const confirmPasswd = document.getElementById('confirmPassword')

console.log(username, passwd, confirmPasswd)

function verify() {
    
    if (
        fName.value !== '' && 
        lName.value !== '' && 
        age.value !== '' && 
        username.value !== '' && 
        passwd.value !== '' && 
        confirmPasswd !== '') {

            let passwdvalue = passwd.value
            let checkPass = passwdvalue.length >= 5 && passwdvalue.length <= 25
            if (
                typeof fName.value === 'string' &&
                typeof lName.value === 'string' &&
                Number.isNaN(+age) === true &&
                typeof username.value === 'string' &&
                checkPass &&
                (confirmPasswd.value === passwd.value)) {
                    document.querySelector('.form').innerHTML = `Thank for your time  ${fName.value} ${lName.value}.`
            }else {
                console.log('Name and age, Not Correct.')
                alert('Name and age, Not Correct.')
            }

    }else {
        console.log('Please Fill the empty fields !!')
        alert('Please Fill the empty fields !!')
    }

}