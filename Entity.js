export default class Entity {
    constructor(canvas) {
        this.gameHeight = canvas.height;
        this.width = 32;
        this.heigth = 64;
        this.tileHeight = canvas.tileHeight;
        this.x = 0;
        this.y = this.gameHeight - this.heigth - this.tileHeight;
    }

    draw(context) {
        context.fillStyle = 'white';
        context.fillRect(this.x, this.y, this.width, this.heigth)
    }
}