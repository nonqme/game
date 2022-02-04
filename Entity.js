export default class Entity {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
    }
    update() {
        console.log(this)
    }
};