import GameObject from "./GameObject.js";
import Person from "./Person.js";
import { personConfig, gameObjectConfig } from "./config.js"

export const maps = {
    DevRoom: {
        backgroundSrc: "/assets/Background/cyberpunk-street.png",
        gameObjects: {
            player: new Person( personConfig ),
            ennemi: new GameObject( gameObjectConfig),
        }
    },
}