export default class Canvas {
    constructor(config) {
        this._width = config.width || 480;
        this._height = config.height || 270;
        this.canvas = config.element;
        this._context = this.canvas.getContext('2d');
    }
    
    init() {
        this.context.imageSmoothingEnabled = false;
    }
    
    get context() {
        return this._context;
    };

    get height() {
        return this._height;
    };

    get width() {
        return this._width;
    };
}