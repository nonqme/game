export default class Sprite {
    constructor(config) {

        this.gameObject = config.gameObject;


        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        };

        this.animations = config.animations || {
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
            ]
        };
        this.currentAnimation = config.currentAnimation;
        this.currentAnimationFrame = 0;
        this.animationFrameLimit = config.animationFrameLimit || 7;
        this.animationFrameProgress = this.animationFrameLimit;        
    };

    get frame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    draw(context) {
        let x = this.gameObject.x;
        let y = this.gameObject.y;
        
        const [frameX, frameY] = this.frame;

        this.isLoaded && context.drawImage(this.image, this.gameObject.width * frameX, this.gameObject.height * frameY, this.gameObject.width, this.gameObject.height, x, y, this.gameObject.width * this.gameObject.scale , this.gameObject.height * this.gameObject.scale);
        this.updateAnimation();
    };

    setAnimation(state) {
        if (this.currentAnimation !== state) {
            this.currentAnimation = state;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimation() {
        if (this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }

        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        if (this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }
    }
}