let canvas = document.getElementById('game-space')
let apple = canvas.getContext("2d");
let aX = 240;
let aY = 240;
apple.fillStyle = "#FF0000"
//fillRect(x,y, width, height)
apple.fillRect(aX, aY, 20, 20);

let scoreboard = document.getElementById('score');
let score = 0;

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
    apple.clearRect(aX, aY, 20, 20)
    apple.fillRect(x, y, 20, 20);
    score += 1;
    scoreboard.innerText = score;
    aX = x;
    aY = y;
}
