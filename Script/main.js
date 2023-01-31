/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext('2d');

const startButton = document.getElementById("start-button");

const player = new Component(600, 500, 90, 90, ctx); //(x, y, w, h, color, ctx)

start.onclick = function(){
    const game = new Game(ctx, 700, 800, player)

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
        if(player.y + player.h < 600){
        player.y += 50
        }
        break;

        case "ArrowLeft": 
        if(player.x > 0){
        player.x -= 40
        }
        break;
  
        case "ArrowRight": 
        if(player.x + player.w < 700){
        player.x += 50
        }
        break;

  
  
    }

  })