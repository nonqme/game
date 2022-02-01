import GameEngine from "./GameEngine.js"

const gameEngine = new GameEngine({ element: document.getElementById('canvas1'), width: 480, height: 270});
gameEngine.init();