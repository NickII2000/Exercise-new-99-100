'use strict';

// Ex. 99

const person = {
    name: 'Alex',
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    },
};

console.log(person.userAge);
console.log(person.userAge = 52);
console.log(person.userAge);

// Ex. 100

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Petrychenko';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }

}

const ivan = new User('Ivan', 27);
ivan.say();
console.log(ivan.surname);
console.log(ivan.surname = 'Ivanovich');
ivan.say();


// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function () {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//     };

//     this.getAge = function () {
//         return userAge;
//     };

//     this.setAge = function (age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
//     };

// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());
// ivan.say();

// ivan.setAge(52);
// ivan.setAge(300);
// ivan.name = 'Nick';
// ivan.say();


// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     say() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${this._age}`);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
//     }
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan._age);
// ivan._age = 99;
// console.log(ivan._age);
// ivan.say();

// Ex. 101

const number = 1;

(function () {
    const number = 2;
    console.log(number);
    console.log(number + 3);
})();

console.log(number);

const user = (function () {
    const privat = function () {
        console.log('I am privat');
    };

    return {
        sayHello: privat
    };
})();

user.sayHello();