
function newImage(url){
    let image = document.createElement('img')
    //image.classList.add(classname)
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}
