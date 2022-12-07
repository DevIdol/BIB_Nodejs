class Rectangle {
  constructor(width, height) {
    (this.width = width), (this.height = height);
  }
  get area() {
    return this.calArea();
  }

  calArea() {
    return this.width * this.height;
  }
}

let square = new Rectangle(20, 20);
console.log(square.area)