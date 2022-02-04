import GameObject from "./GameObject.js"

export default class Player extends GameObject {
    constructor(config) {
        super(config);

        this.state = "idle"

        this.directionUpdate = {
            "right": ['x', 1],
            "left": ['x', -1],
        };
    }

    update(state) {
        this.updatePosition();
        this.updateSprite(state)

        if (state.arrow) {
            this.direction = state.arrow;
            this.state = state.action;
        }
    }

    updatePosition() {
        if (this.state === "run") {
            const [property, change] = this.directionUpdate[this.direction];
    
            this[property] += change;
        }
    }

    updateSprite(state) {
        this.sprite.setAnimation(this.state+"-"+this.direction)
    }

}