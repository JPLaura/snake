function convertToPixels(n) {
    if (n > 79) {
        n = 79
    }
    if (n < 0) {
        n = 0
    }
    return n * 8

}

function draw () {
    updateLocation()
    drawSnake()
    setTimeout(() => (
        window.requestAnimationFrame(draw)
    ))
}


function updateSnake () {

    context.strokeStyle = 'white'
    context.lineWidth = 1


    snakeCoordinates.forEach(c => {
        context.fillRect(convertToPixels(c[0]), convertToPixels(c[1]), 8, 8)
        context.strokeRect(convertToPixels(c[0]), convertToPixels(c[1]), 8, 8)
    })
}

function updateLocation () {
    let newX, newY

    switch (direction) {
        case 'up':
            newX = snakeCoordinates[0][0]
            newY = snakeCoordinates[0][1]
            break;
        case 'down':
            newX = snakeCoordinates[0][0]
            newY = snakeCoordinates[0][1]
            break;
        case 'left':
            newX = snakeCoordinates[0][0]
            newY = snakeCoordinates[0][1]  
            break
        case 'right':
            newX = snakeCoordinates[0][0]
            newY = snakeCoordinates[0][1]        
            break
    }

    snakeCoordinates.unshift([newx, newY])
    snakeCoordinates.pop()
}
 let snakeCoordinates = [
    [40, 40],
    [40, 41]
 ]

const canvas = document.getElementById('snakeCanvas')
const context = canvas.getContext('2d')

updateSnake()

