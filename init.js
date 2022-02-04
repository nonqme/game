import Canvas from "./Canvas.js";
import { canvasConfig, gameObjectConfig } from "./config.js";
import GameObject from "./GameObject.js";
import InputHandler from "./InputHandler.js";


const canvas = new Canvas( canvasConfig );
const gameObject = new GameObject( gameObjectConfig );
const input = new InputHandler();



canvas.init();

const step = () => {

    gameObject.sprite.draw(canvas.context);

    requestAnimationFrame(() => {
        step();
    });
};
//step();
