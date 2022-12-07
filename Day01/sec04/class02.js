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
console.log(square.area);

class Person {
  static personName = "Joe Thang";
  static personAge = "23";
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  static personInfo(gender) {
    let name = gender == "male" ? "Joseph" : "Maria";
    return new Person(name);
  }
}

console.log(Person.personName, Person.personAge)

let getInfo = Person.personInfo("femal")
console.log(getInfo.getName())
