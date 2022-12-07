let profile = {
  myName: "Joe",
  myAge: "23",
};

let { myName, myAge, address = "Kalaymyo" } = profile;

console.log(
  `My Name is ${myName}. I'm ${myAge} years old. I currently live in ${address}.`
);

let userInfo = {
  username: "Michael",
  age: "20",
  position: "MERN Stack Developer",
  mail: "user@gmail.com",
};

let { username, age, ...otherInfo } = userInfo;

console.log(username, age, otherInfo);
