export default class InputHandler {
    constructor() {
        this.lastKey = '';
        windows.addEventListener('keydown', (e) => {
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "PRESS left";
            }
        });
        windows.addEventListener('keyup', (e) => {
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "RELEASE left";
            }
        });
    }
}