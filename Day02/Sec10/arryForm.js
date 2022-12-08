function arrFormArg() {
  let results = [];
  for (let i = 0; i < arguments.length; i++) {
    results.push(arguments[i]);
  }

  return results;
}

const result = arrFormArg("One", "Two", "Three");
console.log(result);

function addOne() {
  return Array.from(arguments, (x) => x + 1);
}
console.log(addOne(1, 2, 3));
