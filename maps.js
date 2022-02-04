import GameObject from "./GameObject.js";
import Player from "./Player.js";
import { utils } from "./utils.js";

export const maps = {
    DevRoom: {
        backgroundSrc: "/assets/Background/cyberpunk-street.png",
        gameObjects: {
            player: new Player({
                x: utils.grid(0),
                y: utils.grid(7),
            }),
            ennemi: new GameObject({
                x: utils.grid(5),
                y: utils.grid(7),
                direction: 'left',
            }),
        }
    },
}