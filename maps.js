import GameObject from "./GameObject.js";

export const maps = {
    DevRoom: {
        backgroundSrc: "/assets/Background/cyberpunk-street.png",
        gameObjects: {
            player: new GameObject({
                x: 0,
                y: 4.8,
            })
        }
    },
}