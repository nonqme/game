export default class Canvas {
    constructor(config) {
        this.width = config.width || 480;
        this.height = config.height || 270;
        this.canvas = config.element;
        this._context = this.canvas.getContext('2d');
    }
    
    init() {
        this.context.imageSmoothingEnabled = false;
    }
    get context() {
        return this._context;
    }
}