/** @type {HTMLCanvasElement} */

class Coin {
    constructor(x, y, w, h, color, ctx){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.ctx = ctx;
    this.speedx = 0;
    this.speedy = 0;
    this.img = new Image ();
    this.img.src ="../docs/assets/gas.png"
    };

    draw(){ // To draw the enemy (rectangle)
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      }
      newPosition(){ // to update the enemies position
          this.x += this.speedx;
          this.y += this.speedy;
      }
      top() {
          return this.y;
        }
        bottom() {
          return this.y + this.h;
        }
        left() {
          return this.x;
        }
        right() {
          return this.x + this.w;
        }
    }
  