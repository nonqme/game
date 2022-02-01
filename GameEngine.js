/** @type {CanvasRenderingContext2D} */

import Entity from "./Entity.js";
import World from "./World.js";


export default class GameEngine {
    constructor(canvas) {;
        this.canvas = canvas.element;
        this.width = canvas.width;
        this.height = canvas.height;
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    init() {
        this.context.imageSmoothingEnabled = false;
        let world = new World({ width: this.width, height: this.height});
        let entity = new Entity({ width: this.width, height: this.height, tileHeight: world.getTileHeight()});
        world.draw(this.context);
        entity.draw(this.context);
    }
}



