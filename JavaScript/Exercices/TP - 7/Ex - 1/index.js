const fields = Array.from(document.querySelectorAll('.field'))
const inputs = Array.from(document.querySelectorAll('input'))
const result = document.querySelector('.result')
const btn = document.querySelector('.calculat')
const errormsg = Array.from(document.querySelectorAll('.error-msg'))

btn.addEventListener('click', (e)=> {
    e.preventDefault()

    
    for (i=0; i < inputs.length; i++) {
        
        if (inputs[i].value !== '') {
            // console.log(`${inputs[i].value}`)
            
            if(Number(inputs[i].value)) {
                console.log(`${inputs[i].value}: This is number`)
                
                if(inputs[i].value >= 0 && inputs[i].value <= 20) {
                    console.log(`${inputs[i].value} Correct Value`)
                    let grades = []
                    
                    for (j=0; j < inputs.length; j++) {
                        let grade = inputs[i].value * (j + 1)
                        grades.push(grade)
                        
                        if (grades.length == 3) {
                            let moyene = grades[j] + grade
                            result.innerHTML = moyene / 6;
                        }else{
                            result.innerHTML = 0;
                        }
                    }
                    // console.log(grades)

                }else{
                    console.log(`${inputs[i].value} value is out of range`)

                    inputs[i].classList.add('error')
                    errormsg[i].innerHTML = 'Value is out of range.'
                }
                
            }else {
                console.log(`${inputs[i].value}: This is not number`)

                inputs[i].classList.add('error')
                errormsg[i].innerHTML = 'This is not number.'

            }
        }else {
            console.log(`this is empty ${i +1}`)
            inputs[i].classList.add('error')
            errormsg[i].innerHTML = 'Fill this field.'
        }
    }
})

