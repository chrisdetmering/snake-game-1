const gameDOM = document.getElementById('game-space')

function gridGenerate(){
    for(let i = 0; i < 400; i++){
        gameDOM.innerHTML += "<div class='pixel' id=" + (i+1) + "></div>"
    }
}

gridGenerate();
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
