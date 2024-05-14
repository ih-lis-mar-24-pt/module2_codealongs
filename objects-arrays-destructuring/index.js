// Object destructuring
const person = {
  firstName: 'Lucia',
  lastName: 'Duarte',
  age: 31
};

// let firstName = person.firstName;
// let lastName = person.lastName;
// let age = person.age;

// console.log(lastName);

// we can pass the object keys on the left and object name on the right
// to assign variables from the object
const { firstName, lastName, age } = person;
console.log(lastName);

const bootcamp = {
  school: 'ironhack',
  course: 'web dev',
  location: 'Lisbon',
  stack: {
    module1: 'Basis',
    module2: 'React',
    module3: 'Backend'
  }
};

// we can change the variable name by passing the old name first and then the new
// separated by : <oldName> : <newName>
const { school, course, location: city } = bootcamp;
console.log('city:', city);
// console.log('location:', location);

// works with nested objects
// will only give me the variables on the
// right side of the :
const {
  stack: { module1, module2: reactModule, module3 }
} = bootcamp;
// console.log(stack);
// console.log(module2);

const cuteAnimals = ['puppies', 'kittens', 'bunnies'];

const [firstCuteAnimal, , thirdCuteAnimal] = cuteAnimals;

console.log(firstCuteAnimal);
console.log(thirdCuteAnimal);

const notSoCuteAnimals = ['snakes', 'spiders', 'lizards'];

// using the spread operator to combine both arrays into one
const allTheAnimals = [...cuteAnimals, ...notSoCuteAnimals];
console.log(allTheAnimals);

cuteAnimals.push('little bird');
console.log(cuteAnimals);
console.log(allTheAnimals);
