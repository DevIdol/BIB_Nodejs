class Profile {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

const getProfile = new Profile("Joe", "23");
console.log(getProfile.name, getProfile.age);

