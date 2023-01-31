/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext('2d');

const startButton = document.getElementById("start-button");

const player = new Component(600, 350, 90, 90, ctx); //(x, y, w, h, color, ctx)

start.onclick = function(){
    const game = new Game(ctx, 700, 600, player)

    game.start();
}

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