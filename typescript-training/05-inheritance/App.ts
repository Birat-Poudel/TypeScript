import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let shape = new Shape(10,15);
console.log(shape.getInfo());

let circle = new Circle(5,10,20);
console.log(circle.getInfo());

let rectangle = new Rectangle(1,2,3,4);
console.log(rectangle.getInfo());