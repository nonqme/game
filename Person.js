import GameObject from "./GameObject.js";

export default class Person extends GameObject {
    constructor(config) {

        super(config);

        this.speed = config.speed || 10;

    }
    
    update() {
        console.log(this)
    }
}