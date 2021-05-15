let canvas;
let canvasContext;
let scoreboard;
let appleX = 240;
let appleY = 240;
let direction = "right";
let score = 0;
let snakeWidth = 40;
let pixelSize = 20;

let snakeBody;
let snakeCopy;

window.onload = function(){
    snakeBody = [
        {x: 120, y: 120},
        {x: 100, y: 120},
        {x: 80, y: 120},
        {x: 60, y: 120}
    ]
    snakeCopy = JSON.parse(JSON.stringify(snakeBody));
    
    scoreboard = document.getElementById('score');
    canvas = document.getElementById('game-space')
    canvasContext = canvas.getContext('2d');

    let fps = 24;
    setInterval(function(){
        moveEverything(direction);
        drawEverything();
    }, 1000/fps);

}

function drawEverything(){
    canvasContext.fillStyle = "white"
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    apple = canvasContext;
    apple.fillStyle = "red"
    apple.fillRect(appleX, appleY, pixelSize, pixelSize);
    
    drawSnake();

    if (snakeBody[0].x === appleX && snakeBody[0].y === appleY){
        newApple();
    }
}

document.onkeydown = function(e){
    switch(e.key){
        case "ArrowUp":
            if(direction !== "down")
            direction = "up";
            break;
        case "ArrowDown":
            if(direction !== "up")
            direction = "down";
            break;
        case "ArrowLeft":
            if(direction !== "right")
            direction = "left";
            break;
        case "ArrowRight":
            if(direction !== "left")
            direction = "right";
            break;
    }
}

 


//IF GAME OVER
        //SNAKE TOUCHES ITSELF
        //SNAKE TOUCHES THE OUTSIDE BORDER
    //WHEN GAME OVER
        //STOP GAME
        //NOTIFY USER
//IF SNAKE EAT APPLE
    //GROW ONE LENGTH
    //---RESPAWN NEW APPLE AT RANDOM LOCATION
//CONTROL SNAKE WITH ARROW KEYS ON KEYBOARD
//SHOW SCORE OF APPLES EATEN

function drawSnake(){
    snakeBody.forEach(pixel => {
        // debugger
        snakePiece = canvasContext;
        snakePiece.fillStyle = "blue";
        snakePiece.fillRect(pixel.x, pixel.y, pixelSize, pixelSize)
    })
}

function drawBody(){
    snakeBody = [snakeBody.shift()];
    snakeCopy.pop()
    snakeCopy.forEach(element =>{
        snakeBody.push(element);
    })
    snakeCopy = JSON.parse(JSON.stringify(snakeBody));
}


function randomXorY(){
    return (Math.floor(Math.random() * 24)) * 20;
}

function newApple(){
    let x = randomXorY();
    let y = randomXorY();
    apple.clearRect(appleX, appleY, 20, 20)
    apple.fillRect(x, y, 20, 20);
    score += 1;
    scoreboard.innerText = score;
    appleX = x;
    appleY = y;
    snakeWidth += 20;
    snakeBody.push(
        {
            x: snakeBody[snakeBody.length-1].x, 
            y: snakeBody[snakeBody.length-1].y
        }
    )
    snakeCopy = JSON.parse(JSON.stringify(snakeBody));
}

function moveEverything(direction){
    switch(direction){
        case "left":
            snakeBody[0].x -= pixelSize
            drawBody();
            break;
        case "right":
            snakeBody[0].x += pixelSize
            drawBody()
            break
        case "up":
            snakeBody[0].y -= pixelSize
            drawBody()
            break;
        case "down":
            snakeBody[0].y += pixelSize
            drawBody()
            break;            
    }
}