const images = Array.from(document.querySelectorAll('img'))

console.log(images)

for (i = 0; i < images.length; i++) {

    images[i].addEventListener('mouseover', ()=> {
        images[0].setAttribute('src', `img/img4.jpg`)
        images[1].setAttribute('src', `img/img2.jpg`)
        images[2].setAttribute('src', `img/img1.jpg`)
        images[3].setAttribute('src', `img/img3.jpg`)
    })
    
    images[i].addEventListener('mouseout', ()=> {
        images[0].setAttribute('src', `img/img1.jpg`)
        images[1].setAttribute('src', `img/img2.jpg`)
        images[2].setAttribute('src', `img/img3.jpg`)
        images[3].setAttribute('src', `img/img4.jpg`)
    })

}
