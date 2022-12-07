//Computed Property

let myName = "FullName";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get [myName]() {
    return `Full Name: ${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("Joseph", "Thang");
console.log(person.FullName);
