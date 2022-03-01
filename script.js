




function newImage(url, classname){
    let image = document.createElement('img')
    image.classList.add(classname)
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}


const playerCat = newPlayableCharacter(370,250)



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
function gameLoop(){

    // let counter = 0;

    // function count(){
    //     counter++;
    //     document.getElementById('counter').value = counter;   
    // }
    
    // let countInterval;
    
    // function runGame(state){
    //     if (state == 1)//run game
    //     {
    //         if(counter > 100)
    //         {
    //             runGame('2')
    //         }
    //         else{
    //             countInterval = setInterval("count();", 100); 
    //         }
    //     }
    //     else{
    
    //         //stop game
    //         clearInterval(countInterval);
    //         counter = 0;
    //         document.getElementById('counter').value = counter;
    
    //     }
    // }
    



    setTimeout(function(){
    npcCount++;    
    npc = newNonPlayableCharacter(645, randGenDogY(), 'right')
    npc.walkWest(2300)
    npc1 = newNonPlayableCharacter(randGenDogX(), 800, 'top')
    npc1.walkSouth(2100)
    npc2 = newNonPlayableCharacter(100, randGenDogY(), 'left')
    npc2.walkEast(2300)
        if (npcCount < 15) {
            gameLoop();
        }
    }, 1500)

}

//gameLoop();














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