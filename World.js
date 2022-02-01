/** @type {CanvasRenderingContext2D} */

export default class World {
    constructor(canvas) {
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;
        this.tileWidth = 30;
        this.tileHeight = 30; 
        this.x = 0;
        this.y = this.gameHeigth - this.tileHeight;
        this.grid = [];
    }

    draw(context) {
        context.fillStyle = 'white'
        for (this.y = 0; this.y < this.gameHeight; this.y += this.tileHeight) {
            for (this.x = 0; this.x < this.gameWidth; this.x += this.tileWidth) {
                console.log(this.y)
                if (this.y === this.gameHeight - this.tileHeight) {
                    context.fillStyle = 'green';
                }else {
                    context.fillStyle = 'blue'
                }
                context.fillRect(this.x, this.y, this.tileWidth, this.tileHeight)
            }
        }
    }

    getTileHeight() {
        return this.tileHeight;
    }
}