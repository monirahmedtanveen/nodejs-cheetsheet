// const newName = 'Arya Stark';
// let newAge = 24;
// const hasHobbies = true;

// newAge = 30;

// // newName = 'Maisie Williams';

// let summerizeUserArrowFunc = (userName, userAge, userHasHobbies) => {
//     return ('Name is: ' + userName + ', Age is: ' + newAge + ', user has hobbies : ' + userHasHobbies);
// }

// let sub = (a, b) => {
//     return a - b;
// }

// let add = (a, b) => a + b;

// let addOne = a => a + 1;

// let addRandom = () => 11 + 23;

// function summerizeUser(userName, userAge, userHasHobbies) {
//     return ('Name is: ' + userName + ', Age is: ' + userAge + ', user has hobbies : ' + userHasHobbies);
// }

// console.log(sub(3, 1));
// console.log(add(2, 3));
// console.log(addOne(2));
// console.log(addRandom());
// console.log(summerizeUser(newName, newAge, hasHobbies));
// console.log(summerizeUserArrowFunc(newName, newAge, hasHobbies));

// const person = {
//     name: 'Mac',
//     age: 29,
//     greet() {
//         console.log('Hi I\'m ' + this.name);
//     }
// };

// console.log(person);
// person.greet();

// const hobbies = ['Sports', 'Cookings'];

// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => {
//     return 'Hobby : ' + hobby;
// }));

// hobbies.push('Programming');

// console.log(hobbies);

// const coppiedArray = [hobbies];

// const spreadArray = [...hobbies];

// console.log(coppiedArray);
// console.log(spreadArray);

// const coppiedPerson = {...person};
// console.log(coppiedPerson);

// const toArray = (...args) => {
//     return args;
// };

// console.log(toArray(1,1,4,5));

// // Destructuring
// const printName = ({name, age}) => {
//     console.log('Name : ' + name);
//     console.log('Age : ' + age);
// };

// printName(person)

// const {name, age} = person;

// console.log(name, age);

/** ASYNC CODE & PROMISES */
/* const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
};

setTimeout(() => {
    console.log('Timer is on');
    fetchData(text => {
        console.log(text);
    });
}, 2000); */

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
            let name = 'Monir Ahmed';
            let age = 29;
            console.log(`My name is ${name} and my age is ${age}`);
        }, 1500);
    });

    return promise;
};

setTimeout(() => {
    console.log("Timer is On");
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);

console.log('Heloo');
console.log('Hi');