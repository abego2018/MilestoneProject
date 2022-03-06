
function newImage(url){
    let image = document.createElement('img')
    let gameScreen = document.getElementById('gamescreen')
    //image.classList.add(classname)
    image.src = url
    image.style.position = 'absolute'
    gameScreen.append(image)
    return image
}
