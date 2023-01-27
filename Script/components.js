/** @type {HTMLCanvasElement} */

class Component {
    constructor(x, y, w, h, img, ctx) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.img = img;
      this.ctx = ctx;
      this.speedX = 0;
      this.speedY = 0;
 
      this.img = new Image();
      this.img.src = "/docs/assets/Player.png";
    }
 
    draw() {
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
 
}