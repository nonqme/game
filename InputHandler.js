export default class InputHandler {
    constructor() {

        this.key = '';

        window.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    this.key = 'Press left';
                    break
                case 'ArrowRight':
                    this.key = 'Press right';
                    break
            }
        });

        window.addEventListener('keyup', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    this.key = 'Release left';
                    break
                case 'ArrowRight':
                    this.key = 'Release right';
                    break
            }
        });

    }
}