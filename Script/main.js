/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext('2d');

const startButton = document.getElementById("start-button");

const player = new Component(0, 200, 75, 75, img, ctx)

startButton.onclick = function(){
    const game = new Game(ctx, canvas.width, canvas.height, player)

    game.start();
}