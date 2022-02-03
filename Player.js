import GameObject from "./GameObject.js"

export default class Player extends GameObject {
    constructor(config) {
        super(config);

        this.directionUpdate = {
            "right": ['x', 1],
            "left": ['x', -1],
            "idle": ['x', 0],
        };
    }

    update(state) {
        this.updatePosition();

        if (state.arrow) {
            this.direction = state.arrow;
        }
    }

    updatePosition() {
        const [property, change] = this.directionUpdate[this.direction];

        this[property] += change;
    }
}