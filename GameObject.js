import Sprite from "./Sprite.js";

export default class GameObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "right";

        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "/assets/Sprites/hobbit.png",

        });
    };
    
    update() {
        
    }
};