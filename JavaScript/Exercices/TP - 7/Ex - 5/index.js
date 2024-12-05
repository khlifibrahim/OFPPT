const sqr = document.querySelector('.container div')

sqr.addEventListener('mouseover', ()=> {
    if(!sqr.classList.contains('floating')) {
        sqr.classList.add('floating')
    }else {
        sqr.classList.remove('floating')
    }
})