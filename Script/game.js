/** @type {HTMLCanvasElement} */


class Game {
    constructor(ctx, width, height, player) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.intervalId = null;
      this.frames = 0;
      this.enemies = [];
      this.score = 0;
      this.backgroundImage = new Image();
    }
 
    start() {
      this.intervalId = setInterval(this.update, 1000 / 60);
    }
}