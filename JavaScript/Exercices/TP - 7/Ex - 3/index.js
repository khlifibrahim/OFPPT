const img = document.querySelector('img')

img.addEventListener('mouseover', ()=> {
    img.setAttribute('src', 'img/yellow.jpg')
})

img.addEventListener('mouseout', ()=> {
    img.setAttribute('src', 'img/blue.jpg')
})