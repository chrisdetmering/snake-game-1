const gameDOM = document.getElementById('game-space')


gridGenerate();
let target = document.getElementById("181")
target.setAttribute("class", "pixel apple");
// newApple();

//IF GAME OVER
        //SNAKE TOUCHES ITSELF
        //SNAKE TOUCHES THE OUTSIDE BORDER
    //WHEN GAME OVER
        //STOP GAME
        //NOTIFY USER
//IF SNAKE EAT APPLE
    //GROW ONE LENGTH
    //RESPAWN NEW APPLE AT RANDOM LOCATION
//CONTROL SNAKE WITH ARROW KEYS ON KEYBOARD
//SHOW SCORE OF APPLES EATEN


function newApple(){
    target.setAttribute("class", "pixel")
    let number = Math.floor(Math.random()* 361);
    target = document.getElementById(number);
    target.setAttribute("class", "pixel apple")
}

function gridGenerate(){
    for(let i = 0; i < 361; i++){
        gameDOM.innerHTML += "<div class='pixel' id=" + (i+1) + "></div>"
    }
}