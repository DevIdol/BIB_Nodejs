let success = true;

const getUsers = () => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve([
        { username: "Joe", email: "joe@gmail.com", gender: "Male" },
        { username: "Maria", email: "maria@gmail.com", gender: "Femal" },
      ]);
    } else {
      reject("Something Wrong!");
    }
  });
};

const onFullFilled = (users) => users.map((user) => console.log(user));
const onRejected = (error) => console.log(error);

const promise = getUsers();

promise.then(onFullFilled, onRejected);
