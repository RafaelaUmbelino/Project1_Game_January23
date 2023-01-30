/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext('2d');

const startButton = document.getElementById("start-button");

const player = new Component(300, 600, 100, 100, ctx); //(x, y, w, h, color, ctx)

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
        if(player.y + player.h < 700){
        player.y += 50
        }
        break;

        case "ArrowLeft": 
        if(player.x > 0){
        player.x -= 50
        }
        break;
  
        case "ArrowRight": 
        if(player.x + player.w < 700){
        player.x += 50
        }
        break;

  
  
    }

  })
  
/*   document.addEventListener("keyup", () => {
    switch(e.code){


      case "Space":
        player.speedY = 0;

      break;
    


  }
    player.speedX = 0;
    p
   
  
  
  }) */