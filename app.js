function doSomething() {
  console.log("Hello");
  for(let i = 0; i < 5 ; i++){
    console.log("For Body");
    console.log(i);
    return;
  }
  console.log("End of loop")
}
doSomething();
console.log("Program Finish")

