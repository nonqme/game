import Player from "./Player.js";
import { utils } from "./utils.js";

export const maps = {
    DevRoom: {
        backgroundSrc: "/assets/Background/cyberpunk-street.png",
        gameObjects: {
            player: new Player({
                x: utils.grid(0),
                y: utils.grid(4.5),
            }),
        }
    },
}