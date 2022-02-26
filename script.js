let counter = 0;

function count(){
    counter++;
    document.getElementById('counter').value = counter;
    moveDogsLeft(); //move dog tot the left
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

function moveDogsLeft(){

    let getDogX = document.getElementById('doggo').offsetLeft;
      
    if(getDogX > 0){

        getDogX = getDogX-40;
    console.log(getDogX)

    }



//     if(getDogX <= 0){

//         document.getElementById('doggo').style.left = null ;
//         document.getElementById('doggo').style.right = '0px';
//     }
//     else{
//         getDogX = getDogX-40;
//         document.getElementById('doggo').style.left = getDogX;
//     }
}
