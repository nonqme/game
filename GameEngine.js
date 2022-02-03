import { maps } from "./maps.js";
import World from "./World.js";
import InputHandler from "./InputHandler.js";


export default class GameEngine {
    constructor(config) {;
        this.canvas = config.element;
        this.context = this.canvas.getContext('2d');
        this.canvas.width = config.width;
        this.canvas.height = config.height;
        this.map = null;
    }

    startGameLoop() {
        const step = () => {

            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

            this.map.drawBackgroundImage(this.context);
            
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.input.getDirection(),
                    action: this.input.getState(),
                });
                object.sprite.draw(this.context);
            })


            requestAnimationFrame(() => {
                step();
            });
        };
        step();
    }

    init() {
        this.context.imageSmoothingEnabled = false;
        this.map = new World(maps.DevRoom);
        this.input = new InputHandler();
        this.input.init();
        this.startGameLoop();


    }
}



