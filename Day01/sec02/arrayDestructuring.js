let arr = [2, 4, 6, 8];

let [a, b, c] = arr;
console.log(a, b, c);

let [x, y, ...others] = arr;
console.log(x, y, others);

let one , two;

[one, two] = [1,2]
console.log(one, two)
