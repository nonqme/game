export default class Sprite {
    constructor(config) {

        this.gameObject = config.gameObject;


        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        };
    };




    draw(context) {

        let x = this.gameObject.x 
        let y = this.gameObject.y 
        context.drawImage(this.image, 0, 0, this.gameObject.width, this.gameObject.height, x, y, this.gameObject.width * this.gameObject.scale , this.gameObject.height * this.gameObject.scale);

    };

}