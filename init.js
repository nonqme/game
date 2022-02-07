import Canvas from "./Canvas.js";
import { canvasConfig, personConfig } from "./config.js";
import Person from "./Person.js";
import InputHandler from "./InputHandler.js";
import StateHandler from "./States.js";


const canvas = new Canvas( canvasConfig );
const gameObject = new Person( personConfig );
const input = new InputHandler();
const state = new StateHandler(input);



canvas.init();


const step = () => {
    canvas.context.clearRect(0,0, canvas.width, canvas.height)
    state.setState(input, gameObject);
    gameObject.sprite.draw(canvas.context);
    gameObject.update();

    requestAnimationFrame(() => {
        step();
    });
};
step();
