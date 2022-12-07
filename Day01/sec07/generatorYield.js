function* generator(){
  yield 1;
  yield 2;
  yield 6;
}

const gen = generator();

console.log(gen.next().value)//1
console.log(gen.next().value)//2
console.log(gen.next().value)//6
console.log(gen.next().value)//undefined

function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}
const gen02 = infinite(); // "Generator { }"

console.log(gen02.next().value); // 0
console.log(gen02.next().value); // 1
console.log(gen02.next().value); // 2
