let canvas;
let canvasContext;
let scoreboard;
let appleX = 240;
let appleY = 240;
let snakeX = 120;
let snakeY = 120;
let direction = "right";
let score = 0;

const snakeHeight = 20;
const appleSize = 20;

window.onload = function(){
    console.log("hello world");
    scoreboard = document.getElementById('score');
    canvas = document.getElementById('game-space')
    canvasContext = canvas.getContext('2d');

    let fps = 24;
    setInterval(function(){
        moveEverything(direction);
        drawEverything();
    }, 1000/fps);
}

function moveEverything(direction){
    switch(direction){
        case "left":
            snakeX -= 20;
            break;
        case "right":
            snakeX += 20;
            break
        case "up":
            snakeY -= 20;
            break;
        case "down":
            snakeY += 20;
            break;            
    }
}

function drawEverything(){
    canvasContext.fillStyle = "white"
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    apple = canvasContext;
    apple.fillStyle = "red"
    apple.fillRect(appleX, appleY, appleSize, appleSize);  
    
    snake = canvasContext;
    snake.fillStyle = "blue";
    snake.fillRect(snakeX, snakeY, 40, snakeHeight);

    if (snakeX === appleX && snakeY === appleY){
        newApple();
    }

}

document.onkeydown = function(e){
    console.log(e.key);
    switch(e.key){
        case "ArrowUp":
            direction = "up";
            break;
        case "ArrowDown":
            direction = "down";
            break;
        case "ArrowLeft":
            direction = "left";
            break;
        case "ArrowRight":
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
}
