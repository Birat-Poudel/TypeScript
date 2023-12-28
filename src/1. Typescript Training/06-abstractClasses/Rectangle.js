"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(x, y, _length, _width) {
        super(x, y);
        this._length = _length;
        this._width = _width;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    calculateArea() {
        return (this._length * this._width);
    }
    getInfo() {
        return super.getInfo() + `, length: ${this._length}, width: ${this._width}`;
    }
}
exports.Rectangle = Rectangle;
