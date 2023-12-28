"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let shapes = [];
let circle = new Circle_1.Circle(5, 10, 20);
let recatangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
shapes.push(circle);
shapes.push(recatangle);
for (let shape of shapes) {
    console.log("Shape Info: " + shape.getInfo());
    console.log("Area: " + shape.calculateArea() + "\n");
}
