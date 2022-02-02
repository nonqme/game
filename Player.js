export default class Player {
    constructor(canvas) {
        this.states = [];
        this.currentState = this.states[0];
        this.gameHeight = canvas.height;
        this.gameWidth = canvas.width;
        this.tileHeight = canvas.tileHeight;
        this.sourceX = 108;
        this.sourceY = 67;
        this.width = 57;
        this.height = 100;
        this.x = this.gameWidth/2 - this.width/2;
        this.y = this.gameHeight - this.height - this.tileHeight;
        this.image = document.getElementById('playerIdle');
        this.frameX = 250 * 0;
        
    }

    draw(context) {
        context.drawImage(this.image, this.sourceX +  this.frameX , this.sourceY, this.width, this.height,this.x, this.y, this.width, this.height);
    }
}