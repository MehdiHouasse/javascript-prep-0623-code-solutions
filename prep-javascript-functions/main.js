function addTwoNumbers(num1, num2) {
  const result = num1 + num2;
  return result;
}
console.log('addTwoNumbers:', addTwoNumbers(2, 2));

function convertHoursToMinutes(hours) {
  const result = hours * 60;
  return result;
}
console.log('convertHoursToMinutes:', convertHoursToMinutes(2));

function getGreeting(name) {
  const result = 'Hello ' + name;
  return result;
}
console.log('getGreeting:', getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  const result = (num1 + num2) * 5;
  return result;
}
console.log('addAndMultiplyBy5:', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  const result = (num1 * num2) / 5;
  return result;
}
console.log('multiplyAndDivideBy5:', multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  const result = num1 - num2;
  return result;
}
console.log('subtractTwoNumbers:', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  const result = radius * Math.PI * 2;
  return result;
}
console.log('getCircleCircumference:', getCircleCircumference(5));

function getFullName(firstName, lastName) {
  const result = firstName + ' ' + lastName;
  return result;
}
console.log('getFullName:', getFullName('Mehdi', 'Houasse'));

function cube(number) {
  const result = Math.pow(number, 3);
  return result;
}
console.log('cube:', cube(5));
