function arrFormArg() {
  let results = [];
  for (let i = 0; i < arguments.length; i++) {
    results.push(arguments[i]);
  }

  return results;
}

const result = arrFormArg("One", "Two", "Three");
console.log(result);
