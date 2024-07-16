//complete this code
class Rectangle {
	 constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Method to calculate the area
    getArea() {
        return this._width * this._height;
    }
}

class Square extends Animal {
	constructor(side) {
        super(side, side); // Call the constructor of Rectangle with side for both width and height
    }

    // Method to calculate the perimeter
    getPerimeter() {
        return 4 * this._width; // Since width and height are the same for a square, we can use this._width or this._height
    }
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter());
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
