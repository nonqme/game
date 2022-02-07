export const canvasConfig = { 
    element: document.getElementById('canvas1'),
    width: 480,
    height: 270,
};

export const gameObjectConfig = {
    x: 30,
    y: 0,
    width: 64,
    height: 64,
    src: "/assets/Sprites/hobbit.png",
    scale: 1,
    animations: {
        "idle-right": [
            [0,0],[1,0],[2,0],[3,0]
        ],
        "idle-left": [
            [0,1],[1,1],[2,1],[3,1]
        ],
        "run-right": [
            [0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2]
        ],
        "run-left": [
            [0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3]
        ],
        "stop-right": [
            [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4]
        ],
        "stop-left": [
            [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5]
        ],
    },
    currentState: 'idle-left',
};

export const personConfig = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    src: "/assets/Sprites/hobbit.png",
    scale: 1,
    animations: {
        "idle-right": [
            [0,0],[1,0],[2,0],[3,0]
        ],
        "idle-left": [
            [0,1],[1,1],[2,1],[3,1]
        ],
        "run-right": [
            [0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2]
        ],
        "run-left": [
            [0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3]
        ],
        "stop-right": [
            [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4]
        ],
        "stop-left": [
            [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5]
        ],
    },
    currentState: 'idle-right',
    speed: 0.5,
}
