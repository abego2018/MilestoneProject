function newNonPlayableCharacter(x, y) {

    //Generate a random dog
    let srcImage =  '';

    function randomDog(){

            let randomNum = Math.random();
            if (randomNum >= 0 && randomNum < .25){
                srcImage = 'assets/dogOne/dogOneLeft.gif'
            }
            else if(randomNum >= .25 && randomNum < .50){
                srcImage = 'assets/dogTwo/dogTwoLeft.gif'
            }
            else if(randomNum >= .50 && randomNum < .75){
                srcImage = 'assets/dogThree/dogThreeLeft.gif'
            }
            else{
                srcImage = 'assets/dogFour/dogFourLeft.gif'
            }
            
            return srcImage
    }



    let element = newImage(randomDog())
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
        element.src = `./assets/red-character/east.gif`
        await sleep(time)
        stop(); 
    }

    async function walkNorth(time) {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        await sleep(time)
        stop(); 
    }

    async function walkWest(time) {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        await sleep(time)
        stop(); 
    }

    async function walkSouth(time) {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        await sleep(time)
        stop(); 
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
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

