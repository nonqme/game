export default class World {
    constructor(config) {
        this.gameObjects = config.gameObjects
        
        this.backgroundImage = new Image();
        this.backgroundImage.src = config.backgroundSrc;

    }

    drawBackgroundImage(context) {
        let x = 0;
        let y = 0;
        context.drawImage(this.backgroundImage, x , y, this.backgroundImage.width, this.backgroundImage.height);
    };

};