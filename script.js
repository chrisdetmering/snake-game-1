let canvas;
let canvasContext;
let scoreboard;
let appleX;
let appleY;
let score;
let snakeBody;
let snakeCopy;
let heartBeat;
let direction;
let surprise;
let fps = 24;
let pixelSize = 20;



window.onload = function(){
    surprise = document.getElementById('game-over')
    scoreboard = document.getElementById('score');
    canvas = document.getElementById('game-space')
    canvasContext = canvas.getContext('2d');
    newGame();
}

function newGame(){
    score = 0
    scoreboard.innerText = score;
    canvas.removeAttribute("hidden")
    surprise.pause();
    surprise.currentTime = 0;
    surprise.setAttribute("hidden", true);
    snakeBody = [
        {x: 120, y: 120},
        {x: 100, y: 120},
        {x: 80, y: 120},
        {x: 60, y: 120}
    ]
    snakeCopy = JSON.parse(JSON.stringify(snakeBody));
    appleX = 240;
    appleY = 240;
    direction = "right"

    heartBeat = setInterval(function(){
        moveEverything(direction);
        drawEverything();
    }, 1000/fps);
}

function moveEverything(direction){
    let pendingHeadChange;
    switch(direction){

        case "left":

            pendingHeadChange = snakeBody[0].x - pixelSize
            
            if(pendingHeadChange < 0 || isOuroboros(pendingHeadChange, snakeBody[0].y)){
                gameOver();
            } else{
                snakeBody[0].x -= pixelSize
                moveBody();
            }
            break;
        case "right":

            pendingHeadChange = snakeBody[0].x + pixelSize

            if(pendingHeadChange === canvas.width || isOuroboros(pendingHeadChange, snakeBody[0].y)){
                gameOver();
            } else{
                snakeBody[0].x += pixelSize
                moveBody()
            }
            break
        case "up": 
            
            pendingHeadChange = snakeBody[0].y - pixelSize

            if(pendingHeadChange < 0 || isOuroboros(snakeBody[0].x, pendingHeadChange)){
                gameOver();
            } else{
                snakeBody[0].y -= pixelSize
                moveBody()
            }
            break;
        case "down":
            
            pendingHeadChange = snakeBody[0].y + pixelSize

            if(pendingHeadChange === canvas.height || isOuroboros(snakeBody[0].x, pendingHeadChange)){
                gameOver();
            } else{
                snakeBody[0].y += pixelSize
                moveBody()
            }
            break;
    }


}
function moveBody(){
    snakeBody = [snakeBody.shift()];
    snakeCopy.pop()
    snakeCopy.forEach(element =>{
        snakeBody.push(element);
    })
    snakeCopy = JSON.parse(JSON.stringify(snakeBody));
}
function drawEverything(direction){
    if(direction !== "stop"){
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
}
function drawSnake(){
    snakeBody.forEach(pixel => {
        snakePiece = canvasContext;
        snakePiece.fillStyle = "blue";
        snakePiece.fillRect(pixel.x, pixel.y, pixelSize, pixelSize)
    })
}


document.onkeydown = function(e){
    if(direction === "stop"){
        return newGame();
    } 
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

function isOuroboros(headX, headY){
    let match;
    snakeBody.forEach(pixel =>{
        if(pixel.x === headX && pixel.y === headY){
            match = true
        }
    })
    return match
}

function gameOver(){
    direction = "stop";
    canvas.setAttribute("hidden", true)
    surprise.removeAttribute("hidden")
    surprise.play();
    console.log("Game Over!");
    clearInterval(heartBeat)
}

function randomXorY(){
    return (Math.floor(Math.random() * 24)) * 20;
}

function newApple(){
    let x = randomXorY();
    let y = randomXorY();
    snakeBody.forEach(pixel =>{
        if (pixel.x === x && pixel.y === y){
            x = randomXorY();
            y = randomXorY();
        }
    })
    apple.clearRect(appleX, appleY, pixelSize, pixelSize)
    apple.fillRect(x, y, pixelSize, pixelSize);
    score += 1;
    scoreboard.innerText = score;
    appleX = x;
    appleY = y;
    snakeBody.push(
        {
            x: snakeBody[snakeBody.length-1].x, 
            y: snakeBody[snakeBody.length-1].y
        }
    )
    snakeCopy = JSON.parse(JSON.stringify(snakeBody));
}


