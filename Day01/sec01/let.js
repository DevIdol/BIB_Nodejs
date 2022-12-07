let x = 10;

if (x === 10) {
  let x = 20;
  let y = 40;
  y = x;
  console.log("inside block y=>", y);
}
console.log(y); //ReferenceError: y is not defined
console.log("x=>", x);
