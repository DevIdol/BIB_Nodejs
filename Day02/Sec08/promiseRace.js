const num1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first Promise is resolved.");
    resolve(10);
  }, 1000);
});

const num2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second Promise is rejected.");
    reject(20);
  }, 2000);
});

Promise.race([num1, num2])
  .then((result) => console.log(`Resolved: ${result}`))
  .catch((err) => console.log(`Rejected: ${err}`));
