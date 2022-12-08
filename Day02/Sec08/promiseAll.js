const num1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first Promise is resolved.");
    resolve(10);
  }, 1000);
});

const num2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second Promise is resolved.");
    resolve(20);
  }, 1000);
});

Promise.all([num1, num2]).then((results) => {
  const sum = results.reduce((a, b) => a + b);

  console.log(`The Result is ${results}`);
  console.log(`The total sum is ${sum}`);
});
