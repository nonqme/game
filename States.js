export default class StateHandler {
    constructor() {
        this.input = '';
        this._state = '';
    };
    setState(input, person) {
        person.x += person.speed

        if (input.keys.indexOf('ArrowRight') > -1 ) {

            person.speed = 0.6;
            person.lastDirection = 'right';
            person.currentState = 'run-right';

        }else if (input.keys.indexOf('ArrowLeft') > -1 ) {

            person.speed = -0.6;
            person.lastDirection = 'left';
            person.currentState = 'run-left';

        } else {
            person.animationSpeed = 12;
            person.speed = 0;
            if (person.lastDirection === 'right') person.currentState = 'idle-right';
            if (person.lastDirection === 'left') person.currentState = 'idle-left';

        }
    }
}