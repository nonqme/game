import GameObject from "./GameObject.js";

export default class Person extends GameObject {
    constructor(config) {

        super(config);

        this.speed = 0;
        this.lastDirection = '';

    }
    
    update() {
        this.updateSprite()
    }

    updateSprite() {
        this.sprite.setAnimation(this.currentState)
    }

    updatePosition() {
        this.x += this.speed;
    }
}