import Canvas from "./Canvas.js";
import { canvasConfig, personConfig } from "./config.js";
import InputHandler from "./InputHandler.js";
import StateHandler from "./States.js";
import World from "./World.js";
import { maps } from "../maps.js";




export default class GameEngine {
    constructor() {;
        this.canvas = new Canvas( canvasConfig );
        this.input = new InputHandler();
        this.state = new StateHandler(this.input);
        this.context = this.canvas.context;
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.map = null;
    }

    startGameLoop() {
        const step = () => {

            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

            this.map.drawBackgroundImage(this.context);

            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.context);
            })
            
            Object.values(this.map.gameObjects).forEach(object => {
                object.update();
                object.updatePosition();
                this.state.setState(this.input, object);
            })

            requestAnimationFrame(() => {
                step();
            });
        };
        step();
    }

    init() {
        this.map = new World(maps.DevRoom);
        this.canvas.init();
        this.startGameLoop();
    }
}



