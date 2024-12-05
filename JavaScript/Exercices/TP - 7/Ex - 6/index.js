const body = document.querySelector("body");
const container = document.querySelector(".container");
const btn = document.querySelector('.dark')
const btnImg = document.querySelector('.dark img')

btn.addEventListener('click', ()=> {
    if(container.classList.contains('dark_mode')) {
        body.classList.remove('dark_mode')
        container.classList.remove('dark_mode')
        btnImg.src = 'img/sun.svg'
        // console.log('dark')
    }else {
        container.classList.add('dark_mode')
        body.classList.add('dark_mode')
        btnImg.src = 'img/moon.svg'
    }
})