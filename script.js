const gameDOM = document.getElementById('game-space')

let score = 0;
let apple; 

gridGenerate();
newGame();
console.log(apple.offsetTop)
//TESTING newApple()
// window.addEventListener('click', function(event){
//     if(event.target.matches('.apple')){
//         return newApple();
//     }
// }
// )


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



function newGame(){
    //start snake at id='174' to id='176'
    apple = document.getElementById("181")
    apple.setAttribute("class", "pixel apple");
    score = 0;
}

function newApple(){
    apple.setAttribute("class", "pixel")
    let number = Math.floor(Math.random()* 361);
    apple = document.getElementById(number);
    apple.setAttribute("class", "pixel apple")
    score +=1 
    document.getElementById('score').innerText = score;
}

function gridGenerate(){
    for(let i = 0; i < 361; i++){
        gameDOM.innerHTML += "<div class='pixel' id=" + (i+1) + "></div>"
    }
}