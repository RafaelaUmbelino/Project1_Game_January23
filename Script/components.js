/** @type {HTMLCanvasElement} */

class Component{
  constructor(x, y, w, h, color, ctx){ //Why doesn't it work without color?
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.color = color;
  this.ctx = ctx;
  this.speedX = 0;
  this.speedY = 0;
  
  
  }

  draw(){
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);  //draws rectangle wherever we want, we update the values while square moves.

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
