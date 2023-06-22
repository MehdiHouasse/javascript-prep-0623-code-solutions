const person = {
  firstName: 'Mehdi',
  lastName: ' Houasse',
  hobby: 'Soccer',
};
console.log(person);
const fulltName = person.firstName + person.lastName;
console.log(fulltName);
person.job = 'Software Engineer';
console.log(person.job);
person['previousJob'] = 'Technician';
console.log(person['previousJob']);
console.log(person);
