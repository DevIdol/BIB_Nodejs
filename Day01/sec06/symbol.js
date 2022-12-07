let task = Symbol("foo") === Symbol("foo");
console.log(task) //False

let studentID = "123";
let citizenID = 123;

let myID = Symbol.for(studentID) === Symbol.for(citizenID);

console.log(myID) //True

let key = Symbol.for(studentID);
let id = Symbol(studentID)
console.log(Symbol.keyFor(key)) //123
console.log(Symbol.keyFor(id)) //undefined
