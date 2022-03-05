function newDog(x, y, startpoint, score) {


     //direction pass in parameter along with newNonPlayable Character
    
    //array to hold image selections
    let dogImages = [
        'assets/dogOne/dogOneLeft.gif', 
        'assets/dogOne/dogOneRight.gif', 
        'assets/dogOne/dogOneDown.gif',
        'assets/dogOne/dogOneUp.gif',
        'assets/dogTwo/dogTwoLeft.gif', 
        'assets/dogTwo/dogTwoRight.gif', 
        'assets/dogTwo/dogTwoDown.gif',
        'assets/dogTwo/dogTwoUp.gif',
        'assets/dogThree/dogThreeLeft.gif',
        'assets/dogThree/dogThreeRight.gif',
        'assets/dogThree/dogThreeDown.gif',
        'assets/dogThree/dogThreeUp.gif',
        'assets/dogFour/dogFourLeft.gif',
        'assets/dogFour/dogFourRight.gif',
        'assets/dogFour/dogFourDown.gif',
        'assets/dogFour/dogFourUp.gif'
    ]
     //Generate a random dog
    let srcImage =  '';
    
    function randomDog(startpoint){
            
            let randomNum = Math.random();

            if(startpoint == 'right'){
                if (randomNum >= 0 && randomNum < .25){
                    srcImage = dogImages[0]
                }
                else if(randomNum >= .25 && randomNum < .50){
                    srcImage = dogImages[4]
                }
                else if(randomNum >= .50 && randomNum < .75){
                    srcImage = dogImages[8]
                }
                else{
                    srcImage = dogImages[12]
                }
                
                return srcImage
            }
            else if(startpoint == 'left'){

                if (randomNum >= 0 && randomNum < .25){
                    srcImage = dogImages[1]
                }
                else if(randomNum >= .25 && randomNum < .50){
                    srcImage = dogImages[5]
                }
                else if(randomNum >= .50 && randomNum < .75){
                    srcImage = dogImages[9]
                }
                else{
                    srcImage = dogImages[13]
                }
                
                return srcImage
            }
            else if(startpoint == 'top'){
                if (randomNum >= 0 && randomNum < .25){
                    srcImage = dogImages[2]
                }
                else if(randomNum >= .25 && randomNum < .50){
                    srcImage = dogImages[6]
                }
                else if(randomNum >= .50 && randomNum < .75){
                    srcImage = dogImages[10]
                }
                else{
                    srcImage = dogImages[14]
                }
                
                return srcImage
            }
            else{
                if (randomNum >= 0 && randomNum < .25){
                    srcImage = dogImages[3]
                }
                else if(randomNum >= .25 && randomNum < .50){
                    srcImage = dogImages[7]
                }
                else if(randomNum >= .50 && randomNum < .75){
                    srcImage = dogImages[11]
                }
                else{
                    srcImage = dogImages[15]
                }
                
                return srcImage
            }


    }

   
   
    let element = newImage(randomDog(startpoint))
    element.addEventListener('click', () => {
        element.remove() 
        scoreKeeper()
    })
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

    setInterval(moveCharacter, 8)

    async function walkEast(time) {
        direction = 'east'
        await sleep(time)
        stop(); 
    }

    async function walkNorth(time) {
        direction = 'north'
        await sleep(time)
        stop(); 
    }

    async function walkWest(time) {
        direction = 'west'
        await sleep(time)
        stop(); 
    }

    async function walkSouth(time) {
        direction = 'south'
        await sleep(time)
        stop(); 
    }

    function stop() {
        direction = null
        if(element !== null){
        element.remove()
        }
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop,
    
    }

    function sleep(time){
        return new Promise(resolve => {
            setTimeout(resolve, time)
        })
    }
    
}

