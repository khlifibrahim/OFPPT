const fields = Array.from(document.querySelectorAll('.field'))
const inputs = Array.from(document.querySelectorAll('input'))
const errorMsgs = Array.from(document.querySelectorAll('.error-msg'))
const submit = document.querySelector('.submit')
const reset = document.querySelector('.reset')

inputs.forEach((input, i) => {

    input.addEventListener('input', ()=> {
        if(input.value !== '') {
            input.style.borderColor = '#916BBF'
        }else {
            input.style.borderColor = 'rgb(250, 140, 140)'
        }

        // Age checking
        if(input.classList.contains('age')) {
            let timer;
            clearTimeout(timer)

            timer = setTimeout(() => {
                let age = parseInt(input.value)
                
                if(age < 18 || age > 120) {
                    input.classList.add('error')
                    errorMsgs[2].innerHTML = 'Age must be between 5 and 20'
                    // console.log("Age must be between 5 and 20")
                    return input.value = ''
                }else {
                    input.classList.remove('error')
                }
            }, 1800)

        }

        // Password checking
        if(input.classList.contains('passwd')){
            let timer;
            clearTimeout(timer)

            timer = setTimeout(()=> {
                if(input.value.length < 5 || input.value.length > 20) {
                    // console.log('%cPassword must be between 5 and 20 characteres', 'color:red')
                    input.classList.add('error')
                    errorMsgs[4].innerHTML = 'Password must be <br>between 5 and 20 characteres'
                    errorMsgs[4].style.color = 'rgb(250, 140, 140)'
                    inputs[4].style.borderColor = 'rgb(250, 140, 140)'
                    return input.value = ''
                }else if(input.value.length >= 5 && input.value.length <= 10) {
                    errorMsgs[4].innerHTML = 'Password Weak'
                    errorMsgs[4].style.color = 'orange'
                    inputs[4].style.borderColor = 'orange'
                }else {
                    errorMsgs[4].innerHTML = 'Password Strong'
                    errorMsgs[4].style.color = 'green'
                    inputs[4].style.borderColor = 'green'
                }
            }, 1500)
            
        }

        // Confirm password checking
        if(input.classList.contains('cpasswd')) {
            let timer;
            clearTimeout(timer);

            timer = setTimeout(()=> {
                if(input.value === inputs[4].value) {
                    errorMsgs[5].innerHTML = 'Password match'
                    errorMsgs[5].style.color = 'green'
                    inputs[5].style.borderColor = 'green'
                }else {
                    errorMsgs[5].innerHTML = 'Password doesn\'t match'
                    errorMsgs[5].style.color = 'rgb(250, 140, 140)'
                    inputs[5].style.borderColor = 'rgb(250, 140, 140)'
                }
            }, 1000)
        }

    })

    window.addEventListener('DOMContentLoaded', ()=> {
        
        submit.addEventListener('click', (e)=> {
            e.preventDefault()

            if(input.value == '') {
                input.style.borderColor = 'rgb(250, 140, 140)'
                console.log('All fields are required')
                return
            }else {
                submit.Disabled = false;
                console.log('Thaks for submiting your info.')
            }
            
        })

    })

    

})

