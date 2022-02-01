import GameEngine from "./GameEngine.js"

const gameEngine = new GameEngine({ element: document.getElementById('canvas1'), width: 640, height: 360});
gameEngine.init();