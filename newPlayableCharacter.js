function newPlayableCharacter(x, y) {
    const element = newImage("assets/Cats/catOneUp.gif")
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/Cats/catOneUp.gif`
        }
        if (direction === 'west') {
            element.src = `assets/Cats/catOneLeft.gif`
        }
        if (direction === 'north') {
            element.src = `assets/Cats/catOneUp.gif`
        }
        if (direction === 'east') {
            element.src = `assets/Cats/catOneRight.gif`
        }
        if (direction === 'south') {
            element.src = `assets/Cats/catOneDown.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}

