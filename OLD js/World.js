import { utils } from "./utils.js";

export default class World {
    constructor(config) {
        this.gameObjects = config.gameObjects
        
        this.backgroundImage = new Image();
        this.backgroundImage.src = config.backgroundSrc;

    }

    drawBackgroundImage(context, camera) {
        console.log(camera.x)
        let x = utils.grid(0) - camera.x;
        let y = utils.grid(4.5) - camera.y;
        context.drawImage(this.backgroundImage, x , y, this.backgroundImage.width * 1.5, this.backgroundImage.height * 1.5);
    };

};