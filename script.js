let canvas;
let canvasContext;
let scoreboard;
let appleX;
let appleY;
let score;
let snakeBody;
let snakeCopy;
let interval;
let direction;
let surprise;
let fps = 24;
let pixelSize = 20;
const delta = 20;


window.onload = function () {
    surprise = document.getElementById('game-over')
    scoreboard = document.getElementById('score');
    canvas = document.getElementById('game-space')
    canvasContext = canvas.getContext('2d');
    newGame();
}
document.onkeydown = function (e) {
    direction = e.key
}

function newGame() {
    score = 0
    scoreboard.innerText = score;
    canvas.removeAttribute("hidden")
    surprise.pause();
    surprise.currentTime = 0;
    surprise.setAttribute("hidden", true);
    snakeBody = [

        { x: 100, y: 120 },
        { x: 80, y: 120 },
        { x: 60, y: 120 }
    ]
    snakeCopy = JSON.parse(JSON.stringify(snakeBody));
    appleX = 240;
    appleY = 240;
    direction = null;

    interval = setInterval(function () {
        moveSnake();

        if (isSnakeOutOfBounds() || isSnakeHittingSelf()) gameOver();

        drawEverything();

        if (isAppleEaten()) newApple();

    }, 2000 / fps);
}



function isSnakeOutOfBounds() {
    const isSnakeXOutOfBounds = snakeBody[0].x < 0 || snakeBody[0].x === canvas.width;
    const isSnakeYOutOfBounds = snakeBody[0].y < 0 || snakeBody[0].y === canvas.height;

    return isSnakeXOutOfBounds || isSnakeYOutOfBounds;
}

function moveSnake() {
    switch (direction) {
        case "ArrowLeft":
            snakeBody[0].x -= delta;
            moveBody();
            break;
        case "ArrowRight":
            snakeBody[0].x += delta;
            moveBody()
            break
        case "ArrowUp":
            snakeBody[0].y -= delta;
            moveBody()
            break;
        case "ArrowDown":
            snakeBody[0].y += delta;
            moveBody()
            break;
    }
}
function moveBody() {
    snakeBody = [snakeBody.shift()];
    snakeCopy.pop()
    snakeCopy.forEach(element => {
        snakeBody.push(element);
    })
    snakeCopy = JSON.parse(JSON.stringify(snakeBody));
}
function drawEverything() {
    drawBackground();
    drawApple()
    drawSnake();
}

function drawSnake() {
    snakeBody.forEach(pixel => {
        snakePiece = canvasContext;
        snakePiece.fillStyle = "blue";
        snakePiece.fillRect(pixel.x, pixel.y, pixelSize, pixelSize)
    })
}

function drawApple() {
    apple = canvasContext;
    apple.fillStyle = "red"
    apple.fillRect(appleX, appleY, pixelSize, pixelSize);
}

function drawBackground() {
    canvasContext.fillStyle = "white"
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function isAppleEaten() {
    return snakeBody[0].x === appleX && snakeBody[0].y === appleY;
}



function isSnakeHittingSelf() {
    const snakeHead = snakeBody[0];
    const headX = snakeHead.x;
    const headY = snakeHead.y;

    for (let i = 1; i < snakeBody.length; i++) {
        const snakeBodyPart = snakeBody[i];
        if (snakeBodyPart.x === headX && snakeBodyPart.y === headY) {
            return true;
        }
    }

    return false;
}

function gameOver() {
    direction = "stop";
    canvas.setAttribute("hidden", true)
    surprise.removeAttribute("hidden")
    surprise.play();
    console.log("Game Over!");
    clearInterval(interval)
}

function randomXorY() {
    return (Math.floor(Math.random() * 24)) * 20;
}

function newApple() {
    let x = randomXorY();
    let y = randomXorY();

    apple.clearRect(appleX, appleY, pixelSize, pixelSize)
    apple.fillRect(x, y, pixelSize, pixelSize);
    score += 1;
    scoreboard.innerText = score;
    appleX = x;
    appleY = y;

    addSnakePart(x, y);
}


function addSnakePart(x, y) {
    snakeBody.forEach(pixel => {
        if (pixel.x === x && pixel.y === y) {
            x = randomXorY();
            y = randomXorY();
        }
    })

    snakeBody.push(
        {
            x: snakeBody[snakeBody.length - 1].x,
            y: snakeBody[snakeBody.length - 1].y
        }
    )
    snakeCopy = JSON.parse(JSON.stringify(snakeBody));
}