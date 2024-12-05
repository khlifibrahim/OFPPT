const year = document.querySelector("#year");
const redoubling = document.querySelector("#redoubling");
const gpa = document.querySelector("#gpa");
const absences = document.querySelector("#absences");


function determineResult() {

    if (
        year.value !== '' &&
        gpa.value !== '' &&
        absences.value !== '') {

            let indexSelected = year.selectedIndex;
            if (indexSelected == 0) {
                alert('Please Choose a year.')
            }else if (indexSelected == 1) {
        
                if (gpa.value >= 10 && redoubling.checked == false) {
                    alert('Admis')
                }else if (gpa.value < 10 && gpa.value >= 9 && redoubling.checked == false) {
        
                    if (absences.value < 30) {
                        alert('Rachete')
                    }else {
                        alert('Redouble')
                    }
        
                }else {
        
                    if (gpa.value < 9 && redoubling.checked == false) {
                        alert('Redouble')
                    } else if (gpa.value < 9 && redoubles.checked == true){
                        alert("Eliminé")
                    }
        
                }
            } else {
        
                if (gpa.value < 10 && gpa.value >= 9.5 ) {
        
                    if (redoubling.checked == false) {
        
                        if (absences.value < 30) {
                            alert("Admis avec Bonus")
                        }else if (absences.value >= 30) {
                            alert("Redouble")
            
                        }
        
                    }else {
                        alert('Eliminé')
                    }
                    
                }else if (gpa.value < 9.5) {
                    
                    if (redoubling.checked == false) {
                        alert("redouble")
                    }else {
                        alert("Eliminé")
                    }
        
                }
        
            }

    }else {
        console.log('Please Fill the empty fields !!')
        alert('Please Fill the empty fields !!')
    }

}