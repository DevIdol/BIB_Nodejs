const x = 20;
x = 40; //TypeError: Assignment to constant variable.

if( x == 20){
  const x = 40;
  console.log("Inside block x =>", x)
  const y = x;
  console.log("Inside Block y =>", y)
}

console.log("Inside Block y =>", y) //ReferenceError: y is not defined
console.log("Outside x =>", x)