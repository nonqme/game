export default class World {
    constructor(config) {
        this.gameObjects = config.gameObjects
        
        this.backgroundImage = new Image();
        this.backgroundImage.src = config.backgroundSrc;

    }

    drawBackgroundImage(context) {
        context.drawImage(this.backgroundImage, 0, 0, this.backgroundImage.width, this.backgroundImage.height);
    };

};