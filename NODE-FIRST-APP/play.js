const name = 'Arya Stark';
let age = 24;
const hasHobbies = true;

age = 30;

// name = 'Maisie Williams';

let summerizeUserArrowFunc = (userName, userAge, userHasHobbies) => {
    return ('Name is: ' + userName + ', Age is: ' + age + ', user has hobbies : ' + userHasHobbies);
}

let sub = (a, b) => {
    return a - b;
}

let add = (a, b) => a + b;

let addOne = a => a + 1;

let addRandom = () => 11 + 23;

function summerizeUser(userName, userAge, userHasHobbies) {
    return ('Name is: ' + userName + ', Age is: ' + age + ', user has hobbies : ' + userHasHobbies);
}

console.log(sub(3, 1));
console.log(add(2, 3));
console.log(addOne(2));
console.log(addRandom());
console.log(summerizeUser(name, age, hasHobbies));
console.log(summerizeUserArrowFunc(name, age, hasHobbies));

const person = {
    name: 'Mac',
    age: 29,
    greet() {
        console.log('Hi I\'m ' + this.name);
    }
};

console.log(person);
person.greet();

const hobbies = ['Sports', 'Cookings'];

for (let hobby of hobbies) {
    console.log(hobby);
}