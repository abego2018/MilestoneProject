//const playerCat = newPlayableCharacter(370,250)

// let npcCount = 0;
// let npcCount1 = 0;
// let npcCount2 = 0 ;  
let gameCounter = 0;
let userScore = 0;

function scoreKeeper(){

    userScore++;
    console.log(userScore)
}
const points = document.getElementById('#score')
points.textContent = userScore;

//Generate dogs in random position on y-axis 645
function randGenDogY(){
    let randYpos = Math.floor(Math.random() * (380)) + 320;
    return randYpos
}

function randGenDogX(){
    let randXpos = Math.floor(Math.random() * (450)) + 150;
    return randXpos
}

function gameLoop(){
    let scoredPoints = 0; 
    gameCounter++;

    
    setTimeout(function(){

    npc = newDog(645, randGenDogY(), 'right', scoreKeeper)
    npc.walkWest(4400) 
  
   
    const points = document.querySelector('#score')
    points.textContent = scoredPoints;

    //npc1 = newDog(randGenDogX(), 800, 'top')
    //npc1.walkSouth(4200)
   
    
    //npc2 = newDog(100, randGenDogY(), 'left')
    //npc2.walkEast(4400)
  

        if (gameCounter < 10) {
            gameLoop();
            
        }
    }, 1500)

  

  

    //console.log(score)
    
}

gameLoop();
