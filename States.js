export const states = {
    STANDING_RIGHT: 0,
    STANDING_LEFT: 1,
};

class State {
    constructor(state) {
        this.state = state;
    }
};

class StandingRight extends State {
    constructor(gameObject) {
        super('STANDING RIGHT');
        this.gameObject = gameObject;
    };

    enter() {

    };
    handleInput(input) {

    };
}

class StandingLeft extends State {
    constructor(gameObject) {
        super('STANDING LEFT');
        this.gameObject = gameObject;
    };

    enter() {

    };
    handleInput() {

    };
}