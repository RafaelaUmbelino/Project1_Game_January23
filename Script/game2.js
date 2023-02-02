/** @type {HTMLCanvasElement} */


class Game2 {
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
      this.coin = [];
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
      this.updateCoin();
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
    this.backgroundImage.src = "docs/assets/backgroundCanvas.png";
     this.ctx.drawImage(this.backgroundImage, 0, 0, this.width, this.height);

    //this.ctx.clearRect(0, 0, this.width, this.height);
    //this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  updateScore() {
    if (this.frames % 30 === 0) {
      this.score++;
    }
    ctx.font = "30px Helvetica";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${this.score}`, 80, 30);
    const crashedCoin = this.coin.some((coin) => {
      return this.player.crashWith(coin);
    });
    if (crashedCoin){
      for(let i=0; i<this.coin.length; i++){
        this.coin.splice(i, 1);

      }
      
      this.score += 5;

    }
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
    this.youWon()

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

    for(let i = 0; i < this.cone.length; i++ ){
        this.cone[i].y += 1;
        this.cone[i].draw();
    
     
  }
     let randomY = Math.floor(Math.random() * 300 - 25) + 25;
     let randomY2 = Math.floor(Math.random() * 600 - 300) + 300;
     let randomX = Math.floor(Math.random() * 600 - 300) + 300;
     
      if(this.frames % 120 === 0){
          this.enemiesLeft.push(new Enemy2(0, randomY, 40, 60, "orange", this.ctx));
          this.enemiesRight.push(new Enemy2(650, randomY2, 40, 60, "blue", this.ctx)); //x, y, w, h, color, ctx, Image)
          this.cone.push(new Cone2(randomX, 50, 40, 40, "blue", this.ctx)); //x, y, w, h, color, ctx, Image)
      
  }
}
 updateCoin(){
  
  for(let i = 0; i < this.coin.length; i++ ){
    this.coin[i].y += 1;
    this.coin[i].draw();
}

  let randomX = Math.floor(Math.random() * 600 - 250) + 250;

  if(this.frames % 120 === 0){
  this.coin.push(new Coin(randomX, 50, 40, 40, "blue", this.ctx));

 }
}


  
  checkGameOver() {
    const crashedL = this.enemiesLeft.some((enemy) => {
      return this.player.crashWith(enemy);
    });
    const crashedR = this.enemiesRight.some((enemy) => {
      return this.player.crashWith(enemy);
    });

    const crashedC = this.cone.some((cone) => {
      return this.player.crashWith(cone);
    });

    if (crashedR || crashedL || crashedC) {
      this.stop()
      ctx.beginPath();
    
      ctx.roundRect(175, 150, 350, 300, [40]);
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      ctx.strokeStyle ="rgb(0,0,0)";
      ctx.fill();
      //ctx.fillRect(175, 150, 350 , 300);
      ctx.fillStyle = "#0f0085";
      ctx.fillText(`GAME OVER!`, 250, 230);
      ctx.fillStyle = "#0f0085";
      ctx.fillText(`Your final score:`, 240, 300);
      ctx.fillText(`${this.score}`, 330, 350);
      showButton();
     
    }
  }

  youWon(){
    ctx.beginPath();
    
    ctx.roundRect(175, 150, 350, 300, [40]);
    ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
    ctx.strokeStyle ="rgb(0,0,0)";
    ctx.fill();
    //ctx.fillRect(175, 150, 350 , 300);
    ctx.fillStyle = "#0f0085";
    ctx.fillText(`YOU'RE ON TIME!`, 220, 230);
    ctx.fillStyle = "#0f0085";
    ctx.fillText(`Your final score:`, 240, 300);
    ctx.fillText(`${this.score}`, 330, 350);
    this.stop();
    showButton();

  }
}
