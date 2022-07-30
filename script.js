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
}

const ivan = new User('Ivan', 27);



function User(name, age) {
    this.name = name;
    this.age = age;

    this.say = function () {
        console.log(`Имя пользователя: ${this.name}, возраст ${this.age}`);
    }

}

const ivan = new User('Ivan', 27);
console.log(ivan.name);
console.log(ivan.age);
ivan.say();

ivan.age = 52;
ivan.name = 'Nick';
ivan.say();