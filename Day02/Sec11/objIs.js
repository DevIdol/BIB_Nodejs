let amount = +0,
  volume = -0;
console.log(volume === amount); //true
console.log(Object.is(amount, volume)); //false

let quantity = NaN;
console.log(quantity === quantity); //false
console.log(Object.is(quantity, quantity)); //true
