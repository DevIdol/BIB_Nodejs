const num = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 2 * 100);
});

num
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 2 * 1000);
    });
  })
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 3), 2 * 1000);
    });
  })
  .then((result) => console.log(result));
