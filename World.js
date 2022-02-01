/** @type {CanvasRenderingContext2D} */

export default class World {
    constructor(canvas) {
        this.gameWidth = canvas.width;
        this.gameHeigth = canvas.height;
        this.tileWidth = 32;
        this.tileHeight = 32; 
        this.x = 0;
        this.y = this.gameHeigth - this.tileHeight;
        this.image = document.querySelector('.background')
    }

    draw(context) {
        context.fillStyle = 'green';
        for (this.x = 0; this.x <= this.gameWidth; this.x += this.tileWidth) {
            context.fillRect(this.x, this.y, this.tileWidth, this.tileHeight)
        }
    }

    getTileHeight() {
        return this.tileHeight;
    }
}