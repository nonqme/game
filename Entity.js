export default class Entity {
    constructor(canvas) {
        this.gameHeight = canvas.height;
        this.width = 32;
        this.heigth = 64;
        this.x = 0;
        this.y = this.gameHeight - this.heigth;
    }

    draw(context) {
        context.fillStyle = 'white';
        context.fillRect(this.x, this.y, this.width, this.heigth)
    }
}