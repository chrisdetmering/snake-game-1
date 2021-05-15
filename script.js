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
    // console.log(snakeBody)
    // console.log(snakeCopy)
    
    scoreboard = document.getElementById('score');
    canvas = document.getElementById('game-space')
    canvasContext = canvas.getContext('2d');

    let fps = 24;
    setInterval(function(){
        moveEverything(direction);
        drawEverything();
    }, 1000/fps);
    // drawEverything();
    // moveEverything(direction);

}



function drawEverything(){
    canvasContext.fillStyle = "white"
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    apple = canvasContext;
    apple.fillStyle = "red"
    apple.fillRect(appleX, appleY, pixelSize, pixelSize);
    
    drawSnake();

    //===REFACOTRING - OLD CODE MAY NOT WORK WITH NEW ATTEMPT====
    // if(direction === "up" || direction === "down"){
    //     snake.fillRect(snakeX, snakeY, snakeHeight, snakeWidth);
    // }
    // if(direction === "left" || direction === "right"){
    //     snake.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);
    // }

    // if (snakeX === appleX && snakeY === appleY){
    //     newApple();
    // }
    //==========================================================
}

document.onkeydown = function(e){
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

            // for(let i = 0; i < snakeBody.length; i++){
            //     if(i === 0){
            //         snakeBody[0].x += pixelSize;
    
            //     }

            //     if(i > 0){
            //         console.log(snakeBody[i])
            //         snakeBody[i] = snakeCopy[i-1]
            //         console.log(snakeBody[i])
            //     }
            // }
            // console.log(snakeBody)
            // console.log(snakeCopy)
            // snakeCopy = snakeBody;
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


// function moveEverything(direction){
//     switch(direction){
//         case "left":
//             snakeX -= 20;
//             break;
//         case "right":
//             snakeX += 20;
//             break
//         case "up":
//             snakeY -= 20;
//             break;
//         case "down":
//             snakeY += 20;
//             break;            
//     }
// }