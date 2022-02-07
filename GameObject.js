import Sprite from "./Sprite.js";


export default class GameObject {
    constructor(config) {

        this.x = config.x || 0;
        this.y = config.y || 0;

        this.width = config.width || 64;
        this.height = config.height || 64;

        this.lastDirection = '',

        this.currentState = config.currentState || 'idle-right';

        this.scale = config.scale || 1;
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "/assets/Sprites/hobbit.png",
            animations: config.animations,
            currentAnimation: this.currentState,
        });
    }

    update() {
        this.updateSprite()
    }

    updateSprite() {
        this.sprite.setAnimation(this.currentState)
    }

    updatePosition() {
        
    }
}