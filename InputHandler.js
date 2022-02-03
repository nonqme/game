export default class InputHandler {
    constructor() {

        this.direction = "";

    }

    getDirection() {
        return this.direction;
    }

    init() {
        window.addEventListener('keydown', (e) => {
            switch(e.key){
                case "ArrowLeft":
                    this.direction = "left";
                    break;
                case "ArrowRight":
                    this.direction = "right";
                    break;
            }
        });
        window.addEventListener('keyup', (e) => {
            switch(e.key){
                case "ArrowLeft":
                    this.direction = "idle";
                    break;
                case "ArrowRight":
                    this.direction = "idle";
                    break;
            }
        });
    }
}