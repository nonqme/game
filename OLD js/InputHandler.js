export default class InputHandler {
    constructor() {

        this.direction = "";
        this.state = ""

    }

    getDirection() {
        return this.direction;
    }

    getState() {
        return this.state;
    }

    init() {
        window.addEventListener('keydown', (e) => {
            switch(e.key){
                case "ArrowLeft":
                    this.direction = "left";
                    this.state = "run"
                    break;
                case "ArrowRight":
                    this.direction = "right";
                    this.state = "run"
                    break;
            }
        });
        window.addEventListener('keyup', (e) => {
            switch(e.key){
                case "ArrowLeft":
                    this.direction = "left";
                    this.state = "idle"
                    break;
                case "ArrowRight":
                    this.direction = "right";
                    this.state = "idle"
                    break;
            }
        });
    }
}