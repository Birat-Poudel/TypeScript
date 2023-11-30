import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let shapes: Shape[] = [];

let circle = new Circle(5, 10, 20);
let recatangle = new Rectangle(0, 0, 3, 7);

shapes.push(circle);
shapes.push(recatangle);

for (let shape of shapes) {
    console.log("Shape Info: " + shape.getInfo());
    console.log("Area: " + shape.calculateArea() + "\n");
}