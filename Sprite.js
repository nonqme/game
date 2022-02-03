export default class Sprite {
    constructor(config) {


        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        };

        this.animations = config.animations || {
            idleRight: [
                [0,0]
            ],
        }
        this.currentAnimation = config.currentAnimaption || "idleRight";
        this.currentAnimationFrame = 0;
        
        this.gameObject = config.gameObject;
    };

    draw(context) {
        const x = this.gameObject.x;
        const y = this.gameObject.y;
        this.isLoaded && context.drawImage(this.image, 0, 0, 64, 64, x, y, 64, 64);
    };

}