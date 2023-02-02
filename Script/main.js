/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext('2d');

let startButton = document.getElementById("start");
let startButton2 = document.getElementById("player2start");
let restartButton = document.getElementById("restartButton").style.display= 'none';
let paragraph = document.getElementById("or");
let instructions = document.getElementById("collectCoins").style.display= 'none';
let walkInstructions = document.getElementById("walkInstructions").style.display= 'none';

let player;
let game;

let sound = new Audio("docs/Audio/mp3_8bit_ironhack_.mp3");
sound.play();


document.getElementById('audioButton').addEventListener('click', function (evt) {
    if ( sound.muted ) {
      sound.muted = false
      evt.target.innerHTML = 'audioButton'
    }
    else {
      sound.muted = true
      evt.target.innerHTML = 'audioButton'
    }
  })


startButton.onclick = () => {
     player = new Component(600, 500, 50, 60, ctx);  //(x, y, w, h, color, ctx)
     game = new Game(ctx, 700, 600, player)
     startButton = document.getElementById("start").style.display= 'none';
     startButton2 = document.getElementById("player2start").style.display= 'none';
     paragraph = document.getElementById("or").style.display= 'none';
     walkInstructions = document.getElementById("walkInstructions").style.display='block';


    game.start();
}

startButton2.onclick = () => {
     player = new Component2(300, 500, 45, 75, ctx); //(x, y, w, h, color, ctx)
     game = new Game2(ctx, 700, 600, player)
     startButton = document.getElementById("start").style.display= 'none';
     startButton2 = document.getElementById("player2start").style.display= 'none';
     paragraph = document.getElementById("or").style.display= 'none';
     instructions = document.getElementById("collectCoins").style.display='block';



    game.start();
}
function showButton(){

    restartButton = document.getElementById('restartButton').style.display='block';
    startButton = document.getElementById("start").style.display= 'none';
    startButton2 = document.getElementById("player2start").style.display= 'none';
    paragraph = document.getElementById("or").style.display= 'none';
    }






/* function start1() {
    game.start();
    player = player
} 

 function start2() {
  game2.start();
  player = player2
}
 */
/* function start1() {
    
    game.start();
    player = new Component(600, 350, 90, 90, ctx);
} 

function start2() {
   
    game.start();
    player = new Component2(600, 350, 90, 90, ctx);
    
} */

document.addEventListener("keydown", (e) => {
    switch(e.code){
  
        
        case "ArrowUp": 
        if(player.y > 0){
        player.y -= 50
        }
        break;
  
        case "ArrowDown": 
        if(player.y + player.h < 560){
        player.y += 50
        }
        break;

        case "ArrowLeft": 
        if(player.x > 0){
        player.x -= 40
        }
        break;
  
        case "ArrowRight": 
        if(player.x + player.w < 660){
        player.x += 50
        }
        break;

  
  
    }

  })
/* document.addEventListener("keydown", (e) => {
    switch(e.code){
  
        
        case "ArrowUp": 
        if(player2.y > 0){
        player2.y -= 50
        }
        break;
  
        case "ArrowDown": 
        if(player2.y + player2.h < 560){
        player2.y += 50
        }
        break;

        case "ArrowLeft": 
        if(player2.x > 0){
        player2.x -= 40
        }
        break;
  
        case "ArrowRight": 
        if(player2.x + player2.w < 660){
        player2.x += 50
        }
        break;

  
  
    }

  }) */