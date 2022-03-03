




function newImage(url, classname){
    let image = document.createElement('img')
    image.classList.add(classname)
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}


//const playerCat = newPlayableCharacter(370,250)



//Generate dogs in random position on y-axis 645
function randGenDogY(){
    let randYpos = Math.floor(Math.random() * (380)) + 320;
    return randYpos
}

function randGenDogX(){
    let randXpos = Math.floor(Math.random() * (450)) + 150;
    return randXpos
}



let npcCount = 0;
let npcCount1 = 0;
let npcCount2 = 0 ;  
let gameCounter = 0;


function gameLoop(){
    let score = 0; 

    setTimeout(function(){

    npc = newDog(645, randGenDogY(), 'right')
    npc.walkWest(4400) ///originally 2300
    // npcCount = npc.element
    // npcCount.addEventListener('click', () => {
    //     npcCount.remove()
    //     score++;
    // })


    npc1 = newDog(randGenDogX(), 800, 'top')
    npc1.walkSouth(4200)
    // npcCount1 = npc1.element
    // npcCount1.addEventListener('click', () => {
    //     npcCount1.remove()
    //     score++;
    // })
    
    npc2 = newDog(100, randGenDogY(), 'left')
    npc2.walkEast(4400)
    // npcCount2 = npc2.element
    // npcCount2.addEventListener('click', () => {
    //     npcCount2.remove()
    //     score++;
    // })

        if (gameCounter < 15) {
            gameLoop();
        }
    }, 1500)

  
   // let updateScore = newNonPlayableCharacter().score
    //console.log(updateScore)

/
    console.log(score)
    
}

gameLoop();













// function collisionDetection(){
// if (npc.x < playerCat.x + playerCat.width &&
//     npc.x + npc.width > playerCat.x &&
//     npc.y < playerCat.y + playerCat.height &&
//     npc.y + npc.height > playerCat.y) {
//      console.log('dead kitty')
//  }

// }



// function touching(div1,div2){
//     let ox = Math.abs(playerCat.x - npc.x) < (playerCat.x < npc.x ? npc.width : playerCat.width);
//     let ox = Math.abs(playerCat.y - npc.y) < (playerCat.y < npc.y ? npc.height : playerCat.height);
//     return ox && oy;
// }

// var t = touching(playerCat, npc) 