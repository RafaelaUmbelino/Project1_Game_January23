/** @type {HTMLCanvasElement} */

class Component{
  constructor(x, y, w, h, ctx){ //Why doesn't it work without color?
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.ctx = ctx;
  this.speedX = 0;
  this.speedY = 0;
  this.img = new Image();
  this.img.src = "../docs/assets/Player.png"
  
  
  }

  draw(){
    /* this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);  */ //draws rectangle wherever we want, we update the values while square moves.
    this.ctx.drawImage (this.img, this.x, this.y, this.w, this.h)
  }

  newPos(){
      this.x += this.speedX;
      this.y += this.speedY;
  }

  top(){
      return this.y;
  }

  bottom(){
      return this.y + this.h; //for the bottom, it's y plus the whole square.
  }

  left(){
      return this.x;
  }
  
  right(){
      return this.x + this.w; 
  }

  crashWith(enemy){ // if we colide with any of the enemies sides it returns false
      return !(
          this.bottom() < enemy.top() || 
          this.top() > enemy.bottom() ||
          this.right() < enemy.left() ||
          this.left() > enemy.right()
      );
  }
}
