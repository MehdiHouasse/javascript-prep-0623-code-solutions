// EXERCISE 1
function whileLoop1() {
  const array = [];
  let i = 0;
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}
console.log(whileLoop1());

// EXERCISE 2
function whileLoop2() {
  const array2 = [];
  let i = 0;
  while (i < 20) {
    array2.push(i);
    i += 2;
  }
  return array2;
}
console.log(whileLoop2());

// EXERCISE 3
function forLoop1() {
  const array3 = [];
  for (let i = 0; i < 10; i++) {
    array3.push(i);
  }
  return array3;
}
console.log(forLoop1());

// EXERCISE 4
function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion: ' + i + '!');
  }
}
forLoop2();

// EXERCISE 5
const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
function forInLoop1(obj) {
  const array4 = [];
  for (const prop in obj) {
    array4.push(prop);
  }
  return array4;
}
console.log(forInLoop1(object));

// EXERCISE 6
function forInLoop2(obj) {
  const array5 = [];
  for (const prop in obj) {
    array5.push(obj[prop]);
  }
  return array5;
}
console.log(forInLoop2(object));
