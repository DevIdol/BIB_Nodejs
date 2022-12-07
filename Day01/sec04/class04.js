class Animal {
  constructor(legs) {
      this.legs = legs;
  }
  walk() {
      console.log(`Dog can run with ${this.legs}`);
  }
}

class Bird extends Animal {
  constructor(legs) {
      super(legs);
  }
  fly() {
      console.log('Bird Can flying');
  }
}


let bird = new Bird(4);

bird.walk();
bird.fly();

class Person {
  constructor(name) {
      this.name = name;
      console.log(new.target.name);
  }
}

class Employee extends Person {
  constructor(name, title) {
      super(name);
      this.title = title;
  }
}

let john = new Person('John Doe');
console.log(john)
let lily = new Employee('Lily Bush', 'Programmer');
console.log(lily)