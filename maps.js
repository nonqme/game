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
            player2: new Player({
                x: utils.grid(1),
                y: utils.grid(4.5),
            }),
            player3: new Player({
                x: utils.grid(2),
                y: utils.grid(4.5),
            }),
            npc4: new Player({
                x: utils.grid(3),
                y: utils.grid(4.5),
            }),
        }
    },
}