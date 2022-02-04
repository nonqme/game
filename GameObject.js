import Entity from "./Entity.js";
import Sprite from "./Sprite.js";

export default class GameObject extends Entity {
    constructor(config) {

        super(config);

        this.width = config.width || 64;
        this.height = config.height || 64;

        this.scale = config.scale || 1;

        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "/assets/Sprites/hobbit.png",
        });

        this.direction = config.direction || "right";

        this.state = config.state || "idle";

    }

    update() {
    }
}