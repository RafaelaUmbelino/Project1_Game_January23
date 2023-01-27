/** @type {HTMLCanvasElement} */

class Game{
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null; 
        this.frames = 0; // can be used to increase score, if 60 frames pass it's 1 minute.
        this.enemies = [];

    }

}