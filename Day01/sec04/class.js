class Profile {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

const getProfile = new Profile("Joe", "23");
console.log(getProfile.name, getProfile.age);

let Person = class {
  constructor(username) {
    this.username = username;
  }

  getName() {
    return this.username;
  }
};

const person = new Person("Joseph");
console.log(person.username);
console.log(person.getName());
