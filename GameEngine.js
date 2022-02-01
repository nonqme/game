/** @type {CanvasRenderingContext2D} */

import Entity from "./Entity.js";


export default class GameEngine {
    constructor(canvas) {;
        this.canvas = canvas.element;
        this.width = canvas.width;
        this.height = canvas.height;
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context.imageSmoothingEnabled = false;
    }

    init() {
        let entity = new Entity({ width: this.width, height: this.height});
        entity.draw(this.context);
    }
}



