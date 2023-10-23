var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this._height = height;
        this._width = width;
    }
    Rectangle.prototype.area = function () {
        return this._height * this._width;
    };
    return Rectangle;
}());
var Square = /** @class */ (function () {
    function Square(height) {
        this.height = height;
        this.height = height;
    }
    Square.prototype.area = function () {
        return this.height * this.height;
    };
    return Square;
}());
var ret = new Rectangle(10, 20);
console.log(ret);
console.log(ret.area());
var quad = new Square(10);
console.log(quad);
console.log(quad.area());
