function newNonPlayableCharacter(x, y, startpoint) {


     //direction pass in parameter along with newNonPlayable Character
    
    //array to hold image selections
    let dogImages = [
        'assets/dogOne/dogOneLeft.gif', 
        'assets/dogOne/dogOneRight.gif', 
        'assets/dogOne/dogOneDown.gif',
        'assets/dogTwo/dogTwoLeft.gif', 
        'assets/dogTwo/dogTwoRight.gif', 
        'assets/dogTwo/dogTwoDown.gif',
        'assets/dogThree/dogThreeLeft.gif',
        'assets/dogThree/dogThreeRight.gif',
        'assets/dogThree/dogThreeDown.gif',
        'assets/dogFour/dogFourLeft.gif',
        'assets/dogFour/dogFourRight.gif',
        'assets/dogFour/dogFourDown.gif'
    ]
     //Generate a random dog
    let srcImage =  '';
    
    function randomDog(startpoint){
            console.log(startpoint);
            let randomNum = Math.random();

            if(startpoint == 'right'){
                if (randomNum >= 0 && randomNum < .25){
                    srcImage = dogImages[0]
                }
                else if(randomNum >= .25 && randomNum < .50){
                    srcImage = dogImages[3]
                }
                else if(randomNum >= .50 && randomNum < .75){
                    srcImage = dogImages[6]
                }
                else{
                    srcImage = dogImages[9]
                }
                
                return srcImage
            }
            else if(startpoint == 'left'){

                console.log(startpoint)
                if (randomNum >= 0 && randomNum < .25){
                    srcImage = dogImages[1]
                }
                else if(randomNum >= .25 && randomNum < .50){
                    srcImage = dogImages[4]
                }
                else if(randomNum >= .50 && randomNum < .75){
                    srcImage = dogImages[7]
                }
                else{
                    srcImage = dogImages[10]
                }
                
                return srcImage
            }
            else{
                if (randomNum >= 0 && randomNum < .25){
                    srcImage = dogImages[2]
                }
                else if(randomNum >= .25 && randomNum < .50){
                    srcImage = dogImages[5]
                }
                else if(randomNum >= .50 && randomNum < .75){
                    srcImage = dogImages[8]
                }
                else{
                    srcImage = dogImages[11]
                }
                
                return srcImage
            }


    }


    let element = newImage(randomDog(startpoint), 'dog')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    async function walkEast(time) {
        direction = 'east'
        //element.src = `randomDog()`
        await sleep(time)
        stop(); 
    }

    async function walkNorth(time) {
        direction = 'north'
        //element.src = `randomDog()`
        await sleep(time)
        stop(); 
    }

    async function walkWest(time) {
        direction = 'west'
        //element.src = `randomDog()`
        await sleep(time)
        stop(); 
    }

    async function walkSouth(time) {
        direction = 'south'
        //element.src = `randomDog()`
        await sleep(time)
        stop(); 
    }

    function stop() {
        direction = null
        element.parentNode.removeChild(element);
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }

    function sleep(time){
        return new Promise(resolve => {
            setTimeout(resolve, time)
        })
    }
}

