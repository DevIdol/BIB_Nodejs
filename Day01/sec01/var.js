var x = 20;

if(x == 20){
  console.log("Globle X =>", x)
   x = 40;
  console.log("Redeclare X =>",x)
  var y = x;
}

console.log("Inside the block y=>",y)