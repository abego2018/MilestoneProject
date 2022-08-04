let gameCounter = 0;
let userScore = 0;
let rank = '';
function scoreKeeper(){

    userScore++;
    console.log(userScore)
    return userScore
    
    
}

 function hiddenMessage(){
    let hiddenDiv = document.getElementById('final');
    if ( hiddenDiv.style.display === "none"){
        hiddenDiv.style.display = "block";
    }
    else{
        hiddenDiv.style.display = "none";
    }
}



function finalScore(){

    let finalScore = scoreKeeper();
console.log("your final score is " + finalScore)

    if (finalScore  <= 14){
        rank = 'Rookie';
    }
    else if(finalScore <= 21){
        rank = 'Veteran';
    }
    else if(finalScore <= 27){
        rank = 'Expert'
    }
    else{
        rank = 'Master'
    }
    const finalMessage = document.getElementById('message');
    finalMessage.textContent = "You caught " + finalScore + " dogs" ;

    const finalRank = document.getElementById('rankId');
    finalRank.textContent = " " + rank; 

}

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
  
    gameCounter++;

    
    setTimeout(function(){

    npc = newDog(645, randGenDogY(), 'right', scoreKeeper)
    npc.walkWest(4400) 
  
    npc1 = newDog(randGenDogX(), 700, 'top', scoreKeeper)
    npc1.walkSouth(4050)
   
    npc2 = newDog(100, randGenDogY(), 'left', scoreKeeper)
    npc2.walkEast(4300)

    npc3 = newDog(randGenDogX(), 200, 'bottom', scoreKeeper)
    npc3.walkNorth(4050)

    const points = document.getElementById('score')
    points.textContent = userScore;

        if (gameCounter < 15) {
            gameLoop();
           
        
        }
    }, 2000)

  
   
    
    // console.log(score)
    
}
function audioLoop(){
    var audio = new Audio("assets/thirtySecSoundBite.mp3")
    audio.play();
}

function startGame(){
    setTimeout(function(){audioLoop()},2000);
    gameLoop();
    setTimeout(function(){finalScore()}, 33000);
    setTimeout(function(){hiddenMessage()}, 34000);
    }




function loadGame(){

document.getElementById("start").disabled = true; //deactivating the button to only load once

startGame();    //starting the game

document.getElementById("start").disabled = false;// reactivating the button to work after a reset

}