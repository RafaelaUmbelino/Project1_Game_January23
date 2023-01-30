/** @type {HTMLCanvasElement} */


class Game {
    constructor(ctx, width, height, player) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.intervalId = null;
      this.intervalIdTimer = null;
      this.frames = 0;
      this.enemiesLeft = [];
      this.enemiesRight = [];
      this.cone = [];
      this.score = 0;
      this.time = 60;
      this.backgroundImage = new Image();
    }

    start() {
      this.intervalId = setInterval(this.update, 1000 / 60);
      
    }
    update = () => {
      //Game logic here
      this.frames++;
      this.clear();
      this.updateEnemies();
      this.player.newPos(); // Step 30
      this.player.draw();
      this.timer();
      this.updateScore();
      this.checkWin()
      this.checkGameOver();
     
      
  };

  stop(){
      clearInterval(this.intervalId); // for the Game Over.
  }

  clear(){
    this.backgroundImage.onload
    this.backgroundImage.src = "../docs/assets/Highway 3.png";
     this.ctx.drawImage(this.backgroundImage, 0, 0, this.width, this.height);

    //this.ctx.clearRect(0, 0, this.width, this.height);
    //this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  updateScore() {
    if (this.frames % 10 === 0) {
      this.score++;
    }
    ctx.font = "30px Helvetica";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${this.score}`, 80, 30);
  }
 
timer(){
  if (this.frames % 50 === 0) {
    this.time --
  }
 
ctx.font = "32px Helvetica";
ctx.fillStyle = "black";
ctx.fillText(`Timer ${this.time}`, 400, 30);
}

checkWin(){
  if(this.time <= 0){
    this.stop()

  }
}


  updateEnemies(){
      for(let i = 0; i < this.enemiesLeft.length; i++ ){
          this.enemiesLeft[i].x += 1;
          this.enemiesLeft[i].draw();

      }
      //the if statement is to create the enemies
      //which we only want to do every 120 frames(2 seconds)
    for(let i = 0; i < this.enemiesRight.length; i++ ){
        this.enemiesRight[i].x -= 1;
        this.enemiesRight[i].draw();

    }

    for(let i = 0; i < this.enemiesRight.length; i++ ){
        this.cone[i].y += 1;
        this.cone[i].draw();
    
     
  }
     let randomY = Math.floor(Math.random() * 350 - 30) + 30;
     let randomY2 = Math.floor(Math.random() * 700 - 350) + 350;
     let randomX = Math.floor(Math.random() * 700 - 350) + 350;
     
      if(this.frames % 120 === 0){
          this.enemiesLeft.push(new Enemy(0, randomY, 40, 60, "orange", this.ctx));
          this.enemiesRight.push(new Enemy(650, randomY2, 40, 60, "blue", this.ctx)); //x, y, w, h, color, ctx, Image)
          this.cone.push(new Cone(randomX, 50, 30, 30, "blue", this.ctx)); //x, y, w, h, color, ctx, Image)
      
  }
}

  
  checkGameOver() {
    const crashedL = this.enemiesLeft.some((enemy) => {
      return this.player.crashWith(enemy);
    });
    const crashedR = this.enemiesRight.some((enemy) => {
      return this.player.crashWith(enemy);
    });

    if (crashedR || crashedL) {
      this.stop();
      ctx.fillStyle = "black";
      ctx.fillRect(50, 200, 400, 250);
      ctx.font = "32px Helvetica";
      ctx.fillStyle = "red";
      ctx.fillText(`GAME OVER`, 150, 300);
      ctx.fillStyle = "white";
      ctx.fillText(`Your final score`, 135, 350);
      ctx.fillText(`${this.score}`, 230, 400);
    }
  }

  /*youWon(){
    ctx.fillStyle = "black";
    ctx.fillRect(50, 200, 400, 250);
    ctx.font = "32px Helvetica";
    ctx.fillStyle = "red";
    ctx.fillText(`YOU'RE ON TIME!`, 150, 300);
    ctx.fillStyle = "white";
    ctx.fillText(`Your final score`, 135, 350);
    ctx.fillText(`${this.score}`, 230, 400);
    this.stop();

  }*/
}
