

let counter = 0;

function count(){
    counter++;
    document.getElementById('counter').value = counter;
    
    
}

let countInterval;

function runGame(state){
    if (state == 1)//run game
    {
        if(counter > 100)
        {
            runGame('2')
        }
        else{
            countInterval = setInterval("count();", 100); 
        }
    }
    else{

        //stop game
        clearInterval(countInterval);
        counter = 0;
        document.getElementById('counter').value = counter;

    }
}


// move function from WEB GAME PT 7




function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}


const playerCat = newPlayableCharacter(380, 320)
const npc = newNonPlayableCharacter(645, randGenDogY())

//Generate dogs in random position on y-axis
function randGenDogY(){
    let randYpos = Math.floor(Math.random() * (380)) + 320;
    return randYpos
}

let dogInterval;



function moveDogs(npc){
for(let i=0; i<100; i++){
    let xPos = 645;
    npc.style.right = xPos - 10;

}

}
dogInterval = setInterval('', 100);